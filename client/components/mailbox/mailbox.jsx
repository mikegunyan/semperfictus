import React from 'react';
import Inbox from './mailboxes/inbox';
import Sent from './mailboxes/sent';
import Spam from './mailboxes/spam';

const Mailbox = ({ boxes }) => {
  if (boxes[0]) {
    return (
      <Inbox userid={1} />
    )
  }
  if (boxes[1]) {
    return (
      <Sent userid={1} />
    )
  }
  return (
    <Spam userid={1} />
  );
};

export default Mailbox;
