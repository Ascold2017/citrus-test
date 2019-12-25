<template>
  <section class="cards-list">
    <CardsItem v-for="user in users" :key="user.id" :card="user" />
  </section>
</template>

<script>
import CardsItem from '@/components/CardsItem'
export default {
  components: { CardsItem },
  computed: {
    users () {
      return this.$store.state.users
    }
  }
}
</script>

<style>

</style>
