<template>
    <span id="mediaSpacing">
        <a id="mediaDynamic" :href="myMedia.myLink">
            <span>
                <i :id="myMediaColour" :class="myMedia.icon"></i>
            </span>            
        </a>
    </span>
</template>


<script>
    export default {
        data() {
            return {
                myColour: 'grey'
            }
        },
        props: ['myMedia', 'myMediaColour']
    }
</script>

<style>

#mediaSpacing {
      padding-right: 5ch;
  }

#mediaDynamic:hover {
    opacity: 0.3;
}

#accountsColourBlue {
    font-size: 2.5em;
    margin-left: 0;
    color: rgb(0, 102, 204);
    margin-top: 2vh;
  }

#accountsColourWhite {
    font-size: 2.5em;
    margin-left: 0;
    color: white;
    margin-top: 3vh;
  }

  @media (max-width: 1000px) {
      #mediaSpacing {
      padding-right: 4ch;
  }

}


</style>

