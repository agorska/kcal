<template>
  <div class="home">
    <input
      type="text"
      id="searchFood"
      name="searchFood"
      class="home-search__input"
      v-model="searchFood"
      @input="handleInput"
      placeholder="Write product name"
    />
    <ul>
       <li v-for="item in results" :key="item.food_name">
         <a href="#" v-on:click="getNutrition(item.food_name)">{{ item.food_name }}</a>
        </li>
    </ul>
    <div v-for="item in fullNutritions" :key="item.id">
      <div>{{ filteredArr }}</div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';

export default {
  name: 'home',
  data() {
    return {
      searchFood: '',
      results: [],
      getNutritions: '',
      fullNutritions: [],
      allNutri: '',
      filteredArr: [],
    };
  },
  methods: {
    handleInput: debounce (function () {
      axios({
        method: 'get',
        url: `https://trackapi.nutritionix.com/v2/search/instant?query=${this.searchFood}`,
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
    getNutrition: function (el) {
      this.getNutritions = el;
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
          query: this.getNutritions,
        },
      }).then((response) => {
        this.fullNutritions = (response.data.foods);
        console.log(response.data.foods);
        // filter for wanted nutrients
        const arr = [];
        const nutriIds = [301, 303, 304, 306, 307, 309, 318, 328, 401, 415, 418, 430, 573];
        this.allNutri = this.fullNutritions[0].full_nutrients;
        for (let i = 0; i < nutriIds.length; i++) {
          for (let j = 0; j < this.allNutri.length; j++) {
            if (this.allNutri[j].attr_id === nutriIds[i]) {
              arr.push(this.allNutri[j]);
            }
          }
        }
        this.filteredArr = arr;
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>
