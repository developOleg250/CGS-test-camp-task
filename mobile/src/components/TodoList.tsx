import { FlatList, Text, View } from 'react-native';
import React, { useState } from 'react';
import Todo from './Todo';
import Link from '../common/Link';
import { QUERY_KEYS, ROUTER_KEYS } from '../data/data';
import { todoService } from '../api/api';
import { useMutation, useQuery } from 'react-query';
import { THEME } from '../styles/theme';
import Filters from './Filters/Filters';
import { styles } from '../styles/form.styles';
import Button from '../common/Button';
import { getToken } from '../api/AsyncStogare';
interface TodoSet {
  completed: string,
  description: string,
  public: string,
  title: string,
  userId: string,
  year: string,
  _id: string,
}

const TodoList = ( {navigation}) => {
  const res = getToken();
  const [test, setTest] = useState<string>('test');
  // after useQuery get error!
  const [valueParam, setChangeParam] = useState<string>('');
  const [valuePagination, setChangePagination] = useState<number>(2);

  const handleChangePagination = () => {
    // await for update ans set  state
    setChangePagination(valuePagination+2);
    setTimeout(() => refetch(), 50); // refetch done fast!
  };
  const { data, isLoading, isSuccess, refetch } =
      useQuery(QUERY_KEYS.TODO, () =>
        todoService.getTodos('?limit='+valuePagination+valueParam));

  if (isLoading) return <Text>is loading  </Text>;
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
          {/* <Link
            text = 'Back'
            path = {''}
            params={''}
            style={styles.link2}
          >
          </Link> */}
        </View>
        {/* <Link
          text='Create Todo'
          path = {'/createTodo'}
          params={''} style={styles.link2}>
        </Link> */}
        <Button
          label='Create Todo'
          onPress={() => navigation.navigate(ROUTER_KEYS.CREATE_TODO)}
        />
      </View>
      <Filters
        handleChangeParam={handleChangeParam}
      >
      </Filters>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={ (item) => item._id}
      />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Button label='Load new todo'
          onPress={() => handleChangePagination()}
        />
      </View>
    </View>
  );
};

export default TodoList;

