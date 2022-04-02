import React from 'react';
import { View, StyleSheet, Text, ViewStyle } from 'react-native';
import Textarea from 'react-native-textarea';

interface ITextArea{
  [x: string]: any;
  text: string;
  error: string;
  touched: any;
  placeholder: string;
  defaultValue: string;
  onChange: any;
  onBlur: any;
}

const TextArea2: React.FC<ITextArea> =({
  text, error, touched,
  placeholder, defaultValue, onChange, onBlur, ...otherProps }) => {
  const validationColor = !touched ? '#223e4b' : error ? '#FF5A5F' : '#223e4b';
  return (
    <View
      style={[{
        flexDirection: 'row',
        alignItems: 'top',
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: 1,
        padding: 8,
      }] as ViewStyle}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{text}</Text>
        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          onChangeText={onChange}
          value={defaultValue}
          maxLength={120}
          placeholder={placeholder}
          placeholderTextColor={'#55f'}
          underlineColorAndroid={'transparent'}
          touched={touched}
          onBlur={onBlur}
          error={error}
          {...otherProps }
        />
      </View>
    </View>
  );
};

export default TextArea2;

const styles = StyleSheet.create({
  label: {
    margin: 8,
  },
  textareaContainer: {
    height: 180,
    padding: 5,
    backgroundColor: '#eef',
  },
  textarea: {
    textAlignVertical: 'top',
    height: 170,
    fontSize: 14,
    color: '#333',
  },
});
