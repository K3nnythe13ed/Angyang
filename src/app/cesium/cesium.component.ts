import { Component, ElementRef, OnInit, Renderer, ViewChild } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/**
 * This is my cesium comment
 */
@Component({
  selector: 'app-cesium',
  templateUrl: './cesium.component.html',
  styleUrls: ['./cesium.component.css']
})
export class CesiumComponent implements OnInit {
  @ViewChild('cesiumContainer') cesiumContainer: ElementRef;
  cesiumViewer: any;

  constructor(public element: ElementRef, private renderer: Renderer) {
    Cesium.BingMapsApi.defaultKey = 'AroazdWsTmTcIx4ZE3SIicDXX00yEp9vuRZyn6pagjyjgS-VdRBfBNAVkvrucbqr';
    (<any>window).CESIUM_BASE_URL = '/assets/Cesium';
  }

  ngAfterViewInit() {
    this.cesiumViewer = new Cesium.Viewer(this.cesiumContainer.nativeElement);
    var terrainProvider = new Cesium.CesiumTerrainProvider({
      url: '//assets.agi.com/stk-terrain/world',
      requestWaterMask: true
    });

    this.cesiumViewer.terrainProvider = terrainProvider;
  }

  ngOnInit() {

  }

}