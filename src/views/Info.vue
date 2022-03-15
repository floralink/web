<template>
  <h1>Hintergrundwissen</h1>
  <div class="center">
    <router-link class="button" :to="{ hash: '#florkart' }"
      >Floristische Kartierung</router-link
    >
    <router-link class="button" :to="{ hash: '#zeigerwerte' }"
      >Ökologische Zeigerwerte</router-link
    >
  </div>

  <LayoutPanel id="florkart" title="Floristische Kartierung" sizing="small">
    Unter floristischer Kartierung (auch Florenkartierung) versteht man „die
    fortlaufende, flächendeckende und vollständige Erfassung von Vorkommen und
    Verbreitung aller Arten (Taxa) eines definierten Gebietes“ (Bundesamt für
    Naturschutz o. J.-a). Meistens bezieht sich die Kartierung auf die
    Gefäßpflanzen.
    <h2>Methodik</h2>
    Als Flächenbezug dient für die floristische Kartierung in Deutschland ein
    Raster, das den Blattschnitten der amtlichen Topografischen Karten
    Deutschlands im Maßstab 1:25.000 (TK25, früher Messtischblätter) entspricht.
    Die Blattschnitte können weiterhin in Quadranten unterteilt werden
    (gebräuchlich bis zu 1/64-Quadranten). Die Blattschnitte sind auf Basis von
    geographischen Koordinaten (10' geographische Länge x 6' geographische
    Breite) definiert, deshalb variiert die Bezugsfläche der Blattschnitte. Im
    Durchschnitt ist ein TK25-Blatt 12 x 11,1 km (133 km²) groß. (Bundesamt für
    Naturschutz o. J.-b; Schönfelder 1999) Die Daten der Kartierung wurden und
    werden zunächst regional gesammelt und schließlich zentral für Deutschland
    zusammengeführt. Es können außerdem Erfassungsdaten aus anderen
    Kartierprojekten (z. B. Vegetationsaufnahmen und Biotopkartierungen)
    hinzugenommen werden. Abschließend werden die Daten in verschiedenen
    Schritten bereinigt und harmonisiert. Durch den Einsatz von angepasster
    Software konnte unterschiedlichen Formaten in der Dateneingabe vorgebeugt
    werden und die Weitergabe der Daten generell erleichtert werden. (Bundesamt
    für Naturschutz 2020)
    <h2>Auswertungsmöglichkeiten</h2>
    Aus den Daten der floristischen Kartierung können einige Auswertungen
    gezogen werden. Klassischerweise werden eine Liste der vorkommenden Arten
    und Verbreitungskarten in einem Florenwerk (oder auf einer Website)
    veröffentlicht. Weitere Auswertungen betreffen beispielsweise die Bewertung
    von Bestand und Gefährdung (Rote Liste), die Biodiversität (Anzahl an Arten
    pro Flächeneinheit) oder das Berechnen potenzieller Vorkommen einer seltenen
    Pflanzengesellschaft anhand der Anzahl vorkommender Charakterarten.
    (Bundesamt für Naturschutz 2020; Schönfelder 1999) Im Zusammenhang mit
    Umweltfaktoren kann nach Ursachen für die Ausprägung von Pflanzenarealen
    geforscht werden. Hier werden auch sogenannte Species Distribution Models
    eingesetzt, um sich der ökologischen Nische von Taxa mehrdimensional
    anzunähern und die Verbreitung anhand von Umweltfaktoren vorherzusagen
    (Elith & Leathwick 2009). Im Vergleich über die Zeit können
    Bestandsentwicklungstrends und Vebreitungstendenzen in Bezug auf
    Veränderungen der Umwelt (insbesondere im Rahmen des Klimawandels) erforscht
    werden. (Bundesamt für Naturschutz 2020; Jansen 2017)
    <h2>Verzerrungen</h2>
    Für die Analyse der Daten aus floristischen Kartierungen ist eine fundierte
    und gesicherte Datengrundlage unabdingbar. Bei der Kartierung können jedoch
    unterschiedliche Verzerrungen auftreten, die die Vollständigkeit und
    Qualität der Aufnahmen betreffen. Vollständigkeit Das Ziel in der
    floristischen Kartierung ist die vollständige Erfassung der vorkommenden
    Taxa eines Gebietes. Wie vollständig die Erfassung ist, hängt letztlich im
    Einzelfall davon ab, wie intensiv die Fläche abgesucht wurde. Dennoch werden
    Taxa übersehen, insbesondere wenn sie nur kleinflächig auftreten (Vittoz &
    Guisan 2007). Dieser Effekt steigt mit zunehmender Dauer (aufgewandte Zeit
    in Minuten) einer Kartierung (Archaux et al. 2006).<br /><br />
    Mit einer Angabe der Erfassungsintensität ließe sich die Vollständigkeit
    einer Kartierung abschätzen (Eichenberg 2018: S. 6). Hill (2012) hat den
    Frequency-Scaling-Local-Algorithmus vorgeschlagen. Der Algorithmus berechnet
    die Wahrscheinlichkeit, dass eine Art in einem Gebiet vorkommt, anhand des
    Vorkommens dieser Art in der Gebietsumgebung und unter Berücksichtigung von
    edaphischen, klimatischen und topographischen Merkmalen. Vergleicht man die
    zu erwartenden mit den tatsächlich kartierten Arten, erhält man ein Maß für
    die Untersuchungsintensität des Gebietes.<br /><br />
    Falls die Daten aus nicht-systematischen Kartierungen stammen (z. B.
    Citizen-Science-Projekte), sodass einzelne Erfassungen anstelle einer
    flächendeckenden Kartierung als Datengrundlage dienen, ergeben sich noch
    weitere Probleme: Arten werden aufgrund ihres auffälligen Aussehens oder
    ihrer Seltenheit und aufgrund persönlicher Interessensschwerpunkte oder
    Kartierfähigkeiten überrepräsentativ kartiert. Unauffällige, gewöhnliche
    Arten und Arten, die weniger vom individuellen Blick erfasst werden, werden
    dementsprechend unterrepräsentativ kartiert. Diese Daten können jedoch
    wertvolle Ergänzungen für flächendeckende Kartierungen sein.<br /><br />
    Die floristische Kartierung basiert stark auf der Mitarbeit von
    Ehrenamtlichen (Bundesamt für Naturschutz 2020). Mit Webportalen wie der
    Deutschlandflora haben auch Laien die Möglichkeit, Erfassungen einzutragen.
    Diesen Menschen stehen unter Umständen nicht das gleiche Wissen und die
    gleichen Werkzeuge zur Verfügung, um qualitativ hochwertige Bestimmungen der
    vorgefundenen Taxa durchzuführen. Während es schwierig ist, diesem Fehler
    nachzugehen, gilt es als wahrscheinlich, dass auch bei fachkundigen
    Kartierer*innen ein gewisser Anteil der Erfassungen falschen Taxa zugeordnet
    werden (Scott & Hallam 2003).
    <InfoBox title="Literatur">
      Archaux, F.; Gosselin, F.; Bergès, L.; Chevalier, R. (2006): Effects of
      sampling time, species richness and observer on the exhaustiveness of
      plant censuses. In: Journal of Vegetation Science 17, 299–306.
      https://doi.org/10.1111/j.1654-1103.2006.tb02449.x
      <br /><br />Bundesamt für Naturschutz (2020): Florenkartierung in
      Deutschland [Internetdokument]. Online verfügbar unter:
      https://web.archive.org/web/20210224041554/https://www.bfn.de/themen/artenschutz/erfassung-und-kartierung/florenkartierung.html
      (abgerufen am 8.3.22). <br /><br />Bundesamt für Naturschutz (o. J.-a):
      Organisation der Florenkartierung [Internetdokument]. In: FloraWeb. Online
      verfügbar unter:
      https://www.floraweb.de/florenkartierung/organisation-der-florenkartierung.html
      (abgerufen am 8.3.22). <br /><br />Bundesamt für Naturschutz (o. J.-b):
      Methoden der Florenkartierung [Internetdokument]. In: FloraWeb. Online
      verfügbar unter:
      https://www.floraweb.de/florenkartierung/methoden-der-florenkartierung.html
      (abgerufen am 8.3.22). <br /><br />Eichenberg, D. (2018): Trendanalysen
      für floristische Daten in Deutschland. Gehalten auf der sMon Workshop
      Dezember 2018. <br /><br />Elith, J.; Leathwick, J.R. (2009): Species
      Distribution Models: Ecological Explanation and Prediction Across Space
      and Time. In: Annual Review of Ecology, Evolution, and Systematics 40,
      677–697. https://doi.org/10.1146/annurev.ecolsys.110308.120159
      <br /><br />Hill, M. (2012): Local frequency as a key to interpreting
      species occurrence data when recording effort is not known.
      https://doi.org/10.1111/J.2041-210X.2011.00146.X <br /><br />Jansen, F.
      (2017): Ideen zu Trendanalysen von Pflanzendaten aus
      Mecklenburg-Vorpommern. Gehalten auf der sMon Workshop 2017.
      <br /><br />Schönfelder, P. (1999): Mapping the flora of Germany. In: Acta
      Botanica Fennica 162, 43–53. <br /><br />Scott, W.A.; Hallam, C.J. (2003):
      Assessing Species Misidentification Rates through Quality Assurance of
      Vegetation Monitoring. In: Plant Ecology 165, 101–115. <br /><br />Vittoz,
      P.; Guisan, A. (2007): How reliable is the monitoring of permanent
      vegetation plots? A test with multiple observers. In: Journal of
      Vegetation Science 18, 413–422.
      https://doi.org/10.1111/j.1654-1103.2007.tb02553.x
    </InfoBox>
  </LayoutPanel>

  <LayoutPanel id="zeigerwerte" title="Ökologische Zeigerwerte" sizing="small">
    Die ökologischen Zeigerwerte nach Ellenberg (1974) sind ein Maß für das
    ökologische Optimum einer Pflanzensippe entlang von sieben hauptsächlichen
    Umweltgradienten: Licht, Temperatur, Kontinentalität, Feuchte, Reaktion,
    Nährstoffe und Salz. (Ellenberg et al. 2010) Eine Skala, die in der Regel
    von 1 bis 9 reicht und ein „x“ für indifferentes sowie ein „?“ für
    ungeklärtes Verhalten enthält, beschreibt das Vorkommen im Gefälle eines
    Umweltfaktors. Die Gefälle wurden unter Berücksichtigung von Messungen (etwa
    die relative Beleuchtungsstärke für die Lichtzahl) und vorhandenen
    landschaftsökologischen Klassifizierungen (so die Höhenstufe für die
    Temperaturzahl und biogeographische Angaben für die Kontinentalitätszahl) in
    die Skala eingeteilt. Zusätzlich hat Ellenberg die Lebensform (den
    Pflanzenwuchs) sowie die Blattausdauer klassiert. (Ellenberg et al. 2010)
    <h2>Bioindikation</h2>
    Die Anwendung der Zeigerwerte ist eine Form der Bioindikation, es werden
    also anhand der biotischen Umwelt (in diesem Fall das Vorkommen von
    Pflanzenarten) Rückschlüsse auf die Umweltfaktoren gemacht. Die Zeigerwerte
    können also indirekt für das Monitoring von Umweltveränderungen oder den
    ökologischen Vergleich von unterschiedlichen Gebieten verwendet werden. So
    können sie - bei hinreichender Beachtung ihrer Grenzen – ein wertvolles
    Instrument für das Monitoring sein und insbesondere dort Einblicke eröffnen,
    wo umfassende Umweltmessungen aufgrund fehlender Kapazitäten oder anderer
    Hindernisse nicht durchgeführt werden können, Kartierungen der Flora oder
    Vegetation jedoch vorhanden sind.
    <h2>Auswertungsmöglichkeiten</h2>
    In einer Trendanalyse der ungewichteten N-Mittelwerte für die Wälder
    Deutschlands und angrenzender Regionen konnte der Prozess der Eutrophierung
    für unterschiedliche Habitattypen nachgezeichnet werden (Ewald et al. 2013).
    In Norwegen wurde die Sukzession von Gletschervorland mithilfe der EZW mit
    dem Ergebnis untersucht, dass diese Methode nützlich für die Abschätzung der
    Sukzessionsphasen sowie der Sukzessionsrate sein kann (Robbins & Matthews
    2014).<br /><br />
    Jansen et al. (2011) haben Neophyten nach ihren Tendenzen bei den
    ökologischen Ansprüchen untersucht. Dafür wurden die mittleren Zeigerwerte
    von Vegetationsaufnahmen mit und ohne Vorkommen von Neophyten untereinander
    verglichen und differenziert nach allen Neophyten, einzelnen Neophyten und
    nach pflanzensoziologischen Klassen betrachtet. Während die Tendenzen für
    einzelne Neophyten sehr unterschiedlich ausfallen konnten, waren generelle
    Tendenzen zu beobachten – etwa eine Präferenz für hohe Werte bei Temperatur
    und Nährstoffen und niedrige Werte bei der Feuchte.<br /><br />
    Zudem können weitere Klassifikationen für bestimmte Habitate und Regionen
    durch das Verknüpfen mit Erfassungsdaten abgeleitet werden. So wurden aus
    Vegetationsdaten bayerischer Naturwaldreservate mittlere Zeigerwerte der
    Lichtzahl für die Kraut- und Strauchschicht berechnet (Walentowski 2008).
    Der Lichtgradient wurde in kleinere Segmente unterteilt. Diese bildeten die
    Basis für die Berechnung eines Präferenzindex für eine Baumart in einem
    Segment des Lichtgradienten. Daraus wiederum wurde die lichtökologische
    Nische für eine Aufnahme abgeleitet. Das Ergebnis war eine Klassifizierung
    der Baumarten in sechs lichtökologische Nischentypen.<br /><br />
    Auch die Beziehungen von Syntaxa untereinander kann mithilfe der Zeigerwerte
    evaluiert werden. Marcenò & Guarino (2015) haben Vegetationsaufnahmen der
    Klasse der mediterranen immergrünen Wälder (Quercetea ilicis) mit den
    Zeigerwerten und Umweltmessungen für Temperatur und Niederschlag verknüpft.
    Diese Analyse ergab vielversprechende Einblicke, wie die
    pflanzensoziologische Klassifikation auf Ebene der Verbände den
    tatsächlichen ökologischen Unterschieden angepasst werden könnte.<br /><br />
    Die ökologischen Zeigerwerte können außerdem für das Erstellen von Species
    Distribution Models eingesetzt werden. Die Zeigerwerte können die
    vergleichsweise seltenen Umweltmessungen als Prädiktoren für ökologische
    Nischen ergänzen. In einem Versuch in der Schweiz führte das zu einer
    deutlich verbesserten Vorhersagekraft des Modells. (Descombes et al.
    2020)<br /><br />
    <h2>Aussagekraft</h2>
    Grundsätzlich hängt die Aussagekraft der Zeigerwerte von der Qualität der
    Erfassungsdaten ab, auf die sie angewandt werden. Nachfolgend sollen ein
    paar Faktoren vorgestellt werden, die bei der Interpretation der Zeigerwerte
    zu berücksichtigen sind.<br /><br />
    Es ist wichtig zu erwähnen, dass die vorgestellten Studien teils sehr
    unterschiedliche Aussagen treffen. Sie unterscheiden sich hinsichtlich ihres
    räumlichen Bezugs, der Habitatwahl (z. B. Grünland oder Forst), der Auswahl
    an untersuchten Zeigerwerten und insbesondere hinsichtlich der verwendeten
    statistischen Methoden.<br /><br />
    Der folgende Überblick stellt nur eine Auswahl dar. Einen größeren Überblick
    über die Diskussion der Zeigerwerte (wenn auch veraltet) erhält man bei
    Diekmann (2003).<br /><br />
    <h3>Räumliche Kompatibilität</h3>
    Die Zeigerwerte wurden von Ellenberg ursprünglich für Mitteleuropa
    (inklusive der Alpen) aufgestellt. Sie werden aufgrund fehlender analoger
    Modelle auch für Regionen außerhalb Mitteleuropas angewandt. Während die
    Zeigerwerte für Temperatur, Nährstoffe und Reaktion bis zum nördlichen
    Polarkreis eine gute Aussagekraft behalten, nimmt diese generell mit
    zunehmender Entfernung ab (Hedwall et al. 2019).<br /><br />
    Für diesen Fall werden die Zeigerwerte neu kalibriert bzw. angepasst
    (calibrated, adjusted, repredicted). Einen bekannten algorithmischen Ansatz
    dafür haben Hill et al. (2000) vorgeschlagen und an der britischen
    Vegetation erprobt. In Italien wurde diese Methode mit dem Ergebnis
    angewandt, dass deutlich mehr Korrelationen zu gemessenen Umweltparametern
    als bei subjektiv abgeleiteten Zeigerwerten bestanden (Fanelli et al.
    2007).<br /><br />
    <h3>Ordinalität und Mittelwertbildung</h3>
    Klassischerweise wird je Umweltgradient ein Mittelwert aus den Zeigerwerten
    der vorkommenden Taxa gebildet. Diese Methode wird meist auf
    Vegetationsaufnahmen angewandt, seltener für Floren oder Florenkohorten
    eines Gebietes.<br /><br />
    Eigentlich ist die Mittelwertbildung nicht geboten, da die Zeigerwerte ein
    ordinales Skalenniveau haben. Das heißt, die Klassen haben zwar eine Ordnung
    (mit Ausnahme von „x“ und „?“), aber können nicht in ihrem Abstand oder
    ihrer Breite verglichen werden. Daher ist ein Mittelwert nicht besonders
    aussagefähig. Klassischerweise wird bei ordinalskalierten Daten der Median
    herangezogen (ein oder zwei in der Mitte stehende Werte bei sortierter
    Auflistung).<br /><br />
    Dennoch ist diese Methode sehr beliebt. Es gibt ein große Debatte um die
    Verwendung und Interpretation dieser Mittelwerte, speziell in welcher Art
    und Weise sie nun kognitiv verzerrt (biased) sind oder nicht. Wildi (2016)
    argumentiert, dass solche Verzerrungen nur in Tests aufträten, die eine
    statistische Unabhängigkeit der Zeigerwerte annehmen. Der gleiche Effekt
    zeige sich für Pflanzenmerkmale und er konnte durch eine
    Hauptkomponentenanalyse aufgehoben werden.<br /><br />
    Manchmal werden die Mittelwerte anhand der Abundanz oder des Deckungsgrades
    gewichtet. Carpenter & Goodenough (2014) fanden bei ungewichteten
    Mittelwerten stärkere Korrelationen mit Umweltparametern vor und vermuten,
    dass eine hohe inhaltliche Bedeutung seltener Arten diese Beobachtung
    erklären kann. Zelený (2016) beschreibt außerdem, dass gewichtete
    Artattribute (sowohl Zeigerwerte als auch Pflanzenmerkmale) generell zu
    Verzerrungen führen würden, wenn sie für Pflanzengemeinschaften
    untereinander verglichen werden, da sie statistisch abhängig voneinander
    sind, wenn gleiche Arten auftreten. Diese Verzerrung hängt mit der
    Beta-Diversität zusammen.<br /><br />
    <h3>Korrelation mit Umweltmessungen</h3>
    Es gibt einige wenige Studien, die einzelne Zeigerwerte für die
    Vegetationsaufnahmen bestimmter Habitate mit den Messungen von
    Umweltparametern in Beziehung setzen. Sie untersuchen, wie stark die
    Zeigerwerte mit diesen Parametern korrelieren und in welchen Fällen sie es
    nicht tun. So wird versucht, die Verlässlichkeit bzw. Indikationsfähigkeit
    (in englischsprachigen Publikationen als robustness, validity, reliability,
    accuracy oder indicative power bezeichnet) der Zeigerwerte einzuschätzen.
    Werden starke Korrelationen gefunden und bestätigt, können die Zeigerwerte
    verwendet werden, um Schätzungen für Umweltparameter aus den vorhandenen
    Vegetationsdaten zu extrapolieren.<br /><br />
    Beispielsweise konnte gezeigt werden, dass die Nährstoffzahl eine
    zuverlässige Indikation für die tatsächlichen Nährstoffverhältnisse auf
    Grünland bietet und auch historische Veränderungen wie die Stilllegung von
    Grünland repräsentieren kann (Löfgren et al. 2020). Die Nährstoffzahl konnte
    nur schwach mit Stickstoff-Parametern in Beziehung gebracht werden, sie
    korreliert insbesondere mit dem Phosphorgehalt und der Biomasseproduktion
    (Löfgren et al. 2020; Schaffers & Sýkora 2000). Die Reaktionszahl erwies
    sich in mehreren Studien als guter Indikator für den Kalziumgehalt (in Form
    von Ionen und/oder in Carbonaten) (z. B. Schaffers & Sýkora 2000; Szymura et
    al. 2014).<br /><br />
    Außerdem wurden jahreszeitliche Effekte auf die Indikationsfähigkeit
    beobachtet. So ist die Korrelation zwischen Nitratgehalt und der
    Stickstoffzahl stark im Frühling, jedoch nicht signifikant im Sommer
    (Carpenter & Goodenough 2014).<br /><br />
    Nicht zuletzt können bei der Suche nach Korrelationen mit Umweltparametern
    Antworten auf die Frage gefunden werden, welche Merkmale bestimmend für das
    Vorkommen einer Pflanze an einem Ort sind (Bartelheimer & Poschlod 2016).<br /><br />
    <h4>Kritik</h4>
    Es kann nicht generell von Veränderungen der Zeigerwerte auf tatsächliche
    Veränderungen der entsprechenden Umweltfaktoren geschlossen werden. Die
    eigentliche Veränderung könnte bei einem anderen mit dem Zeigerwert
    korrelierenden Umweltfaktor liegen (Chytrý et al. 2009). Die Zeigerwerte
    korrelieren auch untereinander, was die Interpretation noch erschwert
    (Szymura et al. 2014).<br /><br />
    Zudem ist bei Umweltfaktoren, die einen starken Einfluss auf die
    Artenzusammensetzung haben, eine Korrelation allein aufgrund dessen – und
    nicht aufgrund der Werte – möglich. Da die Zeigerwerte aus der
    Artenzusammensetzung abgeleitet sind, sind sie nicht von solchen
    Umweltfaktoren statistisch unabhängig. Hierfür wurde eine Korrekturmethode
    vorgeschlagen. (Zelený 2014)<br /><br />
    <h3>Vollständigkeit und Repräsentativität</h3>
    Die Vollständigkeit der Erfassungsdaten spielt auch eine Rolle bei der
    Analyse der Zeigerwerte. <br /><br />
    Ewald (2003) kam zu dem Ergebnis, dass die Aussagekraft gemittelter
    Zeigerwerte nur geringfügig durch unvollständige Aufnahmen beeinflusst wird.
    Dies bezieht sich auf Vegetationsaufnahmen. Hierzu wurden die Zeigerwerte
    für Licht, Temperatur, Feuchte, Reaktion und Nährstoffe mit Messungen
    entsprechender Umweltparameter in Beziehung gesetzt. Dann wurden bis zu 80 %
    der Arten mit niedrigen Deckungsgraden aus den Vegetationsaufnahmen
    gelöscht. Die Korrelationen der Zeigerwerte mit den Umweltparametern wurden
    nur schwach durch das Weglassen von Arten beeinträchtigt.<br /><br />
    Bei Vegetationsaufnahmen spielt zudem die Größe der Aufnahmefläche eine
    Rolle bei der Repräsentativität für eine ökologische Einheit. Otýpková
    (2009) kam zu dem Schluss, dass der Median und die Verteilung der
    Zeigerwerte kaum von der Größe der Aufnahmefläche abhängen. Sogar bei einer
    Fläche von 1 m² wurden keine deutlichen Unterschiede im Vergleich zu großen
    Flächen festgestellt, aber die Streuung der Zeigerwerte verengte sich mit
    zunehmender Aufnahmefläche.<br /><br />
    <InfoBox title="Literatur">
      Bartelheimer, M.; Poschlod, P. (2016): Functional characterizations of
      Ellenberg indicator values – a review on ecophysiological determinants.
      In: Functional Ecology 30, 506–516.
      https://doi.org/10.1111/1365-2435.12531 <br /><br />Carpenter, W.;
      Goodenough, A. (2014): How robust are community-based plant bioindicators?
      Empirical testing of the relationship between Ellenberg values and direct
      environmental measures in woodland communities. In: Community Ecology 15,
      1–11. https://doi.org/10.1556/COMEC.15.2014.1.1 <br /><br />Chytrý, M.;
      Hejcman, M.; Hennekens, S.M.; Schellberg, J. (2009): Changes in Vegetation
      Types and Ellenberg Indicator Values after 65 Years of Fertilizer
      Application in the Rengen Grassland Experiment, Germany. In: Applied
      Vegetation Science 12, 167–176. <br /><br />Descombes, P.; Walthert, L.;
      Baltensweiler, A.; … Zimmermann, N.E. (2020): Spatial modelling of
      ecological indicator values improves predictions of plant distributions in
      complex landscapes. In: Ecography 43, 1448–1463.
      https://doi.org/10.1111/ecog.05117 <br /><br />Diekmann, M. (2003):
      Species indicator values as an important tool in applied plant ecology – a
      review. In: Basic and Applied Ecology 4, 493–506.
      https://doi.org/10.1078/1439-1791-00185 <br /><br />Ellenberg, H. (1974):
      Zeigerwerte der Gefässpflanzen Mitteleuropas. Goltze: Göttingen.
      <br /><br />Ellenberg, H.; Leuschner, C.; Dierschke, H. (2010): Vegetation
      Mitteleuropas mit den Alpen: in ökologischer, dynamischer und historischer
      Sicht, 6., vollständig neu bearbeitete und stark erweiterte Auflage., UTB
      Botanik, Ökologie, Agrar- und Forstwissenschaften, Geographie. Verlag
      Eugen Ulmer: Stuttgart. <br /><br />Ewald, J. (2003): The sensitivity of
      Ellenberg indicator values to the completeness of vegetation relevés. In:
      Basic and Applied Ecology 4, 507–513.
      https://doi.org/10.1078/1439-1791-00155 <br /><br />Ewald, J.; Hennekens,
      S.; Conrad, S.; Wohlgemuth, T. (2013): Räumliche und zeitliche Muster von
      Ellenberg-Nährstoffzahlen in Wäldern Deutschlands und angrenzender Gebiete
      – eine Untersuchung auf Grundlage pflanzensoziologischer Datenbanken. In:
      Tuexenia 33, 93–109. <br /><br />Fanelli, G.; Pignatti, S.; Testi, A.
      (2007): An application case of ecological indicator values (Zeigerwerte)
      calculated with a simple algorithmic approach. In: Plant Biosystems - An
      International Journal Dealing with all Aspects of Plant Biology 141,
      15–21. https://doi.org/10.1080/11263500601153685 <br /><br />Hedwall,
      P.-O.; Brunet, J.; Diekmann, M. (2019): With Ellenberg indicator values
      towards the north: Does the indicative power decrease with distance from
      Central Europe? In: Journal of Biogeography 46, 1041–1053.
      https://doi.org/10.1111/jbi.13565 <br /><br />Hill, M.O.; Roy, D.B.;
      Mountford, J.O.; Bunce, R.G.H. (2000): Extending Ellenberg’s indicator
      values to a new area: an algorithmic approach. In: Journal of Applied
      Ecology 37, 3–15. https://doi.org/10.1046/j.1365-2664.2000.00466.x
      <br /><br />Jansen, F.; Ewald, J.; Zerbe, S. (2011): Ecological
      preferences of alien plant species in North-Eastern Germany. In:
      Biological Invasions. https://doi.org/10.1007/s10530-011-9939-4
      <br /><br />Löfgren, O.; Hall, K.; Schmid, B.C.; Prentice, H.C. (2020):
      Grasslands ancient and modern: Soil nutrients, habitat age and their
      relation to Ellenberg N. In: Journal of Vegetation Science 31, 367–379.
      https://doi.org/10.1111/jvs.12856 <br /><br />Marcenò, C.; Guarino, R.
      (2015): A test on Ellenberg indicator values in the Mediterranean
      evergreen woods (Quercetea ilicis). In: Rendiconti Lincei 26, 345–356.
      https://doi.org/10.1007/s12210-015-0448-8 <br /><br />Otýpková, Z. (2009):
      The influence of sample plot size on evaluations with Ellenberg indicator
      values. In: Biologia 64, 1123. https://doi.org/10.2478/s11756-009-0184-6
      <br /><br />Robbins, J.; Matthews, J. (2014): Use of ecological indicator
      values to investigate successional change in boreal to high-alpine
      glacier-foreland chronosequences, southern Norway.
      https://doi.org/10.1177/0959683614544067 <br /><br />Schaffers, A.P.;
      Sýkora, K.V. (2000): Reliability of Ellenberg indicator values for
      moisture, nitrogen and soil reaction: a comparison with field
      measurements. In: Journal of Vegetation Science 11, 225–244.
      https://doi.org/10.2307/3236802 <br /><br />Szymura, T.; Szymura, M.;
      Macioł, A. (2014): Bioindication with Ellenberg’s indicator values: A
      comparison with measured parameters in Central European oak forests.
      https://doi.org/10.1016/J.ECOLIND.2014.07.013 <br /><br />Walentowski, H.
      (2008): Untersuchung der Schattentoleranz von Baumarten auf Grundlage der
      Datenbank bayerischer Naturwaldreservate. In: Tuexenia 28, 23–40.
      <br /><br />Wildi, O. (2016): Why mean indicator values are not biased.
      In: Journal of Vegetation Science 27, 40–49.
      https://doi.org/10.1111/JVS.12336 <br /><br />Zelený, D. (2016): Bias in
      community-weighted mean analysis of plant functional traits and species
      indicator values. https://doi.org/10.1101/046946 <br /><br />Zelený, D.
      (2014): Use of mean Ellenberg indicator values revisited (again) In: Book
      of Abstracts. Gehalten auf der European Vegetation Survey, 23th
      International Workshop, Ljubljana.
    </InfoBox>
  </LayoutPanel>
</template>

<script>
import LayoutPanel from "../components/LayoutPanel.vue";
import InfoBox from "../components/InfoBox.vue";

export default {
  components: { LayoutPanel, InfoBox },
};
</script>
