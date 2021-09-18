let container = document.querySelector('.container');
let timeSlot = document.querySelector('.time-slot');
let activitySlot = document.querySelector('.activity-slot');
let collisions = [];
let width = [];
let leftOffSet = [];
const containerWidth = 200;
let rgbBgColor = '#E2ECF5';
let rgbColor = '#6E9ECF';
let spanBg = 'rgb(95, 255, 255)';

function drawTime(elem, container) {
    let time = 8;
    for(let i=0; i <= elem.clientHeight; i += 10) {
        let timeCreator = document.createElement('span');
        timeCreator.style.display = "inline-block";
        timeCreator.style.position = "absolute";
        let hrCreator = document.createElement('hr');
        hrCreator.classList.add("divider")
        if(!(i%60)) {
            let timeTable = time < 10 ? `0${time}:00` : `${time}:00`;
            timeCreator.style.fontSize = '16px';
            timeCreator.innerText = timeTable; 
            timeCreator.style.top = (i*2+2)+'px';
            hrCreator.style.top = (i*2)+'px';
            container.append(hrCreator);
            timeSlot.append(timeCreator);
        }
        else if(!(i%30)) {
            let timeTable = time < 10 ? `0${time}:30` : `${time}:30`;
            timeCreator.style.fontSize = '12px';
            timeCreator.innerText = timeTable; 
            timeCreator.style.transform = "translateY(-50%)";
            timeCreator.style.top = (i*2)+'px';
            timeSlot.append(timeCreator);
            time++;
        }
    }
}
drawTime(timeSlot, container);

const createEvent = (height, top, left, units, title, rgbBgColor, rgbColor) => {
    let node = document.createElement("div");
    node.className = "event";
    node.innerHTML = title;
    node.style.width = (containerWidth/units) + "px";
    node.style.height = height + "px";
    node.style.top = top + "px";
    node.style.left = left + "px";
    node.style.backgroundColor = rgbBgColor;
    node.style.borderLeftColor = rgbColor;
    activitySlot.append(node);
}



// find collisions

function getCollisions (events) {
    collisions = [];

    for (var i = 0; i < 24; i ++) {
      var time = [];
      for (var j = 0; j < events.length; j++) {
        time.push(0);
      }
      collisions.push(time);
    }

    events.forEach((event, id) => {
      let end = event.start + event.duration;
      let start = event.start;
      let order = 1;

      while (start < end) {
        timeIndex = Math.floor(start/30);

        while (order < events.length) {
          if (collisions[timeIndex].indexOf(order) === -1) {
            break;
          }
          order ++;
        }

        collisions[timeIndex][id] = order;
        start = start + 30;
      }

      collisions[Math.floor((end-1)/30)][id] = order;
    });
};

// find width and horizontal position

function getAttributes(events) {

  width = [];
  leftOffSet = [];

  for (var i = 0; i < events.length; i++) {
    width.push(0);
    leftOffSet.push(0);
  }

  collisions.forEach((period) => {

    let count = period.reduce((a,b) => {
      return b ? a + 1 : a;
    })

    if (count > 1) {
      period.forEach((event, id) => {
        if (period[id]) {
          if (count > width[id]) {
            width[id] = count;
          }
        }

        if (period[id] && !leftOffSet[id]) {
          leftOffSet[id] = period[id];
        }
      })
    }
  });
};
  
// delete/edit event 

function editor(spanBg) {
  let eventsCollection = document.querySelectorAll('.event');
  eventsCollection.forEach((event, idx) => {
    let eventWidth = event.style.width;
    let leftMargin = event.style.left;
    let spanCreator = document.createElement('span');
    event.append(spanCreator);
    spanCreator.classList.add('close');
    spanCreator.innerHTML = 'X';
    spanCreator.style.backgroundColor = spanBg;
    event.addEventListener('mouseover', () =>{
      if(event.style.left !== "10px") {
        event.style.left = "10px";
      }
      event.style.zIndex = 5;
      event.style.width = "100%";
      spanCreator.style.display = "inline-block";
      spanCreator.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        schedule.splice(idx, 1);
        drawElements(schedule, rgbBgColor, rgbColor);
      })
    })
    event.addEventListener('mouseout', () =>{
      spanCreator.style.display = "none";
      event.style.left = leftMargin;
      event.style.width = eventWidth;
      event.style.zIndex = 2;
    })
    // edit event
    event.addEventListener('dblclick', function(e) {
      let formEdit = document.createElement('form');
      let areaEventEdit = document.createElement('textarea');
      let divCreator = document.createElement('div');
      let inputEventStart = document.createElement('input');
      let inputEventStartMinutes = document.createElement('input');
      let labelEventStart = document.createElement('label');
      let labelEventDuration = document.createElement('label');
      let inputEventDuration = document.createElement('input');
      let btnEdit = document.createElement('input');
      let spanCreator = document.createElement('span');
      inputEventStart.setAttribute('type','number');
      inputEventStartMinutes.setAttribute('type','number');
      inputEventDuration.setAttribute('type','number');
      btnEdit.setAttribute('type','submit');
      btnEdit.setAttribute('value','Save');
      divCreator.classList.add('event-starter-wrapper');

      labelEventStart.innerText = "Edit event start time: ";
      labelEventDuration.innerText = "Edit event duration: ";

      areaEventEdit.value = schedule[idx].title;

      inputEventStart.value = (Math.floor(schedule[idx].start / 60)) + 8;
      inputEventStartMinutes.value = schedule[idx].start % 60;
      inputEventDuration.value = schedule[idx].duration;

      container.append(formEdit);
      formEdit.classList.add('updated');
      formEdit.append(areaEventEdit);
      formEdit.append(labelEventStart);
      formEdit.append(divCreator);
      divCreator.append(inputEventStart);
      divCreator.append(inputEventStartMinutes);
      formEdit.append(labelEventDuration);
      formEdit.append(inputEventDuration);
      formEdit.append(btnEdit);

      formEdit.addEventListener('submit', function(e) {
        e.preventDefault();
        let start = (Number(inputEventStart.value)*60 - 480) + Number(inputEventStartMinutes.value);
        let end = start + Number(inputEventDuration.value);
        if( start >= 0 && end <=540) {
          schedule[idx].start = start;
          schedule[idx].duration = Number(inputEventDuration.value);
          schedule[idx].title = areaEventEdit.value;
          formEdit.replaceWith(spanCreator);
          drawElements(schedule, rgbBgColor, rgbColor);
        }
      });
    });
  });
};

const drawElements = (events, rgbBgColor, rgbColor) => {
  activitySlot.innerHTML = '';
  getCollisions(events);
  getAttributes(events);
  events.forEach((event, id) => {
    let height = event.duration*2;
    let top = event.start*2; 
    let units = width[id];
    let title = event.title;
    if (!units) {units = 1};
    let left = (containerWidth / width[id]) * (leftOffSet[id] - 1) + 10;
    if (!left || left < 0) {left = 10};
    if(event.start <= 540 && (event.start + event.duration) <= 540) {
      createEvent(height, top, left, units,title, rgbBgColor, rgbColor);
    }
  });
  editor(spanBg);
}

drawElements(schedule, rgbBgColor, rgbColor);

// Add form for extra event 

let eventForm = document.querySelector("#event-form");
let eventTitle = document.querySelector("#event-title");
let eventStartHours = document.querySelector("#event-start-hour");
let eventStartMinutes = document.querySelector("#event-start-minut");
let eventDuration = document.querySelector("#event-duration");
let eventSubmit = document.querySelector("#event-submit");

eventForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let start = (Number(eventStartHours.value)*60 - 480) + Number(eventStartMinutes.value);
  let end = start + Number(eventDuration.value);
  if( start >= 0 && end <=540) {
    schedule.push({start, duration: Number(eventDuration.value), title: eventTitle.value});
    eventStartHours.value = '';
    eventStartMinutes.value = '';
    eventDuration.value= '';
    eventTitle.value = '';
  }
  drawElements(schedule, rgbBgColor, rgbColor);
})

// add form for change backgroundColor

let colorForm = document.querySelector("#color-form");
let colorInput = document.querySelector("#event-color");
let colorSubmit = document.querySelector("#color-submit");

colorForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let color = colorInput.value;
  let r = parseInt(color.substr(1,2), 16);
  let g = parseInt(color.substr(3,2), 16);
  let b = parseInt(color.substr(5,2), 16);
  rgbColor = `rgb(${r}, ${g}, ${b})`;
  rgbBgColor = `rgba(${r}, ${g}, ${b}, .5)`;
  spanBg = `rgb(${r+5}, ${g+10}, ${b+15})`;
  drawElements(schedule, rgbBgColor, rgbColor);
})

// add remind block

function remind(eventShedule) {
  let remindWrapper = document.querySelector('.remind');
  let remindParagraph = document.querySelector('.remind-event');
  let sec = 0;
  let min = 0;
  let eventTimer = setInterval(()=>{
    if(sec === 60) {
      min++;
      sec = 0;
    }
    eventShedule.forEach(event => {
        if(event.start === min) {
          if(sec <= 7) {
            remindWrapper.classList.add('active');
            remindParagraph.innerHTML = `Don't forget about: ${event.title}`;
          } else remindWrapper.classList.remove('active');
        }
    });
    sec++;
  }, 1000)
}

remind(schedule);