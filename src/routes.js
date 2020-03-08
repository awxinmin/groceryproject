//Step 2 -- Define Routes
import PageContent from './components/PageContent.vue'
import AddItem from './components/AddItem.vue'
import NewPage from "./components/NewPage"

export default[
    { path: '/', component: PageContent},
    { path: '/add', component: AddItem},
    { path: '/newpage', component: NewPage},

]
