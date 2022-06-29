import axios from "axios";
import {user} from "../stores";

export class TravelShareService {
  // baseUrl = "https://obscure-refuge-81832.herokuapp.com";

  constructor(baseUrl) {
    console.log("HELLO");
    this.baseUrl = "http://localhost:4000";
    console.log(this.baseUrl);
    const Credentials = localStorage.login;
    if (Credentials) {
      const savedUser = JSON.parse(Credentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.login = JSON.stringify({email: email, token: response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("login");
  }

  async signup(name, picture, email, password) {
    try {
      const userDetails = {
        name: name,
        picture: picture,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async createPost(post) {
    try {
      const response = await axios.post(this.baseUrl + "/api/posts", post);
      return response.status == 201;
    } catch (error) {
      return false;
    }
  }

  async getPostsFeed() {
    try {
      const response = await axios.get(this.baseUrl + "/api/posts/feed");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getPostsProfile() {
    try {
      const response = await axios.get(this.baseUrl + "/api/posts/profile");
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getPostById(postId) {
    try {
      const response = await axios.get(this.baseUrl + "/api/posts/" + postId);
      return response.data;
    } catch (error) {
      return [];
    }
  }
}
