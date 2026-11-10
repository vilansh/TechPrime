import { ImageResponse } from "next/og";

export const alt = "Tech Prime Global — A Multi-Venture Business Group";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#F4F0E9",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, flex: 1 }}>
          <div style={{ display: "flex", fontSize: 18, letterSpacing: 6, color: "#641C32" }}>A MULTI-VENTURE BUSINESS GROUP</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 76, lineHeight: 1.05, color: "#191919" }}>
            <span>Building Businesses.</span>
            <span style={{ color: "#641C32", fontStyle: "italic" }}>Creating What&apos;s Next.</span>
          </div>
          <div style={{ display: "flex", fontSize: 22, letterSpacing: 8, color: "#191919" }}>TECH PRIME GLOBAL</div>
        </div>
        <div style={{ width: 360, display: "flex", alignItems: "flex-end", justifyContent: "center", background: "#F8F6F2", borderLeft: "1px solid #DDD5C8" }}>
          <div style={{ width: 220, height: 400, background: "#641C32", borderTopLeftRadius: 110, borderTopRightRadius: 110, display: "flex" }} />
        </div>
      </div>
    ),
    size,
  );
}
