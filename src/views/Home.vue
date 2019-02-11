<template>
  <div class="home-page">
    <tabs>
      <tab name="add food" :selected="true" class="home-page__tab">
        <addFood></addFood>
      </tab>
      <tab name="summary" class="home-page__tab">
        <eatenList></eatenList>
        <charts></charts>
      </tab>
    </tabs>
  </div>
</template>

<style lang="stylus">
.home-page
  height 100vh
  &__tab
    background-color: #212121
</style>


<script>
import addFood from '@/components/Add-food.vue';
import eatenList from '@/components/Eaten-list.vue';
import charts from '@/components/Charts.vue';

import tabs from '@/components/Tabs.vue';
import tab from '@/components/Tab.vue';

export default {
  name: 'home',
  components: {
    addFood,
    eatenList,
    charts,
    tabs,
    tab,
  },
};
</script>
