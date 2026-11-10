import { ImageResponse } from "next/og";

export const alt = "Tech Prime Global — A Multi-Venture Business Group";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#EEF1EE", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, flex: 1 }}>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: 4, color: "#0F3D3E", fontWeight: 600 }}>
            A MULTI-VENTURE BUSINESS GROUP
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.04, letterSpacing: -3, color: "#121514", fontWeight: 700 }}>
            <span>Building Businesses.</span>
            <span style={{ color: "#66706C" }}>Creating What&apos;s Next.</span>
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#121514", fontWeight: 600 }}>TECH PRIME GLOBAL</div>
        </div>
        <div style={{ width: 360, display: "flex", alignItems: "flex-end", justifyContent: "center", background: "#0F3D3E" }}>
          <div style={{ width: 220, height: 400, background: "#D4E27A", borderTopLeftRadius: 110, borderTopRightRadius: 110, display: "flex" }} />
        </div>
      </div>
    ),
    size,
  );
}
