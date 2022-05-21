<template>
  <div class="container-fluid mt-5">
   <div id="carouselExampleSlidesOnly" class="carousel slide mt-5" data-bs-ride="carousel" data-interval="1000">
        <div class="carousel-inner">
         <div class="carousel-item active">
         <img src="../assets/computers.png" class="d-block w-100" alt="">
         </div>
       <div class="carousel-item">
          <img src="../assets/computers-2.png" class="d-block w-100" alt="">
      </div>
       <div class="carousel-item">
           <img src="../assets/computers-3.png" class="d-block w-100" alt="">
      </div>
    </div>
    </div>

   <div id="course" class="offset mt-3">
        <div class="col-12 narrow text-center">
        <h1> Ghost course</h1>
         <p class="lead mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quam nihil alias! Rem voluptatem ab neque corporis eligendi sint ullam!</p>
         <a class="btn btn-secondary btn-md" href="http://www.youtube.com" target="_blanck">93% OFF COUPON "Ghost03"</a>

      </div>
    </div>

        <div id="portfolio" class="offset">
           <div class="jumbotron container-fluid ">
             <h3 class="heading"> Portfolio</h3>
            <div class="heading-underline"></div>
            <div class="row no-padding">

          <div class="col-sm-4">
            <div class="portfolio">
              <a target="_blank">
              <img src="../assets/portfolio/1.png">
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="portfolio">
              <a target="_blank">
              <img src="../assets/portfolio/2.png">
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="portfolio">
              <a target="_blank">
              <img src="../assets/portfolio/3.png">
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="portfolio">
              <a target="_blank">
              <img src="../assets/portfolio/4.png">
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="portfolio">
              <a target="_blank">
              <img src="../assets/portfolio/5.jpg">
              </a>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="portfolio">
              <a target="_blank">
              <img src="../assets/portfolio/6.png">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  <div id="meetus" class="bams">
    <div class="jumbotron container-fluid">
       <h3 class="heading">Meet us</h3>
            <div class="heading-underline"></div>
            <div class="text">
              <p class="description text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ut aspernatur nemo ipsam, voluptates doloribus minus error unde exercitationem? Optio.</p>
            </div>
            <div class="row padding">
              <div class="col-md-6">
                <div class="card text-center">
                  <img class="card-img-top" src="../assets/meetus/2.jpg">
                  <div class="body">
                    <h4>Djo Bambu</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima?</p>
                  </div>

                </div>
              </div>
              <div class="col-md-6">
                <div class="card text-center">
                  <img class="card-img-top" src="../assets/meetus/3.jpg">
                  <div class="body">
                    <h4>Ghost</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minima?</p>
                  </div>

                </div>
              </div>
            </div>  
    </div>
  </div>


  </div>

</template>
   
<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');

.jumbotron {
  border-radius: 0;
  padding: 3rem 0 2rem;
}
h3.heading{
  font-size: 1.9rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: 1.9rem;
   color: #2c4964;
   text-align: center;
}
.heading-underline{
  width: 3rem;
  height: .2rem;
  background-color: #2c4964;
  margin: 0 auto 2rem;
}
.portfolio img{
  max-width: 100%;
  transition: transform .5s ease;
}
.row.no-padding [class*=col-]{
  padding: 0;
}
.portfolio img:hover{
  transform: scale(1.1);
  cursor: zoom-in;
}
.portfolio{
  overflow: hidden;
}
.narrow {
  font-size: 1.9rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: 1.9rem;
  border-radius: 0;
  padding: 3rem 0 2rem;
   font-family: "Poppin", sans-serif;
   
}
.narrow h1{
   font-family: "Poppin", sans-serif;
   color: #2c4964;
    line-height: 1px;
    font-weight: 700;
    letter-spacing: 0.5px;
}
/* .btn {
  border-width: medium;
  border-radius: 0;
  padding: .6rem 1.1rem;
  margin: 1rem;
  background-color: #2c4964;
}
.btn-md:hover{
  color: #1977cc;
} */
.offset .btn-secondary {
    color: #fff;
    background-color: #2c4964;
    
}
.offset .lead {
   font-family: "Poppin", sans-serif;
  font-size: 20px;
    line-height: 28px;
    margin-bottom: 0;
    color: #2c4964;
    
}
.text .description{
  font-family: "Poppin", sans-serif;
  font-size: 20px;
    line-height: 28px;
    margin-bottom: 0;
    color: #2c4964;
}
.card {
  margin: 2rem;
  max-width: 100%;
  
}
.card:hover{
 transform: scale(1.1);
  cursor: zoom-in;
  overflow: hidden;
}
.card .card-img-top{
  
}
.body h4{
  color: #2c4964;
  font-size: 30px;
    /* margin: 0;
    padding: 0; */
    /* line-height: 1px; */
    font-weight: 700;
    letter-spacing: 0.5px;
    font-family: "Poppin", sans-serif;
   
}

</style>