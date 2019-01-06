<template>
    <div>
        <ul v-for="item in filteredIds" :key="item.id">
            <li> {{ translateIds(item.attr_id) }} {{ item.value }} </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'nutritions',
  props: ['allDetails', 'filteredIds'],
  methods: {
    translateIds: function (el) {
      switch (el) {
        case 301:
          return 'Calcium ';
        case 303:
          return 'Iron ';
        case 304:
          return 'Magnesium ';
        case 306:
          return 'Potassium ';
        case 307:
          return 'Sodium ';
        case 309:
          return 'Zinc ';
        case 318:
          return 'Vit. A ';
        case 328:
          return 'Vit. D ';
        case 401:
          return 'Vit. C ';
        case 415:
          return 'Vit. B6 ';
        case 418:
          return 'Vit. B12 ';
        case 430:
          return 'Vit. K ';
        case 573:
          return 'Vit. E ';
      }
    },
  },
};
</script>
