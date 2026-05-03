import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './fb_story_scenes/Scene1';
import { Scene2 } from './fb_story_scenes/Scene2';
import { Scene3 } from './fb_story_scenes/Scene3';
import { Scene4 } from './fb_story_scenes/Scene4';

const SCENE_DURATIONS: Record<string, number> = {
  hook: 3000,
  reveal: 6000,
  value: 4000,
  cta: 5000,
};

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  hook: Scene1,
  reveal: Scene2,
  value: Scene3,
  cta: Scene4,
};

export default function FbStoryVideo() {
  const { currentSceneKey } = useVideoPlayer({ durations: SCENE_DURATIONS, loop: true });

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '');
  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#F7F5F0]">
      <AnimatePresence initial={false} mode="wait">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>
    </div>
  );
}
