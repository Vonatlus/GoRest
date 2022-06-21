import { FC } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Container,
  Button,
} from '@mui/material';

import LanguageIcon from '@mui/icons-material/Language';

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const usersNavigate = () => {
    navigate('/users');
  }

  const homeNavigate = () => {
    navigate('/');
  }

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LanguageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer'
              }}
              onClick={homeNavigate}
            >
              GoRest
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={usersNavigate}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Users
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
