import { HardDrive, Wifi } from 'lucide-react'

export default function StatusBar(): React.JSX.Element {
  return (
    <div className="statusbar">
      <div className="statusbar-left">
        <span>
          <Wifi size={14} />
          Ready
        </span>

        <span>
          <HardDrive size={14} />
          Wallet Offline
        </span>
      </div>

      <div className="statusbar-right">
        ACKI-FAN Studio v0.1.0
      </div>
    </div>
  )
}