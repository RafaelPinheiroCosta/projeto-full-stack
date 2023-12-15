
import React, { useState } from 'react';
import { TextField, Container, Typography } from '@mui/material';
import QRCode from 'qrcode.react';
import Barcode from 'react-barcode';

const BarCodeGenerator = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h4" gutterBottom>
        QR Code and Barcode Generator
      </Typography>
      <TextField
        label="Texto para QR Code e Código de Barras"
        variant="outlined"
        fullWidth
        margin="normal"
        value={inputText}
        onChange={handleInputChange}
      />
      {inputText && (
        <>
          <Container
            sx={{
              flexDirection: 'row',
              margin: 'auto',
              backgroundColor: '#f0f0f0',
              padding: '16px',
              borderRadius: '8px',
              minheight: '120vh',
              gap: '16px',
            }}>

            <QRCode value={inputText} renderAs="svg" style={{ width: '100%' }} />
            <Barcode value={inputText} />

          </Container>
        </>
      )}
    </Container>
  );
};

export default BarCodeGenerator;
