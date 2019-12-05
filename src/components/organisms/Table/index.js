import React from 'react'
import PropTypes from 'prop-types'

import { View, Image, Text, StyleSheet } from 'react-native'

import TableHeader from './TableHeader'
import TableContent from './TableContent'
import TablePagination from './TablePagination'

import { primaryColor } from '../../../app/theme'

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    color: 'white',
    backgroundColor: primaryColor
  },
  textHeader: {
    fontSize: 16,
    color: 'white'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomColor: primaryColor,
    borderBottomWidth: 1
  },
  cell: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  avatarHeader: {
    width: 58
  },
  avatar: {
    height: 58,
    width: 58,
    borderRadius: 29
  },
  personagemName: {
    fontSize: 18,
    flex: 1,
    color: '#4E4E4E',
    textAlignVertical: 'center'
  }
})

const Table = ({ data, page, totalPages, onChangePage }) => (
  <View style={styles.table}>
    <TableHeader />
    <TableContent data={data} />
    <TablePagination
      page={page}
      totalPages={totalPages}
      onChange={onChangePage}
    />
  </View>
)

Table.propTypes = {
  data: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired
}

export default Table
