import React from 'react';
import { View,
  StyleSheet, Text, CheckBox as RNCheckBox } from 'react-native';

interface ICheckBox {
  text: string;
  value: boolean;
  handleChange: () => void;
}

const CheckBox2: React.FC<ICheckBox> = ({ text, value, handleChange}) => {
  const validationColor ='#223e4b';
  return (
    <View
      style={{
        flexDirection: 'row',
        // alignItems: 'center',
        height: 48,
        borderRadius: 0,
        borderColor: validationColor,
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 8,
      }}
    >

      <View style={styles.checkboxContainer}>
        <Text style={styles.label}>{text}</Text>
        <RNCheckBox
          value={value}
          onChange={handleChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});

export default CheckBox2;
