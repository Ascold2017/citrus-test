<template>
  <article class="card">
    <div class="card__details">
      <div class="card__avatar">
        <img :src="card.picture.large" class="card__avatar-img">
      </div>
      <div class="card__title">
        {{ currentField.title }}
      </div>
      <div class="card__value">
        {{ currentField.value }}
      </div>
    </div>
    <ul class="card__values-list">
      <li
        v-for="field in fields"
        :key="field.id"
        @mouseover="activeField = field.id"
        :data-label="field.label"
        :class="{ 'active': activeField === field.id }"
        class="card__values-list-item"
      />
    </ul>
  </article>
</template>

<script>
export default {
  props: {
    card: { type: Object, default: () => ({}) }
  },
  data () {
    return {
      activeField: 1
    }
  },
  computed: {
    fields () {
      const date = new Date(this.card.dob.date)
      const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      return [
        { id: 1, title: 'Hi, my name is', value: `${this.card.name.first} ${this.card.name.last}`, label: 'name' },
        { id: 2, title: 'My email is', value: `${this.card.email}`, label: 'email' },
        { id: 3, title: 'My birthday is', value: `${dateString}`, label: 'dob' }
      ]
    },
    currentField () {
      return this.fields.find(f => f.id === this.activeField)
    }
  }
}
</script>

<style lang="scss">
.card {
  position: relative;
  padding: 20px 0;
  width: 100%;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 1px rgba(0,0,0,.5);
  overflow: hidden;
  text-align: center;
  z-index: 5;
  margin-bottom: 30px;
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 115px;
    top: 0;
    background: #f9f9f9;
    border-bottom: 1px solid rgba(0,0,0,.15);
    z-index: -1;
  }
  &__avatar {
    position: relative;
    background: #fff;
    padding: 5px;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-bottom: 30px;
    border: 1px solid rgba(0,0,0,.25);
    left: 50%;
    transform: translateX(-50%);
  }
  &__avatar-img {
    max-width: 100%;
    height: auto;
    display: block;
    overflow: hidden;
    border-radius: 50%;
  }
  &__title {
    color: #999;
    font-size: 18px;
  }

  &__value {
    color: #2c2e31;
    font-size: 38px;
    margin: 5px;
  }

  &__values-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__values-list-item {
    cursor: pointer;
    display: block;
    width: 40px;
    height: 48px;
    margin: 20px;
    background-image: url(~@/assets/card_icons.png);
    background-size: 378px;
    background-position-y: -48px;
    transition: all .25s ease-out;
    &[data-label=name] {
      background-position: 0 -48px;
       &.active {
        background-position: 0 0;
      }
    }
    &[data-label=email] {
      background-position: -68px -48px;
      &.active {
        background-position: -68px 0;
      }
    }
    &[data-label=dob] {
      background-position: -135px -48px;
      &.active {
        background-position: -135px 0;
      }
    }
  }
}
</style>
