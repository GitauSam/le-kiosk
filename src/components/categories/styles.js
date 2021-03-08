import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    category: {
        position: 'fixed',
        width: '100%',
        maxWidth: 160,
        backgroundColor: theme.palette.background.paper,
        padding: '4px',
    },
}));