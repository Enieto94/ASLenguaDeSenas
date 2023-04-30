import Vue from "vue";
import Vuex from "vuex"

Vue.useAttrs(Vuex)
import { createStore } from 'vuex';
export const store = new Vuex.Store(app);


export default createStore({
	state: {
		characters: [],
		charactersFilter: []
	},
	mutations: {
		setCharacters(state, payload) {
			state.characters = payload
		},
		setCharactersFilter(state, payload) {
			state.charactersFilter = payload
		}

	},
	actions: {
		async getCharacters({ commit }) {
			try {
				const response = await fetch('https://rickandmortyapi.com/api/character')
				const data = await response.json()
				commit('setCharacters', data.results)
				commit('setCharactersFilter', data.results)
				console.log(data)
			} catch (error) {
				console.log(error)
			}

		}
	}
})