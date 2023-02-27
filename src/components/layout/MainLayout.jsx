import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import BestTopic from '../BestTopic'
import '../../css/mainlayout.css'
import Privacy from '../BestTopic/Copyright/Privacy'


const MainLayout = () => {
  return (
    <div className="mainlayout">
      <div className="mainlayout-navi">
        <Header />
      </div>
      <div className="mainlayout-main">
        <Outlet />
      </div>
      <div className="mainlayout-sub">
        <BestTopic />
      </div>
    </div>
  )
}

export default MainLayout