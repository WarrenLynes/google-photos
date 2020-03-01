import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Photo } from '@google-images/core-data';
import { ActivatedRoute } from '@angular/router';
import { PhotosFacade } from '@google-images/core-state';
import { filter, first, map, tap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'google-images-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  item$: Observable<Photo> = this.photosFacade.selectedPhoto$;
  item: Photo;

  @Input() selectedItem: Photo;

  constructor(private route: ActivatedRoute, private photosFacade: PhotosFacade) { }

  ngOnInit(): void {

    this.photosFacade.loadPhotos();
    this.photosFacade.selectedPhoto$.pipe(
      withLatestFrom(this.route.paramMap),
      tap(([x]) => {
        console.log(x);
        if(x && x.id)
          this.item = x;
      }),
      filter(([x, xx]) => !x || !x.id && xx.has('id')),
    ).subscribe(([x,xx]) => {
      this.photosFacade.selectPhoto(xx.get('id'));
    });
  }

}
