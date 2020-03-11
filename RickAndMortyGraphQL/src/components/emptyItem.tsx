import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'

import { Colors } from '../constants/colors'

const renderItem = () => <View style={styles.container}/>

export default renderItem

const styles = StyleSheet.create({
    container: {
        height: hp("8%"),
        width: wp("100%"),
        backgroundColor: Colors.cinza
    }
})