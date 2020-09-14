import { Component, ElementRef, Input, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-modal-dialog",
  templateUrl: "./popup.component.html",
  styleUrls: ["./popup.component.scss"],
})
export class PopupComponent {
  public visible = false;
  public visibleAnimate = false;

  @Input()
  title: string;

  @Input()
  filterId: string;

  public show(): void {
    //funtion to show the modal dialogue
    this.visible = true;
    setTimeout(() => (this.visibleAnimate = true), 100);
  }

  public hide(): void {
    //function to hide the modal dialogue
    this.visibleAnimate = false;
    setTimeout(() => (this.visible = false), 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains("modal")) {
      this.hide();
    }
  }

  public closeFilterPopups(): void {
    this.hide();
  }
}
