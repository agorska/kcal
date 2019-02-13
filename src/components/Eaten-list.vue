<template>
  <section class="eaten-list">
    <h2>Eaten list</h2>
      <ul class="eaten-list__wrap">
        <li class="eaten-list__item" v-for="(item, index) in eatenList" :key="item.id">
          <input type="button" value="-" class="default-button round" @click="removeItem(index)"/>
          {{ item }}
        </li>
      </ul>
  </section>
</template>

<style lang="stylus">
.eaten-list
  box-sizing border-box
  display flex
  flex-direction column
  align-items center
  background-color #f5f5f5
  border-bottom 3px dashed #bdbdbd
  @media screen and (min-width: 900px)
    border-bottom inherit
    border-right 3px dashed #bdbdbd
    margin-right 20px
  &__item
    display flex
    align-items center
    margin 10px 0
  &__wrap
    padding 0
      
</style>

<script>
import { EventBus } from './event-bus';

export default {
  name: 'eatenList',
  data() {
    return {
      eatenList: [],
    };
  },
  mounted() {
    EventBus.$on('toEatenList', (eatenList) => {
      this.eatenList = eatenList;
    });
  },
  methods: {
    removeItem(n) {
      this.eatenList.splice(n, 1);
      EventBus.$emit('updateCharts');
    },
  },
};
</script>
