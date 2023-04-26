<p align="center">
  <a href="https://data-talks.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img width="300" src="public/data_talks.png" alt="Simplesign logo">
  </a>
</p>

## Challenge

We have just gotten a new customer and they need to be set up on Data Talks. The customer has sent an export of their ticketing system for single-ticket buyers. Your task is to create data mapping in accordance with the [Data Talks structure](https://www.datatalks.se/documentation/data-points/) and [Documentation ](https://www.datatalks.se/documentation/api-reference/)

and documentation. Attached, you will find the export in CSV.

What attributes should be considered as Profile, Events, and Inventory data points with their respective data types (string, integer, etc.)

- What unique key(s) do you suggest we apply to identify a supporter,
- What unique key(s) do you suggest we apply to identify a purchase
- What unique key(s) do you suggest we apply to identify a match
- If there are any columns you suggest to not import with a reasoning
- What kind of data cleaning practices you would recommend performing before ingesting the data, what potential data quality issues you spot in the sample data

## Project setup

```
# yarn
yarn

# npm
npm install

# pnpm
pnpm install
```

### Compiles and hot-reloads for development

```
# yarn
yarn dev

# npm
npm run dev

# pnpm
pnpm dev
```

### Compiles and minifies for production

```
# yarn
yarn build

# npm
npm run build

# pnpm
pnpm build
```

### Customize configuration

See [Configuration Reference](https://vitejs.dev/config/).
