<template>
 <section id="services" class="services mt-3">
      <div class="jumbotron container-fluid">
           <h3 class="heading">Contact us</h3>
             <div class="heading-underline"></div>
             <div class="text">
              <!-- <p class="description text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut aspernatur nemo ipsam, voluptates doloribus minus error unde exercitationem? Optio.</p> -->
             </div>

             <div class="row mt-5">
                <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                      <div class="icon-box">
                      <div class="icon"><i class="bi bi-geo-alt"></i></div>
                       <h4><a>University of Kinshasa</a></h4>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cum!</p>
                          <!-- <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam, ipsam ab eius, soluta, deserunt sit maxime tempore modi voluptatum impedit! Tenetur dolore cupiditate dolor facilis illum maxime eveniet cumque!</p> -->
                           </div>
            </div>
      
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
        <div class="icon-box">
          <div class="icon"><i class="bi bi-phone"></i></div>
          <h4><a> +243 82 89 66 375</a></h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cum!</p>
          <!-- <p> <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam, ipsam ab eius, soluta, deserunt sit maxime tempore modi voluptatum impedit! Tenetur dolore cupiditate dolor facilis illum maxime eveniet cumque!</p> -->
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
        <div class="icon-box">
          <div class="icon"><i class="bi bi-envelope"></i></div>
          <h4><a> djobambu77@gmail.com</a></h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cum!</p>
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam, ipsam ab eius, soluta, deserunt sit maxime tempore modi voluptatum impedit! Tenetur dolore cupiditate dolor facilis illum maxime eveniet cumque!</p> -->
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
        <div class="icon-box">
          <div class="icon"><i class="bi-facebook"></i></div>
          <h4><a>djo bambu</a></h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cum!</p>
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam, ipsam ab eius, soluta, deserunt sit maxime tempore modi voluptatum impedit! Tenetur dolore cupiditate dolor facilis illum maxime eveniet cumque!</p> -->
        </div>
      </div>
      
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
        <div class="icon-box">
          <div class="icon"><i class="bi-instagram"></i></div>
          <h4><a>Mr_djo_bambu</a></h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cum!</p>
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam, ipsam ab eius, soluta, deserunt sit maxime tempore modi voluptatum impedit! Tenetur dolore cupiditate dolor facilis illum maxime eveniet cumque!</p> -->
        </div>
      </div>
      <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
        <div class="icon-box">
          <div class="icon"><i class="bi-twitter"></i></div>
          <h4><a>@djo bambu</a></h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cum!</p>
          <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam, ipsam ab eius, soluta, deserunt sit maxime tempore modi voluptatum impedit! Tenetur dolore cupiditate dolor facilis illum maxime eveniet cumque!</p> -->
        </div>
      </div>
     
    </div>
      </div>
  </section>
</template>
<script>
export default {
   
}
</script>

<style scoped>
.services .icon-box{
    text-align: center;
    border: 1px solid #d5e1ed;
    padding: 80px 20px;
    transition: all ease-in-out 0.3s;
}

.services .icon-box .icon{
    margin: 0 auto;
    width: 64px;
    height: 64px;
    background: #1977cc;
    border-radius: 5px;
    transition: all 0.3 ease-out 0s;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transform-style: preserve-3d;
} 

.services .icon-box .icon i{
    color: #fff;
    font-size: 28px;
}

.services .icon-box .icon::before{
    position: absolute;
    content: "";
    left: -8px;
    top: -8px;
    height: 100%;
    width: 100%;
    background: #badaf7;
    border-radius: 5px;
    transition: all 0.3s ease-out 0s;
    transform: translateZ(-1px);
}
.services .icon-box h4{
    font-weight: 700;
    margin-bottom: 15px;
    font-size: 24px;
}
.services .icon-box h4 a{
color: #2c4964;
}
.services .icon-box p{
    line-height: 24px;
    font-size: 14px;
    margin-bottom: 0;
}
.services .icon-box:hover{
    background: #2c4964;
    background-color: #2c4964;
}
.services .icon-box:hover .icon{
    background: #fff;
}
.services .icon-box:hover .icon i{
    color: #1977cc;
}
.services .icon-box:hover .icon::before{
    background: #3291e6;
}
.services .icon-box:hover h4 a, .services .icon-box:hover p{
    color: #fff;
}

.text .description{
  font-family: "Poppin", sans-serif;
  font-size: 20px;
    line-height: 28px;
    margin-bottom: 0;
    text-transform: uppercase;
    color: #2c4964;
    
}
</style>