import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Manufacture from './components/Manufacture/Manufacture'
import DataState from './contextstates/DataState'
import Dashboard from './Dashboard'

function App() {

  return (
    <div>
      <DataState>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/admin/manufacture' element={<Manufacture />} />
          <Route path='/admin/batches' element={<Manufacture />} />
          <Route path='/admin/esps' element={<Manufacture />} />
          <Route path='/admin/pics' element={<Manufacture />} />
        </Routes>
      </DataState>
    </div>
  )
}

export default App
