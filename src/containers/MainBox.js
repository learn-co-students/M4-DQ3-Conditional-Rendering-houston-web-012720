import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(){
    super()
    this.state = {
      menuselected: "profile"
    }
  }

  changeselection = (event) => {
    console.log(event)
    this.setState({
      menuselected: event
    })
  }



  render() {
    let content 

    switch(this.state.menuselected){
      case "profile": content = <Profile/>
      break;
      case "photo": content = <Photos/>
      break;
      case "cocktail": content = <Cocktails/>
      break;
      case "pokemon": content = <Pokemon/>
      break;
    }

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar changeselection = {this.changeselection} menuselected ={this.state.menuselected} />
        {content}
      </div>
    )
  }

}

export default MainBox
