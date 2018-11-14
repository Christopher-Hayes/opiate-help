import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-county-map',
  templateUrl: './county-map.component.html',
  styleUrls: ['./county-map.component.css']
})
export class CountyMapComponent implements OnInit {
  selectedCounty = '';
  selectedStat = '-1';
  hoverCounty = '';

  pX = -1;
  pY = -1;
  offsetX = 0;
  offsetY = 0;
  psX = 0;
  psY = 0;
  psDist = 0;
  pDown = false;

  // Fairfield, New_Haven, Middlesex, New_London, Litchfield, Hartford, Tolland, Windham
  counties = ['Fairfield', 'New_Haven', 'Middlesex', 'New_London', 'Litchfield', 'Hartford', 'Tolland', 'Windham'];
  statDeaths = [667, 1316, 180, 379, 214, 1234, 120, 151];
  statPharms = [130, 161, 32, 45, 33, 152, 19, 20];
  statTreatments = [22033, 34666, 4323, 11371, 8150, 31189, 2743, 6630];
  statTown = ['Bridgeport', 'New Haven', 'Middletown', 'Norwich', 'Torrington', 'Hartford', 'Vernon', 'Willimantic'];
  statMax = [1316, 161, 34666];

  transformOffset = [ 'translate(40vw, -25vh) scale(1.7)',   // Fairfield
                      'translate(15vw, -10vh) scale(1.7)',   // New Haven
                      'translate(0vw, -5vh) scale(1.7)',    // Middlesex
                      'translate(-15vw, -5vh) scale(1.7)',  // New London
                      'translate(25vw, 40vh) scale(1.7)',   // Litchfield
                      'translate(0vw, 40vh) scale(1.7)',    // Hartford
                      'translate(-15vw, 40vh) scale(1.7)',  // Tolland
                      'translate(-30vw, 40vh) scale(1.7)'   // Windham
                    ];

  constructor() { }

  getK() {
    return this.counties.indexOf(this.selectedCounty);
  }

  findOffset() {
    return this.transformOffset[this.getK()];
  }

  // Reset offset applied by dragging map around
  resetMapCamera() {
      document.getElementById('moveMap').style.transitionDuration = '800ms';
      this.offsetX = 0;
      this.offsetY = 0;
      document.getElementById('moveMap').style.transform = 'translate(' + this.offsetX.toString() + 'px, ' + this.offsetY.toString() + 'px)';
      setTimeout(() => {
        document.getElementById('moveMap').style.transitionDuration = '0ms';
      }, 500);
  }

  selectCounty(e) {
    const elem = e.target;
    this.selectedStat = '-1';

    // Mouse drags greater than 10px in distance will not focus on the element it is released at
    if (this.psDist < 11) {
      if (this.selectedCounty === elem.id) {
        this.resetMapCamera();
        this.selectedCounty = '';
      } else {
        this.resetMapCamera();
        this.selectedCounty = elem.id;
      }
    }

    // Prevent click from propagating to map container
    this.consume(e);
  }

  showData(countyStr) {
    let v = '';
    const k = this.counties.indexOf(countyStr);
    switch(this.selectedStat) {
      case '0':
        v = this.statDeaths[k];
        break;
      case '1':
        v = this.statPharms[k];
        break;
      case '2':
        v = this.statTreatments[k];
        break;
      default:
        v = '';
    }
    v = v.toString().substr(0,5);
    return v === '' ? countyStr.replace('_', ' ') : v;
  }

  showStat(county) {
    switch(this.selectedStat) {
      case '0':
        return this.statDeaths[county] / this.statMax[0];
      case '1':
        return this.statPharms[county] / this.statMax[1];
      case '2':
        return this.statTreatments[county] / this.statMax[2];
      default:
        return '';
    }
  }

  getTextColor(county) {
    const v = this.showStat(this.counties.indexOf(county));
    if (v === '') {
      if (this.selectedCounty === county || this.hoverCounty === county) {
        return '#FFF';
      } else {
        return '#224649';
      }
    } else if (v < 0.5) {
      // Dark text
      switch (this.selectedStat) {
        case '0':
          return '#565656';
        case '1':
          return '#695068';
        case '2':
          return '#3a6e9a';
      }
    } else {
      // Light text
      switch (this.selectedStat) {
        case '0':
          return '#FFF';
        case '1':
          return '#FFF';
        case '2':
          return '#FFF';
      }
    }
  }

  findColor(county, fill=true) {
    // Darken stroke
    const v = (Math.max(0.0, this.showStat(county) - (fill ? 0.0 : 0.3))).toString();
    switch(this.selectedStat) {
      case '0':
        return 'rgba(100,100,100,' + v + ')';
      case '1':
        return 'rgb(127, 85, 125, ' + v + ')';
      case '2':
        return 'rgb(77, 157, 224,' + v + ')';
    }
  }

  ngOnInit() {
  }

  consume(e) {
    this.pX = -1;
    this.pY = -1;
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('document:mousedown', ['$event']) mouseDown($event){
    this.pX = this.psX = event.screenX;
    this.pY = this.psY = event.screenY;

    // Reset travel distance
    this.psDist = 0;
    this.pDown = true;
  }
  @HostListener('document:mouseup', ['$event']) mouseUp($event){
    this.pX = event.screenX;
    this.pY = event.screenY;

    // Compute drag distance
    this.psDist = Math.sqrt(Math.pow(this.pX - this.psX, 2) + Math.pow(this.pY - this.psY, 2));

    this.pDown = false;
  }

  @HostListener('document:mousemove', ['$event']) mouseMove($event){
    if (this.pDown) {
      this.offsetX += event.screenX - this.pX;
      this.offsetY += event.screenY - this.pY;
      document.getElementById('moveMap').style.transform = 'translate(' + this.offsetX.toString() + 'px, ' + this.offsetY.toString() + 'px)';
      this.pX = event.screenX;
      this.pY = event.screenY;
    }
  }

  @HostListener('document:click', ['$event']) clickedOutside($event){
    this.selectedCounty = '';
    this.selectedStat = '-1';
    this.resetMapCamera();
  }
}
