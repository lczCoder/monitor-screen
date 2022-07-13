import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Redirect() {
  let navigate = useNavigate()
  useEffect(() => navigate('/index/home'))
  return null
}
