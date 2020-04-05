import axios from 'axios'

const instance = axios.create({
    baseURL:"https://burger-builder-react-d0e02.firebaseio.com/"
})


export default instance 