import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

type IButton = {
    label: string;
    onPress: () => void;
}
const Button : React.FC<IButton> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        height: 50,
        width: 245,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33f',
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={{ fontSize: 18, color: 'white', textTransform: 'uppercase' }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
