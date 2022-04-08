import { Text, View } from 'react-native';
import React from 'react';
import TextInput from '../common/TextInput';
import Button from '../common/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CheckBox from '../common/CheckBox';
import TextArea from '../common/TextArea';
import { useNavigate, useParams } from 'react-router-dom';
import Link from '../common/Link';
import { todoService } from '../api/api';

import { useQuery, useQueryClient } from 'react-query';
import { styles } from '../styles/form.styles';
import { QUERY_KEYS, ROUTER_KEYS } from '../data/data';
import { useEditTodo } from '../hook/hook';
import { useNavigation } from '@react-navigation/native';


const LoginSchema = Yup.object().shape({
  title: Yup.string().min(3).max(20).required('Required'),
  year: Yup.number()
      .integer()
      .min(2000)
      .max(3000)
      .required(),
  description: Yup.string().min(3).max(120).required('Required'),
});


const EditTodo = ({navigate, route}) => {
  const navigator = useNavigation();
  const queryClient = useQueryClient();
  const { mutateAsync } = useEditTodo(navigator, queryClient);

  const { id } = route.params;
  const { isLoading, data }=
  useQuery(QUERY_KEYS.POST_ID(id), () => todoService.getTodosById(id+''));
  const getData = () => data || tempData;
  const tempData = { check: false, title: '', year: '',
    description: '', completed: '', public: false };

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
    initialValues: getData(),
    enableReinitialize: true,
    onSubmit: async (values) => {
      const data = {
        'completed': values.completed,
        'public': values.public,
        'title': values.title,
        'description': values.description,
        'year': values.year,
      };
      await mutateAsync({ id: values._id, data });
      navigator.navigate(ROUTER_KEYS.TODO_LIST);
    },
  });

  return !isLoading && (
    <View
      style={styles.title}
    >
      <Text style={styles.edit}>
        Edit Todo
      </Text>
      <View style={styles.text}>
        <TextInput
          text='Title'
          placeholder='Enter your title'
          onChange={ () => handleChange('title')}
          onBlur={ () => handleBlur('title')}
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
      <Button label='Edit' onPress={handleSubmit} />
    </View>
  );
};

export default EditTodo;

