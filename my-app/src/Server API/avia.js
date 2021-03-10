import axios from "axios"
const PROXY = "https://intense-caverns-46819.herokuapp.com/"

//Так как у axios какие-то известные проблемы с прокси
//То пока будем напрямую закидывать адрес прокси в запрос

export const aviaApi = {

    async tryToken(token) {
        try {
            const response = await axios.get(`${PROXY}http://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=2017-11&return_date=2017-12&token=${token}`)
            return response.data
        } catch (error) {
            if (error.response) {
                return error.response.data
            }
        }
    },

    async getTickets(origin,destination,month,token) {
        const response = await axios.get(`${PROXY}http://api.travelpayouts.com/v2/prices/latest?currency=rub&origin=${origin}&destination=${destination}&beginning_of_period=2021-${month}-01&period_type=month&one_way=true&page=1&limit=10&show_to_affiliates=true&sorting=price&token=${token}`)
        return response.data
    },

    async getAutoComplit(value){
        const response = await axios.get(`${PROXY}http://autocomplete.travelpayouts.com/places2?term=${value}&locale=ru&types[]=city`)
        return response.data.slice(0,5);
    },

    async getIataCode(term){
        const response = await axios.get(`${PROXY}http://autocomplete.travelpayouts.com/places2?term=${term}&locale=ru`)
        return response.data[0]
    }
}
