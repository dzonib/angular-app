import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})

export class ServerComponent {
  serverID;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.floor(Math.random() * 10) > 5 ? 'offline' : 'online';
    this.serverID = Math.floor((Math.random() * 4900 ) + 1000);
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus() {
    return this.serverStatus === 'online' ? true : false;
  }

}
