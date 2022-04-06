import React from 'react';
import { StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import AppContent from './src/components/AppContent';
import { THEME } from './src/styles/theme';

const queryClient = new QueryClient();

export default function App() {
  return (
    <BrowserRouter>
      <View style={styles.container}>
        <QueryClientProvider client={queryClient}>
          <AppContent />
        </QueryClientProvider>
      </View>
    </BrowserRouter>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.Colors.white,
    padding: THEME.Size.size20,
  },
});
