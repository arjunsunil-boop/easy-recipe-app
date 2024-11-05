import logo from './logo.svg';
import './App.css';
import AddRecipes from './components/AddRecipes';
import ViewRecipes from './components/ViewRecipes';
import ViewRecipeSingle from './components/ViewRecipeSingle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLogin from './components/UserLogin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<ViewRecipes />} />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/view" element={<ViewRecipes />} />
          <Route path="/recipe/:id" element={<ViewRecipeSingle/>} />
          <Route path="/add" element={<AddRecipes />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
