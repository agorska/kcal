<template>
  <section class="eaten-list">
    <h2>Eaten list</h2>
    <div v-for="(item, index) in eatenList" :key="item.id">
      <ul class="eaten-list__list">
        <li class="eaten-list__list--wrap">{{ item }}
          <input type="button" value="-" class="default-button round" @click="removeItem(index)"/>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="stylus">
.eaten-list
  display flex
  flex-direction column
  align-items center
  &__list
    padding 0
    &--wrap
      display flex
      align-items center
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
