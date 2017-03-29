import { Component } from '@angular/core';
import {ServerElement} from "./shared/server-element.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    new ServerElement('TestServer', 'server', 'Just a test!'),
    new ServerElement('TestBlueprint', 'blueprint', 'Just a test!')
  ];

  onServerAdded(serverData: { serverName: string, serverContent: string}) {
    this.serverElements.push(new ServerElement(serverData.serverName, 'server', serverData.serverContent))
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string}) {
    this.serverElements.push(new ServerElement(blueprintData.serverName, 'blueprint', blueprintData.serverContent))
  }
}
