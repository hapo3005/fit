const PLANS = {
  A: [
    {name:"SZ-Floor-Press",sets:4,reps:"6–12",rest:"2–3 min",focus:"Brust · Trizeps",note:"Nur nutzen, wenn du die Stange sicher in Start- und Endposition bekommst. Sonst band-resistierte Liegestütze verwenden."},
    {name:"Split Squat",sets:4,reps:"8–15 / Bein",rest:"2 min",focus:"Quadrizeps · Gesäß",note:"Schmerzfreie Tiefe. Bei Bedarf leicht festhalten, damit die Zielmuskulatur statt Balance limitiert."},
    {name:"Vorgebeugtes SZ-Rudern",sets:4,reps:"8–15",rest:"2 min",focus:"Rücken · Bizeps",note:"Rumpf stabil, Ellbogen kontrolliert nach hinten führen. Kein Schwung aus der Hüfte."},
    {name:"Rumänisches Kreuzheben",sets:3,reps:"8–15",rest:"2–3 min",focus:"Beinbeuger · Gesäß",note:"Hüfte nach hinten, Rücken neutral. Stoppe die Abwärtsbewegung, sobald Spannung oder Rückenposition verloren gehen."},
    {name:"Theraband-Seitheben",sets:3,reps:"12–25",rest:"60–90 s",focus:"Seitliche Schulter",note:"Leichte Ellenbogenbeugung, ohne Hochziehen der Schultern."},
    {name:"SZ-Curl",sets:2,reps:"8–15",rest:"60–90 s",focus:"Bizeps",note:"Oberarme ruhig halten. Letzter Satz darf sehr nah ans technische Versagen."},
    {name:"Weighted Crunch",sets:3,reps:"10–20",rest:"60–90 s",focus:"Bauch",note:"Rippen Richtung Becken einrollen; nicht nur den Nacken anheben."},
    {name:"Side Plank",sets:2,reps:"20–45 s / Seite",rest:"45–60 s",focus:"Core",note:"Becken aktiv oben halten und nicht nach hinten rotieren."}
  ],
  B: [
    {name:"Band-resistierte Liegestütze",sets:4,reps:"8–20",rest:"2 min",focus:"Brust · Trizeps",note:"Band über den oberen Rücken führen. Sobald 20 Wiederholungen sauber sind, Widerstand erhöhen."},
    {name:"SZ-Glute-Bridge",sets:4,reps:"8–15",rest:"2 min",focus:"Gesäß · Beinbeuger",note:"Oben kurz maximal anspannen, ohne ins Hohlkreuz zu drücken."},
    {name:"Sitzendes Theraband-Rudern",sets:4,reps:"10–20",rest:"90–120 s",focus:"Rücken · Bizeps",note:"Schulterblätter zurückziehen, Brust stolz, kontrollierte Rückführung."},
    {name:"Goblet Squat mit Scheibe",sets:3,reps:"10–20",rest:"2 min",focus:"Quadrizeps · Gesäß",note:"Gewicht nah am Brustkorb halten. Nur so tief, wie Knie und Rücken stabil bleiben."},
    {name:"Theraband-Schulterdrücken",sets:3,reps:"8–15",rest:"90 s",focus:"Schultern",note:"Rippen unten halten, nicht ins Hohlkreuz ausweichen."},
    {name:"Theraband-Trizepsstrecken",sets:2,reps:"10–20",rest:"60–90 s",focus:"Trizeps",note:"Oberarme fixieren und vollständige Streckung kontrollieren."},
    {name:"Reverse Crunch",sets:3,reps:"10–20",rest:"60 s",focus:"Bauch",note:"Becken einrollen; Schwung aus den Beinen vermeiden."},
    {name:"Dead Bug",sets:2,reps:"8–12 / Seite",rest:"45–60 s",focus:"Core",note:"Lendenwirbelsäule kontrolliert, langsam und ohne Pressatmung arbeiten."}
  ],
  C: [
    {name:"Füße erhöhte Liegestütze",sets:4,reps:"6–15",rest:"2 min",focus:"Brust · Schulter",note:"Füße nur so hoch, dass die Brust weiter sauber arbeitet. Bei Bedarf Bandwiderstand ergänzen."},
    {name:"Reverse Lunge / Split Squat",sets:4,reps:"8–15 / Bein",rest:"2 min",focus:"Quadrizeps · Gesäß",note:"Wähle die Variante, die sich im Knie am stabilsten anfühlt."},
    {name:"SZ-Rudern im Untergriff",sets:4,reps:"8–15",rest:"2 min",focus:"Rücken · Bizeps",note:"Handgelenke neutral halten. Zug in Richtung unterer Rippen/Bauch."},
    {name:"Single-Leg RDL",sets:3,reps:"8–15 / Bein",rest:"2 min",focus:"Beinbeuger · Gesäß",note:"Zunächst mit leichtem Gewicht und optionaler Stütze lernen."},
    {name:"Theraband-Seitheben",sets:3,reps:"12–25",rest:"60–90 s",focus:"Seitliche Schulter",note:"Kontrolliert anheben und absenken; keine Schwungwiederholungen."},
    {name:"SZ-Curl",sets:2,reps:"8–15",rest:"60–90 s",focus:"Bizeps",note:"Saubere Exzentrik. Gewicht erst erhöhen, wenn der Bereich vollständig erreicht wird."},
    {name:"Theraband-Trizepsstrecken",sets:2,reps:"10–20",rest:"60–90 s",focus:"Trizeps",note:"Konstante Bandspannung über den gesamten Satz."},
    {name:"Weighted Crunch",sets:3,reps:"10–20",rest:"60–90 s",focus:"Bauch",note:"Progression wie bei jeder anderen Muskelgruppe: mehr Wiederholungen, dann mehr Widerstand."},
    {name:"Side Plank",sets:2,reps:"20–45 s / Seite",rest:"45–60 s",focus:"Core",note:"Spannung in Gesäß und Bauch halten."}
  ]
};


const EXERCISE_DETAILS = {
  "SZ-Floor-Press": {
    muscles: "Brust · Trizeps · vordere Schulter",
    intro: "Eine schwere Druckübung am Boden. Sie begrenzt die untere Position automatisch und eignet sich gut für kontrollierten Brust- und Trizepsaufbau zuhause.",
    diagram: "floorPress",
    goal: "Brustmasse und Druckkraft aufbauen, ohne eine Hantelbank zu benötigen.",
    steps: [
      "Lege dich flach auf die Matte und stelle beide Füße stabil auf.",
      "Bringe die SZ-Stange sicher über die Brust. Die Handgelenke bleiben möglichst neutral.",
      "Senke die Stange kontrolliert ab, bis die Oberarme den Boden sanft berühren.",
      "Halte die Schulterblätter stabil und drücke die Stange kraftvoll nach oben.",
      "Oben nicht hektisch einrasten; Spannung halten und die nächste Wiederholung kontrolliert beginnen."
    ],
    cues: [
      "Schulterblätter ruhig und stabil halten.",
      "Ellbogen nicht maximal seitlich abspreizen.",
      "Absenken kontrollieren statt die Oberarme auf den Boden fallen zu lassen.",
      "Nur so schwer trainieren, dass Start- und Endposition sicher bleiben."
    ],
    mistakes: [
      "Die Stange ohne sichere Ablage- oder Startmöglichkeit verwenden.",
      "Mit Schwung vom Boden abprallen.",
      "Schultern Richtung Ohren ziehen.",
      "Gewicht erhöhen, obwohl Wiederholungen oder Handgelenke instabil werden."
    ],
    personal: "Wenn du die SZ-Stange allein nicht zuverlässig und sicher in die Start- und Endposition bekommst, ist die band-resistierte Liegestütze für diesen Trainingstag die bessere Hauptübung.",
    progression: [
      "Im Bereich von 6–12 Wiederholungen arbeiten.",
      "Erst Wiederholungen steigern, bis alle vier Sätze sauber am oberen Ende liegen.",
      "Dann die Last in der kleinsten sinnvollen Stufe erhöhen.",
      "Wenn 30 kg langfristig zu leicht werden, zusätzliche Bandspannung oder schwierigere Liegestützvarianten nutzen."
    ],
    prescription: ["4 Sätze","6–12 Wdh.","2–3 min Pause"]
  },
  "Split Squat": {
    muscles: "Quadrizeps · Gesäß · Adduktoren · Core",
    intro: "Eine einbeinbetonte Kniebeuge, mit der begrenztes Zusatzgewicht sehr effektiv wird. Sie ist deshalb eine Schlüsselübung für kräftigere, muskulösere Beine zuhause.",
    diagram: "splitSquat",
    goal: "Quadrizeps und Gesäß mit hoher relativer Belastung trainieren und gleichzeitig Bein- und Beckenstabilität verbessern.",
    steps: [
      "Stelle einen Fuß nach vorn und den anderen deutlich nach hinten. Der Stand ist eher lang als schmal.",
      "Belaste den vorderen Fuß vollständig: Ferse, Großzehen- und Kleinzehenballen bleiben am Boden.",
      "Spanne Bauch und Gesäß an und senke den Körper kontrolliert nach unten.",
      "Das vordere Knie folgt der Richtung der Fußspitze und darf sich kontrolliert nach vorn bewegen.",
      "Stoppe dort, wo Knie, Hüfte und Rücken stabil und schmerzfrei bleiben.",
      "Drücke dich über den gesamten vorderen Fuß wieder nach oben."
    ],
    cues: [
      "Bei Bedarf mit einer Hand leicht an Wand oder Möbelstück festhalten.",
      "Balance soll nicht der limitierende Faktor sein; Ziel ist die Beinmuskulatur.",
      "Das Knie nicht nach innen kollabieren lassen.",
      "Kontrolliert absenken und ohne Federn aus der Tiefe hochkommen."
    ],
    mistakes: [
      "Zu kurzer Stand, sodass die Position instabil und eingeengt wird.",
      "Vordere Ferse hebt vom Boden ab.",
      "Knie fällt deutlich nach innen.",
      "Oberkörper oder Becken verdrehen sich.",
      "Zusatzgewicht erhöhen, bevor die Bewegung stabil beherrscht wird."
    ],
    personal: "Für dein Knie gilt: schmerzfreie Bewegungsamplitude ist wichtiger als maximale Tiefe. Beginne notfalls nur mit Körpergewicht und leichter Stütze. Ein leichtes Vorneigen des Oberkörpers ist in Ordnung, solange Rücken und Becken kontrolliert bleiben.",
    progression: [
      "Im Bereich von 8–15 sauberen Wiederholungen pro Bein arbeiten.",
      "Zuerst die Bewegung und Balance mit Körpergewicht stabilisieren.",
      "Dann Gewichtsscheibe oder SZ-Last ergänzen und schrittweise erhöhen.",
      "Wenn die Last begrenzt ist, die Abwärtsphase auf etwa drei Sekunden verlängern oder die Variante später anspruchsvoller gestalten."
    ],
    prescription: ["4 Sätze je Bein","8–15 Wdh.","2 min Pause"]
  }
};

const STORAGE = {
  workouts:"fit_workouts_v1",
  measurements:"fit_measurements_v1",
  settings:"fit_settings_v1",
  draft:"fit_workout_draft_v1"
};

const state = {
  currentPlan:"A",
  planPreview:"A",
  workoutStart:null,
  timerId:null,
  readiness:3
};

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => [...root.querySelectorAll(sel)];
const read = (key, fallback=[]) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const esc = str => String(str).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));

function dateKey(d=new Date()){
  const y=d.getFullYear(), m=String(d.getMonth()+1).padStart(2,"0"), day=String(d.getDate()).padStart(2,"0");
  return `${y}-${m}-${day}`;
}
function germanDate(d=new Date()){
  return new Intl.DateTimeFormat("de-DE",{weekday:"long",day:"2-digit",month:"long"}).format(d);
}
function nextPlanForDate(d=new Date()){
  const weekday=d.getDay();
  if(weekday===2) return "A";
  if(weekday===4) return "B";
  if(weekday===6) return "C";
  const next = new Date(d);
  for(let i=1;i<=7;i++){
    next.setDate(d.getDate()+i);
    if([2,4,6].includes(next.getDay())) return nextPlanForDate(next);
  }
  return "A";
}
function isTrainingDay(d=new Date()){ return [2,4,6].includes(d.getDay()); }

function init(){
  const settings=read(STORAGE.settings,{});
  state.currentPlan=settings.lastPlan || nextPlanForDate(new Date());
  state.planPreview=state.currentPlan;
  state.readiness=Number(settings.readiness || 3);
  $("#readinessRange").value=state.readiness;
  $("#readinessValue").textContent=`${state.readiness} / 5`;
  $("#measurementForm [name=date]").value=dateKey();
  bindNav();
  bindControls();
  renderToday();
  renderPlan();
  renderProgress();
}

function bindNav(){
  $$("[data-view-link]").forEach(btn => btn.addEventListener("click", e => {
    e.preventDefault();
    const view=btn.dataset.viewLink;
    $$(".view").forEach(v => v.classList.toggle("is-active",v.dataset.view===view));
    $$(".bottom-nav button").forEach(v => v.classList.toggle("is-active",v.dataset.viewLink===view));
    if(view==="progress") renderProgress();
    window.scrollTo({top:0,behavior:"smooth"});
  }));
}

function bindControls(){
  $("#readinessRange").addEventListener("input",e=>{
    state.readiness=Number(e.target.value);
    $("#readinessValue").textContent=`${state.readiness} / 5`;
    const settings=read(STORAGE.settings,{});
    write(STORAGE.settings,{...settings,readiness:state.readiness});
  });
  $("#switchWorkoutBtn").addEventListener("click",()=>{
    state.currentPlan=state.currentPlan==="A"?"B":state.currentPlan==="B"?"C":"A";
    const settings=read(STORAGE.settings,{});
    write(STORAGE.settings,{...settings,lastPlan:state.currentPlan});
    renderToday();
  });
  $("#planSwitcher").addEventListener("click",e=>{
    const btn=e.target.closest("[data-plan]");
    if(!btn) return;
    state.planPreview=btn.dataset.plan;
    renderPlan();
  });
  $("#startWorkoutBtn").addEventListener("click",startWorkout);
  $("#saveDraftBtn").addEventListener("click",saveDraft);
  $("#finishWorkoutBtn").addEventListener("click",finishWorkout);
  $("#resetDraftBtn").addEventListener("click",()=>{
    if(confirm("Aktuellen Workout-Entwurf wirklich löschen?")){
      localStorage.removeItem(STORAGE.draft);
      alert("Workout-Entwurf gelöscht.");
    }
  });
  $("#measurementForm").addEventListener("submit",saveMeasurement);
  document.addEventListener("click",e=>{
    const help=e.target.closest("[data-exercise-help]");
    if(help){
      e.preventDefault();
      e.stopPropagation();
      openExerciseDetail(help.dataset.exerciseHelp);
      return;
    }
    const card=e.target.closest(".exercise-card.has-detail");
    if(card && !e.target.closest("button")) openExerciseDetail(card.dataset.exerciseName);
  });
  $("#clearDataBtn").addEventListener("click",()=>{
    if(confirm("Alle lokalen FIT-Daten in diesem Browser endgültig löschen?")){
      Object.values(STORAGE).forEach(key=>localStorage.removeItem(key));
      location.reload();
    }
  });
}

function exerciseCard(ex,i){
  const hasDetail=Boolean(EXERCISE_DETAILS[ex.name]);
  return `<article class="exercise-card${hasDetail?" has-detail":""}" data-exercise-name="${esc(ex.name)}">
    <div class="exercise-index">${String(i+1).padStart(2,"0")}</div>
    <div>
      <h3>${esc(ex.name)}</h3>
      <div class="exercise-meta">
        <span>${ex.sets} Sätze</span><span>${esc(ex.reps)}</span><span>${esc(ex.rest)}</span>
      </div>
    </div>
    ${hasDetail?`<button class="exercise-help" type="button" data-exercise-help="${esc(ex.name)}">Anleitung</button>`:`<div class="exercise-focus">${esc(ex.focus)}</div>`}
    <div class="exercise-note">${esc(ex.note)}</div>
  </article>`;
}


function openExerciseDetail(name){
  const d=EXERCISE_DETAILS[name];
  if(!d) return;
  $("#exerciseDialogTitle").textContent=name;
  $("#exerciseDetailContent").innerHTML=`
    <div class="exercise-visual">
      <canvas id="exerciseDiagram" width="1200" height="600" aria-label="${esc(name)} Start- und Endposition"></canvas>
    </div>
    <div class="exercise-intro">
      <span class="muscles">${esc(d.muscles)}</span>
      <p>${esc(d.intro)}</p>
      <div class="exercise-prescription">${d.prescription.map(x=>`<span>${esc(x)}</span>`).join("")}</div>
    </div>
    <div class="exercise-info-grid">
      <section class="exercise-info"><h3>So geht’s</h3><ol>${d.steps.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></section>
      <section class="exercise-info"><h3>Achte darauf</h3><ul>${d.cues.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>
      <section class="exercise-info"><h3>Häufige Fehler</h3><ul>${d.mistakes.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>
      <section class="exercise-info"><h3>Progression</h3><ul>${d.progression.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>
      <section class="exercise-info personal"><h3>Für dich wichtig</h3><p>${esc(d.personal)}</p></section>
      <section class="exercise-info"><h3>Trainingsziel</h3><p>${esc(d.goal)}</p></section>
    </div>`;
  const canvas=$("#exerciseDiagram");
  drawExerciseDiagram(canvas,d.diagram);
  $("#exerciseDialog").showModal();
}

function drawExerciseDiagram(canvas,type){
  if(!canvas) return;
  const ctx=canvas.getContext("2d");
  const w=canvas.width,h=canvas.height;
  const bg="#111419", panel="#181c22", line="#eef2f5", muted="#727b87", accent="#d7ff43";
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle=bg; ctx.fillRect(0,0,w,h);
  function roundedRect(x,y,width,height,r,fill,stroke){
    ctx.beginPath(); ctx.roundRect(x,y,width,height,r);
    if(fill){ctx.fillStyle=fill;ctx.fill();}
    if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=2;ctx.stroke();}
  }
  roundedRect(28,28,552,544,28,panel,"#2a3038");
  roundedRect(620,28,552,544,28,panel,"#2a3038");
  ctx.font="800 27px Arial"; ctx.fillStyle=accent; ctx.fillText(type==="splitSquat"?"START":"UNTEN",70,82); ctx.fillText(type==="splitSquat"?"TIEF":"OBEN",662,82);
  ctx.font="700 16px Arial";ctx.fillStyle=muted;
  ctx.fillText(type==="splitSquat"?"STABILER LANGER STAND":"OBERARME SANFT AM BODEN",70,112);
  ctx.fillText(type==="splitSquat"?"KONTROLLIERT ABSENKEN":"KRAFTVOLL KONTROLLIERT DRÜCKEN",662,112);
  ctx.lineCap="round";ctx.lineJoin="round";

  function limb(x1,y1,x2,y2,color=line,width=17){ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();}
  function head(x,y){ctx.beginPath();ctx.arc(x,y,31,0,Math.PI*2);ctx.fillStyle=line;ctx.fill();}
  function joint(x,y,color=accent){ctx.beginPath();ctx.arc(x,y,9,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();}

  if(type==="splitSquat"){
    ctx.strokeStyle="#3a414b";ctx.lineWidth=3;ctx.setLineDash([10,10]);
    limb(58,492,550,492,"#3a414b",3);limb(650,492,1140,492,"#3a414b",3);ctx.setLineDash([]);

    head(294,166); limb(294,205,294,330); limb(292,244,238,294,line,15); limb(292,244,346,294,line,15);
    limb(294,330,224,412,accent,21); limb(224,412,218,486,accent,21); joint(224,412);
    limb(294,330,390,407,line,18); limb(390,407,438,482,line,18); limb(184,492,244,492,line,12); limb(430,492,470,492,line,12);

    head(876,182); limb(876,220,846,342); limb(864,255,810,310,line,15); limb(864,255,918,304,line,15);
    limb(846,342,756,402,accent,21); limb(756,402,742,486,accent,21); joint(756,402);
    limb(846,342,952,406,line,18); limb(952,406,1016,482,line,18); limb(710,492,774,492,line,12); limb(1008,492,1050,492,line,12);
    ctx.setLineDash([7,7]);limb(756,402,756,486,accent,4);ctx.setLineDash([]);
  }else{
    roundedRect(76,438,456,35,18,"#252b33"); roundedRect(660,438,456,35,18,"#252b33");
    head(176,382); limb(212,397,382,405); limb(350,405,420,350); limb(420,350,472,435);
    limb(272,396,254,290,accent,18); limb(332,399,350,290,accent,18);
    limb(200,282,406,282,accent,11); ctx.fillStyle=accent;ctx.beginPath();ctx.arc(194,282,22,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(412,282,22,0,Math.PI*2);ctx.fill();

    head(760,382); limb(796,397,966,405); limb(934,405,1004,350); limb(1004,350,1056,435);
    limb(856,396,846,218,accent,18); limb(916,399,926,218,accent,18);
    limb(790,210,982,210,accent,11); ctx.fillStyle=accent;ctx.beginPath();ctx.arc(784,210,22,0,Math.PI*2);ctx.fill();ctx.beginPath();ctx.arc(988,210,22,0,Math.PI*2);ctx.fill();
  }
}

function renderToday(){
  const today=new Date();
  const training=isTrainingDay(today);
  $("#todayDate").textContent=germanDate(today);
  $("#todayBadge").textContent=state.currentPlan;
  $("#sessionTitle").textContent=`Training ${state.currentPlan}`;
  $("#sessionExercises").innerHTML=PLANS[state.currentPlan].map(exerciseCard).join("");
  if(training){
    $("#todayTitle").textContent="Heute wird aufgebaut.";
    $("#todayCopy").textContent=`Training ${state.currentPlan}: harte, kontrollierte Arbeit mit Fokus auf progressive Überlastung. Qualität vor Ego.`;
  } else {
    $("#todayTitle").textContent="Bereit für die nächste Einheit.";
    $("#todayCopy").textContent=`Heute ist laut Standardrhythmus kein Trainingstag. Du kannst Training ${state.currentPlan} trotzdem manuell starten, wenn Regeneration und Tagesform passen.`;
  }
}

function renderPlan(){
  $$("#planSwitcher button").forEach(btn=>btn.classList.toggle("is-active",btn.dataset.plan===state.planPreview));
  $("#planDetails").innerHTML=PLANS[state.planPreview].map(exerciseCard).join("");
}

function startWorkout(){
  const dialog=$("#workoutDialog");
  $("#liveWorkoutTitle").textContent=`Training ${state.currentPlan}`;
  $("#liveReadiness").value=state.readiness;
  const draft=read(STORAGE.draft,null);
  renderLiveWorkout(draft && draft.plan===state.currentPlan ? draft : null);
  state.workoutStart=draft?.startedAt ? new Date(draft.startedAt) : new Date();
  clearInterval(state.timerId);
  state.timerId=setInterval(updateTimer,1000);
  updateTimer();
  dialog.showModal();
}

function renderLiveWorkout(draft=null){
  $("#liveExerciseList").innerHTML=PLANS[state.currentPlan].map((ex,ei)=>{
    const sets=Array.from({length:ex.sets},(_,si)=>{
      const prev=draft?.entries?.[ei]?.sets?.[si] || {};
      return `<div class="set-row">
        <span>${si+1}</span>
        <input data-field="load" data-ex="${ei}" data-set="${si}" value="${esc(prev.load||"")}" placeholder="kg/Band" aria-label="${esc(ex.name)} Satz ${si+1} Last">
        <input data-field="reps" data-ex="${ei}" data-set="${si}" type="number" min="0" max="100" value="${esc(prev.reps||"")}" placeholder="Wdh." aria-label="${esc(ex.name)} Satz ${si+1} Wiederholungen">
        <input data-field="rir" data-ex="${ei}" data-set="${si}" type="number" min="0" max="10" value="${esc(prev.rir ?? "")}" placeholder="RIR" aria-label="${esc(ex.name)} Satz ${si+1} RIR">
      </div>`;
    }).join("");
    return `<article class="live-card">
      <div class="live-card-head">
        <div><h3>${esc(ex.name)}</h3><small>${esc(ex.reps)} · Pause ${esc(ex.rest)}</small></div>
        <small>${esc(ex.focus)}</small>
      </div>
      <div class="set-table">
        <div class="set-head"><span>Satz</span><span>Last</span><span>Wdh.</span><span>RIR</span></div>
        ${sets}
      </div>
    </article>`;
  }).join("");
}

function collectWorkout(){
  const entries=PLANS[state.currentPlan].map((ex,ei)=>({
    name:ex.name,
    sets:Array.from({length:ex.sets},(_,si)=>{
      const base=`[data-ex="${ei}"][data-set="${si}"]`;
      return {
        load:$("[data-field=load]"+base)?.value.trim()||"",
        reps:Number($("[data-field=reps]"+base)?.value)||null,
        rir:$("[data-field=rir]"+base)?.value===""?null:Number($("[data-field=rir]"+base)?.value)
      };
    })
  }));
  return {
    id:crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    plan:state.currentPlan,
    date:dateKey(),
    startedAt:state.workoutStart?.toISOString()||new Date().toISOString(),
    readiness:Number($("#liveReadiness").value),
    entries
  };
}

function saveDraft(){
  const data=collectWorkout();
  write(STORAGE.draft,data);
  const btn=$("#saveDraftBtn");
  const old=btn.textContent;
  btn.textContent="Gespeichert";
  setTimeout(()=>btn.textContent=old,1000);
}

function finishWorkout(){
  const data=collectWorkout();
  data.finishedAt=new Date().toISOString();
  data.durationMin=Math.max(1,Math.round((new Date(data.finishedAt)-new Date(data.startedAt))/60000));
  const workouts=read(STORAGE.workouts,[]);
  workouts.unshift(data);
  write(STORAGE.workouts,workouts.slice(0,120));
  localStorage.removeItem(STORAGE.draft);
  const next=state.currentPlan==="A"?"B":state.currentPlan==="B"?"C":"A";
  state.currentPlan=next;
  const settings=read(STORAGE.settings,{});
  write(STORAGE.settings,{...settings,lastPlan:next,readiness:Number($("#liveReadiness").value)});
  clearInterval(state.timerId);
  $("#workoutDialog").close();
  renderToday();
  renderProgress();
}

function updateTimer(){
  if(!state.workoutStart) return;
  const sec=Math.max(0,Math.floor((Date.now()-state.workoutStart.getTime())/1000));
  const mm=String(Math.floor(sec/60)).padStart(2,"0");
  const ss=String(sec%60).padStart(2,"0");
  $("#workoutTimer").textContent=`${mm}:${ss}`;
}

function saveMeasurement(e){
  e.preventDefault();
  const fd=new FormData(e.currentTarget);
  const entry={date:fd.get("date")};
  ["weight","chest","thigh","waist"].forEach(k=>{
    const v=fd.get(k);
    entry[k]=v===""?null:Number(v);
  });
  if(!entry.weight && !entry.chest && !entry.thigh && !entry.waist) return;
  const list=read(STORAGE.measurements,[]);
  list.push(entry);
  list.sort((a,b)=>a.date.localeCompare(b.date));
  write(STORAGE.measurements,list.slice(-365));
  e.currentTarget.reset();
  e.currentTarget.querySelector("[name=date]").value=dateKey();
  renderProgress();
}

function renderProgress(){
  const m=read(STORAGE.measurements,[]);
  const workouts=read(STORAGE.workouts,[]);
  const latest=m.at(-1)||{};
  const prev=m.length>1?m.at(-2):{};
  const metrics=[
    ["Gewicht",latest.weight,"kg",delta(latest.weight,prev.weight)],
    ["Brust",latest.chest,"cm",delta(latest.chest,prev.chest)],
    ["Oberschenkel",latest.thigh,"cm",delta(latest.thigh,prev.thigh)],
    ["Taille",latest.waist,"cm",delta(latest.waist,prev.waist)]
  ];
  $("#metricSummary").innerHTML=metrics.map(([label,value,unit,d])=>`<article class="metric-card">
    <span>${label}</span><strong>${value==null?"—":format(value)}${value==null?"":" "+unit}</strong>
    <small>${d==null?"noch kein Vergleich":(d>0?"+":"")+format(d)+" "+unit+" zuletzt"}</small>
  </article>`).join("");
  renderWeightChart(m.filter(x=>x.weight!=null).slice(-12));
  $("#workoutHistory").innerHTML=workouts.length?workouts.slice(0,8).map(w=>`<div class="history-item">
    <div><strong>Training ${esc(w.plan)}</strong><br><span>${new Intl.DateTimeFormat("de-DE").format(new Date(w.date))}</span></div>
    <span>${w.durationMin||"—"} min · Form ${w.readiness||"—"}/5</span>
  </div>`).join(""):`<div class="chart-empty">Noch kein Workout gespeichert.</div>`;
}

function delta(a,b){ return a==null||b==null?null:Number((a-b).toFixed(1)); }
function format(n){ return Number(n).toLocaleString("de-DE",{maximumFractionDigits:1}); }

function renderWeightChart(data){
  const root=$("#weightChart");
  if(data.length<2){
    root.innerHTML=`<div class="chart-empty">Nach zwei Gewichtseinträgen erscheint hier dein Trend.</div>`;
    return;
  }
  const W=700,H=210,p=28;
  const vals=data.map(d=>d.weight);
  let min=Math.min(...vals),max=Math.max(...vals);
  if(max-min<1){min-=.5;max+=.5}else{min-=.3;max+=.3}
  const x=i=>p+(i*(W-2*p)/(data.length-1));
  const y=v=>H-p-((v-min)/(max-min))*(H-2*p);
  const points=data.map((d,i)=>`${x(i)},${y(d.weight)}`).join(" ");
  const grid=[0,.5,1].map(t=>{
    const gy=p+t*(H-2*p);
    const val=max-t*(max-min);
    return `<line class="chart-grid" x1="${p}" y1="${gy}" x2="${W-p}" y2="${gy}"/><text class="chart-label" x="0" y="${gy+4}">${format(val)}</text>`;
  }).join("");
  const dots=data.map((d,i)=>`<circle class="chart-dot" cx="${x(i)}" cy="${y(d.weight)}" r="4"><title>${d.date}: ${d.weight} kg</title></circle>`).join("");
  root.innerHTML=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Gewichtstrend">${grid}<polyline class="chart-line" points="${points}"/>${dots}</svg>`;
}

document.addEventListener("DOMContentLoaded",init);
