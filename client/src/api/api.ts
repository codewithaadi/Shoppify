import axios from 'axios';
import { iUser } from '../models/user';

const URL = 'http://localhost:8000'

export const authenticateSignup = async(data:iUser)=>await axios.post(`${URL}/signup`, data);

export const authenticateLogin = async(data:iUser)=>await axios.post(`${URL}/login`, data);
   

