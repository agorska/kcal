<template>
    <div>
      <div v-for="(value, key, index) in sumObjectsByKey(eatenDetailedList)" :key="value.id">
        <div v-if="index >= 1">{{ key }} {{ value }}</div>
      </div>
      <div>{{eatenDetailedList}}</div>
    </div>
</template>

<script>
export default {
  name: 'detailsData',
  props: ['eatenDetailedList'],
  methods: {
    sumObjectsByKey(objs) {
      return objs.reduce((a, b) => {
        for (const k in b) {
          if (b.hasOwnProperty(k)) {
            a[k] = (a[k] || 0) + b[k];
          }
        }
        return a;
      }, {});
    },
  },
};
</script>
