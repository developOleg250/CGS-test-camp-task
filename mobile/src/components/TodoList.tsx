import { FlatList, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
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
  const [valueParam, setChangeParam] = useState<string>('');
  const [valuePagination, setChangePagination] = useState<number>(2);

  const handleChangePagination = async () => {
    setChangePagination(valuePagination+2);
  };

  const { data, isLoading, isSuccess, refetch } =
      useQuery(QUERY_KEYS.TODO, async () =>
        todoService.getTodos('?limit='+valuePagination+valueParam));

  useEffect(() => {
    refetch();
  }, [valuePagination, valueParam]);

  if (isLoading) return <Text>is loading</Text>;

  if (!isSuccess) return <Text>Error</Text>;

  const handleChangeParam = async (params:string) => {
    setChangeParam(params); // await for update ans set  state
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
      <View style={{ flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: THEME.Spacings.sp20,
        marginBottom: THEME.Spacings.sp10,
      }}>
        <View style={{ margin: THEME.Spacings.sp5 }}>
          <Button
            label='Create Todo'
            onPress={() => navigation.navigate(ROUTER_KEYS.CREATE_TODO)}
          />
        </View>
      </View>
      <View style={{ marginTop: THEME.Spacings.sp5 }}>
        <Filters
          handleChangeParam={handleChangeParam}
        >
        </Filters>
      </View>
      <View style={{ margin: THEME.Spacings.sp30 }}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={ (item) => item._id}
        />
      </View>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Button label='Load new todo'
          onPress={() => handleChangePagination()}
        />
      </View>
    </View>
  );
};

export default TodoList;

