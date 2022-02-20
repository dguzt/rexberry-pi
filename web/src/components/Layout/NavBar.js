import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Logo from 'components/Logo';
import UserAvatar from './UserAvatar';
import Options from './Options';

function NavBar() {
  return (
    <AppBar position="static" sx={{ background: 'secondary.main' }}>
      <Container maxWidth="xl" sx={{ color: 'secondary.dark' }}>
        <Toolbar disableGutters sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Logo />
          <Options />
          <UserAvatar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
