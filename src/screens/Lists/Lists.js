import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';
import Header from '../../componets/Header';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const Lista = props => {
  const handlePress = () => {
    props.navigation.navigate('ListDetail');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header left />
      <View style={{...styles.gridRow, flexDirection: 'row'}}>
        <Text style={{fontSize: 20}}>ListaPokemons</Text>
        <Pressable
          style={{...styles.gridButton, backgroundColor: '#DE482B'}}
          onPress={handlePress}>
          <Text style={{...styles.buttonTitle}}>Ir al detalle</Text>
        </Pressable>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridButton: {
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
    justifyContent: 'center',
  },
});

export default Lista;
