<template>
    <div>
        <div id="experienceSpace">
            <h1>Experience</h1>
        </div>

        <experienceloop
            v-for="eachExperience in Experiences"
            :myPos="eachExperience">

        </experienceloop>


    </div>
</template>

<script>
import Experienceloop from './Experienceloop.vue'
export default {
    data() {
        return {
            Experiences: [
                {company: 'Design Net Specific', position: 'Web Developer', pic: 'picOne'},
                {company: 'City of Brampton', position: 'Aquatics Instructor', pic: 'picTwo'},
                {company: 'Carte Wealth Management Inc.', position: 'Administrative Assistant', pic: 'picThree'},
                {company: 'Brdiges Canada Inc.', position: 'Technology Camp Counsellor', pic: 'picFour'},
                {company: 'Carte Wealth Management Inc.', position: 'Computer and Software Intern', pic: 'picFive'}
            ]
        };
    },
    components: {
        Experienceloop
    }
    
}
</script>

<style scoped>
#experienceSpace {
    margin-bottom: 10vh;
}
</style>