import React from 'react';
import { StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import AppContent from './src/components/AppContent';


import { NavigationContainer, useRoute } from '@react-navigation/native';

const queryClient = new QueryClient();


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <QueryClientProvider client={queryClient}>
          <AppContent/>
        </QueryClientProvider>
      </View>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
