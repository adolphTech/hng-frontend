// JavaScript code to update the dynamic data
const slackNameElement = document.querySelector(
  '[data-testid="slackUserName"]'
);
const slackImageElement = document.querySelector(
  '[data-testid="slackDisplayImage"]'
);
const currentDayElement = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTimeElement = document.querySelector(
  '[data-testid="currentUTCTime"]'
);
const trackElement = document.querySelector('[data-testid="myTrack"]');

// Set Slack Name and Image
slackNameElement.textContent = "Adolph";
slackImageElement.src = "slack_profile_picture.png";

// Get the current day of the week
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
currentDayElement.textContent = `Current Day: ${currentDayOfWeek}`;

//This functon will be used  to update the current UTC time
function updateCurrentUTCTime() {
  const currentUTCTime = Date.now();
  currentUTCTimeElement.textContent = `Current UTC Time: ${currentUTCTime} ms`;
}

// Update the current UTC time every second
setInterval(updateCurrentUTCTime, 1);

// Set your track
trackElement.textContent = "Frontend";
