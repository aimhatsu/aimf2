import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { UserBarComponent } from "./user-bar/user-bar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
	declarations: [UserBarComponent],
	imports: [IonicModule, CommonModule],
	exports: [UserBarComponent],
})
export class ComponentsModule {}
