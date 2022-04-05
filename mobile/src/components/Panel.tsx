import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { todoService } from '../api/api';
import Link from '../common/Link';
import { THEME } from '../styles/theme';

interface IPanel{
  _id: string;
  handleUpdate: ()=>void;
}

const Panel:React.FC<IPanel> = ({ _id, handleUpdate }) => {
  return (
    <View style={{ flex: 2, flexDirection: 'row' }}>
      <View
        style={{
          flex: 1,
          paddingTop: THEME.Spacings.sp28,
          marginHorizontal: THEME.Spacings.sp20,
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
      <View style={{
        flex: 1,
        paddingTop: THEME.Spacings.sp28,
        marginHorizontal: THEME.Spacings.sp20,
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
  );
};

export default Panel;


const styles = StyleSheet.create({
  link: {
    height: THEME.Size.size30,
    width: THEME.Size.size40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.Colors.blue90,
    color: THEME.Colors.white,
    paddingLeft: THEME.Spacings.sp3,
  },
});
