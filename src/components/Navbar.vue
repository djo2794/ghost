<template>
<nav class="navbar navbar-light bg-light fixed-top">
           <div class="container-fluid">
           <a class="navbar-brand" >Ghost</a>
           <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
             <span class="navbar-toggler-icon"></span>
           </button>
              <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                 <h5 class="offcanvas-title " id="offcanvasNavbarLabel">Ghost</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
             </div>
                  <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Aboutus">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Services">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Address">Address</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
       
      </div>
    </div>
  </div>
 </nav>

</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    background: #fff;
    transition: all 0.5s;
    z-index: 997;
    /* padding: 15px 0; */
    /* top: 40px; */
    box-shadow: 0px 2px 15px rgba(25, 119, 204, 0.1); 
}
.navbar .navbar-scrolled{
    top: 0;
}
.navbar .navbar-brand{
    font-size: 30px;
    margin: 0;
    padding: o;
    line-height: 1px;
    font-weight: 700;
    letter-spacing: 0.5px;
    font-family: "Poppin", sans-serif;
}
.navbar-light .navbar-brand {
    color: #2c4964;
}
.navbar .offcanvas-title{
    font-size: 30px;
    margin: 0;
    padding: o;
    line-height: 1px;
    font-weight: 700;
    letter-spacing: 0.5px;
    font-family: "Poppin", sans-serif;
     color: #2c4964;
}
.navbar-light .navbar-nav .nav-link:hover{
    color: #1977cc;
    border-color: #1977cc;
}
.navbar-toggler{
    background: #2c4964;
    border: 0;
    padding: 10px 35px;
    color: #fff;
    transition: 0.4s;
    border-radius: 50px;
}
.navbar-toggler:hover{
  color: #1977cc;
  
}

</style>