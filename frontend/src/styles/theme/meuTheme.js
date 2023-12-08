import{ createTheme} from '@mui/material/styles'

const theme = createTheme({
    palette:{
        primary:{
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1565c0'
        },
        secondary:{
            main: '#f50057',
            light: '#ff4081',
            dark: '#c51162'
        },
        error:{
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f'
        },
        warning:{
            main: '#ff9800',
            light: '#ffb74d',
            dark: '#f57c00'
        },
        info:{
            main: '#2196f3',
            light: '#64b5f6',
            dark: '#1565c0'
        },
        success:{
            main: '#4caf50',
            light: '#81c784',
            dark: '#388e3c'
        },
        text:{
            primary: 'rgba(0, 0, 0, 0.87)',
            secondary:  'rgba(0, 0, 0, 0.54)',
            disabled: 'rgba(0, 0, 0, 0.38)',
            hint: 'rgba(0, 0, 0, 0.38)',
        },
        background:{
            default:  '#fafafa',
            paper: '#fff',
        },

    },
    typography:{
        fontFamily: 'Arial, sans-serif'
    }
})
export default theme

