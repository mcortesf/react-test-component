import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  backdrop: {
    zIndex: 10,
    color: 'var(--white)',
    backgroundColor: 'var(--backdrop)',
  },
});

const Loading = () => {
  const styles = useStyles();
  return (
    <Backdrop className={styles.backdrop} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
export default Loading;
