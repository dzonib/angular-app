import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})

export class ServerComponent {
  serverID: number = 10;
  serverStatus: string = 'offline';

  getServerStatus(serverPort) {

    if (serverPort === 4200) {
      this.serverStatus = 'online';
      return this.serverStatus;
    }
    
    return this.serverStatus;
  }
}