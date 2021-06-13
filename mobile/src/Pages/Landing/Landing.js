import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import bgImage from '../../assets/Images/landingBg.png';
import bz from '../../assets/Images/bz.png';
import bee from '../../assets/Images/bee.png';

import Background from '../../Components/Background/Background';


function Landing(){
  const { navigate } = useNavigation();

  function handleNavigateToHome(){
    navigate('BottomTab')
  }

  function handleNavigateToTeste(){
    navigate('ProviderList')
  }
  return(
    <Background>
    <View style={styles.container}>
      <ImageBackground 
      resizeMode="contain"
      source={bgImage}
      style={styles.content}
      
      > 
        <View style={styles.content2}>
          <Image source={bee} style={styles.img}/>
          
        </View>
        <RectButton onPress={handleNavigateToHome} style={styles.btnSignIn}>
          <Text style={styles.btnSignInText}>Entrar</Text>
        </RectButton>

        <RectButton onPress={()=>alert("Acesse a plataforma web!")} style={styles.btnSignIn2}>
          <Text style={styles.btnSignInText2}>Prestador</Text>
        </RectButton>
        {/* <RectButton onPress={handleNavigateToTeste} style={styles.btnSignIn2}>
          <Text style={styles.btnSignInText2}>Prestador</Text>
        </RectButton> */}
      </ImageBackground>
    </View>
    </Background>
    
  );
}

export default Landing;