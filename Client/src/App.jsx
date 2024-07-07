import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import {ToDOPage} from './pages/ToDOPage'
import {ToDOForm} from './pages/ToDOForm'
import {Navigation} from './components/Navigation'
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
    <div className='container mx-auto'>
    <Navigation />
    <Routes>
      <Route path="/" element={<Navigate to ="/ToDO"/>} />
      <Route path="/ToDO" element={<ToDOPage />} />
      <Route path="/ToDO-create" element={<ToDOForm />} />
      <Route path="/ToDO/:id" element={<ToDOForm />} />
    </Routes>
    <Toaster/>
    </div>
    </BrowserRouter>
  );
}

export default App;
