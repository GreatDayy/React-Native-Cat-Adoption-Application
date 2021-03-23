import React, {useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity, Platform, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, AntDesign, Entypo, MaterialCommunityIcons} from '@expo/vector-icons';


function ProfileScreen({navigation}) {
    const [image, setImage] = useState(null);


    const PickImage = async () => {
        try {
      let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true, 
            aspect: [4,3],
            quality: 1
        })

        if(!result.cancelled) {
            setImage(result.uri);
            console.log(result.uri)
        }
        } catch(error) {
           console.log(error)
           
        }
      
    }
    return (
        <View style={{backgroundColor:'white', flex: 1}}>
            <View style={{flex: 1, backgroundColor: 'white'}}> 
            <View style={{backgroundColor: 'blue', height: 250}}>
   <LinearGradient
        // Background Linear Gradient
        colors={['#ff5f6d', '#ffc371']}
        style={{ 
         flex: 1, width: '100%', paddingTop: 30}}
      >
          <View style={{alignItems: 'center'}}> 
            <View style={{borderRadius: 50, width: 100, height: 100, borderWidth: 3, borderColor: '#FDCB2D'}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}> 
                <Image style={{width: 100, height: 100, borderRadius: 50}} source={{uri:image}}/>
                </View>
                <View style={{alignItems: 'flex-end', position: 'absolute', top: 65, left: 10, right: 50, bottom: 0, width: 90 }}> 
                <TouchableOpacity onPress={PickImage}>
                    
                     <MaterialCommunityIcons name="camera-plus" size={30} color="purple"/>
            
                </TouchableOpacity>
               
                </View>

            </View>
            </View>
            
           <View style={{alignItems: 'center', marginTop: 10}}>
               <Text style={{fontSize: 30, color: 'white'}}>@Appinpuser</Text>
               <Text style={{fontSize: 14, color: 'white'}}>Catlover@hotmail.com</Text>
           </View>
           <TouchableOpacity style={{flex: 1}} onPress={() => navigation.navigate('BookListScreen')} >
            <View style={{alignItems: 'center'}}> 
                <LinearGradient colors={['#ffe259', '#ffa751']}
                 style={{width: 300, height: 60, borderRadius: 50, flexDirection: 'row', position: 'absolute', top: 15}}
                >
                    <View style={{width: 50, height: '100%', justifyContent: 'center', marginHorizontal: 15}}>
                     <View style={{backgroundColor: 'white', borderRadius: 50, width: 45, height: 45, alignItems: 'center', justifyContent:'center'}}>
                   
                    <Ionicons name="md-arrow-back" size={28} color="purple" />
                   
                    </View>
                  
                    </View>
                    <View style= {{flex: 1, justifyContent: 'center', position: 'absolute', left: 0, top: 0, right: 0, bottom: 0, alignItems: 'center'}}> 
                        <Text style={{color: 'white', fontWeight: 'bold'}}>Back to</Text>
                        <Text style={{color: 'white', fontWeight: 'bold'}}> Home </Text>
                    </View>

                </LinearGradient>
            </View>
            </TouchableOpacity>
          </LinearGradient>


            </View>
             <View style={{flex: 1, backgroundColor: 'white', margin: 20, marginTop: 40}}>
                 <View> 
                     <Text style={{fontWeight: 'bold', fontSize: 30}}>Account Info</Text>
                 </View>
                 <View style={{flex: 1, backgroundColor: '#f9f9f9' }}>
                     <View style={{flexDirection: 'row', padding: 10, borderBottomColor: 'black', borderBottomWidth: 0.5}}>
                     <AntDesign name="profile" size={30} color="blue" style={{marginTop: 5}}/>
                         <View style={{marginLeft: 10}}>
                             <Text style={{fontWeight: 'bold', fontSize: 17}}>Name</Text>
                             <Text>Abdirahman Dayib</Text>
                         </View>
                     </View>

                     <View style={{flexDirection: 'row', padding: 10, borderBottomColor: 'black', borderBottomWidth: 0.5}}>
                     <Entypo name="mobile" size={30} color="green" style={{marginTop: 5}} />
                         <View style={{marginLeft: 10}}>
                             <Text style={{fontWeight: 'bold', fontSize: 17}}>Mobile</Text>
                             <Text>+46708921381</Text>
                         </View>
                     </View>

                     <View style={{flexDirection: 'row', padding: 10, borderBottomColor: 'black', borderBottomWidth: 0.5}}>
                     <MaterialCommunityIcons name="email-outline" size={30} color="purple" style={{marginTop: 5}} />
                         <View style={{marginLeft: 10}}>
                             <Text style={{fontWeight: 'bold', fontSize: 17}}>Email</Text>
                             <Text>Catlover@hotmail.com</Text>
                         </View>
                     </View>

                     <View style={{flexDirection: 'row', padding: 10, borderBottomColor: 'black', borderBottomWidth: 0.5}}>
                     
                     <Entypo name="location" size={30} color="lightblue"  style={{marginTop: 5}}/>
                         <View style={{marginLeft: 10}}>
                             <Text style={{fontWeight: 'bold', fontSize: 17}}>Adress</Text>
                             <Text>Avenue 2nd Street NW SY.</Text>
                         </View>
                     </View>

                 </View>

             </View>

            </View>
        </View>
    );
}

export default ProfileScreen;