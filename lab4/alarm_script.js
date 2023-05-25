let alarmInterval;

function setAlarm() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const onoff = document.getElementById("onoff").checked;

  if (onoff) {
    const alarmTime = new Date(date + " " + time).getTime();
    const now = new Date().getTime();
    let timeToAlarm = alarmTime - now;

    if (timeToAlarm < 0) {
      timeToAlarm += 24 * 60 * 60 * 1000;
    }

    alarmInterval = setTimeout(() => {
      alert("!!!Будильник!!!");
      document.getElementById("onoff").checked = false;
      document.getElementById("message").innerHTML = "Будильник закінчив дію.";
    }, timeToAlarm);

    document.getElementById("message").innerHTML =
      "Увага: Будильник встановлено на " + date + " " + time + ".";
  } else {
    clearTimeout(alarmInterval);
    document.getElementById("message").innerHTML = "";
  }
}
