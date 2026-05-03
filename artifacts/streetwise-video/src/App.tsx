import VideoWithControls from "@/components/video/VideoWithControls";
import FbAdVideo from "@/components/video/FbAdVideo";
import FbStoryVideo from "@/components/video/FbStoryVideo";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export default function App() {
  const path = window.location.pathname;
  if (path === basePath + "/fb-ad" || path === basePath + "/fb-ad/") return <FbAdVideo />;
  if (path === basePath + "/fb-story" || path === basePath + "/fb-story/") return <FbStoryVideo />;
  return <VideoWithControls />;
}
