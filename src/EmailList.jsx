import './EmailList.css';

import { Checkbox, IconButton } from '@mui/material';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmailRow from './EmailRow';
import InboxIcon from '@mui/icons-material/Inbox';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PeopleIcon from '@mui/icons-material/People';
import React from 'react';
import RedoIcon from '@mui/icons-material/Redo';
import Section from './Section';
import SettingsIcon from '@mui/icons-material/Settings';
import { db } from './firebase';

function EmailList() {
  const q = query(collection(db, 'emails'), orderBy('timestamp', 'desc'));
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    onSnapshot(q, (snapshot) =>
      setEmails(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  // useEffect(() => {
  //   db.collection('emails')
  //     .orderBy('timeStamp', 'desc')
  //     .onSnapshot((snapshot) =>
  //       setEmails(
  //         snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
  //       )
  //     );
  // }, []);

  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emailList__settingsRight'>
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className='emailList__sections'>
        <Section Icon={InboxIcon} title='Primary' color='red' selected />
        <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
      </div>
      <div className='emailList__list'>
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toGMTString()}
          />
        ))}

      </div>
    </div>
  );
}

export default EmailList;
