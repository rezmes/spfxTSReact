// import { useState } from "react";

// type AuthUser = {
//   name: string,
//   email: string
// }


// export const User =() => {
//   const[user, setUser]=useState<AuthUser | null>(null)
//   const handleLogin = () => {
//     setUser({
//       name: 'Reza',
//       email: 'Reza@Mesgari.com'
//     })
//   }
//   const handleLogout = ()=> {
//     setUser(null)
//   }
//   return (
//     <div>
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleLogout}>Logout</button>
//       <div>User name is {user?.name} </div>
//       <div>User email is {user?.email}</div>
//     </div>

//   )
// }


import * as React from 'react';

export interface AuthUser {
  name: string;
  email: string;
}

export interface UserState {
  user: AuthUser | null;
}

export class User extends React.Component<{}, UserState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: null,
    };
  }

  handleLogin = () => {
    this.setState({
      user: {
        name: 'Reza',
        email: 'Reza@Mesgari.com'
      }
    });
  }

  handleLogout = () => {
    this.setState({
      user: null
    });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
        <div>User name is {user ? user.name : 'not logged in'}</div>
        <div>User email is {user ? user.email : 'not logged in'}</div>
      </div>
    );
  }
}

