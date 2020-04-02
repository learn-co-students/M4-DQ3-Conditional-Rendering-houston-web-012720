import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      currentActive: "profile"
    }
  }

  handleMenuClick = (event) => {
    this.setState({currentActive: event.target.id})
    this.Page(event.target.id)
  }

  Page = (selection) => {
    switch(selection) {
      case "pokemon":
        return(<Pokemon />)
        break;
      case "profile":
        return(<Cocktails />)
        break;
      case "cocktail":
        return(<Profile />)
        break;
      case "photo":
        return(<Photos />)
        break;
    }
  }

  render() {
    return (
      <div>
        <MenuBar onMenuClick={event => this.handleMenuClick(event)}/>
        {this.Page(this.state.currentActive)}
      </div>
    )
  }

}

export default MainBox
