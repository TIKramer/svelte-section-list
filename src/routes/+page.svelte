<script lang="ts">
	import { goto } from '$app/navigation';

	let handleClick = (route: string) => {
		goto(route);
	};
</script>

<div class="container">
	<h1 class="title">svelte-section-list</h1>
	<p>
		Headless Svelte package that provides drag-and-drop functionality for managing items and
		sections.
	</p>
	<p>Headless means you have 100% control over the styles!</p>
	<button class="button" on:click={() => handleClick('/base-example')}>Basic example</button>
	<button class="button" on:click={() => handleClick('/custom-example')}>Custom example</button>
	<button class="button" on:click={() => handleClick('/reverse-example')}>Reverse example</button>

	<div class="footer">
		<p>
			For more information, visit the package's <a
				href="https://github.com/TIKramer/svelte-section-list/blob/main/README.md">readme</a
			>
		</p>
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 32px;
		box-sizing: border-box;
	}

	.title {
		font-size: 24px;
		font-weight: bold;
		color: #333;
		margin-bottom: 24px;
	}

	.button {
		display: inline-block;
		padding: 12px 24px;
		background-color: #007bff;
		color: #fff;
		font-size: 16px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		margin-bottom: 16px;
		transition: background-color 0.3s ease;
	}

	.button:hover {
		background-color: #0056b3;
	}

	.footer {
		margin-top: 32px;
		text-align: center;
		color: #888;
	}
</style>
