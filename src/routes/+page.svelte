<script>
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

  export let data;

  const cardLayout = writable();
  $: cardLayout.set(data.cardLayout);
  setContext('cardLayout', cardLayout);

  const layoutCard = (layout) => {
    return layout.template.replace(`{{BODY}}`, layout.body);
  };
</script>

<svelte:head>
	<title>Anki Playground</title>
	<meta name="color-scheme" content="dark">
	<meta name="description" content="Anki playground" />
</svelte:head>

<section>
	  <iframe srcdoc={layoutCard($cardLayout)} id="preview-panel" title="Card preview"></iframe>
	  <textarea id="source-panel" bind:value={$cardLayout.body}></textarea>
</section>

<style>
  iframe#preview-panel {
    border: none;
    padding: 2%;
    height: 512px;
    width: 42%;
  }

  textarea#source-panel {
    border: none;
    margin: 2%;
    padding: 2%;
    box-shadow: inset 0 0 0 16px darkslategray;
    resize: none;
    box-sizing: border-box;
    height: 512px;
    width: 42%;
  }
</style>