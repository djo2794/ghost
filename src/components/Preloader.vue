<template>
  <div class="preloader">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
    <i class="bi bi-arrow-up-short"></i>
  </a>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.back-to-top{
    position: fixed;
    visibility: hidden;
    opacity: 0;
    right: 15px;
    bottom: 15px;
    z-index: 996;
    background: #1977cc;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    transition: all 0.4s;
}
.back-to-top i{
    font-size: 28px;
    color: #fff;
    line-height: 0;
}
.back-to-top:hover{
    background: #1977cc;
    color: #fff;
}
.back-to-top.active{
    visibility: visible;
    opacity: 1;
}
</style>