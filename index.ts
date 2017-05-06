import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NGLUploadDirective } from "./src/nglupload.directive";
import { NGLUploadComponent } from "./src/nglupload.component";
import { NGLUploadPipe } from "./src/nglupload.pipe";
import { NGLUploadService } from "./src/nglupload.service";

export * from "./src/nglupload.directive";
export * from "./src/nglupload.component";
export * from "./src/nglupload.pipe";
export * from "./src/nglupload.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NGLUploadComponent,
    NGLUploadDirective,
    NGLUploadPipe
  ],
  exports: [
    NGLUploadComponent,
    NGLUploadDirective,
    NGLUploadPipe
  ]
})
export class NGLUploadModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NGLUploadModule,
      providers: [NGLUploadService]
    };
  }
}
