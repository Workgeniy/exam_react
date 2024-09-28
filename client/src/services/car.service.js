import axios from 'axios'
import {$axios} from "../api.js";

 class CarService  {
	constructor() {
		this.url='';
	}
	async getAll() {
		const data = await $axios.get('http://localhost:7000/api/cars/getCars')
		return data
	}

	async getById(id) {
		const data = await $axios.get(`http://localhost:7000/api/cars/getCar/${id}`)
		return data
	}
}

export const carService = new CarService();
