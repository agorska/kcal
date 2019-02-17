<template>
  <section class="search-food">
    <h1>Calc daily nutritions</h1>
    <label for="searchFood" class="default-input">
      <div class="label-wrap"><i class="material-icons">search</i>Search</div>
        <input
          type="text"
          id="searchFood"
          name="searchFood"
          class="default-input__input center"
          :class="{ inputEmpty: isSearchEmpty }"
          v-model='search'
          @input="wrapHandleInput()"
          @keyup="detectDeleting()"
          @keyup.delete="isLoading = false"
          placeholder="Write a product name"
        />
    </label>
    <div v-if="isSearchEmpty" class="error-empty-field">Search for food!</div>
    <div v-if="isLoading" class="spinner"></div>
  </section>
</template>

<style lang="stylus">
.label-wrap
  display flex
  align-items center
  justify-content center

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
import { EventBus } from './event-bus';
import { debounce } from 'lodash';
import axios from 'axios';

export default {
  name: 'search',
  props: ['value'],
  data() {
    return {
      search: '',
      isLoading: false,
      isSearchEmpty: false,
    };
  },
  mounted() {
    EventBus.$on('searchEmpty', () => {
      this.isSearchEmpty = true;
    });
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
        this.$emit('emptyInput');
      }
    },
  },
};
</script>
