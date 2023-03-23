# 🚽 Poosoap Frontend

이 프로젝트는 Poosoap 서비스의 프론트엔드 프로젝트들을 관리하는 모노레포입니다.

> NX의 package-based-repo-tutorial를 참고했습니다.
> https://nx.dev/getting-started/package-based-repo-tutorial

# Projects

| Project | Type      | Comments                                        |
| ------- | --------- | ----------------------------------------------- |
| mobile  | RN        | poosoap 모바일 어플리케이션 프로젝트            |
| map-app | React Web | Kakao Map을 이용한 화장실 위치를 나타내는 웹 앱 |

# How to add React Web Project

NX에서 제공하는 다양한 세팅을 이용하기 위해서 `@nrwl/react` 라는 플러그인으로 리액트 웹 프로젝트 세팅을 해봤습니다.

> 아래 CLI를 통해 환경 구성
> https://nx.dev/packages/react#nrwlreact

```bash
npx nx g @nrwl/react:app map-web-app
```
