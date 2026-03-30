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
  -  <img width="1105" height="7138" alt="home" src="https://github.com/user-attachments/assets/b15df903-1c1b-49eb-96cd-df7c3af6a585" />
## AddToCart page
- <img width="1893" height="898" alt="addtocart" src="https://github.com/user-attachments/assets/f6823e8b-5a97-4eec-8979-04f33625564b" />
## Cart Page
- <img width="1902" height="848" alt="cart" src="https://github.com/user-attachments/assets/51318665-832c-4616-a0c1-fb3f9ce17e52" />
## wishlist page
 - <img width="1899" height="655" alt="wishlist" src="https://github.com/user-attachments/assets/365cf9b5-c4f7-4bc3-b0a4-cf9e5f174e23" />

