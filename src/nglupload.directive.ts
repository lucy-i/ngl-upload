import { Directive, ElementRef, Input, HostListener, EventEmitter, Output, OnInit } from '@angular/core';

@Directive({
  selector: '[nglUpload]'
})
export class NGLUploadDirective implements OnInit {

  @Input()
  nglUpload: INGLUpload = {
    FileDrop: false,
    FileSelect: true,
  };
  @Output()
  OnDragOver: EventEmitter<any> = new EventEmitter();
  @Output()
  onChange: EventEmitter<File[]> = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    console.log(this.nglUpload);
  }

  protected fileSelect(): void {
    let element = document.createElement('input') as HTMLInputElement;
    element.type = 'file';
    element.accept = this.nglUpload.FileTypes ? "" : this.nglUpload.FileTypes;
    element.onchange = (evt: any) => {
      console.log(evt.target.files);
      this.readFile(evt.target.files);
    }
    element.click();
  }

  protected readFile(files: File[]) {
    let readers: FileReader[] = new Array<FileReader>(files.length);
    for (var index = 0; index < files.length; index++) {
      let element = files[index] as File;
      readers[0] = new FileReader();
      readers[0].readAsDataURL(element);
      readers[0].onload = (e: any) => {
        let nativeElement = this.el.nativeElement as HTMLElement;
        //if (element.type.startsWith('image')) {
        if (nativeElement.tagName == 'IMG')
          nativeElement.setAttribute('src', e.target.result);
        //}
      }
    }

  }

  @HostListener('click', ['$event'])
  onClick($evt: MouseEvent) {
    if (this.nglUpload.FileSelect) {
      this.fileSelect();
    }
  }

  @HostListener('drop', ['$event'])
  onDrop($evt: any) {
    if (this.nglUpload.FileDrop) {
      $evt.preventDefault();
      $evt.stopPropagation();
      this.readFile($evt.dataTransfer.files);
      this.onChange.emit($evt.dataTransfer.files);
      this.removeStyle();
    }
  }

  @HostListener('dragover', ['$event'])
  onDragEnter($evt: DragEvent) {
    if (this.nglUpload.FileDrop) {
      $evt.dataTransfer.dropEffect = 'copy';
      $evt.preventDefault();
      $evt.stopPropagation();
      this.applyStyle();
      this.OnDragOver.emit($evt);
    }
  }

  @HostListener('dragleave', ['$event'])
  OnDragLeave($evt: MouseEvent) {
    if (this.nglUpload.FileDrop) {
      let target = $evt.target as HTMLElement;
      let dd = this.el.nativeElement.closest('.parent');
      this.removeStyle();
    }
  }


  applyStyle() {
    if (this.nglUpload.ZoneSelector != null) {
      let dd = this.el.nativeElement.closest(this.nglUpload.ZoneSelector);
      dd.setAttribute('style', this.nglUpload.ZoneStyle);
    }
  }

  removeStyle() {
    if (!this.nglUpload.ZoneSelector != null) {
      let dd = this.el.nativeElement.closest(this.nglUpload.ZoneSelector);
      dd.removeAttribute('style');
    }
  }
}

export interface INGLUpload {
  FileSelect: boolean;
  FileDrop: boolean;
  OnDrop?: (evt: MouseEvent) => void;
  OnDragOver?: (evt: DragEvent) => void;
  OnDragLeave?: (evt: MouseEvent) => void;
  FileTypes?: string;
  MaxCount?: number;
  ZoneSelector?: string;
  ZoneStyle?: string;
}
