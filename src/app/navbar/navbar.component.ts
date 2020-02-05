import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  public changeView: boolean = false;

  constructor() {}

  ngOnInit(){
    this.toggleDisplay();
  }
  toggleDisplay() {
    this.changeView = !this.changeView;
  }
}
