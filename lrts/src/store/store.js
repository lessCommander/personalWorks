import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const state = {
	bookCurInx: 1,
	bookData: [],
	activeCurInx: 1,
	activeData: [],
	asideIsShow: false,
	asideHeight: 736
};

const actions = {
	loadBookData({commit}, o){
		commit('loadBookData', o);
	},
	loadActiveData({commit}, o2){
		commit('loadActiveData', o2)
	},
	showAsideBar({commit}, isShow){
		commit('showAsideBar', isShow);
	}
};

const mutations = {
	loadBookData(state, o){
		var arr = [];
		state.bookCurInx = o.iIndex;
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
	},
	loadActiveData(state, o){
		var arr = [];
		state.activeCurInx = o.iIndex;
		axios
			.get(o.getPath)
		    .then(function(res){
		    	var i = Number(o.iIndex) - 1;
		        state.activeData = res.data[i];
		    })
		    .catch(function(err){
		        console.log(err);
		    });
	},
	showAsideBar(state, isShow){
		state.asideHeight = document.documentElement.offsetHeight;
		state.asideIsShow = isShow;
	}
};

const getters = {
	getData(state){
		return state.bookData;
	},
	getBookCurInx(state){
		return (state.bookCurInx - 1);
	},
	getActiveData(state){
		return state.activeData;
	},
	getActiveCurInx(state){
		return (state.activeCurInx - 1);
	},
	sideShow(state){
		return state.asideIsShow;
	},
	getSideHeight(state){
		return state.asideHeight;
	}
};

export default new Vuex.Store({
	state,
	actions,
	mutations,
	getters
});