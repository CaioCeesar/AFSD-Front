<script lang="ts">
    import { push } from "svelte-spa-router";
    import { getContext } from "svelte";
  
    let name = "";
    let picture = "";
    let email = ""
    let password = "";
    let errorMessage = "";
  
    const travelShareService = getContext("TravelShareService");
  
    async function signup() {
      let success = await travelShareService.signup(name, picture, email, password)
      if (success) {
        push("/feed");
      } else {
        errorMessage = "Error Trying to sign up";
      }
    }
  </script>
  
  <form on:submit|preventDefault={signup}>
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label for="name" class="label">Name</label>
            <input bind:value={name} id="name" class="input" type="text" placeholder="Enter first name" name="name" style="background-color: #FBF5D7">
          </div>
          <div class="field">
            <label for="picture" class="label">Picture</label>
            <input bind:value={picture}  id="picture" class="input" type="text" placeholder="Enter last name" name="picture" style="background-color: #FBF5D7">
          </div>
        </div>
      </div>
      <div class="field">
        <label for="email" class="label">Email</label>
        <input bind:value={email} id="email" class="input" type="text" placeholder="Enter email" name="email" style="background-color: #FBF5D7">
      </div>
      <div class="field">
        <label for="password" class="label">Password</label>
        <input bind:value={password} id="password" class="input" type="password" placeholder="Enter Password" name="password" style="background-color: #FBF5D7">
      </div>
      <div class="field is-grouped">
        <button style="background-color: #00C076;" class="button is-link">Sign Up</button>
      </div>
  </form>
  {#if errorMessage}
    <div class="section">
      {errorMessage}
    </div>
  {/if}
  