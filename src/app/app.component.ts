import { Component, OnInit } from "@angular/core";
import { EnroleServiceService } from "./services/enrole-service.service";

interface Abc {
  name: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  name: string = "";
  id: string = "";
  dob: any = "";
  active: boolean = false;

  title = "codingchallenge";
  errorMessage: string;
  errorMessageInfo: string;
  data: Abc[] = [];

  constructor(private enroll: EnroleServiceService) {}
  ngOnInit() {
    this.getEnrolledata();
  }

  captureSelectedenroll(name: any, id: any, dob: any, active: any) {
    // function to capture data to display in modal dialogue
    this.name = name;
    this.id = id;
    this.dob = dob;
    this.active = active;
  }

  putSelectedenroll(name: any, id: any, dob: any, active: any) {
    // function to put data, save modified data
    this.name = name;
    this.id = id;
    this.dob = dob;
    this.active = active;
    let data = {
      active: this.active,
      name: this.name,
      dateOfBirth: this.dob,
    };
    this.enroll.putEnrolledata(data, id).subscribe(
      (resp: any) => {
        if (resp) {
          this.getEnrolledata();
        } else {
          this.errorMessage = "Error: failed to retrieve divisions.";
        }
      },
      (error) => {
        alert("error occured updating");
      }
    );
  }
  getEnrolledata() {
    //function to get entire enrolle data from backend
    // tslint:disable-next-line: deprecation
    this.enroll.getEnrolledata().subscribe((resp: any) => {
      if (resp) {
        this.data = resp;
      } else {
        this.errorMessage = "Error: failed to retrieve divisions.";
      }
    });
  }
}
