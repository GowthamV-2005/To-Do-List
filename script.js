document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('taskForm');
  const taskList = document.getElementById('taskList');

  taskForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('taskName').value.trim();
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;
    const priority = document.getElementById('priority').value;

    if (!name || !startDate || !endDate || !priority) return;

    const li = document.createElement('li');
    li.className = 'task-item ${priority.toLowerCase()}';

    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info';
    taskInfo.innerHTML = `
      <strong>${name}</strong><br/>
      Start: ${startDate}<br/>
      End: ${endDate}<br/>
      Priority: ${priority}
    `;

    const actionDiv = document.createElement('div');
    actionDiv.className = 'task-actions';

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.textContent = 'Mark Completed';
    completeBtn.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      li.remove();
    });

    actionDiv.appendChild(completeBtn);
    actionDiv.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(actionDiv);

    taskList.appendChild(li);

    taskForm.reset();
  });
});