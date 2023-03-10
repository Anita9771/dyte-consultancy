import React from 'react'
import { useDyteMeeting, useDyteSelector, useDyteClient, DyteProvider } from '@dytesdk/react-web-core';
import { DyteGrid, DyteButton, DyteMeeting } from '@dytesdk/react-ui-kit';

const Meeting = () => {
    const { meeting } = useDyteMeeting();
    const [dyteMeeting, initMeeting] = useDyteClient();
    // const { meeting } = useDyteMeeting();

    return (
      <DyteProvider value={dyteMeeting}>
        <div style={{ height: '480px' }}>
        <DyteMeeting mode="fill" meeting={meeting} />
      </div>
      </DyteProvider>
    );
  }

export default Meeting