import React, {useState}  from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
function NavigationScreen({navigation, route}) {

    
    return (

        <View style={{ marginTop: 30 ,backgroundColor: 'white', flex: 0.1,  alignItems: 'center', justifyContent:'space-between' , flexDirection: 'row' , paddingHorizontal: 10 }}>
        <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => navigation.navigate('DetailScreen')}>
        <View style={{backgroundColor: '#F0F0F0', width: 120, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}> 
            <Text style={{color: 'black', fontSize: 14, opacity: 0.6 , letterSpacing: 0.7}}> Profile</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
          <View style={{backgroundColor: '#FEB801', width: 120, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}> 
            <Text style={{color: 'white', fontSize: 14, letterSpacing: 0.7}}> Adoption</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, flexDirection: 'row'}}>
            <View style={{backgroundColor: '#F0F0F0', width: 120, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}> 
            <Text style={{color: 'black', fontSize: 14, opacity: 0.6 ,letterSpacing: 0.7}}> Disappearance</Text>
            </View>
            </TouchableOpacity>
        </View>
    );
}

export default NavigationScreen;