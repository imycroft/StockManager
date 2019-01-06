<template>
  <v-app class="primary lighten-4">
    <v-content class="mx-4 mb-4">
      <Navbar/>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
