// 우선 전역적으로 Kakao Typescript 처리를 하고 접근해야할 듯함.
// 공식적으로 지원하지는 않음.
export declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}
