import React from 'react';
import { TextInput as RNTextInput, View, StyleSheet, Text } from 'react-native';

interface ITextInput {
  [x: string]: string;
  text: string;
  error: string | '';
  touched: any;
  onBlur: any;
  onChange: any;
}

const TextInput: React.FC<ITextInput> = ({ text, error, touched,
  onBlur, onChange, ...otherProps }) => {
  const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
      }}
    >
      <Text style={styles.label}>{text}</Text>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid='transparent'
          placeholderTextColor='rgba(34, 62, 75, 0.7)'
          {...otherProps}
          onBlur={onBlur}
          style={styles.input}
          // error={error}
          onChange={onChange}
        />
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  label: {
    margin: 8,
  },
});
