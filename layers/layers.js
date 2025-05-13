var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_5__1 = new ol.format.GeoJSON();
var features_5__1 = format_5__1.readFeatures(json_5__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5__1.addFeatures(features_5__1);
var lyr_5__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5__1, 
                style: style_5__1,
                popuplayertitle: 'Урал-5_весь',
                interactive: true,
    title: 'Урал-5_весь<br />\
    <img src="styles/legend/5__1_0.png" /> <br />\
    <img src="styles/legend/5__1_1.png" /> 1503<br />\
    <img src="styles/legend/5__1_2.png" /> 1506<br />\
    <img src="styles/legend/5__1_3.png" /> 1538<br />\
    <img src="styles/legend/5__1_4.png" /> 1539<br />\
    <img src="styles/legend/5__1_5.png" /> 1543<br />\
    <img src="styles/legend/5__1_6.png" /> 1544<br />\
    <img src="styles/legend/5__1_7.png" /> 1547<br />\
    <img src="styles/legend/5__1_8.png" /> 1550<br />\
    <img src="styles/legend/5__1_9.png" /> 1554<br />\
    <img src="styles/legend/5__1_10.png" /> 1555<br />\
    <img src="styles/legend/5__1_11.png" /> 1556<br />\
    <img src="styles/legend/5__1_12.png" /> 1560<br />\
    <img src="styles/legend/5__1_13.png" /> 1561<br />\
    <img src="styles/legend/5__1_14.png" /> 1562<br />\
    <img src="styles/legend/5__1_15.png" /> 1563<br />\
    <img src="styles/legend/5__1_16.png" /> 1564<br />\
    <img src="styles/legend/5__1_17.png" /> 1578<br />\
    <img src="styles/legend/5__1_18.png" /> 1603<br />\
    <img src="styles/legend/5__1_19.png" /> 1604<br />\
    <img src="styles/legend/5__1_20.png" /> 1606<br />\
    <img src="styles/legend/5__1_21.png" /> 1609<br />\
    <img src="styles/legend/5__1_22.png" /> 1611<br />\
    <img src="styles/legend/5__1_23.png" /> 1612<br />\
    <img src="styles/legend/5__1_24.png" /> 1613<br />\
    <img src="styles/legend/5__1_25.png" /> 1614<br />\
    <img src="styles/legend/5__1_26.png" /> 1626<br />\
    <img src="styles/legend/5__1_27.png" /> 1703<br />\
    <img src="styles/legend/5__1_28.png" /> 1704<br />\
    <img src="styles/legend/5__1_29.png" /> 1705<br />\
    <img src="styles/legend/5__1_30.png" /> 1706<br />\
    <img src="styles/legend/5__1_31.png" /> 1708<br />\
    <img src="styles/legend/5__1_32.png" /> 1710<br />\
    <img src="styles/legend/5__1_33.png" /> 1713<br />\
    <img src="styles/legend/5__1_34.png" /> 1752<br />\
    <img src="styles/legend/5__1_35.png" /> 1754<br />\
    <img src="styles/legend/5__1_36.png" /> 1757<br />\
    <img src="styles/legend/5__1_37.png" /> 1761<br />\
    <img src="styles/legend/5__1_38.png" /> 1762<br />\
    <img src="styles/legend/5__1_39.png" /> 1763<br />\
    <img src="styles/legend/5__1_40.png" /> 1771<br />\
    <img src="styles/legend/5__1_41.png" /> 1772<br />\
    <img src="styles/legend/5__1_42.png" /> 2029<br />\
    <img src="styles/legend/5__1_43.png" /> 2032<br />\
    <img src="styles/legend/5__1_44.png" /> 2034<br />\
    <img src="styles/legend/5__1_45.png" /> 2044<br />\
    <img src="styles/legend/5__1_46.png" /> 2057<br />\
    <img src="styles/legend/5__1_47.png" /> 2117<br />\
    <img src="styles/legend/5__1_48.png" /> 2256<br />\
    <img src="styles/legend/5__1_49.png" /> 2554<br />\
    <img src="styles/legend/5__1_50.png" /> 2555<br />\
    <img src="styles/legend/5__1_51.png" /> 2600<br />\
    <img src="styles/legend/5__1_52.png" /> 3355<br />\
    <img src="styles/legend/5__1_53.png" /> 3476<br />\
    <img src="styles/legend/5__1_54.png" /> 3481<br />\
    <img src="styles/legend/5__1_55.png" /> 3534<br />\
    <img src="styles/legend/5__1_56.png" /> 3543<br />\
    <img src="styles/legend/5__1_57.png" /> 3545<br />\
    <img src="styles/legend/5__1_58.png" /> 3593<br />\
    <img src="styles/legend/5__1_59.png" /> 3749<br />\
    <img src="styles/legend/5__1_60.png" /> 4319<br />\
    <img src="styles/legend/5__1_61.png" /> 4581<br />\
    <img src="styles/legend/5__1_62.png" /> 5065<br />\
    <img src="styles/legend/5__1_63.png" /> 5171<br />\
    <img src="styles/legend/5__1_64.png" /> 604<br />\
    <img src="styles/legend/5__1_65.png" /> 614<br />\
    <img src="styles/legend/5__1_66.png" /> 617<br />\
    <img src="styles/legend/5__1_67.png" /> 618<br />\
    <img src="styles/legend/5__1_68.png" /> 6224<br />\
    <img src="styles/legend/5__1_69.png" /> 626<br />\
    <img src="styles/legend/5__1_70.png" /> 6273<br />\
    <img src="styles/legend/5__1_71.png" /> 6309<br />\
    <img src="styles/legend/5__1_72.png" /> 6343<br />\
    <img src="styles/legend/5__1_73.png" /> 6345<br />\
    <img src="styles/legend/5__1_74.png" /> 6349<br />\
    <img src="styles/legend/5__1_75.png" /> 6364<br />\
    <img src="styles/legend/5__1_76.png" /> 638<br />\
    <img src="styles/legend/5__1_77.png" /> 640<br />\
    <img src="styles/legend/5__1_78.png" /> 641<br />\
    <img src="styles/legend/5__1_79.png" /> 642<br />\
    <img src="styles/legend/5__1_80.png" /> 6426<br />\
    <img src="styles/legend/5__1_81.png" /> 643<br />\
    <img src="styles/legend/5__1_82.png" /> 644<br />\
    <img src="styles/legend/5__1_83.png" /> 645<br />\
    <img src="styles/legend/5__1_84.png" /> 646<br />\
    <img src="styles/legend/5__1_85.png" /> 647<br />\
    <img src="styles/legend/5__1_86.png" /> 648<br />\
    <img src="styles/legend/5__1_87.png" /> 6711<br />\
    <img src="styles/legend/5__1_88.png" /> 6712<br />\
    <img src="styles/legend/5__1_89.png" /> 6713<br />\
    <img src="styles/legend/5__1_90.png" /> 701<br />\
    <img src="styles/legend/5__1_91.png" /> 702<br />\
    <img src="styles/legend/5__1_92.png" /> 704<br />\
    <img src="styles/legend/5__1_93.png" /> 705<br />\
    <img src="styles/legend/5__1_94.png" /> 709<br />\
    <img src="styles/legend/5__1_95.png" /> 710<br />\
    <img src="styles/legend/5__1_96.png" /> 711<br />\
    <img src="styles/legend/5__1_97.png" /> 713<br />\
    <img src="styles/legend/5__1_98.png" /> 714<br />\
    <img src="styles/legend/5__1_99.png" /> 715<br />\
    <img src="styles/legend/5__1_100.png" /> 718<br />\
    <img src="styles/legend/5__1_101.png" /> 719<br />\
    <img src="styles/legend/5__1_102.png" /> 723<br />\
    <img src="styles/legend/5__1_103.png" /> 724<br />\
    <img src="styles/legend/5__1_104.png" /> 725<br />\
    <img src="styles/legend/5__1_105.png" /> 726<br />\
    <img src="styles/legend/5__1_106.png" /> 730<br />\
    <img src="styles/legend/5__1_107.png" /> 732<br />\
    <img src="styles/legend/5__1_108.png" /> 734<br />\
    <img src="styles/legend/5__1_109.png" /> 740<br />\
    <img src="styles/legend/5__1_110.png" /> 741<br />\
    <img src="styles/legend/5__1_111.png" /> 743<br />\
    <img src="styles/legend/5__1_112.png" /> 744<br />\
    <img src="styles/legend/5__1_113.png" /> 745<br />\
    <img src="styles/legend/5__1_114.png" /> 781<br />\
    <img src="styles/legend/5__1_115.png" /> 782<br />\
    <img src="styles/legend/5__1_116.png" /> 784<br />\
    <img src="styles/legend/5__1_117.png" /> 787<br />\
    <img src="styles/legend/5__1_118.png" /> 811<br />\
    <img src="styles/legend/5__1_119.png" /> 813<br />\
    <img src="styles/legend/5__1_120.png" /> 814<br />\
    <img src="styles/legend/5__1_121.png" /> 815<br />\
    <img src="styles/legend/5__1_122.png" /> 816<br />\
    <img src="styles/legend/5__1_123.png" /> 817<br />\
    <img src="styles/legend/5__1_124.png" /> 832<br />\
    <img src="styles/legend/5__1_125.png" /> 833<br />\
    <img src="styles/legend/5__1_126.png" /> 848<br />\
    <img src="styles/legend/5__1_127.png" /> 849<br />\
    <img src="styles/legend/5__1_128.png" /> 852<br />\
    <img src="styles/legend/5__1_129.png" /> 853<br />\
    <img src="styles/legend/5__1_130.png" /> 854<br />\
    <img src="styles/legend/5__1_131.png" /> Нет в энергосе<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'УСПД',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> УСПД'
            });

lyr_OSMStandard_0.setVisible(true);lyr_5__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_5__1,lyr__2];
lyr_5__1.set('fieldAliases', {'ПО': 'ПО', 'РЭС': 'РЭС', 'ТП': 'ТП', 'Населенный_пункт': 'Населенный_пункт', 'Улица': 'Улица', 'Дом': 'Дом', 'МАС': 'МАС', 'Номер_ПУ': 'Номер_ПУ', 'Тип_ПУ': 'Тип_ПУ', 'lat': 'lat', 'lon': 'lon', 'wl': 'wl', 'Топология': 'Топология', 'Check MO': 'Check MO', 'Показания_УСПД': 'Показания_УСПД', 'Показания_пирамида': 'Показания_пирамида', 'field_17': 'field_17', 'field_18': 'field_18', 'field_19': 'field_19', });
lyr__2.set('fieldAliases', {'Филиал': 'Филиал', 'РЭС': 'РЭС', 'ТП': 'ТП', 'НП': 'НП', 'lat': 'lat', 'lon': 'lon', 'УСПД': 'УСПД', 'EPID': 'EPID', 'MAC': 'MAC', 'ver': 'ver', 'ch': 'ch', 'ПУ_в_успд': 'ПУ_в_успд', 'в_белом_списке_на_связи': 'в_белом_списке_на_связи', '%': '%', 'Не_на_связи': 'Не_на_связи', 'лишние': 'лишние', 'IP1': 'IP1', 'ping1': 'ping1', 'IP2': 'IP2', 'ping2': 'ping2', 'field_21': 'field_21', });
lyr_5__1.set('fieldImages', {'ПО': 'TextEdit', 'РЭС': 'TextEdit', 'ТП': 'TextEdit', 'Населенный_пункт': 'TextEdit', 'Улица': 'TextEdit', 'Дом': 'TextEdit', 'МАС': 'TextEdit', 'Номер_ПУ': 'TextEdit', 'Тип_ПУ': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'wl': 'TextEdit', 'Топология': 'TextEdit', 'Check MO': 'CheckBox', 'Показания_УСПД': 'TextEdit', 'Показания_пирамида': 'TextEdit', 'field_17': 'TextEdit', 'field_18': 'TextEdit', 'field_19': 'TextEdit', });
lyr__2.set('fieldImages', {'Филиал': 'TextEdit', 'РЭС': 'TextEdit', 'ТП': 'TextEdit', 'НП': 'TextEdit', 'lat': 'TextEdit', 'lon': 'TextEdit', 'УСПД': 'TextEdit', 'EPID': 'TextEdit', 'MAC': 'TextEdit', 'ver': 'TextEdit', 'ch': 'TextEdit', 'ПУ_в_успд': 'Range', 'в_белом_списке_на_связи': 'TextEdit', '%': 'Range', 'Не_на_связи': 'TextEdit', 'лишние': 'TextEdit', 'IP1': 'TextEdit', 'ping1': 'Range', 'IP2': 'TextEdit', 'ping2': 'TextEdit', 'field_21': 'TextEdit', });
lyr_5__1.set('fieldLabels', {'ПО': 'no label', 'РЭС': 'no label', 'ТП': 'no label', 'Населенный_пункт': 'no label', 'Улица': 'no label', 'Дом': 'no label', 'МАС': 'no label', 'Номер_ПУ': 'no label', 'Тип_ПУ': 'no label', 'lat': 'no label', 'lon': 'no label', 'wl': 'no label', 'Топология': 'no label', 'Check MO': 'no label', 'Показания_УСПД': 'no label', 'Показания_пирамида': 'no label', 'field_17': 'no label', 'field_18': 'no label', 'field_19': 'no label', });
lyr__2.set('fieldLabels', {'Филиал': 'no label', 'РЭС': 'no label', 'ТП': 'no label', 'НП': 'no label', 'lat': 'no label', 'lon': 'no label', 'УСПД': 'no label', 'EPID': 'no label', 'MAC': 'no label', 'ver': 'no label', 'ch': 'no label', 'ПУ_в_успд': 'no label', 'в_белом_списке_на_связи': 'no label', '%': 'no label', 'Не_на_связи': 'no label', 'лишние': 'no label', 'IP1': 'no label', 'ping1': 'no label', 'IP2': 'no label', 'ping2': 'no label', 'field_21': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});