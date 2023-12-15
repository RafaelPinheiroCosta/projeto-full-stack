import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FirebaseObjetos from './serviços/firebase/FirebaseObjetos';
import AxiosObjetos from './serviços/axios/AxiosObjetos';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Implemente a lógica de pesquisa aqui com o valor em 'searchTerm'
    console.log(`Pesquisando por: ${searchTerm}`);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);

    if (element) {
      const offsetTop = element.offsetTop - 100;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      setDrawerOpen(false);
    }
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            height: '100px',
            zIndex: (theme) => theme.zIndex.drawer + 10000
          }}
        >
          <IconButton color="inherit" onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Seu App de Objetos
          </Typography>

          <TextField
            label="Pesquisar"
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <SearchIcon onClick={handleSearch} style={{ cursor: 'pointer' }} />
              ),
            }}
          />
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        variant="persistent"
        onClose={toggleDrawer}
      >
        <List
          sx={{
            width: '600px',
            flexShrink: 0
          }}
        >
          <ListItem button onClick={() => scrollToSection('secao1')}>
            <ListItemText primary="Seção 1" />
          </ListItem>
          <ListItem button onClick={() => scrollToSection('secao2')}>
            <ListItemText primary="Seção 2 " />
          </ListItem>
        </List>
      </Drawer>

      <div style={{ height: '100px' }} />  {/* desconta a altura da TopAppBAr */}

      <AxiosObjetos
        id="secao1"
        key="secao1"
      />

      <FirebaseObjetos
        id="secao2"
        key="secao2"
      />
    </div>
  );
}
export default App;
