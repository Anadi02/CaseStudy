/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SearchCategoryComponent } from './search-category.component';

let component: SearchCategoryComponent;
let fixture: ComponentFixture<SearchCategoryComponent>;

describe('search-category component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SearchCategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SearchCategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});