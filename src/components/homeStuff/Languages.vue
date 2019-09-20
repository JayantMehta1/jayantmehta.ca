<template>
    <div>
        <h3>Programming Languages I work with</h3>



<div class="row"> 
    <i 
    v-for="eachLanguage in myLanguages" :class="eachLanguage.icon"
    class="column"
    :content="eachLanguage.name" v-tippy
    v-scroll-reveal.reset></i>
</div>

<h3>Tools I work with</h3>

<div class="row"> 
    <i 
    v-for="eachTool in myTools" :class="eachTool.icon"
    class="column"
    :content="eachTool.name" v-tippy
    v-scroll-reveal.reset></i>
</div>


    </div>
</template>


<script>
    export default {
        data() {
            return {
                myLanguages: [
                    {icon: 'devicon-java-plain-wordmark colored', name: 'Java'},
                    {icon: 'devicon-javascript-plain colored', name: 'JavaScript'},
                    {icon: 'devicon-cplusplus-plain colored', name: 'C++'},
                    {icon: 'devicon-python-plain-wordmark colored', name: 'Python'},
                    {icon: 'devicon-c-plain colored', name: 'C'},

                ],
                myTools: [
                    {icon: 'devicon-vuejs-plain-wordmark colored', name: 'Vue.js'},
                    {icon: 'devicon-webpack-plain colored', name: 'Webpack'},
                    {icon: 'devicon-photoshop-plain colored', name: 'PhotoShop'},
                    {icon: 'devicon-bootstrap-plain-wordmark colored', name: 'Bootstrap'}
                ],
        };
    }
}
</script>

<style scoped>

.row {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  margin-bottom: 30vh;
}

/* Create four equal columns that sits next to each other */
.column {
  flex: 25%;
  max-width: 25%;
  padding: 0 1%;
  padding-bottom: 4%;
}

i {
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  font-size: 7em;
}


@media screen and (max-width: 800px) {
  .column {
    flex: 25%;
    max-width: 25%;
          padding: 4% 2%;
  }
}

@media screen and (max-width: 600px) {
  .column {
    flex: 50%;
    max-width: 50%;
          padding: 4% 10%;
  }
}


i:hover {
    opacity: 0.6;
    color: rgb(93, 117, 133);
}


  h3 {
      margin: 10vh auto;
      font-family: 'Source Sans Pro', sans-serif;
      font-weight: bold;
  }
</style>

