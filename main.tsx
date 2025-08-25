// src/App.tsx
import { useState } from "react";

type Stat = { label: string; value: string; emoji: string; hint?: string };

const stats: Stat[] = [
  { label: "Open Leads", value: "12", emoji: "🧲", hint: "New this week: 4" },
  { label: "Estimates (30d)", value: "$18,240", emoji: "🧮", hint: "Avg: $2,280" },
  { label: "Jobs Scheduled", value: "7", emoji: "📅", hint: "Next: Tue 9:00a" },
  { label: "Low-Stock SKUs", value: "3", emoji: "📦", hint: "Re-order today" },
];

function Card(
  props: React.PropsWithChildren<{ title?: string; foot?: React.ReactNode; style?: React.CSSProperties }>
) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        padding: 16,
        ...props.style,
      }}
    >
      {props.title && <div style={{ fontWeight: 600, marginBottom: 8 }}>{props.title}</div>}
      <div>{props.children}</div>
      {props.foot && (
        <div style={{ borderTop: "1px solid #f1f5f9", marginTop: 12, paddingTop: 12 }}>{props.foot}</div>
      )}
    </div>
  );
}

function Button({
  children,
  onClick,
  variant = "primary",
}: React.PropsWithChildren<{ onClick?: () => void; variant?: "primary" | "secondary" }>) {
  const base: React.CSSProperties = {
    padding: "10px 14px",
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    cursor: "pointer",
    fontWeight: 600,
  };
  const styles: Record<string, React.CSSProperties> = {
    primary: { ...base, background: "#111827", color: "#fff" },
    secondary: { ...base, background: "#fff", color: "#111827" },
  };
  return (
    <button onClick={onClick} style={styles[variant]}>
      {children}
    </button>
  );
}

export default function App() {
  const [q, setQ] = useState("");

  return (
    <div style={{ minHeight: "100vh", background: "#f6f7f9" }}>
      {/* Top bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "#fff",
          borderBottom: "1px solid #eef2f7",
          padding: "14px 16px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontWeight: 800, letterSpacing: 0.3 }}>FloorPro</div>
          <div style={{ flex: 1 }} />
          <input
            placeholder="Search leads, estimates, jobs…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{
              height: 38,
              width: 320,
              maxWidth: "46vw",
              borderRadius: 10,
              border: "1px solid #e5e7eb",
              padding: "0 12px",
            }}
          />
          <Button>+ Quick Estimate</Button>
        </div>
      </header>

      <main style={{ maxWidth: 1200, margin: "20px auto", padding: "0 16px" }}>
        {/* Stats */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 12,
          }}
        >
          {stats.map((s) => (
            <Card key={s.label}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ color: "#6b7280", fontSize: 13 }}>{s.label}</div>
                <span style={{ fontSize: 18 }}>{s.emoji}</span>
              </div>
              <div style={{ fontSize: 24, fontWeight: 800, marginTop: 4 }}>{s.value}</div>
              {s.hint && <div style={{ color: "#6b7280", fontSize: 12, marginTop: 4 }}>{s.hint}</div>}
            </Card>
          ))}
        </section>

        {/* Quick nav tiles */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 12,
            marginTop: 12,
          }}
        >
          <Card title="Leads" foot={<Button variant="secondary">Open Leads</Button>}>
            <p style={{ color: "#6b7280", margin: 0 }}>Capture and track new customer interest.</p>
          </Card>
          <Card title="Estimates" foot={<Button variant="secondary">View Estimates</Button>}>
            <p style={{ color: "#6b7280", margin: 0 }}>Send professional quotes in minutes.</p>
          </Card>
          <Card title="Jobs" foot={<Button variant="secondary">Schedule Jobs</Button>}>
            <p style={{ color: "#6b7280", margin: 0 }}>Assign crews and manage timelines.</p>
          </Card>
          <Card title="Inventory" foot={<Button variant="secondary">Manage Stock</Button>}>
            <p style={{ color: "#6b7280", margin: 0 }}>Stay ahead of low stock and POs.</p>
          </Card>
        </section>

        {/* Recent activity + tasks */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 12,
            marginTop: 12,
          }}
        >
          <Card title="Recent Activity" foot={<a href="#" style={{ textDecoration: "none" }}>See all →</a>}>
            <ul style={{ margin: 0, paddingLeft: 16, color: "#374151", lineHeight: 1.6 }}>
              <li>Estimate <b>E-2044</b> sent to <b>Megan Ortiz</b> — $3,450</li>
              <li>Job <b>J-3101</b> scheduled for <b>Dan Miller</b> — Tue 9:00a</li>
              <li>Inventory low: <b>LVP Acorn 7mm</b> — 48 boxes left</li>
            </ul>
          </Card>

          <Card title="Quick Actions">
            <div style={{ display: "grid", gap: 8 }}>
              <Button>New Lead</Button>
              <Button>New Estimate</Button>
              <Button>Book Job</Button>
              <Button>Create PO</Button>
            </div>
          </Card>
        </section>
      </main>

      <footer style={{ textAlign: "center", color: "#6b7280", fontSize: 12, padding: 24 }}>
        © {new Date().getFullYear()} SKIPS CUSTOM FLOORING INC — FloorPro
      </footer>
    </div>
  );
}

