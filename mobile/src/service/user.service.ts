import axios from 'axios';
import { IUser } from '../type/type.user';
import HttpService from './http';

class UserService extends HttpService {
  constructor(
      baseUrl:string,
      fetchingService: typeof axios = axios,
      apiVersion:string,
  ) {
    super(baseUrl,
        fetchingService,
        apiVersion);
  }
  async login(user:IUser) {
    return await this.post<IUser>(user, 'login');
  }
  async register(data:IUser) {
    return await this.post<IUser>(data, 'signup');
  }
}
export default UserService;

