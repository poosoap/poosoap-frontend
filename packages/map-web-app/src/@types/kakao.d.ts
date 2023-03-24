// 공식문서를 보고 특정 API를 도입할때마다 타입을 추가해주세요.
// https://apis.map.kakao.com/web/sample/mapRelayout/

export declare global {
  interface Window {
    kakao: any;
  }
  const kakao: KakaoModule;
}

interface KakaoModule {
  maps: KakaoMap;
}

interface KakaoMap {
  LatLng: LatLng;
  Map: Map;
  load(callback: () => void): void;
}

/**
 * https://apis.map.kakao.com/web/documentation/#LatLng
 */
interface LatLng {
  /**
   *  latitude: 위도
   *  longitude: 경도
   */
  new (latitude: number, longitude: number): LatLng;

  getLat(): number;
  getLng(): number;
}

/**
 * https://apis.map.kakao.com/web/documentation/#Map
 */
interface Map {
  new (node: HTMLElement, option: MapOptions): Map;
}

interface MapOptions {
  center: LatLng; // 중심 좌표 (필수)
  level: number; // 확대 수준 (기본값: 3)
  // mapTypeId MapTypeId : 지도 종류 (기본값: 일반 지도)
  // draggable Boolean : 마우스 드래그, 휠, 모바일 터치를 이용한 시점 변경(이동, 확대, 축소) 가능 여부
  // scrollwheel Boolean : 마우스 휠, 모바일 터치를 이용한 확대 및 축소 가능 여부
  // disableDoubleClick Boolean : 더블클릭 이벤트 및 더블클릭 확대 가능 여부
  // disableDoubleClickZoom Boolean : 더블클릭 확대 가능 여부
  // projectionId String : 투영법 지정 (기본값: kakao.maps.ProjectionId.WCONG)
  // tileAnimation Boolean : 지도 타일 애니메이션 설정 여부 (기본값: true)
  // keyboardShortcuts Boolean | Object : 키보드의 방향키와 +, – 키로 지도 이동,확대,축소 가능 여부 (기본값: false)
  // speed Number : 지도 이동 속도
}
