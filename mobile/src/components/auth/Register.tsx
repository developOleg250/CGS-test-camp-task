import { Text, View } from 'react-native';
import React from 'react';
import TextInput from '../../common/TextInput';
import Button from '../../common/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CheckBox from '../../common/CheckBox';
import TextArea from '../../common/TextArea';
import Link from '../../common/Link';
import { useNavigate } from 'react-router-dom';
import { todoService } from '../../api/api';
import { styles } from '../../styles/form.styles';
import { THEME } from '../../styles/theme';

const LoginSchema = Yup.object().shape({
  login: Yup.string().min(3).max(20).required('Required'),
  password: Yup.string().min(3).max(20).required('Required'),
});


export default function Register() {
  const navigate = useNavigate();

  const {
    handleChange,
    handleSubmit,
    handleBlur,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { login: '', password: '' },
    onSubmit: async (values) => {
      const data = {
        'login': values.login,
        'password': values.password,
      };
      // await todoService.addTodo(data);
      navigate('/');
    },
  });

  return (
    <View
      style={styles.login}
    >
      <Link
        text = 'Home'
        path = {''}
        params={''}
        style={styles.link}
      >
      </Link>

      <Text style={styles.edit}>
        Register
      </Text>
      <View style={styles.text}>
        <TextInput
          text='Login'
          placeholder='Enter your login'
          onChange={() => handleChange('login')}
          onBlur={() => handleBlur('login')}
          error={errors.login}
          touched={touched.login}
          value={values.login}
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
      <View style={styles.text}>
        <TextInput
          text='Avatar'
          placeholder='Enter your avatar'
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
