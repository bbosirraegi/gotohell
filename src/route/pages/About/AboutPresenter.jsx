import React from 'react'
import AboutHeadline from './components/AboutHeadline'

const AboutPresenter = ({info, handleInfo}) => {
  
  return (
    <div><AboutHeadline />{JSON.stringify(info)}</div>
  )
}

export default AboutPresenter