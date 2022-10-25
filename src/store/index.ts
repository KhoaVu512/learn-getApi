import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
	state: {
		weather: [],
	},
	getters: {
		getWeather: (state) => state.weather,
	},
	actions: {
		async fetchWeather({ commit }) {
			try {
				const data = await axios.get(
					'http://api.openweathermap.org/data/2.5/weather?q=hanoi&appid=9ec2c5137ece08163acf75957afab879',
				)
				commit('SET_WEATHER', data.data)
			} catch (error) {
				alert(error)
				console.log(error)
			}
		},
	},
	mutations: {
		SET_WEATHER(state, weather) {
			state.weather = weather
		},
	},
})
export default store
