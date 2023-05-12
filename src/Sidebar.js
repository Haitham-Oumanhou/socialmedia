import React from 'react';
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import { Diversity2TwoTone, EmojiFlags, People, Star } from '@mui/icons-material';
import { useStateValue } from './StateProvider';


function Sidebar() {

  const [{user}, dispatched] = useStateValue();

  return (
    <div className='sidebar'>
        <SidebarRow src={user.photoURL}
        title = {user.displayName}></SidebarRow>

        <SidebarRow Icon={People} title='Friends'></SidebarRow>
        <SidebarRow Icon={Diversity2TwoTone} title='Groups' ></SidebarRow>
        <SidebarRow Icon={EmojiFlags} title='Pages'></SidebarRow>
        <SidebarRow Icon={Star} title ='Favoris'></SidebarRow>
        
    </div>
  )
}

export default Sidebar;