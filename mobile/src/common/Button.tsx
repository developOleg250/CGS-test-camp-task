import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { THEME } from '../styles/theme';

type IButton = {
    label: string;
    onPress: () => void;
}
const Button : React.FC<IButton> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: THEME.Size.size5,
        height: THEME.Size.size50,
        width: THEME.Size.size245,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.Colors.blue90,
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: THEME.Size.size20,
          color: THEME.Colors.white,
          textTransform: 'uppercase',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
