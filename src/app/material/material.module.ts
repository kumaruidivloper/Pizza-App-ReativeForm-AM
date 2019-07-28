import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
  MatFormFieldModule
} from '@angular/material';

import { CdkTableModule } from '@angular/cdk/table';
import { MatBadgeModule } from '@angular/material/badge';

import { AppComponent } from '../app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PizzaFormContainerComponent } from '../containers/pizza-form-container/pizza-form-container.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SelectedPizzaViewerComponent } from '../components/selected-pizza-viewer/selected-pizza-viewer.component';
import { PizzaListComponent } from '../components/pizza-list/pizza-list.component';
import { CustomerDetailsComponent } from '../components/customer-details/customer-details.component';
import { PizzaSizePickerComponent } from '../components/pizza-size-picker/pizza-size-picker.component';

export const APP_MODULE_DECLARATIONS = [
    AppComponent,
    PizzaFormContainerComponent,
    NavbarComponent,
    SelectedPizzaViewerComponent,
    PizzaListComponent,
    CustomerDetailsComponent,
    PizzaSizePickerComponent
  ];

const MaterialComponents = [
  ReactiveFormsModule,
  FormsModule,
  CdkTableModule,
  MatBadgeModule,
  BrowserAnimationsModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatFormFieldModule
];

@NgModule({
  // imports Automatically done by Angular
  // imports: [MaterialComponents],
  exports: [MaterialComponents],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class MaterialModule { }