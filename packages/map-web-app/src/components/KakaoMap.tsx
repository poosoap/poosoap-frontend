import React, { useEffect, useRef } from "react";
import { useLoadKakaoScript } from "../hooks/useLoadKakaoScript";
import "./KakaoMap.css";

export const KakaoMap: React.FC = () => {
  const [isLoaded, error] = useLoadKakaoScript();

  const mapRef = useRef(null);

  useEffect(() => {
    if (isLoaded) {
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      new kakao.maps.Map(mapRef.current, options);
    }

    return () => {
      // TODO: kakao clear 필요하지 않나?
    };
  }, [isLoaded]);

  if (error) {
    return (
      <div>
        현재는 지도 정보를 불러올 수 없습니다. (개발자에게 문의해주세요.)
      </div>
    );
  }

  return <div ref={mapRef} className="kakao-map"></div>;
};
