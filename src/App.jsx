import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

import Header from './components/Header'
import ProjectInfo from './components/ProjectInfo'
import DriverList from './components/DriverList'
import Footer from './components/Footer'

import Container from 'react-bootstrap/Container'

function App() {
  return (
    <div className="App">
      <Header/>
      <Container>
        <ProjectInfo/>
        <DriverList/>
      </Container>
      <Footer/>
    </div>
  )
}

export default App