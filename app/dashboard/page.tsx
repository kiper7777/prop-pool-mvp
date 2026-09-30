import Link from "next/link";
import { Header } from "@/components/Header";
import { projects, money } from "@/lib/data";

export default function DashboardPage() {
  return (
    <main>
      <Header />
      <section className="dashboard-page container">
        <aside className="account-sidebar">
          <div>
            <small>DEMO MEMBER</small>
            <h2>Member Area</h2>
          </div>
          {[
            "Overview",
            "My Projects",
            "Applications",
            "Transactions",
            "Distributions",
            "Documents",
            "Notifications",
            "Risk Centre",
            "Security",
          ].map((x, i) => (
            <span key={x} className={i === 0 ? "active" : ""}>
              {x}
            </span>
          ))}
        </aside>
        <div className="account-content">
          <div className="dash-top">
            <div>
              <div className="section-eyebrow">MEMBER DASHBOARD</div>
              <h1>Overview</h1>
              <p className="muted">All figures below are illustrative.</p>
            </div>
            <span className="badge">DEMO ACCOUNT</span>
          </div>
          <div className="metric-grid">
            <div>
              <span>Total contributions</span>
              <strong>€250</strong>
              <small>Illustrative</small>
            </div>
            <div>
              <span>Active projects</span>
              <strong>2</strong>
              <small>Demo projects</small>
            </div>
            <div>
              <span>Pending distribution</span>
              <strong>€0</strong>
              <small>No distribution recorded</small>
            </div>
          </div>
          <div className="panel">
            <div className="panel-head">
              <h2>My projects</h2>
              <Link className="text-link" href="/#projects">
                Explore projects →
              </Link>
            </div>
            <div className="member-projects">
              {projects.map((p, i) => (
                <Link
                  href={`/projects/${p.slug}`}
                  className="member-project"
                  key={p.slug}
                >
                  <div>
                    <span className="badge">DEMO</span>
                    <h3>{p.code}</h3>
                    <small>{p.company}</small>
                  </div>
                  <div>
                    <span>My contribution</span>
                    <strong>{money(i === 0 ? 100 : 150)}</strong>
                  </div>
                  <div>
                    <span>My share</span>
                    <strong>{i === 0 ? "10.00%" : "12.50%"}</strong>
                  </div>
                  <div>
                    <span>Status</span>
                    <strong>{p.status}</strong>
                  </div>
                  <b>→</b>
                </Link>
              ))}
            </div>
          </div>
          <div className="panel">
            <h2>Recent activity</h2>
            <div className="activity">
              <i>01</i>
              <div>
                <strong>Application approved</strong>
                <span>Demo application for FTMO-DEMO-001</span>
              </div>
              <time>Illustrative</time>
            </div>
            <div className="activity">
              <i>02</i>
              <div>
                <strong>Project status updated</strong>
                <span>PROP-DEMO-002 moved to Phase 1</span>
              </div>
              <time>Illustrative</time>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
