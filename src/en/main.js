import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';
import DragAndDrop from 'ol/interaction/DragAndDrop';
import Modify from 'ol/interaction/Modify'

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

// add Interaction Drag ang Drop
map.addInteraction(new DragAndDrop({
    source: source,
    formatConstructors: [GeoJSON]
}));

// add Interaction Modify
map.addInteraction(new Modify({
    source: source
}));


// clear feature
const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', function (event) {
    event.preventDefault();
    source.clear();
});

// download feature
const format = new GeoJSON({featureProjection: 'EPSG:3857'});
const downloadBtn = document.getElementById('download');
source.on('change', function() {
    const features = source.getFeatures();
    const json = format.writeFeatures(features);
    downloadBtn.href = 'data:text/json;charset=utf-8,' + json;
});


