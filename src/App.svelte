<script>
  import {setContext} from "svelte";
  //import {DonationService} from "./services/donation-service";
  import Main from "./pages/Main.svelte";
  import Router from "svelte-spa-router";

  //setContext("DonationService", new DonationService("http://localhost:4000"));

  let routes = {
    "/": Main,
  }
</script>

<div class="container">
  <Router {routes}/>
</div>
