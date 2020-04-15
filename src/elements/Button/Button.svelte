<script>
  export let className = '';
  export let onClick = null;
</script>

<style lang="scss">
  button {
    width: 100%;
    box-sizing: border-box;
    height: var(--spacing-big);
    border: 0;
    border-radius: var(--radii-soft);
    color: var(--colors-white);
    font-size: var(--fontsizes-paragraph);
    font-family: var(--fontfamilies-bold);
    font-weight: var(--fontweights-bold);
    line-height: var(--lineheights-xs);
    letter-spacing: var(--letterspacings-wide);
    text-align: center;
    text-transform: uppercase;
    background-color: var(--colors-blue1);
    cursor: pointer;

    &.Warning {
      background-color: var(--colors-orange);
    }

    &.Error {
      background-color: var(--colors-red);
      cursor: not-allowed;
    }
  }
</style>

<button class={className} on:click={onClick}>
  <slot />
</button>
