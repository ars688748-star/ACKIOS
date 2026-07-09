export default function Dashboard(): React.JSX.Element {
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to ACKI-FAN Studio</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          marginTop: 24,
        }}
      >
        <div className="card">
          <h3>Wallet</h3>
          <p>Offline</p>
        </div>

        <div className="card">
          <h3>Network</h3>
          <p>Shellnet</p>
        </div>

        <div className="card">
          <h3>DEXDO</h3>
          <p>Not Running</p>
        </div>

        <div className="card">
          <h3>AI</h3>
          <p>Ready</p>
        </div>
      </div>
    </div>
  );
}