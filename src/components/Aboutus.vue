<template>
<div class="container-fluid mt-3">
 <div class="row g-2 mt-5">
   <div class="col mt-5">
      <div class="loader">
      </div>
   </div>
   
   <div class="col">
     <div id="about us" class="about us">
    <div class="jumbotorn mt-5">
       <h3 class="heading">About us</h3>
          <div class="heading-underline"></div>
          <p class="description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo explicabo officia laborum quod nulla aut quos dolor in aperiam sint dolorem nam at, voluptas vero animi expedita, nostrum earum doloremque? Illum esse praesentium necessitatibus laborum. Deserunt a temporibus amet dignissimos! Corporis officiis vel nisi laborum doloribus animi nam, provident eveniet.</p>
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

<style scoped>
.container-fluid{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
    display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
  
}
.loader{
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: linear-gradient(45deg,transparent,transparent 40%, #e5f403);
  animation: animate 2s linear infinite;
}
@keyframes animate{
  0%
  {
    transform: rotate(0deg);
    filter: hue-rotate(0);
  }
  100%
  {
    transform: rotate(360deg);
  }
}
.loader:before {
  content: '';
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  background: #000;
  border-radius: 50%;
  z-index: 1000;
}
.loader:after {
  content: '';
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: linear-gradient(45deg,transparent, transparent 40%, #e003f4);
  border-radius: 50%;
  z-index: 1000;
  z-index: 1;
  filter: blur(30);
}
p {
  text-align: center;
  color: #2c4964;
  font-family: "Poppin", sans-serif;
  
   font-size: 19px;
    line-height: 28px;
    margin-bottom: 0;
  
    
}

</style>