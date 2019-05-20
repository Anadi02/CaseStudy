/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ListCategoryComponent } from './list-category.component';

let component: ListCategoryComponent;
let fixture: ComponentFixture<ListCategoryComponent>;

describe('listCategory component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ListCategoryComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ListCategoryComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});