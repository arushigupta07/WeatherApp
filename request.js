const key='ccb57d41ddf2f51f1fdbe49d6e2ea377';
//const baseURL='http://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=ccb57d41ddf2f51f1fdbe49d6e2ea377';

// fetch(baseURL)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const data = await response.json();
    return data;

}
//requestCity('Abuja');