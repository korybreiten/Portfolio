import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import Content from '../layouts/Content'
import Footer from '../layouts/Footer'

import '../styles/App.css'

function App() {
  return (
    <Router>
      <div id='App'>
        <Navbar />
        <Content />
        <Footer />
      </div>
    </Router>
  )
}

export default App
