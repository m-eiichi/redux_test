import Styles from "./toggle_switch.module.css";
import { ToggleSwitchProps } from "./types";

export const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { size, disabled, onClick, checked} = props;
  const toggleSwitch = [
    Styles.switch,
    size === undefined ? Styles.l : Styles[size],
    disabled === true ? Styles.disabled : "",
  ];
  return (
    <label className={toggleSwitch.join(" ")}>
      <input
        type="checkbox"
        disabled={disabled}
        defaultChecked={checked}
        onClick={onClick}
      />
      <div className={Styles.button_area}></div>
    </label>
  );
};