import React, { useState } from 'react'
import data from './data'
import Question from './Question'
import SingleQuestion from './Question'
import newtest from './Question'

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <div className='container'>
        <h3 className='title'>Questions And Answers About Login</h3>
        <section className='info'>
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  )
}

export default App
