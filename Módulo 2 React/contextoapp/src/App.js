import './App.css';
import React from 'react';
import Username from './Components/User';



export const UserContext = React.createContext();

function App() {
  return (
    <UserContext.Provider value="Alejandro">
      <Username/>
    </UserContext.Provider>
  );
}

function User(){

  const value= React.useContext(UserContext);
  return <h1>{value}</h1>


  /*return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>}
    </UserContext.Consumer>
  )*/
}

export default App;
