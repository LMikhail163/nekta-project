import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.less']
})
export class AuthorizationComponent implements OnInit {
  public authorization$ = new Subscription();
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(data: {email: string, password: string, personal_data_access: boolean}): void {
    this.authorization$ = this.api.saveData(data).subscribe((res) => {
      localStorage.setItem('access_token', res.data.access_token);
      this.router.navigate(['list-device']);
    })
  }

  ngOnDestroy(): void {
    this.authorization$.unsubscribe();
  }
}