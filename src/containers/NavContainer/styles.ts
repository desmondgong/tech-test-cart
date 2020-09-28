import { Theme } from '@material-ui/core';
import { BaseCSSProperties } from '@material-ui/styles';

export interface StyleProps {
  root: BaseCSSProperties;
}

const styles = (theme: Theme): StyleProps => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    '& a': {
      color: '#fff',
    },
  },
});
export default styles;
