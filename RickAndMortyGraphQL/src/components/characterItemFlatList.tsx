import React, { useCallback } from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
    Image
} from "react-native"
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import Characters from '../models/Characters/Characters'

import { showCharInScreen } from '../redux/reducer/characterDetails/characterDetailsAction'

const renderItem = ({item} : {item: Characters}) => {
    const dispatch = useDispatch()
    const navigation = useNavigation()

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
            <TouchableWithoutFeedback
                onPress={() => {
                        navigation.navigate("CharacterDetails")
                        dispatch(showCharInScreen(item))
                    }
                }
            >
                <Image style={styles.image}
                    source={{uri: item.image}}
                />
            </TouchableWithoutFeedback>
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
    },
    textName: {
        fontSize: hp("2.5%"),
        fontWeight: 'bold'
    },
    containerSpecs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "90%",
    },
    containerWithoutImage: {
        height: "100%",
        width: "75%",
        justifyContent: 'space-around',
    },
    image: {
        width: hp("8.1%"),
        height: hp("8.1%")
    }
})