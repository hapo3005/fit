# FIT

Persönliche, mobile-first Trainingswebapp für strukturiertes Hypertrophietraining zuhause.

## Ziele

- Trainingsplan A/B/C mit Fokus auf Brust, Beine und Core
- Workout-Logging direkt während des Trainings
- Gewichte, Wiederholungen und RIR je Satz dokumentieren
- Progressive Overload nachvollziehbar machen
- Körpergewicht und Körpermaße lokal verfolgen
- Keine persönlichen Gesundheitsdaten im Repository

## Technik

Die App ist bewusst ohne Framework gebaut:

- HTML
- CSS
- Vanilla JavaScript
- localStorage für lokale Trainingsdaten

Damit läuft sie direkt über GitHub Pages und benötigt weder Backend noch Build-Prozess.

## Datenschutz

Das Repository enthält keine persönlichen Messwerte. Trainings- und Fortschrittsdaten werden ausschließlich im Browser über localStorage gespeichert, solange kein späteres Sync-/Backend-Modul ergänzt wird.

## Lokal starten

```bash
git clone https://github.com/hapo3005/fit.git
cd fit
```

Danach `index.html` direkt öffnen oder z. B. mit VS Code Live Server starten.

## Deployment

Das Repository nutzt GitHub Actions. Bei jedem Push auf `main` wird die statische App zunächst geprüft und anschließend über GitHub Pages veröffentlicht.

Der Workflow liegt unter:

```
.github/workflows/pages.yml
```

Er prüft die erforderlichen Dateien sowie die JavaScript-Syntax, erstellt das Pages-Artefakt und deployt es anschließend.

In GitHub unter **Settings → Pages → Build and deployment → Source** muss einmalig **GitHub Actions** ausgewählt sein.
