import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { changeCount } from '../redux/reducer/main/mainAction'

export default function Main() {
  const dispatch = useDispatch()
  const { count } = useSelector(state => state.mainReducer)
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <Button 
        title="Butao"
        onPress={() => dispatch(changeCount(count + 1))}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
