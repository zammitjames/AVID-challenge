**_ Create a ReactJS project that uses this API (https://www.fakerestapi.com/datasets/api/v1/iphone-11-amazon-reviews.json). _**

1.  Create a 3-column grid showing reviews fetched from API. Properties to display: 'review_rating', 'profile_name' and ‘review_title’. Add 2 buttons: “Show review text” and “Show review details”
2.  For each review, show the number of stars based on the ‘review_rating’ property. (Example: “3.0 out of 5 stars” -> show ★★★☆☆)
3.  When you click the “Show review text” button, display a popup that shows the ‘review_text’ property.
4.  When you click the “Show review details” button, navigate to a different screen to view the details of that review (example: 'https://yourapp.com/reviews/:reviewID)
5.  Host the app somewhere (e.g Heroku, Netlify, etc.)
6.  Create a GitHub repository and share the link

**_ Assumptions & Limitations _**

1. API can not be paginated.
2. API can not be queried.
3. The index will be used as a unique key for each review.
4. When loading a /:rid path, the data is fetched freshly.
5. The rating review text is assumed to be returned consistently in the same format.
6. Root path should be /reviews, so the index route is automatically redirected to /reviews.

**_ Folder & Code Structure _**

- .babelrc - module resolver config
- .eslintrc.json - lint config
- .prettierrc - prettier config
- .env.development - available when using yarn dev
- .env.production - available when using yarn start
- next.config.js - Redirect root path to /reviews
- src
  ---- actions
  ------- reviews.ts
  ---- components
  ------- ReviewCard
  ---------- index.ts
  ---------- review-card-container.tsx
  ---------- review-card-styles.tsx
  ------- ReviewDetails
  ----------- index.ts
  ----------- review-details-container.tsx
  ------- ReviewPopup
  ----------- index.ts
  ----------- review-popup-container.tsx
  ---- interfaces
  ------- index.ts
  ---- pages
  ------- \_app.tsx
  ------- \_document.tsx
  ------- reviews
  ---------- index.ts
  ---------- reviews-container.tsx
  ---------- [rid]
  -------------- index.ts
  -------------- single-review-container.tsx
  ---- theme
  -------- index.ts
  -------- theme-provider.tsx
  ---- utils
  -------- helpers.ts

**_ Frameworks in Use _**

- Next.JS
- ESLint
- Prettier
- Material UI (UI Framework)
- Axios (REST framework)
- NProgress (UI Progress Bar)
- Babel Module Resolver (Absolute Paths)
- Cypress (Testing)
