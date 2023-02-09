import React from "react";
import Switch from "react-switch";

export default function SwitchButton({onChange,checked}) {
  return (
    <div>
      <div className="switchTempature ">
        <Switch
          borderRadius={4}
          onChange={onChange}
          checked={checked}
          className="react-switch"
          offColor="transparent"
          onColor="transparent"
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                color: "red",
              }}
            >
              {"\u00B0"}C
            </div>
          }
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                paddingRight: 2,
                color: "white",
                zIndex: "2",
              }}
            >
              {"\u00B0"}F
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 18,
                paddingRight: 2,
                color: "white",
              }}
            >
              {"\u00B0"}C
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "red",
                fontSize: 18,
              }}
            >
              {"\u00B0"}F
            </div>
          }
        />
      </div>
    </div>
  );
}
