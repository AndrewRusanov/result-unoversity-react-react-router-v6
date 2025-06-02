import { Category } from '@/pages/Category'
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
          <Route
            path='/characters'
            element={<Category category='characters' />}
          />
          <Route path='/characters/:id' element={<div>Персонаж с ID</div>} />
          <Route path='/episodes' element={<Category category='episodes' />} />
          <Route path='/episodes/:id' element={<div>Эпизод с ID</div>} />
          <Route
            path='/locations'
            element={<Category category='locations' />}
          />
          <Route path='/locations/:id' element={<div>Локация с ID</div>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
