import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sliderContainer: {
    height: 200,
    // width: '90%',
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },

  categoryContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 10,
  },

  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center'
  },

  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#000'
  },

  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#c6653c',
    borderRadius: 50,
  }
})

export default styles;