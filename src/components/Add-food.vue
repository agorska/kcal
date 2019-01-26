<template>
  <div>
    <search v-on:getList="display($event)"></search>
    <resultsList :searchList="searchList" v-on:pickitem="addToEatenList($event)"></resultsList>
    <addAmount :searchList="searchList"></addAmount>
    <div>{{ foodEaten }}</div>
  </div>
</template>

<script>
import search from '@/components/Search.vue';
import resultsList from '@/components/Results-list.vue';
import addAmount from '@/components/Add-amount.vue';

export default {
  name: 'addFood',
  components: {
    search,
    resultsList,
    addAmount,
  },
  data() {
    return {
      searchList: [],
      foodEaten: [],
      foodItemDetails: [],
    };
  },
  methods: {
    display(updatedlist) {
      this.searchList = updatedlist;
    },
    addToEatenList(pickeditem) {
      this.foodEaten = pickeditem;
    },
  },
};
</script>
