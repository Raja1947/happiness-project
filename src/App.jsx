import './App.css'
import CategoryGrid from './components/Category/Category'
import Classes from './components/Classes/Classes'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Reason from './components/Reasons/Reason'
import Teaching from './components/Teaching/Teaching'
import Team from './components/Teams/Teams'
import Testimonials from './components/Testimonials/Testimonials'


function App() {


  return (
   <div className='h-auto'>
    <Header/>
    <Hero/>
    <Teaching/>
    <Classes/>
    <CategoryGrid/>
    <Reason/>
    <Testimonials/>
    <Team/>
   </div>
  )
}

export default App
