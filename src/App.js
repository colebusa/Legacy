import logo from './star.png';
import './App.css';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';


const useStyles = makeStyles ({
  button1: {
    background: 'linear-gradient(80deg, #d4af37, #000)',
    border: 0,
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 30,
    fontFamily: 'sans-serif',
    color: 'white',
    padding: '10px 65px'
  },
  button2: {
    background: 'linear-gradient(80deg, #d4af37, #000)',
    border: 0,
    marginTop: 10,
    marginBottom: 50,
    borderRadius: 30,
    fontFamily: 'sans-serif',
    color: 'white',
    padding: '10px 60px'
  }
})

function Button1Style() {
  const classes = useStyles();
  return <Button className ={classes.button1}>Log In</Button>
}

function Button2Style() {
  const classes = useStyles();
  return <Button className ={classes.button2}>Sign Up</Button>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1" marginBottom ='20px'>
          Legacy
        </Typography>
        <img src={logo} className='App-logo' alt="logo" />
        <a 
        className="App-login"
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer">
          <Button1Style /> 
        </a>

        <a 
        className="App-signup"
        href="https://www.google.com"
        target="_blank"
        rel="noopener noreferrer"
        >
          <Button2Style />
        </a>
          
        
      </header>
    </div>
  );
}

export default App;
