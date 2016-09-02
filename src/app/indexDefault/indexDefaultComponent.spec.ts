import {addProviders, inject} from '@angular/core/testing';

import {IndexDefaultComponent} from './indexDefaultComponent';

describe('IndexDefaultComponent', () => {
    beforeEach(() => addProviders([IndexDefaultComponent]));

    it('should create the app component', inject([IndexDefaultComponent], (app: IndexDefaultComponent) => {
        expect(app).toBeTruthy();
    }));
});
