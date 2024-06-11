const items=[{"name":"Janitor Keycard","category":"keycard","access":["SCP1"]},{"name":"Scientist Keycard","category":"keycard","access":["SCP1","SCP2"]},{"name":"Research Supervisor Keycard","category":"keycard","access":["SCP1","SCP2","Checkpoint"]},{"name":"Zone Manager Keycard","category":"keycard","access":["SCP1","Checkpoint"]},{"name":"Guard Keycard","category":"keycard","access":["SCP1","Armory1","Checkpoint"]},{"name":"MTF Private Keycard","category":"keycard","access":["SCP1","SCP2","Armory1","Armory2","Checkpoint"]},{"name":"Containment Engineer Keycard","category":"keycard","access":["SCP1","SCP2","SCP3","Checkpoint"]},{"name":"MTF Operative Keycard","category":"keycard","access":["SCP1","SCP2","Armory1","Armory2","Checkpoint","Gate"]},{"name":"MTF Captain Keycard","category":"keycard","access":["SCP1","SCP2","Armory1","Armory2","Armory3","Checkpoint","Gate"]},{"name":"Facility Manager Keycard","category":"keycard","access":["SCP1","SCP2","SCP3","Nuke","Gate","Intercom","Checkpoint"]},{"name":"Chaos Insurgency Access Device","category":"keycard","access":["SCP1","SCP2","Armory1","Armory2","Armory3","Checkpoint","Gate"]},{"name":"O5-Level Keycard","category":"keycard","access":["SCP1","SCP2","SCP3","Armory1","Armory2","Armory3","Nuke","Gate","Intercom","Checkpoint"]},{"name":"Radio","category":"radio"},{"name":"COM-15","category":"firearm","ammo":"9x19mm Ammo","magazineSize":12},{"name":"First-Aid Kit","category":"medical"},{"name":"Flashlight"},{"name":"Micro H.I.D.","category":"micro"},{"name":"SCP-500","category":"SCP"},{"name":"SCP-207","category":"SCP"},{"name":"12/7 Buckshot Ammo","category":"ammo","unitPrice":5,"defaultAmount":14},{"name":"MTF-E11-SR","category":"firearm","ammo":"5.56x45mm Ammo","magazineSize":40},{"name":"Crossvec","category":"firearm","ammo":"9x19mm Ammo","magazineSize":40},{"name":"5.56x45mm Ammo","category":"ammo","unitPrice":3,"defaultAmount":40},{"name":"FSP-9","category":"firearm","ammo":"9x19mm Ammo","magazineSize":30},{"name":"Logicer","category":"firearm","ammo":"7.62x39mm Ammo","magazineSize":100},{"name":"High-Explosive Grenade","category":"grenade"},{"name":"Flashbang","category":"grenade"},{"name":".44mag Ammo","category":"ammo","unitPrice":7,"defaultAmount":6},{"name":"7.62x39mm Ammo","category":"ammo","unitPrice":3,"defaultAmount":30},{"name":"9x19mm Ammo","category":"ammo","unitPrice":2,"defaultAmount":15},{"name":"COM-18","category":"firearm","ammo":"9x19mm Ammo","magazineSize":15},{"name":"SCP-018","category":"SCP"},{"name":"SCP-268","category":"SCP"},{"name":"Adrenaline","category":"medical"},{"name":"Painkillers","category":"medical"},{"name":"Coin"},{"name":"Light Armor","category":"armor"},{"name":"Combat Armor","category":"armor"},{"name":"Heavy Armor","category":"armor"},{"name":".44 Revolver","category":"firearm","ammo":".44mag Ammo","magazineSize":6},{"name":"AK","category":"firearm","ammo":"7.62x39mm Ammo","magazineSize":30},{"name":"Shotgun","category":"firearm","ammo":"12/7 Buckshot Ammo","magazineSize":14},{"name":"SCP-2176","category":"SCP"},{"name":"SCP-244-A","category":"SCP"},{"name":"SCP-244-B","category":"SCP"},{"name":"SCP-1853","category":"SCP"},{"name":"3-X Particle Disruptor","category":"firearm","magazineSize":5},{"name":"COM-45","category":"firearm","ammo":"9x19mm Ammo","magazineSize":36},{"name":"SCP-1576","category":"SCP"},{"name":"Jailbird"},{"name":"SCP-207?","category":"SCP"},{"name":"FR-MG-0","category":"firearm","ammo":"5.56x45mm Ammo","magazineSize":100},{"name":"A7","category":"firearm","ammo":"7.62x39mm Ammo","magazineSize":30}];const translations={"Janitor Keycard":{"hu":"Gondnok Kulcskártya"},"Scientist Keycard":{"hu":"Tudós Kulcskártya"},"Research Supervisor Keycard":{"hu":"Kutatási Felügyelő Kulcskártya"},"Zone Manager Keycard":{"hu":"Zónakezelő Kulcskártya"},"Guard Keycard":{"hu":"Őr Kulcskártya"},"MTF Private Keycard":{"hu":"MTF Közlegény Kulcskártya"},"Containment Engineer Keycard":{"hu":"\"Containment\" Mérnök Kulcskártya"},"MTF Operative Keycard":{"hu":"MTF Őrmester Kulcskártya"},"MTF Captain Keycard":{"hu":"MTF Kapitány Kulcskártya"},"Facility Manager Keycard":{"hu":"Létesítménykezelő Kulcskártya"},"Chaos Insurgency Access Device":{"hu":"Chaos Insurgency Hozzáférési Eszköz"},"O5-Level Keycard":{"hu":"O5-Szintű Kulcskártya"},"Radio":{"hu":"Rádió"},"First-Aid Kit":{"hu":"Elsősegély-csomag"},"Flashlight":{"hu":"Zseblámpa"},"High-Explosive Grenade":{"hu":"Repeszgránát"},"Flashbang":{"hu":"Villanógránát"},"Adrenaline":{"hu":"Adrenalin"},"Painkillers":{"hu":"Fájdalomcsillapító"},"Light Armor":{"hu":"Könnyű Páncél"},"Combat Armor":{"hu":"Harci Páncél"},"Heavy Armor":{"hu":"Nehéz Páncél"},"Shotgun":{"hu":"Sörétes"},"9x19mm Ammo":{"hu":"9x19mm Lőszer"},"5.56x45mm Ammo":{"hu":"5.56x45mm Lőszer"},"7.62x39mm Ammo":{"hu":"7.62x39mm Lőszer"},"12/7 Buckshot Ammo":{"hu":"12/7 Buckshot Lőszer"},".44mag Ammo":{"hu":".44mag Lőszer"},"3-X Particle Disruptor":{"hu":"3-X Részecske-bomlasztó"},"Coal":{"hu":"Szén"},"Jailbird":{"hu":"Börtöntöltelék"},"desc-First-Aid Kit":{"en":"Heals your injuries.","hu":"Gyógyítja a sérüléseke"},"desc-Flashlight":{"en":"Let there be light!","hu":"S lőn világosság!"},"desc-Micro H.I.D":{"en":"Mobile high-intensity electrical discharge thrower.","hu":"Mobilis, nagy intenzitású elektromos kisülés szóró."},"desc-SCP-500":{"en":"The panacea.","hu":"A csodaszer."},"desc-SCP-207":{"en":"Harmfully increases motor skills.","hu":"Ártalmasan fejleszti a motoros készségeket."},"desc-High-Explosive Grenade":{"en":"Boom!","hu":"Bumm!"},"desc-Flashbang":{"en":"Blinds your enemies.","hu":"Megvakítja az ellenfeleket."},"desc-SCP-018":{"en":"Superball able to bounce with extreme efficiency.","hu":"Egy szuperlabda, amely képes extrém hatékonysággal pattogni."},"desc-SCP-268":{"en":"When worn, temporarily makes you invisible unless it is interrupted by any user interaction.","hu":"Viselése ideiglenesen láthatatlanná tesz, amíg bármilyen emberi cselekedettel félbe nem szakítod."},"desc-Adrenaline":{"en":"Temporarily increases endurance.","hu":"Ideiglenesen növeli az állóképességet."},"desc-Painkillers":{"en":"Relieve minor injuries.","hu":"Enyhíti a kisebb sérüléseket."},"desc-Coin":{"en":"You're not sure why you'd want to carry this around...","hu":"Nem érted, hogy ezt mégis miért cipeled ezt magaddal..."},"desc-SCP-2176":{"en":"Your very own Ghostlight! Caution, very fragile...","hu":"A saját Ghostlight-od! Vigyázat, nagyon törékeny..."},"desc-SCP-244-A":{"en":"An ancient vase, freezing to the touch. Creates a large cloud of icy fog when placed.","hu":"Egy ősrégi váza, fagyasztó tapintással. Nagy, fagyos ködöt készít lehelyezése után."},"desc-SCP-244-B":{"en":"An ancient vase, freezing to the touch. Creates a large cloud of icy fog when placed.","hu":"Egy ősrégi váza, fagyasztó tapintással. Nagy, fagyos ködöt készít lehelyezése után."},"desc-SCP-1853":{"en":"Improves weapon manipulation skills.","hu":"Fejleszti a fegyverkezelési készségeket."},"desc-Jailbird":{"en":"What?","hu":"Micsoda?"},"desc-SCP-207?":{"en":"Opposite day?","hu":"Fordított nap?"},"clickPrimary":{"en":"Click on an item to preview it","hu":"Kattints egy tárgyra az előnézethez"},"clickSecondary":{"en":"Click here to change the secondary item","hu":"Kattints ide a másodlagos tárgy megváltoztatásához"},"clickItem":{"en":"Click on an item","hu":"Kattints egy tárgyra"},"deselect":{"en":"Double click to deselect","hu":"Duplaklikk a kijelölés megszüntetéséhez"},"sameItem":{"en":"No need to upgrade, the items are the same.","hu":"Nincs szükség a fejlesztésre, a tárgyak ugyanazok."},"cannotBeMade":{"en":"{0} cannot be made in 914!","hu":"{0}-t nem lehet 914-ben készíteni!"},"noPath":{"en":"There is no upgrade path between the two items.<br>Click here to swap them.","hu":"Nincs fejlesztési út a két tárgy között.<br>Kattints ide, hogy kicseréld őket."},"noOutputs":{"en":"Cannot find outputs for \"{0}\"!","hu":"Kimenetek nem találhatók \"{0}\" tárgyhoz!"},"setAsSecondary":{"en":"Set as Secondary Item","hu":"Beállítás Másodlagos Tárgyként"},"showInfo":{"en":"Item Info","hu":"Tárgy Információ"},"obtaining":{"en":"Obtaining in 914","hu":"Beszerzés 914-ben"},"outputs":{"en":"914 Outputs","hu":"914 Kimenetek"},"probability":{"en":"Probability","hu":"Valószínűség"},"noInfo":{"en":"No information provided.","hu":"Nincs információ."},"typeKeycard":{"en":"Type: Keycard","hu":"Típus: Kulcskártya"},"accessLevels":{"en":"Access Levels:","hu":"Hozzáférési szintek:"},"typeFirearm":{"en":"Type: Firearm","hu":"Típus: Lőfegyver"},"magSize":{"en":"Default magazine size: {0}","hu":"Alapértelmezett tölténytár méret: {0}"},"ammo":{"en":"Ammo:","hu":"Lőszer:"},"typeAmmo":{"en":"Type: Ammo","hu":"Típus: Lőszer"},"usingAmmo":{"en":"Firearms using this type of ammo:","hu":"Lőfegyverek, amelyek ezt a típusú lőszert használják:"},"ammoPerClip":{"en":"Default rounds per clip:","hu":"Alapértelmezett lőszerek száma egy tölténytárban:"},"unitPrice":{"en":"Unit price:","hu":"Egységár:"},"clipOf":{"en":"Default clip of {0} rounds","hu":"Alapértelmezett tár {0} tölténnyel"},"convertAmmo":{"en":"Converting ammo","hu":"Lőszerkonvertálás"},"ammoProcessing":{"en":"Each type of ammo has its own unit price.<br>When SCP-914 processes ammo clips, the amount of exchanged (outputted) ammo is the input ammo rounds multiplied by the unit price rate listed below.<br>If the exchanged amount is a decimal, it will be rounded down and the non-exchanged (remaining) ammo will stay the type of the input rounds.<br>Exchanged formula: floor(amount * (fromPrice / toPrice))<br>Calculating remaining ammo: amount - exchanged * (toPrice / fromPrice)","hu":"Minden lőszertípusnak saját egységára van.<br>Amikor SCP-914 feldolgozza a tölténytárakat, az átváltott (kiadott) lőszer mennyisége egyenlő a bemenet lőszer mennyisége szorozva az alább látható egységár-aránnyal.<br>Ha a konvertált mennyiség törtszám, akkor floorolva (lekerekítve) lesz, és a nem átváltott (maradék) lőszer a bemeneti lőszer típusa marad.<br>Átváltás képlete: floor(mennyiség * (bemenetÁra / célÁra))<br>Maradék kiszámítása: mennyiség - átváltott * (célÁra / bemenetÁra)"},"input":{"en":"Input","hu":"Bemenet"},"typeGrenade":{"en":"Type: Grenade<br>Fuse time: {0}s","hu":"Típus: Gránát<br>Gyújtási idő: {0} másodperc"},"inGameDesc":{"en":"Description in-game: {0}","hu":"Leírás a játékban: {0}"},"Destroys the Item":{"hu":"Megsemmisíti a Tárgyat"},"Immediately Shatters":{"hu":"Azonnal Összetörik"},"Randomizes Attachments":{"hu":"Véletlenszerűsíti a Tartozékokat"},"Recharges the Micro H.I.D.":{"hu":"Újratölti a Micro H.I.D.-t"},"Refills Ammo":{"hu":"Újratölti a Lőszert"},"obtaining-from":{"en":"From","hu":"Ebből:"},"obtaining-on":{"en":"on","hu":""},"obtaining-comma":{"en":",","hu":" beállításon,"},"notAffiliated":{"en":"This website is not affiliated with Northwood Studios","hu":"Ez a weboldal nincs kapcsolatban a következővel: Northwood Studios"},"appInfo":{"en":"This website is not affiliated with Northwood Studios.<br>\"SCP: Secret Laboratory\" is a free to play multiplayer game developed by Northwood Studios.<br><a href=\"https://en.scpslgame.com\" target=\"_blank\">Visit the official site for more information</a><a href=\"https://patreon.com/HubertMoszka\" target=\"_blank\">Support Northwood Studios</a><br>This app lets you view the SCP-914 recipes in SCP:SL.<br>All recipes were extracted from the server code and files.<br>Click an item in the list to set it as the primary item. Double click it to set it as the secondary item.<br>You can deselect a selected item by double-clicking on it.<br>Once both the primary and secondary items have been specified, the SCP-914 upgrade path* will be displayed between the two items. Click on the path to swap the items.<br>By right-clicking an item, it will show a menu. You can view the information about the item, how to obtain it in SCP-914 (Obtaining menu) or what it turns into when upgraded (Outputs menu).<br>In the Obtaining or the Outputs menu, double-clicking an item will highlight the item in the other view.<br><br>* The path is not always the fastest (least amount of upgrades) or the safest (least chance of the item being destroyed), as the app currently displays the first path it can find between the two items.<br><br>Ammo item processing uses an economy system.<button onclick=\"unitPriceGraph();\">Click here to view how it works.</button><br><br>Click the info button again or press Escape to close this view.","hu":"If you wish to view the page in English, click the \"HU\" button to switch languages.<br><br>Ez a webhely nem áll kapcsolatban a következővel: Northwood Studios.<br>Az \"SCP: Secret Laboratory\" egy ingyenesen játszható többjátékos játék, kifejlesztve a Northwood Studios által.<br><a href=\"https://en.scpslgame.com\" target=\"_blank\">Látogasd meg a hivatalos webhelyt további információért</a><a href=\"https://patreon.com/HubertMoszka\" target=\"_blank\">Northwood Studios támogatása</a><br>Ez az alkalmazás lehetővé teszi az SCP-914 receptek megtekintését SCP:SL-ben.<br>Minden recept a szerver kódjából és fájljaiból származik.<br>Kattints egy tárgyra a listában, hogy beállítsd elsődleges tárgyként. Dupla kattintás másodlagos tárgyként állítja be.<br>A kiválasztott kijelölést megszüntetheted, ha duplán kattintasz a kiválasztott tárgyra.<br>Amikor az elsődleges és a másodlagos tárgy is be lett állítva, az SCP-914 fejlesztési útvonal* megjelenik a kettő között. Kattints a fejlesztési útra a tárgyak felcseréléséhez.<br>Ha jobb egérgombbal kattintasz egy tárgyra, megjelenik egy menü. Megtekintheted a tárgyra vonatkozó információkat, az SCP-914-ben való beszerzési módját (Beszerzés menü), vagy hogy mivé válik a fejlesztés során (Kimenetek menü).<br>A Beszerzés vagy a Kimenetek menüben, ha duplán kattintasz egy tárgyra, a másik nézetben kiemeli a tárgyat. <br><br><br>* A fejlesztési út nem mindig a leggyorsabb (legkevesebb fejlesztés) vagy a legbiztonságosabb (a legalacsonyabb esélye annak, hogy a tárgy megsemmisül), mivel az alkalmazás jelenleg a kettő között talált első utat jeleníti meg.<br><br>Tölténytár feldolgozás egy gazdaságos rendszert használ.<button onclick=\"unitPriceGraph();\">Kattints ide, hogy megtudd, miként működik.</button><br><br>Kattints újra az információ gombra, vagy nyomd meg az Escape billentyűt, hogy bezárd ezt a nézetet."},"sort-byId":{"en":"Sort by ID","hu":"Rendezés azonosító szerint"},"sort-byName":{"en":"Sort by name","hu":"Rendezés név szerint"},"sort-byCategory":{"en":"Sort by category","hu":"Rendezés kategória szerint"}};const recipes=parseRecipes({"Janitor Keycard":{"Rough":{"Action":"Destroys the Item"},"Coarse":{"Action":"Destroys the Item"},"1:1":"Zone Manager Keycard","Fine":"Scientist Keycard","Very Fine":[{"Item":"Scientist Keycard","Chance":0.5},{"Item":"Research Supervisor Keycard","Chance":0.5}]},"Scientist Keycard":{"Rough":[{"Action":"Destroys the Item","Chance":0.5},{"Item":"Janitor Keycard","Chance":0.5}],"Coarse":"Janitor Keycard","1:1":"Zone Manager Keycard","Fine":"Research Supervisor Keycard","Very Fine":[{"Item":"Scientist Keycard","Chance":0.333333343},{"Item":"Research Supervisor Keycard","Chance":0.333333343},{"Item":"Facility Manager Keycard","Chance":0.333333343}]},"Research Supervisor Keycard":{"Rough":[{"Item":"Janitor Keycard","Chance":0.5},{"Item":"Scientist Keycard","Chance":0.5}],"Coarse":"Scientist Keycard","1:1":"Guard Keycard","Fine":"Facility Manager Keycard","Very Fine":[{"Item":"Research Supervisor Keycard","Chance":0.5},{"Item":"Facility Manager Keycard","Chance":0.5}]},"Zone Manager Keycard":{"Rough":[{"Item":"Janitor Keycard","Chance":0.5},{"Item":"Scientist Keycard","Chance":0.5}],"Coarse":"Scientist Keycard","1:1":"Guard Keycard","Fine":"Facility Manager Keycard","Very Fine":[{"Item":"Facility Manager Keycard","Chance":0.4},{"Item":"Zone Manager Keycard","Chance":0.4},{"Item":"Chaos Insurgency Access Device","Chance":0.2}]},"Guard Keycard":{"Rough":[{"Item":"Janitor Keycard","Chance":0.5},{"Item":"Scientist Keycard","Chance":0.5}],"Coarse":"Scientist Keycard","1:1":"Research Supervisor Keycard","Fine":"MTF Operative Keycard","Very Fine":[{"Item":"Guard Keycard","Chance":0.333333343},{"Item":"MTF Operative Keycard","Chance":0.333333343},{"Item":"MTF Captain Keycard","Chance":0.333333343}]},"MTF Private Keycard":{"Rough":[{"Item":"Scientist Keycard","Chance":0.5},{"Item":"Research Supervisor Keycard","Chance":0.5}],"Coarse":"Research Supervisor Keycard","1:1":"Facility Manager Keycard","Fine":"MTF Operative Keycard","Very Fine":[{"Item":"MTF Operative Keycard","Chance":0.5},{"Item":"MTF Captain Keycard","Chance":0.5}]},"Containment Engineer Keycard":{"Rough":[{"Item":"Scientist Keycard","Chance":0.5},{"Item":"Research Supervisor Keycard","Chance":0.5}],"Coarse":"Research Supervisor Keycard","1:1":"Facility Manager Keycard","Fine":[{"Item":"O5-Level Keycard","Chance":0.5},{"Item":"MTF Captain Keycard","Chance":0.5}],"Very Fine":[{"Item":"O5-Level Keycard","Chance":0.6666667},{"Action":"Destroys the Item","Chance":0.333333343}]},"MTF Operative Keycard":{"Rough":[{"Item":"Guard Keycard","Chance":0.5},{"Item":"MTF Private Keycard","Chance":0.5}],"Coarse":"MTF Private Keycard","1:1":"Facility Manager Keycard","Fine":"MTF Captain Keycard","Very Fine":[{"Item":"MTF Captain Keycard","Chance":0.333333343},{"Item":"O5-Level Keycard","Chance":0.333333343},{"Item":"MTF Operative Keycard","Chance":0.333333343}]},"MTF Captain Keycard":{"Rough":"Guard Keycard","Coarse":"MTF Operative Keycard","1:1":"Chaos Insurgency Access Device","Fine":"O5-Level Keycard","Very Fine":[{"Item":"O5-Level Keycard","Chance":0.75},{"Action":"Destroys the Item","Chance":0.25}]},"Facility Manager Keycard":{"Rough":"Zone Manager Keycard","Coarse":"MTF Captain Keycard","1:1":"Chaos Insurgency Access Device","Fine":"O5-Level Keycard","Very Fine":[{"Item":"O5-Level Keycard","Chance":0.75},{"Action":"Destroys the Item","Chance":0.25}]},"Chaos Insurgency Access Device":{"Rough":"Guard Keycard","Coarse":"MTF Operative Keycard","1:1":"MTF Captain Keycard","Fine":"O5-Level Keycard","Very Fine":[{"Item":"O5-Level Keycard","Chance":0.75},{"Action":"Destroys the Item","Chance":0.25}]},"O5-Level Keycard":{"Rough":"Guard Keycard","Coarse":[{"Item":"Facility Manager Keycard","Chance":0.5},{"Item":"MTF Captain Keycard","Chance":0.5}],"1:1":"O5-Level Keycard","Fine":[{"Item":"O5-Level Keycard","Chance":0.5},{"Action":"Destroys the Item","Chance":0.5}],"Very Fine":[{"Item":"O5-Level Keycard","Chance":0.25},{"Action":"Destroys the Item","Chance":0.75}]},"Radio":{"Rough":{"Action":"Destroys the Item"},"Coarse":{"Action":"Destroys the Item"},"1:1":"Radio","Fine":"Radio","Very Fine":[{"Item":"Flashlight","Chance":0.75},{"Item":"SCP-1576","Chance":0.25}]},"COM-15":{"Rough":[{"Output":{"Action":"Destroys the Item"},"Chance":0.5},{"Output":"9x19mm Ammo","Chance":0.5}],"Coarse":[{"Output":"COM-15","Chance":0.5},{"Output":"9x19mm Ammo","Chance":0.5}],"1:1":{"Action":"Randomizes Attachments"},"Fine":"COM-18","Very Fine":[{"Output":".44 Revolver","Chance":0.295},{"Output":"FSP-9","Chance":0.555},{"Output":"COM-45","Chance":0.15}]},"First-Aid Kit":{"Rough":{"Action":"Destroys the Item"},"Coarse":"Painkillers","1:1":"First-Aid Kit","Fine":"Adrenaline","Very Fine":[{"Item":"First-Aid Kit","Chance":0.333333343},{"Action":"Destroys the Item","Chance":0.333333343},{"Item":"SCP-500","Chance":0.333333343}]},"Flashlight":{"Rough":{"Action":"Destroys the Item"},"Coarse":[{"Item":"Flashlight","Chance":0.5},{"Action":"Destroys the Item","Chance":0.5}],"1:1":"Flashlight","Fine":"Radio","Very Fine":[{"Item":"Flashbang","Chance":0.9},{"Item":"SCP-2176","Chance":0.1}]},"Micro H.I.D.":{"Rough":"MTF-E11-SR","1:1 / Fine / Very Fine":{"Action":"Recharges the Micro H.I.D."},"Coarse":[{"Output":"3-X Particle Disruptor","Chance":0.5},{"Output":"Jailbird","Chance":0.5}]},"SCP-500":{"Rough":[{"Item":"Painkillers","Chance":0.5},{"Item":"First-Aid Kit","Chance":0.5}],"Coarse":"Adrenaline","1:1":"SCP-500","Fine":[{"Action":"Destroys the Item","Chance":0.5},{"Item":"SCP-500","Chance":0.5}],"Very Fine":{"Action":"Destroys the Item"}},"SCP-207":{"Rough":"Painkillers","Coarse":"Adrenaline","1:1":"SCP-207?","Fine":"SCP-1853","Very Fine":{"Action":"Destroys the Item"}},"12/7 Buckshot Ammo":{"Info":"Only works on dropped items regardless of 914mode!","Rough / Coarse":"7.62x39mm Ammo","1:1":"9x19mm Ammo","Fine / Very Fine":".44mag Ammo"},"MTF-E11-SR":{"Rough":[{"Output":"COM-15","Chance":0.5},{"Output":{"Item":"5.56x45mm Ammo","Count":2},"Chance":0.5}],"Coarse":"Crossvec","1:1":{"Action":"Randomizes Attachments"},"Fine":"AK","Very Fine":[{"Output":"Micro H.I.D.","Chance":0.05},{"Output":"FR-MG-0","Chance":0.25},{"Output":"Shotgun","Chance":0.1},{"Output":"AK","Chance":0.3},{"Output":"Crossvec","Chance":0.3}]},"Crossvec":{"Rough":[{"Output":{"Action":"Destroys the Item"},"Chance":0.5},{"Output":{"Item":"9x19mm Ammo","Count":4},"Chance":0.5}],"Coarse":"FSP-9","1:1":{"Action":"Randomizes Attachments"},"Fine":[{"Output":"MTF-E11-SR","Chance":0.6},{"Output":"AK","Chance":0.4}],"Very Fine":[{"Output":"Shotgun","Chance":0.3},{"Output":"MTF-E11-SR","Chance":0.7}]},"5.56x45mm Ammo":{"Info":"Only works on dropped items regardless of 914mode!","Rough / Coarse":"9x19mm Ammo","1:1":"7.62x39mm Ammo","Fine / Very Fine":"9x19mm Ammo"},"FSP-9":{"Rough":[{"Output":{"Action":"Destroys the Item"},"Chance":0.5},{"Output":{"Item":"9x19mm Ammo","Count":3},"Chance":0.5}],"Coarse":"COM-18","1:1":{"Action":"Randomizes Attachments"},"Fine":"Crossvec","Very Fine":[{"Output":"Crossvec","Chance":0.7},{"Output":"MTF-E11-SR","Chance":0.3}]},"Logicer":{"Rough":[{"Output":"AK","Chance":0.5},{"Output":{"Item":"7.62x39mm Ammo","Count":4},"Chance":0.5}],"Coarse":"FR-MG-0","1:1":{"Action":"Randomizes Attachments"},"Fine":"Shotgun","Very Fine":[{"Output":"Micro H.I.D.","Chance":0.1},{"Outputs":["AK",{"Item":"High-Explosive Grenade","Count":2}],"Chance":0.6},{"Outputs":[".44 Revolver","Shotgun"],"Chance":0.3}]},"High-Explosive Grenade":{"Rough":{"Action":"Destroys the Item"},"Coarse":"Flashbang","1:1":"Flashbang","Fine":"High-Explosive Grenade","Very Fine":[{"Item":"High-Explosive Grenade","Chance":0.25},{"Action":"Destroys the Item","Chance":0.5},{"Item":"SCP-018","Chance":0.25}]},"Flashbang":{"Rough":{"Action":"Destroys the Item"},"Coarse":"Flashlight","1:1":"High-Explosive Grenade","Fine":"High-Explosive Grenade","Very Fine":[{"Action":"Destroys the Item","Chance":0.75},{"Item":"SCP-207","Chance":0.25}]},".44mag Ammo":{"Info":"Only works on dropped items regardless of 914mode!","Rough / Coarse":"12/7 Buckshot Ammo","1:1":"9x19mm Ammo","Fine / Very Fine":"7.62x39mm Ammo"},"7.62x39mm Ammo":{"Info":"Only works on dropped items regardless of 914mode!","Rough / Coarse":".44mag Ammo","1:1":"5.56x45mm Ammo","Fine / Very Fine":"12/7 Buckshot Ammo"},"9x19mm Ammo":{"Info":"Only works on dropped items regardless of 914mode!","Rough / Coarse":"5.56x45mm Ammo","1:1":".44mag Ammo","Fine / Very Fine":"5.56x45mm Ammo"},"COM-18":{"Rough":[{"Output":"9x19mm Ammo","Chance":0.5},{"Output":{"Item":"9x19mm Ammo","Count":2},"Chance":0.5}],"Coarse":"COM-15","1:1":{"Action":"Randomizes Attachments"},"Fine":"FSP-9","Very Fine":[{"Output":".44 Revolver","Chance":0.45},{"Output":"Crossvec","Chance":0.55}]},"SCP-018":{"Rough":"Flashbang","Coarse":"Flashbang","1:1":"SCP-018","Fine":"High-Explosive Grenade","Very Fine":"Coin"},"SCP-268":{"Rough":{"Action":"Destroys the Item"},"Coarse":"SCP-268","1:1":"SCP-268","Fine":"SCP-268","Very Fine":"SCP-268"},"Adrenaline":{"Rough":[{"Action":"Destroys the Item","Chance":0.5},{"Item":"Painkillers","Chance":0.5}],"Coarse":[{"Item":"First-Aid Kit","Chance":0.5},{"Item":"Painkillers","Chance":0.5}],"1:1":"Adrenaline","Fine":"SCP-500","Very Fine":[{"Item":"Painkillers","Chance":0.6666667},{"Item":"SCP-500","Chance":0.333333343}]},"Painkillers":{"Rough":{"Action":"Destroys the Item"},"Coarse":[{"Item":"Painkillers","Chance":0.5},{"Action":"Destroys the Item","Chance":0.5}],"1:1":[{"Item":"First-Aid Kit","Chance":0.5},{"Item":"Painkillers","Chance":0.5}],"Fine":"First-Aid Kit","Very Fine":[{"Item":"First-Aid Kit","Chance":0.5},{"Item":"Adrenaline","Chance":0.5}]},"Coin":{"Rough":{"Action":"Destroys the Item"},"Coarse":"Coin","1:1":"Coin","Fine":"Coin","Very Fine":"Coin"},"Light Armor":{"Rough":[{"Action":"Destroys the Item","Chance":0.5},{"Item":"Radio","Chance":0.5}],"Coarse":"Flashlight","1:1":"Light Armor","Fine":"Combat Armor","Very Fine":[{"Item":"Combat Armor","Chance":0.5},{"Item":"Heavy Armor","Chance":0.5}]},"Combat Armor":{"Rough":[{"Item":"Light Armor","Chance":0.5},{"Item":"Flashlight","Chance":0.5}],"Coarse":"Light Armor","1:1":"Combat Armor","Fine":"Heavy Armor","Very Fine":"Heavy Armor"},"Heavy Armor":{"Rough":[{"Item":"Combat Armor","Chance":0.5},{"Item":"Light Armor","Chance":0.5}],"Coarse":"Combat Armor","1:1":"Heavy Armor","Fine":"Coin","Very Fine":"Coin"},".44 Revolver":{"Rough":[{"Output":{"Action":"Destroys the Item"},"Chance":0.5},{"Output":{"Item":".44mag Ammo","Count":2},"Chance":0.5}],"Coarse":[{"Output":"COM-18","Chance":0.8},{"Output":"High-Explosive Grenade","Chance":0.2}],"1:1":{"Action":"Randomizes Attachments"},"Fine":"Crossvec","Very Fine":[{"Output":{"Item":"High-Explosive Grenade","Count":2},"Chance":0.5},{"Outputs":["Zone Manager Keycard","COM-15","Painkillers","First-Aid Kit"],"Chance":0.5}]},"AK":{"Rough":[{"Output":"COM-15","Chance":0.5},{"Output":{"Item":"7.62x39mm Ammo","Count":3},"Chance":0.5}],"Coarse":[{"Output":"Crossvec","Chance":0.5},{"Output":"A7","Chance":0.5}],"1:1":{"Action":"Randomizes Attachments"},"Fine":"MTF-E11-SR","Very Fine":[{"Output":"Micro H.I.D.","Chance":0.05},{"Output":"Logicer","Chance":0.25},{"Output":"Shotgun","Chance":0.1},{"Output":"MTF-E11-SR","Chance":0.3},{"Output":"Crossvec","Chance":0.3}]},"Shotgun":{"Rough":[{"Output":"COM-15","Chance":0.5},{"Output":{"Item":"12/7 Buckshot Ammo","Count":2},"Chance":0.5}],"Coarse":"AK","1:1":{"Action":"Randomizes Attachments"},"Fine":"Logicer","Very Fine":[{"Output":"Micro H.I.D.","Chance":0.05},{"Output":"Logicer","Chance":0.25},{"Output":"AK","Chance":0.4},{"Output":"Crossvec","Chance":0.3}]},"SCP-2176":{"Rough":{"Action":"Immediately Shatters"},"Coarse":"Flashbang","1:1":{"Output":{"Item":"Coin","Count":12}},"Fine":"COM-18","Very Fine":[{"Output":"Flashlight","Chance":0.8},"MTF-E11-SR"]},"SCP-244-A":{"Rough":{"Action":"Destroys the Item"},"Coarse":"Coin","1:1":"SCP-244-B","Fine":"SCP-244-A","Very Fine":"SCP-244-A"},"SCP-244-B":{"Rough":{"Action":"Destroys the Item"},"Coarse":"Coin","1:1":"SCP-244-A","Fine":"SCP-244-B","Very Fine":"SCP-244-B"},"SCP-1853":{"Rough":"Painkillers","Coarse":"Adrenaline","1:1":"SCP-1853","Fine":"SCP-207","Very Fine":[{"Action":"Destroys the Item","Chance":0.5},{"Item":"SCP-500","Chance":0.5}]},"3-X Particle Disruptor":{"Rough":"Flashlight","Coarse":"MTF-E11-SR","1:1":"Jailbird","Fine":{"Action":"Refills Ammo"},"Very Fine":{"Item":"Micro H.I.D."}},"COM-45":{"Rough":[{"Output":{"Action":"Destroys the Item"},"Chance":0.5},{"Output":"9x19mm Ammo","Chance":0.5}],"Coarse":[{"Output":"COM-15","Chance":0.5},{"Output":"9x19mm Ammo","Chance":0.5}],"1:1":{"Action":"Randomizes Attachments"},"Fine":"Crossvec","Very Fine":".44 Revolver"},"SCP-1576":{"Rough":"Radio","Coarse":"SCP-2176","1:1":"SCP-1576","Fine":{"Action":"Destroys the Item"},"Very Fine":{"Action":"Destroys the Item"}},"Jailbird":{"Rough":"Flashlight","Coarse":"Jailbird","1:1":"3-X Particle Disruptor","Fine":"Jailbird","Very Fine":{"Item":"Micro H.I.D."}},"SCP-207?":{"Rough":"Painkillers","Coarse":"Adrenaline","1:1":"SCP-207","Fine":"SCP-1853","Very Fine":{"Action":"Destroys the Item"}},"FR-MG-0":{"Rough":[{"Output":"MTF-E11-SR","Chance":0.5},{"Output":{"Item":"5.56x45mm Ammo","Count":4},"Chance":0.5}],"Coarse":"MTF-E11-SR","1:1":{"Action":"Randomizes Attachments"},"Fine":"Logicer","Very Fine":[{"Output":"Micro H.I.D.","Chance":0.05},{"Outputs":["Crossvec","COM-18"],"Chance":0.95}]},"A7":{"Rough":[{"Output":"COM-15","Chance":0.5},{"Output":{"Item":"7.62x39mm Ammo","Count":3},"Chance":0.5}],"Coarse":"COM-18","1:1":{"Action":"Randomizes Attachments"},"Fine":"AK","Very Fine":[".44 Revolver","Flashbang"]},"Lantern":{"Rough":{"Action":"Destroys the Item"},"Coarse":[{"Item":"Lantern","Chance":0.5},{"Action":"Destroys the Item","Chance":0.5}],"1:1":"Flashlight","Fine":"Radio","Very Fine":[{"Item":"Flashbang","Chance":0.9},{"Item":"SCP-2176","Chance":0.1}]}});