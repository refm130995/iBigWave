export const ROOT = 'https://bigwave-api.herokuapp.com/v1';
//export const ROOT = 'https://bigwave.herokuapp.com/v1';
export const routes = {
    login: (email, pass) => {
        return `auth/sign_in?email=${email}&password=${pass}`
    },
    sing_out: () => {
        return `auth/sign_out`
    },
    registerUser: () => {
        return `auth`
    },
    recover: () => {
        return `auth/password` 
    },
    registerUser2: () => {
        return `${ROOT}/auth`
    },
    perfil: () =>{
        return `users/current`
    },
    pymes: () => {
    	return `pymes`
    },
    pymesCreate: () => {
        return `pymes/create`
    },
    sellers: () => {
    	return `sellers`
    },
    sellersCreate: () => {
        return `sellers/create`
    },
    sellersShow: () => {
        return `sellers/own`
    },
    independents: () => {
    	return `independents`
    },
    independentsCreate: () => {
        return `independents/create`
    },
    categoriesFilter: () => {
        return `profiles/categories`
    },
    categories: () =>{
        return   `profiles/categories`
    },
    productsAll(){
        return 'products/all';
    },
    geolocation:() =>{
        return `geolocation/look_for`
    },
    follow:(type,profile) =>{
        return `current_user/follow/${type}/${profile}`
    },
    unfollow:(type,profile) =>{
        return `current_user/unfollow/${type}/${profile}`
    },
    following:(type,) =>{
        return `current_user/following/${type}`
    },
    productsProfile:(type,profile) =>{
        return `${type}/${profile}/products`
    },
    getProducts:(type,profile,product) =>{
        return `${type}/${profile}/products/${product}`
    },
    createWish:() =>{
        return `wishes/create`
    },
    deleteWish:(id) =>{
        return `wishes/${id}/destroy`
    },
    listWish:() =>{
        return `wishes/my_wishes`
    },
    searchs:(q,category)=>{
        return `searchs?q=${q}&categories=${category}`
        //return `searchs`
    },
    addCart:(product)=>{
        return `shopping_carts/add_product/${product}`
    },
    getCart:()=>{
        return `shopping_carts/current_user`
    },
    deleteCart:(product)=>{
        return `shopping_carts/multiple_remove?items=${product}`
    },
    quote_items:()=>{
        return `shopping_carts/quote_items` 
    },
    createConversations:()=>{
        return `conversations/create`
    },
    createConversations2:(type)=>{
        return `conversations/create?type_messages=${type}`
    },
    newMessages:(messages)=>{
        return `messages/${messages}/create`
    },
    myConversations:()=>{
        return `conversations/my_conversations`
    },
    make_read:(conversation,messages)=>{
        return `messages/${conversation}/make_read?messages=${messages}` 
    },
    users:()=>{
        return `users`  
    },
    home:( quantity: number )=>{
        return `/services/home?quantity=${quantity}`
    }
    
 }
