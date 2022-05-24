import { GenericAPIService } from "../axiosConfig"
import { urlPathName } from "./../urlConstants"

export const categories = () => {
    let url: any = urlPathName.categories
    GenericAPIService.get(url)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {

            console.log(error);
        })
}