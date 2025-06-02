import { Navbar } from '@/widgets'
import { Home } from '@pages/Home'
import { NotFound } from '@pages/NotFound'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <main>
        <Routes>
          {/* TODO: добавить роуты */}
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<div>Персонажи</div>} />
          <Route path='/characters/:id' element={<div>Персонаж с ID</div>} />
          <Route path='/episodes' element={<div>Эпизоды</div>} />
          <Route path='/episodes/:id' element={<div>Эпизод с ID</div>} />
          <Route path='/locations' element={<div>Локации</div>} />
          <Route path='/locations/:id' element={<div>Локация с ID</div>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
