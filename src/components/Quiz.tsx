import { useState } from 'react'
import { questions as AllQuestions } from '../data/questions'

const Quiz = () => {
  const [showResult, setShowResult] = useState(false)
  const shuffleAndPickFive = (arr: typeof AllQuestions) => {

  }
  if (showResult) {
    return (
      <div className='h-screen bg-[#001e4d] flex justify-center items-center p-4'>
        <div className='bg-white max-w-lg w-full p-6 shadow-lg rounded-lg text-center'>
          <h1 className='text-2xl font-semibold text-[#001e4d] mb-6'>Quiz Completato</h1>
          <p className='text-lg mb-6'>Il Tuo Punteggio: <strong>2</strong> su 5</p>
          <button className='bg-green-600 px-4 py-2 text-white cursor-pointer hover:bg-green-700 rounded-md'>Ricomincia Quiz</button>
        </div>
      </div>
    )
  }
  return (
    <div className='h-screen bg-[#001e4d] flex justify-center items-center p-4'>
      <div className='bg-white max-w-lg w-full p-6 shadow-lg rounded-lg'>
        <h1 className='text-2xl font-semibold text-[#001e4d] mb-6'>Quiz</h1>
        <h2 className='text-xl font-semibold mb-4'>Qual è la capitale d'Italia?</h2>
        <div className="grid gap-6 mb-6">
          <button className='text-left bg-gray-200 px-4 py-3 rounded-lg cursor-pointer text-xl hover:bg-blue-200'>Roma</button>
          <button className='text-left bg-gray-200 px-4 py-3 rounded-lg cursor-pointer text-xl hover:bg-blue-200'>Milano</button>
          <button className='text-left bg-gray-200 px-4 py-3 rounded-lg cursor-pointer text-xl hover:bg-blue-200'>Firenze</button>
          <button className='text-left bg-gray-200 px-4 py-3 rounded-lg cursor-pointer text-xl hover:bg-blue-200'>Venezia</button>
        </div>
        <div className='flex flex-col justify-between items-center gap-6'>
          <button className='bg-[#001e4d] text-white px-4 py-2 text-xl cursor-pointer rounded-sm'>Prossima</button>
          <div className='text-gray-600 text-sm text-center'>Domanda 1 di 5</div>
        </div>
      </div>
    </div>
  )
}

export default Quiz