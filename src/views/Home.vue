<template>
  <div class="container">
    <tabs>
      <tab name="add food" :selected="true">
        <addFood></addFood>
      </tab>
      <tab name="summary">
        <eatenList></eatenList>
        <charts></charts>
      </tab>
    </tabs>
  </div>
</template>

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
