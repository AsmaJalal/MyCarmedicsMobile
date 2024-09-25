import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [loading, setLoading] = React.useState(true);
  return (
    <View style={styles.webview}>
    {loading && <ActivityIndicator size="large" color="red" />}
    <WebView
      source={{ uri: 'https://www.mycarmedics.com' }}
      onLoadEnd={() => setLoading(false)}
      style={styles.webview}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default App;
