import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";

const Screen2 = ({navigation}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
            <Text style={{color: 'black'}}>Screen2</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Screen3')}>
                <Text style={{color: 'black'}}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Screen2;
