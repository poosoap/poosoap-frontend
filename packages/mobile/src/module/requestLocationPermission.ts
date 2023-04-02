import {PermissionsAndroid, Platform, PermissionsAndroidStatic, ToastAndroid} from 'react-native';
export const requestLocationPermission = async () => {
  return new Promise((resolve, reject) => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]).then((result) => {
        const permissions = [result['android.permission.ACCESS_FINE_LOCATION'] === 'granted', result['android.permission.ACCESS_COARSE_LOCATION'] === 'granted']
        if (permissions[0] && permissions[1]) {
          resolve(true);
        } else {
          resolve(false)
        }
      }).catch((error) => {
        reject(error);
      });
    } else {
      //react-native-geolocation-service의 내장 함수 requestAuthorization()를 이용하면 될거 같네요^^
    };
  });
};
