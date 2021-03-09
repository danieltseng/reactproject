import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";

const {
  default: EventDashboard,
} = require("../../features/event/eventDashboard/EventDashboard");

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
