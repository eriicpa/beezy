import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 15
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  content2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  },

  img: {
    width: '50%',
    resizeMode: 'contain',
    marginTop: 100,
  },


  btnSignIn: {
    marginBottom: 15,
    backgroundColor: '#FFF',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 40,
  },

  btnSignIn2: {
    marginBottom: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#FFF',
    marginHorizontal: 40,
  },


  btnSignInText: {
    color: '#c6653c',
    fontSize: 16,
  },

  btnSignInText2: {
    color: '#FFF',
    fontSize: 16,
  }

});



export default styles;