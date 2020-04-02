import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {


  constructor() {
    super()
    this.state = {
      active: "profile"
    }
  }


  handleClick = (selected) => {
    this.setState({
      active: selected
    })
  }

  render() {


    let content

    switch (this.state.active) {

      case "profile":
        content = <Profile />
        break;

      case "photo":
        content = <Photos />
        break;

      case "cocktail":
        content = <Cocktails />
        break;

      case "pokemon":
        content = <Pokemon />
        break;

    }
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleClick={this.handleClick} selected={this.state.active} />
        {content}
      </div>

    )
  }

}

export default MainBox
