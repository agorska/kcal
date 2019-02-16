<template>
  <div class="home-page">
    <tabs>
      <tab name="add food" :selected="true" class="home-page__tab">
        <section class="add-food">
          <search v-on:getList="display($event)" v-on:emptyInput="clearList()"></search>
          <resultsList :searchList="searchList" v-on:pickitem="addToEatenList($event)"></resultsList>
          <addAmount
            :searchList="searchList"
            :foodEaten="foodEaten"
          >
          </addAmount>
        </section>
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
    box-shadow 0 0 1em rgba(0, 0, 0, 0.3)

.charts-container
  @media screen and (min-width: 900px)
    display grid
    grid-template-columns 30vw 1fr
</style>


<script>
import search from '@/components/Search.vue';
import resultsList from '@/components/Results-list.vue';
import addAmount from '@/components/Add-amount.vue';

import eatenList from '@/components/Eaten-list.vue';
import charts from '@/components/Charts.vue';

import tabs from '@/components/Tabs.vue';
import tab from '@/components/Tab.vue';

export default {
  name: 'home',
  components: {
    search,
    resultsList,
    addAmount,
    eatenList,
    charts,
    tabs,
    tab,
  },
  data() {
    return {
      searchList: [],
      foodEaten: '',
      foodItemDetails: [],
    };
  },
  methods: {
    display(updatedlist) {
      this.searchList = updatedlist;
      console.log(this.search);
    },
    addToEatenList(pickeditem) {
      this.foodEaten = pickeditem;
      this.$emit('toEatenList', this.foodEaten);
    },
    clearList() {
      this.searchList = '';
    },
  },
};
</script>
