import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Review } from '@interfaces/index';

interface Props {
    open: boolean,
    handleClose(): any,
    review: Review
}

const ReviewPopupContainer = ({ open, handleClose, review }: Props) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{review.review_title}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {review.review_text}
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose} color="primary" autoFocus>
                Ok
            </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ReviewPopupContainer;