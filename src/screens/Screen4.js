import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";

const Screen4 = ({navigation}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
            <Text style={{color: 'black'}}>Screen4</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Screen5')}>
                <Text style={{color: 'black'}}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Screen4;
