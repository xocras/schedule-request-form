// Load JSON file
fetch("json/schedules.json")
  .then((response) => response.json())
  .then((schedules) => {
    addScheduleOptions(schedules);
  })
  .catch((error) => {
    console.error("Error loading JSON:", error);
  });

function addScheduleOptions(schedules) {
  const selector = document.getElementById("schedule-selector");

  for (const [value, text] of Object.entries(schedules)) {
    const option = document.createElement("option");

    option.value = value;
    option.text = text;

    selector.add(option);
  }
}
