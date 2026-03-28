import { HealthCheck } from "@/components/HealthCheck";

export function App() {
  return (
    <main
      style={{
        maxWidth: "640px",
        margin: "4rem auto",
        padding: "0 1rem",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <h1>Tilt Scaffold</h1>
      <p style={{ color: "#6b7280" }}>
        Your stack is up. Start building.
      </p>
      <HealthCheck />
    </main>
  );
}
