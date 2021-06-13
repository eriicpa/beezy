import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Linking } from 'react-native';
import styles from './styles';

import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

function ServiceItem(){
  function handlelinkToWhatsapp() {
   
    Linking.openURL(`whatsapp://send?text=Olá, te encontrei na plataforma Beezy! Gostaria de saber mais sobre o serviço Logo Simples! &phone=5511954095257`)
  }
  return(
    
    // <TouchableOpacity onPress={() => alert('Perfil')}>
    <View style={styles.container}>
      <View>
        <View style={styles.cardTop}>
          <Image source={{uri: 'https://i.ibb.co/4FBYpLy/Sem-T-tulo-4.jpg'}} style={styles.profilePic}></Image>
          <View>
            <Text style={styles.name}>Serviço</Text>
            <Text style={styles.service}>Logo Simples</Text>
            <Text style={styles.name}>Preço</Text>
            <Text style={styles.service}>R$150,00</Text>
          </View>
          
        </View>
        

        <View style = {styles.lineStyle} />
        <RectButton style={styles.btnContact} onPress={handlelinkToWhatsapp}>
              <Text style={styles.contactButtonText}>Contatar</Text>
              <Ionicons name="logo-whatsapp" size={24} color="white" />
          </RectButton>
        <View style={styles.locbtn}>
          {/* <Button style={styles.btnContact} title="Ver Perfil" color="#c6653c"/> */}
          <Text></Text>
        </View>
      </View>
    </View>
    // </TouchableOpacity>
  );
}


export default ServiceItem;