<template>
  <router-view></router-view>
</template>

<script>
export default {};
</script>
<style>
label {
  font-size: small;
}
/* Media query pour les écrans de petite taille */
@media screen and (max-width: 768px) {
  .btn {
    font-size: 14px;
  }
}

/* Media query pour les écrans de taille encore plus petite */
@media screen and (max-width: 480px) {
  .btn {
    font-size: 12px;
  }
}
</style>
