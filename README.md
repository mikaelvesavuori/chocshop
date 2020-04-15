# ChocShop: Structured data demo using Svelte and Figmagic

A demo for structured data which is Google Search and Google Assistant-friendly. Uses [Svelte](https://svelte.dev) as the framework, and most of the design, tokens, and boilerplate UI code is generated through [Figmagic](https://github.com/mikaelvesavuori/figmagic).

Inspired by [Enhance Your Search and Assistant Presence with Structured Data (Google I/O'19)](https://www.youtube.com/watch?v=GR1j2ADyGvA).

Tech used:

- [`Svelte 3`](https://svelte.dev)
- [`svelte-routing`](https://github.com/EmilTholin/svelte-routing)
- [`Rollup`](https://rollupjs.org/guide/en/)
- [`TypeScript`](https://www.typescriptlang.org)
- [`Jest`](https://jestjs.io)

I've experimentally used [Figmagic](https://github.com/mikaelvesavuori/figmagic) to export the bulk of the elements, and then wrangled them into Svelte format. This has given me a pretty good idea of changes that would need to be made to Figmagic in order to more fully support the Svelte way of working.

## Connected repositories

There's a range of repos that are connected to the overall ChocShop demo.

For the frontend, you would also need the backend repo to be deployed, or at the very least point to local data unless you want the app to crash.

The VUI apps are entirely elective.

- [ChocShop: Backend](https://github.com/mikaelvesavuori/chocshop-backend): The basic API backend to send back stock status and price
- [ChocShop: Alexa Skill](https://github.com/mikaelvesavuori/chocshop-alexa): VUI assistent which gives you a basic product overview, stock status and price information
- [ChocShop: Google Assistent](https://github.com/mikaelvesavuori/chocshop-assistent): VUI assistent which gives you a basic product overview, stock status and price information

## Installation

- Clone the repo with `git clone https://github.com/mikaelvesavuori/chocshop.git`
- Run `npm install` or `yarn install` to install dependencies

## Run and build

### Local dev server

Run `npm run serve` or `yarn serve`

#### BEWARE: Routing

I was too lazy and out-of-time to investigate fully, but I never really got routing to be at the level I've come to expect from something that's been around for as long as React Router.

Refreshing sub-routes is something that got painstaking when the URL was under a second-level directory, and I didn't get Netlify to work well, even with its standard SPA routing headers.

That's why you will see that I did the ugly `product-[NAME]` solution in the routes, so we can retain a single level of depth. This will at least make it work live on Netlify, but still doesn't solve anything on your own machine.

### Build static files

Run `npm run build` or `yarn build`

### Test

Run `npm test` or `yarn test`

Note that there is just a dummy function to be tested, and nothing real that's used
