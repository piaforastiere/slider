import React, { Component } from 'react'

// class FinalSelect extends Component {
//   state = {
//     list: [],
//     isLoading: false
//   }
//   render () {
//     const { isLoading } = this.state
//     return isLoading ? (
//       <div>Loading...</div>
//     ) : (
//
//     )
//   }
// }
//
class GenreSelect extends Component {
  state = {
    list: [],
    isLoading: false
  }
  componentDidMount () {
    
  }
  render () {
    const { isLoading } = this.state
    return isLoading ? (
      <div>Loading...</div>
    ) : (
      this.props.type
    )
  }
}

class MainSelect extends Component {
  state = {
    options: null,
    isLoading: false,
    selectedOption: ''
  }
  componentDidMount () {
    this.setState({
      isLoading: true
    })
    setTimeout(() => {
      this.setState({
        isLoading: false,
        options: [
          { value: 'movie', label: 'Películas' },
          { value: 'tv', label: 'Series' }
        ]
      })
    }, 1000)
  }
  handleChange = e => {
    this.setState({
      selectedOption: e.target.value
    })
  }
  render () {
    const { isLoading, options, selectedOption } = this.state
    return isLoading ? (
      <div>Loading...</div>
    ) : options && (
      <div>
        <select onChange={this.handleChange}>
          <option>...</option>
          {options.map(option =>
            <option key={option} value={option.value}>
              {option.label}
            </option>
          )}
        </select>
        {selectedOption && <GenreSelect type={selectedOption} />}
      </div>
    )
  }
}

const Prueba = () =>
  <MainSelect />

export default Prueba
