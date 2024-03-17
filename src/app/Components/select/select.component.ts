import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  tracks = [
    { name: '.NET', places: ['Banha Branch', 'Monfya Branch '] },
    { name: 'Testing', places: ['Mansoura Branch'] },
    { name: 'Mearn', places: ['Smart Branch','Minia Branch'] },
    { name: 'Social Media', places: ['Not Opened this quarter'] },


  ];
  constructor(){
  }
  selectedTrack: string='';
  availablePlaces: string[]|undefined=[];

  onSelectTrack(event: any): void {
    const selectedTrackName = event.target.value;
    this.selectedTrack = selectedTrackName;
    const selectedTrack = this.tracks.find(track => track.name === selectedTrackName);
    this.availablePlaces = selectedTrack ? selectedTrack.places : [];
  }

}
