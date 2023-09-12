import { Route, Routes } from 'react-router-dom'
import Books from './components/Books'
import AddBook from './components/AddBook'
import EditBook from './components/EditBook'
import Header from './components/Header'
const App = () => {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/editbook/:id' element={<EditBook/>}/>
      <Route path='/addbook' element={<AddBook/>}/>
      <Route path='/' element={<Books/>}/>
    </Routes>
    </div>
  )
}

export default App