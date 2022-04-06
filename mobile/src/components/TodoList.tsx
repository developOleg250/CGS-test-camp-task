import { TextInput as RNTextInput,
  FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Todo from './Todo';
import Link from '../common/Link';
import { QUERY_KEYS } from '../data/data';
import { todoService } from '../api/api';
import { useQuery, UseQueryResult } from 'react-query';
import { THEME } from '../styles/theme';
import Filters from './Filters/Filters';
import TextInput from '../common/TextInput';
import CheckBox2 from '../common/CheckBox';
import { styles } from '../styles/form.styles';
import { Link as RNLink, useParams } from 'react-router-dom';
interface TodoSet {
  completed: string,
  description: string,
  public: string,
  title: string,
  userId: string,
  year: string,
  _id: string,
}

const TodoList = ( ) => {
  // after useQuery get error!
  const [valueParam, setChangeParam] = useState<string>('');

  const { data, isLoading, isSuccess, refetch } =
      useQuery(QUERY_KEYS.TODO, () =>
        todoService.getTodos(valueParam));

  if (isLoading) return <Text>is loading</Text>;
  if (!isSuccess) return <Text>Error</Text>;

  const handleChangeParam = async (params:string) => {
    await setChangeParam(params); // await for update ans set  state
    setTimeout(() => refetch(), 100); // refetch done fast!
  };
  const renderItem = ({ item }:{ item: TodoSet}) =>
    <Todo
      _id={item._id}
      title={item.title}
      year={item.year}
      description={item.description}
      completed={item.completed}
      publics={item.public}
      handleUpdate={refetch}
      userId={item.userId}
    />;

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: THEME.Spacings.sp30,
        paddingTop: THEME.Spacings.sp20,
        justifyContent: 'center',
        alignItems: 'center' }}>
        <View style={{ paddingBottom: THEME.Spacings.sp30 }}>
          <Link
            text = 'Back'
            path = {''}
            params={''}
            style={styles.link2}
          >
          </Link>
        </View>
        <Link
          text='Create Todo'
          path = {'/createTodo'}
          params={''} style={styles.link2}>
        </Link>
        {/* <Text>{localStorage.getItem('userId')}</Text>
        <Text>{valueParam}</Text> */}
      </View>
      <Filters
        valueParam={valueParam}
        handleChangeParam={handleChangeParam}
      >
      </Filters>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={ (item) => item._id}
      />
    </View>
  );
};

export default TodoList;

