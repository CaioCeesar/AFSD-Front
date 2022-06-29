<script>
    export let spots = [];
    let spot = {
        title: '',
        picture: '',
        description: '',
        lat: 0,
        long: 0
    }
    let errorMessage = "";

    async function createSpot() {
        spot.picture = avatar;
        spots.push(spot);
        spots = [...spots];
        spot = {
            title: '',
            picture: '',
            description: '',
            lat: 0,
            long: 0
        }

    };

    let  avatar, fileinput;
    const onFileSelected =(e)=>{
        let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                avatar = e.target.result
        };
    };
</script>


<form on:submit|preventDefault={createSpot}>
        <div class="field">
            <label class="label" for="spotTitle">Title</label>
            <input bind:value={spot.title} class="input" id="spotTitle" name="spotTitle"placeholder="Enter title" type="text" style="background-color: #FBF5D7">
        </div>

        <div class="field">
            <label class="label" for="spotDescription">Description</label>
            <input bind:value={spot.description} class="input" id="spotDescription" name="spotDescription" placeholder="Enter description" type="text" style="background-color: #FBF5D7">
        </div>

        <div class="field">
            <label class="label" for="latitude">Latitude</label>
            <input bind:value={spot.lat} class="input" id="latitude" name="latitude" placeholder="Enter description" type="float" style="background-color: #FBF5D7">
        </div>

        <div class="field">
            <label class="label" for="longitude">Longitude</label>
            <input bind:value={spot.long} class="input" id="longitude" name="longitude" placeholder="Enter description" type="float" style="background-color: #FBF5D7">
        </div>

        <div class="field">
            <label class="label" for="picture">Picture</label>
            <span class="button is-link" style="background-color: #00C076;" on:click={()=>{fileinput.click();}}>Choose Image</span>
            <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
            {#if avatar}
                <img class="avatar" src="{avatar}" alt="d" />            
            {/if}
        </div>

        <div style="text-align:center;">
            <button class="button is-link" style="background-color: #00C076;">Add Spot</button>
        </div>
</form>
{#if errorMessage}
    <div class="section">
        {errorMessage}
    </div>
{/if}

    

