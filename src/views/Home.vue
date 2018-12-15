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
      <nutri-details :nutritionDetails="fullNutritions"></nutri-details>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';
import nutriDetails from '@/components/Nutri-details';

export default {
  name: 'home',
  components: {
    nutriDetails,
  },
  data() {
    return {
      searchFood: '',
      results: [],
      getNutritions: '',
      fullNutritions: [],
    };
  },
  methods: {
    handleInput: debounce(function () {
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
      }).catch((error) => {
        console.log(error);
      });
    },
  },
};
</script>
