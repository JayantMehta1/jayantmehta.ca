<template>
<div data-aos="fade-up">
<div class="border hvr-grow">
    <div class="left" :id="myPos.pic">
    </div>

    <div class="right">
      <h5>{{myPos.position}} at {{myPos.company}}</h5>
    </div>

</div>
</div>
</template>


<script>
    export default {
        props: ['myPos']
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
    background-color: PowderBlue;
}

#picCanada {
    background-image: url(https://alljobsnet.com/wp-content/uploads/2019/10/Government-of-Canada-logo.jpg);
}

#picMicrosoft {
    background-image: url(https://img-cdn.hipertextual.com/files/2012/08/Microsoft-logo.jpg?strip=all&lossy=1&quality=70&resize=740%2C490&ssl=1);
}

#picDesign {
    background-image: url(https://durhamtech.edu/sites/default/files/images/Information-Technology-software-development-PO.jpg);
}

#picCarteSoftware {
    background-image: url(https://www.moveoapps.com/blog/wp-content/uploads/2017/12/6-Best-Practices-for-Faster-Better-Hybrid-App-Development.jpg);
}

#picNorth {
    background-image: url(https://ih1.redbubble.net/image.107099335.1905/flat,1000x1000,075,f.jpg);
}

#picPEO {
    background-image: url(https://cdn.shopify.com/s/files/1/2719/6506/articles/Is-3D-printing-the-next-big-thing-or-the-next-big-bust_1024x1024.jpg?v=1531347284);
}

#picBridges {
    background-image: url(https://www.nsf.gov/news/mmg/media/images/shutterstock_497153830_f.jpg);
}
#picBrampton {
    background-image: url(https://www.brisbane.qld.gov.au/sites/default/files/styles/hero_image_mobile/public/1200x500-dunlop-park-pool-corner_0.jpg?itok=owev0y2n);
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

