import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ComponentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}> Hello Word </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e056ac',
  },
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
