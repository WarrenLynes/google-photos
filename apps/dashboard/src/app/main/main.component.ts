import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { emptyPhoto, Photo } from '@google-images/core-data';
import { PhotosFacade } from '@google-images/core-state';
import { Router } from '@angular/router';

@Component({
  selector: 'google-images-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  destroy$: Subject<boolean> = new Subject();
  photos$: Observable<Photo[]> = this.photosFacade.allPhotos$;
  photo$: Observable<Photo> = this.photosFacade.selectedPhoto$;

  constructor(
    private photosFacade: PhotosFacade,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.photosFacade.loadPhotos();
  }

  onSelectPhoto(photoId: any) {
    this.photosFacade.selectPhoto(photoId);
    this.router.navigateByUrl('photos/' + photoId);
  }

  onCreatePhoto(photoFile) {
    console.log(photoFile);
    this.photosFacade.createPhoto(photoFile);
  }

  savePhoto(photo: Photo) {
    this.photosFacade.savePhoto(photo);
  }

  onDeletePhoto(photoId:any) {
    this.photosFacade.deletePhoto(photoId)
  }
}
