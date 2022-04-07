import React from 'react';
import { Button, Text, View } from 'react-native';
import { Route, Routes } from 'react-router-dom';
import { ROUTER_KEYS } from '../data/data';
import CreateTodo from './CreateTodo';
import EditTodo from './EditTodo';
import TodoList from './TodoList';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

// function MyText() {
//   const route = useRoute();

//   return <Text>{route.params.caption}</Text>;
// }


function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
      {/* <MyText /> */}
    </View>
  );
}

const AppContent = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>

    // <View>
    //   <Routes>
    //     <Route path={ROUTER_KEYS.HOME} element={<TodoList/>} />
    //     <Route path={ROUTER_KEYS.EDIT_TODO} element={< EditTodo />} />
    //     <Route path={ROUTER_KEYS.CREATE_TODO} element={<CreateTodo />} />
    //   </Routes>
    // </View>
  );
};

export default AppContent;


