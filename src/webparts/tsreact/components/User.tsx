import * as React from 'react';

type AuthUser = {
  name: string;
  email: string;
};

export class User extends React.Component<{}, { user: AuthUser | null }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: null
    };
  }

  handleLogin = () => {
    this.setState({
      user: {
        name: 'Reza',
        email: 'Reza@dogholoobeza.com'
      }
    });
  };

  handleLogout = () => {
    this.setState({ user: null });
  };

  render() {
    const { user } = this.state;
    return (
      <div>
        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
        <div>User Name is {user ? user.name : 'Not logged in'}</div>
        <div>User Email is {user ? user.email : 'Not logged in'}</div>
      </div>
    );
  }
}
// import * as React from 'react';

// type AuthUser = {
//   name: string;
//   email: string;
// };

// type UserState = {
//   user: AuthUser | null;
// };

// export class User extends React.Component<{}, UserState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       user: null
//     };
//   }

//   handleLogin = () => {
//     this.setState({
//       user: {
//         name: 'Reza',
//         email: 'Reza@dogholoobeza.com'
//       }
//     });
//   };

//   handleLogout = () => {
//     this.setState({ user: null });
//   };

//   render() {
//     const { user } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleLogin}>Login</button>
//         <button onClick={this.handleLogout}>Logout</button>
//         <div>User Name is {user ? user.name : 'Not logged in'}</div>
//         <div>User Email is {user ? user.email : 'Not logged in'}</div>
//       </div>
//     );
//   }
// }

// import * as React from 'react';

// type AuthUser = {
//   name: string;
//   email: string;
// };

// export class User extends React.Component<{}, {}> {
//   state: {
//     user: AuthUser | null;
//   };

//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       user: null
//     };
//   }

//   handleLogin = () => {
//     this.setState({
//       user: {
//         name: 'Reza',
//         email: 'Reza@dogholoobeza.com'
//       }
//     });
//   };

//   handleLogout = () => {
//     this.setState({ user: null });
//   };

//   render() {
//     const { user } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleLogin}>Login</button>
//         <button onClick={this.handleLogout}>Logout</button>
//         <div>User Name is {user ? user.name : 'Not logged in'}</div>
//         <div>User Email is {user ? user.email : 'Not logged in'}</div>
//       </div>
//     );
//   }
// }

// import * as React from 'react';

// type AuthUser = {
//   name: string;
//   email: string;
// };

// export class User extends React.Component<{}, { user: AuthUser | null }> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       user: null
//     };
//   }

//   handleLogin = () => {
//     this.setState({
//       user: {
//         name: 'Reza',
//         email: 'Reza@dogholoobeza.com'
//       }
//     });
//   };

//   handleLogout = () => {
//     this.setState({ user: null });
//   };

//   render() {
//     const { user } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleLogin}>Login</button>
//         <button onClick={this.handleLogout}>Logout</button>
//         <div>User Name is {user ? user.name : 'Not logged in'}</div>
//         <div>User Email is {user ? user.email : 'Not logged in'}</div>
//       </div>
//     );
//   }
// }
// import * as React from "react";

// type AuthUser = {
//   name: string
//   email: string
// }

// type UserState = {
//   user: AuthUser | null;
// }

// export class User  extends React.Component<{}, UserState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
// user: null
//     };
//   }

//   handleLogin = () => {
//     this.setState({user:{ name:'Reza', email: 'Reza@mesgari.com'} });
//   };

//   handleLogout = () => {
//     this.setState({ user: null });
//   };


//   render() {
//     const { user } = this.state;
//     return (
//       <div>
//         <button onClick={this.handleLogin}>Login</button>
//         <button onClick={this.handleLogout}>Logout</button>
//         <div>User Name is {user ? user.name : 'Not logged in'}</div>
//         <div>User Email is {user ? user.email : 'Not logged in'}</div>
//       </div>
//     );
//   }
// }

// import {useState} from 'react'
// type AuthUser = {
// name: 'Reza',
// email: 'reza@doghbeza.com'
// }
// export const User = () => {
//   const[user, setUser ]= useState<AuthUser | null>(null)
// const handleLogin = () => {
//   setUser({
//     name: 'Reza',
//     email: 'Reza@dogholoobeza.com'
//   })
// }
// const handleLogout = () => {
//   setUser(null)
// }
// return (
//   <div>
//     <button onClick ={handleLogin}>Login</button>
//     <button onClick ={handleLogout}>Logout</button>
//     <div>UserName is {user?.name}</div>
//     <div>UserName is {user?.email}</div>

//   </div>
// )
// }
