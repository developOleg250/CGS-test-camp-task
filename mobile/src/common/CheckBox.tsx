import React from 'react';
import { View,
  StyleSheet, Text, CheckBox as RNCheckBox } from 'react-native';
import { THEME } from '../styles/theme';

interface ICheckBox {
  text: string;
  value: boolean;
  handleChange: () => void;
}

const CheckBox2: React.FC<ICheckBox> = ({ text, value, handleChange}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: THEME.Size.size50,
        borderRadius: THEME.Size.size0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: THEME.Spacings.sp10,
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
    margin: THEME.Spacings.sp3,
  },
});

export default CheckBox2;
