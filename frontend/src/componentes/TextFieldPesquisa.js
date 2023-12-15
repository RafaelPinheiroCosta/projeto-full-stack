import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const TextFieldPesquisa = ({ label, onChange, value, onSearch }) => {
    return (
      <TextField
        label={label}
        value={value}
        onChange={onChange}
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