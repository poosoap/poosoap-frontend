package com.poosoapapp.module;

import android.Manifest;
import android.content.pm.PackageManager;
import android.location.Location;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.tasks.OnSuccessListener;

public class LocationModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext context;
    @NonNull
    @Override
    public String getName() {
        return "LocationModule";
    }
    public LocationModule(ReactApplicationContext context){
        super(context);
        this.context = context;
    }
    @ReactMethod
    public void getCurrentPosition(Promise promise){
        WritableMap promiseResolveValue = new WritableNativeMap();
        FusedLocationProviderClient fusedLocationProviderClient = LocationServices.getFusedLocationProviderClient(getReactApplicationContext());
        boolean isAccessFineLocationPermissionGranted = context.checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED;
        boolean isAccessCoarseLocationPermissionGranted = context.checkSelfPermission(Manifest.permission.ACCESS_COARSE_LOCATION) == PackageManager.PERMISSION_GRANTED;
        try{
            if(isAccessCoarseLocationPermissionGranted && isAccessFineLocationPermissionGranted) {
                fusedLocationProviderClient.getLastLocation().addOnSuccessListener(new OnSuccessListener<Location>() {
                    @Override
                    public void onSuccess(Location location) {

                        promiseResolveValue.putDouble("latitude", location.getLatitude());
                        promiseResolveValue.putDouble("longitude", location.getLongitude());
                        promise.resolve(promiseResolveValue);
                    }
                });
            } else {
                promise.reject("permissionsError", "permission denied or one permission not granted");
            }
        }catch (Exception error){
            promise.reject(error);
        }

    }
}
