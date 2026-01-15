# Virpio Security Platform

> Professional security training, certification, and job placement platform aligned with SIA standards

## 🎯 Project Overview

Virpio Security is a comprehensive platform that integrates:
- **SIA-accredited training courses** (Door Supervision, Security Guarding, CCTV, etc.)
- **Learning Management System** (LMS) with progress tracking and assessments
- **Job placement engine** with smart matching algorithms
- **Employer portal** for posting jobs and managing candidates
- **Certificate issuance** with blockchain verification
- **Compliance automation** (DBS checks, right-to-work verification)

**Target MVP Timeline:** 8-12 weeks
**Budget:** £169,000 for full production launch
**Tech Stack:** Next.js 14, React 18, TypeScript, Supabase, Stripe, Tailwind CSS

---

## 📁 Documentation

- **[PRODUCT_PLAN.md](./PRODUCT_PLAN.md)** - Complete product strategy, market analysis, feature roadmap, budget, and success metrics
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Technical architecture, data flow, security, scalability, and infrastructure details

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Supabase account (free tier works for development)
- Stripe account (test mode)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd virpio-security-platform

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Edit .env.local with your credentials
# - Supabase URL and keys
# - Stripe keys
# - Other service credentials
```

### Environment Variables

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

---

## 🏗️ Project Structure

```
virpio-security-platform/
├── app/                      # Next.js 14 App Router
│   ├── page.tsx             # Homepage (marketing)
│   ├── dashboard/           # Learner dashboard
│   ├── admin/               # Admin dashboard
│   ├── courses/             # Course catalog & detail pages
│   ├── jobs/                # Job board & applications
│   ├── api/                 # API routes
│   │   ├── auth/           # Authentication endpoints
│   │   ├── courses/        # Course CRUD
│   │   ├── jobs/           # Job postings & matching
│   │   └── webhooks/       # Payment webhooks
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/              # Reusable React components
├── lib/                     # Utility functions
│   ├── supabase.ts         # Supabase client
│   ├── stripe.ts           # Stripe client
│   └── validations.ts      # Zod schemas
├── public/                  # Static assets
├── docs/                    # Additional documentation
├── PRODUCT_PLAN.md         # Product strategy & roadmap
├── ARCHITECTURE.md         # Technical architecture
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

---

## 🎨 Key Features

### Public Website
- ✅ SEO-optimized marketing pages
- ✅ Course catalog with search/filters
- ✅ Job board with location-based search
- ✅ Responsive design (mobile-first)

### Learner Portal
- ✅ Dashboard with progress tracking
- ✅ Video course player
- ✅ Interactive assessments
- ✅ Certificate download (PDF)
- ✅ Job recommendations
- ✅ Application tracking

### Employer Portal
- ✅ Job posting creation/management
- ✅ Candidate search with AI matching
- ✅ Application tracking system (ATS)
- ✅ Messaging with applicants
- ✅ Interview scheduling

### Admin Dashboard
- ✅ User management (CRUD)
- ✅ Course content management
- ✅ Analytics & reporting
- ✅ Payment tracking
- ✅ Compliance monitoring

### Security & Compliance
- ✅ Multi-factor authentication (MFA)
- ✅ Row-level security (RLS)
- ✅ GDPR compliance (data export/deletion)
- ✅ PCI-DSS (via Stripe)
- ✅ DBS check tracking
- ✅ Audit logging

---

## 🔐 Authentication & Authorization

**User Roles:**
- **Learner**: Enroll in courses, apply for jobs
- **Instructor**: Create course content, grade assessments
- **Employer**: Post jobs, review candidates
- **Admin**: Full platform management

**Authentication Methods:**
- Email/password
- Magic links (passwordless)
- OAuth (Google, Microsoft)
- Multi-factor authentication (SMS, TOTP)

**Authorization:**
- Role-based access control (RBAC)
- Row-level security (Supabase RLS)
- API middleware validation

---

## 💳 Payment Integration

- **Provider**: Stripe
- **Supported Methods**: Card, Apple Pay, Google Pay, bank transfers
- **Features**:
  - One-time course purchases
  - Subscription billing (future)
  - Payment plans (installments)
  - Refund handling
  - Webhook processing (payment confirmation)

---

## 📊 Analytics & Monitoring

**Tools:**
- **Sentry**: Error tracking, performance monitoring
- **PostHog**: Product analytics, session replay, feature flags
- **Vercel Analytics**: Web vitals, performance metrics
- **Supabase Dashboard**: Database metrics, query performance

**Key Metrics:**
- User registrations & active users
- Course enrollments & completion rates
- Job applications & placements
- Revenue & LTV:CAC ratio
- Platform uptime & API latency

---

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Run linting
npm run lint

# Run type checking
npm run type-check
```

**Coverage Targets:**
- Unit tests: 80%+
- E2E tests: Critical user flows
- Accessibility: WCAG 2.1 AA
- Performance: Lighthouse score >90

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Environment Setup
1. Create Vercel project
2. Link to GitHub repository
3. Add environment variables in Vercel dashboard
4. Configure custom domain (virpiosecurity.co.uk)
5. Enable auto-deployments on push to `main`

### Database Setup (Supabase)
1. Create Supabase project (EU region for GDPR)
2. Run database migrations (SQL scripts in `/supabase/migrations`)
3. Configure row-level security policies
4. Set up storage buckets (courses, certificates, uploads)
5. Add Vercel URL to allowed origins

---

## 📈 Roadmap

### Phase 1: Foundation (Weeks 1-4) ✅
- Public website
- Authentication system
- Basic LMS
- Payment integration

### Phase 2: Core Features (Weeks 5-8)
- Advanced LMS (offline access, multi-language)
- Employer portal
- Job matching algorithm
- Admin dashboard

### Phase 3: Polish & Launch (Weeks 9-12)
- Analytics & reporting
- Compliance automation
- Mobile optimization (PWA)
- QA & security audit

### Phase 4: Post-MVP (Months 4-6)
- Gamification
- Referral program
- Mobile native apps
- Advanced analytics

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

**Code Standards:**
- TypeScript for all new code
- ESLint + Prettier for formatting
- Conventional commits
- Test coverage for new features

---

## 📄 License

Proprietary - All rights reserved by Virpio Security Ltd.

---

## 📞 Support

- **Email**: support@virpiosecurity.co.uk
- **Documentation**: [docs.virpiosecurity.co.uk](https://docs.virpiosecurity.co.uk)
- **Status Page**: [status.virpiosecurity.co.uk](https://status.virpiosecurity.co.uk)

---

## 🏆 Success Metrics (Year 1 Targets)

| Metric | Target |
|--------|--------|
| Registered Users | 5,000 learners, 200 employers |
| Course Enrollments | 2,500 |
| Completion Rate | 75% |
| Job Placements | 400 |
| Revenue | £300,000 |
| Platform Uptime | 99.9% |
| Customer Satisfaction | 4.5/5 |

---

Built with ❤️ by the Virpio Security team
