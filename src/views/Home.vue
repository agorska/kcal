<template>
  <div class="container">
    <addFood></addFood>
    <eatenList></eatenList>
    <charts></charts>
  </div>
</template>

<script>

import addFood from '@/components/Add-food.vue';
import eatenList from '@/components/Eaten-list.vue';
import charts from '@/components/Charts.vue';

export default {
  name: 'home',
  components: {
    addFood,
    eatenList,
    charts,
  },
};
</script>
