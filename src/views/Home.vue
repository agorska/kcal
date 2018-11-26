<template>
  <div class="home">
    <input type="text" id="searchFood" name="searchFood" class="home-search__input" 
      v-model="searchFood"
      @input="handleInput"
      />
  </div>
</template>

<script>
import { debounce } from 'lodash.debounce';


export default {
  name: 'home',
  data() {
    return {
      searchFood: '',
    };
  },
  methods: {
    handleInput() {
      console.log(this.searchFood);
    },
  },
};
</script>
