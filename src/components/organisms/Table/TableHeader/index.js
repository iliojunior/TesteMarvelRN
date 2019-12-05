import React from 'react'

import { View, Text } from 'react-native'

import { styles } from '../'

const TableHeader = () => (
  <View style={styles.header}>
    <View style={styles.row}>
      <View style={styles.cell}>
        <View style={styles.avatarHeader} />
      </View>
      <View style={styles.cell}>
        <Text style={styles.textHeader}>Nome</Text>
      </View>
    </View>
  </View>
)

export default TableHeader
