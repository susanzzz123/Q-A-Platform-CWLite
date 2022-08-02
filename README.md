# Campus Wire Lite - Q&A Platform

**Basic function**: This app allows users to view all the questions and their respective answers posted. Once logged in, a user can post new questions, answer questions, update answers, and delete their own questions in a dynamic manner. All answers posted update automatically.

**Tools**: 
- Backend: all requests are handled from the frontend via axios requests, which then post requests to specified backend routes written in ExpressJS. Information such as a user's username and password as well as the question contents are stored using MongoDB Atlas. Cookie-Session middleware is also incorporated to allow authenticated user to stay logged in for 24 hours.
- Frontend: experimented with tailwindcss and pass requests 

*referred to the upenn cis197 course website for guidance on setting up the project*
