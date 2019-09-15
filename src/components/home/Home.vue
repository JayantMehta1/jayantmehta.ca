<template>
  <div>
        <intro 
           v-scroll-reveal.reset
          :myName="userName">
        </intro>

        <languages></languages>

        <experience></experience>

        <projects></projects>

  </div>
</template>

<script>
import Intro from './homeStuff/Intro.vue'
import Experience from './homeStuff/Experience.vue'
import Projects from './homeStuff/Projects.vue'
import Languages from './homeStuff/Languages.vue'

export default {
  data() {
    return {
      userName: {first: 'Jayant', last: 'Mehta'}
    }
  },

  components: {
    Intro,
    Experience,
    Projects,
    Languages
  }
}
</script>

<style scoped>

</style>