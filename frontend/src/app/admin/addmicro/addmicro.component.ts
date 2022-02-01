import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';



@Component({
  selector: 'app-addmicro',
  templateUrl: './addmicro.component.html',
  styleUrls: ['./addmicro.component.css']
})



export class AddmicroComponent implements OnInit {
 
  @ViewChild('paginator') paginator : MatPaginator;

displayedColumns : string[] = ['city','municipality','microlocation','delete'];
dataSource : MatTableDataSource<Location>;

  constructor(private router : Router , private locationService : LocationService) { }

  ngOnInit(): void {

      this.locationService.getAll().subscribe((locations : Location[])=>{
          this.dataSource = new MatTableDataSource(locations);
          this.dataSource.paginator = this.paginator;
      })
  }

  deleteMicro(location){
      this.locationService.delete(location.microlocation).subscribe(()=>{
          this.locationService.getAll().subscribe((locations : Location[])=>{
            this.dataSource.data = locations;
          })
      })
  }

  addNew(){
      this.router.navigate(['admin/microform']);
  }

}
