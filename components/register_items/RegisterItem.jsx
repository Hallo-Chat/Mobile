import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const RegisterItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.titleInput}>Tên tài khoản</Text>
      <TextInput style={styles.inputUser} placeholder='VD: VanA, ThiB, ...'></TextInput>
      <Text style={styles.titleInput}>Địa chỉ email</Text>
      <TextInput style={styles.inputUser} placeholder='VD: van@gmail.com, thi@yahoo.com, ...'></TextInput>
      <Text style={styles.titleInput}>Mật khẩu</Text>
      <TextInput style={styles.inputUser}></TextInput>
      <Text style={styles.titleInput}>Xác nhận mật khẩu</Text>
      <TextInput style={styles.inputUser}></TextInput>
      <Pressable style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Đăng Nhập</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    titleInput: {

    },
    inputUser: {
        backgroundColor: 'orange',
        fontSize: 12,
        height: 32,
        borderRadius: 10,
        paddingHorizontal: 10
    },
    buttonContainer: {
      marginTop: 20,
      backgroundColor: 'lightblue'
    },
    buttonText: {

    }
})

export default RegisterItem