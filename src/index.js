// example of generating HTML with js
function renderSidebar() {
  const sidebarContents = `
    <h2 class="email-header">Inbox</h2>
    <ul class="email-list">
      <li>
        <button class="email-item" type="button">
          <div class="sender-details">
            <p>Email sender</p>
            <span>Timestamp</span>
          </div>
          <p class="email-subject">Email1 subject</p>
          <p>Email snippet</p>
        </button>
      </li>
    </ul>
  `;
  document.querySelector('.email-list-container').innerHTML = sidebarContents;
}

renderSidebar();
