import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormatPricePipe } from '../../pipes/format-price-pipe';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule, FormatPricePipe],
  templateUrl: './product-modal.html',
  styleUrl: './product-modal.css'
})
export class ProductModal {
  constructor(
    public dialogRef: MatDialogRef<ProductModal>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}