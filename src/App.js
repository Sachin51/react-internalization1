import React, { Suspense, useState } from "react";
import { Container } from "react-bootstrap";
import Greeting from "./components/Greeting";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import Text from "./components/Text";
import "./styles.css";
import i18n from "./i18n";
import LocaleContext from "./LocaleContext";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [locale, setLocale] = useState(i18n.language);
  i18n.on("languageChanged", (lng) => setLocale(i18n.language));
  return (
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <Suspense fallback={<Loading />}>
        <Navigation />
        <Container>
          <Greeting />
          <Text />
        </Container>
      </Suspense>
    </LocaleContext.Provider>
  );
}

export default App;
