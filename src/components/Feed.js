import React from 'react'
import {useState, useEffect} from 'react'
import {Box,Stack,Typography,Button,TextField,Grid} from '@mui/material'
import './Feed.css'
import Sidebar from './Sidebar'
import Video from './Video'
function Feed() {
  return (
    <Stack sx={{flexDirection:{sx:'column', md:'row'}}}>
      <Box sx={{height: {sx:"auto", md:"92vh"}, width: {sx:"15vw"}, px: {sx:0, md:2}}}>
        <Sidebar/>
      </Box>
      <Box>
        <Video/>
      </Box>
    </Stack>
  )
}

export default Feed
