import { Injectable } from '@angular/core';

interface ComponentHandler {
    upgradeDom()
}
declare var componentHandler: ComponentHandler;

@Injectable()
export class MaterialService{
    handler: ComponentHandler
    constructor() {
        this.handler = componentHandler;
    }

    render() {
        this.handler.upgradeDom();
    }
}




