import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, map, tap } from 'rxjs/operators';
import { Photo, emptyPhoto } from './photo';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhotosService {

  private baseUrl = 'https://photoslibrary.googleapis.com/v1/mediaItems';

  constructor(private httpClient: HttpClient) { }

  all() {
    return this.httpClient.get(this.baseUrl, {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }).pipe( delay(1000), map((x: any) => x.mediaItems) )
  }

  create(model) {
    return this.httpClient.post(this.baseUrl, model).pipe(
      map((x: any) => ({...x, id: x.resourceName}))
    );
  }

  getUrlForId(id) {
    return `${this.baseUrl}/${id}`;
  }

  update(model) {
    return this.httpClient.put(this.getUrlForId(model.id), model).pipe(
      map((x: any) => ({...x, id: x.resourceName}))
    )
  }

  delete(modelId) {
    return this.httpClient.delete(this.getUrlForId(modelId))
  }
}
