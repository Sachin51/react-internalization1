import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

function changeLocale(l) {
  i18n.changeLanguage(l);
}

function Navigation() {
  const { t } = useTranslation();
  return (
    <Navbar bg="light" expands="lg">
      <Container>
        <Navbar.Brand href="#">React i18n</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Nav className="me-auto">
          <NavDropdown title={t("language")} id="basic-nav-dropdown">
            <NavDropdown.Item href="#" onClick={() => changeLocale("en")}>
              English
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => changeLocale("da")}>
              French
            </NavDropdown.Item>
            <NavDropdown.Item href="#" onClick={() => changeLocale("spa")}>
              Spanish
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
