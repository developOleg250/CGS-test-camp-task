import React from 'react';
import { View, StyleSheet, Text, ViewStyle } from 'react-native';
import Textarea from 'react-native-textarea';
import { THEME } from '../styles/theme';

interface ITextArea{
  [x: string]: string | undefined | (() => void) | boolean;
  text: string;
  error: string | undefined;
  touched: boolean | undefined;
  placeholder: string;
  defaultValue: string;
  onChange: () => void;
  onBlur: () => void;
}

const TextArea2: React.FC<ITextArea> =({
  text, error, touched,
  placeholder, defaultValue, onChange, onBlur, ...otherProps }) => {
  const validationColor =
    !touched ? THEME.Colors.gray1 :
    error ? THEME.Colors.red1 : THEME.Colors.gray1;
  return (
    <View
      style={[{
        flexDirection: 'row',
        alignItems: 'top',
        borderRadius: THEME.Size.size5,
        borderColor: validationColor,
        borderWidth: 1,
        padding: THEME.Spacings.sp10,
      }] as ViewStyle}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.label}>{text}</Text>
        <Textarea
          containerStyle={styles.textareaContainer}
          style={styles.textarea}
          onChangeText={onChange()}
          value={defaultValue}
          maxLength={THEME.Size.size100}
          placeholder={placeholder}
          placeholderTextColor={THEME.Colors.gray1}
          underlineColorAndroid={'transparent'}
          touched={touched}
          onBlur={onBlur()}
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
    margin: THEME.Spacings.sp10,
  },
  textareaContainer: {
    height: THEME.Size.size150,
    padding: THEME.Spacings.sp10,
    backgroundColor: THEME.Colors.grayLightArea,
  },
  textarea: {
    textAlignVertical: 'top',
    height: THEME.Size.size150,
    fontSize: THEME.Size.size15,
  },
});
