import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    height: 275,
    borderRadius: 5,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profilePic: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 100,
    margin: 20,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#4a4a4a',
  },

  service: {
    fontSize: 15,
    color: '#8f8f8f'
  },

  description: {
    lineHeight: 24,
    marginLeft: 20,
    marginRight: 20,
  },

  locbtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
    marginBottom: 19,
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
    marginTop: 15,
    marginLeft: 10,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#d4d4d4',
    borderBottomWidth: 1,
}
});

export default styles;