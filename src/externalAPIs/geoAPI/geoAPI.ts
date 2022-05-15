import axios from "axios";
import CustomError from "../../util/error/CustomError";

interface IAddressDTO
{
    address_name: string;
    city: string;
    number: string;
}

const takeGeoPosition = async ( { address_name, city, number }: IAddressDTO ) =>
{
    const addressToSearch = address_name + " " + number;
    const url = 'http://api.positionstack.com/v1/forward';
    const params = {
        access_key: process.env.GEO_ACCESS_KEY,
        query: addressToSearch,
        region: city,
        limit: "1"
    };
    try
    {
        const response = await axios.get( url, { params } );
        const { latitude, longitude } = response.data.data[0];

        return { latitude, longitude };
    } catch ( error )
    {
        console.log( error );
        return { latitude: null, longitude: null };
    }

};

export default takeGeoPosition;