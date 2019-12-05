import React from 'react'

import { View, Image, Text } from 'react-native'

import TableRow from '../TableRow'

import { styles } from '../'

const TableContent = ({ data }) => (
  <View style={styles.content}>
    {data.map((item, index) => (
      <TableRow item={item} key={item.id} />
    ))}
  </View>
)

export default TableContent
