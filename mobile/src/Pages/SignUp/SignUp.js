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

// import { Container } from './styles';

function SignUp(){

  const { navigate } = useNavigation();

  function handleNavigateToSignInPage(){
    navigate('SignIn')
  }

  const [user, setUser] = useState();

  const onChangeUser = (user) => {
    setUser(user);
  }

  return(
    <ScrollView>
    <View style={styles.container}>

        <TouchableOpacity onPress={handleNavigateToSignInPage}>
          <AntDesign name="arrowleft" size={26} color="black" style={styles.lftArrow}/>
        </TouchableOpacity>

          <View style={styles.content2}>
            <Image source={bzza} style={styles.img}/>

            <Text style={styles.text}>
             Para encontrar serviços, faça
            </Text>
            
            <Text style={styles.Lgtext}>
              Cadastro:
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


            <Text style={styles.labelPass}>
               Nome:
            </Text>
            <View style={styles.containerInput}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Pedro Paulo"
                value={user}
                onChange={onChangeUser}
              />            
            </View>

            <Text style={styles.labelPass}>
               Email:
            </Text>
            <View style={styles.containerInput}>
              <TextInput
                style={styles.inputStyle}
                placeholder="teste@teste.com"
                value={user}
                onChange={onChangeUser}
              />
            </View>

            <Text style={styles.labelPass}>
               CPF:
            </Text>
            <View style={styles.containerInput}>
              <TextInput
                style={styles.inputStyle}
                placeholder="222.222.222-22"
                value={user}
                onChange={onChangeUser}
              />
            </View>
      


          </View>
          
          <RectButton onPress={()=>{alert('Cadastro')}} style={styles.btnSignIn}>
            <Text style={styles.btnSignInText}>Cadastrar</Text>
          </RectButton>
          <TouchableOpacity onPress={handleNavigateToSignInPage}>
            <Text style={styles.signUp}>Já tenho cadastro</Text>
          </TouchableOpacity>

      </View>
      </ScrollView>
  );
}
export default SignUp;