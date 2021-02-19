import ReviewDetails from '@components/ReviewDetails';
import { Review } from '@interfaces/index';
import { getAllReviews } from '@actions/reviews';

interface Props {
    review: Review
}

interface Params {
    query: {
        rid: string
    }
}

const SingleReviewContainer = ({ review }: Props) => {
    return <ReviewDetails review={review}/>
}

export const getServerSideProps = async ({ query }: Params) => {
    try {
        const reviews: Array<Review> = await getAllReviews();
        const review = reviews[query.rid];
        return {
            props: {
                review
            }
        }
    } catch (e) {
        return {
            redirect:  {
                destination: '/',
                permanent: false
            }
        }
    }
}


export default SingleReviewContainer;