import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { login, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import EmailList from './EmailList';
import Header from './Header';
import Login from './Login';
import Mail from './Mail';
import React from 'react';
import SendMail from './SendMail';
import Sidebar from './Sidebar';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useEffect } from 'react';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? dispatch(
        login
          ({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL
          })) : ''
    })
  }, [])

  return (
    <BrowserRouter>
      {!user ? (
        <Login />
      ) : (
        <div className='app'>
          <Header />
          <div className='app__body'>
            <Sidebar />

            <Routes>
              <Route path='/mail' element={<Mail />} />
              <Route path='/' element={<EmailList />} />
            </Routes>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
