import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import '../../css/main.css'


const MainLayout = () => {
  return (
    <div class="mainlayout">
      <div class="mainlayout-navi">
        <Header />
      </div>
      <div class="mainlayout-main">
        <Outlet />
      </div>
      <div class="mainlayout-sub">
        <p>SUB</p>
      </div>
    </div>
  )
}

export default MainLayout