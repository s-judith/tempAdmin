import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
// interface IHours{
//     Time: number;
//     Name: string;
//     Domain: string;

// }

// export var hour: IHours[] = [
//     {"Time": 1, "Name":"name", "Domain": "Domain" }
// ];

// class check {
//     public Time: number;
//     public Name: string;
//     public Domain: string;
// }

export class check {
    id: number;
    name: string;
    domain: string;
}

export const CHECKS: check[] = [
    {id: 1, name: 'bank', domain: ''  },
    {id: 2, name: 'bank', domain: ''  },
    {id: 3, name: 'bank', domain: ''  },

];


@Injectable()
export class SideBarService { 
   
    public mockData = {
         "first": [
            { id: '1', name: 'name', domain: 'domain' },
            { id: '1', name: 'nameA', domain: 'domainA' },
            { id: '1', name: 'nameB', domain: 'domainB' }
        ],
        "2:00": [
            { name: 'name1', domain: 'domain1' }
        ],
        "3:00": [
            { name: 'name2', domain: 'domain2' },
            { name: 'name2A', domain: 'domain2A' },
            { name: 'name2B', domain: 'domain2B' }
        ]

        
    };
    constructor() {
       
     
         
     }
    getData() {
        return Observable.of(this.mockData)
            .map(data => data)
    }
}