<template>
  <div>
    <search v-on:getList="display($event)" v-on:clearList="clearList()"></search>
    <resultsList :searchList="searchList" v-on:pickitem="addToEatenList($event)"></resultsList>
    <addAmount :searchList="searchList" :foodEaten="foodEaten"></addAmount>
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
      foodEaten: '',
      foodItemDetails: [],
    };
  },
  methods: {
    display(updatedlist) {
      this.searchList = updatedlist;
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
