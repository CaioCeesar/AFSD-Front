<script>
    import Logo from '.././components/Logo.svelte';
    export let profilePicture = 'https://johannesippen.com/img/blog/humans-not-users/header.jpg'
</script>

<div class='box' style="background-color: #FBF5D7; margin-top: 15px;">
    <div class="columns is-vcentered">
        <div class="column">
            <Logo logoSize={300}/>
        </div>
        <div class="column" style='text-align: center;'>
            <div class="columns is-vcentered">
                <div class="column">
                    <a href='/#/feed'>
                        <button class="button is-link" style="background-color: #00C076;">Feed</button>
                    </a>
                </div>
                <div class="column">
                    <img src={profilePicture} width=70 alt='img' style="border-radius: 50%;"/>
                </div>
                <div class="column">
                    <a href='/#/profile'>
                        <button class="button is-link" style="background-color: #00C076;">My Profile</button>
                    </a>
                </div>
            </div> 
        </div>
        <div class="column" style='text-align: right;'>
            <a href='/#/newpost'>
                <button class="button is-link" style="background-color: #00C076;">New Post</button>
            </a>
            <a href='/'>
                <button class="button is-link" style="background-color: #00C076;">Log Out</button>
            </a>
        </div>
    </div>
</div>