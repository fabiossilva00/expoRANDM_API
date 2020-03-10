import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

const renderItem = () => <View style={styles.separator} />

export default renderItem

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "94%",
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 5,
    }
})