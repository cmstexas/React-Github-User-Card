import React from 'react';
import './App.css';
import PeopleCard from './components/PeopleCard';

class App extends React.Component {

  constructor() {
    super(); //imports 'this' keyword
    this.state = {
      userInfo: ['Loading'] //creates state variable of userInfo with value = empty array 
    }
  };

  fetchUserInfo = () => { //get api data
    fetch(`https://api.github.com/users/cmstexas`)
    .then(res => {return res.json();}) //format into json
    .then(gitInfo => this.setState( {userinfo: gitInfo} )) //takes json and sets it to state of userInfo
    .catch(err => console.log(err));
  }


  render() {
    this.fetchUserInfo();
    console.log(this.userInfo)

    return (
    <div className="App">
     <PeopleCard userinfo={this.state.userinfo}/>
    </div>
  );
};
}

export default App;
