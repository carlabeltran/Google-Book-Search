const axios = require('axios');
const key = process.env.API_KEY;

module.exports = {

    SearchByTitle: function(req, res){
        callApi(req.params.title).then(response =>{
            res.json(response.data);
        })
    }
};

function callApi(title){
    return axios({
        method: "get",
        url: `https://www.googleapis.com/books/v1/volumes?q=${title}+intitle&key=${key}`
    }).catch(error => {
        console.log(error);
    });
};