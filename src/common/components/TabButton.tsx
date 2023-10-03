import {
  AccessibilityState,
  GestureResponderEvent,
  TouchableOpacity,
} from 'react-native';
import {BottomStackParamList} from '../interfaces/screens-bottoms.interface';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  onPress?: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent,
  ) => void;
  accessibilityState?: AccessibilityState;
  nameScreen: keyof BottomStackParamList;
  nameIcon: string;
}
export default function TabButton({
  onPress,
  accessibilityState,
  nameIcon,
  nameScreen,
}: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <MaterialCommunityIcons
        name={nameIcon}
        size={30}
        color={accessibilityState?.selected ? 'blue' : 'lightblue'}
      />
    </TouchableOpacity>
  );
}
