import React from "react";
import { ReactComponent as SupportHeadphone } from "../../assets/images/icons/support-headphone.svg";
import { ReactComponent as SupportPhone } from "../../assets/images/icons/support-phone.svg";
import { ReactComponent as LocationPin } from "../../assets/images/icons/location-pin.svg";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DraggableMarker from "../../Components/Utils/DraggableMarker/DraggableMarker";

function ContactDetails() {
  const arr = [1, 2, 3];
  const center = {
    lat: 35.71459463665646,
    lng: 51.40616952320622,
  };
  return (
    <section className="bg-white p-6 rounded-2xl w-full max-w-[40.4375rem] flex-col lg:max-h-[43.25rem]">
      <div className="flex justify-start items-center gap-3 mb-5">
        <SupportHeadphone />
        <span className="font-semibold text-xl text-primary6">پشتیبانی</span>
      </div>
      <p className="text-sm text-Gray4 mb-12">۷ روز هفته، ۲۴ ساعت روز، پاسخگوی تماس های شما هستیم.</p>
      <div className="flex-col mb-12">
        {arr.map((_, index) => {
          return (
            <div key={index} className="flex justify-between items-center py-4  border-b border-NeutralN30 first-of-type:pt-0 last-of-type:pb-0 last-of-type:border-none">
              <span className="text-sm text-Gray2">پشتیبانی</span>
              <span className="text-sm text-Gray4">مهیار ارشاد</span>
              <div className="flex-center gap-1">
                <a href="tel:09120343545" className="text-sm text-Gray4 hover:text-primary6 duration-300">
                  09120343545
                </a>
                <SupportPhone />
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-start items-center gap-3 mb-6">
        <LocationPin />
        <span className="font-semibold text-xl text-primary6">آدرس</span>
      </div>
      <a href="https://goo.gl/maps/YZsfLFfkWPtmWvDz9" rel="noreferrer" target="_blank" className="text-Gray4 text-sm hover:text-primary6 duration-300">
      تهران - بالاتر از میدان ولیعصر - کوی دانش کیان - پلاک ۱۷
      </a>
      <MapContainer center={center} className="w-full h-[17.5rem] mt-4" zoom={13} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <DraggableMarker center={center} />
      </MapContainer>
    </section>
  );
}

export default ContactDetails;
