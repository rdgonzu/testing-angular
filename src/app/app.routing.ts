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

//Defines routes array.
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/article/:articleId', component: ArticleComponent},
    {path: 'form', component: FormComponent},
    {path: 'page', component: PageComponent},
    {path: 'page/:slug', component: PageComponent},
    {path: 'movies', component: MoviesComponent},
    {path: '**', component: ErrorComponent}
];

//Exports module.
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);