<template>
  <div>
    <div v-for="item in searchList" :key="item.id">
      <a href="#"> {{ item.food_name }} </a>
    </div>
  </div>
</template>

<script>
export default {
  name:'resultsList',
  props: ['searchList'],
};
</script>
