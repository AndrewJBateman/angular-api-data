import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

import { Data } from 'src/app/interfaces/data';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css'],
})
export class ListDataComponent implements OnInit {
  formValue!: UntypedFormGroup;
  updateFormValue!: UntypedFormGroup;
  listData!: any;
  newData: any;
  editDataModal: any;
  searchData?: any;
  searchTerm!: string;

  constructor(
    private dataService: DataService,
    private formBuilder: UntypedFormBuilder
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
    this.listData = this.dataService.getData().subscribe((res: any) => {
      this.listData = res;
    });
  }

  postData(): void {
    const { value } = this.formValue;

    const dataObj = {
      id: value.id,
      userId: value.userId,
      title: value.title,
      body: value.body,
    };

    this.dataService.postData(dataObj).subscribe((res) => {
      dataObj['id'] = res.id;
      this.listData.push(dataObj);
      this.formValue.reset();
    });
    this.getAllData();
  }

  editModal(editData: any) {
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

  deleteData(data: Data): void {
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
