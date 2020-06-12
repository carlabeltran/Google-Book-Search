const axios = require('axios');
const apiKey = process.env.API_KEY;

module.exports = {

    googleSearchByTitle: function(req, res){
        makeApiCall(req.params.title).then(response =>{
            res.json(response.data);
        })
    }
};

function makeApiCall(query){
    return axios({
        method: "get",
        url: `https://www.googleapis.com/books/v1/volumes?q=${query}+intitle&key=${apiKey}`
    }).catch(error => {
        console.log(error);
    });
};