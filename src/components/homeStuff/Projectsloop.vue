<template>
<div data-aos="fade-up">
<div class="border hvr-grow">
    <div class="left" :id="myProject.pic">
    </div>

    <div class="right">
      <h5>{{myProject.title}}</h5>
      <p>{{myProject.award}}</p>
    </div>

</div>
</div>
</template>


<script>
    export default {   
        props: ['myProject']
    }
</script>

<style scoped>
.border {
        border: 1px solid rgb(228, 218, 218);
        margin-bottom: 10vh;
        height: 45vh;
        display: flex;
        border-radius: 15px;

}

.left {
  float:left;
  width:50%;
  height:100%;
  background-size: cover;
  background-position: center; 
}

.right {
    padding-left: 5%;
    padding-top:3%;
    padding-right: 2%;
  float:left;
  width:50%;
  height:100%;
}

#picOne {
    background-image: url(https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fbernardmarr%2Ffiles%2F2018%2F11%2FAdobeStock_171462504-1200x675.jpg);
}

#picTwo {
    background-image: url(https://www.electroschematics.com/wp-content/uploads/2015/05/arduino-fingerprint-module.png);
}


@media screen and (max-width:800px) {
  .left, .right {
    width:100%; 
  }

  .border {
      flex-direction: column;
  }
}

.hvr-grow {
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.1);
}


</style>

