import { Bell, Wifi, Settings } from "lucide-react";

export default function TopBar(): React.JSX.Element {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h2>ACKI-FAN Studio</h2>
      </div>

      <div className="topbar-right">
        <div className="status online">
          <Wifi size={16} />
          <span>Ready</span>
        </div>

        <Bell size={18} className="icon-button" />
        <Settings size={18} className="icon-button" />

        <span className="version">
          v0.1.0
        </span>
      </div>
    </div>
  );
}