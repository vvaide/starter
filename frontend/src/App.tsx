import { useEffect, useState } from "react";



export function App() {
  const [isHealthy, setIsHealthy] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then(data => setIsHealthy(() => !!data.status))
      .catch(() => setIsHealthy(false));
  }, []);

  return (
    <main className="max-w-xl mx-auto mt-16 px-4 font-sans">
      <h1 className="text-3xl font-bold tracking-tight">Hello World</h1>
      <p className="mt-1 text-gray-500">Your stack is up.</p>

      <div className="mt-6">
        {!isHealthy && <p className="text-gray-400">Checking backend...</p>}
        {isHealthy ? (
          <div className="rounded-lg border border-green-200 bg-green-50 p-4 text-sm">
            <p><span className="font-medium">Status:</span> Backend is healthy</p>
          </div>
        ) : (
          <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm">
            <p><span className="font-medium">Status:</span> Backend is unhealthy</p>
          </div>
        )}
      </div>
    </main>
  );
}
