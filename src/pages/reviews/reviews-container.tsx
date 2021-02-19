import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ReviewCard from '@components/ReviewCard';
import ReviewPopup from '@components/ReviewPopup';
import { Review } from '@interfaces/index';
import { getAllReviews } from '@actions/reviews';
import { useRouter } from 'next/router';

const styles = createStyles({
    root: {
        flexGrow: 1,
        padding: 24
    }
})

const useStyles = makeStyles(styles)

interface Props{
    reviews: Array<Review>,
    errorMessage?: string
}

const ReviewsContainer = ({ reviews, errorMessage }: Props) => {

    const classes = useStyles();
    const router = useRouter();
    const [showPopup, setShowPopup] = useState(false);

    if (reviews === null) {
        return(
            <div>
                <Typography>Error Loading Page: {errorMessage}</Typography>
            </div>
        )
    }

    const [selectedReview, setSelectedReview] = useState<Review>(reviews[0]);

    return (
        <div className={classes.root}>
            <Grid data-cy="review-items" container spacing={3}>
                {reviews.map((item, index) => {
                    return (
                        <ReviewCard
                            key={index}
                            review={item}
                            onClickDetails={() => router.push(`/reviews/${index}`)}
                            onClickText={() => { setSelectedReview(item); setShowPopup(true)}}
                        />
                    )
                })}
            </Grid>
            <ReviewPopup
                open={showPopup}
                handleClose={() => setShowPopup(false)}
                review={selectedReview}
            />
        </div>
    )
}

export const getServerSideProps = async () => {
    try {
        const reviews: Array<Review> = await getAllReviews();
        return {
            props: {
                reviews
            }
        }
    } catch (e) {
        return {
            reviews: null,
            errorMessage: e.message
        }
    }
}

export default ReviewsContainer;