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
            <li class="app-icon"><i class="material-icons">fastfood</i></li>
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
    color #000
    margin 0 10px
    height 25px
    padding 5px 10px
    border-radius 5px 5px 0 0
    &:first-child
      margin 0 5px 0 var(--edge-space)

.app-icon
  position absolute
  right var(--edge-space)
  color #000
  .material-icons
    font-size 2em

.selectedTab
  font-weight bold
  color #fff
  background-color #212121
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
