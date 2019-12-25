<template>
  <section class="control-panel">
    <div class="control-panel__field">
      <label class="control-panel__field-label" for="counts">Кол-во записей: </label>
      <input id="counts" ref="countsInput" v-model="counts" type="number">
      <span v-show="countsError" class="control-panel__field-error">{{ countsError }}</span>
    </div>
    <div class="control-panel__field">
      <label class="control-panel__field-label">Гендер:</label>
      <label class="control-panel__field-label"><input v-model="gender" type="radio" value="male">М</label>
      <label class="control-panel__field-label"><input v-model="gender" type="radio" value="female">Ж</label>
      <label class="control-panel__field-label"><input :value="null" v-model="gender" type="radio">Любой</label>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      countsError: ''
    }
  },
  computed: {
    counts: {
      get () {
        return this.$store.state.counts
      },
      set (value) {
        this.updateCounts(Number(value))
      }
    },
    gender: {
      get () {
        return this.$store.state.gender
      },
      set (value) {
        this.updateGender(value)
      }
    }
  },
  methods: {
    updateCounts (value) {
      this.$store.commit('SET_COUNTS', value || '')
      if (!value || value > 20 || value < 1 || (value ^ 0) !== value) {
        this.countsError = 'Допустимы целые числа от 1 до 20'
      } else {
        this.countsError = ''
        this.$store.dispatch('getUsers', {})
      }
    },
    updateGender (value) {
      this.$store.commit('SET_GENDER', value)
      this.$store.dispatch('getUsers', {})
    }
  }
}
</script>

<style lang="scss">
.control-panel {
  padding: 20px;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
  margin-bottom: 30px;
  display: flex;
  &__field {
    flex: 1 1 50%;
  }
  &__field-label {
    color: #2c2e31;
    font-size: 30px;
  }
  &__field-error {
    color: red;
    font-size: 12px;
  }
}
</style>
