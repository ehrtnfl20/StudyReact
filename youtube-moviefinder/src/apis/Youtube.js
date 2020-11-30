import axios from 'axios';
const MYKEY = 'AIzaSyBIRK9hekzCv1GXjqYvBFCh_x7HaUsBvR4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet', 
        key: MYKEY,
        maxResults: 10
    }
});