import axios, { AxiosResponse } from 'axios';
import { Review } from '@interfaces/index';

export const getAllReviews = () => {
    return new Promise<Review[]>(async (resolve, reject) => {
        try {
            const response: AxiosResponse = await axios.get(process.env.API_URL);
            const reviews: Array<Review> = response.data.data;
            resolve(reviews)
        } catch (e){
            reject(e)
        }
    });
}