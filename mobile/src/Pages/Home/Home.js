import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../../Services/api';

import Swiper from 'react-native-swiper';
import styles from './styles';

import { MaterialIcons, FontAwesome, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';


import UserItem from '../../Components/UserItem/UserItem';
import PeoplePage from '../PeoplePage/PeoplePage';
import ProvidersList from '../ProvidersList/ProvidersList';

function Home({navigation}){
  const [provider, setProvider] = useState([]);

  async function loadingProvider(){
    const response = await api.get('providers'); //replace this with api
    setProvider(response.data);
  }


  useEffect(() => {
    // console.log(provider); //log will work here
  }, [provider]);
  

  useEffect(() => {
    loadingProvider();
  }, []);


  


  // async function render(){

  //   const response = await api.get('providers');
  //   setUsers([...users, ...response.data]);
  //   console.log(users[1].name);
  // }
  
  // React.useEffect( () => {
  //   render();
  // }, [])
  
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}> 
{/* ---------------- Slider --------------------*/}
      <View style={styles.sliderContainer}>
        <Swiper 
          autoplay horizontal={true} heigth={200}
          activeDotColor="#c6653c"
        >
          <View style={styles.slide}>
            <Image 
              source={require('./baker.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>

          <View style={styles.slide}>
            <Image 
              source={require('./programmer.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>

          <View style={styles.slide}>
            <Image 
              source={require('./designer.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>


      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => alert('Design')}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="design-services" size={40} color="white" />
          </View>
          <Text style={styles.categoryBtnTxt}>Design</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
          <FontAwesome name="wrench" size={40} color="white" />
          </View>
          <Text style={styles.categoryBtnTxt}>Manutenção</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
          <MaterialIcons name="grass" size={40} color="white" />
          </View>
          <Text style={styles.categoryBtnTxt}>Jardinagem</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
          <Entypo name="video" size={40} color="white" />
          </View>
          <Text style={styles.categoryBtnTxt}>Multímidia</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <FontAwesome name="paint-brush" size={40} color="white" />
          </View>
          <Text style={styles.categoryBtnTxt}>Arte</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons name="food-drumstick" size={40} color="white" />
          </View>
          <Text style={styles.categoryBtnTxt}>Alimenticio</Text>
        </TouchableOpacity>
      </View>
{/* ---------------- Card --------------------*/}

      {provider.length ? (
        <View>
          

          
          <ProvidersList />

        </View>
      ): null}  

      





      {/* <Button 
        title="Go to Profile screen"
        onPress={() => navigation.navigate("Profile")}
      /> */}
      
    </View> 
    </ScrollView>
  )

}

export default Home;