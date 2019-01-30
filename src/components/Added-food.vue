<template>
    <div>
      <div v-for="item in eatenList" :key="item.id">
        <ul>
          <li>{{ item }}</li>
        </ul>
      </div>
    </div>
</template>

<script>
import { EventBus } from './event-bus.js';

export default {
  name:'addedFood',
  data() {
    return {
      eatenList: [],
    };
  },
  mounted() {
    EventBus.$on('toEatenList', eatenList => {
      this.eatenList = eatenList;
    });
  },
};
</script>
