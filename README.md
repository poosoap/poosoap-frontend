# 🚽 Poosoap Frontend

이 프로젝트는 Poosoap 서비스의 프론트엔드 프로젝트들을 관리하는 모노레포입니다.

> NX의 package-based-repo-tutorial를 참고했습니다.
> https://nx.dev/getting-started/package-based-repo-tutorial

# Build

```bash

$ npx nx build is-odd

```

# React Native 프로젝트 구성

- React Native 프로젝트 구성

아래 CLI로 환경 구성하

```bash
$ npx react-native init PoosoapApp --directory mobile --template react-native-template-typescript
```

아래 같은 에러가 발생하는데 NX로 Node Module의 경로가 달라져서 그런 것입니다. 위 CLI는 코드 구성의 용도로만 사용하고 추가적으로 모노레포에 적절하게 파일들의 경로를 변경해줘야합니다.

```
✔ Downloading template
✔ Copying template
✔ Processing template
✔ Installing Bundler
✖ Installing CocoaPods dependencies (this may take a few minutes)
error
[!] Invalid `Podfile` file: cannot load such file -- /Users/sonjiho/Workspace/poosoap-frontend/packages/mobile/node_modules/react-native/scripts/react_native_pods.

 #  from /Users/sonjiho/Workspace/poosoap-frontend/packages/mobile/ios/Podfile:1
 #  -------------------------------------------
 >  require_relative '../node_modules/react-native/scripts/react_native_pods'
 #  require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'
 #  -------------------------------------------

✖ Installing CocoaPods dependencies (this may take a few minutes)
error Error: Looks like your iOS environment is not properly set. Please go to https://reactnative.dev/docs/next/environment-setup and follow the React Native CLI QuickStart guide for macOS and iOS.
Error: Error: Looks like your iOS environment is not properly set. Please go to https://reactnative.dev/docs/next/environment-setup and follow the React Native CLI QuickStart guide for macOS and iOS.
```
