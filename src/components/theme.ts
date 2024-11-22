import { createTheme } from '@mui/material/styles';

const commonTypography = {
  h1: {
    fontSize: '3.5rem',
    fontWeight: 800,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 600,
    lineHeight: 1.4,
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 500,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 300,
    lineHeight: 1.7,
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
  },
  subtitle1: {
    fontSize: '1rem',
    fontWeight: 500,
    lineHeight: 1.75,
  },
  subtitle2: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.57,
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 700,
    lineHeight: 1.75,
    textTransform: 'none' as const,
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 2.66,
    textTransform: 'uppercase' as const,
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2E7D32', // Green primary
    },
    secondary: {
      main: '#ED6C02', // Orange secondary
    },
    background: {
      default: 'linear-gradient(135deg, rgba(232, 245, 233, 0.95) 0%, rgba(255, 243, 224, 0.95) 100%)',
      paper: 'rgba(255, 255, 255, 0.65)',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#424242',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.65)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
      },
    },
  },
  typography: commonTypography,
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00C853', // Bright green primary
    },
    secondary: {
      main: '#FF9100', // Bright orange secondary
    },
    background: {
      default: 'linear-gradient(135deg, rgba(0, 0, 0, 0.97) 0%, rgba(0, 31, 10, 0.95) 100%)',
      paper: 'rgba(18, 18, 18, 0.75)',
    },
    text: {
      primary: '#ffffff', // Set primary text color to white
      secondary: '#ffffff', // Set secondary text color to white
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(18, 18, 18, 0.75)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          color: '#ffffff',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
  },
  typography: commonTypography,
});