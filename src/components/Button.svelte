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

<button class={className} class:{disabled} onclick={onClick}>
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

	.show-movies-btn {
		/* TODO fix the margin of the view button, reducing the margin between key and about. */
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.75rem 1.5rem;
		border: 1px solid var(--border-color);
		background: transparent;
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
		display: flex; /* Important for icon alignment */
		align-items: center;
		justify-content: center; /* To center content if text is short */
		gap: 0.75rem; /* Space between text and icon */
		width: 100%;
		padding: 1rem 2rem;
		background: var(--accent-color); /* primary in Button.svelte uses bg-accent */
		color: white; /* primary in Button.svelte uses text-white */
		border: none;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 500;
		cursor: pointer;
		transition: transform 0.2s ease background 0.3s ease;

		&:hover {
			transform: translateY(-1px);
			background: var(--accent-color); /* Button.svelte uses var(--accent-hover) */
		}

		&:disabled {
			color: #999;
			cursor: not-allowed;
		}

		&:disabled:hover {
			background-color: var(--bg-2);
		}
	}
	.submit-icon {
		width: 24px;
		height: 24px;
		fill: currentColor;
	}

	/* Ensure ring-accent-focus and other focus rings are defined (e.g. focus:ring-accent) */
</style>
