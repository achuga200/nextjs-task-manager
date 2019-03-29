import React, { Component } from 'react'
import Layout from '../components/MyLayout.js'


export default class Index extends React.Component {
  static async getInitialProps () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const notes = await response.json()
    return {notes:notes}
  }

  render() {
    return (
        <div className="note" onClick={this.props.deleteMethod}>
            {this.props.text}
            <h3>Go To Church</h3>
        </div>

    );
  }
}

