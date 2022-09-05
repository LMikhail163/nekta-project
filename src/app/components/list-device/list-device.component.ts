import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-device',
  templateUrl: './list-device.component.html',
  styleUrls: ['./list-device.component.less']
})
export class ListDeviceComponent implements OnInit {
  public dataList!: any;
  public deviceCollection$ = new Subscription();
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.deviceCollection$ = this.api.getListDevice().subscribe(data => {
      this.dataList = data.data.metering_devices.data;
    });
  }

  ngOnDestroy(): void {
    this.deviceCollection$.unsubscribe();
  }
}
