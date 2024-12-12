import axios from 'axios';

const themealdb = axios.create({
	baseURL: "https://www.themealdb.com/api/json/v1/1/",
	headers:{
		'Content-Type': 'application/json',
	},
});

themealdb.interceptors.request.use(
	(config)=>{
		if(config.url){
			config.url=`${config.url}`
		}
		return config;
	},
	(error)=>{
		return Promise.reject(error);
	}
)


themealdb.interceptors.response.use(
	(response)=>{
		return response.data;
	},
	(error)=>{
		if(error.response){
			console.error('error response: ', error.response);
		}
		else{
			console.error('error message: ', error.message);
		}
		return Promise.reject(error);
	}
);

export const listCategory = () =>{
    return themealdb.get(`list.php?c=list`);
}

export const listArea = () =>{
    return themealdb.get(`list.php?a=list`);
}

export const listIngredients = () =>{
    return themealdb.get(`list.php?i=list`);
}

export const searchMealByName = (name) =>{
	return themealdb.get(`search.php?s=${name}`);
}

export const searchMealByFirstLetter = (letter) =>{
	return themealdb.get(`search.php?f=${letter}`);
}

export const filterMealByMainIngredient = (ingredient) =>{
    return themealdb.get(`filter.php?i=${ingredient}`);
}

export const filterMealByCategory = (category) =>{
    return themealdb.get(`filter.php?c=${category}`);
}

export const filterMealByArea = (area) =>{
    return themealdb.get(`filter.php?a=${area}`);
}

export const getDetailsByID = (id) =>{
	return themealdb.get(`lookup.php?i=${id}`);
}
export const getRandomMeal = ()=>{
	return themealdb.get('random.php');
}
export const getTags = () =>{
	return themealdb.get('categories.php');
}

export default themealdb;