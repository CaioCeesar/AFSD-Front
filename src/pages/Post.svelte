<script>
    import Header from '.././components/Header.svelte';
    import Map from '.././components/Map.svelte';
    import {getContext, onMount} from "svelte";
    import {user} from "../stores";
    import { push } from 'svelte-spa-router';
    
    let loggedUser = get__store(user);
    function get__store(store) {
        let userId
        store.subscribe(a => {userId = a.id})()
        return userId
    }

    let post = {spots: []};
    const TravelShareService = getContext("TravelShareService");
    onMount(async () => {
        const postId = window.location.href.split('/').slice(-1)[0]
        post = await TravelShareService.getPostById(postId);
    })

    async function deletePost() {
        await TravelShareService.deletePost(post._id);
        push('/profile')
    }
</script>
  
<div>
    <Header />
    <div class='box' style='background-color: #FEEEAD'>
        <div class='box' style='background-color: #FBF5D7'>
            {post.userName}
            <div>
                <h1 class='title' style='text-align: center;'>{post.title}</h1>
                {post.description}
            </div>
            <div style='text-align: center;margin-top:10px;'>
                <img src={post.picture} width=500 alt="img"/>
            </div>
        </div>

        <div class='box' style='background-color: #FBF5D7'>
            <h1 class='title' style='text-align: center;'>The Route</h1>
            {#if post.spots.length > 0}
                <Map spots={post.spots} />
            {/if}
        </div>

        {#each post.spots as spot, i}
            <div class='box' style='background-color: #FBF5D7'>
                <div>
                    <h1 class='title' style='text-align: center;'>{i + 1}° {spot.title}</h1>
                    {spot.description}
                </div>
                <div style='text-align: center;'>
                    <img src={spot.picture} width=500 alt="img"/>
                </div>
            </div>
        {/each}

        {#if post.userId == loggedUser}
            <div style='text-align: right;'>
                <button on:click={deletePost} class="button is-link" style="background-color: #00C076;">Delete Post</button>
            </div>
        {/if}
    </div>

    
</div>
