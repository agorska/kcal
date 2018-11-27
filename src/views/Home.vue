<template>
  <div class="home">
    <input type="text" id="searchFood" name="searchFood" class="home-search__input" v-model="searchFood" @input="handleInput"/>
    <ul>
      <li v-for="item in results" :key="item.food_name">{{ item.food_name }}</li>
    </ul>
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
  },
};
</script>
