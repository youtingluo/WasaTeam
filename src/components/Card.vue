<template>
  <div class="flex">
    <div class="card" v-for="item in people" :key="item.name">
      <h2 v-if="item.name">{{ item.name }}</h2>
      <h3 v-if="item.city">{{ item.city }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["people"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex {
  display: flex;
}
</style>
