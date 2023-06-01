<div class="custom-item-container">
	<h2>Custom Items</h2>
	<div class="item-slot">
		<slot />
	</div>
</div>

<style>
	.custom-item-container {
		min-height: 100px;
		background-color: #f9f7e8;
		border-radius: 8px;
		padding: 20px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}

	.custom-item-container h2 {
		font-family: 'Montserrat', sans-serif;
		font-size: 24px;
		font-weight: bold;
		color: #444;
		margin-bottom: 10px;
		text-transform: uppercase;
		letter-spacing: 1px;
	}

	.item-slot {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20px;
	}
</style>
