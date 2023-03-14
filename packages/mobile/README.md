# Poosoap Mobile

- `react-native` v0.71

## 🚧 React Native 프로젝트 구성 in 모노레포

> https://peanut-lover.github.io/blog/react-native-on-mono-repo

- 아래 CLI로 초기 코드 구조를 구성.

```bash
$ npx react-native init PoosoapApp --directory mobile --template react-native-template-typescript
```

위 CLI는 코드 구성의 용도로만 사용하고 추가적으로 모노레포에 적절하게 파일들의 경로를 변경해줘야합니다.

아래 같은 에러가 발생하는데 NX로 Node Module의 경로가 달라져서 그런 것입니다.

```
✖ Installing CocoaPods dependencies (this may take a few minutes)
error
[!] Invalid `Podfile` file: cannot load such file -- /Users/sonjiho/Workspace/poosoap-frontend/packages/mobile/node_modules/react-native/scripts/react_native_pods.
```

## 수정해야하는 코드

`Podfile`파일 과 `Xcode > Build Phases > Bundle React Native code and images` 내의 설정을 수정함.
