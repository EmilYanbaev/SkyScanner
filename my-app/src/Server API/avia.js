import axios from "axios"

export const aviaApi = {

    tryProxy(){
        return axios.get("https://intense-caverns-46819.herokuapp.com/http://api.travelpayouts.com/v1/prices/cheap?origin=MOW&destination=HKT&depart_date=2017-11&return_date=2017-12&token=")
    }
}
