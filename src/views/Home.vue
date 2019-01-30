<template>
  <div class="container">
    <addFood></addFood>
    <eatenList></eatenList>
    <charts></charts>

  <!--  <input
      type="text"
      id="searchFood"
      name="searchFood"
      class="home-search__input"
      v-model="search"
      @input="handleInput()"
      @keyup="detectDeleting"
      placeholder="Write a product name"
    />
    <ul>
       <li v-for="item in results" :key="item.food_name">
         <a href="#"
         v-on:click="
           resultsDetails(item.food_name)"
         > {{ item.food_name }}
         </a>
       </li>
    </ul>
    <itemNutritions
      :filteredIds = "filteredIds"
    />
    <eaten
      :filteredIds = "filteredIds"
      :allDetails = "allDetails"
    />
      -->
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
  // methods: {
  //   filterResults() {
  //     // filter for just wanted results
  //     const arr = [];
  //     this.resultsDetailsAllIds = this.allDetails[0].full_nutrients;
  //     for (let i = 0; i < this.resultsWantedIds.length; i += 1) {
  //       for (let j = 0; j < this.resultsDetailsAllIds.length; j += 1) {
  //         if (this.resultsDetailsAllIds[j].attr_id === this.resultsWantedIds[i]) {
  //           arr.push(this.resultsDetailsAllIds[j]);
  //         }
  //       }
  //     }
  //     this.filteredIds = arr;
  //   },
  //   // clear list of details when deleting word in input
  //   detectDeleting() {
  //     this.search === '' ? this.filteredIds = '' : this.filteredIds;
  //   },
  // }, */
};
</script>
