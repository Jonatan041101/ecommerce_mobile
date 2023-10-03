import {View, Text} from 'react-native';
import {POPPINS} from '../../common/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomStackParamList} from '../../common/interfaces/screens-bottoms.interface';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style/home.style';
import Location from './assets/Location';
type Props = NativeStackScreenProps<BottomStackParamList, 'HomeApp'>;

export default function HomeScreen({navigation}: Props) {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}></View>
        <Location />
        <Text style={{fontFamily: POPPINS.BOLD}}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}
