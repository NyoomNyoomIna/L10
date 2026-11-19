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
    title: "Fontaine",
    bgcolor: "lightblue",
    icon: "moon",
    data: [
      { key: "Furina" },
      { key: "Neuvillette" },
      { key: "Escoffier" },
    ],
  },
  {
    title: "Nod-Krai",
    bgcolor: "blue",
    icon: "crow",
    data: [
      { key: "Columbina" },
      { key: "Ineffa" },
      { key: "Lauma" },
    ],
  },
];

export default function App() {
  return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>I did not copy and paste</Text>
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
          style={styles.opacityStyle}
          onPress={() => {
            Alert.alert(section.title + " " + item.key + " selected!");
          }}
      >
        <View style={styles.row}>
          <Text style={styles.textStyle}>
            {index + 1}. {item.key}
          </Text>
          <Image
              source={{
                uri:
                    'https://genshin-build.com/images/variants/halfbody/UI_Gacha_AvatarImg_' +
                    item.key +
                    '-320.avif',
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
    borderWidth: 1,
    margin: 0,
    padding: 8,
    gap: 8,
  },
  headertext: {
    fontSize: 20,
    margin: 5,
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