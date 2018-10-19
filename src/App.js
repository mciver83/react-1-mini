import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      picture: '',
      friends: [{name: 'Carolyn', picture: 'https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/17201240_10100133566839811_7111017278383339070_n.jpg?_nc_cat=106&_nc_ht=scontent-sjc3-1.xx&oh=1f68eb1a5a34fad5e3e95dad3dfa4c91&oe=5C4E14B4'}]
    }
  }

  handlePictureChange(e) {
    let picture = e.target.value
    this.setState({
      picture: picture
    })
  }

  handleNameChange(e) {
    let name = e.target.value
    this.setState({
      name: name
    })
  }

  handleClick() {
    console.log(111111, this.state)
    let { name, picture } = this.state
    let friend = {
      name,
      picture
    }

    let friends = this.state.friends
    friends.push(friend)

    this.setState({
      friends
    })
  }

  render() {
    return (
      <div>
        <label>Picture:</label>
        <input type="text" onChange={e => this.handlePictureChange(e)}/>
        <label>Name:</label>
        <input type="text" onChange={e => this.handleNameChange(e)}/>
        <button onClick={() => this.handleClick()}>Add friend</button>
        {this.state.friends.map((friend, i) => {
          return (

            <div key={i}>
              <h1 style={{color: 'green'}}>{friend.name}</h1>
              <img width={200} height={200} src={friend.picture} alt=""/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
