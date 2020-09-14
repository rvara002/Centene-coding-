import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "../../model/constants";

@Injectable({
  providedIn: "root",
})
export class EnroleServiceService {
  constructor(private http: HttpClient) {}

  public getEnrolledata() {
    //fucntion to get enrolle data
    return this.http.get(Constants.getenrollees);
  }
  public putEnrolledata(data: any, id: any) {
    //funtion to put modified enrolle data
    return this.http.put(Constants.putenrollees + id, data);
  }
}
