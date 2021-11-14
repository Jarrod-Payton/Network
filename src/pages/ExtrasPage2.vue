<template>
  <div class="row">
    <div class="col-3 text-center">
      <router-link :to="{ name: 'Extras' }">
        <button class="btn btn-outline-primary m-2 p-3">
          Back to the other page
        </button>
      </router-link>
      <router-link :to="{ name: 'Home' }">
        <button class="btn btn-outline-danger m-2 p-3">
          Back to the right side up meme
        </button>
      </router-link>
    </div>
    <div class="col-6">
      <h1 class="text-center rotated p-2">Bottom Text</h1>
      <img class="dixon2" src="Dixon.jpg" alt="" />
      <h1 class="text-center rotated p-2">
        Did you think you could escape that easily?
      </h1>
    </div>
    <div class="col-3"></div>
  </div>
</template>
<script>
export default {
  setup() {},
};
</script>
<style scoped>
.dixon2 {
  height: 100vh;
  transform: rotate(180deg);
}
.rotated {
  transform: rotate(180deg);
}
</style>
