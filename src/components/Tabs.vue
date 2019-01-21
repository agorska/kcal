<template>
    <div>
        <ul>
            <li v-for="item in navItemsArray"
              :key="item.id"
              :class="{ selectedMenuItem: item.isActive }">
              <a @click="selectMenuItem(item)">{{ item.name }}</a>
            </li>
        </ul>
        <slot></slot>
    </div>
</template>

<style lang="stylus">
.selectedMenuItem
    color red
</style>

<script>
export default {
  name: 'tabs',
  data() {
    return {
      navItemsArray: [],
    };
  },
  mounted() {
    this.navItemsArray = this.$children;
  },
  methods: {
    selectMenuItem(el) {
      this.navItemsArray.forEach(item => {
        item.isActive = (item === el);
      });
    },
  },
};
</script>
