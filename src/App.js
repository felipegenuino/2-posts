import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    try {
      setLoading(false)
      const response = await fetch(url);
      const tours = await response.json()
      setTours(tours)
      console.log(tours)
    } catch (error) {
      setLoading(true);
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    return (
      <main>
        <Tours tours={tours} />
      </main>
    )
  }
}

export default App
