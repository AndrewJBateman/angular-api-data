import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Data } from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css'],
})
export class ListDataComponent implements OnInit {
  formValue!: FormGroup;
  updateFormValue!: FormGroup;
  newData: any;
  editDataModal: any;
  searchData?: any;
  searchTerm!: string;
  listData: any;
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      userId: [''],
      title: [''],
      body: [''],
    });

    this.updateFormValue = this.formBuilder.group({
      updateUserId: [''],
      updateTitle: [''],
      updateBody: [''],
    });

    this.getAllData();
  }

  getAllData(): void {
    this.listData = this.dataService.getData();
    console.log('list data: ', this.listData.subscribe((res: any) => console.log(res)))
  }

  postData() {

  }

  editModal(editData: any) {

  }

  updateData() {


  }

  deleteData(data: any) {

  }

  search(data: string): void {
    this.listData = this.searchData.filter((val: any) => {
      val.title.toLowerCase().includes(data)
    })
    console.log('data: ', data);
  }

}
