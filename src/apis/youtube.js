import axios from 'axios';

const KEY = 'AIzaSyAqDonBX5EYgNvWtYgfB4M7ijEMTMzJZEA';

export default axios.create (
    {
        baseURL : 'https://www.googleapis.com/youtube/v3' , 
        params : {
            part : 'snippet',
            maxResults : 5 , 
            key : KEY 

        }
    }
    );