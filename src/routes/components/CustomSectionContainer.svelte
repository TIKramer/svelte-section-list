<div class="custom-section-container">
	<h2 class="custom-section-title">Custom Sections</h2>
	<slot />
</div>

<style>
	.custom-section-container {
		background-color: #f0f3f5;
		padding: 20px;
		border-radius: 8px;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
		text-align: center;
	}

	.custom-section-title {
		font-family: 'Roboto', sans-serif;
		font-size: 32px;
		color: #333;
		margin-bottom: 20px;
		position: relative;
		transform-style: preserve-3d;
		animation: titleAnimation 2s infinite;
	}

	@keyframes titleAnimation {
		0% {
			transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0);
		}
		50% {
			transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg) translateZ(-20px);
		}
		100% {
			transform: rotateX(720deg) rotateY(720deg) rotateZ(720deg) translateZ(0);
		}
	}
</style>
