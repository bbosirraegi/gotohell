import React from 'react'
import { useNavigate } from 'react-router-dom'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';


function Privacy() {
  navigator = useNavigate()

  const goBack = () =>{
    navigator(-1)
  }
  return (
    <div>
      <ArrowBackSharpIcon onclick={goBack}/>
      <h1>개인정보처리방침</h1>
      <p>어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 어쩌구 저쩌구 </p>
    </div>
  )
}

export default Privacy