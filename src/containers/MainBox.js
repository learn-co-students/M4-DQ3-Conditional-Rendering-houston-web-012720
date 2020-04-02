import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      display: <Profile />
    }
  }

  changeDisplay = (newDisplay) => {
    let newPage 
    switch(newDisplay){
      case "profile": 
        newPage = <Profile />
        break
      case "photo":
        newPage = <Photos />
        break
      case "cocktail":
        newPage = <Cocktails />
        break
      case "pokemon": 
        newPage = <Pokemon />
      default: 
        newPage = <Profile />
    }
    this.setState({
      display: newPage
    })
  }


  render() {

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar changeDisplay={this.changeDisplay}/>
        {this.state.display}
      </div>
    )
  }

}

export default MainBox
