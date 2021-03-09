import React from "react";
import { Menu, Container, Button } from "semantic-ui-react";

export default function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "15px" }}
          />
          Revent
        </Menu.Item>
        <Menu.Item name="Events" />
        <Menu.Item>
          <Button
            onClick={() => setFormOpen(true)}
            positive
            inverted
            content="Create Event"
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button bascic inverted content="Login" />
          <Button
            bascic
            inverted
            content="Register"
            style={{ marginLeft: "5px" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
