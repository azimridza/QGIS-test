var wms_layers = [];

var format_Station_02CityGate_0 = new ol.format.GeoJSON();
var features_Station_02CityGate_0 = format_Station_02CityGate_0.readFeatures(json_Station_02CityGate_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Station_02CityGate_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Station_02CityGate_0.addFeatures(features_Station_02CityGate_0);
var lyr_Station_02CityGate_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Station_02CityGate_0, 
                style: style_Station_02CityGate_0,
                interactive: true,
                title: '<img src="styles/legend/Station_02CityGate_0.png" /> Station_02 City Gate'
            });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Pipeline_Gas_2 = new ol.format.GeoJSON();
var features_Pipeline_Gas_2 = format_Pipeline_Gas_2.readFeatures(json_Pipeline_Gas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pipeline_Gas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pipeline_Gas_2.addFeatures(features_Pipeline_Gas_2);
var lyr_Pipeline_Gas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pipeline_Gas_2, 
                style: style_Pipeline_Gas_2,
                interactive: true,
                title: '<img src="styles/legend/Pipeline_Gas_2.png" /> Pipeline_Gas'
            });
var format_Station_Metering_3 = new ol.format.GeoJSON();
var features_Station_Metering_3 = format_Station_Metering_3.readFeatures(json_Station_Metering_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Station_Metering_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Station_Metering_3.addFeatures(features_Station_Metering_3);
var lyr_Station_Metering_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Station_Metering_3, 
                style: style_Station_Metering_3,
                interactive: true,
                title: '<img src="styles/legend/Station_Metering_3.png" /> Station_Metering'
            });
var group_Stations = new ol.layer.Group({
                                layers: [lyr_Station_02CityGate_0,],
                                title: "Stations"});

lyr_Station_02CityGate_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_Pipeline_Gas_2.setVisible(true);lyr_Station_Metering_3.setVisible(true);
var layersList = [group_Stations,lyr_OSMStandard_1,lyr_Pipeline_Gas_2,lyr_Station_Metering_3];
lyr_Station_02CityGate_0.set('fieldAliases', {});
lyr_Pipeline_Gas_2.set('fieldAliases', {});
lyr_Station_Metering_3.set('fieldAliases', {'Control Center': 'Control Center', 'Station ID': 'Station ID', });
lyr_Station_02CityGate_0.set('fieldImages', {});
lyr_Pipeline_Gas_2.set('fieldImages', {});
lyr_Station_Metering_3.set('fieldImages', {'Control Center': 'TextEdit', 'Station ID': 'Range', });
lyr_Station_02CityGate_0.set('fieldLabels', {});
lyr_Pipeline_Gas_2.set('fieldLabels', {});
lyr_Station_Metering_3.set('fieldLabels', {'Control Center': 'inline label', 'Station ID': 'no label', });
lyr_Station_Metering_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});