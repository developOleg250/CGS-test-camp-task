// http.service.js
// It could be any fetching services, such as default fetch, call api, xhr, etc.

import axios from 'axios';
import { ITodo } from '../type/type.todo';

class HttpService {
  baseUrl: string;
  fetchingService: typeof axios;
  apiVersion: string;
  constructor(
      baseUrl:string,
      fetchingService: typeof axios = axios,
      apiVersion:string ) {
    this.baseUrl = baseUrl;
    this.fetchingService = fetchingService;
    this.apiVersion = apiVersion;
  }

  private getFullApiUrl(id:string) {
    return `${this.baseUrl}/${this.apiVersion}/${id}`;
  }

  private populateTokenToHeaderConfig() {
    return {
      'Authorization': localStorage.getItem('token'),
    };
  };

  get(id: string) {
    return this.fetchingService.get(this.getFullApiUrl(id));
  }

  put<T>(id: string, data:T): Promise<any> {
    return this.fetchingService.put(
        this.getFullApiUrl(id), data);
  }

  post<T>(data:T): Promise<any> {
    return this.fetchingService.post(
        this.getFullApiUrl(''), data);
  }

  private headersConfig(data:any):any {
    return {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
  };

  delete(id: string) {
    return this.fetchingService.delete(
        this.getFullApiUrl(id));
  }
}

export default HttpService;
