import React from "react";
import { Layout } from "antd";
import { Route, Redirect, Switch } from "react-router-dom";
import PrivateRoute from "../security/privateRoute";
import PageError from "../errorPage/result";
import Home from "../home";
import User from "../user";
import NewUser from "../user/newUser";
import ViewUser from "../user/viewUser";
import Schedule from "../schedule";
import SettingSchedule from "../settingSchedule";
import CreateRegister from "../settingSchedule/createRegister";
import { useSelector } from "react-redux";

export default function Content() {
  const authed = useSelector((state) => state.auth.roles);
  return (
    <Layout.Content
      style={{
        margin: "12px 16px",
        padding: 24,
        minHeight: "800px",
        overflowY: "hidden",
        borderRadius: "5px",
      }}
      className="bg-white"
    >
      <Switch>
        <PrivateRoute exact authed={authed} path="/users" component={User} />
        <PrivateRoute
          exact
          authed={authed}
          path="/users/newuser"
          component={NewUser}
        />
        <PrivateRoute
          exact
          authed={authed}
          path="/users/viewuser/:id"
          component={ViewUser}
        />
        <PrivateRoute
          exact
          path="/setting"
          authed={authed}
          component={SettingSchedule}
        />
        <PrivateRoute
          exact
          path="/setting/createRegister"
          authed={authed}
          component={CreateRegister}
        />
        <Route exact path="/customer" component={() => <div>customer</div>} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/404" component={PageError} />
        <Route exact path="/403">
          <PageError status="403" title="403" subTitle />
        </Route>
        <Route path="/" exact component={Home} />
        <Redirect to="/404" />
      </Switch>
    </Layout.Content>
  );
}
