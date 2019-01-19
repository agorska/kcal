<template>
    <div>
      <div v-for="(value, key) in sumObjectsByKey(toCalc)" :key="value.id">
        {{ key }} {{ value }}
      </div>
    </div>
</template>

<script>
export default {
  name: 'calculator',
  props: ['predictor', 'toCalc'],
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
