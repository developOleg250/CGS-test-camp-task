import { Text, View } from 'react-native';
import React from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CheckBox from '../common/CheckBox';
import TextArea from '../common/TextArea';
import Link from '../common/Link';
import { useNavigate } from 'react-router-dom';
import { todoService } from '../api/api';
import { styles } from '../styles/form.styles';

import { ROUTER_KEYS } from '../data/data';
import { useQueryClient } from 'react-query';
import { useAddTodo } from '../hook/hook';

const LoginSchema = Yup.object().shape({
  title: Yup.string().min(3).max(20).required('Required'),
  year: Yup.number()
      .integer()
      .min(2000)
      .max(3000)
      .required(),
  description: Yup.string().min(3).max(120).required('Required'),
});


export default function CreateTodo() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync } = useAddTodo(navigate, queryClient);

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
    initialValues: { check: false, title: 'test',
      year: '2020', description: 'text', completed: false, public: false },
    onSubmit: async (values) => {
      const data = {
        'completed': values.completed,
        'public': values.public,
        'title': values.title,
        'description': values.description,
        'year': values.year,
      };
      await mutateAsync( data );
    },
  });

  return (
    <View
      style={styles.title}
    >
      <Link
        text = 'Home'
        path = {''}
        params={''}
        style={styles.link}
      >
      </Link>

      <Text style={styles.edit}>
        Create new Todo
      </Text>
      <View style={styles.text}>
        <TextInput
          text='Title'
          placeholder='Enter your title'
          onChange={() => handleChange('title')}
          onBlur={() => handleBlur('title')}
          error={errors.title}
          touched={touched.title}
          value={values.title}
        />
      </View>
      <View style={styles.text}>
        <TextArea
          text='Description'
          defaultValue={values.description}
          placeholder='Enter your description'
          onChange={ () => handleChange('description') }
          onBlur={() => handleBlur('description')}
          error={errors.description}
          touched={touched.description}
        />
      </View>
      <View style={styles.text}>
        <TextInput
          text='Year'
          placeholder='Enter your year'
          onChange={() => handleChange('year')}
          onBlur={() => handleBlur('year')}
          error={errors.year}
          touched={touched.year}
          value={values.year}
        />
      </View>
      <View style={styles.text}>
        <CheckBox
          text='Completed'
          value={values.completed}
          handleChange={() => {
            setFieldValue('completed', !values.completed);
          }
          }
        />
      </View>
      <View style={styles.text}>
        <CheckBox
          text='Public'
          value={values.public}
          handleChange={() => {
            setFieldValue('public', !values.public);
          }
          }
        />
      </View>
      <Button label='Create' onPress={handleSubmit} />
    </View>
  );
}
