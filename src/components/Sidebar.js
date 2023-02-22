import React from 'react'
import './Sidebar.css'
import HomeOutlineIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

function Sidebar() {
  return (
    <div className='Sidebar'>
      <div className='sidebar__parts'>
        <div className='sidebar__component'>
          <div className='sidebar__icons'>
            <HomeOutlineIcon
            sx={{
              width:'35px'
            }}
            />
          </div>
          <h4 className='sidebar__headings'>Home</h4>
        </div>
        <div className='sidebar__component'>
          <div className='sidebar__icons'>
            <img 
            className='shorts__icon'
            src={require('../logos/shorts-icon.png')}
            alt="shorts icon"/>
          </div>
          <h4 className='sidebar__headings'>Shorts</h4>
        </div>
        <div className='sidebar__component'>
          <div className='sidebar__icons'>
            <SubscriptionsOutlinedIcon
              sx={{
              ml:'3px',
              mr:'3px'
              }}
            />
          </div>
          <h4 className='sidebar__headings'>Subscription</h4>
        </div>
      </div>

      <div className='hr'></div>
      <div className='sidebar__parts'>
        <div className='sidebar__component'>
          <div className='sidebar__icons'>
            <VideoLibraryOutlinedIcon
            sx={{
              width:'35px'
            }}
            />
          </div>
          <h4 className='sidebar__headings'>Library</h4>
        </div>
        <div className='sidebar__component'>
          <div className='sidebar__icons'>
            <HistoryOutlinedIcon
            sx={{
              width:'35px'
            }}
            />
          </div>
          <h4 className='sidebar__headings'>History</h4>
        </div>
        <div className='sidebar__component'>
          <div className='sidebar__icons'>
            <WatchLaterOutlinedIcon
            sx={{
              width:'35px'
            }}
            />
          </div>
          <h4 className='sidebar__headings'>Watch Later</h4>
        </div>
        <div className='sidebar__component'>
          <div className='sidebar__icons'>
            <ThumbUpOutlinedIcon
            sx={{
              width:'35px'
            }}
            />
          </div>
          <h4 className='sidebar__headings'>Liked Videos</h4>
        </div>
        <div className="hr"></div>
        <div className='sidebar__parts'>
          <div className='sidebar__component'>
            <h5>Subscriptions</h5>
          </div>
        </div>
      </div>
      <div className="hr"></div>
        <div className='sidebar__parts'>
          <div className='sidebar__component'>
            <h5 >Settings</h5>
          </div>
        </div>
    </div>
  )
}

export default Sidebar
