import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import pages from './pages';

function Options() {
  return (
    <Box sx={{ display: 'flex' }}>
      {pages.map(({title, to}) => (
        <Button
          key={title}
          sx={{ color: 'white', display: 'block' }}
          href={to}
        >
          {title}
        </Button>
      ))}
    </Box>
  );
}

export default Options;
