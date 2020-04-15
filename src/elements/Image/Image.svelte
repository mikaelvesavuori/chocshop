<script lang="ts">
  export let src: string = '';
  export let alt: string = '';
</script>

<style lang="scss">
  picture img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 400px;
  }
</style>

<picture>
  <source srcset={`/img/1400px/${src}`} media="(min-width: 1200px)" />
  <source srcset={`/img/1000px/${src}`} media="(min-width: 800px)" />
  <source srcset={`/img/700px/${src}`} />
  <img src={`/img/1000px/${src}`} {alt} />
</picture>
