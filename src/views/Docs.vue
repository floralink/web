<template>
  <h1>Handbuch</h1>
  <LayoutPanel title="Datenabfrage" sizing="small">
    Zu Beginn der Anwendung definiert der User eine Abfrage. Die Kriterien für
    eine Abfrage sind das zu untersuchende Gebiet und der zu untersuchende
    Zeitraum. Die Quelle für die Erfassungsdaten ist die Floristische Datenbank
    Mecklenburg-Vorpommern (Flora-MV) mittels der WerBeo-API.
    <br /><br />
    Das Gebiet kann in Form eines Blattschnitts der amtlichen Topografischen
    Karten Deutschlands im Maßstab 1:25.000 (TK25) angegeben werden. Die
    Auflösung reicht von einem TK25-Blattschnitt bis zu 1/64-Quadranten dessen.
    Bei der höchsten Auflösung (1/64 TK25) entspricht die Untersuchungsfläche -
    je nach Lage in Deutschland - einer Fläche durchschnittlich etwa 2,1 km².
    <br /><br />
    Für die Eingrenzung des Zeitraums werden zwei Jahreszahlen angegeben (von
    einschließlich, bis einschließlich). Es wird ein Fehler angezeigt, wenn die
    Daten vertauscht sind ("von" liegt nach "bis") oder der Zeitraum zu groß
    gewählt ist (> 30 Jahre).
    <br /><br />
    Du hast die Möglichkeit ein weiteres Gebiet oder einen weiteren Zeitraum zum
    Vergleich anzugeben. Für die Kombination der Kriterien wird jeweils ein
    eigener Bericht angefertigt. Ist alles wie gewünscht eingestellt, klickst du
    auf "Abfrage durchführen" und der Bericht wird geladen.
  </LayoutPanel>

  <LayoutPanel title="Erfassungsdaten" sizing="small">
    In der Berichtsansicht wird zunächst eine Übersicht der gestellten Abfrage
    in einer Tabelle dargestellt (Abb. 8). Darauf folgt eine Tabelle mit
    Kenngrößen zu den erhaltenen Ergebnissen: die Anzahl der Erfassungen und der
    verschiedenen Taxa sowie die Zeitspanne der Erfassungen (erstes und letzes
    Datum). Eine Gesamtliste der vorkommenden Taxa für die gewählten
    Untersuchungskriterien findet sich am Ende des Berichts. Für jedes Taxon
    sind außerdem Erfassungsstatistiken (Anzahl der Erfassungen, ältestes und
    jüngstes Datum der Erfassung) und die jeweiligen taxonspezifischen Daten
    angegeben. Die Liste der vorkommenden Taxa dient als Basis für alle
    folgenden Berechnungen.
  </LayoutPanel>

  <LayoutPanel title="Taxonspezifische Daten" sizing="small">
    Für die Gesamtheit der vorkommenden Taxa werden verfügbare taxonspezifische
    Daten gesucht. Neben den ökologischen Zeigerwerten nach Ellenberg (1991)
    sind außerdem der Grad der Naturalisation, die Einwanderungsform und die
    Einführungszeit (N-F-T-Status) nach Fukarek & Henker (2006) verfügbar. Eine
    Beschreibung erklärt den Hintergrund des taxonspezifischen Werks und
    Legenden für die einzelnen Felder/Eigenschaften erklären die möglichen
    Wertausprägungen. Diese Erklärungen sind zum größten Teil der Literatur
    entnommen. Für die taxonspezifischen Daten werden statistische Berechnung
    durchgeführt (Lagemaße und Streuungsmaße). Welche Maße berechnet werden,
    wird auf Basis des Skalenniveaus (nominal, ordinal oder kardinal)
    entschieden (siehe Tab. 3).
    <br /><br />
    Die berechneten Größen werden in einer Tabelle dargestellt. Hier wird
    zusätzlich die Anzahl der Werte angegeben, die in die Berechnungen
    eingeflossen sind. Diese können sich für die einzelnen Felder unterscheiden:
    Bei ordinalskalierten Daten beispielsweise können einzelne Werte auch
    nominale Klassen ausdrücken (z. B. „keine Angabe“ oder „uneindeutig“). Diese
    werden in der Berechnung nicht berücksichtigt.
    <br /><br />
    Für nominal- und ordinalskalierte Eigenschaften werden die absoluten
    Häufigkeiten der Wertausprägungen in einem Balkendiagramm angezeigt. Für
    ordinale Eigenschaften wie die ökologischen Zeigerwerte werden die Mediane,
    Quartile und Ausreißer in Box-Plot-Diagrammen dargestellt.
  </LayoutPanel>

  <LayoutPanel title="Export" sizing="small">
    Alle Tabellen können als CSV-Tabellendatei (Comma-separated values) und alle
    Diagramme als Vektorgrafik (.svg-Format) heruntergeladen werden. Der
    Download ist über einen Klick auf das entsprechende Symbol in der
    Beschreibung einer Tabelle bzw. eines Diagrammes erreichbar. Außerdem können
    die Rohdaten des Berichts im JSON-Format als Download am Ende der Seite
    heruntergeladen werden.
  </LayoutPanel>
</template>

<script>
import LayoutPanel from "../components/LayoutPanel.vue";

export default {
  components: { LayoutPanel },
};
</script>
