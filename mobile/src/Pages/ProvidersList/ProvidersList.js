import React, { useState, useEffect } from 'react';
import { Text, View, Image, FlatList, LogBox } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UserItem from '../../Components/UserItem/UserItem';
import { useNavigation } from '@react-navigation/native';
import api from '../../Services/api';

import styles from './styles';

export default function ProvidersList(){
  
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

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])

  const { navigate } = useNavigation();
  return(
    <View>
      {provider.length ? (

        <FlatList
        data={provider}
        keyExtractor={provider => String(provider.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadingProvider}
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
      ): null}  
    
    </View>
  );
}