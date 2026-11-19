import React, { useState } from 'react';
import {
    ScrollView,
    Text,
    Image,
    Button,
    Alert,
    StyleSheet,
    View,
    FlatList,
    StatusBar,
    TouchableOpacity,
    SectionList,
} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const pokemonData = [
    {
        title: "Grass",
        bgcolor: "#78C850",
        icon: "leaf",
        data: [
            { id: 1, key: "Bulbasaur" },
            { id: 2, key: "Ivysaur" },
            { id: 3, key: "Venusaur" },
        ],
    },
    {
        title: "Fire",
        bgcolor: "#F08030",
        icon: "fire",
        data: [
            { id: 4, key: "Charmander" },
            { id: 5, key: "Charmeleon" },
            { id: 6, key: "Charizard" },
        ],
    },
];

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>I Love Pokemon</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Add Pokemon"
                    onPress={() => Alert.alert("Have yet to learn how to add items")}
                />
            </View>
            <SectionList
                sections={pokemonData}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor, icon } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgcolor }]}>
                        <FontAwesome6 name={icon} size={20} color="black" />
                        <Text style={styles.headertext}>{title}</Text>
                    </View>
                )}
                renderSectionFooter={() => <View style={styles.sectionFooter} />}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const renderItem = ({ item, index, section }) => {
    return (
        <TouchableOpacity
            style={[styles.opacityStyle, { backgroundColor: section.bgcolor }]}
            onPress={() => {
                Alert.alert(section.title + " " + item.key + " selected!");
            }}
        >
            <View style={styles.row}>
                <Text style={styles.textStyle}>
                    {index + 1}. {section.title} {item.key}
                </Text>
                <Image
                    source={{
                        uri:
                            'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_' +
                            item.id +
                            '-2x.png',
                    }}
                    style={[styles.image, { width: 200, height: 300 }]}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 10,
        margin: 20,
    },
    buttonContainer: {
        marginVertical: 10,
        borderWidth:1
    },
    opacityStyle: {
        borderWidth: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
        textAlignVertical: 'center',
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 8,
        gap: 8,
    },
    headertext: {
        fontSize: 20,
        margin: 0,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    sectionFooter: {
        height: 20,
    },
    image: {
        width: 250,
        height: 150,
        paddingLeft: 10,
        alignSelf: 'center',
    },
});