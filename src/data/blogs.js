// Blog posts data
// To add a new blog, just add a new object to this array

export const blogs = [
  {
    id: 1,
    slug: 'jwt-access-refresh-and-logout',
    title: 'JWT Authentication Explained: Access Tokens, Refresh Tokens, and Logout — A Complete Guide',
    date: '2026-08-01',
    excerpt:
      'Everything about JWT auth in one article — what JWT is, why it exists, access vs refresh tokens, where refresh logic lives, the logout problem, and how to implement it in NestJS.',
    content: `
      <p><em>After reading this blog, you will understand not just <strong>how</strong> JWT auth works, but <strong>why</strong> each piece exists — and you can explain it in an interview.</em></p>

      <h2>What you will learn</h2>
      <ul>
        <li>What JWT actually is (and what it is <em>not</em>)</li>
        <li>Why we use JWT instead of sessions — and when we should not</li>
        <li>Why production apps use <strong>two tokens</strong> (access + refresh)</li>
        <li>Where refresh logic lives — backend vs frontend (this confuses everyone)</li>
        <li>The logout problem and how real systems solve it</li>
        <li>How to implement the full flow in NestJS</li>
      </ul>
      <p>This is based on a NestJS lab I built with MongoDB, bcrypt, HttpOnly cookies, refresh rotation, and production-style logout. Theory first, then code.</p>

      <h2>1. The problem: how does a server know who you are?</h2>
      <p>HTTP is stateless. When you call <code>GET /profile</code>, the server has no memory of your last request. Something must prove identity on <strong>every</strong> protected call.</p>
      <p>Two common answers:</p>
      <ul>
        <li><strong>Session auth</strong> — server stores session in DB; client holds opaque session ID in cookie</li>
        <li><strong>JWT auth</strong> — server signs a token containing user claims; client sends that token on every request</li>
      </ul>
      <p>Both solve authentication. JWT is not "better" — it is a different tradeoff. Understanding both is what interviews test.</p>

      <h2>2. Authentication vs Authorization</h2>
      <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
        <tr><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Term</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Question</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Example</th></tr>
        <tr><td style="padding:8px;"><strong>Authentication (AuthN)</strong></td><td style="padding:8px;">Who are you?</td><td style="padding:8px;">Login with email + password → get tokens</td></tr>
        <tr><td style="padding:8px;"><strong>Authorization (AuthZ)</strong></td><td style="padding:8px;">What can you do?</td><td style="padding:8px;">Admin can hit <code>GET /admin/users</code>; regular user gets 403</td></tr>
      </table>
      <p>JWT handles <strong>authentication</strong> — proving identity. Role checks (<code>admin</code> vs <code>user</code>) are authorization, layered on top after the token is verified.</p>

      <h2>3. Session auth recap (the baseline)</h2>
      <p>In my Day 2 Express lab, the flow was simple:</p>
      <pre><code>Login → server creates session row in MongoDB → sets connect.sid cookie
Every request → server looks up session → req.session.userId
Logout → session.destroy() → cookie useless → instant logout</code></pre>
      <p>Sessions are <strong>stateful</strong>. The server always checks the database. Logout is instant because you delete the session row.</p>
      <p>So why did JWT become so popular?</p>

      <h2>4. Why JWT exists</h2>
      <p>JWT (JSON Web Token) lets the server verify identity <strong>without a database lookup on every request</strong>.</p>
      <p>Imagine 10 microservices. With sessions, every service must call a shared session store (Redis/Mongo) on every request. With JWT access tokens, each service verifies the signature locally using a shared secret — no round trip.</p>
      <p><strong>When JWT shines:</strong></p>
      <ul>
        <li>Microservices / API gateways — verify once, trust claims</li>
        <li>Mobile + SPA backends — stateless access verification</li>
        <li>Horizontal scaling — no shared session store required for access verify</li>
      </ul>
      <p><strong>When sessions are simpler:</strong></p>
      <ul>
        <li>Monolith with instant logout requirements</li>
        <li>You need strong revocation on every request without extra infrastructure</li>
        <li>Early MVP where JWT complexity is not worth it</li>
      </ul>
      <p>Production reality: most SPAs use a <strong>hybrid</strong> — stateless JWT access + stateful refresh token in DB. That is exactly what I built.</p>

      <h2>5. What is a JWT? (Not encrypted — signed)</h2>
      <p>A JWT has three dot-separated parts:</p>
      <pre><code>eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0In0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
        ↑ HEADER              ↑ PAYLOAD                    ↑ SIGNATURE</code></pre>
      <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
        <tr><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Part</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Contains</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Encoding</th></tr>
        <tr><td style="padding:8px;"><strong>Header</strong></td><td style="padding:8px;"><code>alg</code> (HS256), <code>typ</code> (JWT)</td><td style="padding:8px;">Base64URL</td></tr>
        <tr><td style="padding:8px;"><strong>Payload</strong></td><td style="padding:8px;">Claims: <code>sub</code>, <code>email</code>, <code>role</code>, <code>exp</code>, <code>iat</code></td><td style="padding:8px;">Base64URL</td></tr>
        <tr><td style="padding:8px;"><strong>Signature</strong></td><td style="padding:8px;">HMAC-SHA256(header + "." + payload, JWT_SECRET)</td><td style="padding:8px;">Base64URL</td></tr>
      </table>
      <p>Paste any JWT into <a href="https://jwt.io" target="_blank" rel="noopener noreferrer">jwt.io</a> — you can read the payload. Anyone can. The signature only proves the server issued it and nobody tampered with it.</p>

      <h3>JWT myths vs reality (interview gold)</h3>
      <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
        <tr><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Myth</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Reality</th></tr>
        <tr><td style="padding:8px;">"JWT is encrypted"</td><td style="padding:8px;"><strong>No.</strong> Base64URL is encoding. Never put secrets in the payload.</td></tr>
        <tr><td style="padding:8px;">"JWT means no database"</td><td style="padding:8px;">Access verify needs no DB. You still need DB for passwords, refresh tokens, logout, and profile data.</td></tr>
        <tr><td style="padding:8px;">"Salt signs the JWT"</td><td style="padding:8px;">Passwords use bcrypt + salt. JWTs use a signing secret (<code>JWT_SECRET</code>).</td></tr>
        <tr><td style="padding:8px;">"JWT auth is fully stateless"</td><td style="padding:8px;">Access is mostly stateless. Refresh, logout, and production revocation reintroduce state.</td></tr>
      </table>

      <h3>My access token payload</h3>
      <pre><code>{
  "sub": "674a1b2c...",     // user id
  "email": "you@example.com",
  "role": "user",
  "jti": "abc123...",       // unique token id — for logout denylist
  "tv": 0,                  // tokenVersion — for logout-all
  "iat": 1710000000,
  "exp": 1710000900         // 15 minutes from login
}</code></pre>

      <h2>6. Session vs JWT — side by side</h2>
      <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
        <tr><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;"></th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Session (Day 2)</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">JWT (Day 3)</th></tr>
        <tr><td style="padding:8px;">Stateful?</td><td style="padding:8px;">Yes — session in MongoDB</td><td style="padding:8px;">Access verify is stateless; refresh is stateful</td></tr>
        <tr><td style="padding:8px;">Client holds</td><td style="padding:8px;">Opaque <code>connect.sid</code> cookie</td><td style="padding:8px;">Access JWT in header + refresh cookie</td></tr>
        <tr><td style="padding:8px;">Identity source</td><td style="padding:8px;">DB session lookup</td><td style="padding:8px;">Decoded JWT payload</td></tr>
        <tr><td style="padding:8px;">DB per protected request</td><td style="padding:8px;">Yes</td><td style="padding:8px;">No for JWT verify; yes for profile/revocation</td></tr>
        <tr><td style="padding:8px;">Logout</td><td style="padding:8px;">Instant — destroy session</td><td style="padding:8px;">Compromise — see Section 10</td></tr>
        <tr><td style="padding:8px;">Scaling</td><td style="padding:8px;">Needs shared session store</td><td style="padding:8px;">Access verify needs only <code>JWT_SECRET</code></td></tr>
      </table>

      <h2>7. Why two tokens? Access + Refresh</h2>
      <p>Auth0, Cognito, Clerk, Firebase — they all use two tokens. Not because JWT is incomplete, but because of a security tradeoff:</p>
      <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
        <tr><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Token</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Lifetime</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Where it lives</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Purpose</th></tr>
        <tr><td style="padding:8px;"><strong>Access</strong></td><td style="padding:8px;">15 min</td><td style="padding:8px;">JSON → client memory → <code>Authorization: Bearer</code></td><td style="padding:8px;">Prove identity on every API call</td></tr>
        <tr><td style="padding:8px;"><strong>Refresh</strong></td><td style="padding:8px;">7 days</td><td style="padding:8px;">HttpOnly cookie</td><td style="padding:8px;">Get new access without re-login</td></tr>
      </table>
      <p><strong>Why not one long-lived JWT?</strong> If it leaks via XSS or logs, an attacker has days of access. Short access limits damage to ~15 minutes. Long refresh stays in HttpOnly cookie — JavaScript cannot read it.</p>
      <p><strong>Important:</strong> Refresh is an opaque random string (<code>randomBytes(32)</code>), NOT a JWT. It is stored as SHA-256 hash in MongoDB — never the raw value.</p>

      <h2>8. What lives where (memorize this)</h2>
      <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
        <tr><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Thing</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Location</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Used when</th></tr>
        <tr><td style="padding:8px;">Access JWT</td><td style="padding:8px;">Client memory → Bearer header</td><td style="padding:8px;">Every protected API call</td></tr>
        <tr><td style="padding:8px;">Refresh token (raw)</td><td style="padding:8px;">HttpOnly cookie</td><td style="padding:8px;">Only <code>POST /auth/refresh</code> and logout</td></tr>
        <tr><td style="padding:8px;">Refresh hash</td><td style="padding:8px;">MongoDB <code>refreshtokens</code></td><td style="padding:8px;">Login, refresh, logout validation</td></tr>
        <tr><td style="padding:8px;">Password hash</td><td style="padding:8px;">MongoDB <code>users</code></td><td style="padding:8px;">Login only</td></tr>
        <tr><td style="padding:8px;">Revoked jti</td><td style="padding:8px;">Redis (or in-memory)</td><td style="padding:8px;">Instant access kill on logout</td></tr>
      </table>
      <p>Login and refresh both return <code>{ accessToken }</code> in JSON. Refresh token is <strong>never</strong> in the JSON body — only in the cookie.</p>

      <h2>9. Complete flow at a glance</h2>
      <pre><code>REGISTER                          LOGIN
────────                          ─────
POST /auth/register               POST /auth/login
  email + password                  email + password
       ↓                                 ↓
  save user in MongoDB              bcrypt.compare ✅
  (no tokens yet)                        ↓
       ↓                            sign access JWT (15 min)
  { id, email }                     payload: sub, email, role, jti, tv
                                         ↓
                                    generate opaque refresh token
                                         ↓
                                    SHA-256(refresh) → save in DB
                                         ↓
                                    JSON: { accessToken }
                                    cookie: refreshToken (HttpOnly)


USE PROTECTED API                 ACCESS TOKEN EXPIRED
─────────────────                 ────────────────────
GET /profile                      GET /profile → 401
Authorization: Bearer                  ↓
       ↓                          POST /auth/refresh (cookie auto-sent)
JwtAuthGuard                           ↓
  verify signature + exp            rotate refresh → new cookie
  jti not denylisted?               new access JWT
  tv matches DB?
       ↓
200 profile


LOGOUT                            LOGOUT ALL DEVICES
──────                            ──────────────────
POST /auth/logout                 POST /auth/logout-all
  + refresh cookie                  + Bearer token
  + Bearer token                         ↓
       ↓                          tokenVersion++ in DB
  delete refresh from DB          delete all refresh tokens
  denylist access jti             clear cookie
  clear cookie
       ↓
access dead immediately
(if Bearer was sent)</code></pre>

      <h2>10. Register — no tokens yet</h2>
      <pre><code>POST /auth/register
  email + password
       ↓
  existsByEmail? → 409 Conflict
       ↓
  bcrypt.hash(password, 10) → save in MongoDB
       ↓
  { id, email }   ← user must login separately</code></pre>
      <p>Register only creates the account. Tokens are issued on login — same pattern as most production apps.</p>

      <h2>11. Login — the most important flow</h2>
      <ol>
        <li>User POSTs email + password to <code>/auth/login</code></li>
        <li>Server loads user, verifies with <code>bcrypt.compare</code></li>
        <li>Sign access JWT (15 min) with <code>sub</code>, <code>email</code>, <code>role</code>, <code>jti</code>, <code>tv</code></li>
        <li>Generate opaque refresh token → SHA-256 hash → save in MongoDB</li>
        <li>Return <strong>two things in two places</strong>:
          <ul>
            <li>JSON body: <code>{ "accessToken": "eyJ..." }</code></li>
            <li>HttpOnly cookie: <code>refreshToken=abc123...</code></li>
          </ul>
        </li>
      </ol>
      <pre><code>// auth.service.ts (simplified)
const accessToken = jwtService.sign({
  sub: userId, email, role,
  jti: randomBytes(16).toString('base64url'),
  tv: user.tokenVersion,
});
await refreshTokensService.save(userId, rawRefreshToken, expiresAt);
res.cookie('refreshToken', rawRefreshToken, { httpOnly: true, path: '/auth/refresh' });
return { accessToken };</code></pre>

      <h2>12. Protected routes — JwtAuthGuard</h2>
      <p>Every protected endpoint uses <code>@UseGuards(JwtAuthGuard)</code>. On <code>GET /profile</code>:</p>
      <ol>
        <li>Extract <code>Authorization: Bearer &lt;token&gt;</code> from header</li>
        <li>Verify signature + expiry with <code>JWT_SECRET</code></li>
        <li>Check <code>jti</code> is not in denylist (logout kill)</li>
        <li>Check <code>tv</code> matches <code>user.tokenVersion</code> in DB (logout-all kill)</li>
        <li>Set <code>req.user</code> → controller runs</li>
      </ol>
      <p>The guard only validates or rejects. It never refreshes tokens — that is not its job.</p>

      <h2>13. When access expires — where does refresh logic live?</h2>
      <p>This is the #1 confusion. Short answer: <strong>frontend</strong>, not backend.</p>
      <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
        <tr><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Layer</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Responsibility</th></tr>
        <tr><td style="padding:8px;"><strong>Backend</strong> (<code>/profile</code>)</td><td style="padding:8px;">Token expired? Return <strong>401</strong>. Nothing else.</td></tr>
        <tr><td style="padding:8px;"><strong>Backend</strong> (<code>/auth/refresh</code>)</td><td style="padding:8px;">Validate refresh cookie → return new accessToken + new refresh cookie</td></tr>
        <tr><td style="padding:8px;"><strong>Frontend</strong> (HTTP interceptor)</td><td style="padding:8px;">See 401 → call <code>/auth/refresh</code> → save new accessToken → retry original request</td></tr>
      </table>
      <pre><code>UI clicks "Load Profile"
    ↓
apiClient.get('/profile')  ← sends Bearer token
    ↓
Backend: 401 (expired)
    ↓
apiClient interceptor (NOT the Profile page):
  POST /auth/refresh  (cookie sent automatically)
  → { accessToken: "new..." }
  → retry GET /profile with new token
    ↓
Backend: 200 profile
    ↓
Profile page renders — user never saw 401</code></pre>
      <p>You do <strong>not</strong> add refresh logic to every endpoint. One shared <code>apiClient</code> or axios interceptor handles it for all routes.</p>

      <h2>14. Refresh endpoint — what the backend returns</h2>
      <p>When frontend calls <code>POST /auth/refresh</code>:</p>
      <ol>
        <li>Browser sends HttpOnly cookie automatically (JS never reads it)</li>
        <li>Server hashes cookie value → finds row in MongoDB</li>
        <li>Rotates refresh (old marked used, new saved + new cookie)</li>
        <li>Returns <strong>new accessToken in JSON</strong> + <strong>new refresh in cookie</strong></li>
      </ol>
      <p>Refresh does NOT return both tokens in JSON. Only accessToken is in the body. Refresh always travels via cookie.</p>
      <p>Expired access ≠ logged out. User only re-enters password when refresh is missing, expired, or revoked.</p>

      <h2>15. The logout problem</h2>
      <p><strong>The interview question:</strong> If JWTs are stateless, how do you logout?</p>
      <p>Honest answer: you cannot logout a JWT like a session. The server never stored the access token. Verification is signature + expiry only.</p>
      <h3>What does NOT work</h3>
      <ul>
        <li><strong>"Delete token on the client"</strong> — attacker who copied the token does not care</li>
        <li><strong>"Short expiry alone"</strong> — stolen token works until it expires (~15 min)</li>
      </ul>
      <h3>What production systems do (my lab implements all three)</h3>
      <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
        <tr><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Mechanism</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">What it kills</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">When</th></tr>
        <tr><td style="padding:8px;">Refresh revocation</td><td style="padding:8px;">Refresh token</td><td style="padding:8px;">Logout — instant</td></tr>
        <tr><td style="padding:8px;">jti denylist (Redis)</td><td style="padding:8px;">Specific access token</td><td style="padding:8px;">Logout with Bearer header — instant</td></tr>
        <tr><td style="padding:8px;">tokenVersion bump</td><td style="padding:8px;">All access tokens for user</td><td style="padding:8px;">Logout-all — next request</td></tr>
      </table>
      <p>Every revocation mechanism reintroduces a little state. That is fine — the tradeoff is explicit.</p>

      <h2>16. Refresh rotation and reuse detection</h2>
      <p>When refresh is used, the old token is marked <code>usedAt</code> and a new one is issued. If someone tries to use the old refresh again (stolen token scenario), the entire token <strong>family</strong> is revoked — all sessions for that login chain die.</p>
      <p>This is the difference between a short compromise and a hidden backdoor that lasts 7 days.</p>

      <h2>17. Why SHA-256 for refresh but bcrypt for passwords?</h2>
      <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
        <tr><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;"></th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Password</th><th style="text-align:left; padding:8px; border-bottom:1px solid #ccc;">Refresh token</th></tr>
        <tr><td style="padding:8px;">Entropy</td><td style="padding:8px;">Low (user-chosen)</td><td style="padding:8px;">High (<code>randomBytes(32)</code>)</td></tr>
        <tr><td style="padding:8px;">Hash</td><td style="padding:8px;">bcrypt + salt (slow, brute-force resistant)</td><td style="padding:8px;">SHA-256 (fast, enables direct DB lookup)</td></tr>
        <tr><td style="padding:8px;">Lookup</td><td style="padding:8px;">Compare against one user row</td><td style="padding:8px;"><code>findOne({ tokenHash })</code> — single query</td></tr>
      </table>

      <h2>18. Common mistakes to avoid</h2>
      <ul>
        <li><strong>Storing access token in localStorage</strong> — XSS can steal it. Memory is safer; HttpOnly cookie is best for refresh only.</li>
        <li><strong>Putting refresh token in JSON response</strong> — exposes long-lived credential to JavaScript.</li>
        <li><strong>Using JWT for refresh without DB storage</strong> — cannot revoke on logout.</li>
        <li><strong>Adding refresh logic inside JwtAuthGuard</strong> — guards validate; interceptors refresh.</li>
        <li><strong>Putting secrets in JWT payload</strong> — payload is readable by anyone.</li>
        <li><strong>Skipping refresh rotation</strong> — stolen refresh works until expiry.</li>
      </ul>

      <h2>19. Interview cheat sheet</h2>
      <p><strong>Walk through login (30 seconds):</strong></p>
      <p><em>"User POSTs to /auth/login. I verify with bcrypt, sign a 15-minute access JWT with sub, email, role, jti, and tv. I store an opaque refresh as SHA-256 hash in MongoDB and set the raw refresh in an HttpOnly cookie. Response body has accessToken only."</em></p>
      <p><strong>Walk through protected route:</strong></p>
      <p><em>"GET /profile uses JwtAuthGuard. Passport extracts Bearer token, verifies signature and expiry, checks jti denylist and tokenVersion. Identity comes from the token — no session DB lookup."</em></p>
      <p><strong>Walk through refresh:</strong></p>
      <p><em>"Frontend gets 401, calls POST /auth/refresh. Browser sends HttpOnly cookie. Server validates hash in MongoDB, rotates refresh, returns new accessToken in JSON and new refresh in cookie. Frontend retries the original request."</em></p>
      <p><strong>Memory hooks:</strong></p>
      <pre><code>Access  = daily key card     (15 min, Bearer header, jti + tv inside)
Refresh = reception ID       (7 days, HttpOnly cookie, rotates each refresh)
Logout  = kill refresh + denylist jti + optional tokenVersion bump
Secret  = signs JWT          (NOT bcrypt salt)</code></pre>

      <h2>What I learned</h2>
      <ul>
        <li>JWT is not magic — it is a signed JSON blob, not encrypted</li>
        <li>"Stateless" auth is a spectrum — access is mostly stateless, refresh and logout are stateful</li>
        <li>Two tokens exist because of XSS and leak windows, not because JWT is incomplete</li>
        <li>Refresh logic belongs on the frontend interceptor, not on every backend route</li>
        <li>Logout is always a compromise unless you add denylist or versioning</li>
        <li>Building both session (Day 2) and JWT (Day 3) labs made the tradeoffs click</li>
      </ul>

      <h2>Tech stack</h2>
      <p>NestJS · <code>@nestjs/jwt</code> · Passport · MongoDB · Redis (optional) · bcrypt · cookie-parser</p>
    `,
    tags: ['JWT', 'Authentication', 'NestJS', 'Security', 'Learning']
  }
];

// Helper function to get blog by slug
export const getBlogBySlug = (slug) => {
  return blogs.find(blog => blog.slug === slug);
};

// Helper function to get all blogs
export const getAllBlogs = () => {
  return blogs.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date, newest first
};
