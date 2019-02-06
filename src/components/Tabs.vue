<template>
  <div>
    <div class="tabs-wrap">
        <ul class="tab-list">
            <li
              v-for="item in tabItems"
              :key="item.id"
              class="tab-single"
              :class="{ selectedTab: item.isActive }"
              @click="selectTab(item)"
            > {{ item.name }}
            </li>
        </ul>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="stylus">
.tab
  &-list
    background-color var(--primary)
    list-style-type none
    display flex
    align-items flex-end
    height 50px
    padding 0
    margin 0
  &-single
    background-color #d8d8d8
    margin 0 10px
    height 25px
    padding 5px 10px
    border-radius 5px 5px 0 0
    &:first-child
      margin 0 5px 0 3%

.selectedTab
  font-weight bold
  background-color #fff
</style>

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
