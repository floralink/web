<template>
  <button id="button-top" title="Go to top" @click="goToTop">nach oben</button>
</template>

<script>
export default {
  mounted() {
    const buttonTop = document.getElementById("button-top");
    window.onscroll = () => {
      buttonTop.style.display =
        document.documentElement.scrollTop > 100 ? "block" : "none";
    };
  },
  methods: {
    goToTop() {
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
#button-top {
  display: none;
  position: fixed;
  bottom: 2vw;
  right: 2vw;
  z-index: 99;
  padding: 15px;

  background-color: rgba(50, 50, 50, 0.8);
  color: white;
  cursor: pointer;
  border: none;
}

#button-top:hover {
  background-color: #555;
}
</style>
