import vue from 'vue'
import vuex from 'vuex'
import moduleCarts from '@/store/cart.js'
import moduleUser from '@/store/user.js'
vue.use(vuex)
const store =new vuex.Store({
	modules:{
		m_cart:moduleCarts,
		m_user:moduleUser
	},
})
export default store