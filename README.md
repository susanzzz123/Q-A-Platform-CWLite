# Campus Wire Lite - Q&A Platform

**Basic function**: This app allows users to view all the questions and their respective answers posted. Once logged in, a user can post new questions, answer questions, update answers, and delete their own questions in a dynamic manner. All answers posted update automatically.

**Tools**: 
- Backend: all requests are handled from the frontend via axios requests, which then post requests to specified backend routes written in ExpressJS. Information such as users' information (username and password) as well as the question contents (question text, author, answer) are stored using MongoDB Atlas. The Cookie-Session middleware is also incorporated to allow authenticated user to stay logged in for 24 hours.
- Frontend: with react, I built components and stored information retrieved from authenticated axios request calls in states. To make different routes in the frontend, I used the react router and have three routes for home page, sign up page, and log in page. The home page is rendered differently depennding on whether a user logged in or not. Components are styled with tailwindcss, which allowed me to have some flexibility and customization in the design of the pages.

*referred to the upenn cis197 course website for guidance on setting up the project*
