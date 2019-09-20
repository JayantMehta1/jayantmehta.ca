<template>
  <div id="wrapper">

  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <router-link to="/about" class="navbar-brand">About Me</router-link> 
        <router-link to="/resume" class="navbar-brand">Resume</router-link> 
      </div>
    </div>
  </nav>

    <div id="whole">
              <router-view></router-view>
    </div>
        <conclusion
          :myName="userName">
      </conclusion>
  </div>
</template>

<script>
import Conclusion from './components/Conclusion.vue'

export default {
  data() {
    return {
      userName: {first: 'Jayant', last: 'Mehta'}
    }
  },
    components: {
      Conclusion
  }
}

</script>

<style scoped>

nav {
  background-color: black;
  margin-bottom: 30vh;
}

.navbar-brand {
  color: white;

}

body {
  background: whitesmoke;
}

#wrapper {
  margin: 0 auto;
  justify-content: center;
}
#whole {
  margin: 0 auto;
  width: 60%;
}

@media (max-width: 1000px) {

      #whole {
            width:90%;
       }

}
</style>