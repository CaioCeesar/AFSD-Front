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
