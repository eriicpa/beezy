import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';

import styles from './styles';

import bzza from '../../assets/Images/bezzym.png';
import bz from '../../assets/Images/bz.png';
import bee from '../../assets/Images/bee.png';

import beez from '../../assets/Images/beezysv.svg';

import { useNavigation } from '@react-navigation/native'





function SignIn(){
  const { navigate } = useNavigation();

  function handleNavigateToSignUpPage(){
    navigate('SignUp')
  }

  function handleNavigateToHomePage(){
    navigate('BottomTab')
  }

  function handleNavigateToLandingPage(){
    navigate('Landing')
  }

  const [user, setUser] = useState();

  const onChangeUser = (user) => {
    setUser(user);
  }

  return(

  
      <View style={styles.container}>

        <TouchableOpacity onPress={handleNavigateToLandingPage}>
          <AntDesign name="arrowleft" size={26} color="black" style={styles.lftArrow}/>
        </TouchableOpacity>


          <View style={styles.content2}>
            <Image source={bzza} style={styles.img}/>

            <Text style={styles.text}>
             Para encontrar serviços, faça
            </Text>
            
            <Text style={styles.Lgtext}>
              Login:
            </Text>

           
            <Text style={styles.labelUser}>
               Usuário:
            </Text>
            <View style={styles.containerInput}>
              <TextInput
                style={styles.inputStyle}
                placeholder="User"
                value={user}
                onChange={onChangeUser}
              />
              <FontAwesome name="user" size={24} color="black" />
      
            </View>

            
            
            <Text style={styles.labelPass}>
               Senha:
            </Text>
            <View style={styles.containerInput}>
              <TextInput
                
                style={styles.inputStyle}
                placeholder="Password"
                value={user}
                onChange={onChangeUser}
                secureTextEntry={true}
              />
              <Ionicons name="md-eye-off-sharp" size={24} color="black" />
            </View>
      


          </View>
          
          <RectButton onPress={handleNavigateToHomePage} style={styles.btnSignIn}>
            <Text style={styles.btnSignInText}>Login</Text>
          </RectButton>
          <TouchableOpacity onPress={handleNavigateToSignUpPage}>
            <Text style={styles.signUp}>Ainda não tenho cadastro</Text>
          </TouchableOpacity>


      </View>



      

  );}

export default SignIn;