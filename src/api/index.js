import axios from "axios";

export const getPlacesData = async (type, ne, sw) => {
  try {
    const { data: { data },} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
      url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "43eac68acemsh4c7ccaff59bdbe7p11d61ajsn9ea4111c9b13",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};