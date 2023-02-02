import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";

const Screen3 = ({navigation}) => {
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
            <Text style={{color: 'black'}}>Screen3</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Screen4')}>
                <Text style={{color: 'black'}}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Screen3;
