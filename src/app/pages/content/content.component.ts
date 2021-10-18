import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { MatTabNav } from "@angular/material/tabs";
@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"]
})
export class ContentComponent implements OnInit {
  navItems = [
    { id: 1, name: "navItem 1" },
    { id: 2, name: "navItem 2" },
    { id: 3, name: "navItem 3" },
    { id: 4, name: "navItem 4" },
    { id: 5, name: "navItem 5" },
    { id: 6, name: "navItem 6" },
    { id: 7, name: "navItem 7" },
    { id: 8, name: "navItem 8" }
  ];

  items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" },
    { id: 4, name: "Item 4" },
    { id: 5, name: "Item 5" },
    { id: 6, name: "Item 6" },
    { id: 7, name: "Item 7" },
    { id: 8, name: "Item 8" }
  ];

  activeIndex: number = 0;

  constructor() {}
 
  ngOnInit() {}

  onReachedIndex(index: number) {
    this.activeIndex = index;
  }
}
