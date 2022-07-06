import { Component } from "react";
import List from "./Components/List/List";
import Listitem from "./Components/LIstitem/Listitem";
import Text from "./Components/Text/Text";
import Wrapper from "./Ui/Wrapper/Wrapper";

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
      <Wrapper>
         <List>
           {
            this.state.userList.map(user => {
              return (
                <Listitem key={user.id}>
                  <Text> {user.name} </Text>
                  <Text> {user.surname} </Text>
                  <Text> {user.age} </Text>
                  <Text> {user.hobby} </Text>
                </Listitem>
              )
            })
           }
         </List>
      </Wrapper>
    )
  }
}

export default App