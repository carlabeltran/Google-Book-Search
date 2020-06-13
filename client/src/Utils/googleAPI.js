import api from '../API';

export default {
    searchTitle: function (title) {
        const data = title;

        api.byTitle(data).then(response => {
            return response;
        }).catch(error => {
            console.log(error);
        })
    }
}