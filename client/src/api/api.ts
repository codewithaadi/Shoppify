import axios from 'axios';
import { iUser,iProduct } from '../models/models';

const URL = 'http://localhost:8000'

export const authenticateSignup = async(data:iUser)=>await axios.post(`${URL}/signup`, data);

export const authenticateLogin = async(data:iUser)=>await axios.post(`${URL}/login`, data);

export const fetchProducts = async ()=> await axios.get<iProduct>(`${URL}/products`);
   
export const fetchProductDetails = async (id:string)=> await axios.get(`${URL}/product/${id}`);
