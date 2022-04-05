import { View } from 'react-native';
import React from 'react';
import Link from '../../common/Link';
import { styles } from '../../styles/form.styles';
import { ROUTER_KEYS } from '../../data/data';

const StartPage = () => {
  return (
    <View style={styles.login}>
      <View style={styles.btn}>
        <Link
          text = 'Login'
          path = {ROUTER_KEYS.LOGIN}
          params={''}
          style={styles.link}
        >
        </Link>
      </View>
      <View style={styles.btn}>
        <Link
          text = 'Register'
          path = {ROUTER_KEYS.REGISTER}
          params={''}
          style={styles.link}
        >
        </Link>
      </View>
    </View>
  );
};

export default StartPage;

