<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'Home' }">FireBlogs</router-link>
          <ul>
            <li><a href="#"><youTube class="svg-icon" /></a></li>
            <li><a href="#"><twitter class="svg-icon" /></a></li>
            <li><a href="#"><instagram class="svg-icon" /></a></li>
            <li><a href="#"><linkedin class="svg-icon" /></a></li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'Home'}">Home</router-link>
            <router-link class="link" :to="{ name: 'Blogs'}">Blogs</router-link>
            <router-link v-if="user" class="link" :to="{ name: 'NewPost'}">Create Post</router-link>
            <router-link v-if="!user" class="link" :to="{ name: 'Login'}">Login / Register</router-link>
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2021 All Rights Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
import youTube from "../assets/Icons/youtube-brands.svg";
import twitter from "../assets/Icons/twitter-brands.svg";
import instagram from "../assets/Icons/instagram-brands.svg";
import linkedin from "../assets/Icons/linkedin-brands.svg";
export default {
  name: "Footer",
  components: {
    youTube,
    twitter,
    instagram,
    linkedin
  }

}
</script>

<style scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}


.container > div {
  display: flex;
  flex: 1;
}

.container .left {
  color: #ffffff;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
}

.header {
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
  text-decoration: none;
}

.left ul {
  gap: 10px;
  list-style: none;
  font-weight: 600;
}

.col-1,
.col-2 {
  gap: 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
}

.col-1 h2 {
  text-align: center;
}

.col-1 ul {
  display: flex;
  flex-direction: row;
}

.col-1 ul li {
  display: flex;
  align-items: center;
  margin: 20px 5px;
}

.col-1 ul li .svg-icon{
  width: 24px;
  height: auto;
  color: #ffffff;
}

.col-2 ul {
  height: 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
}

.col-2 ul .link {
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
}

.header:hover,
.col-2 ul .link:hover,
.col-1 ul li .svg-icon:hover {
  color: #1eb8b8;
}


.right {
  gap: 20px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}


@media (min-width: 800px) {
  .container {
    flex-direction: row;
    gap: 0px;
  }

  .header {
    text-align: initial;
  }

  .container .left {
    gap: 0px;
    flex-direction: row;
    align-content: initial;
  }

  .col-1,
  .col-2 {
    gap: 0;
  }

  .col-1 h2 {
    text-align: initial;
  }

  .col-2 ul {
    flex-direction: column;
  }
  .right {
    gap: 0;
  }
}
</style>