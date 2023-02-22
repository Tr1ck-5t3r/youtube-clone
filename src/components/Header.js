import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Avatar } from '@mui/material';
import { AlignVerticalCenter } from '@mui/icons-material';
import { width } from '@mui/system';
import SearchBar from './Searchbar';

function Header() {
  return (
    <div className='header'>
      <Link  to='/' style={{display:'flex', textDecoration:'none', alignItems:'center', width:'100%' }}>
      <div className='header__left'>
        <div className='menu__button'>
          {/* <i class="fa fa-bars menu__btn"></i> */}
          <MenuRoundedIcon sx={{ fontWeight: 'fontWeightLight' }} />
        </div>
        <div className='logo'>
          <img 
            className='logo__image'
            src={require('../logos/yt-logo-page.png')}
            alt='youtube logo'
          />
        </div>
      </div>
      <div className='header__center'>
        <SearchBar/>
      </div>
      <div className='header__right'>
        <div className='header__right__icons'>
          <VideoCallOutlinedIcon/>
        </div>
        <div className='header__right__icons'>
          <NotificationsOutlinedIcon/>
        </div>
        <div className='header__right__avatar'>
          <Avatar
          sx={{
            width: '35px',
            height: '35px',
          }}
          />
        </div>
      </div>
      </Link>
    </div>
      
  )
}

export default Header
