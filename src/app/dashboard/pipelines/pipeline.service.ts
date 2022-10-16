//import { HEROES } from './mock-heroes';

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Pipeline } from './pipeline';
@Injectable()
export class PipelineService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private pipelinesUrl = 'api/pipelines';  // URL to web api
  constructor(private http: Http) { }

/*  getPipelines(): Promise<Pipeline[]> {
    return Promise.resolve(PIPELINES);
  }*/

  getPipelines(): Promise<Pipeline[]> {
    return this.http.get(this.pipelinesUrl)
      .toPromise()
      .then(response => response.json().data as Pipeline[])
      .catch(this.handleError);
  }
  getPipeline(id: number): Promise<Pipeline> {
    const url = `${this.pipelinesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Pipeline)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.pipelinesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
  create(name: string): Promise<Pipeline> {
    return this.http
      .post(this.pipelinesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  update(pipeline: Pipeline): Promise<Pipeline> {
    const url = `${this.pipelinesUrl}/${pipeline.id}`;
    return this.http
      .put(url, JSON.stringify(pipeline), {headers: this.headers})
      .toPromise()
      .then(() => pipeline)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
