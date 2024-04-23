# Crypto Market Palace

A [React](https://react.dev/) project, using [Vite](https://vitejs.dev/) and [TailwindCSS](https://tailwindcss.com/)

The project revolves around a user-friendly interface for exploring and tracking cryptocurrency values. Although it is not a fully functional trading platform, it utilizes APIs to retrieve real-time market data for various cryptocurrencies. With a sleek and responsive design, Cryptomarketpalace offers a glimpse into what a simple cryptocurrency trading website could look like.

![cryptomp](https://github.com/carlosmths/cryptomarketpalace/assets/7840752/481a30c9-2a5c-4ac5-acca-4c7e55d4d421)

## Pages

The application gets information about the different currencies from [CoinCap Api 2.0](https://docs.coincap.io/), which is a free API that doesn't require any token.

The data from the top cryptocurrencies and the form on the Exchange page are populated from the mentioned API.

![cryptomp-top-cryptos](https://github.com/carlosmths/cryptomarketpalace/assets/7840752/7848619f-6b48-4cbe-97e6-9b768d93d11d)

This is a simple form where you can convert between fiat and cryptocurrencies, simulating a purchase. Note that full functionality has not been implemented yet.

![cryptomp-exchange](https://github.com/carlosmths/cryptomarketpalace/assets/7840752/8f2bdd89-b5be-4dc0-b082-a7da7f3da0e1)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
