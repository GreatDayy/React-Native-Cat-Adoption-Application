import React, {useState} from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, FlatList } from 'react-native';
import {useFocusEffect} from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationScreen from './NavigationScreen';

function BookListScreen({navigation, route}) {

 const [catList, setCatList] = useState([])
  const [StudyList, setStudyList] = useState([
    {
      CatName: 'Meni',
      Age: '1 year',
      Description: 'Long-Furred Blue Eyed Cat, persian Cat British, Shorthair Maine Coon RagDoll Siberain Cat Coon RagDoll Siberian Cat. Mena Pet Cat creative. White.',
      picture: require('../assets/ImgurCat1.jpg'),
      Location: 'Ravelsmark (4 km)',
      Gender: 'Male',
      Weight: '1.5 Kg',
      date: '21 October 2020'
    },
    {
      CatName: 'Alice',
      Age: '1.5 year',
      Description: 'Long-Furred Blue Eyed Cat, persian Cat British, Shorthair Maine Coon RagDoll Siberain Cat Coon RagDoll Siberian Cat. Mena Pet Cat creative. White.',
      picture: require('../assets/ImgurCat2.jpg'),
      Location: 'Peterdrams (8 km)',
      Gender: 'Female',
      Weight: '2.5 Kg',
      date: '13 Novem 2020'


    },

    {
      CatName: 'Walt',
      Age: '1 year',
      Description: 'Long-Furred Blue Eyed Cat, persian Cat British, Shorthair Maine Coon RagDoll Siberain Cat Coon RagDoll Siberian Cat. Mena Pet Cat creative. White.',
      picture: require('../assets/ImgurCat3.jpg'),
      Location: 'Gamlestan (3 km)',
      Gender: 'Male',
      Weight: '1 Kg',
      date: '13 Septem 2020'



    },

    {
      CatName: 'Freddy',
      Age: '1.5 year',
      Description: 'Long-Furred Blue Eyed Cat, persian Cat British, Shorthair Maine Coon RagDoll Siberain Cat Coon RagDoll Siberian Cat. Mena Pet Cat creative. White.',
      picture: require('../assets/ImgurCat4.jpg'),
      Location: 'Fabelgatan (11 km)',
      Gender: 'Male',
      Weight: '2.5 Kg',
      date: '09 July 2020'



    },

    {
      CatName: 'Eddie',
      Age: '3 year',
      Description: 'Long-Furred Blue Eyed Cat, persian Cat British, Shorthair Maine Coon RagDoll Siberain Cat Coon RagDoll Siberian Cat. Mena Pet Cat creative. White.',
      picture: require('../assets/ImgurCat5.jpg'),
      Location: 'Poesigatan (5 km)',
      Gender: 'Male',
      Weight: '4 Kg',
      date: '03 Oktob 2020'



    },

    {
      CatName: 'Grey',
      Age: '2 year',
      Description: 'Long-Furred Blue Eyed Cat, persian Cat British, Shorthair Maine Coon RagDoll Siberain Cat Coon RagDoll Siberian Cat. Mena Pet Cat creative. White.',
      picture: require('../assets/ImgurCat6.jpg'),
      Location: 'Babelsvägen (8 km)',
      Gender: 'Male',
      Weight: '1.9 Kg',
      date: '17 Decemb 2020'




    },

    {
      CatName: 'Fox',
      Age: '3 year',
      Description: 'Long-Furred Blue Eyed Cat, persian Cat British, Shorthair Maine Coon RagDoll Siberain Cat Coon RagDoll Siberian Cat. Mena Pet Cat creative. White.',
      picture: require('../assets/ImgurCat7.jpg'),
      Location: 'Acaciagatan (10 km)',
      Gender: 'Female',
      Weight: '3.5 Kg',
      date: '29 Febru 2020'



    },

    {
      CatName: 'Rave',
      Age: '2 year',
      Description: 'Long-Furred Blue Eyed Cat, persian Cat British, Shorthair Maine Coon RagDoll Siberain Cat Coon RagDoll Siberian Cat. Mena Pet Cat creative. White.',
      picture: require('../assets/ImgurCat8.jpg'),
      Location: 'Cafébacken ( 2 km)',
      Gender: 'Male',
      Weight: '2.5 Kg',
      date: '21 Decemb 2020'



    },
   ])
   const [isNavigated, setNavigated] = useState(true);

   

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}> 
      {/* Should Import NavigationScreen js */}

      <View style={{ marginTop: 30 ,backgroundColor: 'white', flex: 0.1,  alignItems: 'center', justifyContent:'space-between' , flexDirection: 'row' , paddingHorizontal: 10 }}>
        <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => navigation.navigate('ProfileScreen')}>
        <View style={{backgroundColor: '#F0F0F0', width: 120, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}> 
            <Text style={{color: 'black', fontSize: 14, opacity: 0.6 , letterSpacing: 0.7}}> Profile</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1, flexDirection: 'row'}} onPress={() => navigation.navigate("")}>
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
    
      <View style={styles.container}>
          <View style={{backgroundColor: '#ffffff', flex: 1, flexDirection: 'row'}}>
          <FlatList 
            data={StudyList}
            style={{}}
            numColumns={2}
            
            renderItem={({item}) => (
               <TouchableOpacity style={{paddingHorizontal: 12}} onPress={() => navigation.navigate("DetailScreen", 
               {name: item.CatName,  
                picture: item.picture,
                age: item.Age,
                description: item.Description,
                location: item.Location,
                gender: item.Gender,
                weight: item.Weight,
                date: item.date
               })}> 
               
               
                                                                                                     
             <View style={styles.productContainer}>
               <Image style={styles.image} source={item.picture} /> 
           
              <View style={styles.detailContainer}>
              <View style={styles.detailStyler}>
                <Text style={styles.DetailtextTitle}>{item.CatName}</Text>
                </View>
                <View style={styles.detailStyler}>
                <Text style={styles.DetailTimeStudy}> {item.Age}</Text>
                </View>
                <View style={styles.detailStyler}>
                <Entypo style={{}} name="location-pin" size={18} color="#FEB801" /> 
                <Text style={styles.DetailLevel}> {item.Location}</Text>
                
                <AntDesign style={{paddingLeft: 6}} name="checksquare" size={20} color="#FEB801" />
                </View>
                </View>
                </View>
               </TouchableOpacity>
            )}
           
            />


          </View>
            

          </View>
          </View>
    );
}
const styles = StyleSheet.create({
   container: {
      backgroundColor: 'white',
      padding: 20,
      flex: 1, flexDirection: 'row'
  },
   image: {
     width: 150, 
     height: 130,
     flex: 1,
     borderTopLeftRadius: 100,
     borderTopRightRadius: 100,
     resizeMode: 'contain'

  },
  adoption: {
   backgroundColor: 'blue'
   
  },
    imageContainer: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row'
      },
      detailContainer: {
         backgroundColor: '#F9F9F9', 
         height: 70,
         borderTopRightRadius: 20,
         borderTopLeftRadius: 20,
         padding: 8,
         flex: 1,
         height: 100,
         width: 150,
         marginTop: -30,
         paddingVertical: 20
      }
      ,
      DetailtextTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        

      },
      DetailTimeStudy: {
        color: 'black',
        opacity: 0.5,
        marginBottom: 2

      },
      DetailLevel: {
        color: 'black',
        fontSize: 11,
      },

      detailStyler: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 0,
        
      },
      productContainer: {
        flex: 1, 
        alignItems: 'center',
        marginBottom: 10
      }
   

    
      
       // alignContent:  "center",
      // flexWrap: "wrap"




      

})
export default BookListScreen;
