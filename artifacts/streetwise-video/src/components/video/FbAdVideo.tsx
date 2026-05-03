import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './fb_ad_scenes/Scene1';
import { Scene2 } from './fb_ad_scenes/Scene2';
import { Scene3 } from './fb_ad_scenes/Scene3';
import { Scene4 } from './fb_ad_scenes/Scene4';
import { Scene5 } from './fb_ad_scenes/Scene5';

const SCENE_DURATIONS: Record<string, number> = {
  hook: 4000,
  problem: 6000,
  solution: 7000,
  proof: 5000,
  close: 4000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  hook: Scene1,
  problem: Scene2,
  solution: Scene3,
  proof: Scene4,
  close: Scene5,
};

const SCENE_KEYS = Object.keys(SCENE_DURATIONS);

export default function FbAdVideo() {
  const { currentSceneKey } = useVideoPlayer({ durations: SCENE_DURATIONS, loop: true });

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F7F5F0]">
      {/* Persistent Background Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[80vw] h-[80vw] rounded-full blur-[100px] opacity-20"
          style={{ background: 'radial-gradient(circle, #D97706, transparent)' }}
          animate={{
            x: ['-20vw', '10vw', '50vw', '20vw', '-10vw'][SCENE_KEYS.indexOf(baseSceneKey)] ?? '-20vw',
            y: ['-20vh', '40vh', '-10vh', '50vh', '-10vh'][SCENE_KEYS.indexOf(baseSceneKey)] ?? '-20vh',
            scale: [1, 1.2, 0.8, 1.1, 1][SCENE_KEYS.indexOf(baseSceneKey)] ?? 1,
            opacity: baseSceneKey === 'solution' ? 0 : 0.2
          }}
          transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>

      <AnimatePresence initial={false} mode="wait">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>
    </div>
  );
}
