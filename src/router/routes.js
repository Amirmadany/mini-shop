// components - pages - views
const Home = () => import('../views/Home.vue')
const Category = () => import('../views/Category.vue')
const Product = () => import('../views/Product.vue')
const Cart = () => import('../views/Cart.vue')
const Login = () => import('../views/Login.vue')
const Register = () => import('../views/Register.vue')
const ForgetPassword = () => import('../views/ForgetPassword.vue')

// define routes
const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/category',
        component: Category,
        name: 'category'
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'product'
    },
    {
        path: '/cart',
        component: Cart,
        name: 'cart'    
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    },
    {
        path: '/forget-password',
        component: ForgetPassword,
        name: 'forget-password'
    }
]

export default routes