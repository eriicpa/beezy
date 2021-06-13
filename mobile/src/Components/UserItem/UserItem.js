import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

function UserItem({navigation}){
  return(
    
    // <TouchableOpacity onPress={() => alert('Perfil')}>
    <View style={styles.container}>
      <View>
        <View style={styles.cardTop}>
          <Image source={{uri: 'https://avatars3.githubusercontent.com/u/60799697?s=460&u=a3956a89a0ccc3b8acfdcb5394d86e6bf703fd1a&v=4'}} style={styles.profilePic}></Image>
          <View>
            <Text style={styles.name}>Eric Almeida</Text>
            <Text style={styles.service}>Designer Gráfico</Text>
            
          </View>
        </View>
        <Text style={styles.description}>Logos, ilustrações, banners, mascotes e outros tipos de artes para você ou sua empresa!</Text>
        <View style = {styles.lineStyle} />
        <View style={styles.locbtn}>
          <Text style={styles.textLocation}>Média de Preço: $$$</Text>
          {/* <Button style={styles.btnContact} title="Ver Perfil" color="#c6653c"/> */}
          <Text></Text>
        </View>
      </View>
    </View>
    // </TouchableOpacity>
  );
}


export default UserItem;