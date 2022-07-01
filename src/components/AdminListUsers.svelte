<script>
    import {getContext, onMount} from "svelte";

    const TravelShareService = getContext("TravelShareService");

    async function deleteUser(userId) {
        await TravelShareService.deleteUser(userId);
        users = await TravelShareService.getUsers();
    }

    export let users = [];
</script>

<div class='box' style='background-color: #FBF5D7'>
    <div style='text-align: center;'>
        <h4 class="title">Users</h4>
    </div>
    {#each users as user}
    <div class="columns is-vcentered">
        <div class="column">
            {user.name}
        </div>
        <div class="column" style='text-align: center;'>
            {user.email}
        </div>
        <div class="column" style='text-align: right;'>
            <button on:click={() => deleteUser(user._id)} class="button is-link" style="background-color: #00C076;">Delete User</button>
        </div>
    </div>
    <hr style='background-color: #FEEEAD'/>
    {/each}
</div>