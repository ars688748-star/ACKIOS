import type { ReactNode } from "react";

type LayoutProps = {
  sidebar: ReactNode;
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
};

export default function Layout({
  sidebar,
  header,
  footer,
  children,
}: LayoutProps): React.JSX.Element {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "240px 1fr",
        gridTemplateRows: "60px 1fr 32px",
        gridTemplateAreas: `
          "sidebar header"
          "sidebar content"
          "sidebar footer"
        `,
        height: "100vh",
        background: "#0f172a",
        color: "#f8fafc",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <aside
        style={{
          gridArea: "sidebar",
          background: "#111827",
          borderRight: "1px solid #1f2937",
        }}
      >
        {sidebar}
      </aside>

      <header
        style={{
          gridArea: "header",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          borderBottom: "1px solid #1f2937",
        }}
      >
        {header}
      </header>

      <main
        style={{
          gridArea: "content",
          padding: "24px",
          overflow: "auto",
        }}
      >
        {children}
      </main>

      <footer
        style={{
          gridArea: "footer",
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          borderTop: "1px solid #1f2937",
          fontSize: 12,
        }}
      >
        {footer}
      </footer>
    </div>
  );
}
