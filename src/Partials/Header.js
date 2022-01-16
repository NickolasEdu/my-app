import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import HomeIcon from '@mui/icons-material/Home'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false)

  let navigate = useNavigate()

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleOnClick = () => {
    navigate('/')
    handleToggleMenu()
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => handleToggleMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={menuOpen} onClose={() => handleToggleMenu()}>
        <List>
        <ListItem button onClick={() => handleOnClick()}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Main - Home</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonAddIcon />
            </ListItemIcon>
            <ListItemText>Register</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}