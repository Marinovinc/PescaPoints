# PescaPoints — Guida esportazione punti (GPX) e invio al navigatore

I punti calcolati e salvati in PescaPoints (hot spot fascia ~1000 m, struttura del fondale, i tuoi punti) si possono esportare in un file **GPX**, il formato standard dei waypoint, e caricarli sul navigatore di bordo (Garmin, Navionics e altri plotter compatibili).

> Nota importante: un'app che gira nel **browser** non può inviare i punti al plotter direttamente via WiFi (limite dei browser + nessuna API aperta Garmin). Il file GPX è il ponte: lo passi all'app del plotter (es. Garmin ActiveCaptain), che poi sincronizza via WiFi.

---

## 1) Esportare da PescaPoints

1. Apri la scheda in basso **☰ Punti**.
2. Premi **⬇️ Esporta GPX**.
   - Su **telefono/tablet**: si apre la condivisione del sistema → scegli l'app del navigatore (ActiveCaptain, Navionics) oppure **Salva su File**.
   - Su **PC**: viene scaricato un file `.gpx`.

Nomi dei waypoint nel file:
- `PPF01, PPF02, ...` → punti sulla **fascia ~1000 m**
- `PPS01, ...` → **struttura** del fondale (scarpate/secche)
- `PPU01, ...` → **i tuoi punti** aggiunti a mano
- `PPC01, ...` → **catture** (solo nella versione locale/privata)

---

## 2) Garmin con WiFi — app ActiveCaptain (metodo consigliato)

1. Installa **Garmin ActiveCaptain** sul telefono e abbina il plotter
   (sul plotter: *Impostazioni → Stazione / WiFi*).
2. Collega il telefono alla **rete WiFi generata dal plotter**.
3. Condividi (o apri) il file `.gpx` in **ActiveCaptain** → conferma **Importa dati utente**.
4. In ActiveCaptain premi **Sincronizza**: i waypoint passano al chartplotter via WiFi.

---

## 3) Alternativa senza WiFi — scheda SD (microSD)

1. Copia il file `.gpx` nella cartella **`Garmin/GPX`** della microSD.
2. Inserisci la SD nel plotter.
3. Sul plotter: **Info utente / Gestisci dati → Importa** e seleziona il file.

---

## 4) Navionics o altri plotter

1. Apri **Navionics Boating** → *Menu → Importa* e seleziona il `.gpx`.
2. Sincronizza con il plotter compatibile (o esporta di nuovo verso il dispositivo).

Il GPX 1.1 è compatibile anche con la maggior parte dei plotter Raymarine, Lowrance/Simrad, Furuno e con software PC (OpenCPN, Coastal Explorer).

---

## Note e limiti (onestà)

- Alcuni plotter **accorciano i nomi** dei waypoint (spesso a 10–16 caratteri) e possono mostrare un'**icona di default** al posto di "Fishing Hot Spot".
- Verifica sempre le coordinate importate confrontandole con quelle mostrate nel popup del punto (decimale + gradi-minuti).
- I punti suggeriti (fascia/struttura) sono **indicazioni** ricavate dalla batimetria e dalle catture storiche, **non** garanzia di pesca.
