<script>
  import { Link } from 'svelte-routing';

  import MenuItem from '../../elements/MenuItem/MenuItem.svelte';
</script>

<style lang="scss">
  div.MenuBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
  }

  .Menu-Logo {
    position: fixed;
    top: 0;
    left: 0;

    img {
      width: var(--spacing-large);

      @media all and (max-width: 767px) {
        width: var(--spacing-big);
      }
    }
  }

  .Menu-Items {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 1.5rem;

    @media all and (max-width: 767px) {
      margin-top: var(--spacing-small);
    }
  }
</style>

<div class="Menu-Logo">
  <img src="/img/chocshop-square-small.png" alt="ChocShop logotype" />
</div>
<div class="MenuBar">
  <nav class="Menu-Items">
    <MenuItem>
      <Link to="/">Products</Link>
    </MenuItem>
    <MenuItem>
      <Link to="/faq">FAQ</Link>
    </MenuItem>
  </nav>
</div>
