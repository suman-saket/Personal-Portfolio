// Blog posts data
// To add a new blog, just add a new object to this array

export const blogs = [
  {
    id: 1,
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    date: '2024-01-15',
    excerpt: 'A beginner-friendly guide to React. Learn the fundamentals and build your first component.',
    content: `
      <h2>Introduction</h2>
      <p>React is a powerful JavaScript library for building user interfaces. In this blog post, we'll explore the basics of React and how to get started.</p>
      
      <h2>What is React?</h2>
      <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".</p>
      
      <h2>Getting Started</h2>
      <p>To get started with React, you can use Create React App or Vite. Both are great tools for setting up a new React project.</p>
      
      <h2>Conclusion</h2>
      <p>React is a great choice for building modern web applications. Start with the basics and gradually learn more advanced concepts.</p>
    `,
    tags: ['React', 'JavaScript', 'Web Development']
  },
  {
    id: 2,
    slug: 'understanding-react-hooks',
    title: 'Understanding React Hooks',
    date: '2024-02-20',
    excerpt: 'Deep dive into React Hooks. Learn useState, useEffect, and custom hooks with practical examples.',
    content: `
      <h2>What are Hooks?</h2>
      <p>Hooks are functions that let you "hook into" React state and lifecycle features from function components.</p>
      
      <h2>useState Hook</h2>
      <p>The useState hook allows you to add state to functional components. It returns a stateful value and a function to update it.</p>
      
      <h2>useEffect Hook</h2>
      <p>The useEffect hook lets you perform side effects in function components. It's similar to componentDidMount and componentDidUpdate.</p>
      
      <h2>Custom Hooks</h2>
      <p>You can create custom hooks to extract component logic into reusable functions.</p>
    `,
    tags: ['React', 'Hooks', 'JavaScript']
  },
  {
    id: 3,
    slug: 'css-tips-and-tricks',
    title: 'CSS Tips and Tricks',
    date: '2024-03-10',
    excerpt: 'Useful CSS techniques that will make your styling life easier. From flexbox to grid, learn the modern CSS approaches.',
    content: `
      <h2>Modern CSS Layouts</h2>
      <p>CSS Grid and Flexbox have revolutionized how we create layouts. Learn when to use each.</p>
      
      <h2>CSS Variables</h2>
      <p>CSS custom properties (variables) allow you to store values that can be reused throughout your stylesheet.</p>
      
      <h2>Responsive Design</h2>
      <p>Media queries are essential for creating responsive designs that work on all devices.</p>
    `,
    tags: ['CSS', 'Web Design', 'Frontend']
  },
  {
    id: 4,
    slug: 'event-driven-systems-part-1-why-and-architecture',
    title: 'Event-Driven Systems (Part 1): Why and Architecture',
    date: '2026-06-01',
    excerpt: 'Why event-driven architecture exists, when to use it, and how my user-activity-tracker project is structured with Kafka and NestJS.',
    content: `
      <p><em>Part 1 of 3 — <a href="/blogs/event-driven-systems-part-2-building-the-pipeline">Part 2</a> | <a href="/blogs/event-driven-systems-part-3-run-verify-and-roadmap">Part 3</a></em></p>

      <h2>The newsroom analogy</h2>
      <p>Imagine a newsroom: a reporter publishes a story, and different teams react on their own schedule — analytics, alerts, archiving. The reporter does not wait for every team to finish before moving on. That is event-driven architecture in one sentence.</p>

      <h2>What problem does it solve?</h2>
      <p>In a traditional request/response flow, one HTTP call might save to a database, send an email, update analytics, and only then return a response. If analytics is slow or down, the user waits — or the whole request fails.</p>
      <p>Event-driven systems flip this: the API accepts the event, publishes it to a message broker, and returns immediately. Other services pick up the work asynchronously.</p>
      <ul>
        <li><strong>Tight coupling</strong> — services do not call each other directly</li>
        <li><strong>Slow responses</strong> — the API returns fast; heavy work happens later</li>
        <li><strong>Traffic spikes</strong> — the broker buffers messages; consumers catch up when they can</li>
        <li><strong>New features</strong> — add a new consumer without changing the API</li>
      </ul>

      <h2>When to use it — and when not to</h2>
      <p><strong>Use events when:</strong> you are tracking user activity, sending notifications, building audit logs, or running data pipelines — anything where you can say "something happened" and handle it later.</p>
      <p><strong>Skip events when:</strong></p>
      <ul>
        <li>Simple CRUD with one database and no async needs</li>
        <li>You need an instant answer ("What is my balance right now?")</li>
        <li>Strong consistency is required (e.g. money transfers need transactions, not fire-and-forget alone)</li>
        <li>Early MVP where Kafka adds more ops than value</li>
      </ul>
      <p>Rule of thumb: <em>"Fire and forget — someone else cares later"</em> → events. <em>"I need the result now"</em> → sync.</p>

      <h2>Core terms</h2>
      <ul>
        <li><strong>Producer</strong> — publishes "something happened"</li>
        <li><strong>Consumer</strong> — reacts to that event</li>
        <li><strong>Broker (Kafka)</strong> — stores and delivers messages</li>
        <li><strong>Topic</strong> — a named channel (e.g. <code>user.events</code>)</li>
        <li><strong>Consumer group</strong> — a set of consumers that share work; each group gets every message independently</li>
      </ul>

      <h2>My project architecture</h2>
      <p>I built a <strong>user activity tracker</strong> to learn this pattern hands-on. Here is the full flow:</p>
      <pre><code>Client
  │  POST /add/event
  ▼
EventsController → EventsService → KafkaProducer
                                      │
                                      ▼
                              topic: user.events
                                      │
          ┌───────────────────────────┼───────────────────────────┐
          ▼                           ▼                           ▼
  page-view-processors        click-processors           session-processors
  (log page_view)             (log click)                (persist ALL to MongoDB)
</code></pre>

      <h2>Tech stack</h2>
      <ul>
        <li><strong>NestJS</strong> — HTTP API and consumer lifecycle</li>
        <li><strong>KafkaJS</strong> — Kafka producer and consumers</li>
        <li><strong>MongoDB + Mongoose</strong> — event persistence</li>
        <li><strong>Docker Compose</strong> — local Kafka, Kafka UI, MongoDB, Mongo Express</li>
      </ul>

      <h2>Event contract</h2>
      <p>Every event follows this shape:</p>
      <pre><code>{
  eventId?: string;       // auto-generated UUID if omitted
  eventType: string;      // e.g. "page_view", "click"
  sessionId: string;      // required — also used as Kafka message key
  userId?: string;
  timestamp?: string;     // ISO string, defaults to now
  properties?: object;    // e.g. { path: "/home" } or { buttonId: "signup" }
}</code></pre>
      <p>Three event types are handled today:</p>
      <ul>
        <li><code>page_view</code> — logged by the page-view consumer (<code>properties.path</code>)</li>
        <li><code>click</code> — logged by the click consumer (<code>properties.buttonId</code>)</li>
        <li><strong>Any type</strong> — persisted to MongoDB by the session consumer</li>
      </ul>

      <h2>What's next</h2>
      <p>In <a href="/blogs/event-driven-systems-part-2-building-the-pipeline">Part 2</a>, we walk through the code: the ingest API, Kafka producer, and the three consumer groups.</p>
    `,
    tags: ['Event-Driven', 'Kafka', 'NestJS', 'MongoDB', 'Learning']
  },
  {
    id: 5,
    slug: 'event-driven-systems-part-2-building-the-pipeline',
    title: 'Event-Driven Systems (Part 2): Building the Pipeline',
    date: '2026-06-15',
    excerpt: 'Step-by-step walkthrough of the ingest API, Kafka producer, consumer groups, and message filtering in my NestJS activity tracker.',
    content: `
      <p><em>Part 2 of 3 — <a href="/blogs/event-driven-systems-part-1-why-and-architecture">Part 1</a> | <a href="/blogs/event-driven-systems-part-3-run-verify-and-roadmap">Part 3</a></em></p>

      <h2>Step 1: Fast ingest API (202 Accepted)</h2>
      <p>The API's job is to accept events quickly and get out of the way. It returns HTTP 202 — "accepted for processing" — not 200 with a full result.</p>
      <pre><code>@Post('add/event')
@HttpCode(HttpStatus.ACCEPTED)
async createEvent(@Body() event: CreateEventDto) {
  return await this.eventsService.createEvent(event);
}</code></pre>
      <p>The service assigns an <code>eventId</code> and <code>timestamp</code> if missing, publishes to Kafka, and returns immediately:</p>
      <pre><code>const event: UserEvent = {
  ...dto,
  eventId: dto.eventId ?? randomUUID(),
  timestamp: dto.timestamp ?? new Date().toISOString(),
};
await this.kafkaProducer.publishEvent(event.sessionId, event);
return { eventId: event.eventId, status: 'accepted' };</code></pre>

      <h2>Step 2: DTO validation</h2>
      <p>NestJS validates incoming requests with <code>class-validator</code>. Only <code>eventType</code> and <code>sessionId</code> are required; everything else is optional:</p>
      <pre><code>@IsString() eventType: string;
@IsString() sessionId: string;
@IsOptional() @IsString() userId?: string;
@IsOptional() @IsObject() properties?: Record&lt;string, any&gt;;</code></pre>
      <p>A global <code>ValidationPipe</code> strips unknown fields and rejects bad payloads before they reach Kafka.</p>

      <h2>Step 3: Kafka producer</h2>
      <p>The producer connects on app startup and publishes JSON to the <code>user.events</code> topic. The message <strong>key is sessionId</strong> — this matters because Kafka routes the same key to the same partition, keeping events for one session in order.</p>
      <pre><code>await this.producer.send({
  topic: kafkaConfig.eventsTopic,
  messages: [{
    key: sessionId,
    value: JSON.stringify(event),
  }],
});</code></pre>

      <h2>Step 4: One topic, three consumer groups</h2>
      <p>All three consumers subscribe to the same topic but use <strong>different consumer groups</strong>:</p>
      <pre><code>pageView: 'page-view-processors'
click:    'click-processors'
session:  'session-processors'</code></pre>
      <p>Because they are separate groups, <strong>each group receives every message</strong>. This is different from load-balancing within one group (where only one consumer gets each message).</p>

      <h2>Step 5: App-level filtering</h2>
      <p>Instead of separate Kafka topics per event type, I filter inside each consumer:</p>
      <pre><code>// PageViewConsumer — skip anything that is not page_view
const event = parseEvent(message.value);
if (!event || event.eventType !== 'page_view') return;

// ClickConsumer — skip anything that is not click
if (!event || event.eventType !== 'click') return;

// SessionConsumer — processes ALL event types, persists to MongoDB</code></pre>
      <p>This is a deliberate learning choice: one topic keeps publishing simple; filtering in code is easy to understand before splitting topics later.</p>

      <h2>Step 6: Safe message parsing</h2>
      <p>Bad messages should not crash a consumer. <code>parseEvent()</code> returns <code>null</code> for invalid JSON or missing required fields — the consumer silently skips them:</p>
      <pre><code>export function parseEvent(raw: Buffer | null): UserEvent | null {
  if (!raw) return null;
  try {
    const event = JSON.parse(raw.toString()) as UserEvent;
    if (!event.eventType || !event.sessionId) return null;
    return event;
  } catch {
    return null;
  }
}</code></pre>

      <h2>Why separate consumer groups?</h2>
      <p>You might ask: why not one consumer with if/else? Separate groups give you:</p>
      <ul>
        <li><strong>Independent scaling</strong> — scale page-view processing without touching session logic</li>
        <li><strong>Failure isolation</strong> — if MongoDB is down, page-view logging still works</li>
        <li><strong>Different speeds</strong> — analytics can lag without blocking persistence</li>
      </ul>

      <h2>Pipeline diagram</h2>
      <pre><code>Client ──POST /add/event──▶ EventsController
                                │
                                ▼
                          EventsService
                                │
                                ▼
                         KafkaProducer
                                │
                                ▼
                         user.events
                    ┌───────┬───────┐
                    ▼       ▼       ▼
              page-view  click   session
              (log)      (log)   (MongoDB)
</code></pre>

      <h2>What's next</h2>
      <p>In <a href="/blogs/event-driven-systems-part-3-run-verify-and-roadmap">Part 3</a>, we run everything locally, send test events, verify the full flow, and talk about what I learned and what is still missing.</p>
    `,
    tags: ['Event-Driven', 'Kafka', 'NestJS', 'MongoDB', 'Learning']
  },
  {
    id: 6,
    slug: 'event-driven-systems-part-3-run-verify-and-roadmap',
    title: 'Event-Driven Systems (Part 3): Run, Verify, and Roadmap',
    date: '2026-07-04',
    excerpt: 'Local setup, hands-on curl demos, verifying Kafka and MongoDB, honest learnings, and what I would build next.',
    content: `
      <p><em>Part 3 of 3 — <a href="/blogs/event-driven-systems-part-1-why-and-architecture">Part 1</a> | <a href="/blogs/event-driven-systems-part-2-building-the-pipeline">Part 2</a></em></p>

      <h2>Local setup</h2>
      <p>Docker Compose runs all infrastructure. From the project root:</p>
      <pre><code>docker compose up -d
npm install
npm run start:dev</code></pre>

      <h3>Services and ports</h3>
      <ul>
        <li><strong>Kafka</strong> — <code>localhost:9092</code></li>
        <li><strong>Kafka UI</strong> — <code>http://localhost:8080</code> (inspect topics and messages)</li>
        <li><strong>MongoDB</strong> — <code>localhost:27017</code></li>
        <li><strong>Mongo Express</strong> — <code>http://localhost:8081</code> (browse the <code>events</code> collection)</li>
        <li><strong>NestJS API</strong> — <code>http://localhost:3000</code></li>
      </ul>

      <h3>Environment variables (all have defaults)</h3>
      <ul>
        <li><code>PORT</code> — default <code>3000</code></li>
        <li><code>KAFKA_BROKER</code> — default <code>localhost:9092</code></li>
        <li><code>KAFKA_EVENTS_TOPIC</code> — default <code>user.events</code></li>
        <li><code>KAFKA_CLIENT_ID</code> — default <code>activity-tracker-api</code></li>
        <li><code>MONGO_URI</code> — default <code>mongodb://localhost:27017/activity-tracker</code></li>
      </ul>

      <h2>Hands-on demo</h2>
      <p>Send a page view:</p>
      <pre><code>curl -X POST http://localhost:3000/add/event \\
  -H "Content-Type: application/json" \\
  -d '{"eventType":"page_view","sessionId":"demo-sess-1","userId":"user-1","properties":{"path":"/home"}}'

# Response (202):
# {"eventId":"de478936-f322-4ed5-b32a-97e0bdcd1140","status":"accepted"}</code></pre>

      <p>Send a click:</p>
      <pre><code>curl -X POST http://localhost:3000/add/event \\
  -H "Content-Type: application/json" \\
  -d '{"eventType":"click","sessionId":"demo-sess-1","userId":"user-1","properties":{"buttonId":"signup-btn"}}'

# Response (202):
# {"eventId":"e29f7da1-3224-46a0-b64e-4913297764fa","status":"accepted"}</code></pre>

      <p>Query persisted events:</p>
      <pre><code>curl http://localhost:3000/events?limit=10</code></pre>

      <h2>Where data actually lands</h2>
      <p>This is important to understand — not every consumer writes to the database:</p>
      <ul>
        <li><strong>PageViewConsumer</strong> — logs only (no DB write)</li>
        <li><strong>ClickConsumer</strong> — logs only (no DB write)</li>
        <li><strong>SessionConsumer</strong> — persists <em>all</em> event types to MongoDB via upsert on <code>eventId</code></li>
      </ul>
      <p>The session consumer also keeps an in-memory <code>Map&lt;sessionId, count&gt;</code> for event counts per session. That count is lost on restart — a known limitation I chose to accept while learning.</p>

      <h2>How to verify end-to-end</h2>
      <ol>
        <li><strong>App logs</strong> — after POST, you should see producer publish + three consumer reactions:
          <pre><code>[KafkaProducerService] Published page_view | eventId=... | session=demo-sess-1
[PageViewConsumer] Page view | eventId=... | session=demo-sess-1 | path=/home
[EventsPersistenceService] Saved event ... (page_view)
[SessionConsumer] Session | session=demo-sess-1 | type=page_view | eventsInSession=1</code></pre>
        </li>
        <li><strong>Kafka UI</strong> — open <code>localhost:8080</code>, go to topic <code>user.events</code>, confirm messages appear with <code>sessionId</code> as the key</li>
        <li><strong>Mongo Express</strong> — open <code>localhost:8081</code>, browse database <code>activity-tracker</code>, collection <code>events</code></li>
        <li><strong>GET /events</strong> — confirm the same events appear in the API response</li>
      </ol>

      <h2>What surprised me</h2>
      <ul>
        <li>The API returns <code>accepted</code> before MongoDB has the event — that is <strong>eventual consistency</strong> in action</li>
        <li>All three consumer groups receive the same message — I expected only one consumer to "win"</li>
        <li>Using <code>sessionId</code> as the Kafka key means all events for one user session land in the same partition</li>
        <li>Starting Kafka + Mongo via Docker was smoother than I expected; the NestJS wiring took longer</li>
      </ul>

      <h2>What I learned</h2>
      <ul>
        <li><strong>Decoupling ingest from processing</strong> — the API never waits for analytics or DB writes</li>
        <li><strong>Consumer groups</strong> — same topic, parallel independent processing per group</li>
        <li><strong>Eventual consistency</strong> — accept now, process later; design APIs accordingly</li>
        <li><strong>Message keys matter</strong> — partition by session to preserve ordering within a session</li>
        <li><strong>Idempotency</strong> — Mongo upsert on <code>eventId</code> handles duplicate deliveries safely</li>
      </ul>

      <h2>Roadmap — what I would build next</h2>
      <ul>
        <li>Event type enum validation (reject unknown <code>eventType</code> at the API)</li>
        <li>Dead letter queue (DLQ) for messages that fail processing</li>
        <li>Dedicated persistence or handlers per consumer (not just session)</li>
        <li>Health check endpoint (<code>/health</code>) for Kafka and Mongo connectivity</li>
        <li>Unit and e2e tests</li>
        <li><code>.env.example</code> for easier onboarding</li>
        <li>Persist session event counts to DB instead of in-memory Map</li>
      </ul>

      <h2>Project links</h2>
      <p>Source code: <a href="https://github.com/suman-saket/user-activity-tracker" target="_blank" rel="noopener noreferrer">github.com/suman-saket/user-activity-tracker</a></p>
      <p><strong>Tech used:</strong> NestJS, KafkaJS, MongoDB, Mongoose, Docker Compose, class-validator</p>
      <p>Start from <a href="/blogs/event-driven-systems-part-1-why-and-architecture">Part 1</a> if you are reading this series out of order.</p>
    `,
    tags: ['Event-Driven', 'Kafka', 'NestJS', 'MongoDB', 'Learning']
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
