<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map';
    import {afterUpdate, onMount} from "svelte";
    export let spots = [];
  
    const mapConfig = {
      location: {lat: 52.160858, lng: -7.152420},
      zoom: 16,
      minZoom: 1,
    };
    let map
    const categories = ["Food", "Museum", "Nature", "History", "Music", "Chill", "Night Life", "Accommodation"];
    onMount(async () => {
      map = new LeafletMap("donation-map", mapConfig);
      categories.map(x=> {map.addLayerGroup(x)});
      map.showLayerControl();
      spots.forEach(spot => {
        console.log(spot)
        addMarker(spot);
      });
    });

    afterUpdate(async () => {
  
      spots.forEach(spot => {
        console.log(spot)
        addMarker(spot);
      });
    });
  
    export function addMarker(spot) {
      map.addMarker({lat: spot.lat, lng: spot.long}, spot.title, spot.category);
      map.moveTo(11, {lat: spot.lat, lng: spot.long});
    }
  </script>
  
  <div class="box" id="donation-map" style="height:400px"></div>
  
  