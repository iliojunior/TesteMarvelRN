import React from 'react'

import { View, Image, Text } from 'react-native'

import { styles } from '../'

class TableRow extends React.Component {
  getUriAvatar = ({ thumbnail }) => `${thumbnail.path}.${thumbnail.extension}`

  render() {
    const { item } = this.props

    return (
      <View style={styles.row} key={item.id}>
        <View style={styles.cell}>
          <Image
            style={styles.avatar}
            source={{ uri: this.getUriAvatar(item) }}
          />
        </View>
        <View style={styles.cell}>
          <Text style={styles.personagemName}>{item.name}</Text>
        </View>
      </View>
    )
  }
}

export default TableRow
