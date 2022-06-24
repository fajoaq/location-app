const config = { attributeFilter: ["data-location"] };
const mapEl = document.getElementById("map");
const observer = new MutationObserver(callback);

function callback(coords) {
  if (!coords.lon || !coords.lat) return;

  var map = new ol.Map({
    target: "map",
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
    ],
    view: new ol.View({
      center: ol.proj.fromLonLat([coords.lon, coords.lat]),
      zoom: 15,
    }),
  });
}

observer.observe(mapEl, config);
