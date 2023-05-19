import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import './App.css'

const useStyles = makeStyles((theme) => ({
  // Remove the inline styles
}))

function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={`${classes.menuButton} menuButton`}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={`${classes.title} title`}>
            My Awesome App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className="content">
        <Typography variant="h4" gutterBottom>
          Welcome to My Awesome App!
        </Typography>
        <Typography variant="body1" gutterBottom>
          This is a more complex and visually appealing interface created using React and
          Material-UI.
        </Typography>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
      </div>
    </div>
  )
}

export default App
