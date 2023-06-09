import React, { useEffect, useRef } from "react";
import { useLoadKakaoScript } from "../hooks/useLoadKakaoScript";
import "./KakaoMap.css";
import { CurrentPositionType } from "../type/positionTypes";
export const KakaoMap: React.FC<CurrentPositionType> = ({
  latitude,
  longitude,
}) => {
  const [isLoaded, error] = useLoadKakaoScript();

  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isLoaded && mapRef.current !== null) {
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
        level: 2, //지도의 레벨(확대, 축소 정도)
      };
      new kakao.maps.Map(mapRef.current, options);
    }
  }, [isLoaded]);

  if (error) {
    return (
      <div>
        현재는 지도 정보를 불러올 수 없습니다. (개발자에게 문의해주세요.)!!!!!!
      </div>
    );
  }

  return (
    <div ref={mapRef} className="kakao-map">
    </div>
  );
};