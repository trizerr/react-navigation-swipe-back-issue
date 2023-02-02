import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";

const LandingScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <Text style={{color: 'black'}}>Landing Screen</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('ScreensStack')}>
            <Text style={{color: 'black'}}>Next</Text>
        </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;
