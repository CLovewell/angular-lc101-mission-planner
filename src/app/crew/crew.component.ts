import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    { name: "Eileen Collins", firstMission: false },
    { name: "Mae Jemison", firstMission: false },
    { name: "Ellen Ochoa", firstMission: true }
  ];
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(name: string, firstMission: boolean): void {
    this.crew.push(
      {
        name: name,
        firstMission: firstMission
      }
    );
  }

  remove(member: object): void {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object): void {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object): void {
    member["name"] = name;
    this.memberBeingEdited = null;
  }

}
