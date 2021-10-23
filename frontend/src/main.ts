import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import VueApollo from "vue-apollo";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";

const link = new HttpLink({
  uri: `http://localhost:5000/graphql`,
});
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

createApp(App)
  .use(router, VueApollo, apolloProvider)
  .mount("#app");
