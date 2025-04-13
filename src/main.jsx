import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import Questions from './components/Questions.jsx'
import Result from './components/Result.jsx'
import { ScoreProvider } from './context/ScoreContext.jsx'
import { UserAnswerProvider } from './context/UserAnswerContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserAnswerProvider>
    <ScoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </ BrowserRouter>
    </ScoreProvider>
  </UserAnswerProvider>
)
