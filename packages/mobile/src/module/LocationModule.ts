import { NativeModules } from "react-native";
import { CurrentPositionType } from "../type/position";

export default NativeModules.LocationModule as {
    getCurrentPosition(): Promise<CurrentPositionType>;
};