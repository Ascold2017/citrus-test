<template>
  <div class="container">
    <ControlPanel />
    <CardsList />
    <Pagination />
  </div>
</template>

<script>
import ControlPanel from '@/components/ControlPanel'
import CardsList from '@/components/CardsList'
import Pagination from '@/components/Pagination'
export default {
  components: {
    ControlPanel,
    CardsList,
    Pagination
  }
}
</script>
