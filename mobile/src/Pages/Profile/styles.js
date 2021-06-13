import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c6653c',
    height: 150,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  text: {
    color: '#FFF',
    fontSize: 20,
    marginTop: 15,
  },

  area: {
    flex: 1,
    backgroundColor: '#FFF',
    // height: 1000,
    borderRadius: 25,
    margin: 5,
    alignItems: 'center',
  },

  profilePic: {
    width: 175,
    aspectRatio: 1,
    borderRadius: 100,
    marginTop: -100,
    borderColor: "#c6653c",
  },

  name: {
    marginTop: 5,
    fontSize: 23,
    fontWeight: "bold",
    color: '#000'
  },

  serviceType: {
    marginTop: 5,
    fontSize: 16,
    color: '#8f8f8f'
  },

  description: {
    margin: 20,
    textAlign: 'center',
  },

  locbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  textLocation: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 75,
    marginLeft: 20,
    color: '#515151'
  },

  btnContact: {
      backgroundColor: '#c6653c',
      flex: 1,
      height: 56,
      borderRadius: 8,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 8,
  },

  contactButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 5,
    marginRight: 16,
  },

  button: {
    backgroundColor: '#c6653c',
  },

  lineStyle:{
    marginTop: 15,
    width: 350,
    borderBottomColor: '#8f8f8f',
    borderBottomWidth: 1,
},

textTitle: {
  fontSize: 15,
  fontWeight: "bold",
  color: '#515151',
  marginTop: 50,
  marginBottom: 25,
},

services: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}

})

export default styles;