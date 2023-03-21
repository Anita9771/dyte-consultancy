import React from "react";
import Axios from "axios";
import { DyteMeeting } from "@dytesdk/react-ui-kit";
import { useDyteClient } from "@dytesdk/react-web-core";

function Dyte() {
  // const [data, setData] = useState("");
  const [meeting, initMeeting] = useDyteClient();

  const createMeeting = async () => {
    const response = await Axios.get("https://dyte-async-backend-12tzkljof-anita9771.vercel.app/api/meeting");
    const getBtn = document.getElementById("dyte-btn");
    getBtn.style.display = "none";
    const authToken = response.data;
    const roomName = "";
    const showSetupScreen = false;
    if (!authToken) {
      alert(
        "Please pass an authToken to join a meeting."
      );
      return;
    }

    initMeeting({
      authToken,
      roomName,
      showSetupScreen,
    });
  };


  return (
    <div>
      <div className="dyte-meet">
        <button id="dyte-btn" className="dyte-btn" onClick={createMeeting}>
          GET STARTED
        </button>
        <DyteMeeting meeting={meeting} mode="fill" />
      </div>
    </div>
  );
};

export default Dyte;
