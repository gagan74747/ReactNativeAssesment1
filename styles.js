import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 60,
  },
  loginFormContainer: {
    paddingHorizontal: 30,
  },
  labelText: {
    fontSize: 20,
    color: '#F25456',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#F25456',
    fontSize: 20,
    color: 'black',
    opacity: 0.7,
    textDecorationLine: 'none',
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    marginVertical: 20,
  },
  loginButtonText: {
    fontSize: 20,
    color: '#F25456',
    fontWeight: 'bold',
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonWithIcon: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    flexBasis: '47%',
    padding: 10,
    height: 55,
    borderRadius: 30,
  },
  socialAuthButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:4,
  },
  icon: {
    height: '100%',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
