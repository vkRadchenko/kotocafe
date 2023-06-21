import { useState, useEffect } from 'react'
import breed from '../mockData/breed.json'
import httpService from 'services/http.servise'

const breedEndPoint = 'breed/'

const useMockData = () => {
  const statusConst = {
    idle: 'Not Started',
    pending: 'In Process',
    success: 'Ready',
    error: 'Error occured',
  }

  const [error, setError] = useState(null)
  const [status, setStatus] = useState(statusConst.idle)
  const [progress, setProgress] = useState(0)
  const [count, setCount] = useState(0)
  const summuryCount = breed.length

  const incremenCount = () => {
    setCount((prevState) => prevState + 1)
  }
  const updateProgress = () => {
    if (count !== 0 && status === statusConst.idle) {
      setStatus(statusConst.pending)
    }
    const newProgress = Math.floor((count / summuryCount) * 100)
    if (progress < newProgress) {
      setProgress(() => newProgress)
    }
    if (newProgress === 100) {
      setStatus(statusConst.success)
    }
  }
  useEffect(() => {
    updateProgress()
  }, [count])

  async function initialize() {
    try {
      for (const itemBreed of breed) {
        await httpService.put('breed/' + itemBreed._id, itemBreed)
        incremenCount()
      }
    } catch (error: any) {
      setError(error)
      setStatus(statusConst.error)
    }
  }
  return { error, initialize, progress, status }
}

export default useMockData
