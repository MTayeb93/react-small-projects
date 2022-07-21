import React from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'
function App() {
  const { loading, data, setPage, page } = useFetch()

  const handleNextPage = (page) => {
    setPage(page + 1)
  }
  const handleNPrevPage = (page) => {
    setPage(page - 1)
  }

  console.log(page)

  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'Loading...' : 'Pagination'} </h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower} />
          })}
        </div>

        {!loading && (
          <div className='btn-container'>
            <button className='btn' onClick={() => handleNPrevPage(page)}>
              Previous
            </button>
            <button className='btn' onClick={() => handleNextPage(page)}>
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App
