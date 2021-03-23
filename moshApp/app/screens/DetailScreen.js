import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Entypo } from '@expo/vector-icons'; 


function DetailScreen({navigation, route}) {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}> 
         <Image
          source={route.params.picture}
          style={{width: '100%', height: 350, resizeMode: 'cover'}}
         />
         <View style={styles.descriptionContainer}>
        <View style={{flexDirection: 'row'}}>
         <View style={styles.informationContainer}>
             <View style={styles.txtContainer}> 
             <Text style={styles.genderTxt}>Gender</Text>
             <Text style={styles.textInfo}>
                 {route.params.gender}
             </Text>
             </View>

         </View>

         <View style={styles.informationContainer}>
             <View style={styles.txtContainer}> 
             <Text style={styles.genderTxt}>Age</Text>
             <Text style={styles.textInfo}>
                 {route.params.age}
             </Text>
             </View>

         </View>

         <View style={styles.informationContainer}>
             <View style={styles.txtContainer}> 
             <Text style={styles.genderTxt}>Weight</Text>
             <Text style={styles.textInfo}>
                 {route.params.weight}
             </Text>
             </View>
         </View>
         
         </View>
          
          <View style={styles.containerPetInformation}>
              <View>
              <Text style={styles.title}>{route.params.name}</Text>
              </View>

              <View style={styles.locationContainer}>
              <Entypo style={{}} name="location-pin" size={25} color="#F69C67" /> 
              <Text style={styles.DetailLocation}> {route.params.location}</Text>

              <View style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
               <Text>{route.params.date}</Text>
              </View>
              </View>

              <View style={{marginVertical: 15}}> 
                  <Text style={{lineHeight: 23}}>{route.params.description}</Text>
              </View>

              <View>
                  <Text style={{fontWeight: 'bold', fontSize: 18}}>Contact Person</Text>
                  <View style={{flexDirection: 'row', paddingVertical: 10}} >
                    <Image style={{width: 40, height: 40, borderRadius: 50}}  source={require('../assets/ContactMan.png')}/>
                    <View style={{marginHorizontal: 14}}>
                        <Text style={{lineHeight: 20, fontWeight: 'bold'}}>Zakariya Ahmed</Text>
                        <Text style={{opacity: 0.7}}>Owner</Text>
                    </View>
                    <View style={{flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                     <View style={{backgroundColor: '#2F80AE',  borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}}> 
                     <MaterialCommunityIcons name="phone-in-talk" size={24} color="white" />
                    </View>
                    <View style={{backgroundColor: '#FEBC0D', marginLeft: 15 , borderRadius: 50, width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}}> 
                    <MaterialCommunityIcons name="chat-processing" size={24} color="white" />
                    </View>
                    </View>
                  </View>
              </View>

          </View>

         </View>
         </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    },
    contentContainer: {
        flex: 1,
    },
    descriptionContainer: {
        flex: 1,
        backgroundColor: '#F1F1F1',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        marginTop: -100,
        padding: 10,
    },
    informationContainer: {
      
        paddingHorizontal: 10,
        marginTop: 15,
    },
    txtContainer: {
        backgroundColor: 'white',
        width: 100,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
    },

    textInfo: {
       color: 'black',
       fontWeight: 'bold'

        
    },
    genderTxt: {
        color: 'black',
        opacity: 0.5,
        paddingVertical: 4
    },

    title: {
        fontWeight: 'bold',
        fontSize: 29
        
    },
    containerPetInformation: {
        paddingHorizontal: 15,
        marginVertical: 20,
        paddingRight: 24
    },

    locationContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },

    DetailLocation: {
        fontWeight: 'bold',
        fontSize: 16
    }





})
export default DetailScreen;