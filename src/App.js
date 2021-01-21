import React from "react";
import "./App.css";
import PersonSingle from "./Component/PersonSingle";
import PersonObject from "./Component/PersonObject";
// dont forget the from

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "James Intile",
      email: "1212@gmail.com",
      number: "11111111",

      Robert: {
        fullName: "lil Rob",
        email: "ryoung@gmail.com",
        number: "1812",
        food: "Burgers And chicken",
        car: "Porshe",
        game: "Escape From Tarkov",
      },
    };

    // const robert = {
    //   name: 'Robert',
    //   age: "22",
    //   number: "777-777-7777",
    //   email:"12345@gmail.com",
    // }

    // this.state = {
    //   robert
    // }
  }

  render() {
    return (
      <div className="App">
        {/* <Person basicInfo = {this.state.personA}/>
<Person basicInfo = {this.state.personB}/> */}
        {/* <Basicinfo name={kiera} /> */}
        {/* {JSON.stringify(this.state.robert)} */}
        {/* {JSON.stringify(this.state.person)} */}
        <PersonSingle
          fullName="Robert Young"
          email="12345@gmail.com"
          number="777777777"
        />
        <PersonSingle
          fullName={this.state.fullName}
          email={this.state.email}
          number={this.state.number}
        />
        <PersonObject person={this.state.Robert} />
      </div>
    );
  }
}

export default App;
