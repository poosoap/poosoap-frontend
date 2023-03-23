import { useEffect, useState } from "react";

/**
 * Warning: Kakao 개발자 대시보드에 등록된 도메인과 개발 서버의 domain이 같아야 script가 받아와집니다.
 * localhost:8080 로 테스트할 수 있음.
 */
const KAKAO_MAP_SCRIPT_SOURCE = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY}&autoload=false`;

/**
 * Kakao Script 등록 및 중복 체크
 */
export const useLoadKakaoScript = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    let script: HTMLScriptElement | null = document.querySelector(
      `script[src="${KAKAO_MAP_SCRIPT_SOURCE}"]`
    );

    if (!script) {
      script = document.createElement("script");
      script.src = KAKAO_MAP_SCRIPT_SOURCE;
      script.async = true;
      script.onerror = (e: any) => {
        setError(e);
        // TODO: Add user behavior event when ready to use analytic events.
      };
      document.body.appendChild(script);
    }

    const handleLoaded = () => {
      kakao.maps.load(function () {
        // v3 스크립트가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        // Ref. https://apis.map.kakao.com/web/documentation/#load_load
        setIsLoaded(true);
      });
    };

    script?.addEventListener("load", handleLoaded); // 리소스가 전부 받아졌을때 호출됨.
    return () => {
      script?.removeEventListener("load", handleLoaded);
    };
  }, []);

  return [isLoaded, error];
};
