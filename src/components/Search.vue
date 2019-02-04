<template>
  <div class="search-food">
    <h1>Calc daily nutritions</h1>
    <label for="searchFood" class="default-input">Search for food
      <input
        type="text"
        id="searchFood"
        name="searchFood"
        class="default-input__input"
        v-model='search'
        @input="handleInput()"
        @keyup="detectDeleting()"
        placeholder="Write a product name"
      />
    </label>
  </div>
</template>

<script>
import { debounce } from 'lodash';
import axios from 'axios';

export default {
  name: 'search',
  props: ['value'],
  data() {
    return {
      search: '',
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
        const results = (response.data.common);
        this.$emit('getList', results);
      }).catch((error) => {
        console.log(error);
      });
    },
    500),
    detectDeleting() {
      if (this.search === '') {
        this.$emit('clearList');
      }
    },
  },
};
</script>
