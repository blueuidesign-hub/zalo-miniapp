import React from "react";
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from "zmp-ui";
import { Route } from "react-router-dom";
import HomePage from "../pages/index";

const MyApp = () => (
  <App>
    <SnackbarProvider>
      <ZMPRouter>
        <AnimationRoutes>
          <Route path="/" element={<HomePage />} />
        </AnimationRoutes>
      </ZMPRouter>
    </SnackbarProvider>
  </App>
);

export default MyApp;
