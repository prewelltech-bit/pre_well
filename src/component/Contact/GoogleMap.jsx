import React from "react";

const GoogleMap = () => {
  return (
    <>
      <div style={{ width: "100%", height: "400px" }}>
        <iframe
          title="Prewell Digitech Location"
          src="https://www.google.com/maps?q=3rd%20Floor,%20309,%20Marvella%20coridors,%20VIP%20Rd,%20opp.%20International%20wealth%20center,%20Bharthana,%20Surat,%20Gujarat%20395007&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default GoogleMap;
