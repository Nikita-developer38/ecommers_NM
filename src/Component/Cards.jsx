import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import video from "../empty.mp4";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import { authContext } from "../context/api";

function Cards() {
  const { setFiltered, filters, notify, products, addToCart, cart } =
    useContext(authContext);
  const [expanded, setExpanded] = useState({});
  const toggleDescription = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <div className="d-flex flex-row mx-2 justify-content-center my-3">
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            setFiltered("all");
          }}
        >
          All
        </Button>
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            setFiltered("jewelery");
          }}
        >
          Jewellery
        </Button>
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            setFiltered(`men's clothing`);
          }}
        >
          Men
        </Button>
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            setFiltered(`women's clothing`);
          }}
        >
          Women
        </Button>
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            setFiltered("electronics");
          }}
        >
          Electronics
        </Button>
      </div>
      <h2 className="text-center">Products</h2>
      <div className="d-flex flex-row flex-wrap mx-auto">
        {filters.length > 0 ? (
          filters.map((item) => {
            const { image, id, title, description, price, category } = item;
            const isExpanded = expanded[id];
            const truncatedDescription =
              description.length > 100
                ? description.slice(0, 100) + "..."
                : description;

            return (
              <div
                key={id}
                className="d-flex flex-row flex-wrap justify-content-center mx-auto mx-3  my-2"
                style={{ width: "400px" }}
              >
                <MDBCard className="mt-3 shadow-lg">
                  <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image hover-overlay mt-3"
                  >
                    <MDBCardImage
                      src={image}
                      style={{
                        width: "200px",
                        height: "250px",
                        textAlign: "center",
                      }}
                      className="mx-auto aligns-self-center d-flex justify-content-center"
                      fluid
                      alt={title}
                    />
                    <a>
                      <div
                        className="mask"
                        style={{
                          backgroundColor: "rgba(251, 251, 251, 0.15)",
                        }}
                      ></div>
                    </a>
                  </MDBRipple>
                  <MDBCardBody>
                    <MDBCardTitle>{title.slice(0, 25) + ".."}</MDBCardTitle>
                    <MDBCardText>
                      {isExpanded ? description : truncatedDescription}
                      <Button
                        variant="link"
                        onClick={() => toggleDescription(id)}
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </Button>
                    </MDBCardText>
                    <div className="d-flex flex-row justify-content-around">
                      <h4 className="text-success">${price}</h4>
                      <Button
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        {cart.some((item) => item.id === id)
                          ? "Remove from Cart"
                          : "Add to Cart"}
                      </Button>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </div>
            );
          })
        ) : (
          <video
            autoplay
            width="70%"
            style={{
              position: "relative",
              alignItems: "center",
              alignSelf: "center",
              width: "300px",
              border: "none",
            }}
            className="videoPlayer text-center mx-auto"
          >
            <source src="../empty.mp4" type="video/mp4" />
          </video>
        )}
      </div>
      <ToastContainer />
    </>
  );
}
export default Cards;
