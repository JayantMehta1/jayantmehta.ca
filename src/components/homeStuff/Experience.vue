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
                {company: 'Design Net Specific', position: 'Web Developer', pic: 'picDesign'},
                {company: 'Carte Wealth Management Inc.', position: 'Computer Software Intern', pic: 'picCarteSoftware'},
                {company: 'Hack the North', position: 'Judging Panel Coordinator', pic: 'picNorth'},
                {company: 'Professional Engineers of Ontario Oakville Chapter', position: 'National Engineering Month Conference Coordinator', pic: 'picPEO'},
                {company: 'Carte Wealth Management Inc.', position: 'Administrative Assistant', pic: 'picCarteAdmin'},
                {company: 'Brdiges Canada Inc.', position: 'Technology Camp Counsellor', pic: 'picBridges'},
                {company: 'City of Brampton', position: 'Aquatics Instructor', pic: 'picBrampton'}
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