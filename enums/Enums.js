export class EMake {
  static None = "none";
  static All = "all";
  static Bmw = "bmw";
  static MercedesBenz = "mercedesbenz";
  static Audi = "audi";
  static Porsche = "porsche";
  static Lexus = "lexus";
  static Infiniti = "infiniti";
  static Toyota = "toyota";
  static Nissan = "nissan";
  static Ford = "ford";
  static Chevrolet = "chevrolet";
  static Volkswagen = "volkswagen";
  static Opel = "opel";
  static Mitsubishi = "mitsubishi";
  static Kia = "kia";
  static Hyundai = "hyundai";
  static Honda = "honda";
  static Mazda = "mazda";
  static Jeep = "jeep";
  static Dodge = "dodge";
  static LandRover = "landrover";
  static End = EMake.LandRover;

  static toString(make) {
    switch (make) {
      case EMake.None:
        return "";
      case EMake.All:
        return "ALL";
      case EMake.Bmw:
        return "Bmw";
      case EMake.MercedesBenz:
        return "Mercedes Benz";
      case EMake.Audi:
        return "Audi";
      case EMake.Porsche:
        return "Porsche";
      case EMake.Lexus:
        return "Lexus";
      case EMake.Infiniti:
        return "Infiniti";
      case EMake.Toyota:
        return "Toyota";
      case EMake.Nissan:
        return "Nissan";
      case EMake.Ford:
        return "Ford";
      case EMake.Chevrolet:
        return "Chevrolet";
      case EMake.Volkswagen:
        return "Volkswagen";
      case EMake.Opel:
        return "Opel";
      case EMake.Mitsubishi:
        return "Mitsubishi";
      case EMake.Kia:
        return "KIA";
      case EMake.Hyundai:
        return "Hyundai";
      case EMake.Honda:
        return "Honda";
      case EMake.Mazda:
        return "Mazda";
      case EMake.Jeep:
        return "Jeep";
      case EMake.Dodge:
        return "Dodge";
      case EMake.LandRover:
        return "Land Rover";
    }
  }
}

export class ESerie {
  static None = "none";
  static All = "all";
  static Bmw1 = "bmw1";
  static Bmw2 = "bmw2";
  static Bmw3 = "bmw3";
  static Bmw4 = "bmw4";
  static Bmw5 = "bmw5";
  static Bmw6 = "bmw6";
  static Bmw7 = "bmw7";
  static Bmw8 = "bmw8";
  static BmwX1 = "bmwx1";
  static BmwX3 = "bmwx3";
  static BmwX4 = "bmwx4";
  static BmwX5 = "bmwx5";
  static BmwX6 = "bmwx6";
  static BmwX7 = "bmwx7";
  static BmwZ4 = "bmwz4";
  static BmwM = "bmwm";
  static MercedesBenz190Class = "mercedesbenz190class";
  static MercedesBenzAClass = "mercedesbenzaclass";
  static MercedesBenzBClass = "mercedesbenzbclass";
  static MercedesBenzCClass = "mercedesbenzcclass";
  static MercedesBenzEClass = "mercedesbenzeclass";
  static MercedesBenzSClass = "mercedesbenzsclass";
  static MercedesBenzCLClass = "mercedesbenzclclass";
  static MercedesBenzCLAClass = "mercedesbenzclaclass";
  static MercedesBenzCLKClass = "mercedesbenzclkclass";
  static MercedesBenzCLSClass = "mercedesbenzclsclass";
  static MercedesBenzMLClass = "mercedesbenzmlclass";
  static MercedesBenzGClass = "mercedesbenzgclass";
  static MercedesBenzGLClass = "mercedesbenzglclass";
  static MercedesBenzGLAClass = "mercedesbenzglaclass";
  static MercedesBenzGLCCLass = "mercedesbenzglcclass";
  static MercedesBenzGLCCoupe = "mercedesbenzglccoupe";
  static MercedesBenzGLEClass = "mercedesbenzgleclass";
  static MercedesBenzGLECoupe = "mercedesbenzglecoupe";
  static MercedesBenzGLKClass = "mercedesbenzglkclass";
  static MercedesBenzGLSClass = "mercedesbenzglsclass";
  static MercedesBenzRClass = "mercedesbenzrclass";
  static MercedesBenzSLClass = "mercedesbenzslclass";
  static MercedesBenzSLKClass = "mercedesbenzslkclass";
  static MercedesBenzVClass = "mercedesbenzvclass";
  static MercedesBenzSprinter = "mercedesbenzsprinter";
  static MercedesBenzVaneo = "mercedesbenzvaneo";
  static MercedesBenzViano = "mercedesbenzviano";
  static MercedesBenzVito = "mercedesbenzvito";
  static MercedesBenzAMG = "mercedesbenzamg";
  static AudiA3 = "audia3";
  static AudiA4 = "audia4";
  static AudiA5 = "audia5";
  static AudiA6 = "audia6";
  static AudiA7 = "audia7";
  static AudiA8 = "audia8";
  static AudiQ3 = "audiq3";
  static AudiQ5 = "audiq5";
  static AudiQ7 = "audiq7";
  static AudiQ8 = "audiq8";
  static AudiTT = "auditt";
  static AudiRS = "audirs";
  static PorscheCayenne = "porschecayenne";
  static PorscheMacan = "porschemacan";
  static PorschePanamera = "porschepanamera";
  static LexusCT = "lexusct";
  static LexusIS = "lexusis";
  static LexusES = "lexuses";
  static LexusGS = "lexusgs";
  static LexusLS = "lexusls";
  static LexusNX = "lexusnx";
  static LexusRX = "lexusrx";
  static LexusGX = "lexusgx";
  static LexusLX = "lexuslx";
  static LexusF = "lexusf";
  static InfinitiEXSeries = "infinitiexseries";
  static InfinitiJXSeries = "infinitijxseries";
  static InfinitiFXSeries = "infinitifxseries";
  static InfinityGSeries = "infinitygseries";
  static InfinityMSeries = "infinitymseries";
  static InfinitiQ50 = "infinitiq50";
  static InfinitiQ60 = "infinitiq60";
  static InfinitiQX30 = "infinitiqx30";
  static InfinitiQ3Series = "infinitiq3series";
  static InfinitiQX4Series = "infinitiqx4series";
  static InfinitiQX50Series = "infinitiqx50series";
  static InfinitiQX56Series = "infinitiqx56series";
  static InfinitiQX60Series = "infinitiqx60series";
  static InfinitiQX70Series = "infinitiqx70series";
  static InfinitiQX80Series = "infinitiqx80series";
  static ToyotaAlphard = "toyotaalphard";
  static ToyotaAltezza = "toyotaaltezza";
  static ToyotaAvalon = "toyotaavalon";
  static ToyotaAvensis = "toyotaavensis";
  static ToyotaBelta = "toyotabelta";
  static ToyotaBlade = "toyotablade";
  static ToyotaCHR = "toyotachr";
  static ToyotaCamry = "toyotacamry";
  static ToyotaCorolla = "toyotacorolla";
  static ToyotaEstima = "toyotaestima";
  static ToyotaFJCruiser = "toyotafjcruiser";
  static ToyotaFortuner = "toyotafortuner";
  static ToyotaHarrier = "toyotaharrier";
  static ToyotaHighlander = "toyotahighlander";
  static ToyotaHilux = "toyotahilux";
  static ToyotaIpsum = "toyotaipsum";
  static ToyotaIst = "toyotaist";
  static ToyotaLandCruiser = "toyotalandcruiser";
  static ToyotaLandCruiserPrado = "toyotalandcruiserprado";
  static ToyotaNoah = "toyotanoah";
  static ToyotaPasso = "toyotapasso";
  static ToyotaPrius = "toyotaprius";
  static ToyotaRAV4 = "toyotarav4";
  static ToyotaSequoia = "toyotasequoia";
  static ToyotaSienna = "toyotasienna";
  static ToyotaTacoma = "toyotatacoma";
  static ToyotaTundra = "toyotatundra";
  static ToyotaVellfire = "toyotavellfire";
  static ToyotaVitz = "toyotavitz";
  static ToyotaVoxy = "toyotavoxy";
  static ToyotaYaris = "toyotayaris";
  static NissanAlmera = "nissanalmera";
  static NissanAltima = "nissanaltima";
  static NissanArmada = "nissanarmada";
  static NissanBluebird = "nissanbluebird";
  static NissanCube = "nissancube";
  static NissanElgrand = "nissanelgrand";
  static NissanFrontier = "nissanfrontier";
  static NissanFuga = "nissanfuga";
  static NissanJuke = "nissanjuke";
  static NissanKicks = "nissankicks";
  static NissanLatio = "nissanlatio";
  static NissanLeaf = "nissanleaf";
  static NissanMarch = "nissanmarch";
  static NissanMaxima = "nissanmaxima";
  static NissanMicra = "nissanmicra";
  static NissanMurano = "nissanmurano";
  static NissanNote = "nissannote";
  static NissanPathfinder = "nissanpathfinder";
  static NissanPatrol = "nissanpatrol";
  static NissanPresage = "nissanpresage";
  static NissanQashqai = "nissanqashqai";
  static NissanQuest = "nissanquest";
  static NissanRogue = "nissanrogue";
  static NissanSentra = "nissansentra";
  static NissanSerena = "nissanserena";
  static NissanSkyline = "nissanskyline";
  static NissanSunny = "nissansunny";
  static NissanTeana = "nissanteana";
  static NissanTerrano = "nissanterrano";
  static NissanTiida = "nissantiida";
  static NissanVersa = "nissanversa";
  static NissanXTrail = "nissanxtrail";
  static NissanXTerra = "nissanxterra";
  static Nissan350Z = "nissan350z";
  static FordEdge = "fordedge";
  static FordEscape = "fordescape";
  static FordExplorer = "fordexplorer";
  static FordF150 = "fordf150";
  static FordFiesta = "fordfiesta";
  static FordFocus = "fordfocus";
  static FordFusion = "fordfusion";
  static FordTaurus = "fordtaurus";
  static FordTransit = "fordtransit";
  static FordMustang = "fordmustang";
  static ChevroletAvalanche = "chevroletavalanche";
  static ChevroletAveo = "chevroletaveo";
  static ChevroletCaptiva = "chevroletcaptiva";
  static ChevroletCruze = "chevroletcruze";
  static ChevroletEpica = "chevroletepica";
  static ChevroletEquinox = "chevroletequinox";
  static ChevroletMalibu = "chevroletmalibu";
  static ChevroletNiva = "chevroletniva";
  static ChevroletTahoe = "chevrolettahoe";
  static ChevroletTrailBlazer = "chevrolettrailblazer";
  static ChevroletVolt = "chevroletvolt";
  static ChevroletCamaro = "chevroletcamaro";
  static ChevroletCorvette = "chevroletcorvette";
  static VolkswagenBeetle = "volkswagenbeetle";
  static VolkswagenBora = "volkswagenbora";
  static VolkswagenCaddy = "volkswagencaddy";
  static VolkswagenCrafter = "volkswagencrafter";
  static VolkswagenGolf = "volkswagengolf";
  static VolkswagenJetta = "volkswagenjetta";
  static VolkswagenPassat = "volkswagenpassat";
  static VolkswagenPassatCC = "volkswagenpassatcc";
  static VolkswagenPolo = "volkswagenpolo";
  static VolkswagenRoutan = "volkswagenroutan";
  static VolkswagenTiguan = "volkswagentiguan";
  static VolkswagenTouareg = "volkswagentouareg";
  static VolkswagenTouran = "volkswagentouran";
  static VolkswagenTransporter = "volkswagentransporter";
  static VolkswagenVento = "volkswagenvento";
  static VolkswagenID4 = "volkswagenid4";
  static VolkswagenID6 = "volkswagenid6";
  static OpelAstra = "opelastra";
  static OpelCombo = "opelcombo";
  static OpelCorsa = "opelcorsa";
  static OpelFrontera = "opelfrontera";
  static OpelInsignia = "opelinsignia";
  static OpelMeriva = "opelmeriva";
  static OpelOmega = "opelomega";
  static OpelSignum = "opelsignum";
  static OpelSintra = "opelsintra";
  static OpelVectra = "opelvectra";
  static OpelZafira = "opelzafira";
  static MitsubishiAirtrek = "mitsubishiairtrek";
  static MitsubishiChariot = "mitsubishichariot";
  static MitsubishiColt = "mitsubishicolt";
  static MitsubishiGalant = "mitsubishigalant";
  static MitsubishiGrandis = "mitsubishigrandis";
  static MitsubishiLancer = "mitsubishilancer";
  static MitsubishiMontero = "mitsubishimontero";
  static MitsubishiOutlander = "mitsubishioutlander";
  static MitsubishiPajero = "mitsubishipajero";
  static KIACadenza = "kiacadenza";
  static KIACerato = "kiacerato";
  static KIAForte = "kiaforte";
  static KIAK5 = "kiak5";
  static KIAStinger = "kiastinger";
  static KIAOptima = "kiaoptima";
  static KIARio = "kiario";
  static KIASedona = "kiasedona";
  static KIASorento = "kiasorento";
  static KIASportage = "kiasportage";
  static HyundaiAccent = "hyundaiaccent";
  static HyundaiCreta = "hyundaicreta";
  static HyundaiElantra = "hyundaielantra";
  static HyundaiGenesis = "hyundaigenesis";
  static HyundaiGenesisCoupe = "hyundaigenesiscoupe";
  static HyundaiIX35 = "hyundaiix35";
  static HyundaiKona = "hyundaikona";
  static HyundaiSantaFe = "hyundaisantafe";
  static HyundaiSolaris = "hyundaisolaris";
  static HyundaiSonata = "hyundaisonata";
  static HyundaiTucson = "hyundaitucson";
  static HyundaiVeloster = "hyundaiveloster";
  static HondaAccord = "hondaaccord";
  static HondaCivic = "hondacivic";
  static HondaCRV = "hondacrv";
  static HondaCrosstour = "hondacrosstour";
  static HondaElyson = "hondaelyson";
  static HondaFit = "hondafit";
  static HondaHRV = "hondahrv";
  static HondaOdyssey = "hondaodyssey";
  static HondaPilot = "hondapilot";
  static HondaRidgeline = "hondaridgeline";
  static HondaStepwgn = "hondastepwgn";
  static MazdaAtenza = "mazdaatenza";
  static MazdaCX3 = "mazdacx3";
  static MazdaCX30 = "mazdacx30";
  static MazdaCX5 = "mazdacx5";
  static MazdaCX7 = "mazdacx7";
  static MazdaCX9 = "mazdacx9";
  static MazdaDemio = "mazdademio";
  static MazdaMPV = "mazdampv";
  static MazdaRX8 = "mazdarx8";
  static MazdaTribute = "mazdatribute";
  static Mazda3 = "mazda3";
  static Mazda5 = "mazda5";
  static Mazda6 = "mazda6";
  static JeepCompass = "jeepcompass";
  static JeepCherokee = "jeepcherokee";
  static JeepGrandCherokee = "jeepgrandcherokee";
  static DodgeCharger = "dodgecharger";
  static DodgeChallenger = "dodgechallenger";
  static LandRoverRangeRover = "landroverrangerover";
  static LandRoverRangeRoverSport = "landroverrangeroversport";
  static LandRoverRangeRoverVelar = "landroverrangerovervelar";

  static toString(serie) {
    switch (serie) {
      case ESerie.None:
        return "";
      case ESerie.All:
        return "ALL";
      case ESerie.Bmw1:
        return "1 Series";
      case ESerie.Bmw2:
        return "2 Series";
      case ESerie.Bmw3:
        return "3 Series";
      case ESerie.Bmw4:
        return "4 Series";
      case ESerie.Bmw5:
        return "5 Series";
      case ESerie.Bmw6:
        return "6 Series";
      case ESerie.Bmw7:
        return "7 Series";
      case ESerie.Bmw8:
        return "8 Series";
      case ESerie.BmwX1:
        return "X1";
      case ESerie.BmwX3:
        return "X3";
      case ESerie.BmwX4:
        return "X4";
      case ESerie.BmwX5:
        return "X5";
      case ESerie.BmwX6:
        return "X6";
      case ESerie.BmwX7:
        return "X7";
      case ESerie.BmwZ4:
        return "Z4";
      case ESerie.BmwM:
        return "M SERIES";
      case ESerie.MercedesBenz190Class:
        return "190 Class";
      case ESerie.MercedesBenzAClass:
        return "A Class";
      case ESerie.MercedesBenzBClass:
        return "B Class";
      case ESerie.MercedesBenzCClass:
        return "C Class";
      case ESerie.MercedesBenzEClass:
        return "E Class";
      case ESerie.MercedesBenzSClass:
        return "S Class";
      case ESerie.MercedesBenzCLClass:
        return "CL Class";
      case ESerie.MercedesBenzCLAClass:
        return "CLA";
      case ESerie.MercedesBenzCLKClass:
        return "CLK";
      case ESerie.MercedesBenzCLSClass:
        return "CLS";
      case ESerie.MercedesBenzMLClass:
        return "ML";
      case ESerie.MercedesBenzGClass:
        return "G Class";
      case ESerie.MercedesBenzGLClass:
        return "GL";
      case ESerie.MercedesBenzGLAClass:
        return "GLA";
      case ESerie.MercedesBenzGLCCLass:
        return "GLC";
      case ESerie.MercedesBenzGLCCoupe:
        return "GLC Coupe";
      case ESerie.MercedesBenzGLEClass:
        return "GLE";
      case ESerie.MercedesBenzGLECoupe:
        return "GLE Coupe";
      case ESerie.MercedesBenzGLKClass:
        return "GLK";
      case ESerie.MercedesBenzGLSClass:
        return "GLS";
      case ESerie.MercedesBenzRClass:
        return "R Class";
      case ESerie.MercedesBenzSLClass:
        return "SL";
      case ESerie.MercedesBenzSLKClass:
        return "SLK";
      case ESerie.MercedesBenzVClass:
        return "V CLASS";
      case ESerie.MercedesBenzSprinter:
        return "SPRINTER";
      case ESerie.MercedesBenzVaneo:
        return "VANEO";
      case ESerie.MercedesBenzViano:
        return "VIANO";
      case ESerie.MercedesBenzVito:
        return "VITO";
      case ESerie.MercedesBenzAMG:
        return "AMG";
      case ESerie.AudiA3:
        return "A3";
      case ESerie.AudiA4:
        return "A4";
      case ESerie.AudiA5:
        return "A5";
      case ESerie.AudiA6:
        return "A6";
      case ESerie.AudiA7:
        return "A7";
      case ESerie.AudiA8:
        return "A8";
      case ESerie.AudiQ3:
        return "Q3";
      case ESerie.AudiQ5:
        return "Q5";
      case ESerie.AudiQ7:
        return "Q7";
      case ESerie.AudiQ8:
        return "Q8";
      case ESerie.AudiTT:
        return "TT CLASS";
      case ESerie.AudiRS:
        return "RS CLASS";
      case ESerie.PorscheCayenne:
        return "Cayenne";
      case ESerie.PorscheMacan:
        return "Macan";
      case ESerie.PorschePanamera:
        return "Panamera";
      case ESerie.LexusCT:
        return "CT";
      case ESerie.LexusIS:
        return "IS";
      case ESerie.LexusES:
        return "ES";
      case ESerie.LexusGS:
        return "GS";
      case ESerie.LexusLS:
        return "LS";
      case ESerie.LexusNX:
        return "NX";
      case ESerie.LexusRX:
        return "RX";
      case ESerie.LexusGX:
        return "GX";
      case ESerie.LexusLX:
        return "LX";
      case ESerie.LexusF:
        return "F Class";
      case ESerie.InfinitiEXSeries:
        return "EX";
      case ESerie.InfinitiJXSeries:
        return "JX";
      case ESerie.InfinitiFXSeries:
        return "FX";
      case ESerie.InfinityGSeries:
        return "G Series";
      case ESerie.InfinityMSeries:
        return "M Series";
      case ESerie.InfinitiQ50:
        return "Q50";
      case ESerie.InfinitiQ60:
        return "Q60";
      case ESerie.InfinitiQX30:
        return "QX30";
      case ESerie.InfinitiQ3Series:
        return "Q3";
      case ESerie.InfinitiQX4Series:
        return "QX4";
      case ESerie.InfinitiQX50Series:
        return "QX50";
      case ESerie.InfinitiQX56Series:
        return "QX56";
      case ESerie.InfinitiQX60Series:
        return "QX60";
      case ESerie.InfinitiQX70Series:
        return "QX70";
      case ESerie.InfinitiQX80Series:
        return "QX80";
      case ESerie.ToyotaAlphard:
        return "Alphard";
      case ESerie.ToyotaAltezza:
        return "Altezza";
      case ESerie.ToyotaAvalon:
        return "Avalon";
      case ESerie.ToyotaAvensis:
        return "Avensis";
      case ESerie.ToyotaBelta:
        return "BELTA";
      case ESerie.ToyotaBlade:
        return "BLADE";
      case ESerie.ToyotaCHR:
        return "CHR";
      case ESerie.ToyotaCamry:
        return "Camry";
      case ESerie.ToyotaCorolla:
        return "Corolla";
      case ESerie.ToyotaEstima:
        return "ESTIMA";
      case ESerie.ToyotaFJCruiser:
        return "FJ CRUISER";
      case ESerie.ToyotaFortuner:
        return "FORTUNER";
      case ESerie.ToyotaHarrier:
        return "HARRIER";
      case ESerie.ToyotaHighlander:
        return "HIGHLANDER";
      case ESerie.ToyotaHilux:
        return "HILUX";
      case ESerie.ToyotaIpsum:
        return "IPSUM";
      case ESerie.ToyotaIst:
        return "IST";
      case ESerie.ToyotaLandCruiser:
        return "Land Cruiser";
      case ESerie.ToyotaLandCruiserPrado:
        return "Land Cruiser Prado";
      case ESerie.ToyotaNoah:
        return "NOAH";
      case ESerie.ToyotaPasso:
        return "PASSO";
      case ESerie.ToyotaPrius:
        return "PRIUS";
      case ESerie.ToyotaRAV4:
        return "RAV4";
      case ESerie.ToyotaSequoia:
        return "SEQUOIA";
      case ESerie.ToyotaSienna:
        return "SIENNA";
      case ESerie.ToyotaTacoma:
        return "TACOMA";
      case ESerie.ToyotaTundra:
        return "TUNDRA";
      case ESerie.ToyotaVellfire:
        return "VELLFIRE";
      case ESerie.ToyotaVitz:
        return "VITZ";
      case ESerie.ToyotaVoxy:
        return "VOXY";
      case ESerie.ToyotaYaris:
        return "YARIS";
      case ESerie.NissanAlmera:
        return "ALMERA";
      case ESerie.NissanAltima:
        return "Altima";
      case ESerie.NissanArmada:
        return "ARMADA";
      case ESerie.NissanBluebird:
        return "BLUEBIRD";
      case ESerie.NissanCube:
        return "CUBE";
      case ESerie.NissanElgrand:
        return "ELGRAND";
      case ESerie.NissanFrontier:
        return "FRONTIER";
      case ESerie.NissanFuga:
        return "FUGA";
      case ESerie.NissanJuke:
        return "JUKE";
      case ESerie.NissanKicks:
        return "KICKS";
      case ESerie.NissanLatio:
        return "LATIO";
      case ESerie.NissanLeaf:
        return "LEAF";
      case ESerie.NissanMarch:
        return "MARCH";
      case ESerie.NissanMaxima:
        return "Maxima";
      case ESerie.NissanMicra:
        return "MICRA";
      case ESerie.NissanMurano:
        return "MURANO";
      case ESerie.NissanNote:
        return "NOTE";
      case ESerie.NissanPathfinder:
        return "PATHFINDER";
      case ESerie.NissanPatrol:
        return "PATROL";
      case ESerie.NissanPresage:
        return "PRESAGE";
      case ESerie.NissanQashqai:
        return "QASHQAI";
      case ESerie.NissanQuest:
        return "QUEST";
      case ESerie.NissanRogue:
        return "ROGUE";
      case ESerie.NissanSentra:
        return "Sentra";
      case ESerie.NissanSerena:
        return "SERENA";
      case ESerie.NissanSkyline:
        return "SKYLINE";
      case ESerie.NissanSunny:
        return "SUNNY";
      case ESerie.NissanTeana:
        return "TEANA";
      case ESerie.NissanTerrano:
        return "TERRANO";
      case ESerie.NissanTiida:
        return "TIIDA";
      case ESerie.NissanVersa:
        return "VERSA";
      case ESerie.NissanXTrail:
        return "X-TRAIL";
      case ESerie.NissanXTerra:
        return "X-TERRA";
      case ESerie.Nissan350Z:
        return "350Z";
      case ESerie.FordEdge:
        return "EDGE";
      case ESerie.FordEscape:
        return "ESCAPE";
      case ESerie.FordExplorer:
        return "Explorer";
      case ESerie.FordF150:
        return "F150";
      case ESerie.FordFiesta:
        return "FIESTA";
      case ESerie.FordFocus:
        return "Focus";
      case ESerie.FordFusion:
        return "Fusion";
      case ESerie.FordTaurus:
        return "TAURUS";
      case ESerie.FordTransit:
        return "TRANSIT";
      case ESerie.FordMustang:
        return "Mustang";
      case ESerie.ChevroletAvalanche:
        return "AVALANCHE";
      case ESerie.ChevroletAveo:
        return "AVEO";
      case ESerie.ChevroletCaptiva:
        return "CAPTIVA";
      case ESerie.ChevroletCruze:
        return "Cruze";
      case ESerie.ChevroletEpica:
        return "EPICA";
      case ESerie.ChevroletEquinox:
        return "EQUINOX";
      case ESerie.ChevroletMalibu:
        return "Malibu";
      case ESerie.ChevroletNiva:
        return "NIVA";
      case ESerie.ChevroletTahoe:
        return "TAHOE";
      case ESerie.ChevroletTrailBlazer:
        return "TRAIL BLAZER";
      case ESerie.ChevroletVolt:
        return "VOLT";
      case ESerie.ChevroletCamaro:
        return "Camaro";
      case ESerie.ChevroletCorvette:
        return "Corvette";
      case ESerie.VolkswagenBeetle:
        return "BEETLE";
      case ESerie.VolkswagenBora:
        return "BORA";
      case ESerie.VolkswagenCaddy:
        return "CADDY";
      case ESerie.VolkswagenCrafter:
        return "CRAFTER";
      case ESerie.VolkswagenGolf:
        return "Golf";
      case ESerie.VolkswagenJetta:
        return "Jetta";
      case ESerie.VolkswagenPassat:
        return "Passat";
      case ESerie.VolkswagenPassatCC:
        return "Passat CC";
      case ESerie.VolkswagenPolo:
        return "POLO";
      case ESerie.VolkswagenRoutan:
        return "ROUTAN";
      case ESerie.VolkswagenTiguan:
        return "TIGUAN";
      case ESerie.VolkswagenTouareg:
        return "Touareg";
      case ESerie.VolkswagenTouran:
        return "TOURAN";
      case ESerie.VolkswagenTransporter:
        return "TRANSPORTER";
      case ESerie.VolkswagenVento:
        return "VENTO";
      case ESerie.VolkswagenID4:
        return "ID.4";
      case ESerie.VolkswagenID6:
        return "ID.6";
      case ESerie.OpelAstra:
        return "Astra";
      case ESerie.OpelCombo:
        return "COMBO";
      case ESerie.OpelCorsa:
        return "CORSÁ";
      case ESerie.OpelFrontera:
        return "FRONTERA";
      case ESerie.OpelInsignia:
        return "INSIGNIA";
      case ESerie.OpelMeriva:
        return "MERIVA";
      case ESerie.OpelOmega:
        return "OMEGA";
      case ESerie.OpelSignum:
        return "SIGNUM";
      case ESerie.OpelSintra:
        return "SINTRA";
      case ESerie.OpelVectra:
        return "VECTRA";
      case ESerie.OpelZafira:
        return "ZAFIRA";
      case ESerie.MitsubishiAirtrek:
        return "AIRTREK";
      case ESerie.MitsubishiChariot:
        return "CHARIOT";
      case ESerie.MitsubishiColt:
        return "COLT";
      case ESerie.MitsubishiGalant:
        return "GALANT";
      case ESerie.MitsubishiGrandis:
        return "GRANDIS";
      case ESerie.MitsubishiLancer:
        return "LANCER";
      case ESerie.MitsubishiMontero:
        return "MONTERO";
      case ESerie.MitsubishiOutlander:
        return "Outlander";
      case ESerie.MitsubishiPajero:
        return "Pajero";
      case ESerie.KIACadenza:
        return "CADENZA";
      case ESerie.KIACerato:
        return "CERATO";
      case ESerie.KIAForte:
        return "FORTE";
      case ESerie.KIAK5:
        return "K5";
      case ESerie.KIAStinger:
        return "Stinger";
      case ESerie.KIAOptima:
        return "Optima";
      case ESerie.KIARio:
        return "RIO";
      case ESerie.KIASedona:
        return "SEDONA";
      case ESerie.KIASorento:
        return "Sorento";
      case ESerie.KIASportage:
        return "Sportage";
      case ESerie.HyundaiAccent:
        return "ACCENT";
      case ESerie.HyundaiCreta:
        return "CRETA";
      case ESerie.HyundaiElantra:
        return "Elantra";
      case ESerie.HyundaiGenesis:
        return "GENESIS";
      case ESerie.HyundaiGenesisCoupe:
        return "GENESIS COUPE";
      case ESerie.HyundaiIX35:
        return "IX35";
      case ESerie.HyundaiKona:
        return "Kona";
      case ESerie.HyundaiSantaFe:
        return "Santa FE";
      case ESerie.HyundaiSolaris:
        return "Solaris";
      case ESerie.HyundaiSonata:
        return "Sonata";
      case ESerie.HyundaiTucson:
        return "Tucson";
      case ESerie.HyundaiVeloster:
        return "VELOSTER";
      case ESerie.HondaAccord:
        return "Accord";
      case ESerie.HondaCivic:
        return "Civic";
      case ESerie.HondaCRV:
        return "CRV";
      case ESerie.HondaCrosstour:
        return "CROSSTOUR";
      case ESerie.HondaElyson:
        return "ELYSON";
      case ESerie.HondaFit:
        return "FIT";
      case ESerie.HondaHRV:
        return "HRV";
      case ESerie.HondaOdyssey:
        return "ODYSSEY";
      case ESerie.HondaPilot:
        return "PILOT";
      case ESerie.HondaRidgeline:
        return "RIDGELINE";
      case ESerie.HondaStepwgn:
        return "STEPWGN";
      case ESerie.MazdaAtenza:
        return "ATENZA";
      case ESerie.MazdaCX3:
        return "CX3";
      case ESerie.MazdaCX30:
        return "Mazda CX30";
      case ESerie.MazdaCX5:
        return "Mazda CX5";
      case ESerie.MazdaCX7:
        return "CX7";
      case ESerie.MazdaCX9:
        return "Mazda CX9";
      case ESerie.MazdaDemio:
        return "DEMIO";
      case ESerie.MazdaMPV:
        return "MPV";
      case ESerie.MazdaRX8:
        return "RX8";
      case ESerie.MazdaTribute:
        return "TRIBUTE";
      case ESerie.Mazda3:
        return "Mazda 3";
      case ESerie.Mazda5:
        return "5 CLASS";
      case ESerie.Mazda6:
        return "Mazda 6";
      case ESerie.JeepCompass:
        return "COMPASS";
      case ESerie.JeepCherokee:
        return "Cherokee";
      case ESerie.JeepGrandCherokee:
        return "Grand Cherokee";
      case ESerie.DodgeCharger:
        return "Charger";
      case ESerie.DodgeChallenger:
        return "Challenger";
      case ESerie.LandRoverRangeRover:
        return "Range Rover";
      case ESerie.LandRoverRangeRoverSport:
        return "Range Rover Sport";
      case ESerie.LandRoverRangeRoverVelar:
        return "Range Rover Velar";
    }
  }
}

export class EModel {
  static None = "none";
  static All = "all";
  static Bmw1E81 = "bmw1e81";
  static Bmw1E82 = "bmw1e82";
  static Bmw1E87 = "bmw1e87";
  static Bmw1E88 = "bmw1e88";
  static Bmw1F20 = "bmw1f20";
  static Bmw1F21 = "bmw1f21";
  static Bmw1F40 = "bmw1f40";
  static Bmw1F52 = "bmw1f52";
  static Bmw2F22 = "bmw2f22";
  static Bmw2F23 = "bmw2f23";
  static Bmw2F45 = "bmw2f45";
  static Bmw2F46 = "bmw2f46";
  static Bmw2F44 = "bmw2f44";
  static Bmw2G42 = "bmw2g42";
  static Bmw3E30 = "bmw3e30";
  static Bmw3E36 = "bmw3e36";
  static Bmw3E46 = "bmw3e46";
  static Bmw3E90 = "bmw3e90";
  static Bmw3E92 = "bmw3e92";
  static Bmw3F30 = "bmw3f30";
  static Bmw3G20 = "bmw3g20";
  static Bmw4F32 = "bmw4f32";
  static Bmw4F33 = "bmw4f33";
  static Bmw4F36 = "bmw4f36";
  static Bmw4G22 = "bmw4g22";
  static Bmw4G23 = "bmw4g23";
  static Bmw4G26 = "bmw4g26";
  static Bmw5E34 = "bmw5e34";
  static Bmw5E39 = "bmw5e39";
  static Bmw5E60 = "bmw5e60";
  static Bmw5E61 = "bmw5e61";
  static Bmw5F10 = "bmw5f10";
  static Bmw5F11 = "bmw5f11";
  static Bmw5F07 = "bmw5f07";
  static Bmw5F18 = "bmw5f18";
  static Bmw5G30 = "bmw5g30";
  static Bmw5G31 = "bmw5g31";
  static Bmw5G38 = "bmw5g38";
  static Bmw6E63 = "bmw6e63";
  static Bmw6E64 = "bmw6e64";
  static Bmw6F06 = "bmw6f06";
  static Bmw6F12 = "bmw6f12";
  static Bmw6F13 = "bmw6f13";
  static Bmw6G32 = "bmw6g32";
  static Bmw7E38 = "bmw7e38";
  static Bmw7E65 = "bmw7e65";
  static Bmw7E66 = "bmw7e66";
  static Bmw7E67 = "bmw7e67";
  static Bmw7F68 = "bmw7f68";
  static Bmw7F01 = "bmw7f01";
  static Bmw7F02 = "bmw7f02";
  static Bmw7F03 = "bmw7f03";
  static Bmw7F04 = "bmw7f04";
  static Bmw7G11 = "bmw7g11";
  static Bmw7G12 = "bmw7g12";
  static Bmw8G15 = "bmw8g15";
  static BmwX1E84 = "bmwx1e84";
  static BmwX1F48 = "bmwx1f48";
  static BmwX3E83 = "bmwx3e83";
  static BmwX3F25 = "bmwx3f25";
  static BmwX3G01 = "bmwx3g01";
  static BmwX4F26 = "bmwx4f26";
  static BmwX4G02 = "bmwx4g02";
  static BmwX5E53 = "bmwx5e53";
  static BmwX5E70 = "bmwx5e70";
  static BmwX5F15 = "bmwx5f15";
  static BmwX5G05 = "bmwx5g05";
  static BmwX6E71 = "bmwx6e71";
  static BmwX6F16 = "bmwx6f16";
  static BmwX6G06 = "bmwx6g06";
  static BmwX7G07 = "bmwx7g07";
  static BmwZ4E85 = "bmwz4e85";
  static BmwZ4E86 = "bmwz4e86";
  static BmwZ4E89 = "bmwz4e89";
  static BmwZ4G29 = "bmwz4g29";
  static MercedesBenz190W201 = "mercedesbenz190w201";
  static MercedesBenzAW168 = "mercedesbenzaw168";
  static MercedesBenzAW169 = "mercedesbenzaw169";
  static MercedesBenzAW176 = "mercedesbenzaw176";
  static MercedesBenzAW177 = "mercedesbenzaw177";
  static MercedesBenzBW245 = "mercedesbenzbw245";
  static MercedesBenzBW246 = "mercedesbenzbw246";
  static MercedesBenzBW247 = "mercedesbenzbw247";
  static MercedesBencCW202 = "mercedesbenccw202";
  static MercedesBencCW203 = "mercedesbenccw203";
  static MercedesBencCW204 = "mercedesbenccw204";
  static MercedesBencCW205 = "mercedesbenccw205";
  static MercedesBencCW206 = "mercedesbenccw206";
  static MercedesBencEW124 = "mercedesbencew124";
  static MercedesBencEW210 = "mercedesbencew210";
  static MercedesBencEW211 = "mercedesbencew211";
  static MercedesBencEW212 = "mercedesbencew212";
  static MercedesBencEC207 = "mercedesbencec207";
  static MercedesBencEA207 = "mercedesbencea207";
  static MercedesBencEW213 = "mercedesbencew213";
  static MercedesBencSW140 = "mercedesbencsw140";
  static MercedesBencSW220 = "mercedesbencsw220";
  static MercedesBencSW221 = "mercedesbencsw221";
  static MercedesBencSW222 = "mercedesbencsw222";
  static MercedesBencSW223 = "mercedesbencsw223";
  static MercedesBencCLC140 = "mercedesbencclc140";
  static MercedesBencCLC215 = "mercedesbencclc215";
  static MercedesBencCLC216 = "mercedesbencclc216";
  static MercedesBencCLAC117 = "mercedesbencclac117";
  static MercedesBencCLAC118 = "mercedesbencclac118";
  static MercedesBencCLKC208 = "mercedesbencclkc208";
  static MercedesBencCLKA208 = "mercedesbencclka208";
  static MercedesBencCLKC209 = "mercedesbencclkc209";
  static MercedesBencCLKA209 = "mercedesbencclka209";
  static MercedesBencCLSC219 = "mercedesbencclsc219";
  static MercedesBencCLSC218 = "mercedesbencclsc218";
  static MercedesBencCLSC256 = "mercedesbencclsc256";
  static MercedesBencMLW163 = "mercedesbencmlw163";
  static MercedesBencMLW164 = "mercedesbencmlw164";
  static MercedesBencMLW166 = "mercedesbencmlw166";
  static MercedesBencMLW167 = "mercedesbencmlw167";
  static MercedesBencGW463 = "mercedesbencgw463";
  static MercedesBencGW4632 = "mercedesbencgw4632";
  static MercedesBencGLX164 = "mercedesbencglx164";
  static MercedesBencGLX166 = "mercedesbencglx166";
  static MercedesBencGLAX156 = "mercedesbencglax156";
  static MercedesBencGLAH247 = "mercedesbencglah247";
  static MercedesBencGLCX253 = "mercedesbencglcx253";
  static MercedesBencGLCC253 = "mercedesbencglcc253";
  static MercedesBencGLEW166 = "mercedesbencglew166";
  static MercedesBencGLEC292 = "mercedesbencglec292";
  static MercedesBencGLEV167 = "mercedesbencglev167";
  static MercedesBencGLEC167 = "mercedesbencgleс167";
  static MercedesBencGLKX204 = "mercedesbencglkx204";
  static MercedesBencGLSX166 = "mercedesbencglsx166";
  static MercedesBencGLSX167 = "mercedesbencglsx167";
  static MercedesBencRW251 = "mercedesbencrw251";
  static MercedesBencSLR230 = "mercedesbencslr230";
  static MercedesBencSLR231 = "mercedesbencslr231";
  static MercedesBencSLKR170 = "mercedesbencslkr170";
  static MercedesBencSLKR171 = "mercedesbencslkr171";
  static MercedesBencSLKR172 = "mercedesbencslkr172";
  static MercedesBencVW638 = "mercedesbencvw638";
  static MercedesBencVW639 = "mercedesbencvw639";
  static MercedesBencVW447 = "mercedesbencvw447";
  static MercedesBencSprinterW901 = "mercedesbencsprinterw901";
  static MercedesBencSprinterW905 = "mercedesbencsprinterw905";
  static MercedesBencSprinternNCV3 = "mercedesbencsprinternncv3";
  static MercedesBencVaneoW414 = "mercedesbencvaneow414";
  static MercedesBencViano = "mercedesbencviano";
  static MercedesBencVito = "mercedesbencvito";
  static AudiA38L = "audia38l";
  static AudiA38P = "audia38p";
  static AudiA38V = "audia38v";
  static AudiA38Y = "audia38y";
  static AudiA4B5 = "audia4b5";
  static AudiA4B6 = "audia4b6";
  static AudiA4B7 = "audia4b7";
  static AudiA4B8 = "audia4b8";
  static AudiA4B9 = "audia4b9";
  static AudiA52007 = "audia52007";
  static AudiA52017 = "audia52017";
  static AudiA6C5 = "audia6c5";
  static AudiA6C6 = "audia6c6";
  static AudiA62011 = "audia62011";
  static AudiA62018 = "audia62018";
  static AudiA7G4 = "audia7g4";
  static AudiA74K = "audia74k";
  static AudiA8D2 = "audia8d2";
  static AudiA8D3 = "audia8d3";
  static AudiA8D4 = "audia8d4";
  static AudiA8D5 = "audia8d5";
  static AudiQ32011 = "audiq32011";
  static AudiQ32018 = "audiq32018";
  static AudiQ52008 = "audiq52008";
  static AudiQ52017 = "audiq52017";
  static AudiQ72005 = "audiq72005";
  static AudiQ72015 = "audiq72015";
  static AudiQ82018 = "audiq82018";
  static AudiTT8N = "auditt8n";
  static AudiTT8J = "auditt8j";
  static AudiTT8S = "auditt8s";
  static PorscheCayenne1 = "porschecayenne1";
  static PorscheCayenne2 = "porschecayenne2";
  static PorscheCayenne3 = "porschecayenne3";
  static PorscheMacan1 = "porschemacan1";
  static PorschePanamera1 = "porschepanamera1";
  static PorschePanamera2 = "porschepanamera2";
  static LexusCT1 = "lexusct1";
  static LexusIS1 = "lexusis1";
  static LexusIS2 = "lexusis2";
  static LexusIS2013 = "lexusis2013";
  static LexusES4 = "lexuses4";
  static LexusES5 = "lexuses5";
  static LexusES6 = "lexuses6";
  static LexusES2018 = "lexuses2018";
  static LexusGS2 = "lexusgs2";
  static LexusGS3 = "lexusgs3";
  static LexusGS4 = "lexusgs4";
  static LexusLS4 = "lexusls4";
  static LexusLS5 = "lexusls5";
  static LexusNX1 = "lexusnx1";
  static LexusNX2 = "lexusnx2";
  static LexusRX1 = "lexusrx1";
  static LexusRX2 = "lexusrx2";
  static LexusRX3 = "lexusrx3";
  static LexusRX4 = "lexusrx4";
  static LexusRX5 = "lexusrx5";
  static LexusGX1 = "lexusgx1";
  static LexusGX2 = "lexusgx2";
  static LexusLX2 = "lexuslx2";
  static LexusLX3 = "lexuslx3";
  static InfinitiQ502013 = "infinitiq502013";
  static InfinitiQ602016 = "infinitiq602016";
  static InfinitiQX302016 = "infinitiqx302016";
  static InfinitiEX1J50 = "infinitiex1j50";
  static InfinitiJX1 = "infinitijx1";
  static InfinitiFX1S50 = "infinitifx1s50";
  static InfinitiFX2S51 = "infinitifx2s51";
  static InfinitiG3 = "infinitig3";
  static InfinitiG4 = "infinitig4";
  static InfinitiM3 = "infinitim3";
  static InfinitiM4 = "infinitim4";
  static InfinitiQ3 = "infinitiq3";
  static InfinitiQX4 = "infinitiqx4";
  static InfinitiQX501 = "infinitiqx501";
  static InfinitiQX502 = "infinitiqx502";
  static InfinitiQX561 = "infinitiqx561";
  static InfinitiQX562 = "infinitiqx562";
  static InfinitiQX601 = "infinitiqx601";
  static InfinitiQX602013 = "infinitiqx602013";
  static InfinitiQX70 = "infinitiqx70";
  static InfinitiQX801 = "infinitiqx801";
  static InfinitiQX802 = "infinitiqx802";
  static ToyotaAlphard1 = "toyotaalphard1";
  static ToyotaAlphard2 = "toyotaalphard2";
  static ToyotaAlphard3 = "toyotaalphard3";
  static ToyotaAltezza = "toyotaaltezza";
  static ToyotaAvalon3 = "toyotaavalon3";
  static ToyotaAvalon4 = "toyotaavalon4";
  static ToyotaAvalon5 = "toyotaavalon5";
  static ToyotaAvensis2 = "toyotaavensis2";
  static ToyotaAvensis3 = "toyotaavensis3";
  static ToyotaBelta = "toyotabelta";
  static ToyotaBlade1E150 = "toyotablade1e150";
  static ToyotaCHR1 = "toyotachr1";
  static ToyotaCamryXV40 = "toyotacamryxv40";
  static ToyotaCamryXV50 = "toyotacamryxv50";
  static ToyotaCamryXV70 = "toyotacamryxv70";
  static ToyotaCorollaE140 = "toyotacorollae140";
  static ToyotaCorollaE160 = "toyotacorollae160";
  static ToyotaCorollaE210 = "toyotacorollae210";
  static ToyotaEstima2 = "toyotaestima2";
  static ToyotaEstima3 = "toyotaestima3";
  static ToyotaFJCruiser = "toyotafjcruiser";
  static ToyotaFortuner1 = "toyotafortuner1";
  static ToyotaFortuner2 = "toyotafortuner2";
  static ToyotaHarrierXU10 = "toyotaharrierxu10";
  static ToyotaHarrierXU30 = "toyotaharrierxu30";
  static ToyotaHarrierXU60 = "toyotaharrierxu60";
  static ToyotaHighlanderU20 = "toyotahighlanderu20";
  static ToyotaHighlanderU40 = "toyotahighlanderu40";
  static ToyotaHighlanderU50 = "toyotahighlanderu50";
  static ToyotaHighlanderU70 = "toyotahighlanderu70";
  static ToyotaHilux6 = "toyotahilux6";
  static ToyotaHilux7 = "toyotahilux7";
  static ToyotaHilux8 = "toyotahilux8";
  static ToyotaIpsumM10 = "toyotaipsumm10";
  static ToyotaIpsumM20 = "toyotaipsumm20";
  static ToyotaIst1 = "toyotaist1";
  static ToyotaIst2 = "toyotaist2";
  static ToyotaLandCruiser100 = "toyotalandcruiser100";
  static ToyotaLandCruiser200 = "toyotalandcruiser200";
  static ToyotaLandCruiser300 = "toyotalandcruiser300";
  static ToyotaLandCruiserPrado120 = "toyotalandcruiserprado120";
  static ToyotaLandCruiserPrado150 = "toyotalandcruiserprado150";
  static ToyotaNoahR60 = "toyotanoahr60";
  static ToyotaNoahR70 = "toyotanoahr70";
  static ToyotaNoahR80 = "toyotanoahr80";
  static ToyotaPasso1 = "toyotapasso1";
  static ToyotaPasso2 = "toyotapasso2";
  static ToyotaPasso3 = "toyotapasso3";
  static ToyotaPriusXW10 = "toyotapriusxw10";
  static ToyotaPriusXW20 = "toyotapriusxw20";
  static ToyotaPriusXW30 = "toyotapriusxw30";
  static ToyotaPriusXW50 = "toyotapriusxw50";
  static ToyotaRAV4XA10 = "toyotarav4xa10";
  static ToyotaRAV4XA20 = "toyotarav4xa20";
  static ToyotaRAV4XA30 = "toyotarav4xa30";
  static ToyotaRAV4CA40 = "toyotarav4ca40";
  static ToyotaRAV4XA50 = "toyotarav4xa50";
  static ToyotaSequoia1 = "toyotasequoia1";
  static ToyotaSequoia2 = "toyotasequoia2";
  static ToyotaSienna1 = "toyotasienna1";
  static ToyotaSienna2 = "toyotasienna2";
  static ToyotaSienna3 = "toyotasienna3";
  static ToyotaSienna4 = "toyotasienna4";
  static ToyotaTacoma1 = "toyotatacoma1";
  static ToyotaTacoma2 = "toyotatacoma2";
  static ToyotaTacoma3 = "toyotatacoma3";
  static ToyotaTundra1 = "toyotatundra1";
  static ToyotaTundra2 = "toyotatundra2";
  static ToyotaVellfire1 = "toyotavellfire1";
  static ToyotaVellfire2 = "toyotavellfire2";
  static ToyotaVitzP10 = "toyotavitzp10";
  static ToyotaVitzXP90 = "toyotavitzxp90";
  static ToyotaVitzXP130 = "toyotavitzxp130";
  static ToyotaVoxyR60 = "toyotavoxyr60";
  static ToyotaVoxyR70 = "toyotavoxyr70";
  static ToyotaVoxyR80 = "toyotavoxyr80";
  static ToyotaYaris = "toyotayaris";
  static NissanAlmeraN16 = "nissanalmeran16";
  static NissanAlmeraG15 = "nissanalmerag15";
  static NissanAltimaL32 = "nissanaltimal32";
  static NissanAltimaL33 = "nissanaltimal33";
  static NissanAltimaL34 = "nissanaltimal34";
  static NissanArmada1 = "nissanarmada1";
  static NissanArmada2 = "nissanarmada2";
  static NissanBluebird = "nissanbluebird";
  static NissanCubeZ10 = "nissancubez10";
  static NissanCubeZ11 = "nissancubez11";
  static NissanCubeZ12 = "nissancubez12";
  static NissanElgrandE50 = "nissanelgrande50";
  static NissanElgrandE51 = "nissanelgrande51";
  static NissanElgrandE52 = "nissanelgrande52";
  static NissanFrontier = "nissanfrontier";
  static NissanFuga1 = "nissanfuga1";
  static NissanFuga2 = "nissanfuga2";
  static NissanJuke1 = "nissanjuke1";
  static NissanJuke2 = "nissanjuke2";
  static NissanKicks1 = "nissankicks1";
  static NissanLatioN71 = "nissanlation71";
  static NissanLeafZE0 = "nissanleafze0";
  static NissanLeafZE1 = "nissanleafze1";
  static NissanMarchK12 = "nissanmarchk12";
  static NissanMarchK13 = "nissanmarchk13";
  static NissanMaximaA34 = "nissanmaximaa34";
  static NissanMaximaA35 = "nissanmaximaa35";
  static NissanMaximaA36 = "nissanmaximaa36";
  static NissanMicra3 = "nissanmicra3";
  static NissanMicra4 = "nissanmicra4";
  static NissanMicra5 = "nissanmicra5";
  static NissanMuranoZ50 = "nissanmuranoz50";
  static NissanMuranoZ51 = "nissanmuranoz51";
  static NissanMuranoZ52 = "nissanmuranoz52";
  static NissanNote1 = "nissannote1";
  static NissanNote2 = "nissannote2";
  static NissanPathfinder3 = "nissanpathfinder3";
  static NissanPathfinder4 = "nissanpathfinder4";
  static NissanPathfinder5 = "nissanpathfinder5";
  static NissanPatrolY61 = "nissanpatroly61";
  static NissanPatrolY62 = "nissanpatroly62";
  static NissanPresage1 = "nissanpresage1";
  static NissanPresage2 = "nissanpresage2";
  static NissanQashqai1 = "nissanqashqai1";
  static NissanQashqai2 = "nissanqashqai2";
  static NissanQashqai3 = "nissanqashqai3";
  static NissanQuest3 = "nissanquest3";
  static NissanQuest4 = "nissanquest4";
  static NissanRogue1 = "nissanrogue1";
  static NissanRogue2013 = "nissanrogue2013";
  static NissanRogue2020 = "nissanrogue2020";
  static NissanSentraB16 = "nissansentrab16";
  static NissanSentraB17 = "nissansentrab17";
  static NissanSentraB18 = "nissansentrab18";
  static NissanSerenaC24 = "nissanserenac24";
  static NissanSerenaC25 = "nissanserenac25";
  static NissanSerenaC26 = "nissanserenac26";
  static NissanSerenaC27 = "nissanserenac27";
  static NissanSkylineR34 = "nissanskyliner34";
  static NissanSkylineV35 = "nissanskylinev35";
  static NissanSkylineV36 = "nissanskylinev36";
  static NissanSkylineV37 = "nissanskylinev37";
  static NissanSunnyN16 = "nissansunnyn16";
  static NissanSunnyB10 = "nissansunnyb10";
  static NissanTeana1 = "nissanteana1";
  static NissanTeana2 = "nissanteana2";
  static NissanTeana3 = "nissanteana3";
  static NissanTerrano2 = "nissanterrano2";
  static NissanTerrano3 = "nissanterrano3";
  static NissanTiida1 = "nissantiida1";
  static NissanTiida2 = "nissantiida2";
  static NissanVersa1 = "nissanversa1";
  static NissanVersa2 = "nissanversa2";
  static NissanVersa3 = "nissanversa3";
  static NissanXTrail1 = "nissanxtrail1";
  static NissanXTrail2 = "nissanxtrail2";
  static NissanXTrail3 = "nissanxtrail3";
  static NissanXTerra1 = "nissanxterra1";
  static NissanXTerra2 = "nissanxterra2";
  static Nissan350Z = "nissan350z";
  static FordEdge1 = "fordedge1";
  static FordEdge2 = "fordedge2";
  static FordEscape1 = "fordescape1";
  static FordEscape2 = "fordescape2";
  static FordEscape3 = "fordescape3";
  static FordEscape4 = "fordescape4";
  static FordExplorer1 = "fordexplorer1";
  static FordExplorer2 = "fordexplorer2";
  static FordExplorer3 = "fordexplorer3";
  static FordExplorer4 = "fordexplorer4";
  static FordExplorer2011 = "fordexplorer2011";
  static FordExplorer6 = "fordexplorer6";
  static FordF15010 = "fordf15010";
  static FordF15011 = "fordf15011";
  static FordF15012 = "fordf15012";
  static FordF15013 = "fordf15013";
  static FordFiestaMK6 = "fordfiestamk6";
  static FordFiestaMK7 = "fordfiestamk7";
  static FordFocus1 = "fordfocus1";
  static FordFocus2 = "fordfocus2";
  static FordFocus3 = "fordfocus3";
  static FordFocus4 = "fordfocus4";
  static FordFusion2 = "fordfusion2";
  static FordTaurus6 = "fordtaurus6";
  static FordTransit = "fordtransit";
  static FordMustang4 = "fordmustang4";
  static FordMustang5 = "fordmustang5";
  static FordMustang6 = "fordmustang6";
  static ChevroletAvalanche1 = "chevroletavalanche1";
  static ChevroletAvalanche2 = "chevroletavalanche2";
  static ChevroletAveo1 = "chevroletaveo1";
  static ChevroletAveo2 = "chevroletaveo2";
  static ChevroletAveo3 = "chevroletaveo3";
  static ChevroletCaptiva1 = "chevroletcaptiva1";
  static ChevroletCruze1 = "chevroletcruze1";
  static ChevroletCruze2 = "chevroletcruze2";
  static ChevroletEpicaV250 = "chevroletepicav250";
  static ChevroletEquinox1 = "chevroletequinox1";
  static ChevroletEquinox2 = "chevroletequinox2";
  static ChevroletEquinox3 = "chevroletequinox3";
  static ChevroletMalibu7 = "chevroletmalibu7";
  static ChevroletMalibu8 = "chevroletmalibu8";
  static ChevroletMalibu9 = "chevroletmalibu9";
  static ChevroletNiva = "chevroletniva";
  static ChevroletTahoe2 = "chevrolettahoe2";
  static ChevroletTahoe3 = "chevrolettahoe3";
  static ChevroletTahoe4 = "chevrolettahoe4";
  static ChevroletTahoe5 = "chevrolettahoe5";
  static ChevroletTrailBlazer1 = "chevrolettrailblazer1";
  static ChevroletTrailBlazer2 = "chevrolettrailblazer2";
  static ChevroletTrailBlazer3 = "chevrolettrailblazer3";
  static ChevroletVolt1 = "chevroletvolt1";
  static ChevroletVolt2 = "chevroletvolt2";
  static ChevroletCamaro5 = "chevroletcamaro5";
  static ChevroletCamaro6 = "chevroletcamaro6";
  static ChevroletCorvette = "chevroletcorvette";
  static VolkswagenBeetleA4 = "volkswagenbeetlea4";
  static VolkswagenBeetleA5 = "volkswagenbeetlea5";
  static VolkswagenBora1998 = "volkswagenbora1998";
  static VolkswagenBora4 = "volkswagenbora4";
  static VolkswagenCaddy2 = "volkswagencaddy2";
  static VolkswagenCaddy3 = "volkswagencaddy3";
  static VolkswagenCaddy4 = "volkswagencaddy4";
  static VolkswagenCaddy5 = "volkswagencaddy5";
  static VolkswagenCrafter = "volkswagencrafter";
  static VolkswagenGolf2 = "volkswagengolf2";
  static VolkswagenGolf3 = "volkswagengolf3";
  static VolkswagenGolf4 = "volkswagengolf4";
  static VolkswagenGolf5 = "volkswagengolf5";
  static VolkswagenGolf6 = "volkswagengolf6";
  static VolkswagenGolf7 = "volkswagengolf7";
  static VolkswagenGolf8 = "volkswagengolf8";
  static VolkswagenJetta3 = "volkswagenjetta3";
  static VolkswagenJetta4 = "volkswagenjetta4";
  static VolkswagenJetta5 = "volkswagenjetta5";
  static VolkswagenJetta6 = "volkswagenjetta6";
  static VolkswagenJetta7 = "volkswagenjetta7";
  static VolkswagenPassatB5 = "volkswagenpassatb5";
  static VolkswagenPassatB6 = "volkswagenpassatb6";
  static VolkswagenPassatB7 = "volkswagenpassatb7";
  static VolkswagenPassatB8 = "volkswagenpassatb8";
  static VolkswagenPassatCC1 = "volkswagenpassatcc1";
  static VolkswagenPolo3 = "volkswagenpolo3";
  static VolkswagenPolo4 = "volkswagenpolo4";
  static VolkswagenPolo5 = "volkswagenpolo5";
  static VolkswagenPolo6 = "volkswagenpolo6";
  static VolkswagenRoutan = "volkswagenroutan";
  static VolkswagenTiguan1 = "volkswagentiguan1";
  static VolkswagenTiguan2 = "volkswagentiguan2";
  static VolkswagenTouareg1 = "volkswagentouareg1";
  static VolkswagenTouareg2 = "volkswagentouareg2";
  static VolkswagenTouareg3 = "volkswagentouareg3";
  static VolkswagenTouran1 = "volkswagentouran1";
  static VolkswagenTouran2 = "volkswagentouran2";
  static VolkswagenTouran3 = "volkswagentouran3";
  static VolkswagenTransporterT4 = "volkswagentransportert4";
  static VolkswagenTransporterT5 = "volkswagentransportert5";
  static VolkswagenTransporterT6 = "volkswagentransportert6";
  static VolkswagenVento = "volkswagenvento";
  static VolkswagenID42020 = "volkswagenid42020";
  static VolkswagenID62021 = "volkswagenid62021";
  static OpelAstraF = "opelastraf";
  static OpelAstraG = "opelastrag";
  static OpelAstraH = "opelastrah";
  static OpelAstraJ = "opelastraj";
  static OpelAstraK = "opelastrak";
  static OpelComboC = "opelcomboc";
  static OpelComboD = "opelcombod";
  static OpelComboE = "opelcomboe";
  static OpelComboPCMA = "opelcombopcma";
  static OpelCorsaA = "opelcorsaa";
  static OpelCorsaB = "opelcorsab";
  static OpelCorsaC = "opelcorsac";
  static OpelCorsaD = "opelcorsad";
  static OpelCorsaE = "opelcorsae";
  static OpelCorsaF = "opelcorsaf";
  static OpelFronteraA = "opelfronteraa";
  static OpelFronteraB = "opelfronterab";
  static OpelInsignia1 = "opelinsignia1";
  static OpelInsignia2 = "opelinsignia2";
  static OpelMerivaA = "opelmerivaa";
  static OpelMerivaB = "opelmerivab";
  static OpelOmegaA = "opelomegaa";
  static OpelOmegaB = "opelomegab";
  static OpelSignum = "opelsignum";
  static OpelSintra = "opelsintra";
  static OpelVectraA = "opelvectraa";
  static OpelVectraB = "opelvectrab";
  static OpelVectraC = "opelvectrac";
  static OpelZafiraA = "opelzafiraa";
  static OpelZafiraB = "opelzafirab";
  static OpelZafiraC = "opelzafirac";
  static MitsubishiAirtrek = "mitsubishiairtrek";
  static MitsubishiChariot2 = "mitsubishichariot2";
  static MitsubishiChariot3 = "mitsubishichariot3";
  static MitsubishiColtZ30 = "mitsubishicoltz30";
  static MitsubishiGalant8 = "mitsubishigalant8";
  static MitsubishiGalant9 = "mitsubishigalant9";
  static MitsubishiGrandis = "mitsubishigrandis";
  static MitsubishiLancer9 = "mitsubishilancer9";
  static MitsubishiLancer10 = "mitsubishilancer10";
  static MitsubishiMontero3 = "mitsubishimontero3";
  static MitsubishiMontero4 = "mitsubishimontero4";
  static MitsubishiOutlander1 = "mitsubishioutlander1";
  static MitsubishiOutlander2 = "mitsubishioutlander2";
  static MitsubishiOutlander3 = "mitsubishioutlander3";
  static MitsubishiPajero2 = "mitsubishipajero2";
  static MitsubishiPajero3 = "mitsubishipajero3";
  static MitsubishiPajero2006 = "mitsubishipajero2006";
  static KIACadenza1 = "kiacadenza1";
  static KIACadenza2 = "kiacadenza2";
  static KIACerato1 = "kiacerato1";
  static KIACerato2 = "kiacerato2";
  static KIACerato3 = "kiacerato3";
  static KIAForte1 = "kiaforte1";
  static KIAForte2 = "kiaforte2";
  static KIAForte2018 = "kiaforte2018";
  static KIAK51 = "kiak51";
  static KIAK52 = "kiak52";
  static KIAK52019 = "kiak52019";
  static KIAOptima2 = "kiaoptima2";
  static KIAOptima3 = "kiaoptima3";
  static KIAOptima2015 = "kiaoptima2015";
  static KIARio2 = "kiario2";
  static KIARio3 = "kiario3";
  static KIARio4 = "kiario4";
  static KIASedona1 = "kiasedona1";
  static KIASedona2 = "kiasedona2";
  static KIASedona3 = "kiasedona3";
  static KIASorento1 = "kiasorento1";
  static KIASorento2 = "kiasorento2";
  static KIASorento3 = "kiasorento3";
  static KIASorento4 = "kiasorento4";
  static KIASportage2 = "kiasportage2";
  static KIASportage3 = "kiasportage3";
  static KIASportage2015 = "kiasportage2015";
  static KIAStinger2018 = "kiastinger2018";
  static KIASorento2009 = "kiasorento2009";
  static KIASorento2014 = "kiasorento2014";
  static KIASorento2020 = "kiasorento2020";
  static HyundaiAccent2 = "hyundaiaccent2";
  static HyundaiAccent3 = "hyundaiaccent3";
  static HyundaiAccent4 = "hyundaiaccent4";
  static HyundaiAccent5 = "hyundaiaccent5";
  static HyundaiCreta1 = "hyundaicreta1";
  static HyundaiCreta2 = "hyundaicreta2";
  static HyundaiElantra4 = "hyundaielantra4";
  static HyundaiElantra5 = "hyundaielantra5";
  static HyundaiElantra2015 = "hyundaielantra2015";
  static HyundaiElantra2020 = "hyundaielantra2020";
  static HyundaiGenesis1 = "hyundaigenesis1";
  static HyundaiGenesis2 = "hyundaigenesis2";
  static HyundaiGenesisCoupe1 = "hyundaigenesiscoupe1";
  static HyundaiIX351 = "hyundaiix351";
  static HyundaiKona1 = "hyundaikona1";
  static HyundaiSantaFe1 = "hyundaisantafe1";
  static HyundaiSantaFe2 = "hyundaisantafe2";
  static HyundaiSantaFe2012 = "hyundaisantafe2012";
  static HyundaiSantaFe2018 = "hyundaisantafe2018";
  static HyundaiSolaris1 = "hyundaisolaris1";
  static HyundaiSolaris2 = "hyundaisolaris2";
  static HyundaiSonata5 = "hyundaisonata5";
  static HyundaiSonata6 = "hyundaisonata6";
  static HyundaiSonata7 = "hyundaisonata7";
  static HyundaiSonata2014 = "hyundaisonata2014";
  static HyundaiSonata2019 = "hyundaisonata2019";
  static HyundaiTucson1 = "hyundaitucson1";
  static HyundaiTucson2 = "hyundaitucson2";
  static HyundaiTucson2015 = "hyundaitucson2015";
  static HyundaiTucson2020 = "hyundaitucson2020";
  static HyundaiTucson4 = "hyundaitucson4";
  static HyundaiVeloster1 = "hyundaiveloster1";
  static HyundaiVeloster2 = "hyundaiveloster2";
  static HondaAccord7 = "hondaaccord7";
  static HondaAccord8 = "hondaaccord8";
  static HondaAccord9 = "hondaaccord9";
  static HondaAccord2017 = "hondaaccord2017";
  static HondaCivic7 = "hondacivic7";
  static HondaCivic8 = "hondacivic8";
  static HondaCivic9 = "hondacivic9";
  static HondaCivic2015 = "hondacivic2015";
  static HondaCivic11 = "hondacivic11";
  static HondaCRV1 = "hondacrv1";
  static HondaCRV2 = "hondacrv2";
  static HondaCRV3 = "hondacrv3";
  static HondaCRV4 = "hondacrv4";
  static HondaCRV5 = "hondacrv5";
  static HondaCrosstour1 = "hondacrosstour1";
  static HondaElysion1 = "hondaelysion1";
  static HondaFit1 = "hondafit1";
  static HondaFit2 = "hondafit2";
  static HondaFit3 = "hondafit3";
  static HondaHRV1 = "hondahrv1";
  static HondaHRV2 = "hondahrv2";
  static HondaOdyssey3 = "hondaodyssey3";
  static HondaOdyssey4 = "hondaodyssey4";
  static HondaOdyssey5 = "hondaodyssey5";
  static HondaOdyssey6 = "hondaodyssey6";
  static HondaPilot1 = "hondapilot1";
  static HondaPilot2 = "hondapilot2";
  static HondaPilot3 = "hondapilot3";
  static HondaRidgeline1 = "hondaridgeline1";
  static HondaRidgeline2 = "hondaridgeline2";
  static HondaStepwgn2 = "hondastepwgn2";
  static HondaStepwgn3 = "hondastepwgn3";
  static HondaStepwgn4 = "hondastepwgn4";
  static HondaStepwgn5 = "hondastepwgn5";
  static MazdaAtenza1 = "mazdaatenza1";
  static MazdaAtenza2 = "mazdaatenza2";
  static MazdaAtenza3 = "mazdaatenza3";
  static MazdaCX31 = "mazdacx31";
  static MazdaCX302019 = "mazdacx302019";
  static MazdaCX51 = "mazdacx51";
  static MazdaCX52 = "mazdacx52";
  static MazdaCX71 = "mazdacx71";
  static MazdaCX91 = "mazdacx91";
  static MazdaCX92016 = "mazdacx92016";
  static MazdaDemio1 = "mazdademio1";
  static MazdaDemio2 = "mazdademio2";
  static MazdaDemio3 = "mazdademio3";
  static MazdaDemio4 = "mazdademio4";
  static MazdaMPV2 = "mazdampv2";
  static MazdaMPV3 = "mazdampv3";
  static MazdaRX8 = "mazdarx8";
  static MazdaTribute1 = "mazdatribute1";
  static MazdaTribute2 = "mazdatribute2";
  static Mazda32 = "mazda32";
  static Mazda32013 = "mazda32013";
  static Mazda32019 = "mazda32019";
  static Mazda51 = "mazda51";
  static Mazda52 = "mazda52";
  static Mazda61 = "mazda61";
  static Mazda62 = "mazda62";
  static Mazda62012 = "mazda62012";
  static JeepCompass2017 = "jeepcompass2017";
  static JeepCompass2020 = "jeepcompass2020";
  static JeepCherokeeKL = "jeepcherokeekl";
  static JeepGrandCherokee2017 = "jeepgrandcherokee2017";
  static DodgeCharger2011 = "dodgecharger2011";
  static DodgeChallenger2008 = "dodgechallenger2008";
  static LandRoverRangeRover2012 = "landroverrangerover2012";
  static LandRoverRangeRover2022 = "landroverrangerover2022";
  static LandRoverRangeRoverSport2013 = "landroverrangeroversport2013";
  static LandRoverRangeRoverSport2022 = "landroverrangeroversport2022";
  static LandRoverRangeRoverVelar2017 = "landroverrangeroverVelar2017";

  static toString(model) {
    switch (model) {
      case EModel.None:
        return "";
      case EModel.All:
        return "ALL";
      case EModel.Bmw1E81:
        return "E81";
      case EModel.Bmw1E82:
        return "E82";
      case EModel.Bmw1E87:
        return "E87";
      case EModel.Bmw1E88:
        return "E88";
      case EModel.Bmw1F20:
        return "F20";
      case EModel.Bmw1F21:
        return "F21";
      case EModel.Bmw1F40:
        return "F40";
      case EModel.Bmw1F52:
        return "F52";
      case EModel.Bmw2F22:
        return "F22";
      case EModel.Bmw2F23:
        return "F23";
      case EModel.Bmw2F45:
        return "F45";
      case EModel.Bmw2F46:
        return "F46";
      case EModel.Bmw2F44:
        return "F44";
      case EModel.Bmw2G42:
        return "G42";
      case EModel.Bmw3E30:
        return "E30";
      case EModel.Bmw3E36:
        return "E36";
      case EModel.Bmw3E46:
        return "E46";
      case EModel.Bmw3E90:
        return "E90";
      case EModel.Bmw3E92:
        return "E92";
      case EModel.Bmw3F30:
        return "F30";
      case EModel.Bmw3G20:
        return "G20";
      case EModel.Bmw4F32:
        return "F32";
      case EModel.Bmw4F33:
        return "F33";
      case EModel.Bmw4F36:
        return "F36";
      case EModel.Bmw4G22:
        return "G22";
      case EModel.Bmw4G23:
        return "G23";
      case EModel.Bmw4G26:
        return "G26";
      case EModel.Bmw5E34:
        return "E34";
      case EModel.Bmw5E39:
        return "E39";
      case EModel.Bmw5E60:
        return "E60";
      case EModel.Bmw5E61:
        return "E61";
      case EModel.Bmw5F10:
        return "F10";
      case EModel.Bmw5F11:
        return "F11";
      case EModel.Bmw5F07:
        return "F07";
      case EModel.Bmw5F18:
        return "F18";
      case EModel.Bmw5G30:
        return "G30";
      case EModel.Bmw5G31:
        return "G31";
      case EModel.Bmw5G38:
        return "G38";
      case EModel.Bmw6E63:
        return "E63";
      case EModel.Bmw6E64:
        return "E64";
      case EModel.Bmw6F06:
        return "F06";
      case EModel.Bmw6F12:
        return "F12";
      case EModel.Bmw6F13:
        return "F13";
      case EModel.Bmw6G32:
        return "G32";
      case EModel.Bmw7E38:
        return "E38";
      case EModel.Bmw7E65:
        return "E65";
      case EModel.Bmw7E66:
        return "E66";
      case EModel.Bmw7E67:
        return "E67";
      case EModel.Bmw7F68:
        return "F68";
      case EModel.Bmw7F01:
        return "F01";
      case EModel.Bmw7F02:
        return "F02";
      case EModel.Bmw7F03:
        return "F03";
      case EModel.Bmw7F04:
        return "F04";
      case EModel.Bmw7G11:
        return "G11";
      case EModel.Bmw7G12:
        return "G12";
      case EModel.Bmw8G15:
        return "G14, G15, G16 (2018, 2023)";
      case EModel.BmwX1E84:
        return "E84";
      case EModel.BmwX1F48:
        return "F48";
      case EModel.BmwX3E83:
        return "E83";
      case EModel.BmwX3F25:
        return "F25";
      case EModel.BmwX3G01:
        return "G01";
      case EModel.BmwX4F26:
        return "F26";
      case EModel.BmwX4G02:
        return "G02";
      case EModel.BmwX5E53:
        return "E53";
      case EModel.BmwX5E70:
        return "E70";
      case EModel.BmwX5F15:
        return "F15";
      case EModel.BmwX5G05:
        return "G05";
      case EModel.BmwX6E71:
        return "E71";
      case EModel.BmwX6F16:
        return "F16";
      case EModel.BmwX6G06:
        return "G06";
      case EModel.BmwX7G07:
        return "G07";
      case EModel.BmwZ4E85:
        return "E85";
      case EModel.BmwZ4E86:
        return "E86";
      case EModel.BmwZ4E89:
        return "E89";
      case EModel.BmwZ4G29:
        return "G29";
      case EModel.MercedesBenz190W201:
        return "W201";
      case EModel.MercedesBenzAW168:
        return "W168";
      case EModel.MercedesBenzAW169:
        return "W169";
      case EModel.MercedesBenzAW176:
        return "W176";
      case EModel.MercedesBenzAW177:
        return "W177";
      case EModel.MercedesBenzBW245:
        return "W245";
      case EModel.MercedesBenzBW246:
        return "W246";
      case EModel.MercedesBenzBW247:
        return "W247";
      case EModel.MercedesBencCW202:
        return "W202";
      case EModel.MercedesBencCW203:
        return "W203";
      case EModel.MercedesBencCW204:
        return "W204";
      case EModel.MercedesBencCW205:
        return "W205";
      case EModel.MercedesBencCW206:
        return "W206";
      case EModel.MercedesBencEW124:
        return "W124";
      case EModel.MercedesBencEW210:
        return "W210";
      case EModel.MercedesBencEW211:
        return "W211";
      case EModel.MercedesBencEW212:
        return "W212";
      case EModel.MercedesBencEC207:
        return "W207";
      case EModel.MercedesBencEA207:
        return "W207";
      case EModel.MercedesBencEW213:
        return "W213";
      case EModel.MercedesBencSW140:
        return "W140";
      case EModel.MercedesBencSW220:
        return "W220";
      case EModel.MercedesBencSW221:
        return "W221";
      case EModel.MercedesBencSW222:
        return "W222";
      case EModel.MercedesBencSW223:
        return "W223";
      case EModel.MercedesBencCLC140:
        return "C140";
      case EModel.MercedesBencCLC215:
        return "C215";
      case EModel.MercedesBencCLC216:
        return "C216";
      case EModel.MercedesBencCLAC117:
        return "C117";
      case EModel.MercedesBencCLAC118:
        return "C118";
      case EModel.MercedesBencCLKC208:
        return "C208";
      case EModel.MercedesBencCLKA208:
        return "A208";
      case EModel.MercedesBencCLKC209:
        return "C209";
      case EModel.MercedesBencCLKA209:
        return "A209";
      case EModel.MercedesBencCLSC219:
        return "C219";
      case EModel.MercedesBencCLSC218:
        return "C218";
      case EModel.MercedesBencCLSC256:
        return "C256";
      case EModel.MercedesBencMLW163:
        return "W163";
      case EModel.MercedesBencMLW164:
        return "W164";
      case EModel.MercedesBencMLW166:
        return "W166";
      case EModel.MercedesBencMLW167:
        return "W167";
      case EModel.MercedesBencGW463:
        return "W463 (1990, 2018)";
      case EModel.MercedesBencGW4632:
        return "W463 (2018, 2023)";
      case EModel.MercedesBencGLX164:
        return "X164";
      case EModel.MercedesBencGLX166:
        return "X166 (2013, 2015)";
      case EModel.MercedesBencGLAX156:
        return "X156";
      case EModel.MercedesBencGLAH247:
        return "H247";
      case EModel.MercedesBencGLCX253:
        return "X253";
      case EModel.MercedesBencGLCC253:
        return "C253";
      case EModel.MercedesBencGLEW166:
        return "W166";
      case EModel.MercedesBencGLEC292:
        return "C292";
      case EModel.MercedesBencGLEV167:
        return "V167";
      case EModel.MercedesBencGLEC167:
        return "C167";
      case EModel.MercedesBencGLKX204:
        return "X204";
      case EModel.MercedesBencGLSX166:
        return "X166 (2015, 2019)";
      case EModel.MercedesBencGLSX167:
        return "X167 (2019, 2023)";
      case EModel.MercedesBencRW251:
        return "W251";
      case EModel.MercedesBencSLR230:
        return "R230";
      case EModel.MercedesBencSLR231:
        return "R231";
      case EModel.MercedesBencSLKR170:
        return "R170";
      case EModel.MercedesBencSLKR171:
        return "R171";
      case EModel.MercedesBencSLKR172:
        return "R172";
      case EModel.MercedesBencVW638:
        return "W638";
      case EModel.MercedesBencVW639:
        return "W639";
      case EModel.MercedesBencVW447:
        return "W447";
      case EModel.MercedesBencSprinterW901:
        return "W901";
      case EModel.MercedesBencSprinterW905:
        return "W905";
      case EModel.MercedesBencSprinternNCV3:
        return "NCV3";
      case EModel.MercedesBencVaneoW414:
        return "W414";
      case EModel.MercedesBencViano:
        return "";
      case EModel.MercedesBencVito:
        return "VITO";
      case EModel.AudiA38L:
        return "A38L";
      case EModel.AudiA38P:
        return "A38P";
      case EModel.AudiA38V:
        return "A38V";
      case EModel.AudiA38Y:
        return "A38Y";
      case EModel.AudiA4B5:
        return "B5";
      case EModel.AudiA4B6:
        return "B6";
      case EModel.AudiA4B7:
        return "B7";
      case EModel.AudiA4B8:
        return "A4 B8 (2008, 2016)";
      case EModel.AudiA4B9:
        return "A4 B9 (2016, 2023)";
      case EModel.AudiA52007:
        return "A5 (2007, 2017)";
      case EModel.AudiA52017:
        return "A5 (2017, 2023)";
      case EModel.AudiA6C5:
        return "C5";
      case EModel.AudiA62011:
        return "A6 (2011, 2018)";
      case EModel.AudiA62018:
        return "A6 (2018, 2023)";
      case EModel.AudiA6C8:
        return "C8";
      case EModel.AudiA7G4:
        return "G4";
      case EModel.AudiA74K:
        return "4K";
      case EModel.AudiA8D2:
        return "D2";
      case EModel.AudiA8D3:
        return "D3";
      case EModel.AudiA8D4:
        return "D4";
      case EModel.AudiA8D5:
        return "D5";
      case EModel.AudiQ32011:
        return "Q3 (2011, 2018)";
      case EModel.AudiQ32018:
        return "Q3 (2018, 2023)";
      case EModel.AudiQ52008:
        return "Q5 (2008, 2017)";
      case EModel.AudiQ52017:
        return "Q5 (2017, 2023)";
      case EModel.AudiQ72005:
        return "Q7 (2005, 2015)";
      case EModel.AudiQ72015:
        return "Q7 (2015, 2023)";
      case EModel.AudiQ82018:
        return "Q8 (2018, 2023)";
      case EModel.AudiTT8N:
        return "8N";
      case EModel.AudiTT8J:
        return "8J";
      case EModel.AudiTT8S:
        return "8S";
      case EModel.PorscheCayenne1:
        return "Cayenne (2002, 2010)";
      case EModel.PorscheCayenne2:
        return "Cayenne (2010, 2018)";
      case EModel.PorscheCayenne3:
        return "Cayenne (2018, 2023)";
      case EModel.PorscheMacan1:
        return "Macan (2014, 2023)";
      case EModel.PorschePanamera1:
        return "Panamera (2009, 2016)";
      case EModel.PorschePanamera2:
        return "Panamera (2016, 2023)";
      case EModel.LexusCT1:
        return "";
      case EModel.LexusIS1:
        return "1";
      case EModel.LexusIS2:
        return "2";
      case EModel.LexusIS2013:
        return "IS (2013, 2023)";
      case EModel.LexusES4:
        return "4";
      case EModel.LexusES5:
        return "5";
      case EModel.LexusES6:
        return "6";
      case EModel.LexusES2018:
        return "ES (2018, 2023)";
      case EModel.LexusGS2:
        return "2";
      case EModel.LexusGS3:
        return "3";
      case EModel.LexusGS4:
        return "4";
      case EModel.LexusLS4:
        return "4";
      case EModel.LexusLS5:
        return "5";
      case EModel.LexusNX1:
        return "NX (2014, 2021)";
      case EModel.LexusNX2:
        return "NX (2021, 2023)";
      case EModel.LexusRX1:
        return "1";
      case EModel.LexusRX2:
        return "2";
      case EModel.LexusRX3:
        return "3";
      case EModel.LexusRX4:
        return "RX (2015, 2022)";
      case EModel.LexusRX5:
        return "RX 2023";
      case EModel.LexusGX1:
        return "1";
      case EModel.LexusGX2:
        return "GX (2009, 2023)";
      case EModel.LexusLX2:
        return "2";
      case EModel.LexusLX3:
        return "LX (2008, 2023)";
      case EModel.InfinitiQ502013:
        return "Q50 (2013, 2023)";
      case EModel.InfinitiQ602016:
        return "Q60 (2016, 2023)";
      case EModel.InfinitiQX302016:
        return "QX30 (2016, 2019)";
      case EModel.InfinitiEX1J50:
        return "1J50";
      case EModel.InfinitiJX1:
        return "1";
      case EModel.InfinitiFX1S50:
        return "1S50";
      case EModel.InfinitiFX2S51:
        return "2S51";
      case EModel.InfinitiG3:
        return "3";
      case EModel.InfinitiG4:
        return "4";
      case EModel.InfinitiM3:
        return "3";
      case EModel.InfinitiM4:
        return "4";
      case EModel.InfinitiQ3:
        return "3";
      case EModel.InfinitiQX4:
        return "";
      case EModel.InfinitiQX501:
        return "1";
      case EModel.InfinitiQX502:
        return "QX50 (2019, 2023)";
      case EModel.InfinitiQX561:
        return "1";
      case EModel.InfinitiQX562:
        return "2";
      case EModel.InfinitiQX601:
        return "";
      case EModel.InfinitiQX602013:
        return "QX60 (2013, 2020)";
      case EModel.InfinitiQX70:
        return "";
      case EModel.InfinitiQX801:
        return "1";
      case EModel.InfinitiQX802:
        return "2";
      case EModel.ToyotaAlphard1:
        return "1";
      case EModel.ToyotaAlphard2:
        return "2";
      case EModel.ToyotaAlphard3:
        return "3";
      case EModel.ToyotaAltezza:
        return "";
      case EModel.ToyotaAvalon3:
        return "3";
      case EModel.ToyotaAvalon4:
        return "4";
      case EModel.ToyotaAvalon5:
        return "5";
      case EModel.ToyotaAvensis2:
        return "2";
      case EModel.ToyotaAvensis3:
        return "3";
      case EModel.ToyotaBelta:
        return "";
      case EModel.ToyotaBlade1E150:
        return "E150";
      case EModel.ToyotaCHR1:
        return "1";
      case EModel.ToyotaCamryXV40:
        return "XV40 (2006, 2011)";
      case EModel.ToyotaCamryXV50:
        return "XV50 (2011, 2017)";
      case EModel.ToyotaCamryXV70:
        return "XV70 (2017, 2023)";
      case EModel.ToyotaCorollaE140:
        return "E140";
      case EModel.ToyotaCorollaE160:
        return "E160";
      case EModel.ToyotaCorollaE210:
        return "COROLLA E210 2018";
      case EModel.ToyotaEstima2:
        return "2";
      case EModel.ToyotaEstima3:
        return "3";
      case EModel.ToyotaFJCruiser:
        return "";
      case EModel.ToyotaFortuner1:
        return "1";
      case EModel.ToyotaFortuner2:
        return "2";
      case EModel.ToyotaHarrierXU10:
        return "XU10";
      case EModel.ToyotaHarrierXU30:
        return "XU30";
      case EModel.ToyotaHarrierXU60:
        return "XU60";
      case EModel.ToyotaHighlanderU20:
        return "U20";
      case EModel.ToyotaHighlanderU40:
        return "U40";
      case EModel.ToyotaHighlanderU50:
        return "U50";
      case EModel.ToyotaHighlanderU70:
        return "U70";
      case EModel.ToyotaHilux6:
        return "6";
      case EModel.ToyotaHilux7:
        return "7";
      case EModel.ToyotaHilux8:
        return "8";
      case EModel.ToyotaIpsumM10:
        return "M10";
      case EModel.ToyotaIpsumM20:
        return "M20";
      case EModel.ToyotaIst1:
        return "1";
      case EModel.ToyotaIst2:
        return "2";
      case EModel.ToyotaLandCruiser100:
        return "100";
      case EModel.ToyotaLandCruiser200:
        return "Land Cruiser 200 (2008, 2021)";
      case EModel.ToyotaLandCruiser300:
        return "Land Cruiser 300 (2021, 2023)";
      case EModel.ToyotaLandCruiserPrado120:
        return "120";
      case EModel.ToyotaLandCruiserPrado150:
        return "Land Cruiser Prado 150 (2009, 2023)";
      case EModel.ToyotaNoahR60:
        return "R60";
      case EModel.ToyotaNoahR70:
        return "R70";
      case EModel.ToyotaNoahR80:
        return "R80";
      case EModel.ToyotaPasso1:
        return "1";
      case EModel.ToyotaPasso2:
        return "2";
      case EModel.ToyotaPasso3:
        return "3";
      case EModel.ToyotaPriusXW10:
        return "XW10";
      case EModel.ToyotaPriusXW20:
        return "XW20";
      case EModel.ToyotaPriusXW30:
        return "XW30";
      case EModel.ToyotaPriusXW50:
        return "XW50";
      case EModel.ToyotaRAV4XA10:
        return "XA10";
      case EModel.ToyotaRAV4XA20:
        return "XA20";
      case EModel.ToyotaRAV4XA30:
        return "XA30";
      case EModel.ToyotaRAV4CA40:
        return "CA40";
      case EModel.ToyotaRAV4XA50:
        return "XA50 (2018, 2023)";
      case EModel.ToyotaSequoia1:
        return "1";
      case EModel.ToyotaSequoia2:
        return "2";
      case EModel.ToyotaSienna1:
        return "1";
      case EModel.ToyotaSienna2:
        return "2";
      case EModel.ToyotaSienna3:
        return "3";
      case EModel.ToyotaSienna4:
        return "4";
      case EModel.ToyotaTacoma1:
        return "1";
      case EModel.ToyotaTacoma2:
        return "2";
      case EModel.ToyotaTacoma3:
        return "3";
      case EModel.ToyotaTundra1:
        return "1";
      case EModel.ToyotaTundra2:
        return "2";
      case EModel.ToyotaVellfire1:
        return "1";
      case EModel.ToyotaVellfire2:
        return "2";
      case EModel.ToyotaVitzP10:
        return "P10";
      case EModel.ToyotaVitzXP90:
        return "XP90";
      case EModel.ToyotaVitzXP130:
        return "XP130";
      case EModel.ToyotaVoxyR60:
        return "R60";
      case EModel.ToyotaVoxyR70:
        return "R70";
      case EModel.ToyotaVoxyR80:
        return "R80";
      case EModel.ToyotaYaris:
        return "";
      case EModel.NissanAlmeraN16:
        return "N16";
      case EModel.NissanAlmeraG15:
        return "G15";
      case EModel.NissanAltimaL32:
        return "L32";
      case EModel.NissanAltimaL33:
        return "ALTIMA L33 2013";
      case EModel.NissanAltimaL34:
        return "ALTIMA L34 2019";
      case EModel.NissanArmada1:
        return "1";
      case EModel.NissanArmada2:
        return "2";
      case EModel.NissanBluebird:
        return "";
      case EModel.NissanCubeZ10:
        return "Z10";
      case EModel.NissanCubeZ11:
        return "Z11";
      case EModel.NissanCubeZ12:
        return "Z12";
      case EModel.NissanElgrandE50:
        return "E50";
      case EModel.NissanElgrandE51:
        return "E51";
      case EModel.NissanElgrandE52:
        return "E52";
      case EModel.NissanFrontier:
        return "";
      case EModel.NissanFuga1:
        return "1";
      case EModel.NissanFuga2:
        return "2";
      case EModel.NissanJuke1:
        return "1";
      case EModel.NissanJuke2:
        return "2";
      case EModel.NissanKicks1:
        return "";
      case EModel.NissanLatioN71:
        return "N71";
      case EModel.NissanLeafZE0:
        return "ZE0";
      case EModel.NissanLeafZE1:
        return "ZE1";
      case EModel.NissanMarchK12:
        return "K12";
      case EModel.NissanMarchK13:
        return "K13";
      case EModel.NissanMaximaA34:
        return "A34";
      case EModel.NissanMaximaA35:
        return "A35 (2008, 2014)";
      case EModel.NissanMaximaA36:
        return "A36 (2015, 2023)";
      case EModel.NissanMicra3:
        return "3";
      case EModel.NissanMicra4:
        return "4";
      case EModel.NissanMicra5:
        return "5";
      case EModel.NissanMuranoZ50:
        return "Z50";
      case EModel.NissanMuranoZ51:
        return "Z51";
      case EModel.NissanMuranoZ52:
        return "Z52";
      case EModel.NissanNote1:
        return "1";
      case EModel.NissanNote2:
        return "2";
      case EModel.NissanPathfinder3:
        return "3";
      case EModel.NissanPathfinder4:
        return "4";
      case EModel.NissanPathfinder5:
        return "5";
      case EModel.NissanPatrolY61:
        return "Y61";
      case EModel.NissanPatrolY62:
        return "Y62";
      case EModel.NissanPresage1:
        return "1";
      case EModel.NissanPresage2:
        return "2";
      case EModel.NissanQashqai1:
        return "1";
      case EModel.NissanQashqai2:
        return "2";
      case EModel.NissanQashqai3:
        return "3";
      case EModel.NissanQuest3:
        return "3";
      case EModel.NissanQuest4:
        return "4";
      case EModel.NissanRogue1:
        return "1";
      case EModel.NissanRogue2013:
        return "Rogue 2013";
      case EModel.NissanRogue2020:
        return "Rogue 2020";
      case EModel.NissanSentraB16:
        return "B16";
      case EModel.NissanSentraB17:
        return "B17";
      case EModel.NissanSentraB18:
        return "Sentra B18 2019";
      case EModel.NissanSerenaC24:
        return "C24";
      case EModel.NissanSerenaC25:
        return "C25";
      case EModel.NissanSerenaC26:
        return "C26";
      case EModel.NissanSerenaC27:
        return "C27";
      case EModel.NissanSkylineR34:
        return "R34";
      case EModel.NissanSkylineV35:
        return "V35";
      case EModel.NissanSkylineV36:
        return "V36";
      case EModel.NissanSkylineV37:
        return "V37";
      case EModel.NissanSunnyN16:
        return "N16";
      case EModel.NissanSunnyB10:
        return "B10";
      case EModel.NissanTeana1:
        return "1";
      case EModel.NissanTeana2:
        return "2";
      case EModel.NissanTeana3:
        return "3";
      case EModel.NissanTerrano2:
        return "2";
      case EModel.NissanTerrano3:
        return "3";
      case EModel.NissanTiida1:
        return "1";
      case EModel.NissanTiida2:
        return "2";
      case EModel.NissanVersa1:
        return "1";
      case EModel.NissanVersa2:
        return "2";
      case EModel.NissanVersa3:
        return "3";
      case EModel.NissanXTrail1:
        return "1";
      case EModel.NissanXTrail2:
        return "2";
      case EModel.NissanXTrail3:
        return "3";
      case EModel.NissanXTerra1:
        return "1";
      case EModel.NissanXTerra2:
        return "2";
      case EModel.Nissan350Z:
        return "";
      case EModel.FordEdge1:
        return "1";
      case EModel.FordEdge2:
        return "2";
      case EModel.FordEscape1:
        return "1";
      case EModel.FordEscape2:
        return "2";
      case EModel.FordEscape3:
        return "3";
      case EModel.FordEscape4:
        return "4";
      case EModel.FordExplorer1:
        return "1";
      case EModel.FordExplorer2:
        return "2";
      case EModel.FordExplorer3:
        return "3";
      case EModel.FordExplorer4:
        return "4";
      case EModel.FordExplorer2011:
        return "Explorer (2011, 2019)";
      case EModel.FordExplorer6:
        return "6";
      case EModel.FordF15010:
        return "10";
      case EModel.FordF15011:
        return "11";
      case EModel.FordF15012:
        return "12";
      case EModel.FordF15013:
        return "13";
      case EModel.FordFiestaMK6:
        return "MK6";
      case EModel.FordFiestaMK7:
        return "MK7";
      case EModel.FordFocus1:
        return "1";
      case EModel.FordFocus2:
        return "2";
      case EModel.FordFocus3:
        return "Focus 2010";
      case EModel.FordFocus4:
        return "4";
      case EModel.FordFusion2:
        return "Fusion 2013";
      case EModel.FordTaurus6:
        return "6";
      case EModel.FordTransit:
        return "";
      case EModel.FordMustang4:
        return "4";
      case EModel.FordMustang5:
        return "5";
      case EModel.FordMustang6:
        return "Mustang 2015";
      case EModel.ChevroletAvalanche1:
        return "1";
      case EModel.ChevroletAvalanche2:
        return "2";
      case EModel.ChevroletAveo1:
        return "1";
      case EModel.ChevroletAveo2:
        return "2";
      case EModel.ChevroletAveo3:
        return "3";
      case EModel.ChevroletCaptiva1:
        return "1";
      case EModel.ChevroletCruze1:
        return "1";
      case EModel.ChevroletCruze2:
        return "Cruze 2016";
      case EModel.ChevroletEpicaV250:
        return "V250";
      case EModel.ChevroletEquinox1:
        return "1";
      case EModel.ChevroletEquinox2:
        return "2";
      case EModel.ChevroletEquinox3:
        return "3";
      case EModel.ChevroletMalibu7:
        return "7";
      case EModel.ChevroletMalibu8:
        return "8";
      case EModel.ChevroletMalibu9:
        return "Malibu 2016";
      case EModel.ChevroletNiva:
        return "";
      case EModel.ChevroletTahoe2:
        return "2";
      case EModel.ChevroletTahoe3:
        return "3";
      case EModel.ChevroletTahoe4:
        return "4";
      case EModel.ChevroletTahoe5:
        return "5";
      case EModel.ChevroletTrailBlazer1:
        return "1";
      case EModel.ChevroletTrailBlazer2:
        return "2";
      case EModel.ChevroletTrailBlazer3:
        return "3";
      case EModel.ChevroletVolt1:
        return "1";
      case EModel.ChevroletVolt2:
        return "2";
      case EModel.ChevroletCamaro5:
        return "5";
      case EModel.ChevroletCamaro6:
        return "Camaro 2015";
      case EModel.ChevroletCorvette:
        return "";
      case EModel.VolkswagenBeetleA4:
        return "A4";
      case EModel.VolkswagenBeetleA5:
        return "A5";
      case EModel.VolkswagenBora1998:
        return "1998";
      case EModel.VolkswagenBora4:
        return "4";
      case EModel.VolkswagenCaddy2:
        return "2";
      case EModel.VolkswagenCaddy3:
        return "3";
      case EModel.VolkswagenCaddy4:
        return "4";
      case EModel.VolkswagenCaddy5:
        return "5";
      case EModel.VolkswagenCrafter:
        return "";
      case EModel.VolkswagenGolf2:
        return "2";
      case EModel.VolkswagenGolf3:
        return "3";
      case EModel.VolkswagenGolf4:
        return "4";
      case EModel.VolkswagenGolf5:
        return "5";
      case EModel.VolkswagenGolf6:
        return "6";
      case EModel.VolkswagenGolf7:
        return "7";
      case EModel.VolkswagenGolf8:
        return "8";
      case EModel.VolkswagenJetta3:
        return "3";
      case EModel.VolkswagenJetta4:
        return "4";
      case EModel.VolkswagenJetta5:
        return "5";
      case EModel.VolkswagenJetta6:
        return "6";
      case EModel.VolkswagenJetta7:
        return "A7 (2018, 2023)";
      case EModel.VolkswagenPassatB5:
        return "B5";
      case EModel.VolkswagenPassatB6:
        return "B6";
      case EModel.VolkswagenPassatB7:
        return "B7";
      case EModel.VolkswagenPassatB8:
        return "B8 (2015, 2023)";
      case EModel.VolkswagenPassatCC1:
        return "";
      case EModel.VolkswagenPolo3:
        return "3";
      case EModel.VolkswagenPolo4:
        return "4";
      case EModel.VolkswagenPolo5:
        return "5";
      case EModel.VolkswagenPolo6:
        return "6";
      case EModel.VolkswagenRoutan:
        return "";
      case EModel.VolkswagenTiguan1:
        return "1";
      case EModel.VolkswagenTiguan2:
        return "2";
      case EModel.VolkswagenTouareg1:
        return "1";
      case EModel.VolkswagenTouareg2:
        return "2";
      case EModel.VolkswagenTouareg3:
        return "3";
      case EModel.VolkswagenTouran1:
        return "1";
      case EModel.VolkswagenTouran2:
        return "2";
      case EModel.VolkswagenTouran3:
        return "3";
      case EModel.VolkswagenTransporterT4:
        return "T4";
      case EModel.VolkswagenTransporterT5:
        return "T5";
      case EModel.VolkswagenTransporterT6:
        return "T6";
      case EModel.VolkswagenVento:
        return "";
      case EModel.VolkswagenID42020:
        return "ID.4 (2020, 2023)";
      case EModel.VolkswagenID62021:
        return "ID.6 (2021, 2023)";
      case EModel.OpelAstraF:
        return "F";
      case EModel.OpelAstraG:
        return "Astra G (1998, 2004)";
      case EModel.OpelAstraH:
        return "H";
      case EModel.OpelAstraJ:
        return "J";
      case EModel.OpelAstraK:
        return "K";
      case EModel.OpelComboC:
        return "C";
      case EModel.OpelComboD:
        return "D";
      case EModel.OpelComboE:
        return "E";
      case EModel.OpelComboPCMA:
        return "PCMA";
      case EModel.OpelCorsaA:
        return "A";
      case EModel.OpelCorsaB:
        return "B";
      case EModel.OpelCorsaC:
        return "C";
      case EModel.OpelCorsaD:
        return "D";
      case EModel.OpelCorsaE:
        return "E";
      case EModel.OpelCorsaF:
        return "F";
      case EModel.OpelFronteraA:
        return "A";
      case EModel.OpelFronteraB:
        return "B";
      case EModel.OpelInsignia1:
        return "1";
      case EModel.OpelInsignia2:
        return "2";
      case EModel.OpelMerivaA:
        return "A";
      case EModel.OpelMerivaB:
        return "B";
      case EModel.OpelOmegaA:
        return "A";
      case EModel.OpelOmegaB:
        return "B";
      case EModel.OpelSignum:
        return "";
      case EModel.OpelSintra:
        return "";
      case EModel.OpelVectraA:
        return "A";
      case EModel.OpelVectraB:
        return "B";
      case EModel.OpelVectraC:
        return "C";
      case EModel.OpelZafiraA:
        return "A";
      case EModel.OpelZafiraB:
        return "B";
      case EModel.OpelZafiraC:
        return "C";
      case EModel.MitsubishiAirtrek:
        return "";
      case EModel.MitsubishiChariot2:
        return "2";
      case EModel.MitsubishiChariot3:
        return "3";
      case EModel.MitsubishiColtZ30:
        return "Z30";
      case EModel.MitsubishiGalant8:
        return "8";
      case EModel.MitsubishiGalant9:
        return "9";
      case EModel.MitsubishiGrandis:
        return "";
      case EModel.MitsubishiLancer9:
        return "9";
      case EModel.MitsubishiLancer10:
        return "10";
      case EModel.MitsubishiMontero3:
        return "3";
      case EModel.MitsubishiMontero4:
        return "4";
      case EModel.MitsubishiOutlander1:
        return "1";
      case EModel.MitsubishiOutlander2:
        return "2";
      case EModel.MitsubishiOutlander3:
        return "3";
      case EModel.MitsubishiPajero2:
        return "2";
      case EModel.MitsubishiPajero3:
        return "3";
      case EModel.MitsubishiPajero2006:
        return "Pajero (2006, 2023)";
      case EModel.KIACadenza1:
        return "1";
      case EModel.KIACadenza2:
        return "2";
      case EModel.KIACerato1:
        return "1";
      case EModel.KIACerato2:
        return "2";
      case EModel.KIACerato3:
        return "3";
      case EModel.KIAForte1:
        return "1";
      case EModel.KIAForte2:
        return "2";
      case EModel.KIAForte2018:
        return "Forte 2018";
      case EModel.KIAK51:
        return "1";
      case EModel.KIAK52:
        return "2";
      case EModel.KIAK52019:
        return "K5 2019";
      case EModel.KIAOptima2:
        return "2";
      case EModel.KIAOptima3:
        return "3";
      case EModel.KIAOptima2015:
        return "Optima 2015";
      case EModel.KIARio2:
        return "2";
      case EModel.KIARio3:
        return "3";
      case EModel.KIARio4:
        return "4";
      case EModel.KIASedona1:
        return "1";
      case EModel.KIASedona2:
        return "2";
      case EModel.KIASedona3:
        return "3";
      case EModel.KIASorento1:
        return "1";
      case EModel.KIASorento2:
        return "2";
      case EModel.KIASorento3:
        return "3";
      case EModel.KIASorento4:
        return "4";
      case EModel.KIASportage2:
        return "2";
      case EModel.KIASportage3:
        return "3";
      case EModel.KIASportage2015:
        return "Sportage 2015";
      case EModel.KIAStinger2018:
        return "Stinger (2017, 2023)";
      case EModel.KIASorento2009:
        return "Sorento (2009, 2014)";
      case EModel.KIASorento2014:
        return "Sorento (2014, 2020)";
      case EModel.KIASorento2020:
        return "Sorento (2020, 2023)";
      case EModel.HyundaiAccent2:
        return "2";
      case EModel.HyundaiAccent3:
        return "3";
      case EModel.HyundaiAccent4:
        return "4";
      case EModel.HyundaiAccent5:
        return "5";
      case EModel.HyundaiCreta1:
        return "1";
      case EModel.HyundaiCreta2:
        return "2";
      case EModel.HyundaiElantra4:
        return "4";
      case EModel.HyundaiElantra5:
        return "5";
      case EModel.HyundaiElantra2015:
        return "Elantra (2015, 2020)";
      case EModel.HyundaiElantra2020:
        return "Elantra 2020";
      case EModel.HyundaiGenesis1:
        return "1";
      case EModel.HyundaiGenesis2:
        return "2";
      case EModel.HyundaiGenesisCoupe1:
        return "";
      case EModel.HyundaiIX351:
        return "";
      case EModel.HyundaiKona1:
        return "Kona (2017, 2023)";
      case EModel.HyundaiSantaFe1:
        return "1";
      case EModel.HyundaiSantaFe2:
        return "2";
      case EModel.HyundaiSantaFe2012:
        return "Santa FE (2012, 2018)";
      case EModel.HyundaiSantaFe2018:
        return "Santa FE (2018, 2023)";
      case EModel.HyundaiSolaris1:
        return "1";
      case EModel.HyundaiSolaris2:
        return "2";
      case EModel.HyundaiSonata5:
        return "5";
      case EModel.HyundaiSonata6:
        return "6";
      case EModel.HyundaiSonata7:
        return "7";
      case EModel.HyundaiSonata2014:
        return "Sonata (2014, 2019)";
      case EModel.HyundaiSonata2019:
        return "Sonata (2019, 2023)";
      case EModel.HyundaiTucson1:
        return "1";
      case EModel.HyundaiTucson2:
        return "2";
      case EModel.HyundaiTucson2015:
        return "Tucson (2015, 2021)";
      case EModel.HyundaiTucson2020:
        return "Tucson (2020, 2023)";
      case EModel.HyundaiTucson4:
        return "4";
      case EModel.HyundaiVeloster1:
        return "1";
      case EModel.HyundaiVeloster2:
        return "2";
      case EModel.HondaAccord7:
        return "7";
      case EModel.HondaAccord8:
        return "8";
      case EModel.HondaAccord9:
        return "9";
      case EModel.HondaAccord2017:
        return "Accord 2017";
      case EModel.HondaCivic7:
        return "7";
      case EModel.HondaCivic8:
        return "8";
      case EModel.HondaCivic9:
        return "9";
      case EModel.HondaCivic2015:
        return "Civic 2015";
      case EModel.HondaCivic11:
        return "11";
      case EModel.HondaCRV1:
        return "1";
      case EModel.HondaCRV2:
        return "2";
      case EModel.HondaCRV3:
        return "3";
      case EModel.HondaCRV4:
        return "4";
      case EModel.HondaCRV5:
        return "5";
      case EModel.HondaCrosstour1:
        return "";
      case EModel.HondaElysion1:
        return "1";
      case EModel.HondaFit1:
        return "1";
      case EModel.HondaFit2:
        return "2";
      case EModel.HondaFit3:
        return "3";
      case EModel.HondaHRV1:
        return "1";
      case EModel.HondaHRV2:
        return "2";
      case EModel.HondaOdyssey3:
        return "3";
      case EModel.HondaOdyssey4:
        return "4";
      case EModel.HondaOdyssey5:
        return "5";
      case EModel.HondaOdyssey6:
        return "6";
      case EModel.HondaPilot1:
        return "1";
      case EModel.HondaPilot2:
        return "2";
      case EModel.HondaPilot3:
        return "3";
      case EModel.HondaRidgeline1:
        return "1";
      case EModel.HondaRidgeline2:
        return "2";
      case EModel.HondaStepwgn2:
        return "2";
      case EModel.HondaStepwgn3:
        return "3";
      case EModel.HondaStepwgn4:
        return "4";
      case EModel.HondaStepwgn5:
        return "5";
      case EModel.MazdaAtenza1:
        return "1";
      case EModel.MazdaAtenza2:
        return "2";
      case EModel.MazdaAtenza3:
        return "3";
      case EModel.MazdaCX31:
        return "";
      case EModel.MazdaCX302019:
        return "Mazda CX30 (2019, 2023)";
      case EModel.MazdaCX51:
        return "1";
      case EModel.MazdaCX52:
        return "Mazda CX5 (2016, 2023)";
      case EModel.MazdaCX71:
        return "";
      case EModel.MazdaCX91:
        return "1";
      case EModel.MazdaCX92016:
        return "Mazda CX9 (2016, 2023)";
      case EModel.MazdaDemio1:
        return "1";
      case EModel.MazdaDemio2:
        return "2";
      case EModel.MazdaDemio3:
        return "3";
      case EModel.MazdaDemio4:
        return "4";
      case EModel.MazdaMPV2:
        return "2";
      case EModel.MazdaMPV3:
        return "3";
      case EModel.MazdaRX8:
        return "";
      case EModel.MazdaTribute1:
        return "1";
      case EModel.MazdaTribute2:
        return "2";
      case EModel.Mazda32:
        return "2";
      case EModel.Mazda32013:
        return "Mazda 3 (2013, 2019)";
      case EModel.Mazda32019:
        return "Mazda 3 (2019, 2023)";
      case EModel.Mazda51:
        return "1";
      case EModel.Mazda52:
        return "2";
      case EModel.Mazda61:
        return "1";
      case EModel.Mazda62:
        return "2";
      case EModel.Mazda62012:
        return "Mazda 6 (2012, 2023)";
      case EModel.JeepCompass2017:
        return "Compass 2017";
      case EModel.JeepCompass2020:
        return "Compass 2020";
      case EModel.JeepCherokeeKL:
        return "Cherokee KL 2014";
      case EModel.JeepGrandCherokee2017:
        return "Grand Cherokee 2017";
      case EModel.DodgeCharger2011:
        return "Charger (2011, 2023)";
      case EModel.DodgeChallenger2008:
        return "Challenger (2008, 2023)";
      case EModel.LandRoverRangeRover2012:
        return "Range Rover (2012, 2021)";
      case EModel.LandRoverRangeRover2022:
        return "Range Rover (2022, 2023)";
      case EModel.LandRoverRangeRoverSport2013:
        return "Range Rover Sport (2013, 2022)";
      case EModel.LandRoverRangeRoverSport2022:
        return "Range Rover Sport (2022, 2023)";
      case EModel.LandRoverRangeRoverVelar2017:
        return "Range Rover Velar (2017, 2023)";
    }
  }
}

export class EBodyType {
  static None = -2;
  static All = -1;
  static Sedan = 0;
  static Coupe = 1;
  static Hatchback = 2;
  static Convertible = 3;
  static SUV = 4;
  static Pickup = 5;
  static Begin = 0;
  static End = EBodyType.Pickup;

  static toString(make) {
    switch (make) {
      case EBodyType.None:
        return "???";
      case EBodyType.All:
        return "all";
      case EBodyType.Sedan:
        return "sedan";
      case EBodyType.Coupe:
        return "coupe";
      case EBodyType.Hatchback:
        return "hatchback";
      case EBodyType.Convertible:
        return "convertible";
      case EBodyType.SUV:
        return "suv";
      case EBodyType.Pickup:
        return "pickup";
    }

    return "";
  }
}

export class EEngineType {
  static None = -2;
  static All = -1;
  static Petrol = 0;
  static Diesel = 1;
  static Hybrid = 2;
  static Electro = 3;
  static End = EEngineType.Electro;

  static toString(make) {
    switch (make) {
      case EEngineType.None:
        return "???";
      case EEngineType.All:
        return "ALL";
      case EEngineType.Petrol:
        return "petrol";
      case EEngineType.Diesel:
        return "diesel";
      case EEngineType.Hybrid:
        return "hybrid";
      case EEngineType.Electro:
        return "electro";
    }

    return "";
  }
}

export class EDriveType {
  static None = -2;
  static All = -1;
  static RearWheelDrive = 0;
  static FrontWheelDrive = 1;
  static AllWheelDrive = 2;
  static End = 2;

  static toString(driveType) {
    switch (driveType) {
      case EDriveType.All:
        return "all";
      case EDriveType.RearWheelDrive:
        return "rear_wheel_drive";
      case EDriveType.FrontWheelDrive:
        return "front_wheel_drive";
      case EDriveType.AllWheelDrive:
        return "all_wheel_drive";
    }

    return "";
  }
}

export class ETransmission {
  static None = -2;
  static All = -1;
  static Automatic = 0;
  static Manual = 1;
  static Variator = 2;
  static End = ETransmission.Variator;

  static toString(make) {
    switch (make) {
      case ETransmission.None:
        return "???";
      case ETransmission.All:
        return "all";
      case ETransmission.Automatic:
        return "automatic";
      case ETransmission.Manual:
        return "manual";
      case ETransmission.Variator:
        return "variator";
    }

    return "";
  }
}

export class ECarColor {
  static None = -2;
  static All = -1;
  static White = 0;
  static Silver = 1;
  static Gray = 2;
  static Black = 3;
  static Brown = 4;
  static Gold = 5;
  static Red = 6;
  static Blue = 7;
  static Orange = 8;
  static Yellow = 9;
  static Green = 10;
  static Cyan = 11;
  static Maroon = 12;
  static Pink = 13;
  static Purple = 14;
  static End = ECarColor.Purple;

  static toString(make) {
    switch (make) {
      case ECarColor.None:
        return "???";
      case ECarColor.All:
        return "all";
      case ECarColor.White:
        return "white";
      case ECarColor.Silver:
        return "silver";
      case ECarColor.Gray:
        return "gray";
      case ECarColor.Black:
        return "black";
      case ECarColor.Brown:
        return "brown";
      case ECarColor.Gold:
        return "gold";
      case ECarColor.Red:
        return "red";
      case ECarColor.Blue:
        return "blue";
      case ECarColor.Orange:
        return "orange";
      case ECarColor.Yellow:
        return "yellow";
      case ECarColor.Green:
        return "green";
      case ECarColor.Cyan:
        return "cyan";
      case ECarColor.Maroon:
        return "maroon";
      case ECarColor.Pink:
        return "pink";
      case ECarColor.Purple:
        return "purple";
    }

    return "";
  }

  static toColor(make) {
    switch (make) {
      case ECarColor.None:
        return "";
      case ECarColor.All:
        return "all";
      case ECarColor.White:
        return "white";
      case ECarColor.Silver:
        return "#dbdbdb";
      case ECarColor.Gray:
        return "gray";
      case ECarColor.Black:
        return "black";
      case ECarColor.Brown:
        return "brown";
      case ECarColor.Gold:
        return "gold";
      case ECarColor.Red:
        return "red";
      case ECarColor.Blue:
        return "blue";
      case ECarColor.Orange:
        return "orange";
      case ECarColor.Yellow:
        return "yellow";
      case ECarColor.Green:
        return "green";
      case ECarColor.Cyan:
        return "cyan";
      case ECarColor.Maroon:
        return "maroon";
      case ECarColor.Pink:
        return "pink";
      case ECarColor.Purple:
        return "purple";
    }
  }
}

export class EAutoPartCategory {
  static None = -2;
  static All = -1;
  static EngineParts = 0;
  static BodyParts = 1;
  static Chassis = 2;
  static SteeringSystem = 3;
  static BrakingSystem = 4;
  static ExhaustSystem = 5;
  static FuelSystem = 6;
  static Transmission = 7;
  static ElectricalSystem = 8;
  static LightingAndOptics = 9;
  static Interior = 10;
  static Glasses = 11;
  static CoolingSystem = 12;
  static End = EAutoPartCategory.CoolingSystem;

  static toString(autoPartCategory) {
    switch (autoPartCategory) {
      case EAutoPartCategory.None:
        return "";
      case EAutoPartCategory.All:
        return "all";
      case EAutoPartCategory.EngineParts:
        return "engine_parts";
      case EAutoPartCategory.BodyParts:
        return "body_parts";
      case EAutoPartCategory.Chassis:
        return "chassis";
      case EAutoPartCategory.SteeringSystem:
        return "steering_system";
      case EAutoPartCategory.BrakingSystem:
        return "braking_system";
      case EAutoPartCategory.ExhaustSystem:
        return "exhaust_system";
      case EAutoPartCategory.FuelSystem:
        return "fuel_system";
      case EAutoPartCategory.Transmission:
        return "transmission";
      case EAutoPartCategory.ElectricalSystem:
        return "electrical_system";
      case EAutoPartCategory.LightingAndOptics:
        return "lighting_and_optics";
      case EAutoPartCategory.Interior:
        return "interior";
      case EAutoPartCategory.Glasses:
        return "glasses";
      case EAutoPartCategory.CoolingSystem:
        return "cooling_system";
      default:
        return "UNKNOWN";
    }
  }
}

export class EAutoPartNoteStatus {
  static New = 0;
  static Viewed = 1;
}

export class EProvince {
  static None = -2;
  static All = -1;
  static Erevan = 0;
  static Armavir = 1;
  static Ararat = 2;
  static Kotayk = 3;
  static Shirak = 4;
  static Lorri = 5;
  static Gegharkunik = 6;
  static Syunik = 7;
  static Aragatsotn = 8;
  static Tavush = 9;
  static VayotsDzor = 10;
  static Artsakh = 11;
  static End = 11;

  static toString(province) {
    switch (province) {
      case EProvince.None:
        return "???";
      case EProvince.All:
        return "all";
      case EProvince.Erevan:
        return "erevan";
      case EProvince.Armavir:
        return "armavir";
      case EProvince.Ararat:
        return "ararat";
      case EProvince.Kotayk:
        return "kotayk";
      case EProvince.Shirak:
        return "shirak";
      case EProvince.Lorri:
        return "lorri";
      case EProvince.Gegharkunik:
        return "gegharkunik";
      case EProvince.Syunik:
        return "syunik";
      case EProvince.Aragatsotn:
        return "aragatsotn";
      case EProvince.Tavush:
        return "tavush";
      case EProvince.VayotsDzor:
        return "vayots_dzor";
      case EProvince.Artsakh:
        return "artsakh";
      default:
        return "UNKNOWN";
    }
  }
}

export class ESubProvince {
  static ErevanAjapnyak = 0;
  static ErevanArabkir = 1;
  static ErevanAvan = 2;
  static ErevanDavitashen = 3;
  static ErevanErebuni = 4;
  static ErevanKanakerZeytun = 5;
  static ErevanKentron = 6;
  static ErevanMalatiaSebastia = 7;
  static ErevanNorNork = 8;
  static ErevanShengavit = 9;
  static ErevanNorkMarash = 10;
  static ErevanNubarashen = 11;

  static ArmavirArmavir = 12;
  static ArmavirEchmiadzin = 13;
  static ArmavirMerdzavan = 14;
  static ArmavirMetsamor = 15;
  static ArmavirMusaler = 16;
  static ArmavirParakar = 17;
  static ArmavirTairov = 18;
  static ArmavirAghvanatun = 19;
  static ArmavirAknalich = 20;
  static ArmavirAknashen = 21;
  static ArmavirAlashkert = 22;
  static ArmavirAmberd = 23;
  static ArmavirApaga = 24;
  static ArmavirAragats = 25;
  static ArmavirAraks = 26;
  static ArmavirArazap = 27;
  static ArmavirArevashat = 28;
  static ArmavirArevik = 29;
  static ArmavirArgavand = 30;
  static ArmavirArshaluys = 31;
  static ArmavirArtashar = 32;
  static ArmavirAygek = 33;
  static ArmavirBaghramyan = 34;
  static ArmavirBambakashat = 35;
  static ArmavirDalarik = 36;
  static ArmavirDoghs = 37;
  static ArmavirGai = 38;
  static ArmavirGeghakert = 39;
  static ArmavirGetashen = 40;
  static ArmavirHatsik = 41;
  static ArmavirHaykashen = 42;
  static ArmavirHaytagh = 43;
  static ArmavirHushakert = 44;
  static ArmavirJanfida = 45;
  static ArmavirJrarat = 46;
  static ArmavirKarakert = 47;
  static ArmavirKhanjyan = 48;
  static ArmavirLernagog = 49;
  static ArmavirLukashin = 50;
  static ArmavirMargara = 51;
  static ArmavirMayisyan = 52;
  static ArmavirMrgashat = 53;
  static ArmavirMrgastan = 54;
  static ArmavirNarlbandyan = 55;
  static ArmavirNorArmavir = 56;
  static ArmavirNorArtagers = 57;
  static ArmavirNorakert = 58;
  static ArmavirNorapat = 59;
  static ArmavirNoravan = 60;
  static ArmavirPshatavan = 61;
  static ArmavirPtghunk = 62;
  static ArmavirSardarapat = 63;
  static ArmavirShenavan = 64;
  static ArmavirShenik = 65;
  static ArmavirTandzut = 66;
  static ArmavirTaronik = 67;
  static ArmavirVanand = 68;
  static ArmavirVardashen = 69;
  static ArmavirYeghegnut = 70;
  static ArmavirYerashkahun = 71;
  static ArmavirYervandashat = 72;
  static ArmavirZartonk = 73;

  static AraratArtashat = 74;
  static AraratArarat = 75;
  static AraratArgavand = 76;
  static AraratAyntap = 77;
  static AraratGeghanist = 78;
  static AraratGetapnya = 79;
  static AraratHayanist = 80;
  static AraratHovtashat = 81;
  static AraratKhachpar = 82;
  static AraratMasis = 83;
  static AraratNorKharberd = 84;
  static AraratNorKyurin = 85;
  static AraratVedi = 86;
  static AraratAbovyan = 87;
  static AraratAralez = 88;
  static AraratArbat = 89;
  static AraratArevabuyr = 90;
  static AraratArevashat = 91;
  static AraratArmash = 92;
  static AraratAvshar = 93;
  static AraratAygavan = 94;
  static AraratAygepat = 95;
  static AraratAygezard = 96;
  static AraratAzatashen = 97;
  static AraratAzatavan = 98;
  static AraratBardzrashen = 99;
  static AraratBerdik = 100;
  static AraratBerkanush = 101;
  static AraratBurastan = 102;
  static AraratByuravan = 103;
  static AraratDarakert = 104;
  static AraratDarbnik = 105;
  static AraratDashtavan = 106;
  static AraratDeghzut = 107;
  static AraratDvin = 108;
  static AraratGhukasavan = 109;
  static AraratGinevet = 110;
  static AraratGoravan = 111;
  static AraratHovtashen = 112;
  static AraratJrahovit = 113;
  static AraratJrashen = 114;
  static AraratKaghtsrashen = 115;
  static AraratKanachut = 116;
  static AraratLanjazat = 117;
  static AraratLusarat = 118;
  static AraratLusashogh = 119;
  static AraratMarmarashen = 120;
  static AraratMkrtchyan = 121;
  static AraratMrgavet = 122;
  static AraratNizami = 123;
  static AraratNorKyank = 124;
  static AraratNorUghi = 125;
  static AraratNorabats = 126;
  static AraratNoramarg = 127;
  static AraratNorashen = 128;
  static AraratNoyakert = 129;
  static AraratNshavan = 130;
  static AraratParuyrSevak = 131;
  static AraratPokrVedi = 132;
  static AraratSayatNova = 133;
  static AraratShahumyan = 134;
  static AraratSipanik = 135;
  static AraratSisavan = 136;
  static AraratSurenavan = 137;
  static AraratTaperakan = 138;
  static AraratUrtsadzor = 139;
  static AraratVanashen = 140;
  static AraratVerinArtashat = 141;
  static AraratVerinDvin = 142;
  static AraratVosketap = 143;
  static AraratYeghegnavan = 144;
  static AraratYeraskh = 145;
  static AraratZangakatun = 146;
  static AraratZorak = 147;

  static KotaykAbovian = 148;
  static KotaykAghveran = 149;
  static KotaykAramus = 150;
  static KotaykArgel = 151;
  static KotaykArinj = 152;
  static KotaykArzni = 153;
  static KotaykBalahovit = 154;
  static KotaykBjni = 155;
  static KotaykByureghavan = 156;
  static KotaykCharentsavan = 157;
  static KotaykDzoraghbyur = 158;
  static KotaykGarni = 159;
  static KotaykGoght = 160;
  static KotaykHrazdan = 161;
  static KotaykJrvezh = 162;
  static KotaykKanakeravan = 163;
  static KotaykKasagh = 164;
  static KotaykKotayk = 165;
  static KotaykMayakovski = 166;
  static KotaykMrgashen = 167;
  static KotaykNorGeghi = 168;
  static KotaykNorHachen = 169;
  static KotaykNurnus = 170;
  static KotaykProshyan = 171;
  static KotaykPtghni = 172;
  static KotaykSolak = 173;
  static KotaykTsakhkadzor = 174;
  static KotaykYeghvard = 175;
  static KotaykZovuni = 176;
  static KotaykAghavnadzor = 177;
  static KotaykAkunk = 178;
  static KotaykAlapars = 179;
  static KotaykAragyugh = 180;
  static KotaykArzakan = 181;
  static KotaykBuzhakan = 182;
  static KotaykFantan = 183;
  static KotaykGeghadir = 184;
  static KotaykGeghard = 185;
  static KotaykGeghashen = 186;
  static KotaykGetamej = 187;
  static KotaykGetargel = 188;
  static KotaykHankavan = 189;
  static KotaykHatsavan = 190;
  static KotaykKaghsi = 191;
  static KotaykKamaris = 192;
  static KotaykKarashamb = 193;
  static KotaykLernanist = 194;
  static KotaykMarmarik = 195;
  static KotaykMeghradzor = 196;
  static KotaykNorArtamet = 197;
  static KotaykNorGyugh = 198;
  static KotaykNorYerznka = 199;
  static KotaykSevaberd = 200;
  static KotaykTeghenik = 201;
  static KotaykVerinPtghni = 202;
  static KotaykVoghjaberd = 203;
  static KotaykZar = 204;
  static KotaykZoravan = 205;
  static KotaykZovashen = 206;
  static KotaykZovk = 207;

  static ShirakGyumri = 208;
  static ShirakAkhuryan = 209;
  static ShirakArtik = 210;
  static ShirakMaralik = 211;
  static ShirakAghin = 212;
  static ShirakAmasia = 213;
  static ShirakAnipemza = 214;
  static ShirakAnushavan = 215;
  static ShirakArevik = 216;
  static ShirakArevshat = 217;
  static ShirakAshotsk = 218;
  static ShirakAzatan = 219;
  static ShirakBagravan = 220;
  static ShirakBavra = 221;
  static ShirakBerdashen = 222;
  static ShirakDzithankov = 223;
  static ShirakGetap = 224;
  static ShirakGharibjanyan = 225;
  static ShirakGusanagyugh = 226;
  static ShirakHatsik = 227;
  static ShirakHaykadzor = 228;
  static ShirakHaykavan = 229;
  static ShirakHayrenyats = 230;
  static ShirakHorom = 231;
  static ShirakHovtashen = 232;
  static ShirakHovtun = 233;
  static ShirakHovuni = 234;
  static ShirakIsahakyan = 235;
  static ShirakJajur = 236;
  static ShirakJrapi = 237;
  static ShirakJrarat = 238;
  static ShirakKakavasar = 239;
  static ShirakKaps = 240;
  static ShirakKaraberd = 241;
  static ShirakKeti = 242;
  static ShirakLanjik = 243;
  static ShirakLernakert = 244;
  static ShirakLusaghbyur = 245;
  static ShirakMayisyan = 246;
  static ShirakMeghrashat = 247;
  static ShirakMeghrashen = 248;
  static ShirakMetsMantash = 249;
  static ShirakMetsSepasar = 250;
  static ShirakMusayelyan = 251;
  static ShirakPemzashen = 252;
  static ShirakPokrMantash = 253;
  static ShirakSarakap = 254;
  static ShirakSarapat = 255;
  static ShirakSaratak = 256;
  static ShirakSarnaghbyur = 257;
  static ShirakShirak = 258;
  static ShirakTavshut = 259;

  static LorriVanadzor = 260;
  static LorriAlaverdi = 261;
  static LorriDsegh = 262;
  static LorriSpitak = 263;
  static LorriStepanavan = 264;
  static LorriTashir = 265;
  static LorriAgarak = 266;
  static LorriAkhtala = 267;
  static LorriAmrakits = 268;
  static LorriAntaramut = 269;
  static LorriArevatsag = 270;
  static LorriArjut = 271;
  static LorriChkalov = 272;
  static LorriChochkan = 273;
  static LorriDebet = 274;
  static LorriDzoragyugh = 275;
  static LorriDzoramut = 276;
  static LorriFioletovo = 277;
  static LorriGargar = 278;
  static LorriGyulakarak = 279;
  static LorriHagvi = 280;
  static LorriHartagyugh = 281;
  static LorriJrashen = 282;
  static LorriKarinj = 283;
  static LorriKatnajur = 284;
  static LorriKurtan = 285;
  static LorriLernahovit = 286;
  static LorriLernavan = 287;
  static LorriLorut = 288;
  static LorriLusaghbyur = 289;
  static LorriMargahovit = 290;
  static LorriMarts = 291;
  static LorriMetsParni = 292;
  static LorriMetsavan = 293;
  static LorriOdzun = 294;
  static LorriPambak = 295;
  static LorriPushkino = 296;
  static LorriSaramej = 297;
  static LorriSarchapet = 298;
  static LorriShamlugh = 299;
  static LorriShirakamut = 300;
  static LorriShnogh = 301;
  static LorriTeghut = 302;
  static LorriTsaghkaber = 303;
  static LorriTumanyan = 304;
  static LorriVahagni = 305;
  static LorriVardablur = 306;
  static LorriYeghegnut = 307;

  static GegharkunikChambarak = 308;
  static GegharkunikGavar = 309;
  static GegharkunikMartuni = 310;
  static GegharkunikSevan = 311;
  static GegharkunikVardenis = 312;
  static GegharkunikAkunk = 313;
  static GegharkunikArtanish = 314;
  static GegharkunikAstghadzor = 315;
  static GegharkunikChkalovka = 316;
  static GegharkunikDdmashen = 317;
  static GegharkunikDrakhtik = 318;
  static GegharkunikDzoragyugh = 319;
  static GegharkunikGandzak = 320;
  static GegharkunikGeghamasar = 321;
  static GegharkunikGeghamavan = 322;
  static GegharkunikGegharkunik = 323;
  static GegharkunikGeghhovit = 324;
  static GegharkunikKarchaghbyur = 325;
  static GegharkunikLanjaghbyur = 326;
  static GegharkunikKarmirGyugh = 327;
  static GegharkunikKhachaghbyur = 328;
  static GegharkunikLchap = 329;
  static GegharkunikLchashen = 330;
  static GegharkunikLichk = 331;
  static GegharkunikMadina = 332;
  static GegharkunikMetsMasrik = 333;
  static GegharkunikNerkinGetashen = 334;
  static GegharkunikNorakert = 335;
  static GegharkunikNoratus = 336;
  static GegharkunikPokrMasrik = 337;
  static GegharkunikSarukhan = 338;
  static GegharkunikShoghakat = 339;
  static GegharkunikTorfavan = 340;
  static GegharkunikTshaghkashen = 341;
  static GegharkunikTsakkar = 342;
  static GegharkunikTsapatagh = 343;
  static GegharkunikTsovagyugh = 344;
  static GegharkunikTsovak = 345;
  static GegharkunikTsovasar = 346;
  static GegharkunikTsovazard = 347;
  static GegharkunikTsovinar = 348;
  static GegharkunikVaghashen = 349;
  static GegharkunikVardadzor = 350;
  static GegharkunikVardenik = 351;
  static GegharkunikVarser = 352;
  static GegharkunikVerinGetashen = 353;
  static GegharkunikYeranos = 354;
  static GegharkunikZolakar = 355;
  static GegharkunikZovaber = 356;

  static SyunikGoris = 357;
  static SyunikKapan = 358;
  static SyunikMeghri = 359;
  static SyunikSisian = 360;
  static SyunikAgarak = 361;
  static SyunikAkhlatyan = 362;
  static SyunikAngeghakot = 363;
  static SyunikGorayk = 364;
  static SyunikKajaran = 365;
  static SyunikKhndzoresk = 366;
  static SyunikLernadzor = 367;
  static SyunikShinahayr = 368;
  static SyunikSyunik = 369;
  static SyunikTegh = 370;

  static AragatsotnAghdzk = 371;
  static AragatsotnAparan = 372;
  static AragatsotnAragats = 373;
  static AragatsotnAragatsavan = 374;
  static AragatsotnAshtarak = 375;
  static AragatsotnByurakan = 376;
  static AragatsotnKosh = 377;
  static AragatsotnOshakan = 378;
  static AragatsotnTalin = 379;
  static AragatsotnTsaghkahovit = 380;
  static AragatsotnUjan = 381;
  static AragatsotnVoskevaz = 382;
  static AragatsotnAgarak = 383;
  static AragatsotnAgarakavan = 384;
  static AragatsotnAlagyaz = 385;
  static AragatsotnAntarut = 386;
  static AragatsotnAragatsotn = 387;
  static AragatsotnArtashavan = 388;
  static AragatsotnAruch = 389;
  static AragatsotnAshnak = 390;
  static AragatsotnBazmaghbyur = 391;
  static AragatsotnKarbi = 392;
  static AragatsotnKatnaghbyur = 393;
  static AragatsotnMastara = 394;
  static AragatsotnMughni = 395;
  static AragatsotnNerkinBazmaberd = 396;
  static AragatsotnNorAmanos = 397;
  static AragatsotnNorYedesia = 398;
  static AragatsotnOhanavan = 399;
  static AragatsotnOrgov = 400;
  static AragatsotnParpi = 401;
  static AragatsotnPartizak = 402;
  static AragatsotnSaghmosavan = 403;
  static AragatsotnUshi = 404;

  static TavushBerd = 405;
  static TavushDilijan = 406;
  static TavushIjevan = 407;
  static TavushNoyemberyan = 408;
  static TavushAchajur = 409;
  static TavushArchis = 410;
  static TavushArtsvaberd = 411;
  static TavushAygedzor = 412;
  static TavushAygehovit = 413;
  static TavushAyrum = 414;
  static TavushAzatamut = 415;
  static TavushBagratashen = 416;
  static TavushBerdavan = 417;
  static TavushChinari = 418;
  static TavushChinchin = 419;
  static TavushChoratan = 420;
  static TavushDebetavan = 421;
  static TavushGandzakar = 422;
  static TavushGetahovit = 423;
  static TavushHaghartsin = 424;
  static TavushHaghtanak = 425;
  static TavushHovk = 426;
  static TavushItsakar = 427;
  static TavushKhashtarak = 428;
  static TavushKoghb = 429;
  static TavushKoti = 430;
  static TavushLchadzor = 431;
  static TavushMovses = 432;
  static TavushNerkinTsaghkavan = 433;
  static TavushNorashen = 434;
  static TavushParavakar = 435;
  static TavushSarighyugh = 436;
  static TavushSevkar = 437;
  static TavushTavush = 438;
  static TavushVerinKarmiraghbyur = 439;
  static TavushVerinTsaghkavan = 440;
  static TavushVoskepar = 441;
  static TavushVoskevan = 442;
  static TavushYenokavan = 443;

  static VayotsDzorJermuk = 444;
  static VayotsDzorVayk = 445;
  static VayotsDzorYeghegnadzor = 446;
  static VayotsDzorAgarakadzor = 447;
  static VayotsDzorAghavnadzor = 448;
  static VayotsDzorAreni = 449;
  static VayotsDzorArin = 450;
  static VayotsDzorArtabuynk = 451;
  static VayotsDzorAzatek = 452;
  static VayotsDzorChiva = 453;
  static VayotsDzorGetap = 454;
  static VayotsDzorGladzor = 455;
  static VayotsDzorKhachik = 456;
  static VayotsDzorMalishka = 457;
  static VayotsDzorRind = 458;
  static VayotsDzorSalli = 459;
  static VayotsDzorShatin = 460;
  static VayotsDzorVernashen = 461;
  static VayotsDzorYelpin = 462;
  static VayotsDzorZaritap = 463;

  static ArtsakhMartakerd = 464;
  static ArtsakhMartuni = 465;
  static ArtsakhStepanakert = 466;
  static ArtsakhAskeran = 467;
  static ArtsakhShaumyan = 468;
  static ArtsakhShushi = 469;
}

export class EEngine {
  static None = "none";
  static All = "all";

  // Bmw e46
  static BmwE46_316i = "bmwe46_316i";
  static BmwE46_318i = "bmwe46_318i";
  static BmwE46_320i = "bmwe46_320i";
  static BmwE46_323i = "bmwe46_323i";
  static BmwE46_325i = "bmwe46_325i";
  static BmwE46_328i = "bmwe46_328i";
  static BmwE46_330i = "bmwe46_330i";
  static BmwE46_m3 = "bmwe46_m3";

  // Bmw e90
  static BmwE90_316i = "bmwe90_316i";
  static BmwE90_318i = "bmwe90_318i";
  static BmwE90_320i = "bmwe90_320i";
  static BmwE90_323i = "bmwe90_323i";
  static BmwE90_325i = "bmwe90_325i";
  static BmwE90_328i = "bmwe90_328i";
  static BmwE90_330i = "bmwe90_330i";
  static BmwE90_335i = "bmwe90_335i";
  static BmwE90_m3 = "bmwe90_m3";

  // Bmw e92
  static BmwE92_320i = "bmwe92_320i";
  static BmwE92_325i = "bmwe92_325i";
  static BmwE92_328i = "bmwe92_328i";
  static BmwE92_330i = "bmwe92_330i";
  static BmwE92_335i = "bmwe92_335i";
  static BmwE92_335is = "bmwe92_335is";
  static BmwE92_m3 = "bmwe92_m3";

  // Bmw f30
  static BmwF30_316i = "bmwf30_316i";
  static BmwF30_318i = "bmwf30_318i";
  static BmwF30_320i = "bmwf30_320i";
  static BmwF30_328i = "bmwf30_328i";
  static BmwF30_330i = "bmwf30_330i";
  static BmwF30_335i = "bmwf30_335i";
  static BmwF30_340i = "bmwf30_340i";
  static BmwF30_m3 = "bmwf30_m3";

  // Bmw g20
  static BmwG20_318i = "bmwg20_318i";
  static BmwG20_320i = "bmwg20_320i";
  static BmwG20_325i = "bmwg20_325i";
  static BmwG20_320e = "bmwg20_320e";
  static BmwG20_330i = "bmwg20_330i";
  static BmwG20_330e = "bmwg20_330e";
  static BmwG20_M340i = "bmwg20_m340i";
  static BmwG20_b3 = "bmwg20_b3";
  static BmwG20_m3 = "bmwg20_m3";
  static BmwG20_318d = "bmwg20_318d";
  static BmwG20_320d = "BmwG20_320d";
  static BmwG20_330d = "BmwG20_330d";
  static BmwG20_340d = "BmwG20_340d";
  static BmwG20_d3 = "BmwG20_d3";

  // Bmw 4 series
  // Bmw f32
  static BmwF32_418i = "bmwf32_418i";
  static BmwF32_420i = "bmwf32_420i";
  static BmwF32_428i = "bmwf32_428i";
  static BmwF32_430i = "bmwf32_430i";
  static BmwF32_435i = "bmwf32_435i";
  static BmwF32_440i = "bmwf32_440i";
  static BmwF32_m4 = "bmwf32_m4";

  // Bmw g22
  static BmwG22_420i = "bmwg22_420i";
  static BmwG22_430i = "bmwg22_430i";
  static BmwG22_M440i = "bmwg22_m440i";
  static BmwG22_m4 = "bmwg22_m4";

  // Bmw 5 series
  // Bmw e60
  static BmwE60_520i = "bmwe60_520i";
  static BmwE60_523i = "bmwe60_523i";
  static BmwE60_525i = "bmwe60_525i";
  static BmwE60_528i = "bmwe60_528i";
  static BmwE60_530i = "bmwe60_530i";
  static BmwE60_535i = "bmwe60_535i";
  static BmwE60_540i = "bmwe60_540i";
  static BmwE60_545i = "bmwe60_545i";
  static BmwE60_550i = "bmwe60_550i";
  static BmwE60_m5 = "bmwe60_m5";

  // Bmw f10
  static BmwF10_520i = "bmwf10_520i";
  static BmwF10_523i = "bmwf10_523i";
  static BmwF10_528i = "bmwf10_528i";
  static BmwF10_530i = "bmwf10_530i";
  static BmwF10_535i = "bmwf10_535i";
  static BmwF10_550i = "bmwf10_550i";
  static BmwF10_m5 = "bmwf10_m5";

  // Bmw g30
  static BmwG30_520i = "bmwG30_520i";
  static BmwG30_520e = "bmwG30_520e";
  static BmwG30_530i = "bmwG30_530i";
  static BmwG30_530e = "bmwG30_530e";
  static BmwG30_540i = "bmwG30_540i";
  static BmwG30_545e = "bmwG30_545e";
  static BmwG30_M550i = "bmwG30_M550i";
  static BmwG30_m5 = "bmwG30_m5";
  static BmwG30_518d = "bmwG30_518d";
  static BmwG30_520d = "bmwG30_520d";
  static BmwG30_523d = "bmwG30_523d";
  static BmwG30_525d = "bmwG30_525d";
  static BmwG30_530d = "bmwG30_530d";
  static BmwG30_540d = "bmwG30_540d";
  static BmwG30_550d = "bmwG30_550d";

  // Bmw 6 series
  // Bmw e63
  static BmwE63_630i = "bmwe63_630i";
  static BmwE63_645i = "bmwe63_645i";
  static BmwE63_650i = "bmwe63_650i";
  static BmwE63_m6 = "bmwe63_m6";

  // Bmw f12
  static BmwF12_640i = "bmwf12_640i";
  static BmwF12_650i = "bmwf12_650i";
  static BmwF12_m6 = "bmwf12_m6";

  // Bmw 7 series
  // Bmw f01
  static BmwF01_730i = "bmwf01_730i";
  static BmwF01_740i = "bmwf01_740i";
  static BmwF01_750i = "bmwf01_750i";
  static BmwF01_760i = "bmwf01_760i";
  static BmwF01_ActiveHybrid7 = "bmwf01_activehybrid7";

  // Bmw g11
  static BmwG11_730i = "bmwg11_730i";
  static BmwG11_740i = "bmwg11_740i";
  static BmwG11_740e = "bmwg11_740e";
  static BmwG11_745e = "bmwg11_745e";
  static BmwG11_750i = "bmwg11_750i";
  static BmwG11_M760i = "bmwg11_M760i";

  // Bmw g15
  static BmwG15_840i = "bmwg15_840i";
  static BmwG15_850i = "bmwg15_850i";
  static BmwG15_m8 = "bmwg15_m8";
  static BmwG15_m8c = "bmwg15_m8c";
  static BmwG15_b8 = "bmwg15_b8";

  // Bmw x5 e53
  static BmwX5E53_30 = "bmwx5e53_30";
  static BmwX5E53_44 = "bmwx5e53_44";
  static BmwX5E53_46 = "bmwx5e53_46";
  static BmwX5E53_48 = "bmwx5e53_48";

  // Bmw x5 e70
  static BmwX5E70_30 = "bmwx5e70_30";
  static BmwX5E70_35 = "bmwx5e70_35";
  static BmwX5E70_48 = "bmwx5e70_48";
  static BmwX5E70_50 = "bmwx5e70_50";
  static BmwX5E70_m = "bmwx5e70_m";

  // Bmw x5 f16
  static BmwX5F15_35 = "bmwx5f15_35";
  static BmwX5F15_40e = "bmwx5f15_40e";
  static BmwX5F15_50 = "bmwx5f15_50";

  // Bmw x5 g05
  static BmwX5G05_30 = "bmwx5g05_30";
  static BmwX5G05_40 = "bmwx5g05_40";
  static BmwX5G05_45e = "bmwx5g05_45e";
  static BmwX5G05_50e = "bmwx5g05_50e";
  static BmwX5G05_50 = "bmwx5g05_50";
  static BmwX5G05_M50 = "bmwx5g05_m50";
  static BmwX5G05_M = "bmwx5g05_m";
  static BmwX5G05_MC = "bmwx5g05_mc";
  static BmwX5G05_25d = "bmwx5g05_25d";
  static BmwX5G05_30d = "bmwx5g05_30d";
  static BmwX5G05_40d = "bmwx5g05_40d";
  static BmwX5G05_50d = "bmwx5g05_50d";

  // Bmw x6 e71
  static BmwX6E71_35 = "bmwx6e71_35";
  static BmwX6E71_50 = "bmwx6e71_50";
  static BmwX6E71_M = "bmwx6e71_m";
  static BmwX6E71_h = "bmwx6e71_h";

  // Bmw x6 f16
  static BmwX6F16_35 = "bmwx6f16_35";
  static BmwX6F16_50 = "bmwx6f16_50";
  static BmwX6F16_m = "bmwx6f16_m";
  // Bmw x6 g06
  static BmwX6G06_40 = "bmwx6g06_40";
  static BmwX6G06_m50 = "bmwx6g06_m50";
  static BmwX6G06_m60 = "bmwx6g06_m60";
  static BmwX6G06_m = "bmwx6g06_m";
  static BmwX6G06_mc = "bmwx6g06_mc";

  // Mercedes Benz
  // W203
  static MercBenzW203_c180 = "mercbenz203_c180";
  static MercBenzW203_c200 = "mercbenz203_c200";
  static MercBenzW203_c230 = "mercbenz203_c230";
  static MercBenzW203_c240 = "mercbenz203_c240";
  static MercBenzW203_c280 = "mercbenz203_c280";
  static MercBenzW203_c320 = "mercbenz203_c320";
  static MercBenzW203_c350 = "mercbenz203_c350";
  static MercBenzW203_c32_amg = "mercbenz203_c32amg";
  static MercBenzW203_c55_amg = "mercbenz203_c55amg";

  // W204
  static MercBenzW204_c180 = "mercbenz204_c180";
  static MercBenzW204_c200 = "mercbenz204_c200";
  static MercBenzW204_c230 = "mercbenz204_c230";
  static MercBenzW204_c250 = "mercbenz204_c250";
  static MercBenzW204_c280 = "mercbenz204_c280";
  static MercBenzW204_c300 = "mercbenz204_c300";
  static MercBenzW204_c350 = "mercbenz204_c350";
  static MercBenzW204_c63_amg = "mercbenz204_c63amg";

  // W205
  static MercBenzW205_c160 = "mercbenz205_c160";
  static MercBenzW205_c180 = "mercbenz205_c180";
  static MercBenzW205_c200 = "mercbenz205_c200";
  static MercBenzW205_c250 = "mercbenz205_c250";
  static MercBenzW205_c300 = "mercbenz205_c300";
  static MercBenzW205_c400 = "mercbenz205_c400";
  static MercBenzW205_c450 = "mercbenz205_c450";
  static MercBenzW205_c43_amg = "mercbenz205_c43amg";
  static MercBenzW205_c63_amg = "mercbenz205_c63amg";

  // W206
  static MercBenzW206_c180 = "mercbenz206_c180";
  static MercBenzW206_c200 = "mercbenz206_c200";
  static MercBenzW206_c260 = "mercbenz206_c260";
  static MercBenzW206_c300 = "mercbenz206_c300";
  static MercBenzW206_c43_amg = "mercbenz206_c43amg";
  static MercBenzW206_c63_amg = "mercbenz206_c63amg";

  // E class
  static MercBenzW211_e200 = "mercbenz211_e200";
  static MercBenzW211_e230 = "mercbenz211_e230";
  static MercBenzW211_e240 = "mercbenz211_e240";
  static MercBenzW211_e280 = "mercbenz211_e280";
  static MercBenzW211_e320 = "mercbenz211_e320";
  static MercBenzW211_e350 = "mercbenz211_e350";
  static MercBenzW211_e500 = "mercbenz211_e500";
  static MercBenzW211_e550 = "mercbenz211_e550";
  static MercBenzW211_e55_amg = "mercbenz211_e55amg";
  static MercBenzW211_e63_amg = "mercbenz211_e63amg";

  // W212
  static MercBenzW212_e200 = "mercbenz212_e200";
  static MercBenzW212_e250 = "mercbenz212_e250";
  static MercBenzW212_e300 = "mercbenz212_e300";
  static MercBenzW212_e350 = "mercbenz212_e350";
  static MercBenzW212_e400 = "mercbenz212_e400";
  static MercBenzW212_e500 = "mercbenz212_e500";
  static MercBenzW212_e63_amg = "mercbenz212_e63amg";

  // W213
  static MercBenzW213_e180 = "mercbenz213_e180";
  static MercBenzW213_e200 = "mercbenz213_e200";
  static MercBenzW213_e250 = "mercbenz213_e250";
  static MercBenzW213_e300 = "mercbenz213_e300";
  static MercBenzW213_e350 = "mercbenz213_e350";
  static MercBenzW213_e400 = "mercbenz213_e400";
  static MercBenzW213_e450 = "mercbenz213_e450";
  static MercBenzW213_e43_amg = "mercbenz213_e43amg";
  static MercBenzW213_e53_amg = "mercbenz213_e53amg";
  static MercBenzW213_e63_amg = "mercbenz213_e63amg";
  static MercBenzW213_e200d = "mercbenz213_e200d";
  static MercBenzW213_e220d = "mercbenz213_e220d";
  static MercBenzW213_e300d = "mercbenz213_e300d";
  static MercBenzW213_e350d = "mercbenz213_e350d";
  static MercBenzW213_e400d = "mercbenz213_e400d";

  // S class
  static MercBenzW221_s300 = "mercbenz221_s300";
  static MercBenzW221_s350 = "mercbenz221_s350";
  static MercBenzW221_s400 = "mercbenz221_s400";
  static MercBenzW221_s450 = "mercbenz221_s450";
  static MercBenzW221_s500 = "mercbenz221_s500";
  static MercBenzW221_s550 = "mercbenz221_s550";
  static MercBenzW221_s600 = "mercbenz221_s600";
  static MercBenzW221_s63_amg = "mercbenz221_e63amg";
  static MercBenzW221_s65_amg = "mercbenz221_e65amg";

  // w222
  static MercBenzW222_s400 = "mercbenz222_s400";
  static MercBenzW222_s450 = "mercbenz222_s450";
  static MercBenzW222_s500 = "mercbenz222_s500";
  static MercBenzW222_s560 = "mercbenz222_s560";
  static MercBenzW222_s600 = "mercbenz222_s600";
  static MercBenzW222_s63_amg = "mercbenz221_e63amg";
  static MercBenzW222_s65_amg = "mercbenz221_e65amg";

  // w223
  static MercBenzW223_s450 = "mercbenz223_s450";
  static MercBenzW223_s500 = "mercbenz223_s500";
  static MercBenzW223_s580 = "mercbenz223_s580";

  // CLA
  // C117
  static MercBenzC117_CLA180 = "mercbenzc117_cla180";
  static MercBenzC117_CLA200 = "mercbenzc117_cla200";
  static MercBenzC117_CLA220 = "mercbenzc117_cla220";
  static MercBenzC117_CLA250 = "mercbenzc117_cla250";
  static MercBenzC117_CLA45AMG = "mercbenzc117_cla45amg";

  // C118
  static MercBenzC118_CLA180 = "mercbenzc118_cla180";
  static MercBenzC118_CLA200 = "mercbenzc118_cla200";
  static MercBenzC118_CLA220 = "mercbenzc118_cla220";
  static MercBenzC118_CLA250 = "mercbenzc118_cla250";
  static MercBenzC118_CLA35AMG = "mercbenzc118_cla35amg";
  static MercBenzC118_CLA45AMG = "mercbenzc118_cla45amg";

  // CLS
  // C219
  static MercBenzC219_CLS350 = "mercbenzc219_cls350";
  static MercBenzC219_CLS500 = "mercbenzc219_cls500";
  static MercBenzC219_CLS550 = "mercbenzc219_cls550";
  static MercBenzC219_CLS55AMG = "mercbenzc219_cls55amg";
  static MercBenzC219_CLS63AMG = "mercbenzc219_cls63amg";

  // C218
  static MercBenzC218_CLS300 = "mercbenzc218_cls300";
  static MercBenzC218_CLS350 = "mercbenzc218_cls350";
  static MercBenzC218_CLS400 = "mercbenzc218_cls400";
  static MercBenzC218_CLS500 = "mercbenzc218_cls500";
  static MercBenzC218_CLS63AMG = "mercbenzc218_cls63amg";

  // C256
  static MercBenzC256_CLS350 = "mercbenzc256_cls350";
  static MercBenzC256_CLS450 = "mercbenzc256_cls450";
  static MercBenzC256_CLS53AMG = "mercbenzc256_cls53amg";

  // GLC
  // x253
  static MercBenzX253_GLC200 = "mercbenzx253_glc200";
  static MercBenzX253_GLC250 = "mercbenzx253_glc250";
  static MercBenzX253_GLC300 = "mercbenzx253_glc300";
  static MercBenzX253_GLC300E = "mercbenzx253_glc300e";
  static MercBenzX253_GLC350E = "mercbenzx253_glc350e";
  static MercBenzX253_GLC43 = "mercbenzx253_glc43";
  static MercBenzX253_GLC63 = "mercbenzx253_glc63";

  // c253
  static MercBenzC253_GLC250 = "mercbenzc253_glc250";
  static MercBenzC253_GLC300 = "mercbenzc253_glc300";
  static MercBenzC253_GLC350E = "mercbenzc253_glc350e";
  static MercBenzC253_GLC43 = "mercbenzc253_glc43";
  static MercBenzC253_GLC63 = "mercbenzc253_glc63";

  // gle
  // w166
  static MercBenzW166_GLE400 = "mercbenzw166_gle400";
  static MercBenzW166_GLE450 = "mercbenzw166_gle450";
  static MercBenzW166_GLE400 = "mercbenzw166_gle400";
  static MercBenzW166_GLE500 = "mercbenzw166_gle500";
  static MercBenzW166_GLE550 = "mercbenzw166_gle550";
  static MercBenzW166_GLE43AMG = "mercbenzw166_gle43amg";
  static MercBenzW166_GLE63AMG = "mercbenzw166_gle63amg";

  // v167
  static MercBenzV167_GLE350 = "mercbenzv167_gle350";
  static MercBenzV167_GLE400 = "mercbenzv167_gle400";
  static MercBenzV167_GLE350E = "mercbenzv167_gle350e";
  static MercBenzV167_GLE400E = "mercbenzv167_gle400e";
  static MercBenzV167_GLE450 = "mercbenzv167_gle450";
  static MercBenzV167_GLE53AMG = "mercbenzv167_gle53amg";
  static MercBenzV167_GLE580 = "mercbenzv167_gle580";
  static MercBenzV167_GLE63AMG = "mercbenzv167_gle63amg";

  // gle coupe
  // c292
  static MercBenzC292_GLE400 = "mercbenzc292_gle400";
  static MercBenzC292_GLE450 = "mercbenzc292_gle450";
  static MercBenzC292_GLE400 = "mercbenzc292_gle400";
  static MercBenzC292_GLE500 = "mercbenzc292_gle500";
  static MercBenzC292_GLE550 = "mercbenzc292_gle550";
  static MercBenzC292_GLE43AMG = "mercbenzc292_gle43amg";
  static MercBenzC292_GLE63AMG = "mercbenzc292_gle63amg";

  // c167
  static MercBenzC167_GLE350 = "mercbenzс167_gle350";
  static MercBenzC167_GLE400 = "mercbenzс167_gle400";
  static MercBenzC167_GLE350E = "mercbenzс167_gle350e";
  static MercBenzC167_GLE400E = "mercbenzс167_gle400e";
  static MercBenzC167_GLE450 = "mercbenzс167_gle450";
  static MercBenzC167_GLE53AMG = "mercbenzс167_gle53amg";
  static MercBenzC167_GLE580 = "mercbenzс167_gle580";
  static MercBenzC167_GLE63AMG = "mercbenzс167_gle63amg";

  // gl
  // x166
  static MercBenzX166_GL450 = "mercbenzx166_gl450";
  static MercBenzX166_GL550 = "mercbenzx166_gl550";
  static MercBenzX166_GL63AMG = "mercbenzx166_gl63amg";

  // gls
  // x166
  static MercBenzX166_GLS450 = "mercbenzx166_gls450";
  static MercBenzX166_GLS550 = "mercbenzx166_gls550";
  static MercBenzX166_GLS63AMG = "mercbenzx166_gls63amg";

  // x167
  static MercBenzX167_GLS450 = "mercbenzx167_gls450";
  static MercBenzX167_GLS580 = "mercbenzx167_gls580";
  static MercBenzX167_GLS600 = "mercbenzx167_gls600";
  static MercBenzX167_GLS63AMG = "mercbenzx167_gls63amg";

  // w463
  static MercBenzGW463_32 = "mercbenzgw463_32";
  static MercBenzGW463_50 = "mercbenzgw463_50";
  static MercBenzGW463_55 = "mercbenzgw463_55";
  static MercBenzGW463_55amg = "mercbenzgw463_55amg";
  static MercBenzGW463_63amg = "mercbenzgw463_63amg";
  static MercBenzGW463_65amg = "mercbenzgw463_65amg";
  static MercBenzGW463_mb = "mercbenzgw463_mb";

  // w463
  static MercBenzGW4632_50 = "mercbenzgw4632_50";
  static MercBenzGW4632_55 = "mercbenzgw4632_55";
  static MercBenzGW4632_63 = "mercbenzgw4632_63";

  //Jeep
  // Compass
  static JeepCompass2017_14 = "jeepcompass2017_14";
  static JeepCompass2017_20 = "jeepcompass2017_20";
  static JeepCompass2020_190 = "jeepcompass2020_190";
  static JeepCompass2020_240 = "jeepcompass2020_240";
  static JeepCompass2020_240th = "jeepcompass2020_240th";

  // Cherokee
  static JeepCherokeeKL_24_multi = "jeepcherokeekl_24_multi";
  static JeepCherokeeKL_24 = "jeepcherokeekl_24";
  static JeepCherokeeKL_20 = "jeepcherokeekl_20";
  static JeepCherokeeKL_32 = "jeepcherokeekl_32";

  // Grand Cherokee
  static JeepGrandCherokee2017_36 = "jeepgrandcherokee2017_36";
  static JeepGrandCherokee2017_57 = "jeepgrandcherokee2017_57";
  static JeepGrandCherokee2017_62 = "jeepgrandcherokee2017_62";
  static JeepGrandCherokee2017_64 = "jeepgrandcherokee2017_64";

  // Ford Focus 3
  static FordFocus3_10 = "fordfocus3_10";
  static FordFocus3_20 = "fordfocus3_20";
  static FordFocus3_20st = "fordfocus3_20st";
  static FordFocus3_23rs = "fordfocus3_23rs";

  // Ford Fusion
  static FordFusion2_15 = "fordfusion2_15";
  static FordFusion2_20h = "fordfusion2_20h";
  static FordFusion2_20 = "fordfusion2_20";
  static FordFusion2_25 = "fordfusion2_25";
  static FordFusion2_27 = "fordfusion2_27";

  // Ford Mustang 2015
  static FordMustang2015_37 = "fordmustang2015_37";
  static FordMustang2015_23 = "fordmustang2015_23";
  static FordMustang2015_gt = "fordmustang2015_gt";
  static FordMustang2015_350 = "fordmustang2015_350";
  static FordMustang2015_500 = "fordmustang2015_500";

  // Ford Explorer 2011
  static FordExplorer2011_20 = "fordexplorer2011_20";
  static FordExplorer2011_23 = "fordexplorer2011_23";
  static FordExplorer2011_35 = "fordexplorer2011_35";
  static FordExplorer2011_35t = "fordexplorer2011_35t";

  // Chevrolet
  // Cruze 2016
  static ChevroletCruze2016_14 = "chevroletcruze2016_14";

  // Malibu 2016
  static ChevroletMalibu2016_18h = "chevroletmalibu2016_18h";
  static ChevroletMalibu2016_15t = "chevroletmalibu2016_15t";
  static ChevroletMalibu2016_20t = "chevroletmalibu2016_20t";

  // Camaro 2015
  static ChevroletCamaro2015_20t = "chevroletcamaro2015_20t";
  static ChevroletCamaro2015_36 = "chevroletcamaro2015_36";
  static ChevroletCamaro2015_62 = "chevroletcamaro2015_62";

  // Toyota
  // Corolla 2018
  static ToyotaCorolla2018_18 = "ToyotaCorolla2018_18";
  static ToyotaCorolla2018_18h = "ToyotaCorolla2018_18h";
  static ToyotaCorolla2018_20 = "ToyotaCorolla2018_20";

  // Camry 2007
  static ToyotaCamryXV40_24 = "toyotacamryxv40_24";
  static ToyotaCamryXV40_24h = "toyotacamryxv40_24h";
  static ToyotaCamryXV40_25 = "toyotacamryxv40_25";
  static ToyotaCamryXV40_35 = "toyotacamryxv40_35";

  // Camry 2011
  static ToyotaCamryXV50_25 = "toyotacamryxv50_25";
  static ToyotaCamryXV50_35 = "toyotacamryxv50_35";

  // Camry 2017
  static ToyotaCamryXV70_20 = "toyotacamryxv70_20";
  static ToyotaCamryXV70_25 = "toyotacamryxv70_25";
  static ToyotaCamryXV70_35 = "toyotacamryxv70_35";

  // Rav4 2018
  static ToyotaRav4XA50_20 = "toyotarav4xa50_20";
  static ToyotaRav4XA50_25 = "toyotarav4xa50_25";
  static ToyotaRav4XA50_25h = "toyotarav4xa50_25h";
  static ToyotaRav4XA50_25h2 = "toyotarav4xa50_25h2";

  // Prado 2009
  static ToyotaPrado2009_27 = "toyotaprado2009_27";
  static ToyotaPrado2009_40 = "toyotaprado2009_40";

  // Land cruiser 2008
  static ToyotaLandCruiser200_40 = "toyotalandcruiser200_40";
  static ToyotaLandCruiser200_46 = "toyotalandcruiser200_46";
  static ToyotaLandCruiser200_47 = "toyotalandcruiser200_47";
  static ToyotaLandCruiser200_57 = "toyotalandcruiser200_57";

  // Land cruiser 2021
  static ToyotaLandCruiser300_34 = "toyotalandcruiser300_34";
  static ToyotaLandCruiser300_40 = "toyotalandcruiser300_40";

  // Nissan
  // Sentra 2019
  static NissanSentra2019_20 = "nissansentra2019_20";

  // Altima 2013
  static NissanAltima2013_25 = "nissanaltima2013_25";
  static NissanAltima2013_35 = "nissanaltima2013_35";

  // Altima 2019
  static NissanAltima2019_25 = "nissanaltima2019_25";
  static NissanAltima2019_20t = "nissanaltima2019_20t";

  // Maxima 2008
  static NissanMaxima2008_35 = "nissanmaxima2008_35";
  // Maxima 2014
  static NissanMaxima2014_25 = "nissanmaxima2014_25";
  static NissanMaxima2014_35 = "nissanmaxima2014_35";

  // Rogue 2013
  static NissanRogue2013_25 = "nissanrogue2013_25";
  static NissanRogue2020_25 = "nissanrogue2020_25";
  static NissanRogue2020_15t = "nissanrogue2020_15t";

  // Honda
  // Civic 2015
  static HondaCivic2015_15t = "hondacivic2015_15t";
  static HondaCivic2015_20 = "hondacivic2015_20";
  static HondaCivic2015_16 = "hondacivic2015_16";
  static HondaCivic2015_18 = "hondacivic2015_18";
  static HondaCivic2015_10t = "hondacivic2015_10t";
  static HondaCivic2015_TypeR = "hondacivic2015_typer";

  // Accord 2017
  static HondaAccord2017_15 = "hondaaccord2017_15";
  static HondaAccord2017_20 = "hondaaccord2017_20";

  // Kia 2018
  static KIAForte2018_14 = "kiaforte2018_14";
  static KIAForte2018_15 = "kiaforte2018_15";
  static KIAForte2018_16 = "kiaforte2018_16";
  static KIAForte2018_20 = "kiaforte2018_20";
  static KIAForte2018_16h = "kiaforte2018_16h";

  // Optima 2015
  static KIAOptima2015_16 = "kiaoptima2015_16";
  static KIAOptima2015_20 = "kiaoptima2015_20";
  static KIAOptima2015_24 = "kiaoptima2015_24";

  // K5
  static KIAK5_15 = "kiak5_15";
  static KIAK5_16 = "kiak5_16";
  static KIAK5_20 = "kiak5_20";
  static KIAK5_25 = "kiak5_25";

  // Stinger
  static KIAStinger2018_20 = "kiastinger2018_20";
  static KIAStinger2018_25 = "kiastinger2018_25";
  static KIAStinger2018_33 = "kiastinger2018_33";

  // Sportage 2015
  static KIASportage2015_16 = "kiasportage2015_16";
  static KIASportage2015_20 = "kiasportage2015_20";
  static KIASportage2015_24 = "kiasportage2015_24";

  // Sorento 2009
  static KIASorento2009_24 = "kiasorento2009_24";
  static KIASorento2009_33 = "kiasorento2009_33";
  static KIASorento2009_35 = "kiasorento2009_35";

  // Sorento 2014
  static KIASorento2014_20 = "kiasorento2014_20";
  static KIASorento2014_24 = "kiasorento2014_24";
  static KIASorento2014_33 = "kiasorento2014_33";

  // Sorento 2020
  static KIASorento2020_25 = "kiasorento2020_25";
  static KIASorento2020_35 = "kiasorento2020_35";
  static KIASorento2020_16h = "kiasorento2020_16h";

  // Hyundai
  // Elantra 2015
  static HyundaiElantra2015_14 = "hyundaielantra2015_14";
  static HyundaiElantra2015_16 = "hyundaielantra2015_16";
  static HyundaiElantra2015_20 = "hyundaielantra2015_20";

  // Elantra 2020
  static HyundaiElantra2020_14 = "hyundaielantra2020_14";
  static HyundaiElantra2020_15 = "hyundaielantra2020_15";
  static HyundaiElantra2020_16 = "hyundaielantra2020_16";
  static HyundaiElantra2020_20 = "hyundaielantra2020_20";

  // Sonata 2014
  static HyundaiSonata2014_16 = "hyundaisonata2014_16";
  static HyundaiSonata2014_20 = "hyundaisonata2014_20";
  static HyundaiSonata2014_24 = "hyundaisonata2014_24";
  static HyundaiSonata2014_20h = "hyundaisonata2014_20h";

  // Sonata 2019
  static HyundaiSonata2019_15 = "hyundaisonata2019_15";
  static HyundaiSonata2019_16 = "hyundaisonata2019_16";
  static HyundaiSonata2019_20 = "hyundaisonata2019_20";
  static HyundaiSonata2019_25 = "hyundaisonata2019_25";
  static HyundaiSonata2019_20h = "hyundaisonata2019_20h";

  // Kona 2017
  static HyundaiKona2017_10 = "hyundaikona2017_10";
  static HyundaiKona2017_16 = "hyundaikona2017_16";
  static HyundaiKona2017_20 = "hyundaikona2017_20";
  static HyundaiKona2017_16h = "hyundaikona2017_16h";
  static HyundaiKona2017_e = "hyundaikona2017_e";

  // Tucson 2015
  static HyundaiTucson2015_16 = "hyundaitucson2015_16";
  static HyundaiTucson2015_20 = "hyundaitucson2015_20";
  static HyundaiTucson2015_24 = "hyundaitucson2015_24";
  // Tucson 2020
  static HyundaiTucson2020_15 = "hyundaitucson2020_15";
  static HyundaiTucson2020_16 = "hyundaitucson2020_16";
  static HyundaiTucson2020_20 = "hyundaitucson2020_20";
  static HyundaiTucson2020_25 = "hyundaitucson2020_25";
  static HyundaiTucson2020_16h = "hyundaitucson2020_16h";

  // Santa Fe 2012
  static HyundaiSantaFe2012_20 = "hyundaisantafe2012_20";
  static HyundaiSantaFe2012_24 = "hyundaisantafe2012_24";
  static HyundaiSantaFe2012_33 = "hyundaisantafe2012_33";

  // Santa Fe 2018
  static HyundaiSantaFe2018_20 = "hyundaisantafe2018_20";
  static HyundaiSantaFe2018_24 = "hyundaisantafe2018_24";
  static HyundaiSantaFe2018_25 = "hyundaisantafe2018_25";
  static HyundaiSantaFe2018_35 = "hyundaisantafe2018_35";
  static HyundaiSantaFe2018_16h = "hyundaisantafe2018_16h";

  // Mazda
  // 6 2012
  static Mazda62012_20 = "mazda62012_20";
  static Mazda62012_25 = "mazda62012_25";

  // cx5 2016
  static MazdaCX52016_25 = "mazdacx52016_25";

  // mazda 3 2013
  static Mazda32013_20 = "mazda32013_20";
  static Mazda32013_25 = "mazda32013_25";

  // mazda 3 2019
  static Mazda32019_20 = "mazda32019_20";
  static Mazda32019_25 = "mazda32019_25";

  // mazda CX30 2019
  static MazdaCX302019_20 = "mazdacx302019_20";
  static MazdaCX302019_25 = "mazdacx302019_25";
  // mazda CX9 2016
  static MazdaCX92016_25 = "mazdacx92016_25";

  // Lexus
  // Is 2013
  static LexusIS2013_250 = "lexusis2013_250";
  static LexusIS2013_200t = "lexusis2013_200t";
  static LexusIS2013_300 = "lexusis2013_300";
  static LexusIS2013_350 = "lexusis2013_350";
  static LexusIS2013_300h = "lexusis2013_300h";
  static LexusIS2013_500F = "lexusis2013_500f";

  // Es 2018
  static LexusES2018_200 = "lexuses2018_200";
  static LexusES2018_250 = "lexuses2018_250";
  static LexusES2018_300h = "lexuses2018_300h";
  static LexusES2018_350 = "lexuses2018_350";

  // nx 2014
  static LexusNX2014_200 = "lexusnx2014_200";
  static LexusNX2014_200t = "lexusnx2014_200t";
  static LexusNX2014_300 = "lexusnx2014_300";
  static LexusNX2014_300h = "lexusnx2014_300h";

  // nx 2021
  static LexusNX2021_200 = "lexusnx2021_200";
  static LexusNX2021_350 = "lexusnx2021_350";
  static LexusNX2021_250 = "lexusnx2021_250";
  static LexusNX2021_350h = "lexusnx2021_350h";
  static LexusNX2021_400h = "lexusnx2021_400h";
  static LexusNX2021_450h = "lexusnx2021_450h";

  // rx 2015
  static LexusRX2015_200t = "lexusrx2015_200t";
  static LexusRX2015_300 = "lexusrx2015_300";
  static LexusRX2015_350 = "lexusrx2015_350";
  static LexusRX2015_450h = "lexusrx2015_450h";

  // rx 2023
  static LexusRX2023_350 = "lexusrx2023_350";
  static LexusRX2023_350h = "lexusrx2023_350h";
  static LexusRX2023_450h = "lexusrx2023_450h";
  static LexusRX2023_500h = "lexusrx2023_500h";

  // gx 2009
  static LexusGX2009_460 = "lexusgx2009_460";
  // lx 2008
  static LexusLX2008_570 = "lexuslx2008_570";

  // Inifniti
  // Q50 2013
  static InfinitiQ502013_37 = "infinitiq502013_37";
  static InfinitiQ502013_20t = "infinitiq502013_20t";
  static InfinitiQ502013_30t = "infinitiq502013_30t";
  static InfinitiQ502013_30_rs = "infinitiq502013_30_rs";
  static InfinitiQ502013_h = "infinitiq502013_h";

  // Q60 2016
  static InfinitiQ602016_20t = "infinitiq602016_20t";
  static InfinitiQ602016_30t = "infinitiq602016_30t";
  static InfinitiQ602016_rs = "infinitiq602016_rs";

  // QX30 2016
  static InfinitiQX302016_20t = "infinitiqx302016_20t";
  // QX50 2019
  static InfinitiQX502019_20t = "infinitiqx502019_20t";
  // QX60 2013
  static InfinitiQX602013_35 = "infinitiqx602013_35";

  // Volkswagen
  static VolkswagenJetta2018_14 = "volkswagenjetta2018_14";
  static VolkswagenJetta2018_15 = "volkswagenjetta2018_15";
  static VolkswagenJetta2018_20 = "volkswagenjetta2018_20";

  // passat
  static VolkswagenPassat2015_14 = "volkswagenpassat2015_14";
  static VolkswagenPassat2015_18 = "volkswagenpassat2015_18";
  static VolkswagenPassat2015_20 = "volkswagenpassat2015_20";
  static VolkswagenPassat2015_15 = "volkswagenpassat2015_15";
  static VolkswagenPassat2015_14h = "volkswagenpassat2015_14h";

  // id4
  static VolkswagenID42020_st = "volkswagenid42020_st";
  static VolkswagenID42020_pro = "volkswagenid42020_pro";
  static VolkswagenID42020_gtx = "volkswagenid42020_gtx";

  // id6
  static VolkswagenID62021_rwd = "volkswagenid62021_rwd";
  static VolkswagenID62021_awd = "volkswagenid62021_awd";

  // dodge
  static DodgeCharger2011_se = "dodgecharger2011_se";
  static DodgeCharger2011_sxt = "dodgecharger2011_sxt";
  static DodgeCharger2011_gt = "dodgecharger2011_gt";
  static DodgeCharger2011_rt = "dodgecharger2011_rt";
  static DodgeCharger2011_srt8 = "dodgecharger2011_srt8";
  static DodgeCharger2011_scat = "dodgecharger2011_scat";
  static DodgeCharger2011_hellcat = "dodgecharger2011_hellcat";

  static DodgeChallenger2008_se = "dodgechallenger2008_se";
  static DodgeChallenger2008_sxt = "dodgechallenger2008_sxt";
  static DodgeChallenger2008_gt = "dodgechallenger2008_gt";
  static DodgeChallenger2008_rt = "dodgechallenger2008_rt";
  static DodgeChallenger2008_srt8 = "dodgechallenger2008_srt8";
  static DodgeChallenger2008_scat = "dodgechallenger2008_scat";
  static DodgeChallenger2008_hellcat = "dodgechallenger2008_hellcat";

  // Audi
  // A4
  static AudiA42008_18 = "audia42008_18";
  static AudiA42008_20 = "audia42008_20";
  static AudiA42008_30 = "audia42008_30";
  static AudiA42008_32 = "audia42008_32";
  static AudiA42008_s4 = "audia42008_s4";
  static AudiA42008_rs4 = "audia42008_rs4";

  // A4 2016
  static AudiA42016_14 = "audia42016_14";
  static AudiA42016_20 = "audia42016_20";
  static AudiA42016_s4 = "audia42016_s4";
  static AudiA42016_rs4 = "audia42016_rs4";

  // A5 2007
  static AudiA52007_18 = "audia52007_18";
  static AudiA52007_20 = "audia52007_20";
  static AudiA52007_30 = "audia52007_30";
  static AudiA52007_32 = "audia52007_32";
  static AudiA52007_s5 = "audia52007_s5";
  static AudiA52007_rs5 = "audia52007_rs5";

  // A5 2017
  static AudiA52017_14 = "audia52017_14";
  static AudiA52017_20 = "audia52017_20";
  static AudiA52017_20h = "audia52017_20h";
  static AudiA52017_s5 = "audia52017_s5";
  static AudiA52017_rs5 = "audia52017_rs5";

  // A6 2011
  static AudiA62011_h = "audia62011_h";
  static AudiA62011_20 = "audia62011_20";
  static AudiA62011_28 = "audia62011_28";
  static AudiA62011_25 = "audia62011_25";
  static AudiA62011_30 = "audia62011_30";
  static AudiA62011_s6 = "audia62011_s6";
  static AudiA62011_rs6 = "audia62011_rs6";

  // A6 2018
  static AudiA62018_20 = "audia62018_20";
  static AudiA62018_30 = "audia62018_30";
  static AudiA62018_s6 = "audia62018_s6";
  static AudiA62018_rs6 = "audia62018_rs6";
  static AudiA62018_20h = "audia62018_20h";

  // Q3 2011
  static AudiQ32011_14 = "audiq32011_14";
  static AudiQ32011_20 = "audiq32011_20";
  static AudiQ32011_rs = "audiq32011_rs";

  // Q3 2018
  static AudiQ32018_14 = "audiq32018_14";
  static AudiQ32018_14h = "audiq32018_14h";
  static AudiQ32018_20 = "audiq32018_20";

  // Q5 2008
  static AudiQ52008_20h = "audiq52008_20h";
  static AudiQ52008_20 = "audiq52008_20";
  static AudiQ52008_32 = "audiq52008_32";
  static AudiQ52008_30 = "audiq52008_30";

  // Q5 2017
  static AudiQ52017_20h = "audiq52017_20h";
  static AudiQ52017_20 = "audiq52017_20";
  static AudiQ52017_30 = "audiq52017_30";

  // Q7 2005
  static AudiQ72005_36 = "audiq72005_36";
  static AudiQ72005_42 = "audiq72005_42";
  static AudiQ72005_30 = "audiq72005_30";

  // Q7 2015
  static AudiQ72015_20 = "audiq72015_20";
  static AudiQ72015_30 = "audiq72015_30";
  static AudiQ72015_20h = "audiq72015_20h";
  static AudiQ72015_30h = "audiq72015_30h";
  static AudiQ72015_s = "audiq72015_s";

  // Q8 2018
  static AudiQ82018_30 = "audiq82018_30";
  static AudiQ82018_30h = "audiq82018_30h";
  static AudiQ82018_s = "audiq82018_s";
  static AudiQ82018_rs = "audiq82018_rs";

  // Porsche Cayenne 2002
  static PorscheCayenne2002_32 = "porschecayenne2002_32";
  static PorscheCayenne2002_s = "porschecayenne2002_s";
  static PorscheCayenne2002_gts = "porschecayenne2002_gts";
  static PorscheCayenne2002_t = "porschecayenne2002_t";
  static PorscheCayenne2002_ts = "porschecayenne2002_ts";

  // Porsche Cayenne 2010
  static PorscheCayenne2010_v6 = "porschecayenne2010_v6";
  static PorscheCayenne2010_s = "porschecayenne2010_s";
  static PorscheCayenne2010_gts = "porschecayenne2010_gts";
  static PorscheCayenne2010_sh = "porschecayenne2010_sh";
  static PorscheCayenne2010_t = "porschecayenne2010_t";
  static PorscheCayenne2010_ts = "porschecayenne2010_ts";

  // Porsche Cayenne 2018
  static PorscheCayenne2018_v6 = "porschecayenne2018_v6";
  static PorscheCayenne2018_h = "porschecayenne2018_h";
  static PorscheCayenne2018_s = "porschecayenne2018_s";
  static PorscheCayenne2018_gts = "porschecayenne2018_gts";
  static PorscheCayenne2018_t = "porschecayenne2018_t";
  static PorscheCayenne2018_tsh = "porschecayenne2018_tsh";
  static PorscheCayenne2018_gt = "porschecayenne2018_gt";

  // Porsche Macan 2014
  static PorscheMacan2014_20 = "porschemacan2014_20";
  static PorscheMacan2014_s = "porschemacan2014_s";
  static PorscheMacan2014_gts = "porschemacan2014_gts";
  static PorscheMacan2014_t = "porschemacan2014_t";

  // Porsche Panamera 2009
  static PorschePanamera2009_v6 = "porschepanamera2009_v6";
  static PorschePanamera2009_sh = "porschepanamera2009_sh";
  static PorschePanamera2009_s = "porschepanamera2009_s";
  static PorschePanamera2009_gts = "porschepanamera2009_gts";
  static PorschePanamera2009_t = "porschepanamera2009_t";
  static PorschePanamera2009_ts = "porschepanamera2009_ts";

  // Porsche Panamera 2016
  static PorschePanamera2016_v6 = "porschepanamera2016_v6";
  static PorschePanamera2016_h = "porschepanamera2016_h";
  static PorschePanamera2016_s = "porschepanamera2016_s";
  static PorschePanamera2016_gts = "porschepanamera2016_gts";
  static PorschePanamera2016_t = "porschepanamera2016_t";
  static PorschePanamera2016_tsh = "porschepanamera2016_tsh";

  // Mitsubishi pajero
  static MitsubishiPajero2006_30 = "mitsubishipajero2006_30";
  static MitsubishiPajero2006_38 = "mitsubishipajero2006_38";
  static MitsubishiPajero2006_35 = "mitsubishipajero2006_35";

  // Opel G
  static OpelAstraG_16 = "opelastrag_16";
  static OpelAstraG_18 = "opelastrag_18";
  static OpelAstraG_20 = "opelastrag_20";
  static OpelAstraG_20t = "opelastrag_20t";
  static OpelAstraG_22 = "opelastrag_22";

  // Range
  static LandRoverRangeRover2012_20h = "landroverrangerover2012_20h";
  static LandRoverRangeRover2012_30 = "landroverrangerover2012_30";
  static LandRoverRangeRover2012_50 = "landroverrangerover2012_50";

  // Range 2022
  static LandRoverRangeRover2022_30 = "landroverrangerover2022_30";
  static LandRoverRangeRover2022_44 = "landroverrangerover2022_44";
  static LandRoverRangeRover2022_30h = "landroverrangerover2022_30h";

  // Range sport 2013
  static LandRoverRangeRoverSport2013_20h = "landroverrangeroverSport2013_20h";
  static LandRoverRangeRoverSport2013_30 = "landroverrangeroverSport2013_30";
  static LandRoverRangeRoverSport2013_50 = "landroverrangeroverSport2013_50";

  // Range sport 2022
  static LandRoverRangeRoverSport2022_30 = "landroverrangeroverSport2022_30";
  static LandRoverRangeRoverSport2022_44 = "landroverrangeroverSport2022_44";
  static LandRoverRangeRoverSport2022_30h = "landroverrangeroverSport2022_30h";

  // Range velar 2017
  static LandRoverRangeRoverVelar2017_20 = "landroverrangeroverVelar2017_20";
  static LandRoverRangeRoverVelar2017_20h = "landroverrangeroverVelar2017_20h";
  static LandRoverRangeRoverVelar2017_30 = "landroverrangeroverVelar2017_30";
  static LandRoverRangeRoverVelar2017_50 = "landroverrangeroverVelar2017_50";

  static toString(engine) {
    switch (engine) {
      case EEngine.All:
        return "ALL";

      // Bmw e46
      case EEngine.BmwE46_316i:
        return "316i";
      case EEngine.BmwE46_318i:
        return "318i";
      case EEngine.BmwE46_320i:
        return "320i";
      case EEngine.BmwE46_323i:
        return "323i";
      case EEngine.BmwE46_325i:
        return "325i";
      case EEngine.BmwE46_328i:
        return "328i";
      case EEngine.BmwE46_330i:
        return "330i";
      case EEngine.BmwE46_m3:
        return "m3";

      // Bmw e90
      case EEngine.BmwE90_316i:
        return "316i";
      case EEngine.BmwE90_318i:
        return "318i";
      case EEngine.BmwE90_320i:
        return "320i";
      case EEngine.BmwE90_323i:
        return "323i";
      case EEngine.BmwE90_325i:
        return "325i";
      case EEngine.BmwE90_328i:
        return "328i";
      case EEngine.BmwE90_330i:
        return "330i";
      case EEngine.BmwE90_335i:
        return "335i";
      case EEngine.BmwE90_m3:
        return "M3";

      // Bmw e92
      case EEngine.BmwE92_320i:
        return "320i";
      case EEngine.BmwE92_325i:
        return "325i";
      case EEngine.BmwE92_328i:
        return "328i";
      case EEngine.BmwE92_330i:
        return "330i";
      case EEngine.BmwE92_335i:
        return "335i";
      case EEngine.BmwE92_335is:
        return "335is";
      case EEngine.BmwE92_m3:
        return "M3";

      // Bmw f30
      case EEngine.BmwF30_316i:
        return "316i";
      case EEngine.BmwF30_318i:
        return "318i";
      case EEngine.BmwF30_320i:
        return "320i";
      case EEngine.BmwF30_328i:
        return "328i";
      case EEngine.BmwF30_330i:
        return "330i";
      case EEngine.BmwF30_335i:
        return "335i";
      case EEngine.BmwF30_340i:
        return "340i";
      case EEngine.BmwF30_m3:
        return "m3";

      // Bmw g20
      case EEngine.BmwG20_318i:
        return "318i";
      case EEngine.BmwG20_320i:
        return "320i";
      case EEngine.BmwG20_325i:
        return "325i";
      case EEngine.BmwG20_320e:
        return "320e";
      case EEngine.BmwG20_330i:
        return "330i";
      case EEngine.BmwG20_330e:
        return "330e";
      case EEngine.BmwG20_M340i:
        return "M340i";
      case EEngine.BmwG20_b3:
        return "Alpina B3";
      case EEngine.BmwG20_m3:
        return "M3";
      case EEngine.BmwG20_318d:
        return "318d";
      case EEngine.BmwG20_320d:
        return "320d";
      case EEngine.BmwG20_330d:
        return "330d";
      case EEngine.BmwG20_340d:
        return "M340d";
      case EEngine.BmwG20_d3:
        return "Alpina D3 S";

      // Bmw 4 series
      // Bmw f30
      case EEngine.BmwF32_418i:
        return "418i";
      case EEngine.BmwF32_420i:
        return "420i";
      case EEngine.BmwF32_428i:
        return "428i";
      case EEngine.BmwF32_430i:
        return "430i";
      case EEngine.BmwF32_435i:
        return "435i";
      case EEngine.BmwF32_440i:
        return "440i";
      case EEngine.BmwF32_m4:
        return "m4";

      // Bmw g22
      case EEngine.BmwG22_420i:
        return "420i";
      case EEngine.BmwG22_430i:
        return "430i";
      case EEngine.BmwG22_M440i:
        return "m440i";
      case EEngine.BmwG22_m4:
        return "m4";

      // Bmw 5 series
      // Bmw e60
      case EEngine.BmwE60_520i:
        return "520";
      case EEngine.BmwE60_523i:
        return "523i";
      case EEngine.BmwE60_525i:
        return "525i";
      case EEngine.BmwE60_528i:
        return "528i";
      case EEngine.BmwE60_530i:
        return "530i";
      case EEngine.BmwE60_535i:
        return "535i";
      case EEngine.BmwE60_540i:
        return "540i";
      case EEngine.BmwE60_545i:
        return "545i";
      case EEngine.BmwE60_550i:
        return "550i";
      case EEngine.BmwE60_m5:
        return "M5";

      // Bmw f10
      case EEngine.BmwF10_520i:
        return "520i";
      case EEngine.BmwF10_523i:
        return "523i";
      case EEngine.BmwF10_528i:
        return "528i";
      case EEngine.BmwF10_530i:
        return "530i";
      case EEngine.BmwF10_535i:
        return "535i";
      case EEngine.BmwF10_550i:
        return "550i";
      case EEngine.BmwF10_m5:
        return "M5";

      // Bmw g30
      case EEngine.BmwG30_520i:
        return "520i";
      case EEngine.BmwG30_520e:
        return "520e";
      case EEngine.BmwG30_530i:
        return "530i";
      case EEngine.BmwG30_530e:
        return "530e";
      case EEngine.BmwG30_540i:
        return "540i";
      case EEngine.BmwG30_545e:
        return "545e";
      case EEngine.BmwG30_M550i:
        return "M550i xDrive";
      case EEngine.BmwG30_m5:
        return "M5";
      case EEngine.BmwG30_518d:
        return "518d";
      case EEngine.BmwG30_520d:
        return "520d";
      case EEngine.BmwG30_523d:
        return "523d";
      case EEngine.BmwG30_525d:
        return "525d";
      case EEngine.BmwG30_530d:
        return "530d";
      case EEngine.BmwG30_540d:
        return "540d";
      case EEngine.BmwG30_550d:
        return "M550d xDrive";

      // Bmw 6 series
      // Bmw e63
      case EEngine.BmwE63_630i:
        return "630i";
      case EEngine.BmwE63_645i:
        return "645i";
      case EEngine.BmwE63_650i:
        return "650i";
      case EEngine.BmwE63_m6:
        return "m6";

      // Bmw f12
      case EEngine.BmwF12_640i:
        return "640i";
      case EEngine.BmwF12_650i:
        return "650i";
      case EEngine.BmwF12_m6:
        return "m6";

      // Bmw 7 series
      // Bmw f01
      case EEngine.BmwF01_730i:
        return "730i";
      case EEngine.BmwF01_740i:
        return "740i";
      case EEngine.BmwF01_750i:
        return "750i";
      case EEngine.BmwF01_760i:
        return "760i";
      case EEngine.BmwF01_ActiveHybrid7:
        return "Active Hybrid 7";

      // Bmw g11
      case EEngine.BmwG11_730i:
        return "730i";
      case EEngine.BmwG11_740i:
        return "740i";
      case EEngine.BmwG11_740e:
        return "740e";
      case EEngine.BmwG11_745e:
        return "745e";
      case EEngine.BmwG11_750i:
        return "750i";
      case EEngine.BmwG11_M760i:
        return "M760i";

      // Bmw g15
      case EEngine.BmwG15_840i:
        return "840i";
      case EEngine.BmwG15_850i:
        return "850i";
      case EEngine.BmwG15_m8:
        return "M8";
      case EEngine.BmwG15_m8c:
        return "M8 Competition";
      case EEngine.BmwG15_b8:
        return "Alpina B8";

      // Bmw x5 e53
      case EEngine.BmwX5E53_30:
        return "X5 3.0i";
      case EEngine.BmwX5E53_44:
        return "X5 4.4i";
      case EEngine.BmwX5E53_46:
        return "X5 4.6is";
      case EEngine.BmwX5E53_48:
        return "X5 4.8is";

      // Bmw x5 e70
      case EEngine.BmwX5E70_30:
        return "X5 3.0i";
      case EEngine.BmwX5E70_35:
        return "X5 3.5i";
      case EEngine.BmwX5E70_48:
        return "X5 4.8i";
      case EEngine.BmwX5E70_50:
        return "X5 5.0i";
      case EEngine.BmwX5E70_m:
        return "X5 M";

      // Bmw x5 f15
      case EEngine.BmwX5F15_35:
        return "X5 3.5i";
      case EEngine.BmwX5F15_40e:
        return "X5 4.0e";
      case EEngine.BmwX5F15_50:
        return "X5 5.0i";

      // Bmw x5 f15
      case EEngine.BmwX5G05_30:
        return "X5 3.0i";
      case EEngine.BmwX5G05_40:
        return "X5 4.0i";
      case EEngine.BmwX5G05_45e:
        return "X5 4.5e";
      case EEngine.BmwX5G05_50e:
        return "X5 5.0e";
      case EEngine.BmwX5G05_50:
        return "X5 5.0i";
      case EEngine.BmwX5G05_M50:
        return "X5 M50";
      case EEngine.BmwX5G05_M:
        return "X5 M";
      case EEngine.BmwX5G05_MC:
        return "X5 M Competition";
      case EEngine.BmwX5G05_25d:
        return "X5 xDrive25d";
      case EEngine.BmwX5G05_30d:
        return "X5 xDrive30d";
      case EEngine.BmwX5G05_40d:
        return "X5 xDrive40d";
      case EEngine.BmwX5G05_50d:
        return "X5 M50d";

      // Bmw x6 e71
      case EEngine.BmwX6E71_35:
        return "X6 3.5i";
      case EEngine.BmwX6E71_50:
        return "X6 5.0i";
      case EEngine.BmwX6E71_M:
        return "X6 M";
      case EEngine.BmwX6E71_h:
        return "X6 ActiveHybrid";

      // Bmw x6 f16
      case EEngine.BmwX6F16_35:
        return "X6 3.5i";
      case EEngine.BmwX6F16_50:
        return "X6 5.0i";
      case EEngine.BmwX6F16_m:
        return "X6 M";

      // Bmw x6 g06
      case EEngine.BmwX6G06_40:
        return "X6 4.0i";
      case EEngine.BmwX6G06_m50:
        return "X6 M50i";
      case EEngine.BmwX6G06_m60:
        return "X6 M60i";
      case EEngine.BmwX6G06_m:
        return "X6 M";
      case EEngine.BmwX6G06_mc:
        return "X6 M Competition";

      // Mercedes Benz
      // C class
      // W203
      case EEngine.MercBenzW203_c180:
        return "C180";
      case EEngine.MercBenzW203_c200:
        return "C200";
      case EEngine.MercBenzW203_c230:
        return "C230";
      case EEngine.MercBenzW203_c240:
        return "C240";
      case EEngine.MercBenzW203_c280:
        return "C280";
      case EEngine.MercBenzW203_c320:
        return "C320";
      case EEngine.MercBenzW203_c350:
        return "C350";
      case EEngine.MercBenzW203_c32_amg:
        return "C32 AMG";
      case EEngine.MercBenzW203_c55_amg:
        return "C55 AMG";

      // W204
      case EEngine.MercBenzW204_c180:
        return "C180";
      case EEngine.MercBenzW204_c200:
        return "C200";
      case EEngine.MercBenzW204_c230:
        return "C230";
      case EEngine.MercBenzW204_c250:
        return "C250";
      case EEngine.MercBenzW204_c280:
        return "C280";
      case EEngine.MercBenzW204_c300:
        return "C300";
      case EEngine.MercBenzW204_c350:
        return "C350";
      case EEngine.MercBenzW204_c63_amg:
        return "C63 AMG";

      // W205
      case EEngine.MercBenzW205_c160:
        return "C160";
      case EEngine.MercBenzW205_c180:
        return "C180";
      case EEngine.MercBenzW205_c200:
        return "C200";
      case EEngine.MercBenzW205_c250:
        return "C250";
      case EEngine.MercBenzW205_c300:
        return "C300";
      case EEngine.MercBenzW205_c400:
        return "C400";
      case EEngine.MercBenzW205_c450:
        return "C450 AMG Sport";
      case EEngine.MercBenzW205_c43_amg:
        return "C43 AMG";
      case EEngine.MercBenzW205_c63_amg:
        return "C63 AMG";

      // W206
      case EEngine.MercBenzW206_c180:
        return "C180";
      case EEngine.MercBenzW206_c200:
        return "C200";
      case EEngine.MercBenzW206_c260:
        return "C260";
      case EEngine.MercBenzW206_c300:
        return "C300";
      case EEngine.MercBenzW206_c43_amg:
        return "C43 AMG";
      case EEngine.MercBenzW206_c63_amg:
        return "C63 AMG";

      // E class
      // W211
      case EEngine.MercBenzW211_e200:
        return "E200";
      case EEngine.MercBenzW211_e230:
        return "E230";
      case EEngine.MercBenzW211_e240:
        return "E240";
      case EEngine.MercBenzW211_e280:
        return "E280";
      case EEngine.MercBenzW211_e320:
        return "E320";
      case EEngine.MercBenzW211_e350:
        return "E350";
      case EEngine.MercBenzW211_e500:
        return "E500";
      case EEngine.MercBenzW211_e550:
        return "E550";
      case EEngine.MercBenzW211_e55_amg:
        return "E55 AMG";
      case EEngine.MercBenzW211_e63_amg:
        return "E63 AMG";

      // W212
      case EEngine.MercBenzW212_e200:
        return "E200";
      case EEngine.MercBenzW212_e250:
        return "E250";
      case EEngine.MercBenzW212_e300:
        return "E300";
      case EEngine.MercBenzW212_e350:
        return "E350";
      case EEngine.MercBenzW212_e400:
        return "E400";
      case EEngine.MercBenzW212_e500:
        return "E500";
      case EEngine.MercBenzW212_e63_amg:
        return "E63 AMG";

      // W213
      case EEngine.MercBenzW213_e180:
        return "E180";
      case EEngine.MercBenzW213_e200:
        return "E200";
      case EEngine.MercBenzW213_e250:
        return "E250";
      case EEngine.MercBenzW213_e300:
        return "E300";
      case EEngine.MercBenzW213_e350:
        return "E350";
      case EEngine.MercBenzW213_e400:
        return "E400";
      case EEngine.MercBenzW213_e450:
        return "E450";
      case EEngine.MercBenzW213_e43_amg:
        return "E43 AMG";
      case EEngine.MercBenzW213_e53_amg:
        return "E53 AMG";
      case EEngine.MercBenzW213_e63_amg:
        return "E63 AMG";
      case EEngine.MercBenzW213_e200d:
        return "E200d";
      case EEngine.MercBenzW213_e220d:
        return "E220d";
      case EEngine.MercBenzW213_e300d:
        return "E300d";
      case EEngine.MercBenzW213_e350d:
        return "E350d";
      case EEngine.MercBenzW213_e400d:
        return "E400d";

      // S class
      // W221
      case EEngine.MercBenzW221_s300:
        return "S300";
      case EEngine.MercBenzW221_s350:
        return "S350";
      case EEngine.MercBenzW221_s400:
        return "S400 Hybrid";
      case EEngine.MercBenzW221_s450:
        return "S450";
      case EEngine.MercBenzW221_s500:
        return "S500";
      case EEngine.MercBenzW221_s550:
        return "S550";
      case EEngine.MercBenzW221_s600:
        return "S600";
      case EEngine.MercBenzW221_s63_amg:
        return "E63 AMG";
      case EEngine.MercBenzW221_s65_amg:
        return "E65 AMG";

      // W222
      case EEngine.MercBenzW222_s400:
        return "S400";
      case EEngine.MercBenzW222_s450:
        return "S450";
      case EEngine.MercBenzW222_s500:
        return "S500";
      case EEngine.MercBenzW222_s560:
        return "S560";
      case EEngine.MercBenzW222_s600:
        return "S600";
      case EEngine.MercBenzW222_s63_amg:
        return "E63 AMG";
      case EEngine.MercBenzW222_s65_amg:
        return "E65 AMG";

      // W223
      case EEngine.MercBenzW223_s450:
        return "S450";
      case EEngine.MercBenzW223_s500:
        return "S500";
      case EEngine.MercBenzW223_s580:
        return "S580";

      // CLA
      // c117
      case EEngine.MercBenzC117_CLA180:
        return "CLA 180";
      case EEngine.MercBenzC117_CLA200:
        return "CLA 200";
      case EEngine.MercBenzC117_CLA220:
        return "CLA 220";
      case EEngine.MercBenzC117_CLA250:
        return "CLA 250";
      case EEngine.MercBenzC117_CLA45AMG:
        return "CLA 45 AMG";

      // c118
      case EEngine.MercBenzC118_CLA180:
        return "CLA 180";
      case EEngine.MercBenzC118_CLA200:
        return "CLA 200";
      case EEngine.MercBenzC118_CLA220:
        return "CLA 220";
      case EEngine.MercBenzC118_CLA250:
        return "CLA 250";
      case EEngine.MercBenzC118_CLA35AMG:
        return "CLA 35 AMG";
      case EEngine.MercBenzC118_CLA45AMG:
        return "CLA 45 AMG";

      // CLS
      // c219
      case EEngine.MercBenzC219_CLS350:
        return "CLS 350";
      case EEngine.MercBenzC219_CLS500:
        return "CLS 500";
      case EEngine.MercBenzC219_CLS550:
        return "CLS 550";
      case EEngine.MercBenzC219_CLS55AMG:
        return "CLS 55 AMG";
      case EEngine.MercBenzC219_CLS63AMG:
        return "CLS 63 AMG";

      // c218
      case EEngine.MercBenzC218_CLS300:
        return "CLS 300";
      case EEngine.MercBenzC218_CLS350:
        return "CLS 350";
      case EEngine.MercBenzC218_CLS400:
        return "CLS 400";
      case EEngine.MercBenzC218_CLS500:
        return "CLS 500";
      case EEngine.MercBenzC218_CLS63AMG:
        return "CLS 63 AMG";

      // c256
      case EEngine.MercBenzC256_CLS350:
        return "CLS 350";
      case EEngine.MercBenzC256_CLS450:
        return "CLS 450";
      case EEngine.MercBenzC256_CLS53AMG:
        return "CLS 53 AMG";

      // GLC
      // x253
      case EEngine.MercBenzX253_GLC200:
        return "GLC 200";
      case EEngine.MercBenzX253_GLC250:
        return "GLC 250";
      case EEngine.MercBenzX253_GLC300:
        return "GLC 300";
      case EEngine.MercBenzX253_GLC300E:
        return "GLC 300e";
      case EEngine.MercBenzX253_GLC350E:
        return "GLC 350e";
      case EEngine.MercBenzX253_GLC43:
        return "GLC 43 AMG";
      case EEngine.MercBenzX253_GLC63:
        return "GLC 63 AMG";

      // GLC coupe
      // c253
      case EEngine.MercBenzC253_GLC250:
        return "GLC Coupe 250";
      case EEngine.MercBenzC253_GLC300:
        return "GLC Coupe 300";
      case EEngine.MercBenzC253_GLC350E:
        return "GLC Coupe 350e";
      case EEngine.MercBenzC253_GLC43:
        return "GLC Coupe 43 AMG";
      case EEngine.MercBenzC253_GLC63:
        return "GLC Coupe 63 AMG";

      // GLE
      // w166
      case EEngine.MercBenzW166_GLE400:
        return "GLE 400";
      case EEngine.MercBenzW166_GLE450:
        return "GLE 450";
      case EEngine.MercBenzW166_GLE500:
        return "GLE 500";
      case EEngine.MercBenzW166_GLE550:
        return "GLE 550";
      case EEngine.MercBenzW166_GLE43AMG:
        return "GLE 43 AMG";
      case EEngine.MercBenzW166_GLE63AMG:
        return "GLE 63 AMG";

      // v167
      case EEngine.MercBenzV167_GLE350:
        return "GLE 350";
      case EEngine.MercBenzV167_GLE400:
        return "GLE 400";
      case EEngine.MercBenzV167_GLE350E:
        return "GLE 350E";
      case EEngine.MercBenzV167_GLE400E:
        return "GLE 400E";
      case EEngine.MercBenzV167_GLE450:
        return "GLE 450";
      case EEngine.MercBenzV167_GLE53AMG:
        return "GLE 53 AMG";
      case EEngine.MercBenzV167_GLE580:
        return "GLE 580";
      case EEngine.MercBenzV167_GLE63AMG:
        return "GLE 63 AMG";

      // GLE coupe
      // c292
      case EEngine.MercBenzC292_GLE400:
        return "GLE Coupe 400";
      case EEngine.MercBenzC292_GLE450:
        return "GLE Coupe 450";
      case EEngine.MercBenzC292_GLE500:
        return "GLE Coupe 500";
      case EEngine.MercBenzC292_GLE550:
        return "GLE Coupe 550";
      case EEngine.MercBenzC292_GLE43AMG:
        return "GLE Coupe 43 AMG";
      case EEngine.MercBenzC292_GLE63AMG:
        return "GLE Coupe 63 AMG";

      // c167
      case EEngine.MercBenzC167_GLE350:
        return "GLE Coupe 350";
      case EEngine.MercBenzC167_GLE400:
        return "GLE Coupe 400";
      case EEngine.MercBenzC167_GLE350E:
        return "GLE Coupe 350E";
      case EEngine.MercBenzC167_GLE400E:
        return "GLE Coupe 400E";
      case EEngine.MercBenzC167_GLE450:
        return "GLE Coupe 450";
      case EEngine.MercBenzC167_GLE53AMG:
        return "GLE Coupe 53 AMG";
      case EEngine.MercBenzC167_GLE580:
        return "GLE Coupe 580";
      case EEngine.MercBenzC167_GLE63AMG:
        return "GLE Coupe 63 AMG";

      // GL
      // x166
      case EEngine.MercBenzX166_GL450:
        return "GL 450 4MATIC";
      case EEngine.MercBenzX166_GL550:
        return "GL 550 4MATIC";
      case EEngine.MercBenzX166_GL63AMG:
        return "GL 63 AMG";

      // GLS
      // x166
      case EEngine.MercBenzX166_GLS450:
        return "GLS 450 4MATIC";
      case EEngine.MercBenzX166_GLS550:
        return "GLS 550 4MATIC";
      case EEngine.MercBenzX166_GLS63AMG:
        return "GLS 63 AMG";
      // x167
      case EEngine.MercBenzX167_GLS450:
        return "GLS 450 4MATIC";
      case EEngine.MercBenzX167_GLS580:
        return "GLS 580 4MATIC";
      case EEngine.MercBenzX167_GLS600:
        return "GLS 600 Maybach";
      case EEngine.MercBenzX167_GLS63AMG:
        return "GLS 63 AMG";

      // w463
      case EEngine.MercBenzGW463_32:
        return "G 320";
      case EEngine.MercBenzGW463_50:
        return "G 500";
      case EEngine.MercBenzGW463_55:
        return "G 550";
      case EEngine.MercBenzGW463_55amg:
        return "G 55 AMG";
      case EEngine.MercBenzGW463_63amg:
        return "G 63 AMG";
      case EEngine.MercBenzGW463_65amg:
        return "G 65 AMG";
      case EEngine.MercBenzGW463_mb:
        return "Maybach G 650";

      // w463
      case EEngine.MercBenzGW4632_50:
        return "G 500";
      case EEngine.MercBenzGW4632_55:
        return "G 550";
      case EEngine.MercBenzGW4632_63:
        return "G 63 AMG";

      // Jeep
      // Compass
      case EEngine.JeepCompass2017_14:
        return "Compass 1.4 MultiAir";
      case EEngine.JeepCompass2017_20:
        return "Compass 2.0 MultiAir";
      case EEngine.JeepCompass2020_190:
        return "Compass 190";
      case EEngine.JeepCompass2020_240:
        return "Compass 240";
      case EEngine.JeepCompass2020_240th:
        return "Compass 240 Trailhawk";
      case EEngine.JeepCherokeeKL_20:
        return "Cherokee 2.0 Turbo";
      case EEngine.JeepCherokeeKL_24:
        return "Cherokee 2.4";
      case EEngine.JeepCherokeeKL_24_multi:
        return "Cherokee 2.4 MultiAir";
      case EEngine.JeepCherokeeKL_32:
        return "Cherokee 3.2";
      case EEngine.JeepGrandCherokee2017_36:
        return "Grand Cherokee 3.6";
      case EEngine.JeepGrandCherokee2017_57:
        return "Grand Cherokee 5.7 Hemi";
      case EEngine.JeepGrandCherokee2017_62:
        return "Grand Cherokee 6.2 Trackhawk";
      case EEngine.JeepGrandCherokee2017_64:
        return "Grand Cherokee 6.4 SRT";

      // Ford
      // Focus3
      case EEngine.FordFocus3_10:
        return "Focus 1.0";
      case EEngine.FordFocus3_20:
        return "Focus 2.0";
      case EEngine.FordFocus3_20st:
        return "Focus 2.0 ST";
      case EEngine.FordFocus3_23rs:
        return "Focus 2.3 RS";

      // Fusion 2
      case EEngine.FordFusion2_15:
        return "Fusion 1.5 Ecoboost";
      case EEngine.FordFusion2_20h:
        return "Fusion 2.0 Hybrid";
      case EEngine.FordFusion2_20:
        return "Fusion 2.0 Ecoboost";
      case EEngine.FordFusion2_25:
        return "Fusion 2.5";
      case EEngine.FordFusion2_27:
        return "Fusion 2.7 Ecoboost";

      // Mustang 2015
      case EEngine.FordMustang2015_37:
        return "Mustang 3.7";
      case EEngine.FordMustang2015_23:
        return "Mustang 2.3 Ecoboost";
      case EEngine.FordMustang2015_gt:
        return "Mustang 5.0 GT";
      case EEngine.FordMustang2015_350:
        return "Shelby GT350";
      case EEngine.FordMustang2015_500:
        return "Shelby GT500";

      // Mustang 2015
      case EEngine.FordExplorer2011_20:
        return "Explorer 2.0 EcoBoost";
      case EEngine.FordExplorer2011_23:
        return "Explorer 2.3 EcoBoost";
      case EEngine.FordExplorer2011_35:
        return "Explorer 3.5";
      case EEngine.FordExplorer2011_35t:
        return "Explorer 3.5 EcoBoost";

      // Chevrolet
      // Cruze 2016
      case EEngine.ChevroletCruze2016_14:
        return "Cruze 1.4";

      // Malibu 2016
      case EEngine.ChevroletMalibu2016_15t:
        return "Malibu 1.5";
      case EEngine.ChevroletMalibu2016_20t:
        return "Malibu 2.0";
      case EEngine.ChevroletMalibu2016_18h:
        return "Malibu 1.8 Hybrid";

      // Camaro 2015
      case EEngine.ChevroletCamaro2015_20t:
        return "Camaro 2.0";
      case EEngine.ChevroletCamaro2015_36:
        return "Camaro 3.6";
      case EEngine.ChevroletCamaro2015_62:
        return "Camaro SS 6.2";

      // Toyota
      // Corolla 2018
      case EEngine.ToyotaCorolla2018_18:
        return "Corolla 1.8";
      case EEngine.ToyotaCorolla2018_18h:
        return "Corolla 1.8 Hybrid";
      case EEngine.ToyotaCorolla2018_20:
        return "Corolla 2.0";

      // Camry 2007
      case EEngine.ToyotaCamryXV40_24:
        return "Camry 2.4";
      case EEngine.ToyotaCamryXV40_24h:
        return "Camry 2.4 Hybrid";
      case EEngine.ToyotaCamryXV40_25:
        return "Camry 2.5";
      case EEngine.ToyotaCamryXV40_35:
        return "Camry 3.5";
      // Camry 2011
      case EEngine.ToyotaCamryXV50_25:
        return "Camry 2.5";
      case EEngine.ToyotaCamryXV50_35:
        return "Camry 3.5";

      // Camry 2017
      case EEngine.ToyotaCamryXV70_20:
        return "Camry 2.0";
      case EEngine.ToyotaCamryXV70_25:
        return "Camry 2.5";
      case EEngine.ToyotaCamryXV70_35:
        return "Camry 3.5";

      // Rav4 2018
      case EEngine.ToyotaRav4XA50_20:
        return "RAV4 2.0";
      case EEngine.ToyotaRav4XA50_25:
        return "RAV4 2.5";
      case EEngine.ToyotaRav4XA50_25h:
        return "RAV4 2.5 Hybrid";
      case EEngine.ToyotaRav4XA50_25h2:
        return "RAV4 2.5 Hybrid(302 HP)";

      // Prado 2009
      case EEngine.ToyotaPrado2009_27:
        return "Land Cruiser Prado 2.7";
      case EEngine.ToyotaPrado2009_40:
        return "Land Cruiser Prado 4.0";

      // Land Cruiser 2008
      case EEngine.ToyotaLandCruiser200_40:
        return "Land Cruiser 4.0";
      case EEngine.ToyotaLandCruiser200_46:
        return "Land Cruiser 4.6";
      case EEngine.ToyotaLandCruiser200_47:
        return "Land Cruiser 4.7";
      case EEngine.ToyotaLandCruiser200_57:
        return "Land Cruiser 5.7";

      // Land Cruiser 2021
      case EEngine.ToyotaLandCruiser300_34:
        return "Land Cruiser 3.4";
      case EEngine.ToyotaLandCruiser300_40:
        return "Land Cruiser 4.0";

      // Nissan
      // Sentra 2019
      case EEngine.NissanSentra2019_20:
        return "Sentra 2.0";

      // Altima 2013
      case EEngine.NissanAltima2013_25:
        return "Altima 2.5";
      case EEngine.NissanAltima2013_35:
        return "Altima 3.5";

      // Altima 2019
      case EEngine.NissanAltima2019_25:
        return "Altima 2.5";
      case EEngine.NissanAltima2019_20t:
        return "Altima 2.0 Turbo";

      // Maxima 2008
      case EEngine.NissanMaxima2008_35:
        return "Maxima 3.5";
      // Maxima 2014
      case EEngine.NissanMaxima2014_25:
        return "Maxima 2.5";
      case EEngine.NissanMaxima2014_35:
        return "Maxima 3.5";

      // Rogue 2013
      case EEngine.NissanRogue2013_25:
        return "Rogue 2.5";
      case EEngine.NissanRogue2020_25:
        return "Rogue 2.5";
      case EEngine.NissanRogue2020_15t:
        return "Rogue 1.5 Turbo";

      // Honda
      // Civic 2015
      case EEngine.HondaCivic2015_10t:
        return "Civic 1.0";
      case EEngine.HondaCivic2015_15t:
        return "Civic 1.5";
      case EEngine.HondaCivic2015_16:
        return "Civic 1.6";
      case EEngine.HondaCivic2015_18:
        return "Civic 1.8";
      case EEngine.HondaCivic2015_20:
        return "Civic 2.0";
      case EEngine.HondaCivic2015_TypeR:
        return "Civic 2.0 Type R";

      // Accord 2017
      case EEngine.HondaAccord2017_15:
        return "Accord 1.5";
      case EEngine.HondaAccord2017_20:
        return "Accord 2.0";

      // Kia
      // Forte
      case EEngine.KIAForte2018_14:
        return "Forte 1.4";
      case EEngine.KIAForte2018_15:
        return "Forte 1.5";
      case EEngine.KIAForte2018_16:
        return "Forte 1.6";
      case EEngine.KIAForte2018_20:
        return "Forte 2.0";
      case EEngine.KIAForte2018_16h:
        return "Forte 1.6 Hybrid";
      // optima 2015
      case EEngine.KIAOptima2015_16:
        return "Optima 1.6";
      case EEngine.KIAOptima2015_20:
        return "Optima 2.0";
      case EEngine.KIAOptima2015_24:
        return "Optima 2.4";

      // K5
      case EEngine.KIAK5_15:
        return "K5 1.5";
      case EEngine.KIAK5_16:
        return "K5 1.6";
      case EEngine.KIAK5_20:
        return "K5 2.0";
      case EEngine.KIAK5_25:
        return "K5 2.5";

      // Stinger
      case EEngine.KIAStinger2018_20:
        return "Stinger 2.0";
      case EEngine.KIAStinger2018_25:
        return "Stinger 2.5";
      case EEngine.KIAStinger2018_33:
        return "Stinger 3.3";

      // Sportage 2015
      case EEngine.KIASportage2015_16:
        return "Sportage 1.6";
      case EEngine.KIASportage2015_20:
        return "Sportage 2.0";
      case EEngine.KIASportage2015_24:
        return "Sportage 2.4";

      // Sorento 2009
      case EEngine.KIASorento2009_24:
        return "Sorento 2.4";
      case EEngine.KIASorento2009_33:
        return "Sorento 3.3";
      case EEngine.KIASorento2009_35:
        return "Sorento 3.5";

      // Sorento 2014
      case EEngine.KIASorento2014_20:
        return "Sorento 2.0";
      case EEngine.KIASorento2014_24:
        return "Sorento 2.4";
      case EEngine.KIASorento2014_33:
        return "Sorento 3.3";

      // Sorento 2020
      case EEngine.KIASorento2020_25:
        return "Sorento 2.5";
      case EEngine.KIASorento2020_35:
        return "Sorento 3.5";
      case EEngine.KIASorento2020_16h:
        return "Sorento 1.6 Hybrid";

      // Hyundai
      // Elantra 2015
      case EEngine.HyundaiElantra2015_14:
        return "Elantra 1.4";
      case EEngine.HyundaiElantra2015_16:
        return "Elantra 1.6";
      case EEngine.HyundaiElantra2015_20:
        return "Elantra 2.0";
      // Elantra 2020
      case EEngine.HyundaiElantra2020_14:
        return "Elantra 1.4";
      case EEngine.HyundaiElantra2020_15:
        return "Elantra 1.5";
      case EEngine.HyundaiElantra2020_16:
        return "Elantra 1.6";
      case EEngine.HyundaiElantra2020_20:
        return "Elantra 2.0";
      // Sonata 2014
      case EEngine.HyundaiSonata2014_16:
        return "Sonata 1.6";
      case EEngine.HyundaiSonata2014_20:
        return "Sonata 2.0";
      case EEngine.HyundaiSonata2014_24:
        return "Sonata 2.4";
      case EEngine.HyundaiSonata2014_20h:
        return "Sonata 2.0 Hybrid";
      // Sonata 2019
      case EEngine.HyundaiSonata2019_15:
        return "Sonata 1.5";
      case EEngine.HyundaiSonata2019_16:
        return "Sonata 1.6";
      case EEngine.HyundaiSonata2019_20:
        return "Sonata 2.0";
      case EEngine.HyundaiSonata2019_25:
        return "Sonata 2.5";
      case EEngine.HyundaiSonata2019_20h:
        return "Sonata 2.0 Hybrid";

      // Kona 2017
      case EEngine.HyundaiKona2017_10:
        return "Kona 1.0";
      case EEngine.HyundaiKona2017_16:
        return "Kona 1.6";
      case EEngine.HyundaiKona2017_20:
        return "Kona 2.0";
      case EEngine.HyundaiKona2017_16h:
        return "Kona 1.6 Hybrid";
      case EEngine.HyundaiKona2017_e:
        return "Kona Electric";

      // Tucson 2015
      case EEngine.HyundaiTucson2015_16:
        return "Tucson 1.6";
      case EEngine.HyundaiTucson2015_20:
        return "Tucson 2.0";
      case EEngine.HyundaiTucson2015_24:
        return "Tucson 2.4";

      // Tucson 2020
      case EEngine.HyundaiTucson2020_15:
        return "Tucson 1.5";
      case EEngine.HyundaiTucson2020_16:
        return "Tucson 1.6";
      case EEngine.HyundaiTucson2020_20:
        return "Tucson 2.0";
      case EEngine.HyundaiTucson2020_25:
        return "Tucson 2.5";
      case EEngine.HyundaiTucson2020_16h:
        return "Tucson 1.6 Hybrid";

      // Santa Fe 2012
      case EEngine.HyundaiSantaFe2012_20:
        return "Santa FE 2.0";
      case EEngine.HyundaiSantaFe2012_24:
        return "Santa FE 2.4";
      case EEngine.HyundaiSantaFe2012_33:
        return "Santa FE 3.3";

      // Santa Fe 2018
      case EEngine.HyundaiSantaFe2018_20:
        return "Santa FE 2.0";
      case EEngine.HyundaiSantaFe2018_24:
        return "Santa FE 2.4";
      case EEngine.HyundaiSantaFe2018_25:
        return "Santa FE 2.5";
      case EEngine.HyundaiSantaFe2018_35:
        return "Santa FE 3.5";
      case EEngine.HyundaiSantaFe2018_16h:
        return "Santa FE 1.6 HYBRID";
      // Mazda 6 2012
      case EEngine.Mazda62012_20:
        return "Mazda 6 2.0";
      case EEngine.Mazda62012_25:
        return "Mazda 6 2.5";

      // Mazda cx5 2016
      case EEngine.MazdaCX52016_25:
        return "Mazda CX5 2.5";

      // Mazda 3 2013
      case EEngine.Mazda32013_20:
        return "Mazda 3 2.0";
      case EEngine.Mazda32013_25:
        return "Mazda 3 2.5";

      // Mazda 3 2019
      case EEngine.Mazda32019_20:
        return "Mazda 3 2.0";
      case EEngine.Mazda32019_25:
        return "Mazda 3 2.5";
      // Mazda CX30 2019
      case EEngine.MazdaCX302019_20:
        return "Mazda CX30 2.0";
      case EEngine.MazdaCX302019_25:
        return "Mazda CX30 2.5";

      // Mazda CX9 2016
      case EEngine.MazdaCX92016_25:
        return "Mazda CX9 2.5";

      // Lexus
      // Is 2013
      case EEngine.LexusIS2013_250:
        return "IS 250";
      case EEngine.LexusIS2013_200t:
        return "IS 200 Turbo";
      case EEngine.LexusIS2013_300:
        return "IS 300";
      case EEngine.LexusIS2013_350:
        return "IS 350";
      case EEngine.LexusIS2013_300h:
        return "IS 300 Hybrid";
      case EEngine.LexusIS2013_500F:
        return "IS 500 F SPORT";

      // Es 2013
      case EEngine.LexusES2018_200:
        return "ES 200";
      case EEngine.LexusES2018_250:
        return "ES 250";
      case EEngine.LexusES2018_300h:
        return "ES 300 Hybrid";
      case EEngine.LexusES2018_350:
        return "ES 350";

      // nx 2014
      case EEngine.LexusNX2014_200:
        return "NX 200";
      case EEngine.LexusNX2014_200t:
        return "NX 200 Turbo";
      case EEngine.LexusNX2014_300:
        return "NX 300";
      case EEngine.LexusNX2014_300h:
        return "NX 300 Hybrid";

      // nx 2021
      case EEngine.LexusNX2021_200:
        return "NX 200";
      case EEngine.LexusNX2021_350:
        return "NX 350";
      case EEngine.LexusNX2021_250:
        return "NX 250";
      case EEngine.LexusNX2021_350h:
        return "NX 350 Hybrid";
      case EEngine.LexusNX2021_400h:
        return "NX 400 Hybrid";
      case EEngine.LexusNX2021_450h:
        return "NX 450 Hybrid";

      // rx 2015
      case EEngine.LexusRX2015_200t:
        return "RX 200 Turbo";
      case EEngine.LexusRX2015_300:
        return "RX 300";
      case EEngine.LexusRX2015_350:
        return "RX 350";
      case EEngine.LexusRX2015_450h:
        return "RX 450 Hybrid";

      // rx 2023
      case EEngine.LexusRX2023_350:
        return "RX 350";
      case EEngine.LexusRX2023_350h:
        return "RX 350 Hybrid";
      case EEngine.LexusRX2023_450h:
        return "RX 450 Hybrid";
      case EEngine.LexusRX2023_500h:
        return "RX 500 Hybrid";

      // gx 2009
      case EEngine.LexusGX2009_460:
        return "GX 460";
      // lx 2008
      case EEngine.LexusLX2008_570:
        return "LX 570";

      // Infiniti
      // Q50 2013
      case EEngine.InfinitiQ502013_37:
        return "Q50 3.7";
      case EEngine.InfinitiQ502013_20t:
        return "Q50 2.0 Turbo";
      case EEngine.InfinitiQ502013_30t:
        return "Q50 3.0 Turbo";
      case EEngine.InfinitiQ502013_30_rs:
        return "Q50 Red Sport 400";
      case EEngine.InfinitiQ502013_h:
        return "Q50 Hybrid";

      // Q60 2016
      case EEngine.InfinitiQ602016_20t:
        return "Q60 2.0 Turbo";
      case EEngine.InfinitiQ602016_30t:
        return "Q60 3.0 Biturbo";
      case EEngine.InfinitiQ602016_rs:
        return "Q60 Red Sport 400";

      // QX30 2016
      case EEngine.InfinitiQX302016_20t:
        return "QX30 2.0 Turbo";
      // QX50 2019
      case EEngine.InfinitiQX502019_20t:
        return "QX50 2.0 Turbo";
      // QX60 2013
      case EEngine.InfinitiQX602013_35:
        return "QX60 3.5";

      // VW Jetta
      case EEngine.VolkswagenJetta2018_14:
        return "JETTA 1.4 TSI";
      case EEngine.VolkswagenJetta2018_15:
        return "JETTA 1.5 TSI";
      case EEngine.VolkswagenJetta2018_20:
        return "JETTA 2.0 TSI";

      // VW passat
      case EEngine.VolkswagenPassat2015_14:
        return "Passat 1.4 TSI";
      case EEngine.VolkswagenPassat2015_18:
        return "Passat 1.8 TSI";
      case EEngine.VolkswagenPassat2015_20:
        return "Passat 2.0 TSI";
      case EEngine.Passat:
        return "PASSAT 1.5 TSI";
      case EEngine.VolkswagenPassat2015_14h:
        return "Passat 1.4 TSI eHybrid";

      // VW id4
      case EEngine.VolkswagenID42020_st:
        return "ID.4 Standart";
      case EEngine.VolkswagenID42020_pro:
        return "ID.4 Pro";
      case EEngine.VolkswagenID42020_gtx:
        return "ID.4 AWD GTX";

      // VW id6
      case EEngine.VolkswagenID62021_rwd:
        return "ID.6 RWD";
      case EEngine.VolkswagenID62021_awd:
        return "ID.6 AWD";

      // Charger
      case EEngine.DodgeCharger2011_se:
        return "Charger SE";
      case EEngine.DodgeCharger2011_sxt:
        return "Charger SXT";
      case EEngine.DodgeCharger2011_gt:
        return "Charger GT";
      case EEngine.DodgeCharger2011_rt:
        return "Charger R/T";
      case EEngine.DodgeCharger2011_srt8:
        return "Charger SRT8";
      case EEngine.DodgeCharger2011_scat:
        return "Charger R/T Scat Pack";
      case EEngine.DodgeCharger2011_hellcat:
        return "Charger SRT Hellcat";

      // Challenger
      case EEngine.DodgeChallenger2008_se:
        return "Challenger SE";
      case EEngine.DodgeChallenger2008_sxt:
        return "Challenger SXT";
      case EEngine.DodgeChallenger2008_gt:
        return "Challenger GT";
      case EEngine.DodgeChallenger2008_rt:
        return "Challenger R/T";
      case EEngine.DodgeChallenger2008_srt8:
        return "Challenger SRT8";
      case EEngine.DodgeChallenger2008_scat:
        return "Challenger R/T Scat Pack";
      case EEngine.DodgeChallenger2008_hellcat:
        return "Challenger SRT Hellcat";

      // Audi A4
      case EEngine.AudiA42008_18:
        return "A4 1.8 TFSI";
      case EEngine.AudiA42008_20:
        return "A4 2.0 TFSI";
      case EEngine.AudiA42008_30:
        return "A4 3.0 TFSI";
      case EEngine.AudiA42008_32:
        return "A4 3.2 FSI";
      case EEngine.AudiA42008_s4:
        return "S4 QUATTRO";
      case EEngine.AudiA42008_rs4:
        return "RS4 QUATTRO";

      // Audi A4 2016
      case EEngine.AudiA42016_14:
        return "A4 1.4 TFSI";
      case EEngine.AudiA42016_20:
        return "A4 2.0 TFSI";
      case EEngine.AudiA42016_s4:
        return "S4";
      case EEngine.AudiA42016_rs4:
        return "RS4";

      // Audi A5 2007
      case EEngine.AudiA52007_18:
        return "A5 1.8 TFSI";
      case EEngine.AudiA52007_20:
        return "A5 2.0 TFSI";
      case EEngine.AudiA52007_30:
        return "A5 3.0 TFSI";
      case EEngine.AudiA52007_32:
        return "A5 3.2 FSI";
      case EEngine.AudiA52007_s5:
        return "S5 Quattro";
      case EEngine.AudiA52007_rs5:
        return "RS5 Quattro";

      // Audi A5 2017
      case EEngine.AudiA52017_14:
        return "A5 1.4 TFSI";
      case EEngine.AudiA52017_20:
        return "A5 2.0 TFSI";
      case EEngine.AudiA52017_20h:
        return "A5 2.0 TFSI Hybrid";
      case EEngine.AudiA52017_s5:
        return "S5";
      case EEngine.AudiA52017_rs5:
        return "RS5";

      // Audi A6 2011
      case EEngine.AudiA62011_h:
        return "A6 Hybrid";
      case EEngine.AudiA62011_20:
        return "A6 2.0 TFSI";
      case EEngine.AudiA62011_28:
        return "A6 2.8 FSI";
      case EEngine.AudiA62011_25:
        return "A6 2.5 FSI";
      case EEngine.AudiA62011_30:
        return "A6 3.0 TFSI";
      case EEngine.AudiA62011_s6:
        return "S6";
      case EEngine.AudiA62011_rs6:
        return "RS6";

      // Audi A6 2018
      case EEngine.AudiA62018_20:
        return "A6 2.0 TFSI";
      case EEngine.AudiA62018_30:
        return "A6 3.0 TFSI";
      case EEngine.AudiA62018_s6:
        return "S6";
      case EEngine.AudiA62018_rs6:
        return "RS6";
      case EEngine.AudiA62018_20h:
        return "A6 2.0 Hybrid";

      // Audi Q3 2011
      case EEngine.AudiQ32011_14:
        return "Q3 1.4 TFSI";
      case EEngine.AudiQ32011_20:
        return "Q3 2.0 TFSI";
      case EEngine.AudiQ32011_rs:
        return "RS Q3";

      // Audi Q3 2018
      case EEngine.AudiQ32018_14:
        return "Q3 1.4 TFSI";
      case EEngine.AudiQ32018_14h:
        return "Q3 1.4 Hybrid";
      case EEngine.AudiQ32018_20:
        return "Q3 2.0 TFSI";

      // Audi Q5 2008
      case EEngine.AudiQ52008_20h:
        return "Q5 2.0 TFSI Hybrid";
      case EEngine.AudiQ52008_20:
        return "Q5 2.0 TFSI";
      case EEngine.AudiQ52008_32:
        return "Q5 3.2 FSI";
      case EEngine.AudiQ52008_30:
        return "Q5 3.0 TFSI Quattro";

      // Audi Q5 2017
      case EEngine.AudiQ52017_20h:
        return "Q5 2.0 TFSI Hybrid";
      case EEngine.AudiQ52017_20:
        return "Q5 2.0 TFSI";
      case EEngine.AudiQ52017_30:
        return "Q5 3.0 TFSI";

      // Audi Q7 2005
      case EEngine.AudiQ72005_36:
        return "Q7 3.6 FSI";
      case EEngine.AudiQ72005_42:
        return "Q7 4.2 FSI";
      case EEngine.AudiQ72005_30:
        return "Q7 3.0 TFSI";

      // Audi Q7 2015
      case EEngine.AudiQ72015_20:
        return "Q7 2.0 TFSI";
      case EEngine.AudiQ72015_30:
        return "Q7 3.0 TFSI";
      case EEngine.AudiQ72015_20h:
        return "Q7 2.0 TFSI Hybrid";
      case EEngine.AudiQ72015_30h:
        return "Q7 3.0 TFSI Hybrid";
      case EEngine.AudiQ72015_s:
        return "SQ7 TFSI";

      // Audi Q8 2018
      case EEngine.AudiQ82018_30:
        return "Q8 3.0 TFSI";
      case EEngine.AudiQ82018_30h:
        return "Q8 3.0 TFSI Hybrid";
      case EEngine.AudiQ82018_s:
        return "SQ8 TFSI";
      case EEngine.AudiQ82018_rs:
        return "RS Q8";

      // Porsche Cayenne
      case EEngine.PorscheCayenne2002_32:
        return "Cayenne";
      case EEngine.PorscheCayenne2002_s:
        return "Cayenne S";
      case EEngine.PorscheCayenne2002_gts:
        return "Cayenne GTS";
      case EEngine.PorscheCayenne2002_t:
        return "Cayenne Turbo";
      case EEngine.PorscheCayenne2002_ts:
        return "Cayenne Turbo S";

      // Porsche Cayenne
      case EEngine.PorscheCayenne2010_v6:
        return "Cayenne";
      case EEngine.PorscheCayenne2010_s:
        return "Cayenne S";
      case EEngine.PorscheCayenne2010_sh:
        return "Cayenne S Hybrid";
      case EEngine.PorscheCayenne2010_gts:
        return "Cayenne GTS";
      case EEngine.PorscheCayenne2010_t:
        return "Cayenne Turbo";
      case EEngine.PorscheCayenne2010_ts:
        return "Cayenne Turbo S";

      // Porsche Cayenne
      case EEngine.PorscheCayenne2018_v6:
        return "Cayenne";
      case EEngine.PorscheCayenne2018_h:
        return "Cayenne Hybrid";
      case EEngine.PorscheCayenne2018_s:
        return "Cayenne S";
      case EEngine.PorscheCayenne2018_gts:
        return "Cayenne GTS";
      case EEngine.PorscheCayenne2018_t:
        return "Cayenne Turbo";
      case EEngine.PorscheCayenne2018_tsh:
        return "Cayenne Turbo S Hybrid";
      case EEngine.PorscheCayenne2018_gt:
        return "Cayenne Turbo GT";

      // Porsche Macan
      case EEngine.PorscheMacan2014_20:
        return "Macan";
      case EEngine.PorscheMacan2014_s:
        return "Macan S";
      case EEngine.PorscheMacan2014_gts:
        return "Macan GTS";
      case EEngine.PorscheMacan2014_t:
        return "Macan Turbo";

      // Porsche Panamera
      case EEngine.PorschePanamera2009_v6:
        return "Panamera";
      case EEngine.PorschePanamera2009_sh:
        return "Panamera S Hybrid";
      case EEngine.PorschePanamera2009_s:
        return "Panamera S";
      case EEngine.PorschePanamera2009_gts:
        return "Panamera GTS";
      case EEngine.PorschePanamera2009_t:
        return "Panamera Turbo";
      case EEngine.PorschePanamera2009_ts:
        return "Panamera Turbo S";

      // Porsche Panamera 2016
      case EEngine.PorschePanamera2016_v6:
        return "Panamera";
      case EEngine.PorschePanamera2016_h:
        return "Panamera Hybrid";
      case EEngine.PorschePanamera2016_s:
        return "Panamera S";
      case EEngine.PorschePanamera2016_gts:
        return "Panamera GTS";
      case EEngine.PorschePanamera2016_t:
        return "Panamera Turbo";
      case EEngine.PorschePanamera2016_tsh:
        return "Panamera Turbo S Hybrid";

      // Mitsu pajero
      case EEngine.MitsubishiPajero2006_30:
        return "Pajero 3.0";
      case EEngine.MitsubishiPajero2006_38:
        return "Pajero 3.8";
      case EEngine.MitsubishiPajero2006_35:
        return "Pajero 3.5";

      // Opel G
      case EEngine.OpelAstraG_16:
        return "Astra G 1.6";
      case EEngine.OpelAstraG_18:
        return "Astra G 1.8";
      case EEngine.OpelAstraG_20:
        return "Astra G 2.0";
      case EEngine.OpelAstraG_20t:
        return "Astra G 2.0 Turbo";
      case EEngine.OpelAstraG_22:
        return "Astra G 2.2";
      // RangeRover
      case EEngine.LandRoverRangeRover2012_20h:
        return "Range Rover 2.0 Hybrid";
      case EEngine.LandRoverRangeRover2012_30:
        return "Range Rover 3.0";
      case EEngine.LandRoverRangeRover2012_50:
        return "Range Rover 5.0";

      // RangeRover
      case EEngine.LandRoverRangeRover2022_30:
        return "Range Rover 3.0";
      case EEngine.LandRoverRangeRover2022_44:
        return "Range Rover 4.4";
      case EEngine.LandRoverRangeRover2022_30h:
        return "Range Rover 3.0 Hybrid";

      // RangeRover
      case EEngine.LandRoverRangeRoverSport2013_20h:
        return "Range Rover Sport 2.0 Hybrid";
      case EEngine.LandRoverRangeRoverSport2013_30:
        return "Range Rover Sport 3.0";
      case EEngine.LandRoverRangeRoverSport2013_50:
        return "Range Rover Sport 5.0";

      // RangeRover
      case EEngine.LandRoverRangeRoverSport2022_30:
        return "Range Rover Sport 3.0";
      case EEngine.LandRoverRangeRoverSport2022_44:
        return "Range Rover Sport 5.0";
      case EEngine.LandRoverRangeRoverSport2022_30h:
        return "Range Rover Sport 3.0 Hybrid";

      // RangeRover Velar
      case EEngine.LandRoverRangeRoverVelar2017_20:
        return "Range Rover Velar 2.0";
      case EEngine.LandRoverRangeRoverVelar2017_20h:
        return "Range Rover Velar 2.0 Hybrid";
      case EEngine.LandRoverRangeRoverVelar2017_30:
        return "Range Rover Velar 3.0";
      case EEngine.LandRoverRangeRoverVelar2017_50:
        return "Range Rover Velar 5.0";
    }
  }
}

// export function genMakes() {
//     gMakes[EMake.Bmw] = {}

//     // Bmw 3 series
//     gMakes[EMake.Bmw][ESerie.Bmw3] = {}
//     const bmwE46 = gMakes[EMake.Bmw][ESerie.Bmw3][EModel.Bmw3E46] = {}
//     genBmwE46(bmwE46)
//     const bmwE90 = gMakes[EMake.Bmw][ESerie.Bmw3][EModel.Bmw3E90] = {}
//     genBmwE90(bmwE90)
//     const bmwF30 = gMakes[EMake.Bmw][ESerie.Bmw3][EModel.Bmw3F30] = {}
//     genBmwF30(bmwF30)
//     const bmwG20 = gMakes[EMake.Bmw][ESerie.Bmw3][EModel.Bmw3G20] = {}
//     genBmwG20(bmwG20)

//     // Bmw 4 series
//     gMakes[EMake.Bmw][ESerie.Bmw4] = {}
//     const bmwF32 = gMakes[EMake.Bmw][ESerie.Bmw4][EModel.Bmw4F32] = {}
//     genBmwF32(bmwF32)
//     const bmwG22 = gMakes[EMake.Bmw][ESerie.Bmw4][EModel.Bmw4G22] = {}
//     genBmwG22(bmwG22)

//     // Bmw 5 series
//     gMakes[EMake.Bmw][ESerie.Bmw5] = {}
//     const bmwE60 = gMakes[EMake.Bmw][ESerie.Bmw5][EModel.Bmw5E60] = {}
//     genBmwE60(bmwE60)
//     const bmwF10 = gMakes[EMake.Bmw][ESerie.Bmw5][EModel.Bmw5F10] = {}
//     genBmwF10(bmwF10)
//     const bmwG30 = gMakes[EMake.Bmw][ESerie.Bmw5][EModel.Bmw5G30] = {}
//     genBmwG30(bmwG30)

//     // Bmw 6 series
//     gMakes[EMake.Bmw][ESerie.Bmw6] = {}
//     const bmwE63 = gMakes[EMake.Bmw][ESerie.Bmw6][EModel.Bmw6E63] = {}
//     genBmwE63(bmwE63)
//     const bmwF12 = gMakes[EMake.Bmw][ESerie.Bmw6][EModel.Bmw6F12] = {}
//     genBmwF12(bmwF12)

//     // Bmw 7 series
//     gMakes[EMake.Bmw][ESerie.Bmw7] = {}
//     const bmwF01 = gMakes[EMake.Bmw][ESerie.Bmw7][EModel.Bmw7F01] = {}
//     genBmwF01(bmwF01)
//     const bmwG11 = gMakes[EMake.Bmw][ESerie.Bmw7][EModel.Bmw7G11] = {}
//     genBmwG11(bmwG11)
// }
// import { gMakes, genMakes } from "./Makes";

// genMakes()

// export function getMakes() {
//     return gMakes;
// }
