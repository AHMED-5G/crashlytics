import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import crashlytics from '@react-native-firebase/crashlytics';
import MedButton from './src/components/mini/MedButton';

type SignInForm = {
  email: string;
};

function onSignIn(form: SignInForm): void {
  crashlytics().log('User signed in.');
  crashlytics().setAttribute('key', 'value');
  crashlytics().setAttribute('userEmail', form.email);
}

export default function App() {
  const [enableCrash, setEnableCrash] = useState(false);
  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  const crash = () => {
    crashlytics().recordError(new Error('test Error'));
    crashlytics().crash();
  };

  return (
    <View style={styles.container}>
      <View>
        <MedButton
          title="Sign In"
          borderRadius={10}
          onPress={() => {
            setEnableCrash(true);
            onSignIn({email: 'a@a.com'});
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <MedButton
          disabled={!enableCrash}
          borderRadius={10}
          color="#db4437"
          title="Test Crash"
          onPress={() => crash()}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  },
});
