import React from 'react'

import { View, Text, TextInput, StyleSheet } from 'react-native'

import { primaryColor } from '../../../app/theme'

const textBase = {
  color: primaryColor,
  fontSize: 16,
  fontFamily: 'Roboto',
  lineHeight: 19
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 12,
    paddingHorizontal: 30
  },
  text: {
    ...textBase
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  buscaMarvel: {
    ...textBase,
    fontWeight: 'bold'
  },
  lineTitle: {
    backgroundColor: primaryColor,
    height: 2,
    width: 45
  },
  inputContainer: {
    marginTop: 12
  },
  textInput: {
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#A5A5A5',
    borderRadius: 3,
    height: 35
  }
})

const Header = ({ searchName, onChangeSearchName, onSubmitEditing }) => (
  <View style={styles.header}>
    <View style={styles.titleContainer}>
      <Text style={styles.buscaMarvel}>BUSCA MARVEL</Text>
      <Text style={styles.text}>TESTE FRONT-END</Text>
    </View>

    <View style={styles.lineTitle} />

    <View style={styles.inputContainer}>
      <Text style={styles.text}>Nome do Personagem</Text>
      <TextInput
        style={styles.textInput}
        value={searchName}
        onChangeText={onChangeSearchName}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  </View>
)

export default Header
