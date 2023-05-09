
import Image from './assets/img1.jpg'
import Imag from './assets/img2.jpg'
import Ima from './assets/img3.jpg'
import Test from './texts.jsx'
import './App.css'

function App() {


  return (
    <>
    
    <Test 
    number="1"
    head="Reviving Retro PCs"
    para=" What happens when old pcs are given modern upgrade"
    Image={Image}
    links="https://www.google.com/"
   
    />
      <Test 
    number="2"
    head="Reviving Retro PCs"
    para=" What happens when old pcs are given modern upgrade"
    Image={Imag}
    links="https://www.twitter.com/"
    />
      <Test 
    number="3"
    head="Reviving Retro PCs"
    para=" What happens when old pcs are given modern upgrade"
    Image={Ima}
    links="https://www.youtube.com/"
    />
    </>
  )
}

export default App
