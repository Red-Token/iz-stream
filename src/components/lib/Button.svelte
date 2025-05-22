<script lang="ts">
	import type {Snippet} from 'svelte';
	import type {HTMLButtonAttributes} from 'svelte/elements';

	type Props = HTMLButtonAttributes & {
		size?: number;
		disabled?: boolean;
		shadow?: boolean;
		onClick?: (event: MouseEvent) => {} | void;
		className?: string;
		children: Snippet;
	};
	let {disabled = false, onClick, children, ...props}: Props = $props();
</script>

<button {disabled} onclick={onClick} {...props}>
	{@render children()}
</button>

<style>
	.btn {
		display: flex;
		align-items: center;
		cursor: pointer;
		/* order: 1; */
		justify-content: center;
		border-radius: var(--border-radius-12);
		font-weight: 500;

		transition:
			transform 0.2s ease,
			background 0.3s ease;
	}

	.btn-outlined {
		border: solid 2px var(--border-color);
		background: var(--bg-2);
		color: var(--fg-1);
	}

	.btn-filled {
		background: var(--shadow-hover);

		color: var(--fg-1);
		border: solid 1px var(--border-color);
	}

	.btn-full-width {
		width: 100%;
	}

	.btn-padding-small {
		padding: 0.5rem 1rem;
	}

	.btn-padding-medium {
		padding: 0.75rem 1.5rem;
	}

	.btn-padding-large {
		padding: 1rem 2rem;
	}

	.btn-gap-small {
		gap: 0.5rem;
	}

	.btn-gap-medium {
		gap: 0.75rem;
	}

	.btn-color-white {
		color: var(--fg-1);
	}

	.btn-color-fg2 {
		color: var(--fg-2);
	}

	.btn:hover {
		background: var(--button-main);
		filter: brightness(1.1);
		box-shadow: 0 4px 8px var(--shadow-hover);
	}
	.btn:focus {
		outline: 2px solid var(--button-main);
		outline-offset: 2px;
	}

	.btn-bg-3:hover {
		background: var(--bg-3);
		/* box-shadow: 0 4px 8px var(--bg-2); */
		transform-box: border-box;
		border-color: var(--text-secondary);
	}
	.btn:active {
		transform: scale(0.95);
	}

	.btn:disabled {
		background-color: var(--bg-2);
		color: #999;
		cursor: not-allowed;
	}

	.btn:disabled:hover {
		background-color: var(--bg-2);
		box-shadow: 0 4px 8px var(--bg-2);
	}

	.btn-animating .key-icon {
		animation: successSpin 0.8s ease-out;
	}

	.btn-show {
		margin: 20px 0 0 auto;
	}

	.btn-animating:active .key-icon {
		transform: scale(0.95);
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
</style>
