<template>
  <section class="eaten-list">
    <addedFood></addedFood>
  </section>
</template>

<script>
import addedFood from '@/components/Added-food.vue';

export default {
  name: 'eatenList',
  components: {
    addedFood,
  },
};
</script>