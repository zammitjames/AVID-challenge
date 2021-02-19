/**
 * 
 * @param textRating - ex: "1.0 out of 5 stars"
 * Assumption: Expected value can always be found between character index 0 and 2
 * Assumption: Expected value has a minimum of 0 and a maximum of 5
 * Assumption: Expected value will remain consist to the above format
 * @returns the number equivalent to the text with a range of 0:5
 */

export const convertRatingToNumber = (textRating: String): number => {
    return Number(textRating.substring(0,3))
}