import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'

import { Colors } from '../constants/colors'

const renderItem = () => <View style={styles.separator} />

export default renderItem

const styles = StyleSheet.create({
    separator: {
        height: 1,
        width: "94%",
        backgroundColor: Colors.cinza,
        alignSelf: 'center',
        marginVertical: 6,
    }
})