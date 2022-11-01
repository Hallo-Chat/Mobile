import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';

const LoginItem = () => {

  const navigation = useNavigation();

  const onPressDangNhap = () => { 
    console.warn('Email: ', data.email)
    console.warn('Password: ', data.password)
    navigation.navigate('HomeScreen');
  }

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const textInputChange = (val) => {
    if ( val.lenght !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      })
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      })
    }
  }

  const handlePasswordChange = (val) => {
    if (val.trim().lenght >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false
      })
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle="light-content"/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.titleInput}>Địa chỉ email</Text>

      <TextInput 
        style={styles.inputUser}
        placeholder='VD: van@gmail.com, thi@yahoo.com, ...'
        onChangeText={(val) => textInputChange(val)}
      />

      {/* {data.check_textInputChange ?
        <Animatable.View animation='bounceIn'>
          <Feather name='check-circle' color='blue' size={20} />
        </Animatable.View>
      : null} */}

      <Text style={styles.titleInput}>Mật khẩu</Text>
      <TextInput 
        style={styles.inputUser}
        onChangeText={(val) => handlePasswordChange(val)}
      />
      <Pressable onPress={onPressDangNhap} style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Đăng Nhập</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
    },
    header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
    },
    text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
    },
    title: {
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        paddingBottom: 32
    },
    titleInput: {
      fontSize: 14,
      color: '#1B61DB'
    },
    inputUser: {
        backgroundColor: 'orange',
        fontSize: 12,
        height: 32,
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    buttonContainer: {
      marginTop: 32,
      backgroundColor: '#1B61DB',
      height: 42,
      width: '50%',
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      textAlign: 'center',
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold'
    }
})

export default LoginItem