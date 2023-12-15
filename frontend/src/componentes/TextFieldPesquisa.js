import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const TextFieldPesquisa = ({ label, onChange, value, onSearch, onBlur}) => {

  const handleBlur = (event) => {
    console.log('onBlur function:', onBlur); 
    // Executar a função onBlur passada como parâmetro
    onBlur(event);

    // Limpar o valor do campo de texto
    event.target.value = '';
  };

    return (
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon onClick={onSearch} style={{ cursor: 'pointer' }} />
            </InputAdornment>
          ),
        }}
      />
    );
  };
  
export default TextFieldPesquisa;