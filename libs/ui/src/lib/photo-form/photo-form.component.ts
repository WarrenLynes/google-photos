import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'google-images-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnChanges {

  form: FormGroup;
  photoFile: File;

  @Input() selectedPhoto;
  @Output() savePhoto = new EventEmitter();

  constructor() {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.selectedPhoto) {
      this.buildForm();
    }
  }

  updatePhotoFile(event) {
    this.photoFile = event.target.files[0];
  }

  submitPhoto() {
    this.savePhoto.emit({description: this.form.get('description').value, photo: this.photoFile})
  }

  buildForm() {
    this.form = new FormGroup({
      description: new FormControl(''),
      photo: new FormControl('')
    });
  }

}
