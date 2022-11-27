import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  Alert,
} from 'react-native'
import React from 'react'
import { Feather, FontAwesome } from '@expo/vector-icons'

import * as Animatable from 'react-native-animatable'

import { LinearGradient } from 'expo-linear-gradient'
import useBearStore from '../../store/login'
import axios from 'axios'

const SignInScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  })

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      })
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      })
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }

  const setUser = useBearStore((state) => state.setUser)

  React.useEffect(() => {
    ;(async () => {
      const user = await AsyncStorage.getItem('USER')
      if (user) {
        setUser(JSON.parse(user))
        navigation.navigate('HomeScreen')
      }
    })()
  }, [])

  const handleClickLogin = async () => {
    try {
      const res = await axios
        .post('http://10.0.2.2:4000/api/auth/login', data)
        .then((res) => {
          console.log(res.data)
          if (res.status === 200) {
            AsyncStorage.setItem('USER', JSON.stringify(res.data))
            setUser(res.data)
            navigation.navigate('HomeScreen')
          } else {
            Alert.alert('Notification', 'Email or Password error')
          }
        })
        .catch((error) => console.log(error))
      //loginCall({ email: data.email, password: data.password });
    } catch (err) {
      console.log(
        '🚀 ~ file: SignInScreen.tsx ~ line 80 ~ handleClickLogin ~ err',
        err
      )
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#08456d' barStyle={'light-content'} />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation='fadeInUpBig'>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name='user-o' color='#05375a' size={20} />
          <TextInput
            placeholder='Your email'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation='bounceIn'>
              <Feather name='check-circle' color='green' size={20} />
            </Animatable.View>
          ) : null}
        </View>

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <Feather name='lock' color='#05375a' size={20} />
          <TextInput
            placeholder='Your Password'
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name='eye-off' color='grey' size={20} />
            ) : (
              <Feather name='eye' color='grey' size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <LinearGradient colors={['#0264A1', '#029cf9']} style={styles.signIn}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('HomeScreen')}
              onPress={handleClickLogin}
              style={styles.signIn}>
              <Text style={[styles.textSign, { color: 'white' }]}>Sign In</Text>
            </TouchableOpacity>
          </LinearGradient>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              {
                borderColor: '#029cf9',
                borderWidth: 1,
                marginTop: 15,
              },
            ]}>
            <Text style={[styles.textSign, { color: '#029cf9' }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#029cf9',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 14,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -6,
    paddingLeft: 10,
    color: '#05375a',
    fontSize: 12,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold',
  },
})
