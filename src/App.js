import "./App.css";
import React from 'react';
import Home from './Components/Home/Home';
import Header from "./Components/Header/Header";
import Users from "./Components/Users/Users";
import NotFound from './Components/NotFound/NotFound';
import CreateUser from "./Components/CreateUser/CreateUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';

const locale = navigator.language;

let defaultMessages = Spanish;

switch (locale) {
  case 'en-EN':
    defaultMessages = English;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  default:
    defaultMessages = Spanish;
}

function App() {

  const [messages, setMessages] = React.useState(defaultMessages);

  const changeMessages = (lenguage) => {
  
    setMessages(lenguage ==='Spanish' ? Spanish: English );
    // console.log(messages);
  }

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages}>
        <BrowserRouter>
          <Header changeMessages={ changeMessages} ></Header>
          <Routes>

              <Route 
                path='/' 
                element={<Home></Home>}></Route>¡
              <Route 
                path='/users' 
                element={<React.Suspense 
                fallback={<p>Cargando...</p>}> <Users></Users> </React.Suspense>}></Route>
              <Route 
                path='/create-user' 
                element={<React.Suspense 
                fallback={<p>Cargando...</p>}> <CreateUser></CreateUser> </React.Suspense>}></Route>
              <Route 
                path="*" 
                element={<React.Suspense 
                fallback={<p>Cargando...</p>}> <NotFound></NotFound> </React.Suspense>}></Route>

            </Routes>
        </BrowserRouter>
      </IntlProvider>
    </div>
  );
}

export default App;
