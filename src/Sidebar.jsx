import './Sidebar.css';

import { Button, Icon, IconButton } from '@mui/material';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import DuoIcon from '@mui/icons-material/Duo';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/Inbox';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NoteIcon from '@mui/icons-material/Note';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import React from 'react';
import SidebarOption from './SidebarOption';
import StarIcon from '@mui/icons-material/Star';
import { openSendMessage } from './features/mailSlice';
import { useDispatch } from 'react-redux';

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <Button
        className='sidebar__compose'
        startIcon={<AddIcon fontSize='large' />}
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>

      <SidebarOption
        Icon={InboxIcon}
        title='Inbox'
        number={54}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title='Starred' number={54} />
      <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={54} />
      <SidebarOption Icon={LabelImportantIcon} title='Sent' number={54} />
      <SidebarOption Icon={NoteIcon} title='Drafts' number={54} />
      <SidebarOption Icon={ExpandMoreIcon} title='More' number={54} />

      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
