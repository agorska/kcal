/* eslint-disable */
<template>
  <div class="home">
    <input
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
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import itemNutritions from '@/components/Item-nutritions.vue';
import eaten from '@/components/Eaten.vue';

export default {
  name: 'home',
  components: {
    itemNutritions,
    eaten,
  },
  data() {
    return {
      search: '',
      results: [],
      pickedResult: '',
      allDetails: [],
      resultsDetailsAllIds: '',
      filteredIds: [],
      resultsWantedIds: [
        203, 204, 269, 255, 301, 303, 304, 306, 307, 309, 318, 328, 401, 415, 418, 430, 573
      ],
    };
  },
  methods: {
    handleInput: debounce(function () {
      axios({
        method: 'get',
        url: `https://trackapi.nutritionix.com/v2/search/instant?query=${this.search}`,
        headers: {
          'x-app-id': '740969e3',
          'x-app-key': '04d25b3db76aca93f78186a4987563e8',
          'x-remote-user-id': '0',
        },
      }).then((response) => {
        this.results = (response.data.common);
      }).catch((error) => {
        console.log(error);
      });
    }, 500),
    filterResults() {
      // filter for just wanted results
      const arr = [];
      this.resultsDetailsAllIds = this.allDetails[0].full_nutrients;
      for (let i = 0; i < this.resultsWantedIds.length; i += 1) {
        for (let j = 0; j < this.resultsDetailsAllIds.length; j += 1) {
          if (this.resultsDetailsAllIds[j].attr_id === this.resultsWantedIds[i]) {
            arr.push(this.resultsDetailsAllIds[j]);
          }
        }
      }
      this.filteredIds = arr;
    },
    resultsDetails(el) {
      this.pickedResult = el;
      axios({
        method: 'post',
        url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
        headers: {
          'x-app-id': '740969e3',
          'x-app-key': '04d25b3db76aca93f78186a4987563e8',
          'x-remote-user-id': '0',
          'Content-Type': 'application/json',
        },
        data: {
          query: this.pickedResult,
        },
      }).then((response) => {
        this.allDetails = (response.data.foods);
        this.filterResults();
        //  clear list of results after click
        this.results = [];
      }).catch((error) => {
        console.log(error);
      });
    },
    // clear list of details when deleting word in input
    detectDeleting() {
      this.search === '' ? this.filteredIds = '' : this.filteredIds;
    },
  },
};
</script>
