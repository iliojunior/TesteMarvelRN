import React from 'react'
import PropTypes from 'prop-types'

import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'

import { primaryColor } from '../../../../app/theme'

const arrowColor = '#D20A0A'

const circlePageBase = {
  width: 32,
  height: 32,
  borderWidth: 1,
  borderRadius: 16,
  marginHorizontal: 12
}

const circlePageTextBase = {
  flex: 1,
  fontSize: 21,
  textAlign: 'center',
  textAlignVertical: 'center'
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    paddingHorizontal: 30
  },
  pages: {
    flexDirection: 'row',
    paddingHorizontal: 50
  },
  arrowLeft: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 12,
    borderRightWidth: 16,
    borderBottomWidth: 12,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: arrowColor,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent'
  },
  arrowRight: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 12,
    borderRightWidth: 0,
    borderBottomWidth: 12,
    borderLeftWidth: 16,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: arrowColor
  },
  circlePage: {
    ...circlePageBase,
    borderColor: primaryColor
  },
  circlePageActive: {
    ...circlePageBase,
    backgroundColor: primaryColor,
    borderWidth: 0
  },
  circlePageText: {
    ...circlePageTextBase,
    color: primaryColor
  },
  circlePageTextActive: {
    ...circlePageTextBase,
    color: 'white'
  }
})

class TablePagination extends React.Component {
  getItemsToShow = () => {
    const { page, limitItems, totalPages } = this.props

    const listReturn = []
    const limitToCalc = limitItems - 1
    var start = Math.max(0, page - limitToCalc)
    var end = Math.min(start + limitToCalc, totalPages - 1)

    for (var i = start; i <= end; i++) {
      listReturn.push(i + 1)
    }

    return listReturn
  }

  isActualPage = pageCompare => {
    const { page } = this.props
    return pageCompare === page + 1
  }

  getCirclePageStyle = pageRender => {
    return this.isActualPage(pageRender)
      ? styles.circlePageActive
      : styles.circlePage
  }

  getCirclePageTextStyle = pageRender => {
    return this.isActualPage(pageRender)
      ? styles.circlePageTextActive
      : styles.circlePageText
  }

  previousPage = () => {
    const { page, onChange } = this.props

    if (page + 1 > 1) onChange(page - 1)
  }

  nextPage = () => {
    const { page, onChange, totalPages } = this.props

    if (page + 1 < totalPages) onChange(page + 1)
  }

  setPage = page => () => {
    const { onChange } = this.props
    onChange(page - 1)
  }

  render() {
    const { totalPages } = this.props

    return (
      <View style={styles.root}>
        <TouchableWithoutFeedback onPress={this.previousPage}>
          <View style={styles.arrowLeft} />
        </TouchableWithoutFeedback>

        <View style={styles.pages}>
          {this.getItemsToShow().map((page, idx) => (
            <TouchableWithoutFeedback onPress={this.setPage(page)}>
              <View style={this.getCirclePageStyle(page)} key={page}>
                <Text style={this.getCirclePageTextStyle(page)}>{page}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>

        <TouchableWithoutFeedback onPress={this.nextPage}>
          <View style={styles.arrowRight} />
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

TablePagination.propTypes = {
  page: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

TablePagination.defaultProps = {
  limitItems: 4
}

export default TablePagination
