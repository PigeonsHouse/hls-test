import { useEffect, useRef } from 'react';
import './App.css';
import Hls from 'hls.js';

function App() {
  let video = useRef(null);
  useEffect(() => {
    if (video.current == null) {
      return
    }
    if (Hls.isSupported()) {
      let hls = new Hls();
      hls.loadSource('/live/test/hoge.m3u8');
      hls.attachMedia(video.current)
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <video ref={video} src='/live/test/test.m3u8' controls></video>
      </header>
    </div>
  );
}

export default App;
