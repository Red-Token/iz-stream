<script lang="ts">
	import type {Snippet} from 'svelte';

	let {
		size = 18,
		disabled = false,
		onClick,
		className,
		children
	} = $props<{
		size?: number;
		disabled?: boolean;
		onClick: () => void;
		className?: string;
		children?: Snippet;
	}>();
</script>

<button class={className} {disabled} onclick={onClick}>
	{@render children()}
</button>

<!-- <script lang="ts">
	import type {HTMLButtonAttributes} from 'svelte/elements';
	let isLeftHovered = $state(false);

	type Props = HTMLButtonAttributes & {
		left?: Snippet<[boolean]>;
		right?: Snippet;
		children: Snippet<[boolean]>;
		size?: number;
		shadow?: boolean;
		onClick?: (event: MouseEvent) => {};
		disabled?: boolean;
	};
	let {left, right, size, shadow = false, onClick, disabled = false, children, ...props}: Props = $props();
</script>

<button class:shadow {...props}>
	<div
		role="presentation"
		onmouseenter={() => {
			isLeftHovered = true;
		}}
		onmouseleave={() => {
			isLeftHovered = false;
		}}
		onclick={onClick}
	></div>
</button> -->

<style>
	.btn {
		align-items: center;
		gap: 0.75rem;
		padding: 0.75rem 1.5rem;
		border-radius: var(--border-radius-12);
		cursor: pointer;
		border: none;
		font-weight: 500;
		transition:
			transform 0.2s ease,
			background 0.3s ease;

		&:active {
			transform: scale(0.95);
		}

		&.generate.animating .key-icon {
			animation: successSpin 0.8s ease-out;
		}
		&.generate:active .key-icon {
			transform: scale(0.95);
		}
		&.generate {
			border: solid 2px var(--border-color);
			display: inline-flex;
			background: transparent;
			color: var(--fg-1);
		}

		&.primary {
			display: flexbox;
			align-items: center;
			width: 100%;
			border: solid 2px var(--border-color);
			background: transparent;
			color: white;
			padding: 1rem 2rem;
		}
		&:hover {
			background: var(--button-main);
			filter: brightness(1.1);
			box-shadow: 0 4px 8px var(--accent-transparent);
			/* box-shadow: var(--shadow-hover); */
		}
	}

	@keyframes successSpin {
		0% {
			transform: rotate(0) scale(1);
		}
		30% {
			transform: rotate(60deg) scale(1.1);
		}
		70% {
			transform: rotate(-15deg) scale(0.95);
		}
		100% {
			transform: rotate(0) scale(1);
		}
	}
	.follow-btn {
		display: flex;
		gap: 0.75rem;
		padding: 0.75rem 1.5rem;
		background: var(--button-main);
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1rem;
	}

	.bg-transparent {
		background: transparent;
	}
	.show-movies-btn {
		/* TODO fix the margin of the view button, reducing the margin between key and about. */
		display: inline-flex;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		border: 1px solid var(--border-color);
		color: var(--fg-1);
		border-radius: 8px;
		font-weight: 500;
		cursor: pointer;
		/* margin-left: auto; */
		flex-shrink: 0;
		margin: 20px 0 0 auto;
		order: 1;
		transition:
			transform 0.2s ease,
			background 0.3s ease;
	}

	.submit-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
		width: 100%;
		padding: 1rem 2rem;
		background: var(--button-main);
		color: white;
		border: none;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 500;
		cursor: pointer;
		transition: transform 0.2s ease background 0.3s ease;

		&:hover {
			transform: translateY(-1px);
			filter: brightness(1.1);
			box-shadow: 0 4px 8px var(--accent-transparent);
		}
	}
	.submit-btn:disabled {
		background-color: var(--bg-2);
		color: #999;
		cursor: not-allowed;
	}

	.submit-btn:disabled:hover {
		background-color: var(--bg-2);
	}
	.submit-icon {
		width: 24px;
		height: 24px;
		fill: currentColor;
	}
	.view-btn {
		position: absolute;
		top: 50%;
		margin-left: 0;
		display: flex;
		right: 1.5rem;
		background: var(--bg-2);
		color: var(--fg-2);
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1.25rem;
		background: transparent;
		border: 2px solid var(--border-color);
		border-radius: 6px;
		transform: translateY(-50%);
		transition: all 0.3s ease;
		margin-left: auto;
		&:hover {
			background: var(--accent-color);
			color: white;
		}
	}
	@media (max-width: 768px) {
		.follow-btn {
			margin-top: 1rem;
			width: 100%;
			justify-content: center;
		}

		.submit-btn {
			padding: 0.875rem;
			font-size: 0.95rem;
		}

		.view-btn {
			top: auto;
			bottom: 1rem;
			right: 1rem;
			transform: none;
		}
	}
</style>
