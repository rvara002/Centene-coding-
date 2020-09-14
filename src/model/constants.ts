export class Constants {
  public static baseUrl: string =
    location.href.indexOf("localhost") !== -1 ? "http://localhost:8080" : "";
  public static getenrollees: string = Constants.baseUrl + "/enrollees";
  public static putenrollees: string = Constants.baseUrl + "/enrollees/";
}
