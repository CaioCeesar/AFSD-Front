<script>
    import Logo from '.././components/Logo.svelte';
</script>

<div class='box' style="background-color: #FBF5D7; margin-top: 15px;">
    <div class="columns is-vcentered">
        <div class="column">
            <Logo logoSize={300}/>
        </div>
        <div class="column" style='text-align: center;'>
            <h3 class="title">ADMIN DASHBOARD</h3>
        </div>
        <div class="column" style='text-align: right;'>
            <a href='/'>
                <button class="button is-link" style="background-color: #00C076;">Log Out</button>
            </a>
        </div>
    </div>
</div>