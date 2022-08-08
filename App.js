import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoarding from './components/OnBoarding';
//====================AWS_BEGIN=======================
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)
import {withAuthenticator} from 'aws-amplify-react-native'
//====================AWES_END==================
const App = () => {
  return (
    <View style={styles.container}>
      <OnBoarding/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default (App);