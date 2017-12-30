/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component,OnInit} from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls : ["./app.component.scss"]
})

export class AppComponent implements OnInit{ 
    showLoader : boolean = false;

    constructor() { } 

    ngOnInit() {
    }

}
