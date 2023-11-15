import{Box, Button, Grid, Paper, TextField} from '@mui/material'
import './App.css'
import { useState } from 'react';



function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box 
    display="flex" 
    alignItems="center" 
    height="100vh">
      <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
        spacing={2}
      >
        {/* <Paper elevation={3}> */}
          <form
          onSubmit={handleLogin}
          >
            <Grid item xs={12}
            >
              <TextField 
                required
                fullWidth
                id="email"
                label="Adres email"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Hasło"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
              >
                LOGIN
              </Button>
            </Grid>
          </form>
        {/* </Paper> */}
      </Grid>

    </Box>
  )
}

export default App
