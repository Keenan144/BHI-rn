# Getting Started

Pre-requisites:

`node, yarn, react-native, cocoapod`

To start app

```
$ yarn install
$ cd ios; pod install; cd ..
$ react-native run-ios
```

**Glog and libfishhook.a errors can happen if this is the first time you are building the app**

To fix Glog (config.h)

```
$ cd node_modules/react-native/third-party/glog-x.x.x
$ ../../scripts/ios-configure-glog.sh
```

To fix RTCWebhook (libfishhook.a)
> The fix it to open xcode, go to libraries, click on rtcwebsocket, go to its build settings, link binary resources, then remove libfishhook.a and add it back. Its being referenced incorrectly by xcode