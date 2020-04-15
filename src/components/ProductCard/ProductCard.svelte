<script>
  import { Link } from 'svelte-routing';
  import Image from '../../elements/Image/Image.svelte';
  import ProductName from '../../elements/ProductName/ProductName.svelte';
  import ProductDescription from '../../elements/ProductDescription/ProductDescription.svelte';
  import ReadMore from '../../elements/ReadMore/ReadMore.svelte';
  import Button from '../../elements/Button/Button.svelte';

  export let id = '';
  export let name = '';
  export let description = '';
  export let image = '';
  export let inStock = true;
  export let price = 0.0;

  function handleClick() {
    alert("Added item to cart!\n\nThis is just fake, so don't worry about it :)");
  }
</script>

<style lang="scss">
  .ProductCard {
    box-sizing: border-box;
    display: flex;
    flex: 1 1 25%;
    min-width: 300px;
    flex-direction: column;
    padding: 1rem;
  }

  .Heading {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }

  .Description {
    font-size: 0.8rem;
  }

  .Read {
    margin: 0 0 var(--spacing-small) 0;
  }
</style>

<div class="ProductCard">
  <Image src={image} alt={name} />

  <ProductName class="Heading">{name}</ProductName>
  <ProductDescription class="Desc">{description}</ProductDescription>

  <Link to={`/product-${id}`}>
    <ReadMore class="Read">Read more...</ReadMore>
  </Link>

  <Button className={inStock ? '' : 'Error'} onClick={inStock ? handleClick : null}>
    {inStock ? `Add to cart ($${price})` : 'Out of stock'}
  </Button>
</div>
