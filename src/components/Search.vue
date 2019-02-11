<template>
  <section class="search-food">
    <h1>Calc daily nutritions</h1>
    <label for="searchFood" class="default-input">Search
      <div class="input-wrap">
        <i class="material-icons">search</i>
        <input
          type="text"
          id="searchFood"
          name="searchFood"
          class="default-input__input search"
          v-model='search'
          @input="wrapHandleInput()"
          @keyup="detectDeleting()"
          @keyup.delete="isLoading = false"
          placeholder="Write a product name"
        />
      </div>
    </label>
    <div v-if="isLoading" class="spinner"></div>
  </section>
</template>

<style lang="stylus">
.input-wrap
  display flex

.spinner
  width 50px
  height 50px
  margin-top 40px
  border 4px #d8d8d8 solid
  border-top 4px var(--primary) solid
  border-radius 50%
  animation animateSpinner .6s infinite linear

@keyframes animateSpinner {
	from { transform: rotate(0deg); }
	to { transform: rotate(359deg); }
}
</style>

<script>
import { debounce } from 'lodash';
import axios from 'axios';

export default {
  name: 'search',
  props: ['value'],
  data() {
    return {
      search: '',
      isLoading: false,
    };
  },
  methods: {
    wrapHandleInput() {
      this.isLoading = true;
      this.handleInput();
    },
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
        this.isLoading = false;
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
