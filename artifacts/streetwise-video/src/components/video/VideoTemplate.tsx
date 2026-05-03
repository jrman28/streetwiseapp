import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';

export const SCENE_DURATIONS: Record<string, number> = {
  open: 6000,
  problem: 6000,
  solution: 8000,
  product: 6000,
  close: 5000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  open: Scene1,
  problem: Scene2,
  solution: Scene3,
  product: Scene4,
  close: Scene5,
};

const SCENE_KEYS = Object.keys(SCENE_DURATIONS);

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentSceneKey } = useVideoPlayer({ durations, loop });

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const sceneIndex = SCENE_KEYS.indexOf(baseSceneKey);
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[var(--color-bg-light)]">
      
      {/* Persistent Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />
        
        {/* Animated gradients that shift subtly across scenes */}
        <motion.div
          className="absolute w-[80vw] h-[80vw] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, var(--color-accent), transparent)' }}
          animate={{
            x: ['-20vw', '10vw', '50vw', '20vw', '-10vw'][sceneIndex] ?? '-20vw',
            y: ['-20vh', '40vh', '-10vh', '50vh', '-10vh'][sceneIndex] ?? '-20vh',
            scale: ([1, 1.2, 0.8, 1.1, 1][sceneIndex]) ?? 1,
          }}
          transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
        />
        <motion.div
          className="absolute w-[60vw] h-[60vw] rounded-full blur-[80px] opacity-[0.15]"
          style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }}
          animate={{
            x: ['60vw', '40vw', '-10vw', '60vw', '40vw'][sceneIndex] ?? '60vw',
            y: ['60vh', '-10vh', '40vh', '-20vh', '50vh'][sceneIndex] ?? '60vh',
            scale: ([0.8, 1.1, 1, 0.9, 1.2][sceneIndex]) ?? 0.8,
          }}
          transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>

      <AnimatePresence initial={false} mode="wait">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>
    </div>
  );
}
