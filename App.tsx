/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TurboImage from 'react-native-turbo-image';

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <TurboImage
        source={{
          uri: 'https://dummyimage.com/300x300/ff0000/fff',
        }}
        style={styles.image}
        fadeDuration={0}
        rounded
        borderRadius={150}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderColor: '#000',
    borderRadius: 150,
  },
});

export default App;
