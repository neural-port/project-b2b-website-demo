import { rose, blush } from '@/lib/colors';

interface PadSvgProps {
  type: 'maxi' | 'ultra';
  size?: number;
}

export default function PadSvg({ type, size = 320 }: PadSvgProps) {
  const isMaxi = type === 'maxi';
  const coreH = isMaxi ? 82 : 72;
  const coreY = isMaxi ? 59 : 64;
  const bodyRX = isMaxi ? 55 : 75;

  return (
    <svg
      viewBox="0 0 400 260"
      width={size}
      height={size * 0.65}
      style={{ filter: 'drop-shadow(0 24px 48px rgba(192,68,90,0.18))' }}
    >
      <defs>
        <radialGradient id="bodyFill" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="70%" stopColor="#fefbfa" />
          <stop offset="100%" stopColor="#f9f2ee" />
        </radialGradient>
        <radialGradient id="coreGrad" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#fce8ed" />
          <stop offset="60%" stopColor="#f5d0d9" />
          <stop offset="100%" stopColor="#eeb8c6" />
        </radialGradient>
        <linearGradient id="wingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f5e8e3" />
        </linearGradient>
        <filter id="softShadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="4" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.12" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="gloss" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="40%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      <ellipse cx="200" cy={isMaxi ? 238 : 235} rx="140" ry="8" fill={rose} opacity="0.08" />

      <path
        d={isMaxi
          ? 'M 55 88 C 18 84 8 110 12 138 C 16 158 38 166 55 168'
          : 'M 55 96 C 22 92 12 116 16 140 C 20 156 38 162 55 164'}
        fill="url(#wingGrad)"
        stroke="#f0e4df"
        strokeWidth="0.8"
        filter="url(#softShadow)"
      />

      <path
        d={isMaxi
          ? 'M 345 88 C 382 84 392 110 388 138 C 384 158 362 166 345 168'
          : 'M 345 96 C 378 92 388 116 384 140 C 380 156 362 162 345 164'}
        fill="url(#wingGrad)"
        stroke="#f0e4df"
        strokeWidth="0.8"
        filter="url(#softShadow)"
      />

      <rect
        x="55"
        y={isMaxi ? 32 : 36}
        width="290"
        height={isMaxi ? 190 : 180}
        rx={bodyRX}
        ry={bodyRX}
        fill="url(#bodyFill)"
        stroke="#e8d5cf"
        strokeWidth="0.8"
        filter="url(#softShadow)"
      />

      <rect
        x="55"
        y={isMaxi ? 32 : 36}
        width="290"
        height={isMaxi ? 190 : 180}
        rx={bodyRX}
        ry={bodyRX}
        fill="url(#gloss)"
      />

      <rect
        x="80"
        y={isMaxi ? 54 : 58}
        width="240"
        height={isMaxi ? 146 : 136}
        rx={bodyRX - 20}
        ry={bodyRX - 20}
        fill="none"
        stroke="#e0ccc4"
        strokeWidth="1.2"
        strokeDasharray="4 5"
        opacity="0.7"
      />

      <rect
        x={isMaxi ? 115 : 120}
        y={coreY}
        width={isMaxi ? 170 : 160}
        height={coreH}
        rx="32"
        ry="32"
        fill="url(#coreGrad)"
        opacity="0.7"
      />

      <rect
        x={isMaxi ? 135 : 140}
        y={coreY + 14}
        width={isMaxi ? 130 : 120}
        height={coreH - 28}
        rx="20"
        ry="20"
        fill="white"
        opacity="0.25"
      />

      <line
        x1="200"
        y1={coreY + 8}
        x2="200"
        y2={coreY + coreH - 8}
        stroke="#d9b0b8"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1={isMaxi ? 168 : 172}
        y1={coreY + 12}
        x2={isMaxi ? 168 : 172}
        y2={coreY + coreH - 12}
        stroke="#d9b0b8"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />
      <line
        x1={isMaxi ? 232 : 228}
        y1={coreY + 12}
        x2={isMaxi ? 232 : 228}
        y2={coreY + coreH - 12}
        stroke="#d9b0b8"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.35"
      />

      {[...Array(isMaxi ? 4 : 3)].map((_, row) =>
        [...Array(isMaxi ? 5 : 4)].map((_, col) => {
          const dx = isMaxi ? 135 + col * 38 : 148 + col * 36;
          const dy = isMaxi ? 84 + row * 22 : 88 + row * 22;
          return (
            <rect
              key={`${row}-${col}`}
              x={dx}
              y={dy}
              width="6"
              height="6"
              rx="1.5"
              fill="white"
              opacity="0.2"
              transform={`rotate(45 ${dx + 3} ${dy + 3})`}
            />
          );
        })
      )}

      <circle cx="200" cy={isMaxi ? 127 : 126} r="9" fill={rose} opacity="0.15" />
      <circle cx="200" cy={isMaxi ? 127 : 126} r="4" fill={rose} opacity="0.35" />

      {isMaxi && (
        <>
          <ellipse cx="200" cy="216" rx="110" ry="5" fill={blush} opacity="0.35" />
          <rect x="55" y="210" width="290" height="8" rx="4" fill="#f4a7b9" opacity="0.15" />
          <rect x="55" y="212" width="290" height="3" rx="1.5" fill="#f4a7b9" opacity="0.2" />
        </>
      )}
    </svg>
  );
}
