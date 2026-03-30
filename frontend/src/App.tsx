import { useEffect, useState } from "react";

export function App() {
  const [health, setHealth] = useState<{ status: string; version: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/health")
      .then((r) => r.json())
      .then(setHealth)
      .catch(() => setError("Backend unreachable"));
  }, []);

  return (
    <main className="max-w-xl mx-auto mt-16 px-4 font-sans">
      <h1 className="text-3xl font-bold tracking-tight">Starter</h1>
      <p className="mt-1 text-gray-500">Your stack is up. Start building.</p>

      <div className="mt-6">
        {error && <p className="text-red-500">{error}</p>}
        {!health && !error && <p className="text-gray-400">Checking backend...</p>}
        {health && (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm">
            <p><span className="font-medium">Status:</span> {health.status}</p>
            <p><span className="font-medium">Version:</span> {health.version}</p>
          </div>
        )}
      </div>
    </main>
  );
}
