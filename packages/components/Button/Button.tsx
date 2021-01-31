import React from "react";
import styles from "./Button.module.css";
import { Toggle } from '@fluentui/react';
export const Button = props => (
  <div>
      <Toggle label="Test Toggle" defaultChecked onText="On" offText="Off" onChange={_onChange} />
  </div>
);

function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
  console.log(`The option has been changed to ${isChecked}.`);
}