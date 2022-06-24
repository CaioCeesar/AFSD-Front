<script>
    import {push} from "svelte-spa-router";
    import {getContext} from "svelte";
  
    let email = ""
    let password = "";
    let errorMessage = "";
  
    const donationService = getContext("DonationService");
  
    async function login() {
      /* let success = await donationService.login(email, password)
      if (success) {
        push("/donate");
      } else {
        email = "";
        password = "";
        errorMessage = "Invalid Credentials";
      } */
      alert('a')
    }
  </script>
  
  <form on:submit|preventDefault={login}>
    <div class="field">
      <label class="label" for="email">Email</label>
      <input bind:value={email} class="input" id="email" name="email"placeholder="Enter email" type="text" style="background-color: #FBF5D7">
    </div>
    <div class="field">
      <label class="label" for="password">Password</label>
      <input bind:value={password} class="input" id="password" name="password" placeholder="Enter Password" type="password" style="background-color: #FBF5D7">
    </div>
    <div class="field is-grouped is-hcentered">
      <button class="button is-link" style="background-color: #00C076;">Log In</button>
    </div>
  </form>
  {#if errorMessage}
    <div class="section">
      {errorMessage}
    </div>
  {/if}
  