import Vue from 'vue'
import Router from 'vue-router'
// import UsersList from '@/components/UsersList'
import About from '@/components/About'
// import Home from '@/components/Home'

Vue.use(Router);
const ques = {
  path: '/about',
  name: 'About',
  component: About,
}


export default{
  ques,
}