import React, { FC } from "react";
import { Layout, Menu, Row } from "antd";
import { useHistory } from "react-router";
import { RouteNames } from "../router";
import { useTypesSelector } from "../hooks/useTypesSelector";

const Navbar: FC = () => {
  const router = useHistory();
  const { isAuth } = useTypesSelector((state) => state.auth);
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Katya</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log("out")} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
