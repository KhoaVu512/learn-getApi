<template>
	<div id="weather_wrapper">
		<div class="weatherCard">
			<div class="currentTemp">
				<span class="temp">{{getWeather?.temp -273.15}}&deg;</span>
				<p >Hà Nội</p>
			</div>
			<div class="currentWeather">
				<span class="conditions">&#xf00d;</span>
				<div class="info">
					<span class="rain">1.3 MM</span>
					<span class="wind">10 MPH</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
//import the global store object from Vuex
import { useStore } from 'vuex'
// declare the store variable
const store = useStore()

const msg = ref('Thoi tiet ha noi')

const getWeather = computed(() => {
	return store.getters.getWeather.main
})

const weather = computed(() => {
	return store.state.weather.main
})
console.log(weather)

onMounted(() => {
	// dispatch the fetchUsers action which commits a mutation to update the state
	store.dispatch('fetchWeather')
})
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
@import url(https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/css/weather-icons.min.css);

body {
	background: linear-gradient(90deg, #7474bf 10%, #348ac7 90%);
}
#weather_wrapper {
	width: 400px;
	margin: 100px auto;
}
.weatherCard {
	width: 400px;
	height: 300px;
	font-family: 'Open Sans';
	position: relative;
}
.currentTemp {
	width: 220px;
	height: 300px;
	background: rgb(41, 41, 41);
	position: absolute;
	top: 0;
	left: 0;
}
.currentWeather {
	width: 180px;
	height:300px;
	background: rgb(237, 237, 237);
	margin: 0;
	position: absolute;
	top: 0;
	right: 0;
}
.temp {
	font-size: 80px;
	text-align: center;
	display: block;
	font-weight: 300;
	color: rgb(255, 255, 255);
	padding: 20px 0 0;
}
.location {
	color: rgb(255, 255, 255);
	text-align: center;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 30px;
	display: block;
}
.conditions {
	font-family: weathericons;
	font-size: 80px;
	display: block;
	padding: 50px 0 0;
	text-align: center;
}
.info {
	width: 180px;
	height: 50px;
	position: absolute;
	bottom: 0;
	right: 0;
	background: rgb(42, 178, 234);
	font-weight: 700;
	color: rgb(255, 255, 255);
	text-align: center;
}
p {
	padding-top:20px ;
	font-size: 30px;
}
.rain {
	width: 50%;
	position: absolute;
	left: 10px;
	word-spacing: 60px;
	top: 3px;
}
.rain::before {
	display: block;
	content: '\f04e';
	font-family: weathericons;
	font-size: 40px;
	left: 6px;
	top: -4px;
	position: absolute;
}
.wind {
	width: 50%;
	right: -10px;
	position: absolute;
	word-spacing: 60px;
	top: 3px;
}
.wind::before {
	display: block;
	content: '\f050';
	font-family: weathericons;
	font-size: 25px;
	left: -10px;
	position: absolute;
	top: 5px;
}
</style>
