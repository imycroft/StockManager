<template>
  <div class="non-consumable">
    <h1 class="headline grey--text">Customers</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(suplier, index) in supliers" :key="index">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-3">
              <v-avatar :color="suplier.color" size="100">
                <span class="white--text headline">{{ suplier.avatar }}</span>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ suplier.name }}</div>
              <div class="grey--text">{{ suplier.fonction }}</div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn flat color="primary">
                <v-icon small left>perm_identity</v-icon>
                <span>Check delivries</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      supliers: [
        { name: "HAFID Walid", fonction: "Secretariat Chief", avatar:'S', color: "red" },
        { name: "LAGGOUNE Toufik", fonction: "Human Resources Department Chief", avatar:'HRD', color: "blue" },
        { name: "FENDI Chouaib", fonction: "Staff Directorate Chier", avatar:'SDC', color: "green" },
        { name: "BRAHIM Abderrahmane", fonction: "After Sales Service Director", avatar:'ASS', color: "orange" }
      ]
    };
  }
};
</script>
