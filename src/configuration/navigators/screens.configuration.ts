import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const configBottomNavigation: BottomTabNavigationOptions = {
  tabBarHideOnKeyboard: true,
  //   tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    left: 16,
    borderRadius: 10,
    elevation: 0,
    height: 60,
  },
};
export const configStackNavigation: NativeStackNavigationOptions = {
  headerShown: false,
};
