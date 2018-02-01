/**
 * @flow
 */
const store = require('./store/emails.json');

// try push to task2 branch
// render mailbox & threads
function formatMailbox(mailbox) {
  const category = mailbox.replace(/.+_/, '');
  const lowerCase = [...category].map((letter, index) => index === 0 ?
    letter.toUpperCase() : letter.toLowerCase());
  return lowerCase.join('');
}

function renderMailbox() {
  const mailboxes = Object.keys(store.mailboxes);
  const mailboxHTML = mailboxes.map((mailbox, index) => {
    const category = formatMailbox(mailbox);
    return index === 0 ? `
        <li class="mailbox-item active">${category}</li>
      ` : `
        <li class="mailbox-item">${category}</li>
      `;
  });
  const mailboxList = mailboxHTML.join('');
  const container = document.querySelector('.mailbox-list');
  if (container != null) container.innerHTML = mailboxList;
}

function formatDate(time) {
  const date = new Date(Number(time));
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
}

function formatSubject(subject) {
  return subject.length > 45 ? `${subject.substring(0, 45)}...` : subject;
}

function formatSnippet(snippet) {
  return snippet.length > 110 ? `${snippet.substring(0, 110)}...` : snippet;
}

function getLastMessage(thread) {
  const [lastMessage] = thread.messages.slice(-1); // slice -> array
  return store.messages[lastMessage.id];
}

function renderThreads() {
  const inboxId = store.mailboxes.INBOX.threadIds;

  // email id map to email object
  const inboxList = inboxId.map((id) => {
    const thread = store.threads[id];
    const email = getLastMessage(thread);
    const emailHeader = email.payload.headers;
    const time = email.internalDate;
    return {
      sender: emailHeader[1].value.replace(/\s\\.+/g, '') || 'No Sender',
      time: formatDate(time),
      subject: emailHeader[emailHeader.length - 1].value || 'No Subject',
      snippet: email.snippet,
    };
  });

  // email object to HTML
  const inboxHtmlList = inboxList.map(email => `
    <li>
      <button class="email-item" type="button">
        <div class="sender-details">
          <p> ${email.sender} </p>
          <span>${email.time}</span>
        </div>
        <p class="email-subject">${formatSubject(email.subject)}</p>
        <p class="email-snippet">${formatSnippet(email.snippet)}</p>
      </button>
    </li>
  `);

  const liHtml = inboxHtmlList.join('');
  const container = document.querySelector('.email-list');
  if (container != null) container.innerHTML = liHtml;
}

renderMailbox();
renderThreads();

// click mailbox to switch
function switchMailbox() {

}

switchMailbox();
