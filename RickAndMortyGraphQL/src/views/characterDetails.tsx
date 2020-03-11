import React, { useEffect } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

import { RootReducers } from '../redux/reducer/combineReducers'

import { Colors } from '../constants/colors' 

function characterDetail() {
    const { details } = useSelector((state: RootReducers) => state.CharacterDetailsReducer)
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({title: details?.name, headerStyle: {backgroundColor: Colors.verde}})
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    style={styles.image}
                    source={{uri: details?.image}}
                />
            </View>
            <View style={[styles.containerFields, styles.firstField]}>
                <Text style={styles.textTitleSpec}>Nome</Text>
                <Text style={styles.textSpec}>{details?.name}</Text>
            </View>
            <View style={styles.containerFields}>
                <Text style={styles.textTitleSpec}>Situação</Text>
                <Text style={styles.textSpec}>{details?.status}</Text>
            </View>
            <View style={styles.containerFields}>
                <Text style={styles.textTitleSpec}>Espécie</Text>
                <Text style={styles.textSpec}>{details?.species}</Text>
            </View>
            <View style={styles.containerFields}>
                <Text style={styles.textTitleSpec}>Gênero</Text>
                <Text style={styles.textSpec}>{details?.gender}</Text>
            </View>
            <View>
                <View style={styles.containerFields}>
                    <Text style={styles.textTitleGroup}>Origem</Text>
                    <View>
                        <Text style={[styles.textTitleSpec, styles.textAllLeft]}>
                            Nome
                        </Text>
                        <Text style={[styles.textSpec, styles.textAllLeft, styles.textSpecGroup]}>
                            {details?.origin.name}
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.textTitleSpec, styles.textAllLeft]}>
                            Dimensão
                        </Text>
                        <Text style={[styles.textSpec, styles.textAllLeft, styles.textSpecGroup]}>
                            {details?.origin.dimension}
                        </Text>
                    </View>
                </View>
                <View style={[styles.containerFields, styles.lastField]}>
                    <Text style={styles.textTitleGroup}>Localização</Text>
                    <View>
                        <Text style={[styles.textTitleSpec, styles.textAllLeft]}>
                            Nome
                        </Text>
                        <Text style={[styles.textSpec, styles.textAllLeft, styles.textSpecGroup]}>
                            {details?.location.name}
                        </Text>
                    </View>
                    <View>
                        <Text style={[styles.textTitleSpec, styles.textAllLeft]}>
                            Dimensão
                        </Text>
                        <Text style={[styles.textSpec, styles.textAllLeft, styles.textSpecGroup]}>
                            {details?.location.dimension}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default characterDetail

const styles = StyleSheet.create({
    container: {
        height: hp("100%"),
        width: wp("100%"),
        backgroundColor: Colors.bege,
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp('20%'),
        width: wp("100%"),
        backgroundColor: Colors.verde,
    },
    containerFields: {
        borderColor: Colors.marrom,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        marginHorizontal: hp("2.4%"),
        paddingHorizontal: hp("1.8%"),
    },
    firstField: {
        marginTop: hp("3.0%"),
        borderTopWidth: 1,
        paddingTop: hp("1.2%"),
    },
    lastField: {
        marginBottom: hp("1.2%"),
        borderBottomWidth: 1,
        paddingBottom: hp("1.2%"),
    },
    textTitleSpec: {
        fontSize: hp('1.7%'),
    },
    textSpec: {
        fontSize: hp('2.6%'),
        paddingBottom: hp("1.2%"),
        paddingLeft: hp("1.2%")
    },
    textTitleGroup: {
        fontSize: hp("3.0%"),
        marginBottom: hp("1.2%")
    },
    textAllLeft: {
        paddingLeft: hp("2.4%"),
    },
    textSpecGroup: {
        paddingLeft: hp("3.6%")
    },
    image: {
        height: hp("17.8%"),
        width: hp("17.8%"),
        borderRadius: hp("17.8%") / 2
    }
})  