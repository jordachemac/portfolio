import React from 'react'
import { Link } from "react-router-dom";

export default function Home ()
{
  const themes = {
    global: {
      fontFamily: 'Inria Sans',
      textAlign: 'center',
      backgroundColor: '#FFFFFF'
    },
    wrapper: {
      padding: '4em',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      color: 'black',
      textAlign: 'left',
      minWidth: '300px',
      gap: '4em'
    },
    padding: {
      gap: '12px',
      display: 'flex',
      flexDirection: 'column'
    },
    h1: {
      fontSize: '42px',
      fontWeight: 'normal',
      margin: '0',
      lineHeight: '69px'
    },
    h2: {
      fontSize: '30px',
      fontWeight: 'lighter',
      margin: '0'
    },
    h2mi: {
      display: 'block',
      fontWeight: 'bold'
    },
    h3: {
      fontSize: '23px',
      fontWeight: 'bold',
      margin: '0'
    },
    p: {
      fontSize: '18px',
      fontWeight: 'normal',
      margin: '0'
    },
    a: {
      fontSize: '18px',
      fontWeight: 'normal'
    },
    button: {
      height: '3.8em',
      borderRadius: '0.8em',
      padding: '0 1.2em',
      backgroundColor: '#252727',
      color: 'white',
      fontSize: '18px',
      fontWeight: 'lighter',
      fontFamily: 'Inria Sans',
      boxShadow: '0px 4px 8px 0px #0000001A',
      textDecoration: 'none',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }

  return (
    <div style={themes.global}>
      <div style={themes.wrapper}>
        <div style={themes.padding}>
          <header>
            <h1 style={themes.h1}>Jordache Mackenzie</h1>
          </header>
          <h2 style={themes.h2}>
            <span style={themes.h2mi} lang="mi">Kaihoahoa Wheako Whakamai</span>
            UX Designer
          </h2>
        </div>
        <div style={themes.padding}>
          <h3 style={themes.h3}>Kia ora! Welcome</h3>
          <p style={themes.p}>
            I'm a UX designer. I'm passionate about creating usable digital products. I have worked with incredibly talented people across different companies.
          </p>
        </div>
        <div style={themes.padding}>
          <Link to="work" style={themes.flex}>Explore my work</Link>
          <Link to="cv" style={themes.button}>Get in touch</Link>
        </div>
        <footer style={themes.padding} id='footer-section'>
          <a className="social-link" style={themes.a} href="https://www.linkedin.com/in/jordache-mackenzie/" target="_blank" rel="noopener noreferrer"> </a>
          <p className="small-text" style={themes.p}>Please bear with me. This site is under construction and may not always work perfectly!</p>
          <p style={themes.p}>&copy; 2022 Jordache Mackenzie</p>
          <script>

          </script>
        </footer>
      </div>
    </div>
  )
}