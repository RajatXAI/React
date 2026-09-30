# Product Store

Product Store is a small shopping cart application built with React. It loads products from the Fake Store API and lets users add products to a cart, adjust quantities, or remove items.

## Features

- Browse products with their category, rating, price, and image.
- Add products to the cart and view an added-to-cart notification.
- Increase or decrease the quantity of cart items.
- Remove an item with the remove button or decrease its quantity to zero.
- View the cart and continue browsing products.

Cart data is managed with React Context and is kept in memory. It resets when the page is reloaded.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Built With

- React
- Vite
- Tailwind CSS
- Axios
- Sonner

## Getting Started

You need Node.js and npm installed on your computer.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

Install the project dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local address shown in the terminal. The product list is fetched from the Fake Store API, so an internet connection is required.

## Available Scripts

- `npm run dev` starts the development server.
- `npm run build` creates a production build in the `dist` directory.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint.

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
