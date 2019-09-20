<template>
    <div>
        <div id="projectSpace">
            <h1>Projects</h1>
        </div>

        <projectsloop
            v-for="eachProject in Projects"
            :myProject="eachProject">

        </projectsloop>


    </div>
</template>

<script>
import Projectsloop from './Projectsloop.vue'
export default {
    data() {
        return {
            Projects: [
                {title: 'Air Quality Analyzer Webapp', award: 'A Vue.js Analyzer to compare and compute air qualities around the world. Developed in JavaScript, Vue.js, HTML, and CSS', pic: 'picAir'},
                  {title: 'Angular Motion Mathematical Game', award: 'A game in Java using object-oriented programming, data structures, and algorithms', pic: 'picAngular'},
                {title: 'Artificial Intelligence Mobile App for Workouts', award: 'National Finalist in Medical Innovation by HOSA Canada', pic: 'picHOSA'},
                {title: 'Biometrics Bicycle Lock', award: 'Provincial Finalist in Innovation by DECA Ontario', pic: 'picDECA'}
            ],
            stuff: 'hello'
        };
    },
    components: {
        Projectsloop
    }
    
}
</script>

<style scoped>
#projectSpace {
    margin-bottom: 10vh;
    margin-top:35vh;
}

</style>