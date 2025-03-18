import { useState } from 'react'
import Error from './components/Error'
import InputText from './components/InputText'
import InputLabel from './components/Label'
import LeftBg from './components/LeftBg'
import TextGradient from './components/TextGradient'
import './Global.css'
import Button from './components/Button'
import { calculateFlames } from './functions/CalculateFlames'
import { Modal } from './components/Modal'

function App() {
  const [yourName , setYourName] = useState('')
  const [yourCrushName , setYourCrushName] = useState('')
  const [error , setError] = useState('')
  const [results , setResults] = useState('')

const Flames = (e) =>{
  e.preventDefault()

  const flamesMessages = [
    <span key="1">Congratulations, you and {yourCrushName} are <TextGradient>Friends!</TextGradient> 🤝</span>,
    <span key="2">Congrats! You and {yourCrushName} are <TextGradient>Lovers</TextGradient> now! 💕</span>,
    <span key="3">So sweet! You and {yourCrushName} are <TextGradient>Affectionate!</TextGradient> 💖</span>,
    <span key="4">Congrats on your <TextGradient>Marriage</TextGradient> with {yourCrushName}! 💍</span>,
    <span key="5">Oh no! You and {yourCrushName} are <TextGradient>Enemies!</TextGradient> 😡</span>,
    <span key="6">You and {yourCrushName} are <TextGradient>Siblings!</TextGradient> 👯‍♂️</span>
];


setResults(flamesMessages[calculateFlames(yourName , yourCrushName , setError)])



}

const TryAgain = () =>{
  setResults(false)
  setYourName('')
  setYourCrushName('')
}

  return (
    <main className='container'>
      {results && <Modal Handle={TryAgain} text={results}></Modal>}
      <section className='section-1'>
          <LeftBg/>
      </section>
      <section className='section-2'>
        <div>
          <div className='first-div'>
            <TextGradient>Flames</TextGradient>
          </div>
          <div className='second-div'>
            <span>Find out your connection with your crush! Try the Flames test now!</span>
          </div>
          <form className='app-form'>
            <div>
              <InputLabel>Your Name :</InputLabel>
              <InputText placeholder='Enter your name' value={yourName} onChange={(e)=> setYourName(e.target.value)} />
            </div>
            <div>
              <InputLabel>Your Crush's Name :</InputLabel>
              <InputText placeholder="Enter your crush's name" value={yourCrushName} onChange={(e)=>setYourCrushName(e.target.value)} />
            </div>
            <div>
              <Error>{error}</Error>
            </div>
            <div>
              <Button Handle={Flames} text='Find out'></Button>
            </div>

          </form>
        </div>
      </section>


    </main>
  )
}

export default App
