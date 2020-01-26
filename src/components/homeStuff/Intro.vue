<template>
    <div>
        <div id="introWords">
            <h1> Hi, I'm {{myName.first}}!</h1>
            <p>
                I am a software developer studying Engineering at the University of Waterloo. Feel free to explore my website to get to know me :)
            </p>
            <p>
                I am seeking an internship for Fall 2020 (September - December)
            </p>
        </div>
        <a href="../../../static/JayantMehtaResume.pdf">Here is my Resume</a>
        <div id="introAccounts">
            <accounts :passColour="accountsColourIntro"></accounts>
        </div>
    </div>
</template>



<script>

import Accounts from './Accounts.vue'
export default {
    data() {
        return {
            accountsColourIntro: 'accountsColourBlue',
            typing: true
        }
    },
    props: ['myName'],     
    components: {
        Accounts
    }
}
</script>


<style scoped>
#introWords {
    margin-top: 10vh;
    margin-bottom:4vh;
}

#introAccounts {
    margin-bottom: 35vh;
    margin-top: 2vh;
}

h1 {
    font-weight: bold;
    font-size: 3em;
}

p {
  font-size: 20px;
  font-family: 'Source Sans Pro', sans-serif;
}

a {
    font-size: 20px;
    font-family: 'Source Sans Pro', sans-serif;
}
</style>

