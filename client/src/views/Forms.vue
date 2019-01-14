<template>
  <div class="new-command">
    <h1 class="headline grey--text">Forms</h1>
    <v-container class="my-3">
      <v-layout row justify-left>

        <!-- New Command -->
        <v-dialog v-model="dialogTable" persistent max-width="800px">
          <v-btn depressed slot="activator" color="primary" dark>New command</v-btn>
          <v-toolbar flat color="white">
            <v-toolbar-title>New Command</v-toolbar-title>
            <v-divider class="mx-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.number" label="N°"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.designation" label="Designation"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.serialNumber" label="Serial Number"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.amount" label="Amount"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.note" label="Note"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table :headers="headers" :items="items" class="elevation-1">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.number }}</td>
              <td class="text-xs-left">{{ props.item.designation }}</td>
              <td class="text-xs-left">{{ props.item.serialNumber }}</td>
              <td class="text-xs-left">{{ props.item.amount }}</td>
              <td class="text-xs-left">{{ props.item.note }}</td>
              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </template>
            <template slot="no-data">
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
          <v-btn flat color="white"  @click="closeTable">Close</v-btn>
        </v-dialog>

        <!-- New Delivery -->
         <v-dialog v-model="dialogTable" persistent max-width="800px">
          <v-btn depressed slot="activator" color="primary" dark>New Delivery</v-btn>
          <v-toolbar flat color="white">
            <v-toolbar-title>New Delivery</v-toolbar-title>
            <v-divider class="mx-2" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.number" label="N°"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.designation" label="Designation"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.serialNumber" label="Serial Number"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.amount" label="Amount"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.note" label="Note"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
          <v-data-table :headers="headers" :items="items" class="elevation-1">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.number }}</td>
              <td class="text-xs-left">{{ props.item.designation }}</td>
              <td class="text-xs-left">{{ props.item.serialNumber }}</td>
              <td class="text-xs-left">{{ props.item.amount }}</td>
              <td class="text-xs-left">{{ props.item.note }}</td>
              <td class="justify-center layout px-0">
                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
              </td>
            </template>
            <template slot="no-data">
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
          <v-btn flat color="white"  @click="closeTable">Close</v-btn>
        </v-dialog>
        

       
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialogTable: false,
    dialog: false,
    headers: [
      {
        text: "N°",
        align: "left",
        sortable: false,
        value: "number"
      },
      { text: "Designation", value: "designation" },
      { text: "Serial Number", value: "serialNumber" },
      { text: "Amount", value: "amount" },    
      { text: "Note", value: "note" },
      { text: "Actions", value: "name", sortable: false }
    ],
    items: [],
    editedIndex: -1,
    editedItem: {
      number: "",
      designation: "",
      serialNumber: "",
      note: "",
      amount: 0
      
    },
    defaultItem: {
      number: "",
      designation: "",
      serialNumber: "",
      note: "",
      amount: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.items = [
        {
          number: "01",
          designation: "Disque dur externe 1TB",
          serialNumber: "0104FX87 2563 14",
          note: "Disque dur externe",
          amount: 1
        }
        
      ];
    },

    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.items.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.items.splice(index, 1);
    },
    closeTable() {
      this.dialog = false;
      this.dialogTable = false;
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>
