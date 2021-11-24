import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  listData!: any;
  newData: any;
  editDataModal: any;
  searchData?: any;
  searchTerm!: string;

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
    this.dataService.getData().subscribe((res) => {
      this.listData = res;
      console.log('list data: ', this.listData);
    });
  }

  postData() {
    const { value } = this.formValue;
    console.log('form value: ', value);

    const dataObj = {
      id: value.id,
      userId: value.userId,
      title: value.title,
      body: value.body,
    };
    console.log('data object: ', dataObj);

    this.dataService.postData(dataObj).subscribe((res) => {
      dataObj['id'] = res.id;
      this.listData.push(dataObj);
      this.formValue.reset();
    });
    this.getAllData();
  }

  editModal(editData: any) {
    console.log('editData.id: ', editData.id);
    this.editDataModal = editData;
  }

  updateData() {
    const { value } = this.updateFormValue;
    const dataObj = {
      id: value.updateId,
      userId: value.updateUserId,
      title: value.updateTitle,
      body: value.updateBody,
    };

    this.dataService
      .updateData(dataObj, this.editDataModal.id)
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteData(data: any): void {
    this.dataService.deleteData(data.id).subscribe((res) => {
      let index = this.listData.indexOf(data);
      this.listData.splice(index, 1);
    });
  }

  search(searchData: string): void {
    this.listData.filter((val: any) => {
      val.title.toLowerCase().includes(searchData);
    });
  }
}
