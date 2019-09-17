<template>
    <div>
        <div id="introWords">
            <h1> Hi, I'm {{myName.first}}</h1>
            <vue-typer 
                text="I am a software developer studying Engineering at the University of Waterloo. Feel free to explore my website to get to know me :)"
                type-delay = '60'
                :repeat='0'>
            </vue-typer>
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
    margin-top: 30vh;
    margin-bottom:4vh;
}

#introAccounts {
    margin-bottom: 60vh;
    margin-top: 2vh;
}

h1 {
    font-weight: bold;
}

.vue-typer {
  font-size: 20px;
}

a {
    font-size: 20px;
    font-family: 'Source Sans Pro', sans-serif;
}
</style>

