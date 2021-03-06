import React, { useEffect, useState, useMemo } from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux'

import CharacterItem from '../components/characterItemFlatList'
import ItemSeparator from '../components/separatorItem'
import EmptyItem from '../components/emptyItem'

import { RootReducers } from '../redux/reducer/combineReducers'

import { addCharactersInRedux } from '../controllers/characters'
import { Colors } from '../constants/colors'

export default function Main() {
  const dispatch = useDispatch()

  const [loadingMore, setLoadingMore] = useState(false)
  const { pages } = useSelector((state: RootReducers) => state.MainReducer)
  const charactersReducer = useSelector((state: RootReducers) => state.CharacterReducer)

  useEffect(() => {
    dispatch(addCharactersInRedux(pages))
  }, [])

  const loadingMais = () => {
    if (loadingMore != true) {
      dispatch(addCharactersInRedux(pages + 1))
      setLoadingMore(true)
    }
  }

  useMemo(() => {
    setLoadingMore(false)
  }, [pages])

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={({item}) => <CharacterItem item={item}/>}
        data={charactersReducer.characters}
        extraData={charactersReducer}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={loadingMais}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={EmptyItem}
      />
      {
        loadingMore ?
          <ActivityIndicator size="large" />
        : null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.branco,
    height: "100%",
    width: "100%",
    paddingVertical: 16
  },
});
