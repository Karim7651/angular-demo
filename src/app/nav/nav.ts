import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ThemeSwitch } from "../theme-switch/theme-switch";

@Component({
  selector: 'app-nav',
  imports: [RouterLink, ThemeSwitch],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {

}
