<template>
<div>
    <div
    v-scroll-reveal.reset>
    <h2>My Biography</h2>

    <p> I am currently studying Systems Design Engineering at the University of Waterloo.
        With a passion for programming, I like to work on projects that allow me to express my creativity.</p>

    <ul>
        <li v-for="eachAward in myAwards">{{eachAward.description}} {{eachAward.dates}}</li>
    </ul>
    </div>

    <div
    v-scroll-reveal.reset>
    <h2>Community Involvement</h2>
        <ul>
            <li v-for="eachCommunity in myCommunity">{{eachCommunity.description}} {{eachCommunity.dates}}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            myCommunity: [
                {description: 'SHAD Ambassador', dates: '(Sep. 2018 - Present)'},
                {description: 'DECA President', dates: '(Sep. 2015 - Jun. 2019)'},
                {description: 'PEO Oakville Chapter National Engineering Month Conference Coordinator', dates: '(Mar. 2016 - Mar. 2019)'},
                {description: 'Milton District Hospital Computer Information Desk Volunteer', dates: '(Jan. 2017 - Apr. 2019)'},
                {description: 'S.T.E.M. Executive Diector of Technology, Engineering Lead', dates: '(Sep. 2016 - Jun. 2019)'},
                {description: 'H.O.S.A Executive Diector', dates: '(May 2018 - Jun. 2019)'},
                {description: 'Community Living North Halton Program Coordiantor Volunteer', dates: '(Sep. 2015 - Dec. 2018)'},
            ],

            myAwards: [
                {description: 'Schulich Leader National Scholarship Award - University of Toronto Engineering Science', dates: '(Apr. 2019)'},
                {description: 'SHAD Fellow', dates: '(Jul. 2018)'},
                {description: 'Nationals Finalist in Medical Innovation - H.O.S.A. Canada', dates: '(Mar. 2019)'},
                {description: 'Provincials Finalist in Innovation - DECA Ontario', dates: '(Feb. 2018)'}


            ]

        };
    }
    
}
</script>

<style scoped>

div {
    font-family: 'Source Sans Pro', sans-serif;
}

h2 {
    font-weight: bold;
    margin-bottom: 3vh;
}

p, li{
    font-size: 20px;
}

ul {
    margin-bottom: 25vh;
}

</style>