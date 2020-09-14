import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Constants } from "../../model/constants";

@Injectable({
  providedIn: "root",
})
export class EnroleServiceService {
  constructor(private http: HttpClient) {}
  //fucntion to get enrolle data
  public getEnrolledata() {
    return this.http.get(Constants.getenrollees);
  }
  //funtion to put modified enrolle data
  public putEnrolledata(data: any, id: any) {
    return this.http.put(Constants.putenrollees + id, data);
  }
}
