import React from 'react';
import { View, Text, ScrollView, Image, Linking } from 'react-native';

import ServiceItem from '../../Components/ServiceItem/ServiceItem';
import ServiceList from '../ServiceList/ServiceList';

import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

function Profile({route}){
  const {provider} = route.params;
  const message = `Olá ${provider.name}, estou entrando em contato pois gostaria de contar com seus serviços!`;

  function handlelinkToWhatsapp() {
   
    Linking.openURL(`whatsapp://send?phone=55${provider.whatsapp}&text=${message}`)
  }

  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <View>
      <View style={styles.container}>
        {/* <Text style={styles.text}>Designer Gráfico</Text> */}
        
      </View>

      <View style={styles.area}>

        <Image source={{uri: provider.avatar.url}} style={styles.profilePic}></Image>
        <Text style={styles.name}>{provider.name}</Text>
        <Text style={styles.serviceType}>{provider.service_type}</Text>
        <Text style={styles.description}>{provider.bio}</Text>
        <View style = {styles.lineStyle} />

        <View style={styles.locbtn}>
          <Text style={styles.textLocation}>{provider.city}/{provider.uf}</Text>
        
            <RectButton style={styles.btnContact} onPress={handlelinkToWhatsapp}>
              <Text style={styles.contactButtonText}>Contatar</Text>
            <Ionicons name="logo-whatsapp" size={24} color="white" />
            </RectButton>
          {/* <Button style={styles.btnContact} title="Contatar" color="#c6653c"/> */}
        </View>
        <View style = {styles.lineStyle} />

        <View style= {styles.services}>
          <Text style={styles.textTitle}>Serviços</Text>
        </View>
        
        <ServiceList id={provider.id} numero={provider.whatsapp} name={provider.name}/>

      </View>
    
    </View>
    
    </ScrollView> 
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default Profile;