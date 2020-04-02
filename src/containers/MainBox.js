import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    page: 'profile'
  }

  changePage = (event) => {
    console.log(event.target.id)
    // switch (event.value) {
    //   case 'profile':
    //     this.setState({
    //       page: 'profile'
    //     })
    //     break
    //   case ''
    // }

    this.setState({
      page: event.target.id
    })

  }


  render() {
    // console.log(this)
    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    let component = null

    switch (this.state.page) {
      case 'profile':
        component = <Profile />
        break
      case 'photo':
        component = <Photos />
        break
      case 'cocktail':
        component = <Cocktails />
        break
      case 'pokemon':
        component = <Pokemon />
        break
    }

    return (
      <div>
        <MenuBar changePage={this.changePage} />
        {component}
      </div>
    )
  }

}

export default MainBox
