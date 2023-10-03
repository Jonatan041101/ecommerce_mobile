import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomStackParamList} from '../interfaces/screens-bottoms.interface';
import HomeScreen from '../../screens/Home/Home.screen';
import TabButton from '../components/TabButton';
import {configBottomNavigation} from '../../configuration/navigators/screens.configuration';

// userId seria el params dinamico despues todo es igual
// type Props = NativeStackScreenProps<RootStackParamList, 'Details', 'userId'>;

// const DetailsScreen = ({navigation, route}: Props) => {
//   return (
//     <View>
//       <Text>Details Puto Screen</Text>
//       <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('Home')}
//       />
//       <Text>{route?.params?.userId ?? 'HOLA'}</Text>
//     </View>
//   );
// };

const Tab = createBottomTabNavigator<BottomStackParamList>();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="HomeApp"
      screenOptions={configBottomNavigation}>
      <Tab.Screen
        name="HomeApp"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarButton: ({onPress, accessibilityState}) => (
            <TabButton
              nameIcon="card-minus"
              nameScreen="HomeApp"
              onPress={onPress}
              accessibilityState={accessibilityState}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Home;
