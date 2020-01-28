import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/member.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  member: any={ "name": "",
                "email": "",
                "phone": "",
                "passwd": "",
                "role": ""
              };

  constructor(private route: ActivatedRoute,
    private ms: MemberService,
    private router: Router) { }

  ngOnInit() {

    this.route.paramMap.subscribe((result) => {
      let id:any = result.get("id");
      console.log(id);

      let observableResult =
        this.ms.SelectMemberByNo(id);

      observableResult.subscribe((result) => {

        console.log(result);
        this.member = result;
      });

    })
  }

Update(formdata)
{
  this.member = formdata.form.value;
    let observableResult =
    this.ms.UpdateMember(this.member);

    observableResult.subscribe((result) => {

    let affRows = result;
    console.log(affRows);
    });

}

}

