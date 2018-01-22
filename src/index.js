/**
 * @flow
 */
// "Thu, 7 Dec 2017 10:20:34 +0500"
function formatDate(str) {
  const monthListA = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthList1 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  let format = str.split(' ');
  format[2] = monthList1[monthListA.indexOf(format[2])];
  return `${format[2]}/${format[1]}/${format[3]} ${format[4]}`;
}

const store = require('./store/emails.json');

const inboxId = store.mailboxes.INBOX.threadIds;

const inboxList = inboxId.map((id) => {
  const emailObject = {};
  const email = store.messages[id];
  const emailHeader = store.messages[id].payload.headers;

  emailObject.sender = emailHeader[1].value.replace(/\s\\.+/g, '');
  // emailObject.time = emailHeader[0].value;
  const time = emailHeader[0].value;
  emailObject.time = formatDate(time);
  emailObject.subject = emailHeader[emailHeader.length - 1].value;
  emailObject.snippet = email.snippet;
  return emailObject;
});

const inboxHtmlList = inboxList.map((email) => {
  const li = `
      <li>
        <button class="email-item" type="button">
          <div class="sender-details">
            <p> ${email.sender} </p>
            <span>${email.time}</span>
          </div>
          <p class="email-subject">${email.subject}</p>
          <p class="email-snippet">${email.snippet}</p>
        </button>
      </li>`;
  return li;
});


function renderSidebar() {
  let sidebarContents = `
      <h2 class="email-header">Inbox</h2><ul class="email-list">`;

  let liHtml = '';
  for (const item of inboxHtmlList) {
    liHtml += item;
  }

  sidebarContents = `${sidebarContents + liHtml}</ul>`;

  const container = document.querySelector('.email-list-container');
  if (container != null) container.innerHTML = sidebarContents;
}

renderSidebar();
