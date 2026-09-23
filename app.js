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


const EXERCISE_DETAILS = window.EXERCISE_DETAILS || {};

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
    const startFromDetail=e.target.closest("[data-start-from-detail]");
    if(startFromDetail){
      e.preventDefault();
      if($("#exerciseDialog").open) $("#exerciseDialog").close();
      startWorkout();
      return;
    }
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
  const detail=EXERCISE_DETAILS[ex.name];
  const hasDetail=Boolean(detail);
  const visual=detail?.visual || "";
  return `<article class="exercise-card premium-exercise-card${hasDetail?" has-detail":""}" data-exercise-name="${esc(ex.name)}">
    ${hasDetail&&visual?`<div class="exercise-preview premium-preview"><img loading="lazy" src="${visual}" alt="${esc(ex.name)} – Ausführung und Muskelgruppen"></div>`:""}
    <div class="exercise-index">${String(i+1).padStart(2,"0")}</div>
    <div class="exercise-main">
      <span class="exercise-category">${esc(ex.focus)}</span>
      <h3>${esc(ex.name)}</h3>
      <div class="exercise-meta">
        <span>${ex.sets} Sätze</span><span>${esc(ex.reps)}</span><span>${esc(ex.rest)}</span>
      </div>
    </div>
    ${hasDetail?`<button class="exercise-help premium-help" type="button" data-exercise-help="${esc(ex.name)}">Anleitung öffnen <span>→</span></button>`:`<div class="exercise-focus">${esc(ex.focus)}</div>`}
    <div class="exercise-note"><span class="cue-dot"></span>${esc(ex.note)}</div>
  </article>`;
}

function findPlanExercise(name){
  for(const plan of Object.values(PLANS)){
    const found=plan.find(ex=>ex.name===name);
    if(found) return found;
  }
  return null;
}

function openExerciseDetail(name){
  const d=EXERCISE_DETAILS[name];
  if(!d) return;
  const ex=findPlanExercise(name);
  $("#exerciseDialogTitle").textContent=name;
  const prescription=ex ? [`${ex.sets} Sätze`,ex.reps,`Pause ${ex.rest}`] : [];
  $("#exerciseDetailContent").innerHTML=`
    <section class="exercise-detail-hero">
      ${d.visual?`<img src="${d.visual}" alt="${esc(name)} – Start- und Endposition sowie beanspruchte Muskelgruppen">`:""}
      <div class="exercise-detail-overlay">
        <span>PRIMÄR BEANSPRUCHT</span>
        <strong>${esc(d.muscles)}</strong>
      </div>
    </section>
    <section class="exercise-detail-summary">
      <div>
        <span class="muscles">${esc(d.muscles)}</span>
        <p>${esc(d.intro)}</p>
      </div>
      <div class="exercise-prescription">${prescription.map(x=>`<span>${esc(x)}</span>`).join("")}</div>
    </section>
    <div class="exercise-info-grid premium-info-grid">
      <section class="exercise-info"><div class="info-icon">≡</div><h3>So geht’s</h3><ol>${d.steps.map(x=>`<li>${esc(x)}</li>`).join("")}</ol></section>
      <section class="exercise-info"><div class="info-icon">✓</div><h3>Achte darauf</h3><ul>${d.cues.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>
      <section class="exercise-info"><div class="info-icon">×</div><h3>Häufige Fehler</h3><ul>${d.mistakes.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>
      <section class="exercise-info"><div class="info-icon">↗</div><h3>Progression</h3><ul>${d.progression.map(x=>`<li>${esc(x)}</li>`).join("")}</ul></section>
      ${d.personal?`<section class="exercise-info personal"><div class="info-icon">!</div><h3>Für dich wichtig</h3><p>${esc(d.personal)}</p></section>`:""}
    </div>
    <button class="primary-button detail-workout-button" type="button" data-start-from-detail>Workout starten</button>`;
  $("#exerciseDialog").showModal();
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
