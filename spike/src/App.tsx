import { useState } from 'react'
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  return(
    <div>
      {currentPage === 'login' ? (
        <LoginPage onLogin={() => setCurrentPage('dashboard')}/>
      ): (
        <Dashboard/>
      )}
    </div>
  )
}


export default App
