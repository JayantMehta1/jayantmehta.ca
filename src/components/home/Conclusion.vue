<template>
    <footer>
            <p>j7mehta@edu.uwaterloo.ca</p>
            <accounts :passColour="accountsColourConclusion"></accounts>
            <p id="credit">Designed and Developed by {{myName.first}} {{myName.last}}</p>
    </footer>

    
</template>

<script>
import Accounts from './homeStuff/Accounts.vue'

export default {
    data() {
        return {
            accountsColourConclusion: 'accountsColourWhite'
        }
    },

    props: ['myName'], 

    components: {
        Accounts
    }
}
</script>

<style scoped>
footer {
    box-sizing: border-box;
    width: 100%;
    height:25vh;
    left: 0;
    bottom: 0;
    position: relative;
    background-color: black;
    padding: 2vh 2ch;
    margin-top: 5vh;
}

footer p {
    text-align: left;
    color: white;
    font-size: 15px;
}

#credit {
    text-align: right;
}
</style>
