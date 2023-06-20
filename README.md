# POKE_AUTH_APP

## DESCRIPTION
This is an application built using NextJS and with the help of Firebase authentication and Firstore Database. It allows users to create an account and view a list of pokemons on the screen.

## TOOLS/FRAMEWORK USED
### Frontend
The frontend is primarly built using NextJS 13.

### Backend
The backend of the app is built using Firebase.

### Externa API
The API used to fetch pokemons is [PokeAPI](https://pokeapi.co/)

## HOW IT WORKS
The landing page is a SIGN UP page, which prompts user to sign in before continuing. After signing in, user is presented with a list of Pokemons which are fetched using static site generation feature of NextJS. There is SAVE button below the list of pokemons that allows users save the data in their account in the firebase database. Every user has seperate list of saved pokemons.
There is Logout button which allows user to logout.

The project is hosted ### [here](https://poke-auth-app-fiq3.vercel.app/).

## LOCAL DEVELOPMENT
- Clone the repository in the your local PC / LAPTOP.
- Run the following commands in the terminal
  ```bash
  npm install
  npm run dev
  ```
This should start a local development server.


