<script>
  import { Router, Link, Route } from 'svelte-routing';
  import ProductList from './views/ProductList.svelte';
  import Product from './views/Product.svelte';
  import Faq from './views/Faq.svelte';

  import MenuBar from './components/MenuBar/MenuBar.svelte';

  export let url = '';
</script>

<style src="global.scss">

</style>

<Router {url}>
  <MenuBar />
  <div>
    <Route path="*" component={Product} />
    <Route path="faq" component={Faq} />
    <Route path="/">
      <ProductList />
    </Route>
  </div>
</Router>
