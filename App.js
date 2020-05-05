import * as React from 'react';
import { StyleSheet, Button, View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from 'react-native-vector-icons/Ionicons'
import ModeMulti  from './Component/Pages/ModeMulti'
import ModeSolo  from './Component/Pages/ModeSolo'
import FootballField from 'react-native-football-lineup';

var home = {
  name: 'POR',
  module: '4-3-3',
  team: [
    [
      {
        number: 1,
        name: 'Alexis',
      },
    ],
    [
      {
        number: 21,
        name: 'Mathieu',
      },
      {
        number: 3,
        name: 'Samuel',
      },
      {
        number: 6,
        name: 'Alexis',
      },
      {
        number: 5,
        name: 'JB',
      },
    ],
    [
      {
        number: 14,
        name: 'Calvalho',
      },
      {
        number: 8,
        name: 'Mountinho',
      },
      {
        number: 11,
        name: 'Silva',
      },
      {
        number: 17,
        name: 'Guedes',
      },
    ],
    [
      {
        number: 16,
        name: 'Fernandes',
      },
      {
        number: 7,
        name: 'Cristiano Ronaldo',
      },
    ],
  ],
  home_team_events: [
    {
      id: 203,
      type_of_event: 'red-card',
      player: 'Silva',
      time: "3'",
    },
    {
      id: 210,
      type_of_event: 'yellow-card',
      player: 'Fernandes',
      time: "64'",
    },
    {
      id: 210,
      type_of_event: 'yellow-card',
      player: 'Fonte',
      time: "64'",
    },
    {
      id: 206,
      type_of_event: 'substitution-in',
      player: 'Fonte',
      time: "31'",
    },
  ],
};

var away = {
  name: 'SPA',
  module: '6-2-2',
  team: [
    [
      {
        number: 1,
        name: 'De Gea',
      },
    ],
    [
      {
        number: 18,
        name: 'Alba',
      },
      {
        number: 15,
        name: 'Ramos',
      },
      {
        number: 3,
        name: 'Pique',
      },
      {
        number: 4,
        name: 'Nacho',
      },
    ],
    [
      {
        number: 8,
        name: 'Koke',
      },
      {
        number: 5,
        name: 'Busquets',
      },
    ],
    [
      {
        number: 6,
        name: 'Olivier',
      },
      {
        number: 22,
        name: 'Olivier',
      },
      {
        number: 21,
        name: 'Olivier',
      },
    ],
    [
      {
        number: 19,
        name: 'Olivier',
      },
    ],
  ],
  away_team_events: [
    {
      id: 210,
      type_of_event: 'yellow-card',
      player: 'De Gea',
      time: "12'",
    },
    {
      id: 206,
      type_of_event: 'substitution-in',
      player: 'Iniesta',
      time: "31'",
    },
    {
      id: 206,
      type_of_event: 'substitution-in',
      player: 'Costa',
      time: "32'",
    },
    {
      id: 206,
      type_of_event: 'red-card',
      player: 'Silva',
      time: "31'",
    },
  ],
};


function AccueilScreen({ navigation }) {
  return (
    <ImageBackground source={require('./assets/foot2.png')} 
      style={[styles.container]}>
      <Text >Welcome to the best football app!</Text>
    </ImageBackground>
  );
}

function EffectifScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function SuiviJoueurScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
      onPress={() => navigation.navigate('ModeSolo')}
        title="Go to mode solo"
        />
       <Text >Choisissez le mode qui vous convient</Text>
         <Button
      onPress={() => navigation.navigate('Mode Multi')}
        title="Go to mode multi"
        />
    </View>
  );
}

function ModeSoloScreen({ navigation }) {
  return (
    <View style={styles.foot}>
        <FootballField home={home} away={away} />
      </View>
  );
}

function ParametrageScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text >Ici les paramètres de l'application</Text>
       <Button
      onPress={() => navigation.navigate('Accueil')}
        title="Go to home"
        />
    </View>
  );
}


function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//Enlever "export default" et le mettre sur App pour passer de l'un à l'autre
export default function Root() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Accueil">
        <Drawer.Screen name="Accueil" component={AccueilScreen} />
        <Drawer.Screen name="Effectif" component={EffectifScreen} />
        <Drawer.Screen name="Suivi Joueur" component={SuiviJoueurScreen} />
        <Drawer.Screen name="Paramétrages" component={ParametrageScreen} />
        <Drawer.Screen name="ModeSolo" component={ModeSoloScreen} />
      </Drawer.Navigator>  
    </NavigationContainer>
  );
}

{/* <Image
          source={require('./images/drawer.png')}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        /> */}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigRed: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
  foot: {
    flex: 1,
    padding: 35,
    borderColor: '#fff',
    backgroundColor: '#000',
  },
  
  });