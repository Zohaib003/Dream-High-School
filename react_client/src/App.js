import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';



class App extends React.Component {
  state = {
    persons: [],
  }

  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
      console.log(response)    
      const persons = response.data
          this.setState({persons});
          console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")       
      })
  };


  render() {
    const listss = this.state.persons.map((x,i) => <h1 key={i}>{x.name}</h1>);
    // console.log(`a;cdcdcad ad;c ${verr}`)

    return (
      <>
      <div>{listss}</div>
      </>
    )
  }
}

export default App;
