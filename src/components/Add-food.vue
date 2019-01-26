<template>
  <div>
    <search v-on:getList="display($event)"></search>
    <resultsList :searchList="searchList"></resultsList>
  </div>
</template>

<script>
import search from '@/components/Search.vue';
import resultsList from '@/components/Results-list.vue';

export default {
  name: 'addFood',
  components: {
    search,
    resultsList,
  },
  data() {
    return {
      searchList: [],
    };
  },
  methods: {
    display: function(updatedlist) {
      this.searchList = updatedlist;
    },
  },
};
</script>
