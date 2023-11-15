import{Box, Container, Button, Grid, Paper, TextField} from '@mui/material'
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
    <Container maxWidth="sm">
     <Grid
      container
      height="100vh"
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      >
        <Grid 
         item
        >
          <h1>
            LOGIN
          </h1>
        </Grid>
        <Grid 
          item 
        >
          <form
           onSubmit={handleLogin}
          >
            <Grid container
               direction="column"
               spacing={2}
            >
            <Grid 
              item
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
          <Grid 
            item 
           >
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
          <Grid item>
            <Button
              type="submit"
            >
              LOGIN
            </Button>
          </Grid>
          </Grid>
            </form>
          </Grid>
      </Grid>
    </Container>
  )
}

export default App
