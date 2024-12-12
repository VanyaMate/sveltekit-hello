<script lang="ts">
    import { ButtonStyleType } from '@/components/shared/buttons/Button/Button.types';


    export let styleType: ButtonStyleType = ButtonStyleType.DEFAULT;
    export let href: string               = '';
</script>

<style>
    button, a {
        padding         : var(--offset-small);
        font-size       : var(--font-size-m);
        outline         : none;
        border-radius   : var(--offset-small);
        cursor          : pointer;
        transition      : var(--transition-fast);
        text-decoration : none;
        text-align      : center;

        &.default {
            border     : 1px solid rgba(var(--primary-color));
            background : rgba(var(--bg-second));
            color      : rgba(var(--text-main-color));

            &:hover {
                background : rgba(var(--bg-main), .8);
            }
        }

        &.primary {
            border     : 1px solid rgba(var(--primary-color));
            background : rgba(var(--primary-color));
            color      : rgba(var(--text-main-color));

            &:hover {
                background : rgba(var(--primary-color), .8);
            }
        }

        &.ghost {
            border     : 1px solid rgba(var(--bg-main));
            background : rgba(var(--bg-main));
            color      : rgba(var(--text-second-color));

            &:hover {
                background : rgba(var(--bg-second), .8);
            }
        }
    }
</style>

{#if (href !== '')}
    <a
            href={href}
            class:default={styleType === ButtonStyleType.DEFAULT}
            class:primary={styleType === ButtonStyleType.PRIMARY}
            class:ghost={styleType === ButtonStyleType.GHOST}
    >
        <slot/>
    </a>
{:else}
    <button
            class:default={styleType === ButtonStyleType.DEFAULT}
            class:primary={styleType === ButtonStyleType.PRIMARY}
            class:ghost={styleType === ButtonStyleType.GHOST}
    >
        <slot/>
    </button>
{/if}