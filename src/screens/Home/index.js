import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWinthoutFeedback,
  Pressable,
} from 'react-native';
import {Icon} from '@rneui/themed';
import Header from '../../componets/Header';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Home = props => {
  console.log('Hola desde HOME');
  const handlePressHome = () => {
    console.log('Hola desde HOME');
  };
  const handlePressProfile = () => {
    console.log('Hola desde PERFIL');
    props.navigation.navigate('ProfileTab');
  };
  const handlePressLists = () => {
    console.log('Hola desde LISTA_POKEMONS');
    props.navigation.navigate('ListsTab');
  };
  const handlePressMap = () => {
    console.log('Hola desde MAP');
    props.navigation.navigate('MapTab');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={{...styles.gridRow, flexDirection: 'row'}}>
        <View
          style={{
            ...styles.gridColumn,
            justifyContent: 'flex-end',
            paddingBottom: '5%',
          }}>
          <Pressable
            style={{...styles.gridButton, backgroundColor: '#DE482B'}}
            onPress={handlePressHome}>
            <Text style={{...styles.buttonTitle}}>Home</Text>
          </Pressable>
        </View>
        <View
          style={{
            ...styles.gridColumn,
            justifyContent: 'flex-end',
            paddingBottom: '5%',
          }}>
          <Pressable
            style={{...styles.gridButton, backgroundColor: '#81C046'}}
            onPress={handlePressLists}>
            <Text style={{...styles.buttonTitle}}>Pokemons</Text>
          </Pressable>
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View
          style={{
            ...styles.gridColumn,
            justifyContent: 'flex-star',
            paddingTop: '5%',
          }}>
          <Pressable
            style={{...styles.gridButton, backgroundColor: '#3B77BC'}}
            onPress={handlePressMap}>
            <Text style={{...styles.buttonTitle}}>Mapa</Text>
          </Pressable>
        </View>
        <View
          style={{
            ...styles.gridColumn,
            justifyContent: 'flex-star',
            paddingTop: '5%',
          }}>
          <Pressable
            style={{...styles.gridButton, backgroundColor: '#FCCF03'}}
            onPress={handlePressProfile}>
            <Text style={{...styles.buttonTitle}}>Perfil</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  girdContainer: {
    flex: 1,
    height: HEIGHT,
    width: WIDTH,
  },
  gridColumn: {
    flex: 1,
    alignItems: 'center',
  },
  gridRow: {
    flex: 1,
  },
  gridButton: {
    backgroundColor: '#606060',
    width: WIDTH * 0.4,
    height: WIDTH * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
  },
  buttonTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
    elevation: 3,
  },
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#606060',
  },
});

export default Home;
