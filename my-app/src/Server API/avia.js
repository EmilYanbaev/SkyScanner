import axios from "axios"

export const aviaApi = {

    async tryToken(token) {
        try {
            const response = await axios.get(`https://intense-caverns-46819.herokuapp.com/http://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=2017-11&return_date=2017-12&token=${token}`)
            return response.data
        } catch (error) {
            if (error.response) {
                return error.response.data
            }
        }
    },

    async getTickets(token) {
        const response = await axios.get(`https://intense-caverns-46819.herokuapp.com/http://api.travelpayouts.com/v2/prices/latest?currency=rub&origin=LED&destination=UFA&beginning_of_period=2021-03-01&period_type=month&one_way=true&page=1&limit=1000&show_to_affiliates=true&sorting=price&token=${token}`)
        return response.data
    },

    async getAutoComplit(value){
        const response = await axios.get(`https://intense-caverns-46819.herokuapp.com/http://autocomplete.travelpayouts.com/places2?term=${value}&locale=ru&types[]=city,airport,country`)
        return response.data.slice(0,5);
    }
}
