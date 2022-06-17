import React, { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'


function App() {
  const [test, updateTest] = ('')

  useEffect(() => {
    async function fetchFunction() {
      console.log('hi')
      await axios.get('http://localhost:8082/')
      .then(res => {
        console.log(res)
      })
    }
    fetchFunction()
  }, [])

  return (
    <div>hi</div>
  )
}

export default App;
