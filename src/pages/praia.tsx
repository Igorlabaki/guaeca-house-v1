import React from "react";
import LayoutComponent from "../components/layout";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { CarrocelComponent } from "../components/praiaDeGuaeca/carrocel";

export default function PraiaDeGuaeca() {
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: -23.818578,
    lng: -45.463475,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDWdZcz489tOT-lBe0BLENRs0aZgephD74",
  });

  return (
    <LayoutComponent>
      <div className="h-full w-[80%] mt-[10rem] ">
        <CarrocelComponent />
        <div className="flex  mt-5 gap-5 h-[300px]">
          <div className="text-green-primary font-brandon-gro  flex  flex-col gap-y-5  w-[50%] text-justify">
            <p className="text-2xl text-center font-bold">Localizacao</p>
            <p className="text-lg">
              Localizada no municipio de São Sebastião (o mesmo onde estão as
              praias mais nobres do Litoral Norte, como a Praia da Baleia,
              Camburi e Maresias), Guaecá fica a 208 km da capital paulista.
              Quem vem de avião e chega em Guarulhos, pode descer a Rodovia
              Mogi-Bertioga até a Rio-Santos (BR-101) e dirigir sentido Guaecá.
              A partir de São Paulo, são 3h30 de viagem de carro pela rodovia
              Rio-Santos.
            </p>
          </div>
          <div className="w-[50%] bg-gray-200 rounded-lg overflow-hidden ">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={17}
              >
                <Marker
                  position={center}
                  options={{
                    label: {
                      text: "Guaeca House",
                      className: "mb-12 font-futura-pt font-bold",
                    },
                  }}
                />
              </GoogleMap>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </LayoutComponent>
  );
}
