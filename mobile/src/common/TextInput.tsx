import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet, Text } from 'react-native';
import { THEME } from '../styles/theme';

interface ITextInput {
  [x: string]: string | undefined | (() => void) | boolean;
  text: string;
  error: string | undefined;
  touched: boolean | undefined;
  onBlur: () => void;
  onChange: () => void;
}

const TextInput: React.FC<ITextInput> = ({ text, error, touched,
  onBlur, onChange, ...otherProps }) => {
  const validationColor =
   !touched ? THEME.Colors.gray1 :
   error ? THEME.Colors.red1 : THEME.Colors.gray1;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: THEME.Size.size50,
        borderRadius: THEME.Size.size5,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: THEME.Spacings.sp5,
      }}
    >
      <Text style={styles.label}>{text}</Text>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor={THEME.Colors.gray1}
          {...otherProps}
          onBlur={onBlur()}
          style={styles.input}
          onChange={onChange()}
        />
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    height: THEME.Size.size30,
    margin: THEME.Size.size5,
    borderWidth: 1,
    borderColor: THEME.Colors.grayLight,
    padding: THEME.Spacings.sp10,
  },
  label: {
    margin: THEME.Spacings.sp10,
  },
});
