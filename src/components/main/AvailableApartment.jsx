import img1 from "../../assets/apartment/img1.png";
import ButtonMain from "../UI/ButtonMain";
import "../../styles/main/AvailableApartment.css";
import { useState } from "react";

const AvailableApartment = () => {
  const tabPanel = [
    {
      name: "Penthouse",
      img: img1,
      apartmentArea: "210",
      terraceArea: "8",
      rooms: "2",
      floor: "6",
    },
    {
      name: "Studio",
      img: img1,
      apartmentArea: "210",
      terraceArea: "8",
      rooms: "2",
      floor: "6",
    },
    {
      name: "Duplex",
      img: img1,
      apartmentArea: "210",
      terraceArea: "8",
      rooms: "2",
      floor: "6",
    },
    {
      name: "Simplex",
      img: img1,
      apartmentArea: "210",
      terraceArea: "8",
      rooms: "2",
      floor: "6",
    },
    {
      name: "Apartment",
      img: img1,
      apartmentArea: "210",
      terraceArea: "8",
      rooms: "2",
      floor: "6",
    },
  ];

  const [activeTab, setActiveTab] = useState(
    tabPanel?.[0]?.name?.replaceAll(" ", "_")
  );

  const handleTabClick = (eventKey) => {
    setActiveTab(eventKey);
  };

  return (
    <div className="AvailableApartment">
      <div className="section-inner">
        <h4 className="heading2">Available apartments at Taj Township</h4>
        <div className="available-inner">
          <div className="tab-panel">
            <div className="panel-wrapper">
              {tabPanel?.map((e, i) => {
                const tabKey = e?.name?.replaceAll(" ", "_");
                return (
                  <div
                    key={`panel${i}`}
                    className={`tab-item ${
                      activeTab === tabKey ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(tabKey)} // Handle tab change
                  >
                    <span>{`0${i + 1} `}</span>
                    {e?.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="tab-content">
            {tabPanel?.map((e, i) => {
              const tabKey = e?.name?.replaceAll(" ", "_");
              return (
                <div
                  key={`content${i}`}
                  className={`tab-pane ${activeTab === tabKey ? "active" : ""}`}
                >
                  <div className="tab-inner">
                    <div className="leftImg">
                      <img src={e?.img} alt={e?.name} />
                    </div>
                    <div className="content">
                      <ul>
                        <li className="para">
                          Apartment area: {e?.apartmentArea}m<sup>2</sup>
                        </li>
                        <li className="para">
                          Terrace area: {e?.terraceArea}m<sup>2</sup>
                        </li>
                        <li className="para">Rooms: {e?.rooms}</li>
                        <li className="para">Floor: {e?.floor}</li>
                      </ul>
                      <ButtonMain
                        name={"Register interest"}
                        clsName={"black"}
                      />
                      <p className="para">Only two available</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableApartment;
