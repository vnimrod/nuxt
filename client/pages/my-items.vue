<template>
  <div>
   <MyItem 
    v-for="item in myRentals"
    :key="item.id"
    :item="item"
   />
  </div>
</template>

<script>
import { mapState } from 'vuex'

// no-nav is the no-nav.vue file from layouts(that we created), we define it because we dont want to display the nav in this page
  export default {
    layout: 'no-nav',
    computed: {
      ...mapState(['myRentals'])
    }
  }
</script>

<style scoped>

</style>