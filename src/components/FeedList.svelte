<script>
    export let posts = [];
</script>

<div class='box' style='background-color: #FEEEAD'>
    {#each posts as post}
        <div class='box' style='background-color: #FBF5D7'>
            <div>{post.profileName}</div>
            <div>
                <h1 class='title' style='text-align: center;'>{post.title}</h1>
                {post.description}
            </div>
            <div style='text-align: center;'>
                <img src={post.picture} width=500 alt="img"/>
            </div>
            <div style='text-align: right;'>
                <a href='/#/post'>
                    <button class="button is-link" style="background-color: #00C076;">Full Travel</button>
                </a>
            </div>
        </div>
    {/each}
</div>