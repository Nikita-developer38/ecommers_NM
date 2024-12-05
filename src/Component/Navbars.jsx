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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Form } from "react-bootstrap";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { useState } from "react";
import { authContext } from "../context/api";
function Navbars() {
  const { products, setSearch } = useContext(authContext);

  async function handleSearch(e) {
    const searchValue = e.target.value.toLowerCase();
    if (!searchValue) {
      return setSearch(products);
    }

    const resultSearch = products.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );

    setSearch(resultSearch);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer className="d-flex flex-row justify-content-around">
          <div>
            <MDBNavbarBrand className="fs-3">People Mart</MDBNavbarBrand>
          </div>
          <Form onSubmit={handleSubmit} className="d-flex flex-row">
            <MDBInput
              id="form1"
              type="search"
              placeholder="Search..."
              onChange={handleSearch}
            />
            <Button>
              {" "}
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ marginRight: "8px" }}
              />
            </Button>
          </Form>
          <div>
            <MDBNavbarNav right className="mb-2 mx-auto mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  <MDBBadge pill color="danger">
                    !
                  </MDBBadge>
                  <span>
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
