import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'google-images-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnChanges {

  _loading = false;
  @Input() loading: boolean;

  constructor(
    private cdRdf: ChangeDetectorRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this._loading = this.loading;
    this.cdRdf.detectChanges();
  }

}
