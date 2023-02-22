import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper } from '@mui/material'
import './Header.css'
function Searchbar() {
  return (
    <paper component="form"
    width='100%'
    onSubmit = {() => {}}
    >
    <div className='search__bar'>
      <input className="header__input" type='text' placeholder='Search' />
        <div className='search__button'>
          <i class="fa fa-search"></i>
        </div>
    </div>
    </paper>
  )
}

export default Searchbar
