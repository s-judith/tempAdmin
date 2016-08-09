import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";

@Injectable()
export class TreeService {
    public mockData: any;
    constructor() {
        this.mockData = [
            {
                name: "1:00",
                values: [
                    { name: 'name', domain: 'domain' },
                    { name: 'nameA', domain: 'domainA' },
                    { name: 'nameB', domain: 'domainB' }
                ]
            },
            {
                name: "2:00",
                values: [
                    { name: 'name', domain: 'domain' },
                    { name: 'nameA', domain: 'domainA' },
                    { name: 'nameB', domain: 'domainB' }
                ]
            },

        ];
    }

    getData() {
        return Observable.of(this.mockData)
            .map(data => data)
    }
}