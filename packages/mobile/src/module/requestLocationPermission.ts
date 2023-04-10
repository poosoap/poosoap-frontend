import {PermissionsAndroid, Platform} from 'react-native';
export const requestLocationPermission = async (): Promise<{fineLocationPermission: boolean, coarseLocationPermission: boolean}> => {
  return new Promise((resolve, reject) => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ])
        .then(result => {
          const permissions: boolean[] = [
            result['android.permission.ACCESS_COARSE_LOCATION'] === 'granted',
            result['android.permission.ACCESS_FINE_LOCATION'] === 'granted'
          ];
          resolve({"fineLocationPermission": permissions[1], "coarseLocationPermission": permissions[0]});
        })
        .catch(error => {
          reject(error);
        });
    } else {
      console.log('ios');
    };
  });
};
