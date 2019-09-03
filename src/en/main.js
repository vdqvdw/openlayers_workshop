import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import Modify from 'ol/interaction/Modify';
import sync from 'ol-hashed';

// create source and layer
const source = new VectorSource();
const layer = new VectorLayer({
    source: source
});
const map = new Map({
    target: 'map-container',
    view: new View({
        center: [0, 0],
        zoom: 2
    })
});

// add Layer
map.addLayer(layer);

// drag amd drop interaction
map.addInteraction(new DragAndDrop({
    source: source,
    formatConstructors: [GeoJSON]
}));

// add Interaction and Modifying features
map.addInteraction(new Modify({
    source: source
}));

sync(map);

