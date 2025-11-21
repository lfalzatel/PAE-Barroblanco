// ========================================
// DATOS DEL JSON INTEGRADOS DIRECTAMENTE
// ========================================
// Esto evita problemas de CORS al abrir el archivo localmente

const ESTUDIANTES_BACHILLERATO_DATA = 
{
  "groups": [
    // Grados 6°
    { id: '601', grade: '6°',name: '601', type: 'regular', students: 32 },  // ✅ DATOS REALES
    { id: '602', grade: '6°',name: '602', type: 'regular', students: 23 },
    { id: '603', grade: '6°',name: '603', type: 'regular', students: 27 },
    { id: '604', grade: '6°',name: '604', type: 'sordos', students: 1 },
    { id: '640', grade: '6°',name: '640', type: 'regular', students: 32 },
    
    // Grados 7°
    { id: '701', grade: '7°', name: '701', type: 'regular', students: 35 },
    { id: '702', grade: '7°', name: '702', type: 'regular', students: 26 },
    { id: '703', grade: '7°', name: '703', type: 'regular', students: 34 },
    { id: '704', grade: '7°', name: '704', type: 'sordos', students: 4 },
    
    // Grados 8°
    { id: '801', grade: '8°', name: '801', type: 'regular', students: 35 },
    { id: '802', grade: '8°', name: '802', type: 'regular', students: 33 },
    { id: '804', grade: '8°', name: '804', type: 'sordos', students: 1 },
    
    // Grados 9°
    { id: '901', grade: '9°', name: '901', type: 'regular', students: 29 },
    { id: '902', grade: '9°', name: '902', type: 'regular', students: 29 },
    
    // Grados 10°
    { id: '1001', grade: '10°', name: '1001', type: 'regular', students: 26 },
    { id: '1002', grade: '10°', name: '1002', type: 'regular', students: 23 },
    { id: '1004', grade: '10°', name: '1004', type: 'sordos', students: 4 },
    
    // Grados 11°
    { id: '1101', grade: '11°', name: '1101', type: 'regular', students: 28 },
    { id: '1102', grade: '11°', name: '1102', type: 'regular', students: 34 },
    { id: '1104', grade: '11°', name: '1104', type: 'sordos', students: 1 },
  ],
  "students": [
    // Estudiantes de 601
    { group: '601', grade: '6°', matricula: '190032', nombre: 'AREIZA GIL VALERIA' },
    { group: '601', grade: '6°', matricula: '200171', nombre: 'ARTEAGA BORGES ASHLEY NAOMI' },
    { group: '601', grade: '6°', matricula: '240216', nombre: 'AYALA  CAMACHO  TALEF' },
    { group: '601', grade: '6°', matricula: '240075', nombre: 'BAENA ACOSTA SAMUEL' },
    { group: '601', grade: '6°', matricula: '240164', nombre: 'BALLESTEROS  GONZALEZ  GREYSI PAOLA' },
    { group: '601', grade: '6°', matricula: '240081', nombre: 'BEDOYA  GIL  EMILIANO' },
    { group: '601', grade: '6°', matricula: '180003', nombre: 'BETANCUR GARCIA SAMANTHA' },
    { group: '601', grade: '6°', matricula: '190039', nombre: 'CARDONA BUSTAMANTE MARIA VICTORIA' },
    { group: '601', grade: '6°', matricula: '171018', nombre: 'CARDONA GARCIA CHRISTOPHER' },
    { group: '601', grade: '6°', matricula: '190015', nombre: 'CASTRO MARTINEZ MELISA' },
    { group: '601', grade: '6°', matricula: '230066', nombre: 'CEBALLOS RESTREPO JHOJAN SANTIAGO' },
    { group: '601', grade: '6°', matricula: '190040', nombre: 'CERON MOJICA IAN MATIAS' },
    { group: '601', grade: '6°', matricula: '211035', nombre: 'DE AVILA CANGA LUIS FERNANDO' },
    { group: '601', grade: '6°', matricula: '230121', nombre: 'ECHEVERRI GIRALDO EMILIANO' },
    { group: '601', grade: '6°', matricula: '231017', nombre: 'ESCOBAR MARTINEZ NATHALY JUDITH' },
    { group: '601', grade: '6°', matricula: '191010', nombre: 'GARCIA GARCIA SAMANTA' },
    { group: '601', grade: '6°', matricula: '181003', nombre: 'GARCIA GIRALDO JERONIMO' },
    { group: '601', grade: '6°', matricula: '250028', nombre: 'JARAMILLO MONTOYA DULCE MARIA' },
    { group: '601', grade: '6°', matricula: '191006', nombre: 'OSORIO LEON DYLAN JERONIMO' },
    { group: '601', grade: '6°', matricula: '190019', nombre: 'PARRA GARCIA SAMANTHA' },
    { group: '601', grade: '6°', matricula: '190082', nombre: 'OSPINA OSORIO JERONIMO' },
    { group: '601', grade: '6°', matricula: '231062', nombre: 'PAVAS LOPEZ ALISSON ANDREA' },
    { group: '601', grade: '6°', matricula: '250089', nombre: 'PICO ENAMORADO ESTEBAN' },
    { group: '601', grade: '6°', matricula: '191002', nombre: 'PINO SANCHEZ JULIAN ANDRES' },
    { group: '601', grade: '6°', matricula: '250027', nombre: 'PUERTA ALVAREZ HELEN NICKEL' },
    { group: '601', grade: '6°', matricula: '190020', nombre: 'ROLDAN POSADA ANA SOFIA' },
    { group: '601', grade: '6°', matricula: '210102', nombre: 'SANCHEZ OCAMPO CAROLINA' },
    { group: '601', grade: '6°', matricula: '190014', nombre: 'SERNA ZAPATA EMILIANO' },
    { group: '601', grade: '6°', matricula: '250087', nombre: 'VALENCIA ALVAREZ LUNA' },
    { group: '601', grade: '6°', matricula: '240271', nombre: 'VILLAMIL GOMEZ SAMANTHA' },
    { group: '601', grade: '6°', matricula: '250233', nombre: 'LEGUIZAMO BRACHO SAMUEL JESUS' },
    { group: '601', grade: '6°', matricula: '250243', nombre: 'VELEZ PALACIO JUAN PABLO' },
    // Estudiantes de 602
    { group: '602', grade: '6°', matricula: '250109', nombre: 'BLANCO OROZCO MARWIN EDUARDO' },
    { group: '602', grade: '6°', matricula: '220157', nombre: 'CHAVERRA BOLIVAR KEINER' },
    { group: '602', grade: '6°', matricula: '230186', nombre: 'ELEJALDE LEON KATHERIN ANDREA' },
    { group: '602', grade: '6°', matricula: '220189', nombre: 'FARACICA BRICEÑO DIEGO ALEJANDRO' },
    { group: '602', grade: '6°', matricula: '190033', nombre: 'FRANCO GARCIA GERALDINE' },
    { group: '602', grade: '6°', matricula: '191013', nombre: 'GIRALDO MARIN MARLON' },
    { group: '602', grade: '6°', matricula: '221052', nombre: 'GOMEZ DAVILA SIMON ANTONIO' },
    { group: '602', grade: '6°', matricula: '241034', nombre: 'GOMEZ GARCES CARLOS DAVID' },
    { group: '602', grade: '6°', matricula: '250216', nombre: 'LOAIZA SUAREZ ESTEFANIA' },
    { group: '602', grade: '6°', matricula: '250205', nombre: 'LOZANO TOVAR KAROL STEVEN' },
    { group: '602', grade: '6°', matricula: '191023', nombre: 'MORA GONZALEZ SARA' },
    { group: '602', grade: '6°', matricula: '250068', nombre: 'MORENO CASTRO VICTOR ALFONSO' },
    { group: '602', grade: '6°', matricula: '250209', nombre: 'NARANJO  CARREÑO ERICK SEBASTIAN' },
    { group: '602', grade: '6°', matricula: '211059', nombre: 'OCAMPO RODRIGUEZ DYLAN' },
    { group: '602', grade: '6°', matricula: '241047', nombre: 'OCHOA  SEPULVEDA  ROXANA' },
    { group: '602', grade: '6°', matricula: '181022', nombre: 'PEREZ MEDINA MARIA  PAULA' },
    { group: '602', grade: '6°', matricula: '241033', nombre: 'QUINTERO  PAYAN  ERIKA' },
    { group: '602', grade: '6°', matricula: '160022', nombre: 'RENDON OCAMPO JUAN DAVID' },
    { group: '602', grade: '6°', matricula: '250124', nombre: 'RIOS SUAREZ EVER ALEXIS' },
    { group: '602', grade: '6°', matricula: '240033', nombre: 'RODRIGUEZ MOIZZI MAURICIO JOSE' },
    { group: '602', grade: '6°', matricula: '250117', nombre: 'TAMARA BRAVO JUAN JOSE' },
    { group: '602', grade: '6°', matricula: '240087', nombre: 'TEJADA  TAMAYO SUSANA' },
    { group: '602', grade: '6°', matricula: '240237', nombre: 'VILLOTA CHACON LUISA MARIA' },
    // Estudiantes de 603
    { group: '603', grade: '6°', matricula: '250186', nombre: 'BUELVAS VILLEGAS SHERLI SOFIA' },
    { group: '603', grade: '6°', matricula: '250132', nombre: 'CORREA PEREZ ANDRES DAVID' },
    { group: '603', grade: '6°', matricula: '250059', nombre: 'GARCIA VILLA JULIETA' },
    { group: '603', grade: '6°', matricula: '250052', nombre: 'GIRALDO ALVAREZ MARIA SALOME' },
    { group: '603', grade: '6°', matricula: '190029', nombre: 'GOMEZ JIMENEZ MARIA JOSE' },
    { group: '603', grade: '6°', matricula: '250061', nombre: 'IBARRA PERDOMO ZAIRA TATIANA' },
    { group: '603', grade: '6°', matricula: '250192', nombre: 'JARAMILLO JURADO ERIK' },
    { group: '603', grade: '6°', matricula: '250054', nombre: 'LARREAL GONZALEZ JOHALICE ADRIANA' },
    { group: '603', grade: '6°', matricula: '250055', nombre: 'LARREAL GONZALEZ JUSTIN ALEXANDER' },
    { group: '603', grade: '6°', matricula: '250067', nombre: 'LEON LOPEZ MARIA ISABEL' },
    { group: '603', grade: '6°', matricula: '180015', nombre: 'LOPEZ ESTRADA KARIM PAULINA' },
    { group: '603', grade: '6°', matricula: '220210', nombre: 'MANCO GOMEZ JHOAN DAVID' },
    { group: '603', grade: '6°', matricula: '190047', nombre: 'MANRIQUE ORTEGA SAMUEL' },
    { group: '603', grade: '6°', matricula: '250134', nombre: 'MEDINA URREGO DOMINICK' },
    { group: '603', grade: '6°', matricula: '190009', nombre: 'MESSA TORO ALEJANDRA' },
    { group: '603', grade: '6°', matricula: '190016', nombre: 'NIÑO BETANCUR VALERIA' },
    { group: '603', grade: '6°', matricula: '250066', nombre: 'OROZCO LOPEZ SEBASTIAN' },
    { group: '603', grade: '6°', matricula: '240029', nombre: 'OSPINA GARZON MARIA CAMILA' },
    { group: '603', grade: '6°', matricula: '250082', nombre: 'PELAEZ TORRES ANDRES CAMILO' },
    { group: '603', grade: '6°', matricula: '240120', nombre: 'RENDON ELEJALDE JUAN JOSE' },
    { group: '603', grade: '6°', matricula: '240082', nombre: 'RODRIGUEZ HENAO MARIA ANTONIA' },
    { group: '603', grade: '6°', matricula: '191061', nombre: 'RUIZ MONSALVE JULIAN' },
    { group: '603', grade: '6°', matricula: '240254', nombre: 'SALAZAR  ALZATE  MARIANA' },
    { group: '603', grade: '6°', matricula: '250098', nombre: 'SUAREZ VALERO AIRAM SUSEJ' },
    { group: '603', grade: '6°', matricula: '240074', nombre: 'TORRES NUÑEZ MATTHEW DAVID' },
    { group: '603', grade: '6°', matricula: '250225', nombre: 'URREGO HIGUITA GUADALUPE' },
    { group: '603', grade: '6°', matricula: '250211', nombre: 'VALDEZ RODRIGUEZ RICHARID NICOLE' },
    // Estudiantes de 604
    { group: '604', grade: '6°', matricula: '170107', nombre: 'SALAZAR ARIAS JUAN PABLO' },
    // Estudiantes de 640
    { group: '640', grade: '6°', matricula: '250245', nombre: 'GOMEZ BOTERO ANGELICA' },
    { group: '640', grade: '6°', matricula: '250162', nombre: 'ARBELAEZ TAMAYO VIOLETTA' },
    { group: '640', grade: '6°', matricula: '250183', nombre: 'BARRERA GONZALEZ JUAN SEBASTIAN' },
    { group: '640', grade: '6°', matricula: '180041', nombre: 'CANO GOMEZ XIMENA' },
    { group: '640', grade: '6°', matricula: '250148', nombre: 'CASTAÑEDA CHAVARRIA EMMANUEL' },
    { group: '640', grade: '6°', matricula: '250122', nombre: 'CASTRO MONSALVE JUAN JOSE' },
    { group: '640', grade: '6°', matricula: '250090', nombre: 'CHAVARRIAGA SOTO SARA' },
    { group: '640', grade: '6°', matricula: '240124', nombre: 'CHICA CANABAL EVER DAVID' },
    { group: '640', grade: '6°', matricula: '190017', nombre: 'FRANCO GIL MARIA ANTONIA' },
    { group: '640', grade: '6°', matricula: '250043', nombre: 'GOMEZ GARCES LAURA  ISABEL' },
    { group: '640', grade: '6°', matricula: '250107', nombre: 'GOMEZ LOPEZ EMANUEL' },
    { group: '640', grade: '6°', matricula: '250038', nombre: 'HENAO AGUDELO JERONIMO' },
    { group: '640', grade: '6°', matricula: '240061', nombre: 'LOAIZA  RUIZ GUADALUPE' },
    { group: '640', grade: '6°', matricula: '230042', nombre: 'LONDOÑO GONZALEZ MARIA GABRIELA' },
    { group: '640', grade: '6°', matricula: '240117', nombre: 'LOPEZ DIAZ TOMAS' },
    { group: '640', grade: '6°', matricula: '240068', nombre: 'MARTINEZ TORO VALERIA' },    
    { group: '640', grade: '6°', matricula: '152002', nombre: 'MONTOYA MEDINA XIMENA' },
    { group: '640', grade: '6°', matricula: '240179', nombre: 'OCAMPO  MARULANDA  SOFIA' },
    { group: '640', grade: '6°', matricula: '240200', nombre: 'OCAMPO VILLA JUAN  SEBASTIAN' },
    { group: '640', grade: '6°', matricula: '190013', nombre: 'OCHOA JIMENEZ EMILIANA' },
    { group: '640', grade: '6°', matricula: '230142', nombre: 'OSORIO GARCIA SOFIA' },
    { group: '640', grade: '6°', matricula: '180020', nombre: 'OSPINA RENGIFO NIKOLE TATIANA' },
    { group: '640', grade: '6°', matricula: '240214', nombre: 'PRIETO PALENCIA EVELYN SOFIA' },
    { group: '640', grade: '6°', matricula: '250133', nombre: 'PUCHETE PEREZ EMILEZKHA SOFIA' },
    { group: '640', grade: '6°', matricula: '250044', nombre: 'QUINTERO  GIRALDO SANTIAGO' },
    { group: '640', grade: '6°', matricula: '250034', nombre: 'RAMIREZ SALAZAR SANTIAGO' },
    { group: '640', grade: '6°', matricula: '190138', nombre: 'RIOS GALLEGO ESCARLETH SOFIA' },
    { group: '640', grade: '6°', matricula: '200021', nombre: 'RIVERA FLOREZ SAMUEL' },
    { group: '640', grade: '6°', matricula: '240153', nombre: 'SANCHEZ  GIRALDO  SARAY  GUADALUPE' },
    { group: '640', grade: '6°', matricula: '250139', nombre: 'URTUBEY SANEZ MARGARETH FERNANDA' },
    { group: '640', grade: '6°', matricula: '240119', nombre: 'VEGA TEHERAN MARIA PAULA' },
    { group: '640', grade: '6°', matricula: '250083', nombre: 'ZAPATA PEREZ MARIA VICTORIA' },
    // Estudiantes de 701
    { group: '701', grade: '7°', matricula: '180002', nombre: 'ALVAREZ VALDES CELESTE' },
    { group: '701', grade: '7°', matricula: '210076', nombre: 'ALZATE ALZATE JUAN SEBASTIAN' },
    { group: '701', grade: '7°', matricula: '240094', nombre: 'ARIAS ECHAVARRIA JUAN JOSE' },
    { group: '701', grade: '7°', matricula: '240257', nombre: 'BEDOYA VIÑAS ISAAC' },
    { group: '701', grade: '7°', matricula: '171055', nombre: 'BUSTAMANTE MORALES MARIA FERNANDA' },
    { group: '701', grade: '7°', matricula: '180005', nombre: 'CARDENAS OSORIO BRENDA' },
    { group: '701', grade: '7°', matricula: '180006', nombre: 'CASTRO CORREDOR DAVID ALEJANDRO' },
    { group: '701', grade: '7°', matricula: '220041', nombre: 'ECHEVERRI BETANCUR LUCIANA' },
    { group: '701', grade: '7°', matricula: '180007', nombre: 'ECHEVERRI MARIN MARIA VALENTINA' },
    { group: '701', grade: '7°', matricula: '180008', nombre: 'GALVIS MARTINEZ SAMIR ALONSO' },
    { group: '701', grade: '7°', matricula: '190010', nombre: 'GIL RIOS JOSE MIGUEL' },
    { group: '701', grade: '7°', matricula: '180010', nombre: 'GOMEZ OROZCO XIMENA' },
    { group: '701', grade: '7°', matricula: '230202', nombre: 'GUAITARILLA SANTIAGO DANIEL MATIAS' },
    { group: '701', grade: '7°', matricula: '180013', nombre: 'HENAO QUINTERO JUAN PABLO' },
    { group: '701', grade: '7°', matricula: '170007', nombre: 'JIMENEZ CHICA KAROLAYN' },
    { group: '701', grade: '7°', matricula: '180016', nombre: 'LOPEZ HOYOS CRISTIAN ANDRES' },
    { group: '701', grade: '7°', matricula: '240126', nombre: 'MARIN CHALARCA MATEO' },
    { group: '701', grade: '7°', matricula: '180019', nombre: 'MONTOYA ARANGO DILAN ANDREY' },    
    { group: '701', grade: '7°', matricula: '250045', nombre: 'OROZCO GIRALDO DAVID' },
    { group: '701', grade: '7°', matricula: '250167', nombre: 'PAMPLONA RODRIGUEZ MATIAS' },
    { group: '701', grade: '7°', matricula: '250088', nombre: 'PEREZ ARENAS EMILY' },
    { group: '701', grade: '7°', matricula: '200126', nombre: 'PRECIADO USME DAVID' },
    { group: '701', grade: '7°', matricula: '180021', nombre: 'QUINTERO CARDONA EMANUEL' },
    { group: '701', grade: '7°', matricula: '180022', nombre: 'QUINTERO CIRO EMMANUEL' },
    { group: '701', grade: '7°', matricula: '240243', nombre: 'RAMIREZ  ARBELAEZ  JACOBO' },
    { group: '701', grade: '7°', matricula: '220180', nombre: 'RAMIREZ BERRIO MABEL ALEXANDRA' },
    { group: '701', grade: '7°', matricula: '230068', nombre: 'RAMIREZ MONTOYA JUAN JOSE' },
    { group: '701', grade: '7°', matricula: '190004', nombre: 'RAMIREZ TAMAYO JACOB' },
    { group: '701', grade: '7°', matricula: '180023', nombre: 'RENDON GARCES JUAN JOSE' },
    { group: '701', grade: '7°', matricula: '250100', nombre: 'RODRIGUEZ CALDERON RAFAELA' },
    { group: '701', grade: '7°', matricula: '250057', nombre: 'ROLDAN  MARIN JUAN DAVID' },
    { group: '701', grade: '7°', matricula: '180024', nombre: 'SANCHEZ GUTIERREZ ISABELA' },
    { group: '701', grade: '7°', matricula: '250237', nombre: 'SEPULVEDA ROLDAN DULCE MARIA' },
    { group: '701', grade: '7°', matricula: '180025', nombre: 'SOTO BUITRAGO VALENTINA' },
    { group: '701', grade: '7°', matricula: '190021', nombre: 'TRUJILLO MARTIN SAMUEL' },
    // Estudiantes de 702
    { group: '702', grade: '7°', matricula: '240180', nombre: 'ALZATE  CASTELLANOS  MARIA  ANTONIA' },
    { group: '702', grade: '7°', matricula: '191050', nombre: 'BORRERO ROLDAN GABRIEL  ALEJANDRO' },
    { group: '702', grade: '7°', matricula: '230116', nombre: 'CEBALLOS RENDON ISABELLA' },
    { group: '702', grade: '7°', matricula: '250200', nombre: 'CHACON MORALES SARAY SOFIA' },
    { group: '702', grade: '7°', matricula: '240070', nombre: 'DAVILA HERNANDEZ DANNA MISHELL' },
    { group: '702', grade: '7°', matricula: '240232', nombre: 'DE LA HOZ MARIN LUCIANA' },
    { group: '702', grade: '7°', matricula: '181020', nombre: 'DIAZ GARCIA MARIA ANGEL' },
    { group: '702', grade: '7°', matricula: '250184', nombre: 'ECHAVARRIA ANGEL ISABELLA' },
    { group: '702', grade: '7°', matricula: '170012', nombre: 'ESCOBAR GARZON DAVID' },
    { group: '702', grade: '7°', matricula: '250030', nombre: 'ESTRADA GUZMAN ALLISON' },
    { group: '702', grade: '7°', matricula: '250091', nombre: 'GALUE MACUALO YULIANNYS DE LOS ANGELES' },
    { group: '702', grade: '7°', matricula: '190164', nombre: 'GIL ESTRADA MARIA ISABEL' },
    { group: '702', grade: '7°', matricula: '181005', nombre: 'GOMEZ ALZATE EMILIANO' },
    { group: '702', grade: '7°', matricula: '181006', nombre: 'GOMEZ CARDONA JUAN JOSE' },
    { group: '702', grade: '7°', matricula: '230073', nombre: 'GUERRERO SIERRA JUAN FELIPE' },
    { group: '702', grade: '7°', matricula: '200179', nombre: 'HINCAPIE HINCAPIE VALERIA' },
    { group: '702', grade: '7°', matricula: '250234', nombre: 'HURTADO BRACHO OMARLYS SOFIA' },
    { group: '702', grade: '7°', matricula: '181008', nombre: 'MARIN CASTELLANO FRANSHESKA VALENTINA' },
    { group: '702', grade: '7°', matricula: '151011', nombre: 'MARIN GUZMAN SALOME' },
    { group: '702', grade: '7°', matricula: '250246', nombre: 'MARTINEZ LOPEZ CRISTINA' },
    { group: '702', grade: '7°', matricula: '240122', nombre: 'MARTINEZ SANABRIA SEBASTIAN SAIR' },
    { group: '702', grade: '7°', matricula: '221029', nombre: 'MONTAÑO FRANCO SAMUEL' },
    { group: '702', grade: '7°', matricula: '240055', nombre: 'ROJAS MONSALVE SIMON' },
    { group: '702', grade: '7°', matricula: '240031', nombre: 'SANCHEZ  ECHEVERRI SARA' },
    { group: '702', grade: '7°', matricula: '240051', nombre: 'TORCATES MARTINEZ JOSE ALEJANDRO' },
    { group: '702', grade: '7°', matricula: '250113', nombre: 'VERGARA GOMEZ MARIANGEL' },
    // Estudiantes de 703
    { group: '703', grade: '7°', matricula: '240267', nombre: 'AVENDAÑO ECHEVERRI DANIEL ESTEBAN' },
    { group: '703', grade: '7°', matricula: '240268', nombre: 'AVENDAÑO ECHEVERRI MIGUEL ANGEL' },
    { group: '703', grade: '7°', matricula: '240065', nombre: 'AYALA  CUAN  ERICK  SAMUEL' },
    { group: '703', grade: '7°', matricula: '230123', nombre: 'BRITO LOZANO NESTOR DAVID' },
    { group: '703', grade: '7°', matricula: '160098', nombre: 'CASTRILLON SILVA EMILIANO' },
    { group: '703', grade: '7°', matricula: '191039', nombre: 'CERQUERA  LARROTA MIGUEL ANGEL' },
    { group: '703', grade: '7°', matricula: '210110', nombre: 'GAÑAN BEDOYA NICOLAS' },
    { group: '703', grade: '7°', matricula: '250048', nombre: 'GIL FLOREZ MARIA JOSE' },
    { group: '703', grade: '7°', matricula: '160015', nombre: 'GOMEZ GARZON VALENTINA' },
    { group: '703', grade: '7°', matricula: '220116', nombre: 'GOMEZ MACHADO MATIAS' },
    { group: '703', grade: '7°', matricula: '250060', nombre: 'GUTIERREZ ESTRADA SALOME' },
    { group: '703', grade: '7°', matricula: '240244', nombre: 'GUTIERREZ  VELASQUEZ  SAMUEL' },
    { group: '703', grade: '7°', matricula: '240190', nombre: 'HINCAPIE SEGURO EMANUEL' },
    { group: '703', grade: '7°', matricula: '220211', nombre: 'MANCO GOMEZ MELISSA' },
    { group: '703', grade: '7°', matricula: '200131', nombre: 'MESA GALLEGO ANDRES' },
    { group: '703', grade: '7°', matricula: '240198', nombre: 'MORALES MIRANDA CRISTIAN JOSE' },
    { group: '703', grade: '7°', matricula: '240225', nombre: 'ORBE  MIÑO  JOSHUA  MARTIN' },
    { group: '703', grade: '7°', matricula: '230048', nombre: 'OSORIO BEDOYA SALOME' },
    { group: '703', grade: '7°', matricula: '240057', nombre: 'OSPINA  OSPINA  EMMANUEL' },
    { group: '703', grade: '7°', matricula: '230140', nombre: 'PAMPLONA QUINTERO JUAN MANUEL' },
    { group: '703', grade: '7°', matricula: '171059', nombre: 'PAREDES LOAIZA DEIVER JHOAN' },
    { group: '703', grade: '7°', matricula: '240109', nombre: 'RIVERA AGUILAR FABIAN STEVEN' },
    { group: '703', grade: '7°', matricula: '200164', nombre: 'RODRIGUEZ FADUL MATIAS' },
    { group: '703', grade: '7°', matricula: '230206', nombre: 'ROMERO FLOREZ HARISSON' },
    { group: '703', grade: '7°', matricula: '250073', nombre: 'RUEDA GOMEZ SAMANTHA' },
    { group: '703', grade: '7°', matricula: '250065', nombre: 'SALDARRIAGA ATEHORTUA LUCIANA MARIA' },
    { group: '703', grade: '7°', matricula: '250108', nombre: 'SANCHEZ CEBALLOS CRISTOBAL' },
    { group: '703', grade: '7°', matricula: '181023', nombre: 'SERNA CANO MARIA SALOME' },
    { group: '703', grade: '7°', matricula: '240128', nombre: 'SERNA  QUINTERO  FABIAN  ESTIVEN' },
    { group: '703', grade: '7°', matricula: '240260', nombre: 'SOTO BECERRA SALOME' },
    { group: '703', grade: '7°', matricula: '240162', nombre: 'SUAREZ  CHICA MARIA  ANTONIA' },
    { group: '703', grade: '7°', matricula: '230060', nombre: 'TABARES OSPINA PAULINA' },
    { group: '703', grade: '7°', matricula: '200156', nombre: 'VALENCIA GIRALDO JUAN FERNANDO' },
    { group: '703', grade: '7°', matricula: '240181', nombre: 'ZAPATA  GRISALES SANTIAGO' },
    // Estudiantes de 704
    { group: '704', grade: '7°', matricula: '170030', nombre: 'ARENAS JARAMILLO DENNIS MANUELA' },
    { group: '704', grade: '7°', matricula: '160149', nombre: 'BEDOYA LONDOÑO SALOME' },
    { group: '704', grade: '7°', matricula: '250153', nombre: 'BENITEZ RODRIGUEZ SARA' },
    { group: '704', grade: '7°', matricula: '230070', nombre: 'DURAN RODRIGUEZ GISELLE ANDREA' },
    // Estudiantes de 801
    { group: '801', grade: '8°', matricula: '230147', nombre: 'ACEVEDO MARTINEZ  GREIXYMAR VALENTINA' },
    { group: '801', grade: '8°', matricula: '181021', nombre: 'ALZATE GALLEGO SANTIAGO' },
    { group: '801', grade: '8°', matricula: '240136', nombre: 'BEDOYA  DEL RIO  EMMANUEL' },
    { group: '801', grade: '8°', matricula: '250112', nombre: 'BOTTIA URREGO NICOL DAYANA' },
    { group: '801', grade: '8°', matricula: '250135', nombre: 'BRAVO MAZO SARA' },
    { group: '801', grade: '8°', matricula: '250187', nombre: 'CADAVID  TIRADO VALERIA' },
    { group: '801', grade: '8°', matricula: '210075', nombre: 'CAMACARO CASANOVA SABRINA ALEXANDRA' },
    { group: '801', grade: '8°', matricula: '220117', nombre: 'CAPACHERO CAPACHERO JACINTO DAVID' },
    { group: '801', grade: '8°', matricula: '250046', nombre: 'CARDONA CASTRO EMMANUEL' },
    { group: '801', grade: '8°', matricula: '170008', nombre: 'CASTAÑEDA LOPEZ DANNA' },
    { group: '801', grade: '8°', matricula: '230210', nombre: 'CASTAÑEDA POSADA SAMANTA' },
    { group: '801', grade: '8°', matricula: '150010', nombre: 'CASTRILLON MACHADO MARIA YEHIRA' },
    { group: '801', grade: '8°', matricula: '230084', nombre: 'CLAVIJO HERNANDEZ KAROL DAYANA' },
    { group: '801', grade: '8°', matricula: '230041', nombre: 'CORTES CIRO DAYNI JULIETH' },
    { group: '801', grade: '8°', matricula: '161003', nombre: 'GARCIA SANCHEZ MARIA SALOME' },
    { group: '801', grade: '8°', matricula: '170037', nombre: 'GIL GUARIN MARIANA' },
    { group: '801', grade: '8°', matricula: '171007', nombre: 'GIRALDO GARCIA GUADALUPE' },
    { group: '801', grade: '8°', matricula: '160025', nombre: 'GOMEZ  ANA SOFIA' },
    { group: '801', grade: '8°', matricula: '150121', nombre: 'GOMEZ BRAVO NIKOL ANDREA' },
    { group: '801', grade: '8°', matricula: '171005', nombre: 'GOMEZ GARCIA TOMAS' },
    { group: '801', grade: '8°', matricula: '170013', nombre: 'GOMEZ OSORIO EMILIANO' },
    { group: '801', grade: '8°', matricula: '240056', nombre: 'ISAZA ARBELAEZ TOMAS' },
    { group: '801', grade: '8°', matricula: '221073', nombre: 'LORA GARCIA LUCIANA' },
    { group: '801', grade: '8°', matricula: '220105', nombre: 'MARTINEZ MEZA MARIANA NIKOLL' },
    { group: '801', grade: '8°', matricula: '201031', nombre: 'NOREÑA GALLEGO EMANUEL' },
    { group: '801', grade: '8°', matricula: '170060', nombre: 'OROZCO MARULANDA LUCIANA' },
    { group: '801', grade: '8°', matricula: '250025', nombre: 'OSORIO ARBELAEZ VALERIA' },
    { group: '801', grade: '8°', matricula: '161030', nombre: 'QUIRAMA PIEDRAHITA DANNA VALERIA' },
    { group: '801', grade: '8°', matricula: '240046', nombre: 'RIOS ALVAREZ DULCE MARIA' },
    { group: '801', grade: '8°', matricula: '250232', nombre: 'RIVERA JARAMILLO KEVIN ANDRES' },
    { group: '801', grade: '8°', matricula: '172007', nombre: 'RIVILLAS ARBELAEZ WENDY VALENTINA' },
    { group: '801', grade: '8°', matricula: '171010', nombre: 'SAENZ RIVERA JUAN FELIPE' },
    { group: '801', grade: '8°', matricula: '211033', nombre: 'SANCHEZ ELEJALDE MARILYN' },
    { group: '801', grade: '8°', matricula: '240277', nombre: 'SANOJA PEREZ RICARDO ARMANDO III' },
    { group: '801', grade: '8°', matricula: '230172', nombre: 'SUAREZ SILVA DULCE MARIA' },
    // Estudiantes de 802
    { group: '802', grade: '8°', matricula: '250063', nombre: 'ACEVEDO HENAO EMMANUEL ALEXANDER' },
    { group: '802', grade: '8°', matricula: '200150', nombre: 'ARIAS ESPINAL EMANUEL' },
    { group: '802', grade: '8°', matricula: '220082', nombre: 'BRAN AMAYA ALLISON' },
    { group: '802', grade: '8°', matricula: '180038', nombre: 'BUITRAGO ALZATE FEDERICO' },
    { group: '802', grade: '8°', matricula: '250213', nombre: 'CABALLERO QUIÑONES EMILY BRIYIT' },
    { group: '802', grade: '8°', matricula: '230118', nombre: 'CARDONA ZULUAGA MATIAS' },
    { group: '802', grade: '8°', matricula: '250220', nombre: 'CORRALES CORTES MELISSA' },
    { group: '802', grade: '8°', matricula: '200153', nombre: 'CORTES PICO SAMUEL' },
    { group: '802', grade: '8°', matricula: '170050', nombre: 'DUQUE ARENAS MATIAS' },
    { group: '802', grade: '8°', matricula: '250150', nombre: 'DUQUE ORTEGA SAMANTHA' },
    { group: '802', grade: '8°', matricula: '250075', nombre: 'ESCALANTE MERCADO DARLEYDYS VALENTINA' },
    { group: '802', grade: '8°', matricula: '230199', nombre: 'ESCOBAR SALAZAR DANNA VALENTINA' },
    { group: '802', grade: '8°', matricula: '240242', nombre: 'FLOREZ ORTIZ ANASOL' },
    { group: '802', grade: '8°', matricula: '250032', nombre: 'GRANADOS CIRO VALENTINA' },
    { group: '802', grade: '8°', matricula: '220045', nombre: 'GUARIN ACEVEDO MARTIN' },
    { group: '802', grade: '8°', matricula: '220147', nombre: 'HERRERA VALERO SAMUEL' },
    { group: '802', grade: '8°', matricula: '170110', nombre: 'HOLGUIN HERNANDEZ SALOME' },
    { group: '802', grade: '8°', matricula: '160004', nombre: 'LONDOÑO GIL ANA SOFIA' },
    { group: '802', grade: '8°', matricula: '250191', nombre: 'LONDOÑO MORENO MICHEL ALEJANDRA' },
    { group: '802', grade: '8°', matricula: '250099', nombre: 'MAZO GALLEGO VALENTINA' },
    { group: '802', grade: '8°', matricula: '170006', nombre: 'MORALES CASTRILLON MARIA ALEJANDRA' },
    { group: '802', grade: '8°', matricula: '170010', nombre: 'MURILLO BURITICA XALOME' },
    { group: '802', grade: '8°', matricula: '230143', nombre: 'OSORIO GARCIA MATIAS' },
    { group: '802', grade: '8°', matricula: '230046', nombre: 'PEREZ MESA LUCIANA' },
    { group: '802', grade: '8°', matricula: '230082', nombre: 'RAMIREZ CASTAÑO SOFIA' },
    { group: '802', grade: '8°', matricula: '250144', nombre: 'RENDON BEDOYA MIGUEL ANGEL' },
    { group: '802', grade: '8°', matricula: '170028', nombre: 'RESTREPO GOMEZ ISABEL CRISTINA' },
    { group: '802', grade: '8°', matricula: '170063', nombre: 'ROLDAN VALLEJO MARIA FERNANDA' },
    { group: '802', grade: '8°', matricula: '240230', nombre: 'SANCHEZ CARDONA GUADALUPE' },
    { group: '802', grade: '8°', matricula: '230191', nombre: 'SANTOS HURTADO JENNY MARCELA' },
    { group: '802', grade: '8°', matricula: '230063', nombre: 'TANGARIFE OROZCO MATIAS' },
    { group: '802', grade: '8°', matricula: '250172', nombre: 'TORRES VILLEGAS ANDERSON DAMIAN' },
    { group: '802', grade: '8°', matricula: '160026', nombre: 'VILLADA OROZCO JUAN JOSE' },
    // Estudiantes de 804
    { group: '804', grade: '8°', matricula: '140143', nombre: 'QUINTERO MARTINEZ LICETH SOFIA' },
    // Estudiantes de 901
    { group: '901', grade: '9°', matricula: '191027', nombre: 'ALTAMAR MEDRANO MARIA JOSE' },
    { group: '901', grade: '9°', matricula: '220120', nombre: 'ARISTIZABAL SANCHEZ LUCIANA' },
    { group: '901', grade: '9°', matricula: '230122', nombre: 'ARRIETA PEREZ ORIANNA' },
    { group: '901', grade: '9°', matricula: '161002', nombre: 'BEDOYA PEREZ MARIANA' },
    { group: '901', grade: '9°', matricula: '220139', nombre: 'BETANCUR FLOREZ SANTIAGO' },
    { group: '901', grade: '9°', matricula: '140132', nombre: 'BUELVAS ROYS VALERIA' },
    { group: '901', grade: '9°', matricula: '240185', nombre: 'CAPASSO ROJAS NICOLE STEFANIE' },
    { group: '901', grade: '9°', matricula: '161008', nombre: 'CARDENAS CARDENAS JONATHAN' },
    { group: '901', grade: '9°', matricula: '152006', nombre: 'CARDONA MORALES ISABEL CRISTINA' },
    { group: '901', grade: '9°', matricula: '160001', nombre: 'CASTRO MARTINEZ MARIA JOSE' },
    { group: '901', grade: '9°', matricula: '160018', nombre: 'CIRO GARCIA VALENTINA' },
    { group: '901', grade: '9°', matricula: '230134', nombre: 'DIAZ CEBALLOS CRHYSTAL' },
    { group: '901', grade: '9°', matricula: '211049', nombre: 'DOMINGUEZ LOPEZ JUAN DIEGO' },
    { group: '901', grade: '9°', matricula: '250131', nombre: 'GIL GIL MARIA PAULA' },
    { group: '901', grade: '9°', matricula: '141008', nombre: 'GIL SUAREZ SAMARA' },
    { group: '901', grade: '9°', matricula: '220089', nombre: 'GIRALDO BUSTAMANTE MANUELA' },
    { group: '901', grade: '9°', matricula: '161015', nombre: 'GIRALDO GARCIA MATIAS' },
    { group: '901', grade: '9°', matricula: '190143', nombre: 'GOMEZ DUQUE SOFIA' },
    { group: '901', grade: '9°', matricula: '220194', nombre: 'GOMEZ LOPEZ JOSE DANIEL' },
    { group: '901', grade: '9°', matricula: '160003', nombre: 'HENAO QUINTERO EMILIANO' },
    { group: '901', grade: '9°', matricula: '230207', nombre: 'HERNANDEZ GUTIERREZ JACOB' },
    { group: '901', grade: '9°', matricula: '250155', nombre: 'HINCAPIE MIRANDA JOSE MANUEL' },
    { group: '901', grade: '9°', matricula: '160011', nombre: 'JIMENEZ GONZALEZ ESTEFANIA' },
    { group: '901', grade: '9°', matricula: '141005', nombre: 'LEON GARCIA VANESSA' },
    { group: '901', grade: '9°', matricula: '150084', nombre: 'MEJIA MONARES EMANUEL' },
    { group: '901', grade: '9°', matricula: '240155', nombre: 'MUÑOZ CASTILLO  JOHAN  ESTIVEN' },
    { group: '901', grade: '9°', matricula: '240158', nombre: 'NOVOA  HERRERA  ALIX MARIA' },
    { group: '901', grade: '9°', matricula: '230131', nombre: 'SUAREZ ROJAS PEDRO ENRIQUE' },
    { group: '901', grade: '9°', matricula: '250040', nombre: 'VILLALBA IBAÑEZ YOBEIDYS PAOLA' },
    // Estudiantes de 902
    { group: '902', grade: '9°', matricula: '210093', nombre: 'AGUDELO SOTO JERONIMO' },
    { group: '902', grade: '9°', matricula: '240091', nombre: 'APONTE  LEGUIZAMO LUIS SANTIAGO' },
    { group: '902', grade: '9°', matricula: '180039', nombre: 'BUITRAGO ALZATE MATEO' },
    { group: '902', grade: '9°', matricula: '250170', nombre: 'CARDENAS ACOSTA DYLAN SANTIAGO' },
    { group: '902', grade: '9°', matricula: '230056', nombre: 'CARDONA NARANJO ISABELA' },
    { group: '902', grade: '9°', matricula: '190073', nombre: 'CASTAÑO CASTAÑEDA MARIA PAULINA' },
    { group: '902', grade: '9°', matricula: '200138', nombre: 'CUERVO CORREA EVELYN YURANY' },
    { group: '902', grade: '9°', matricula: '240166', nombre: 'DIAZ  OSORIO  SANTIAGO  ANDRES' },
    { group: '902', grade: '9°', matricula: '250204', nombre: 'ESPINAL PIMENTEL ALAHI DIAMELA' },
    { group: '902', grade: '9°', matricula: '160017', nombre: 'HENAO  GIRALDO  JERONIMO' },
    { group: '902', grade: '9°', matricula: '191020', nombre: 'LUNA GUZMAN LAURA SOPHIA' },
    { group: '902', grade: '9°', matricula: '160019', nombre: 'MEDINA GRISALES JUAN MANUEL' },
    { group: '902', grade: '9°', matricula: '250210', nombre: 'ORTIZ RAMIREZ ISABELLA' },
    { group: '902', grade: '9°', matricula: '180048', nombre: 'OSORIO MELAN EMMANUEL' },
    { group: '902', grade: '9°', matricula: '250097', nombre: 'OTALORA CARDONA VIOLETA' },
    { group: '902', grade: '9°', matricula: '220190', nombre: 'PEREZ SANCHEZ GABRIELA' },
    { group: '902', grade: '9°', matricula: '250074', nombre: 'RUEDA GOMEZ VALENTINA' },
    { group: '902', grade: '9°', matricula: '230034', nombre: 'SALDAÑA GARCIA DIANNY DAIRELY' },
    { group: '902', grade: '9°', matricula: '150048', nombre: 'SALDARRIAGA VASQUEZ JULIANA ALEJANDRA' },
    { group: '902', grade: '9°', matricula: '220174', nombre: 'SERNA FRANCO SAMUEL' },
    { group: '902', grade: '9°', matricula: '250227', nombre: 'SOLANO RENDON GABRIELA' },
    { group: '902', grade: '9°', matricula: '170001', nombre: 'TAMAYO ECHEVERRI TAMARA' },
    { group: '902', grade: '9°', matricula: '200136', nombre: 'TAMAYO ROBAYO ELIZABETH' },
    { group: '902', grade: '9°', matricula: '240187', nombre: 'TORRES  VALOR  DALISMAR  DE JESUS' },
    { group: '902', grade: '9°', matricula: '240145', nombre: 'TRUJILLO  GOMEZ LUIS  ESTEBAN' },
    { group: '902', grade: '9°', matricula: '240148', nombre: 'VARGAS  FRANCO  MELISSA' },
    { group: '902', grade: '9°', matricula: '240152', nombre: 'VELEZ  GONZALEZ  ALEJANDRO' },
    { group: '902', grade: '9°', matricula: '230102', nombre: 'YEPES GARCIA LAURA NATALY' },
    { group: '902', grade: '9°', matricula: '160021', nombre: 'ZAPATA FRANCO JULIANA' },
    // Estudiantes de 1001
    { group: '1001', grade: '10°', matricula: '230057', nombre: 'ABADIA RINCON DANNA SOFIA' },
    { group: '1001', grade: '10°', matricula: '132009', nombre: 'ALVAREZ SINITAVE MARIANA' },
    { group: '1001', grade: '10°', matricula: '220133', nombre: 'BETANCUR FLOREZ SAMUEL' },
    { group: '1001', grade: '10°', matricula: '200143', nombre: 'BROCHERO AYALA SAMIR JERONIMO' },
    { group: '1001', grade: '10°', matricula: '200178', nombre: 'CASTAÑO TAMAYO MATIAS' },
    { group: '1001', grade: '10°', matricula: '150016', nombre: 'CASTILLO ARENAS JALVER SANTIAGO' },
    { group: '1001', grade: '10°', matricula: '150043', nombre: 'ELEJALDE CASTRILLON TOMAS' },
    { group: '1001', grade: '10°', matricula: '190190', nombre: 'ESTRADA MEJIA MELANY' },
    { group: '1001', grade: '10°', matricula: '200177', nombre: 'GALLEGO BUILES JULIETA' },
    { group: '1001', grade: '10°', matricula: '250092', nombre: 'GALUE MACUALO REINIER JESUS' },
    { group: '1001', grade: '10°', matricula: '180151', nombre: 'GALVIS CARDONA SEBASTIAN ANDRES' },
    { group: '1001', grade: '10°', matricula: '230114', nombre: 'GIRALDO GARCIA CAMILA' },
    { group: '1001', grade: '10°', matricula: '130004', nombre: 'MONSALVE VALLEJO JUAN ANDRES' },
    { group: '1001', grade: '10°', matricula: '220043', nombre: 'MONTOYA ROMAN JUAN MANUEL' },
    { group: '1001', grade: '10°', matricula: '152001', nombre: 'MURIEL GOMEZ LUISA FERNANDA' },
    { group: '1001', grade: '10°', matricula: '210145', nombre: 'PARRA RODRIGUEZ MICHEL' },
    { group: '1001', grade: '10°', matricula: '240171', nombre: 'PORTILLO  LOPEZ  JUAN JOSE' },
    { group: '1001', grade: '10°', matricula: '150020', nombre: 'RENDON VELASQUEZ ANA SOFIA' },
    { group: '1001', grade: '10°', matricula: '220114', nombre: 'RINCON RUA HECTOR SAMUEL' },
    { group: '1001', grade: '10°', matricula: '250103', nombre: 'RODRIGUEZ JIMENEZ JESHUA GABRIEL' },
    { group: '1001', grade: '10°', matricula: '230089', nombre: 'SALDAÑA GARCIA DARIANNY DANEILY' },
    { group: '1001', grade: '10°', matricula: '210124', nombre: 'SERNA CASTRO JERONIMO' },
    { group: '1001', grade: '10°', matricula: '150053', nombre: 'SILVA GALLO SALOME' },
    { group: '1001', grade: '10°', matricula: '200155', nombre: 'TAPIE ROSERO MARIA SOFIA' },
    { group: '1001', grade: '10°', matricula: '130019', nombre: 'TOBON CARDONA KEVIN' },
    { group: '1001', grade: '10°', matricula: '240114', nombre: 'TRINIDAD GUTIERREZ JANNA GABRIELA' },
    // Estudiantes de 1002
    { group: '1002', grade: '10°', matricula: '210139', nombre: 'ACEVEDO ESCALANTE SANTIAGO ANDRES' },
    { group: '1002', grade: '10°', matricula: '121008', nombre: 'AGUDELO ECHEVERRI XIMENA' },
    { group: '1002', grade: '10°', matricula: '200042', nombre: 'ARIAS ESPINAL JUAN JOSE' },
    { group: '1002', grade: '10°', matricula: '190070', nombre: 'ARREDONDO RENDON JOSE MANUEL' },
    { group: '1002', grade: '10°', matricula: '210096', nombre: 'CAMACARO CASANOVA DIEGO ALEJANDRO' },
    { group: '1002', grade: '10°', matricula: '150030', nombre: 'CARO CASTRILLON MARIANA' },
    { group: '1002', grade: '10°', matricula: '190074', nombre: 'CASTAÑO CASTAÑEDA JUAN SEBASTIAN' },
    { group: '1002', grade: '10°', matricula: '170104', nombre: 'CASTAÑO  CORREA MARIANA' },
    { group: '1002', grade: '10°', matricula: '150018', nombre: 'ELEJALDE ECHEVERRI MARIA PAULINA' },
    { group: '1002', grade: '10°', matricula: '140064', nombre: 'FRANCO GIL MARIA GUADALUPE' },
    { group: '1002', grade: '10°', matricula: '190045', nombre: 'GALLEGO OCAMPO ANDRES' },
    { group: '1002', grade: '10°', matricula: '250226', nombre: 'GARCIA CASTAÑEDA MARIA ANGEL' },
    { group: '1002', grade: '10°', matricula: '140040', nombre: 'GIRALDO CASTRILLON ISABELA' },
    { group: '1002', grade: '10°', matricula: '140017', nombre: 'GOMEZ CASTAÑEDA JULIETA' },
    { group: '1002', grade: '10°', matricula: '150059', nombre: 'GOMEZ LOPEZ JERONIMO' },
    { group: '1002', grade: '10°', matricula: '190129', nombre: 'LARA LARA STIVEN' },
    { group: '1002', grade: '10°', matricula: '250228', nombre: 'LARGO AGUIRRE DUVAN ALBEIRO' },
    { group: '1002', grade: '10°', matricula: '210138', nombre: 'LEON LOPEZ JUAN DAVID' },
    { group: '1002', grade: '10°', matricula: '141004', nombre: 'OSPINA OSPINA JUAN ALEJANDRO' },
    { group: '1002', grade: '10°', matricula: '161026', nombre: 'QUICENO SANCHEZ ESTEFANIA' },
    { group: '1002', grade: '10°', matricula: '240059', nombre: 'SILVA  TAMAYO  ANA  SOFIA' },
    { group: '1002', grade: '10°', matricula: '240178', nombre: 'VASQUEZ  MARULANDA  JOAN  SANTIAGO' },
    { group: '1002', grade: '10°', matricula: '220102', nombre: 'ESPINOSA BARON MARIA CAMILA' },
    // Estudiantes de 1004
    { group: '1004', grade: '10°', matricula: '190141', nombre: 'GUTIERREZ SERNA MARIA CAMILA' },
    { group: '1004', grade: '10°', matricula: '160112', nombre: 'HENAO GALLEGO SEBASTIAN' },
    { group: '1004', grade: '10°', matricula: '160109', nombre: 'PATIÑO PIEDRAHITA JUAN SEBASTIAN' },
    { group: '1004', grade: '10°', matricula: '140013', nombre: 'SERNA GALEANO HAROLD ANDRES' },
    // Estudiantes de 1101
    { group: '1101', grade: '11°', matricula: '210047', nombre: 'ACEVEDO LONDOÑO MIGUEL ANGEL' },
    { group: '1101', grade: '11°', matricula: '250221', nombre: 'ALVAREZ CORTES JULIANA' },
    { group: '1101', grade: '11°', matricula: '150086', nombre: 'ALZATE AGUIRRE ISABEL  SOFIA' },
    { group: '1101', grade: '11°', matricula: '250169', nombre: 'BAYONA MORENO ALISON NICOLLE' },
    { group: '1101', grade: '11°', matricula: '200043', nombre: 'CARDONA GOMEZ LUCIANA' },
    { group: '1101', grade: '11°', matricula: '140010', nombre: 'CARVAJAL ECHEVERRI SARA' },
    { group: '1101', grade: '11°', matricula: '190075', nombre: 'CASTAÑO CASTAÑEDA FREDY ALEJANDRO' },
    { group: '1101', grade: '11°', matricula: '220055', nombre: 'ECHEVERRI ECHEVERRI JUAN JOSE' },
    { group: '1101', grade: '11°', matricula: '220223', nombre: 'ESCOBAR VILLA JUAN ANDRES' },
    { group: '1101', grade: '11°', matricula: '120047', nombre: 'ESPINOSA ELEJALDE JUAN FERNANDO' },
    { group: '1101', grade: '11°', matricula: '250069', nombre: 'GARCIA ARIAS BRAHIAM ALEXIS' },
    { group: '1101', grade: '11°', matricula: '210034', nombre: 'GAVIRIA BARROS ANGIE DANIELA' },
    { group: '1101', grade: '11°', matricula: '240092', nombre: 'GOMEZ AGUDELO MADELYN' },
    { group: '1101', grade: '11°', matricula: '141011', nombre: 'GOMEZ ALZATE MARTIN' },
    { group: '1101', grade: '11°', matricula: '210035', nombre: 'GOMEZ CARVAJAL EMMANUEL' },
    { group: '1101', grade: '11°', matricula: '990098', nombre: 'JURADO HENAO VALENTINA' },
    { group: '1101', grade: '11°', matricula: '250118', nombre: 'LEMOS CRUZ ZABDI LORENA' },
    { group: '1101', grade: '11°', matricula: '230158', nombre: 'MARIN ZAPATA DIEGO ALEJANDRO' },
    { group: '1101', grade: '11°', matricula: '200046', nombre: 'MUÑOZ MARIN ISABELA' },
    { group: '1101', grade: '11°', matricula: '200047', nombre: 'MUÑOZ MARIN MARIA FERNANDA' },
    { group: '1101', grade: '11°', matricula: '240168', nombre: 'POLO  FUENTES  SHIRLEY' },
    { group: '1101', grade: '11°', matricula: '210065', nombre: 'RUIZ ECHEVERRI SOFIA' },
    { group: '1101', grade: '11°', matricula: '220205', nombre: 'SANCHEZ MIRA JERONIMO' },
    { group: '1101', grade: '11°', matricula: '220078', nombre: 'SANCHEZ MOLINA MARIANA' },
    { group: '1101', grade: '11°', matricula: '131003', nombre: 'SEPULVEDA OCAMPO NATALY' },
    { group: '1101', grade: '11°', matricula: '140068', nombre: 'SERNA ECHEVERRI SAMAY' },
    { group: '1101', grade: '11°', matricula: '200062', nombre: 'TORO SILVA VALENTINA' },
    { group: '1101', grade: '11°', matricula: '240052', nombre: 'URREA GARCIA MARIA ISABEL' },
    { group: '1101', grade: '11°', matricula: '250177', nombre: 'PEREZ GONZALEZ VALERI' },
    { group: '1101', grade: '11°', matricula: '250031', nombre: 'RINCON MORENO EYLEEN VALENTINA' },
    { group: '1101', grade: '11°', matricula: '141001', nombre: 'RIVAS RAMIREZ ISABELA' },
    { group: '1101', grade: '11°', matricula: '250197', nombre: 'SANDOVAL MUÑOZ MARIA PAULINA' },
    { group: '1101', grade: '11°', matricula: '240222', nombre: 'SILVA  MARIN  SARA  JULIETH' },
    { group: '1101', grade: '11°', matricula: '240160', nombre: 'SUAREZ  DEL RIO  ANA  SOFIA' },
    { group: '1101', grade: '11°', matricula: '240067', nombre: 'VILLA  TABARES  SARA  VALENTINA' },
    { group: '1101', grade: '11°', matricula: '240170', nombre: 'ZAPATA  GRISALES SANTIAGO' },
    // Estudiantes de 1102
    { group: '1102', grade: '11°', matricula: '130021', nombre: 'AGUDELO ELEJALDE MARIA CAMILA' },
    { group: '1102', grade: '11°', matricula: '190060', nombre: 'ARBOLEDA CARDONA DAVID' },
    { group: '1102', grade: '11°', matricula: '240269', nombre: 'BOYACA  ORTIZ  LUIS  SANTIAGO' },
    { group: '1102', grade: '11°', matricula: '180170', nombre: 'CABARCAS PINEDA TOMAS EDUARDO' },
    { group: '1102', grade: '11°', matricula: '220060', nombre: 'DIAZ PACHECO DANIEL DAVID' },
    { group: '1102', grade: '11°', matricula: '140076', nombre: 'FRANCO DAZA CELESTE' },
    { group: '1102', grade: '11°', matricula: '121006', nombre: 'GARCIA FLOREZ JUAN DAVID' },
    { group: '1102', grade: '11°', matricula: '210158', nombre: 'GARCIA  GOMEZ SANTIAGO' },
    { group: '1102', grade: '11°', matricula: '180037', nombre: 'GARCIA HINCAPIE SANTIAGO' },
    { group: '1102', grade: '11°', matricula: '240044', nombre: 'GARCIA MIRA JERONIMO' },
    { group: '1102', grade: '11°', matricula: '130020', nombre: 'GARCIA URIBE ANDRES MATIAS' },
    { group: '1102', grade: '11°', matricula: '210148', nombre: 'GOMEZ GARCIA MATEO' },
    { group: '1102', grade: '11°', matricula: '180073', nombre: 'GOMEZ LOPEZ JULIANA' },
    { group: '1102', grade: '11°', matricula: '170092', nombre: 'GUTIERREZ MARIN JUAN JOSE' },
    { group: '1102', grade: '11°', matricula: '200044', nombre: 'GUTIERREZ OCAMPO MARIA CAMILA' },
    { group: '1102', grade: '11°', matricula: '140091', nombre: 'HIDALGO MURILLO JUAN DAVID' },
    { group: '1102', grade: '11°', matricula: '130016', nombre: 'HURTADO ELEJALDE MIGUEL ANGEL' },
    { group: '1102', grade: '11°', matricula: '250042', nombre: 'MELENDEZ GARCES DIVANIS' },
    { group: '1102', grade: '11°', matricula: '220173', nombre: 'MONTOYA BETANCUR JACOBO' },
    { group: '1102', grade: '11°', matricula: '200091', nombre: 'ORDOÑEZ GOMEZ MARIA JOSE' },
    { group: '1102', grade: '11°', matricula: '220080', nombre: 'OSPINA LARA MARIA JOSE' },
    { group: '1102', grade: '11°', matricula: '240154', nombre: 'OSPINA  TORRES  SERGIO ANDRES' },
    { group: '1102', grade: '11°', matricula: '171022', nombre: 'OSSA CASTAÑO JACQUELINE' },
    { group: '1102', grade: '11°', matricula: '240064', nombre: 'OTALVARO  LONDOÑO  JUANITA' },
    { group: '1102', grade: '11°', matricula: '200068', nombre: 'OTALVARO VELEZ KEVIN ANDRES' },
    { group: '1102', grade: '11°', matricula: '220079', nombre: 'PATIÑO MARIN KEVIN ANDRES' },
    { group: '1102', grade: '11°', matricula: '250177', nombre: 'PEREZ GONZALEZ VALERI' },
    { group: '1102', grade: '11°', matricula: '140046', nombre: 'RENDON HINCAPIE ANA MARIA' },
    { group: '1102', grade: '11°', matricula: '250031', nombre: 'RINCON MORENO EYLEEN VALENTINA' },
    { group: '1102', grade: '11°', matricula: '141001', nombre: 'RIVAS RAMIREZ ISABELA' },
    { group: '1102', grade: '11°', matricula: '250087', nombre: 'VALENCIA ALVAREZ LUNA' },
    { group: '1102', grade: '11°', matricula: '240222', nombre: 'SILVA  MARIN  SARA  JULIETH' },
    { group: '1102', grade: '11°', matricula: '240160', nombre: 'SUAREZ  DEL RIO  ANA  SOFIA' },
    { group: '1102', grade: '11°', matricula: '240067', nombre: 'VILLA  TABARES  SARA  VALENTINA' },
    // Estudiantes de 1104
    { group: '1104', grade: '11°', matricula: '230193', nombre: 'LOAIZA HENAO JOSE ALBERTO' },
  ],
  "total": 457
};

console.log('✅ Datos del JSON integrados:', ESTUDIANTES_BACHILLERATO_DATA.students.length, 'estudiantes');

// Barroblanco Institución - Datos Estructurales
// Sistema de gestión de sedes, grupos y estudiantes

const BARROBLANCO_DATA = {
    // Información de la institución
    institution: {
        name: 'Barroblanco Institución Educativa',
        location: 'Rionegro, Antioquia, Colombia',
        website: 'https://www.barroblanco.edu.co/',
        sedes: 3,
        totalStudents: 1070
    },

    // Sedes de la institución
    sedes: {
        'principal': {
            id: 'principal',
            name: 'Sede Principal',
            grades: '6° - 11°',
            schedule: '7:00 AM - 1:00 PM',
            groups: [
                // Grados 6°
                { id: '601', grade: '6°',name: '601', type: 'regular', students: 32 },  // ✅ DATOS REALES
                { id: '602', grade: '6°',name: '602', type: 'regular', students: 23 },
                { id: '603', grade: '6°',name: '603', type: 'regular', students: 27 },
                { id: '604', grade: '6°',name: '604', type: 'sordos', students: 1 },
                { id: '640', grade: '6°',name: '640', type: 'regular', students: 32 },
                
                // Grados 7°
                { id: '701', grade: '7°', name: '701', type: 'regular', students: 35 },
                { id: '702', grade: '7°', name: '702', type: 'regular', students: 26 },
                { id: '703', grade: '7°', name: '703', type: 'regular', students: 34 },
                { id: '704', grade: '7°', name: '704', type: 'sordos', students: 4 },
                
                // Grados 8°
                { id: '801', grade: '8°', name: '801', type: 'regular', students: 35 },
                { id: '802', grade: '8°', name: '802', type: 'regular', students: 33 },
                { id: '804', grade: '8°', name: '804', type: 'sordos', students: 1 },
                
                // Grados 9°
                { id: '901', grade: '9°', name: '901', type: 'regular', students: 29 },
                { id: '902', grade: '9°', name: '902', type: 'regular', students: 29 },
                
                // Grados 10°
                { id: '1001', grade: '10°', name: '1001', type: 'regular', students: 26 },
                { id: '1002', grade: '10°', name: '1002', type: 'regular', students: 23 },
                { id: '1004', grade: '10°', name: '1004', type: 'sordos', students: 4 },
                
                // Grados 11°
                { id: '1101', grade: '11°', name: '1101', type: 'regular', students: 28 },
                { id: '1102', grade: '11°', name: '1102', type: 'regular', students: 34 },
                { id: '1104', grade: '11°', name: '1104', type: 'sordos', students: 1 }
            ],
            totalStudents: 457
        },
        
        'primaria': {
            id: 'primaria',
            name: 'Sede Primaria',
            grades: '1° - 5°',
            schedule: '7:00 AM - 2:00 PM',
            groups: [
                // Grados 1°
                { id: '101', grade: '1°', name: '101', type: 'regular', students: 28 },
                { id: '102', grade: '1°', name: '102', type: 'regular', students: 26 },
                { id: '103', grade: '1°', name: '103', type: 'regular', students: 29 },
                { id: '104', grade: '1°', name: '104', type: 'regular', students: 25 },
                { id: '105', grade: '1°', name: '105', type: 'regular', students: 27 },
                { id: '106', grade: '1°', name: '106', type: 'regular', students: 24 },
                
                // Grados 2°
                { id: '201', grade: '2°', name: '201', type: 'regular', students: 30 },
                { id: '202', grade: '2°', name: '202', type: 'regular', students: 28 },
                { id: '203', grade: '2°', name: '203', type: 'regular', students: 31 },
                { id: '204', grade: '2°', name: '204', type: 'regular', students: 27 },
                { id: '205', grade: '2°', name: '205', type: 'regular', students: 29 },
                { id: '206', grade: '2°', name: '206', type: 'regular', students: 26 },
                
                // Grados 3°
                { id: '301', grade: '3°', name: '301', type: 'regular', students: 32 },
                { id: '302', grade: '3°', name: '302', type: 'regular', students: 29 },
                { id: '303', grade: '3°', name: '303', type: 'regular', students: 33 },
                { id: '304', grade: '3°', name: '304', type: 'regular', students: 28 },
                { id: '305', grade: '3°', name: '305', type: 'regular', students: 31 },
                { id: '306', grade: '3°', name: '306', type: 'regular', students: 27 },
                
                // Grados 4°
                { id: '401', grade: '4°', name: '401', type: 'regular', students: 34 },
                { id: '402', grade: '4°', name: '402', type: 'regular', students: 31 },
                { id: '403', grade: '4°', name: '403', type: 'regular', students: 35 },
                { id: '404', grade: '4°', name: '404', type: 'regular', students: 30 },
                { id: '405', grade: '4°', name: '405', type: 'regular', students: 33 },
                { id: '406', grade: '4°', name: '406', type: 'regular', students: 29 },
                
                // Grados 5°
                { id: '501', grade: '5°', name: '501', type: 'regular', students: 36 },
                { id: '502', grade: '5°', name: '502', type: 'regular', students: 33 },
                { id: '503', grade: '5°', name: '503', type: 'regular', students: 37 },
                { id: '504', grade: '5°', name: '504', type: 'regular', students: 32 },
                { id: '505', grade: '5°', name: '505', type: 'regular', students: 35 },
                { id: '506', grade: '5°', name: '506', type: 'regular', students: 31 }
            ],
            totalStudents: 324
        },
        
        'maria-inmaculada': {
            id: 'maria-inmaculada',
            name: 'Sede María Inmaculada',
            grades: '1° - 5°',
            schedule: '7:00 AM - 2:00 PM',
            groups: [
                // Grados 1°
                { id: '101-MI', grade: '1°', name: '101-MI', type: 'regular', students: 25 },
                { id: '102-MI', grade: '1°', name: '102-MI', type: 'regular', students: 23 },
                { id: '103-MI', grade: '1°', name: '103-MI', type: 'regular', students: 26 },
                { id: '104-MI', grade: '1°', name: '104-MI', type: 'regular', students: 22 },
                { id: '105-MI', grade: '1°', name: '105-MI', type: 'regular', students: 24 },
                { id: '106-MI', grade: '1°', name: '106-MI', type: 'regular', students: 21 },
                
                // Grados 2°
                { id: '201-MI', grade: '2°', name: '201-MI', type: 'regular', students: 27 },
                { id: '202-MI', grade: '2°', name: '202-MI', type: 'regular', students: 25 },
                { id: '203-MI', grade: '2°', name: '203-MI', type: 'regular', students: 28 },
                { id: '204-MI', grade: '2°', name: '204-MI', type: 'regular', students: 24 },
                { id: '205-MI', grade: '2°', name: '205-MI', type: 'regular', students: 26 },
                { id: '206-MI', grade: '2°', name: '206-MI', type: 'regular', students: 23 },
                
                // Grados 3°
                { id: '301-MI', grade: '3°', name: '301-MI', type: 'regular', students: 29 },
                { id: '302-MI', grade: '3°', name: '302-MI', type: 'regular', students: 26 },
                { id: '303-MI', grade: '3°', name: '303-MI', type: 'regular', students: 30 },
                { id: '304-MI', grade: '3°', name: '304-MI', type: 'regular', students: 25 },
                { id: '305-MI', grade: '3°', name: '305-MI', type: 'regular', students: 28 },
                { id: '306-MI', grade: '3°', name: '306-MI', type: 'regular', students: 24 },
                
                // Grados 4°
                { id: '401-MI', grade: '4°', name: '401-MI', type: 'regular', students: 31 },
                { id: '402-MI', grade: '4°', name: '402-MI', type: 'regular', students: 28 },
                { id: '403-MI', grade: '4°', name: '403-MI', type: 'regular', students: 32 },
                { id: '404-MI', grade: '4°', name: '404-MI', type: 'regular', students: 27 },
                { id: '405-MI', grade: '4°', name: '405-MI', type: 'regular', students: 30 },
                { id: '406-MI', grade: '4°', name: '406-MI', type: 'regular', students: 26 },
                
                // Grados 5°
                { id: '501-MI', grade: '5°', name: '501-MI', type: 'regular', students: 33 },
                { id: '502-MI', grade: '5°', name: '502-MI', type: 'regular', students: 30 },
                { id: '503-MI', grade: '5°', name: '503-MI', type: 'regular', students: 34 },
                { id: '504-MI', grade: '5°', name: '504-MI', type: 'regular', students: 29 },
                { id: '505-MI', grade: '5°', name: '505-MI', type: 'regular', students: 32 },
                { id: '506-MI', grade: '5°', name: '506-MI', type: 'regular', students: 28 }
            ],
            totalStudents: 289
        }
    },


    // Métodos útiles para trabajar con los datos
    methods: {
        // Obtener todas las sedes
        getAllSedes: function() {
            return Object.keys(BARROBLANCO_DATA.sedes).map(key => ({
                id: key,
                ...BARROBLANCO_DATA.sedes[key]
            }));
        },

        // Obtener sede por ID
        getSedeById: function(sedeId) {
            return BARROBLANCO_DATA.sedes[sedeId] || null;
        },

        // Obtener grupos por sede
        getGroupsBySede: function(sedeId) {
            const sede = BARROBLANCO_DATA.methods.getSedeById(sedeId);
            return sede ? sede.groups : [];
        },

        // Obtener grupo específico
        getGroupById: function(groupId) {
            for (const sedeKey in BARROBLANCO_DATA.sedes) {
                const group = BARROBLANCO_DATA.sedes[sedeKey].groups.find(g => g.id === groupId);
                if (group) return group;
            }
            return null;
        },

// Obtener estudiantes por sede (con datos del JSON o fallback)
        getStudentsBySede: function(sedeId) {
            const sede = BARROBLANCO_DATA.methods.getSedeById(sedeId);
            if (!sede) return [];
            
            // Los datos del JSON siempre estarán disponibles
            if (BARROBLANCO_DATA.students && BARROBLANCO_DATA.students.length > 0) {
                const students = BARROBLANCO_DATA.students.filter(s => s.sede === sedeId);
                
                if (students.length > 0) {
                    console.log(`✅ Usando ${students.length} estudiantes del JSON para sede: ${sedeId}`);
                    return students;
                }
            }
    
        // Si no hay datos del JSON para esta sede, generar estudiantes simulados
        console.log(`⚠️ Generando estudiantes simulados para la sede: ${sedeId}`);
        let students = [];
        sede.groups.forEach(group => {
        // Para cada grupo, generar estudiantes
            for (let i = 1; i <= group.students; i++) {
                students.push({
                    id: `${sedeId}-${group.id}-${i.toString().padStart(3, '0')}`,
                    name: BARROBLANCO_DATA.methods.generateStudentName(group.grade, group.id, i),
                    groupId: group.id,
                    grade: group.grade,
                    sede: sedeId,
                    type: group.type,
                    status: 'active'
                });
            }
        });
        return students;
        },

        getStudentsByGroup: function(groupId) {
    // Primero buscar en datos del JSON
    if (this.studentsFromJSON) {
        const studentsFromJSON = this.studentsFromJSON.filter(s => s.groupId === groupId);
        if (studentsFromJSON.length > 0) {
            return studentsFromJSON;
        }
    }
    
    // Fallback a datos hardcodeados
    if (groupId === '601' && this.realStudents_601) {
        return this.realStudents_601;
    }
    
    return [];
},

        // Generar nombre de estudiante (para demo)
        generateStudentName: function(grade, group, index) {
            const names = ['Valentina', 'Carlos', 'Ana', 'Juan', 'María', 'Pedro', 'Lucía', 'Diego', 'Sofía', 'Andrés'];
            const lastNames = ['Jurado', 'Rodríguez', 'Martínez', 'López', 'García', 'Fernández', 'Ramírez', 'Herrera', 'Vargas', 'Castro'];
            
            const name = names[Math.floor(Math.random() * names.length)];
            const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
            
            return `${name} ${lastName} ${grade}-${group}`;
        },

        // Obtener horario por sede
        getScheduleBySede: function(sedeId) {
            const sede = this.getSedeById(sedeId);
            return sede ? sede.schedule : null;
        },

        // Verificar si un grupo es de sordos
        isSordosGroup: function(groupId) {
            const group = this.getGroupById(groupId);
            return group && group.type === 'sordos';
        },

        // Obtener total de estudiantes por sede
        getTotalStudentsBySede: function(sedeId) {
            const sede = this.getSedeById(sedeId);
            return sede ? sede.totalStudents : 0;
        },

        // Obtener total de estudiantes de la institución
        getTotalInstitutionStudents: function() {
            return Object.values(this.sedes).reduce((total, sede) => total + sede.totalStudents, 0);
        }
    },
    /* Estos dos serán llenados dinámicamente por el JSON */
    groups: [],
    students: []

};

// Sistema de almacenamiento para registros QR
const QR_STORAGE_SYSTEM = {
    // Clave base para almacenamiento
    STORAGE_KEY: 'barroblanco_qr_registrations',
    
    // Guardar registro QR
    saveQRRegistration: function(registrationData) {
        try {
            const today = new Date().toISOString().split('T')[0];
            const storageKey = `${this.STORAGE_KEY}_${today}`;
            
            // Obtener registros existentes
            let registrations = this.getTodayRegistrations();
            
            // Agregar nuevo registro
            registrations.push({
                ...registrationData,
                id: this.generateRegistrationId(),
                timestamp: new Date().toISOString(),
                date: today
            });
            
            // Guardar en localStorage
            localStorage.setItem(storageKey, JSON.stringify(registrations));
            
            // También guardar en el registro general
            this.addToGeneralLog(registrationData);
            
            return true;
        } catch (error) {
            console.error('Error saving QR registration:', error);
            return false;
        }
    },
    
    // Obtener registros del día
    getTodayRegistrations: function() {
        try {
            const today = new Date().toISOString().split('T')[0];
            const storageKey = `${this.STORAGE_KEY}_${today}`;
            const data = localStorage.getItem(storageKey);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error getting today registrations:', error);
            return [];
        }
    },
    
    // Obtener registros por rango de fechas
    getRegistrationsByDateRange: function(startDate, endDate) {
        try {
            let allRegistrations = [];
            const currentDate = new Date(startDate);
            const end = new Date(endDate);
            
            while (currentDate <= end) {
                const dateStr = currentDate.toISOString().split('T')[0];
                const storageKey = `${this.STORAGE_KEY}_${dateStr}`;
                const data = localStorage.getItem(storageKey);
                
                if (data) {
                    const dayRegistrations = JSON.parse(data);
                    allRegistrations = allRegistrations.concat(dayRegistrations);
                }
                
                currentDate.setDate(currentDate.getDate() + 1);
            }
            
            return allRegistrations;
        } catch (error) {
            console.error('Error getting registrations by date range:', error);
            return [];
        }
    },
    
    // Obtener registros por estudiante
    getRegistrationsByStudent: function(studentId) {
        try {
            const allRegistrations = this.getAllRegistrations();
            return allRegistrations.filter(reg => reg.studentId === studentId);
        } catch (error) {
            console.error('Error getting registrations by student:', error);
            return [];
        }
    },
    
    // Obtener todos los registros (últimos 30 días)
    getAllRegistrations: function() {
        try {
            let allRegistrations = [];
            const today = new Date();
            const thirtyDaysAgo = new Date(today.getTime() - (30 * 24 * 60 * 60 * 1000));
            
            const currentDate = new Date(thirtyDaysAgo);
            
            while (currentDate <= today) {
                const dateStr = currentDate.toISOString().split('T')[0];
                const storageKey = `${this.STORAGE_KEY}_${dateStr}`;
                const data = localStorage.getItem(storageKey);
                
                if (data) {
                    const dayRegistrations = JSON.parse(data);
                    allRegistrations = allRegistrations.concat(dayRegistrations);
                }
                
                currentDate.setDate(currentDate.getDate() + 1);
            }
            
            return allRegistrations.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        } catch (error) {
            console.error('Error getting all registrations:', error);
            return [];
        }
    },
    
    // Generar ID único para registro
    generateRegistrationId: function() {
        return 'QR_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    },
    
    // Agregar al registro general
    addToGeneralLog: function(registrationData) {
        try {
            const logKey = `${this.STORAGE_KEY}_general_log`;
            let generalLog = JSON.parse(localStorage.getItem(logKey) || '[]');
            
            generalLog.push({
                ...registrationData,
                timestamp: new Date().toISOString(),
                action: 'qr_registration'
            });
            
            // Mantener solo los últimos 1000 registros
            if (generalLog.length > 1000) {
                generalLog = generalLog.slice(-1000);
            }
            
            localStorage.setItem(logKey, JSON.stringify(generalLog));
        } catch (error) {
            console.error('Error adding to general log:', error);
        }
    },
    
    // Exportar datos para backup
    exportData: function() {
        try {
            const allData = {
                institution: BARROBLANCO_DATA.institution,
                sedes: BARROBLANCO_DATA.sedes,
                qrRegistrations: this.getAllRegistrations(),
                exportDate: new Date().toISOString(),
                version: '1.0'
            };
            
            return JSON.stringify(allData, null, 2);
        } catch (error) {
            console.error('Error exporting data:', error);
            return null;
        }
    },
    
    // Importar datos desde backup
    importData: function(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            
            // Importar registros QR
            if (data.qrRegistrations && Array.isArray(data.qrRegistrations)) {
                data.qrRegistrations.forEach(registration => {
                    if (registration.date) {
                        const storageKey = `${this.STORAGE_KEY}_${registration.date}`;
                        let dayRegistrations = JSON.parse(localStorage.getItem(storageKey) || '[]');
                        
                        // Verificar que no existe ya
                        const exists = dayRegistrations.some(r => r.id === registration.id);
                        if (!exists) {
                            dayRegistrations.push(registration);
                            localStorage.setItem(storageKey, JSON.stringify(dayRegistrations));
                        }
                    }
                });
            }
            
            return true;
        } catch (error) {
            console.error('Error importing data:', error);
            return false;
        }
    },
    
    // Limpiar datos antiguos (más de 90 días)
    cleanupOldData: function() {
        try {
            const today = new Date();
            const ninetyDaysAgo = new Date(today.getTime() - (90 * 24 * 60 * 60 * 1000));
            
            const currentDate = new Date(ninetyDaysAgo);
            
            while (currentDate <= today) {
                const dateStr = currentDate.toISOString().split('T')[0];
                const storageKey = `${this.STORAGE_KEY}_${dateStr}`;
                
                // Eliminar datos de más de 90 días
                if (currentDate < ninetyDaysAgo) {
                    localStorage.removeItem(storageKey);
                }
                
                currentDate.setDate(currentDate.getDate() + 1);
            }
            
            return true;
        } catch (error) {
            console.error('Error cleaning up old data:', error);
            return false;
        }
    }
};

// Sistema de generación de QR para estudiantes
const QR_GENERATOR_SYSTEM = {
    // Generar código QR para estudiante
    generateStudentQR: function(studentData) {
        const qrData = {
            institution: 'BARROBLANCO',
            studentId: studentData.id,
            studentName: studentData.name,
            documentNumber: studentData.documentNumber || '',
            group: studentData.groupId,
            grade: studentData.grade,
            sede: studentData.sede,
            timestamp: Date.now(),
            validUntil: Date.now() + (5 * 60 * 1000), // 5 minutos de validez
            qrVersion: '1.0'
        };
        
        return qrData;
    },
    
    // Validar código QR escaneado
    validateQRCode: function(qrData) {
        try {
            // Verificar que es de Barroblanco
            if (qrData.institution !== 'BARROBLANCO') {
                return { valid: false, error: 'Código QR no pertenece a Barroblanco' };
            }
            
            // Verificar que no está vencido
            if (Date.now() > qrData.validUntil) {
                return { valid: false, error: 'Código QR expirado' };
            }
            
            // Verificar que el estudiante existe
            const student = this.findStudentById(qrData.studentId);
            if (!student) {
                return { valid: false, error: 'Estudiante no encontrado' };
            }
            
            // Verificar que el estudiante está activo
            if (student.status !== 'active') {
                return { valid: false, error: 'Estudiante no está activo en PAE' };
            }
            
            return { 
                valid: true, 
                student: student,
                qrData: qrData 
            };
            
        } catch (error) {
            return { valid: false, error: 'Error al validar código QR' };
        }
    },
    
    // Buscar estudiante por ID
    findStudentById: function(studentId) {
        // En una implementación real, esto buscaría en una base de datos
        // Por ahora, usaremos datos simulados
        const students = this.getSimulatedStudents();
        return students.find(s => s.id === studentId) || null;
    },
    
    // Obtener estudiantes simulados para demo
    getSimulatedStudents: function() {
        return [
            {
                id: 'EST001',
                name: 'Valentina Jurado Henao',
                documentNumber: '1036250081',
                groupId: '1101',
                grade: '11°',
                sede: 'principal',
                status: 'active',
                restrictions: 'Alergia a frutos secos'
            },
            {
                id: 'EST002',
                name: 'Carlos Andrés Rodríguez López',
                documentNumber: '1036250082',
                groupId: '1101',
                grade: '11°',
                sede: 'principal',
                status: 'active',
                restrictions: 'Ninguna'
            },
            {
                id: 'EST003',
                name: 'Ana Sofía Martínez García',
                documentNumber: '1036250083',
                groupId: '1101',
                grade: '11°',
                sede: 'principal',
                status: 'active',
                restrictions: 'Vegetariana'
            }
        ];
    }
};

// Exportar sistemas para uso global
if (typeof window !== 'undefined') {
    window.BARROBLANCO_DATA = BARROBLANCO_DATA;
    window.QR_STORAGE_SYSTEM = QR_STORAGE_SYSTEM;
    window.QR_GENERATOR_SYSTEM = QR_GENERATOR_SYSTEM;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        BARROBLANCO_DATA,
        QR_STORAGE_SYSTEM,
        QR_GENERATOR_SYSTEM
    };
}
// ========================================
// FUNCIÓN MODIFICADA - USA DATOS EN MEMORIA
// ========================================
async function cargarDatosPAE() {
    try {
        // Ya NO hacemos fetch - usamos los datos que ya están en memoria
        const jsonData = ESTUDIANTES_BACHILLERATO_DATA;

        // Guardar los grupos
        BARROBLANCO_DATA.groups = jsonData.groups;
        
        // Transformar y combinar estudiantes
        BARROBLANCO_DATA.students = jsonData.students.map(student => {
            // Buscar info del grupo
            const grupo = jsonData.groups.find(g => g.id === student.group);
            
            return {
                id: `principal-${student.group}-${student.matricula}`,
                matricula: student.matricula,
                name: student.nombre,
                groupId: student.group,
                grade: student.grade,
                sede: 'principal',
                type: grupo ? grupo.type : 'regular',
                status: 'active'
            };
        });

        console.log("✅ Datos cargados:", BARROBLANCO_DATA.students.length, "estudiantes");
        return Promise.resolve(); // Simular async
    } catch (error) {
        console.error("❌ Error transformando datos:", error);
        return Promise.reject(error);
    }
}


function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            menu.classList.toggle('show');
        }