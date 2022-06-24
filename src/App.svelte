<script>
  import {setContext} from "svelte";
  //import {DonationService} from "./services/donation-service";
  import Main from "./pages/Main.svelte";
  import Feed from "./pages/Feed.svelte";
  import Post from "./pages/Post.svelte";
  import Router from "svelte-spa-router";
  import NewPost from "./pages/NewPost.svelte";

  //setContext("DonationService", new DonationService("http://localhost:4000"));

  let routes = {
    "/": Main,
    "/feed": Feed,
    "/post": Post,
    "/newpost": NewPost
  }
</script>

<div class="container">
  <Router {routes}/>
</div>

<style>
  :root{
    background-color: #FBF5D7;
  }
</style>
