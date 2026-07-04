import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

export interface CosmicIllustrationProps {
  variant?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  theme?: 'light' | 'dark';
  animated?: boolean;
}

function useResolvedTheme(theme?: CosmicIllustrationProps['theme']) {
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(theme ?? 'light');

  useEffect(() => {
    if (theme) {
      setResolvedTheme(theme);
      return;
    }

    const updateTheme = () => {
      const root = document.documentElement;
      setResolvedTheme(root.classList.contains('dark') ? 'dark' : 'light');
    };

    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, [theme]);

  return resolvedTheme;
}

function useThemeColors(theme: 'light' | 'dark') {
  return useMemo(() => {
    if (theme === 'dark') {
      return {
        bg1: '#070913',
        bg2: '#180d34',
        bg3: '#26124c',
        accent: '#9b8cff',
        accent2: '#38bdf8',
        accent3: '#ec4899',
        ink: '#f8fafc',
        muted: '#c7d2fe',
        glow: 'rgba(255,255,255,0.12)',
        line: 'rgba(255,255,255,0.16)',
        shell: 'rgba(255,255,255,0.08)',
      };
    }

    return {
      bg1: '#faf7ff',
      bg2: '#eff4ff',
      bg3: '#f2e8ff',
      accent: '#7c3aed',
      accent2: '#38bdf8',
      accent3: '#ec4899',
      ink: '#0f172a',
      muted: '#64748b',
      glow: 'rgba(255,255,255,0.7)',
      line: 'rgba(124, 58, 237, 0.14)',
      shell: 'rgba(255,255,255,0.72)',
    };
  }, [theme]);
}

function DecorativeHalo({ colors }: { colors: ReturnType<typeof useThemeColors> }) {
  return (
    <>
      <circle cx="74" cy="78" r="42" fill={colors.accent} opacity="0.12" />
      <circle cx="206" cy="82" r="38" fill={colors.accent2} opacity="0.12" />
      <circle cx="150" cy="154" r="56" fill={colors.accent3} opacity="0.08" />
    </>
  );
}

function StarField({ colors }: { colors: ReturnType<typeof useThemeColors> }) {
  return (
    <g opacity="0.9">
      <circle cx="43" cy="56" r="1.2" fill={colors.ink} opacity="0.78" />
      <circle cx="226" cy="48" r="1.3" fill={colors.ink} opacity="0.7" />
      <circle cx="188" cy="34" r="0.9" fill={colors.ink} opacity="0.54" />
      <circle cx="116" cy="28" r="0.8" fill={colors.ink} opacity="0.6" />
      <circle cx="252" cy="132" r="1.1" fill={colors.ink} opacity="0.62" />
      <circle cx="28" cy="148" r="1.1" fill={colors.ink} opacity="0.5" />
    </g>
  );
}

function BaseScene({ colors, children }: { colors: ReturnType<typeof useThemeColors>; children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cosmic illustration">
      <rect width="280" height="180" rx="28" fill="url(#bg)" />
      <rect x="6" y="6" width="268" height="168" rx="24" stroke={colors.line} strokeWidth="1" />
      <circle cx="40" cy="40" r="70" fill={colors.accent} opacity="0.06" />
      <circle cx="218" cy="140" r="86" fill={colors.accent2} opacity="0.06" />
      <rect x="0" y="0" width="280" height="180" rx="28" fill="url(#grain)" opacity="0.5" />
      <DecorativeHalo colors={colors} />
      <StarField colors={colors} />
      {children}
      <defs>
        <linearGradient id="bg" x1="24" y1="18" x2="268" y2="166" gradientUnits="userSpaceOnUse">
          <stop stopColor={colors.bg1} />
          <stop offset="0.58" stopColor={colors.bg2} />
          <stop offset="1" stopColor={colors.bg3} />
        </linearGradient>
        <radialGradient id="grain" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(140 90) rotate(90) scale(110 170)">
          <stop stopColor={colors.glow} />
          <stop offset="1" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function MotionWrapper({ animated, children }: { animated?: boolean; children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  if (!animated || shouldReduceMotion) {
    return <div className="h-full w-full">{children}</div>;
  }

  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [0, 0.8, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
      className="h-full w-full"
    >
      {children}
    </motion.div>
  );
}

export function CosmicIllustration({ variant = 'orbital', width = '100%', height = '100%', className, theme, animated = true }: CosmicIllustrationProps) {
  const resolvedTheme = useResolvedTheme(theme);
  const colors = useThemeColors(resolvedTheme);

  const scene = (() => {
    switch (variant) {
      case 'robotics':
      case 'electronics':
      case 'cad':
        return (
          <g>
            <ellipse cx="140" cy="138" rx="70" ry="24" fill={colors.glow} />
            <circle cx="138" cy="80" r="32" fill="url(#robotCore)" stroke={colors.accent} strokeWidth="2" />
            <rect x="110" y="64" width="56" height="28" rx="14" fill={colors.shell} stroke={colors.line} />
            <rect x="122" y="92" width="32" height="26" rx="10" fill={colors.shell} stroke={colors.line} />
            <circle cx="128" cy="80" r="3.5" fill={colors.accent2} />
            <circle cx="148" cy="80" r="3.5" fill={colors.accent2} />
            <path d="M90 88C78 94 68 104 58 116" stroke={colors.accent} strokeWidth="3" strokeLinecap="round" />
            <path d="M186 88C198 94 208 104 218 116" stroke={colors.accent} strokeWidth="3" strokeLinecap="round" />
            <path d="M110 112L84 132" stroke={colors.accent2} strokeWidth="2.5" strokeLinecap="round" />
            <path d="M168 112L194 132" stroke={colors.accent2} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="96" cy="138" r="8" fill={colors.shell} stroke={colors.line} />
            <circle cx="180" cy="138" r="8" fill={colors.shell} stroke={colors.line} />
            <circle cx="140" cy="110" r="5" fill={colors.accent3} />
            <path d="M76 56C84 38 102 24 122 18" stroke={colors.line} strokeWidth="1.4" strokeDasharray="4 4" />
            <path d="M202 56C194 38 176 24 158 18" stroke={colors.line} strokeWidth="1.4" strokeDasharray="4 4" />
            <defs>
              <linearGradient id="robotCore" x1="108" y1="48" x2="168" y2="112" gradientUnits="userSpaceOnUse">
                <stop stopColor={colors.shell} />
                <stop offset="1" stopColor={colors.bg3} />
              </linearGradient>
            </defs>
          </g>
        );
      case 'cyber':
        return (
          <g>
            <circle cx="144" cy="92" r="42" fill={colors.glow} />
            <path d="M144 46L172 60V92L144 106L116 92V60L144 46Z" fill={colors.shell} stroke={colors.accent} strokeWidth="2.2" />
            <path d="M144 58L158 68V90L144 100L130 90V68L144 58Z" fill={colors.bg3} stroke={colors.accent2} strokeWidth="1.4" />
            <path d="M132 112C138 122 150 122 156 112" stroke={colors.accent} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="144" cy="90" r="6" fill={colors.accent3} />
            <circle cx="94" cy="54" r="10" fill={colors.shell} stroke={colors.line} />
            <circle cx="196" cy="132" r="10" fill={colors.shell} stroke={colors.line} />
            <path d="M92 54L64 36" stroke={colors.line} strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M198 132L228 148" stroke={colors.line} strokeWidth="1.2" strokeDasharray="3 3" />
          </g>
        );
      case 'ai':
        return (
          <g>
            <circle cx="140" cy="84" r="38" fill={colors.shell} stroke={colors.accent} strokeWidth="2" />
            <path d="M140 54C124 54 112 66 112 82C112 100 126 112 140 112C154 112 168 100 168 82C168 66 156 54 140 54Z" fill={colors.bg3} stroke={colors.accent2} strokeWidth="1.5" />
            <circle cx="132" cy="82" r="4" fill={colors.accent3} />
            <circle cx="148" cy="82" r="4" fill={colors.accent2} />
            <path d="M96 76C84 62 72 54 56 54" stroke={colors.line} strokeWidth="1.6" strokeDasharray="4 4" />
            <path d="M184 76C196 62 208 54 224 54" stroke={colors.line} strokeWidth="1.6" strokeDasharray="4 4" />
            <path d="M104 124C116 132 124 138 140 138C156 138 164 132 176 124" stroke={colors.accent} strokeWidth="2.4" strokeLinecap="round" />
            <circle cx="100" cy="128" r="6" fill={colors.shell} stroke={colors.line} />
            <circle cx="180" cy="128" r="6" fill={colors.shell} stroke={colors.line} />
            <path d="M96 46C108 34 124 28 140 28C156 28 172 34 184 46" stroke={colors.line} strokeWidth="1.2" strokeDasharray="4 4" />
          </g>
        );
      case 'design':
      case 'web':
        return (
          <g>
            <rect x="78" y="56" width="124" height="76" rx="18" fill={colors.shell} stroke={colors.accent} strokeWidth="2" />
            <rect x="92" y="70" width="44" height="22" rx="8" fill={colors.bg3} stroke={colors.line} />
            <rect x="146" y="70" width="34" height="22" rx="8" fill={colors.bg3} stroke={colors.line} />
            <rect x="92" y="100" width="88" height="18" rx="8" fill={colors.bg3} stroke={colors.line} />
            <path d="M72 44C90 26 114 18 140 18C166 18 190 26 208 44" stroke={colors.line} strokeWidth="1.2" strokeDasharray="4 4" />
            <path d="M66 126C90 142 116 150 140 150C164 150 190 142 214 126" stroke={colors.line} strokeWidth="1.2" strokeDasharray="4 4" />
            <circle cx="92" cy="132" r="8" fill={colors.shell} stroke={colors.line} />
            <circle cx="190" cy="132" r="8" fill={colors.shell} stroke={colors.line} />
            <circle cx="140" cy="38" r="7" fill={colors.accent2} />
          </g>
        );
      case 'treasure':
        return (
          <g>
            <circle cx="140" cy="96" r="40" fill={colors.shell} stroke={colors.accent} strokeWidth="2" />
            <path d="M140 60L154 84L140 126L126 84L140 60Z" fill={colors.bg3} stroke={colors.accent2} strokeWidth="1.5" />
            <path d="M140 56L156 76L140 138L124 76L140 56Z" stroke={colors.accent3} strokeWidth="1.5" opacity="0.7" />
            <path d="M88 50L70 30" stroke={colors.line} strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M192 50L210 30" stroke={colors.line} strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M74 110C96 122 120 130 140 130C160 130 184 122 206 110" stroke={colors.line} strokeWidth="1.2" strokeDasharray="4 4" />
            <circle cx="140" cy="96" r="6" fill={colors.accent3} />
          </g>
        );
      case 'quiz':
        return (
          <g>
            <circle cx="140" cy="92" r="36" fill={colors.shell} stroke={colors.accent} strokeWidth="2" />
            <path d="M126 76C126 68 132 60 140 60C148 60 154 68 154 76C154 86 144 92 144 102" stroke={colors.accent2} strokeWidth="2" strokeLinecap="round" />
            <circle cx="144" cy="114" r="4" fill={colors.accent3} />
            <path d="M88 52C100 38 118 30 140 30C162 30 180 38 192 52" stroke={colors.line} strokeWidth="1.2" strokeDasharray="4 4" />
            <path d="M92 128C114 142 128 150 140 150C152 150 166 142 188 128" stroke={colors.line} strokeWidth="1.2" strokeDasharray="4 4" />
            <circle cx="86" cy="90" r="8" fill={colors.shell} stroke={colors.line} />
            <circle cx="194" cy="90" r="8" fill={colors.shell} stroke={colors.line} />
          </g>
        );
      case 'hero':
      case 'about':
        return (
          <g>
            <circle cx="138" cy="88" r="38" fill={colors.glow} stroke={colors.accent} strokeWidth="2" />
            <circle cx="138" cy="88" r="24" fill={colors.bg3} stroke={colors.accent2} strokeWidth="1.5" />
            <path d="M86 82C100 58 120 46 138 46C156 46 176 58 190 82" stroke={colors.line} strokeWidth="1.2" strokeDasharray="4 4" />
            <path d="M104 128C116 140 128 148 138 148C148 148 160 140 172 128" stroke={colors.line} strokeWidth="1.2" strokeDasharray="4 4" />
            <path d="M66 90C56 72 50 60 40 46" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" />
            <path d="M206 90C216 72 222 60 232 46" stroke={colors.accent2} strokeWidth="2" strokeLinecap="round" />
            <path d="M104 44L90 22" stroke={colors.line} strokeWidth="1.2" strokeDasharray="3 3" />
            <path d="M172 44L186 22" stroke={colors.line} strokeWidth="1.2" strokeDasharray="3 3" />
          </g>
        );
      default:
        return (
          <g>
            <circle cx="140" cy="84" r="34" fill={colors.glow} stroke={colors.accent} strokeWidth="2" />
            <circle cx="140" cy="84" r="20" fill={colors.bg3} stroke={colors.accent2} strokeWidth="1.5" />
            <path d="M98 56C112 40 126 32 140 32C154 32 168 40 182 56" stroke={colors.line} strokeWidth="1.2" strokeDasharray="4 4" />
            <path d="M92 120C112 138 124 146 140 146C156 146 168 138 188 120" stroke={colors.line} strokeWidth="1.2" strokeDasharray="4 4" />
            <path d="M76 96C58 86 46 78 34 66" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" />
            <path d="M204 96C222 86 234 78 246 66" stroke={colors.accent2} strokeWidth="2" strokeLinecap="round" />
          </g>
        );
    }
  })();

  return (
    <div className={className} style={{ width, height }}>
      <MotionWrapper animated={animated}>
        <BaseScene colors={colors}>{scene}</BaseScene>
      </MotionWrapper>
    </div>
  );
}

export function HeroIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="hero" {...props} />;
}

export function ObservatoryIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="about" {...props} />;
}

export function AIIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="ai" {...props} />;
}

export function CyberSecurityIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="cyber" {...props} />;
}

export function RoboticsIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="robotics" {...props} />;
}

export function DesignIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="design" {...props} />;
}

export function WebIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="web" {...props} />;
}

export function TreasureIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="treasure" {...props} />;
}

export function QuizIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="quiz" {...props} />;
}

export function SatelliteIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="electronics" {...props} />;
}

export function TerminalIllustration(props: Omit<CosmicIllustrationProps, 'variant'>) {
  return <CosmicIllustration variant="web" {...props} />;
}
