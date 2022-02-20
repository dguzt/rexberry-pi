import {Box} from '@mui/material';
import styles from './slider.module.css';

function Slider() {
  return (
    <Box className={styles.container}>
      <Box className={styles.item}>1</Box>
      <Box className={styles.item}>2</Box>
      <Box className={styles.item}>3</Box>
      <Box className={styles.item}>4</Box>
      <Box className={styles.item}>5</Box>
    </Box>
  );
}

export default Slider;
