
# Project Summary

I’ve been working diligently on this capstone project and I’m excited to share the results. I faced some challenges when it came to sharing data across the third component, so I decided to use a context provider to facilitate the process and avoid prop drilling.

## Key Features

- **Navigation**: Used `react-router-dom`.
- **Scrolling**: To scroll to a specific section of the app, I used `react-scroll`.
- **Transition Animations**: Implemented using `react-transition-group`.

## Component Details

- **Reserve.js**: Used the Formik library for form validation. Since consuming external JSON wasn’t possible, I mocked available hours for the time input field. I thought it would be a good idea to store already reserved hours in the browser’s memory cache, so that when going through the reservation flow again, the previously selected hour would no longer be available. This effectively simulates several individuals reserving a table. ReserveTable.js includes unit tests to validate form input.

- **SelectTable.js**: Allows you to choose from available tables. Green tables are available, while red tables are occupied. When you click on an available table, it turns red and, using the context API, updates the time you chose from the previous step. The selected table is also stored in the browser’s cache, so the next time you go through the same flow, mimicking a user, the table would appear red since it was previously reserved and you won't be able to click on it again.

- **Summary.js**: We use the context API again to pass in the data from previous steps of the same cycle. If there’s an issue and you want to change reservation data, you can do so by returning to Reserve.js. If everything is functioning as expected, you proceed to the next component which displays a success message which has the button to bring you the main page.

- **Main.js, Nav.js, and Footer.js**: All follow a semantic structure. In Menu.js, you can download the Little Lemon Menu PDF (This Week’s Specials), which further simulates a real restaurant site.

> Note: The 'Add to Cart' feature is currently not available.

## Styling

All styles are written in CSS, and I’ve added media queries to ensure the page is responsive. All the necessary META tags are added to index.html in the public folder.

> Note: In case you want to reset the app to its initial state after iterating through the same flow several times, ensuring all available hours and tables are accessible, you would need to clear your web browser's cache.
