// Initialize and add the map
const map = () => {
  let map;

  async function initMap() {
    // The location of Uluru
    const position = { lat: 50.3538963, lng: 13.8033708 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
      zoom: 15,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Louny",
    });
  }

  initMap();
};

export default map;
