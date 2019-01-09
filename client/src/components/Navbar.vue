<template>
  <nav>
    <v-toolbar flat app>
      <v-toolbar-side-icon class="primary--text" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase primary--text">
        <span class="font-weight-light">cnla</span>
        <span>info</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu open-on-hover down offset-y>
        <v-btn  flat slot="activator" color="primary" dark>
            <!-- <v-icon left>menu</v-icon> -->
            <span>MENU</span>
            
        </v-btn>

        <v-list>
          <v-list-tile v-for="(item, index) in links" :key="index" router :to="item.route">
              <v-list-tile-action>
            <v-icon class="dark--text">{{ item.icon }}</v-icon>
          </v-list-tile-action>
            <v-list-tile-title>{{ item.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn flat color="primary">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="indigo">
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content class="white--text">{{link.text}}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "store", text: "Stock", route: "/stock" },
        { icon: "assignment", text: "Forms", route: "/forms" },
        { icon: "shopping_cart", text: "Supliers", route: "/supliers" },
        { icon: "group", text: "Customers", route: "/customers" }
      ]
    };
  }
};
</script>
