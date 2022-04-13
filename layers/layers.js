var wms_layers = [];


        var lyr_BasemapGooglemaps_0 = new ol.layer.Tile({
            'title': 'Basemap Googlemaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_CitraSatelit_1 = new ol.layer.Tile({
            'title': 'Citra Satelit',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Bataskelurahan_3 = new ol.format.GeoJSON();
var features_Bataskelurahan_3 = format_Bataskelurahan_3.readFeatures(json_Bataskelurahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bataskelurahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bataskelurahan_3.addFeatures(features_Bataskelurahan_3);
var lyr_Bataskelurahan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bataskelurahan_3, 
                style: style_Bataskelurahan_3,
                interactive: true,
                title: '<img src="styles/legend/Bataskelurahan_3.png" /> Batas kelurahan'
            });
var format_Drainase_4 = new ol.format.GeoJSON();
var features_Drainase_4 = format_Drainase_4.readFeatures(json_Drainase_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drainase_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drainase_4.addFeatures(features_Drainase_4);
var lyr_Drainase_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Drainase_4, 
                style: style_Drainase_4,
                interactive: true,
                title: '<img src="styles/legend/Drainase_4.png" /> Drainase'
            });
var format_GorongGorong_5 = new ol.format.GeoJSON();
var features_GorongGorong_5 = format_GorongGorong_5.readFeatures(json_GorongGorong_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GorongGorong_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GorongGorong_5.addFeatures(features_GorongGorong_5);
var lyr_GorongGorong_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GorongGorong_5, 
                style: style_GorongGorong_5,
                interactive: true,
                title: '<img src="styles/legend/GorongGorong_5.png" /> Gorong-Gorong'
            });
var format_TITIK_FOTO_6 = new ol.format.GeoJSON();
var features_TITIK_FOTO_6 = format_TITIK_FOTO_6.readFeatures(json_TITIK_FOTO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIK_FOTO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_FOTO_6.addFeatures(features_TITIK_FOTO_6);
var lyr_TITIK_FOTO_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TITIK_FOTO_6, 
                style: style_TITIK_FOTO_6,
                interactive: true,
                title: '<img src="styles/legend/TITIK_FOTO_6.png" /> TITIK_FOTO'
            });

lyr_BasemapGooglemaps_0.setVisible(true);lyr_CitraSatelit_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Bataskelurahan_3.setVisible(true);lyr_Drainase_4.setVisible(false);lyr_GorongGorong_5.setVisible(false);lyr_TITIK_FOTO_6.setVisible(true);
var layersList = [lyr_BasemapGooglemaps_0,lyr_CitraSatelit_1,lyr_OpenStreetMap_2,lyr_Bataskelurahan_3,lyr_Drainase_4,lyr_GorongGorong_5,lyr_TITIK_FOTO_6];
lyr_Bataskelurahan_3.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', });
lyr_Drainase_4.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', });
lyr_GorongGorong_5.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', });
lyr_TITIK_FOTO_6.set('fieldAliases', {'no': 'no', 'x': 'x', 'y': 'y', 'foto': 'foto', });
lyr_Bataskelurahan_3.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', });
lyr_Drainase_4.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', });
lyr_GorongGorong_5.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', });
lyr_TITIK_FOTO_6.set('fieldImages', {'no': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'foto': 'ExternalResource', });
lyr_Bataskelurahan_3.set('fieldLabels', {'WADMKC': 'inline label', 'WADMKD': 'inline label', 'WADMKK': 'inline label', });
lyr_Drainase_4.set('fieldLabels', {'LAYER': 'inline label', 'ELEVATION': 'inline label', });
lyr_GorongGorong_5.set('fieldLabels', {'LAYER': 'inline label', 'ELEVATION': 'inline label', });
lyr_TITIK_FOTO_6.set('fieldLabels', {'no': 'inline label', 'x': 'inline label', 'y': 'inline label', 'foto': 'inline label', });
lyr_TITIK_FOTO_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});