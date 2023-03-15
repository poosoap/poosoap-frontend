# 추가 세팅 내용

모노레포의 구성에 알맞게 Podfile 내 `node_module`의 경로를 변경함.

- 최상단 rb import 경로 수정

```rb
require_relative '../../../node_modules/react-native/scripts/react_native_pods'
require_relative '../../../node_modules/@react-native-community/cli-platform-ios/native_modules'

```

- `node_modules/react-native/scripts/react_native_pods.rb`의 `post_install` 함수의 인자에 알맞은 node_module 경로를 변경

```rb
post_install do |installer|
    react_native_post_install(
      installer,
      "../../../node_modules/react-native",
      # Set `mac_catalyst_enabled` to `true` in order to apply patches
      # necessary for Mac Catalyst builds
      :mac_catalyst_enabled => false
    )
```
