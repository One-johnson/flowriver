import { ImageResponse } from "next/og";

export const alt = "FlowRiver Technologies — design and development studio in Accra";
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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0b1220",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 32, color: "#7dd3fc" }}>
          FlowRiver Technologies
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 980 }}>
          Websites, apps and business systems for organisations in Ghana.
        </div>
        <div style={{ fontSize: 28, color: "#94a3b8" }}>Accra, Ghana</div>
      </div>
    ),
    size
  );
}
