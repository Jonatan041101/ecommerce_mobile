import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../interfaces/screens-stack.interface';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const LoginScreen = ({navigation}: Props) => {
  return (
    <View>
      <Text>Login</Text>
      <Button onPress={() => navigation.push('Home')}>
        <Text>Home</Text>
      </Button>
    </View>
  );
};

export default LoginScreen;
