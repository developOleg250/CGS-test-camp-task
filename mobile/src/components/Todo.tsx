// import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { todoService } from '../api/api';
import Link from '../common/Link';
import { THEME } from '../styles/theme';

interface ITodoi{
  _id: string;
  title: string;
  description: string;
  handleUpdate: ()=>void;
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
        paddingBottom: THEME.Spacings.sp5,
        paddingTop: THEME.Spacings.sp5,
      }}>
        {/* left */}
        <View
          style={{ flex: THEME.Size.size5, flexDirection: 'column' }}>
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
              paddingLeft: THEME.Spacings.sp10,
              backgroundColor: THEME.Colors.green1,
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
            paddingTop: THEME.Spacings.sp28,
            alignItems: 'center',
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
          paddingTop: THEME.Spacings.sp28,
          alignItems: 'center',
        }}>
          <Button
            onPress={async () => {
              await todoService.deleteTodo(_id);
              handleUpdate();
            }}
            title='Del'
            color={THEME.Colors.pink1}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: THEME.Size.size150,
    width: '100%',
    backgroundColor: THEME.Colors.orange1,
    borderRadius: THEME.Spacings.sp5,
    marginBottom: THEME.Spacings.sp20,
  },
  title: {
    fontSize: THEME.Size.size30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: THEME.Size.size20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: THEME.Size.size5,
  },
  link: {
    height: THEME.Size.size30,
    width: THEME.Size.size40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.Colors.blue90,
    color: THEME.Colors.white,
    paddingLeft: THEME.Spacings.sp3,
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: THEME.Spacings.sp10,

  },
});


export default Todo;
