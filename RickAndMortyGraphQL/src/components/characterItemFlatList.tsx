import React from 'react'
import {
    View,
    Text,
    Animated,
    StyleSheet,
    Image
} from "react-native"
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'

import { CharacterDetails } from '../models/Characters/Characters'

const renderItem = ({item} : {item: CharacterDetails}) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerWithoutImage}>
                <Text style={styles.textName}>{item.name}</Text>
                <View style={styles.containerSpecs}>
                    <Text>{item.status}</Text>
                    <Text>{item.gender}</Text>
                    <Text>{item.species}</Text>
                </View>
            </View>
            <Image style={styles.image}
                source={{uri: item.image}}
            />
        </View>
    )
}

export default renderItem

const styles = StyleSheet.create({
    container: {
        height: hp("8%"),
        width: wp("100%"),
        paddingHorizontal: hp("2.4%"),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: hp("3.2%")
        // borderColor: 'black',
        // borderWidth: 1
    },
    textName: {
        fontSize: hp("2.5%"),
        fontWeight: 'bold'
    },
    containerSpecs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "90%",
        // borderColor: 'black',
        // borderWidth: 1
    },
    containerWithoutImage: {
        height: "100%",
        width: "75%",
        justifyContent: 'space-around',
        // borderColor: 'black',
        // borderWidth: 1
    },
    image: {
        width: hp("8.2%"),
        height: hp("8.2%")
    }
})