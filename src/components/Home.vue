<template>
  <div>
    <p>home</p>
    <h1>{{ counter }}</h1>
    <h1 @click="handleIncrement">{{ counter2 }}</h1>

      <swiper>
        <swiper-slide>1</swiper-slide>
        <swiper-slide>2</swiper-slide>
        <swiper-slide>3</swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper, SwiperSlide
  },
  computed: {
    counter() {
      return this.$store.state.counter
    }
  },
  data() {
    return {
      counter2: 5
    }
  },
  asyncData({ store }) {
    return store.dispatch('change')
  },
  methods: {
    handleIncrement() {
      this.counter2++;
    }
  }
}
</script>

<style scoped>
p {
  color: coral;
}

.swiper-container /deep/ {
  width: 100vw;
  height: 30vw;
}
</style>
