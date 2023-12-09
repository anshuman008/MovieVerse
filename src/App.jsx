import { CssBaseline } from "@mui/material"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Demo from "./components/Demo"
import { Actors, MovieInformation, Movies, Profile, NavBar } from "./components"
import useStyles from './components/styles'

function App() {

  const claasses = useStyles();
  return (
    <Router>
      <div className={claasses.root}>
        <CssBaseline />
        <NavBar />
        <main className={claasses.content}>
          <div className={claasses.toolbar}>
            <Routes>
              <Route path="/movie/:id" Component={MovieInformation} />
              <Route path="/actors/:id" Component={Actors} />
              <Route path="/" Component={Movies} />
              <Route path="profile/:id" Component={Profile} />
            </Routes>
          </div>
        </main>

      </div>
    </Router>
  )
}

export default App
