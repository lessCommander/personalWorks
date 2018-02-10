import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const state = {
	bookData: []
};

const actions = {
	loadBookData({commit}, o){
		commit('loadBookData', o);
		
	}
};

const mutations = {
	loadBookData(state, o){
		var arr = [];
		axios
			.get(o.getPath)
		    .then(function(res){
		        for(var i in res.data){
		       		if(res.data[i].type == o.iIndex){
		       			arr.push(res.data[i].data);
		       		}
		        }
		        state.bookData = arr;
		    })
		    .catch(function(err){
		        console.log(err);
		    });
	}
};

const getters = {
	getData(state){
		return state.bookData;
	}
};

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});