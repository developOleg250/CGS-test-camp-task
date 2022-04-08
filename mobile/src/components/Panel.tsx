import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { todoService } from '../api/api';
import Link from '../common/Link';
import { ROUTER_KEYS } from '../data/data';
import { useDeleteTodo } from '../hook/hook';
import { THEME } from '../styles/theme';

interface IPanel{
  _id: string;
  handleUpdate: ()=>void;
}

const Panel:React.FC<IPanel> = ({ _id, handleUpdate }) => {
  const navigator = useNavigation();
  const queryClient = useQueryClient();
  const { mutateAsync } = useDeleteTodo(navigator, queryClient);
  return (
    <View style={{ flex: 2, flexDirection: 'row' }}>
      <View
        style={{
          flex: 1,
          paddingTop: THEME.Spacings.sp28,
          marginHorizontal: THEME.Spacings.sp20,
          alignItems: 'center',
        }}>
        <Button
          onPress={async () => {
            navigator.navigate(ROUTER_KEYS.EDIT_TODO, {
              id: _id,
            } );
          }}
          title='Edit'
          color={THEME.Colors.pink1}
        />
      </View>
      <View style={{
        flex: 1,
        paddingTop: THEME.Spacings.sp28,
        marginHorizontal: THEME.Spacings.sp20,
        alignItems: 'center',
      }}>
        <Button
          onPress={async () => {
            await mutateAsync(_id);
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
