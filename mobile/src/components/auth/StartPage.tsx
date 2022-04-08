import { Button, View } from 'react-native';
import React from 'react';
import Link from '../../common/Link';
import { styles } from '../../styles/form.styles';
import { ROUTER_KEYS } from '../../data/data';
import { setToken } from '../../api/AsyncStogare';

const StartPage = ({ navigation }) => {
  return (
    <View style={styles.login}>
      <View style={styles.btn}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(ROUTER_KEYS.LOGIN)}
        />
        <Button
          title="Register"
          onPress={() => navigation.navigate(ROUTER_KEYS.REGISTER)}
        />
        {/* <Link
          text = 'Login'
          path = {ROUTER_KEYS.LOGIN}
          params={''}
          style={styles.link}
        >
        </Link> */}
      </View>
      <View style={styles.btn}>
        {/* <Link
          text = 'Register'
          path = {ROUTER_KEYS.REGISTER}
          params={''}
          style={styles.link}
        >
        </Link> */}
      </View>
    </View>
  );
};

export default StartPage;

