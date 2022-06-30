<script lang="ts">
    import { push } from "svelte-spa-router";
    import { getContext } from "svelte";
  
    let name = "";
    let email = ""
    let password = "";
    let errorMessage = "";
  
    const TravelShareService = getContext("TravelShareService");
  
    async function signup() {
      let success = await TravelShareService.signUp(name, avatar, email, password);
      if (success) {
        push("/feed");
      } else {
        errorMessage = "Error Trying to sign up";
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
  
  <form on:submit|preventDefault={signup}>
        <div class="field">
          <label for="name" class="label">Name</label>
          <input bind:value={name} id="name" class="input" type="text" placeholder="Enter user name" name="name" style="background-color: #FBF5D7">
        </div>

      <div class="field">
        <label for="email" class="label">Email</label>
        <input bind:value={email} id="email" class="input" type="text" placeholder="Enter email" name="email" style="background-color: #FBF5D7">
      </div>

      <div class="field">
        <label for="password" class="label">Password</label>
        <input bind:value={password} id="password" class="input" type="password" placeholder="Enter Password" name="password" style="background-color: #FBF5D7">
      </div>

      <div class="field">
        <label class="label" for="picture">Picture</label>
        <span class="button is-link" style="background-color: #00C076;" on:click={()=>{fileinput.click();}}>Choose Image</span>
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >
        {#if avatar}
            <img class="avatar" src="{avatar}" alt="d" />            
        {/if}

        <div class="field is-grouped" style="margin-top: 20px">
          <button style="background-color: #00C076;" class="button is-link">Sign Up</button>
        </div>
    </div>
  </form>
  {#if errorMessage}
    <div class="section">
      {errorMessage}
    </div>
  {/if}
  