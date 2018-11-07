<template>
  <div class="wrapper">
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import bus from "./bus";
export default {
  data() {
    return {
      tagsList: [],
      collapse: false
    };
  },
  components: {
    Navbar,
    Sidebar
  },
  created() {
    bus.$on("collapse", msg => {
      this.collapse = msg;
    });
  }
};
</script>
