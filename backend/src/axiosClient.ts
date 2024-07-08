import axios from 'axios';


const createAxiosClient = (baseURL: string) => {
  return axios.create({ baseURL });
  }
  
  // Function to get data from a specific API
export const getDataFromApi = async (api: string, endpoint: string): Promise<any> =>{
    const baseURLs: { [key: string]: string } = {
      mealApi: 'https://www.themealdb.com/api/json/v1/1/',
      tvShowApi: 'https://api.tvmaze.com/',
      // Add more APIs as needed
    };
  
    if (!baseURLs[api]) {
      throw new Error(`API base URL for ${api} not found.`);
    }
  
    const axiosClient = createAxiosClient(baseURLs[api]);
    const response = await axiosClient.get(endpoint);
    return response.data;
  }
  


  export const getWeatherData = async (city: string): Promise<any> => {
    const apiKey = '62e12a9c81f0c6aedd136884b5b2b25a'; // Replace with your API key
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
    
    try {
      const response = await axios.get(baseURL, {
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          q: city,
          appid: apiKey
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };