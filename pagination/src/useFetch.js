import { useState, useEffect } from 'react'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(8)
  const [data, setData] = useState([])

  const url = `https://api.github.com/users/john-smilga/followers?per_page=${itemsPerPage}&page=${page}`

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()

    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [page])

  return { loading, data, setPage, page }
}
