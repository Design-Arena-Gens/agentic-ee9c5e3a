# Virpio Security Platform - Technical Architecture

## System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                          CLIENT LAYER                                │
├─────────────────────────────────────────────────────────────────────┤
│  Web Browser        │  Mobile Browser   │  Progressive Web App      │
│  (Desktop)          │  (iOS/Android)    │  (Offline Support)        │
└─────────────────────────────────────────────────────────────────────┘
                                ↓ ↑ HTTPS
┌─────────────────────────────────────────────────────────────────────┐
│                       CDN / EDGE NETWORK                             │
│                      (Vercel Edge / Cloudflare)                      │
│  - Static Asset Caching                                              │
│  - DDoS Protection                                                   │
│  - Global Distribution                                               │
└─────────────────────────────────────────────────────────────────────┘
                                ↓ ↑
┌─────────────────────────────────────────────────────────────────────┐
│                    FRONTEND APPLICATION                              │
├─────────────────────────────────────────────────────────────────────┤
│  Next.js 14 App Router                                               │
│  - Server Components (SEO, Performance)                              │
│  - Client Components (Interactivity)                                 │
│  - API Routes (Backend for Frontend)                                 │
│  - Middleware (Auth, Rate Limiting)                                  │
│                                                                       │
│  UI Layer: React 18 + TypeScript + Tailwind CSS                     │
│  State Management: Zustand (client) + React Query (server)          │
└─────────────────────────────────────────────────────────────────────┘
                                ↓ ↑
┌─────────────────────────────────────────────────────────────────────┐
│                      API GATEWAY LAYER                               │
├─────────────────────────────────────────────────────────────────────┤
│  Next.js API Routes (/api/*)                                         │
│  - RESTful endpoints                                                 │
│  - Request validation (Zod schemas)                                  │
│  - Authentication middleware                                         │
│  - Rate limiting (Redis)                                             │
│  - Error handling & logging                                          │
└─────────────────────────────────────────────────────────────────────┘
                                ↓ ↑
┌─────────────────────────────────────────────────────────────────────┐
│                    BUSINESS LOGIC LAYER                              │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │ Auth Service │  │Course Service│  │  Job Service │              │
│  │- Login       │  │- CRUD ops    │  │- Postings    │              │
│  │- Registration│  │- Enrollment  │  │- Applications│              │
│  │- MFA         │  │- Progress    │  │- Matching    │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │Payment Svc   │  │Certificate   │  │Notification  │              │
│  │- Stripe      │  │- Generate PDF│  │- Email       │              │
│  │- Webhooks    │  │- Verification│  │- SMS         │              │
│  │- Subscriptions│ │- Blockchain  │  │- Push        │              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
└─────────────────────────────────────────────────────────────────────┘
                                ↓ ↑
┌─────────────────────────────────────────────────────────────────────┐
│                        DATA ACCESS LAYER                             │
├─────────────────────────────────────────────────────────────────────┤
│  Supabase Client (JavaScript SDK)                                    │
│  - ORM-like interface                                                │
│  - Row-level security enforcement                                    │
│  - Real-time subscriptions                                           │
│  - File upload/download                                              │
└─────────────────────────────────────────────────────────────────────┘
                                ↓ ↑
┌─────────────────────────────────────────────────────────────────────┐
│                        DATABASE LAYER                                │
├─────────────────────────────────────────────────────────────────────┤
│  PostgreSQL 15 (Supabase Managed)                                    │
│  - Primary database (EU region)                                      │
│  - Automated backups (PITR)                                          │
│  - Connection pooling (PgBouncer)                                    │
│  - Full-text search (pg_trgm)                                        │
│  - PostGIS (location-based matching)                                 │
│                                                                       │
│  Redis (Upstash)                                                     │
│  - Session storage                                                   │
│  - Rate limiting counters                                            │
│  - Cache layer (hot data)                                            │
│  - Job queue (BullMQ)                                                │
└─────────────────────────────────────────────────────────────────────┘
                                ↓ ↑
┌─────────────────────────────────────────────────────────────────────┐
│                       STORAGE LAYER                                  │
├─────────────────────────────────────────────────────────────────────┤
│  Supabase Storage (S3-compatible)                                    │
│  - Course videos (HLS streaming)                                     │
│  - PDF documents (certificates, course materials)                    │
│  - User uploads (CVs, ID documents)                                  │
│  - Image assets (thumbnails, logos)                                  │
│  - Access control policies (bucket-level)                            │
└─────────────────────────────────────────────────────────────────────┘
                                ↓ ↑
┌─────────────────────────────────────────────────────────────────────┐
│                    EXTERNAL INTEGRATIONS                             │
├─────────────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │Stripe        │  │SendGrid      │  │Twilio        │              │
│  │- Payments    │  │- Email       │  │- SMS/OTP     │              │
│  │- Webhooks    │  │- Templates   │  │- Phone verify│              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐              │
│  │Mux/Vimeo     │  │DBS Check API │  │SIA API       │              │
│  │- Video host  │  │- Background  │  │- License     │              │
│  │- Streaming   │  │  checks      │  │  verification│              │
│  └──────────────┘  └──────────────┘  └──────────────┘              │
│                                                                       │
│  ┌──────────────┐  ┌──────────────┐                                 │
│  │PostHog       │  │Sentry        │                                 │
│  │- Analytics   │  │- Error track │                                 │
│  │- Feature flags│ │- Performance │                                 │
│  └──────────────┘  └──────────────┘                                 │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack Details

### Frontend Stack

| Component | Technology | Version | Purpose |
|-----------|-----------|---------|---------|
| Framework | Next.js | 14.1.0 | React framework with SSR, SSG, ISR |
| UI Library | React | 18.2.0 | Component-based UI |
| Language | TypeScript | 5.3.3 | Type-safe development |
| Styling | Tailwind CSS | 3.4.1 | Utility-first CSS framework |
| Icons | Lucide React | 0.312.0 | Icon library |
| Forms | React Hook Form | 7.49.3 | Form state management |
| Validation | Zod | 3.22.4 | Schema validation |
| State (Client) | Zustand | 4.5.0 | Lightweight state management |
| State (Server) | React Query | 3.39.3 | Server state caching |
| Charts | Recharts | 2.10.4 | Data visualization |

### Backend Stack

| Component | Technology | Purpose |
|-----------|-----------|---------|
| API Layer | Next.js API Routes | RESTful endpoints |
| Database | PostgreSQL 15 (Supabase) | Relational data storage |
| ORM | Supabase Client | Database access layer |
| Caching | Redis (Upstash) | Session, rate limiting, cache |
| Authentication | Supabase Auth | User auth with MFA |
| File Storage | Supabase Storage | S3-compatible object storage |
| Real-time | Supabase Realtime | WebSocket subscriptions |
| Background Jobs | BullMQ (Redis) | Async task processing |

### Infrastructure & DevOps

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Hosting (Frontend) | Vercel | Serverless Next.js hosting |
| Hosting (Backend) | Supabase Cloud | Managed PostgreSQL + services |
| CDN | Cloudflare | Static asset delivery, DDoS protection |
| CI/CD | GitHub Actions | Automated testing & deployment |
| Monitoring (Errors) | Sentry | Error tracking, performance monitoring |
| Monitoring (Analytics) | PostHog | Product analytics, session replay |
| Monitoring (Uptime) | UptimeRobot | Availability monitoring |
| Email | SendGrid | Transactional emails |
| SMS | Twilio | OTP, notifications |
| Payments | Stripe | Payment processing |
| Video | Mux | Video streaming |

---

## Data Flow Examples

### User Registration Flow

```
1. User submits registration form
   ↓
2. Frontend validates with Zod schema
   ↓
3. POST /api/auth/register
   ↓
4. API validates + checks email uniqueness
   ↓
5. Supabase Auth creates user account
   ↓
6. Insert profile data into `users` table
   ↓
7. Send verification email (SendGrid)
   ↓
8. Return session token to client
   ↓
9. Redirect to dashboard
```

### Course Enrollment Flow

```
1. User clicks "Enroll Now"
   ↓
2. POST /api/payments/checkout
   ↓
3. Create Stripe Checkout Session
   ↓
4. Redirect to Stripe payment page
   ↓
5. User completes payment
   ↓
6. Stripe webhook → POST /api/webhooks/stripe
   ↓
7. Verify webhook signature
   ↓
8. Insert enrollment record (status: 'active')
   ↓
9. Send confirmation email
   ↓
10. Grant access to course modules
```

### Job Matching Algorithm Flow

```
1. Employer creates job posting
   ↓
2. POST /api/jobs (insert into database)
   ↓
3. Trigger matching algorithm (background job)
   ↓
4. Query learners with:
   - Required certificates (exact match)
   - Location proximity (PostGIS)
   - Availability (schedule match)
   - Experience level
   ↓
5. Calculate match score (0-100)
   ↓
6. Insert into `job_matches` table
   ↓
7. Send notifications to top 20 matches
   ↓
8. Display in learner dashboard
```

---

## Security Architecture

### Authentication Flow

```
┌──────────────┐
│   Client     │
└──────┬───────┘
       │ 1. Login request (email/password)
       ↓
┌──────────────┐
│ Supabase Auth│
└──────┬───────┘
       │ 2. Verify credentials
       │ 3. Generate JWT + refresh token
       ↓
┌──────────────┐
│   Client     │ 4. Store tokens (httpOnly cookies)
└──────┬───────┘
       │ 5. API requests with JWT
       ↓
┌──────────────┐
│ API Middleware│ 6. Validate JWT signature
└──────┬───────┘
       │ 7. Check user role (RBAC)
       ↓
┌──────────────┐
│  Database    │ 8. Apply row-level security
└──────────────┘
```

### Row-Level Security (RLS) Policies

**Example: Course Modules**
```sql
-- Learners can only read modules for enrolled courses
CREATE POLICY "learner_module_access" ON course_modules
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM enrollments
      WHERE enrollments.user_id = auth.uid()
        AND enrollments.course_id = course_modules.course_id
        AND enrollments.status = 'active'
    )
  );

-- Instructors can read/write their own course modules
CREATE POLICY "instructor_module_access" ON course_modules
  FOR ALL
  USING (
    course_id IN (
      SELECT id FROM courses WHERE instructor_id = auth.uid()
    )
  );

-- Admins have full access
CREATE POLICY "admin_full_access" ON course_modules
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid() AND users.role = 'admin'
    )
  );
```

### Data Encryption

| Layer | Encryption Method |
|-------|------------------|
| In Transit | TLS 1.3 (HTTPS) |
| At Rest (Database) | AES-256 |
| At Rest (Storage) | AES-256 |
| Sensitive Fields | Application-level encryption (PII) |
| Passwords | bcrypt (cost factor 12) |
| API Keys | Encrypted environment variables |

---

## Scalability Strategy

### Horizontal Scaling

| Component | Scaling Approach |
|-----------|-----------------|
| Frontend | Serverless (auto-scales with Vercel) |
| API Routes | Serverless (auto-scales with Vercel) |
| Database | Vertical scaling + read replicas |
| Cache | Redis cluster (Upstash auto-scales) |
| File Storage | S3-compatible (infinite scale) |
| Video Streaming | CDN-backed (auto-scales) |

### Performance Optimizations

1. **Static Generation (SSG)**
   - Marketing pages (homepage, course catalog)
   - Pre-render at build time
   - Revalidate on-demand (ISR)

2. **Server Components**
   - Reduce client-side JavaScript
   - Faster initial page loads
   - SEO benefits

3. **Code Splitting**
   - Dynamic imports for heavy components
   - Route-based splitting (automatic with Next.js)
   - Lazy load charts, video player

4. **Database Optimizations**
   - Indexes on frequently queried columns
   - Materialized views for analytics
   - Connection pooling (PgBouncer)
   - Query result caching (Redis)

5. **Image Optimization**
   - Next.js Image component (automatic WebP, lazy loading)
   - CDN delivery (Cloudflare)
   - Responsive images (srcset)

6. **API Response Caching**
   - Cache public data (course catalog, job listings)
   - Short TTL for dynamic data (user progress)
   - Stale-while-revalidate strategy

### Load Handling Estimates

| Metric | Current Capacity | Bottleneck | Scaling Plan |
|--------|-----------------|------------|--------------|
| Concurrent Users | 10,000+ | Database connections | Add read replicas |
| API Requests/sec | 5,000+ | API routes (serverless) | Auto-scales |
| Video Streaming | Unlimited | CDN bandwidth | Pay-per-GB |
| Database Size | 100GB+ | Disk space | Upgrade plan |
| File Storage | 1TB+ | Storage quota | Pay-per-GB |

---

## Deployment Architecture

### Environments

| Environment | Purpose | URL | Branch |
|------------|---------|-----|--------|
| Development | Local development | localhost:3000 | N/A |
| Preview | PR previews | *.vercel.app | feature/* |
| Staging | QA testing | staging.virpiosecurity.co.uk | develop |
| Production | Live site | virpiosecurity.co.uk | main |

### CI/CD Pipeline (GitHub Actions)

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - Checkout code
      - Setup Node.js
      - Install dependencies (npm ci)
      - Run linting (ESLint)
      - Run unit tests (Jest)
      - Run type checking (tsc)
      - Run E2E tests (Playwright)

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - Build Next.js app
      - Upload build artifacts

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - Deploy to Vercel
      - Run smoke tests
      - Notify team (Slack)
```

### Monitoring & Alerting

**Metrics Dashboard (Grafana/PostHog)**
- Real-time user count
- API response times (p50, p95, p99)
- Error rates by endpoint
- Database query performance
- Cache hit rates
- Video streaming bandwidth

**Alerts (PagerDuty/Slack)**
- Error rate > 1% (5 min window)
- API latency > 1s (p95)
- Database CPU > 80%
- Payment failure rate > 5%
- Disk space < 20%

---

## Disaster Recovery

### Backup Strategy

| Data Type | Frequency | Retention | Storage |
|-----------|-----------|-----------|---------|
| Database | Continuous (PITR) | 7 days | Supabase managed |
| Files | Daily | 30 days | S3 cross-region |
| Code | Every commit | Indefinite | GitHub |
| Config | On change | Indefinite | Git + 1Password |

### Recovery Procedures

**Database Corruption**
1. Identify corrupted data (monitoring alerts)
2. Restore from PITR to 5 minutes before incident
3. Apply any missing transactions manually
4. Verify data integrity
5. Resume normal operations

**Complete Outage (Vercel/Supabase)**
1. Switch DNS to static "maintenance" page (Cloudflare)
2. Communicate status via status page
3. Restore from backups to new infrastructure
4. Test critical flows
5. Update DNS to new deployment
6. Monitor for stability

**RTO (Recovery Time Objective)**: 2 hours
**RPO (Recovery Point Objective)**: 5 minutes

---

## Future Technical Enhancements

### Phase 2 (Months 4-6)
- GraphQL API (replace/complement REST)
- Redis pub/sub for real-time features
- Elasticsearch for advanced search
- WebRTC for live video classes
- Background job dashboard (Bull Board)

### Phase 3 (Months 7-12)
- Microservices architecture (split monolith)
- Event-driven architecture (Kafka/RabbitMQ)
- Multi-region deployment (US + EU)
- Machine learning for job matching
- Blockchain certificate verification

### Phase 4 (Year 2+)
- Mobile native apps (React Native)
- Offline-first architecture (local DB sync)
- AI-powered course recommendations
- Adaptive learning paths
- VR/AR training modules

---

## Cost Projections

### Monthly Infrastructure Costs (Year 1)

| Service | Tier | Cost |
|---------|------|------|
| Vercel | Pro | £160 |
| Supabase | Pro | £200 |
| Redis (Upstash) | Pay-as-you-go | £30 |
| Stripe | 1.5% + 20p/tx | Variable |
| SendGrid | Essentials | £80 |
| Twilio | Pay-as-you-go | £50 |
| Mux | Pay-as-you-go | £100 |
| Cloudflare | Pro | £15 |
| Sentry | Team | £50 |
| PostHog | Growth | £40 |
| UptimeRobot | Pro | £5 |
| **Total Fixed** | | **£730/mo** |

**Variable Costs (revenue-dependent)**
- Stripe: 1.5% of course revenue (~£450/mo at £30k revenue)
- Mux: £0.15/GB streaming (~£100/mo at 5k learners)
- Twilio: £0.04/SMS (~£50/mo at 1.2k OTPs)

**Total estimated monthly cost at scale: £1,330 (~4.4% of revenue)**

---

This architecture is designed for:
- **Fast time-to-market** (leverage managed services)
- **Cost efficiency** (pay-as-you-grow pricing)
- **High availability** (99.9%+ uptime)
- **Security compliance** (GDPR, PCI-DSS)
- **Developer productivity** (modern stack, TypeScript end-to-end)
- **Future scalability** (serverless + horizontal scaling)
