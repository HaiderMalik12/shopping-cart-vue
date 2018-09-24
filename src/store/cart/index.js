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
	}
};
const actions = {
	async fetchCartItems(context) {
		const { data } = await axios.get(`${API_URL}/cart`);
		context.commit('UPDATE_CART_ITEMS', data);
	}
};

const cartModule = {
	state,
	getters,
	mutations,
	actions
};
export default cartModule;
