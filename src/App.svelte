<script>
  import {setContext} from "svelte";
  import {TravelShareService} from "./services/travelshare-service.js";
  import Main from "./pages/Main.svelte";
  import Feed from "./pages/Feed.svelte";
  import Post from "./pages/Post.svelte";
  import Profile from "./pages/Profile.svelte";
  import Router from "svelte-spa-router";
  import NewPost from "./pages/NewPost.svelte";
  import Admin from "./pages/Admin.svelte";

  setContext("TravelShareService", new TravelShareService("http://desolate-ridge-82978.herokuapp.com"));

  let routes = {
    "/": Main,
    "/feed": Feed,
    "/profile": Profile,
    "/post/:id": Post,
    "/newpost": NewPost,
    "/admin": Admin
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
