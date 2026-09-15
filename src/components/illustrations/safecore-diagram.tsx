export function SafeCoreDiagram({ className }: { className?: string }) {
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="safecore-diagram-title"
        className="h-full w-full"
      >
        <title id="safecore-diagram-title">
          Conceptual illustration of the SafeCore module surrounded by connected
          capabilities
        </title>
        <circle cx="240" cy="240" r="210" stroke="white" strokeOpacity="0.08" />
        <circle cx="240" cy="240" r="160" stroke="white" strokeOpacity="0.12" />
        <circle cx="240" cy="240" r="110" stroke="white" strokeOpacity="0.16" />

        {[
          { angle: -90, label: "GNSS" },
          { angle: -18, label: "Cellular" },
          { angle: 54, label: "Bluetooth" },
          { angle: 126, label: "Sensors" },
          { angle: 198, label: "Secure ID" },
          { angle: 270, label: "Battery" },
        ].map((node) => {
          const rad = (node.angle * Math.PI) / 180;
          const r = 160;
          const x = 240 + r * Math.cos(rad);
          const y = 240 + r * Math.sin(rad);
          return (
            <g key={node.label}>
              <line
                x1="240"
                y1="240"
                x2={x}
                y2={y}
                stroke="white"
                strokeOpacity="0.18"
              />
              <circle cx={x} cy={y} r="26" fill="#0f2c33" stroke="#2dd4cf" strokeOpacity="0.6" />
              <text
                x={x}
                y={y + 44}
                textAnchor="middle"
                fontSize="12"
                fill="white"
                fillOpacity="0.7"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        <rect
          x="196"
          y="196"
          width="88"
          height="88"
          rx="24"
          fill="#0b7285"
          stroke="#7ee8e3"
          strokeWidth="1.5"
        />
        <path
          d="M240 214c12 0 22 8 22 20v6c0 15-10 24-22 28-12-4-22-13-22-28v-6c0-12 10-20 22-20Z"
          fill="white"
          fillOpacity="0.92"
        />
      </svg>
      <figcaption className="mt-3 text-center text-xs text-white/50">
        Concept illustration — SafeCore module and connected capabilities. Not a
        product photo.
      </figcaption>
    </figure>
  );
}
