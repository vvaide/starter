import { useHealth } from "@/hooks/useHealth";

export function HealthCheck() {
  const { data, error, loading } = useHealth();

  if (loading) return <p>Checking backend...</p>;
  if (error) return <p style={{ color: "#ef4444" }}>Backend error: {error}</p>;
  if (!data) return null;

  return (
    <div
      style={{
        padding: "1rem",
        borderRadius: "8px",
        background: "#f0fdf4",
        border: "1px solid #bbf7d0",
      }}
    >
      <p style={{ margin: 0 }}>
        <strong>Status:</strong> {data.status}
      </p>
      <p style={{ margin: 0 }}>
        <strong>Version:</strong> {data.version}
      </p>
    </div>
  );
}
