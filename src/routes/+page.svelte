<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';
</script>

<svelte:head>
	<meta charset="utf-8">
	<meta name="color-scheme" content="dark">
	<title>Anki Playground</title>
	<meta name="description" content="Anki playground" />
</svelte:head>

<section>
	  <iframe src="./card-preview.html" id="preview-panel" title="Card preview"></iframe>
	  <textarea id="source-panel"></textarea>
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