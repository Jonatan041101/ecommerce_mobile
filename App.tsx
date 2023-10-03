import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/common/screens/Login/Login.screen';
import {RootStackParamList} from './src/common/interfaces/screens-stack.interface';
import {configStackNavigation} from './src/configuration/navigators/screens.configuration';
import Home from './src/common/navigation/BottomTabNavigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={configStackNavigation}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
