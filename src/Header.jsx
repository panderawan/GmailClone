import './Header.css';

import { Avatar, IconButton } from '@mui/material';
import { logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import AppsIcon from '@mui/icons-material/Apps';
import { ArrowDropDown } from '@mui/icons-material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logUserOut = () => {
    signOut(auth)
      .then(() => dispatch(logout()))
      .catch((e) => alert(e.message));
  };
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png'
          alt=''
        />
      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input type='text' placeholder='search mail' />
        <ArrowDropDown className='header__inputCaret' />
      </div>
      <div className='header__right'>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar onClick={logUserOut} src={user?.photoURL} />
      </div>
    </div>
  );
}

export default Header;
