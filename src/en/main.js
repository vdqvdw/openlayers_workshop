import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import sync from 'ol-hashed';
import Draw from 'ol/interaction/Draw'
import GeometryType from 'ol/geom/GeometryType'


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

// add Interaction - drag and drop
map.addInteraction(new DragAndDrop({
    source: source,
    formatConstructors: [GeoJSON]
}));

// add interaction : Drawing
map.addInteraction(new Draw({
    type: GeometryType.POLYGON, // 'Polygon'
    // type: GeometryType.CIRCLE, // 'Circle'
    source: source
}));

sync(map);



