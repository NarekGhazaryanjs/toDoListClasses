import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [
        {name: "Narek", surname: "Ghazaryan", age: 32, hobby: "developing", id: 1},
        {name: "Narfioro", surname: "Xudoyan", age: 32, hobby: "Reading", id: 2},
        {name: "Garcia", surname: "Markes", age: 60, hobby: "Writing", id: 3},
        {name: "Vahagn", surname: "Davtyan", age: 70, hobby: "Writing", id: 4},
        {name: "Klareenc", surname: "Seedorf", age: 40, hobby: "Playing", id: 5},
      ],
      nextUserId: 6
    }
  } 


  render() {
    return (
      <section>
        
      </section>
    )
  }
}

export default App