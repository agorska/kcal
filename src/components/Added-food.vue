<template>
    <div class="added-food">
      <div v-for="(item, index) in eatenList" :key="item.id">
        <ul>
          <li>{{ item }}</li>
          <input type="button" value="-" class="default-button" @click="removeItem(index)"/>
        </ul>
      </div>
    </div>
</template>

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
