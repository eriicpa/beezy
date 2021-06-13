import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import api from '../../Services/api';

import './styles'
import styles from './styles';

function ProviderList(){
  const [provider, setProvider] = useState([]);
  const [servico, setServico] = useState('');
  const [estado, setEstado] = useState('');
  const [estatus, setEstatus] = useState(false);


  async function teste() {
    // console.log(service);
    // console.log(uf);

    const data = {
      servico,
      estado
    }


    const response = await api.post('filter', data);
    // console.log(response.data)
    setProvider(response.data);
    setEstatus(true);

    // console.log(provider);
  }

  useEffect(() => { //log will work here

  }, [provider]);
  

  // useEffect(() => {
  //   loadingProvider();
  // }, []);
  
  const { navigate } = useNavigation();
  return(
    <ScrollView>
    <View style={styles.containerGeral}>
      {/* <Text>provider length is : {provider.length}</Text> */}
      <View style={styles.containerInput}>
      <TextInput
        placeholder="Serviço"
        onChangeText={servico => setServico(servico)}
        styles={styles.input}
      />
      </View>
      <View style={styles.containerInput}>
      <TextInput
        placeholder="Estado"
        onChangeText={estado => setEstado(estado)}
        styles={styles.input}
      />
      </View>

          <RectButton style={styles.btnContact} onPress={teste}>
              <FontAwesome name="search" size={24} color="white" />
          </RectButton>
      
      {estatus && provider.length ?  (
        <View>
          <FlatList
        data={provider}
        keyExtractor={provider => String(provider.id)}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.2}
        renderItem={({ item: provider }) => (
        <TouchableOpacity onPress={() => navigate("Profile", {provider})}>
        <View style={styles.container}>
        <View>
          <View style={styles.cardTop}>
            <Image source={{uri: provider.avatar.url}} style={styles.profilePic}></Image>
            <View>
              <Text style={styles.name}>{provider.name}</Text>
              <Text style={styles.service}>{provider.service_type}</Text>
              
            </View>
          </View>
          <Text style={styles.description}>{provider.bio}</Text>
          <View style = {styles.lineStyle} />
          <View style={styles.locbtn}>
            <Text style={styles.textLocation}>{provider.city}/{provider.uf}</Text>
            {/* <Button style={styles.btnContact} title="Ver Perfil" color="#c6653c"/> */}
            <Text></Text>
          </View>
        </View>
      </View>
      </TouchableOpacity>
      )} />
        </View>
      ): null}  
    </View> 
    </ScrollView>
    
  )
}

export default ProviderList;