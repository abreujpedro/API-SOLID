import axios from "axios";
import CustomError from "../../util/error/CustomError";

interface IAddressDTO
{
    address_name: string;
    city: string;
    number: string;
    state: string;
}

const takeGeoPosition = async ( { address_name, city, number, state }: IAddressDTO ) =>
{
    const addressToSearch = number + " " + address_name + ", " + city + " " + state;
    const url = `http://api.positionstack.com/v1/forward?access_key=${process.env.GEO_ACCESS_KEY}&query=${addressToSearch}`;
    try
    {
        const response = await axios.get( url );
        return response;
    } catch ( error )
    {
        const errorToString = "" + error;
        throw new CustomError( errorToString, 500 );
    }

};

export default takeGeoPosition;