
import React from 'react'
import './App.css';
import NoteContainer from './components/NoteContainer'
import Form from './components/Form'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import EditForm from './components/EditForm'
import ViewNote from './components/ViewNote'
import Login from './components/Login'
import Register from './components/Register'





class App extends React.Component {


  render(){
    return (
      <BrowserRouter>
      <div className="App">
        <header className="App-header">
     
          <Navbar/>

          <Switch>
          <Route component={Register} path='/register'/>
          <Route component={Login} path='/login'/>
          <Route component={Form} path='/notes/new'/>
          <Route component={EditForm} path='/notes/edit/:id'/>
          <Route component={ViewNote} path='/notes/:id'/>
          <Route component={NoteContainer} path='/notes'/>
          
    
          
      
          </Switch>
        </header>
      </div>
      </BrowserRouter>
    );
  }  
}





export default App;

