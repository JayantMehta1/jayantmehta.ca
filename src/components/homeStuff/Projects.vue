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
                {title: 'Artificial Intelligence Mobile App for Workouts', award: 'National Finalist in Medical Innovation by HOSA Canada', pic: 'picOne'},
                {title: 'Biometrics Bicycle Lock', award: 'Provincial Finalist in Innovation by DECA Ontario', pic: 'picTwo'}
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
    margin-top:60vh;
}

</style>