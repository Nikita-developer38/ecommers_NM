import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBadge,
  MDBInput,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { authContext } from "../context/api";
import { useNavigate } from "react-router-dom";
function Navbars() {
  const { products, setSearchTerm, searchTerm, cart } = useContext(authContext);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cart.length > 0) {
      setAnimate(true); // Start animation when items are in the cart
    } else {
      setAnimate(false); // Stop animation when cart is empty
    }
  }, [cart.length]); // Trigger animation when cart length changes

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="dark" className="p-4">
        <MDBContainer className="d-flex flex-row justify-content-between">
          <div>
            <MDBNavbarBrand className="fs-3 text-light">
              People Mart
            </MDBNavbarBrand>
          </div>
          <Form
            onSubmit={handleSubmit}
            style={{ borderRight: "none" }}
            className="d-flex flex-row "
          >
            <MDBInput
              id="form1"
              type="search"
              className=""
              style={{ width: "500px", borderRadius: "2px" }}
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* <Button
              variant="outline-light"
              style={{
                borderRadius: "1px",
                borderLeft: "none",
                backgroundColor: "#ffffff",
              }}
            >
              {" "}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ marginRight: "8px" }}
              />
            </Button> */}
          </Form>
          <div>
            <MDBNavbarNav right className="mb-2 mx-auto mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink
                  onClick={() => {
                    navigate("yourOrder");
                  }}
                >
                  <MDBBadge
                    pill
                    color="danger"
                    className={animate ? "bounce" : ""}
                    style={{
                      position: "relative",
                      bottom: "14px",
                      left: "17px",
                    }}
                  >
                    {cart.length > 0 ? cart.length : "+"}
                  </MDBBadge>
                  <span size="lg" className="text-light fs-3">
                    <MDBIcon fas icon="shopping-cart"></MDBIcon>
                  </span>
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
export default Navbars;
