<template>
  <div class="pagination">
    <button @click="loadPrev" v-if="currentPage !== 1" class="pagination__button">
      Предыдущая
    </button>
    <button @click="loadNext" class="pagination__button">
      Следующая
    </button>
    <button @click="preloadNext" class="pagination__button">
      Подгрузить еще {{ counts }}
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    currentPage () {
      return this.$store.state.page
    },
    counts () {
      return this.$store.state.counts
    }
  },
  methods: {
    loadPrev () {
      this.$store.dispatch('getUsers', { direction: 'prev' })
    },
    loadNext () {
      this.$store.dispatch('getUsers', { direction: 'next' })
    },
    preloadNext () {
      this.$store.dispatch('getUsers', { direction: 'next', isAppend: true })
    }
  }
}
</script>

<style lang="scss">
.pagination {
  padding: 20px;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
  margin-bottom: 30px;
  display: flex;
  &__button {
    font-size: 20px;
    padding: 5px;
    margin-right: 10px;
    &:hover {
      box-shadow: 0 0 1px rgba(0,0,0,.5);
    }
  }
}

</style>
