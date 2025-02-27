import axios from "axios";

//create a new instance of axios containing baseURL of our API
const api = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com"
});

//get method
export const getPost = () => {
    return api.get("/posts")
}

//delete method 
export const deletePost = (id) => {
    return api.delete(`/posts/${id}`)
}

//post method 
export const postData = (post) => { //here post in parameter becuz we are getting post type of data which we will be posting in our api
    return api.post("/posts", post) //route ko call krke post pass krdia, jise add karwana hai
}

//put method 
export const updateData  = (id, post) => {
    return api.put(`/posts/${id}`, post)
}
