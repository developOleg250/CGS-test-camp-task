import React from 'react';
import { Text, View, ViewStyle } from 'react-native';
import { Link as RNLink } from 'react-router-dom';
import { THEME } from '../styles/theme';

type ILink = {
  text: string;
  style: ViewStyle;
  path: string;
  params: string;
}
const Link: React.FC<ILink> = ({ text, style, path, params }) => {
  return (
    <RNLink to={path+'/'+params} style={{ textDecoration: 'none' }}>
      <View style={style}>
        <Text style={{
          color: THEME.Colors.white,
          fontSize: THEME.Size.size15,
        }}>
          {text}
        </Text>
      </View>
    </RNLink>
  );
};

export default Link;
