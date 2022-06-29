<script>
    import Header from '.././components/Header.svelte';
    import Map from '.././components/Map.svelte';
    import CreateSpot from '.././components/Spots.svelte';
    import {getContext} from 'svelte';
    import {push} from "svelte-spa-router";

    let post = {
        title: '',
        picture: '',
        description: '',
        spots: []
    }
    let errorMessage = "";

    const TravelShareService = getContext("TravelShareService");
  
    async function createPost() {
        post.picture = avatar;
      let success = await TravelShareService.createPost(post)
      if (success) {
        push("/profile");
      } else {
        errorMessage = "Invalid Credentials";
      }
    }

    let  avatar, fileinput;
    const onFileSelected =(e)=>{
        let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                avatar = e.target.result
        };
    }
</script>

<Header profilePicture={'https://scontent-frt3-1.xx.fbcdn.net/v/t1.6435-9/49840135_2130540606981930_1920307782444122112_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6gb9KnA9qrEAX8gPFr1&_nc_ht=scontent-frt3-1.xx&oh=00_AT_KdqrSv32oRxnHD3NDMFvhbd23K9nVccatRcgwWMMw1w&oe=62DB1B5D'}/>

<div class='box' style='background-color: #FEEEAD'>
    {#if errorMessage}
        <div class="section">
            {errorMessage}
        </div>
    {/if}

    <form on:submit|preventDefault={createPost}>
        <div class='box' style='background-color: #FBF5D7'>
            <h1 class='title' style='text-align: center;'>New Post</h1>
            <div class="field">
                <label class="label" for="title">Title</label>
                <input bind:value={post.title} class="input" id="title" name="title"placeholder="Enter title" type="text" style="background-color: #FBF5D7">
            </div>

            <div class="field">
                <label class="label" for="description">Description</label>
                <input bind:value={post.description} class="input" id="description" name="description" placeholder="Enter description" type="description" style="background-color: #FBF5D7">
            </div>

            <div class="field">
                <label class="label" for="picture">Picture</label>
                <span class="button is-link" style="background-color: #00C076;" on:click={()=>{fileinput.click();}}>Choose Image</span>
                <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
                {#if avatar}
                    <img class="avatar" src="{avatar}" alt="d" />            
                {/if}
            </div>
        </div>

        <div class='box' style='background-color: #FBF5D7'>
            <h1 class='title' style='text-align: center;'>Creat Spot</h1>
            <CreateSpot bind:spots={post.spots} />
        </div>

        <div class='box' style='background-color: #FBF5D7'>
            <h1 class='title' style='text-align: center;'>The Route</h1>
            <Map spots={post.spots} />
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

        <div style='text-align: right;'>
            <button class="button is-link" style="background-color: #00C076;">Post</button>
        </div>
    </form>
</div>

