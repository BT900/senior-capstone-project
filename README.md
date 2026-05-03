# Peach State Fabrication

A secure web-based communication and project management system for Peach State Fabrication, LLC—a custom metal fabrication and structural steel manufacturing company based in Georgia.

## 🏢 About Peach State Fabrication

**Name:** Peach State Fabrication, LLC  
**Industry:** Custom metal fabrication & structural steel manufacturing  
**Location:** Georgia, USA  
**Employees:** ≈ 25  

### Core Services
- Structural steel fabrication
- Custom metal assemblies
- Welding, forming, and cutting for commercial projects
- Small-business parts manufacturing

### Mission Statement
Deliver precision-quality fabrication, dependable service, and efficient workflow while building lasting relationships with commercial contractors and small businesses.

### Vision
To be Georgia's most trusted regional partner for reliable, high-quality metalwork solutions.

### Values
- **Quality** – painstaking workmanship on every job
- **Integrity** – transparent communication with clients
- **Safety** – compliance with OSHA & fabrication best practices
- **Efficiency** – streamlined production and project tracking

## 🧱 Organizational Structure

| Role | Responsibilities |
|------|------------------|
| Owner / Operations Manager | Oversees business operations, approves budgets, and manages client relationships |
| Production Manager | Coordinates shop floor scheduling, material flow, and job status tracking |
| Sales / Administrative Staff | Handles customer quotes, purchase orders, invoicing, and internal scheduling |
| Shop Floor Employees | Perform cutting, welding, assembly, and finishing operations under work-order direction |

## 💡 Communication & Workflow

**Current Pain Point:**  
Employees rely on personal texts and unsecured email for job updates and file sharing. No centralized messaging, no role-based access, and no searchable history.

**Proposed System Benefit:**  
Secure web app with user logins, project channels, document uploads, and audit logging. Role-based access levels (Owner, Manager, Sales/Admin, Shop Floor). Centralized messages reduce data loss and communication gaps.

## 💻 Technology Stack

| Layer | Tools |
|-------|-------|
| Frontend | React Web / Material UI |
| Backend | FastAPI (Python) |
| Database | PostgreSQL (Neon cloud) |
| Hosting | Render / GitHub Actions build pipeline |
| Payments | Stripe API (test mode) |
| Authentication | JWT (JSON Web Tokens) with role-based middleware |

**Network:** Web-based; accessible on desktops & phones. Cloud-hosted over HTTPS with secure login and read-only logs for admins.

## 📊 Economic Snapshot

| Category | Estimated Cost (USD) | Frequency | Notes |
|----------|----------------------|-----------|-------|
| Cloud Hosting | $30 / month | Monthly | Includes database and API server |
| Domain + SSL | $80 / year | Annual | Secure HTTPS access |
| Maintenance / Backups | $20 / month | Monthly | Minor updates & monitoring |
| **Total Annual Estimate** | **≈ $1,000 – $1,500** | — | Feasible for 25-person organization |

## 🔒 Security (CIA Triad)

- **Confidentiality:** Enforced with JWT login + role-based access; HTTPS everywhere
- **Integrity:** All messages and uploads validated, timestamped, and stored using database transactions
- **Availability:** Cloud hosting, automatic backups, and monitored uptime

## 📈 Evaluation & Maintenance Policy

- Quarterly admin reviews of audit logs and user roles
- Monthly updates of frontend and backend dependencies
- Cloud security review twice per year to renew certificates and rotate keys
- End-user feedback loop built into dashboard for usability improvements

---

## Run locally with Docker

1. Copy `.env.example` to `.env` and update the values.
2. Start the app:

```bash
docker-compose up --build
```

3. Open [http://localhost:8080](http://localhost:8080)

## Deployment

- Live deployment: `https://senior-capstone-project-delta.vercel.app`
- GitHub Actions build workflow: `.github/workflows/build.yml`

## Backend

- FastAPI app in `backend/app`
- API endpoints under `/api`
- Serves the React frontend build when available

## Frontend

- React app in `frontend`
- Uses Material UI and React Router
