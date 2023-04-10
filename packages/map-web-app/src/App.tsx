import "./App.css";
import { KakaoMap } from "./components/KakaoMap";
import { useState, useEffect } from 'react';
import { CurrentPositionType } from "./type/positionTypes";

function App() {
  const [currentPosition, setCurrentPosition] = useState<CurrentPositionType>();
  const messageHandler = (event: MessageEvent) => {
      try {
        const {latitude, longitude} = JSON.parse(event.data)
        setCurrentPosition({ latitude, longitude });
      } catch (error) {
        alert(error)
      }
  }

  if(navigator.userAgent.toLowerCase().includes('android')){
    document.addEventListener("message", messageHandler as any, false);
  } else if(navigator.userAgent.toLowerCase().includes('ios')){
    window.addEventListener("message", messageHandler, false); 
  }

  return (
    <div className="container">
      <div className="map-content">
        {
          currentPosition !== undefined && <KakaoMap latitude={currentPosition.latitude} longitude={currentPosition.longitude} />
        }
      </div>
    </div>
  );
}

export default App;
