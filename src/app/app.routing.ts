//Imports modules from angular's router.
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//Imports components that will be pages.
import {HomeComponent} from './components/home/home.component';
import {BlogComponent} from './components/blog/blog.component';
import {FormComponent} from './components/form/form.component';
import {PageComponent} from './components/page/page.component';
import { ErrorComponent } from './components/error/error.component';
import {MoviesComponent} from './components/movies/movies.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

//Defines routes array.
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/article/:articleId', component: ArticleComponent},
    {path: 'search/:searchStr', component: SearchComponent},
    {path: 'blog/create-article', component: ArticleNewComponent},
    {path: 'blog/edit-article/:id', component: ArticleEditComponent},
    {path: 'form', component: FormComponent},
    {path: 'page', component: PageComponent},
    {path: 'page/:slug', component: PageComponent},
    {path: 'movies', component: MoviesComponent},
    {path: '**', component: ErrorComponent}
];

//Exports module.
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);