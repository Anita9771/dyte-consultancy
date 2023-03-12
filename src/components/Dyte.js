import React from "react";
import { DyteMeeting } from "@dytesdk/react-ui-kit";
import { useDyteClient } from "@dytesdk/react-web-core";

const Dyte = () => {
  const [meeting, initMeeting] = useDyteClient();

  const createMeeting = async () => {
    const credentials = `${process.env.REACT_APP_DYTE_ORG_ID}:${process.env.REACT_APP_DYTE_API_KEY}`;
    const encodedApiKey = btoa(credentials);

    const response = await fetch("https://api.cluster.dyte.in/v2/meetings", {
      method: "POST",
      headers: {
        Authorization: `Basic ${encodedApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Dyte Consulting",
        record_on_start: true,
        live_stream_on_start: false,
      }),
    });
    const data = await response.json();
    // console.log(data);
    // console.log(encodedApiKey);

    if (data.success === true) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${encodedApiKey}`,
        },
        body: '{"preset_name":"group_call_host","custom_participant_id":"owner"}',
      };

      fetch(
        `https://api.cluster.dyte.in/v2/meetings/${data.data.id}/participants`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.success === true) {
            const getBtn = document.getElementById("dyte-btn");
            getBtn.style.display = "none";
            const authToken = response.data.token;
            const roomName = "";
            if (!authToken) {
              alert(
                "An authToken wasn't passed, please pass an authToken in the URL query to join a meeting."
              );
              return;
            }

            initMeeting({
              authToken,
              roomName,
            });
          }
          // console.log(response)
        })
        .catch((err) => console.error(err));
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      {/* <h1 id='bigTag'>Dyte</h1> */}
      {/* <p>{`${process.env.REACT_APP_DYTE_ORG_ID}`}</p>
        <p>{`${process.env.REACT_APP_DYTE_API_KEY}`}</p> */}
      {/* <p>{encodedApiKey}</p> */}

      {/* <div id='chance'>

        </div> */}
      <div className="dyte-meet">
        <button id="dyte-btn" className="dyte-btn" onClick={createMeeting}>
          START
        </button>
        <DyteMeeting meeting={meeting} mode="fill" />
      </div>
    </div>
  );
};

export default Dyte;
