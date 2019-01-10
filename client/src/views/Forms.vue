<template>
  <div class="new-command">
    <h1 class="headline grey--text">Forms</h1>
    <v-container class="my-3">
      <v-layout row justify-left>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-btn depressed slot="activator" color="primary" dark>New command</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">New command form</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6>                   
                    <v-select :items="items" label="Designation*" required></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Amount" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Note" hint="Type some notes here"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

 <v-dialog v-model="dialog" persistent max-width="600px">
          <v-btn flat outline slot="activator" color="primary" dark>New delivery</v-btn>
          <v-card>
            <v-card-title>
              <span class="headline">New delivery form</span>
            </v-card-title>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12 sm6>
                    <v-select :items="items" label="Designation*" required></v-select>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Amount" required></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm6 md4>
                    <v-text-field label="Note" hint="Type some notes here"></v-text-field>
                  </v-flex>
                </v-layout>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>

         
        </v-dialog>

      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"] //From backend
  })
};
</script>
