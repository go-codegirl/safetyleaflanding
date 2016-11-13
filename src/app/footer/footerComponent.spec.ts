import {addProviders, inject} from '@angular/core/testing';

import {FooterComponent} from './footerComponent';

describe('AppComponent', () => {
    beforeEach(() => addProviders([FooterComponent]));

    it('should create the app component', inject([FooterComponent], (app: FooterComponent) => {
        expect(app).toBeTruthy();
    }));
});
