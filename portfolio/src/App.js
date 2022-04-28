import logo from './logo.svg'
import './App.css'

function App ()
{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Jordache Mackenzie</h1>
        <h2>
          <span lang="mi">Kaihoahoa Wheako Whakamai</span>
          UX Designer
        </h2>
        <h3>Kia ora! Welcome</h3>
        <p>
          I'm a UX designer. I'm passionate about creating usable digital products. I have worked with incredibly talented people across different companies.
        </p>
        <button>See what I've worked on</button>
        <button>Get in touch</button>

        <a className="social-link" href="https://www.linkedin.com/jordachemackenzie" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <p className="small-text">Please bear with me. This site is under construction and may not always work perfectly!</p>
      </header>
    </div>
  )
}

export default App
