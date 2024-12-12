<script>
    import '../styles/styles.css';

    let {children} = $props();
</script>

<nav>
    <a href="/">posts</a>
    <a href="/todos">todos</a>
</nav>

{@render children()}