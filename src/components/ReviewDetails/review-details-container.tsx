import { Paper, Typography, Button } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Review } from '@interfaces/index';
import { ArrowForward } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import { convertRatingToNumber } from '@utils/helpers';

const styles = createStyles({
    root: {
        padding: 24
    },
    paper: {
        padding: 24
    },
    rating: {
        marginTop: 12,
    },
    buttonContainer: {
        marginTop: 36
    }
})

const useStyles = makeStyles(styles);

interface Props {
    review: Review
}

const ReviewDetailsContainer = ({ review }: Props) => {
    const classes = useStyles();
    return (
       <div className={classes.root}>
           <Paper className={classes.paper}>
                <Typography variant="h6">{review.review_title}</Typography>
                <Typography variant="subtitle2">{review.review_text}</Typography>
                <Typography data-cy="profile-name" variant="subtitle2">{review.profile_name}</Typography>
                <Typography variant="subtitle2">{review.product_company}</Typography>
                <Rating className={classes.rating} name="read-only" value={convertRatingToNumber(review.review_rating)} readOnly />
                <div className={classes.buttonContainer}><Button endIcon={<ArrowForward />} variant="outlined" onClick={() => window.location.href=review.url}>Go To Product URL</Button></div>
            </Paper>
       </div>
    )
}

export default ReviewDetailsContainer;