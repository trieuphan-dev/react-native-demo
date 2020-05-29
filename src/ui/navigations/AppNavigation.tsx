import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default createAppContainer(
  createSwitchNavigator({
    // Additional routes such as a login route could
    // be added here:
    // Login: LoginNavigator,
  })
);