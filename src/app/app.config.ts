import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
  api = new ApiConfig();

  config = {
    tokenExpirationTime: 300000
  };

  getConfig(): Object {
    return this.config;
  }
}

class ApiConfig {
  public endpoints = {
    orders: 'orders/',
    orderTypes: 'order_types/',
    users: 'users/',
    workers: 'workers/',
    workerTypes: 'worker_types/'
  };

  private baseUrls = {
    'localhost': 'http://localhost:8000/',
  };

  getBaseUrl(): string {
    const hostname = window.location.hostname;
    return this.baseUrls[hostname];
  }

}
