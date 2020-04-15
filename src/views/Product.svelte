<script>
  import { onMount } from 'svelte';
  import { Link } from 'svelte-routing';

  import * as productData from '../data/structured-data/products.js';
  import { products } from '../data/products.js';

  import Image from '../elements/Image/Image.svelte';
  import H1 from '../elements/H1/H1.svelte';
  import Microcopy from '../elements/Microcopy/Microcopy.svelte';
  import Paragraph from '../elements/Paragraph/Paragraph.svelte';
  import Button from '../elements/Button/Button.svelte';

  // Setup structured data in JSON-LD format
  const CURRENT_PRODUCT = window.location.href.split('/product-')[1];

  const PRODUCT_STRUCTURED_DATA = productData[CURRENT_PRODUCT];
  if (!PRODUCT_STRUCTURED_DATA) throw new Error('Could not match product with data!');

  let jsonld = PRODUCT_STRUCTURED_DATA;
  jsonld = JSON.stringify(jsonld);
  let jsonldScript = `<script type="application/ld+json">${jsonld + '<'}/script>`;

  // Setup product data
  const PRODUCT = products.filter(product => product.id === CURRENT_PRODUCT)[0];
  if (!PRODUCT) throw new Error('Could not find product!');

  // Get stock status
  let inStock = false;
  let stockUpdated = false;
  let price = 0.0;

  onMount(async () => {
    const BASE_URL = 'https://chocshop.mikaelvesavuori.workers.dev';
    const DATA = await fetch(`${BASE_URL}/?item=${CURRENT_PRODUCT}`).then(
      async data => await data.json()
    );
    inStock = DATA.inStock;
    price = DATA.price;
    stockUpdated = true;
  });

  function handleClick() {
    alert("Added item to cart!\n\nThis is just fake, so don't worry about it :)");
  }
</script>

<style lang="scss">
  .Product {
    width: 100%;
  }

  @media all and (max-width: 767px) {
    .Product-Inner {
      padding: 0 var(--spacing-small);
    }
  }
</style>

<svelte:head>
  <title>ChocShop — {PRODUCT.name}</title>

  <meta name="description" content="ChocShop - {PRODUCT.name}" />
  <meta property="og:url" content="https://chocshop.netlify.app/product-{CURRENT_PRODUCT}" />
  <meta property="og:title" content="ChocShop" />
  <meta property="og:description" content="ChocShop - {PRODUCT.name}" />
  <meta property="og:image" content="https://chocshop.netlify.app/img/1000px/{PRODUCT.image}" />

  {@html jsonldScript}
</svelte:head>

{#if stockUpdated}
  <main class="Wrapper-Tight">
    <Paragraph>
      <Link to="/">Go back to product list</Link>
    </Paragraph>

    <div class="Product">
      <Image src={PRODUCT.image} alt={PRODUCT.name} />
      <div class="Product-Inner">
        <Microcopy>
          Image by {PRODUCT.imageCredit} on
          <a href="https://www.unsplash.com" target="_blank">Unsplash</a>
        </Microcopy>
        <H1>{PRODUCT.name}</H1>
        <Paragraph>{PRODUCT.description}</Paragraph>
        <Button className={inStock ? '' : 'Error'} onClick={inStock ? handleClick : null}>
          {inStock ? `Add to cart ($${price})` : 'Out of stock'}
        </Button>
      </div>
    </div>
  </main>
{:else}
  <div>Getting stock status...</div>
{/if}
