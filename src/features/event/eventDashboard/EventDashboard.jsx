import React, { useState } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import Eventform from "../eventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../app/api/sampleData.js";

const EventDashboard = ({ formOpen, setFormOpen }) => {
  const [events, setEvents] = useState(sampleData);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={sampleData} />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && <Eventform setFormOpen={setFormOpen} />}
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;

// export default EventDashboard() {
//     return (
//       <Grid>
//         <Grid.Column width={10}>
//           <h2>left</h2>
//         </Grid.Column>
//         <Grid.Column width={6}>
//           <h2>right</h2>
//         </Grid.Column>
//       </Grid>
//     );
//   };
