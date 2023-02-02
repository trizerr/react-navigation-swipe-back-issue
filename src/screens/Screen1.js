import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";

const Screen1 = ({navigation}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
            <Text style={{color: 'black'}}>Screen1</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Screen2')}>
                <Text style={{color: 'black'}}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Screen1;
