import Typography from '@mui/material/Typography';
import {Box} from '@mui/material';
import BugReportIcon from '@mui/icons-material/BugReport';

function Logo() {
  return (
    <Box sx={{
      color: 'primary.mainLight',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <BugReportIcon color="inherit" />
      <Typography
        color="inherit"
        variant="h6"
        noWrap
        component="div"
        sx={{ ml: 1 }}
      >
        Rexberry
      </Typography>
    </Box>
  );
}

export default Logo;
