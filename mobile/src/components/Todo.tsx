// import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { handlerDeleteTodoApi } from '../api/api';
import Link from '../common/Link';

interface ITodoi{
  _id: string;
  title: string;
  description: string;
  handleState: ()=>void;
  year: string;
  completed: string;
  publics: string;
}
const Todo:React.FC<ITodoi> = ({
  _id, title, description, year, completed, publics, handleUpdate } ) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1,
        flexDirection: 'row',
        paddingBottom: 5,
        paddingTop: 5,
      }}>
        {/* left */}
        <View
          style={{ flex: 5, flexDirection: 'column' }}>
          <View style={{ flex: 1 }}>
            {/* title */}
            <View style={{ flex: 1,
              flexDirection: 'row', justifyContent: 'center',
            }}>
              <View style={styles.view}>
                <Text>{title}</Text>
              </View>
              <View style={styles.view}>
                <Text>{year}</Text>
              </View>
            </View>
            {/* description */}
            <View style={{
              flex: 3,
              justifyContent: 'center',
              paddingLeft: 10,
              backgroundColor: '#D7FF75',
            }}>
              <Text>{description}</Text>
            </View>
            {/* checkboxes */}
            <View style={{ flex: 1,
              flexDirection: 'row', justifyContent: 'center' }}>
              <View style={styles.view}>
                <Text style={styles.label}>
                  {completed ? 'Completed' : 'Not completed'}
                </Text>
              </View>
              <View style={styles.view}>
                <Text style={styles.label}>
                  {publics ? 'Public' : 'Private'}
                </Text>
              </View>
            </View>
          </View>
        </View>
        {/* Edit  */}
        <View
          style={{
            flex: 1,
            paddingTop: 28, alignItems: 'center',
          }}>
          <Link
            text = 'Edit'
            path = {'/editTodo'}
            params={_id}
            style={styles.link}
          >
          </Link>
        </View>
        {/* Delete */}
        <View style={{
          flex: 1,
          paddingTop: 27,
          alignItems: 'center',
        }}>
          <Button
            onPress={() => {
              handlerDeleteTodoApi(_id);
              setTimeout(() => handleUpdate(), 100);
            }}
            title="Del"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    backgroundColor: '#FFD775',
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
  link: {
    height: 31,
    width: 42,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#33f',
    color: 'white',
    paddingLeft: 3,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,

  },
});


export default Todo;
