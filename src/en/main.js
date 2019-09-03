import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import sync from 'ol-hashed';


const map = new Map({
    target: 'map-container',
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});

// empty VectorSource
const source = new VectorSource();

// create VectorLayer and has a source
const layer = new VectorLayer({
    source: source
});

// add Layer
map.addLayer(layer);

// aadd Interaction
map.addInteraction(new DragAndDrop({
    source: source,
    formatConstructors: [GeoJSON]
}));

sync(map);



