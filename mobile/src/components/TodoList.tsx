import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Todo from './Todo';
import Link from '../common/Link';
import { QUERY_KEYS } from '../data/data';
import { todoService } from '../api/api';
import { useQuery, UseQueryResult } from 'react-query';
import { THEME } from '../styles/theme';

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
  const { data, isLoading, isSuccess, refetch }:UseQueryResult<TodoSet, Error> =
      useQuery<TodoSet, Error>(QUERY_KEYS.TODO, () => todoService.getTodos());
  if (isLoading) return <Text>is loading</Text>;
  if (!isSuccess) return <Text>Error</Text>;

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
    <View>
      <View style={{ paddingBottom: THEME.Spacings.sp30,
        paddingTop: THEME.Spacings.sp20,
        justifyContent: 'center',
        alignItems: 'center' }}>
        <View style={{ paddingBottom: THEME.Spacings.sp30}}>
          <Link
            text = 'Back'
            path = {''}
            params={''}
            style={styles.link}
          >
          </Link>
        </View>
        <Link
          text='Create Todo'
          path = {'/createTodo'}
          params={''} style={styles.link}>
        </Link>
        <Text>{localStorage.getItem('userId')}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={ (item) => item._id}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  link: {
    borderRadius: THEME.Size.size10,
    height: THEME.Size.size50,
    width: THEME.Size.size245,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.Colors.blue90,
    color: THEME.Colors.white,
  },
});
