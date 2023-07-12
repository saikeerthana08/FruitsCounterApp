// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="main-title">
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>
          <div className="fruit-container">
            <div className="fruit-card">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <button
                className="fruit-button"
                onClick={this.eatMango}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
              />
              <button
                className="fruit-button"
                onClick={this.eatBanana}
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
