# Catopedia

A web application built with React, Vite, and Material UI, providing information on various cat breeds. Users can browse through a list of cat breeds and view detailed information about each breed. The app also includes sorting, filtering, and pagination features to improve navigation and user experience.

## Tech Stack

- **React**: Frontend JavaScript library for building user interfaces.
- **Vite**: A fast development build tool.
- **Material UI**: A popular React UI framework for building responsive and accessible components.
- **TypeScript**: Strongly typed superset of JavaScript.
- **Axios**: HTTP client for making API requests.
- **React Router**: For navigation and routing within the app.

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── CatCard.tsx
│   │   ├── SearchBar.tsx
│
│   ├── pages/
│   │   ├── CatDetailsPage.tsx
│   │   ├── CatListPage.tsx
│
│   ├── hooks/
│   │   ├── useFetchCats.ts
│
│   └── App.tsx
│
├── index.html

```

## Features

- **Cat List Page**: Browse through different cat breeds.
- **Cat Details Page**: View detailed information about a specific cat breed.
- **Search Functionality**: Search for a cat breed using the search bar.
- **Search Functionality**: Search for a cat breed using the search bar.
- **Sorting**: Sort the list of cat breeds alphabetically by name, both A to Z and Z to A.
- **Filtering**: Filter the list of cats based on country of origin.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Hisam-94/catopedia.git
   ```

2. Navigate into the project directory:

   ```bash
   cd catopedia
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Project

To start the development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build
```

To lint the code:

```bash
npm run lint
```

## Environment Variables

Create a `.env` file in the root of the project with the following variables:

```bash
VITE_API_URL=https://api.thecatapi.com/v1/breeds
VITE_API_KEY=<your_api_key>
```

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Lints the project code using ESLint.
