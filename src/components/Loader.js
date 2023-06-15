import React, { Component } from 'react'
import loading from "./Bean Eater-1s-200px.gif"

export default class Loader extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="" />
      </div>
    )
  }
}
