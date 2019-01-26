<template>
    <div>
        <ul v-for="item in filteredIds" :key="item.id">
          <li> {{ translate(item.attr_id) }} {{ item.value }}</li>
        </ul>
    </div>
</template>

<script>
import { translateIds } from '@/functions';

export default {
  name: 'itemNutritions',
  props: ['filteredIds'],
  methods: {
    translate(el) {
      return translateIds(el);
    },
  },
};
</script>
