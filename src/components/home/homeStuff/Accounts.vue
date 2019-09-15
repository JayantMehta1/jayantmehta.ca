<template>
    <div>
        <div id="mediaBlock">
            <media class="iconMedia" 
                v-for="eachProfile in myProfiles"
                :myMedia="eachProfile"
                :myMediaColour="passColour">
            </media>
        </div>
    </div>
</template>



<script>

import Media from './Media.vue'
export default {
    data() {
        return {
            myProfiles: [
                {icon: 'fas fa-envelope fa-lg', myLink: 'mailto: j7mehta@edu.uwaterloo.ca'},
                {icon: 'fab fa-linkedin-in fa-lg', myLink: 'https://www.linkedin.com/in/jayant-mehta'},
                {icon: 'fab fa-github fa-lg', myLink: 'https://github.com/JayantMehta1'},
                {icon: 'fas fa-file fa-lg', myLink: '../../../static/JayantMehtaResume.pdf'}
                ]
        };
    },
    props: ['passColour'],
    components: {
        Media
    }
}
</script>


<style scoped>
#mediaBlock {
    padding-bottom:2%;
}

</style>