import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorsComponent } from './authors/authors.component';
import { TitleCasePipe } from './title-case.pipe';
import { LikesComponent } from './likes/likes.component';
import { ZippyComponent } from './zippy/zippy.component';
import { CoursesComponent } from './courses/courses.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FollowersComponent } from './followers/followers.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    TitleCasePipe,
    LikesComponent,
    ZippyComponent,
    CoursesComponent,
    ChangePasswordComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
