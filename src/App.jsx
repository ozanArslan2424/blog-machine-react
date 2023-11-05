import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import DefaultPage from './pages/DefaultPage';
import MonthlyPage from './pages/MonthlyPage';


function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<DefaultPage />} />
          <Route path='/ayin-onerileri' element={<MonthlyPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
