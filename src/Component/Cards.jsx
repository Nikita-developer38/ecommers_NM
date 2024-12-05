import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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
  const notify = () => toast("Your Product Added to Cart");
  const { setFiltered, filters } = useContext(authContext);

  return (
    <>
      <div className="d-flex flex-row mx-2 justify-content-center">
        <Button
          className="mx-2"
          onClick={() => {
            setFiltered("all");
          }}
        >
          All
        </Button>
        <Button
          className="mx-2"
          onClick={() => {
            setFiltered("jewelery");
          }}
        >
          Jewellery
        </Button>
        <Button
          className="mx-2"
          onClick={() => {
            setFiltered(`men's clothing`);
          }}
        >
          Men
        </Button>
        <Button
          className="mx-2"
          onClick={() => {
            setFiltered(`women's clothing`);
          }}
        >
          Women
        </Button>
        <Button
          className="mx-2"
          onClick={() => {
            setFiltered("electronics");
          }}
        >
          Electronics
        </Button>
      </div>

      <div className="d-flex flex-row flex-wrap mx-auto">
        {filters.map((item) => {
          const { image, id, title, description, price, category } = item;
          return (
            <div
              key={id}
              className="d-flex flex-row flex-wrap justify-content-center mx-auto mx-3  my-2"
              style={{ width: "400px" }}
            >
              <MDBCard className="mt-3">
                <MDBRipple
                  rippleColor="light"
                  rippleTag="div"
                  className="bg-image hover-overlay mt-3"
                >
                  <MDBCardImage
                    src={image}
                    style={{ width: "200px", textAlign: "center" }}
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
                  <MDBCardTitle>{title}</MDBCardTitle>
                  <MDBCardText>{description}</MDBCardText>
                  <Button onClick={notify}>Add to Cart</Button>
                </MDBCardBody>
              </MDBCard>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </>
  );
}
export default Cards;
