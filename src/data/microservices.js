// Microservices series — one chapter is one page, like a short book.
// The contents list is the chapters. "On this page" is that chapter's sections.
//
// To write a section, add a `content` HTML string on that section.
// Use headings from h3 down inside content. The section title is already the h2.
//
// To add a section: append { id, title } to that chapter's sections.
// To add a chapter: append it to `chapters` with the next number and a unique slug.
// A new topic is a new file, then one line in src/data/series.js.

export const microservices = {
  slug: 'microservices',
  title: 'Microservices',
  date: '2026-10-07',
  excerpt:
    'A chapter-by-chapter manual on microservices: boundaries, communication, data, failure, and running the system.',
  tags: ['Microservices', 'Backend', 'Architecture'],
  chapters: [
        {
          number: '01',
          slug: 'what-a-microservice-is',
          title: 'What a Microservice Isaaaaaa',
          content: `<p>The full text for this section goes here.</p>`,
          sections: [
            { id: 'a-service-is-a-boundary', title: 'A Service Is a Boundary',  content: `
              <p>The full text for this section goes here.</p>
            `, },
            { id: 'what-lives-inside', title: 'What Lives Inside One Service' },
            { id: 'what-it-is-not', title: 'What a Microservice Is Not' },
            { id: 'the-network-is-part-of-the-design', title: 'The Network Is Part of the Design' },
            { id: 'a-picture-of-many-services', title: 'A Picture of Many Services' },
          ],
        },
        {
          number: '02',
          slug: 'monolith-modular-monolith-services',
          title: 'Monolith, Modular Monolith, Services',
          sections: [
            { id: 'the-monolith', title: 'The Monolith' },
            { id: 'the-modular-monolith', title: 'The Modular Monolith' },
            { id: 'microservices', title: 'Microservices' },
            { id: 'how-the-three-differ', title: 'How the Three Differ' },
            { id: 'moving-between-them', title: 'Moving Between Them' },
          ],
        },
        {
          number: '03',
          slug: 'when-to-split',
          title: 'When to Split',
          sections: [
            { id: 'reasons-that-are-real', title: 'Reasons That Are Real' },
            { id: 'reasons-that-are-not', title: 'Reasons That Are Not' },
            { id: 'team-and-ownership', title: 'Team and Ownership' },
            { id: 'independent-deploy', title: 'Independent Deploy' },
            { id: 'a-decision-checklist', title: 'A Decision Checklist' },
          ],
        },
        {
          number: '04',
          slug: 'service-boundaries',
          title: 'Service Boundaries',
          sections: [
            { id: 'split-by-capability', title: 'Split by Business Capability' },
            { id: 'not-by-technical-layer', title: 'Not by Technical Layer' },
            { id: 'a-boundary-you-can-name', title: 'A Boundary You Can Name' },
            { id: 'what-crosses-the-boundary', title: 'What Crosses the Boundary' },
            { id: 'changing-a-boundary-later', title: 'Changing a Boundary Later' },
          ],
        },
        {
          number: '05',
          slug: 'synchronous-calls',
          title: 'Synchronous Calls',
          sections: [
            { id: 'request-and-response', title: 'Request and Response' },
            { id: 'rest-and-grpc', title: 'REST and gRPC' },
            { id: 'who-calls-whom', title: 'Who Calls Whom' },
            { id: 'latency-adds-up', title: 'Latency Adds Up' },
            { id: 'caller-on-failure', title: 'What the Caller Does on Failure' },
          ],
        },
        {
          number: '06',
          slug: 'asynchronous-messages',
          title: 'Asynchronous Messages',
          sections: [
            { id: 'why-not-always-call', title: 'Why Not Always Call' },
            { id: 'commands-and-events', title: 'Commands and Events' },
            { id: 'a-broker', title: 'A Broker' },
            { id: 'delivery-guarantees', title: 'Delivery Guarantees' },
            { id: 'ordering', title: 'Ordering' },
          ],
        },
        {
          number: '07',
          slug: 'contracts-and-versioning',
          title: 'Contracts and Versioning',
          sections: [
            { id: 'the-contract-is-the-api', title: 'The Contract Is the API' },
            { id: 'breaking-and-non-breaking', title: 'Breaking and Non-Breaking Changes' },
            { id: 'versioning-a-contract', title: 'Versioning a Contract' },
            { id: 'consumers-and-producers', title: 'Consumers and Producers' },
            { id: 'schema-compatibility', title: 'Schema Compatibility' },
          ],
        },
        {
          number: '08',
          slug: 'api-gateway',
          title: 'API Gateway and the Edge',
          sections: [
            { id: 'what-the-gateway-is-for', title: 'What the Gateway Is For' },
            { id: 'what-it-must-not-do', title: 'What It Must Not Do' },
            { id: 'routing-at-the-edge', title: 'Routing at the Edge' },
            { id: 'auth-at-the-edge', title: 'Auth at the Edge' },
            { id: 'one-public-api', title: 'One Public API, Many Services' },
          ],
        },
        {
          number: '09',
          slug: 'service-discovery',
          title: 'Service Discovery',
          sections: [
            { id: 'how-a-caller-finds-a-service', title: 'How a Caller Finds a Service' },
            { id: 'client-side-and-server-side', title: 'Client-Side and Server-Side' },
            { id: 'load-balancing', title: 'Load Balancing' },
            { id: 'instances-come-and-go', title: 'Instances Come and Go' },
            { id: 'dns-registry-mesh', title: 'DNS, Registry, Mesh' },
          ],
        },
        {
          number: '10',
          slug: 'database-per-service',
          title: 'Database per Service',
          sections: [
            { id: 'each-service-owns-its-data', title: 'Each Service Owns Its Data' },
            { id: 'why-a-shared-database-breaks', title: 'Why a Shared Database Breaks the Split' },
            { id: 'what-owns-means', title: 'What Owns Means' },
            { id: 'joins-you-no-longer-have', title: 'Joins You No Longer Have' },
            { id: 'reporting', title: 'Reporting Without a Shared Database' },
          ],
        },
        {
          number: '11',
          slug: 'shared-data',
          title: 'Shared Data Problems',
          sections: [
            { id: 'the-integration-database', title: 'The Integration Database' },
            { id: 'copying-data', title: 'Copying Data' },
            { id: 'source-of-truth', title: 'Who Is the Source of Truth' },
            { id: 'duplicate-writes', title: 'Duplicate Writes' },
            { id: 'ask-another-service', title: 'Asking Another Service Instead' },
          ],
        },
        {
          number: '12',
          slug: 'sagas',
          title: 'Sagas and Distributed Transactions',
          sections: [
            { id: 'one-transaction-is-not-enough', title: 'One Transaction No Longer Covers the Flow' },
            { id: 'a-saga-is-local-steps', title: 'A Saga Is a Sequence of Local Steps' },
            { id: 'choreography', title: 'Choreography' },
            { id: 'orchestration', title: 'Orchestration' },
            { id: 'compensation', title: 'Compensation When a Step Fails' },
          ],
        },
        {
          number: '13',
          slug: 'consistency-and-read-models',
          title: 'Consistency and Read Models',
          sections: [
            { id: 'strong-and-eventual', title: 'Strong and Eventual' },
            { id: 'what-the-user-may-see', title: 'What the User Is Allowed to See' },
            { id: 'read-models', title: 'Read Models' },
            { id: 'events-update-a-read-model', title: 'Events That Update a Read Model' },
            { id: 'stale-reads-on-purpose', title: 'Stale Reads on Purpose' },
          ],
        },
        {
          number: '14',
          slug: 'idempotency',
          title: 'Idempotency',
          sections: [
            { id: 'the-same-request-twice', title: 'The Same Request Twice' },
            { id: 'retries-cause-duplicates', title: 'Why Retries Cause Duplicates' },
            { id: 'idempotency-keys', title: 'Idempotency Keys' },
            { id: 'consumers-that-run-twice', title: 'Consumers That Can Run Twice' },
            { id: 'where-to-store-the-key', title: 'Where to Store the Key' },
          ],
        },
        {
          number: '15',
          slug: 'timeouts-retries-backoff',
          title: 'Timeouts, Retries, Backoff',
          sections: [
            { id: 'every-call-needs-a-timeout', title: 'Every Call Needs a Timeout' },
            { id: 'retry-only-what-is-safe', title: 'Retry Only What Is Safe' },
            { id: 'backoff-and-jitter', title: 'Backoff and Jitter' },
            { id: 'retry-storms', title: 'Retry Storms' },
            { id: 'a-budget-for-the-request', title: 'A Budget for the Whole Request' },
          ],
        },
        {
          number: '16',
          slug: 'circuit-breakers-and-bulkheads',
          title: 'Circuit Breakers and Bulkheads',
          sections: [
            { id: 'stop-calling-a-sick-service', title: 'Stop Calling a Sick Service' },
            { id: 'the-circuit-breaker', title: 'The Circuit Breaker' },
            { id: 'bulkheads', title: 'Bulkheads' },
            { id: 'fallbacks', title: 'Fallbacks' },
            { id: 'load-shedding', title: 'Load Shedding' },
          ],
        },
        {
          number: '17',
          slug: 'partial-failure',
          title: 'Partial Failure',
          sections: [
            { id: 'some-services-are-down', title: 'Some Services Are Up, Some Are Not' },
            { id: 'what-the-user-should-see', title: 'What the User Should See' },
            { id: 'degraded-mode', title: 'Degraded Mode' },
            { id: 'cascading-failure', title: 'Cascading Failure' },
            { id: 'happy-path-and-broken-path', title: 'The Happy Path and the Broken Path' },
          ],
        },
        {
          number: '18',
          slug: 'health-and-shutdown',
          title: 'Health and Shutdown',
          sections: [
            { id: 'liveness-and-readiness', title: 'Liveness and Readiness' },
            { id: 'what-a-health-check-may-check', title: 'What a Health Check May Check' },
            { id: 'draining-traffic', title: 'Draining Traffic' },
            { id: 'in-flight-work', title: 'In-Flight Work' },
            { id: 'startup-order', title: 'Startup Order' },
          ],
        },
        {
          number: '19',
          slug: 'tracing-logs-metrics',
          title: 'Tracing, Logs, Metrics',
          sections: [
            { id: 'one-request-many-services', title: 'One Request, Many Services' },
            { id: 'a-trace-id', title: 'A Trace Id' },
            { id: 'logs-with-context', title: 'Logs with Context' },
            { id: 'metrics-that-matter', title: 'Metrics That Matter' },
            { id: 'the-slow-or-failed-hop', title: 'Finding the Slow or Failed Hop' },
          ],
        },
        {
          number: '20',
          slug: 'auth-between-services',
          title: 'Auth Between Services',
          sections: [
            { id: 'the-user-token', title: 'The User Token and the Service' },
            { id: 'passing-identity-inward', title: 'Passing Identity Inward' },
            { id: 'service-to-service-trust', title: 'Service-to-Service Trust' },
            { id: 'what-not-to-share', title: 'What Not to Share' },
            { id: 'authorization-stays-in-the-service', title: 'Authorization Stays in the Service' },
          ],
        },
        {
          number: '21',
          slug: 'configuration-and-secrets',
          title: 'Configuration and Secrets',
          sections: [
            { id: 'config-is-not-in-the-image', title: 'Config Is Not in the Image' },
            { id: 'per-environment-values', title: 'Per-Environment Values' },
            { id: 'secrets', title: 'Secrets' },
            { id: 'changing-config', title: 'Changing Config Without a Rewrite' },
            { id: 'feature-flags', title: 'Feature Flags Across Services' },
          ],
        },
        {
          number: '22',
          slug: 'deploy-and-rollout',
          title: 'Deploy and Rollout',
          sections: [
            { id: 'deploy-one-service', title: 'Deploy One Service, Not the System' },
            { id: 'backward-compatible-changes', title: 'Backward Compatible Changes' },
            { id: 'expand-and-contract', title: 'Expand and Contract' },
            { id: 'rollout-and-rollback', title: 'Rollout and Rollback' },
            { id: 'many-versions-at-once', title: 'Many Versions Live at Once' },
          ],
        },
        {
          number: '23',
          slug: 'testing',
          title: 'Testing a Distributed System',
          sections: [
            { id: 'test-the-service-alone', title: 'Test the Service Alone' },
            { id: 'contract-tests', title: 'Contract Tests' },
            { id: 'integration-with-fakes', title: 'Integration with Fakes' },
            { id: 'what-not-to-spin-up', title: 'What Not to Spin Up' },
            { id: 'a-thin-end-to-end-path', title: 'A Thin End-to-End Path' },
          ],
        },
        {
          number: '24',
          slug: 'a-worked-flow',
          title: 'A Worked Flow',
          sections: [
            { id: 'the-story', title: 'The Story: Place an Order' },
            { id: 'the-services-involved', title: 'The Services Involved' },
            { id: 'sync-and-async-steps', title: 'The Sync and Async Steps' },
            { id: 'where-it-can-fail', title: 'Where It Can Fail' },
            { id: 'the-whiteboard', title: 'What You Would Draw on a Whiteboard' },
          ],
        },
  ],
}
