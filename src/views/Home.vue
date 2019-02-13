<template>
  <div class="home-page">
    <tabs>
      <tab name="add food" :selected="true" class="home-page__tab">
        <addFood></addFood>
      </tab>
      <tab name="summary" class="home-page__tab">
        <div class="charts-container">
          <eatenList></eatenList>
          <charts></charts>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<style lang="stylus">
.home-page
  height 100vh
  &__tab
    box-sizing border-box
    width calc(100% - (var(--edge-space)*2))
    min-height 100vh
    padding 10px
    color #000
    background-color #fff
    border-radius 10px
    margin 20px auto 20px auto

.charts-container
  @media screen and (min-width: 900px)
    display grid
    grid-template-columns 30vw 1fr
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
