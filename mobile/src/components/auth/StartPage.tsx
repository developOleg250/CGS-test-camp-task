import { Button, View } from 'react-native';
import React from 'react';
import Link from '../../common/Link';
import { styles } from '../../styles/form.styles';
import { ROUTER_KEYS } from '../../data/data';
import { setToken } from '../../api/AsyncStogare';
import { THEME } from '../../styles/theme';

const StartPage = ({ navigation }) => {
  return (
    <View style={styles.login}>
      <View style={styles.btn}>
        <View style={{ marginVertical: THEME.Spacings.sp20 }}>
          <Button
            title='Login'
            onPress={() => navigation.navigate(ROUTER_KEYS.LOGIN)}
          />
        </View>
        <Button
          title='Register'
          onPress={() => navigation.navigate(ROUTER_KEYS.REGISTER)}
        />
      </View>
    </View>
  );
};

export default StartPage;

