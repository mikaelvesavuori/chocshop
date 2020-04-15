<script lang="ts">
  import { onMount } from 'svelte';

  import { products } from '../data/products.js';
  import ProductCard from '../components/ProductCard/ProductCard.svelte';

  // Setup structured data in JSON-LD format
  import { list } from '../data/structured-data/list.js';
  let jsonld: Object = list;
  jsonld = JSON.stringify(jsonld);
  let jsonldScript = `<script type="application/ld+json">${jsonld + '<'}/script>`;

  // Get stock status
  let stockStatus: Object = {};
  let stockUpdated: boolean = false;

  onMount(async () => {
    const BASE_URL = 'https://chocshop.mikaelvesavuori.workers.dev';
    const res = await fetch(`${BASE_URL}`).then(async data => await data.json());
    res.forEach(item => (stockStatus[item.id] = item));
    stockUpdated = true;
  });
</script>

<style lang="scss">
  .Products {
    display: flex;
    flex-wrap: wrap;
  }
</style>

<svelte:head>
  <meta name="description" content="ChocShop - A demo chocolate shop for modern ecommerce" />
  <meta property="og:url" content="https://chocshop.netlify.com/" />
  <meta property="og:title" content="ChocShop" />
  <meta property="og:description" content="ChocShop - A demo chocolate shop for modern ecommerce" />
  <meta property="og:image" content="https://chocshop.netlify.com/img/chocshop-banner.png" />

  {@html jsonldScript}
</svelte:head>

{#if stockUpdated}
  <main class="Wrapper">
    <div class="Products">
      {#each products as product, i}
        <ProductCard
          name={product.name}
          description={product.description}
          id={product.id}
          image={product.image}
          inStock={stockStatus[product.id].inStock} />
      {/each}
    </div>
  </main>
{:else}
  <div>Getting stock status...</div>
{/if}
