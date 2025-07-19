import axios from "axios"
const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function getAllHouses() {
   try{
    const res = await axios.get(`${backendUrl}/house/all`);
    return res.data;
   } catch (error) {
    const errorMessage = error.response?.data?.message || 'Error while getting houses';
    console.error("Post error:", errorMessage);
    throw new Error(errorMessage); 
   }
}

export async function getHouseDetails(id){
   try {
      const res = await axios.get(`${backendUrl}/house/${id}`);
      return res.data;
   }  catch (error) {
    const errorMessage = error.response?.data?.message || 'Error while getting house';
    console.error("Post error:", errorMessage);
    throw new Error(errorMessage); 
   }
}

export const filterHouse = async (query) => {
    try {
      const res = await axios.get(`${backendUrl}/house/search?query=${query}`); 
      return res.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error occurred while filtering House';
      console.error("Error filtering house:", errorMessage);
    }
  };