function GISMap() {
    var mapObj = null;
    if (typeof this.init != "function") {
        GISMap.prototype.init = function () {
            map = new OpenLayers.Map({ div: "map" });

            var osm = new OpenLayers.Layer.OSM();

            map.addLayer(osm);
            map.addControl(new OpenLayers.Control.LayerSwitcher());
            map.zoomToMaxExtent();
        };
    }
}