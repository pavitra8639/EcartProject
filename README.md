# Ecart Web Application
## Project Overview
Ecart is a responsive e-commerce web application built using React JS and Firebase. It allows users to brows products, view details, and manage their cart efficiently with persistent storage.
---
## Features
- Product listing(Men,Women,Jewllery,Electronics)
- View product details
- Add to Cart functionality
- Dynamic Cart count update
- cart data stored using Local storage
- API integration to fetch Product data
- User Authentication(Login/Signup using Firebase)
- responsive UI for better user experience.
---
## Technologies Used:
- Frontend: HTML,CSS,JavaScript,React JS.
- State Management: useState,useEffect,Context API.
- API handling: Axios.
- Storage: Local Storage.
- Backend/Database: Firebase, Firestore
---
## How it Works:
- Products are fetched from an API using Axios inside useEffect.
- Data is displayed dynamically on the UI.
- When user clicks Add to Cart:
    - product is stored in Context API state.
    - saved in Local Storage for persistence.
- On Page refresh:
    - cart data is retrieved from Local storage.
    - cart count remains consistent.
- Firebase I used for:
    - User Authentication(Login/Signup)
    - Database storage (Firestore)
---
## Challeges Faced:
- Cart data lost after page refresh
       -To solved this using Local Storage.
- Managing global state across components
       -To solved using Context API.
- Backend integration complexity 
       -To solved using Firebase for easy database & Auth.
---
## What I Learned:
- React Hooks(useState,useEffect)
- Context API for state management.
- API integration using Axios.
- Backend integration using Firebase.
- Debugging real-world issues.
---
## Screenshots
## Home Page
  - home.png  
## Products
   - products.png
## Cart Page
- cart.png
## AddToCart page
- addtocart.png
   
