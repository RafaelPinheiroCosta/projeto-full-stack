import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  IconButton,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import FirebaseObjetos from './serviços/firebase/FirebaseObjetos';
import GavetaLateralFixa from './componentes/GavetaLateral';
// import AxiosObjetos from './serviços/axios/AxiosObjetos';

function App() {

  setDrawerOpen(open);


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
    <GavetaLateralFixa />

    {/* <Drawer
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
      </Drawer> */}

    <div style={{ height: '100px' }} />  {/* desconta a altura da TopAppBAr */}
    {/* 
      <AxiosObjetos
        id="secao1"
        key="secao1"
      /> */}

    <FirebaseObjetos
      id="secao1"
      key="secao1"
    />

  </div>


);
}export default App;
