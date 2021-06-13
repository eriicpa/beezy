import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: 215,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profilePic: {
    width: 100,
    aspectRatio: 1,
    margin: 20,
    borderRadius: 8,
  },

  name: {
    fontSize: 16,
    marginTop: 8,
    fontWeight: "bold",
    color: '#4a4a4a',
  },

  service: {
    fontSize: 15,
    color: '#8f8f8f'
  },



  textLocation: {
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 150,
  },

  btnContact: {
    borderRadius: 45,
  },

  lineStyle:{
    marginLeft: 10,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
},


btnContact: {
  padding: 25,
  backgroundColor: '#c6653c',
  flex: 1,
  height: 56,
  borderRadius: 8,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 8,
},

contactButtonText: {
color: '#FFF',
fontSize: 16,
marginLeft: 5,
marginRight: 16,
},

});

export default styles;