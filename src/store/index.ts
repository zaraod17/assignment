import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

import { User } from "./types";

export interface State {
  users: User[];
  selectedUser: any;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    users: [],
    selectedUser: {},
  },
  mutations: {
    setUser(state, payload: User) {
      state.selectedUser = payload;
    },
  },
  actions: {
    setSelectedUser(context, payload: User) {
      context.commit("setUser", payload);
    },
    async loadUsers(context) {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");

        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }

        const results = await response.json();

        //  const tempUsers = [];

        for (const key in results.results) {
          const user: User = {
            id: results.results[key].login.uuid,
            firstName: results.results[key].name.first,
            lastName: results.results[key].name.last,
            email: results.results[key].email,
            birthDate: new Date(results.results[key].dob.date).toLocaleString(),
            address: {
              street: results.results[key].location.street,
              city: results.results[key].location.city,
              state: results.results[key].location.state,
              postcode: results.results[key].location.postcode,
            },
            registered: new Date(
              results.results[key].registered.date
            ).toLocaleString(),
            pictureUrl: results.results[key].picture.large,
          };

          context.state.users.push(user);
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    users(state) {
      return state.users;
    },
    selectedUser(state) {
      return state.selectedUser;
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
