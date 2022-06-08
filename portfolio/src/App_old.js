import logo from './logo.svg'
import linkedin from './linkedin.svg'
import './App.css'

function App ()
{
  return (
    <div className="App">
      <div className='App-wrapper'>
        <div className='standard-padding'>
          <header className="App-header">
            <h1>Jordache Mackenzie</h1>
          </header>
          <h2>
            <span className="h2-mi" lang="mi">Kaihoahoa Wheako Whakamai</span>
            UX Designer
          </h2>
        </div>
        <div className='standard-padding'>
          <h3>Kia ora! Welcome</h3>
          <p>
            I'm a UX designer. I'm passionate about creating usable digital products. I have worked with incredibly talented people across different companies.
          </p>
        </div>
        <div className='standard-padding'>
          <button>Explore my work</button>
          <button>Get in touch</button>
        </div>
        <footer className='standard-padding'id='footer-section'>
          <a className="social-link" href="https://www.linkedin.com/in/jordache-mackenzie/" target="_blank" rel="noopener noreferrer"> </a>
          <p className="small-text">Please bear with me. This site is under construction and may not always work perfectly!</p>
          <p>&copy; 2022 Jordache Mackenzie</p>
        </footer>
      </div>
    </div>
  )
}

export default App
