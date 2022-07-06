import React, { Component } from "react";
import Button from "./Components/Button/Button";
import Input from "./Components/Input/Input";
import List from "./Components/List/List";
import Listitem from "./Components/LIstitem/Listitem";
import Text from "./Components/Text/Text";
import Card from "./Ui/Card/Card";
import Wrapper from "./Ui/Wrapper/Wrapper";
import classes from './Ui/Global.module.css'

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
      nextUserId: 6,
      searchedName: ''
    }
    this.nextUserName = React.createRef('');
    this.nextUserSurname = React.createRef('');
    this.nextUserAge = React.createRef('');
    this.nextUserHobby = React.createRef('');
  } 

  changeSearchedNameHandler = (event) => {
    this.setState({
      searchedName: event.target.value
    })
  }

  filterUsersBySearchName = (item) => {
      return item.name.toLocaleLowerCase().includes(this.state.searchedName.toLocaleLowerCase())
  }

  deleteExistingUserHandler = (id) => {
      const userListWithoutDeletedUser = this.state.userList.filter(user => user.id !== id)
      this.setState({
        userList: userListWithoutDeletedUser,
      })
    }

  addNewUserHandler = () => {
    if(
      this.nextUserName.current.value.length >= 3 
      && this.nextUserName.current.value.length <= 10
      && this.nextUserSurname.current.value.length >= 3 
      && this.nextUserSurname.current.value.length <= 10 
      && this.nextUserAge.current.value >= 18
      && this.nextUserAge.current.value <= 70
      && this.nextUserHobby.current.value.length >= 3
      && this.nextUserHobby.current.value.length <= 15
    ) {
      const newUser = {
        name: this.nextUserName.current.value,
        surname: this.nextUserSurname.current.value,
        age: this.nextUserAge.current.value,
        hobby: this.nextUserHobby.current.value,
        id: this.state.nextUserId
      }
      this.setState({
        nextUserId: this.state.nextUserId + 1,
        userList: this.state.userList.concat(newUser)
      })
      this.nextUserName.current.value = '';
      this.nextUserSurname.current.value = '';
      this.nextUserAge.current.value = '';
      this.nextUserHobby.current.value = ''
    }
   return
  }


  render() {
    return (
      <Wrapper>
        <Card className={classes['app-container']}>
        <Card className={classes.form}>
          <Text> filter users by name </Text>
          <Input className={classes['input-field']} placeholder='search user' onChange={this.changeSearchedNameHandler} type='text' />
        </Card>
        <Card className={classes.form}>
          <Text> new user name </Text>
          <Input className={classes['input-field']} placeholder='new user name' propsRef={this.nextUserName}  type='text' />
          <Text> new user surname </Text>
          <Input className={classes['input-field']} placeholder='new user surname' propsRef={this.nextUserSurname}  type='text' />
          <Text> new user age </Text>
          <Input className={classes['input-field']} placeholder='new user age' propsRef={this.nextUserAge}  type='number' />
          <Text> new user hobby </Text>
          <Input className={classes['input-field']} placeholder='new user hobby' propsRef={this.nextUserHobby}  type='text' />
          <Button className={classes.button} onClick={this.addNewUserHandler}> add new user </Button>
        </Card>
         <List className={classes.list}>
           {
            this.state.userList.filter(this.filterUsersBySearchName).map(user => {
              return (
                <Listitem className={classes['list-item']} key={user.id}>
                  <Text> {user.name} </Text>
                  <Text> {user.surname} </Text>
                  <Text> {user.age} </Text>
                  <Text> {user.hobby} </Text>
                  <Button className={classes.button} onClick={() => this.deleteExistingUserHandler(user.id)}> delete user </Button>
                </Listitem>
              )
            })
           }
         </List>
         </Card>
      </Wrapper>
    )
  }
}

export default App