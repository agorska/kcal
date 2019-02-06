<template>
    <div class="added-food">
      <h2>Eaten list</h2>
      <div v-for="(item, index) in eatenList" :key="item.id">
        <ul class="added-food__list">
          <li class="added-food__list--wrap">{{ item }}
            <input type="button" value="-" class="default-button round" @click="removeItem(index)"/>
          </li>
        </ul>
      </div>
    </div>
</template>

<style lang="stylus">
.added-food
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
  name: 'addedFood',
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
