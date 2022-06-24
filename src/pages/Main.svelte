<script>
    import Logo from '.././components/Logo.svelte';
    import LogIn from '.././components/LogIn.svelte';
</script>
  
<div style="text-align: center; margin-bottom: 30px;">
  <Logo logoSize={800}/>
  <h1 class="title">Log In or Sign Up to share and see adventures!</h1>
</div>

<div class="columns is-hcentered">
  <div class="column">
    <div class="box" style="background-color: #FBF5D7">
      <h1 class="title">Log In</h1>
        <LogIn/>
    </div>
  </div>
  <div class="column">
    <div class="box" style="background-color: #FBF5D7">
      <h1 class="title">Sign Up</h1>
      <LogIn/>
    </div>
  </div>
</div>
  
<style>  

  /* main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  } */

  /*
  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  } */
</style>
