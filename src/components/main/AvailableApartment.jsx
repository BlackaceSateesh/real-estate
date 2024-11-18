import { Nav, Tab } from "react-bootstrap";
import img1 from "../../assets/apartment/img1.png";
import ButtonMain from "../UI/ButtonMain";
import "../../styles/main/AvailableApartment.css";

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
  return (
    <>
      <div className="AvailableApartment">
        <div className="section-inner">
          <h4 className="heading2">Available apartments at Taj Township</h4>
          <div className="available-inner">
            <Tab.Container
              id="left-tabs-example"
              className={"available-tab"}
              defaultActiveKey={tabPanel?.[0]?.name?.replaceAll(" ", "_")}
            >
              <div className="tab-panel">
                <Nav variant="pills" className="panel-wrapper">
                  {tabPanel?.map((e, i) => {
                    return (
                      <Nav.Item key={`panel${i}`}>
                        <Nav.Link eventKey={e?.name?.replaceAll(" ", "_")}>
                          <span>{`0${i + 1} `} </span>
                          {e?.name}
                        </Nav.Link>
                      </Nav.Item>
                    );
                  })}
                </Nav>
              </div>
              <div className="tab-content">
                <Tab.Content>
                  {tabPanel?.map((e, i) => {
                    return (
                      <Tab.Pane
                        key={`content${i}`}
                        eventKey={e?.name?.replaceAll(" ", "_")}
                      >
                        <div className="tab-inner">
                          <div className="leftImg">
                            <img src={e?.img} alt="" />
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
                      </Tab.Pane>
                    );
                  })}
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailableApartment;
