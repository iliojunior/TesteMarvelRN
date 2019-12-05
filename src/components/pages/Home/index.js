import React from 'react'

import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'

import Header from '../../organisms/Header'
import Content from '../../organisms/Content'

import MarvelService from '../../../services/marvel'

import { primaryColor } from '../../../app/theme'

const textBase = {
  color: primaryColor,
  fontSize: 16,
  fontFamily: 'Roboto',
  lineHeight: 19
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
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
  },
  loading: {
    textAlign: 'center',
    paddingBottom: 12,
    color: primaryColor
  }
})

const calculateTotalPages = (totalItems, limit) => Math.ceil(totalItems / limit)

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchName: '',
      page: 0,
      totalPages: 0,
      loading: false,
      personagens: []
    }
  }

  loadPersonagens = async () => {
    this.setState({
      personagens: [],
      totalPages: 0,
      loading: true
    })

    const { page, searchName } = this.state
    const limit = 4
    const queryParams = {
      limit: limit,
      orderBy: 'name',
      offset: page * limit,
      nameStartsWith: searchName || undefined
    }

    const { ok, data } = await MarvelService.findPersonagens(queryParams)

    if (!ok) {
      this.setState({ loading: false })
    }

    this.setState({
      personagens: data.data.results,
      totalPages: calculateTotalPages(data.data.total, limit),
      loading: false
    })
  }

  componentDidMount() {
    this.loadPersonagens()
  }

  handleChangeSearchName = newText => {
    this.setState({ searchName: newText })
  }

  handleChangePage = newPage => {
    this.setState({ page: newPage }, this.loadPersonagens)
  }

  handleSubmit = () => {
    this.setState({ page: 0 }, this.loadPersonagens)
  }

  render() {
    const { searchName, personagens, page, totalPages, loading } = this.state

    return (
      <SafeAreaView style={styles.root}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Header
            searchName={searchName}
            onSubmitEditing={this.handleSubmit}
            onChangeSearchName={this.handleChangeSearchName}
          />

          <Content
            page={page}
            totalPages={totalPages}
            onChangePage={this.handleChangePage}
            personagens={personagens}
          />

          {loading && (
            <Text style={styles.loading}>Carregando, aguarde...</Text>
          )}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Home
