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

## GitHub Pages

In GitHub unter **Settings → Pages** als Quelle **Deploy from a branch**, Branch `main`, Ordner `/ (root)` auswählen.
