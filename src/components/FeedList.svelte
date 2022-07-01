<script>
    import {getContext, onMount} from "svelte";
    const TravelShareService = getContext("TravelShareService");
    let posts = [];
    onMount(async () => {
        posts = await TravelShareService.getPostsFeed();
    })
    
</script>

<div class='box' style='background-color: #FEEEAD'>
    {#each posts as post}
        <div class='box' style='background-color: #FBF5D7'>
            <div>{post.userName}</div>
            <div>
                <h1 class='title' style='text-align: center;'>{post.title}</h1>
                {post.description}
            </div>
            <div style='text-align: center;margin-top:10px;'>
                <img src={post.picture} width=500 alt="img"/>
            </div>
            <div style='text-align: right;'>
                <a href='/#/post/{post._id}'>
                    <button class="button is-link" style="background-color: #00C076;">Full Travel</button>
                </a>
            </div>
        </div>
    {/each}
</div>