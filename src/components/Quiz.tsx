import { useState } from 'react'
import { questions as AllQuestions } from '../data/questions'
import { motion, AnimatePresence } from 'framer-motion'

const Quiz = () => {
  const [showResult, setShowResult] = useState(false)

  const shuffleAndPickFive = (arr: typeof AllQuestions) => {
    const shuffled = arr.sort(() => Math.random() - 0.5)
    return shuffled.slice(0, 5)
  }

  const [quizQuestions, setQiuzQuestions] = useState(shuffleAndPickFive(AllQuestions))
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const currentQuestion = quizQuestions[currentQuestionIndex]
  const [score, setScore] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)



  const handleAnswer = (selectedOption: string) => {
    setSelectedAnswer(selectedOption)
    const isCorrect = selectedOption === currentQuestion.answer
    if (isCorrect) {
      setScore(prevScore => prevScore + 1)
    }
  }

  const handleNextQuestion = () => {
    if (!selectedAnswer) return // Prevent moving to the next question if no answer is selected
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1)
      setSelectedAnswer(null) // Reset selected answer for the next question
    } else {
      setShowResult(true)
    }
  }

  const handleRestartQuiz = () => {
    setQiuzQuestions(shuffleAndPickFive(AllQuestions))
    setCurrentQuestionIndex(0)
    setScore(0)
    setSelectedAnswer(null)
    setShowResult(false)
  }


  if (showResult) {
    return (
      <div className='h-screen bg-[#EBEAEB] flex justify-center items-center p-4'>
        <div className='bg-white max-w-lg w-full p-6 shadow-lg rounded-lg text-center'>
          <h1 className='text-2xl font-semibold text-[#001e4d] mb-6'>Quiz Completato</h1>
          <p className='text-lg mb-6'>Il Tuo Punteggio: <strong>{score}</strong> su 5</p>
          <button
            onClick={handleRestartQuiz}
            className='bg-green-600 px-4 py-2 text-white cursor-pointer hover:bg-green-700 rounded-md'>
            Ricomincia Quiz
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className='h-screen bg-[#EBEAEB] flex justify-center items-center p-4'>
      <div className='bg-white max-w-lg w-full p-6 shadow-lg rounded-lg'>
        <h1 className='text-2xl font-semibold text-[#001e4d] mb-6 text-center'>react-quiz-app</h1>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className='text-xl font-semibold mb-4'>{currentQuestion.question}</h2>
            <div className="grid gap-6 mb-6">
              {
                currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswer === option
                  return (
                    <button key={index}
                      disabled={!!selectedAnswer}
                      onClick={() => handleAnswer(option)}
                      className={`bg-gray-200 px-4 py-3 rounded-lg cursor-pointer text-xl hover:bg-blue-200 ${(isSelected && selectedAnswer === currentQuestion.answer) ? 'bg-green-300' : (isSelected && selectedAnswer !== currentQuestion.answer) ? 'bg-red-300' : ''}`}>
                      {option}
                    </button>
                  )
                })
              }
            </div>
            {selectedAnswer && (
              <div className={`text-lg font-semibold mb-6 ${selectedAnswer === currentQuestion.answer ? 'text-green-600' : 'text-red-600'}`}>
                {selectedAnswer === currentQuestion.answer ? 'Corretto!' : `Sbagliato! La risposta corretta è: ${currentQuestion.answer}`}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        <div className='flex flex-col justify-between items-center gap-6'>
          <button
            onClick={handleNextQuestion}
            className='bg-[#001e4d] text-white px-4 py-2 text-xl cursor-pointer rounded-sm'>
            Prossima
          </button>
          <div className='text-gray-600 text-sm text-center'>
            Domanda {currentQuestionIndex + 1} di {quizQuestions.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quiz