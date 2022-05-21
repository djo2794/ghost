<template>
  <footer id="footer">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
  <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="text-center">
          <div class="footer-info">
            <h3>Ghost</h3>
            <p>University of kinshasa <br> D.R.Congo<br>
            <strong>Phone:</strong> +243828966375<br>
            <strong>Email:</strong> djobambu77@gmail.com<br></p>
            
            <div class="social-links mt-3">
              <a href="https://www.facebook.com/djo.bambu/"><i class="bi-facebook"></i></a>
              <a href="https://www.instagram.com/mr_djo_bambu/"><i class="bi-instagram"></i></a>
              <a href="https://www.twitter.com/@djo bambu/"><i class="bi-twitter"></i></a>
              <a href="#"><i class="bi-skype"></i></a>
              <a href="#"><i class="bi-linkedin"></i></a>
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
  </div>
  <div class="container text-center">
    <div class="copyright">
      &copy; copyright <strong>Ghost</strong> . All Right Reserved.
    </div>
    <div class="credits">
      Designed by <a href="#">Ghost</a>
    </div>
  </div>
</footer><!--end of footer section-->
</template>

<script>
export default {

}
</script>

<style scoped>
#footer{
    background: #2c4964;
    padding: 0 0 30px 0;
    color: #fff;
    font-size: 14px;
}
#footer .footer-top{
    background: #2c4964;
    padding: 60px 0 30px 0;
}
#footer .footer-top .footer-info{
    margin-bottom: 30px;
}
#footer .footer-top .footer-info h3{
    font-size: 24px;
    margin: 0 0 20px 0;
    padding: 2px 0 2px;
    line-height: 1;
    font-weight: 700;
}
#footer .footer-top .footer-info p{
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 0;
    font-family: "roboto" ,sans-serif;
}
#footer .footer-top .social-links a{
    font-size: 18px;
    display: inline-block;
    background: #1977cc;
    color: #fff;
    line-height: 1;
    padding: 8px 0;
    margin-right: 4px;
    border-radius: 4px;
    text-align: center;
    width: 36px;
    height: 36px;
}
#footer .footer-top .social-links a:hover{
    background: #65c9cd;
    text-decoration: none;
}
</style>