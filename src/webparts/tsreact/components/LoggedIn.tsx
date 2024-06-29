// import * as React from "react";
// import { useState } from "react";
// export const LoggedIn = () => {
// const [isLoggedIn, setIsLoggedIn]= useState(false)

// const handleLogin = () => {
//   setIsLoggedIn(true)
// }
// const handleLogout = () => {
//   setIsLoggedIn(false)
// }
// return (
//   <div>
//     <button onClick={handleLogin}>Login</button>
//     <button onClick={handleLogout}>Logout</button>
//   <div> User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
//   </div>
// )
// }
import * as React from "react";

export interface IState {
  isLoggedIn: boolean;
}

export class LoggedIn extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
        <div>User is {this.state.isLoggedIn ? 'logged in' : 'logged out'}</div>
      </div>
    );
  }
}
