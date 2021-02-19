import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => {
    return createStyles({
        paper: {
            display: 'flex',
            flexDirection: 'column',
            texAlign: 'left',
            padding: 16,
            minHeight: 220
        },
        rating: {
            marginTop: 8
        },
        spacer: {
            height: 'auto',
            flexGrow: 1
        },
        buttonContainer: {
            display: 'flex',
            marginTop: 24
        },
        button: {
            margin: 'auto'
        },
    })
}

export default styles;