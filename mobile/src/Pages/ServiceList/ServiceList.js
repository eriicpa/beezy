import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Linking, FlatList, LogBox } from 'react-native';
import styles from './styles';



import api from '../../Services/api';

import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

function ServiceList(id, numero, name){


  const [service, setService] = useState([]);

  async function loadingService(){
    const response = await api.post('services/all', id); //replace this with api
    setService(response.data);
  }


  useEffect(() => {
   //log will work here
  }, [service]);
  

  useEffect(() => {
    loadingService();
  }, []);


  function handlelinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?text=Olá, te encontrei na plataforma Beezy! Gostaria de saber mais sobre o serviço Logo Simples no valor de 150 reais &phone=5511954095257`)
  }


  return(
    
    // <TouchableOpacity onPress={() => alert('Perfil')}>
    <FlatList
      data={service}
      keyExtractor={service => String(service.id)}
      showsVerticalScrollIndicator={false}
      onEndReached={loadingService}
      onEndReachedThreshold={0.2}
      renderItem={({ item: service }) => (
    <View style={styles.container}>
      <View>
        <View style={styles.cardTop}>
          <Image source={{uri: service.avatar.url}} style={styles.profilePic}></Image>
          <View>
            <Text style={styles.name}>Serviço</Text>
            <Text style={styles.service}>{service.title}</Text>
            <Text style={styles.name}>Preço</Text>
            <Text style={styles.service}>R$ {service.value}</Text>
          </View>
          
        </View>
        

        <View style = {styles.lineStyle} />
        <RectButton style={styles.btnContact} onPress={() => {
          Linking.openURL(`whatsapp://send?text=Olá, ${id.name}! Te encontrei na plataforma Beezy! Gostaria de saber mais sobre o serviço - ${service.title} - no valor de ${service.value} reais &phone=55${id.numero}`)
          console.log(id.name);
        }}>
              <Text style={styles.contactButtonText}>Contatar</Text>
              <Ionicons name="logo-whatsapp" size={24} color="white" />
          </RectButton>
        <View style={styles.locbtn}>
          {/* <Button style={styles.btnContact} title="Ver Perfil" color="#c6653c"/> */}
          <Text></Text>
        </View>
      </View>
    </View>
     )} />
    // </TouchableOpacity>
  );
}


export default ServiceList;