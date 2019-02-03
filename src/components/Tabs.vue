<template>
  <div>
    <div>
        <ul>
            <li
              v-for="item in tabItems"
              :key="item.id"
              :class="{ selectedTab: item.isActive }"
              @click="selectTab(item)"
            > {{ item.name }}
            </li>
        </ul>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabs',
  data() {
    return {
      tabItems: [],
    };
  },
  mounted() {
    this.tabItems = this.$children;
  },
  methods: {
    selectTab(el) {
      this.tabItems.forEach(item => {
        item.isActive = (item == el)
      });
    }
  },
};
</script>
