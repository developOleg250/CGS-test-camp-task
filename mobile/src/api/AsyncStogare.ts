import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const setToken = async (data) => {
  try {
    await AsyncStorage.setItem(
        'token',
        'Bearer '+data.token,
    );
    await AsyncStorage.setItem(
        'userId',
        data.user._id,
    );
  } catch (error) {
    // Error saving data
  };
};


export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('token');
    if (value !== null) {
      return value;
    }
    return null;
  } catch (error) {
    return null;
  }
};
