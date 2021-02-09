<template>
  <div>
    <p>home</p>
    <h1>{{ counter }}</h1>
    <h1 @click="handleIncrement">{{ counter2 }}</h1>
  </div>
</template>

<script>
export default {
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
