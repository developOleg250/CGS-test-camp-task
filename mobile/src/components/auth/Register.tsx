import { Text, View } from 'react-native';
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
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from 'react-query';
import { useRegister } from '../../hook/hook';
import { getToken, setToken } from '../../api/AsyncStogare';

const LoginSchema = Yup.object().shape({
  email: Yup.string().min(3).max(20).required('Required'),
  password: Yup.string().min(3).max(20).required('Required'),
});


export default function Register({navigation}) {
  const navigator = useNavigation();
  const queryClient = useQueryClient();
  const { mutateAsync } = useRegister(navigator, queryClient);
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
    onSubmit: async (values) => {
      const data = {
        'email': values.email,
        'password': values.password,
      };
      console.log('register tsx');
      const res = await mutateAsync(data);
      console.log(res);
      if (res.data.token != undefined) {
        await setToken(res.data);
        navigator.navigate(ROUTER_KEYS.TODO_LIST);
      }
      console.log(await getToken());
    },
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
        Register
      </Text>
      <View style={styles.text}>
        <TextInput
          text='Email'
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
      <View style={{ margin: THEME.Spacings.sp30 }} >
        <Button label='Register' onPress={handleSubmit} />
      </View>
    </View>
  );
}
