import axios from 'axios';
import { API_URL } from '../../constants';

const state = {
	cartItems: []
};
const getters = {
	cartItems(state) {
		return state.cartItems;
	}
};
const mutations = {
	UPDATE_CART_ITEMS(state, payload) {
		state.cartItems = payload;
	},
	ADD_CART_ITEM(state, payload) {
		state.cartItems.push(payload);
	},
	DELETE_ITEM(state, payload) {
		const index = state.cartItems.findIndex(item => item.id === payload.id);
		state.cartItems.splice(index, 1);
	}
};
const actions = {
	async fetchCartItems(context) {
		const { data } = await axios.get(`${API_URL}/cart`);
		context.commit('UPDATE_CART_ITEMS', data);
	},
	async addToCart(context, payload) {
		payload.id = Date.now().toString();
		const { data } = await axios.post(`${API_URL}/cart`, payload);
		context.commit('ADD_CART_ITEM', data);
	},
	async removeItem(context, payload) {
		await axios.delete(`${API_URL}/cart/${payload.id}`);
		context.commit('DELETE_ITEM', payload);
	}
};

const cartModule = {
	state,
	getters,
	mutations,
	actions
};
export default cartModule;
