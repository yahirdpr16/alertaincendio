import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, PLATFORM_ID, Inject, NgZone } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as turf from '@turf/turf'; // Importar Turf.js
import { MapsControlsComponent } from '../maps-controls/maps-controls.component';

@Component({
  selector: 'maps-map',
  standalone: true,
  imports: [CommonModule, MapsControlsComponent],
  templateUrl: './maps-map.component.html',
  styleUrl: './maps-map.component.scss'
})
export class MapsMapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;
  private map: mapboxgl.Map | null = null;
  mapLoaded = false;
  private circleSourceId = 'circle-source';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadMapbox();
    }
  }

  private loadMapbox() {
    try {
      (mapboxgl as any).accessToken = 'pk.eyJ1IjoieWFoaXJyMDMxNiIsImEiOiJjbTNreDd4cG4wazJiMm1vb2hrMGpndGg5In0.C27HwFrbikM-pbPhRVA3fw';
      this.mapLoaded = true;
    } catch (error) {
      console.error('Error configurando Mapbox', error);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeMap();
    }
  }

  private initializeMap() {
    if (!this.mapContainer?.nativeElement) return;

    this.ngZone.runOutsideAngular(() => {
      this.map = new mapboxgl.Map({
        container: this.mapContainer.nativeElement,
        style: 'mapbox://styles/mapbox/outdoors-v11',
        center: [-100.3667, 19.4333],
        zoom: 15
      });

      this.map.on('load', () => {
        this.addFixedRadiusCircle([-100.3667, 19.4333], 500); // 1000 metros (1 km)
      });
    });
  }

  private addFixedRadiusCircle(center: [number, number], radiusMeters: number) {
    if (!this.map) return;

    // Crear un círculo geográfico con Turf.js
    const circle = turf.circle(center, radiusMeters, {
      steps: 64, // Más pasos = círculo más suave
      units: 'meters'
    });

    // Agregar fuente de datos para el círculo
    this.map.addSource(this.circleSourceId, {
      type: 'geojson',
      data: circle
    });

    // Agregar la capa de relleno para el círculo
    this.map.addLayer({
      id: 'circle-layer',
      type: 'fill',
      source: this.circleSourceId,
      paint: {
        'fill-color': 'red',
        'fill-opacity': 0.3
      }
    });

    // Agregar borde al círculo
    this.map.addLayer({
      id: 'circle-border-layer',
      type: 'line',
      source: this.circleSourceId,
      paint: {
        'line-color': 'red',
        'line-width': 2,
        'line-opacity': 0.7
      }
    });
  }

  onZoomIn() {
    this.map?.zoomIn();
  }

  onZoomOut() {
    this.map?.zoomOut();
  }
}
