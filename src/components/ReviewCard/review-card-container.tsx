import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { Review } from '@interfaces/index';
import styles from './review-card-styles';
import { convertRatingToNumber } from '@utils/helpers';

const useStyles = makeStyles(styles);

interface Props {
    onClickDetails(): any,
    onClickText(): any,
    review: Review
}

const ReviewCardContainer = ({ onClickDetails, onClickText, review }: Props) => {
    const classes = useStyles();
    return (
        <Grid item xs={4} lg={4} xl={4}>
            <Paper className={classes.paper}>
                <Typography variant="h6">{review.review_title}</Typography>
                <Typography variant="subtitle2">{review.profile_name}</Typography>
                <Rating className={classes.rating} name="read-only" value={convertRatingToNumber(review.review_rating)} readOnly />
                <div className={classes.spacer} />
                <div className={classes.buttonContainer}>
                    <Button className={classes.button} variant="outlined" onClick={() => onClickText()}>Show review text</Button>
                    <Button endIcon={<ArrowForward />} className={classes.button} onClick={() => onClickDetails()} variant="outlined">Show review details</Button>
                </div>
            </Paper>
        </Grid>
    )
}

export default ReviewCardContainer;