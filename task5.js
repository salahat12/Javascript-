const tasks = [
{
title: "Study JS",
description: "Finish destructuring section",
dueDate: "2025-12-01T21:00:00", // string
isDone: false,
priority: "high",
createdAt: "2025-11-27T18:00:00",
owner: {
name: "Ahmed",
group: "A"
}
},
{
title: "Prepare Slides",
description: "Create slides for JavaScript session",
dueDate: "2025-11-30T20:00:00",
isDone: false,
priority: "medium",
createdAt: "2025-11-27T10:30:00",
owner: {
name: "Sara",
group: "B"
}
},
{
title: "Code Review",
description: "Review students' JS homework",
dueDate: "2025-11-29T19:00:00",
isDone: true,
priority: "low",
createdAt: "2025-11-26T14:15:00",
owner: {
name: "Ghaida",
group: "A"
}
},
{
title: "Update Repo",
description: "Push latest examples to GitHub",
dueDate: "2025-11-28T22:00:00",
isDone: false,
priority: "high",
createdAt: "2025-11-27T09:00:00",
owner: {
name: "Laila",
group: "C"
}
},
{
title: "Write Quiz",
description: "Prepare JS quiz about destructuring and dates",

dueDate: "2025-12-02T18:30:00",
isDone: false,
priority: "medium",
createdAt: "2025-11-27T16:45:00",
owner: {
name: "Khalid",
group: "B"
}
}
];
function attachDates(tasks) {
  tasks.forEach(task => {
    task.due = new Date(task.dueDate);
    task.created = new Date(task.createdAt);
  });
}
function formatDate(date) {
  const d = date.getDate().toString().padStart(2, "0");
  const m = (date.getMonth() + 1).toString().padStart(2, "0");
  const y = date.getFullYear();

  const h = date.getHours().toString().padStart(2, "0");
  const min = date.getMinutes().toString().padStart(2, "0");

  return `${d}/${m}/${y} ${h}:${min}`;
}
function printTasks(tasks) {
  tasks.forEach(({ title, priority, isDone, due, owner: { name } }) => {
    console.log("---------------");
    console.log(`Title: ${title}`);
    console.log(`Owner: ${name}`);
    console.log(`Priority: ${priority}`);
    console.log(`Status: ${isDone ? "Done" : "Not Done"}`);
    console.log(`Due: ${formatDate(due)}`);
  });
}
function getNextTasks(tasks) {
  const now = new Date();
  return tasks.filter(task => !task.isDone && task.due > now);
}
function getStats(tasks) {
  return tasks.reduce(
    (stats, task) => {
      stats.total++;
      task.isDone ? stats.done++ : stats.notDone++;
      return stats;
    },
    { total: 0, done: 0, notDone: 0 }
  );
}
attachDates(tasks);

console.log("All Tasks:");
printTasks(tasks);

console.log("\nNext Tasks:");
console.log(getNextTasks(tasks));

console.log("\nStatistics:");
console.log(getStats(tasks));
