import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import {ToDOPage} from './pages/ToDOPage'
import {ToDOForm} from './pages/ToDOForm'
import {Navigation} from './components/Navigation'
import {Toaster} from 'react-hot-toast'

import { ToDOIdsPage } from './pages/ToDOIdsPage';
import { ToDOIdTitlesPage } from './pages/ToDOIdTitlesPage';
import { ToDOUnresolvedPage } from './pages/ToDOUnresolvedPage';
import { ToDOResolvedPage } from './pages/ToDOResolvedPage';

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
      <Route path="/ToDO-ids" element={<ToDOIdsPage />} />
      <Route path="/ToDO-id-titles" element={<ToDOIdTitlesPage />} />
      <Route path="/ToDO-unresolved" element={<ToDOUnresolvedPage />} />
      <Route path="/ToDO-resolved" element={<ToDOResolvedPage />} />
    </Routes>
    <Toaster/>
    </div>
    </BrowserRouter>
  );
}

export default App;
