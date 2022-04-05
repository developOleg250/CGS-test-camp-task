// http.service.js
// It could be any fetching services, such as default fetch, call api, xhr, etc.

import axios from 'axios';

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

  get(id: string) {
    return this.fetchingService.get(this.getFullApiUrl(id),
    this.populateTokenToHeaderConfig());
  }

  put<T>(id: string, data:T): Promise<any> {
    return this.fetchingService.put(
        this.getFullApiUrl(id), data, this.populateTokenToHeaderConfig());
  }

  post<T>(data:T, url:string = ''): Promise<any> {
    return this.fetchingService.post(
        this.getFullApiUrl(url), data, this.populateTokenToHeaderConfig());
  }

  private populateTokenToHeaderConfig() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token'),
    };
    return { headers };
  }

  delete(id: string) {
    return this.fetchingService.delete(
        this.getFullApiUrl(id), this.populateTokenToHeaderConfig());
  }
}

export default HttpService;
