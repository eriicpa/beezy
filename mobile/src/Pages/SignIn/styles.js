import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    padding: 15,
    backgroundColor: '#FFF',
  },

  lftArrow: {
    marginTop: 20,
  },

  content2: {
    
    alignItems: 'center',
    margin: 17,
  },

  text: {
    color: '#4a4a4a',
    fontSize: 20,
    lineHeight: 37,
    alignSelf: 'flex-start'
  },

  Lgtext: {
    color: '#c6653c',
    fontSize: 30,
    lineHeight: 37,
    alignSelf: 'flex-start'
  },

  img: {
    width: '50%',
    resizeMode: 'contain',
  },


  btnSignIn: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: '#c6653c',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 40,
  },



  btnSignInText: {
    color: '#FFF',
    fontSize: 16,
  },

  signUp: {
    color: '#4a4a4a',
    alignSelf: 'center',
    fontWeight: 'bold'
  },

  containerInput: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    borderBottomWidth: 1.5,
  },

  inputStyle: {
    marginLeft: 15,
    height: 50,
    flex: 1
  },

  

  labelUser: {
    alignSelf: 'flex-start',
    marginLeft: 12,
    marginTop: 50,
  },

  labelPass: {
    alignSelf: 'flex-start',
    marginLeft: 12,
    marginTop: 50,
  }
 
 
 
});

export default styles;