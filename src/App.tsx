import { Routes, Route } from 'react-router-dom'
import { Home, About, Profile, SignIn, SignUp } from './pages'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/sign-in" element={<SignIn/>} />
      <Route path="/sign-up" element={<SignUp/>} />
    </Routes>
  )
}

export default App
