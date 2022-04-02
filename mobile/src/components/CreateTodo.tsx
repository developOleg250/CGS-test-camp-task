import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CheckBox from '../common/CheckBox';
import TextArea from '../common/TextArea';
import useAddTodo from '../hook/useAddTodo';
import Link from '../common/Link';
import { useNavigate } from 'react-router-dom';

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
    initialValues: { check: false, title: 'TEst',
      year: '2020', description: 'asdad', completed: true, public: true },
    onSubmit: values => {
      // console.log(values);
      const data = {
        'completed': values.completed,
        'public': values.public,
        'title': values.title,
        'description': values.description,
        'year': values.year,
      };
      useAddTodo(data);
      navigate('/');
    },
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
      }}
    >
      <Link
        text = 'Home'
        path = {''}
        params={''}
        style={styles.link}
      >
      </Link>

      <Text style={{ color: '#223e4b', fontSize: 20, marginBottom: 16 }}>
        Create new Todo
      </Text>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          text='Title'
          placeholder='Enter your title'
          onChange={handleChange('title')}
          onBlur={handleBlur('title')}
          error={errors.title+''}
          touched={touched.title}
          value={values.title}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextArea
          text='Description'
          defaultValue={values.description}
          placeholder='Enter your description'
          onChange={ handleChange('description') }
          onBlur={handleBlur('description')}
          error={errors.description || 'false'}
          touched={touched.description}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <TextInput
          text='Year'
          placeholder='Enter your year'
          onChange={handleChange('year')}
          onBlur={handleBlur('year')}
          error={errors.year+''}
          touched={touched.year}
          value={values.year}
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
        <CheckBox
          text='Completed'
          value={values.completed}
          handleChange={() => {
            setFieldValue('completed', !values.completed);
            // console.log(values);
          }
          }
        />
      </View>
      <View style={{ paddingHorizontal: 32, marginBottom: 16, width: '100%' }}>
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

const styles = StyleSheet.create({
  link: {
    height: 30,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33f',
    color: 'white',
    marginBottom: 30,
  },
});

