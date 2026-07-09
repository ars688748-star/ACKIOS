import {
  LayoutDashboard,
  Wallet,
  ChartCandlestick,
  Cpu,
  Bot,
  Compass,
  Terminal,
  ScrollText,
  Settings
} from "lucide-react";

type MenuItem = {
  title: string;
  icon: React.ReactNode;
};

const menu: MenuItem[] = [
  { title: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { title: "Wallet", icon: <Wallet size={18} /> },
  { title: "Markets", icon: <ChartCandlestick size={18} /> },
  { title: "DEXDO", icon: <Cpu size={18} /> },
  { title: "AI", icon: <Bot size={18} /> },
  { title: "Explorer", icon: <Compass size={18} /> },
  { title: "Terminal", icon: <Terminal size={18} /> },
  { title: "Logs", icon: <ScrollText size={18} /> },
  { title: "Settings", icon: <Settings size={18} /> }
];

export default function Sidebar(): React.JSX.Element {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#111827"
      }}
    >
      <div
        style={{
          padding: 20,
          fontWeight: 700,
          fontSize: 20,
          borderBottom: "1px solid #1f2937"
        }}
      >
        ACKI-FAN
      </div>

      <div style={{ padding: 10 }}>
        {menu.map((item) => (
          <button
            key={item.title}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 14px",
              background: "transparent",
              color: "#e5e7eb",
              border: "none",
              borderRadius: 8,
              cursor: "pointer",
              marginBottom: 6,
              textAlign: "left"
            }}
          >
            {item.icon}
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}