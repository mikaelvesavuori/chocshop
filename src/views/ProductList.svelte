<script>
  import { onMount } from 'svelte';

  import { products } from '../data/products';
  import ProductCard from '../components/ProductCard/ProductCard.svelte';

  // Setup structured data in JSON-LD format
  import { list } from '../data/structured-data/list.js';
  let jsonld = list;
  jsonld = JSON.stringify(jsonld);
  let jsonldScript = `<script type="application/ld+json">${jsonld + '<'}/script>`;

  // Get stock status
  let stockStatus = {};
  let stockUpdated = false;

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
  <meta name="description" content="ChocShop - Structured data demo" />
  <meta property="og:url" content="https://chocshop.netlify.app/" />
  <meta property="og:title" content="ChocShop" />
  <meta property="og:description" content="ChocShop - Structured data demo" />
  <meta property="og:image" content="https://chocshop.netlify.app/img/chocshop-banner.png" />

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
          inStock={stockStatus[product.id].inStock}
          price={stockStatus[product.id].price} />
      {/each}
    </div>
  </main>
{:else}
  <div>Getting stock status...</div>
{/if}
