// http.service.js
// It could be any fetching services, such as default fetch, call api, xhr, etc.

import axios from 'axios';
import { getToken } from '../api/AsyncStogare';

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

  async get(id: string) {
    return this.fetchingService.get(this.getFullApiUrl(id),
        await this.populateTokenToHeaderConfig());
  }

  async put<T>(id: string, data:T): Promise<any> {
    return this.fetchingService.put(
        this.getFullApiUrl(id), data, await this.populateTokenToHeaderConfig());
  }

  async post<T>(data:T, url:string = ''): Promise<any> {
    return this.fetchingService.post(
        this.getFullApiUrl(url), data,
        await this.populateTokenToHeaderConfig());
  }

  private async populateTokenToHeaderConfig() {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': await getToken(),
    };
    return { headers };
  }

  async delete(id: string) {
    return this.fetchingService.delete(
        this.getFullApiUrl(id), await this.populateTokenToHeaderConfig());
  }
}

export default HttpService;
