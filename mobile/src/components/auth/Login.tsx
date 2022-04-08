import { Text, View, Alert } from 'react-native';
import React from 'react';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from '../../common/Link';
import { useNavigate } from 'react-router-dom';
import { userService } from '../../api/api';
import { styles } from '../../styles/form.styles';
import { THEME } from '../../styles/theme';
import { ROUTER_KEYS } from '../../data/data';
import { useQuery, useQueryClient } from 'react-query';
import { useLogin } from '../../hook/hook';
import { useNavigation } from '@react-navigation/native';
import { getToken, setToken, test } from '../../api/AsyncStogare';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
  email: Yup.string().min(3).max(50).required('Required'),
  password: Yup.string().min(3).max(12).required('Required'),
});


export default function Login() {
  const navigator = useNavigation();
  const queryClient = useQueryClient();
  const { mutateAsync } = useLogin(navigator, queryClient);

  const handleSubmitLogin = async () => {
    const data = {
      'email': values.email,
      'password': values.password,
    };
    const res = await mutateAsync(data);
    await setToken(res.data);
    console.log(await getToken());
  };

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: 'reg@gmail.com', password: '123' },
    onSubmit: async (values) => handleSubmitLogin(),
  });

  return (
    <View
      style={styles.login}
    >
      {/* <Link
        text = 'Home'
        path = {''}
        params={''}
        style={styles.link}
      >
      </Link> */}

      <Text style={styles.edit}>
        Login
      </Text>
      <View style={styles.text}>
        <TextInput
          text='email'
          placeholder='Enter your email'
          onChange={() => handleChange('email')}
          onBlur={() => handleBlur('email')}
          error={errors.email}
          touched={touched.email}
          value={values.email}
        />
      </View>
      <View style={styles.text}>
        <TextInput
          text='Password'
          placeholder='Enter your password'
          onChange={() => handleChange('password')}
          onBlur={() => handleBlur('password')}
          error={errors.password}
          touched={touched.password}
          value={values.password}
        />
      </View>
      <View style={{ margin: THEME.Spacings.sp30 }}>
        <Button label='Login' onPress={handleSubmit} />
      </View>
    </View>
  );
}
