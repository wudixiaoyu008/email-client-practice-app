/**
 * This is the schema for the data store of the emails provided for the Codework
 * Email Client Practice App
 *
 * @flow
 */

import type { URLSafeBase64 } from '../utility/Base64';

// The keys for the tables in this data store. Using opaque types, which hide
// the underlying data structure from consumers of the type, ensures that every
// key used to access the table is valid. It prevents you from using an
// arbitrary string; instead you can only use a value that you’ve gotten from
// another location in the data store.
export type MessageKey = string;
export type ThreadKey = string;

// A label can be any string, but the following have internal meanings:
// CATEGORY_FORUMS, CATEGORY_PERSONAL, CATEGORY_SOCIAL, IMPORTANT,
// CATEGORY_UPDATES, CHAT, SENT, INBOX, TRASH,
// CATEGORY_PROMOTIONS, DRAFT, SPAM, STARRED, UNREAD
export type Label = string;

export type Header = { name: string, value: string };

export type MessageMetadata = {
  id: MessageKey,
  threadId: ThreadKey,
  labelIds: Label[],

  // A short part of the message text, intended for previews
  snippet: string,

  // A stringified version of the Unix timestamp that the message was received
  // by the server, since the DATE header can’t be trusted (even just to specify
  // its time zone).
  internalDate: string,
};

// This type is recursive! Messages of mimeType multipart/... will contain their
// parts as child parts. You’ll recognize mimeTypes 'text/plain' and 'text/html'
export type MessagePart = {
  partId: string,
  mimeType: string,
  filename: string,

  // You might be interested in headers named "From", "To", "Subject", "CC", ...
  headers: Header[],

  body?: {
    size: number,
    data?: URLSafeBase64,
  },
  parts?: MessagePart[],
};

export type Message = MessageMetadata & { payload: MessagePart };

export type Thread = {
  id: ThreadKey,
  messages: MessageMetadata[],
};

export type Data = {
  mailboxes: {
    [mailboxName: Label]: ?{
      threadIds: ThreadKey[],
    },
  },
  messages: { [id: MessageKey]: Message },
  threads: { [id: ThreadKey]: Thread },
};
