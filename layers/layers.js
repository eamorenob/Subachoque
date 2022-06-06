var wms_layers = [];

var format_Vias_0 = new ol.format.GeoJSON();
var features_Vias_0 = format_Vias_0.readFeatures(json_Vias_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_0.addFeatures(features_Vias_0);
var lyr_Vias_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vias_0, 
                style: style_Vias_0,
                interactive: true,
    title: 'Vias<br />\
    <img src="styles/legend/Vias_0_0.png" /> Vía principal - pavimentada<br />\
    <img src="styles/legend/Vias_0_1.png" /> Vía secundaria - pavimentada parcialmente<br />\
    <img src="styles/legend/Vias_0_2.png" /> Sin información<br />'
        });
var format_Centrosacopio_1 = new ol.format.GeoJSON();
var features_Centrosacopio_1 = format_Centrosacopio_1.readFeatures(json_Centrosacopio_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrosacopio_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrosacopio_1.addFeatures(features_Centrosacopio_1);
var lyr_Centrosacopio_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centrosacopio_1, 
                style: style_Centrosacopio_1,
                interactive: true,
                title: '<img src="styles/legend/Centrosacopio_1.png" /> Centros acopio'
            });
var format_UCS_2 = new ol.format.GeoJSON();
var features_UCS_2 = format_UCS_2.readFeatures(json_UCS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UCS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UCS_2.addFeatures(features_UCS_2);
var lyr_UCS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UCS_2, 
                style: style_UCS_2,
                interactive: true,
    title: 'UCS<br />\
    <img src="styles/legend/UCS_2_0.png" /> MGFe<br />\
    <img src="styles/legend/UCS_2_1.png" /> MGFf<br />\
    <img src="styles/legend/UCS_2_2.png" /> MGSg<br />\
    <img src="styles/legend/UCS_2_3.png" /> MGTd<br />\
    <img src="styles/legend/UCS_2_4.png" /> MKCe<br />\
    <img src="styles/legend/UCS_2_5.png" /> MKCf<br />\
    <img src="styles/legend/UCS_2_6.png" /> MLCd<br />\
    <img src="styles/legend/UCS_2_7.png" /> MLKd<br />\
    <img src="styles/legend/UCS_2_8.png" /> MLSg<br />\
    <img src="styles/legend/UCS_2_9.png" /> MLTd<br />\
    <img src="styles/legend/UCS_2_10.png" /> MLVe<br />\
    <img src="styles/legend/UCS_2_11.png" /> MLVf<br />\
    <img src="styles/legend/UCS_2_12.png" /> RLOa<br />\
    <img src="styles/legend/UCS_2_13.png" /> RLQb<br />'
        });
var format_Clasificacionuso_3 = new ol.format.GeoJSON();
var features_Clasificacionuso_3 = format_Clasificacionuso_3.readFeatures(json_Clasificacionuso_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clasificacionuso_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clasificacionuso_3.addFeatures(features_Clasificacionuso_3);
var lyr_Clasificacionuso_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clasificacionuso_3, 
                style: style_Clasificacionuso_3,
                interactive: true,
    title: 'Clasificacion uso<br />\
    <img src="styles/legend/Clasificacionuso_3_0.png" /> Predio con restricciones ambientales<br />\
    <img src="styles/legend/Clasificacionuso_3_1.png" /> Uso agropecuario bajo condiciones<br />\
    <img src="styles/legend/Clasificacionuso_3_2.png" /> Predio para uso agropecuario<br />\
    <img src="styles/legend/Clasificacionuso_3_3.png" /> Sin información<br />'
        });
var format_Limiteoficial_4 = new ol.format.GeoJSON();
var features_Limiteoficial_4 = format_Limiteoficial_4.readFeatures(json_Limiteoficial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limiteoficial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limiteoficial_4.addFeatures(features_Limiteoficial_4);
var lyr_Limiteoficial_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limiteoficial_4, 
                style: style_Limiteoficial_4,
                interactive: true,
                title: '<img src="styles/legend/Limiteoficial_4.png" /> Limite oficial'
            });

lyr_Vias_0.setVisible(true);lyr_Centrosacopio_1.setVisible(true);lyr_UCS_2.setVisible(true);lyr_Clasificacionuso_3.setVisible(true);lyr_Limiteoficial_4.setVisible(true);
var layersList = [lyr_Vias_0,lyr_Centrosacopio_1,lyr_UCS_2,lyr_Clasificacionuso_3,lyr_Limiteoficial_4];
lyr_Vias_0.set('fieldAliases', {'NUMERO_CAR': 'Número de carriles', 'ACCESIBILI': 'Accesibilidad', 'Categoria': 'Categoria', });
lyr_Centrosacopio_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Nombre': 'Nombre', 'Servicio': 'Servicio', 'Administra': 'Administra', });
lyr_UCS_2.set('fieldAliases', {'OBJECTID': 'Identificador', 'Llave': 'Llave', 'Unidad': 'Unidad', 'CLIMA': 'Clima', 'Pendiente': 'Pendiente (%)', 'Caract_Sue': 'Características suelo', 'Cat_FA': 'Cat_FA', 'Area_ha': 'Area (ha)', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Clasificacionuso_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Llave': 'Llave', 'Unidad': 'Unidad', 'CLIMA': 'CLIMA', 'Pendiente': 'Pendiente', 'Caract_Sue': 'Caract_Sue', 'Cat_FA': 'Categoria de uso', 'Area_ha': 'Area (ha)', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Limiteoficial_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE_ENT': 'Nombre municipio', 'CATEGORIA': 'CATEGORIA', 'DEPARTAMEN': 'Departamento', 'COD_DEPART': 'COD_DEPART', 'COD_MUNICI': 'COD_MUNICI', 'COD_DANE': 'Código', 'AREA_MPIO': 'Área municipio (ha)', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Vias_0.set('fieldImages', {'NUMERO_CAR': 'TextEdit', 'ACCESIBILI': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_Centrosacopio_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Nombre': 'TextEdit', 'Servicio': 'TextEdit', 'Administra': 'TextEdit', });
lyr_UCS_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'Llave': 'Hidden', 'Unidad': 'TextEdit', 'CLIMA': 'TextEdit', 'Pendiente': 'TextEdit', 'Caract_Sue': 'TextEdit', 'Cat_FA': 'Hidden', 'Area_ha': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Clasificacionuso_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Llave': 'Hidden', 'Unidad': 'Hidden', 'CLIMA': 'Hidden', 'Pendiente': 'Hidden', 'Caract_Sue': 'Hidden', 'Cat_FA': 'TextEdit', 'Area_ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Limiteoficial_4.set('fieldImages', {'OBJECTID': 'Hidden', 'NOMBRE_ENT': 'TextEdit', 'CATEGORIA': 'Hidden', 'DEPARTAMEN': 'TextEdit', 'COD_DEPART': 'Hidden', 'COD_MUNICI': 'Hidden', 'COD_DANE': 'TextEdit', 'AREA_MPIO': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Vias_0.set('fieldLabels', {'NUMERO_CAR': 'inline label', 'ACCESIBILI': 'inline label', 'Categoria': 'inline label', });
lyr_Centrosacopio_1.set('fieldLabels', {'OBJECTID': 'inline label', 'Nombre': 'inline label', 'Servicio': 'inline label', 'Administra': 'inline label', });
lyr_UCS_2.set('fieldLabels', {'OBJECTID': 'inline label', 'Unidad': 'inline label', 'CLIMA': 'inline label', 'Pendiente': 'inline label', 'Caract_Sue': 'inline label', 'Area_ha': 'inline label', });
lyr_Clasificacionuso_3.set('fieldLabels', {'OBJECTID': 'inline label', 'Cat_FA': 'inline label', 'Area_ha': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_Limiteoficial_4.set('fieldLabels', {'NOMBRE_ENT': 'inline label', 'DEPARTAMEN': 'inline label', 'COD_DANE': 'inline label', 'AREA_MPIO': 'inline label', });
lyr_Limiteoficial_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});