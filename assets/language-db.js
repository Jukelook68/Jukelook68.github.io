import {
  g as ia,
  c as _
} from "./auth.js";
import {
  l as da
} from "./vendor.js";
var aa = {};
const ta = ["Northwest Caucasian", "Afro-Asiatic", "Indo-European", "Niger–Congo", "Northeast Caucasian", "Aymaran", "Turkic", "Language isolate", "Creole", "Sino-Tibetan", "Austronesian", "Algonquian", "Constructed", "Uralic", "South Caucasian", "Tupian", "Eskimo–Aleut", "Japonic", "Dravidian", "Nilo-Saharan", "Austroasiatic", "Koreanic", "Tai–Kadai", "Mongolic", "Dené–Yeniseian", "Niger-Congo", "Quechuan"],
  la = [{
      iso639_1: "ab",
      iso639_2: "abk",
      iso639_2en: "abk",
      iso639_3: "abk",
      name: ["Abkhaz"],
      nativeName: ["аҧсуа бызшәа", "аҧсшәа"],
      direction: "LTR",
      family: "Northwest Caucasian"
  }, {
      iso639_1: "aa",
      iso639_2: "aar",
      iso639_2en: "aar",
      iso639_3: "aar",
      name: ["Afar"],
      nativeName: ["Afaraf"],
      direction: "LTR",
      family: "Afro-Asiatic",
      countries: ["DJI"]
  }, {
      iso639_1: "af",
      iso639_2: "afr",
      iso639_2en: "afr",
      iso639_3: "afr",
      name: ["Afrikaans"],
      nativeName: ["Afrikaans"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["ZAF"],
      langCultureMs: [{
          langCultureName: "af-ZA",
          displayName: "Afrikaans - South Africa",
          cultureCode: "0x0436"
      }]
  }, {
      iso639_1: "ak",
      iso639_2: "aka",
      iso639_2en: "aka",
      iso639_3: "aka",
      name: ["Akan"],
      nativeName: ["Akan"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["GHA"]
  }, {
      iso639_1: "sq",
      iso639_2: "sqi",
      iso639_2en: "alb",
      iso639_3: "sqi",
      name: ["Albanian"],
      nativeName: ["gjuha shqipe"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["ALB"],
      langCultureMs: [{
          langCultureName: "sq-AL",
          displayName: "Albanian - Albania",
          cultureCode: "0x041C"
      }]
  }, {
      iso639_1: "am",
      iso639_2: "amh",
      iso639_2en: "amh",
      iso639_3: "amh",
      name: ["Amharic"],
      nativeName: ["አማርኛ"],
      direction: "LTR",
      family: "Afro-Asiatic",
      countries: ["ETH"]
  }, {
      iso639_1: "ar",
      iso639_2: "ara",
      iso639_2en: "ara",
      iso639_3: "ara",
      name: ["Arabic"],
      nativeName: ["العربية"],
      direction: "RTL",
      family: "Afro-Asiatic",
      countries: ["DZA", "BHR", "TCD", "COM", "DJI", "EGY", "ERI", "IRQ", "ISR", "JOR", "KWT", "LBN", "LBY", "MRT", "MAR", "NER", "OMN", "QAT", "SAU", "SOM", "SDN", "SYR", "TUN", "ARE", "YEM"],
      langCultureMs: [{
          langCultureName: "ar-DZ",
          displayName: "Arabic - Algeria",
          cultureCode: "0x1401"
      }, {
          langCultureName: "ar-BH",
          displayName: "Arabic - Bahrain",
          cultureCode: "0x3C01"
      }, {
          langCultureName: "ar-EG",
          displayName: "Arabic - Egypt",
          cultureCode: "0x0C01"
      }, {
          langCultureName: "ar-IQ",
          displayName: "Arabic - Iraq",
          cultureCode: "0x0801"
      }, {
          langCultureName: "ar-JO",
          displayName: "Arabic - Jordan",
          cultureCode: "0x2C01"
      }, {
          langCultureName: "ar-KW",
          displayName: "Arabic - Kuwait",
          cultureCode: "0x3401"
      }, {
          langCultureName: "ar-LB",
          displayName: "Arabic - Lebanon",
          cultureCode: "0x3001"
      }, {
          langCultureName: "ar-LY",
          displayName: "Arabic - Libya",
          cultureCode: "0x1001"
      }, {
          langCultureName: "ar-MA",
          displayName: "Arabic - Morocco",
          cultureCode: "0x1801"
      }, {
          langCultureName: "ar-OM",
          displayName: "Arabic - Oman",
          cultureCode: "0x2001"
      }, {
          langCultureName: "ar-QA",
          displayName: "Arabic - Qatar",
          cultureCode: "0x4001"
      }, {
          langCultureName: "ar-SA",
          displayName: "Arabic - Saudi Arabia",
          cultureCode: "0x0401"
      }, {
          langCultureName: "ar-SY",
          displayName: "Arabic - Syria",
          cultureCode: "0x2801"
      }, {
          langCultureName: "ar-TN",
          displayName: "Arabic - Tunisia",
          cultureCode: "0x1C01"
      }, {
          langCultureName: "ar-AE",
          displayName: "Arabic - United Arab Emirates",
          cultureCode: "0x3801"
      }, {
          langCultureName: "ar-YE",
          displayName: "Arabic - Yemen",
          cultureCode: "0x2401"
      }]
  }, {
      iso639_1: "an",
      iso639_2: "arg",
      iso639_2en: "arg",
      iso639_3: "arg",
      name: ["Aragonese"],
      nativeName: ["aragonés"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "hy",
      iso639_2: "hye",
      iso639_2en: "arm",
      iso639_3: "hye",
      name: ["Armenian"],
      nativeName: ["Հայերեն"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["ARM"],
      langCultureMs: [{
          langCultureName: "hy-AM",
          displayName: "Armenian - Armenia",
          cultureCode: "0x042B"
      }]
  }, {
      iso639_1: "as",
      iso639_2: "asm",
      iso639_2en: "asm",
      iso639_3: "asm",
      name: ["Assamese"],
      nativeName: ["অসমীয়া"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "av",
      iso639_2: "ava",
      iso639_2en: "ava",
      iso639_3: "ava",
      name: ["Avaric"],
      nativeName: ["авар мацӀ", "магӀарул мацӀ"],
      direction: "LTR",
      family: "Northeast Caucasian"
  }, {
      iso639_1: "ae",
      iso639_2: "ave",
      iso639_2en: "ave",
      iso639_3: "ave",
      name: ["Avestan"],
      nativeName: ["avesta"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "ay",
      iso639_2: "aym",
      iso639_2en: "aym",
      iso639_3: "aym",
      name: ["Aymara"],
      nativeName: ["aymar aru"],
      direction: "LTR",
      family: "Aymaran",
      countries: ["BOL", "PER"]
  }, {
      iso639_1: "az",
      iso639_2: "aze",
      iso639_2en: "aze",
      iso639_3: "aze",
      name: ["Azerbaijani"],
      nativeName: ["azərbaycan dili"],
      direction: "LTR",
      family: "Turkic",
      countries: ["AZE"],
      langCultureMs: [{
          langCultureName: "Cy-az-AZ",
          displayName: "Azeri (Cyrillic) - Azerbaijan",
          cultureCode: "0x082C"
      }, {
          langCultureName: "Lt-az-AZ",
          displayName: "Azeri (Latin) - Azerbaijan",
          cultureCode: "0x042C"
      }]
  }, {
      iso639_1: "bm",
      iso639_2: "bam",
      iso639_2en: "bam",
      iso639_3: "bam",
      name: ["Bambara"],
      nativeName: ["bamanankan"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["MLI"]
  }, {
      iso639_1: "ba",
      iso639_2: "bak",
      iso639_2en: "bak",
      iso639_3: "bak",
      name: ["Bashkir"],
      nativeName: ["башҡорт теле"],
      direction: "LTR",
      family: "Turkic"
  }, {
      iso639_1: "eu",
      iso639_2: "eus",
      iso639_2en: "baq",
      iso639_3: "eus",
      name: ["Basque"],
      nativeName: ["euskara", "euskera"],
      direction: "LTR",
      family: "Language isolate",
      langCultureMs: [{
          langCultureName: "eu-ES",
          displayName: "Basque - Basque",
          cultureCode: "0x042D"
      }]
  }, {
      iso639_1: "be",
      iso639_2: "bel",
      iso639_2en: "bel",
      iso639_3: "bel",
      name: ["Belarusian"],
      nativeName: ["беларуская мова"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["BLR"],
      langCultureMs: [{
          langCultureName: "be-BY",
          displayName: "Belarusian - Belarus",
          cultureCode: "0x0423"
      }]
  }, {
      iso639_1: "bn",
      iso639_2: "ben",
      iso639_2en: "ben",
      iso639_3: "ben",
      name: ["Bengali", "Bangla"],
      nativeName: ["বাংলা"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["BGD", "IND"]
  }, {
      iso639_1: "",
      iso639_2: "ber",
      iso639_2en: "ber",
      iso639_3: "ber",
      name: ["Berber"],
      nativeName: ["Tamaziɣt", "Tamazight", "ⵜⴰⵎⴰⵣⵉⵖⵜ"],
      direction: "LTR",
      family: "Afro-Asiatic",
      countries: ["DZA", "MAR"]
  }, {
      iso639_1: "bh",
      iso639_2: "bih",
      iso639_2en: "bih",
      iso639_3: "",
      name: ["Bihari"],
      nativeName: ["भोजपुरी"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "bi",
      iso639_2: "bis",
      iso639_2en: "bis",
      iso639_3: "bis",
      name: ["Bislama"],
      nativeName: ["Bislama"],
      direction: "LTR",
      family: "Creole",
      countries: ["VUT"]
  }, {
      iso639_1: "bs",
      iso639_2: "bos",
      iso639_2en: "bos",
      iso639_3: "bos",
      name: ["Bosnian"],
      nativeName: ["bosanski jezik"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["BIH"]
  }, {
      iso639_1: "br",
      iso639_2: "bre",
      iso639_2en: "bre",
      iso639_3: "bre",
      name: ["Breton"],
      nativeName: ["brezhoneg"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "bg",
      iso639_2: "bul",
      iso639_2en: "bul",
      iso639_3: "bul",
      name: ["Bulgarian"],
      nativeName: ["български език"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["BGR"],
      langCultureMs: [{
          langCultureName: "bg-BG",
          displayName: "Bulgarian - Bulgaria",
          cultureCode: "0x0402"
      }]
  }, {
      iso639_1: "my",
      iso639_2: "mya",
      iso639_2en: "bur",
      iso639_3: "mya",
      name: ["Burmese"],
      nativeName: ["ဗမာစာ"],
      direction: "LTR",
      family: "Sino-Tibetan",
      countries: ["MMR"]
  }, {
      iso639_1: "ca",
      iso639_2: "cat",
      iso639_2en: "cat",
      iso639_3: "cat",
      name: ["Catalan", "Valencian"],
      nativeName: ["català", "valencià"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["AND"],
      langCultureMs: [{
          langCultureName: "ca-ES",
          displayName: "Catalan - Catalan",
          cultureCode: "0x0403"
      }]
  }, {
      iso639_1: "ch",
      iso639_2: "cha",
      iso639_2en: "cha",
      iso639_3: "cha",
      name: ["Chamorro"],
      nativeName: ["Chamoru"],
      direction: "LTR",
      family: "Austronesian"
  }, {
      iso639_1: "ce",
      iso639_2: "che",
      iso639_2en: "che",
      iso639_3: "che",
      name: ["Chechen"],
      nativeName: ["нохчийн мотт"],
      direction: "LTR",
      family: "Northeast Caucasian"
  }, {
      iso639_1: "ny",
      iso639_2: "nya",
      iso639_2en: "nya",
      iso639_3: "nya",
      name: ["Chichewa", "Chewa", "Nyanja"],
      nativeName: ["chiCheŵa", "chinyanja"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["MWI"]
  }, {
      iso639_1: "zh",
      iso639_2: "zho",
      iso639_2en: "chi",
      iso639_3: "zho",
      name: ["Chinese"],
      nativeName: ["中文 (Zhōngwén)", "汉语", "漢語"],
      direction: "LTR",
      family: "Sino-Tibetan",
      countries: ["HKG", "MAC", "CHN", "TWN", "SGP"],
      langCultureMs: [{
          langCultureName: "zh-CN",
          displayName: "Chinese - China",
          cultureCode: "0x0804"
      }, {
          langCultureName: "zh-HK",
          displayName: "Chinese - Hong Kong SAR",
          cultureCode: "0x0C04"
      }, {
          langCultureName: "zh-MO",
          displayName: "Chinese - Macau SAR",
          cultureCode: "0x1404"
      }, {
          langCultureName: "zh-TW",
          displayName: "Chinese - Taiwan",
          cultureCode: "0x0404"
      }, {
          langCultureName: "zh-CHS",
          displayName: "Chinese (Simplified)",
          cultureCode: "0x0004"
      }, {
          langCultureName: "zh-CHT",
          displayName: "Chinese (Traditional)",
          cultureCode: "0x7C04"
      }]
  }, {
      iso639_1: "cv",
      iso639_2: "chv",
      iso639_2en: "chv",
      iso639_3: "chv",
      name: ["Chuvash"],
      nativeName: ["чӑваш чӗлхи"],
      direction: "LTR",
      family: "Turkic"
  }, {
      iso639_1: "kw",
      iso639_2: "cor",
      iso639_2en: "cor",
      iso639_3: "cor",
      name: ["Cornish"],
      nativeName: ["Kernewek"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "co",
      iso639_2: "cos",
      iso639_2en: "cos",
      iso639_3: "cos",
      name: ["Corsican"],
      nativeName: ["corsu", "lingua corsa"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "cr",
      iso639_2: "cre",
      iso639_2en: "cre",
      iso639_3: "cre",
      name: ["Cree"],
      nativeName: ["ᓀᐦᐃᔭᐍᐏᐣ"],
      direction: "LTR",
      family: "Algonquian"
  }, {
      iso639_1: "hr",
      iso639_2: "hrv",
      iso639_2en: "hrv",
      iso639_3: "hrv",
      name: ["Croatian"],
      nativeName: ["hrvatski jezik"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["HRV", "BIH"],
      langCultureMs: [{
          langCultureName: "hr-HR",
          displayName: "Croatian - Croatia",
          cultureCode: "0x041A"
      }]
  }, {
      iso639_1: "cs",
      iso639_2: "ces",
      iso639_2en: "cze",
      iso639_3: "ces",
      name: ["Czech"],
      nativeName: ["čeština", "český jazyk"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["CZE", "SVK"],
      langCultureMs: [{
          langCultureName: "cs-CZ",
          displayName: "Czech - Czech Republic",
          cultureCode: "0x0405"
      }]
  }, {
      iso639_1: "da",
      iso639_2: "dan",
      iso639_2en: "dan",
      iso639_3: "dan",
      name: ["Danish"],
      nativeName: ["dansk"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["DNK", "FRO"],
      langCultureMs: [{
          langCultureName: "da-DK",
          displayName: "Danish - Denmark",
          cultureCode: "0x0406"
      }]
  }, {
      iso639_1: "",
      iso639_2: "",
      iso639_2en: "",
      iso639_3: "prs",
      name: ["Dari"],
      nativeName: ["فارسی دری"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["AFG"]
  }, {
      iso639_1: "dv",
      iso639_2: "div",
      iso639_2en: "div",
      iso639_3: "div",
      name: ["Divehi", "Dhivehi", "Maldivian"],
      nativeName: ["ދިވެހި"],
      direction: "RTL",
      family: "Indo-European",
      countries: ["MDV"],
      langCultureMs: [{
          langCultureName: "div-MV",
          displayName: "Dhivehi - Maldives",
          cultureCode: "0x0465"
      }]
  }, {
      iso639_1: "nl",
      iso639_2: "nld",
      iso639_2en: "dut",
      iso639_3: "nld",
      name: ["Dutch"],
      nativeName: ["Nederlands", "Vlaams"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["BEL", "NLD", "ABW", "CUW", "SXM", "SUR"],
      langCultureMs: [{
          langCultureName: "nl-BE",
          displayName: "Dutch - Belgium",
          cultureCode: "0x0813"
      }, {
          langCultureName: "nl-NL",
          displayName: "Dutch - The Netherlands",
          cultureCode: "0x0413"
      }]
  }, {
      iso639_1: "dz",
      iso639_2: "dzo",
      iso639_2en: "dzo",
      iso639_3: "dzo",
      name: ["Dzongkha"],
      nativeName: ["རྫོང་ཁ"],
      direction: "LTR",
      family: "Sino-Tibetan",
      countries: ["BTN"]
  }, {
      iso639_1: "en",
      iso639_2: "eng",
      iso639_2en: "eng",
      iso639_3: "eng",
      name: ["English"],
      nativeName: ["English"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["ATG", "AUS", "BHS", "BRB", "BLZ", "BWA", "CMR", "CAN", "CUW", "DMA", "ERI", "FJI", "GMB", "GHA", "GRD", "GUY", "HKG", "IND", "IRL", "JAM", "KEN", "KIR", "LSO", "LBR", "MWI", "MYS", "MLT", "MHL", "MUS", "FSM", "NAM", "NRU", "NZL", "NGA", "PAK", "PLW", "PNG", "PHL", "RWA", "KNA", "LCA", "VCT", "WSM", "SYC", "SLE", "SGP", "SXM", "SLB", "ZAF", "SSD", "LKA", "SDN", "SWZ", "TZA", "TON", "TTO", "TUV", "UGA", "GBR", "USA", "VUT", "ZMB", "ZWE"],
      langCultureMs: [{
          langCultureName: "en-AU",
          displayName: "English - Australia",
          cultureCode: "0x0C09"
      }, {
          langCultureName: "en-BZ",
          displayName: "English - Belize",
          cultureCode: "0x2809"
      }, {
          langCultureName: "en-CA",
          displayName: "English - Canada",
          cultureCode: "0x1009"
      }, {
          langCultureName: "en-CB",
          displayName: "English - Caribbean",
          cultureCode: "0x2409"
      }, {
          langCultureName: "en-IE",
          displayName: "English - Ireland",
          cultureCode: "0x1809"
      }, {
          langCultureName: "en-JM",
          displayName: "English - Jamaica",
          cultureCode: "0x2009"
      }, {
          langCultureName: "en-NZ",
          displayName: "English - New Zealand",
          cultureCode: "0x1409"
      }, {
          langCultureName: "en-PH",
          displayName: "English - Philippines",
          cultureCode: "0x3409"
      }, {
          langCultureName: "en-ZA",
          displayName: "English - South Africa",
          cultureCode: "0x1C09"
      }, {
          langCultureName: "en-TT",
          displayName: "English - Trinidad and Tobago",
          cultureCode: "0x2C09"
      }, {
          langCultureName: "en-GB",
          displayName: "English - United Kingdom",
          cultureCode: "0x0809"
      }, {
          langCultureName: "en-US",
          displayName: "English - United States",
          cultureCode: "0x0409"
      }, {
          langCultureName: "en-ZW",
          displayName: "English - Zimbabwe",
          cultureCode: "0x3009"
      }, {
          langCultureName: "en-SG",
          displayName: "English - Singapore",
          cultureCode: "0x1004"
      }]
  }, {
      iso639_1: "eo",
      iso639_2: "epo",
      iso639_2en: "epo",
      iso639_3: "epo",
      name: ["Esperanto"],
      nativeName: ["Esperanto"],
      direction: "LTR",
      family: "Constructed"
  }, {
      iso639_1: "et",
      iso639_2: "est",
      iso639_2en: "est",
      iso639_3: "est",
      name: ["Estonian"],
      nativeName: ["eesti", "eesti keel"],
      direction: "LTR",
      family: "Uralic",
      countries: ["EST"],
      langCultureMs: [{
          langCultureName: "et-EE",
          displayName: "Estonian - Estonia",
          cultureCode: "0x0425"
      }]
  }, {
      iso639_1: "ee",
      iso639_2: "ewe",
      iso639_2en: "ewe",
      iso639_3: "ewe",
      name: ["Ewe"],
      nativeName: ["Eʋegbe"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["GHA", "TGO"]
  }, {
      iso639_1: "fo",
      iso639_2: "fao",
      iso639_2en: "fao",
      iso639_3: "fao",
      name: ["Faroese"],
      nativeName: ["føroyskt"],
      direction: "LTR",
      family: "Indo-European",
      langCultureMs: [{
          langCultureName: "fo-FO",
          displayName: "Faroese - Faroe Islands",
          cultureCode: "0x0438"
      }]
  }, {
      iso639_1: "fj",
      iso639_2: "fij",
      iso639_2en: "fij",
      iso639_3: "fij",
      name: ["Fijian"],
      nativeName: ["vosa Vakaviti"],
      direction: "LTR",
      family: "Austronesian",
      countries: ["FJI"]
  }, {
      iso639_1: "fi",
      iso639_2: "fin",
      iso639_2en: "fin",
      iso639_3: "fin",
      name: ["Finnish"],
      nativeName: ["suomi", "suomen kieli"],
      direction: "LTR",
      family: "Uralic",
      countries: ["FIN"],
      langCultureMs: [{
          langCultureName: "fi-FI",
          displayName: "Finnish - Finland",
          cultureCode: "0x040B"
      }]
  }, {
      iso639_1: "fr",
      iso639_2: "fra",
      iso639_2en: "fre",
      iso639_3: "fra",
      name: ["French"],
      nativeName: ["français", "langue française"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["BEL", "BEN", "BFA", "BDI", "CMR", "CAN", "CAF", "TCD", "COM", "CIV", "COD", "COG", "DJI", "GNQ", "FRA", "GUF", "PYF", "GLP", "MTQ", "MYT", "NCL", "REU", "BLM", "SPM", "WLF", "GAB", "GIN", "HTI", "ITA", "JEY", "LUX", "MDG", "MLI", "MUS", "MCO", "NER", "RWA", "SEN", "SYC", "CHE", "TGO", "VUT"],
      langCultureMs: [{
          langCultureName: "fr-BE",
          displayName: "French - Belgium",
          cultureCode: "0x080C"
      }, {
          langCultureName: "fr-CA",
          displayName: "French - Canada",
          cultureCode: "0x0C0C"
      }, {
          langCultureName: "fr-FR",
          displayName: "French - France",
          cultureCode: "0x040C"
      }, {
          langCultureName: "fr-LU",
          displayName: "French - Luxembourg",
          cultureCode: "0x140C"
      }, {
          langCultureName: "fr-MC",
          displayName: "French - Monaco",
          cultureCode: "0x180C"
      }, {
          langCultureName: "fr-CH",
          displayName: "French - Switzerland",
          cultureCode: "0x100C"
      }]
  }, {
      iso639_1: "ff",
      iso639_2: "ful",
      iso639_2en: "ful",
      iso639_3: "ful",
      name: ["Fula", "Fulah", "Pulaar", "Pular"],
      nativeName: ["Fulfulde", "Pulaar", "Pular"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["BEN", "BFA", "MLI", "NER", "SEN"]
  }, {
      iso639_1: "gl",
      iso639_2: "glg",
      iso639_2en: "glg",
      iso639_3: "glg",
      name: ["Galician"],
      nativeName: ["galego"],
      direction: "LTR",
      family: "Indo-European",
      langCultureMs: [{
          langCultureName: "gl-ES",
          displayName: "Galician - Galician",
          cultureCode: "0x0456"
      }]
  }, {
      iso639_1: "ka",
      iso639_2: "kat",
      iso639_2en: "geo",
      iso639_3: "kat",
      name: ["Georgian"],
      nativeName: ["ქართული"],
      direction: "LTR",
      family: "South Caucasian",
      countries: ["GEO"],
      langCultureMs: [{
          langCultureName: "ka-GE",
          displayName: "Georgian - Georgia",
          cultureCode: "0x0437"
      }]
  }, {
      iso639_1: "de",
      iso639_2: "deu",
      iso639_2en: "ger",
      iso639_3: "deu",
      name: ["German"],
      nativeName: ["Deutsch"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["AUT", "BEL", "DEU", "LIE", "LUX", "ITA", "CHE"],
      langCultureMs: [{
          langCultureName: "de-AT",
          displayName: "German - Austria",
          cultureCode: "0x0C07"
      }, {
          langCultureName: "de-DE",
          displayName: "German - Germany",
          cultureCode: "0x0407"
      }, {
          langCultureName: "de-LI",
          displayName: "German - Liechtenstein",
          cultureCode: "0x1407"
      }, {
          langCultureName: "de-LU",
          displayName: "German - Luxembourg",
          cultureCode: "0x1007"
      }, {
          langCultureName: "de-CH",
          displayName: "German - Switzerland",
          cultureCode: "0x0807"
      }]
  }, {
      iso639_1: "el",
      iso639_2: "ell",
      iso639_2en: "gre",
      iso639_3: "ell",
      name: ["Greek"],
      nativeName: ["ελληνικά"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["GRC", "CYP"],
      langCultureMs: [{
          langCultureName: "el-GR",
          displayName: "Greek - Greece",
          cultureCode: "0x0408"
      }]
  }, {
      iso639_1: "gn",
      iso639_2: "grn",
      iso639_2en: "grn",
      iso639_3: "grn",
      name: ["Guaraní"],
      nativeName: ["Avañe'ẽ"],
      direction: "LTR",
      family: "Tupian",
      countries: ["PRY", "BOL"]
  }, {
      iso639_1: "gu",
      iso639_2: "guj",
      iso639_2en: "guj",
      iso639_3: "guj",
      name: ["Gujarati"],
      nativeName: ["ગુજરાતી"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["IND"],
      langCultureMs: [{
          langCultureName: "gu-IN",
          displayName: "Gujarati - India",
          cultureCode: "0x0447"
      }]
  }, {
      iso639_1: "ht",
      iso639_2: "hat",
      iso639_2en: "hat",
      iso639_3: "hat",
      name: ["Haitian", "Haitian Creole"],
      nativeName: ["Kreyòl ayisyen"],
      direction: "LTR",
      family: "Creole",
      countries: ["HTI"]
  }, {
      iso639_1: "ha",
      iso639_2: "hau",
      iso639_2en: "hau",
      iso639_3: "hau",
      name: ["Hausa"],
      nativeName: ["(Hausa) هَوُسَ"],
      direction: "LTR",
      family: "Afro-Asiatic",
      countries: ["NER", "NGA"]
  }, {
      iso639_1: "he",
      iso639_2: "heb",
      iso639_2en: "heb",
      iso639_3: "heb",
      name: ["Hebrew"],
      nativeName: ["עברית"],
      direction: "RTL",
      family: "Afro-Asiatic",
      countries: ["ISR"],
      langCultureMs: [{
          langCultureName: "he-IL",
          displayName: "Hebrew - Israel",
          cultureCode: "0x040D"
      }]
  }, {
      iso639_1: "hz",
      iso639_2: "her",
      iso639_2en: "her",
      iso639_3: "her",
      name: ["Herero"],
      nativeName: ["Otjiherero"],
      direction: "LTR",
      family: "Niger–Congo"
  }, {
      iso639_1: "hi",
      iso639_2: "hin",
      iso639_2en: "hin",
      iso639_3: "hin",
      name: ["Hindi"],
      nativeName: ["हिन्दी", "हिंदी"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["IND", "FJI"],
      langCultureMs: [{
          langCultureName: "hi-IN",
          displayName: "Hindi - India",
          cultureCode: "0x0439"
      }]
  }, {
      iso639_1: "ho",
      iso639_2: "hmo",
      iso639_2en: "hmo",
      iso639_3: "hmo",
      name: ["Hiri Motu"],
      nativeName: ["Hiri Motu"],
      direction: "LTR",
      family: "Austronesian",
      countries: ["PNG"]
  }, {
      iso639_1: "hu",
      iso639_2: "hun",
      iso639_2en: "hun",
      iso639_3: "hun",
      name: ["Hungarian"],
      nativeName: ["magyar"],
      direction: "LTR",
      family: "Uralic",
      countries: ["HUN"],
      langCultureMs: [{
          langCultureName: "hu-HU",
          displayName: "Hungarian - Hungary",
          cultureCode: "0x040E"
      }]
  }, {
      iso639_1: "ia",
      iso639_2: "ina",
      iso639_2en: "ina",
      iso639_3: "ina",
      name: ["Interlingua"],
      nativeName: ["Interlingua"],
      direction: "LTR",
      family: "Constructed"
  }, {
      iso639_1: "id",
      iso639_2: "ind",
      iso639_2en: "ind",
      iso639_3: "ind",
      name: ["Indonesian"],
      nativeName: ["Bahasa Indonesia"],
      direction: "LTR",
      family: "Austronesian",
      countries: ["IDN"],
      langCultureMs: [{
          langCultureName: "id-ID",
          displayName: "Indonesian - Indonesia",
          cultureCode: "0x0421"
      }]
  }, {
      iso639_1: "ie",
      iso639_2: "ile",
      iso639_2en: "ile",
      iso639_3: "ile",
      name: ["Interlingue"],
      nativeName: ["Interlingue"],
      direction: "LTR",
      family: "Constructed"
  }, {
      iso639_1: "ga",
      iso639_2: "gle",
      iso639_2en: "gle",
      iso639_3: "gle",
      name: ["Irish"],
      nativeName: ["Gaeilge"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["IRL"]
  }, {
      iso639_1: "ig",
      iso639_2: "ibo",
      iso639_2en: "ibo",
      iso639_3: "ibo",
      name: ["Igbo"],
      nativeName: ["Asụsụ Igbo"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["NGA"]
  }, {
      iso639_1: "ik",
      iso639_2: "ipk",
      iso639_2en: "ipk",
      iso639_3: "ipk",
      name: ["Inupiaq"],
      nativeName: ["Iñupiaq", "Iñupiatun"],
      direction: "LTR",
      family: "Eskimo–Aleut"
  }, {
      iso639_1: "io",
      iso639_2: "ido",
      iso639_2en: "ido",
      iso639_3: "ido",
      name: ["Ido"],
      nativeName: ["Ido"],
      direction: "LTR",
      family: "Constructed"
  }, {
      iso639_1: "is",
      iso639_2: "isl",
      iso639_2en: "ice",
      iso639_3: "isl",
      name: ["Icelandic"],
      nativeName: ["Íslenska"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["ISL"],
      langCultureMs: [{
          langCultureName: "is-IS",
          displayName: "Icelandic - Iceland",
          cultureCode: "0x040F"
      }]
  }, {
      iso639_1: "it",
      iso639_2: "ita",
      iso639_2en: "ita",
      iso639_3: "ita",
      name: ["Italian"],
      nativeName: ["italiano"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["ITA", "HRV", "SMR", "SVN", "CHE", "VAT"],
      langCultureMs: [{
          langCultureName: "it-IT",
          displayName: "Italian - Italy",
          cultureCode: "0x0410"
      }, {
          langCultureName: "it-CH",
          displayName: "Italian - Switzerland",
          cultureCode: "0x0810"
      }]
  }, {
      iso639_1: "iu",
      iso639_2: "iku",
      iso639_2en: "iku",
      iso639_3: "iku",
      name: ["Inuktitut"],
      nativeName: ["ᐃᓄᒃᑎᑐᑦ"],
      direction: "LTR",
      family: "Eskimo–Aleut"
  }, {
      iso639_1: "ja",
      iso639_2: "jpn",
      iso639_2en: "jpn",
      iso639_3: "jpn",
      name: ["Japanese"],
      nativeName: ["日本語 (にほんご)"],
      direction: "LTR",
      family: "Japonic",
      countries: ["JPN"],
      langCultureMs: [{
          langCultureName: "ja-JP",
          displayName: "Japanese - Japan",
          cultureCode: "0x0411"
      }]
  }, {
      iso639_1: "jv",
      iso639_2: "jav",
      iso639_2en: "jav",
      iso639_3: "jav",
      name: ["Javanese"],
      nativeName: ["basa Jawa"],
      direction: "LTR",
      family: "Austronesian"
  }, {
      iso639_1: "kl",
      iso639_2: "kal",
      iso639_2en: "kal",
      iso639_3: "kal",
      name: ["Kalaallisut", "Greenlandic"],
      nativeName: ["kalaallisut", "kalaallit oqaasii"],
      direction: "LTR",
      family: "Eskimo–Aleut"
  }, {
      iso639_1: "kn",
      iso639_2: "kan",
      iso639_2en: "kan",
      iso639_3: "kan",
      name: ["Kannada"],
      nativeName: ["ಕನ್ನಡ"],
      direction: "LTR",
      family: "Dravidian",
      langCultureMs: [{
          langCultureName: "kn-IN",
          displayName: "Kannada - India",
          cultureCode: "0x044B"
      }]
  }, {
      iso639_1: "kr",
      iso639_2: "kau",
      iso639_2en: "kau",
      iso639_3: "kau",
      name: ["Kanuri"],
      nativeName: ["Kanuri"],
      direction: "LTR",
      family: "Nilo-Saharan",
      countries: ["NER"]
  }, {
      iso639_1: "ks",
      iso639_2: "kas",
      iso639_2en: "kas",
      iso639_3: "kas",
      name: ["Kashmiri"],
      nativeName: ["कश्मीरी", "كشميري‎"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "kk",
      iso639_2: "kaz",
      iso639_2en: "kaz",
      iso639_3: "kaz",
      name: ["Kazakh"],
      nativeName: ["қазақ тілі"],
      direction: "LTR",
      family: "Turkic",
      countries: ["KAZ"],
      langCultureMs: [{
          langCultureName: "kk-KZ",
          displayName: "Kazakh - Kazakhstan",
          cultureCode: "0x043F"
      }]
  }, {
      iso639_1: "km",
      iso639_2: "khm",
      iso639_2en: "khm",
      iso639_3: "khm",
      name: ["Khmer"],
      nativeName: ["ខ្មែរ", "ខេមរភាសា", "ភាសាខ្មែរ"],
      direction: "LTR",
      family: "Austroasiatic",
      countries: ["KHM"]
  }, {
      iso639_1: "ki",
      iso639_2: "kik",
      iso639_2en: "kik",
      iso639_3: "kik",
      name: ["Kikuyu", "Gikuyu"],
      nativeName: ["Gĩkũyũ"],
      direction: "LTR",
      family: "Niger–Congo"
  }, {
      iso639_1: "rw",
      iso639_2: "kin",
      iso639_2en: "kin",
      iso639_3: "kin",
      name: ["Kinyarwanda"],
      nativeName: ["Ikinyarwanda"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["RWA"]
  }, {
      iso639_1: "ky",
      iso639_2: "kir",
      iso639_2en: "kir",
      iso639_3: "kir",
      name: ["Kyrgyz"],
      nativeName: ["Кыргызча", "Кыргыз тили"],
      direction: "LTR",
      family: "Turkic",
      countries: ["KGZ"],
      langCultureMs: [{
          langCultureName: "ky-KZ",
          displayName: "Kyrgyz - Kazakhstan",
          cultureCode: "0x0440"
      }]
  }, {
      iso639_1: "kv",
      iso639_2: "kom",
      iso639_2en: "kom",
      iso639_3: "kom",
      name: ["Komi"],
      nativeName: ["коми кыв"],
      direction: "LTR",
      family: "Uralic"
  }, {
      iso639_1: "kg",
      iso639_2: "kon",
      iso639_2en: "kon",
      iso639_3: "kon",
      name: ["Kongo"],
      nativeName: ["Kikongo"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["AGO", "COD", "COG"]
  }, {
      iso639_1: "ko",
      iso639_2: "kor",
      iso639_2en: "kor",
      iso639_3: "kor",
      name: ["Korean"],
      nativeName: ["한국어", "조선어"],
      direction: "LTR",
      family: "Koreanic",
      countries: ["PRK", "KOR"],
      langCultureMs: [{
          langCultureName: "ko-KR",
          displayName: "Korean - Korea",
          cultureCode: "0x0412"
      }]
  }, {
      iso639_1: "ku",
      iso639_2: "kur",
      iso639_2en: "kur",
      iso639_3: "kur",
      name: ["Kurdish"],
      nativeName: ["Kurdî", "كوردی‎"],
      direction: "RTL",
      family: "Indo-European",
      countries: ["IRQ"]
  }, {
      iso639_1: "kj",
      iso639_2: "kua",
      iso639_2en: "kua",
      iso639_3: "kua",
      name: ["Kwanyama", "Kuanyama"],
      nativeName: ["Kuanyama"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["AGO"]
  }, {
      iso639_1: "la",
      iso639_2: "lat",
      iso639_2en: "lat",
      iso639_3: "lat",
      name: ["Latin"],
      nativeName: ["latine", "lingua latina"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["VAT"]
  }, {
      iso639_1: "lb",
      iso639_2: "ltz",
      iso639_2en: "ltz",
      iso639_3: "ltz",
      name: ["Luxembourgish", "Letzeburgesch"],
      nativeName: ["Lëtzebuergesch"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["LUX"]
  }, {
      iso639_1: "lg",
      iso639_2: "lug",
      iso639_2en: "lug",
      iso639_3: "lug",
      name: ["Ganda"],
      nativeName: ["Luganda"],
      direction: "LTR",
      family: "Niger–Congo"
  }, {
      iso639_1: "li",
      iso639_2: "lim",
      iso639_2en: "lim",
      iso639_3: "lim",
      name: ["Limburgish", "Limburgan", "Limburger"],
      nativeName: ["Limburgs"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "ln",
      iso639_2: "lin",
      iso639_2en: "lin",
      iso639_3: "lin",
      name: ["Lingala"],
      nativeName: ["Lingála"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["COD", "COG"]
  }, {
      iso639_1: "lo",
      iso639_2: "lao",
      iso639_2en: "lao",
      iso639_3: "lao",
      name: ["Lao"],
      nativeName: ["ພາສາລາວ"],
      direction: "LTR",
      family: "Tai–Kadai",
      countries: ["LAO"]
  }, {
      iso639_1: "lt",
      iso639_2: "lit",
      iso639_2en: "lit",
      iso639_3: "lit",
      name: ["Lithuanian"],
      nativeName: ["lietuvių kalba"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["LTU"],
      langCultureMs: [{
          langCultureName: "lt-LT",
          displayName: "Lithuanian - Lithuania",
          cultureCode: "0x0427"
      }]
  }, {
      iso639_1: "lu",
      iso639_2: "lub",
      iso639_2en: "lub",
      iso639_3: "lub",
      name: ["Luba-Katanga"],
      nativeName: ["Tshiluba"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["COD"]
  }, {
      iso639_1: "lv",
      iso639_2: "lav",
      iso639_2en: "lav",
      iso639_3: "lav",
      name: ["Latvian"],
      nativeName: ["latviešu valoda"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["LVA"],
      langCultureMs: [{
          langCultureName: "lv-LV",
          displayName: "Latvian - Latvia",
          cultureCode: "0x0426"
      }]
  }, {
      iso639_1: "gv",
      iso639_2: "glv",
      iso639_2en: "glv",
      iso639_3: "glv",
      name: ["Manx"],
      nativeName: ["Gaelg", "Gailck"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "mk",
      iso639_2: "mkd",
      iso639_2en: "mac",
      iso639_3: "mkd",
      name: ["Macedonian"],
      nativeName: ["македонски јазик"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["MKD"],
      langCultureMs: [{
          langCultureName: "mk-MK",
          displayName: "Macedonian (FYROM)",
          cultureCode: "0x042F"
      }]
  }, {
      iso639_1: "mg",
      iso639_2: "mlg",
      iso639_2en: "mlg",
      iso639_3: "mlg",
      name: ["Malagasy"],
      nativeName: ["fiteny malagasy"],
      direction: "LTR",
      family: "Austronesian",
      countries: ["MDG"]
  }, {
      iso639_1: "ms",
      iso639_2: "msa",
      iso639_2en: "may",
      iso639_3: "msa",
      name: ["Malay"],
      nativeName: ["bahasa Melayu", "بهاس ملايو‎"],
      direction: "LTR",
      family: "Austronesian",
      countries: ["MYS", "BRN", "SGP", "IDN"],
      langCultureMs: [{
          langCultureName: "ms-BN",
          displayName: "Malay - Brunei",
          cultureCode: "0x083E"
      }, {
          langCultureName: "ms-MY",
          displayName: "Malay - Malaysia",
          cultureCode: "0x043E"
      }]
  }, {
      iso639_1: "ml",
      iso639_2: "mal",
      iso639_2en: "mal",
      iso639_3: "mal",
      name: ["Malayalam"],
      nativeName: ["മലയാളം"],
      direction: "LTR",
      family: "Dravidian"
  }, {
      iso639_1: "mt",
      iso639_2: "mlt",
      iso639_2en: "mlt",
      iso639_3: "mlt",
      name: ["Maltese"],
      nativeName: ["Malti"],
      direction: "LTR",
      family: "Afro-Asiatic",
      countries: ["MLT"]
  }, {
      iso639_1: "mi",
      iso639_2: "mri",
      iso639_2en: "mao",
      iso639_3: "mri",
      name: ["Māori"],
      nativeName: ["te reo Māori"],
      direction: "LTR",
      family: "Austronesian",
      countries: ["NZL"]
  }, {
      iso639_1: "mr",
      iso639_2: "mar",
      iso639_2en: "mar",
      iso639_3: "mar",
      name: ["Marathi (Marāṭhī)"],
      nativeName: ["मराठी"],
      direction: "LTR",
      family: "Indo-European",
      langCultureMs: [{
          langCultureName: "mr-IN",
          displayName: "Marathi - India",
          cultureCode: "0x044E"
      }]
  }, {
      iso639_1: "mh",
      iso639_2: "mah",
      iso639_2en: "mah",
      iso639_3: "mah",
      name: ["Marshallese"],
      nativeName: ["Kajin M̧ajeļ"],
      direction: "LTR",
      family: "Austronesian",
      countries: ["MHL"]
  }, {
      iso639_1: "mn",
      iso639_2: "mon",
      iso639_2en: "mon",
      iso639_3: "mon",
      name: ["Mongolian"],
      nativeName: ["монгол"],
      direction: "LTR",
      family: "Mongolic",
      countries: ["MNG"],
      langCultureMs: [{
          langCultureName: "mn-MN",
          displayName: "Mongolian - Mongolia",
          cultureCode: "0x0450"
      }]
  }, {
      iso639_1: "na",
      iso639_2: "nau",
      iso639_2en: "nau",
      iso639_3: "nau",
      name: ["Nauru"],
      nativeName: ["Ekakairũ Naoero"],
      direction: "LTR",
      family: "Austronesian"
  }, {
      iso639_1: "nv",
      iso639_2: "nav",
      iso639_2en: "nav",
      iso639_3: "nav",
      name: ["Navajo", "Navaho"],
      nativeName: ["Diné bizaad", "Dinékʼehǰí"],
      direction: "LTR",
      family: "Dené–Yeniseian"
  }, {
      iso639_1: "nb",
      iso639_2: "nob",
      iso639_2en: "nob",
      iso639_3: "nob",
      name: ["Norwegian Bokmål"],
      nativeName: ["Norsk bokmål"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["NOR"],
      langCultureMs: [{
          langCultureName: "nb-NO",
          displayName: "Norwegian (Bokmål) - Norway",
          cultureCode: "0x0414"
      }]
  }, {
      iso639_1: "nd",
      iso639_2: "nde",
      iso639_2en: "nde",
      iso639_3: "nde",
      name: ["Northern Ndebele"],
      nativeName: ["isiNdebele"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["ZAF", "ZWE"]
  }, {
      iso639_1: "",
      iso639_2: "nso",
      iso639_2en: "nso",
      iso639_3: "nso",
      name: ["Northern Sotho"],
      nativeName: ["Sesotho sa Leboa"],
      direction: "LTR",
      family: "Niger-Congo",
      countries: ["ZAF"]
  }, {
      iso639_1: "ne",
      iso639_2: "nep",
      iso639_2en: "nep",
      iso639_3: "nep",
      name: ["Nepali"],
      nativeName: ["नेपाली"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["NPL"]
  }, {
      iso639_1: "ng",
      iso639_2: "ndo",
      iso639_2en: "ndo",
      iso639_3: "ndo",
      name: ["Ndonga"],
      nativeName: ["Owambo"],
      direction: "LTR",
      family: "Niger–Congo"
  }, {
      iso639_1: "nn",
      iso639_2: "nno",
      iso639_2en: "nno",
      iso639_3: "nno",
      name: ["Norwegian Nynorsk"],
      nativeName: ["Norsk nynorsk"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["NOR"],
      langCultureMs: [{
          langCultureName: "nn-NO",
          displayName: "Norwegian (Nynorsk) - Norway",
          cultureCode: "0x0814"
      }]
  }, {
      iso639_1: "no",
      iso639_2: "nor",
      iso639_2en: "nor",
      iso639_3: "nor",
      name: ["Norwegian"],
      nativeName: ["Norsk"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["NOR"]
  }, {
      iso639_1: "ii",
      iso639_2: "iii",
      iso639_2en: "iii",
      iso639_3: "iii",
      name: ["Nuosu"],
      nativeName: ["Nuosuhxop"],
      direction: "LTR",
      family: "Sino-Tibetan"
  }, {
      iso639_1: "nr",
      iso639_2: "nbl",
      iso639_2en: "nbl",
      iso639_3: "nbl",
      name: ["Southern Ndebele"],
      nativeName: ["isiNdebele"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["ZAF"]
  }, {
      iso639_1: "oc",
      iso639_2: "oci",
      iso639_2en: "oci",
      iso639_3: "oci",
      name: ["Occitan"],
      nativeName: ["occitan", "lenga d'òc"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "oj",
      iso639_2: "oji",
      iso639_2en: "oji",
      iso639_3: "oji",
      name: ["Ojibwe", "Ojibwa"],
      nativeName: ["ᐊᓂᔑᓈᐯᒧᐎᓐ"],
      direction: "LTR",
      family: "Algonquian"
  }, {
      iso639_1: "cu",
      iso639_2: "chu",
      iso639_2en: "chu",
      iso639_3: "chu",
      name: ["Old Church Slavonic", "Church Slavonic", "Old Bulgarian"],
      nativeName: ["ѩзыкъ словѣньскъ"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "om",
      iso639_2: "orm",
      iso639_2en: "orm",
      iso639_3: "orm",
      name: ["Oromo"],
      nativeName: ["Afaan Oromoo"],
      direction: "LTR",
      family: "Afro-Asiatic"
  }, {
      iso639_1: "or",
      iso639_2: "ori",
      iso639_2en: "ori",
      iso639_3: "ori",
      name: ["Oriya"],
      nativeName: ["ଓଡ଼ିଆ"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "os",
      iso639_2: "oss",
      iso639_2en: "oss",
      iso639_3: "oss",
      name: ["Ossetian", "Ossetic"],
      nativeName: ["ирон æвзаг"],
      direction: "LTR",
      family: "Indo-European",
      countries: []
  }, {
      iso639_1: "pa",
      iso639_2: "pan",
      iso639_2en: "pan",
      iso639_3: "pan",
      name: ["Panjabi", "Punjabi"],
      nativeName: ["ਪੰਜਾਬੀ", "پنجابی‎"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["IND"],
      langCultureMs: [{
          langCultureName: "pa-IN",
          displayName: "Punjabi - India",
          cultureCode: "0x0446"
      }]
  }, {
      iso639_1: "pi",
      iso639_2: "pli",
      iso639_2en: "pli",
      iso639_3: "pli",
      name: ["Pāli"],
      nativeName: ["पाऴि"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "fa",
      iso639_2: "fas",
      iso639_2en: "per",
      iso639_3: "fas",
      name: ["Persian", "Farsi"],
      nativeName: ["فارسی"],
      direction: "RTL",
      family: "Indo-European",
      countries: ["IRN", "AFG", "TJK"],
      langCultureMs: [{
          langCultureName: "fa-IR",
          displayName: "Farsi - Iran",
          cultureCode: "0x0429"
      }]
  }, {
      iso639_1: "pl",
      iso639_2: "pol",
      iso639_2en: "pol",
      iso639_3: "pol",
      name: ["Polish"],
      nativeName: ["język polski", "polszczyzna"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["POL"],
      langCultureMs: [{
          langCultureName: "pl-PL",
          displayName: "Polish - Poland",
          cultureCode: "0x0415"
      }]
  }, {
      iso639_1: "ps",
      iso639_2: "pus",
      iso639_2en: "pus",
      iso639_3: "pus",
      name: ["Pashto", "Pushto"],
      nativeName: ["پښتو"],
      direction: "RTL",
      family: "Indo-European",
      countries: ["AFG"]
  }, {
      iso639_1: "pt",
      iso639_2: "por",
      iso639_2en: "por",
      iso639_3: "por",
      name: ["Portuguese"],
      nativeName: ["português"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["AGO", "BRA", "CPV", "TLS", "GNQ", "GNB", "MAC", "MOZ", "PRT", "STP"],
      langCultureMs: [{
          langCultureName: "pt-BR",
          displayName: "Portuguese - Brazil",
          cultureCode: "0x0416"
      }, {
          langCultureName: "pt-PT",
          displayName: "Portuguese - Portugal",
          cultureCode: "0x0816"
      }]
  }, {
      iso639_1: "qu",
      iso639_2: "que",
      iso639_2en: "que",
      iso639_3: "que",
      name: ["Quechua"],
      nativeName: ["Runa Simi", "Kichwa"],
      direction: "LTR",
      family: "Quechuan",
      countries: ["BOL", "PER"]
  }, {
      iso639_1: "rm",
      iso639_2: "roh",
      iso639_2en: "roh",
      iso639_3: "roh",
      name: ["Romansh"],
      nativeName: ["rumantsch grischun"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["CHE"]
  }, {
      iso639_1: "rn",
      iso639_2: "run",
      iso639_2en: "run",
      iso639_3: "run",
      name: ["Kirundi"],
      nativeName: ["Ikirundi"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["BDI"]
  }, {
      iso639_1: "ro",
      iso639_2: "ron",
      iso639_2en: "rum",
      iso639_3: "ron",
      name: ["Romanian"],
      nativeName: ["limba română"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["ROU", "MDA"],
      langCultureMs: [{
          langCultureName: "ro-RO",
          displayName: "Romanian - Romania",
          cultureCode: "0x0418"
      }]
  }, {
      iso639_1: "ru",
      iso639_2: "rus",
      iso639_2en: "rus",
      iso639_3: "rus",
      name: ["Russian"],
      nativeName: ["русский язык"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["RUS", "BLR", "KAZ", "KGZ", "TJK"],
      langCultureMs: [{
          langCultureName: "ru-RU",
          displayName: "Russian - Russia",
          cultureCode: "0x0419"
      }]
  }, {
      iso639_1: "sa",
      iso639_2: "san",
      iso639_2en: "san",
      iso639_3: "san",
      name: ["Sanskrit (Saṁskṛta)"],
      nativeName: ["संस्कृतम्"],
      direction: "LTR",
      family: "Indo-European",
      langCultureMs: [{
          langCultureName: "sa-IN",
          displayName: "Sanskrit - India",
          cultureCode: "0x044F"
      }]
  }, {
      iso639_1: "sc",
      iso639_2: "srd",
      iso639_2en: "srd",
      iso639_3: "srd",
      name: ["Sardinian"],
      nativeName: ["sardu"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "sd",
      iso639_2: "snd",
      iso639_2en: "snd",
      iso639_3: "snd",
      name: ["Sindhi"],
      nativeName: ["सिन्धी", "سنڌي، سندھی‎"],
      direction: "RTL",
      family: "Indo-European"
  }, {
      iso639_1: "se",
      iso639_2: "sme",
      iso639_2en: "sme",
      iso639_3: "sme",
      name: ["Northern Sami"],
      nativeName: ["Davvisámegiella"],
      direction: "LTR",
      family: "Uralic"
  }, {
      iso639_1: "sm",
      iso639_2: "smo",
      iso639_2en: "smo",
      iso639_3: "smo",
      name: ["Samoan"],
      nativeName: ["gagana fa'a Samoa"],
      direction: "LTR",
      family: "Austronesian"
  }, {
      iso639_1: "sg",
      iso639_2: "sag",
      iso639_2en: "sag",
      iso639_3: "sag",
      name: ["Sango"],
      nativeName: ["yângâ tî sängö"],
      direction: "LTR",
      family: "Creole",
      countries: ["CAF"]
  }, {
      iso639_1: "sr",
      iso639_2: "srp",
      iso639_2en: "srp",
      iso639_3: "srp",
      name: ["Serbian"],
      nativeName: ["српски језик"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["SRB", "BIH"],
      langCultureMs: [{
          langCultureName: "Cy-sr-SP",
          displayName: "Serbian (Cyrillic) - Serbia",
          cultureCode: "0x0C1A"
      }, {
          langCultureName: "Lt-sr-SP",
          displayName: "Serbian (Latin) - Serbia",
          cultureCode: "0x081A"
      }]
  }, {
      iso639_1: "gd",
      iso639_2: "gla",
      iso639_2en: "gla",
      iso639_3: "gla",
      name: ["Scottish Gaelic", "Gaelic"],
      nativeName: ["Gàidhlig"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "sn",
      iso639_2: "sna",
      iso639_2en: "sna",
      iso639_3: "sna",
      name: ["Shona"],
      nativeName: ["chiShona"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["ZWE"]
  }, {
      iso639_1: "si",
      iso639_2: "sin",
      iso639_2en: "sin",
      iso639_3: "sin",
      name: ["Sinhala", "Sinhalese"],
      nativeName: ["සිංහල"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["LKA"]
  }, {
      iso639_1: "sk",
      iso639_2: "slk",
      iso639_2en: "slo",
      iso639_3: "slk",
      name: ["Slovak"],
      nativeName: ["slovenčina", "slovenský jazyk"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["SVK", "CZE"],
      langCultureMs: [{
          langCultureName: "sk-SK",
          displayName: "Slovak - Slovakia",
          cultureCode: "0x041B"
      }]
  }, {
      iso639_1: "sl",
      iso639_2: "slv",
      iso639_2en: "slv",
      iso639_3: "slv",
      name: ["Slovene"],
      nativeName: ["slovenski jezik", "slovenščina"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["SVN"],
      langCultureMs: [{
          langCultureName: "sl-SI",
          displayName: "Slovenian - Slovenia",
          cultureCode: "0x0424"
      }]
  }, {
      iso639_1: "so",
      iso639_2: "som",
      iso639_2en: "som",
      iso639_3: "som",
      name: ["Somali"],
      nativeName: ["Soomaaliga", "af Soomaali"],
      direction: "LTR",
      family: "Afro-Asiatic",
      countries: ["DJI", "SOM"]
  }, {
      iso639_1: "st",
      iso639_2: "sot",
      iso639_2en: "sot",
      iso639_3: "sot",
      name: ["Southern Sotho"],
      nativeName: ["Sesotho"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["LSO", "ZAF"]
  }, {
      iso639_1: "es",
      iso639_2: "spa",
      iso639_2en: "spa",
      iso639_3: "spa",
      name: ["Spanish", "Castilian"],
      nativeName: ["español", "castellano"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["ARG", "BOL", "CHL", "COL", "CRI", "CUB", "DOM", "ECU", "SLV", "GNQ", "GTM", "HND", "MEX", "NIC", "PAN", "PRY", "PER", "PRI", "ESP", "URY", "VEN", "ESH"],
      langCultureMs: [{
          langCultureName: "es-AR",
          displayName: "Spanish - Argentina",
          cultureCode: "0x2C0A"
      }, {
          langCultureName: "es-BO",
          displayName: "Spanish - Bolivia",
          cultureCode: "0x400A"
      }, {
          langCultureName: "es-CL",
          displayName: "Spanish - Chile",
          cultureCode: "0x340A"
      }, {
          langCultureName: "es-CO",
          displayName: "Spanish - Colombia",
          cultureCode: "0x240A"
      }, {
          langCultureName: "es-CR",
          displayName: "Spanish - Costa Rica",
          cultureCode: "0x140A"
      }, {
          langCultureName: "es-DO",
          displayName: "Spanish - Dominican Republic",
          cultureCode: "0x1C0A"
      }, {
          langCultureName: "es-EC",
          displayName: "Spanish - Ecuador",
          cultureCode: "0x300A"
      }, {
          langCultureName: "es-SV",
          displayName: "Spanish - El Salvador",
          cultureCode: "0x440A"
      }, {
          langCultureName: "es-GT",
          displayName: "Spanish - Guatemala",
          cultureCode: "0x100A"
      }, {
          langCultureName: "es-HN",
          displayName: "Spanish - Honduras",
          cultureCode: "0x480A"
      }, {
          langCultureName: "es-MX",
          displayName: "Spanish - Mexico",
          cultureCode: "0x080A"
      }, {
          langCultureName: "es-NI",
          displayName: "Spanish - Nicaragua",
          cultureCode: "0x4C0A"
      }, {
          langCultureName: "es-PA",
          displayName: "Spanish - Panama",
          cultureCode: "0x180A"
      }, {
          langCultureName: "es-PY",
          displayName: "Spanish - Paraguay",
          cultureCode: "0x3C0A"
      }, {
          langCultureName: "es-PE",
          displayName: "Spanish - Peru",
          cultureCode: "0x280A"
      }, {
          langCultureName: "es-PR",
          displayName: "Spanish - Puerto Rico",
          cultureCode: "0x500A"
      }, {
          langCultureName: "es-ES",
          displayName: "Spanish - Spain",
          cultureCode: "0x0C0A"
      }, {
          langCultureName: "es-UY",
          displayName: "Spanish - Uruguay",
          cultureCode: "0x380A"
      }, {
          langCultureName: "es-VE",
          displayName: "Spanish - Venezuela",
          cultureCode: "0x200A"
      }]
  }, {
      iso639_1: "su",
      iso639_2: "sun",
      iso639_2en: "sun",
      iso639_3: "sun",
      name: ["Sundanese"],
      nativeName: ["Basa Sunda"],
      direction: "LTR",
      family: "Austronesian"
  }, {
      iso639_1: "sw",
      iso639_2: "swa",
      iso639_2en: "swa",
      iso639_3: "swa",
      name: ["Swahili"],
      nativeName: ["Kiswahili"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["COD", "KEN", "TZA", "UGA"],
      langCultureMs: [{
          langCultureName: "sw-KE",
          displayName: "Swahili - Kenya",
          cultureCode: "0x0441"
      }]
  }, {
      iso639_1: "ss",
      iso639_2: "ssw",
      iso639_2en: "ssw",
      iso639_3: "ssw",
      name: ["Swati"],
      nativeName: ["SiSwati"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["SWZ", "ZAF"]
  }, {
      iso639_1: "sv",
      iso639_2: "swe",
      iso639_2en: "swe",
      iso639_3: "swe",
      name: ["Swedish"],
      nativeName: ["Svenska"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["SWE", "FIN", "ALA"],
      langCultureMs: [{
          langCultureName: "sv-FI",
          displayName: "Swedish - Finland",
          cultureCode: "0x081D"
      }, {
          langCultureName: "sv-SE",
          displayName: "Swedish - Sweden",
          cultureCode: "0x041D"
      }]
  }, {
      iso639_1: "ta",
      iso639_2: "tam",
      iso639_2en: "tam",
      iso639_3: "tam",
      name: ["Tamil"],
      nativeName: ["தமிழ்"],
      direction: "LTR",
      family: "Dravidian",
      countries: ["IND", "SGP", "LKA", "MYS", "MUS"],
      langCultureMs: [{
          langCultureName: "ta-IN",
          displayName: "Tamil - India",
          cultureCode: "0x0449"
      }]
  }, {
      iso639_1: "te",
      iso639_2: "tel",
      iso639_2en: "tel",
      iso639_3: "tel",
      name: ["Telugu"],
      nativeName: ["తెలుగు"],
      direction: "LTR",
      family: "Dravidian",
      countries: ["IND"],
      langCultureMs: [{
          langCultureName: "te-IN",
          displayName: "Telugu - India",
          cultureCode: "0x044A"
      }]
  }, {
      iso639_1: "tg",
      iso639_2: "tgk",
      iso639_2en: "tgk",
      iso639_3: "tgk",
      name: ["Tajik"],
      nativeName: ["тоҷикӣ", "toğikī", "تاجیکی‎"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["TJK"]
  }, {
      iso639_1: "th",
      iso639_2: "tha",
      iso639_2en: "tha",
      iso639_3: "tha",
      name: ["Thai"],
      nativeName: ["ไทย"],
      direction: "LTR",
      family: "Tai–Kadai",
      countries: ["THA"],
      langCultureMs: [{
          langCultureName: "th-TH",
          displayName: "Thai - Thailand",
          cultureCode: "0x041E"
      }]
  }, {
      iso639_1: "ti",
      iso639_2: "tir",
      iso639_2en: "tir",
      iso639_3: "tir",
      name: ["Tigrinya"],
      nativeName: ["ትግርኛ"],
      direction: "LTR",
      family: "Afro-Asiatic",
      countries: ["ERI"]
  }, {
      iso639_1: "bo",
      iso639_2: "bod",
      iso639_2en: "tib",
      iso639_3: "bod",
      name: ["Tibetan Standard", "Tibetan", "Central"],
      nativeName: ["བོད་ཡིག"],
      direction: "LTR",
      family: "Sino-Tibetan"
  }, {
      iso639_1: "tk",
      iso639_2: "tuk",
      iso639_2en: "tuk",
      iso639_3: "tuk",
      name: ["Turkmen"],
      nativeName: ["Türkmen", "Түркмен"],
      direction: "LTR",
      family: "Turkic",
      countries: ["TKM"]
  }, {
      iso639_1: "tl",
      iso639_2: "tgl",
      iso639_2en: "tgl",
      iso639_3: "tgl",
      name: ["Tagalog"],
      nativeName: ["Wikang Tagalog"],
      direction: "LTR",
      family: "Austronesian",
      countries: ["PHL"]
  }, {
      iso639_1: "",
      iso639_2: "fil",
      iso639_2en: "fil",
      iso639_3: "fil",
      name: ["Filipino"],
      nativeName: ["Filipino"],
      direction: "LTR",
      family: "Austronesian",
      countries: ["PHL"]
  }, {
      iso639_1: "tn",
      iso639_2: "tsn",
      iso639_2en: "tsn",
      iso639_3: "tsn",
      name: ["Tswana"],
      nativeName: ["Setswana"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["BWA", "ZAF"]
  }, {
      iso639_1: "to",
      iso639_2: "ton",
      iso639_2en: "ton",
      iso639_3: "ton",
      name: ["Tonga (Tonga Islands)"],
      nativeName: ["faka Tonga"],
      direction: "LTR",
      family: "Austronesian"
  }, {
      iso639_1: "tr",
      iso639_2: "tur",
      iso639_2en: "tur",
      iso639_3: "tur",
      name: ["Turkish"],
      nativeName: ["Türkçe"],
      direction: "LTR",
      family: "Turkic",
      countries: ["TUR", "CYP"],
      langCultureMs: [{
          langCultureName: "tr-TR",
          displayName: "Turkish - Turkey",
          cultureCode: "0x041F"
      }]
  }, {
      iso639_1: "ts",
      iso639_2: "tso",
      iso639_2en: "tso",
      iso639_3: "tso",
      name: ["Tsonga"],
      nativeName: ["Xitsonga"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["ZAF"]
  }, {
      iso639_1: "tt",
      iso639_2: "tat",
      iso639_2en: "tat",
      iso639_3: "tat",
      name: ["Tatar"],
      nativeName: ["татар теле", "tatar tele"],
      direction: "LTR",
      family: "Turkic",
      langCultureMs: [{
          langCultureName: "tt-RU",
          displayName: "Tatar - Russia",
          cultureCode: "0x0444"
      }]
  }, {
      iso639_1: "tw",
      iso639_2: "twi",
      iso639_2en: "twi",
      iso639_3: "twi",
      name: ["Twi"],
      nativeName: ["Twi"],
      direction: "LTR",
      family: "Niger–Congo"
  }, {
      iso639_1: "ty",
      iso639_2: "tah",
      iso639_2en: "tah",
      iso639_3: "tah",
      name: ["Tahitian"],
      nativeName: ["Reo Tahiti"],
      direction: "LTR",
      family: "Austronesian"
  }, {
      iso639_1: "ug",
      iso639_2: "uig",
      iso639_2en: "uig",
      iso639_3: "uig",
      name: ["Uyghur", "Uighur"],
      nativeName: ["Uyƣurqə", "ئۇيغۇرچە‎"],
      direction: "RTL",
      family: "Turkic"
  }, {
      iso639_1: "uk",
      iso639_2: "ukr",
      iso639_2en: "ukr",
      iso639_3: "ukr",
      name: ["Ukrainian"],
      nativeName: ["українська мова"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["UKR"],
      langCultureMs: [{
          langCultureName: "uk-UA",
          displayName: "Ukrainian - Ukraine",
          cultureCode: "0x0422"
      }]
  }, {
      iso639_1: "ur",
      iso639_2: "urd",
      iso639_2en: "urd",
      iso639_3: "urd",
      name: ["Urdu"],
      nativeName: ["اردو"],
      direction: "RTL",
      family: "Indo-European",
      countries: ["PAK", "FJI"],
      langCultureMs: [{
          langCultureName: "ur-PK",
          displayName: "Urdu - Pakistan",
          cultureCode: "0x0420"
      }]
  }, {
      iso639_1: "uz",
      iso639_2: "uzb",
      iso639_2en: "uzb",
      iso639_3: "uzb",
      name: ["Uzbek"],
      nativeName: ["O‘zbek", "Ўзбек", "أۇزبېك‎"],
      direction: "LTR",
      family: "Turkic",
      countries: ["UZB"],
      langCultureMs: [{
          langCultureName: "Cy-uz-UZ",
          displayName: "Uzbek (Cyrillic) - Uzbekistan",
          cultureCode: "0x0843"
      }, {
          langCultureName: "Lt-uz-UZ",
          displayName: "Uzbek (Latin) - Uzbekistan",
          cultureCode: "0x0443"
      }]
  }, {
      iso639_1: "ve",
      iso639_2: "ven",
      iso639_2en: "ven",
      iso639_3: "ven",
      name: ["Venda"],
      nativeName: ["Tshivenḓa"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["ZAF"]
  }, {
      iso639_1: "vi",
      iso639_2: "vie",
      iso639_2en: "vie",
      iso639_3: "vie",
      name: ["Vietnamese"],
      nativeName: ["Tiếng Việt"],
      direction: "LTR",
      family: "Austroasiatic",
      countries: ["VNM"],
      langCultureMs: [{
          langCultureName: "vi-VN",
          displayName: "Vietnamese - Vietnam",
          cultureCode: "0x042A"
      }]
  }, {
      iso639_1: "vo",
      iso639_2: "vol",
      iso639_2en: "vol",
      iso639_3: "vol",
      name: ["Volapük"],
      nativeName: ["Volapük"],
      direction: "LTR",
      family: "Constructed"
  }, {
      iso639_1: "wa",
      iso639_2: "wln",
      iso639_2en: "wln",
      iso639_3: "wln",
      name: ["Walloon"],
      nativeName: ["walon"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "cy",
      iso639_2: "cym",
      iso639_2en: "wel",
      iso639_3: "cym",
      name: ["Welsh"],
      nativeName: ["Cymraeg"],
      direction: "LTR",
      family: "Indo-European",
      countries: ["GBR"]
  }, {
      iso639_1: "wo",
      iso639_2: "wol",
      iso639_2en: "wol",
      iso639_3: "wol",
      name: ["Wolof"],
      nativeName: ["Wollof"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["SEN"]
  }, {
      iso639_1: "fy",
      iso639_2: "fry",
      iso639_2en: "fry",
      iso639_3: "fry",
      name: ["Western Frisian"],
      nativeName: ["Frysk"],
      direction: "LTR",
      family: "Indo-European"
  }, {
      iso639_1: "xh",
      iso639_2: "xho",
      iso639_2en: "xho",
      iso639_3: "xho",
      name: ["Xhosa"],
      nativeName: ["isiXhosa"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["ZAF"]
  }, {
      iso639_1: "yi",
      iso639_2: "yid",
      iso639_2en: "yid",
      iso639_3: "yid",
      name: ["Yiddish"],
      nativeName: ["ייִדיש"],
      direction: "RTL",
      family: "Indo-European"
  }, {
      iso639_1: "yo",
      iso639_2: "yor",
      iso639_2en: "yor",
      iso639_3: "yor",
      name: ["Yoruba"],
      nativeName: ["Yorùbá"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["BEN", "NGA"]
  }, {
      iso639_1: "za",
      iso639_2: "zha",
      iso639_2en: "zha",
      iso639_3: "zha",
      name: ["Zhuang", "Chuang"],
      nativeName: ["Saɯ cueŋƅ", "Saw cuengh"],
      direction: "LTR",
      family: "Tai–Kadai"
  }, {
      iso639_1: "zu",
      iso639_2: "zul",
      iso639_2en: "zul",
      iso639_3: "zul",
      name: ["Zulu"],
      nativeName: ["isiZulu"],
      direction: "LTR",
      family: "Niger–Congo",
      countries: ["ZAF"]
  }, {
      iso639_1: "",
      iso639_2: "ace",
      iso639_2en: "ace",
      iso639_3: "ace",
      name: ["Achinese"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ach",
      iso639_2en: "ach",
      iso639_3: "ach",
      name: ["Acoli"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ada",
      iso639_2en: "ada",
      iso639_3: "ada",
      name: ["Adangme"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ady",
      iso639_2en: "ady",
      iso639_3: "ady",
      name: ["Adyghe", " Adygei"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "afa",
      iso639_2en: "afa",
      iso639_3: "afa",
      name: ["Afro-Asiatic languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "afh",
      iso639_2en: "afh",
      iso639_3: "afh",
      name: ["Afrihili"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ain",
      iso639_2en: "ain",
      iso639_3: "ain",
      name: ["Ainu"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "akk",
      iso639_2en: "akk",
      iso639_3: "akk",
      name: ["Akkadian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ale",
      iso639_2en: "ale",
      iso639_3: "ale",
      name: ["Aleut"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "alg",
      iso639_2en: "alg",
      iso639_3: "alg",
      name: ["Algonquian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "alt",
      iso639_2en: "alt",
      iso639_3: "alt",
      name: ["Southern Altai"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ang",
      iso639_2en: "ang",
      iso639_3: "ang",
      name: ["English, Old (ca.450-1100)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "anp",
      iso639_2en: "anp",
      iso639_3: "anp",
      name: ["Angika"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "apa",
      iso639_2en: "apa",
      iso639_3: "apa",
      name: ["Apache languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "arc",
      iso639_2en: "arc",
      iso639_3: "arc",
      name: ["Official Aramaic (700-300 BCE)", " Imperial Aramaic (700-300 BCE)"],
      nativeName: [""],
      direction: "RTL",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "arn",
      iso639_2en: "arn",
      iso639_3: "arn",
      name: ["Mapudungun", " Mapuche"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "arp",
      iso639_2en: "arp",
      iso639_3: "arp",
      name: ["Arapaho"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "art",
      iso639_2en: "art",
      iso639_3: "art",
      name: ["Artificial languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "arw",
      iso639_2en: "arw",
      iso639_3: "arw",
      name: ["Arawak"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ast",
      iso639_2en: "ast",
      iso639_3: "ast",
      name: ["Asturian", " Bable", " Leonese", " Asturleonese"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ath",
      iso639_2en: "ath",
      iso639_3: "ath",
      name: ["Athapascan languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "aus",
      iso639_2en: "aus",
      iso639_3: "aus",
      name: ["Australian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "awa",
      iso639_2en: "awa",
      iso639_3: "awa",
      name: ["Awadhi"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bad",
      iso639_2en: "bad",
      iso639_3: "bad",
      name: ["Banda languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bai",
      iso639_2en: "bai",
      iso639_3: "bai",
      name: ["Bamileke languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bal",
      iso639_2en: "bal",
      iso639_3: "bal",
      name: ["Baluchi", "Balochi"],
      nativeName: [""],
      direction: "RTL",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ban",
      iso639_2en: "ban",
      iso639_3: "ban",
      name: ["Balinese"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bas",
      iso639_2en: "bas",
      iso639_3: "bas",
      name: ["Basa"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bat",
      iso639_2en: "bat",
      iso639_3: "bat",
      name: ["Baltic languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bej",
      iso639_2en: "bej",
      iso639_3: "bej",
      name: ["Beja", " Bedawiyet"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bem",
      iso639_2en: "bem",
      iso639_3: "bem",
      name: ["Bemba"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bho",
      iso639_2en: "bho",
      iso639_3: "bho",
      name: ["Bhojpuri"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bik",
      iso639_2en: "bik",
      iso639_3: "bik",
      name: ["Bikol"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bin",
      iso639_2en: "bin",
      iso639_3: "bin",
      name: ["Bini", " Edo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bla",
      iso639_2en: "bla",
      iso639_3: "bla",
      name: ["Siksika"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bnt",
      iso639_2en: "bnt",
      iso639_3: "bnt",
      name: ["Bantu languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bra",
      iso639_2en: "bra",
      iso639_3: "bra",
      name: ["Braj"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "btk",
      iso639_2en: "btk",
      iso639_3: "btk",
      name: ["Batak languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bua",
      iso639_2en: "bua",
      iso639_3: "bua",
      name: ["Buriat"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "bug",
      iso639_2en: "bug",
      iso639_3: "bug",
      name: ["Buginese"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "byn",
      iso639_2en: "byn",
      iso639_3: "byn",
      name: ["Blin", " Bilin"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cad",
      iso639_2en: "cad",
      iso639_3: "cad",
      name: ["Caddo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cai",
      iso639_2en: "cai",
      iso639_3: "cai",
      name: ["Central American Indian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "car",
      iso639_2en: "car",
      iso639_3: "car",
      name: ["Galibi Carib"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cau",
      iso639_2en: "cau",
      iso639_3: "cau",
      name: ["Caucasian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ceb",
      iso639_2en: "ceb",
      iso639_3: "ceb",
      name: ["Cebuano"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cel",
      iso639_2en: "cel",
      iso639_3: "cel",
      name: ["Celtic languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "chb",
      iso639_2en: "chb",
      iso639_3: "chb",
      name: ["Chibcha"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "chg",
      iso639_2en: "chg",
      iso639_3: "chg",
      name: ["Chagatai"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "chk",
      iso639_2en: "chk",
      iso639_3: "chk",
      name: ["Chuukese"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "chm",
      iso639_2en: "chm",
      iso639_3: "chm",
      name: ["Mari"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "chn",
      iso639_2en: "chn",
      iso639_3: "chn",
      name: ["Chinook jargon"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cho",
      iso639_2en: "cho",
      iso639_3: "cho",
      name: ["Choctaw"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "chp",
      iso639_2en: "chp",
      iso639_3: "chp",
      name: ["Chipewyan", " Dene Suline"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "chr",
      iso639_2en: "chr",
      iso639_3: "chr",
      name: ["Cherokee"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "chy",
      iso639_2en: "chy",
      iso639_3: "chy",
      name: ["Cheyenne"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cmc",
      iso639_2en: "cmc",
      iso639_3: "cmc",
      name: ["Chamic languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cop",
      iso639_2en: "cop",
      iso639_3: "cop",
      name: ["Coptic"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cpe",
      iso639_2en: "cpe",
      iso639_3: "cpe",
      name: ["Creoles and pidgins, English based"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cpf",
      iso639_2en: "cpf",
      iso639_3: "cpf",
      name: ["Creoles and pidgins, French-based"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cpp",
      iso639_2en: "cpp",
      iso639_3: "cpp",
      name: ["Creoles and pidgins, Portuguese-based"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "crh",
      iso639_2en: "crh",
      iso639_3: "crh",
      name: ["Crimean Tatar", " Crimean Turkish"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "crp",
      iso639_2en: "crp",
      iso639_3: "crp",
      name: ["Creoles and pidgins"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "csb",
      iso639_2en: "csb",
      iso639_3: "csb",
      name: ["Kashubian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "cus",
      iso639_2en: "cus",
      iso639_3: "cus",
      name: ["Cushitic languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "dak",
      iso639_2en: "dak",
      iso639_3: "dak",
      name: ["Dakota"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "dar",
      iso639_2en: "dar",
      iso639_3: "dar",
      name: ["Dargwa"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "day",
      iso639_2en: "day",
      iso639_3: "day",
      name: ["Land Dayak languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "del",
      iso639_2en: "del",
      iso639_3: "del",
      name: ["Delaware"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "den",
      iso639_2en: "den",
      iso639_3: "den",
      name: ["Slave (Athapascan)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "dgr",
      iso639_2en: "dgr",
      iso639_3: "dgr",
      name: ["Dogrib"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "din",
      iso639_2en: "din",
      iso639_3: "din",
      name: ["Dinka"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "doi",
      iso639_2en: "doi",
      iso639_3: "doi",
      name: ["Dogri"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "dra",
      iso639_2en: "dra",
      iso639_3: "dra",
      name: ["Dravidian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "dsb",
      iso639_2en: "dsb",
      iso639_3: "dsb",
      name: ["Lower Sorbian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "dua",
      iso639_2en: "dua",
      iso639_3: "dua",
      name: ["Duala"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "dum",
      iso639_2en: "dum",
      iso639_3: "dum",
      name: ["Dutch, Middle (ca.1050-1350)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "dyu",
      iso639_2en: "dyu",
      iso639_3: "dyu",
      name: ["Dyula"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "efi",
      iso639_2en: "efi",
      iso639_3: "efi",
      name: ["Efik"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "egy",
      iso639_2en: "egy",
      iso639_3: "egy",
      name: ["Egyptian (Ancient)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "eka",
      iso639_2en: "eka",
      iso639_3: "eka",
      name: ["Ekajuk"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "elx",
      iso639_2en: "elx",
      iso639_3: "elx",
      name: ["Elamite"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "enm",
      iso639_2en: "enm",
      iso639_3: "enm",
      name: ["English, Middle (1100-1500)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ewo",
      iso639_2en: "ewo",
      iso639_3: "ewo",
      name: ["Ewondo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "fan",
      iso639_2en: "fan",
      iso639_3: "fan",
      name: ["Fang"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "fat",
      iso639_2en: "fat",
      iso639_3: "fat",
      name: ["Fanti"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "fiu",
      iso639_2en: "fiu",
      iso639_3: "fiu",
      name: ["Finno-Ugrian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "fon",
      iso639_2en: "fon",
      iso639_3: "fon",
      name: ["Fon"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "frm",
      iso639_2en: "frm",
      iso639_3: "frm",
      name: ["French, Middle (ca.1400-1600)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "fro",
      iso639_2en: "fro",
      iso639_3: "fro",
      name: ["French, Old (842-ca.1400)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "frr",
      iso639_2en: "frr",
      iso639_3: "frr",
      name: ["Northern Frisian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "frs",
      iso639_2en: "frs",
      iso639_3: "frs",
      name: ["Eastern Frisian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "fur",
      iso639_2en: "fur",
      iso639_3: "fur",
      name: ["Friulian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "gaa",
      iso639_2en: "gaa",
      iso639_3: "gaa",
      name: ["Ga"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      countries: ["GHA"]
  }, {
      iso639_1: "",
      iso639_2: "gay",
      iso639_2en: "gay",
      iso639_3: "gay",
      name: ["Gayo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "gba",
      iso639_2en: "gba",
      iso639_3: "gba",
      name: ["Gbaya"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "gem",
      iso639_2en: "gem",
      iso639_3: "gem",
      name: ["Germanic languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "gez",
      iso639_2en: "gez",
      iso639_3: "gez",
      name: ["Geez"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "gil",
      iso639_2en: "gil",
      iso639_3: "gil",
      name: ["Gilbertese"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "gmh",
      iso639_2en: "gmh",
      iso639_3: "gmh",
      name: ["German, Middle High (ca.1050-1500)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "goh",
      iso639_2en: "goh",
      iso639_3: "goh",
      name: ["German, Old High (ca.750-1050)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "gon",
      iso639_2en: "gon",
      iso639_3: "gon",
      name: ["Gondi"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "gor",
      iso639_2en: "gor",
      iso639_3: "gor",
      name: ["Gorontalo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "got",
      iso639_2en: "got",
      iso639_3: "got",
      name: ["Gothic"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "grb",
      iso639_2en: "grb",
      iso639_3: "grb",
      name: ["Grebo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "grc",
      iso639_2en: "grc",
      iso639_3: "grc",
      name: ["Greek, Ancient (to 1453)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "gsw",
      iso639_2en: "gsw",
      iso639_3: "gsw",
      name: ["Swiss German", " Alemannic", " Alsatian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "gwi",
      iso639_2en: "gwi",
      iso639_3: "gwi",
      name: ["Gwich'in"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "hai",
      iso639_2en: "hai",
      iso639_3: "hai",
      name: ["Haida"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "haw",
      iso639_2en: "haw",
      iso639_3: "haw",
      name: ["Hawaiian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "hil",
      iso639_2en: "hil",
      iso639_3: "hil",
      name: ["Hiligaynon"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "him",
      iso639_2en: "him",
      iso639_3: "him",
      name: ["Himachali languages", " Western Pahari languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "hit",
      iso639_2en: "hit",
      iso639_3: "hit",
      name: ["Hittite"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "hmn",
      iso639_2en: "hmn",
      iso639_3: "hmn",
      name: ["Hmong", " Mong"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "hsb",
      iso639_2en: "hsb",
      iso639_3: "hsb",
      name: ["Upper Sorbian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "hup",
      iso639_2en: "hup",
      iso639_3: "hup",
      name: ["Hupa"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "iba",
      iso639_2en: "iba",
      iso639_3: "iba",
      name: ["Iban"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ijo",
      iso639_2en: "ijo",
      iso639_3: "ijo",
      name: ["Ijo languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ilo",
      iso639_2en: "ilo",
      iso639_3: "ilo",
      name: ["Iloko"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "inc",
      iso639_2en: "inc",
      iso639_3: "inc",
      name: ["Indic languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ine",
      iso639_2en: "ine",
      iso639_3: "ine",
      name: ["Indo-European languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "inh",
      iso639_2en: "inh",
      iso639_3: "inh",
      name: ["Ingush"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ira",
      iso639_2en: "ira",
      iso639_3: "ira",
      name: ["Iranian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "iro",
      iso639_2en: "iro",
      iso639_3: "iro",
      name: ["Iroquoian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "jbo",
      iso639_2en: "jbo",
      iso639_3: "jbo",
      name: ["Lojban"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "jpr",
      iso639_2en: "jpr",
      iso639_3: "jpr",
      name: ["Judeo-Persian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "jrb",
      iso639_2en: "jrb",
      iso639_3: "jrb",
      name: ["Judeo-Arabic"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kaa",
      iso639_2en: "kaa",
      iso639_3: "kaa",
      name: ["Kara-Kalpak"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kab",
      iso639_2en: "kab",
      iso639_3: "kab",
      name: ["Kabyle"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kac",
      iso639_2en: "kac",
      iso639_3: "kac",
      name: ["Kachin", " Jingpho"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kam",
      iso639_2en: "kam",
      iso639_3: "kam",
      name: ["Kamba"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kar",
      iso639_2en: "kar",
      iso639_3: "kar",
      name: ["Karen languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kaw",
      iso639_2en: "kaw",
      iso639_3: "kaw",
      name: ["Kawi"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kbd",
      iso639_2en: "kbd",
      iso639_3: "kbd",
      name: ["Kabardian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kha",
      iso639_2en: "kha",
      iso639_3: "kha",
      name: ["Khasi"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "khi",
      iso639_2en: "khi",
      iso639_3: "khi",
      name: ["Khoisan languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kho",
      iso639_2en: "kho",
      iso639_3: "kho",
      name: ["Khotanese", " Sakan"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kmb",
      iso639_2en: "kmb",
      iso639_3: "kmb",
      name: ["Kimbundu"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      countries: ["AGO"]
  }, {
      iso639_1: "",
      iso639_2: "kok",
      iso639_2en: "kok",
      iso639_3: "kok",
      name: ["Konkani"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      langCultureMs: [{
          langCultureName: "kok-IN",
          displayName: "Konkani - India",
          cultureCode: "0x0457"
      }]
  }, {
      iso639_1: "",
      iso639_2: "kos",
      iso639_2en: "kos",
      iso639_3: "kos",
      name: ["Kosraean"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kpe",
      iso639_2en: "kpe",
      iso639_3: "kpe",
      name: ["Kpelle"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "krc",
      iso639_2en: "krc",
      iso639_3: "krc",
      name: ["Karachay-Balkar"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "krl",
      iso639_2en: "krl",
      iso639_3: "krl",
      name: ["Karelian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kro",
      iso639_2en: "kro",
      iso639_3: "kro",
      name: ["Kru languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kru",
      iso639_2en: "kru",
      iso639_3: "kru",
      name: ["Kurukh"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kum",
      iso639_2en: "kum",
      iso639_3: "kum",
      name: ["Kumyk"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "kut",
      iso639_2en: "kut",
      iso639_3: "kut",
      name: ["Kutenai"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "lad",
      iso639_2en: "lad",
      iso639_3: "lad",
      name: ["Ladino"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "lah",
      iso639_2en: "lah",
      iso639_3: "lah",
      name: ["Lahnda"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "lam",
      iso639_2en: "lam",
      iso639_3: "lam",
      name: ["Lamba"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "lez",
      iso639_2en: "lez",
      iso639_3: "lez",
      name: ["Lezghian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "lol",
      iso639_2en: "lol",
      iso639_3: "lol",
      name: ["Mongo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "loz",
      iso639_2en: "loz",
      iso639_3: "loz",
      name: ["Lozi"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "lua",
      iso639_2en: "lua",
      iso639_3: "lua",
      name: ["Luba-Lulua"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "lui",
      iso639_2en: "lui",
      iso639_3: "lui",
      name: ["Luiseno"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "lun",
      iso639_2en: "lun",
      iso639_3: "lun",
      name: ["Lunda"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "luo",
      iso639_2en: "luo",
      iso639_3: "luo",
      name: ["Luo (Kenya and Tanzania)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "lus",
      iso639_2en: "lus",
      iso639_3: "lus",
      name: ["Lushai"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mad",
      iso639_2en: "mad",
      iso639_3: "mad",
      name: ["Madurese"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mag",
      iso639_2en: "mag",
      iso639_3: "mag",
      name: ["Magahi"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mai",
      iso639_2en: "mai",
      iso639_3: "mai",
      name: ["Maithili"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mak",
      iso639_2en: "mak",
      iso639_3: "mak",
      name: ["Makasar"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "man",
      iso639_2en: "man",
      iso639_3: "man",
      name: ["Mandingo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "map",
      iso639_2en: "map",
      iso639_3: "map",
      name: ["Austronesian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mas",
      iso639_2en: "mas",
      iso639_3: "mas",
      name: ["Masai"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mdf",
      iso639_2en: "mdf",
      iso639_3: "mdf",
      name: ["Moksha"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mdr",
      iso639_2en: "mdr",
      iso639_3: "mdr",
      name: ["Mandar"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "men",
      iso639_2en: "men",
      iso639_3: "men",
      name: ["Mende"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mga",
      iso639_2en: "mga",
      iso639_3: "mga",
      name: ["Irish, Middle (900-1200)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mic",
      iso639_2en: "mic",
      iso639_3: "mic",
      name: ["Mi'kmaq", " Micmac"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "min",
      iso639_2en: "min",
      iso639_3: "min",
      name: ["Minangkabau"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mis",
      iso639_2en: "mis",
      iso639_3: "mis",
      name: ["Uncoded languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mkh",
      iso639_2en: "mkh",
      iso639_3: "mkh",
      name: ["Mon-Khmer languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mnc",
      iso639_2en: "mnc",
      iso639_3: "mnc",
      name: ["Manchu"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mni",
      iso639_2en: "mni",
      iso639_3: "mni",
      name: ["Manipuri"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mno",
      iso639_2en: "mno",
      iso639_3: "mno",
      name: ["Manobo languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "moh",
      iso639_2en: "moh",
      iso639_3: "moh",
      name: ["Mohawk"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mos",
      iso639_2en: "mos",
      iso639_3: "mos",
      name: ["Mossi"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      countries: ["BFA"]
  }, {
      iso639_1: "",
      iso639_2: "mul",
      iso639_2en: "mul",
      iso639_3: "mul",
      name: ["Multiple languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mun",
      iso639_2en: "mun",
      iso639_3: "mun",
      name: ["Munda languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mus",
      iso639_2en: "mus",
      iso639_3: "mus",
      name: ["Creek"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mwl",
      iso639_2en: "mwl",
      iso639_3: "mwl",
      name: ["Mirandese"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "mwr",
      iso639_2en: "mwr",
      iso639_3: "mwr",
      name: ["Marwari"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "myn",
      iso639_2en: "myn",
      iso639_3: "myn",
      name: ["Mayan languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "myv",
      iso639_2en: "myv",
      iso639_3: "myv",
      name: ["Erzya"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nah",
      iso639_2en: "nah",
      iso639_3: "nah",
      name: ["Nahuatl languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nai",
      iso639_2en: "nai",
      iso639_3: "nai",
      name: ["North American Indian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nap",
      iso639_2en: "nap",
      iso639_3: "nap",
      name: ["Neapolitan"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nds",
      iso639_2en: "nds",
      iso639_3: "nds",
      name: ["Low German", " Low Saxon", " German, Low", " Saxon, Low"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "new",
      iso639_2en: "new",
      iso639_3: "new",
      name: ["Nepal Bhasa", " Newari"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nia",
      iso639_2en: "nia",
      iso639_3: "nia",
      name: ["Nias"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nic",
      iso639_2en: "nic",
      iso639_3: "nic",
      name: ["Niger-Kordofanian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "niu",
      iso639_2en: "niu",
      iso639_3: "niu",
      name: ["Niuean"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nog",
      iso639_2en: "nog",
      iso639_3: "nog",
      name: ["Nogai"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "non",
      iso639_2en: "non",
      iso639_3: "non",
      name: ["Norse, Old"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nqo",
      iso639_2en: "nqo",
      iso639_3: "nqo",
      name: ["N'Ko"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nub",
      iso639_2en: "nub",
      iso639_3: "nub",
      name: ["Nubian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nwc",
      iso639_2en: "nwc",
      iso639_3: "nwc",
      name: ["Classical Newari", " Old Newari", " Classical Nepal Bhasa"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nym",
      iso639_2en: "nym",
      iso639_3: "nym",
      name: ["Nyamwezi"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nyn",
      iso639_2en: "nyn",
      iso639_3: "nyn",
      name: ["Nyankole"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nyo",
      iso639_2en: "nyo",
      iso639_3: "nyo",
      name: ["Nyoro"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "nzi",
      iso639_2en: "nzi",
      iso639_3: "nzi",
      name: ["Nzima"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "osa",
      iso639_2en: "osa",
      iso639_3: "osa",
      name: ["Osage"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ota",
      iso639_2en: "ota",
      iso639_3: "ota",
      name: ["Turkish, Ottoman (1500-1928)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "oto",
      iso639_2en: "oto",
      iso639_3: "oto",
      name: ["Otomian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "paa",
      iso639_2en: "paa",
      iso639_3: "paa",
      name: ["Papuan languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "pag",
      iso639_2en: "pag",
      iso639_3: "pag",
      name: ["Pangasinan"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "pal",
      iso639_2en: "pal",
      iso639_3: "pal",
      name: ["Pahlavi"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "pam",
      iso639_2en: "pam",
      iso639_3: "pam",
      name: ["Pampanga", " Kapampangan"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "pap",
      iso639_2en: "pap",
      iso639_3: "pap",
      name: ["Papiamento"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      countries: ["ABW", "CUW"]
  }, {
      iso639_1: "",
      iso639_2: "pau",
      iso639_2en: "pau",
      iso639_3: "pau",
      name: ["Palauan"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "peo",
      iso639_2en: "peo",
      iso639_3: "peo",
      name: ["Persian, Old (ca.600-400 B.C.)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "phi",
      iso639_2en: "phi",
      iso639_3: "phi",
      name: ["Philippine languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "phn",
      iso639_2en: "phn",
      iso639_3: "phn",
      name: ["Phoenician"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "pon",
      iso639_2en: "pon",
      iso639_3: "pon",
      name: ["Pohnpeian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "pra",
      iso639_2en: "pra",
      iso639_3: "pra",
      name: ["Prakrit languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "pro",
      iso639_2en: "pro",
      iso639_3: "pro",
      name: ["Provençal, Old (to 1500)", "Occitan, Old (to 1500)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "qaa-qtz",
      iso639_2en: "qaa-qtz",
      iso639_3: "qaa-qtz",
      name: ["Reserved for local use"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "raj",
      iso639_2en: "raj",
      iso639_3: "raj",
      name: ["Rajasthani"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "rap",
      iso639_2en: "rap",
      iso639_3: "rap",
      name: ["Rapanui"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "rar",
      iso639_2en: "rar",
      iso639_3: "rar",
      name: ["Rarotongan", " Cook Islands Maori"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "roa",
      iso639_2en: "roa",
      iso639_3: "roa",
      name: ["Romance languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "rom",
      iso639_2en: "rom",
      iso639_3: "rom",
      name: ["Romany"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "rup",
      iso639_2en: "rup",
      iso639_3: "rup",
      name: ["Aromanian", " Arumanian", " Macedo-Romanian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sad",
      iso639_2en: "sad",
      iso639_3: "sad",
      name: ["Sandawe"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sah",
      iso639_2en: "sah",
      iso639_3: "sah",
      name: ["Yakut"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sai",
      iso639_2en: "sai",
      iso639_3: "sai",
      name: ["South American Indian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sal",
      iso639_2en: "sal",
      iso639_3: "sal",
      name: ["Salishan languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sam",
      iso639_2en: "sam",
      iso639_3: "sam",
      name: ["Samaritan Aramaic"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sas",
      iso639_2en: "sas",
      iso639_3: "sas",
      name: ["Sasak"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sat",
      iso639_2en: "sat",
      iso639_3: "sat",
      name: ["Santali"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "scn",
      iso639_2en: "scn",
      iso639_3: "scn",
      name: ["Sicilian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sco",
      iso639_2en: "sco",
      iso639_3: "sco",
      name: ["Scots"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sel",
      iso639_2en: "sel",
      iso639_3: "sel",
      name: ["Selkup"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sem",
      iso639_2en: "sem",
      iso639_3: "sem",
      name: ["Semitic languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sga",
      iso639_2en: "sga",
      iso639_3: "sga",
      name: ["Irish, Old (to 900)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sgn",
      iso639_2en: "sgn",
      iso639_3: "sgn",
      name: ["Sign Languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "shn",
      iso639_2en: "shn",
      iso639_3: "shn",
      name: ["Shan"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sid",
      iso639_2en: "sid",
      iso639_3: "sid",
      name: ["Sidamo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sio",
      iso639_2en: "sio",
      iso639_3: "sio",
      name: ["Siouan languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sit",
      iso639_2en: "sit",
      iso639_3: "sit",
      name: ["Sino-Tibetan languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sla",
      iso639_2en: "sla",
      iso639_3: "sla",
      name: ["Slavic languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sma",
      iso639_2en: "sma",
      iso639_3: "sma",
      name: ["Southern Sami"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "smi",
      iso639_2en: "smi",
      iso639_3: "smi",
      name: ["Sami languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "smj",
      iso639_2en: "smj",
      iso639_3: "smj",
      name: ["Lule Sami"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "smn",
      iso639_2en: "smn",
      iso639_3: "smn",
      name: ["Inari Sami"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sms",
      iso639_2en: "sms",
      iso639_3: "sms",
      name: ["Skolt Sami"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "snk",
      iso639_2en: "snk",
      iso639_3: "snk",
      name: ["Soninke"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      countries: ["MLI", "SEN"]
  }, {
      iso639_1: "",
      iso639_2: "sog",
      iso639_2en: "sog",
      iso639_3: "sog",
      name: ["Sogdian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "son",
      iso639_2en: "son",
      iso639_3: "son",
      name: ["Songhai languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "srn",
      iso639_2en: "srn",
      iso639_3: "srn",
      name: ["Sranan Tongo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "srr",
      iso639_2en: "srr",
      iso639_3: "srr",
      name: ["Serer"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      countries: ["SEN"]
  }, {
      iso639_1: "",
      iso639_2: "ssa",
      iso639_2en: "ssa",
      iso639_3: "ssa",
      name: ["Nilo-Saharan languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "suk",
      iso639_2en: "suk",
      iso639_3: "suk",
      name: ["Sukuma"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sus",
      iso639_2en: "sus",
      iso639_3: "sus",
      name: ["Susu"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "sux",
      iso639_2en: "sux",
      iso639_3: "sux",
      name: ["Sumerian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "syc",
      iso639_2en: "syc",
      iso639_3: "syc",
      name: ["Classical Syriac"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "syr",
      iso639_2en: "syr",
      iso639_3: "syr",
      name: ["Syriac"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      langCultureMs: [{
          langCultureName: "syr-SY",
          displayName: "Syriac - Syria",
          cultureCode: "0x045A"
      }]
  }, {
      iso639_1: "",
      iso639_2: "tai",
      iso639_2en: "tai",
      iso639_3: "tai",
      name: ["Tai languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tem",
      iso639_2en: "tem",
      iso639_3: "tem",
      name: ["Timne"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ter",
      iso639_2en: "ter",
      iso639_3: "ter",
      name: ["Tereno"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tet",
      iso639_2en: "tet",
      iso639_3: "tet",
      name: ["Tetum"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      countries: ["TLS"]
  }, {
      iso639_1: "",
      iso639_2: "tig",
      iso639_2en: "tig",
      iso639_3: "tig",
      name: ["Tigre"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tiv",
      iso639_2en: "tiv",
      iso639_3: "tiv",
      name: ["Tiv"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tkl",
      iso639_2en: "tkl",
      iso639_3: "tkl",
      name: ["Tokelau"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tlh",
      iso639_2en: "tlh",
      iso639_3: "tlh",
      name: ["Klingon", " tlhIngan-Hol"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tli",
      iso639_2en: "tli",
      iso639_3: "tli",
      name: ["Tlingit"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tmh",
      iso639_2en: "tmh",
      iso639_3: "tmh",
      name: ["Tamashek"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tog",
      iso639_2en: "tog",
      iso639_3: "tog",
      name: ["Tonga (Nyasa)"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tpi",
      iso639_2en: "tpi",
      iso639_3: "tpi",
      name: ["Tok Pisin"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      countries: ["PNG"]
  }, {
      iso639_1: "",
      iso639_2: "tsi",
      iso639_2en: "tsi",
      iso639_3: "tsi",
      name: ["Tsimshian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tum",
      iso639_2en: "tum",
      iso639_3: "tum",
      name: ["Tumbuka"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tup",
      iso639_2en: "tup",
      iso639_3: "tup",
      name: ["Tupi languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tut",
      iso639_2en: "tut",
      iso639_3: "tut",
      name: ["Altaic languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tvl",
      iso639_2en: "tvl",
      iso639_3: "tvl",
      name: ["Tuvalu"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "tyv",
      iso639_2en: "tyv",
      iso639_3: "tyv",
      name: ["Tuvinian"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "udm",
      iso639_2en: "udm",
      iso639_3: "udm",
      name: ["Udmurt"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "uga",
      iso639_2en: "uga",
      iso639_3: "uga",
      name: ["Ugaritic"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "umb",
      iso639_2en: "umb",
      iso639_3: "umb",
      name: ["Umbundu"],
      nativeName: [""],
      direction: "LTR",
      family: "",
      countries: ["AGO"]
  }, {
      iso639_1: "",
      iso639_2: "und",
      iso639_2en: "und",
      iso639_3: "und",
      name: ["Undetermined"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "vai",
      iso639_2en: "vai",
      iso639_3: "vai",
      name: ["Vai"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "vot",
      iso639_2en: "vot",
      iso639_3: "vot",
      name: ["Votic"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "wak",
      iso639_2en: "wak",
      iso639_3: "wak",
      name: ["Wakashan languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "wal",
      iso639_2en: "wal",
      iso639_3: "wal",
      name: ["Wolaitta", " Wolaytta"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "war",
      iso639_2en: "war",
      iso639_3: "war",
      name: ["Waray"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "was",
      iso639_2en: "was",
      iso639_3: "was",
      name: ["Washo"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "wen",
      iso639_2en: "wen",
      iso639_3: "wen",
      name: ["Sorbian languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "xal",
      iso639_2en: "xal",
      iso639_3: "xal",
      name: ["Kalmyk", " Oirat"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "yao",
      iso639_2en: "yao",
      iso639_3: "yao",
      name: ["Yao"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "yap",
      iso639_2en: "yap",
      iso639_3: "yap",
      name: ["Yapese"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "ypk",
      iso639_2en: "ypk",
      iso639_3: "ypk",
      name: ["Yupik languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "zap",
      iso639_2en: "zap",
      iso639_3: "zap",
      name: ["Zapotec"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "zbl",
      iso639_2en: "zbl",
      iso639_3: "zbl",
      name: ["Blissymbols", " Blissymbolics", " Bliss"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "zen",
      iso639_2en: "zen",
      iso639_3: "zen",
      name: ["Zenaga"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "zgh",
      iso639_2en: "zgh",
      iso639_3: "zgh",
      name: ["Standard Moroccan Tamazight"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "znd",
      iso639_2en: "znd",
      iso639_3: "znd",
      name: ["Zande languages"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "zun",
      iso639_2en: "zun",
      iso639_3: "zun",
      name: ["Zuni"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "zxx",
      iso639_2en: "zxx",
      iso639_3: "zxx",
      name: ["No linguistic content", " Not applicable"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }, {
      iso639_1: "",
      iso639_2: "zza",
      iso639_2en: "zza",
      iso639_3: "zza",
      name: ["Zaza", " Dimili", " Dimli", " Kirdki", " Kirmanjki", " Zazaki"],
      nativeName: [""],
      direction: "LTR",
      family: ""
  }],
  ra = [{
      code_2: "AF",
      code_3: "AFG",
      numCode: "004",
      name: "Afghanistan",
      languages: ["prs", "pus", "fas"]
  }, {
      code_2: "AX",
      code_3: "ALA",
      numCode: "248",
      name: "Åland Islands",
      languages: ["swe"]
  }, {
      code_2: "AL",
      code_3: "ALB",
      numCode: "008",
      name: "Albania",
      languages: ["sqi"],
      langCultureMs: [{
          langCultureName: "sq-AL",
          displayName: "Albanian - Albania",
          cultureCode: "0x041C"
      }]
  }, {
      code_2: "DZ",
      code_3: "DZA",
      numCode: "012",
      name: "Algeria",
      languages: ["ara", "ber"],
      langCultureMs: [{
          langCultureName: "ar-DZ",
          displayName: "Arabic - Algeria",
          cultureCode: "0x1401"
      }]
  }, {
      code_2: "AS",
      code_3: "ASM",
      numCode: "016",
      name: "American Samoa"
  }, {
      code_2: "AD",
      code_3: "AND",
      numCode: "020",
      name: "Andorra",
      languages: ["cat"]
  }, {
      code_2: "AO",
      code_3: "AGO",
      numCode: "024",
      name: "Angola",
      languages: ["kon", "kmb", "kua", "por", "umb"]
  }, {
      code_2: "AI",
      code_3: "AIA",
      numCode: "660",
      name: "Anguilla"
  }, {
      code_2: "AQ",
      code_3: "ATA",
      numCode: "010",
      name: "Antarctica"
  }, {
      code_2: "AG",
      code_3: "ATG",
      numCode: "028",
      name: "Antigua and Barbuda",
      languages: ["eng"]
  }, {
      code_2: "AR",
      code_3: "ARG",
      numCode: "032",
      name: "Argentina",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-AR",
          displayName: "Spanish - Argentina",
          cultureCode: "0x2C0A"
      }]
  }, {
      code_2: "AM",
      code_3: "ARM",
      numCode: "051",
      name: "Armenia",
      languages: ["hye"],
      langCultureMs: [{
          langCultureName: "hy-AM",
          displayName: "Armenian - Armenia",
          cultureCode: "0x042B"
      }]
  }, {
      code_2: "AW",
      code_3: "ABW",
      numCode: "533",
      name: "Aruba",
      languages: ["nld", "pap"]
  }, {
      code_2: "AU",
      code_3: "AUS",
      numCode: "036",
      name: "Australia",
      languages: ["eng"],
      langCultureMs: [{
          langCultureName: "en-AU",
          displayName: "English - Australia",
          cultureCode: "0x0C09"
      }]
  }, {
      code_2: "AT",
      code_3: "AUT",
      numCode: "040",
      name: "Austria",
      languages: ["deu"],
      langCultureMs: [{
          langCultureName: "de-AT",
          displayName: "German - Austria",
          cultureCode: "0x0C07"
      }]
  }, {
      code_2: "AZ",
      code_3: "AZE",
      numCode: "031",
      name: "Azerbaijan",
      languages: ["aze"],
      langCultureMs: [{
          langCultureName: "Cy-az-AZ",
          displayName: "Azeri (Cyrillic) - Azerbaijan",
          cultureCode: "0x082C"
      }, {
          langCultureName: "Lt-az-AZ",
          displayName: "Azeri (Latin) - Azerbaijan",
          cultureCode: "0x042C"
      }]
  }, {
      code_2: "BS",
      code_3: "BHS",
      numCode: "044",
      name: "Bahamas",
      languages: ["eng"]
  }, {
      code_2: "BH",
      code_3: "BHR",
      numCode: "048",
      name: "Bahrain",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-BH",
          displayName: "Arabic - Bahrain",
          cultureCode: "0x3C01"
      }]
  }, {
      code_2: "BD",
      code_3: "BGD",
      numCode: "050",
      name: "Bangladesh",
      languages: ["ben"]
  }, {
      code_2: "BB",
      code_3: "BRB",
      numCode: "052",
      name: "Barbados",
      languages: ["eng"]
  }, {
      code_2: "BY",
      code_3: "BLR",
      numCode: "112",
      name: "Belarus",
      languages: ["bel", "rus"],
      langCultureMs: [{
          langCultureName: "be-BY",
          displayName: "Belarusian - Belarus",
          cultureCode: "0x0423"
      }]
  }, {
      code_2: "BE",
      code_3: "BEL",
      numCode: "056",
      name: "Belgium",
      languages: ["nld", "fra", "deu"],
      langCultureMs: [{
          langCultureName: "nl-BE",
          displayName: "Dutch - Belgium",
          cultureCode: "0x0813"
      }, {
          langCultureName: "fr-BE",
          displayName: "French - Belgium",
          cultureCode: "0x080C"
      }]
  }, {
      code_2: "BZ",
      code_3: "BLZ",
      numCode: "084",
      name: "Belize",
      languages: ["eng"],
      langCultureMs: [{
          langCultureName: "en-BZ",
          displayName: "English - Belize",
          cultureCode: "0x2809"
      }]
  }, {
      code_2: "BJ",
      code_3: "BEN",
      numCode: "204",
      name: "Benin",
      languages: ["fra", "ful", "yor"]
  }, {
      code_2: "BM",
      code_3: "BMU",
      numCode: "060",
      name: "Bermuda"
  }, {
      code_2: "BT",
      code_3: "BTN",
      numCode: "064",
      name: "Bhutan",
      languages: ["dzo"]
  }, {
      code_2: "BO",
      code_3: "BOL",
      numCode: "068",
      name: "Bolivia, Plurinational State of",
      languages: ["aym", "grn", "que", "spa"],
      langCultureMs: [{
          langCultureName: "es-BO",
          displayName: "Spanish - Bolivia",
          cultureCode: "0x400A"
      }]
  }, {
      code_2: "BQ",
      code_3: "BES",
      numCode: "535",
      name: "Bonaire, Sint Eustatius and Saba"
  }, {
      code_2: "BA",
      code_3: "BIH",
      numCode: "070",
      name: "Bosnia and Herzegovina",
      languages: ["bos", "hrv", "srp"]
  }, {
      code_2: "BW",
      code_3: "BWA",
      numCode: "072",
      name: "Botswana",
      languages: ["eng", "tsn"]
  }, {
      code_2: "BV",
      code_3: "BVT",
      numCode: "074",
      name: "Bouvet Island"
  }, {
      code_2: "BR",
      code_3: "BRA",
      numCode: "076",
      name: "Brazil",
      languages: ["por"],
      langCultureMs: [{
          langCultureName: "pt-BR",
          displayName: "Portuguese - Brazil",
          cultureCode: "0x0416"
      }]
  }, {
      code_2: "IO",
      code_3: "IOT",
      numCode: "086",
      name: "British Indian Ocean Territory"
  }, {
      code_2: "BN",
      code_3: "BRN",
      numCode: "096",
      name: "Brunei Darussalam",
      languages: ["msa"],
      langCultureMs: [{
          langCultureName: "ms-BN",
          displayName: "Malay - Brunei",
          cultureCode: "0x083E"
      }]
  }, {
      code_2: "BG",
      code_3: "BGR",
      numCode: "100",
      name: "Bulgaria",
      languages: ["bul"],
      langCultureMs: [{
          langCultureName: "bg-BG",
          displayName: "Bulgarian - Bulgaria",
          cultureCode: "0x0402"
      }]
  }, {
      code_2: "BF",
      code_3: "BFA",
      numCode: "854",
      name: "Burkina Faso",
      languages: ["fra", "ful", "mos"]
  }, {
      code_2: "BI",
      code_3: "BDI",
      numCode: "108",
      name: "Burundi",
      languages: ["fra", "run"]
  }, {
      code_2: "KH",
      code_3: "KHM",
      numCode: "116",
      name: "Cambodia",
      languages: ["khm"]
  }, {
      code_2: "CM",
      code_3: "CMR",
      numCode: "120",
      name: "Cameroon",
      languages: ["eng", "fra"]
  }, {
      code_2: "CA",
      code_3: "CAN",
      numCode: "124",
      name: "Canada",
      languages: ["eng", "fra"],
      langCultureMs: [{
          langCultureName: "en-CA",
          displayName: "English - Canada",
          cultureCode: "0x1009"
      }, {
          langCultureName: "fr-CA",
          displayName: "French - Canada",
          cultureCode: "0x0C0C"
      }]
  }, {
      code_2: "CV",
      code_3: "CPV",
      numCode: "132",
      name: "Cape Verde",
      languages: ["por"]
  }, {
      code_2: "KY",
      code_3: "CYM",
      numCode: "136",
      name: "Cayman Islands"
  }, {
      code_2: "CF",
      code_3: "CAF",
      numCode: "140",
      name: "Central African Republic",
      languages: ["fra", "sag"]
  }, {
      code_2: "TD",
      code_3: "TCD",
      numCode: "148",
      name: "Chad",
      languages: ["ara", "fra"]
  }, {
      code_2: "CL",
      code_3: "CHL",
      numCode: "152",
      name: "Chile",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-CL",
          displayName: "Spanish - Chile",
          cultureCode: "0x340A"
      }]
  }, {
      code_2: "CN",
      code_3: "CHN",
      numCode: "156",
      name: "China",
      languages: ["zho"],
      langCultureMs: [{
          langCultureName: "zh-CN",
          displayName: "Chinese - China",
          cultureCode: "0x0804"
      }, {
          langCultureName: "zh-CHS",
          displayName: "Chinese (Simplified)",
          cultureCode: "0x0004"
      }, {
          langCultureName: "zh-CHT",
          displayName: "Chinese (Traditional)",
          cultureCode: "0x7C04"
      }]
  }, {
      code_2: "CX",
      code_3: "CXR",
      numCode: "162",
      name: "Christmas Island"
  }, {
      code_2: "CC",
      code_3: "CCK",
      numCode: "166",
      name: "Cocos (Keeling) Islands"
  }, {
      code_2: "CO",
      code_3: "COL",
      numCode: "170",
      name: "Colombia",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-CO",
          displayName: "Spanish - Colombia",
          cultureCode: "0x240A"
      }]
  }, {
      code_2: "KM",
      code_3: "COM",
      numCode: "174",
      name: "Comoros",
      languages: ["ara", "fra"]
  }, {
      code_2: "CG",
      code_3: "COG",
      numCode: "178",
      name: "Congo",
      languages: ["fra", "kon", "lin"]
  }, {
      code_2: "CD",
      code_3: "COD",
      numCode: "180",
      name: "Congo, the Democratic Republic of the",
      languages: ["fra", "kon", "lin", "swa", "lub"]
  }, {
      code_2: "CK",
      code_3: "COK",
      numCode: "184",
      name: "Cook Islands"
  }, {
      code_2: "CR",
      code_3: "CRI",
      numCode: "188",
      name: "Costa Rica",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-CR",
          displayName: "Spanish - Costa Rica",
          cultureCode: "0x140A"
      }]
  }, {
      code_2: "CI",
      code_3: "CIV",
      numCode: "384",
      name: "Côte d'Ivoire",
      languages: ["fra"]
  }, {
      code_2: "HR",
      code_3: "HRV",
      numCode: "191",
      name: "Croatia",
      languages: ["hrv", "ita"],
      langCultureMs: [{
          langCultureName: "hr-HR",
          displayName: "Croatian - Croatia",
          cultureCode: "0x041A"
      }]
  }, {
      code_2: "CU",
      code_3: "CUB",
      numCode: "192",
      name: "Cuba",
      languages: ["spa"]
  }, {
      code_2: "CW",
      code_3: "CUW",
      numCode: "531",
      name: "Curaçao",
      languages: ["nld", "eng", "pap"]
  }, {
      code_2: "CY",
      code_3: "CYP",
      numCode: "196",
      name: "Cyprus",
      languages: ["ell", "tur"]
  }, {
      code_2: "CZ",
      code_3: "CZE",
      numCode: "203",
      name: "Czech Republic",
      languages: ["ces", "slk"],
      langCultureMs: [{
          langCultureName: "cs-CZ",
          displayName: "Czech - Czech Republic",
          cultureCode: "0x0405"
      }]
  }, {
      code_2: "DK",
      code_3: "DNK",
      numCode: "208",
      name: "Denmark",
      languages: ["dan"],
      langCultureMs: [{
          langCultureName: "da-DK",
          displayName: "Danish - Denmark",
          cultureCode: "0x0406"
      }]
  }, {
      code_2: "DJ",
      code_3: "DJI",
      numCode: "262",
      name: "Djibouti",
      languages: ["aar", "ara", "fra", "som"]
  }, {
      code_2: "DM",
      code_3: "DMA",
      numCode: "212",
      name: "Dominica",
      languages: ["eng"]
  }, {
      code_2: "DO",
      code_3: "DOM",
      numCode: "214",
      name: "Dominican Republic",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-DO",
          displayName: "Spanish - Dominican Republic",
          cultureCode: "0x1C0A"
      }]
  }, {
      code_2: "EC",
      code_3: "ECU",
      numCode: "218",
      name: "Ecuador",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-EC",
          displayName: "Spanish - Ecuador",
          cultureCode: "0x300A"
      }]
  }, {
      code_2: "EG",
      code_3: "EGY",
      numCode: "818",
      name: "Egypt",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-EG",
          displayName: "Arabic - Egypt",
          cultureCode: "0x0C01"
      }]
  }, {
      code_2: "SV",
      code_3: "SLV",
      numCode: "222",
      name: "El Salvador",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-SV",
          displayName: "Spanish - El Salvador",
          cultureCode: "0x440A"
      }]
  }, {
      code_2: "GQ",
      code_3: "GNQ",
      numCode: "226",
      name: "Equatorial Guinea",
      languages: ["fra", "por", "spa"]
  }, {
      code_2: "ER",
      code_3: "ERI",
      numCode: "232",
      name: "Eritrea",
      languages: ["ara", "eng", "tir"]
  }, {
      code_2: "EE",
      code_3: "EST",
      numCode: "233",
      name: "Estonia",
      languages: ["est"],
      langCultureMs: [{
          langCultureName: "et-EE",
          displayName: "Estonian - Estonia",
          cultureCode: "0x0425"
      }]
  }, {
      code_2: "ET",
      code_3: "ETH",
      numCode: "231",
      name: "Ethiopia",
      languages: ["amh"]
  }, {
      code_2: "FK",
      code_3: "FLK",
      numCode: "238",
      name: "Falkland Islands (Malvinas)"
  }, {
      code_2: "FO",
      code_3: "FRO",
      numCode: "234",
      name: "Faroe Islands",
      languages: ["dan"],
      langCultureMs: [{
          langCultureName: "fo-FO",
          displayName: "Faroese - Faroe Islands",
          cultureCode: "0x0438"
      }]
  }, {
      code_2: "FJ",
      code_3: "FJI",
      numCode: "242",
      name: "Fiji",
      languages: ["eng", "fij", "hin", "urd"]
  }, {
      code_2: "FI",
      code_3: "FIN",
      numCode: "246",
      name: "Finland",
      languages: ["fin", "swe"],
      langCultureMs: [{
          langCultureName: "fi-FI",
          displayName: "Finnish - Finland",
          cultureCode: "0x040B"
      }, {
          langCultureName: "sv-FI",
          displayName: "Swedish - Finland",
          cultureCode: "0x081D"
      }]
  }, {
      code_2: "FR",
      code_3: "FRA",
      numCode: "250",
      name: "France",
      languages: ["fra"],
      langCultureMs: [{
          langCultureName: "fr-FR",
          displayName: "French - France",
          cultureCode: "0x040C"
      }]
  }, {
      code_2: "GF",
      code_3: "GUF",
      numCode: "254",
      name: "French Guiana",
      languages: ["fra"]
  }, {
      code_2: "PF",
      code_3: "PYF",
      numCode: "258",
      name: "French Polynesia",
      languages: ["fra"]
  }, {
      code_2: "TF",
      code_3: "ATF",
      numCode: "260",
      name: "French Southern Territories"
  }, {
      code_2: "GA",
      code_3: "GAB",
      numCode: "266",
      name: "Gabon",
      languages: ["fra"]
  }, {
      code_2: "GM",
      code_3: "GMB",
      numCode: "270",
      name: "Gambia",
      languages: ["eng"]
  }, {
      code_2: "GE",
      code_3: "GEO",
      numCode: "268",
      name: "Georgia",
      languages: ["kat"],
      langCultureMs: [{
          langCultureName: "ka-GE",
          displayName: "Georgian - Georgia",
          cultureCode: "0x0437"
      }]
  }, {
      code_2: "DE",
      code_3: "DEU",
      numCode: "276",
      name: "Germany",
      languages: ["deu"],
      langCultureMs: [{
          langCultureName: "de-DE",
          displayName: "German - Germany",
          cultureCode: "0x0407"
      }]
  }, {
      code_2: "GH",
      code_3: "GHA",
      numCode: "288",
      name: "Ghana",
      languages: ["aka", "eng", "ewe", "gaa"]
  }, {
      code_2: "GI",
      code_3: "GIB",
      numCode: "292",
      name: "Gibraltar"
  }, {
      code_2: "GR",
      code_3: "GRC",
      numCode: "300",
      name: "Greece",
      languages: ["ell"],
      langCultureMs: [{
          langCultureName: "el-GR",
          displayName: "Greek - Greece",
          cultureCode: "0x0408"
      }]
  }, {
      code_2: "GL",
      code_3: "GRL",
      numCode: "304",
      name: "Greenland"
  }, {
      code_2: "GD",
      code_3: "GRD",
      numCode: "308",
      name: "Grenada",
      languages: ["eng"]
  }, {
      code_2: "GP",
      code_3: "GLP",
      numCode: "312",
      name: "Guadeloupe",
      languages: ["fra"]
  }, {
      code_2: "GU",
      code_3: "GUM",
      numCode: "316",
      name: "Guam"
  }, {
      code_2: "GT",
      code_3: "GTM",
      numCode: "320",
      name: "Guatemala",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-GT",
          displayName: "Spanish - Guatemala",
          cultureCode: "0x100A"
      }]
  }, {
      code_2: "GG",
      code_3: "GGY",
      numCode: "831",
      name: "Guernsey"
  }, {
      code_2: "GN",
      code_3: "GIN",
      numCode: "324",
      name: "Guinea",
      languages: ["fra"]
  }, {
      code_2: "GW",
      code_3: "GNB",
      numCode: "624",
      name: "Guinea-Bissau",
      languages: ["por"]
  }, {
      code_2: "GY",
      code_3: "GUY",
      numCode: "328",
      name: "Guyana",
      languages: ["eng"]
  }, {
      code_2: "HT",
      code_3: "HTI",
      numCode: "332",
      name: "Haiti",
      languages: ["fra", "hat"]
  }, {
      code_2: "HM",
      code_3: "HMD",
      numCode: "334",
      name: "Heard Island and McDonald Islands"
  }, {
      code_2: "VA",
      code_3: "VAT",
      numCode: "336",
      name: "Holy See (Vatican City State)",
      languages: ["ita", "lat"]
  }, {
      code_2: "HN",
      code_3: "HND",
      numCode: "340",
      name: "Honduras",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-HN",
          displayName: "Spanish - Honduras",
          cultureCode: "0x480A"
      }]
  }, {
      code_2: "HK",
      code_3: "HKG",
      numCode: "344",
      name: "Hong Kong",
      languages: ["zho", "eng"],
      langCultureMs: [{
          langCultureName: "zh-HK",
          displayName: "Chinese - Hong Kong SAR",
          cultureCode: "0x0C04"
      }]
  }, {
      code_2: "HU",
      code_3: "HUN",
      numCode: "348",
      name: "Hungary",
      languages: ["hun"],
      langCultureMs: [{
          langCultureName: "hu-HU",
          displayName: "Hungarian - Hungary",
          cultureCode: "0x040E"
      }]
  }, {
      code_2: "IS",
      code_3: "ISL",
      numCode: "352",
      name: "Iceland",
      languages: ["isl"],
      langCultureMs: [{
          langCultureName: "is-IS",
          displayName: "Icelandic - Iceland",
          cultureCode: "0x040F"
      }]
  }, {
      code_2: "IN",
      code_3: "IND",
      numCode: "356",
      name: "India",
      languages: ["ben", "eng", "guj", "hin", "pan", "tam", "tel"],
      langCultureMs: [{
          langCultureName: "gu-IN",
          displayName: "Gujarati - India",
          cultureCode: "0x0447"
      }, {
          langCultureName: "hi-IN",
          displayName: "Hindi - India",
          cultureCode: "0x0439"
      }, {
          langCultureName: "kn-IN",
          displayName: "Kannada - India",
          cultureCode: "0x044B"
      }, {
          langCultureName: "kok-IN",
          displayName: "Konkani - India",
          cultureCode: "0x0457"
      }, {
          langCultureName: "mr-IN",
          displayName: "Marathi - India",
          cultureCode: "0x044E"
      }, {
          langCultureName: "pa-IN",
          displayName: "Punjabi - India",
          cultureCode: "0x0446"
      }, {
          langCultureName: "sa-IN",
          displayName: "Sanskrit - India",
          cultureCode: "0x044F"
      }, {
          langCultureName: "ta-IN",
          displayName: "Tamil - India",
          cultureCode: "0x0449"
      }, {
          langCultureName: "te-IN",
          displayName: "Telugu - India",
          cultureCode: "0x044A"
      }]
  }, {
      code_2: "ID",
      code_3: "IDN",
      numCode: "360",
      name: "Indonesia",
      languages: ["ind", "msa"],
      langCultureMs: [{
          langCultureName: "id-ID",
          displayName: "Indonesian - Indonesia",
          cultureCode: "0x0421"
      }]
  }, {
      code_2: "IR",
      code_3: "IRN",
      numCode: "364",
      name: "Iran, Islamic Republic of",
      languages: ["fas"],
      langCultureMs: [{
          langCultureName: "fa-IR",
          displayName: "Farsi - Iran",
          cultureCode: "0x0429"
      }]
  }, {
      code_2: "IQ",
      code_3: "IRQ",
      numCode: "368",
      name: "Iraq",
      languages: ["ara", "kur"],
      langCultureMs: [{
          langCultureName: "ar-IQ",
          displayName: "Arabic - Iraq",
          cultureCode: "0x0801"
      }]
  }, {
      code_2: "IE",
      code_3: "IRL",
      numCode: "372",
      name: "Ireland",
      languages: ["eng", "gle"],
      langCultureMs: [{
          langCultureName: "en-IE",
          displayName: "English - Ireland",
          cultureCode: "0x1809"
      }]
  }, {
      code_2: "IM",
      code_3: "IMN",
      numCode: "833",
      name: "Isle of Man"
  }, {
      code_2: "IL",
      code_3: "ISR",
      numCode: "376",
      name: "Israel",
      languages: ["ara", "heb"],
      langCultureMs: [{
          langCultureName: "he-IL",
          displayName: "Hebrew - Israel",
          cultureCode: "0x040D"
      }]
  }, {
      code_2: "IT",
      code_3: "ITA",
      numCode: "380",
      name: "Italy",
      languages: ["fra", "deu", "ita"],
      langCultureMs: [{
          langCultureName: "it-IT",
          displayName: "Italian - Italy",
          cultureCode: "0x0410"
      }]
  }, {
      code_2: "JM",
      code_3: "JAM",
      numCode: "388",
      name: "Jamaica",
      languages: ["eng"],
      langCultureMs: [{
          langCultureName: "en-JM",
          displayName: "English - Jamaica",
          cultureCode: "0x2009"
      }]
  }, {
      code_2: "JP",
      code_3: "JPN",
      numCode: "392",
      name: "Japan",
      languages: ["jpn"],
      langCultureMs: [{
          langCultureName: "ja-JP",
          displayName: "Japanese - Japan",
          cultureCode: "0x0411"
      }]
  }, {
      code_2: "JE",
      code_3: "JEY",
      numCode: "832",
      name: "Jersey",
      languages: ["fra"]
  }, {
      code_2: "JO",
      code_3: "JOR",
      numCode: "400",
      name: "Jordan",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-JO",
          displayName: "Arabic - Jordan",
          cultureCode: "0x2C01"
      }]
  }, {
      code_2: "KZ",
      code_3: "KAZ",
      numCode: "398",
      name: "Kazakhstan",
      languages: ["kaz", "rus"],
      langCultureMs: [{
          langCultureName: "kk-KZ",
          displayName: "Kazakh - Kazakhstan",
          cultureCode: "0x043F"
      }, {
          langCultureName: "ky-KZ",
          displayName: "Kyrgyz - Kazakhstan",
          cultureCode: "0x0440"
      }]
  }, {
      code_2: "KE",
      code_3: "KEN",
      numCode: "404",
      name: "Kenya",
      languages: ["eng", "swa"],
      langCultureMs: [{
          langCultureName: "sw-KE",
          displayName: "Swahili - Kenya",
          cultureCode: "0x0441"
      }]
  }, {
      code_2: "KI",
      code_3: "KIR",
      numCode: "296",
      name: "Kiribati",
      languages: ["eng"]
  }, {
      code_2: "KP",
      code_3: "PRK",
      numCode: "408",
      name: "Korea, Democratic People's Republic of",
      languages: ["kor"]
  }, {
      code_2: "KR",
      code_3: "KOR",
      numCode: "410",
      name: "Korea, Republic of",
      languages: ["kor"],
      langCultureMs: [{
          langCultureName: "ko-KR",
          displayName: "Korean - Korea",
          cultureCode: "0x0412"
      }]
  }, {
      code_2: "KW",
      code_3: "KWT",
      numCode: "414",
      name: "Kuwait",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-KW",
          displayName: "Arabic - Kuwait",
          cultureCode: "0x3401"
      }]
  }, {
      code_2: "KG",
      code_3: "KGZ",
      numCode: "417",
      name: "Kyrgyzstan",
      languages: ["kir", "rus"]
  }, {
      code_2: "LA",
      code_3: "LAO",
      numCode: "418",
      name: "Lao People's Democratic Republic",
      languages: ["lao"]
  }, {
      code_2: "LV",
      code_3: "LVA",
      numCode: "428",
      name: "Latvia",
      languages: ["lav"],
      langCultureMs: [{
          langCultureName: "lv-LV",
          displayName: "Latvian - Latvia",
          cultureCode: "0x0426"
      }]
  }, {
      code_2: "LB",
      code_3: "LBN",
      numCode: "422",
      name: "Lebanon",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-LB",
          displayName: "Arabic - Lebanon",
          cultureCode: "0x3001"
      }]
  }, {
      code_2: "LS",
      code_3: "LSO",
      numCode: "426",
      name: "Lesotho",
      languages: ["eng", "sot"]
  }, {
      code_2: "LR",
      code_3: "LBR",
      numCode: "430",
      name: "Liberia",
      languages: ["eng"]
  }, {
      code_2: "LY",
      code_3: "LBY",
      numCode: "434",
      name: "Libya",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-LY",
          displayName: "Arabic - Libya",
          cultureCode: "0x1001"
      }]
  }, {
      code_2: "LI",
      code_3: "LIE",
      numCode: "438",
      name: "Liechtenstein",
      languages: ["deu"],
      langCultureMs: [{
          langCultureName: "de-LI",
          displayName: "German - Liechtenstein",
          cultureCode: "0x1407"
      }]
  }, {
      code_2: "LT",
      code_3: "LTU",
      numCode: "440",
      name: "Lithuania",
      languages: ["lit"],
      langCultureMs: [{
          langCultureName: "lt-LT",
          displayName: "Lithuanian - Lithuania",
          cultureCode: "0x0427"
      }]
  }, {
      code_2: "LU",
      code_3: "LUX",
      numCode: "442",
      name: "Luxembourg",
      languages: ["fra", "deu", "ltz"],
      langCultureMs: [{
          langCultureName: "fr-LU",
          displayName: "French - Luxembourg",
          cultureCode: "0x140C"
      }, {
          langCultureName: "de-LU",
          displayName: "German - Luxembourg",
          cultureCode: "0x1007"
      }]
  }, {
      code_2: "MO",
      code_3: "MAC",
      numCode: "446",
      name: "Macao",
      languages: ["zho", "por"],
      langCultureMs: [{
          langCultureName: "zh-MO",
          displayName: "Chinese - Macau SAR",
          cultureCode: "0x1404"
      }]
  }, {
      code_2: "MK",
      code_3: "MKD",
      numCode: "807",
      name: "Macedonia, the former Yugoslav Republic of",
      languages: ["mkd"],
      langCultureMs: [{
          langCultureName: "mk-MK",
          displayName: "Macedonian (FYROM)",
          cultureCode: "0x042F"
      }]
  }, {
      code_2: "MG",
      code_3: "MDG",
      numCode: "450",
      name: "Madagascar",
      languages: ["fra", "mlg"]
  }, {
      code_2: "MW",
      code_3: "MWI",
      numCode: "454",
      name: "Malawi",
      languages: ["nya", "eng"]
  }, {
      code_2: "MY",
      code_3: "MYS",
      numCode: "458",
      name: "Malaysia",
      languages: ["eng", "msa", "tam"],
      langCultureMs: [{
          langCultureName: "ms-MY",
          displayName: "Malay - Malaysia",
          cultureCode: "0x043E"
      }]
  }, {
      code_2: "MV",
      code_3: "MDV",
      numCode: "462",
      name: "Maldives",
      languages: ["div"],
      langCultureMs: [{
          langCultureName: "div-MV",
          displayName: "Dhivehi - Maldives",
          cultureCode: "0x0465"
      }]
  }, {
      code_2: "ML",
      code_3: "MLI",
      numCode: "466",
      name: "Mali",
      languages: ["bam", "fra", "ful", "snk"]
  }, {
      code_2: "MT",
      code_3: "MLT",
      numCode: "470",
      name: "Malta",
      languages: ["eng", "mlt"]
  }, {
      code_2: "MH",
      code_3: "MHL",
      numCode: "584",
      name: "Marshall Islands",
      languages: ["eng", "mah"]
  }, {
      code_2: "MQ",
      code_3: "MTQ",
      numCode: "474",
      name: "Martinique",
      languages: ["fra"]
  }, {
      code_2: "MR",
      code_3: "MRT",
      numCode: "478",
      name: "Mauritania",
      languages: ["ara"]
  }, {
      code_2: "MU",
      code_3: "MUS",
      numCode: "480",
      name: "Mauritius",
      languages: ["eng", "fra", "tam"]
  }, {
      code_2: "YT",
      code_3: "MYT",
      numCode: "175",
      name: "Mayotte",
      languages: ["fra"]
  }, {
      code_2: "MX",
      code_3: "MEX",
      numCode: "484",
      name: "Mexico",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-MX",
          displayName: "Spanish - Mexico",
          cultureCode: "0x080A"
      }]
  }, {
      code_2: "FM",
      code_3: "FSM",
      numCode: "583",
      name: "Micronesia, Federated States of",
      languages: ["eng"]
  }, {
      code_2: "MD",
      code_3: "MDA",
      numCode: "498",
      name: "Moldova, Republic of",
      languages: ["ron"]
  }, {
      code_2: "MC",
      code_3: "MCO",
      numCode: "492",
      name: "Monaco",
      languages: ["fra"],
      langCultureMs: [{
          langCultureName: "fr-MC",
          displayName: "French - Monaco",
          cultureCode: "0x180C"
      }]
  }, {
      code_2: "MN",
      code_3: "MNG",
      numCode: "496",
      name: "Mongolia",
      languages: ["mon"],
      langCultureMs: [{
          langCultureName: "mn-MN",
          displayName: "Mongolian - Mongolia",
          cultureCode: "0x0450"
      }]
  }, {
      code_2: "ME",
      code_3: "MNE",
      numCode: "499",
      name: "Montenegro"
  }, {
      code_2: "MS",
      code_3: "MSR",
      numCode: "500",
      name: "Montserrat"
  }, {
      code_2: "MA",
      code_3: "MAR",
      numCode: "504",
      name: "Morocco",
      languages: ["ara", "ber"],
      langCultureMs: [{
          langCultureName: "ar-MA",
          displayName: "Arabic - Morocco",
          cultureCode: "0x1801"
      }]
  }, {
      code_2: "MZ",
      code_3: "MOZ",
      numCode: "508",
      name: "Mozambique",
      languages: ["por"]
  }, {
      code_2: "MM",
      code_3: "MMR",
      numCode: "104",
      name: "Myanmar",
      languages: ["mya"]
  }, {
      code_2: "NA",
      code_3: "NAM",
      numCode: "516",
      name: "Namibia",
      languages: ["eng"]
  }, {
      code_2: "NR",
      code_3: "NRU",
      numCode: "520",
      name: "Nauru",
      languages: ["eng"]
  }, {
      code_2: "NP",
      code_3: "NPL",
      numCode: "524",
      name: "Nepal",
      languages: ["nep"]
  }, {
      code_2: "NL",
      code_3: "NLD",
      numCode: "528",
      name: "Netherlands",
      languages: ["nld"],
      langCultureMs: [{
          langCultureName: "nl-NL",
          displayName: "Dutch - The Netherlands",
          cultureCode: "0x0413"
      }]
  }, {
      code_2: "NC",
      code_3: "NCL",
      numCode: "540",
      name: "New Caledonia",
      languages: ["fra"]
  }, {
      code_2: "NZ",
      code_3: "NZL",
      numCode: "554",
      name: "New Zealand",
      languages: ["eng", "mri"],
      langCultureMs: [{
          langCultureName: "en-NZ",
          displayName: "English - New Zealand",
          cultureCode: "0x1409"
      }]
  }, {
      code_2: "NI",
      code_3: "NIC",
      numCode: "558",
      name: "Nicaragua",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-NI",
          displayName: "Spanish - Nicaragua",
          cultureCode: "0x4C0A"
      }]
  }, {
      code_2: "NE",
      code_3: "NER",
      numCode: "562",
      name: "Niger",
      languages: ["ara", "fra", "ful", "hau", "kau"]
  }, {
      code_2: "NG",
      code_3: "NGA",
      numCode: "566",
      name: "Nigeria",
      languages: ["eng", "hau", "ibo", "yor"]
  }, {
      code_2: "NU",
      code_3: "NIU",
      numCode: "570",
      name: "Niue"
  }, {
      code_2: "NF",
      code_3: "NFK",
      numCode: "574",
      name: "Norfolk Island"
  }, {
      code_2: "MP",
      code_3: "MNP",
      numCode: "580",
      name: "Northern Mariana Islands"
  }, {
      code_2: "NO",
      code_3: "NOR",
      numCode: "578",
      name: "Norway",
      languages: ["nob", "nno", "nor"],
      langCultureMs: [{
          langCultureName: "nb-NO",
          displayName: "Norwegian (Bokmål) - Norway",
          cultureCode: "0x0414"
      }, {
          langCultureName: "nn-NO",
          displayName: "Norwegian (Nynorsk) - Norway",
          cultureCode: "0x0814"
      }]
  }, {
      code_2: "OM",
      code_3: "OMN",
      numCode: "512",
      name: "Oman",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-OM",
          displayName: "Arabic - Oman",
          cultureCode: "0x2001"
      }]
  }, {
      code_2: "PK",
      code_3: "PAK",
      numCode: "586",
      name: "Pakistan",
      languages: ["eng", "urd"],
      langCultureMs: [{
          langCultureName: "ur-PK",
          displayName: "Urdu - Pakistan",
          cultureCode: "0x0420"
      }]
  }, {
      code_2: "PW",
      code_3: "PLW",
      numCode: "585",
      name: "Palau",
      languages: ["eng"]
  }, {
      code_2: "PS",
      code_3: "PSE",
      numCode: "275",
      name: "Palestine, State of"
  }, {
      code_2: "PA",
      code_3: "PAN",
      numCode: "591",
      name: "Panama",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-PA",
          displayName: "Spanish - Panama",
          cultureCode: "0x180A"
      }]
  }, {
      code_2: "PG",
      code_3: "PNG",
      numCode: "598",
      name: "Papua New Guinea",
      languages: ["eng", "hmo", "tpi"]
  }, {
      code_2: "PY",
      code_3: "PRY",
      numCode: "600",
      name: "Paraguay",
      languages: ["grn", "spa"],
      langCultureMs: [{
          langCultureName: "es-PY",
          displayName: "Spanish - Paraguay",
          cultureCode: "0x3C0A"
      }]
  }, {
      code_2: "PE",
      code_3: "PER",
      numCode: "604",
      name: "Peru",
      languages: ["aym", "que", "spa"],
      langCultureMs: [{
          langCultureName: "es-PE",
          displayName: "Spanish - Peru",
          cultureCode: "0x280A"
      }]
  }, {
      code_2: "PH",
      code_3: "PHL",
      numCode: "608",
      name: "Philippines",
      languages: ["eng", "fil", "tgl"],
      langCultureMs: [{
          langCultureName: "en-PH",
          displayName: "English - Philippines",
          cultureCode: "0x3409"
      }]
  }, {
      code_2: "PN",
      code_3: "PCN",
      numCode: "612",
      name: "Pitcairn"
  }, {
      code_2: "PL",
      code_3: "POL",
      numCode: "616",
      name: "Poland",
      languages: ["pol"],
      langCultureMs: [{
          langCultureName: "pl-PL",
          displayName: "Polish - Poland",
          cultureCode: "0x0415"
      }]
  }, {
      code_2: "PT",
      code_3: "PRT",
      numCode: "620",
      name: "Portugal",
      languages: ["por"],
      langCultureMs: [{
          langCultureName: "pt-PT",
          displayName: "Portuguese - Portugal",
          cultureCode: "0x0816"
      }]
  }, {
      code_2: "PR",
      code_3: "PRI",
      numCode: "630",
      name: "Puerto Rico",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-PR",
          displayName: "Spanish - Puerto Rico",
          cultureCode: "0x500A"
      }]
  }, {
      code_2: "QA",
      code_3: "QAT",
      numCode: "634",
      name: "Qatar",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-QA",
          displayName: "Arabic - Qatar",
          cultureCode: "0x4001"
      }]
  }, {
      code_2: "RE",
      code_3: "REU",
      numCode: "638",
      name: "Réunion",
      languages: ["fra"]
  }, {
      code_2: "RO",
      code_3: "ROU",
      numCode: "642",
      name: "Romania",
      languages: ["ron"],
      langCultureMs: [{
          langCultureName: "ro-RO",
          displayName: "Romanian - Romania",
          cultureCode: "0x0418"
      }]
  }, {
      code_2: "RU",
      code_3: "RUS",
      numCode: "643",
      name: "Russian Federation",
      languages: ["rus"],
      langCultureMs: [{
          langCultureName: "ru-RU",
          displayName: "Russian - Russia",
          cultureCode: "0x0419"
      }, {
          langCultureName: "tt-RU",
          displayName: "Tatar - Russia",
          cultureCode: "0x0444"
      }]
  }, {
      code_2: "RW",
      code_3: "RWA",
      numCode: "646",
      name: "Rwanda",
      languages: ["eng", "fra", "kin"]
  }, {
      code_2: "BL",
      code_3: "BLM",
      numCode: "652",
      name: "Saint Barthélemy",
      languages: ["fra"]
  }, {
      code_2: "SH",
      code_3: "SHN",
      numCode: "654",
      name: "Saint Helena, Ascension and Tristan da Cunha"
  }, {
      code_2: "KN",
      code_3: "KNA",
      numCode: "659",
      name: "Saint Kitts and Nevis",
      languages: ["eng"]
  }, {
      code_2: "LC",
      code_3: "LCA",
      numCode: "662",
      name: "Saint Lucia",
      languages: ["eng"]
  }, {
      code_2: "MF",
      code_3: "MAF",
      numCode: "663",
      name: "Saint Martin (French part)"
  }, {
      code_2: "PM",
      code_3: "SPM",
      numCode: "666",
      name: "Saint Pierre and Miquelon",
      languages: ["fra"]
  }, {
      code_2: "VC",
      code_3: "VCT",
      numCode: "670",
      name: "Saint Vincent and the Grenadines",
      languages: ["eng"]
  }, {
      code_2: "WS",
      code_3: "WSM",
      numCode: "882",
      name: "Samoa",
      languages: ["eng"]
  }, {
      code_2: "SM",
      code_3: "SMR",
      numCode: "674",
      name: "San Marino",
      languages: ["ita"]
  }, {
      code_2: "ST",
      code_3: "STP",
      numCode: "678",
      name: "Sao Tome and Principe",
      languages: ["por"]
  }, {
      code_2: "SA",
      code_3: "SAU",
      numCode: "682",
      name: "Saudi Arabia",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-SA",
          displayName: "Arabic - Saudi Arabia",
          cultureCode: "0x0401"
      }]
  }, {
      code_2: "SN",
      code_3: "SEN",
      numCode: "686",
      name: "Senegal",
      languages: ["fra", "ful", "srr", "snk", "wol"]
  }, {
      code_2: "RS",
      code_3: "SRB",
      numCode: "688",
      name: "Serbia",
      languages: ["srp"],
      langCultureMs: [{
          langCultureName: "Cy-sr-SP",
          displayName: "Serbian (Cyrillic) - Serbia",
          cultureCode: "0x0C1A"
      }, {
          langCultureName: "Lt-sr-SP",
          displayName: "Serbian (Latin) - Serbia",
          cultureCode: "0x081A"
      }]
  }, {
      code_2: "SC",
      code_3: "SYC",
      numCode: "690",
      name: "Seychelles",
      languages: ["eng", "fra"]
  }, {
      code_2: "SL",
      code_3: "SLE",
      numCode: "694",
      name: "Sierra Leone",
      languages: ["eng"]
  }, {
      code_2: "SG",
      code_3: "SGP",
      numCode: "702",
      name: "Singapore",
      languages: ["eng", "zho", "msa", "tam"],
      langCultureMs: [{
          langCultureName: "en-SG",
          displayName: "English - Singapore",
          cultureCode: "0x1004"
      }]
  }, {
      code_2: "SX",
      code_3: "SXM",
      numCode: "534",
      name: "Sint Maarten (Dutch part)",
      languages: ["nld", "eng"]
  }, {
      code_2: "SK",
      code_3: "SVK",
      numCode: "703",
      name: "Slovakia",
      languages: ["ces", "slk"],
      langCultureMs: [{
          langCultureName: "sk-SK",
          displayName: "Slovak - Slovakia",
          cultureCode: "0x041B"
      }]
  }, {
      code_2: "SI",
      code_3: "SVN",
      numCode: "705",
      name: "Slovenia",
      languages: ["ita", "slv"],
      langCultureMs: [{
          langCultureName: "sl-SI",
          displayName: "Slovenian - Slovenia",
          cultureCode: "0x0424"
      }]
  }, {
      code_2: "SB",
      code_3: "SLB",
      numCode: "090",
      name: "Solomon Islands",
      languages: ["eng"]
  }, {
      code_2: "SO",
      code_3: "SOM",
      numCode: "706",
      name: "Somalia",
      languages: ["ara", "som"]
  }, {
      code_2: "ZA",
      code_3: "ZAF",
      numCode: "710",
      name: "South Africa",
      languages: ["afr", "eng", "nde", "nbl", "nso", "sot", "ssw", "tso", "tsn", "ven", "xho", "zul"],
      langCultureMs: [{
          langCultureName: "af-ZA",
          displayName: "Afrikaans - South Africa",
          cultureCode: "0x0436"
      }, {
          langCultureName: "en-ZA",
          displayName: "English - South Africa",
          cultureCode: "0x1C09"
      }]
  }, {
      code_2: "GS",
      code_3: "SGS",
      numCode: "239",
      name: "South Georgia and the South Sandwich Islands"
  }, {
      code_2: "SS",
      code_3: "SSD",
      numCode: "728",
      name: "South Sudan",
      languages: ["eng"]
  }, {
      code_2: "ES",
      code_3: "ESP",
      numCode: "724",
      name: "Spain",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "eu-ES",
          displayName: "Basque - Basque",
          cultureCode: "0x042D"
      }, {
          langCultureName: "ca-ES",
          displayName: "Catalan - Catalan",
          cultureCode: "0x0403"
      }, {
          langCultureName: "gl-ES",
          displayName: "Galician - Galician",
          cultureCode: "0x0456"
      }, {
          langCultureName: "es-ES",
          displayName: "Spanish - Spain",
          cultureCode: "0x0C0A"
      }]
  }, {
      code_2: "LK",
      code_3: "LKA",
      numCode: "144",
      name: "Sri Lanka",
      languages: ["eng", "sin", "tam"]
  }, {
      code_2: "SD",
      code_3: "SDN",
      numCode: "729",
      name: "Sudan",
      languages: ["ara", "eng"]
  }, {
      code_2: "SR",
      code_3: "SUR",
      numCode: "740",
      name: "Suriname",
      languages: ["nld"]
  }, {
      code_2: "SJ",
      code_3: "SJM",
      numCode: "744",
      name: "Svalbard and Jan Mayen"
  }, {
      code_2: "SZ",
      code_3: "SWZ",
      numCode: "748",
      name: "Swaziland",
      languages: ["eng", "ssw"]
  }, {
      code_2: "SE",
      code_3: "SWE",
      numCode: "752",
      name: "Sweden",
      languages: ["swe"],
      langCultureMs: [{
          langCultureName: "sv-SE",
          displayName: "Swedish - Sweden",
          cultureCode: "0x041D"
      }]
  }, {
      code_2: "CH",
      code_3: "CHE",
      numCode: "756",
      name: "Switzerland",
      languages: ["fra", "deu", "ita", "roh"],
      langCultureMs: [{
          langCultureName: "fr-CH",
          displayName: "French - Switzerland",
          cultureCode: "0x100C"
      }, {
          langCultureName: "de-CH",
          displayName: "German - Switzerland",
          cultureCode: "0x0807"
      }, {
          langCultureName: "it-CH",
          displayName: "Italian - Switzerland",
          cultureCode: "0x0810"
      }]
  }, {
      code_2: "SY",
      code_3: "SYR",
      numCode: "760",
      name: "Syrian Arab Republic",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-SY",
          displayName: "Arabic - Syria",
          cultureCode: "0x2801"
      }, {
          langCultureName: "syr-SY",
          displayName: "Syriac - Syria",
          cultureCode: "0x045A"
      }]
  }, {
      code_2: "TW",
      code_3: "TWN",
      numCode: "158",
      name: "Taiwan, Province of China",
      languages: ["zho"],
      langCultureMs: [{
          langCultureName: "zh-TW",
          displayName: "Chinese - Taiwan",
          cultureCode: "0x0404"
      }]
  }, {
      code_2: "TJ",
      code_3: "TJK",
      numCode: "762",
      name: "Tajikistan",
      languages: ["fas", "rus", "tgk"]
  }, {
      code_2: "TZ",
      code_3: "TZA",
      numCode: "834",
      name: "Tanzania, United Republic of",
      languages: ["eng", "swa"]
  }, {
      code_2: "TH",
      code_3: "THA",
      numCode: "764",
      name: "Thailand",
      languages: ["tha"],
      langCultureMs: [{
          langCultureName: "th-TH",
          displayName: "Thai - Thailand",
          cultureCode: "0x041E"
      }]
  }, {
      code_2: "TL",
      code_3: "TLS",
      numCode: "626",
      name: "Timor-Leste",
      languages: ["por", "tet"]
  }, {
      code_2: "TG",
      code_3: "TGO",
      numCode: "768",
      name: "Togo",
      languages: ["ewe", "fra"]
  }, {
      code_2: "TK",
      code_3: "TKL",
      numCode: "772",
      name: "Tokelau"
  }, {
      code_2: "TO",
      code_3: "TON",
      numCode: "776",
      name: "Tonga",
      languages: ["eng"]
  }, {
      code_2: "TT",
      code_3: "TTO",
      numCode: "780",
      name: "Trinidad and Tobago",
      languages: ["eng"],
      langCultureMs: [{
          langCultureName: "en-TT",
          displayName: "English - Trinidad and Tobago",
          cultureCode: "0x2C09"
      }]
  }, {
      code_2: "TN",
      code_3: "TUN",
      numCode: "788",
      name: "Tunisia",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-TN",
          displayName: "Arabic - Tunisia",
          cultureCode: "0x1C01"
      }]
  }, {
      code_2: "TR",
      code_3: "TUR",
      numCode: "792",
      name: "Turkey",
      languages: ["tur"],
      langCultureMs: [{
          langCultureName: "tr-TR",
          displayName: "Turkish - Turkey",
          cultureCode: "0x041F"
      }]
  }, {
      code_2: "TM",
      code_3: "TKM",
      numCode: "795",
      name: "Turkmenistan",
      languages: ["tuk"]
  }, {
      code_2: "TC",
      code_3: "TCA",
      numCode: "796",
      name: "Turks and Caicos Islands"
  }, {
      code_2: "TV",
      code_3: "TUV",
      numCode: "798",
      name: "Tuvalu",
      languages: ["eng"]
  }, {
      code_2: "UG",
      code_3: "UGA",
      numCode: "800",
      name: "Uganda",
      languages: ["eng", "swa"]
  }, {
      code_2: "UA",
      code_3: "UKR",
      numCode: "804",
      name: "Ukraine",
      languages: ["ukr"],
      langCultureMs: [{
          langCultureName: "uk-UA",
          displayName: "Ukrainian - Ukraine",
          cultureCode: "0x0422"
      }]
  }, {
      code_2: "AE",
      code_3: "ARE",
      numCode: "784",
      name: "United Arab Emirates",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-AE",
          displayName: "Arabic - United Arab Emirates",
          cultureCode: "0x3801"
      }]
  }, {
      code_2: "GB",
      code_3: "GBR",
      numCode: "826",
      name: "United Kingdom",
      languages: ["eng", "cym"],
      langCultureMs: [{
          langCultureName: "en-GB",
          displayName: "English - United Kingdom",
          cultureCode: "0x0809"
      }]
  }, {
      code_2: "US",
      code_3: "USA",
      numCode: "840",
      name: "United States",
      languages: ["eng"],
      langCultureMs: [{
          langCultureName: "en-US",
          displayName: "English - United States",
          cultureCode: "0x0409"
      }]
  }, {
      code_2: "UM",
      code_3: "UMI",
      numCode: "581",
      name: "United States Minor Outlying Islands"
  }, {
      code_2: "UY",
      code_3: "URY",
      numCode: "858",
      name: "Uruguay",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-UY",
          displayName: "Spanish - Uruguay",
          cultureCode: "0x380A"
      }]
  }, {
      code_2: "UZ",
      code_3: "UZB",
      numCode: "860",
      name: "Uzbekistan",
      languages: ["uzb"],
      langCultureMs: [{
          langCultureName: "Cy-uz-UZ",
          displayName: "Uzbek (Cyrillic) - Uzbekistan",
          cultureCode: "0x0843"
      }, {
          langCultureName: "Lt-uz-UZ",
          displayName: "Uzbek (Latin) - Uzbekistan",
          cultureCode: "0x0443"
      }]
  }, {
      code_2: "VU",
      code_3: "VUT",
      numCode: "548",
      name: "Vanuatu",
      languages: ["bis", "eng", "fra"]
  }, {
      code_2: "VE",
      code_3: "VEN",
      numCode: "862",
      name: "Venezuela, Bolivarian Republic of",
      languages: ["spa"],
      langCultureMs: [{
          langCultureName: "es-VE",
          displayName: "Spanish - Venezuela",
          cultureCode: "0x200A"
      }]
  }, {
      code_2: "VN",
      code_3: "VNM",
      numCode: "704",
      name: "Viet Nam",
      languages: ["vie"],
      langCultureMs: [{
          langCultureName: "vi-VN",
          displayName: "Vietnamese - Vietnam",
          cultureCode: "0x042A"
      }]
  }, {
      code_2: "VG",
      code_3: "VGB",
      numCode: "092",
      name: "Virgin Islands, British"
  }, {
      code_2: "VI",
      code_3: "VIR",
      numCode: "850",
      name: "Virgin Islands, U.S."
  }, {
      code_2: "WF",
      code_3: "WLF",
      numCode: "876",
      name: "Wallis and Futuna",
      languages: ["fra"]
  }, {
      code_2: "EH",
      code_3: "ESH",
      numCode: "732",
      name: "Western Sahara",
      languages: ["spa"]
  }, {
      code_2: "YE",
      code_3: "YEM",
      numCode: "887",
      name: "Yemen",
      languages: ["ara"],
      langCultureMs: [{
          langCultureName: "ar-YE",
          displayName: "Arabic - Yemen",
          cultureCode: "0x2401"
      }]
  }, {
      code_2: "ZM",
      code_3: "ZMB",
      numCode: "894",
      name: "Zambia",
      languages: ["eng"]
  }, {
      code_2: "ZW",
      code_3: "ZWE",
      numCode: "716",
      name: "Zimbabwe",
      languages: ["eng", "nde", "sna"],
      langCultureMs: [{
          langCultureName: "en-ZW",
          displayName: "English - Zimbabwe",
          cultureCode: "0x3009"
      }]
  }],
  oa = [
      ["af", "ZA"],
      ["am", "ET"],
      ["ar", "AE"],
      ["ar", "BH"],
      ["ar", "DZ"],
      ["ar", "EG"],
      ["ar", "IQ"],
      ["ar", "JO"],
      ["ar", "KW"],
      ["ar", "LB"],
      ["ar", "LY"],
      ["ar", "MA"],
      ["arn", "CL"],
      ["ar", "OM"],
      ["ar", "QA"],
      ["ar", "SA"],
      ["ar", "SY"],
      ["ar", "TN"],
      ["ar", "YE"],
      ["as", "IN"],
      ["az", "Cyrl", "AZ"],
      ["az", "Latn", "AZ"],
      ["ba", "RU"],
      ["be", "BY"],
      ["bg", "BG"],
      ["bn", "BD"],
      ["bn", "IN"],
      ["bo", "CN"],
      ["br", "FR"],
      ["bs", "Cyrl", "BA"],
      ["bs", "Latn", "BA"],
      ["ca", "ES"],
      ["co", "FR"],
      ["cs", "CZ"],
      ["cy", "GB"],
      ["da", "DK"],
      ["de", "AT"],
      ["de", "CH"],
      ["de", "DE"],
      ["de", "LI"],
      ["de", "LU"],
      ["dsb", "DE"],
      ["dv", "MV"],
      ["el", "GR"],
      ["en", "029"],
      ["en", "AU"],
      ["en", "BZ"],
      ["en", "CA"],
      ["en", "GB"],
      ["en", "IE"],
      ["en", "IN"],
      ["en", "JM"],
      ["en", "MY"],
      ["en", "NZ"],
      ["en", "PH"],
      ["en", "SG"],
      ["en", "TT"],
      ["en", "US"],
      ["en", "ZA"],
      ["en", "ZW"],
      ["es", "AR"],
      ["es", "BO"],
      ["es", "CL"],
      ["es", "CO"],
      ["es", "CR"],
      ["es", "DO"],
      ["es", "EC"],
      ["es", "ES"],
      ["es", "GT"],
      ["es", "HN"],
      ["es", "MX"],
      ["es", "NI"],
      ["es", "PA"],
      ["es", "PE"],
      ["es", "PR"],
      ["es", "PY"],
      ["es", "SV"],
      ["es", "US"],
      ["es", "UY"],
      ["es", "VE"],
      ["et", "EE"],
      ["eu", "ES"],
      ["fa", "IR"],
      ["fi", "FI"],
      ["fil", "PH"],
      ["fo", "FO"],
      ["fr", "BE"],
      ["fr", "CA"],
      ["fr", "CH"],
      ["fr", "FR"],
      ["fr", "LU"],
      ["fr", "MC"],
      ["fy", "NL"],
      ["ga", "IE"],
      ["gd", "GB"],
      ["gl", "ES"],
      ["gsw", "FR"],
      ["gu", "IN"],
      ["ha", "Latn", "NG"],
      ["he", "IL"],
      ["hi", "IN"],
      ["hr", "BA"],
      ["hr", "HR"],
      ["hsb", "DE"],
      ["hu", "HU"],
      ["hy", "AM"],
      ["id", "ID"],
      ["ig", "NG"],
      ["ii", "CN"],
      ["is", "IS"],
      ["it", "CH"],
      ["it", "IT"],
      ["iu", "Cans", "CA"],
      ["iu", "Latn", "CA"],
      ["ja", "JP"],
      ["ka", "GE"],
      ["kk", "KZ"],
      ["kl", "GL"],
      ["km", "KH"],
      ["kn", "IN"],
      ["kok", "IN"],
      ["ko", "KR"],
      ["ky", "KG"],
      ["lb", "LU"],
      ["lo", "LA"],
      ["lt", "LT"],
      ["lv", "LV"],
      ["mi", "NZ"],
      ["mk", "MK"],
      ["ml", "IN"],
      ["mn", "MN"],
      ["mn", "Mong", "CN"],
      ["moh", "CA"],
      ["mr", "IN"],
      ["ms", "BN"],
      ["ms", "MY"],
      ["mt", "MT"],
      ["nb", "NO"],
      ["ne", "NP"],
      ["nl", "BE"],
      ["nl", "NL"],
      ["nn", "NO"],
      ["nso", "ZA"],
      ["oc", "FR"],
      ["or", "IN"],
      ["pa", "IN"],
      ["pl", "PL"],
      ["prs", "AF"],
      ["ps", "AF"],
      ["pt", "BR"],
      ["pt", "PT"],
      ["qut", "GT"],
      ["quz", "BO"],
      ["quz", "EC"],
      ["quz", "PE"],
      ["rm", "CH"],
      ["ro", "RO"],
      ["ru", "RU"],
      ["rw", "RW"],
      ["sah", "RU"],
      ["sa", "IN"],
      ["se", "FI"],
      ["se", "NO"],
      ["se", "SE"],
      ["si", "LK"],
      ["sk", "SK"],
      ["sl", "SI"],
      ["sma", "NO"],
      ["sma", "SE"],
      ["smj", "NO"],
      ["smj", "SE"],
      ["smn", "FI"],
      ["sms", "FI"],
      ["sq", "AL"],
      ["sr", "Cyrl", "BA"],
      ["sr", "Cyrl", "CS"],
      ["sr", "Cyrl", "ME"],
      ["sr", "Cyrl", "RS"],
      ["sr", "Latn", "BA"],
      ["sr", "Latn", "CS"],
      ["sr", "Latn", "ME"],
      ["sr", "Latn", "RS"],
      ["sv", "FI"],
      ["sv", "SE"],
      ["sw", "KE"],
      ["syr", "SY"],
      ["ta", "IN"],
      ["te", "IN"],
      ["tg", "Cyrl", "TJ"],
      ["th", "TH"],
      ["tk", "TM"],
      ["tn", "ZA"],
      ["tr", "TR"],
      ["tt", "RU"],
      ["tzm", "Latn", "DZ"],
      ["ug", "CN"],
      ["uk", "UA"],
      ["ur", "PK"],
      ["uz", "Cyrl", "UZ"],
      ["uz", "Latn", "UZ"],
      ["vi", "VN"],
      ["wo", "SN"],
      ["xh", "ZA"],
      ["yo", "NG"],
      ["zh", "CN"],
      ["zh", "HK"],
      ["zh", "MO"],
      ["zh", "SG"],
      ["zh", "TW"],
      ["zu", "ZA"]
  ],
  pa = {
      languageFamilies: ta,
      languages: la,
      countries: ra,
      locales: oa
  };
(function(a) {
  const u = pa;

  function g(e, n) {
      return e || n
  }

  function r(e) {
      return typeof e == "function"
  }
  a.getCountries = function() {
      return u.countries
  }, a.getLanguages = function() {
      return u.languages
  }, a.getLanguageFamilies = function() {
      return u.languageFamilies
  }, a.getLanguageCodes = function(e, n) {
      const {
          languages: t
      } = u, d = ["iso639_1", "iso639_2en", "iso639_3"], i = [];
      if (n = n || (r(e) ? e : g), e = e && !r(e) ? e : 1, e = Math.floor(Number(e)), Number.isNaN(e) || e < 1 || e > d.length) return n("Wrong language code type provided. Valid values: 1, 2, 3 for iso639-1, iso639-2, iso639-3 respectively");
      const l = d[e - 1];
      for (const o of t) o[l] && i.push(o[l]);
      return n(null, i)
  }, a.getCountryCodes = function(e, n) {
      const {
          countries: t
      } = u, d = ["numCode", "code_2", "code_3"], i = [];
      if (n = n || (r(e) ? e : g), e = e && !r(e) ? e : 2, e = Math.floor(Number(e)), Number.isNaN(e) || e < 1 || e > d.length) return n("Wrong country code type provided. Valid values: 1, 2, 3 for numeric code, alpha-2, alpha-3 respectively");
      const l = d[e - 1];
      for (const o of t) o[l] && i.push(o[l]);
      return n(null, i)
  }, a.languageCodeExists = function(e) {
      let n, t;
      if (!e) return !1;
      e = e.toLowerCase();
      for (let d = 1; d < 4 && (n = a.getLanguageCodes(d), t = n.includes(e), !t); d++);
      return t
  }, a.countryCodeExists = function(e) {
      let n, t;
      if (!e) return !1;
      e = e.toUpperCase();
      for (let d = 1; d < 4 && (n = a.getCountryCodes(d), t = n.includes(e), !t); d++);
      return t
  }, a.getCountry = function(e, n, t) {
      const {
          countries: d
      } = u;
      let i, l, o;
      if (typeof e != "string") return n("No country code provided");
      if (n = n || g, e = e.toUpperCase(), e.length === 2 ? l = "code_2" : e.length === 3 && (l = "code_3"), l) {
          if (i = d.find(p => p[l] === e), !i) return n('There is no country with code "' + e + '"');
          if (i = {
                  ...i
              }, !t && (o = i.languages, i.languages = [], o))
              for (const p of o) i.languages.push(a.getLanguage(p, null, !0));
          return n(null, i)
      }
      return n("Wrong type of country code provided")
  }, a.getLanguage = function(e, n, t) {
      const {
          languages: d
      } = u;
      let i;
      const l = [];
      let o;
      if (n = n || g, typeof e != "string") return n("No language code provided");
      if (e = e.toLowerCase(), e.length === 2 ? l.push("iso639_1") : e.length === 3 && l.push("iso639_2", "iso639_2en", "iso639_3"), l) {
          for (const p of l)
              if (i = d.find(s => s[p] === e), i) break;
          if (!i) return n('There is no language with code "' + e + '"');
          if (i = {
                  ...i
              }, !t && (o = i.countries, i.countries = [], o))
              for (const p of o) i.countries.push(a.getCountry(p, null, !0));
          return n(null, i)
      }
      return n("Wrong type of language code provided")
  }, a.getCountryLanguages = function(e, n) {
      const t = [];
      return n = n || g, a.getCountry(e, function(d, i) {
          if (d) return n(d);
          for (const l of i.languages) t.push({
              iso639_1: l.iso639_1,
              iso639_2: l.iso639_2en,
              iso639_3: l.iso639_3
          })
      }), n(null, t)
  }, a.getLanguageCountries = function(e, n) {
      const t = [];
      return n = n || g, a.getLanguage(e, function(d, i) {
          if (d) return n(d);
          for (const l of i.countries) t.push({
              code_2: l.code_2,
              code_3: l.code_3,
              numCode: l.numCode
          })
      }), n(null, t)
  }, a.getCountryMsLocales = function(e, n) {
      let t = [];
      return n = n || g, a.getCountry(e, function(d, i) {
          if (d) return n(d);
          t = i.langCultureMs
      }), n(null, t)
  }, a.getLanguageMsLocales = function(e, n) {
      let t = [];
      return n = n || g, a.getLanguage(e, function(d, i) {
          if (d) return n(d);
          t = i.langCultureMs
      }), n(null, t)
  }, a.getLanguageFamilyMembers = function(e, n) {
      const {
          languages: t
      } = u, d = [];
      if (n = n || g, typeof e != "string") return n("No language family provided");
      if (e = e.toLowerCase(), !u.languageFamilies.find(o => o.toLowerCase() === e)) return n('There is no language family "' + e + '"');
      const l = t.filter(o => o.family.toLowerCase() === e);
      for (const o of l) d.push(a.getLanguage(o.iso639_3));
      return n(null, d)
  }, a.getLocales = function(e) {
      const {
          locales: n
      } = u, t = [];
      let d;
      for (const i of n) d = i[2] ? "-" + i[2] : "", e ? t.push(i[0] + d + "-" + i[1]) : t.push(i[0] + "-" + i[1] + d);
      return t
  }
})(aa);
const Ca = ia(aa);
var sa = {},
  P = {},
  h = {},
  M = {},
  f = {},
  q = {};
Object.defineProperty(q, "__esModule", {
  value: !0
});
q.default = {
  bh: 15,
  aav: 209,
  afa: 298,
  alg: 415,
  alv: 430,
  apa: 505,
  aqa: 531,
  aql: 536,
  art: 558,
  ath: 596,
  auf: 620,
  aus: 633,
  awd: 655,
  azc: 702,
  bad: 714,
  bai: 719,
  bat: 727,
  ber: 826,
  bnt: 1054,
  btk: 1193,
  cai: 1366,
  cau: 1377,
  cba: 1383,
  ccn: 1413,
  ccs: 1418,
  cdc: 1420,
  cdd: 1421,
  cel: 1439,
  cmc: 1529,
  cpe: 1584,
  cpf: 1585,
  cpp: 1590,
  crp: 1611,
  csu: 1641,
  cus: 1677,
  day: 1721,
  dmn: 1867,
  dra: 1913,
  egx: 2024,
  esx: 2110,
  euq: 2123,
  fiu: 2165,
  fox: 2187,
  gem: 2313,
  gme: 2399,
  gmq: 2405,
  gmw: 2409,
  grk: 2475,
  him: 2626,
  hmx: 2667,
  hok: 2689,
  hyx: 2760,
  iir: 2814,
  ijo: 2819,
  inc: 2858,
  ine: 2859,
  ira: 2878,
  iro: 2884,
  itc: 2904,
  jpx: 3043,
  kar: 3090,
  kdo: 3160,
  khi: 3256,
  kro: 3511,
  map: 4085,
  mkh: 4328,
  mno: 4409,
  mun: 4581,
  myn: 4681,
  nah: 4726,
  nai: 4727,
  ngf: 4848,
  nic: 4894,
  nub: 5131,
  omq: 5301,
  omv: 5305,
  oto: 5370,
  paa: 5394,
  phi: 5499,
  plf: 5554,
  poz: 5639,
  pqe: 5655,
  pqw: 5657,
  pra: 5658,
  qwe: 5793,
  roa: 5920,
  sai: 5984,
  sal: 5987,
  sdv: 6065,
  sem: 6080,
  sgn: 6110,
  sio: 6158,
  sit: 6163,
  sla: 6211,
  smi: 6240,
  son: 6291,
  sqj: 6325,
  ssa: 6359,
  syd: 6474,
  tai: 6506,
  tbq: 6538,
  trk: 6863,
  tup: 6942,
  tut: 6945,
  tuw: 6948,
  urj: 7122,
  wak: 7262,
  wen: 7311,
  xgn: 7563,
  xnd: 7653,
  ypk: 7975,
  zhx: 8104,
  zle: 8129,
  zls: 8134,
  zlw: 8135,
  znd: 8163
};
var K = {};
Object.defineProperty(K, "__esModule", {
  value: !0
});
K.default = {
  aao: 8240,
  abh: 8241,
  abv: 8242,
  acm: 8243,
  acq: 8244,
  acw: 8245,
  acx: 8246,
  acy: 8247,
  adf: 8248,
  ads: 8249,
  aeb: 8250,
  aec: 8251,
  aed: 8252,
  aen: 8253,
  afb: 8254,
  afg: 8255,
  ajp: 8256,
  ajs: 8257,
  apc: 8258,
  apd: 8259,
  arb: 8260,
  arq: 8261,
  ars: 8262,
  ary: 8263,
  arz: 8264,
  ase: 8265,
  asf: 8266,
  asp: 8267,
  asq: 8268,
  asw: 8269,
  auz: 8270,
  avl: 8271,
  ayh: 8272,
  ayl: 8273,
  ayn: 8274,
  ayp: 8275,
  bbz: 8276,
  bfi: 8277,
  bfk: 8278,
  bjn: 8279,
  bog: 8280,
  bqn: 8281,
  bqy: 8282,
  btj: 8283,
  bve: 8284,
  bvl: 8285,
  bvu: 8286,
  bzs: 8287,
  cdo: 8288,
  cds: 8289,
  cjy: 8290,
  cmn: 8291,
  cnp: 8292,
  coa: 8293,
  cpx: 8294,
  csc: 8295,
  csd: 8296,
  cse: 8297,
  csf: 8298,
  csg: 8299,
  csl: 8300,
  csn: 8301,
  csp: 8302,
  csq: 8303,
  csr: 8304,
  csx: 8305,
  czh: 8306,
  czo: 8307,
  doq: 8308,
  dse: 8309,
  dsl: 8310,
  dsz: 8311,
  dup: 8312,
  ecs: 8313,
  ehs: 8314,
  esl: 8315,
  esn: 8316,
  eso: 8317,
  eth: 8318,
  fcs: 8319,
  fse: 8320,
  fsl: 8321,
  fss: 8322,
  gan: 8323,
  gds: 8324,
  gom: 8325,
  gse: 8326,
  gsg: 8327,
  gsm: 8328,
  gss: 8329,
  gus: 8330,
  hab: 8331,
  haf: 8332,
  hak: 8333,
  hds: 8334,
  hji: 8335,
  hks: 8336,
  hos: 8337,
  hps: 8338,
  hsh: 8339,
  hsl: 8340,
  hsn: 8341,
  icl: 8342,
  iks: 8343,
  ils: 8344,
  inl: 8345,
  ins: 8346,
  ise: 8347,
  isg: 8348,
  isr: 8349,
  jak: 8350,
  jax: 8351,
  jcs: 8352,
  jhs: 8353,
  jks: 8354,
  jls: 8355,
  jos: 8356,
  jsl: 8357,
  jus: 8358,
  kgi: 8359,
  knn: 8360,
  kvb: 8361,
  kvk: 8362,
  kvr: 8363,
  kxd: 8364,
  lbs: 8365,
  lce: 8366,
  lcf: 8367,
  liw: 8368,
  lls: 8369,
  lsb: 8370,
  lsc: 8371,
  lsg: 8372,
  lsl: 8373,
  lsn: 8374,
  lso: 8375,
  lsp: 8376,
  lst: 8377,
  lsv: 8378,
  lsw: 8379,
  lsy: 8380,
  ltg: 8381,
  lvs: 8382,
  lws: 8383,
  lzh: 8384,
  max: 8385,
  mdl: 8386,
  meo: 8387,
  mfa: 8388,
  mfb: 8389,
  mfs: 8390,
  min: 8391,
  mnp: 8392,
  mqg: 8393,
  mre: 8394,
  msd: 8395,
  msi: 8396,
  msr: 8397,
  mui: 8398,
  mzc: 8399,
  mzg: 8400,
  mzy: 8401,
  nan: 8402,
  nbs: 8403,
  ncs: 8404,
  nsi: 8405,
  nsl: 8406,
  nsp: 8407,
  nsr: 8408,
  nzs: 8409,
  okl: 8410,
  orn: 8411,
  ors: 8412,
  pel: 8413,
  pga: 8414,
  pgz: 8415,
  pks: 8416,
  prl: 8417,
  prz: 8418,
  psc: 8419,
  psd: 8420,
  pse: 8421,
  psg: 8422,
  psl: 8423,
  pso: 8424,
  psp: 8425,
  psr: 8426,
  pys: 8427,
  rib: 8428,
  rms: 8429,
  rnb: 8430,
  rsi: 8431,
  rsl: 8432,
  rsm: 8433,
  rsn: 8434,
  sdl: 8435,
  sfb: 8436,
  sfs: 8437,
  sgg: 8438,
  sgx: 8439,
  shu: 8440,
  slf: 8441,
  sls: 8442,
  sqk: 8443,
  sqs: 8444,
  sqx: 8445,
  ssh: 8446,
  ssp: 8447,
  ssr: 8448,
  svk: 8449,
  swc: 8450,
  swh: 8451,
  swl: 8452,
  syy: 8453,
  szs: 8454,
  tmw: 8455,
  tse: 8456,
  tsm: 8457,
  tsq: 8458,
  tss: 8459,
  tsy: 8460,
  tza: 8461,
  ugn: 8462,
  ugy: 8463,
  ukl: 8464,
  uks: 8465,
  urk: 8466,
  uzn: 8467,
  uzs: 8468,
  vgt: 8469,
  vkk: 8470,
  vkt: 8471,
  vsi: 8472,
  vsl: 8473,
  vsv: 8474,
  wbs: 8475,
  wuu: 8476,
  xki: 8477,
  xml: 8478,
  xmm: 8479,
  xms: 8480,
  yds: 8481,
  ygs: 8482,
  yhs: 8483,
  ysl: 8484,
  ysm: 8485,
  yue: 8486,
  zib: 8487,
  zlm: 8488,
  zmi: 8489,
  zsl: 8490,
  zsm: 8491
};
var B = {};
Object.defineProperty(B, "__esModule", {
  value: !0
});
B.default = {
  "art-lojban": 9117,
  "cel-gaulish": 9118,
  "en-gb-oed": 9119,
  "i-ami": 9120,
  "i-bnn": 9121,
  "i-default": 9122,
  "i-enochian": 9123,
  "i-hak": 9124,
  "i-klingon": 9125,
  "i-lux": 9126,
  "i-mingo": 9127,
  "i-navajo": 9128,
  "i-pwn": 9129,
  "i-tao": 9130,
  "i-tay": 9131,
  "i-tsu": 9132,
  "no-bok": 9133,
  "no-nyn": 9134,
  "sgn-be-fr": 9135,
  "sgn-be-nl": 9136,
  "sgn-ch-de": 9137,
  "zh-guoyu": 9138,
  "zh-hakka": 9139,
  "zh-min": 9140,
  "zh-min-nan": 9141,
  "zh-xiang": 9142
};
var R = {};
Object.defineProperty(R, "__esModule", {
  value: !0
});
R.default = {
  142: {
      region: 8999
  },
  143: {
      region: 9e3
  },
  145: {
      region: 9001
  },
  150: {
      region: 9002
  },
  151: {
      region: 9003
  },
  154: {
      region: 9004
  },
  155: {
      region: 9005
  },
  202: {
      region: 9006
  },
  419: {
      region: 9007
  },
  1901: {
      variant: 9010
  },
  1994: {
      variant: 9012
  },
  1996: {
      variant: 9013
  },
  aa: {
      language: 0,
      region: 8704
  },
  ab: {
      language: 1
  },
  ae: {
      language: 2,
      region: 8707
  },
  af: {
      language: 3,
      region: 8708
  },
  ak: {
      language: 4
  },
  am: {
      language: 5,
      region: 8712
  },
  an: {
      language: 6,
      region: 8713
  },
  ar: {
      language: 7,
      region: 8716
  },
  as: {
      language: 8,
      region: 8717
  },
  av: {
      language: 9
  },
  ay: {
      language: 10
  },
  az: {
      language: 11,
      region: 8722
  },
  ba: {
      language: 12,
      region: 8723
  },
  be: {
      language: 13,
      region: 8726
  },
  bg: {
      language: 14,
      region: 8728
  },
  bh: {
      language: 15,
      region: 8729
  },
  bi: {
      language: 16,
      region: 8730
  },
  bm: {
      language: 17,
      region: 8733
  },
  bn: {
      language: 18,
      region: 8734
  },
  bo: {
      language: 19,
      region: 8735
  },
  br: {
      language: 20,
      region: 8737
  },
  bs: {
      language: 21,
      region: 8738
  },
  ca: {
      language: 22,
      region: 8745
  },
  ce: {
      language: 23
  },
  ch: {
      language: 24,
      region: 8750
  },
  co: {
      language: 25,
      region: 8756
  },
  cr: {
      language: 26,
      region: 8758
  },
  cs: {
      language: 27,
      region: 8759
  },
  cu: {
      language: 28,
      region: 8760
  },
  cv: {
      language: 29,
      region: 8761
  },
  cy: {
      language: 30,
      region: 8764
  },
  da: {
      language: 31
  },
  de: {
      language: 32,
      region: 8767
  },
  dv: {
      language: 33
  },
  dz: {
      language: 34,
      region: 8773
  },
  ee: {
      language: 35,
      region: 8776
  },
  el: {
      language: 36
  },
  en: {
      language: 37
  },
  eo: {
      language: 38
  },
  es: {
      language: 39,
      region: 8780
  },
  et: {
      language: 40,
      region: 8781
  },
  eu: {
      language: 41,
      region: 8782
  },
  fa: {
      language: 42
  },
  ff: {
      language: 43
  },
  fi: {
      language: 44,
      region: 8784
  },
  fj: {
      language: 45,
      region: 8785
  },
  fo: {
      language: 46,
      region: 8788
  },
  fr: {
      language: 47,
      region: 8789
  },
  fy: {
      language: 48
  },
  ga: {
      language: 49,
      region: 8791
  },
  gd: {
      language: 50,
      region: 8793
  },
  gl: {
      language: 51,
      region: 8799
  },
  gn: {
      language: 52,
      region: 8801
  },
  gu: {
      language: 53,
      region: 8807
  },
  gv: {
      language: 54
  },
  ha: {
      language: 55
  },
  he: {
      language: 56
  },
  hi: {
      language: 57
  },
  ho: {
      language: 58
  },
  hr: {
      language: 59,
      region: 8813
  },
  ht: {
      language: 60,
      region: 8814
  },
  hu: {
      language: 61,
      region: 8815
  },
  hy: {
      language: 62
  },
  hz: {
      language: 63
  },
  ia: {
      language: 64
  },
  id: {
      language: 65,
      region: 8817
  },
  ie: {
      language: 66,
      region: 8818
  },
  ig: {
      language: 67
  },
  ii: {
      language: 68
  },
  ik: {
      language: 69
  },
  in: {
      language: 70,
      region: 8821
  },
  io: {
      language: 71,
      region: 8822
  },
  is: {
      language: 72,
      region: 8825
  },
  it: {
      language: 73,
      region: 8826
  },
  iu: {
      language: 74
  },
  iw: {
      language: 75
  },
  ja: {
      language: 76
  },
  ji: {
      language: 77
  },
  jv: {
      language: 78
  },
  jw: {
      language: 79
  },
  ka: {
      language: 80
  },
  kg: {
      language: 81,
      region: 8832
  },
  ki: {
      language: 82,
      region: 8834
  },
  kj: {
      language: 83
  },
  kk: {
      language: 84
  },
  kl: {
      language: 85
  },
  km: {
      language: 86,
      region: 8835
  },
  kn: {
      language: 87,
      region: 8836
  },
  ko: {
      language: 88
  },
  kr: {
      language: 89,
      region: 8838
  },
  ks: {
      language: 90
  },
  ku: {
      language: 91
  },
  kv: {
      language: 92
  },
  kw: {
      language: 93,
      region: 8839
  },
  ky: {
      language: 94,
      region: 8840
  },
  la: {
      language: 95,
      region: 8842
  },
  lb: {
      language: 96,
      region: 8843
  },
  lg: {
      language: 97
  },
  li: {
      language: 98,
      region: 8845
  },
  ln: {
      language: 99
  },
  lo: {
      language: 100
  },
  lt: {
      language: 101,
      region: 8849
  },
  lu: {
      language: 102,
      region: 8850
  },
  lv: {
      language: 103,
      region: 8851
  },
  mg: {
      language: 104,
      region: 8858
  },
  mh: {
      language: 105,
      region: 8859
  },
  mi: {
      language: 106
  },
  mk: {
      language: 107,
      region: 8860
  },
  ml: {
      language: 108,
      region: 8861
  },
  mn: {
      language: 109,
      region: 8863
  },
  mo: {
      language: 110,
      region: 8864
  },
  mr: {
      language: 111,
      region: 8867
  },
  ms: {
      language: 112,
      region: 8868
  },
  mt: {
      language: 113,
      region: 8869
  },
  my: {
      language: 114,
      region: 8874
  },
  na: {
      language: 115,
      region: 8876
  },
  nb: {
      language: 116
  },
  nd: {
      language: 117
  },
  ne: {
      language: 118,
      region: 8878
  },
  ng: {
      language: 119,
      region: 8880
  },
  nl: {
      language: 120,
      region: 8882
  },
  nn: {
      language: 121
  },
  no: {
      language: 122,
      region: 8883
  },
  nr: {
      language: 123,
      region: 8885
  },
  nv: {
      language: 124
  },
  ny: {
      language: 125
  },
  oc: {
      language: 126
  },
  oj: {
      language: 127
  },
  om: {
      language: 128,
      region: 8889
  },
  or: {
      language: 129
  },
  os: {
      language: 130
  },
  pa: {
      language: 131,
      region: 8890
  },
  pi: {
      language: 132
  },
  pl: {
      language: 133,
      region: 8896
  },
  ps: {
      language: 134,
      region: 8900
  },
  pt: {
      language: 135,
      region: 8901
  },
  qu: {
      language: 136
  },
  rm: {
      language: 137
  },
  rn: {
      language: 138
  },
  ro: {
      language: 139,
      region: 8907
  },
  ru: {
      language: 140,
      region: 8909
  },
  rw: {
      language: 141,
      region: 8910
  },
  sa: {
      language: 142,
      region: 8911
  },
  sc: {
      language: 143,
      region: 8913
  },
  sd: {
      language: 144,
      region: 8914
  },
  se: {
      language: 145,
      region: 8915
  },
  sg: {
      language: 146,
      region: 8916
  },
  sh: {
      language: 147,
      region: 8917
  },
  si: {
      language: 148,
      region: 8918
  },
  sk: {
      language: 149,
      region: 8920
  },
  sl: {
      language: 150,
      region: 8921
  },
  sm: {
      language: 151,
      region: 8922
  },
  sn: {
      language: 152,
      region: 8923
  },
  so: {
      language: 153,
      region: 8924
  },
  sq: {
      language: 154
  },
  sr: {
      language: 155,
      region: 8925
  },
  ss: {
      language: 156,
      region: 8926
  },
  st: {
      language: 157,
      region: 8927
  },
  su: {
      language: 158,
      region: 8928
  },
  sv: {
      language: 159,
      region: 8929
  },
  sw: {
      language: 160
  },
  ta: {
      language: 161,
      region: 8933
  },
  te: {
      language: 162
  },
  tg: {
      language: 163,
      region: 8937
  },
  th: {
      language: 164,
      region: 8938
  },
  ti: {
      language: 165
  },
  tk: {
      language: 166,
      region: 8940
  },
  tl: {
      language: 167,
      region: 8941
  },
  tn: {
      language: 168,
      region: 8943
  },
  to: {
      language: 169,
      region: 8944
  },
  tr: {
      language: 170,
      region: 8946
  },
  ts: {
      language: 171
  },
  tt: {
      language: 172,
      region: 8947
  },
  tw: {
      language: 173,
      region: 8949
  },
  ty: {
      language: 174
  },
  ug: {
      language: 175,
      region: 8952
  },
  uk: {
      language: 176
  },
  ur: {
      language: 177
  },
  uz: {
      language: 178,
      region: 8957
  },
  ve: {
      language: 179,
      region: 8960
  },
  vi: {
      language: 180,
      region: 8962
  },
  vo: {
      language: 181
  },
  wa: {
      language: 182
  },
  wo: {
      language: 183
  },
  xh: {
      language: 184
  },
  yi: {
      language: 185
  },
  yo: {
      language: 186
  },
  za: {
      language: 187,
      region: 8972
  },
  zh: {
      language: 188
  },
  zu: {
      language: 189
  },
  aaa: {
      language: 190
  },
  aab: {
      language: 191
  },
  aac: {
      language: 192
  },
  aad: {
      language: 193
  },
  aae: {
      language: 194
  },
  aaf: {
      language: 195
  },
  aag: {
      language: 196
  },
  aah: {
      language: 197
  },
  aai: {
      language: 198
  },
  aak: {
      language: 199
  },
  aal: {
      language: 200
  },
  aam: {
      language: 201
  },
  aan: {
      language: 202
  },
  aao: {
      language: 203,
      extlang: 8240
  },
  aap: {
      language: 204
  },
  aaq: {
      language: 205
  },
  aas: {
      language: 206
  },
  aat: {
      language: 207
  },
  aau: {
      language: 208
  },
  aav: {
      language: 209
  },
  aaw: {
      language: 210
  },
  aax: {
      language: 211
  },
  aaz: {
      language: 212
  },
  aba: {
      language: 213
  },
  abb: {
      language: 214
  },
  abc: {
      language: 215
  },
  abd: {
      language: 216
  },
  abe: {
      language: 217
  },
  abf: {
      language: 218
  },
  abg: {
      language: 219
  },
  abh: {
      language: 220,
      extlang: 8241
  },
  abi: {
      language: 221
  },
  abj: {
      language: 222
  },
  abl: {
      language: 223
  },
  abm: {
      language: 224
  },
  abn: {
      language: 225
  },
  abo: {
      language: 226
  },
  abp: {
      language: 227
  },
  abq: {
      language: 228
  },
  abr: {
      language: 229
  },
  abs: {
      language: 230
  },
  abt: {
      language: 231
  },
  abu: {
      language: 232
  },
  abv: {
      language: 233,
      extlang: 8242
  },
  abw: {
      language: 234
  },
  abx: {
      language: 235
  },
  aby: {
      language: 236
  },
  abz: {
      language: 237
  },
  aca: {
      language: 238
  },
  acb: {
      language: 239
  },
  acd: {
      language: 240
  },
  ace: {
      language: 241
  },
  acf: {
      language: 242
  },
  ach: {
      language: 243
  },
  aci: {
      language: 244
  },
  ack: {
      language: 245
  },
  acl: {
      language: 246
  },
  acm: {
      language: 247,
      extlang: 8243
  },
  acn: {
      language: 248
  },
  acp: {
      language: 249
  },
  acq: {
      language: 250,
      extlang: 8244
  },
  acr: {
      language: 251
  },
  acs: {
      language: 252
  },
  act: {
      language: 253
  },
  acu: {
      language: 254
  },
  acv: {
      language: 255
  },
  acw: {
      language: 256,
      extlang: 8245
  },
  acx: {
      language: 257,
      extlang: 8246
  },
  acy: {
      language: 258,
      extlang: 8247
  },
  acz: {
      language: 259
  },
  ada: {
      language: 260
  },
  adb: {
      language: 261
  },
  add: {
      language: 262
  },
  ade: {
      language: 263
  },
  adf: {
      language: 264,
      extlang: 8248
  },
  adg: {
      language: 265
  },
  adh: {
      language: 266
  },
  adi: {
      language: 267
  },
  adj: {
      language: 268
  },
  adl: {
      language: 269
  },
  adn: {
      language: 270
  },
  ado: {
      language: 271
  },
  adp: {
      language: 272
  },
  adq: {
      language: 273
  },
  adr: {
      language: 274
  },
  ads: {
      language: 275,
      extlang: 8249
  },
  adt: {
      language: 276
  },
  adu: {
      language: 277
  },
  adw: {
      language: 278
  },
  adx: {
      language: 279
  },
  ady: {
      language: 280
  },
  adz: {
      language: 281
  },
  aea: {
      language: 282
  },
  aeb: {
      language: 283,
      extlang: 8250
  },
  aec: {
      language: 284,
      extlang: 8251
  },
  aed: {
      language: 285,
      extlang: 8252
  },
  aee: {
      language: 286
  },
  aek: {
      language: 287
  },
  ael: {
      language: 288
  },
  aem: {
      language: 289
  },
  aen: {
      language: 290,
      extlang: 8253
  },
  aeq: {
      language: 291
  },
  aer: {
      language: 292
  },
  aes: {
      language: 293
  },
  aeu: {
      language: 294
  },
  aew: {
      language: 295
  },
  aey: {
      language: 296
  },
  aez: {
      language: 297
  },
  afa: {
      language: 298
  },
  afb: {
      language: 299,
      extlang: 8254
  },
  afd: {
      language: 300
  },
  afe: {
      language: 301
  },
  afg: {
      language: 302,
      extlang: 8255
  },
  afh: {
      language: 303
  },
  afi: {
      language: 304
  },
  afk: {
      language: 305
  },
  afn: {
      language: 306
  },
  afo: {
      language: 307
  },
  afp: {
      language: 308
  },
  afs: {
      language: 309
  },
  aft: {
      language: 310
  },
  afu: {
      language: 311
  },
  afz: {
      language: 312
  },
  aga: {
      language: 313
  },
  agb: {
      language: 314
  },
  agc: {
      language: 315
  },
  agd: {
      language: 316
  },
  age: {
      language: 317
  },
  agf: {
      language: 318
  },
  agg: {
      language: 319
  },
  agh: {
      language: 320
  },
  agi: {
      language: 321
  },
  agj: {
      language: 322
  },
  agk: {
      language: 323
  },
  agl: {
      language: 324
  },
  agm: {
      language: 325
  },
  agn: {
      language: 326
  },
  ago: {
      language: 327
  },
  agp: {
      language: 328
  },
  agq: {
      language: 329
  },
  agr: {
      language: 330
  },
  ags: {
      language: 331
  },
  agt: {
      language: 332
  },
  agu: {
      language: 333
  },
  agv: {
      language: 334
  },
  agw: {
      language: 335
  },
  agx: {
      language: 336
  },
  agy: {
      language: 337
  },
  agz: {
      language: 338
  },
  aha: {
      language: 339
  },
  ahb: {
      language: 340
  },
  ahg: {
      language: 341
  },
  ahh: {
      language: 342
  },
  ahi: {
      language: 343
  },
  ahk: {
      language: 344
  },
  ahl: {
      language: 345
  },
  ahm: {
      language: 346
  },
  ahn: {
      language: 347
  },
  aho: {
      language: 348
  },
  ahp: {
      language: 349
  },
  ahr: {
      language: 350
  },
  ahs: {
      language: 351
  },
  aht: {
      language: 352
  },
  aia: {
      language: 353
  },
  aib: {
      language: 354
  },
  aic: {
      language: 355
  },
  aid: {
      language: 356
  },
  aie: {
      language: 357
  },
  aif: {
      language: 358
  },
  aig: {
      language: 359
  },
  aih: {
      language: 360
  },
  aii: {
      language: 361
  },
  aij: {
      language: 362
  },
  aik: {
      language: 363
  },
  ail: {
      language: 364
  },
  aim: {
      language: 365
  },
  ain: {
      language: 366
  },
  aio: {
      language: 367
  },
  aip: {
      language: 368
  },
  aiq: {
      language: 369
  },
  air: {
      language: 370
  },
  ais: {
      language: 371
  },
  ait: {
      language: 372
  },
  aiw: {
      language: 373
  },
  aix: {
      language: 374
  },
  aiy: {
      language: 375
  },
  aja: {
      language: 376
  },
  ajg: {
      language: 377
  },
  aji: {
      language: 378
  },
  ajn: {
      language: 379
  },
  ajp: {
      language: 380,
      extlang: 8256
  },
  ajs: {
      language: 381,
      extlang: 8257
  },
  ajt: {
      language: 382
  },
  aju: {
      language: 383
  },
  ajw: {
      language: 384
  },
  ajz: {
      language: 385
  },
  akb: {
      language: 386
  },
  akc: {
      language: 387
  },
  akd: {
      language: 388
  },
  ake: {
      language: 389
  },
  akf: {
      language: 390
  },
  akg: {
      language: 391
  },
  akh: {
      language: 392
  },
  aki: {
      language: 393
  },
  akj: {
      language: 394
  },
  akk: {
      language: 395
  },
  akl: {
      language: 396
  },
  akm: {
      language: 397
  },
  ako: {
      language: 398
  },
  akp: {
      language: 399
  },
  akq: {
      language: 400
  },
  akr: {
      language: 401
  },
  aks: {
      language: 402
  },
  akt: {
      language: 403
  },
  aku: {
      language: 404
  },
  akv: {
      language: 405
  },
  akw: {
      language: 406
  },
  akx: {
      language: 407
  },
  aky: {
      language: 408
  },
  akz: {
      language: 409
  },
  ala: {
      language: 410
  },
  alc: {
      language: 411
  },
  ald: {
      language: 412
  },
  ale: {
      language: 413
  },
  alf: {
      language: 414
  },
  alg: {
      language: 415
  },
  alh: {
      language: 416
  },
  ali: {
      language: 417
  },
  alj: {
      language: 418
  },
  alk: {
      language: 419
  },
  all: {
      language: 420
  },
  alm: {
      language: 421
  },
  aln: {
      language: 422
  },
  alo: {
      language: 423
  },
  alp: {
      language: 424
  },
  alq: {
      language: 425
  },
  alr: {
      language: 426
  },
  als: {
      language: 427
  },
  alt: {
      language: 428
  },
  alu: {
      language: 429
  },
  alv: {
      language: 430
  },
  alw: {
      language: 431
  },
  alx: {
      language: 432
  },
  aly: {
      language: 433
  },
  alz: {
      language: 434
  },
  ama: {
      language: 435
  },
  amb: {
      language: 436
  },
  amc: {
      language: 437
  },
  ame: {
      language: 438
  },
  amf: {
      language: 439
  },
  amg: {
      language: 440
  },
  ami: {
      language: 441
  },
  amj: {
      language: 442
  },
  amk: {
      language: 443
  },
  aml: {
      language: 444
  },
  amm: {
      language: 445
  },
  amn: {
      language: 446
  },
  amo: {
      language: 447
  },
  amp: {
      language: 448
  },
  amq: {
      language: 449
  },
  amr: {
      language: 450
  },
  ams: {
      language: 451
  },
  amt: {
      language: 452
  },
  amu: {
      language: 453
  },
  amv: {
      language: 454
  },
  amw: {
      language: 455
  },
  amx: {
      language: 456
  },
  amy: {
      language: 457
  },
  amz: {
      language: 458
  },
  ana: {
      language: 459
  },
  anb: {
      language: 460
  },
  anc: {
      language: 461
  },
  and: {
      language: 462
  },
  ane: {
      language: 463
  },
  anf: {
      language: 464
  },
  ang: {
      language: 465
  },
  anh: {
      language: 466
  },
  ani: {
      language: 467
  },
  anj: {
      language: 468
  },
  ank: {
      language: 469
  },
  anl: {
      language: 470
  },
  anm: {
      language: 471
  },
  ann: {
      language: 472
  },
  ano: {
      language: 473
  },
  anp: {
      language: 474
  },
  anq: {
      language: 475
  },
  anr: {
      language: 476
  },
  ans: {
      language: 477
  },
  ant: {
      language: 478
  },
  anu: {
      language: 479
  },
  anv: {
      language: 480
  },
  anw: {
      language: 481
  },
  anx: {
      language: 482
  },
  any: {
      language: 483
  },
  anz: {
      language: 484
  },
  aoa: {
      language: 485
  },
  aob: {
      language: 486
  },
  aoc: {
      language: 487
  },
  aod: {
      language: 488
  },
  aoe: {
      language: 489
  },
  aof: {
      language: 490
  },
  aog: {
      language: 491
  },
  aoh: {
      language: 492
  },
  aoi: {
      language: 493
  },
  aoj: {
      language: 494
  },
  aok: {
      language: 495
  },
  aol: {
      language: 496
  },
  aom: {
      language: 497
  },
  aon: {
      language: 498
  },
  aor: {
      language: 499
  },
  aos: {
      language: 500
  },
  aot: {
      language: 501
  },
  aou: {
      language: 502
  },
  aox: {
      language: 503
  },
  aoz: {
      language: 504
  },
  apa: {
      language: 505
  },
  apb: {
      language: 506
  },
  apc: {
      language: 507,
      extlang: 8258
  },
  apd: {
      language: 508,
      extlang: 8259
  },
  ape: {
      language: 509
  },
  apf: {
      language: 510
  },
  apg: {
      language: 511
  },
  aph: {
      language: 512
  },
  api: {
      language: 513
  },
  apj: {
      language: 514
  },
  apk: {
      language: 515
  },
  apl: {
      language: 516
  },
  apm: {
      language: 517
  },
  apn: {
      language: 518
  },
  apo: {
      language: 519
  },
  app: {
      language: 520
  },
  apq: {
      language: 521
  },
  apr: {
      language: 522
  },
  aps: {
      language: 523
  },
  apt: {
      language: 524
  },
  apu: {
      language: 525
  },
  apv: {
      language: 526
  },
  apw: {
      language: 527
  },
  apx: {
      language: 528
  },
  apy: {
      language: 529
  },
  apz: {
      language: 530
  },
  aqa: {
      language: 531
  },
  aqc: {
      language: 532
  },
  aqd: {
      language: 533
  },
  aqg: {
      language: 534
  },
  aqk: {
      language: 535
  },
  aql: {
      language: 536
  },
  aqm: {
      language: 537
  },
  aqn: {
      language: 538
  },
  aqp: {
      language: 539
  },
  aqr: {
      language: 540
  },
  aqt: {
      language: 541
  },
  aqz: {
      language: 542
  },
  arb: {
      language: 543,
      extlang: 8260
  },
  arc: {
      language: 544
  },
  ard: {
      language: 545
  },
  are: {
      language: 546
  },
  arh: {
      language: 547
  },
  ari: {
      language: 548
  },
  arj: {
      language: 549
  },
  ark: {
      language: 550
  },
  arl: {
      language: 551
  },
  arn: {
      language: 552
  },
  aro: {
      language: 553
  },
  arp: {
      language: 554
  },
  arq: {
      language: 555,
      extlang: 8261
  },
  arr: {
      language: 556
  },
  ars: {
      language: 557,
      extlang: 8262
  },
  art: {
      language: 558
  },
  aru: {
      language: 559
  },
  arv: {
      language: 560
  },
  arw: {
      language: 561
  },
  arx: {
      language: 562
  },
  ary: {
      language: 563,
      extlang: 8263
  },
  arz: {
      language: 564,
      extlang: 8264
  },
  asa: {
      language: 565
  },
  asb: {
      language: 566
  },
  asc: {
      language: 567
  },
  asd: {
      language: 568
  },
  ase: {
      language: 569,
      extlang: 8265
  },
  asf: {
      language: 570,
      extlang: 8266
  },
  asg: {
      language: 571
  },
  ash: {
      language: 572
  },
  asi: {
      language: 573
  },
  asj: {
      language: 574
  },
  ask: {
      language: 575
  },
  asl: {
      language: 576
  },
  asn: {
      language: 577
  },
  aso: {
      language: 578
  },
  asp: {
      language: 579,
      extlang: 8267
  },
  asq: {
      language: 580,
      extlang: 8268
  },
  asr: {
      language: 581
  },
  ass: {
      language: 582
  },
  ast: {
      language: 583
  },
  asu: {
      language: 584
  },
  asv: {
      language: 585
  },
  asw: {
      language: 586,
      extlang: 8269
  },
  asx: {
      language: 587
  },
  asy: {
      language: 588
  },
  asz: {
      language: 589
  },
  ata: {
      language: 590
  },
  atb: {
      language: 591
  },
  atc: {
      language: 592
  },
  atd: {
      language: 593
  },
  ate: {
      language: 594
  },
  atg: {
      language: 595
  },
  ath: {
      language: 596
  },
  ati: {
      language: 597
  },
  atj: {
      language: 598
  },
  atk: {
      language: 599
  },
  atl: {
      language: 600
  },
  atm: {
      language: 601
  },
  atn: {
      language: 602
  },
  ato: {
      language: 603
  },
  atp: {
      language: 604
  },
  atq: {
      language: 605
  },
  atr: {
      language: 606
  },
  ats: {
      language: 607
  },
  att: {
      language: 608
  },
  atu: {
      language: 609
  },
  atv: {
      language: 610
  },
  atw: {
      language: 611
  },
  atx: {
      language: 612
  },
  aty: {
      language: 613
  },
  atz: {
      language: 614
  },
  aua: {
      language: 615
  },
  aub: {
      language: 616
  },
  auc: {
      language: 617
  },
  aud: {
      language: 618
  },
  aue: {
      language: 619
  },
  auf: {
      language: 620
  },
  aug: {
      language: 621
  },
  auh: {
      language: 622
  },
  aui: {
      language: 623
  },
  auj: {
      language: 624
  },
  auk: {
      language: 625
  },
  aul: {
      language: 626
  },
  aum: {
      language: 627
  },
  aun: {
      language: 628
  },
  auo: {
      language: 629
  },
  aup: {
      language: 630
  },
  auq: {
      language: 631
  },
  aur: {
      language: 632
  },
  aus: {
      language: 633
  },
  aut: {
      language: 634
  },
  auu: {
      language: 635
  },
  auw: {
      language: 636
  },
  aux: {
      language: 637
  },
  auy: {
      language: 638
  },
  auz: {
      language: 639,
      extlang: 8270
  },
  avb: {
      language: 640
  },
  avd: {
      language: 641
  },
  avi: {
      language: 642
  },
  avk: {
      language: 643
  },
  avl: {
      language: 644,
      extlang: 8271
  },
  avm: {
      language: 645
  },
  avn: {
      language: 646
  },
  avo: {
      language: 647
  },
  avs: {
      language: 648
  },
  avt: {
      language: 649
  },
  avu: {
      language: 650
  },
  avv: {
      language: 651
  },
  awa: {
      language: 652
  },
  awb: {
      language: 653
  },
  awc: {
      language: 654
  },
  awd: {
      language: 655
  },
  awe: {
      language: 656
  },
  awg: {
      language: 657
  },
  awh: {
      language: 658
  },
  awi: {
      language: 659
  },
  awk: {
      language: 660
  },
  awm: {
      language: 661
  },
  awn: {
      language: 662
  },
  awo: {
      language: 663
  },
  awr: {
      language: 664
  },
  aws: {
      language: 665
  },
  awt: {
      language: 666
  },
  awu: {
      language: 667
  },
  awv: {
      language: 668
  },
  aww: {
      language: 669
  },
  awx: {
      language: 670
  },
  awy: {
      language: 671
  },
  axb: {
      language: 672
  },
  axe: {
      language: 673
  },
  axg: {
      language: 674
  },
  axk: {
      language: 675
  },
  axl: {
      language: 676
  },
  axm: {
      language: 677
  },
  axx: {
      language: 678
  },
  aya: {
      language: 679
  },
  ayb: {
      language: 680
  },
  ayc: {
      language: 681
  },
  ayd: {
      language: 682
  },
  aye: {
      language: 683
  },
  ayg: {
      language: 684
  },
  ayh: {
      language: 685,
      extlang: 8272
  },
  ayi: {
      language: 686
  },
  ayk: {
      language: 687
  },
  ayl: {
      language: 688,
      extlang: 8273
  },
  ayn: {
      language: 689,
      extlang: 8274
  },
  ayo: {
      language: 690
  },
  ayp: {
      language: 691,
      extlang: 8275
  },
  ayq: {
      language: 692
  },
  ayr: {
      language: 693
  },
  ays: {
      language: 694
  },
  ayt: {
      language: 695
  },
  ayu: {
      language: 696
  },
  ayx: {
      language: 697
  },
  ayy: {
      language: 698
  },
  ayz: {
      language: 699
  },
  aza: {
      language: 700
  },
  azb: {
      language: 701
  },
  azc: {
      language: 702
  },
  azd: {
      language: 703
  },
  azg: {
      language: 704
  },
  azj: {
      language: 705
  },
  azm: {
      language: 706
  },
  azn: {
      language: 707
  },
  azo: {
      language: 708
  },
  azt: {
      language: 709
  },
  azz: {
      language: 710
  },
  baa: {
      language: 711
  },
  bab: {
      language: 712
  },
  bac: {
      language: 713
  },
  bad: {
      language: 714
  },
  bae: {
      language: 715
  },
  baf: {
      language: 716
  },
  bag: {
      language: 717
  },
  bah: {
      language: 718
  },
  bai: {
      language: 719
  },
  baj: {
      language: 720
  },
  bal: {
      language: 721
  },
  ban: {
      language: 722
  },
  bao: {
      language: 723
  },
  bap: {
      language: 724
  },
  bar: {
      language: 725
  },
  bas: {
      language: 726
  },
  bat: {
      language: 727
  },
  bau: {
      language: 728
  },
  bav: {
      language: 729
  },
  baw: {
      language: 730
  },
  bax: {
      language: 731
  },
  bay: {
      language: 732
  },
  baz: {
      language: 733
  },
  bba: {
      language: 734
  },
  bbb: {
      language: 735
  },
  bbc: {
      language: 736
  },
  bbd: {
      language: 737
  },
  bbe: {
      language: 738
  },
  bbf: {
      language: 739
  },
  bbg: {
      language: 740
  },
  bbh: {
      language: 741
  },
  bbi: {
      language: 742
  },
  bbj: {
      language: 743
  },
  bbk: {
      language: 744
  },
  bbl: {
      language: 745
  },
  bbm: {
      language: 746
  },
  bbn: {
      language: 747
  },
  bbo: {
      language: 748
  },
  bbp: {
      language: 749
  },
  bbq: {
      language: 750
  },
  bbr: {
      language: 751
  },
  bbs: {
      language: 752
  },
  bbt: {
      language: 753
  },
  bbu: {
      language: 754
  },
  bbv: {
      language: 755
  },
  bbw: {
      language: 756
  },
  bbx: {
      language: 757
  },
  bby: {
      language: 758
  },
  bbz: {
      language: 759,
      extlang: 8276
  },
  bca: {
      language: 760
  },
  bcb: {
      language: 761
  },
  bcc: {
      language: 762
  },
  bcd: {
      language: 763
  },
  bce: {
      language: 764
  },
  bcf: {
      language: 765
  },
  bcg: {
      language: 766
  },
  bch: {
      language: 767
  },
  bci: {
      language: 768
  },
  bcj: {
      language: 769
  },
  bck: {
      language: 770
  },
  bcl: {
      language: 771
  },
  bcm: {
      language: 772
  },
  bcn: {
      language: 773
  },
  bco: {
      language: 774
  },
  bcp: {
      language: 775
  },
  bcq: {
      language: 776
  },
  bcr: {
      language: 777
  },
  bcs: {
      language: 778
  },
  bct: {
      language: 779
  },
  bcu: {
      language: 780
  },
  bcv: {
      language: 781
  },
  bcw: {
      language: 782
  },
  bcy: {
      language: 783
  },
  bcz: {
      language: 784
  },
  bda: {
      language: 785
  },
  bdb: {
      language: 786
  },
  bdc: {
      language: 787
  },
  bdd: {
      language: 788
  },
  bde: {
      language: 789
  },
  bdf: {
      language: 790
  },
  bdg: {
      language: 791
  },
  bdh: {
      language: 792
  },
  bdi: {
      language: 793
  },
  bdj: {
      language: 794
  },
  bdk: {
      language: 795
  },
  bdl: {
      language: 796
  },
  bdm: {
      language: 797
  },
  bdn: {
      language: 798
  },
  bdo: {
      language: 799
  },
  bdp: {
      language: 800
  },
  bdq: {
      language: 801
  },
  bdr: {
      language: 802
  },
  bds: {
      language: 803
  },
  bdt: {
      language: 804
  },
  bdu: {
      language: 805
  },
  bdv: {
      language: 806
  },
  bdw: {
      language: 807
  },
  bdx: {
      language: 808
  },
  bdy: {
      language: 809
  },
  bdz: {
      language: 810
  },
  bea: {
      language: 811
  },
  beb: {
      language: 812
  },
  bec: {
      language: 813
  },
  bed: {
      language: 814
  },
  bee: {
      language: 815
  },
  bef: {
      language: 816
  },
  beg: {
      language: 817
  },
  beh: {
      language: 818
  },
  bei: {
      language: 819
  },
  bej: {
      language: 820
  },
  bek: {
      language: 821
  },
  bem: {
      language: 822
  },
  beo: {
      language: 823
  },
  bep: {
      language: 824
  },
  beq: {
      language: 825
  },
  ber: {
      language: 826
  },
  bes: {
      language: 827
  },
  bet: {
      language: 828
  },
  beu: {
      language: 829
  },
  bev: {
      language: 830
  },
  bew: {
      language: 831
  },
  bex: {
      language: 832
  },
  bey: {
      language: 833
  },
  bez: {
      language: 834
  },
  bfa: {
      language: 835
  },
  bfb: {
      language: 836
  },
  bfc: {
      language: 837
  },
  bfd: {
      language: 838
  },
  bfe: {
      language: 839
  },
  bff: {
      language: 840
  },
  bfg: {
      language: 841
  },
  bfh: {
      language: 842
  },
  bfi: {
      language: 843,
      extlang: 8277
  },
  bfj: {
      language: 844
  },
  bfk: {
      language: 845,
      extlang: 8278
  },
  bfl: {
      language: 846
  },
  bfm: {
      language: 847
  },
  bfn: {
      language: 848
  },
  bfo: {
      language: 849
  },
  bfp: {
      language: 850
  },
  bfq: {
      language: 851
  },
  bfr: {
      language: 852
  },
  bfs: {
      language: 853
  },
  bft: {
      language: 854
  },
  bfu: {
      language: 855
  },
  bfw: {
      language: 856
  },
  bfx: {
      language: 857
  },
  bfy: {
      language: 858
  },
  bfz: {
      language: 859
  },
  bga: {
      language: 860
  },
  bgb: {
      language: 861
  },
  bgc: {
      language: 862
  },
  bgd: {
      language: 863
  },
  bge: {
      language: 864
  },
  bgf: {
      language: 865
  },
  bgg: {
      language: 866
  },
  bgi: {
      language: 867
  },
  bgj: {
      language: 868
  },
  bgk: {
      language: 869
  },
  bgl: {
      language: 870
  },
  bgm: {
      language: 871
  },
  bgn: {
      language: 872
  },
  bgo: {
      language: 873
  },
  bgp: {
      language: 874
  },
  bgq: {
      language: 875
  },
  bgr: {
      language: 876
  },
  bgs: {
      language: 877
  },
  bgt: {
      language: 878
  },
  bgu: {
      language: 879
  },
  bgv: {
      language: 880
  },
  bgw: {
      language: 881
  },
  bgx: {
      language: 882
  },
  bgy: {
      language: 883
  },
  bgz: {
      language: 884
  },
  bha: {
      language: 885
  },
  bhb: {
      language: 886
  },
  bhc: {
      language: 887
  },
  bhd: {
      language: 888
  },
  bhe: {
      language: 889
  },
  bhf: {
      language: 890
  },
  bhg: {
      language: 891
  },
  bhh: {
      language: 892
  },
  bhi: {
      language: 893
  },
  bhj: {
      language: 894
  },
  bhk: {
      language: 895
  },
  bhl: {
      language: 896
  },
  bhm: {
      language: 897
  },
  bhn: {
      language: 898
  },
  bho: {
      language: 899
  },
  bhp: {
      language: 900
  },
  bhq: {
      language: 901
  },
  bhr: {
      language: 902
  },
  bhs: {
      language: 903
  },
  bht: {
      language: 904
  },
  bhu: {
      language: 905
  },
  bhv: {
      language: 906
  },
  bhw: {
      language: 907
  },
  bhx: {
      language: 908
  },
  bhy: {
      language: 909
  },
  bhz: {
      language: 910
  },
  bia: {
      language: 911
  },
  bib: {
      language: 912
  },
  bic: {
      language: 913
  },
  bid: {
      language: 914
  },
  bie: {
      language: 915
  },
  bif: {
      language: 916
  },
  big: {
      language: 917
  },
  bij: {
      language: 918
  },
  bik: {
      language: 919
  },
  bil: {
      language: 920
  },
  bim: {
      language: 921
  },
  bin: {
      language: 922
  },
  bio: {
      language: 923
  },
  bip: {
      language: 924
  },
  biq: {
      language: 925
  },
  bir: {
      language: 926
  },
  bit: {
      language: 927
  },
  biu: {
      language: 928
  },
  biv: {
      language: 929
  },
  biw: {
      language: 930
  },
  bix: {
      language: 931
  },
  biy: {
      language: 932
  },
  biz: {
      language: 933
  },
  bja: {
      language: 934
  },
  bjb: {
      language: 935
  },
  bjc: {
      language: 936
  },
  bjd: {
      language: 937
  },
  bje: {
      language: 938
  },
  bjf: {
      language: 939
  },
  bjg: {
      language: 940
  },
  bjh: {
      language: 941
  },
  bji: {
      language: 942
  },
  bjj: {
      language: 943
  },
  bjk: {
      language: 944
  },
  bjl: {
      language: 945
  },
  bjm: {
      language: 946
  },
  bjn: {
      language: 947,
      extlang: 8279
  },
  bjo: {
      language: 948
  },
  bjp: {
      language: 949
  },
  bjq: {
      language: 950
  },
  bjr: {
      language: 951
  },
  bjs: {
      language: 952
  },
  bjt: {
      language: 953
  },
  bju: {
      language: 954
  },
  bjv: {
      language: 955
  },
  bjw: {
      language: 956
  },
  bjx: {
      language: 957
  },
  bjy: {
      language: 958
  },
  bjz: {
      language: 959
  },
  bka: {
      language: 960
  },
  bkb: {
      language: 961
  },
  bkc: {
      language: 962
  },
  bkd: {
      language: 963
  },
  bkf: {
      language: 964
  },
  bkg: {
      language: 965
  },
  bkh: {
      language: 966
  },
  bki: {
      language: 967
  },
  bkj: {
      language: 968
  },
  bkk: {
      language: 969
  },
  bkl: {
      language: 970
  },
  bkm: {
      language: 971
  },
  bkn: {
      language: 972
  },
  bko: {
      language: 973
  },
  bkp: {
      language: 974
  },
  bkq: {
      language: 975
  },
  bkr: {
      language: 976
  },
  bks: {
      language: 977
  },
  bkt: {
      language: 978
  },
  bku: {
      language: 979
  },
  bkv: {
      language: 980
  },
  bkw: {
      language: 981
  },
  bkx: {
      language: 982
  },
  bky: {
      language: 983
  },
  bkz: {
      language: 984
  },
  bla: {
      language: 985
  },
  blb: {
      language: 986
  },
  blc: {
      language: 987
  },
  bld: {
      language: 988
  },
  ble: {
      language: 989
  },
  blf: {
      language: 990
  },
  blg: {
      language: 991
  },
  blh: {
      language: 992
  },
  bli: {
      language: 993
  },
  blj: {
      language: 994
  },
  blk: {
      language: 995
  },
  bll: {
      language: 996
  },
  blm: {
      language: 997
  },
  bln: {
      language: 998
  },
  blo: {
      language: 999
  },
  blp: {
      language: 1e3
  },
  blq: {
      language: 1001
  },
  blr: {
      language: 1002
  },
  bls: {
      language: 1003
  },
  blt: {
      language: 1004
  },
  blv: {
      language: 1005
  },
  blw: {
      language: 1006
  },
  blx: {
      language: 1007
  },
  bly: {
      language: 1008
  },
  blz: {
      language: 1009
  },
  bma: {
      language: 1010
  },
  bmb: {
      language: 1011
  },
  bmc: {
      language: 1012
  },
  bmd: {
      language: 1013
  },
  bme: {
      language: 1014
  },
  bmf: {
      language: 1015
  },
  bmg: {
      language: 1016
  },
  bmh: {
      language: 1017
  },
  bmi: {
      language: 1018
  },
  bmj: {
      language: 1019
  },
  bmk: {
      language: 1020
  },
  bml: {
      language: 1021
  },
  bmm: {
      language: 1022
  },
  bmn: {
      language: 1023
  },
  bmo: {
      language: 1024
  },
  bmp: {
      language: 1025
  },
  bmq: {
      language: 1026
  },
  bmr: {
      language: 1027
  },
  bms: {
      language: 1028
  },
  bmt: {
      language: 1029
  },
  bmu: {
      language: 1030
  },
  bmv: {
      language: 1031
  },
  bmw: {
      language: 1032
  },
  bmx: {
      language: 1033
  },
  bmy: {
      language: 1034
  },
  bmz: {
      language: 1035
  },
  bna: {
      language: 1036
  },
  bnb: {
      language: 1037
  },
  bnc: {
      language: 1038
  },
  bnd: {
      language: 1039
  },
  bne: {
      language: 1040
  },
  bnf: {
      language: 1041
  },
  bng: {
      language: 1042
  },
  bni: {
      language: 1043
  },
  bnj: {
      language: 1044
  },
  bnk: {
      language: 1045
  },
  bnl: {
      language: 1046
  },
  bnm: {
      language: 1047
  },
  bnn: {
      language: 1048
  },
  bno: {
      language: 1049
  },
  bnp: {
      language: 1050
  },
  bnq: {
      language: 1051
  },
  bnr: {
      language: 1052
  },
  bns: {
      language: 1053
  },
  bnt: {
      language: 1054
  },
  bnu: {
      language: 1055
  },
  bnv: {
      language: 1056
  },
  bnw: {
      language: 1057
  },
  bnx: {
      language: 1058
  },
  bny: {
      language: 1059
  },
  bnz: {
      language: 1060
  },
  boa: {
      language: 1061
  },
  bob: {
      language: 1062
  },
  boe: {
      language: 1063
  },
  bof: {
      language: 1064
  },
  bog: {
      language: 1065,
      extlang: 8280
  },
  boh: {
      language: 1066
  },
  boi: {
      language: 1067
  },
  boj: {
      language: 1068
  },
  bok: {
      language: 1069
  },
  bol: {
      language: 1070
  },
  bom: {
      language: 1071
  },
  bon: {
      language: 1072
  },
  boo: {
      language: 1073
  },
  bop: {
      language: 1074
  },
  boq: {
      language: 1075
  },
  bor: {
      language: 1076
  },
  bot: {
      language: 1077
  },
  bou: {
      language: 1078
  },
  bov: {
      language: 1079
  },
  bow: {
      language: 1080
  },
  box: {
      language: 1081
  },
  boy: {
      language: 1082
  },
  boz: {
      language: 1083
  },
  bpa: {
      language: 1084
  },
  bpb: {
      language: 1085
  },
  bpc: {
      language: 1086
  },
  bpd: {
      language: 1087
  },
  bpe: {
      language: 1088
  },
  bpg: {
      language: 1089
  },
  bph: {
      language: 1090
  },
  bpi: {
      language: 1091
  },
  bpj: {
      language: 1092
  },
  bpk: {
      language: 1093
  },
  bpl: {
      language: 1094
  },
  bpm: {
      language: 1095
  },
  bpn: {
      language: 1096
  },
  bpo: {
      language: 1097
  },
  bpp: {
      language: 1098
  },
  bpq: {
      language: 1099
  },
  bpr: {
      language: 1100
  },
  bps: {
      language: 1101
  },
  bpt: {
      language: 1102
  },
  bpu: {
      language: 1103
  },
  bpv: {
      language: 1104
  },
  bpw: {
      language: 1105
  },
  bpx: {
      language: 1106
  },
  bpy: {
      language: 1107
  },
  bpz: {
      language: 1108
  },
  bqa: {
      language: 1109
  },
  bqb: {
      language: 1110
  },
  bqc: {
      language: 1111
  },
  bqd: {
      language: 1112
  },
  bqf: {
      language: 1113
  },
  bqg: {
      language: 1114
  },
  bqh: {
      language: 1115
  },
  bqi: {
      language: 1116
  },
  bqj: {
      language: 1117
  },
  bqk: {
      language: 1118
  },
  bql: {
      language: 1119
  },
  bqm: {
      language: 1120
  },
  bqn: {
      language: 1121,
      extlang: 8281
  },
  bqo: {
      language: 1122
  },
  bqp: {
      language: 1123
  },
  bqq: {
      language: 1124
  },
  bqr: {
      language: 1125
  },
  bqs: {
      language: 1126
  },
  bqt: {
      language: 1127
  },
  bqu: {
      language: 1128
  },
  bqv: {
      language: 1129
  },
  bqw: {
      language: 1130
  },
  bqx: {
      language: 1131
  },
  bqy: {
      language: 1132,
      extlang: 8282
  },
  bqz: {
      language: 1133
  },
  bra: {
      language: 1134
  },
  brb: {
      language: 1135
  },
  brc: {
      language: 1136
  },
  brd: {
      language: 1137
  },
  brf: {
      language: 1138
  },
  brg: {
      language: 1139
  },
  brh: {
      language: 1140
  },
  bri: {
      language: 1141
  },
  brj: {
      language: 1142
  },
  brk: {
      language: 1143
  },
  brl: {
      language: 1144
  },
  brm: {
      language: 1145
  },
  brn: {
      language: 1146
  },
  bro: {
      language: 1147
  },
  brp: {
      language: 1148
  },
  brq: {
      language: 1149
  },
  brr: {
      language: 1150
  },
  brs: {
      language: 1151
  },
  brt: {
      language: 1152
  },
  bru: {
      language: 1153
  },
  brv: {
      language: 1154
  },
  brw: {
      language: 1155
  },
  brx: {
      language: 1156
  },
  bry: {
      language: 1157
  },
  brz: {
      language: 1158
  },
  bsa: {
      language: 1159
  },
  bsb: {
      language: 1160
  },
  bsc: {
      language: 1161
  },
  bse: {
      language: 1162
  },
  bsf: {
      language: 1163
  },
  bsg: {
      language: 1164
  },
  bsh: {
      language: 1165
  },
  bsi: {
      language: 1166
  },
  bsj: {
      language: 1167
  },
  bsk: {
      language: 1168
  },
  bsl: {
      language: 1169
  },
  bsm: {
      language: 1170
  },
  bsn: {
      language: 1171
  },
  bso: {
      language: 1172
  },
  bsp: {
      language: 1173
  },
  bsq: {
      language: 1174
  },
  bsr: {
      language: 1175
  },
  bss: {
      language: 1176
  },
  bst: {
      language: 1177
  },
  bsu: {
      language: 1178
  },
  bsv: {
      language: 1179
  },
  bsw: {
      language: 1180
  },
  bsx: {
      language: 1181
  },
  bsy: {
      language: 1182
  },
  bta: {
      language: 1183
  },
  btb: {
      language: 1184
  },
  btc: {
      language: 1185
  },
  btd: {
      language: 1186
  },
  bte: {
      language: 1187
  },
  btf: {
      language: 1188
  },
  btg: {
      language: 1189
  },
  bth: {
      language: 1190
  },
  bti: {
      language: 1191
  },
  btj: {
      language: 1192,
      extlang: 8283
  },
  btk: {
      language: 1193
  },
  btl: {
      language: 1194
  },
  btm: {
      language: 1195
  },
  btn: {
      language: 1196
  },
  bto: {
      language: 1197
  },
  btp: {
      language: 1198
  },
  btq: {
      language: 1199
  },
  btr: {
      language: 1200
  },
  bts: {
      language: 1201
  },
  btt: {
      language: 1202
  },
  btu: {
      language: 1203
  },
  btv: {
      language: 1204
  },
  btw: {
      language: 1205
  },
  btx: {
      language: 1206
  },
  bty: {
      language: 1207
  },
  btz: {
      language: 1208
  },
  bua: {
      language: 1209
  },
  bub: {
      language: 1210
  },
  buc: {
      language: 1211
  },
  bud: {
      language: 1212
  },
  bue: {
      language: 1213
  },
  buf: {
      language: 1214
  },
  bug: {
      language: 1215
  },
  buh: {
      language: 1216
  },
  bui: {
      language: 1217
  },
  buj: {
      language: 1218
  },
  buk: {
      language: 1219
  },
  bum: {
      language: 1220
  },
  bun: {
      language: 1221
  },
  buo: {
      language: 1222
  },
  bup: {
      language: 1223
  },
  buq: {
      language: 1224
  },
  bus: {
      language: 1225
  },
  but: {
      language: 1226
  },
  buu: {
      language: 1227
  },
  buv: {
      language: 1228
  },
  buw: {
      language: 1229
  },
  bux: {
      language: 1230
  },
  buy: {
      language: 1231
  },
  buz: {
      language: 1232
  },
  bva: {
      language: 1233
  },
  bvb: {
      language: 1234
  },
  bvc: {
      language: 1235
  },
  bvd: {
      language: 1236
  },
  bve: {
      language: 1237,
      extlang: 8284
  },
  bvf: {
      language: 1238
  },
  bvg: {
      language: 1239
  },
  bvh: {
      language: 1240
  },
  bvi: {
      language: 1241
  },
  bvj: {
      language: 1242
  },
  bvk: {
      language: 1243
  },
  bvl: {
      language: 1244,
      extlang: 8285
  },
  bvm: {
      language: 1245
  },
  bvn: {
      language: 1246
  },
  bvo: {
      language: 1247
  },
  bvp: {
      language: 1248
  },
  bvq: {
      language: 1249
  },
  bvr: {
      language: 1250
  },
  bvt: {
      language: 1251
  },
  bvu: {
      language: 1252,
      extlang: 8286
  },
  bvv: {
      language: 1253
  },
  bvw: {
      language: 1254
  },
  bvx: {
      language: 1255
  },
  bvy: {
      language: 1256
  },
  bvz: {
      language: 1257
  },
  bwa: {
      language: 1258
  },
  bwb: {
      language: 1259
  },
  bwc: {
      language: 1260
  },
  bwd: {
      language: 1261
  },
  bwe: {
      language: 1262
  },
  bwf: {
      language: 1263
  },
  bwg: {
      language: 1264
  },
  bwh: {
      language: 1265
  },
  bwi: {
      language: 1266
  },
  bwj: {
      language: 1267
  },
  bwk: {
      language: 1268
  },
  bwl: {
      language: 1269
  },
  bwm: {
      language: 1270
  },
  bwn: {
      language: 1271
  },
  bwo: {
      language: 1272
  },
  bwp: {
      language: 1273
  },
  bwq: {
      language: 1274
  },
  bwr: {
      language: 1275
  },
  bws: {
      language: 1276
  },
  bwt: {
      language: 1277
  },
  bwu: {
      language: 1278
  },
  bww: {
      language: 1279
  },
  bwx: {
      language: 1280
  },
  bwy: {
      language: 1281
  },
  bwz: {
      language: 1282
  },
  bxa: {
      language: 1283
  },
  bxb: {
      language: 1284
  },
  bxc: {
      language: 1285
  },
  bxd: {
      language: 1286
  },
  bxe: {
      language: 1287
  },
  bxf: {
      language: 1288
  },
  bxg: {
      language: 1289
  },
  bxh: {
      language: 1290
  },
  bxi: {
      language: 1291
  },
  bxj: {
      language: 1292
  },
  bxk: {
      language: 1293
  },
  bxl: {
      language: 1294
  },
  bxm: {
      language: 1295
  },
  bxn: {
      language: 1296
  },
  bxo: {
      language: 1297
  },
  bxp: {
      language: 1298
  },
  bxq: {
      language: 1299
  },
  bxr: {
      language: 1300
  },
  bxs: {
      language: 1301
  },
  bxu: {
      language: 1302
  },
  bxv: {
      language: 1303
  },
  bxw: {
      language: 1304
  },
  bxx: {
      language: 1305
  },
  bxz: {
      language: 1306
  },
  bya: {
      language: 1307
  },
  byb: {
      language: 1308
  },
  byc: {
      language: 1309
  },
  byd: {
      language: 1310
  },
  bye: {
      language: 1311
  },
  byf: {
      language: 1312
  },
  byg: {
      language: 1313
  },
  byh: {
      language: 1314
  },
  byi: {
      language: 1315
  },
  byj: {
      language: 1316
  },
  byk: {
      language: 1317
  },
  byl: {
      language: 1318
  },
  bym: {
      language: 1319
  },
  byn: {
      language: 1320
  },
  byo: {
      language: 1321
  },
  byp: {
      language: 1322
  },
  byq: {
      language: 1323
  },
  byr: {
      language: 1324
  },
  bys: {
      language: 1325
  },
  byt: {
      language: 1326
  },
  byv: {
      language: 1327
  },
  byw: {
      language: 1328
  },
  byx: {
      language: 1329
  },
  byy: {
      language: 1330
  },
  byz: {
      language: 1331
  },
  bza: {
      language: 1332
  },
  bzb: {
      language: 1333
  },
  bzc: {
      language: 1334
  },
  bzd: {
      language: 1335
  },
  bze: {
      language: 1336
  },
  bzf: {
      language: 1337
  },
  bzg: {
      language: 1338
  },
  bzh: {
      language: 1339
  },
  bzi: {
      language: 1340
  },
  bzj: {
      language: 1341
  },
  bzk: {
      language: 1342
  },
  bzl: {
      language: 1343
  },
  bzm: {
      language: 1344
  },
  bzn: {
      language: 1345
  },
  bzo: {
      language: 1346
  },
  bzp: {
      language: 1347
  },
  bzq: {
      language: 1348
  },
  bzr: {
      language: 1349
  },
  bzs: {
      language: 1350,
      extlang: 8287
  },
  bzt: {
      language: 1351
  },
  bzu: {
      language: 1352
  },
  bzv: {
      language: 1353
  },
  bzw: {
      language: 1354
  },
  bzx: {
      language: 1355
  },
  bzy: {
      language: 1356
  },
  bzz: {
      language: 1357
  },
  caa: {
      language: 1358
  },
  cab: {
      language: 1359
  },
  cac: {
      language: 1360
  },
  cad: {
      language: 1361
  },
  cae: {
      language: 1362
  },
  caf: {
      language: 1363
  },
  cag: {
      language: 1364
  },
  cah: {
      language: 1365
  },
  cai: {
      language: 1366
  },
  caj: {
      language: 1367
  },
  cak: {
      language: 1368
  },
  cal: {
      language: 1369
  },
  cam: {
      language: 1370
  },
  can: {
      language: 1371
  },
  cao: {
      language: 1372
  },
  cap: {
      language: 1373
  },
  caq: {
      language: 1374
  },
  car: {
      language: 1375
  },
  cas: {
      language: 1376
  },
  cau: {
      language: 1377
  },
  cav: {
      language: 1378
  },
  caw: {
      language: 1379
  },
  cax: {
      language: 1380
  },
  cay: {
      language: 1381
  },
  caz: {
      language: 1382
  },
  cba: {
      language: 1383
  },
  cbb: {
      language: 1384
  },
  cbc: {
      language: 1385
  },
  cbd: {
      language: 1386
  },
  cbe: {
      language: 1387
  },
  cbg: {
      language: 1388
  },
  cbh: {
      language: 1389
  },
  cbi: {
      language: 1390
  },
  cbj: {
      language: 1391
  },
  cbk: {
      language: 1392
  },
  cbl: {
      language: 1393
  },
  cbn: {
      language: 1394
  },
  cbo: {
      language: 1395
  },
  cbq: {
      language: 1396
  },
  cbr: {
      language: 1397
  },
  cbs: {
      language: 1398
  },
  cbt: {
      language: 1399
  },
  cbu: {
      language: 1400
  },
  cbv: {
      language: 1401
  },
  cbw: {
      language: 1402
  },
  cby: {
      language: 1403
  },
  cca: {
      language: 1404
  },
  ccc: {
      language: 1405
  },
  ccd: {
      language: 1406
  },
  cce: {
      language: 1407
  },
  ccg: {
      language: 1408
  },
  cch: {
      language: 1409
  },
  ccj: {
      language: 1410
  },
  ccl: {
      language: 1411
  },
  ccm: {
      language: 1412
  },
  ccn: {
      language: 1413
  },
  cco: {
      language: 1414
  },
  ccp: {
      language: 1415
  },
  ccq: {
      language: 1416
  },
  ccr: {
      language: 1417
  },
  ccs: {
      language: 1418
  },
  cda: {
      language: 1419
  },
  cdc: {
      language: 1420
  },
  cdd: {
      language: 1421
  },
  cde: {
      language: 1422
  },
  cdf: {
      language: 1423
  },
  cdg: {
      language: 1424
  },
  cdh: {
      language: 1425
  },
  cdi: {
      language: 1426
  },
  cdj: {
      language: 1427
  },
  cdm: {
      language: 1428
  },
  cdn: {
      language: 1429
  },
  cdo: {
      language: 1430,
      extlang: 8288
  },
  cdr: {
      language: 1431
  },
  cds: {
      language: 1432,
      extlang: 8289
  },
  cdy: {
      language: 1433
  },
  cdz: {
      language: 1434
  },
  cea: {
      language: 1435
  },
  ceb: {
      language: 1436
  },
  ceg: {
      language: 1437
  },
  cek: {
      language: 1438
  },
  cel: {
      language: 1439
  },
  cen: {
      language: 1440
  },
  cet: {
      language: 1441
  },
  cey: {
      language: 1442
  },
  cfa: {
      language: 1443
  },
  cfd: {
      language: 1444
  },
  cfg: {
      language: 1445
  },
  cfm: {
      language: 1446
  },
  cga: {
      language: 1447
  },
  cgc: {
      language: 1448
  },
  cgg: {
      language: 1449
  },
  cgk: {
      language: 1450
  },
  chb: {
      language: 1451
  },
  chc: {
      language: 1452
  },
  chd: {
      language: 1453
  },
  chf: {
      language: 1454
  },
  chg: {
      language: 1455
  },
  chh: {
      language: 1456
  },
  chj: {
      language: 1457
  },
  chk: {
      language: 1458
  },
  chl: {
      language: 1459
  },
  chm: {
      language: 1460
  },
  chn: {
      language: 1461
  },
  cho: {
      language: 1462
  },
  chp: {
      language: 1463
  },
  chq: {
      language: 1464
  },
  chr: {
      language: 1465
  },
  cht: {
      language: 1466
  },
  chw: {
      language: 1467
  },
  chx: {
      language: 1468
  },
  chy: {
      language: 1469
  },
  chz: {
      language: 1470
  },
  cia: {
      language: 1471
  },
  cib: {
      language: 1472
  },
  cic: {
      language: 1473
  },
  cid: {
      language: 1474
  },
  cie: {
      language: 1475
  },
  cih: {
      language: 1476
  },
  cik: {
      language: 1477
  },
  cim: {
      language: 1478
  },
  cin: {
      language: 1479
  },
  cip: {
      language: 1480
  },
  cir: {
      language: 1481
  },
  ciw: {
      language: 1482
  },
  ciy: {
      language: 1483
  },
  cja: {
      language: 1484
  },
  cje: {
      language: 1485
  },
  cjh: {
      language: 1486
  },
  cji: {
      language: 1487
  },
  cjk: {
      language: 1488
  },
  cjm: {
      language: 1489
  },
  cjn: {
      language: 1490
  },
  cjo: {
      language: 1491
  },
  cjp: {
      language: 1492
  },
  cjr: {
      language: 1493
  },
  cjs: {
      language: 1494
  },
  cjv: {
      language: 1495
  },
  cjy: {
      language: 1496,
      extlang: 8290
  },
  cka: {
      language: 1497
  },
  ckb: {
      language: 1498
  },
  ckh: {
      language: 1499
  },
  ckl: {
      language: 1500
  },
  ckm: {
      language: 1501
  },
  ckn: {
      language: 1502
  },
  cko: {
      language: 1503
  },
  ckq: {
      language: 1504
  },
  ckr: {
      language: 1505
  },
  cks: {
      language: 1506
  },
  ckt: {
      language: 1507
  },
  cku: {
      language: 1508
  },
  ckv: {
      language: 1509
  },
  ckx: {
      language: 1510
  },
  cky: {
      language: 1511
  },
  ckz: {
      language: 1512
  },
  cla: {
      language: 1513
  },
  clc: {
      language: 1514
  },
  cld: {
      language: 1515
  },
  cle: {
      language: 1516
  },
  clh: {
      language: 1517
  },
  cli: {
      language: 1518
  },
  clj: {
      language: 1519
  },
  clk: {
      language: 1520
  },
  cll: {
      language: 1521
  },
  clm: {
      language: 1522
  },
  clo: {
      language: 1523
  },
  clt: {
      language: 1524
  },
  clu: {
      language: 1525
  },
  clw: {
      language: 1526
  },
  cly: {
      language: 1527
  },
  cma: {
      language: 1528
  },
  cmc: {
      language: 1529
  },
  cme: {
      language: 1530
  },
  cmg: {
      language: 1531
  },
  cmi: {
      language: 1532
  },
  cmk: {
      language: 1533
  },
  cml: {
      language: 1534
  },
  cmm: {
      language: 1535
  },
  cmn: {
      language: 1536,
      extlang: 8291
  },
  cmo: {
      language: 1537
  },
  cmr: {
      language: 1538
  },
  cms: {
      language: 1539
  },
  cmt: {
      language: 1540
  },
  cna: {
      language: 1541
  },
  cnb: {
      language: 1542
  },
  cnc: {
      language: 1543
  },
  cng: {
      language: 1544
  },
  cnh: {
      language: 1545
  },
  cni: {
      language: 1546
  },
  cnk: {
      language: 1547
  },
  cnl: {
      language: 1548
  },
  cno: {
      language: 1549
  },
  cnp: {
      language: 1550,
      extlang: 8292
  },
  cnq: {
      language: 1551
  },
  cnr: {
      language: 1552
  },
  cns: {
      language: 1553
  },
  cnt: {
      language: 1554
  },
  cnu: {
      language: 1555
  },
  cnw: {
      language: 1556
  },
  cnx: {
      language: 1557
  },
  coa: {
      language: 1558,
      extlang: 8293
  },
  cob: {
      language: 1559
  },
  coc: {
      language: 1560
  },
  cod: {
      language: 1561
  },
  coe: {
      language: 1562
  },
  cof: {
      language: 1563
  },
  cog: {
      language: 1564
  },
  coh: {
      language: 1565
  },
  coj: {
      language: 1566
  },
  cok: {
      language: 1567
  },
  col: {
      language: 1568
  },
  com: {
      language: 1569
  },
  con: {
      language: 1570
  },
  coo: {
      language: 1571
  },
  cop: {
      language: 1572
  },
  coq: {
      language: 1573
  },
  cot: {
      language: 1574
  },
  cou: {
      language: 1575
  },
  cov: {
      language: 1576
  },
  cow: {
      language: 1577
  },
  cox: {
      language: 1578
  },
  coy: {
      language: 1579
  },
  coz: {
      language: 1580
  },
  cpa: {
      language: 1581
  },
  cpb: {
      language: 1582
  },
  cpc: {
      language: 1583
  },
  cpe: {
      language: 1584
  },
  cpf: {
      language: 1585
  },
  cpg: {
      language: 1586
  },
  cpi: {
      language: 1587
  },
  cpn: {
      language: 1588
  },
  cpo: {
      language: 1589
  },
  cpp: {
      language: 1590
  },
  cps: {
      language: 1591
  },
  cpu: {
      language: 1592
  },
  cpx: {
      language: 1593,
      extlang: 8294
  },
  cpy: {
      language: 1594
  },
  cqd: {
      language: 1595
  },
  cqu: {
      language: 1596
  },
  cra: {
      language: 1597
  },
  crb: {
      language: 1598
  },
  crc: {
      language: 1599
  },
  crd: {
      language: 1600
  },
  crf: {
      language: 1601
  },
  crg: {
      language: 1602
  },
  crh: {
      language: 1603
  },
  cri: {
      language: 1604
  },
  crj: {
      language: 1605
  },
  crk: {
      language: 1606
  },
  crl: {
      language: 1607
  },
  crm: {
      language: 1608
  },
  crn: {
      language: 1609
  },
  cro: {
      language: 1610
  },
  crp: {
      language: 1611
  },
  crq: {
      language: 1612
  },
  crr: {
      language: 1613
  },
  crs: {
      language: 1614
  },
  crt: {
      language: 1615
  },
  crv: {
      language: 1616
  },
  crw: {
      language: 1617
  },
  crx: {
      language: 1618
  },
  cry: {
      language: 1619
  },
  crz: {
      language: 1620
  },
  csa: {
      language: 1621
  },
  csb: {
      language: 1622
  },
  csc: {
      language: 1623,
      extlang: 8295
  },
  csd: {
      language: 1624,
      extlang: 8296
  },
  cse: {
      language: 1625,
      extlang: 8297
  },
  csf: {
      language: 1626,
      extlang: 8298
  },
  csg: {
      language: 1627,
      extlang: 8299
  },
  csh: {
      language: 1628
  },
  csi: {
      language: 1629
  },
  csj: {
      language: 1630
  },
  csk: {
      language: 1631
  },
  csl: {
      language: 1632,
      extlang: 8300
  },
  csm: {
      language: 1633
  },
  csn: {
      language: 1634,
      extlang: 8301
  },
  cso: {
      language: 1635
  },
  csp: {
      language: 1636,
      extlang: 8302
  },
  csq: {
      language: 1637,
      extlang: 8303
  },
  csr: {
      language: 1638,
      extlang: 8304
  },
  css: {
      language: 1639
  },
  cst: {
      language: 1640
  },
  csu: {
      language: 1641
  },
  csv: {
      language: 1642
  },
  csw: {
      language: 1643
  },
  csx: {
      language: 1644,
      extlang: 8305
  },
  csy: {
      language: 1645
  },
  csz: {
      language: 1646
  },
  cta: {
      language: 1647
  },
  ctc: {
      language: 1648
  },
  ctd: {
      language: 1649
  },
  cte: {
      language: 1650
  },
  ctg: {
      language: 1651
  },
  cth: {
      language: 1652
  },
  ctl: {
      language: 1653
  },
  ctm: {
      language: 1654
  },
  ctn: {
      language: 1655
  },
  cto: {
      language: 1656
  },
  ctp: {
      language: 1657
  },
  cts: {
      language: 1658
  },
  ctt: {
      language: 1659
  },
  ctu: {
      language: 1660
  },
  cty: {
      language: 1661
  },
  ctz: {
      language: 1662
  },
  cua: {
      language: 1663
  },
  cub: {
      language: 1664
  },
  cuc: {
      language: 1665
  },
  cug: {
      language: 1666
  },
  cuh: {
      language: 1667
  },
  cui: {
      language: 1668
  },
  cuj: {
      language: 1669
  },
  cuk: {
      language: 1670
  },
  cul: {
      language: 1671
  },
  cum: {
      language: 1672
  },
  cuo: {
      language: 1673
  },
  cup: {
      language: 1674
  },
  cuq: {
      language: 1675
  },
  cur: {
      language: 1676
  },
  cus: {
      language: 1677
  },
  cut: {
      language: 1678
  },
  cuu: {
      language: 1679
  },
  cuv: {
      language: 1680
  },
  cuw: {
      language: 1681
  },
  cux: {
      language: 1682
  },
  cuy: {
      language: 1683
  },
  cvg: {
      language: 1684
  },
  cvn: {
      language: 1685
  },
  cwa: {
      language: 1686
  },
  cwb: {
      language: 1687
  },
  cwd: {
      language: 1688
  },
  cwe: {
      language: 1689
  },
  cwg: {
      language: 1690
  },
  cwt: {
      language: 1691
  },
  cya: {
      language: 1692
  },
  cyb: {
      language: 1693
  },
  cyo: {
      language: 1694
  },
  czh: {
      language: 1695,
      extlang: 8306
  },
  czk: {
      language: 1696
  },
  czn: {
      language: 1697
  },
  czo: {
      language: 1698,
      extlang: 8307
  },
  czt: {
      language: 1699
  },
  daa: {
      language: 1700
  },
  dac: {
      language: 1701
  },
  dad: {
      language: 1702
  },
  dae: {
      language: 1703
  },
  daf: {
      language: 1704
  },
  dag: {
      language: 1705
  },
  dah: {
      language: 1706
  },
  dai: {
      language: 1707
  },
  daj: {
      language: 1708
  },
  dak: {
      language: 1709
  },
  dal: {
      language: 1710
  },
  dam: {
      language: 1711
  },
  dao: {
      language: 1712
  },
  dap: {
      language: 1713
  },
  daq: {
      language: 1714
  },
  dar: {
      language: 1715
  },
  das: {
      language: 1716
  },
  dau: {
      language: 1717
  },
  dav: {
      language: 1718
  },
  daw: {
      language: 1719
  },
  dax: {
      language: 1720
  },
  day: {
      language: 1721
  },
  daz: {
      language: 1722
  },
  dba: {
      language: 1723
  },
  dbb: {
      language: 1724
  },
  dbd: {
      language: 1725
  },
  dbe: {
      language: 1726
  },
  dbf: {
      language: 1727
  },
  dbg: {
      language: 1728
  },
  dbi: {
      language: 1729
  },
  dbj: {
      language: 1730
  },
  dbl: {
      language: 1731
  },
  dbm: {
      language: 1732
  },
  dbn: {
      language: 1733
  },
  dbo: {
      language: 1734
  },
  dbp: {
      language: 1735
  },
  dbq: {
      language: 1736
  },
  dbr: {
      language: 1737
  },
  dbt: {
      language: 1738
  },
  dbu: {
      language: 1739
  },
  dbv: {
      language: 1740
  },
  dbw: {
      language: 1741
  },
  dby: {
      language: 1742
  },
  dcc: {
      language: 1743
  },
  dcr: {
      language: 1744
  },
  dda: {
      language: 1745
  },
  ddd: {
      language: 1746
  },
  dde: {
      language: 1747
  },
  ddg: {
      language: 1748
  },
  ddi: {
      language: 1749
  },
  ddj: {
      language: 1750
  },
  ddn: {
      language: 1751
  },
  ddo: {
      language: 1752
  },
  ddr: {
      language: 1753
  },
  dds: {
      language: 1754
  },
  ddw: {
      language: 1755
  },
  dec: {
      language: 1756
  },
  ded: {
      language: 1757
  },
  dee: {
      language: 1758
  },
  def: {
      language: 1759
  },
  deg: {
      language: 1760
  },
  deh: {
      language: 1761
  },
  dei: {
      language: 1762
  },
  dek: {
      language: 1763
  },
  del: {
      language: 1764
  },
  dem: {
      language: 1765
  },
  den: {
      language: 1766
  },
  dep: {
      language: 1767
  },
  deq: {
      language: 1768
  },
  der: {
      language: 1769
  },
  des: {
      language: 1770
  },
  dev: {
      language: 1771
  },
  dez: {
      language: 1772
  },
  dga: {
      language: 1773
  },
  dgb: {
      language: 1774
  },
  dgc: {
      language: 1775
  },
  dgd: {
      language: 1776
  },
  dge: {
      language: 1777
  },
  dgg: {
      language: 1778
  },
  dgh: {
      language: 1779
  },
  dgi: {
      language: 1780
  },
  dgk: {
      language: 1781
  },
  dgl: {
      language: 1782
  },
  dgn: {
      language: 1783
  },
  dgo: {
      language: 1784
  },
  dgr: {
      language: 1785
  },
  dgs: {
      language: 1786
  },
  dgt: {
      language: 1787
  },
  dgu: {
      language: 1788
  },
  dgw: {
      language: 1789
  },
  dgx: {
      language: 1790
  },
  dgz: {
      language: 1791
  },
  dha: {
      language: 1792
  },
  dhd: {
      language: 1793
  },
  dhg: {
      language: 1794
  },
  dhi: {
      language: 1795
  },
  dhl: {
      language: 1796
  },
  dhm: {
      language: 1797
  },
  dhn: {
      language: 1798
  },
  dho: {
      language: 1799
  },
  dhr: {
      language: 1800
  },
  dhs: {
      language: 1801
  },
  dhu: {
      language: 1802
  },
  dhv: {
      language: 1803
  },
  dhw: {
      language: 1804
  },
  dhx: {
      language: 1805
  },
  dia: {
      language: 1806
  },
  dib: {
      language: 1807
  },
  dic: {
      language: 1808
  },
  did: {
      language: 1809
  },
  dif: {
      language: 1810
  },
  dig: {
      language: 1811
  },
  dih: {
      language: 1812
  },
  dii: {
      language: 1813
  },
  dij: {
      language: 1814
  },
  dik: {
      language: 1815
  },
  dil: {
      language: 1816
  },
  dim: {
      language: 1817
  },
  din: {
      language: 1818
  },
  dio: {
      language: 1819
  },
  dip: {
      language: 1820
  },
  diq: {
      language: 1821
  },
  dir: {
      language: 1822
  },
  dis: {
      language: 1823
  },
  dit: {
      language: 1824
  },
  diu: {
      language: 1825
  },
  diw: {
      language: 1826
  },
  dix: {
      language: 1827
  },
  diy: {
      language: 1828
  },
  diz: {
      language: 1829
  },
  dja: {
      language: 1830
  },
  djb: {
      language: 1831
  },
  djc: {
      language: 1832
  },
  djd: {
      language: 1833
  },
  dje: {
      language: 1834
  },
  djf: {
      language: 1835
  },
  dji: {
      language: 1836
  },
  djj: {
      language: 1837
  },
  djk: {
      language: 1838
  },
  djl: {
      language: 1839
  },
  djm: {
      language: 1840
  },
  djn: {
      language: 1841
  },
  djo: {
      language: 1842
  },
  djr: {
      language: 1843
  },
  dju: {
      language: 1844
  },
  djw: {
      language: 1845
  },
  dka: {
      language: 1846
  },
  dkg: {
      language: 1847
  },
  dkk: {
      language: 1848
  },
  dkl: {
      language: 1849
  },
  dkr: {
      language: 1850
  },
  dks: {
      language: 1851
  },
  dkx: {
      language: 1852
  },
  dlg: {
      language: 1853
  },
  dlk: {
      language: 1854
  },
  dlm: {
      language: 1855
  },
  dln: {
      language: 1856
  },
  dma: {
      language: 1857
  },
  dmb: {
      language: 1858
  },
  dmc: {
      language: 1859
  },
  dmd: {
      language: 1860
  },
  dme: {
      language: 1861
  },
  dmf: {
      language: 1862
  },
  dmg: {
      language: 1863
  },
  dmk: {
      language: 1864
  },
  dml: {
      language: 1865
  },
  dmm: {
      language: 1866
  },
  dmn: {
      language: 1867
  },
  dmo: {
      language: 1868
  },
  dmr: {
      language: 1869
  },
  dms: {
      language: 1870
  },
  dmu: {
      language: 1871
  },
  dmv: {
      language: 1872
  },
  dmw: {
      language: 1873
  },
  dmx: {
      language: 1874
  },
  dmy: {
      language: 1875
  },
  dna: {
      language: 1876
  },
  dnd: {
      language: 1877
  },
  dne: {
      language: 1878
  },
  dng: {
      language: 1879
  },
  dni: {
      language: 1880
  },
  dnj: {
      language: 1881
  },
  dnk: {
      language: 1882
  },
  dnn: {
      language: 1883
  },
  dno: {
      language: 1884
  },
  dnr: {
      language: 1885
  },
  dnt: {
      language: 1886
  },
  dnu: {
      language: 1887
  },
  dnv: {
      language: 1888
  },
  dnw: {
      language: 1889
  },
  dny: {
      language: 1890
  },
  doa: {
      language: 1891
  },
  dob: {
      language: 1892
  },
  doc: {
      language: 1893
  },
  doe: {
      language: 1894
  },
  dof: {
      language: 1895
  },
  doh: {
      language: 1896
  },
  doi: {
      language: 1897
  },
  dok: {
      language: 1898
  },
  dol: {
      language: 1899
  },
  don: {
      language: 1900
  },
  doo: {
      language: 1901
  },
  dop: {
      language: 1902
  },
  doq: {
      language: 1903,
      extlang: 8308
  },
  dor: {
      language: 1904
  },
  dos: {
      language: 1905
  },
  dot: {
      language: 1906
  },
  dov: {
      language: 1907
  },
  dow: {
      language: 1908
  },
  dox: {
      language: 1909
  },
  doy: {
      language: 1910
  },
  doz: {
      language: 1911
  },
  dpp: {
      language: 1912
  },
  dra: {
      language: 1913
  },
  drb: {
      language: 1914
  },
  drc: {
      language: 1915
  },
  drd: {
      language: 1916
  },
  dre: {
      language: 1917
  },
  drg: {
      language: 1918
  },
  drh: {
      language: 1919
  },
  dri: {
      language: 1920
  },
  drl: {
      language: 1921
  },
  drn: {
      language: 1922
  },
  dro: {
      language: 1923
  },
  drq: {
      language: 1924
  },
  drr: {
      language: 1925
  },
  drs: {
      language: 1926
  },
  drt: {
      language: 1927
  },
  dru: {
      language: 1928
  },
  drw: {
      language: 1929
  },
  dry: {
      language: 1930
  },
  dsb: {
      language: 1931
  },
  dse: {
      language: 1932,
      extlang: 8309
  },
  dsh: {
      language: 1933
  },
  dsi: {
      language: 1934
  },
  dsl: {
      language: 1935,
      extlang: 8310
  },
  dsn: {
      language: 1936
  },
  dso: {
      language: 1937
  },
  dsq: {
      language: 1938
  },
  dsz: {
      language: 1939,
      extlang: 8311
  },
  dta: {
      language: 1940
  },
  dtb: {
      language: 1941
  },
  dtd: {
      language: 1942
  },
  dth: {
      language: 1943
  },
  dti: {
      language: 1944
  },
  dtk: {
      language: 1945
  },
  dtm: {
      language: 1946
  },
  dtn: {
      language: 1947
  },
  dto: {
      language: 1948
  },
  dtp: {
      language: 1949
  },
  dtr: {
      language: 1950
  },
  dts: {
      language: 1951
  },
  dtt: {
      language: 1952
  },
  dtu: {
      language: 1953
  },
  dty: {
      language: 1954
  },
  dua: {
      language: 1955
  },
  dub: {
      language: 1956
  },
  duc: {
      language: 1957
  },
  dud: {
      language: 1958
  },
  due: {
      language: 1959
  },
  duf: {
      language: 1960
  },
  dug: {
      language: 1961
  },
  duh: {
      language: 1962
  },
  dui: {
      language: 1963
  },
  duj: {
      language: 1964
  },
  duk: {
      language: 1965
  },
  dul: {
      language: 1966
  },
  dum: {
      language: 1967
  },
  dun: {
      language: 1968
  },
  duo: {
      language: 1969
  },
  dup: {
      language: 1970,
      extlang: 8312
  },
  duq: {
      language: 1971
  },
  dur: {
      language: 1972
  },
  dus: {
      language: 1973
  },
  duu: {
      language: 1974
  },
  duv: {
      language: 1975
  },
  duw: {
      language: 1976
  },
  dux: {
      language: 1977
  },
  duy: {
      language: 1978
  },
  duz: {
      language: 1979
  },
  dva: {
      language: 1980
  },
  dwa: {
      language: 1981
  },
  dwk: {
      language: 1982
  },
  dwl: {
      language: 1983
  },
  dwr: {
      language: 1984
  },
  dws: {
      language: 1985
  },
  dwu: {
      language: 1986
  },
  dww: {
      language: 1987
  },
  dwy: {
      language: 1988
  },
  dwz: {
      language: 1989
  },
  dya: {
      language: 1990
  },
  dyb: {
      language: 1991
  },
  dyd: {
      language: 1992
  },
  dyg: {
      language: 1993
  },
  dyi: {
      language: 1994
  },
  dym: {
      language: 1995
  },
  dyn: {
      language: 1996
  },
  dyo: {
      language: 1997
  },
  dyu: {
      language: 1998
  },
  dyy: {
      language: 1999
  },
  dza: {
      language: 2e3
  },
  dzd: {
      language: 2001
  },
  dze: {
      language: 2002
  },
  dzg: {
      language: 2003
  },
  dzl: {
      language: 2004
  },
  dzn: {
      language: 2005
  },
  eaa: {
      language: 2006
  },
  ebc: {
      language: 2007
  },
  ebg: {
      language: 2008
  },
  ebk: {
      language: 2009
  },
  ebo: {
      language: 2010
  },
  ebr: {
      language: 2011
  },
  ebu: {
      language: 2012
  },
  ecr: {
      language: 2013
  },
  ecs: {
      language: 2014,
      extlang: 8313
  },
  ecy: {
      language: 2015
  },
  eee: {
      language: 2016
  },
  efa: {
      language: 2017
  },
  efe: {
      language: 2018
  },
  efi: {
      language: 2019
  },
  ega: {
      language: 2020
  },
  egl: {
      language: 2021
  },
  egm: {
      language: 2022
  },
  ego: {
      language: 2023
  },
  egx: {
      language: 2024
  },
  egy: {
      language: 2025
  },
  ehs: {
      language: 2026,
      extlang: 8314
  },
  ehu: {
      language: 2027
  },
  eip: {
      language: 2028
  },
  eit: {
      language: 2029
  },
  eiv: {
      language: 2030
  },
  eja: {
      language: 2031
  },
  eka: {
      language: 2032
  },
  ekc: {
      language: 2033
  },
  eke: {
      language: 2034
  },
  ekg: {
      language: 2035
  },
  eki: {
      language: 2036
  },
  ekk: {
      language: 2037
  },
  ekl: {
      language: 2038
  },
  ekm: {
      language: 2039
  },
  eko: {
      language: 2040
  },
  ekp: {
      language: 2041
  },
  ekr: {
      language: 2042
  },
  eky: {
      language: 2043
  },
  ele: {
      language: 2044
  },
  elh: {
      language: 2045
  },
  eli: {
      language: 2046
  },
  elk: {
      language: 2047
  },
  elm: {
      language: 2048
  },
  elo: {
      language: 2049
  },
  elp: {
      language: 2050
  },
  elu: {
      language: 2051
  },
  elx: {
      language: 2052
  },
  ema: {
      language: 2053
  },
  emb: {
      language: 2054
  },
  eme: {
      language: 2055
  },
  emg: {
      language: 2056
  },
  emi: {
      language: 2057
  },
  emk: {
      language: 2058
  },
  emm: {
      language: 2059
  },
  emn: {
      language: 2060
  },
  emo: {
      language: 2061
  },
  emp: {
      language: 2062
  },
  emq: {
      language: 2063
  },
  ems: {
      language: 2064
  },
  emu: {
      language: 2065
  },
  emw: {
      language: 2066
  },
  emx: {
      language: 2067
  },
  emy: {
      language: 2068
  },
  emz: {
      language: 2069
  },
  ena: {
      language: 2070
  },
  enb: {
      language: 2071
  },
  enc: {
      language: 2072
  },
  end: {
      language: 2073
  },
  enf: {
      language: 2074
  },
  enh: {
      language: 2075
  },
  enl: {
      language: 2076
  },
  enm: {
      language: 2077
  },
  enn: {
      language: 2078
  },
  eno: {
      language: 2079
  },
  enq: {
      language: 2080
  },
  enr: {
      language: 2081
  },
  enu: {
      language: 2082
  },
  env: {
      language: 2083
  },
  enw: {
      language: 2084
  },
  enx: {
      language: 2085
  },
  eot: {
      language: 2086
  },
  epi: {
      language: 2087
  },
  era: {
      language: 2088
  },
  erg: {
      language: 2089
  },
  erh: {
      language: 2090
  },
  eri: {
      language: 2091
  },
  erk: {
      language: 2092
  },
  ero: {
      language: 2093
  },
  err: {
      language: 2094
  },
  ers: {
      language: 2095
  },
  ert: {
      language: 2096
  },
  erw: {
      language: 2097
  },
  ese: {
      language: 2098
  },
  esg: {
      language: 2099
  },
  esh: {
      language: 2100
  },
  esi: {
      language: 2101
  },
  esk: {
      language: 2102
  },
  esl: {
      language: 2103,
      extlang: 8315
  },
  esm: {
      language: 2104
  },
  esn: {
      language: 2105,
      extlang: 8316
  },
  eso: {
      language: 2106,
      extlang: 8317
  },
  esq: {
      language: 2107
  },
  ess: {
      language: 2108
  },
  esu: {
      language: 2109
  },
  esx: {
      language: 2110
  },
  esy: {
      language: 2111
  },
  etb: {
      language: 2112
  },
  etc: {
      language: 2113
  },
  eth: {
      language: 2114,
      extlang: 8318
  },
  etn: {
      language: 2115
  },
  eto: {
      language: 2116
  },
  etr: {
      language: 2117
  },
  ets: {
      language: 2118
  },
  ett: {
      language: 2119
  },
  etu: {
      language: 2120
  },
  etx: {
      language: 2121
  },
  etz: {
      language: 2122
  },
  euq: {
      language: 2123
  },
  eve: {
      language: 2124
  },
  evh: {
      language: 2125
  },
  evn: {
      language: 2126
  },
  ewo: {
      language: 2127
  },
  ext: {
      language: 2128
  },
  eya: {
      language: 2129
  },
  eyo: {
      language: 2130
  },
  eza: {
      language: 2131
  },
  eze: {
      language: 2132
  },
  faa: {
      language: 2133
  },
  fab: {
      language: 2134
  },
  fad: {
      language: 2135
  },
  faf: {
      language: 2136
  },
  fag: {
      language: 2137
  },
  fah: {
      language: 2138
  },
  fai: {
      language: 2139
  },
  faj: {
      language: 2140
  },
  fak: {
      language: 2141
  },
  fal: {
      language: 2142
  },
  fam: {
      language: 2143
  },
  fan: {
      language: 2144
  },
  fap: {
      language: 2145
  },
  far: {
      language: 2146
  },
  fat: {
      language: 2147
  },
  fau: {
      language: 2148
  },
  fax: {
      language: 2149
  },
  fay: {
      language: 2150
  },
  faz: {
      language: 2151
  },
  fbl: {
      language: 2152
  },
  fcs: {
      language: 2153,
      extlang: 8319
  },
  fer: {
      language: 2154
  },
  ffi: {
      language: 2155
  },
  ffm: {
      language: 2156
  },
  fgr: {
      language: 2157
  },
  fia: {
      language: 2158
  },
  fie: {
      language: 2159
  },
  fif: {
      language: 2160
  },
  fil: {
      language: 2161
  },
  fip: {
      language: 2162
  },
  fir: {
      language: 2163
  },
  fit: {
      language: 2164
  },
  fiu: {
      language: 2165
  },
  fiw: {
      language: 2166
  },
  fkk: {
      language: 2167
  },
  fkv: {
      language: 2168
  },
  fla: {
      language: 2169
  },
  flh: {
      language: 2170
  },
  fli: {
      language: 2171
  },
  fll: {
      language: 2172
  },
  fln: {
      language: 2173
  },
  flr: {
      language: 2174
  },
  fly: {
      language: 2175
  },
  fmp: {
      language: 2176
  },
  fmu: {
      language: 2177
  },
  fnb: {
      language: 2178
  },
  fng: {
      language: 2179
  },
  fni: {
      language: 2180
  },
  fod: {
      language: 2181
  },
  foi: {
      language: 2182
  },
  fom: {
      language: 2183
  },
  fon: {
      language: 2184
  },
  for: {
      language: 2185
  },
  fos: {
      language: 2186
  },
  fox: {
      language: 2187
  },
  fpe: {
      language: 2188
  },
  fqs: {
      language: 2189
  },
  frc: {
      language: 2190
  },
  frd: {
      language: 2191
  },
  frk: {
      language: 2192
  },
  frm: {
      language: 2193
  },
  fro: {
      language: 2194
  },
  frp: {
      language: 2195
  },
  frq: {
      language: 2196
  },
  frr: {
      language: 2197
  },
  frs: {
      language: 2198
  },
  frt: {
      language: 2199
  },
  fse: {
      language: 2200,
      extlang: 8320
  },
  fsl: {
      language: 2201,
      extlang: 8321
  },
  fss: {
      language: 2202,
      extlang: 8322
  },
  fub: {
      language: 2203
  },
  fuc: {
      language: 2204
  },
  fud: {
      language: 2205
  },
  fue: {
      language: 2206
  },
  fuf: {
      language: 2207
  },
  fuh: {
      language: 2208
  },
  fui: {
      language: 2209
  },
  fuj: {
      language: 2210
  },
  fum: {
      language: 2211
  },
  fun: {
      language: 2212
  },
  fuq: {
      language: 2213
  },
  fur: {
      language: 2214
  },
  fut: {
      language: 2215
  },
  fuu: {
      language: 2216
  },
  fuv: {
      language: 2217
  },
  fuy: {
      language: 2218
  },
  fvr: {
      language: 2219
  },
  fwa: {
      language: 2220
  },
  fwe: {
      language: 2221
  },
  gaa: {
      language: 2222
  },
  gab: {
      language: 2223
  },
  gac: {
      language: 2224
  },
  gad: {
      language: 2225
  },
  gae: {
      language: 2226
  },
  gaf: {
      language: 2227
  },
  gag: {
      language: 2228
  },
  gah: {
      language: 2229
  },
  gai: {
      language: 2230
  },
  gaj: {
      language: 2231
  },
  gak: {
      language: 2232
  },
  gal: {
      language: 2233
  },
  gam: {
      language: 2234
  },
  gan: {
      language: 2235,
      extlang: 8323
  },
  gao: {
      language: 2236
  },
  gap: {
      language: 2237
  },
  gaq: {
      language: 2238
  },
  gar: {
      language: 2239
  },
  gas: {
      language: 2240
  },
  gat: {
      language: 2241
  },
  gau: {
      language: 2242
  },
  gav: {
      language: 2243
  },
  gaw: {
      language: 2244
  },
  gax: {
      language: 2245
  },
  gay: {
      language: 2246
  },
  gaz: {
      language: 2247
  },
  gba: {
      language: 2248
  },
  gbb: {
      language: 2249
  },
  gbc: {
      language: 2250
  },
  gbd: {
      language: 2251
  },
  gbe: {
      language: 2252
  },
  gbf: {
      language: 2253
  },
  gbg: {
      language: 2254
  },
  gbh: {
      language: 2255
  },
  gbi: {
      language: 2256
  },
  gbj: {
      language: 2257
  },
  gbk: {
      language: 2258
  },
  gbl: {
      language: 2259
  },
  gbm: {
      language: 2260
  },
  gbn: {
      language: 2261
  },
  gbo: {
      language: 2262
  },
  gbp: {
      language: 2263
  },
  gbq: {
      language: 2264
  },
  gbr: {
      language: 2265
  },
  gbs: {
      language: 2266
  },
  gbu: {
      language: 2267
  },
  gbv: {
      language: 2268
  },
  gbw: {
      language: 2269
  },
  gbx: {
      language: 2270
  },
  gby: {
      language: 2271
  },
  gbz: {
      language: 2272
  },
  gcc: {
      language: 2273
  },
  gcd: {
      language: 2274
  },
  gce: {
      language: 2275
  },
  gcf: {
      language: 2276
  },
  gcl: {
      language: 2277
  },
  gcn: {
      language: 2278
  },
  gcr: {
      language: 2279
  },
  gct: {
      language: 2280
  },
  gda: {
      language: 2281
  },
  gdb: {
      language: 2282
  },
  gdc: {
      language: 2283
  },
  gdd: {
      language: 2284
  },
  gde: {
      language: 2285
  },
  gdf: {
      language: 2286
  },
  gdg: {
      language: 2287
  },
  gdh: {
      language: 2288
  },
  gdi: {
      language: 2289
  },
  gdj: {
      language: 2290
  },
  gdk: {
      language: 2291
  },
  gdl: {
      language: 2292
  },
  gdm: {
      language: 2293
  },
  gdn: {
      language: 2294
  },
  gdo: {
      language: 2295
  },
  gdq: {
      language: 2296
  },
  gdr: {
      language: 2297
  },
  gds: {
      language: 2298,
      extlang: 8324
  },
  gdt: {
      language: 2299
  },
  gdu: {
      language: 2300
  },
  gdx: {
      language: 2301
  },
  gea: {
      language: 2302
  },
  geb: {
      language: 2303
  },
  gec: {
      language: 2304
  },
  ged: {
      language: 2305
  },
  gef: {
      language: 2306
  },
  geg: {
      language: 2307
  },
  geh: {
      language: 2308
  },
  gei: {
      language: 2309
  },
  gej: {
      language: 2310
  },
  gek: {
      language: 2311
  },
  gel: {
      language: 2312
  },
  gem: {
      language: 2313
  },
  geq: {
      language: 2314
  },
  ges: {
      language: 2315
  },
  gev: {
      language: 2316
  },
  gew: {
      language: 2317
  },
  gex: {
      language: 2318
  },
  gey: {
      language: 2319
  },
  gez: {
      language: 2320
  },
  gfk: {
      language: 2321
  },
  gft: {
      language: 2322
  },
  gfx: {
      language: 2323
  },
  gga: {
      language: 2324
  },
  ggb: {
      language: 2325
  },
  ggd: {
      language: 2326
  },
  gge: {
      language: 2327
  },
  ggg: {
      language: 2328
  },
  ggk: {
      language: 2329
  },
  ggl: {
      language: 2330
  },
  ggn: {
      language: 2331
  },
  ggo: {
      language: 2332
  },
  ggr: {
      language: 2333
  },
  ggt: {
      language: 2334
  },
  ggu: {
      language: 2335
  },
  ggw: {
      language: 2336
  },
  gha: {
      language: 2337
  },
  ghc: {
      language: 2338
  },
  ghe: {
      language: 2339
  },
  ghh: {
      language: 2340
  },
  ghk: {
      language: 2341
  },
  ghl: {
      language: 2342
  },
  ghn: {
      language: 2343
  },
  gho: {
      language: 2344
  },
  ghr: {
      language: 2345
  },
  ghs: {
      language: 2346
  },
  ght: {
      language: 2347
  },
  gia: {
      language: 2348
  },
  gib: {
      language: 2349
  },
  gic: {
      language: 2350
  },
  gid: {
      language: 2351
  },
  gie: {
      language: 2352
  },
  gig: {
      language: 2353
  },
  gih: {
      language: 2354
  },
  gii: {
      language: 2355
  },
  gil: {
      language: 2356
  },
  gim: {
      language: 2357
  },
  gin: {
      language: 2358
  },
  gio: {
      language: 2359
  },
  gip: {
      language: 2360
  },
  giq: {
      language: 2361
  },
  gir: {
      language: 2362
  },
  gis: {
      language: 2363
  },
  git: {
      language: 2364
  },
  giu: {
      language: 2365
  },
  giw: {
      language: 2366
  },
  gix: {
      language: 2367
  },
  giy: {
      language: 2368
  },
  giz: {
      language: 2369
  },
  gji: {
      language: 2370
  },
  gjk: {
      language: 2371
  },
  gjm: {
      language: 2372
  },
  gjn: {
      language: 2373
  },
  gjr: {
      language: 2374
  },
  gju: {
      language: 2375
  },
  gka: {
      language: 2376
  },
  gkd: {
      language: 2377
  },
  gke: {
      language: 2378
  },
  gkn: {
      language: 2379
  },
  gko: {
      language: 2380
  },
  gkp: {
      language: 2381
  },
  gku: {
      language: 2382
  },
  glb: {
      language: 2383
  },
  glc: {
      language: 2384
  },
  gld: {
      language: 2385
  },
  glh: {
      language: 2386
  },
  gli: {
      language: 2387
  },
  glj: {
      language: 2388
  },
  glk: {
      language: 2389
  },
  gll: {
      language: 2390
  },
  glo: {
      language: 2391
  },
  glr: {
      language: 2392
  },
  glu: {
      language: 2393
  },
  glw: {
      language: 2394
  },
  gly: {
      language: 2395
  },
  gma: {
      language: 2396
  },
  gmb: {
      language: 2397
  },
  gmd: {
      language: 2398
  },
  gme: {
      language: 2399
  },
  gmg: {
      language: 2400
  },
  gmh: {
      language: 2401
  },
  gml: {
      language: 2402
  },
  gmm: {
      language: 2403
  },
  gmn: {
      language: 2404
  },
  gmq: {
      language: 2405
  },
  gmr: {
      language: 2406
  },
  gmu: {
      language: 2407
  },
  gmv: {
      language: 2408
  },
  gmw: {
      language: 2409
  },
  gmx: {
      language: 2410
  },
  gmy: {
      language: 2411
  },
  gmz: {
      language: 2412
  },
  gna: {
      language: 2413
  },
  gnb: {
      language: 2414
  },
  gnc: {
      language: 2415
  },
  gnd: {
      language: 2416
  },
  gne: {
      language: 2417
  },
  gng: {
      language: 2418
  },
  gnh: {
      language: 2419
  },
  gni: {
      language: 2420
  },
  gnj: {
      language: 2421
  },
  gnk: {
      language: 2422
  },
  gnl: {
      language: 2423
  },
  gnm: {
      language: 2424
  },
  gnn: {
      language: 2425
  },
  gno: {
      language: 2426
  },
  gnq: {
      language: 2427
  },
  gnr: {
      language: 2428
  },
  gnt: {
      language: 2429
  },
  gnu: {
      language: 2430
  },
  gnw: {
      language: 2431
  },
  gnz: {
      language: 2432
  },
  goa: {
      language: 2433
  },
  gob: {
      language: 2434
  },
  goc: {
      language: 2435
  },
  god: {
      language: 2436
  },
  goe: {
      language: 2437
  },
  gof: {
      language: 2438
  },
  gog: {
      language: 2439
  },
  goh: {
      language: 2440
  },
  goi: {
      language: 2441
  },
  goj: {
      language: 2442
  },
  gok: {
      language: 2443
  },
  gol: {
      language: 2444
  },
  gom: {
      language: 2445,
      extlang: 8325
  },
  gon: {
      language: 2446
  },
  goo: {
      language: 2447
  },
  gop: {
      language: 2448
  },
  goq: {
      language: 2449
  },
  gor: {
      language: 2450
  },
  gos: {
      language: 2451
  },
  got: {
      language: 2452
  },
  gou: {
      language: 2453
  },
  gov: {
      language: 2454
  },
  gow: {
      language: 2455
  },
  gox: {
      language: 2456
  },
  goy: {
      language: 2457
  },
  goz: {
      language: 2458
  },
  gpa: {
      language: 2459
  },
  gpe: {
      language: 2460
  },
  gpn: {
      language: 2461
  },
  gqa: {
      language: 2462
  },
  gqi: {
      language: 2463
  },
  gqn: {
      language: 2464
  },
  gqr: {
      language: 2465
  },
  gqu: {
      language: 2466
  },
  gra: {
      language: 2467
  },
  grb: {
      language: 2468
  },
  grc: {
      language: 2469
  },
  grd: {
      language: 2470
  },
  grg: {
      language: 2471
  },
  grh: {
      language: 2472
  },
  gri: {
      language: 2473
  },
  grj: {
      language: 2474
  },
  grk: {
      language: 2475
  },
  grm: {
      language: 2476
  },
  gro: {
      language: 2477
  },
  grq: {
      language: 2478
  },
  grr: {
      language: 2479
  },
  grs: {
      language: 2480
  },
  grt: {
      language: 2481
  },
  gru: {
      language: 2482
  },
  grv: {
      language: 2483
  },
  grw: {
      language: 2484
  },
  grx: {
      language: 2485
  },
  gry: {
      language: 2486
  },
  grz: {
      language: 2487
  },
  gse: {
      language: 2488,
      extlang: 8326
  },
  gsg: {
      language: 2489,
      extlang: 8327
  },
  gsl: {
      language: 2490
  },
  gsm: {
      language: 2491,
      extlang: 8328
  },
  gsn: {
      language: 2492
  },
  gso: {
      language: 2493
  },
  gsp: {
      language: 2494
  },
  gss: {
      language: 2495,
      extlang: 8329
  },
  gsw: {
      language: 2496
  },
  gta: {
      language: 2497
  },
  gti: {
      language: 2498
  },
  gtu: {
      language: 2499
  },
  gua: {
      language: 2500
  },
  gub: {
      language: 2501
  },
  guc: {
      language: 2502
  },
  gud: {
      language: 2503
  },
  gue: {
      language: 2504
  },
  guf: {
      language: 2505
  },
  gug: {
      language: 2506
  },
  guh: {
      language: 2507
  },
  gui: {
      language: 2508
  },
  guk: {
      language: 2509
  },
  gul: {
      language: 2510
  },
  gum: {
      language: 2511
  },
  gun: {
      language: 2512
  },
  guo: {
      language: 2513
  },
  gup: {
      language: 2514
  },
  guq: {
      language: 2515
  },
  gur: {
      language: 2516
  },
  gus: {
      language: 2517,
      extlang: 8330
  },
  gut: {
      language: 2518
  },
  guu: {
      language: 2519
  },
  guv: {
      language: 2520
  },
  guw: {
      language: 2521
  },
  gux: {
      language: 2522
  },
  guz: {
      language: 2523
  },
  gva: {
      language: 2524
  },
  gvc: {
      language: 2525
  },
  gve: {
      language: 2526
  },
  gvf: {
      language: 2527
  },
  gvj: {
      language: 2528
  },
  gvl: {
      language: 2529
  },
  gvm: {
      language: 2530
  },
  gvn: {
      language: 2531
  },
  gvo: {
      language: 2532
  },
  gvp: {
      language: 2533
  },
  gvr: {
      language: 2534
  },
  gvs: {
      language: 2535
  },
  gvy: {
      language: 2536
  },
  gwa: {
      language: 2537
  },
  gwb: {
      language: 2538
  },
  gwc: {
      language: 2539
  },
  gwd: {
      language: 2540
  },
  gwe: {
      language: 2541
  },
  gwf: {
      language: 2542
  },
  gwg: {
      language: 2543
  },
  gwi: {
      language: 2544
  },
  gwj: {
      language: 2545
  },
  gwm: {
      language: 2546
  },
  gwn: {
      language: 2547
  },
  gwr: {
      language: 2548
  },
  gwt: {
      language: 2549
  },
  gwu: {
      language: 2550
  },
  gww: {
      language: 2551
  },
  gwx: {
      language: 2552
  },
  gxx: {
      language: 2553
  },
  gya: {
      language: 2554
  },
  gyb: {
      language: 2555
  },
  gyd: {
      language: 2556
  },
  gye: {
      language: 2557
  },
  gyf: {
      language: 2558
  },
  gyg: {
      language: 2559
  },
  gyi: {
      language: 2560
  },
  gyl: {
      language: 2561
  },
  gym: {
      language: 2562
  },
  gyn: {
      language: 2563
  },
  gyo: {
      language: 2564
  },
  gyr: {
      language: 2565
  },
  gyy: {
      language: 2566
  },
  gyz: {
      language: 2567
  },
  gza: {
      language: 2568
  },
  gzi: {
      language: 2569
  },
  gzn: {
      language: 2570
  },
  haa: {
      language: 2571
  },
  hab: {
      language: 2572,
      extlang: 8331
  },
  hac: {
      language: 2573
  },
  had: {
      language: 2574
  },
  hae: {
      language: 2575
  },
  haf: {
      language: 2576,
      extlang: 8332
  },
  hag: {
      language: 2577
  },
  hah: {
      language: 2578
  },
  hai: {
      language: 2579
  },
  haj: {
      language: 2580
  },
  hak: {
      language: 2581,
      extlang: 8333
  },
  hal: {
      language: 2582
  },
  ham: {
      language: 2583
  },
  han: {
      language: 2584
  },
  hao: {
      language: 2585
  },
  hap: {
      language: 2586
  },
  haq: {
      language: 2587
  },
  har: {
      language: 2588
  },
  has: {
      language: 2589
  },
  hav: {
      language: 2590
  },
  haw: {
      language: 2591
  },
  hax: {
      language: 2592
  },
  hay: {
      language: 2593
  },
  haz: {
      language: 2594
  },
  hba: {
      language: 2595
  },
  hbb: {
      language: 2596
  },
  hbn: {
      language: 2597
  },
  hbo: {
      language: 2598
  },
  hbu: {
      language: 2599
  },
  hca: {
      language: 2600
  },
  hch: {
      language: 2601
  },
  hdn: {
      language: 2602
  },
  hds: {
      language: 2603,
      extlang: 8334
  },
  hdy: {
      language: 2604
  },
  hea: {
      language: 2605
  },
  hed: {
      language: 2606
  },
  heg: {
      language: 2607
  },
  heh: {
      language: 2608
  },
  hei: {
      language: 2609
  },
  hem: {
      language: 2610
  },
  hgm: {
      language: 2611
  },
  hgw: {
      language: 2612
  },
  hhi: {
      language: 2613
  },
  hhr: {
      language: 2614
  },
  hhy: {
      language: 2615
  },
  hia: {
      language: 2616
  },
  hib: {
      language: 2617
  },
  hid: {
      language: 2618
  },
  hif: {
      language: 2619
  },
  hig: {
      language: 2620
  },
  hih: {
      language: 2621
  },
  hii: {
      language: 2622
  },
  hij: {
      language: 2623
  },
  hik: {
      language: 2624
  },
  hil: {
      language: 2625
  },
  him: {
      language: 2626
  },
  hio: {
      language: 2627
  },
  hir: {
      language: 2628
  },
  hit: {
      language: 2629
  },
  hiw: {
      language: 2630
  },
  hix: {
      language: 2631
  },
  hji: {
      language: 2632,
      extlang: 8335
  },
  hka: {
      language: 2633
  },
  hke: {
      language: 2634
  },
  hkh: {
      language: 2635
  },
  hkk: {
      language: 2636
  },
  hkn: {
      language: 2637
  },
  hks: {
      language: 2638,
      extlang: 8336
  },
  hla: {
      language: 2639
  },
  hlb: {
      language: 2640
  },
  hld: {
      language: 2641
  },
  hle: {
      language: 2642
  },
  hlt: {
      language: 2643
  },
  hlu: {
      language: 2644
  },
  hma: {
      language: 2645
  },
  hmb: {
      language: 2646
  },
  hmc: {
      language: 2647
  },
  hmd: {
      language: 2648
  },
  hme: {
      language: 2649
  },
  hmf: {
      language: 2650
  },
  hmg: {
      language: 2651
  },
  hmh: {
      language: 2652
  },
  hmi: {
      language: 2653
  },
  hmj: {
      language: 2654
  },
  hmk: {
      language: 2655
  },
  hml: {
      language: 2656
  },
  hmm: {
      language: 2657
  },
  hmn: {
      language: 2658
  },
  hmp: {
      language: 2659
  },
  hmq: {
      language: 2660
  },
  hmr: {
      language: 2661
  },
  hms: {
      language: 2662
  },
  hmt: {
      language: 2663
  },
  hmu: {
      language: 2664
  },
  hmv: {
      language: 2665
  },
  hmw: {
      language: 2666
  },
  hmx: {
      language: 2667
  },
  hmy: {
      language: 2668
  },
  hmz: {
      language: 2669
  },
  hna: {
      language: 2670
  },
  hnd: {
      language: 2671
  },
  hne: {
      language: 2672
  },
  hng: {
      language: 2673
  },
  hnh: {
      language: 2674
  },
  hni: {
      language: 2675
  },
  hnj: {
      language: 2676
  },
  hnn: {
      language: 2677
  },
  hno: {
      language: 2678
  },
  hns: {
      language: 2679
  },
  hnu: {
      language: 2680
  },
  hoa: {
      language: 2681
  },
  hob: {
      language: 2682
  },
  hoc: {
      language: 2683
  },
  hod: {
      language: 2684
  },
  hoe: {
      language: 2685
  },
  hoh: {
      language: 2686
  },
  hoi: {
      language: 2687
  },
  hoj: {
      language: 2688
  },
  hok: {
      language: 2689
  },
  hol: {
      language: 2690
  },
  hom: {
      language: 2691
  },
  hoo: {
      language: 2692
  },
  hop: {
      language: 2693
  },
  hor: {
      language: 2694
  },
  hos: {
      language: 2695,
      extlang: 8337
  },
  hot: {
      language: 2696
  },
  hov: {
      language: 2697
  },
  how: {
      language: 2698
  },
  hoy: {
      language: 2699
  },
  hoz: {
      language: 2700
  },
  hpo: {
      language: 2701
  },
  hps: {
      language: 2702,
      extlang: 8338
  },
  hra: {
      language: 2703
  },
  hrc: {
      language: 2704
  },
  hre: {
      language: 2705
  },
  hrk: {
      language: 2706
  },
  hrm: {
      language: 2707
  },
  hro: {
      language: 2708
  },
  hrp: {
      language: 2709
  },
  hrr: {
      language: 2710
  },
  hrt: {
      language: 2711
  },
  hru: {
      language: 2712
  },
  hrw: {
      language: 2713
  },
  hrx: {
      language: 2714
  },
  hrz: {
      language: 2715
  },
  hsb: {
      language: 2716
  },
  hsh: {
      language: 2717,
      extlang: 8339
  },
  hsl: {
      language: 2718,
      extlang: 8340
  },
  hsn: {
      language: 2719,
      extlang: 8341
  },
  hss: {
      language: 2720
  },
  hti: {
      language: 2721
  },
  hto: {
      language: 2722
  },
  hts: {
      language: 2723
  },
  htu: {
      language: 2724
  },
  htx: {
      language: 2725
  },
  hub: {
      language: 2726
  },
  huc: {
      language: 2727
  },
  hud: {
      language: 2728
  },
  hue: {
      language: 2729
  },
  huf: {
      language: 2730
  },
  hug: {
      language: 2731
  },
  huh: {
      language: 2732
  },
  hui: {
      language: 2733
  },
  huj: {
      language: 2734
  },
  huk: {
      language: 2735
  },
  hul: {
      language: 2736
  },
  hum: {
      language: 2737
  },
  huo: {
      language: 2738
  },
  hup: {
      language: 2739
  },
  huq: {
      language: 2740
  },
  hur: {
      language: 2741
  },
  hus: {
      language: 2742
  },
  hut: {
      language: 2743
  },
  huu: {
      language: 2744
  },
  huv: {
      language: 2745
  },
  huw: {
      language: 2746
  },
  hux: {
      language: 2747
  },
  huy: {
      language: 2748
  },
  huz: {
      language: 2749
  },
  hvc: {
      language: 2750
  },
  hve: {
      language: 2751
  },
  hvk: {
      language: 2752
  },
  hvn: {
      language: 2753
  },
  hvv: {
      language: 2754
  },
  hwa: {
      language: 2755
  },
  hwc: {
      language: 2756
  },
  hwo: {
      language: 2757
  },
  hya: {
      language: 2758
  },
  hyw: {
      language: 2759
  },
  hyx: {
      language: 2760
  },
  iai: {
      language: 2761
  },
  ian: {
      language: 2762
  },
  iap: {
      language: 2763
  },
  iar: {
      language: 2764
  },
  iba: {
      language: 2765
  },
  ibb: {
      language: 2766
  },
  ibd: {
      language: 2767
  },
  ibe: {
      language: 2768
  },
  ibg: {
      language: 2769
  },
  ibh: {
      language: 2770
  },
  ibi: {
      language: 2771
  },
  ibl: {
      language: 2772
  },
  ibm: {
      language: 2773
  },
  ibn: {
      language: 2774
  },
  ibr: {
      language: 2775
  },
  ibu: {
      language: 2776
  },
  iby: {
      language: 2777
  },
  ica: {
      language: 2778
  },
  ich: {
      language: 2779
  },
  icl: {
      language: 2780,
      extlang: 8342
  },
  icr: {
      language: 2781
  },
  ida: {
      language: 2782
  },
  idb: {
      language: 2783
  },
  idc: {
      language: 2784
  },
  idd: {
      language: 2785
  },
  ide: {
      language: 2786
  },
  idi: {
      language: 2787
  },
  idr: {
      language: 2788
  },
  ids: {
      language: 2789
  },
  idt: {
      language: 2790
  },
  idu: {
      language: 2791
  },
  ifa: {
      language: 2792
  },
  ifb: {
      language: 2793
  },
  ife: {
      language: 2794
  },
  iff: {
      language: 2795
  },
  ifk: {
      language: 2796
  },
  ifm: {
      language: 2797
  },
  ifu: {
      language: 2798
  },
  ify: {
      language: 2799
  },
  igb: {
      language: 2800
  },
  ige: {
      language: 2801
  },
  igg: {
      language: 2802
  },
  igl: {
      language: 2803
  },
  igm: {
      language: 2804
  },
  ign: {
      language: 2805
  },
  igo: {
      language: 2806
  },
  igs: {
      language: 2807
  },
  igw: {
      language: 2808
  },
  ihb: {
      language: 2809
  },
  ihi: {
      language: 2810
  },
  ihp: {
      language: 2811
  },
  ihw: {
      language: 2812
  },
  iin: {
      language: 2813
  },
  iir: {
      language: 2814
  },
  ijc: {
      language: 2815
  },
  ije: {
      language: 2816
  },
  ijj: {
      language: 2817
  },
  ijn: {
      language: 2818
  },
  ijo: {
      language: 2819
  },
  ijs: {
      language: 2820
  },
  ike: {
      language: 2821
  },
  iki: {
      language: 2822
  },
  ikk: {
      language: 2823
  },
  ikl: {
      language: 2824
  },
  iko: {
      language: 2825
  },
  ikp: {
      language: 2826
  },
  ikr: {
      language: 2827
  },
  iks: {
      language: 2828,
      extlang: 8343
  },
  ikt: {
      language: 2829
  },
  ikv: {
      language: 2830
  },
  ikw: {
      language: 2831
  },
  ikx: {
      language: 2832
  },
  ikz: {
      language: 2833
  },
  ila: {
      language: 2834
  },
  ilb: {
      language: 2835
  },
  ilg: {
      language: 2836
  },
  ili: {
      language: 2837
  },
  ilk: {
      language: 2838
  },
  ill: {
      language: 2839
  },
  ilm: {
      language: 2840
  },
  ilo: {
      language: 2841
  },
  ilp: {
      language: 2842
  },
  ils: {
      language: 2843,
      extlang: 8344
  },
  ilu: {
      language: 2844
  },
  ilv: {
      language: 2845
  },
  ilw: {
      language: 2846
  },
  ima: {
      language: 2847
  },
  ime: {
      language: 2848
  },
  imi: {
      language: 2849
  },
  iml: {
      language: 2850
  },
  imn: {
      language: 2851
  },
  imo: {
      language: 2852
  },
  imr: {
      language: 2853
  },
  ims: {
      language: 2854
  },
  imt: {
      language: 2855
  },
  imy: {
      language: 2856
  },
  inb: {
      language: 2857
  },
  inc: {
      language: 2858
  },
  ine: {
      language: 2859
  },
  ing: {
      language: 2860
  },
  inh: {
      language: 2861
  },
  inj: {
      language: 2862
  },
  inl: {
      language: 2863,
      extlang: 8345
  },
  inm: {
      language: 2864
  },
  inn: {
      language: 2865
  },
  ino: {
      language: 2866
  },
  inp: {
      language: 2867
  },
  ins: {
      language: 2868,
      extlang: 8346
  },
  int: {
      language: 2869
  },
  inz: {
      language: 2870
  },
  ior: {
      language: 2871
  },
  iou: {
      language: 2872
  },
  iow: {
      language: 2873
  },
  ipi: {
      language: 2874
  },
  ipo: {
      language: 2875
  },
  iqu: {
      language: 2876
  },
  iqw: {
      language: 2877
  },
  ira: {
      language: 2878
  },
  ire: {
      language: 2879
  },
  irh: {
      language: 2880
  },
  iri: {
      language: 2881
  },
  irk: {
      language: 2882
  },
  irn: {
      language: 2883
  },
  iro: {
      language: 2884
  },
  irr: {
      language: 2885
  },
  iru: {
      language: 2886
  },
  irx: {
      language: 2887
  },
  iry: {
      language: 2888
  },
  isa: {
      language: 2889
  },
  isc: {
      language: 2890
  },
  isd: {
      language: 2891
  },
  ise: {
      language: 2892,
      extlang: 8347
  },
  isg: {
      language: 2893,
      extlang: 8348
  },
  ish: {
      language: 2894
  },
  isi: {
      language: 2895
  },
  isk: {
      language: 2896
  },
  ism: {
      language: 2897
  },
  isn: {
      language: 2898
  },
  iso: {
      language: 2899
  },
  isr: {
      language: 2900,
      extlang: 8349
  },
  ist: {
      language: 2901
  },
  isu: {
      language: 2902
  },
  itb: {
      language: 2903
  },
  itc: {
      language: 2904
  },
  itd: {
      language: 2905
  },
  ite: {
      language: 2906
  },
  iti: {
      language: 2907
  },
  itk: {
      language: 2908
  },
  itl: {
      language: 2909
  },
  itm: {
      language: 2910
  },
  ito: {
      language: 2911
  },
  itr: {
      language: 2912
  },
  its: {
      language: 2913
  },
  itt: {
      language: 2914
  },
  itv: {
      language: 2915
  },
  itw: {
      language: 2916
  },
  itx: {
      language: 2917
  },
  ity: {
      language: 2918
  },
  itz: {
      language: 2919
  },
  ium: {
      language: 2920
  },
  ivb: {
      language: 2921
  },
  ivv: {
      language: 2922
  },
  iwk: {
      language: 2923
  },
  iwm: {
      language: 2924
  },
  iwo: {
      language: 2925
  },
  iws: {
      language: 2926
  },
  ixc: {
      language: 2927
  },
  ixl: {
      language: 2928
  },
  iya: {
      language: 2929
  },
  iyo: {
      language: 2930
  },
  iyx: {
      language: 2931
  },
  izh: {
      language: 2932
  },
  izi: {
      language: 2933
  },
  izr: {
      language: 2934
  },
  izz: {
      language: 2935
  },
  jaa: {
      language: 2936
  },
  jab: {
      language: 2937
  },
  jac: {
      language: 2938
  },
  jad: {
      language: 2939
  },
  jae: {
      language: 2940
  },
  jaf: {
      language: 2941
  },
  jah: {
      language: 2942
  },
  jaj: {
      language: 2943
  },
  jak: {
      language: 2944,
      extlang: 8350
  },
  jal: {
      language: 2945
  },
  jam: {
      language: 2946
  },
  jan: {
      language: 2947
  },
  jao: {
      language: 2948
  },
  jaq: {
      language: 2949
  },
  jar: {
      language: 2950
  },
  jas: {
      language: 2951
  },
  jat: {
      language: 2952
  },
  jau: {
      language: 2953
  },
  jax: {
      language: 2954,
      extlang: 8351
  },
  jay: {
      language: 2955
  },
  jaz: {
      language: 2956
  },
  jbe: {
      language: 2957
  },
  jbi: {
      language: 2958
  },
  jbj: {
      language: 2959
  },
  jbk: {
      language: 2960
  },
  jbm: {
      language: 2961
  },
  jbn: {
      language: 2962
  },
  jbo: {
      language: 2963
  },
  jbr: {
      language: 2964
  },
  jbt: {
      language: 2965
  },
  jbu: {
      language: 2966
  },
  jbw: {
      language: 2967
  },
  jcs: {
      language: 2968,
      extlang: 8352
  },
  jct: {
      language: 2969
  },
  jda: {
      language: 2970
  },
  jdg: {
      language: 2971
  },
  jdt: {
      language: 2972
  },
  jeb: {
      language: 2973
  },
  jee: {
      language: 2974
  },
  jeg: {
      language: 2975
  },
  jeh: {
      language: 2976
  },
  jei: {
      language: 2977
  },
  jek: {
      language: 2978
  },
  jel: {
      language: 2979
  },
  jen: {
      language: 2980
  },
  jer: {
      language: 2981
  },
  jet: {
      language: 2982
  },
  jeu: {
      language: 2983
  },
  jgb: {
      language: 2984
  },
  jge: {
      language: 2985
  },
  jgk: {
      language: 2986
  },
  jgo: {
      language: 2987
  },
  jhi: {
      language: 2988
  },
  jhs: {
      language: 2989,
      extlang: 8353
  },
  jia: {
      language: 2990
  },
  jib: {
      language: 2991
  },
  jic: {
      language: 2992
  },
  jid: {
      language: 2993
  },
  jie: {
      language: 2994
  },
  jig: {
      language: 2995
  },
  jih: {
      language: 2996
  },
  jii: {
      language: 2997
  },
  jil: {
      language: 2998
  },
  jim: {
      language: 2999
  },
  jio: {
      language: 3e3
  },
  jiq: {
      language: 3001
  },
  jit: {
      language: 3002
  },
  jiu: {
      language: 3003
  },
  jiv: {
      language: 3004
  },
  jiy: {
      language: 3005
  },
  jje: {
      language: 3006
  },
  jjr: {
      language: 3007
  },
  jka: {
      language: 3008
  },
  jkm: {
      language: 3009
  },
  jko: {
      language: 3010
  },
  jkp: {
      language: 3011
  },
  jkr: {
      language: 3012
  },
  jks: {
      language: 3013,
      extlang: 8354
  },
  jku: {
      language: 3014
  },
  jle: {
      language: 3015
  },
  jls: {
      language: 3016,
      extlang: 8355
  },
  jma: {
      language: 3017
  },
  jmb: {
      language: 3018
  },
  jmc: {
      language: 3019
  },
  jmd: {
      language: 3020
  },
  jmi: {
      language: 3021
  },
  jml: {
      language: 3022
  },
  jmn: {
      language: 3023
  },
  jmr: {
      language: 3024
  },
  jms: {
      language: 3025
  },
  jmw: {
      language: 3026
  },
  jmx: {
      language: 3027
  },
  jna: {
      language: 3028
  },
  jnd: {
      language: 3029
  },
  jng: {
      language: 3030
  },
  jni: {
      language: 3031
  },
  jnj: {
      language: 3032
  },
  jnl: {
      language: 3033
  },
  jns: {
      language: 3034
  },
  job: {
      language: 3035
  },
  jod: {
      language: 3036
  },
  jog: {
      language: 3037
  },
  jor: {
      language: 3038
  },
  jos: {
      language: 3039,
      extlang: 8356
  },
  jow: {
      language: 3040
  },
  jpa: {
      language: 3041
  },
  jpr: {
      language: 3042
  },
  jpx: {
      language: 3043
  },
  jqr: {
      language: 3044
  },
  jra: {
      language: 3045
  },
  jrb: {
      language: 3046
  },
  jrr: {
      language: 3047
  },
  jrt: {
      language: 3048
  },
  jru: {
      language: 3049
  },
  jsl: {
      language: 3050,
      extlang: 8357
  },
  jua: {
      language: 3051
  },
  jub: {
      language: 3052
  },
  juc: {
      language: 3053
  },
  jud: {
      language: 3054
  },
  juh: {
      language: 3055
  },
  jui: {
      language: 3056
  },
  juk: {
      language: 3057
  },
  jul: {
      language: 3058
  },
  jum: {
      language: 3059
  },
  jun: {
      language: 3060
  },
  juo: {
      language: 3061
  },
  jup: {
      language: 3062
  },
  jur: {
      language: 3063
  },
  jus: {
      language: 3064,
      extlang: 8358
  },
  jut: {
      language: 3065
  },
  juu: {
      language: 3066
  },
  juw: {
      language: 3067
  },
  juy: {
      language: 3068
  },
  jvd: {
      language: 3069
  },
  jvn: {
      language: 3070
  },
  jwi: {
      language: 3071
  },
  jya: {
      language: 3072
  },
  jye: {
      language: 3073
  },
  jyy: {
      language: 3074
  },
  kaa: {
      language: 3075
  },
  kab: {
      language: 3076
  },
  kac: {
      language: 3077
  },
  kad: {
      language: 3078
  },
  kae: {
      language: 3079
  },
  kaf: {
      language: 3080
  },
  kag: {
      language: 3081
  },
  kah: {
      language: 3082
  },
  kai: {
      language: 3083
  },
  kaj: {
      language: 3084
  },
  kak: {
      language: 3085
  },
  kam: {
      language: 3086
  },
  kao: {
      language: 3087
  },
  kap: {
      language: 3088
  },
  kaq: {
      language: 3089
  },
  kar: {
      language: 3090
  },
  kav: {
      language: 3091
  },
  kaw: {
      language: 3092
  },
  kax: {
      language: 3093
  },
  kay: {
      language: 3094
  },
  kba: {
      language: 3095
  },
  kbb: {
      language: 3096
  },
  kbc: {
      language: 3097
  },
  kbd: {
      language: 3098
  },
  kbe: {
      language: 3099
  },
  kbf: {
      language: 3100
  },
  kbg: {
      language: 3101
  },
  kbh: {
      language: 3102
  },
  kbi: {
      language: 3103
  },
  kbj: {
      language: 3104
  },
  kbk: {
      language: 3105
  },
  kbl: {
      language: 3106
  },
  kbm: {
      language: 3107
  },
  kbn: {
      language: 3108
  },
  kbo: {
      language: 3109
  },
  kbp: {
      language: 3110
  },
  kbq: {
      language: 3111
  },
  kbr: {
      language: 3112
  },
  kbs: {
      language: 3113
  },
  kbt: {
      language: 3114
  },
  kbu: {
      language: 3115
  },
  kbv: {
      language: 3116
  },
  kbw: {
      language: 3117
  },
  kbx: {
      language: 3118
  },
  kby: {
      language: 3119
  },
  kbz: {
      language: 3120
  },
  kca: {
      language: 3121
  },
  kcb: {
      language: 3122
  },
  kcc: {
      language: 3123
  },
  kcd: {
      language: 3124
  },
  kce: {
      language: 3125
  },
  kcf: {
      language: 3126
  },
  kcg: {
      language: 3127
  },
  kch: {
      language: 3128
  },
  kci: {
      language: 3129
  },
  kcj: {
      language: 3130
  },
  kck: {
      language: 3131
  },
  kcl: {
      language: 3132
  },
  kcm: {
      language: 3133
  },
  kcn: {
      language: 3134
  },
  kco: {
      language: 3135
  },
  kcp: {
      language: 3136
  },
  kcq: {
      language: 3137
  },
  kcr: {
      language: 3138
  },
  kcs: {
      language: 3139
  },
  kct: {
      language: 3140
  },
  kcu: {
      language: 3141
  },
  kcv: {
      language: 3142
  },
  kcw: {
      language: 3143
  },
  kcx: {
      language: 3144
  },
  kcy: {
      language: 3145
  },
  kcz: {
      language: 3146
  },
  kda: {
      language: 3147
  },
  kdc: {
      language: 3148
  },
  kdd: {
      language: 3149
  },
  kde: {
      language: 3150
  },
  kdf: {
      language: 3151
  },
  kdg: {
      language: 3152
  },
  kdh: {
      language: 3153
  },
  kdi: {
      language: 3154
  },
  kdj: {
      language: 3155
  },
  kdk: {
      language: 3156
  },
  kdl: {
      language: 3157
  },
  kdm: {
      language: 3158
  },
  kdn: {
      language: 3159
  },
  kdo: {
      language: 3160
  },
  kdp: {
      language: 3161
  },
  kdq: {
      language: 3162
  },
  kdr: {
      language: 3163
  },
  kdt: {
      language: 3164
  },
  kdu: {
      language: 3165
  },
  kdv: {
      language: 3166
  },
  kdw: {
      language: 3167
  },
  kdx: {
      language: 3168
  },
  kdy: {
      language: 3169
  },
  kdz: {
      language: 3170
  },
  kea: {
      language: 3171
  },
  keb: {
      language: 3172
  },
  kec: {
      language: 3173
  },
  ked: {
      language: 3174
  },
  kee: {
      language: 3175
  },
  kef: {
      language: 3176
  },
  keg: {
      language: 3177
  },
  keh: {
      language: 3178
  },
  kei: {
      language: 3179
  },
  kej: {
      language: 3180
  },
  kek: {
      language: 3181
  },
  kel: {
      language: 3182
  },
  kem: {
      language: 3183
  },
  ken: {
      language: 3184
  },
  keo: {
      language: 3185
  },
  kep: {
      language: 3186
  },
  keq: {
      language: 3187
  },
  ker: {
      language: 3188
  },
  kes: {
      language: 3189
  },
  ket: {
      language: 3190
  },
  keu: {
      language: 3191
  },
  kev: {
      language: 3192
  },
  kew: {
      language: 3193
  },
  kex: {
      language: 3194
  },
  key: {
      language: 3195
  },
  kez: {
      language: 3196
  },
  kfa: {
      language: 3197
  },
  kfb: {
      language: 3198
  },
  kfc: {
      language: 3199
  },
  kfd: {
      language: 3200
  },
  kfe: {
      language: 3201
  },
  kff: {
      language: 3202
  },
  kfg: {
      language: 3203
  },
  kfh: {
      language: 3204
  },
  kfi: {
      language: 3205
  },
  kfj: {
      language: 3206
  },
  kfk: {
      language: 3207
  },
  kfl: {
      language: 3208
  },
  kfm: {
      language: 3209
  },
  kfn: {
      language: 3210
  },
  kfo: {
      language: 3211
  },
  kfp: {
      language: 3212
  },
  kfq: {
      language: 3213
  },
  kfr: {
      language: 3214
  },
  kfs: {
      language: 3215
  },
  kft: {
      language: 3216
  },
  kfu: {
      language: 3217
  },
  kfv: {
      language: 3218
  },
  kfw: {
      language: 3219
  },
  kfx: {
      language: 3220
  },
  kfy: {
      language: 3221
  },
  kfz: {
      language: 3222
  },
  kga: {
      language: 3223
  },
  kgb: {
      language: 3224
  },
  kgc: {
      language: 3225
  },
  kgd: {
      language: 3226
  },
  kge: {
      language: 3227
  },
  kgf: {
      language: 3228
  },
  kgg: {
      language: 3229
  },
  kgh: {
      language: 3230
  },
  kgi: {
      language: 3231,
      extlang: 8359
  },
  kgj: {
      language: 3232
  },
  kgk: {
      language: 3233
  },
  kgl: {
      language: 3234
  },
  kgm: {
      language: 3235
  },
  kgn: {
      language: 3236
  },
  kgo: {
      language: 3237
  },
  kgp: {
      language: 3238
  },
  kgq: {
      language: 3239
  },
  kgr: {
      language: 3240
  },
  kgs: {
      language: 3241
  },
  kgt: {
      language: 3242
  },
  kgu: {
      language: 3243
  },
  kgv: {
      language: 3244
  },
  kgw: {
      language: 3245
  },
  kgx: {
      language: 3246
  },
  kgy: {
      language: 3247
  },
  kha: {
      language: 3248
  },
  khb: {
      language: 3249
  },
  khc: {
      language: 3250
  },
  khd: {
      language: 3251
  },
  khe: {
      language: 3252
  },
  khf: {
      language: 3253
  },
  khg: {
      language: 3254
  },
  khh: {
      language: 3255
  },
  khi: {
      language: 3256
  },
  khj: {
      language: 3257
  },
  khk: {
      language: 3258
  },
  khl: {
      language: 3259
  },
  khn: {
      language: 3260
  },
  kho: {
      language: 3261
  },
  khp: {
      language: 3262
  },
  khq: {
      language: 3263
  },
  khr: {
      language: 3264
  },
  khs: {
      language: 3265
  },
  kht: {
      language: 3266
  },
  khu: {
      language: 3267
  },
  khv: {
      language: 3268
  },
  khw: {
      language: 3269
  },
  khx: {
      language: 3270
  },
  khy: {
      language: 3271
  },
  khz: {
      language: 3272
  },
  kia: {
      language: 3273
  },
  kib: {
      language: 3274
  },
  kic: {
      language: 3275
  },
  kid: {
      language: 3276
  },
  kie: {
      language: 3277
  },
  kif: {
      language: 3278
  },
  kig: {
      language: 3279
  },
  kih: {
      language: 3280
  },
  kii: {
      language: 3281
  },
  kij: {
      language: 3282
  },
  kil: {
      language: 3283
  },
  kim: {
      language: 3284
  },
  kio: {
      language: 3285
  },
  kip: {
      language: 3286
  },
  kiq: {
      language: 3287
  },
  kis: {
      language: 3288
  },
  kit: {
      language: 3289
  },
  kiu: {
      language: 3290
  },
  kiv: {
      language: 3291
  },
  kiw: {
      language: 3292
  },
  kix: {
      language: 3293
  },
  kiy: {
      language: 3294
  },
  kiz: {
      language: 3295
  },
  kja: {
      language: 3296
  },
  kjb: {
      language: 3297
  },
  kjc: {
      language: 3298
  },
  kjd: {
      language: 3299
  },
  kje: {
      language: 3300
  },
  kjf: {
      language: 3301
  },
  kjg: {
      language: 3302
  },
  kjh: {
      language: 3303
  },
  kji: {
      language: 3304
  },
  kjj: {
      language: 3305
  },
  kjk: {
      language: 3306
  },
  kjl: {
      language: 3307
  },
  kjm: {
      language: 3308
  },
  kjn: {
      language: 3309
  },
  kjo: {
      language: 3310
  },
  kjp: {
      language: 3311
  },
  kjq: {
      language: 3312
  },
  kjr: {
      language: 3313
  },
  kjs: {
      language: 3314
  },
  kjt: {
      language: 3315
  },
  kju: {
      language: 3316
  },
  kjv: {
      language: 3317
  },
  kjx: {
      language: 3318
  },
  kjy: {
      language: 3319
  },
  kjz: {
      language: 3320
  },
  kka: {
      language: 3321
  },
  kkb: {
      language: 3322
  },
  kkc: {
      language: 3323
  },
  kkd: {
      language: 3324
  },
  kke: {
      language: 3325
  },
  kkf: {
      language: 3326
  },
  kkg: {
      language: 3327
  },
  kkh: {
      language: 3328
  },
  kki: {
      language: 3329
  },
  kkj: {
      language: 3330
  },
  kkk: {
      language: 3331
  },
  kkl: {
      language: 3332
  },
  kkm: {
      language: 3333
  },
  kkn: {
      language: 3334
  },
  kko: {
      language: 3335
  },
  kkp: {
      language: 3336
  },
  kkq: {
      language: 3337
  },
  kkr: {
      language: 3338
  },
  kks: {
      language: 3339
  },
  kkt: {
      language: 3340
  },
  kku: {
      language: 3341
  },
  kkv: {
      language: 3342
  },
  kkw: {
      language: 3343
  },
  kkx: {
      language: 3344
  },
  kky: {
      language: 3345
  },
  kkz: {
      language: 3346
  },
  kla: {
      language: 3347
  },
  klb: {
      language: 3348
  },
  klc: {
      language: 3349
  },
  kld: {
      language: 3350
  },
  kle: {
      language: 3351
  },
  klf: {
      language: 3352
  },
  klg: {
      language: 3353
  },
  klh: {
      language: 3354
  },
  kli: {
      language: 3355
  },
  klj: {
      language: 3356
  },
  klk: {
      language: 3357
  },
  kll: {
      language: 3358
  },
  klm: {
      language: 3359
  },
  kln: {
      language: 3360
  },
  klo: {
      language: 3361
  },
  klp: {
      language: 3362
  },
  klq: {
      language: 3363
  },
  klr: {
      language: 3364
  },
  kls: {
      language: 3365
  },
  klt: {
      language: 3366
  },
  klu: {
      language: 3367
  },
  klv: {
      language: 3368
  },
  klw: {
      language: 3369
  },
  klx: {
      language: 3370
  },
  kly: {
      language: 3371
  },
  klz: {
      language: 3372
  },
  kma: {
      language: 3373
  },
  kmb: {
      language: 3374
  },
  kmc: {
      language: 3375
  },
  kmd: {
      language: 3376
  },
  kme: {
      language: 3377
  },
  kmf: {
      language: 3378
  },
  kmg: {
      language: 3379
  },
  kmh: {
      language: 3380
  },
  kmi: {
      language: 3381
  },
  kmj: {
      language: 3382
  },
  kmk: {
      language: 3383
  },
  kml: {
      language: 3384
  },
  kmm: {
      language: 3385
  },
  kmn: {
      language: 3386
  },
  kmo: {
      language: 3387
  },
  kmp: {
      language: 3388
  },
  kmq: {
      language: 3389
  },
  kmr: {
      language: 3390
  },
  kms: {
      language: 3391
  },
  kmt: {
      language: 3392
  },
  kmu: {
      language: 3393
  },
  kmv: {
      language: 3394
  },
  kmw: {
      language: 3395
  },
  kmx: {
      language: 3396
  },
  kmy: {
      language: 3397
  },
  kmz: {
      language: 3398
  },
  kna: {
      language: 3399
  },
  knb: {
      language: 3400
  },
  knc: {
      language: 3401
  },
  knd: {
      language: 3402
  },
  kne: {
      language: 3403
  },
  knf: {
      language: 3404
  },
  kng: {
      language: 3405
  },
  kni: {
      language: 3406
  },
  knj: {
      language: 3407
  },
  knk: {
      language: 3408
  },
  knl: {
      language: 3409
  },
  knm: {
      language: 3410
  },
  knn: {
      language: 3411,
      extlang: 8360
  },
  kno: {
      language: 3412
  },
  knp: {
      language: 3413
  },
  knq: {
      language: 3414
  },
  knr: {
      language: 3415
  },
  kns: {
      language: 3416
  },
  knt: {
      language: 3417
  },
  knu: {
      language: 3418
  },
  knv: {
      language: 3419
  },
  knw: {
      language: 3420
  },
  knx: {
      language: 3421
  },
  kny: {
      language: 3422
  },
  knz: {
      language: 3423
  },
  koa: {
      language: 3424
  },
  koc: {
      language: 3425
  },
  kod: {
      language: 3426
  },
  koe: {
      language: 3427
  },
  kof: {
      language: 3428
  },
  kog: {
      language: 3429
  },
  koh: {
      language: 3430
  },
  koi: {
      language: 3431
  },
  koj: {
      language: 3432
  },
  kok: {
      language: 3433
  },
  kol: {
      language: 3434
  },
  koo: {
      language: 3435
  },
  kop: {
      language: 3436
  },
  koq: {
      language: 3437
  },
  kos: {
      language: 3438
  },
  kot: {
      language: 3439
  },
  kou: {
      language: 3440
  },
  kov: {
      language: 3441
  },
  kow: {
      language: 3442
  },
  kox: {
      language: 3443
  },
  koy: {
      language: 3444
  },
  koz: {
      language: 3445
  },
  kpa: {
      language: 3446
  },
  kpb: {
      language: 3447
  },
  kpc: {
      language: 3448
  },
  kpd: {
      language: 3449
  },
  kpe: {
      language: 3450
  },
  kpf: {
      language: 3451
  },
  kpg: {
      language: 3452
  },
  kph: {
      language: 3453
  },
  kpi: {
      language: 3454
  },
  kpj: {
      language: 3455
  },
  kpk: {
      language: 3456
  },
  kpl: {
      language: 3457
  },
  kpm: {
      language: 3458
  },
  kpn: {
      language: 3459
  },
  kpo: {
      language: 3460
  },
  kpp: {
      language: 3461
  },
  kpq: {
      language: 3462
  },
  kpr: {
      language: 3463
  },
  kps: {
      language: 3464
  },
  kpt: {
      language: 3465
  },
  kpu: {
      language: 3466
  },
  kpv: {
      language: 3467
  },
  kpw: {
      language: 3468
  },
  kpx: {
      language: 3469
  },
  kpy: {
      language: 3470
  },
  kpz: {
      language: 3471
  },
  kqa: {
      language: 3472
  },
  kqb: {
      language: 3473
  },
  kqc: {
      language: 3474
  },
  kqd: {
      language: 3475
  },
  kqe: {
      language: 3476
  },
  kqf: {
      language: 3477
  },
  kqg: {
      language: 3478
  },
  kqh: {
      language: 3479
  },
  kqi: {
      language: 3480
  },
  kqj: {
      language: 3481
  },
  kqk: {
      language: 3482
  },
  kql: {
      language: 3483
  },
  kqm: {
      language: 3484
  },
  kqn: {
      language: 3485
  },
  kqo: {
      language: 3486
  },
  kqp: {
      language: 3487
  },
  kqq: {
      language: 3488
  },
  kqr: {
      language: 3489
  },
  kqs: {
      language: 3490
  },
  kqt: {
      language: 3491
  },
  kqu: {
      language: 3492
  },
  kqv: {
      language: 3493
  },
  kqw: {
      language: 3494
  },
  kqx: {
      language: 3495
  },
  kqy: {
      language: 3496
  },
  kqz: {
      language: 3497
  },
  kra: {
      language: 3498
  },
  krb: {
      language: 3499
  },
  krc: {
      language: 3500
  },
  krd: {
      language: 3501
  },
  kre: {
      language: 3502
  },
  krf: {
      language: 3503
  },
  krh: {
      language: 3504
  },
  kri: {
      language: 3505
  },
  krj: {
      language: 3506
  },
  krk: {
      language: 3507
  },
  krl: {
      language: 3508
  },
  krm: {
      language: 3509
  },
  krn: {
      language: 3510
  },
  kro: {
      language: 3511
  },
  krp: {
      language: 3512
  },
  krr: {
      language: 3513
  },
  krs: {
      language: 3514
  },
  krt: {
      language: 3515
  },
  kru: {
      language: 3516
  },
  krv: {
      language: 3517
  },
  krw: {
      language: 3518
  },
  krx: {
      language: 3519
  },
  kry: {
      language: 3520
  },
  krz: {
      language: 3521
  },
  ksa: {
      language: 3522
  },
  ksb: {
      language: 3523
  },
  ksc: {
      language: 3524
  },
  ksd: {
      language: 3525
  },
  kse: {
      language: 3526
  },
  ksf: {
      language: 3527
  },
  ksg: {
      language: 3528
  },
  ksh: {
      language: 3529
  },
  ksi: {
      language: 3530
  },
  ksj: {
      language: 3531
  },
  ksk: {
      language: 3532
  },
  ksl: {
      language: 3533
  },
  ksm: {
      language: 3534
  },
  ksn: {
      language: 3535
  },
  kso: {
      language: 3536
  },
  ksp: {
      language: 3537
  },
  ksq: {
      language: 3538
  },
  ksr: {
      language: 3539
  },
  kss: {
      language: 3540
  },
  kst: {
      language: 3541
  },
  ksu: {
      language: 3542
  },
  ksv: {
      language: 3543
  },
  ksw: {
      language: 3544
  },
  ksx: {
      language: 3545
  },
  ksy: {
      language: 3546
  },
  ksz: {
      language: 3547
  },
  kta: {
      language: 3548
  },
  ktb: {
      language: 3549
  },
  ktc: {
      language: 3550
  },
  ktd: {
      language: 3551
  },
  kte: {
      language: 3552
  },
  ktf: {
      language: 3553
  },
  ktg: {
      language: 3554
  },
  kth: {
      language: 3555
  },
  kti: {
      language: 3556
  },
  ktj: {
      language: 3557
  },
  ktk: {
      language: 3558
  },
  ktl: {
      language: 3559
  },
  ktm: {
      language: 3560
  },
  ktn: {
      language: 3561
  },
  kto: {
      language: 3562
  },
  ktp: {
      language: 3563
  },
  ktq: {
      language: 3564
  },
  ktr: {
      language: 3565
  },
  kts: {
      language: 3566
  },
  ktt: {
      language: 3567
  },
  ktu: {
      language: 3568
  },
  ktv: {
      language: 3569
  },
  ktw: {
      language: 3570
  },
  ktx: {
      language: 3571
  },
  kty: {
      language: 3572
  },
  ktz: {
      language: 3573
  },
  kub: {
      language: 3574
  },
  kuc: {
      language: 3575
  },
  kud: {
      language: 3576
  },
  kue: {
      language: 3577
  },
  kuf: {
      language: 3578
  },
  kug: {
      language: 3579
  },
  kuh: {
      language: 3580
  },
  kui: {
      language: 3581
  },
  kuj: {
      language: 3582
  },
  kuk: {
      language: 3583
  },
  kul: {
      language: 3584
  },
  kum: {
      language: 3585
  },
  kun: {
      language: 3586
  },
  kuo: {
      language: 3587
  },
  kup: {
      language: 3588
  },
  kuq: {
      language: 3589
  },
  kus: {
      language: 3590
  },
  kut: {
      language: 3591
  },
  kuu: {
      language: 3592
  },
  kuv: {
      language: 3593
  },
  kuw: {
      language: 3594
  },
  kux: {
      language: 3595
  },
  kuy: {
      language: 3596
  },
  kuz: {
      language: 3597
  },
  kva: {
      language: 3598
  },
  kvb: {
      language: 3599,
      extlang: 8361
  },
  kvc: {
      language: 3600
  },
  kvd: {
      language: 3601
  },
  kve: {
      language: 3602
  },
  kvf: {
      language: 3603
  },
  kvg: {
      language: 3604
  },
  kvh: {
      language: 3605
  },
  kvi: {
      language: 3606
  },
  kvj: {
      language: 3607
  },
  kvk: {
      language: 3608,
      extlang: 8362
  },
  kvl: {
      language: 3609
  },
  kvm: {
      language: 3610
  },
  kvn: {
      language: 3611
  },
  kvo: {
      language: 3612
  },
  kvp: {
      language: 3613
  },
  kvq: {
      language: 3614
  },
  kvr: {
      language: 3615,
      extlang: 8363
  },
  kvs: {
      language: 3616
  },
  kvt: {
      language: 3617
  },
  kvu: {
      language: 3618
  },
  kvv: {
      language: 3619
  },
  kvw: {
      language: 3620
  },
  kvx: {
      language: 3621
  },
  kvy: {
      language: 3622
  },
  kvz: {
      language: 3623
  },
  kwa: {
      language: 3624
  },
  kwb: {
      language: 3625
  },
  kwc: {
      language: 3626
  },
  kwd: {
      language: 3627
  },
  kwe: {
      language: 3628
  },
  kwf: {
      language: 3629
  },
  kwg: {
      language: 3630
  },
  kwh: {
      language: 3631
  },
  kwi: {
      language: 3632
  },
  kwj: {
      language: 3633
  },
  kwk: {
      language: 3634
  },
  kwl: {
      language: 3635
  },
  kwm: {
      language: 3636
  },
  kwn: {
      language: 3637
  },
  kwo: {
      language: 3638
  },
  kwp: {
      language: 3639
  },
  kwq: {
      language: 3640
  },
  kwr: {
      language: 3641
  },
  kws: {
      language: 3642
  },
  kwt: {
      language: 3643
  },
  kwu: {
      language: 3644
  },
  kwv: {
      language: 3645
  },
  kww: {
      language: 3646
  },
  kwx: {
      language: 3647
  },
  kwy: {
      language: 3648
  },
  kwz: {
      language: 3649
  },
  kxa: {
      language: 3650
  },
  kxb: {
      language: 3651
  },
  kxc: {
      language: 3652
  },
  kxd: {
      language: 3653,
      extlang: 8364
  },
  kxe: {
      language: 3654
  },
  kxf: {
      language: 3655
  },
  kxh: {
      language: 3656
  },
  kxi: {
      language: 3657
  },
  kxj: {
      language: 3658
  },
  kxk: {
      language: 3659
  },
  kxl: {
      language: 3660
  },
  kxm: {
      language: 3661
  },
  kxn: {
      language: 3662
  },
  kxo: {
      language: 3663
  },
  kxp: {
      language: 3664
  },
  kxq: {
      language: 3665
  },
  kxr: {
      language: 3666
  },
  kxs: {
      language: 3667
  },
  kxt: {
      language: 3668
  },
  kxu: {
      language: 3669
  },
  kxv: {
      language: 3670
  },
  kxw: {
      language: 3671
  },
  kxx: {
      language: 3672
  },
  kxy: {
      language: 3673
  },
  kxz: {
      language: 3674
  },
  kya: {
      language: 3675
  },
  kyb: {
      language: 3676
  },
  kyc: {
      language: 3677
  },
  kyd: {
      language: 3678
  },
  kye: {
      language: 3679
  },
  kyf: {
      language: 3680
  },
  kyg: {
      language: 3681
  },
  kyh: {
      language: 3682
  },
  kyi: {
      language: 3683
  },
  kyj: {
      language: 3684
  },
  kyk: {
      language: 3685
  },
  kyl: {
      language: 3686
  },
  kym: {
      language: 3687
  },
  kyn: {
      language: 3688
  },
  kyo: {
      language: 3689
  },
  kyp: {
      language: 3690
  },
  kyq: {
      language: 3691
  },
  kyr: {
      language: 3692
  },
  kys: {
      language: 3693
  },
  kyt: {
      language: 3694
  },
  kyu: {
      language: 3695
  },
  kyv: {
      language: 3696
  },
  kyw: {
      language: 3697
  },
  kyx: {
      language: 3698
  },
  kyy: {
      language: 3699
  },
  kyz: {
      language: 3700
  },
  kza: {
      language: 3701
  },
  kzb: {
      language: 3702
  },
  kzc: {
      language: 3703
  },
  kzd: {
      language: 3704
  },
  kze: {
      language: 3705
  },
  kzf: {
      language: 3706
  },
  kzg: {
      language: 3707
  },
  kzh: {
      language: 3708
  },
  kzi: {
      language: 3709
  },
  kzj: {
      language: 3710
  },
  kzk: {
      language: 3711
  },
  kzl: {
      language: 3712
  },
  kzm: {
      language: 3713
  },
  kzn: {
      language: 3714
  },
  kzo: {
      language: 3715
  },
  kzp: {
      language: 3716
  },
  kzq: {
      language: 3717
  },
  kzr: {
      language: 3718
  },
  kzs: {
      language: 3719
  },
  kzt: {
      language: 3720
  },
  kzu: {
      language: 3721
  },
  kzv: {
      language: 3722
  },
  kzw: {
      language: 3723
  },
  kzx: {
      language: 3724
  },
  kzy: {
      language: 3725
  },
  kzz: {
      language: 3726
  },
  laa: {
      language: 3727
  },
  lab: {
      language: 3728
  },
  lac: {
      language: 3729
  },
  lad: {
      language: 3730
  },
  lae: {
      language: 3731
  },
  laf: {
      language: 3732
  },
  lag: {
      language: 3733
  },
  lah: {
      language: 3734
  },
  lai: {
      language: 3735
  },
  laj: {
      language: 3736
  },
  lak: {
      language: 3737
  },
  lal: {
      language: 3738
  },
  lam: {
      language: 3739
  },
  lan: {
      language: 3740
  },
  lap: {
      language: 3741
  },
  laq: {
      language: 3742
  },
  lar: {
      language: 3743
  },
  las: {
      language: 3744
  },
  lau: {
      language: 3745
  },
  law: {
      language: 3746
  },
  lax: {
      language: 3747
  },
  lay: {
      language: 3748
  },
  laz: {
      language: 3749
  },
  lba: {
      language: 3750
  },
  lbb: {
      language: 3751
  },
  lbc: {
      language: 3752
  },
  lbe: {
      language: 3753
  },
  lbf: {
      language: 3754
  },
  lbg: {
      language: 3755
  },
  lbi: {
      language: 3756
  },
  lbj: {
      language: 3757
  },
  lbk: {
      language: 3758
  },
  lbl: {
      language: 3759
  },
  lbm: {
      language: 3760
  },
  lbn: {
      language: 3761
  },
  lbo: {
      language: 3762
  },
  lbq: {
      language: 3763
  },
  lbr: {
      language: 3764
  },
  lbs: {
      language: 3765,
      extlang: 8365
  },
  lbt: {
      language: 3766
  },
  lbu: {
      language: 3767
  },
  lbv: {
      language: 3768
  },
  lbw: {
      language: 3769
  },
  lbx: {
      language: 3770
  },
  lby: {
      language: 3771
  },
  lbz: {
      language: 3772
  },
  lcc: {
      language: 3773
  },
  lcd: {
      language: 3774
  },
  lce: {
      language: 3775,
      extlang: 8366
  },
  lcf: {
      language: 3776,
      extlang: 8367
  },
  lch: {
      language: 3777
  },
  lcl: {
      language: 3778
  },
  lcm: {
      language: 3779
  },
  lcp: {
      language: 3780
  },
  lcq: {
      language: 3781
  },
  lcs: {
      language: 3782
  },
  lda: {
      language: 3783
  },
  ldb: {
      language: 3784
  },
  ldd: {
      language: 3785
  },
  ldg: {
      language: 3786
  },
  ldh: {
      language: 3787
  },
  ldi: {
      language: 3788
  },
  ldj: {
      language: 3789
  },
  ldk: {
      language: 3790
  },
  ldl: {
      language: 3791
  },
  ldm: {
      language: 3792
  },
  ldn: {
      language: 3793
  },
  ldo: {
      language: 3794
  },
  ldp: {
      language: 3795
  },
  ldq: {
      language: 3796
  },
  lea: {
      language: 3797
  },
  leb: {
      language: 3798
  },
  lec: {
      language: 3799
  },
  led: {
      language: 3800
  },
  lee: {
      language: 3801
  },
  lef: {
      language: 3802
  },
  leg: {
      language: 3803
  },
  leh: {
      language: 3804
  },
  lei: {
      language: 3805
  },
  lej: {
      language: 3806
  },
  lek: {
      language: 3807
  },
  lel: {
      language: 3808
  },
  lem: {
      language: 3809
  },
  len: {
      language: 3810
  },
  leo: {
      language: 3811
  },
  lep: {
      language: 3812
  },
  leq: {
      language: 3813
  },
  ler: {
      language: 3814
  },
  les: {
      language: 3815
  },
  let: {
      language: 3816
  },
  leu: {
      language: 3817
  },
  lev: {
      language: 3818
  },
  lew: {
      language: 3819
  },
  lex: {
      language: 3820
  },
  ley: {
      language: 3821
  },
  lez: {
      language: 3822
  },
  lfa: {
      language: 3823
  },
  lfn: {
      language: 3824
  },
  lga: {
      language: 3825
  },
  lgb: {
      language: 3826
  },
  lgg: {
      language: 3827
  },
  lgh: {
      language: 3828
  },
  lgi: {
      language: 3829
  },
  lgk: {
      language: 3830
  },
  lgl: {
      language: 3831
  },
  lgm: {
      language: 3832
  },
  lgn: {
      language: 3833
  },
  lgo: {
      language: 3834
  },
  lgq: {
      language: 3835
  },
  lgr: {
      language: 3836
  },
  lgt: {
      language: 3837
  },
  lgu: {
      language: 3838
  },
  lgz: {
      language: 3839
  },
  lha: {
      language: 3840
  },
  lhh: {
      language: 3841
  },
  lhi: {
      language: 3842
  },
  lhl: {
      language: 3843
  },
  lhm: {
      language: 3844
  },
  lhn: {
      language: 3845
  },
  lhp: {
      language: 3846
  },
  lhs: {
      language: 3847
  },
  lht: {
      language: 3848
  },
  lhu: {
      language: 3849
  },
  lia: {
      language: 3850
  },
  lib: {
      language: 3851
  },
  lic: {
      language: 3852
  },
  lid: {
      language: 3853
  },
  lie: {
      language: 3854
  },
  lif: {
      language: 3855
  },
  lig: {
      language: 3856
  },
  lih: {
      language: 3857
  },
  lii: {
      language: 3858
  },
  lij: {
      language: 3859
  },
  lik: {
      language: 3860
  },
  lil: {
      language: 3861
  },
  lio: {
      language: 3862
  },
  lip: {
      language: 3863
  },
  liq: {
      language: 3864
  },
  lir: {
      language: 3865
  },
  lis: {
      language: 3866
  },
  liu: {
      language: 3867
  },
  liv: {
      language: 3868
  },
  liw: {
      language: 3869,
      extlang: 8368
  },
  lix: {
      language: 3870
  },
  liy: {
      language: 3871
  },
  liz: {
      language: 3872
  },
  lja: {
      language: 3873
  },
  lje: {
      language: 3874
  },
  lji: {
      language: 3875
  },
  ljl: {
      language: 3876
  },
  ljp: {
      language: 3877
  },
  ljw: {
      language: 3878
  },
  ljx: {
      language: 3879
  },
  lka: {
      language: 3880
  },
  lkb: {
      language: 3881
  },
  lkc: {
      language: 3882
  },
  lkd: {
      language: 3883
  },
  lke: {
      language: 3884
  },
  lkh: {
      language: 3885
  },
  lki: {
      language: 3886
  },
  lkj: {
      language: 3887
  },
  lkl: {
      language: 3888
  },
  lkm: {
      language: 3889
  },
  lkn: {
      language: 3890
  },
  lko: {
      language: 3891
  },
  lkr: {
      language: 3892
  },
  lks: {
      language: 3893
  },
  lkt: {
      language: 3894
  },
  lku: {
      language: 3895
  },
  lky: {
      language: 3896
  },
  lla: {
      language: 3897
  },
  llb: {
      language: 3898
  },
  llc: {
      language: 3899
  },
  lld: {
      language: 3900
  },
  lle: {
      language: 3901
  },
  llf: {
      language: 3902
  },
  llg: {
      language: 3903
  },
  llh: {
      language: 3904
  },
  lli: {
      language: 3905
  },
  llj: {
      language: 3906
  },
  llk: {
      language: 3907
  },
  lll: {
      language: 3908
  },
  llm: {
      language: 3909
  },
  lln: {
      language: 3910
  },
  llo: {
      language: 3911
  },
  llp: {
      language: 3912
  },
  llq: {
      language: 3913
  },
  lls: {
      language: 3914,
      extlang: 8369
  },
  llu: {
      language: 3915
  },
  llx: {
      language: 3916
  },
  lma: {
      language: 3917
  },
  lmb: {
      language: 3918
  },
  lmc: {
      language: 3919
  },
  lmd: {
      language: 3920
  },
  lme: {
      language: 3921
  },
  lmf: {
      language: 3922
  },
  lmg: {
      language: 3923
  },
  lmh: {
      language: 3924
  },
  lmi: {
      language: 3925
  },
  lmj: {
      language: 3926
  },
  lmk: {
      language: 3927
  },
  lml: {
      language: 3928
  },
  lmm: {
      language: 3929
  },
  lmn: {
      language: 3930
  },
  lmo: {
      language: 3931
  },
  lmp: {
      language: 3932
  },
  lmq: {
      language: 3933
  },
  lmr: {
      language: 3934
  },
  lmu: {
      language: 3935
  },
  lmv: {
      language: 3936
  },
  lmw: {
      language: 3937
  },
  lmx: {
      language: 3938
  },
  lmy: {
      language: 3939
  },
  lmz: {
      language: 3940
  },
  lna: {
      language: 3941
  },
  lnb: {
      language: 3942
  },
  lnd: {
      language: 3943
  },
  lng: {
      language: 3944
  },
  lnh: {
      language: 3945
  },
  lni: {
      language: 3946
  },
  lnj: {
      language: 3947
  },
  lnl: {
      language: 3948
  },
  lnm: {
      language: 3949
  },
  lnn: {
      language: 3950
  },
  lno: {
      language: 3951
  },
  lns: {
      language: 3952
  },
  lnu: {
      language: 3953
  },
  lnw: {
      language: 3954
  },
  lnz: {
      language: 3955
  },
  loa: {
      language: 3956
  },
  lob: {
      language: 3957
  },
  loc: {
      language: 3958
  },
  loe: {
      language: 3959
  },
  lof: {
      language: 3960
  },
  log: {
      language: 3961
  },
  loh: {
      language: 3962
  },
  loi: {
      language: 3963
  },
  loj: {
      language: 3964
  },
  lok: {
      language: 3965
  },
  lol: {
      language: 3966
  },
  lom: {
      language: 3967
  },
  lon: {
      language: 3968
  },
  loo: {
      language: 3969
  },
  lop: {
      language: 3970
  },
  loq: {
      language: 3971
  },
  lor: {
      language: 3972
  },
  los: {
      language: 3973
  },
  lot: {
      language: 3974
  },
  lou: {
      language: 3975
  },
  lov: {
      language: 3976
  },
  low: {
      language: 3977
  },
  lox: {
      language: 3978
  },
  loy: {
      language: 3979
  },
  loz: {
      language: 3980
  },
  lpa: {
      language: 3981
  },
  lpe: {
      language: 3982
  },
  lpn: {
      language: 3983
  },
  lpo: {
      language: 3984
  },
  lpx: {
      language: 3985
  },
  lqr: {
      language: 3986
  },
  lra: {
      language: 3987
  },
  lrc: {
      language: 3988
  },
  lre: {
      language: 3989
  },
  lrg: {
      language: 3990
  },
  lri: {
      language: 3991
  },
  lrk: {
      language: 3992
  },
  lrl: {
      language: 3993
  },
  lrm: {
      language: 3994
  },
  lrn: {
      language: 3995
  },
  lro: {
      language: 3996
  },
  lrr: {
      language: 3997
  },
  lrt: {
      language: 3998
  },
  lrv: {
      language: 3999
  },
  lrz: {
      language: 4e3
  },
  lsa: {
      language: 4001
  },
  lsb: {
      language: 4002,
      extlang: 8370
  },
  lsc: {
      language: 4003,
      extlang: 8371
  },
  lsd: {
      language: 4004
  },
  lse: {
      language: 4005
  },
  lsg: {
      language: 4006,
      extlang: 8372
  },
  lsh: {
      language: 4007
  },
  lsi: {
      language: 4008
  },
  lsl: {
      language: 4009,
      extlang: 8373
  },
  lsm: {
      language: 4010
  },
  lsn: {
      language: 4011,
      extlang: 8374
  },
  lso: {
      language: 4012,
      extlang: 8375
  },
  lsp: {
      language: 4013,
      extlang: 8376
  },
  lsr: {
      language: 4014
  },
  lss: {
      language: 4015
  },
  lst: {
      language: 4016,
      extlang: 8377
  },
  lsv: {
      language: 4017,
      extlang: 8378
  },
  lsw: {
      language: 4018,
      extlang: 8379
  },
  lsy: {
      language: 4019,
      extlang: 8380
  },
  ltc: {
      language: 4020
  },
  ltg: {
      language: 4021,
      extlang: 8381
  },
  lth: {
      language: 4022
  },
  lti: {
      language: 4023
  },
  ltn: {
      language: 4024
  },
  lto: {
      language: 4025
  },
  lts: {
      language: 4026
  },
  ltu: {
      language: 4027
  },
  lua: {
      language: 4028
  },
  luc: {
      language: 4029
  },
  lud: {
      language: 4030
  },
  lue: {
      language: 4031
  },
  luf: {
      language: 4032
  },
  lui: {
      language: 4033
  },
  luj: {
      language: 4034
  },
  luk: {
      language: 4035
  },
  lul: {
      language: 4036
  },
  lum: {
      language: 4037
  },
  lun: {
      language: 4038
  },
  luo: {
      language: 4039
  },
  lup: {
      language: 4040
  },
  luq: {
      language: 4041
  },
  lur: {
      language: 4042
  },
  lus: {
      language: 4043
  },
  lut: {
      language: 4044
  },
  luu: {
      language: 4045
  },
  luv: {
      language: 4046
  },
  luw: {
      language: 4047
  },
  luy: {
      language: 4048
  },
  luz: {
      language: 4049
  },
  lva: {
      language: 4050
  },
  lvi: {
      language: 4051
  },
  lvk: {
      language: 4052
  },
  lvs: {
      language: 4053,
      extlang: 8382
  },
  lvu: {
      language: 4054
  },
  lwa: {
      language: 4055
  },
  lwe: {
      language: 4056
  },
  lwg: {
      language: 4057
  },
  lwh: {
      language: 4058
  },
  lwl: {
      language: 4059
  },
  lwm: {
      language: 4060
  },
  lwo: {
      language: 4061
  },
  lws: {
      language: 4062,
      extlang: 8383
  },
  lwt: {
      language: 4063
  },
  lwu: {
      language: 4064
  },
  lww: {
      language: 4065
  },
  lxm: {
      language: 4066
  },
  lya: {
      language: 4067
  },
  lyg: {
      language: 4068
  },
  lyn: {
      language: 4069
  },
  lzh: {
      language: 4070,
      extlang: 8384
  },
  lzl: {
      language: 4071
  },
  lzn: {
      language: 4072
  },
  lzz: {
      language: 4073
  },
  maa: {
      language: 4074
  },
  mab: {
      language: 4075
  },
  mad: {
      language: 4076
  },
  mae: {
      language: 4077
  },
  maf: {
      language: 4078
  },
  mag: {
      language: 4079
  },
  mai: {
      language: 4080
  },
  maj: {
      language: 4081
  },
  mak: {
      language: 4082
  },
  mam: {
      language: 4083
  },
  man: {
      language: 4084
  },
  map: {
      language: 4085
  },
  maq: {
      language: 4086
  },
  mas: {
      language: 4087
  },
  mat: {
      language: 4088
  },
  mau: {
      language: 4089
  },
  mav: {
      language: 4090
  },
  maw: {
      language: 4091
  },
  max: {
      language: 4092,
      extlang: 8385
  },
  maz: {
      language: 4093
  },
  mba: {
      language: 4094
  },
  mbb: {
      language: 4095
  },
  mbc: {
      language: 4096
  },
  mbd: {
      language: 4097
  },
  mbe: {
      language: 4098
  },
  mbf: {
      language: 4099
  },
  mbh: {
      language: 4100
  },
  mbi: {
      language: 4101
  },
  mbj: {
      language: 4102
  },
  mbk: {
      language: 4103
  },
  mbl: {
      language: 4104
  },
  mbm: {
      language: 4105
  },
  mbn: {
      language: 4106
  },
  mbo: {
      language: 4107
  },
  mbp: {
      language: 4108
  },
  mbq: {
      language: 4109
  },
  mbr: {
      language: 4110
  },
  mbs: {
      language: 4111
  },
  mbt: {
      language: 4112
  },
  mbu: {
      language: 4113
  },
  mbv: {
      language: 4114
  },
  mbw: {
      language: 4115
  },
  mbx: {
      language: 4116
  },
  mby: {
      language: 4117
  },
  mbz: {
      language: 4118
  },
  mca: {
      language: 4119
  },
  mcb: {
      language: 4120
  },
  mcc: {
      language: 4121
  },
  mcd: {
      language: 4122
  },
  mce: {
      language: 4123
  },
  mcf: {
      language: 4124
  },
  mcg: {
      language: 4125
  },
  mch: {
      language: 4126
  },
  mci: {
      language: 4127
  },
  mcj: {
      language: 4128
  },
  mck: {
      language: 4129
  },
  mcl: {
      language: 4130
  },
  mcm: {
      language: 4131
  },
  mcn: {
      language: 4132
  },
  mco: {
      language: 4133
  },
  mcp: {
      language: 4134
  },
  mcq: {
      language: 4135
  },
  mcr: {
      language: 4136
  },
  mcs: {
      language: 4137
  },
  mct: {
      language: 4138
  },
  mcu: {
      language: 4139
  },
  mcv: {
      language: 4140
  },
  mcw: {
      language: 4141
  },
  mcx: {
      language: 4142
  },
  mcy: {
      language: 4143
  },
  mcz: {
      language: 4144
  },
  mda: {
      language: 4145
  },
  mdb: {
      language: 4146
  },
  mdc: {
      language: 4147
  },
  mdd: {
      language: 4148
  },
  mde: {
      language: 4149
  },
  mdf: {
      language: 4150
  },
  mdg: {
      language: 4151
  },
  mdh: {
      language: 4152
  },
  mdi: {
      language: 4153
  },
  mdj: {
      language: 4154
  },
  mdk: {
      language: 4155
  },
  mdl: {
      language: 4156,
      extlang: 8386
  },
  mdm: {
      language: 4157
  },
  mdn: {
      language: 4158
  },
  mdp: {
      language: 4159
  },
  mdq: {
      language: 4160
  },
  mdr: {
      language: 4161
  },
  mds: {
      language: 4162
  },
  mdt: {
      language: 4163
  },
  mdu: {
      language: 4164
  },
  mdv: {
      language: 4165
  },
  mdw: {
      language: 4166
  },
  mdx: {
      language: 4167
  },
  mdy: {
      language: 4168
  },
  mdz: {
      language: 4169
  },
  mea: {
      language: 4170
  },
  meb: {
      language: 4171
  },
  mec: {
      language: 4172
  },
  med: {
      language: 4173
  },
  mee: {
      language: 4174
  },
  mef: {
      language: 4175
  },
  meg: {
      language: 4176
  },
  meh: {
      language: 4177
  },
  mei: {
      language: 4178
  },
  mej: {
      language: 4179
  },
  mek: {
      language: 4180
  },
  mel: {
      language: 4181
  },
  mem: {
      language: 4182
  },
  men: {
      language: 4183
  },
  meo: {
      language: 4184,
      extlang: 8387
  },
  mep: {
      language: 4185
  },
  meq: {
      language: 4186
  },
  mer: {
      language: 4187
  },
  mes: {
      language: 4188
  },
  met: {
      language: 4189
  },
  meu: {
      language: 4190
  },
  mev: {
      language: 4191
  },
  mew: {
      language: 4192
  },
  mey: {
      language: 4193
  },
  mez: {
      language: 4194
  },
  mfa: {
      language: 4195,
      extlang: 8388
  },
  mfb: {
      language: 4196,
      extlang: 8389
  },
  mfc: {
      language: 4197
  },
  mfd: {
      language: 4198
  },
  mfe: {
      language: 4199
  },
  mff: {
      language: 4200
  },
  mfg: {
      language: 4201
  },
  mfh: {
      language: 4202
  },
  mfi: {
      language: 4203
  },
  mfj: {
      language: 4204
  },
  mfk: {
      language: 4205
  },
  mfl: {
      language: 4206
  },
  mfm: {
      language: 4207
  },
  mfn: {
      language: 4208
  },
  mfo: {
      language: 4209
  },
  mfp: {
      language: 4210
  },
  mfq: {
      language: 4211
  },
  mfr: {
      language: 4212
  },
  mfs: {
      language: 4213,
      extlang: 8390
  },
  mft: {
      language: 4214
  },
  mfu: {
      language: 4215
  },
  mfv: {
      language: 4216
  },
  mfw: {
      language: 4217
  },
  mfx: {
      language: 4218
  },
  mfy: {
      language: 4219
  },
  mfz: {
      language: 4220
  },
  mga: {
      language: 4221
  },
  mgb: {
      language: 4222
  },
  mgc: {
      language: 4223
  },
  mgd: {
      language: 4224
  },
  mge: {
      language: 4225
  },
  mgf: {
      language: 4226
  },
  mgg: {
      language: 4227
  },
  mgh: {
      language: 4228
  },
  mgi: {
      language: 4229
  },
  mgj: {
      language: 4230
  },
  mgk: {
      language: 4231
  },
  mgl: {
      language: 4232
  },
  mgm: {
      language: 4233
  },
  mgn: {
      language: 4234
  },
  mgo: {
      language: 4235
  },
  mgp: {
      language: 4236
  },
  mgq: {
      language: 4237
  },
  mgr: {
      language: 4238
  },
  mgs: {
      language: 4239
  },
  mgt: {
      language: 4240
  },
  mgu: {
      language: 4241
  },
  mgv: {
      language: 4242
  },
  mgw: {
      language: 4243
  },
  mgx: {
      language: 4244
  },
  mgy: {
      language: 4245
  },
  mgz: {
      language: 4246
  },
  mha: {
      language: 4247
  },
  mhb: {
      language: 4248
  },
  mhc: {
      language: 4249
  },
  mhd: {
      language: 4250
  },
  mhe: {
      language: 4251
  },
  mhf: {
      language: 4252
  },
  mhg: {
      language: 4253
  },
  mhh: {
      language: 4254
  },
  mhi: {
      language: 4255
  },
  mhj: {
      language: 4256
  },
  mhk: {
      language: 4257
  },
  mhl: {
      language: 4258
  },
  mhm: {
      language: 4259
  },
  mhn: {
      language: 4260
  },
  mho: {
      language: 4261
  },
  mhp: {
      language: 4262
  },
  mhq: {
      language: 4263
  },
  mhr: {
      language: 4264
  },
  mhs: {
      language: 4265
  },
  mht: {
      language: 4266
  },
  mhu: {
      language: 4267
  },
  mhw: {
      language: 4268
  },
  mhx: {
      language: 4269
  },
  mhy: {
      language: 4270
  },
  mhz: {
      language: 4271
  },
  mia: {
      language: 4272
  },
  mib: {
      language: 4273
  },
  mic: {
      language: 4274
  },
  mid: {
      language: 4275
  },
  mie: {
      language: 4276
  },
  mif: {
      language: 4277
  },
  mig: {
      language: 4278
  },
  mih: {
      language: 4279
  },
  mii: {
      language: 4280
  },
  mij: {
      language: 4281
  },
  mik: {
      language: 4282
  },
  mil: {
      language: 4283
  },
  mim: {
      language: 4284
  },
  min: {
      language: 4285,
      extlang: 8391
  },
  mio: {
      language: 4286
  },
  mip: {
      language: 4287
  },
  miq: {
      language: 4288
  },
  mir: {
      language: 4289
  },
  mis: {
      language: 4290
  },
  mit: {
      language: 4291
  },
  miu: {
      language: 4292
  },
  miw: {
      language: 4293
  },
  mix: {
      language: 4294
  },
  miy: {
      language: 4295
  },
  miz: {
      language: 4296
  },
  mja: {
      language: 4297
  },
  mjb: {
      language: 4298
  },
  mjc: {
      language: 4299
  },
  mjd: {
      language: 4300
  },
  mje: {
      language: 4301
  },
  mjg: {
      language: 4302
  },
  mjh: {
      language: 4303
  },
  mji: {
      language: 4304
  },
  mjj: {
      language: 4305
  },
  mjk: {
      language: 4306
  },
  mjl: {
      language: 4307
  },
  mjm: {
      language: 4308
  },
  mjn: {
      language: 4309
  },
  mjo: {
      language: 4310
  },
  mjp: {
      language: 4311
  },
  mjq: {
      language: 4312
  },
  mjr: {
      language: 4313
  },
  mjs: {
      language: 4314
  },
  mjt: {
      language: 4315
  },
  mju: {
      language: 4316
  },
  mjv: {
      language: 4317
  },
  mjw: {
      language: 4318
  },
  mjx: {
      language: 4319
  },
  mjy: {
      language: 4320
  },
  mjz: {
      language: 4321
  },
  mka: {
      language: 4322
  },
  mkb: {
      language: 4323
  },
  mkc: {
      language: 4324
  },
  mke: {
      language: 4325
  },
  mkf: {
      language: 4326
  },
  mkg: {
      language: 4327
  },
  mkh: {
      language: 4328
  },
  mki: {
      language: 4329
  },
  mkj: {
      language: 4330
  },
  mkk: {
      language: 4331
  },
  mkl: {
      language: 4332
  },
  mkm: {
      language: 4333
  },
  mkn: {
      language: 4334
  },
  mko: {
      language: 4335
  },
  mkp: {
      language: 4336
  },
  mkq: {
      language: 4337
  },
  mkr: {
      language: 4338
  },
  mks: {
      language: 4339
  },
  mkt: {
      language: 4340
  },
  mku: {
      language: 4341
  },
  mkv: {
      language: 4342
  },
  mkw: {
      language: 4343
  },
  mkx: {
      language: 4344
  },
  mky: {
      language: 4345
  },
  mkz: {
      language: 4346
  },
  mla: {
      language: 4347
  },
  mlb: {
      language: 4348
  },
  mlc: {
      language: 4349
  },
  mld: {
      language: 4350
  },
  mle: {
      language: 4351
  },
  mlf: {
      language: 4352
  },
  mlh: {
      language: 4353
  },
  mli: {
      language: 4354
  },
  mlj: {
      language: 4355
  },
  mlk: {
      language: 4356
  },
  mll: {
      language: 4357
  },
  mlm: {
      language: 4358
  },
  mln: {
      language: 4359
  },
  mlo: {
      language: 4360
  },
  mlp: {
      language: 4361
  },
  mlq: {
      language: 4362
  },
  mlr: {
      language: 4363
  },
  mls: {
      language: 4364
  },
  mlu: {
      language: 4365
  },
  mlv: {
      language: 4366
  },
  mlw: {
      language: 4367
  },
  mlx: {
      language: 4368
  },
  mlz: {
      language: 4369
  },
  mma: {
      language: 4370
  },
  mmb: {
      language: 4371
  },
  mmc: {
      language: 4372
  },
  mmd: {
      language: 4373
  },
  mme: {
      language: 4374
  },
  mmf: {
      language: 4375
  },
  mmg: {
      language: 4376
  },
  mmh: {
      language: 4377
  },
  mmi: {
      language: 4378
  },
  mmj: {
      language: 4379
  },
  mmk: {
      language: 4380
  },
  mml: {
      language: 4381
  },
  mmm: {
      language: 4382
  },
  mmn: {
      language: 4383
  },
  mmo: {
      language: 4384
  },
  mmp: {
      language: 4385
  },
  mmq: {
      language: 4386
  },
  mmr: {
      language: 4387
  },
  mmt: {
      language: 4388
  },
  mmu: {
      language: 4389
  },
  mmv: {
      language: 4390
  },
  mmw: {
      language: 4391
  },
  mmx: {
      language: 4392
  },
  mmy: {
      language: 4393
  },
  mmz: {
      language: 4394
  },
  mna: {
      language: 4395
  },
  mnb: {
      language: 4396
  },
  mnc: {
      language: 4397
  },
  mnd: {
      language: 4398
  },
  mne: {
      language: 4399
  },
  mnf: {
      language: 4400
  },
  mng: {
      language: 4401
  },
  mnh: {
      language: 4402
  },
  mni: {
      language: 4403
  },
  mnj: {
      language: 4404
  },
  mnk: {
      language: 4405
  },
  mnl: {
      language: 4406
  },
  mnm: {
      language: 4407
  },
  mnn: {
      language: 4408
  },
  mno: {
      language: 4409
  },
  mnp: {
      language: 4410,
      extlang: 8392
  },
  mnq: {
      language: 4411
  },
  mnr: {
      language: 4412
  },
  mns: {
      language: 4413
  },
  mnt: {
      language: 4414
  },
  mnu: {
      language: 4415
  },
  mnv: {
      language: 4416
  },
  mnw: {
      language: 4417
  },
  mnx: {
      language: 4418
  },
  mny: {
      language: 4419
  },
  mnz: {
      language: 4420
  },
  moa: {
      language: 4421
  },
  moc: {
      language: 4422
  },
  mod: {
      language: 4423
  },
  moe: {
      language: 4424
  },
  mof: {
      language: 4425
  },
  mog: {
      language: 4426
  },
  moh: {
      language: 4427
  },
  moi: {
      language: 4428
  },
  moj: {
      language: 4429
  },
  mok: {
      language: 4430
  },
  mom: {
      language: 4431
  },
  moo: {
      language: 4432
  },
  mop: {
      language: 4433
  },
  moq: {
      language: 4434
  },
  mor: {
      language: 4435
  },
  mos: {
      language: 4436
  },
  mot: {
      language: 4437
  },
  mou: {
      language: 4438
  },
  mov: {
      language: 4439
  },
  mow: {
      language: 4440
  },
  mox: {
      language: 4441
  },
  moy: {
      language: 4442
  },
  moz: {
      language: 4443
  },
  mpa: {
      language: 4444
  },
  mpb: {
      language: 4445
  },
  mpc: {
      language: 4446
  },
  mpd: {
      language: 4447
  },
  mpe: {
      language: 4448
  },
  mpg: {
      language: 4449
  },
  mph: {
      language: 4450
  },
  mpi: {
      language: 4451
  },
  mpj: {
      language: 4452
  },
  mpk: {
      language: 4453
  },
  mpl: {
      language: 4454
  },
  mpm: {
      language: 4455
  },
  mpn: {
      language: 4456
  },
  mpo: {
      language: 4457
  },
  mpp: {
      language: 4458
  },
  mpq: {
      language: 4459
  },
  mpr: {
      language: 4460
  },
  mps: {
      language: 4461
  },
  mpt: {
      language: 4462
  },
  mpu: {
      language: 4463
  },
  mpv: {
      language: 4464
  },
  mpw: {
      language: 4465
  },
  mpx: {
      language: 4466
  },
  mpy: {
      language: 4467
  },
  mpz: {
      language: 4468
  },
  mqa: {
      language: 4469
  },
  mqb: {
      language: 4470
  },
  mqc: {
      language: 4471
  },
  mqe: {
      language: 4472
  },
  mqf: {
      language: 4473
  },
  mqg: {
      language: 4474,
      extlang: 8393
  },
  mqh: {
      language: 4475
  },
  mqi: {
      language: 4476
  },
  mqj: {
      language: 4477
  },
  mqk: {
      language: 4478
  },
  mql: {
      language: 4479
  },
  mqm: {
      language: 4480
  },
  mqn: {
      language: 4481
  },
  mqo: {
      language: 4482
  },
  mqp: {
      language: 4483
  },
  mqq: {
      language: 4484
  },
  mqr: {
      language: 4485
  },
  mqs: {
      language: 4486
  },
  mqt: {
      language: 4487
  },
  mqu: {
      language: 4488
  },
  mqv: {
      language: 4489
  },
  mqw: {
      language: 4490
  },
  mqx: {
      language: 4491
  },
  mqy: {
      language: 4492
  },
  mqz: {
      language: 4493
  },
  mra: {
      language: 4494
  },
  mrb: {
      language: 4495
  },
  mrc: {
      language: 4496
  },
  mrd: {
      language: 4497
  },
  mre: {
      language: 4498,
      extlang: 8394
  },
  mrf: {
      language: 4499
  },
  mrg: {
      language: 4500
  },
  mrh: {
      language: 4501
  },
  mrj: {
      language: 4502
  },
  mrk: {
      language: 4503
  },
  mrl: {
      language: 4504
  },
  mrm: {
      language: 4505
  },
  mrn: {
      language: 4506
  },
  mro: {
      language: 4507
  },
  mrp: {
      language: 4508
  },
  mrq: {
      language: 4509
  },
  mrr: {
      language: 4510
  },
  mrs: {
      language: 4511
  },
  mrt: {
      language: 4512
  },
  mru: {
      language: 4513
  },
  mrv: {
      language: 4514
  },
  mrw: {
      language: 4515
  },
  mrx: {
      language: 4516
  },
  mry: {
      language: 4517
  },
  mrz: {
      language: 4518
  },
  msb: {
      language: 4519
  },
  msc: {
      language: 4520
  },
  msd: {
      language: 4521,
      extlang: 8395
  },
  mse: {
      language: 4522
  },
  msf: {
      language: 4523
  },
  msg: {
      language: 4524
  },
  msh: {
      language: 4525
  },
  msi: {
      language: 4526,
      extlang: 8396
  },
  msj: {
      language: 4527
  },
  msk: {
      language: 4528
  },
  msl: {
      language: 4529
  },
  msm: {
      language: 4530
  },
  msn: {
      language: 4531
  },
  mso: {
      language: 4532
  },
  msp: {
      language: 4533
  },
  msq: {
      language: 4534
  },
  msr: {
      language: 4535,
      extlang: 8397
  },
  mss: {
      language: 4536
  },
  mst: {
      language: 4537
  },
  msu: {
      language: 4538
  },
  msv: {
      language: 4539
  },
  msw: {
      language: 4540
  },
  msx: {
      language: 4541
  },
  msy: {
      language: 4542
  },
  msz: {
      language: 4543
  },
  mta: {
      language: 4544
  },
  mtb: {
      language: 4545
  },
  mtc: {
      language: 4546
  },
  mtd: {
      language: 4547
  },
  mte: {
      language: 4548
  },
  mtf: {
      language: 4549
  },
  mtg: {
      language: 4550
  },
  mth: {
      language: 4551
  },
  mti: {
      language: 4552
  },
  mtj: {
      language: 4553
  },
  mtk: {
      language: 4554
  },
  mtl: {
      language: 4555
  },
  mtm: {
      language: 4556
  },
  mtn: {
      language: 4557
  },
  mto: {
      language: 4558
  },
  mtp: {
      language: 4559
  },
  mtq: {
      language: 4560
  },
  mtr: {
      language: 4561
  },
  mts: {
      language: 4562
  },
  mtt: {
      language: 4563
  },
  mtu: {
      language: 4564
  },
  mtv: {
      language: 4565
  },
  mtw: {
      language: 4566
  },
  mtx: {
      language: 4567
  },
  mty: {
      language: 4568
  },
  mua: {
      language: 4569
  },
  mub: {
      language: 4570
  },
  muc: {
      language: 4571
  },
  mud: {
      language: 4572
  },
  mue: {
      language: 4573
  },
  mug: {
      language: 4574
  },
  muh: {
      language: 4575
  },
  mui: {
      language: 4576,
      extlang: 8398
  },
  muj: {
      language: 4577
  },
  muk: {
      language: 4578
  },
  mul: {
      language: 4579
  },
  mum: {
      language: 4580
  },
  mun: {
      language: 4581
  },
  muo: {
      language: 4582
  },
  mup: {
      language: 4583
  },
  muq: {
      language: 4584
  },
  mur: {
      language: 4585
  },
  mus: {
      language: 4586
  },
  mut: {
      language: 4587
  },
  muu: {
      language: 4588
  },
  muv: {
      language: 4589
  },
  mux: {
      language: 4590
  },
  muy: {
      language: 4591
  },
  muz: {
      language: 4592
  },
  mva: {
      language: 4593
  },
  mvb: {
      language: 4594
  },
  mvd: {
      language: 4595
  },
  mve: {
      language: 4596
  },
  mvf: {
      language: 4597
  },
  mvg: {
      language: 4598
  },
  mvh: {
      language: 4599
  },
  mvi: {
      language: 4600
  },
  mvk: {
      language: 4601
  },
  mvl: {
      language: 4602
  },
  mvm: {
      language: 4603
  },
  mvn: {
      language: 4604
  },
  mvo: {
      language: 4605
  },
  mvp: {
      language: 4606
  },
  mvq: {
      language: 4607
  },
  mvr: {
      language: 4608
  },
  mvs: {
      language: 4609
  },
  mvt: {
      language: 4610
  },
  mvu: {
      language: 4611
  },
  mvv: {
      language: 4612
  },
  mvw: {
      language: 4613
  },
  mvx: {
      language: 4614
  },
  mvy: {
      language: 4615
  },
  mvz: {
      language: 4616
  },
  mwa: {
      language: 4617
  },
  mwb: {
      language: 4618
  },
  mwc: {
      language: 4619
  },
  mwd: {
      language: 4620
  },
  mwe: {
      language: 4621
  },
  mwf: {
      language: 4622
  },
  mwg: {
      language: 4623
  },
  mwh: {
      language: 4624
  },
  mwi: {
      language: 4625
  },
  mwj: {
      language: 4626
  },
  mwk: {
      language: 4627
  },
  mwl: {
      language: 4628
  },
  mwm: {
      language: 4629
  },
  mwn: {
      language: 4630
  },
  mwo: {
      language: 4631
  },
  mwp: {
      language: 4632
  },
  mwq: {
      language: 4633
  },
  mwr: {
      language: 4634
  },
  mws: {
      language: 4635
  },
  mwt: {
      language: 4636
  },
  mwu: {
      language: 4637
  },
  mwv: {
      language: 4638
  },
  mww: {
      language: 4639
  },
  mwx: {
      language: 4640
  },
  mwy: {
      language: 4641
  },
  mwz: {
      language: 4642
  },
  mxa: {
      language: 4643
  },
  mxb: {
      language: 4644
  },
  mxc: {
      language: 4645
  },
  mxd: {
      language: 4646
  },
  mxe: {
      language: 4647
  },
  mxf: {
      language: 4648
  },
  mxg: {
      language: 4649
  },
  mxh: {
      language: 4650
  },
  mxi: {
      language: 4651
  },
  mxj: {
      language: 4652
  },
  mxk: {
      language: 4653
  },
  mxl: {
      language: 4654
  },
  mxm: {
      language: 4655
  },
  mxn: {
      language: 4656
  },
  mxo: {
      language: 4657
  },
  mxp: {
      language: 4658
  },
  mxq: {
      language: 4659
  },
  mxr: {
      language: 4660
  },
  mxs: {
      language: 4661
  },
  mxt: {
      language: 4662
  },
  mxu: {
      language: 4663
  },
  mxv: {
      language: 4664
  },
  mxw: {
      language: 4665
  },
  mxx: {
      language: 4666
  },
  mxy: {
      language: 4667
  },
  mxz: {
      language: 4668
  },
  myb: {
      language: 4669
  },
  myc: {
      language: 4670
  },
  myd: {
      language: 4671
  },
  mye: {
      language: 4672
  },
  myf: {
      language: 4673
  },
  myg: {
      language: 4674
  },
  myh: {
      language: 4675
  },
  myi: {
      language: 4676
  },
  myj: {
      language: 4677
  },
  myk: {
      language: 4678
  },
  myl: {
      language: 4679
  },
  mym: {
      language: 4680
  },
  myn: {
      language: 4681
  },
  myo: {
      language: 4682
  },
  myp: {
      language: 4683
  },
  myq: {
      language: 4684
  },
  myr: {
      language: 4685
  },
  mys: {
      language: 4686
  },
  myt: {
      language: 4687
  },
  myu: {
      language: 4688
  },
  myv: {
      language: 4689
  },
  myw: {
      language: 4690
  },
  myx: {
      language: 4691
  },
  myy: {
      language: 4692
  },
  myz: {
      language: 4693
  },
  mza: {
      language: 4694
  },
  mzb: {
      language: 4695
  },
  mzc: {
      language: 4696,
      extlang: 8399
  },
  mzd: {
      language: 4697
  },
  mze: {
      language: 4698
  },
  mzg: {
      language: 4699,
      extlang: 8400
  },
  mzh: {
      language: 4700
  },
  mzi: {
      language: 4701
  },
  mzj: {
      language: 4702
  },
  mzk: {
      language: 4703
  },
  mzl: {
      language: 4704
  },
  mzm: {
      language: 4705
  },
  mzn: {
      language: 4706
  },
  mzo: {
      language: 4707
  },
  mzp: {
      language: 4708
  },
  mzq: {
      language: 4709
  },
  mzr: {
      language: 4710
  },
  mzs: {
      language: 4711
  },
  mzt: {
      language: 4712
  },
  mzu: {
      language: 4713
  },
  mzv: {
      language: 4714
  },
  mzw: {
      language: 4715
  },
  mzx: {
      language: 4716
  },
  mzy: {
      language: 4717,
      extlang: 8401
  },
  mzz: {
      language: 4718
  },
  naa: {
      language: 4719
  },
  nab: {
      language: 4720
  },
  nac: {
      language: 4721
  },
  nad: {
      language: 4722
  },
  nae: {
      language: 4723
  },
  naf: {
      language: 4724
  },
  nag: {
      language: 4725
  },
  nah: {
      language: 4726
  },
  nai: {
      language: 4727
  },
  naj: {
      language: 4728
  },
  nak: {
      language: 4729
  },
  nal: {
      language: 4730
  },
  nam: {
      language: 4731
  },
  nan: {
      language: 4732,
      extlang: 8402
  },
  nao: {
      language: 4733
  },
  nap: {
      language: 4734
  },
  naq: {
      language: 4735
  },
  nar: {
      language: 4736
  },
  nas: {
      language: 4737
  },
  nat: {
      language: 4738
  },
  naw: {
      language: 4739
  },
  nax: {
      language: 4740
  },
  nay: {
      language: 4741
  },
  naz: {
      language: 4742
  },
  nba: {
      language: 4743
  },
  nbb: {
      language: 4744
  },
  nbc: {
      language: 4745
  },
  nbd: {
      language: 4746
  },
  nbe: {
      language: 4747
  },
  nbf: {
      language: 4748
  },
  nbg: {
      language: 4749
  },
  nbh: {
      language: 4750
  },
  nbi: {
      language: 4751
  },
  nbj: {
      language: 4752
  },
  nbk: {
      language: 4753
  },
  nbm: {
      language: 4754
  },
  nbn: {
      language: 4755
  },
  nbo: {
      language: 4756
  },
  nbp: {
      language: 4757
  },
  nbq: {
      language: 4758
  },
  nbr: {
      language: 4759
  },
  nbs: {
      language: 4760,
      extlang: 8403
  },
  nbt: {
      language: 4761
  },
  nbu: {
      language: 4762
  },
  nbv: {
      language: 4763
  },
  nbw: {
      language: 4764
  },
  nbx: {
      language: 4765
  },
  nby: {
      language: 4766
  },
  nca: {
      language: 4767
  },
  ncb: {
      language: 4768
  },
  ncc: {
      language: 4769
  },
  ncd: {
      language: 4770
  },
  nce: {
      language: 4771
  },
  ncf: {
      language: 4772
  },
  ncg: {
      language: 4773
  },
  nch: {
      language: 4774
  },
  nci: {
      language: 4775
  },
  ncj: {
      language: 4776
  },
  nck: {
      language: 4777
  },
  ncl: {
      language: 4778
  },
  ncm: {
      language: 4779
  },
  ncn: {
      language: 4780
  },
  nco: {
      language: 4781
  },
  ncp: {
      language: 4782
  },
  ncq: {
      language: 4783
  },
  ncr: {
      language: 4784
  },
  ncs: {
      language: 4785,
      extlang: 8404
  },
  nct: {
      language: 4786
  },
  ncu: {
      language: 4787
  },
  ncx: {
      language: 4788
  },
  ncz: {
      language: 4789
  },
  nda: {
      language: 4790
  },
  ndb: {
      language: 4791
  },
  ndc: {
      language: 4792
  },
  ndd: {
      language: 4793
  },
  ndf: {
      language: 4794
  },
  ndg: {
      language: 4795
  },
  ndh: {
      language: 4796
  },
  ndi: {
      language: 4797
  },
  ndj: {
      language: 4798
  },
  ndk: {
      language: 4799
  },
  ndl: {
      language: 4800
  },
  ndm: {
      language: 4801
  },
  ndn: {
      language: 4802
  },
  ndp: {
      language: 4803
  },
  ndq: {
      language: 4804
  },
  ndr: {
      language: 4805
  },
  nds: {
      language: 4806
  },
  ndt: {
      language: 4807
  },
  ndu: {
      language: 4808
  },
  ndv: {
      language: 4809
  },
  ndw: {
      language: 4810
  },
  ndx: {
      language: 4811
  },
  ndy: {
      language: 4812
  },
  ndz: {
      language: 4813
  },
  nea: {
      language: 4814
  },
  neb: {
      language: 4815
  },
  nec: {
      language: 4816
  },
  ned: {
      language: 4817
  },
  nee: {
      language: 4818
  },
  nef: {
      language: 4819
  },
  neg: {
      language: 4820
  },
  neh: {
      language: 4821
  },
  nei: {
      language: 4822
  },
  nej: {
      language: 4823
  },
  nek: {
      language: 4824
  },
  nem: {
      language: 4825
  },
  nen: {
      language: 4826
  },
  neo: {
      language: 4827
  },
  neq: {
      language: 4828
  },
  ner: {
      language: 4829
  },
  nes: {
      language: 4830
  },
  net: {
      language: 4831
  },
  neu: {
      language: 4832
  },
  nev: {
      language: 4833
  },
  new: {
      language: 4834
  },
  nex: {
      language: 4835
  },
  ney: {
      language: 4836
  },
  nez: {
      language: 4837
  },
  nfa: {
      language: 4838
  },
  nfd: {
      language: 4839
  },
  nfl: {
      language: 4840
  },
  nfr: {
      language: 4841
  },
  nfu: {
      language: 4842
  },
  nga: {
      language: 4843
  },
  ngb: {
      language: 4844
  },
  ngc: {
      language: 4845
  },
  ngd: {
      language: 4846
  },
  nge: {
      language: 4847
  },
  ngf: {
      language: 4848
  },
  ngg: {
      language: 4849
  },
  ngh: {
      language: 4850
  },
  ngi: {
      language: 4851
  },
  ngj: {
      language: 4852
  },
  ngk: {
      language: 4853
  },
  ngl: {
      language: 4854
  },
  ngm: {
      language: 4855
  },
  ngn: {
      language: 4856
  },
  ngo: {
      language: 4857
  },
  ngp: {
      language: 4858
  },
  ngq: {
      language: 4859
  },
  ngr: {
      language: 4860
  },
  ngs: {
      language: 4861
  },
  ngt: {
      language: 4862
  },
  ngu: {
      language: 4863
  },
  ngv: {
      language: 4864
  },
  ngw: {
      language: 4865
  },
  ngx: {
      language: 4866
  },
  ngy: {
      language: 4867
  },
  ngz: {
      language: 4868
  },
  nha: {
      language: 4869
  },
  nhb: {
      language: 4870
  },
  nhc: {
      language: 4871
  },
  nhd: {
      language: 4872
  },
  nhe: {
      language: 4873
  },
  nhf: {
      language: 4874
  },
  nhg: {
      language: 4875
  },
  nhh: {
      language: 4876
  },
  nhi: {
      language: 4877
  },
  nhk: {
      language: 4878
  },
  nhm: {
      language: 4879
  },
  nhn: {
      language: 4880
  },
  nho: {
      language: 4881
  },
  nhp: {
      language: 4882
  },
  nhq: {
      language: 4883
  },
  nhr: {
      language: 4884
  },
  nht: {
      language: 4885
  },
  nhu: {
      language: 4886
  },
  nhv: {
      language: 4887
  },
  nhw: {
      language: 4888
  },
  nhx: {
      language: 4889
  },
  nhy: {
      language: 4890
  },
  nhz: {
      language: 4891
  },
  nia: {
      language: 4892
  },
  nib: {
      language: 4893
  },
  nic: {
      language: 4894
  },
  nid: {
      language: 4895
  },
  nie: {
      language: 4896
  },
  nif: {
      language: 4897
  },
  nig: {
      language: 4898
  },
  nih: {
      language: 4899
  },
  nii: {
      language: 4900
  },
  nij: {
      language: 4901
  },
  nik: {
      language: 4902
  },
  nil: {
      language: 4903
  },
  nim: {
      language: 4904
  },
  nin: {
      language: 4905
  },
  nio: {
      language: 4906
  },
  niq: {
      language: 4907
  },
  nir: {
      language: 4908
  },
  nis: {
      language: 4909
  },
  nit: {
      language: 4910
  },
  niu: {
      language: 4911
  },
  niv: {
      language: 4912
  },
  niw: {
      language: 4913
  },
  nix: {
      language: 4914
  },
  niy: {
      language: 4915
  },
  niz: {
      language: 4916
  },
  nja: {
      language: 4917
  },
  njb: {
      language: 4918
  },
  njd: {
      language: 4919
  },
  njh: {
      language: 4920
  },
  nji: {
      language: 4921
  },
  njj: {
      language: 4922
  },
  njl: {
      language: 4923
  },
  njm: {
      language: 4924
  },
  njn: {
      language: 4925
  },
  njo: {
      language: 4926
  },
  njr: {
      language: 4927
  },
  njs: {
      language: 4928
  },
  njt: {
      language: 4929
  },
  nju: {
      language: 4930
  },
  njx: {
      language: 4931
  },
  njy: {
      language: 4932
  },
  njz: {
      language: 4933
  },
  nka: {
      language: 4934
  },
  nkb: {
      language: 4935
  },
  nkc: {
      language: 4936
  },
  nkd: {
      language: 4937
  },
  nke: {
      language: 4938
  },
  nkf: {
      language: 4939
  },
  nkg: {
      language: 4940
  },
  nkh: {
      language: 4941
  },
  nki: {
      language: 4942
  },
  nkj: {
      language: 4943
  },
  nkk: {
      language: 4944
  },
  nkm: {
      language: 4945
  },
  nkn: {
      language: 4946
  },
  nko: {
      language: 4947
  },
  nkp: {
      language: 4948
  },
  nkq: {
      language: 4949
  },
  nkr: {
      language: 4950
  },
  nks: {
      language: 4951
  },
  nkt: {
      language: 4952
  },
  nku: {
      language: 4953
  },
  nkv: {
      language: 4954
  },
  nkw: {
      language: 4955
  },
  nkx: {
      language: 4956
  },
  nkz: {
      language: 4957
  },
  nla: {
      language: 4958
  },
  nlc: {
      language: 4959
  },
  nle: {
      language: 4960
  },
  nlg: {
      language: 4961
  },
  nli: {
      language: 4962
  },
  nlj: {
      language: 4963
  },
  nlk: {
      language: 4964
  },
  nll: {
      language: 4965
  },
  nlm: {
      language: 4966
  },
  nln: {
      language: 4967
  },
  nlo: {
      language: 4968
  },
  nlq: {
      language: 4969
  },
  nlr: {
      language: 4970
  },
  nlu: {
      language: 4971
  },
  nlv: {
      language: 4972
  },
  nlw: {
      language: 4973
  },
  nlx: {
      language: 4974
  },
  nly: {
      language: 4975
  },
  nlz: {
      language: 4976
  },
  nma: {
      language: 4977
  },
  nmb: {
      language: 4978
  },
  nmc: {
      language: 4979
  },
  nmd: {
      language: 4980
  },
  nme: {
      language: 4981
  },
  nmf: {
      language: 4982
  },
  nmg: {
      language: 4983
  },
  nmh: {
      language: 4984
  },
  nmi: {
      language: 4985
  },
  nmj: {
      language: 4986
  },
  nmk: {
      language: 4987
  },
  nml: {
      language: 4988
  },
  nmm: {
      language: 4989
  },
  nmn: {
      language: 4990
  },
  nmo: {
      language: 4991
  },
  nmp: {
      language: 4992
  },
  nmq: {
      language: 4993
  },
  nmr: {
      language: 4994
  },
  nms: {
      language: 4995
  },
  nmt: {
      language: 4996
  },
  nmu: {
      language: 4997
  },
  nmv: {
      language: 4998
  },
  nmw: {
      language: 4999
  },
  nmx: {
      language: 5e3
  },
  nmy: {
      language: 5001
  },
  nmz: {
      language: 5002
  },
  nna: {
      language: 5003
  },
  nnb: {
      language: 5004
  },
  nnc: {
      language: 5005
  },
  nnd: {
      language: 5006
  },
  nne: {
      language: 5007
  },
  nnf: {
      language: 5008
  },
  nng: {
      language: 5009
  },
  nnh: {
      language: 5010
  },
  nni: {
      language: 5011
  },
  nnj: {
      language: 5012
  },
  nnk: {
      language: 5013
  },
  nnl: {
      language: 5014
  },
  nnm: {
      language: 5015
  },
  nnn: {
      language: 5016
  },
  nnp: {
      language: 5017
  },
  nnq: {
      language: 5018
  },
  nnr: {
      language: 5019
  },
  nns: {
      language: 5020
  },
  nnt: {
      language: 5021
  },
  nnu: {
      language: 5022
  },
  nnv: {
      language: 5023
  },
  nnw: {
      language: 5024
  },
  nnx: {
      language: 5025
  },
  nny: {
      language: 5026
  },
  nnz: {
      language: 5027
  },
  noa: {
      language: 5028
  },
  noc: {
      language: 5029
  },
  nod: {
      language: 5030
  },
  noe: {
      language: 5031
  },
  nof: {
      language: 5032
  },
  nog: {
      language: 5033
  },
  noh: {
      language: 5034
  },
  noi: {
      language: 5035
  },
  noj: {
      language: 5036
  },
  nok: {
      language: 5037
  },
  nol: {
      language: 5038
  },
  nom: {
      language: 5039
  },
  non: {
      language: 5040
  },
  noo: {
      language: 5041
  },
  nop: {
      language: 5042
  },
  noq: {
      language: 5043
  },
  nos: {
      language: 5044
  },
  not: {
      language: 5045
  },
  nou: {
      language: 5046
  },
  nov: {
      language: 5047
  },
  now: {
      language: 5048
  },
  noy: {
      language: 5049
  },
  noz: {
      language: 5050
  },
  npa: {
      language: 5051
  },
  npb: {
      language: 5052
  },
  npg: {
      language: 5053
  },
  nph: {
      language: 5054
  },
  npi: {
      language: 5055
  },
  npl: {
      language: 5056
  },
  npn: {
      language: 5057
  },
  npo: {
      language: 5058
  },
  nps: {
      language: 5059
  },
  npu: {
      language: 5060
  },
  npx: {
      language: 5061
  },
  npy: {
      language: 5062
  },
  nqg: {
      language: 5063
  },
  nqk: {
      language: 5064
  },
  nql: {
      language: 5065
  },
  nqm: {
      language: 5066
  },
  nqn: {
      language: 5067
  },
  nqo: {
      language: 5068
  },
  nqq: {
      language: 5069
  },
  nqt: {
      language: 5070
  },
  nqy: {
      language: 5071
  },
  nra: {
      language: 5072
  },
  nrb: {
      language: 5073
  },
  nrc: {
      language: 5074
  },
  nre: {
      language: 5075
  },
  nrf: {
      language: 5076
  },
  nrg: {
      language: 5077
  },
  nri: {
      language: 5078
  },
  nrk: {
      language: 5079
  },
  nrl: {
      language: 5080
  },
  nrm: {
      language: 5081
  },
  nrn: {
      language: 5082
  },
  nrp: {
      language: 5083
  },
  nrr: {
      language: 5084
  },
  nrt: {
      language: 5085
  },
  nru: {
      language: 5086
  },
  nrx: {
      language: 5087
  },
  nrz: {
      language: 5088
  },
  nsa: {
      language: 5089
  },
  nsb: {
      language: 5090
  },
  nsc: {
      language: 5091
  },
  nsd: {
      language: 5092
  },
  nse: {
      language: 5093
  },
  nsf: {
      language: 5094
  },
  nsg: {
      language: 5095
  },
  nsh: {
      language: 5096
  },
  nsi: {
      language: 5097,
      extlang: 8405
  },
  nsk: {
      language: 5098
  },
  nsl: {
      language: 5099,
      extlang: 8406
  },
  nsm: {
      language: 5100
  },
  nsn: {
      language: 5101
  },
  nso: {
      language: 5102
  },
  nsp: {
      language: 5103,
      extlang: 8407
  },
  nsq: {
      language: 5104
  },
  nsr: {
      language: 5105,
      extlang: 8408
  },
  nss: {
      language: 5106
  },
  nst: {
      language: 5107
  },
  nsu: {
      language: 5108
  },
  nsv: {
      language: 5109
  },
  nsw: {
      language: 5110
  },
  nsx: {
      language: 5111
  },
  nsy: {
      language: 5112
  },
  nsz: {
      language: 5113
  },
  ntd: {
      language: 5114
  },
  nte: {
      language: 5115
  },
  ntg: {
      language: 5116
  },
  nti: {
      language: 5117
  },
  ntj: {
      language: 5118
  },
  ntk: {
      language: 5119
  },
  ntm: {
      language: 5120
  },
  nto: {
      language: 5121
  },
  ntp: {
      language: 5122
  },
  ntr: {
      language: 5123
  },
  nts: {
      language: 5124
  },
  ntu: {
      language: 5125
  },
  ntw: {
      language: 5126
  },
  ntx: {
      language: 5127
  },
  nty: {
      language: 5128
  },
  ntz: {
      language: 5129
  },
  nua: {
      language: 5130
  },
  nub: {
      language: 5131
  },
  nuc: {
      language: 5132
  },
  nud: {
      language: 5133
  },
  nue: {
      language: 5134
  },
  nuf: {
      language: 5135
  },
  nug: {
      language: 5136
  },
  nuh: {
      language: 5137
  },
  nui: {
      language: 5138
  },
  nuj: {
      language: 5139
  },
  nuk: {
      language: 5140
  },
  nul: {
      language: 5141
  },
  num: {
      language: 5142
  },
  nun: {
      language: 5143
  },
  nuo: {
      language: 5144
  },
  nup: {
      language: 5145
  },
  nuq: {
      language: 5146
  },
  nur: {
      language: 5147
  },
  nus: {
      language: 5148
  },
  nut: {
      language: 5149
  },
  nuu: {
      language: 5150
  },
  nuv: {
      language: 5151
  },
  nuw: {
      language: 5152
  },
  nux: {
      language: 5153
  },
  nuy: {
      language: 5154
  },
  nuz: {
      language: 5155
  },
  nvh: {
      language: 5156
  },
  nvm: {
      language: 5157
  },
  nvo: {
      language: 5158
  },
  nwa: {
      language: 5159
  },
  nwb: {
      language: 5160
  },
  nwc: {
      language: 5161
  },
  nwe: {
      language: 5162
  },
  nwg: {
      language: 5163
  },
  nwi: {
      language: 5164
  },
  nwm: {
      language: 5165
  },
  nwo: {
      language: 5166
  },
  nwr: {
      language: 5167
  },
  nww: {
      language: 5168
  },
  nwx: {
      language: 5169
  },
  nwy: {
      language: 5170
  },
  nxa: {
      language: 5171
  },
  nxd: {
      language: 5172
  },
  nxe: {
      language: 5173
  },
  nxg: {
      language: 5174
  },
  nxi: {
      language: 5175
  },
  nxk: {
      language: 5176
  },
  nxl: {
      language: 5177
  },
  nxm: {
      language: 5178
  },
  nxn: {
      language: 5179
  },
  nxo: {
      language: 5180
  },
  nxq: {
      language: 5181
  },
  nxr: {
      language: 5182
  },
  nxu: {
      language: 5183
  },
  nxx: {
      language: 5184
  },
  nyb: {
      language: 5185
  },
  nyc: {
      language: 5186
  },
  nyd: {
      language: 5187
  },
  nye: {
      language: 5188
  },
  nyf: {
      language: 5189
  },
  nyg: {
      language: 5190
  },
  nyh: {
      language: 5191
  },
  nyi: {
      language: 5192
  },
  nyj: {
      language: 5193
  },
  nyk: {
      language: 5194
  },
  nyl: {
      language: 5195
  },
  nym: {
      language: 5196
  },
  nyn: {
      language: 5197
  },
  nyo: {
      language: 5198
  },
  nyp: {
      language: 5199
  },
  nyq: {
      language: 5200
  },
  nyr: {
      language: 5201
  },
  nys: {
      language: 5202
  },
  nyt: {
      language: 5203
  },
  nyu: {
      language: 5204
  },
  nyv: {
      language: 5205
  },
  nyw: {
      language: 5206
  },
  nyx: {
      language: 5207
  },
  nyy: {
      language: 5208
  },
  nza: {
      language: 5209
  },
  nzb: {
      language: 5210
  },
  nzd: {
      language: 5211
  },
  nzi: {
      language: 5212
  },
  nzk: {
      language: 5213
  },
  nzm: {
      language: 5214
  },
  nzs: {
      language: 5215,
      extlang: 8409
  },
  nzu: {
      language: 5216
  },
  nzy: {
      language: 5217
  },
  nzz: {
      language: 5218
  },
  oaa: {
      language: 5219
  },
  oac: {
      language: 5220
  },
  oar: {
      language: 5221
  },
  oav: {
      language: 5222
  },
  obi: {
      language: 5223
  },
  obk: {
      language: 5224
  },
  obl: {
      language: 5225
  },
  obm: {
      language: 5226
  },
  obo: {
      language: 5227
  },
  obr: {
      language: 5228
  },
  obt: {
      language: 5229
  },
  obu: {
      language: 5230
  },
  oca: {
      language: 5231
  },
  och: {
      language: 5232
  },
  ocm: {
      language: 5233
  },
  oco: {
      language: 5234
  },
  ocu: {
      language: 5235
  },
  oda: {
      language: 5236
  },
  odk: {
      language: 5237
  },
  odt: {
      language: 5238
  },
  odu: {
      language: 5239
  },
  ofo: {
      language: 5240
  },
  ofs: {
      language: 5241
  },
  ofu: {
      language: 5242
  },
  ogb: {
      language: 5243
  },
  ogc: {
      language: 5244
  },
  oge: {
      language: 5245
  },
  ogg: {
      language: 5246
  },
  ogo: {
      language: 5247
  },
  ogu: {
      language: 5248
  },
  oht: {
      language: 5249
  },
  ohu: {
      language: 5250
  },
  oia: {
      language: 5251
  },
  oie: {
      language: 5252
  },
  oin: {
      language: 5253
  },
  ojb: {
      language: 5254
  },
  ojc: {
      language: 5255
  },
  ojg: {
      language: 5256
  },
  ojp: {
      language: 5257
  },
  ojs: {
      language: 5258
  },
  ojv: {
      language: 5259
  },
  ojw: {
      language: 5260
  },
  oka: {
      language: 5261
  },
  okb: {
      language: 5262
  },
  okc: {
      language: 5263
  },
  okd: {
      language: 5264
  },
  oke: {
      language: 5265
  },
  okg: {
      language: 5266
  },
  okh: {
      language: 5267
  },
  oki: {
      language: 5268
  },
  okj: {
      language: 5269
  },
  okk: {
      language: 5270
  },
  okl: {
      language: 5271,
      extlang: 8410
  },
  okm: {
      language: 5272
  },
  okn: {
      language: 5273
  },
  oko: {
      language: 5274
  },
  okr: {
      language: 5275
  },
  oks: {
      language: 5276
  },
  oku: {
      language: 5277
  },
  okv: {
      language: 5278
  },
  okx: {
      language: 5279
  },
  okz: {
      language: 5280
  },
  ola: {
      language: 5281
  },
  old: {
      language: 5282
  },
  ole: {
      language: 5283
  },
  olk: {
      language: 5284
  },
  olm: {
      language: 5285
  },
  olo: {
      language: 5286
  },
  olr: {
      language: 5287
  },
  olt: {
      language: 5288
  },
  olu: {
      language: 5289
  },
  oma: {
      language: 5290
  },
  omb: {
      language: 5291
  },
  omc: {
      language: 5292
  },
  ome: {
      language: 5293
  },
  omg: {
      language: 5294
  },
  omi: {
      language: 5295
  },
  omk: {
      language: 5296
  },
  oml: {
      language: 5297
  },
  omn: {
      language: 5298
  },
  omo: {
      language: 5299
  },
  omp: {
      language: 5300
  },
  omq: {
      language: 5301
  },
  omr: {
      language: 5302
  },
  omt: {
      language: 5303
  },
  omu: {
      language: 5304
  },
  omv: {
      language: 5305
  },
  omw: {
      language: 5306
  },
  omx: {
      language: 5307
  },
  omy: {
      language: 5308
  },
  ona: {
      language: 5309
  },
  onb: {
      language: 5310
  },
  one: {
      language: 5311
  },
  ong: {
      language: 5312
  },
  oni: {
      language: 5313
  },
  onj: {
      language: 5314
  },
  onk: {
      language: 5315
  },
  onn: {
      language: 5316
  },
  ono: {
      language: 5317
  },
  onp: {
      language: 5318
  },
  onr: {
      language: 5319
  },
  ons: {
      language: 5320
  },
  ont: {
      language: 5321
  },
  onu: {
      language: 5322
  },
  onw: {
      language: 5323
  },
  onx: {
      language: 5324
  },
  ood: {
      language: 5325
  },
  oog: {
      language: 5326
  },
  oon: {
      language: 5327
  },
  oor: {
      language: 5328
  },
  oos: {
      language: 5329
  },
  opa: {
      language: 5330
  },
  opk: {
      language: 5331
  },
  opm: {
      language: 5332
  },
  opo: {
      language: 5333
  },
  opt: {
      language: 5334
  },
  opy: {
      language: 5335
  },
  ora: {
      language: 5336
  },
  orc: {
      language: 5337
  },
  ore: {
      language: 5338
  },
  org: {
      language: 5339
  },
  orh: {
      language: 5340
  },
  orn: {
      language: 5341,
      extlang: 8411
  },
  oro: {
      language: 5342
  },
  orr: {
      language: 5343
  },
  ors: {
      language: 5344,
      extlang: 8412
  },
  ort: {
      language: 5345
  },
  oru: {
      language: 5346
  },
  orv: {
      language: 5347
  },
  orw: {
      language: 5348
  },
  orx: {
      language: 5349
  },
  ory: {
      language: 5350
  },
  orz: {
      language: 5351
  },
  osa: {
      language: 5352
  },
  osc: {
      language: 5353
  },
  osi: {
      language: 5354
  },
  osn: {
      language: 5355
  },
  oso: {
      language: 5356
  },
  osp: {
      language: 5357
  },
  ost: {
      language: 5358
  },
  osu: {
      language: 5359
  },
  osx: {
      language: 5360
  },
  ota: {
      language: 5361
  },
  otb: {
      language: 5362
  },
  otd: {
      language: 5363
  },
  ote: {
      language: 5364
  },
  oti: {
      language: 5365
  },
  otk: {
      language: 5366
  },
  otl: {
      language: 5367
  },
  otm: {
      language: 5368
  },
  otn: {
      language: 5369
  },
  oto: {
      language: 5370
  },
  otq: {
      language: 5371
  },
  otr: {
      language: 5372
  },
  ots: {
      language: 5373
  },
  ott: {
      language: 5374
  },
  otu: {
      language: 5375
  },
  otw: {
      language: 5376
  },
  otx: {
      language: 5377
  },
  oty: {
      language: 5378
  },
  otz: {
      language: 5379
  },
  oua: {
      language: 5380
  },
  oub: {
      language: 5381
  },
  oue: {
      language: 5382
  },
  oui: {
      language: 5383
  },
  oum: {
      language: 5384
  },
  oun: {
      language: 5385
  },
  ovd: {
      language: 5386
  },
  owi: {
      language: 5387
  },
  owl: {
      language: 5388
  },
  oyb: {
      language: 5389
  },
  oyd: {
      language: 5390
  },
  oym: {
      language: 5391
  },
  oyy: {
      language: 5392
  },
  ozm: {
      language: 5393
  },
  paa: {
      language: 5394
  },
  pab: {
      language: 5395
  },
  pac: {
      language: 5396
  },
  pad: {
      language: 5397
  },
  pae: {
      language: 5398
  },
  paf: {
      language: 5399
  },
  pag: {
      language: 5400
  },
  pah: {
      language: 5401
  },
  pai: {
      language: 5402
  },
  pak: {
      language: 5403
  },
  pal: {
      language: 5404
  },
  pam: {
      language: 5405
  },
  pao: {
      language: 5406
  },
  pap: {
      language: 5407
  },
  paq: {
      language: 5408
  },
  par: {
      language: 5409
  },
  pas: {
      language: 5410
  },
  pat: {
      language: 5411
  },
  pau: {
      language: 5412
  },
  pav: {
      language: 5413
  },
  paw: {
      language: 5414
  },
  pax: {
      language: 5415
  },
  pay: {
      language: 5416
  },
  paz: {
      language: 5417
  },
  pbb: {
      language: 5418
  },
  pbc: {
      language: 5419
  },
  pbe: {
      language: 5420
  },
  pbf: {
      language: 5421
  },
  pbg: {
      language: 5422
  },
  pbh: {
      language: 5423
  },
  pbi: {
      language: 5424
  },
  pbl: {
      language: 5425
  },
  pbm: {
      language: 5426
  },
  pbn: {
      language: 5427
  },
  pbo: {
      language: 5428
  },
  pbp: {
      language: 5429
  },
  pbr: {
      language: 5430
  },
  pbs: {
      language: 5431
  },
  pbt: {
      language: 5432
  },
  pbu: {
      language: 5433
  },
  pbv: {
      language: 5434
  },
  pby: {
      language: 5435
  },
  pbz: {
      language: 5436
  },
  pca: {
      language: 5437
  },
  pcb: {
      language: 5438
  },
  pcc: {
      language: 5439
  },
  pcd: {
      language: 5440
  },
  pce: {
      language: 5441
  },
  pcf: {
      language: 5442
  },
  pcg: {
      language: 5443
  },
  pch: {
      language: 5444
  },
  pci: {
      language: 5445
  },
  pcj: {
      language: 5446
  },
  pck: {
      language: 5447
  },
  pcl: {
      language: 5448
  },
  pcm: {
      language: 5449
  },
  pcn: {
      language: 5450
  },
  pcp: {
      language: 5451
  },
  pcr: {
      language: 5452
  },
  pcw: {
      language: 5453
  },
  pda: {
      language: 5454
  },
  pdc: {
      language: 5455
  },
  pdi: {
      language: 5456
  },
  pdn: {
      language: 5457
  },
  pdo: {
      language: 5458
  },
  pdt: {
      language: 5459
  },
  pdu: {
      language: 5460
  },
  pea: {
      language: 5461
  },
  peb: {
      language: 5462
  },
  ped: {
      language: 5463
  },
  pee: {
      language: 5464
  },
  pef: {
      language: 5465
  },
  peg: {
      language: 5466
  },
  peh: {
      language: 5467
  },
  pei: {
      language: 5468
  },
  pej: {
      language: 5469
  },
  pek: {
      language: 5470
  },
  pel: {
      language: 5471,
      extlang: 8413
  },
  pem: {
      language: 5472
  },
  peo: {
      language: 5473
  },
  pep: {
      language: 5474
  },
  peq: {
      language: 5475
  },
  pes: {
      language: 5476
  },
  pev: {
      language: 5477
  },
  pex: {
      language: 5478
  },
  pey: {
      language: 5479
  },
  pez: {
      language: 5480
  },
  pfa: {
      language: 5481
  },
  pfe: {
      language: 5482
  },
  pfl: {
      language: 5483
  },
  pga: {
      language: 5484,
      extlang: 8414
  },
  pgd: {
      language: 5485
  },
  pgg: {
      language: 5486
  },
  pgi: {
      language: 5487
  },
  pgk: {
      language: 5488
  },
  pgl: {
      language: 5489
  },
  pgn: {
      language: 5490
  },
  pgs: {
      language: 5491
  },
  pgu: {
      language: 5492
  },
  pgy: {
      language: 5493
  },
  pgz: {
      language: 5494,
      extlang: 8415
  },
  pha: {
      language: 5495
  },
  phd: {
      language: 5496
  },
  phg: {
      language: 5497
  },
  phh: {
      language: 5498
  },
  phi: {
      language: 5499
  },
  phj: {
      language: 5500
  },
  phk: {
      language: 5501
  },
  phl: {
      language: 5502
  },
  phm: {
      language: 5503
  },
  phn: {
      language: 5504
  },
  pho: {
      language: 5505
  },
  phq: {
      language: 5506
  },
  phr: {
      language: 5507
  },
  pht: {
      language: 5508
  },
  phu: {
      language: 5509
  },
  phv: {
      language: 5510
  },
  phw: {
      language: 5511
  },
  pia: {
      language: 5512
  },
  pib: {
      language: 5513
  },
  pic: {
      language: 5514
  },
  pid: {
      language: 5515
  },
  pie: {
      language: 5516
  },
  pif: {
      language: 5517
  },
  pig: {
      language: 5518
  },
  pih: {
      language: 5519
  },
  pii: {
      language: 5520
  },
  pij: {
      language: 5521
  },
  pil: {
      language: 5522
  },
  pim: {
      language: 5523
  },
  pin: {
      language: 5524
  },
  pio: {
      language: 5525
  },
  pip: {
      language: 5526
  },
  pir: {
      language: 5527
  },
  pis: {
      language: 5528
  },
  pit: {
      language: 5529
  },
  piu: {
      language: 5530
  },
  piv: {
      language: 5531
  },
  piw: {
      language: 5532
  },
  pix: {
      language: 5533
  },
  piy: {
      language: 5534
  },
  piz: {
      language: 5535
  },
  pjt: {
      language: 5536
  },
  pka: {
      language: 5537
  },
  pkb: {
      language: 5538
  },
  pkc: {
      language: 5539
  },
  pkg: {
      language: 5540
  },
  pkh: {
      language: 5541
  },
  pkn: {
      language: 5542
  },
  pko: {
      language: 5543
  },
  pkp: {
      language: 5544
  },
  pkr: {
      language: 5545
  },
  pks: {
      language: 5546,
      extlang: 8416
  },
  pkt: {
      language: 5547
  },
  pku: {
      language: 5548
  },
  pla: {
      language: 5549
  },
  plb: {
      language: 5550
  },
  plc: {
      language: 5551
  },
  pld: {
      language: 5552
  },
  ple: {
      language: 5553
  },
  plf: {
      language: 5554
  },
  plg: {
      language: 5555
  },
  plh: {
      language: 5556
  },
  plj: {
      language: 5557
  },
  plk: {
      language: 5558
  },
  pll: {
      language: 5559
  },
  pln: {
      language: 5560
  },
  plo: {
      language: 5561
  },
  plp: {
      language: 5562
  },
  plq: {
      language: 5563
  },
  plr: {
      language: 5564
  },
  pls: {
      language: 5565
  },
  plt: {
      language: 5566
  },
  plu: {
      language: 5567
  },
  plv: {
      language: 5568
  },
  plw: {
      language: 5569
  },
  ply: {
      language: 5570
  },
  plz: {
      language: 5571
  },
  pma: {
      language: 5572
  },
  pmb: {
      language: 5573
  },
  pmc: {
      language: 5574
  },
  pmd: {
      language: 5575
  },
  pme: {
      language: 5576
  },
  pmf: {
      language: 5577
  },
  pmh: {
      language: 5578
  },
  pmi: {
      language: 5579
  },
  pmj: {
      language: 5580
  },
  pmk: {
      language: 5581
  },
  pml: {
      language: 5582
  },
  pmm: {
      language: 5583
  },
  pmn: {
      language: 5584
  },
  pmo: {
      language: 5585
  },
  pmq: {
      language: 5586
  },
  pmr: {
      language: 5587
  },
  pms: {
      language: 5588
  },
  pmt: {
      language: 5589
  },
  pmu: {
      language: 5590
  },
  pmw: {
      language: 5591
  },
  pmx: {
      language: 5592
  },
  pmy: {
      language: 5593
  },
  pmz: {
      language: 5594
  },
  pna: {
      language: 5595
  },
  pnb: {
      language: 5596
  },
  pnc: {
      language: 5597
  },
  pnd: {
      language: 5598
  },
  pne: {
      language: 5599
  },
  png: {
      language: 5600
  },
  pnh: {
      language: 5601
  },
  pni: {
      language: 5602
  },
  pnj: {
      language: 5603
  },
  pnk: {
      language: 5604
  },
  pnl: {
      language: 5605
  },
  pnm: {
      language: 5606
  },
  pnn: {
      language: 5607
  },
  pno: {
      language: 5608
  },
  pnp: {
      language: 5609
  },
  pnq: {
      language: 5610
  },
  pnr: {
      language: 5611
  },
  pns: {
      language: 5612
  },
  pnt: {
      language: 5613
  },
  pnu: {
      language: 5614
  },
  pnv: {
      language: 5615
  },
  pnw: {
      language: 5616
  },
  pnx: {
      language: 5617
  },
  pny: {
      language: 5618
  },
  pnz: {
      language: 5619
  },
  poc: {
      language: 5620
  },
  pod: {
      language: 5621
  },
  poe: {
      language: 5622
  },
  pof: {
      language: 5623
  },
  pog: {
      language: 5624
  },
  poh: {
      language: 5625
  },
  poi: {
      language: 5626
  },
  pok: {
      language: 5627
  },
  pom: {
      language: 5628
  },
  pon: {
      language: 5629
  },
  poo: {
      language: 5630
  },
  pop: {
      language: 5631
  },
  poq: {
      language: 5632
  },
  pos: {
      language: 5633
  },
  pot: {
      language: 5634
  },
  pov: {
      language: 5635
  },
  pow: {
      language: 5636
  },
  pox: {
      language: 5637
  },
  poy: {
      language: 5638
  },
  poz: {
      language: 5639
  },
  ppa: {
      language: 5640
  },
  ppe: {
      language: 5641
  },
  ppi: {
      language: 5642
  },
  ppk: {
      language: 5643
  },
  ppl: {
      language: 5644
  },
  ppm: {
      language: 5645
  },
  ppn: {
      language: 5646
  },
  ppo: {
      language: 5647
  },
  ppp: {
      language: 5648
  },
  ppq: {
      language: 5649
  },
  ppr: {
      language: 5650
  },
  pps: {
      language: 5651
  },
  ppt: {
      language: 5652
  },
  ppu: {
      language: 5653
  },
  pqa: {
      language: 5654
  },
  pqe: {
      language: 5655
  },
  pqm: {
      language: 5656
  },
  pqw: {
      language: 5657
  },
  pra: {
      language: 5658
  },
  prb: {
      language: 5659
  },
  prc: {
      language: 5660
  },
  prd: {
      language: 5661
  },
  pre: {
      language: 5662
  },
  prf: {
      language: 5663
  },
  prg: {
      language: 5664
  },
  prh: {
      language: 5665
  },
  pri: {
      language: 5666
  },
  prk: {
      language: 5667
  },
  prl: {
      language: 5668,
      extlang: 8417
  },
  prm: {
      language: 5669
  },
  prn: {
      language: 5670
  },
  pro: {
      language: 5671
  },
  prp: {
      language: 5672
  },
  prq: {
      language: 5673
  },
  prr: {
      language: 5674
  },
  prs: {
      language: 5675
  },
  prt: {
      language: 5676
  },
  pru: {
      language: 5677
  },
  prw: {
      language: 5678
  },
  prx: {
      language: 5679
  },
  pry: {
      language: 5680
  },
  prz: {
      language: 5681,
      extlang: 8418
  },
  psa: {
      language: 5682
  },
  psc: {
      language: 5683,
      extlang: 8419
  },
  psd: {
      language: 5684,
      extlang: 8420
  },
  pse: {
      language: 5685,
      extlang: 8421
  },
  psg: {
      language: 5686,
      extlang: 8422
  },
  psh: {
      language: 5687
  },
  psi: {
      language: 5688
  },
  psl: {
      language: 5689,
      extlang: 8423
  },
  psm: {
      language: 5690
  },
  psn: {
      language: 5691
  },
  pso: {
      language: 5692,
      extlang: 8424
  },
  psp: {
      language: 5693,
      extlang: 8425
  },
  psq: {
      language: 5694
  },
  psr: {
      language: 5695,
      extlang: 8426
  },
  pss: {
      language: 5696
  },
  pst: {
      language: 5697
  },
  psu: {
      language: 5698
  },
  psw: {
      language: 5699
  },
  psy: {
      language: 5700
  },
  pta: {
      language: 5701
  },
  pth: {
      language: 5702
  },
  pti: {
      language: 5703
  },
  ptn: {
      language: 5704
  },
  pto: {
      language: 5705
  },
  ptp: {
      language: 5706
  },
  ptq: {
      language: 5707
  },
  ptr: {
      language: 5708
  },
  ptt: {
      language: 5709
  },
  ptu: {
      language: 5710
  },
  ptv: {
      language: 5711
  },
  ptw: {
      language: 5712
  },
  pty: {
      language: 5713
  },
  pua: {
      language: 5714
  },
  pub: {
      language: 5715
  },
  puc: {
      language: 5716
  },
  pud: {
      language: 5717
  },
  pue: {
      language: 5718
  },
  puf: {
      language: 5719
  },
  pug: {
      language: 5720
  },
  pui: {
      language: 5721
  },
  puj: {
      language: 5722
  },
  puk: {
      language: 5723
  },
  pum: {
      language: 5724
  },
  puo: {
      language: 5725
  },
  pup: {
      language: 5726
  },
  puq: {
      language: 5727
  },
  pur: {
      language: 5728
  },
  put: {
      language: 5729
  },
  puu: {
      language: 5730
  },
  puw: {
      language: 5731
  },
  pux: {
      language: 5732
  },
  puy: {
      language: 5733
  },
  puz: {
      language: 5734
  },
  pwa: {
      language: 5735
  },
  pwb: {
      language: 5736
  },
  pwg: {
      language: 5737
  },
  pwi: {
      language: 5738
  },
  pwm: {
      language: 5739
  },
  pwn: {
      language: 5740
  },
  pwo: {
      language: 5741
  },
  pwr: {
      language: 5742
  },
  pww: {
      language: 5743
  },
  pxm: {
      language: 5744
  },
  pye: {
      language: 5745
  },
  pym: {
      language: 5746
  },
  pyn: {
      language: 5747
  },
  pys: {
      language: 5748,
      extlang: 8427
  },
  pyu: {
      language: 5749
  },
  pyx: {
      language: 5750
  },
  pyy: {
      language: 5751
  },
  pzh: {
      language: 5752
  },
  pzn: {
      language: 5753
  },
  "qaa..qtz": {
      language: 5754
  },
  qua: {
      language: 5755
  },
  qub: {
      language: 5756
  },
  quc: {
      language: 5757
  },
  qud: {
      language: 5758
  },
  quf: {
      language: 5759
  },
  qug: {
      language: 5760
  },
  quh: {
      language: 5761
  },
  qui: {
      language: 5762
  },
  quk: {
      language: 5763
  },
  qul: {
      language: 5764
  },
  qum: {
      language: 5765
  },
  qun: {
      language: 5766
  },
  qup: {
      language: 5767
  },
  quq: {
      language: 5768
  },
  qur: {
      language: 5769
  },
  qus: {
      language: 5770
  },
  quv: {
      language: 5771
  },
  quw: {
      language: 5772
  },
  qux: {
      language: 5773
  },
  quy: {
      language: 5774
  },
  quz: {
      language: 5775
  },
  qva: {
      language: 5776
  },
  qvc: {
      language: 5777
  },
  qve: {
      language: 5778
  },
  qvh: {
      language: 5779
  },
  qvi: {
      language: 5780
  },
  qvj: {
      language: 5781
  },
  qvl: {
      language: 5782
  },
  qvm: {
      language: 5783
  },
  qvn: {
      language: 5784
  },
  qvo: {
      language: 5785
  },
  qvp: {
      language: 5786
  },
  qvs: {
      language: 5787
  },
  qvw: {
      language: 5788
  },
  qvy: {
      language: 5789
  },
  qvz: {
      language: 5790
  },
  qwa: {
      language: 5791
  },
  qwc: {
      language: 5792
  },
  qwe: {
      language: 5793
  },
  qwh: {
      language: 5794
  },
  qwm: {
      language: 5795
  },
  qws: {
      language: 5796
  },
  qwt: {
      language: 5797
  },
  qxa: {
      language: 5798
  },
  qxc: {
      language: 5799
  },
  qxh: {
      language: 5800
  },
  qxl: {
      language: 5801
  },
  qxn: {
      language: 5802
  },
  qxo: {
      language: 5803
  },
  qxp: {
      language: 5804
  },
  qxq: {
      language: 5805
  },
  qxr: {
      language: 5806
  },
  qxs: {
      language: 5807
  },
  qxt: {
      language: 5808
  },
  qxu: {
      language: 5809
  },
  qxw: {
      language: 5810
  },
  qya: {
      language: 5811
  },
  qyp: {
      language: 5812
  },
  raa: {
      language: 5813
  },
  rab: {
      language: 5814
  },
  rac: {
      language: 5815
  },
  rad: {
      language: 5816
  },
  raf: {
      language: 5817
  },
  rag: {
      language: 5818
  },
  rah: {
      language: 5819
  },
  rai: {
      language: 5820
  },
  raj: {
      language: 5821
  },
  rak: {
      language: 5822
  },
  ral: {
      language: 5823
  },
  ram: {
      language: 5824
  },
  ran: {
      language: 5825
  },
  rao: {
      language: 5826
  },
  rap: {
      language: 5827
  },
  raq: {
      language: 5828
  },
  rar: {
      language: 5829
  },
  ras: {
      language: 5830
  },
  rat: {
      language: 5831
  },
  rau: {
      language: 5832
  },
  rav: {
      language: 5833
  },
  raw: {
      language: 5834
  },
  rax: {
      language: 5835
  },
  ray: {
      language: 5836
  },
  raz: {
      language: 5837
  },
  rbb: {
      language: 5838
  },
  rbk: {
      language: 5839
  },
  rbl: {
      language: 5840
  },
  rbp: {
      language: 5841
  },
  rcf: {
      language: 5842
  },
  rdb: {
      language: 5843
  },
  rea: {
      language: 5844
  },
  reb: {
      language: 5845
  },
  ree: {
      language: 5846
  },
  reg: {
      language: 5847
  },
  rei: {
      language: 5848
  },
  rej: {
      language: 5849
  },
  rel: {
      language: 5850
  },
  rem: {
      language: 5851
  },
  ren: {
      language: 5852
  },
  rer: {
      language: 5853
  },
  res: {
      language: 5854
  },
  ret: {
      language: 5855
  },
  rey: {
      language: 5856
  },
  rga: {
      language: 5857
  },
  rge: {
      language: 5858
  },
  rgk: {
      language: 5859
  },
  rgn: {
      language: 5860
  },
  rgr: {
      language: 5861
  },
  rgs: {
      language: 5862
  },
  rgu: {
      language: 5863
  },
  rhg: {
      language: 5864
  },
  rhp: {
      language: 5865
  },
  ria: {
      language: 5866
  },
  rib: {
      language: 5867,
      extlang: 8428
  },
  rie: {
      language: 5868
  },
  rif: {
      language: 5869
  },
  ril: {
      language: 5870
  },
  rim: {
      language: 5871
  },
  rin: {
      language: 5872
  },
  rir: {
      language: 5873
  },
  rit: {
      language: 5874
  },
  riu: {
      language: 5875
  },
  rjg: {
      language: 5876
  },
  rji: {
      language: 5877
  },
  rjs: {
      language: 5878
  },
  rka: {
      language: 5879
  },
  rkb: {
      language: 5880
  },
  rkh: {
      language: 5881
  },
  rki: {
      language: 5882
  },
  rkm: {
      language: 5883
  },
  rkt: {
      language: 5884
  },
  rkw: {
      language: 5885
  },
  rma: {
      language: 5886
  },
  rmb: {
      language: 5887
  },
  rmc: {
      language: 5888
  },
  rmd: {
      language: 5889
  },
  rme: {
      language: 5890
  },
  rmf: {
      language: 5891
  },
  rmg: {
      language: 5892
  },
  rmh: {
      language: 5893
  },
  rmi: {
      language: 5894
  },
  rmk: {
      language: 5895
  },
  rml: {
      language: 5896
  },
  rmm: {
      language: 5897
  },
  rmn: {
      language: 5898
  },
  rmo: {
      language: 5899
  },
  rmp: {
      language: 5900
  },
  rmq: {
      language: 5901
  },
  rmr: {
      language: 5902
  },
  rms: {
      language: 5903,
      extlang: 8429
  },
  rmt: {
      language: 5904
  },
  rmu: {
      language: 5905
  },
  rmv: {
      language: 5906
  },
  rmw: {
      language: 5907
  },
  rmx: {
      language: 5908
  },
  rmy: {
      language: 5909
  },
  rmz: {
      language: 5910
  },
  rna: {
      language: 5911
  },
  rnb: {
      language: 5912,
      extlang: 8430
  },
  rnd: {
      language: 5913
  },
  rng: {
      language: 5914
  },
  rnl: {
      language: 5915
  },
  rnn: {
      language: 5916
  },
  rnp: {
      language: 5917
  },
  rnr: {
      language: 5918
  },
  rnw: {
      language: 5919
  },
  roa: {
      language: 5920
  },
  rob: {
      language: 5921
  },
  roc: {
      language: 5922
  },
  rod: {
      language: 5923
  },
  roe: {
      language: 5924
  },
  rof: {
      language: 5925
  },
  rog: {
      language: 5926
  },
  rol: {
      language: 5927
  },
  rom: {
      language: 5928
  },
  roo: {
      language: 5929
  },
  rop: {
      language: 5930
  },
  ror: {
      language: 5931
  },
  rou: {
      language: 5932
  },
  row: {
      language: 5933
  },
  rpn: {
      language: 5934
  },
  rpt: {
      language: 5935
  },
  rri: {
      language: 5936
  },
  rro: {
      language: 5937
  },
  rrt: {
      language: 5938
  },
  rsb: {
      language: 5939
  },
  rsi: {
      language: 5940,
      extlang: 8431
  },
  rsk: {
      language: 5941
  },
  rsl: {
      language: 5942,
      extlang: 8432
  },
  rsm: {
      language: 5943,
      extlang: 8433
  },
  rsn: {
      language: 5944,
      extlang: 8434
  },
  rtc: {
      language: 5945
  },
  rth: {
      language: 5946
  },
  rtm: {
      language: 5947
  },
  rts: {
      language: 5948
  },
  rtw: {
      language: 5949
  },
  rub: {
      language: 5950
  },
  ruc: {
      language: 5951
  },
  rue: {
      language: 5952
  },
  ruf: {
      language: 5953
  },
  rug: {
      language: 5954
  },
  ruh: {
      language: 5955
  },
  rui: {
      language: 5956
  },
  ruk: {
      language: 5957
  },
  ruo: {
      language: 5958
  },
  rup: {
      language: 5959
  },
  ruq: {
      language: 5960
  },
  rut: {
      language: 5961
  },
  ruu: {
      language: 5962
  },
  ruy: {
      language: 5963
  },
  ruz: {
      language: 5964
  },
  rwa: {
      language: 5965
  },
  rwk: {
      language: 5966
  },
  rwl: {
      language: 5967
  },
  rwm: {
      language: 5968
  },
  rwo: {
      language: 5969
  },
  rwr: {
      language: 5970
  },
  rxd: {
      language: 5971
  },
  rxw: {
      language: 5972
  },
  ryn: {
      language: 5973
  },
  rys: {
      language: 5974
  },
  ryu: {
      language: 5975
  },
  rzh: {
      language: 5976
  },
  saa: {
      language: 5977
  },
  sab: {
      language: 5978
  },
  sac: {
      language: 5979
  },
  sad: {
      language: 5980
  },
  sae: {
      language: 5981
  },
  saf: {
      language: 5982
  },
  sah: {
      language: 5983
  },
  sai: {
      language: 5984
  },
  saj: {
      language: 5985
  },
  sak: {
      language: 5986
  },
  sal: {
      language: 5987
  },
  sam: {
      language: 5988
  },
  sao: {
      language: 5989
  },
  sap: {
      language: 5990
  },
  saq: {
      language: 5991
  },
  sar: {
      language: 5992
  },
  sas: {
      language: 5993
  },
  sat: {
      language: 5994
  },
  sau: {
      language: 5995
  },
  sav: {
      language: 5996
  },
  saw: {
      language: 5997
  },
  sax: {
      language: 5998
  },
  say: {
      language: 5999
  },
  saz: {
      language: 6e3
  },
  sba: {
      language: 6001
  },
  sbb: {
      language: 6002
  },
  sbc: {
      language: 6003
  },
  sbd: {
      language: 6004
  },
  sbe: {
      language: 6005
  },
  sbf: {
      language: 6006
  },
  sbg: {
      language: 6007
  },
  sbh: {
      language: 6008
  },
  sbi: {
      language: 6009
  },
  sbj: {
      language: 6010
  },
  sbk: {
      language: 6011
  },
  sbl: {
      language: 6012
  },
  sbm: {
      language: 6013
  },
  sbn: {
      language: 6014
  },
  sbo: {
      language: 6015
  },
  sbp: {
      language: 6016
  },
  sbq: {
      language: 6017
  },
  sbr: {
      language: 6018
  },
  sbs: {
      language: 6019
  },
  sbt: {
      language: 6020
  },
  sbu: {
      language: 6021
  },
  sbv: {
      language: 6022
  },
  sbw: {
      language: 6023
  },
  sbx: {
      language: 6024
  },
  sby: {
      language: 6025
  },
  sbz: {
      language: 6026
  },
  sca: {
      language: 6027
  },
  scb: {
      language: 6028
  },
  sce: {
      language: 6029
  },
  scf: {
      language: 6030
  },
  scg: {
      language: 6031
  },
  sch: {
      language: 6032
  },
  sci: {
      language: 6033
  },
  sck: {
      language: 6034
  },
  scl: {
      language: 6035
  },
  scn: {
      language: 6036
  },
  sco: {
      language: 6037
  },
  scp: {
      language: 6038
  },
  scq: {
      language: 6039
  },
  scs: {
      language: 6040
  },
  sct: {
      language: 6041
  },
  scu: {
      language: 6042
  },
  scv: {
      language: 6043
  },
  scw: {
      language: 6044
  },
  scx: {
      language: 6045
  },
  sda: {
      language: 6046
  },
  sdb: {
      language: 6047
  },
  sdc: {
      language: 6048
  },
  sde: {
      language: 6049
  },
  sdf: {
      language: 6050
  },
  sdg: {
      language: 6051
  },
  sdh: {
      language: 6052
  },
  sdj: {
      language: 6053
  },
  sdk: {
      language: 6054
  },
  sdl: {
      language: 6055,
      extlang: 8435
  },
  sdm: {
      language: 6056
  },
  sdn: {
      language: 6057
  },
  sdo: {
      language: 6058
  },
  sdp: {
      language: 6059
  },
  sdq: {
      language: 6060
  },
  sdr: {
      language: 6061
  },
  sds: {
      language: 6062
  },
  sdt: {
      language: 6063
  },
  sdu: {
      language: 6064
  },
  sdv: {
      language: 6065
  },
  sdx: {
      language: 6066
  },
  sdz: {
      language: 6067
  },
  sea: {
      language: 6068
  },
  seb: {
      language: 6069
  },
  sec: {
      language: 6070
  },
  sed: {
      language: 6071
  },
  see: {
      language: 6072
  },
  sef: {
      language: 6073
  },
  seg: {
      language: 6074
  },
  seh: {
      language: 6075
  },
  sei: {
      language: 6076
  },
  sej: {
      language: 6077
  },
  sek: {
      language: 6078
  },
  sel: {
      language: 6079
  },
  sem: {
      language: 6080
  },
  sen: {
      language: 6081
  },
  seo: {
      language: 6082
  },
  sep: {
      language: 6083
  },
  seq: {
      language: 6084
  },
  ser: {
      language: 6085
  },
  ses: {
      language: 6086
  },
  set: {
      language: 6087
  },
  seu: {
      language: 6088
  },
  sev: {
      language: 6089
  },
  sew: {
      language: 6090
  },
  sey: {
      language: 6091
  },
  sez: {
      language: 6092
  },
  sfb: {
      language: 6093,
      extlang: 8436
  },
  sfe: {
      language: 6094
  },
  sfm: {
      language: 6095
  },
  sfs: {
      language: 6096,
      extlang: 8437
  },
  sfw: {
      language: 6097
  },
  sga: {
      language: 6098
  },
  sgb: {
      language: 6099
  },
  sgc: {
      language: 6100
  },
  sgd: {
      language: 6101
  },
  sge: {
      language: 6102
  },
  sgg: {
      language: 6103,
      extlang: 8438
  },
  sgh: {
      language: 6104
  },
  sgi: {
      language: 6105
  },
  sgj: {
      language: 6106
  },
  sgk: {
      language: 6107
  },
  sgl: {
      language: 6108
  },
  sgm: {
      language: 6109
  },
  sgn: {
      language: 6110
  },
  sgo: {
      language: 6111
  },
  sgp: {
      language: 6112
  },
  sgr: {
      language: 6113
  },
  sgs: {
      language: 6114
  },
  sgt: {
      language: 6115
  },
  sgu: {
      language: 6116
  },
  sgw: {
      language: 6117
  },
  sgx: {
      language: 6118,
      extlang: 8439
  },
  sgy: {
      language: 6119
  },
  sgz: {
      language: 6120
  },
  sha: {
      language: 6121
  },
  shb: {
      language: 6122
  },
  shc: {
      language: 6123
  },
  shd: {
      language: 6124
  },
  she: {
      language: 6125
  },
  shg: {
      language: 6126
  },
  shh: {
      language: 6127
  },
  shi: {
      language: 6128
  },
  shj: {
      language: 6129
  },
  shk: {
      language: 6130
  },
  shl: {
      language: 6131
  },
  shm: {
      language: 6132
  },
  shn: {
      language: 6133
  },
  sho: {
      language: 6134
  },
  shp: {
      language: 6135
  },
  shq: {
      language: 6136
  },
  shr: {
      language: 6137
  },
  shs: {
      language: 6138
  },
  sht: {
      language: 6139
  },
  shu: {
      language: 6140,
      extlang: 8440
  },
  shv: {
      language: 6141
  },
  shw: {
      language: 6142
  },
  shx: {
      language: 6143
  },
  shy: {
      language: 6144
  },
  shz: {
      language: 6145
  },
  sia: {
      language: 6146
  },
  sib: {
      language: 6147
  },
  sid: {
      language: 6148
  },
  sie: {
      language: 6149
  },
  sif: {
      language: 6150
  },
  sig: {
      language: 6151
  },
  sih: {
      language: 6152
  },
  sii: {
      language: 6153
  },
  sij: {
      language: 6154
  },
  sik: {
      language: 6155
  },
  sil: {
      language: 6156
  },
  sim: {
      language: 6157
  },
  sio: {
      language: 6158
  },
  sip: {
      language: 6159
  },
  siq: {
      language: 6160
  },
  sir: {
      language: 6161
  },
  sis: {
      language: 6162
  },
  sit: {
      language: 6163
  },
  siu: {
      language: 6164
  },
  siv: {
      language: 6165
  },
  siw: {
      language: 6166
  },
  six: {
      language: 6167
  },
  siy: {
      language: 6168
  },
  siz: {
      language: 6169
  },
  sja: {
      language: 6170
  },
  sjb: {
      language: 6171
  },
  sjd: {
      language: 6172
  },
  sje: {
      language: 6173
  },
  sjg: {
      language: 6174
  },
  sjk: {
      language: 6175
  },
  sjl: {
      language: 6176
  },
  sjm: {
      language: 6177
  },
  sjn: {
      language: 6178
  },
  sjo: {
      language: 6179
  },
  sjp: {
      language: 6180
  },
  sjr: {
      language: 6181
  },
  sjs: {
      language: 6182
  },
  sjt: {
      language: 6183
  },
  sju: {
      language: 6184
  },
  sjw: {
      language: 6185
  },
  ska: {
      language: 6186
  },
  skb: {
      language: 6187
  },
  skc: {
      language: 6188
  },
  skd: {
      language: 6189
  },
  ske: {
      language: 6190
  },
  skf: {
      language: 6191
  },
  skg: {
      language: 6192
  },
  skh: {
      language: 6193
  },
  ski: {
      language: 6194
  },
  skj: {
      language: 6195
  },
  skk: {
      language: 6196
  },
  skm: {
      language: 6197
  },
  skn: {
      language: 6198
  },
  sko: {
      language: 6199
  },
  skp: {
      language: 6200
  },
  skq: {
      language: 6201
  },
  skr: {
      language: 6202
  },
  sks: {
      language: 6203
  },
  skt: {
      language: 6204
  },
  sku: {
      language: 6205
  },
  skv: {
      language: 6206
  },
  skw: {
      language: 6207
  },
  skx: {
      language: 6208
  },
  sky: {
      language: 6209
  },
  skz: {
      language: 6210
  },
  sla: {
      language: 6211
  },
  slc: {
      language: 6212
  },
  sld: {
      language: 6213
  },
  sle: {
      language: 6214
  },
  slf: {
      language: 6215,
      extlang: 8441
  },
  slg: {
      language: 6216
  },
  slh: {
      language: 6217
  },
  sli: {
      language: 6218
  },
  slj: {
      language: 6219
  },
  sll: {
      language: 6220
  },
  slm: {
      language: 6221
  },
  sln: {
      language: 6222
  },
  slp: {
      language: 6223
  },
  slq: {
      language: 6224
  },
  slr: {
      language: 6225
  },
  sls: {
      language: 6226,
      extlang: 8442
  },
  slt: {
      language: 6227
  },
  slu: {
      language: 6228
  },
  slw: {
      language: 6229
  },
  slx: {
      language: 6230
  },
  sly: {
      language: 6231
  },
  slz: {
      language: 6232
  },
  sma: {
      language: 6233
  },
  smb: {
      language: 6234
  },
  smc: {
      language: 6235
  },
  smd: {
      language: 6236
  },
  smf: {
      language: 6237
  },
  smg: {
      language: 6238
  },
  smh: {
      language: 6239
  },
  smi: {
      language: 6240
  },
  smj: {
      language: 6241
  },
  smk: {
      language: 6242
  },
  sml: {
      language: 6243
  },
  smm: {
      language: 6244
  },
  smn: {
      language: 6245
  },
  smp: {
      language: 6246
  },
  smq: {
      language: 6247
  },
  smr: {
      language: 6248
  },
  sms: {
      language: 6249
  },
  smt: {
      language: 6250
  },
  smu: {
      language: 6251
  },
  smv: {
      language: 6252
  },
  smw: {
      language: 6253
  },
  smx: {
      language: 6254
  },
  smy: {
      language: 6255
  },
  smz: {
      language: 6256
  },
  snb: {
      language: 6257
  },
  snc: {
      language: 6258
  },
  sne: {
      language: 6259
  },
  snf: {
      language: 6260
  },
  sng: {
      language: 6261
  },
  snh: {
      language: 6262
  },
  sni: {
      language: 6263
  },
  snj: {
      language: 6264
  },
  snk: {
      language: 6265
  },
  snl: {
      language: 6266
  },
  snm: {
      language: 6267
  },
  snn: {
      language: 6268
  },
  sno: {
      language: 6269
  },
  snp: {
      language: 6270
  },
  snq: {
      language: 6271
  },
  snr: {
      language: 6272
  },
  sns: {
      language: 6273
  },
  snu: {
      language: 6274
  },
  snv: {
      language: 6275
  },
  snw: {
      language: 6276
  },
  snx: {
      language: 6277
  },
  sny: {
      language: 6278
  },
  snz: {
      language: 6279
  },
  soa: {
      language: 6280
  },
  sob: {
      language: 6281
  },
  soc: {
      language: 6282
  },
  sod: {
      language: 6283
  },
  soe: {
      language: 6284
  },
  sog: {
      language: 6285
  },
  soh: {
      language: 6286
  },
  soi: {
      language: 6287
  },
  soj: {
      language: 6288
  },
  sok: {
      language: 6289
  },
  sol: {
      language: 6290
  },
  son: {
      language: 6291
  },
  soo: {
      language: 6292
  },
  sop: {
      language: 6293
  },
  soq: {
      language: 6294
  },
  sor: {
      language: 6295
  },
  sos: {
      language: 6296
  },
  sou: {
      language: 6297
  },
  sov: {
      language: 6298
  },
  sow: {
      language: 6299
  },
  sox: {
      language: 6300
  },
  soy: {
      language: 6301
  },
  soz: {
      language: 6302
  },
  spb: {
      language: 6303
  },
  spc: {
      language: 6304
  },
  spd: {
      language: 6305
  },
  spe: {
      language: 6306
  },
  spg: {
      language: 6307
  },
  spi: {
      language: 6308
  },
  spk: {
      language: 6309
  },
  spl: {
      language: 6310
  },
  spm: {
      language: 6311
  },
  spn: {
      language: 6312
  },
  spo: {
      language: 6313
  },
  spp: {
      language: 6314
  },
  spq: {
      language: 6315
  },
  spr: {
      language: 6316
  },
  sps: {
      language: 6317
  },
  spt: {
      language: 6318
  },
  spu: {
      language: 6319
  },
  spv: {
      language: 6320
  },
  spx: {
      language: 6321
  },
  spy: {
      language: 6322
  },
  sqa: {
      language: 6323
  },
  sqh: {
      language: 6324
  },
  sqj: {
      language: 6325
  },
  sqk: {
      language: 6326,
      extlang: 8443
  },
  sqm: {
      language: 6327
  },
  sqn: {
      language: 6328
  },
  sqo: {
      language: 6329
  },
  sqq: {
      language: 6330
  },
  sqr: {
      language: 6331
  },
  sqs: {
      language: 6332,
      extlang: 8444
  },
  sqt: {
      language: 6333
  },
  squ: {
      language: 6334
  },
  sqx: {
      language: 6335,
      extlang: 8445
  },
  sra: {
      language: 6336
  },
  srb: {
      language: 6337
  },
  src: {
      language: 6338
  },
  sre: {
      language: 6339
  },
  srf: {
      language: 6340
  },
  srg: {
      language: 6341
  },
  srh: {
      language: 6342
  },
  sri: {
      language: 6343
  },
  srk: {
      language: 6344
  },
  srl: {
      language: 6345
  },
  srm: {
      language: 6346
  },
  srn: {
      language: 6347
  },
  sro: {
      language: 6348
  },
  srq: {
      language: 6349
  },
  srr: {
      language: 6350
  },
  srs: {
      language: 6351
  },
  srt: {
      language: 6352
  },
  sru: {
      language: 6353
  },
  srv: {
      language: 6354
  },
  srw: {
      language: 6355
  },
  srx: {
      language: 6356
  },
  sry: {
      language: 6357
  },
  srz: {
      language: 6358
  },
  ssa: {
      language: 6359
  },
  ssb: {
      language: 6360
  },
  ssc: {
      language: 6361
  },
  ssd: {
      language: 6362
  },
  sse: {
      language: 6363
  },
  ssf: {
      language: 6364
  },
  ssg: {
      language: 6365
  },
  ssh: {
      language: 6366,
      extlang: 8446
  },
  ssi: {
      language: 6367
  },
  ssj: {
      language: 6368
  },
  ssk: {
      language: 6369
  },
  ssl: {
      language: 6370
  },
  ssm: {
      language: 6371
  },
  ssn: {
      language: 6372
  },
  sso: {
      language: 6373
  },
  ssp: {
      language: 6374,
      extlang: 8447
  },
  ssq: {
      language: 6375
  },
  ssr: {
      language: 6376,
      extlang: 8448
  },
  sss: {
      language: 6377
  },
  sst: {
      language: 6378
  },
  ssu: {
      language: 6379
  },
  ssv: {
      language: 6380
  },
  ssx: {
      language: 6381
  },
  ssy: {
      language: 6382
  },
  ssz: {
      language: 6383
  },
  sta: {
      language: 6384
  },
  stb: {
      language: 6385
  },
  std: {
      language: 6386
  },
  ste: {
      language: 6387
  },
  stf: {
      language: 6388
  },
  stg: {
      language: 6389
  },
  sth: {
      language: 6390
  },
  sti: {
      language: 6391
  },
  stj: {
      language: 6392
  },
  stk: {
      language: 6393
  },
  stl: {
      language: 6394
  },
  stm: {
      language: 6395
  },
  stn: {
      language: 6396
  },
  sto: {
      language: 6397
  },
  stp: {
      language: 6398
  },
  stq: {
      language: 6399
  },
  str: {
      language: 6400
  },
  sts: {
      language: 6401
  },
  stt: {
      language: 6402
  },
  stu: {
      language: 6403
  },
  stv: {
      language: 6404
  },
  stw: {
      language: 6405
  },
  sty: {
      language: 6406
  },
  sua: {
      language: 6407
  },
  sub: {
      language: 6408
  },
  suc: {
      language: 6409
  },
  sue: {
      language: 6410
  },
  sug: {
      language: 6411
  },
  sui: {
      language: 6412
  },
  suj: {
      language: 6413
  },
  suk: {
      language: 6414
  },
  sul: {
      language: 6415
  },
  sum: {
      language: 6416
  },
  suo: {
      language: 6417
  },
  suq: {
      language: 6418
  },
  sur: {
      language: 6419
  },
  sus: {
      language: 6420
  },
  sut: {
      language: 6421
  },
  suv: {
      language: 6422
  },
  suw: {
      language: 6423
  },
  sux: {
      language: 6424
  },
  suy: {
      language: 6425
  },
  suz: {
      language: 6426
  },
  sva: {
      language: 6427
  },
  svb: {
      language: 6428
  },
  svc: {
      language: 6429
  },
  sve: {
      language: 6430
  },
  svk: {
      language: 6431,
      extlang: 8449
  },
  svm: {
      language: 6432
  },
  svr: {
      language: 6433
  },
  svs: {
      language: 6434
  },
  svx: {
      language: 6435
  },
  swb: {
      language: 6436
  },
  swc: {
      language: 6437,
      extlang: 8450
  },
  swf: {
      language: 6438
  },
  swg: {
      language: 6439
  },
  swh: {
      language: 6440,
      extlang: 8451
  },
  swi: {
      language: 6441
  },
  swj: {
      language: 6442
  },
  swk: {
      language: 6443
  },
  swl: {
      language: 6444,
      extlang: 8452
  },
  swm: {
      language: 6445
  },
  swn: {
      language: 6446
  },
  swo: {
      language: 6447
  },
  swp: {
      language: 6448
  },
  swq: {
      language: 6449
  },
  swr: {
      language: 6450
  },
  sws: {
      language: 6451
  },
  swt: {
      language: 6452
  },
  swu: {
      language: 6453
  },
  swv: {
      language: 6454
  },
  sww: {
      language: 6455
  },
  swx: {
      language: 6456
  },
  swy: {
      language: 6457
  },
  sxb: {
      language: 6458
  },
  sxc: {
      language: 6459
  },
  sxe: {
      language: 6460
  },
  sxg: {
      language: 6461
  },
  sxk: {
      language: 6462
  },
  sxl: {
      language: 6463
  },
  sxm: {
      language: 6464
  },
  sxn: {
      language: 6465
  },
  sxo: {
      language: 6466
  },
  sxr: {
      language: 6467
  },
  sxs: {
      language: 6468
  },
  sxu: {
      language: 6469
  },
  sxw: {
      language: 6470
  },
  sya: {
      language: 6471
  },
  syb: {
      language: 6472
  },
  syc: {
      language: 6473
  },
  syd: {
      language: 6474
  },
  syi: {
      language: 6475
  },
  syk: {
      language: 6476
  },
  syl: {
      language: 6477
  },
  sym: {
      language: 6478
  },
  syn: {
      language: 6479
  },
  syo: {
      language: 6480
  },
  syr: {
      language: 6481
  },
  sys: {
      language: 6482
  },
  syw: {
      language: 6483
  },
  syx: {
      language: 6484
  },
  syy: {
      language: 6485,
      extlang: 8453
  },
  sza: {
      language: 6486
  },
  szb: {
      language: 6487
  },
  szc: {
      language: 6488
  },
  szd: {
      language: 6489
  },
  sze: {
      language: 6490
  },
  szg: {
      language: 6491
  },
  szl: {
      language: 6492
  },
  szn: {
      language: 6493
  },
  szp: {
      language: 6494
  },
  szs: {
      language: 6495,
      extlang: 8454
  },
  szv: {
      language: 6496
  },
  szw: {
      language: 6497
  },
  szy: {
      language: 6498
  },
  taa: {
      language: 6499
  },
  tab: {
      language: 6500
  },
  tac: {
      language: 6501
  },
  tad: {
      language: 6502
  },
  tae: {
      language: 6503
  },
  taf: {
      language: 6504
  },
  tag: {
      language: 6505
  },
  tai: {
      language: 6506
  },
  taj: {
      language: 6507
  },
  tak: {
      language: 6508
  },
  tal: {
      language: 6509
  },
  tan: {
      language: 6510
  },
  tao: {
      language: 6511
  },
  tap: {
      language: 6512
  },
  taq: {
      language: 6513
  },
  tar: {
      language: 6514
  },
  tas: {
      language: 6515
  },
  tau: {
      language: 6516
  },
  tav: {
      language: 6517
  },
  taw: {
      language: 6518
  },
  tax: {
      language: 6519
  },
  tay: {
      language: 6520
  },
  taz: {
      language: 6521
  },
  tba: {
      language: 6522
  },
  tbb: {
      language: 6523
  },
  tbc: {
      language: 6524
  },
  tbd: {
      language: 6525
  },
  tbe: {
      language: 6526
  },
  tbf: {
      language: 6527
  },
  tbg: {
      language: 6528
  },
  tbh: {
      language: 6529
  },
  tbi: {
      language: 6530
  },
  tbj: {
      language: 6531
  },
  tbk: {
      language: 6532
  },
  tbl: {
      language: 6533
  },
  tbm: {
      language: 6534
  },
  tbn: {
      language: 6535
  },
  tbo: {
      language: 6536
  },
  tbp: {
      language: 6537
  },
  tbq: {
      language: 6538
  },
  tbr: {
      language: 6539
  },
  tbs: {
      language: 6540
  },
  tbt: {
      language: 6541
  },
  tbu: {
      language: 6542
  },
  tbv: {
      language: 6543
  },
  tbw: {
      language: 6544
  },
  tbx: {
      language: 6545
  },
  tby: {
      language: 6546
  },
  tbz: {
      language: 6547
  },
  tca: {
      language: 6548
  },
  tcb: {
      language: 6549
  },
  tcc: {
      language: 6550
  },
  tcd: {
      language: 6551
  },
  tce: {
      language: 6552
  },
  tcf: {
      language: 6553
  },
  tcg: {
      language: 6554
  },
  tch: {
      language: 6555
  },
  tci: {
      language: 6556
  },
  tck: {
      language: 6557
  },
  tcl: {
      language: 6558
  },
  tcm: {
      language: 6559
  },
  tcn: {
      language: 6560
  },
  tco: {
      language: 6561
  },
  tcp: {
      language: 6562
  },
  tcq: {
      language: 6563
  },
  tcs: {
      language: 6564
  },
  tct: {
      language: 6565
  },
  tcu: {
      language: 6566
  },
  tcw: {
      language: 6567
  },
  tcx: {
      language: 6568
  },
  tcy: {
      language: 6569
  },
  tcz: {
      language: 6570
  },
  tda: {
      language: 6571
  },
  tdb: {
      language: 6572
  },
  tdc: {
      language: 6573
  },
  tdd: {
      language: 6574
  },
  tde: {
      language: 6575
  },
  tdf: {
      language: 6576
  },
  tdg: {
      language: 6577
  },
  tdh: {
      language: 6578
  },
  tdi: {
      language: 6579
  },
  tdj: {
      language: 6580
  },
  tdk: {
      language: 6581
  },
  tdl: {
      language: 6582
  },
  tdm: {
      language: 6583
  },
  tdn: {
      language: 6584
  },
  tdo: {
      language: 6585
  },
  tdq: {
      language: 6586
  },
  tdr: {
      language: 6587
  },
  tds: {
      language: 6588
  },
  tdt: {
      language: 6589
  },
  tdu: {
      language: 6590
  },
  tdv: {
      language: 6591
  },
  tdx: {
      language: 6592
  },
  tdy: {
      language: 6593
  },
  tea: {
      language: 6594
  },
  teb: {
      language: 6595
  },
  tec: {
      language: 6596
  },
  ted: {
      language: 6597
  },
  tee: {
      language: 6598
  },
  tef: {
      language: 6599
  },
  teg: {
      language: 6600
  },
  teh: {
      language: 6601
  },
  tei: {
      language: 6602
  },
  tek: {
      language: 6603
  },
  tem: {
      language: 6604
  },
  ten: {
      language: 6605
  },
  teo: {
      language: 6606
  },
  tep: {
      language: 6607
  },
  teq: {
      language: 6608
  },
  ter: {
      language: 6609
  },
  tes: {
      language: 6610
  },
  tet: {
      language: 6611
  },
  teu: {
      language: 6612
  },
  tev: {
      language: 6613
  },
  tew: {
      language: 6614
  },
  tex: {
      language: 6615
  },
  tey: {
      language: 6616
  },
  tez: {
      language: 6617
  },
  tfi: {
      language: 6618
  },
  tfn: {
      language: 6619
  },
  tfo: {
      language: 6620
  },
  tfr: {
      language: 6621
  },
  tft: {
      language: 6622
  },
  tga: {
      language: 6623
  },
  tgb: {
      language: 6624
  },
  tgc: {
      language: 6625
  },
  tgd: {
      language: 6626
  },
  tge: {
      language: 6627
  },
  tgf: {
      language: 6628
  },
  tgg: {
      language: 6629
  },
  tgh: {
      language: 6630
  },
  tgi: {
      language: 6631
  },
  tgj: {
      language: 6632
  },
  tgn: {
      language: 6633
  },
  tgo: {
      language: 6634
  },
  tgp: {
      language: 6635
  },
  tgq: {
      language: 6636
  },
  tgr: {
      language: 6637
  },
  tgs: {
      language: 6638
  },
  tgt: {
      language: 6639
  },
  tgu: {
      language: 6640
  },
  tgv: {
      language: 6641
  },
  tgw: {
      language: 6642
  },
  tgx: {
      language: 6643
  },
  tgy: {
      language: 6644
  },
  tgz: {
      language: 6645
  },
  thc: {
      language: 6646
  },
  thd: {
      language: 6647
  },
  the: {
      language: 6648
  },
  thf: {
      language: 6649
  },
  thh: {
      language: 6650
  },
  thi: {
      language: 6651
  },
  thk: {
      language: 6652
  },
  thl: {
      language: 6653
  },
  thm: {
      language: 6654
  },
  thn: {
      language: 6655
  },
  thp: {
      language: 6656
  },
  thq: {
      language: 6657
  },
  thr: {
      language: 6658
  },
  ths: {
      language: 6659
  },
  tht: {
      language: 6660
  },
  thu: {
      language: 6661
  },
  thv: {
      language: 6662
  },
  thw: {
      language: 6663
  },
  thx: {
      language: 6664
  },
  thy: {
      language: 6665
  },
  thz: {
      language: 6666
  },
  tia: {
      language: 6667
  },
  tic: {
      language: 6668
  },
  tid: {
      language: 6669
  },
  tie: {
      language: 6670
  },
  tif: {
      language: 6671
  },
  tig: {
      language: 6672
  },
  tih: {
      language: 6673
  },
  tii: {
      language: 6674
  },
  tij: {
      language: 6675
  },
  tik: {
      language: 6676
  },
  til: {
      language: 6677
  },
  tim: {
      language: 6678
  },
  tin: {
      language: 6679
  },
  tio: {
      language: 6680
  },
  tip: {
      language: 6681
  },
  tiq: {
      language: 6682
  },
  tis: {
      language: 6683
  },
  tit: {
      language: 6684
  },
  tiu: {
      language: 6685
  },
  tiv: {
      language: 6686
  },
  tiw: {
      language: 6687
  },
  tix: {
      language: 6688
  },
  tiy: {
      language: 6689
  },
  tiz: {
      language: 6690
  },
  tja: {
      language: 6691
  },
  tjg: {
      language: 6692
  },
  tji: {
      language: 6693
  },
  tjj: {
      language: 6694
  },
  tjl: {
      language: 6695
  },
  tjm: {
      language: 6696
  },
  tjn: {
      language: 6697
  },
  tjo: {
      language: 6698
  },
  tjp: {
      language: 6699
  },
  tjs: {
      language: 6700
  },
  tju: {
      language: 6701
  },
  tjw: {
      language: 6702
  },
  tka: {
      language: 6703
  },
  tkb: {
      language: 6704
  },
  tkd: {
      language: 6705
  },
  tke: {
      language: 6706
  },
  tkf: {
      language: 6707
  },
  tkg: {
      language: 6708
  },
  tkk: {
      language: 6709
  },
  tkl: {
      language: 6710
  },
  tkm: {
      language: 6711
  },
  tkn: {
      language: 6712
  },
  tkp: {
      language: 6713
  },
  tkq: {
      language: 6714
  },
  tkr: {
      language: 6715
  },
  tks: {
      language: 6716
  },
  tkt: {
      language: 6717
  },
  tku: {
      language: 6718
  },
  tkv: {
      language: 6719
  },
  tkw: {
      language: 6720
  },
  tkx: {
      language: 6721
  },
  tkz: {
      language: 6722
  },
  tla: {
      language: 6723
  },
  tlb: {
      language: 6724
  },
  tlc: {
      language: 6725
  },
  tld: {
      language: 6726
  },
  tlf: {
      language: 6727
  },
  tlg: {
      language: 6728
  },
  tlh: {
      language: 6729
  },
  tli: {
      language: 6730
  },
  tlj: {
      language: 6731
  },
  tlk: {
      language: 6732
  },
  tll: {
      language: 6733
  },
  tlm: {
      language: 6734
  },
  tln: {
      language: 6735
  },
  tlo: {
      language: 6736
  },
  tlp: {
      language: 6737
  },
  tlq: {
      language: 6738
  },
  tlr: {
      language: 6739
  },
  tls: {
      language: 6740
  },
  tlt: {
      language: 6741
  },
  tlu: {
      language: 6742
  },
  tlv: {
      language: 6743
  },
  tlw: {
      language: 6744
  },
  tlx: {
      language: 6745
  },
  tly: {
      language: 6746
  },
  tma: {
      language: 6747
  },
  tmb: {
      language: 6748
  },
  tmc: {
      language: 6749
  },
  tmd: {
      language: 6750
  },
  tme: {
      language: 6751
  },
  tmf: {
      language: 6752
  },
  tmg: {
      language: 6753
  },
  tmh: {
      language: 6754
  },
  tmi: {
      language: 6755
  },
  tmj: {
      language: 6756
  },
  tmk: {
      language: 6757
  },
  tml: {
      language: 6758
  },
  tmm: {
      language: 6759
  },
  tmn: {
      language: 6760
  },
  tmo: {
      language: 6761
  },
  tmp: {
      language: 6762
  },
  tmq: {
      language: 6763
  },
  tmr: {
      language: 6764
  },
  tms: {
      language: 6765
  },
  tmt: {
      language: 6766
  },
  tmu: {
      language: 6767
  },
  tmv: {
      language: 6768
  },
  tmw: {
      language: 6769,
      extlang: 8455
  },
  tmy: {
      language: 6770
  },
  tmz: {
      language: 6771
  },
  tna: {
      language: 6772
  },
  tnb: {
      language: 6773
  },
  tnc: {
      language: 6774
  },
  tnd: {
      language: 6775
  },
  tne: {
      language: 6776
  },
  tnf: {
      language: 6777
  },
  tng: {
      language: 6778
  },
  tnh: {
      language: 6779
  },
  tni: {
      language: 6780
  },
  tnk: {
      language: 6781
  },
  tnl: {
      language: 6782
  },
  tnm: {
      language: 6783
  },
  tnn: {
      language: 6784
  },
  tno: {
      language: 6785
  },
  tnp: {
      language: 6786
  },
  tnq: {
      language: 6787
  },
  tnr: {
      language: 6788
  },
  tns: {
      language: 6789
  },
  tnt: {
      language: 6790
  },
  tnu: {
      language: 6791
  },
  tnv: {
      language: 6792
  },
  tnw: {
      language: 6793
  },
  tnx: {
      language: 6794
  },
  tny: {
      language: 6795
  },
  tnz: {
      language: 6796
  },
  tob: {
      language: 6797
  },
  toc: {
      language: 6798
  },
  tod: {
      language: 6799
  },
  toe: {
      language: 6800
  },
  tof: {
      language: 6801
  },
  tog: {
      language: 6802
  },
  toh: {
      language: 6803
  },
  toi: {
      language: 6804
  },
  toj: {
      language: 6805
  },
  tok: {
      language: 6806
  },
  tol: {
      language: 6807
  },
  tom: {
      language: 6808
  },
  too: {
      language: 6809
  },
  top: {
      language: 6810
  },
  toq: {
      language: 6811
  },
  tor: {
      language: 6812
  },
  tos: {
      language: 6813
  },
  tou: {
      language: 6814
  },
  tov: {
      language: 6815
  },
  tow: {
      language: 6816
  },
  tox: {
      language: 6817
  },
  toy: {
      language: 6818
  },
  toz: {
      language: 6819
  },
  tpa: {
      language: 6820
  },
  tpc: {
      language: 6821
  },
  tpe: {
      language: 6822
  },
  tpf: {
      language: 6823
  },
  tpg: {
      language: 6824
  },
  tpi: {
      language: 6825
  },
  tpj: {
      language: 6826
  },
  tpk: {
      language: 6827
  },
  tpl: {
      language: 6828
  },
  tpm: {
      language: 6829
  },
  tpn: {
      language: 6830
  },
  tpo: {
      language: 6831
  },
  tpp: {
      language: 6832
  },
  tpq: {
      language: 6833
  },
  tpr: {
      language: 6834
  },
  tpt: {
      language: 6835
  },
  tpu: {
      language: 6836
  },
  tpv: {
      language: 6837
  },
  tpw: {
      language: 6838
  },
  tpx: {
      language: 6839
  },
  tpy: {
      language: 6840
  },
  tpz: {
      language: 6841
  },
  tqb: {
      language: 6842
  },
  tql: {
      language: 6843
  },
  tqm: {
      language: 6844
  },
  tqn: {
      language: 6845
  },
  tqo: {
      language: 6846
  },
  tqp: {
      language: 6847
  },
  tqq: {
      language: 6848
  },
  tqr: {
      language: 6849
  },
  tqt: {
      language: 6850
  },
  tqu: {
      language: 6851
  },
  tqw: {
      language: 6852
  },
  tra: {
      language: 6853
  },
  trb: {
      language: 6854
  },
  trc: {
      language: 6855
  },
  trd: {
      language: 6856
  },
  tre: {
      language: 6857
  },
  trf: {
      language: 6858
  },
  trg: {
      language: 6859
  },
  trh: {
      language: 6860
  },
  tri: {
      language: 6861
  },
  trj: {
      language: 6862
  },
  trk: {
      language: 6863
  },
  trl: {
      language: 6864
  },
  trm: {
      language: 6865
  },
  trn: {
      language: 6866
  },
  tro: {
      language: 6867
  },
  trp: {
      language: 6868
  },
  trq: {
      language: 6869
  },
  trr: {
      language: 6870
  },
  trs: {
      language: 6871
  },
  trt: {
      language: 6872
  },
  tru: {
      language: 6873
  },
  trv: {
      language: 6874
  },
  trw: {
      language: 6875
  },
  trx: {
      language: 6876
  },
  try: {
      language: 6877
  },
  trz: {
      language: 6878
  },
  tsa: {
      language: 6879
  },
  tsb: {
      language: 6880
  },
  tsc: {
      language: 6881
  },
  tsd: {
      language: 6882
  },
  tse: {
      language: 6883,
      extlang: 8456
  },
  tsf: {
      language: 6884
  },
  tsg: {
      language: 6885
  },
  tsh: {
      language: 6886
  },
  tsi: {
      language: 6887
  },
  tsj: {
      language: 6888
  },
  tsk: {
      language: 6889
  },
  tsl: {
      language: 6890
  },
  tsm: {
      language: 6891,
      extlang: 8457
  },
  tsp: {
      language: 6892
  },
  tsq: {
      language: 6893,
      extlang: 8458
  },
  tsr: {
      language: 6894
  },
  tss: {
      language: 6895,
      extlang: 8459
  },
  tst: {
      language: 6896
  },
  tsu: {
      language: 6897
  },
  tsv: {
      language: 6898
  },
  tsw: {
      language: 6899
  },
  tsx: {
      language: 6900
  },
  tsy: {
      language: 6901,
      extlang: 8460
  },
  tsz: {
      language: 6902
  },
  tta: {
      language: 6903
  },
  ttb: {
      language: 6904
  },
  ttc: {
      language: 6905
  },
  ttd: {
      language: 6906
  },
  tte: {
      language: 6907
  },
  ttf: {
      language: 6908
  },
  ttg: {
      language: 6909
  },
  tth: {
      language: 6910
  },
  tti: {
      language: 6911
  },
  ttj: {
      language: 6912
  },
  ttk: {
      language: 6913
  },
  ttl: {
      language: 6914
  },
  ttm: {
      language: 6915
  },
  ttn: {
      language: 6916
  },
  tto: {
      language: 6917
  },
  ttp: {
      language: 6918
  },
  ttq: {
      language: 6919
  },
  ttr: {
      language: 6920
  },
  tts: {
      language: 6921
  },
  ttt: {
      language: 6922
  },
  ttu: {
      language: 6923
  },
  ttv: {
      language: 6924
  },
  ttw: {
      language: 6925
  },
  tty: {
      language: 6926
  },
  ttz: {
      language: 6927
  },
  tua: {
      language: 6928
  },
  tub: {
      language: 6929
  },
  tuc: {
      language: 6930
  },
  tud: {
      language: 6931
  },
  tue: {
      language: 6932
  },
  tuf: {
      language: 6933
  },
  tug: {
      language: 6934
  },
  tuh: {
      language: 6935
  },
  tui: {
      language: 6936
  },
  tuj: {
      language: 6937
  },
  tul: {
      language: 6938
  },
  tum: {
      language: 6939
  },
  tun: {
      language: 6940
  },
  tuo: {
      language: 6941
  },
  tup: {
      language: 6942
  },
  tuq: {
      language: 6943
  },
  tus: {
      language: 6944
  },
  tut: {
      language: 6945
  },
  tuu: {
      language: 6946
  },
  tuv: {
      language: 6947
  },
  tuw: {
      language: 6948
  },
  tux: {
      language: 6949
  },
  tuy: {
      language: 6950
  },
  tuz: {
      language: 6951
  },
  tva: {
      language: 6952
  },
  tvd: {
      language: 6953
  },
  tve: {
      language: 6954
  },
  tvk: {
      language: 6955
  },
  tvl: {
      language: 6956
  },
  tvm: {
      language: 6957
  },
  tvn: {
      language: 6958
  },
  tvo: {
      language: 6959
  },
  tvs: {
      language: 6960
  },
  tvt: {
      language: 6961
  },
  tvu: {
      language: 6962
  },
  tvw: {
      language: 6963
  },
  tvx: {
      language: 6964
  },
  tvy: {
      language: 6965
  },
  twa: {
      language: 6966
  },
  twb: {
      language: 6967
  },
  twc: {
      language: 6968
  },
  twd: {
      language: 6969
  },
  twe: {
      language: 6970
  },
  twf: {
      language: 6971
  },
  twg: {
      language: 6972
  },
  twh: {
      language: 6973
  },
  twl: {
      language: 6974
  },
  twm: {
      language: 6975
  },
  twn: {
      language: 6976
  },
  two: {
      language: 6977
  },
  twp: {
      language: 6978
  },
  twq: {
      language: 6979
  },
  twr: {
      language: 6980
  },
  twt: {
      language: 6981
  },
  twu: {
      language: 6982
  },
  tww: {
      language: 6983
  },
  twx: {
      language: 6984
  },
  twy: {
      language: 6985
  },
  txa: {
      language: 6986
  },
  txb: {
      language: 6987
  },
  txc: {
      language: 6988
  },
  txe: {
      language: 6989
  },
  txg: {
      language: 6990
  },
  txh: {
      language: 6991
  },
  txi: {
      language: 6992
  },
  txj: {
      language: 6993
  },
  txm: {
      language: 6994
  },
  txn: {
      language: 6995
  },
  txo: {
      language: 6996
  },
  txq: {
      language: 6997
  },
  txr: {
      language: 6998
  },
  txs: {
      language: 6999
  },
  txt: {
      language: 7e3
  },
  txu: {
      language: 7001
  },
  txx: {
      language: 7002
  },
  txy: {
      language: 7003
  },
  tya: {
      language: 7004
  },
  tye: {
      language: 7005
  },
  tyh: {
      language: 7006
  },
  tyi: {
      language: 7007
  },
  tyj: {
      language: 7008
  },
  tyl: {
      language: 7009
  },
  tyn: {
      language: 7010
  },
  typ: {
      language: 7011
  },
  tyr: {
      language: 7012
  },
  tys: {
      language: 7013
  },
  tyt: {
      language: 7014
  },
  tyu: {
      language: 7015
  },
  tyv: {
      language: 7016
  },
  tyx: {
      language: 7017
  },
  tyy: {
      language: 7018
  },
  tyz: {
      language: 7019
  },
  tza: {
      language: 7020,
      extlang: 8461
  },
  tzh: {
      language: 7021
  },
  tzj: {
      language: 7022
  },
  tzl: {
      language: 7023
  },
  tzm: {
      language: 7024
  },
  tzn: {
      language: 7025
  },
  tzo: {
      language: 7026
  },
  tzx: {
      language: 7027
  },
  uam: {
      language: 7028
  },
  uan: {
      language: 7029
  },
  uar: {
      language: 7030
  },
  uba: {
      language: 7031
  },
  ubi: {
      language: 7032
  },
  ubl: {
      language: 7033
  },
  ubr: {
      language: 7034
  },
  ubu: {
      language: 7035
  },
  uby: {
      language: 7036
  },
  uda: {
      language: 7037
  },
  ude: {
      language: 7038
  },
  udg: {
      language: 7039
  },
  udi: {
      language: 7040
  },
  udj: {
      language: 7041
  },
  udl: {
      language: 7042
  },
  udm: {
      language: 7043
  },
  udu: {
      language: 7044
  },
  ues: {
      language: 7045
  },
  ufi: {
      language: 7046
  },
  uga: {
      language: 7047
  },
  ugb: {
      language: 7048
  },
  uge: {
      language: 7049
  },
  ugh: {
      language: 7050
  },
  ugn: {
      language: 7051,
      extlang: 8462
  },
  ugo: {
      language: 7052
  },
  ugy: {
      language: 7053,
      extlang: 8463
  },
  uha: {
      language: 7054
  },
  uhn: {
      language: 7055
  },
  uis: {
      language: 7056
  },
  uiv: {
      language: 7057
  },
  uji: {
      language: 7058
  },
  uka: {
      language: 7059
  },
  ukg: {
      language: 7060
  },
  ukh: {
      language: 7061
  },
  uki: {
      language: 7062
  },
  ukk: {
      language: 7063
  },
  ukl: {
      language: 7064,
      extlang: 8464
  },
  ukp: {
      language: 7065
  },
  ukq: {
      language: 7066
  },
  uks: {
      language: 7067,
      extlang: 8465
  },
  uku: {
      language: 7068
  },
  ukv: {
      language: 7069
  },
  ukw: {
      language: 7070
  },
  uky: {
      language: 7071
  },
  ula: {
      language: 7072
  },
  ulb: {
      language: 7073
  },
  ulc: {
      language: 7074
  },
  ule: {
      language: 7075
  },
  ulf: {
      language: 7076
  },
  uli: {
      language: 7077
  },
  ulk: {
      language: 7078
  },
  ull: {
      language: 7079
  },
  ulm: {
      language: 7080
  },
  uln: {
      language: 7081
  },
  ulu: {
      language: 7082
  },
  ulw: {
      language: 7083
  },
  uma: {
      language: 7084
  },
  umb: {
      language: 7085
  },
  umc: {
      language: 7086
  },
  umd: {
      language: 7087
  },
  umg: {
      language: 7088
  },
  umi: {
      language: 7089
  },
  umm: {
      language: 7090
  },
  umn: {
      language: 7091
  },
  umo: {
      language: 7092
  },
  ump: {
      language: 7093
  },
  umr: {
      language: 7094
  },
  ums: {
      language: 7095
  },
  umu: {
      language: 7096
  },
  una: {
      language: 7097
  },
  und: {
      language: 7098
  },
  une: {
      language: 7099
  },
  ung: {
      language: 7100
  },
  uni: {
      language: 7101
  },
  unk: {
      language: 7102
  },
  unm: {
      language: 7103
  },
  unn: {
      language: 7104
  },
  unp: {
      language: 7105
  },
  unr: {
      language: 7106
  },
  unu: {
      language: 7107
  },
  unx: {
      language: 7108
  },
  unz: {
      language: 7109
  },
  uok: {
      language: 7110
  },
  uon: {
      language: 7111
  },
  upi: {
      language: 7112
  },
  upv: {
      language: 7113
  },
  ura: {
      language: 7114
  },
  urb: {
      language: 7115
  },
  urc: {
      language: 7116
  },
  ure: {
      language: 7117
  },
  urf: {
      language: 7118
  },
  urg: {
      language: 7119
  },
  urh: {
      language: 7120
  },
  uri: {
      language: 7121
  },
  urj: {
      language: 7122
  },
  urk: {
      language: 7123,
      extlang: 8466
  },
  url: {
      language: 7124
  },
  urm: {
      language: 7125
  },
  urn: {
      language: 7126
  },
  uro: {
      language: 7127
  },
  urp: {
      language: 7128
  },
  urr: {
      language: 7129
  },
  urt: {
      language: 7130
  },
  uru: {
      language: 7131
  },
  urv: {
      language: 7132
  },
  urw: {
      language: 7133
  },
  urx: {
      language: 7134
  },
  ury: {
      language: 7135
  },
  urz: {
      language: 7136
  },
  usa: {
      language: 7137
  },
  ush: {
      language: 7138
  },
  usi: {
      language: 7139
  },
  usk: {
      language: 7140
  },
  usp: {
      language: 7141
  },
  uss: {
      language: 7142
  },
  usu: {
      language: 7143
  },
  uta: {
      language: 7144
  },
  ute: {
      language: 7145
  },
  uth: {
      language: 7146
  },
  utp: {
      language: 7147
  },
  utr: {
      language: 7148
  },
  utu: {
      language: 7149
  },
  uum: {
      language: 7150
  },
  uun: {
      language: 7151
  },
  uur: {
      language: 7152
  },
  uuu: {
      language: 7153
  },
  uve: {
      language: 7154
  },
  uvh: {
      language: 7155
  },
  uvl: {
      language: 7156
  },
  uwa: {
      language: 7157
  },
  uya: {
      language: 7158
  },
  uzn: {
      language: 7159,
      extlang: 8467
  },
  uzs: {
      language: 7160,
      extlang: 8468
  },
  vaa: {
      language: 7161
  },
  vae: {
      language: 7162
  },
  vaf: {
      language: 7163
  },
  vag: {
      language: 7164
  },
  vah: {
      language: 7165
  },
  vai: {
      language: 7166
  },
  vaj: {
      language: 7167
  },
  val: {
      language: 7168
  },
  vam: {
      language: 7169
  },
  van: {
      language: 7170
  },
  vao: {
      language: 7171
  },
  vap: {
      language: 7172
  },
  var: {
      language: 7173
  },
  vas: {
      language: 7174
  },
  vau: {
      language: 7175
  },
  vav: {
      language: 7176
  },
  vay: {
      language: 7177
  },
  vbb: {
      language: 7178
  },
  vbk: {
      language: 7179
  },
  vec: {
      language: 7180
  },
  ved: {
      language: 7181
  },
  vel: {
      language: 7182
  },
  vem: {
      language: 7183
  },
  veo: {
      language: 7184
  },
  vep: {
      language: 7185
  },
  ver: {
      language: 7186
  },
  vgr: {
      language: 7187
  },
  vgt: {
      language: 7188,
      extlang: 8469
  },
  vic: {
      language: 7189
  },
  vid: {
      language: 7190
  },
  vif: {
      language: 7191
  },
  vig: {
      language: 7192
  },
  vil: {
      language: 7193
  },
  vin: {
      language: 7194
  },
  vis: {
      language: 7195
  },
  vit: {
      language: 7196
  },
  viv: {
      language: 7197
  },
  vka: {
      language: 7198
  },
  vki: {
      language: 7199
  },
  vkj: {
      language: 7200
  },
  vkk: {
      language: 7201,
      extlang: 8470
  },
  vkl: {
      language: 7202
  },
  vkm: {
      language: 7203
  },
  vkn: {
      language: 7204
  },
  vko: {
      language: 7205
  },
  vkp: {
      language: 7206
  },
  vkt: {
      language: 7207,
      extlang: 8471
  },
  vku: {
      language: 7208
  },
  vkz: {
      language: 7209
  },
  vlp: {
      language: 7210
  },
  vls: {
      language: 7211
  },
  vma: {
      language: 7212
  },
  vmb: {
      language: 7213
  },
  vmc: {
      language: 7214
  },
  vmd: {
      language: 7215
  },
  vme: {
      language: 7216
  },
  vmf: {
      language: 7217
  },
  vmg: {
      language: 7218
  },
  vmh: {
      language: 7219
  },
  vmi: {
      language: 7220
  },
  vmj: {
      language: 7221
  },
  vmk: {
      language: 7222
  },
  vml: {
      language: 7223
  },
  vmm: {
      language: 7224
  },
  vmp: {
      language: 7225
  },
  vmq: {
      language: 7226
  },
  vmr: {
      language: 7227
  },
  vms: {
      language: 7228
  },
  vmu: {
      language: 7229
  },
  vmv: {
      language: 7230
  },
  vmw: {
      language: 7231
  },
  vmx: {
      language: 7232
  },
  vmy: {
      language: 7233
  },
  vmz: {
      language: 7234
  },
  vnk: {
      language: 7235
  },
  vnm: {
      language: 7236
  },
  vnp: {
      language: 7237
  },
  vor: {
      language: 7238
  },
  vot: {
      language: 7239
  },
  vra: {
      language: 7240
  },
  vro: {
      language: 7241
  },
  vrs: {
      language: 7242
  },
  vrt: {
      language: 7243
  },
  vsi: {
      language: 7244,
      extlang: 8472
  },
  vsl: {
      language: 7245,
      extlang: 8473
  },
  vsv: {
      language: 7246,
      extlang: 8474
  },
  vto: {
      language: 7247
  },
  vum: {
      language: 7248
  },
  vun: {
      language: 7249
  },
  vut: {
      language: 7250
  },
  vwa: {
      language: 7251
  },
  waa: {
      language: 7252
  },
  wab: {
      language: 7253
  },
  wac: {
      language: 7254
  },
  wad: {
      language: 7255
  },
  wae: {
      language: 7256
  },
  waf: {
      language: 7257
  },
  wag: {
      language: 7258
  },
  wah: {
      language: 7259
  },
  wai: {
      language: 7260
  },
  waj: {
      language: 7261
  },
  wak: {
      language: 7262
  },
  wal: {
      language: 7263
  },
  wam: {
      language: 7264
  },
  wan: {
      language: 7265
  },
  wao: {
      language: 7266
  },
  wap: {
      language: 7267
  },
  waq: {
      language: 7268
  },
  war: {
      language: 7269
  },
  was: {
      language: 7270
  },
  wat: {
      language: 7271
  },
  wau: {
      language: 7272
  },
  wav: {
      language: 7273
  },
  waw: {
      language: 7274
  },
  wax: {
      language: 7275
  },
  way: {
      language: 7276
  },
  waz: {
      language: 7277
  },
  wba: {
      language: 7278
  },
  wbb: {
      language: 7279
  },
  wbe: {
      language: 7280
  },
  wbf: {
      language: 7281
  },
  wbh: {
      language: 7282
  },
  wbi: {
      language: 7283
  },
  wbj: {
      language: 7284
  },
  wbk: {
      language: 7285
  },
  wbl: {
      language: 7286
  },
  wbm: {
      language: 7287
  },
  wbp: {
      language: 7288
  },
  wbq: {
      language: 7289
  },
  wbr: {
      language: 7290
  },
  wbs: {
      language: 7291,
      extlang: 8475
  },
  wbt: {
      language: 7292
  },
  wbv: {
      language: 7293
  },
  wbw: {
      language: 7294
  },
  wca: {
      language: 7295
  },
  wci: {
      language: 7296
  },
  wdd: {
      language: 7297
  },
  wdg: {
      language: 7298
  },
  wdj: {
      language: 7299
  },
  wdk: {
      language: 7300
  },
  wdt: {
      language: 7301
  },
  wdu: {
      language: 7302
  },
  wdy: {
      language: 7303
  },
  wea: {
      language: 7304
  },
  wec: {
      language: 7305
  },
  wed: {
      language: 7306
  },
  weg: {
      language: 7307
  },
  weh: {
      language: 7308
  },
  wei: {
      language: 7309
  },
  wem: {
      language: 7310
  },
  wen: {
      language: 7311
  },
  weo: {
      language: 7312
  },
  wep: {
      language: 7313
  },
  wer: {
      language: 7314
  },
  wes: {
      language: 7315
  },
  wet: {
      language: 7316
  },
  weu: {
      language: 7317
  },
  wew: {
      language: 7318
  },
  wfg: {
      language: 7319
  },
  wga: {
      language: 7320
  },
  wgb: {
      language: 7321
  },
  wgg: {
      language: 7322
  },
  wgi: {
      language: 7323
  },
  wgo: {
      language: 7324
  },
  wgu: {
      language: 7325
  },
  wgw: {
      language: 7326
  },
  wgy: {
      language: 7327
  },
  wha: {
      language: 7328
  },
  whg: {
      language: 7329
  },
  whk: {
      language: 7330
  },
  whu: {
      language: 7331
  },
  wib: {
      language: 7332
  },
  wic: {
      language: 7333
  },
  wie: {
      language: 7334
  },
  wif: {
      language: 7335
  },
  wig: {
      language: 7336
  },
  wih: {
      language: 7337
  },
  wii: {
      language: 7338
  },
  wij: {
      language: 7339
  },
  wik: {
      language: 7340
  },
  wil: {
      language: 7341
  },
  wim: {
      language: 7342
  },
  win: {
      language: 7343
  },
  wir: {
      language: 7344
  },
  wit: {
      language: 7345
  },
  wiu: {
      language: 7346
  },
  wiv: {
      language: 7347
  },
  wiw: {
      language: 7348
  },
  wiy: {
      language: 7349
  },
  wja: {
      language: 7350
  },
  wji: {
      language: 7351
  },
  wka: {
      language: 7352
  },
  wkb: {
      language: 7353
  },
  wkd: {
      language: 7354
  },
  wkl: {
      language: 7355
  },
  wkr: {
      language: 7356
  },
  wku: {
      language: 7357
  },
  wkw: {
      language: 7358
  },
  wky: {
      language: 7359
  },
  wla: {
      language: 7360
  },
  wlc: {
      language: 7361
  },
  wle: {
      language: 7362
  },
  wlg: {
      language: 7363
  },
  wlh: {
      language: 7364
  },
  wli: {
      language: 7365
  },
  wlk: {
      language: 7366
  },
  wll: {
      language: 7367
  },
  wlm: {
      language: 7368
  },
  wlo: {
      language: 7369
  },
  wlr: {
      language: 7370
  },
  wls: {
      language: 7371
  },
  wlu: {
      language: 7372
  },
  wlv: {
      language: 7373
  },
  wlw: {
      language: 7374
  },
  wlx: {
      language: 7375
  },
  wly: {
      language: 7376
  },
  wma: {
      language: 7377
  },
  wmb: {
      language: 7378
  },
  wmc: {
      language: 7379
  },
  wmd: {
      language: 7380
  },
  wme: {
      language: 7381
  },
  wmg: {
      language: 7382
  },
  wmh: {
      language: 7383
  },
  wmi: {
      language: 7384
  },
  wmm: {
      language: 7385
  },
  wmn: {
      language: 7386
  },
  wmo: {
      language: 7387
  },
  wms: {
      language: 7388
  },
  wmt: {
      language: 7389
  },
  wmw: {
      language: 7390
  },
  wmx: {
      language: 7391
  },
  wnb: {
      language: 7392
  },
  wnc: {
      language: 7393
  },
  wnd: {
      language: 7394
  },
  wne: {
      language: 7395
  },
  wng: {
      language: 7396
  },
  wni: {
      language: 7397
  },
  wnk: {
      language: 7398
  },
  wnm: {
      language: 7399
  },
  wnn: {
      language: 7400
  },
  wno: {
      language: 7401
  },
  wnp: {
      language: 7402
  },
  wnu: {
      language: 7403
  },
  wnw: {
      language: 7404
  },
  wny: {
      language: 7405
  },
  woa: {
      language: 7406
  },
  wob: {
      language: 7407
  },
  woc: {
      language: 7408
  },
  wod: {
      language: 7409
  },
  woe: {
      language: 7410
  },
  wof: {
      language: 7411
  },
  wog: {
      language: 7412
  },
  woi: {
      language: 7413
  },
  wok: {
      language: 7414
  },
  wom: {
      language: 7415
  },
  won: {
      language: 7416
  },
  woo: {
      language: 7417
  },
  wor: {
      language: 7418
  },
  wos: {
      language: 7419
  },
  wow: {
      language: 7420
  },
  woy: {
      language: 7421
  },
  wpc: {
      language: 7422
  },
  wra: {
      language: 7423
  },
  wrb: {
      language: 7424
  },
  wrd: {
      language: 7425
  },
  wrg: {
      language: 7426
  },
  wrh: {
      language: 7427
  },
  wri: {
      language: 7428
  },
  wrk: {
      language: 7429
  },
  wrl: {
      language: 7430
  },
  wrm: {
      language: 7431
  },
  wrn: {
      language: 7432
  },
  wro: {
      language: 7433
  },
  wrp: {
      language: 7434
  },
  wrr: {
      language: 7435
  },
  wrs: {
      language: 7436
  },
  wru: {
      language: 7437
  },
  wrv: {
      language: 7438
  },
  wrw: {
      language: 7439
  },
  wrx: {
      language: 7440
  },
  wry: {
      language: 7441
  },
  wrz: {
      language: 7442
  },
  wsa: {
      language: 7443
  },
  wsg: {
      language: 7444
  },
  wsi: {
      language: 7445
  },
  wsk: {
      language: 7446
  },
  wsr: {
      language: 7447
  },
  wss: {
      language: 7448
  },
  wsu: {
      language: 7449
  },
  wsv: {
      language: 7450
  },
  wtf: {
      language: 7451
  },
  wth: {
      language: 7452
  },
  wti: {
      language: 7453
  },
  wtk: {
      language: 7454
  },
  wtm: {
      language: 7455
  },
  wtw: {
      language: 7456
  },
  wua: {
      language: 7457
  },
  wub: {
      language: 7458
  },
  wud: {
      language: 7459
  },
  wuh: {
      language: 7460
  },
  wul: {
      language: 7461
  },
  wum: {
      language: 7462
  },
  wun: {
      language: 7463
  },
  wur: {
      language: 7464
  },
  wut: {
      language: 7465
  },
  wuu: {
      language: 7466,
      extlang: 8476
  },
  wuv: {
      language: 7467
  },
  wux: {
      language: 7468
  },
  wuy: {
      language: 7469
  },
  wwa: {
      language: 7470
  },
  wwb: {
      language: 7471
  },
  wwo: {
      language: 7472
  },
  wwr: {
      language: 7473
  },
  www: {
      language: 7474
  },
  wxa: {
      language: 7475
  },
  wxw: {
      language: 7476
  },
  wya: {
      language: 7477
  },
  wyb: {
      language: 7478
  },
  wyi: {
      language: 7479
  },
  wym: {
      language: 7480
  },
  wyn: {
      language: 7481
  },
  wyr: {
      language: 7482
  },
  wyy: {
      language: 7483
  },
  xaa: {
      language: 7484
  },
  xab: {
      language: 7485
  },
  xac: {
      language: 7486
  },
  xad: {
      language: 7487
  },
  xae: {
      language: 7488
  },
  xag: {
      language: 7489
  },
  xai: {
      language: 7490
  },
  xaj: {
      language: 7491
  },
  xak: {
      language: 7492
  },
  xal: {
      language: 7493
  },
  xam: {
      language: 7494
  },
  xan: {
      language: 7495
  },
  xao: {
      language: 7496
  },
  xap: {
      language: 7497
  },
  xaq: {
      language: 7498
  },
  xar: {
      language: 7499
  },
  xas: {
      language: 7500
  },
  xat: {
      language: 7501
  },
  xau: {
      language: 7502
  },
  xav: {
      language: 7503
  },
  xaw: {
      language: 7504
  },
  xay: {
      language: 7505
  },
  xba: {
      language: 7506
  },
  xbb: {
      language: 7507
  },
  xbc: {
      language: 7508
  },
  xbd: {
      language: 7509
  },
  xbe: {
      language: 7510
  },
  xbg: {
      language: 7511
  },
  xbi: {
      language: 7512
  },
  xbj: {
      language: 7513
  },
  xbm: {
      language: 7514
  },
  xbn: {
      language: 7515
  },
  xbo: {
      language: 7516
  },
  xbp: {
      language: 7517
  },
  xbr: {
      language: 7518
  },
  xbw: {
      language: 7519
  },
  xbx: {
      language: 7520
  },
  xby: {
      language: 7521
  },
  xcb: {
      language: 7522
  },
  xcc: {
      language: 7523
  },
  xce: {
      language: 7524
  },
  xcg: {
      language: 7525
  },
  xch: {
      language: 7526
  },
  xcl: {
      language: 7527
  },
  xcm: {
      language: 7528
  },
  xcn: {
      language: 7529
  },
  xco: {
      language: 7530
  },
  xcr: {
      language: 7531
  },
  xct: {
      language: 7532
  },
  xcu: {
      language: 7533
  },
  xcv: {
      language: 7534
  },
  xcw: {
      language: 7535
  },
  xcy: {
      language: 7536
  },
  xda: {
      language: 7537
  },
  xdc: {
      language: 7538
  },
  xdk: {
      language: 7539
  },
  xdm: {
      language: 7540
  },
  xdo: {
      language: 7541
  },
  xdq: {
      language: 7542
  },
  xdy: {
      language: 7543
  },
  xeb: {
      language: 7544
  },
  xed: {
      language: 7545
  },
  xeg: {
      language: 7546
  },
  xel: {
      language: 7547
  },
  xem: {
      language: 7548
  },
  xep: {
      language: 7549
  },
  xer: {
      language: 7550
  },
  xes: {
      language: 7551
  },
  xet: {
      language: 7552
  },
  xeu: {
      language: 7553
  },
  xfa: {
      language: 7554
  },
  xga: {
      language: 7555
  },
  xgb: {
      language: 7556
  },
  xgd: {
      language: 7557
  },
  xgf: {
      language: 7558
  },
  xgg: {
      language: 7559
  },
  xgi: {
      language: 7560
  },
  xgl: {
      language: 7561
  },
  xgm: {
      language: 7562
  },
  xgn: {
      language: 7563
  },
  xgr: {
      language: 7564
  },
  xgu: {
      language: 7565
  },
  xgw: {
      language: 7566
  },
  xha: {
      language: 7567
  },
  xhc: {
      language: 7568
  },
  xhd: {
      language: 7569
  },
  xhe: {
      language: 7570
  },
  xhm: {
      language: 7571
  },
  xhr: {
      language: 7572
  },
  xht: {
      language: 7573
  },
  xhu: {
      language: 7574
  },
  xhv: {
      language: 7575
  },
  xia: {
      language: 7576
  },
  xib: {
      language: 7577
  },
  xii: {
      language: 7578
  },
  xil: {
      language: 7579
  },
  xin: {
      language: 7580
  },
  xip: {
      language: 7581
  },
  xir: {
      language: 7582
  },
  xis: {
      language: 7583
  },
  xiv: {
      language: 7584
  },
  xiy: {
      language: 7585
  },
  xjb: {
      language: 7586
  },
  xjt: {
      language: 7587
  },
  xka: {
      language: 7588
  },
  xkb: {
      language: 7589
  },
  xkc: {
      language: 7590
  },
  xkd: {
      language: 7591
  },
  xke: {
      language: 7592
  },
  xkf: {
      language: 7593
  },
  xkg: {
      language: 7594
  },
  xkh: {
      language: 7595
  },
  xki: {
      language: 7596,
      extlang: 8477
  },
  xkj: {
      language: 7597
  },
  xkk: {
      language: 7598
  },
  xkl: {
      language: 7599
  },
  xkn: {
      language: 7600
  },
  xko: {
      language: 7601
  },
  xkp: {
      language: 7602
  },
  xkq: {
      language: 7603
  },
  xkr: {
      language: 7604
  },
  xks: {
      language: 7605
  },
  xkt: {
      language: 7606
  },
  xku: {
      language: 7607
  },
  xkv: {
      language: 7608
  },
  xkw: {
      language: 7609
  },
  xkx: {
      language: 7610
  },
  xky: {
      language: 7611
  },
  xkz: {
      language: 7612
  },
  xla: {
      language: 7613
  },
  xlb: {
      language: 7614
  },
  xlc: {
      language: 7615
  },
  xld: {
      language: 7616
  },
  xle: {
      language: 7617
  },
  xlg: {
      language: 7618
  },
  xli: {
      language: 7619
  },
  xln: {
      language: 7620
  },
  xlo: {
      language: 7621
  },
  xlp: {
      language: 7622
  },
  xls: {
      language: 7623
  },
  xlu: {
      language: 7624
  },
  xly: {
      language: 7625
  },
  xma: {
      language: 7626
  },
  xmb: {
      language: 7627
  },
  xmc: {
      language: 7628
  },
  xmd: {
      language: 7629
  },
  xme: {
      language: 7630
  },
  xmf: {
      language: 7631
  },
  xmg: {
      language: 7632
  },
  xmh: {
      language: 7633
  },
  xmj: {
      language: 7634
  },
  xmk: {
      language: 7635
  },
  xml: {
      language: 7636,
      extlang: 8478
  },
  xmm: {
      language: 7637,
      extlang: 8479
  },
  xmn: {
      language: 7638
  },
  xmo: {
      language: 7639
  },
  xmp: {
      language: 7640
  },
  xmq: {
      language: 7641
  },
  xmr: {
      language: 7642
  },
  xms: {
      language: 7643,
      extlang: 8480
  },
  xmt: {
      language: 7644
  },
  xmu: {
      language: 7645
  },
  xmv: {
      language: 7646
  },
  xmw: {
      language: 7647
  },
  xmx: {
      language: 7648
  },
  xmy: {
      language: 7649
  },
  xmz: {
      language: 7650
  },
  xna: {
      language: 7651
  },
  xnb: {
      language: 7652
  },
  xnd: {
      language: 7653
  },
  xng: {
      language: 7654
  },
  xnh: {
      language: 7655
  },
  xni: {
      language: 7656
  },
  xnj: {
      language: 7657
  },
  xnk: {
      language: 7658
  },
  xnm: {
      language: 7659
  },
  xnn: {
      language: 7660
  },
  xno: {
      language: 7661
  },
  xnq: {
      language: 7662
  },
  xnr: {
      language: 7663
  },
  xns: {
      language: 7664
  },
  xnt: {
      language: 7665
  },
  xnu: {
      language: 7666
  },
  xny: {
      language: 7667
  },
  xnz: {
      language: 7668
  },
  xoc: {
      language: 7669
  },
  xod: {
      language: 7670
  },
  xog: {
      language: 7671
  },
  xoi: {
      language: 7672
  },
  xok: {
      language: 7673
  },
  xom: {
      language: 7674
  },
  xon: {
      language: 7675
  },
  xoo: {
      language: 7676
  },
  xop: {
      language: 7677
  },
  xor: {
      language: 7678
  },
  xow: {
      language: 7679
  },
  xpa: {
      language: 7680
  },
  xpb: {
      language: 7681
  },
  xpc: {
      language: 7682
  },
  xpd: {
      language: 7683
  },
  xpe: {
      language: 7684
  },
  xpf: {
      language: 7685
  },
  xpg: {
      language: 7686
  },
  xph: {
      language: 7687
  },
  xpi: {
      language: 7688
  },
  xpj: {
      language: 7689
  },
  xpk: {
      language: 7690
  },
  xpl: {
      language: 7691
  },
  xpm: {
      language: 7692
  },
  xpn: {
      language: 7693
  },
  xpo: {
      language: 7694
  },
  xpp: {
      language: 7695
  },
  xpq: {
      language: 7696
  },
  xpr: {
      language: 7697
  },
  xps: {
      language: 7698
  },
  xpt: {
      language: 7699
  },
  xpu: {
      language: 7700
  },
  xpv: {
      language: 7701
  },
  xpw: {
      language: 7702
  },
  xpx: {
      language: 7703
  },
  xpy: {
      language: 7704
  },
  xpz: {
      language: 7705
  },
  xqa: {
      language: 7706
  },
  xqt: {
      language: 7707
  },
  xra: {
      language: 7708
  },
  xrb: {
      language: 7709
  },
  xrd: {
      language: 7710
  },
  xre: {
      language: 7711
  },
  xrg: {
      language: 7712
  },
  xri: {
      language: 7713
  },
  xrm: {
      language: 7714
  },
  xrn: {
      language: 7715
  },
  xrq: {
      language: 7716
  },
  xrr: {
      language: 7717
  },
  xrt: {
      language: 7718
  },
  xru: {
      language: 7719
  },
  xrw: {
      language: 7720
  },
  xsa: {
      language: 7721
  },
  xsb: {
      language: 7722
  },
  xsc: {
      language: 7723
  },
  xsd: {
      language: 7724
  },
  xse: {
      language: 7725
  },
  xsh: {
      language: 7726
  },
  xsi: {
      language: 7727
  },
  xsj: {
      language: 7728
  },
  xsl: {
      language: 7729
  },
  xsm: {
      language: 7730
  },
  xsn: {
      language: 7731
  },
  xso: {
      language: 7732
  },
  xsp: {
      language: 7733
  },
  xsq: {
      language: 7734
  },
  xsr: {
      language: 7735
  },
  xss: {
      language: 7736
  },
  xsu: {
      language: 7737
  },
  xsv: {
      language: 7738
  },
  xsy: {
      language: 7739
  },
  xta: {
      language: 7740
  },
  xtb: {
      language: 7741
  },
  xtc: {
      language: 7742
  },
  xtd: {
      language: 7743
  },
  xte: {
      language: 7744
  },
  xtg: {
      language: 7745
  },
  xth: {
      language: 7746
  },
  xti: {
      language: 7747
  },
  xtj: {
      language: 7748
  },
  xtl: {
      language: 7749
  },
  xtm: {
      language: 7750
  },
  xtn: {
      language: 7751
  },
  xto: {
      language: 7752
  },
  xtp: {
      language: 7753
  },
  xtq: {
      language: 7754
  },
  xtr: {
      language: 7755
  },
  xts: {
      language: 7756
  },
  xtt: {
      language: 7757
  },
  xtu: {
      language: 7758
  },
  xtv: {
      language: 7759
  },
  xtw: {
      language: 7760
  },
  xty: {
      language: 7761
  },
  xtz: {
      language: 7762
  },
  xua: {
      language: 7763
  },
  xub: {
      language: 7764
  },
  xud: {
      language: 7765
  },
  xug: {
      language: 7766
  },
  xuj: {
      language: 7767
  },
  xul: {
      language: 7768
  },
  xum: {
      language: 7769
  },
  xun: {
      language: 7770
  },
  xuo: {
      language: 7771
  },
  xup: {
      language: 7772
  },
  xur: {
      language: 7773
  },
  xut: {
      language: 7774
  },
  xuu: {
      language: 7775
  },
  xve: {
      language: 7776
  },
  xvi: {
      language: 7777
  },
  xvn: {
      language: 7778
  },
  xvo: {
      language: 7779
  },
  xvs: {
      language: 7780
  },
  xwa: {
      language: 7781
  },
  xwc: {
      language: 7782
  },
  xwd: {
      language: 7783
  },
  xwe: {
      language: 7784
  },
  xwg: {
      language: 7785
  },
  xwj: {
      language: 7786
  },
  xwk: {
      language: 7787
  },
  xwl: {
      language: 7788
  },
  xwo: {
      language: 7789
  },
  xwr: {
      language: 7790
  },
  xwt: {
      language: 7791
  },
  xww: {
      language: 7792
  },
  xxb: {
      language: 7793
  },
  xxk: {
      language: 7794
  },
  xxm: {
      language: 7795
  },
  xxr: {
      language: 7796
  },
  xxt: {
      language: 7797
  },
  xya: {
      language: 7798
  },
  xyb: {
      language: 7799
  },
  xyj: {
      language: 7800
  },
  xyk: {
      language: 7801
  },
  xyl: {
      language: 7802
  },
  xyt: {
      language: 7803
  },
  xyy: {
      language: 7804
  },
  xzh: {
      language: 7805
  },
  xzm: {
      language: 7806
  },
  xzp: {
      language: 7807
  },
  yaa: {
      language: 7808
  },
  yab: {
      language: 7809
  },
  yac: {
      language: 7810
  },
  yad: {
      language: 7811
  },
  yae: {
      language: 7812
  },
  yaf: {
      language: 7813
  },
  yag: {
      language: 7814
  },
  yah: {
      language: 7815
  },
  yai: {
      language: 7816
  },
  yaj: {
      language: 7817
  },
  yak: {
      language: 7818
  },
  yal: {
      language: 7819
  },
  yam: {
      language: 7820
  },
  yan: {
      language: 7821
  },
  yao: {
      language: 7822
  },
  yap: {
      language: 7823
  },
  yaq: {
      language: 7824
  },
  yar: {
      language: 7825
  },
  yas: {
      language: 7826
  },
  yat: {
      language: 7827
  },
  yau: {
      language: 7828
  },
  yav: {
      language: 7829
  },
  yaw: {
      language: 7830
  },
  yax: {
      language: 7831
  },
  yay: {
      language: 7832
  },
  yaz: {
      language: 7833
  },
  yba: {
      language: 7834
  },
  ybb: {
      language: 7835
  },
  ybd: {
      language: 7836
  },
  ybe: {
      language: 7837
  },
  ybh: {
      language: 7838
  },
  ybi: {
      language: 7839
  },
  ybj: {
      language: 7840
  },
  ybk: {
      language: 7841
  },
  ybl: {
      language: 7842
  },
  ybm: {
      language: 7843
  },
  ybn: {
      language: 7844
  },
  ybo: {
      language: 7845
  },
  ybx: {
      language: 7846
  },
  yby: {
      language: 7847
  },
  ych: {
      language: 7848
  },
  ycl: {
      language: 7849
  },
  ycn: {
      language: 7850
  },
  ycp: {
      language: 7851
  },
  yda: {
      language: 7852
  },
  ydd: {
      language: 7853
  },
  yde: {
      language: 7854
  },
  ydg: {
      language: 7855
  },
  ydk: {
      language: 7856
  },
  yds: {
      language: 7857,
      extlang: 8481
  },
  yea: {
      language: 7858
  },
  yec: {
      language: 7859
  },
  yee: {
      language: 7860
  },
  yei: {
      language: 7861
  },
  yej: {
      language: 7862
  },
  yel: {
      language: 7863
  },
  yen: {
      language: 7864
  },
  yer: {
      language: 7865
  },
  yes: {
      language: 7866
  },
  yet: {
      language: 7867
  },
  yeu: {
      language: 7868
  },
  yev: {
      language: 7869
  },
  yey: {
      language: 7870
  },
  yga: {
      language: 7871
  },
  ygi: {
      language: 7872
  },
  ygl: {
      language: 7873
  },
  ygm: {
      language: 7874
  },
  ygp: {
      language: 7875
  },
  ygr: {
      language: 7876
  },
  ygs: {
      language: 7877,
      extlang: 8482
  },
  ygu: {
      language: 7878
  },
  ygw: {
      language: 7879
  },
  yha: {
      language: 7880
  },
  yhd: {
      language: 7881
  },
  yhl: {
      language: 7882
  },
  yhs: {
      language: 7883,
      extlang: 8483
  },
  yia: {
      language: 7884
  },
  yif: {
      language: 7885
  },
  yig: {
      language: 7886
  },
  yih: {
      language: 7887
  },
  yii: {
      language: 7888
  },
  yij: {
      language: 7889
  },
  yik: {
      language: 7890
  },
  yil: {
      language: 7891
  },
  yim: {
      language: 7892
  },
  yin: {
      language: 7893
  },
  yip: {
      language: 7894
  },
  yiq: {
      language: 7895
  },
  yir: {
      language: 7896
  },
  yis: {
      language: 7897
  },
  yit: {
      language: 7898
  },
  yiu: {
      language: 7899
  },
  yiv: {
      language: 7900
  },
  yix: {
      language: 7901
  },
  yiy: {
      language: 7902
  },
  yiz: {
      language: 7903
  },
  yka: {
      language: 7904
  },
  ykg: {
      language: 7905
  },
  yki: {
      language: 7906
  },
  ykk: {
      language: 7907
  },
  ykl: {
      language: 7908
  },
  ykm: {
      language: 7909
  },
  ykn: {
      language: 7910
  },
  yko: {
      language: 7911
  },
  ykr: {
      language: 7912
  },
  ykt: {
      language: 7913
  },
  yku: {
      language: 7914
  },
  yky: {
      language: 7915
  },
  yla: {
      language: 7916
  },
  ylb: {
      language: 7917
  },
  yle: {
      language: 7918
  },
  ylg: {
      language: 7919
  },
  yli: {
      language: 7920
  },
  yll: {
      language: 7921
  },
  ylm: {
      language: 7922
  },
  yln: {
      language: 7923
  },
  ylo: {
      language: 7924
  },
  ylr: {
      language: 7925
  },
  ylu: {
      language: 7926
  },
  yly: {
      language: 7927
  },
  yma: {
      language: 7928
  },
  ymb: {
      language: 7929
  },
  ymc: {
      language: 7930
  },
  ymd: {
      language: 7931
  },
  yme: {
      language: 7932
  },
  ymg: {
      language: 7933
  },
  ymh: {
      language: 7934
  },
  ymi: {
      language: 7935
  },
  ymk: {
      language: 7936
  },
  yml: {
      language: 7937
  },
  ymm: {
      language: 7938
  },
  ymn: {
      language: 7939
  },
  ymo: {
      language: 7940
  },
  ymp: {
      language: 7941
  },
  ymq: {
      language: 7942
  },
  ymr: {
      language: 7943
  },
  yms: {
      language: 7944
  },
  ymt: {
      language: 7945
  },
  ymx: {
      language: 7946
  },
  ymz: {
      language: 7947
  },
  yna: {
      language: 7948
  },
  ynd: {
      language: 7949
  },
  yne: {
      language: 7950
  },
  yng: {
      language: 7951
  },
  ynh: {
      language: 7952
  },
  ynk: {
      language: 7953
  },
  ynl: {
      language: 7954
  },
  ynn: {
      language: 7955
  },
  yno: {
      language: 7956
  },
  ynq: {
      language: 7957
  },
  yns: {
      language: 7958
  },
  ynu: {
      language: 7959
  },
  yob: {
      language: 7960
  },
  yog: {
      language: 7961
  },
  yoi: {
      language: 7962
  },
  yok: {
      language: 7963
  },
  yol: {
      language: 7964
  },
  yom: {
      language: 7965
  },
  yon: {
      language: 7966
  },
  yos: {
      language: 7967
  },
  yot: {
      language: 7968
  },
  yox: {
      language: 7969
  },
  yoy: {
      language: 7970
  },
  ypa: {
      language: 7971
  },
  ypb: {
      language: 7972
  },
  ypg: {
      language: 7973
  },
  yph: {
      language: 7974
  },
  ypk: {
      language: 7975
  },
  ypm: {
      language: 7976
  },
  ypn: {
      language: 7977
  },
  ypo: {
      language: 7978
  },
  ypp: {
      language: 7979
  },
  ypz: {
      language: 7980
  },
  yra: {
      language: 7981
  },
  yrb: {
      language: 7982
  },
  yre: {
      language: 7983
  },
  yri: {
      language: 7984
  },
  yrk: {
      language: 7985
  },
  yrl: {
      language: 7986
  },
  yrm: {
      language: 7987
  },
  yrn: {
      language: 7988
  },
  yro: {
      language: 7989
  },
  yrs: {
      language: 7990
  },
  yrw: {
      language: 7991
  },
  yry: {
      language: 7992
  },
  ysc: {
      language: 7993
  },
  ysd: {
      language: 7994
  },
  ysg: {
      language: 7995
  },
  ysl: {
      language: 7996,
      extlang: 8484
  },
  ysm: {
      language: 7997,
      extlang: 8485
  },
  ysn: {
      language: 7998
  },
  yso: {
      language: 7999
  },
  ysp: {
      language: 8e3
  },
  ysr: {
      language: 8001
  },
  yss: {
      language: 8002
  },
  ysy: {
      language: 8003
  },
  yta: {
      language: 8004
  },
  ytl: {
      language: 8005
  },
  ytp: {
      language: 8006
  },
  ytw: {
      language: 8007
  },
  yty: {
      language: 8008
  },
  yua: {
      language: 8009
  },
  yub: {
      language: 8010
  },
  yuc: {
      language: 8011
  },
  yud: {
      language: 8012
  },
  yue: {
      language: 8013,
      extlang: 8486
  },
  yuf: {
      language: 8014
  },
  yug: {
      language: 8015
  },
  yui: {
      language: 8016
  },
  yuj: {
      language: 8017
  },
  yuk: {
      language: 8018
  },
  yul: {
      language: 8019
  },
  yum: {
      language: 8020
  },
  yun: {
      language: 8021
  },
  yup: {
      language: 8022
  },
  yuq: {
      language: 8023
  },
  yur: {
      language: 8024
  },
  yut: {
      language: 8025
  },
  yuu: {
      language: 8026
  },
  yuw: {
      language: 8027
  },
  yux: {
      language: 8028
  },
  yuy: {
      language: 8029
  },
  yuz: {
      language: 8030
  },
  yva: {
      language: 8031
  },
  yvt: {
      language: 8032
  },
  ywa: {
      language: 8033
  },
  ywg: {
      language: 8034
  },
  ywl: {
      language: 8035
  },
  ywn: {
      language: 8036
  },
  ywq: {
      language: 8037
  },
  ywr: {
      language: 8038
  },
  ywt: {
      language: 8039
  },
  ywu: {
      language: 8040
  },
  yww: {
      language: 8041
  },
  yxa: {
      language: 8042
  },
  yxg: {
      language: 8043
  },
  yxl: {
      language: 8044
  },
  yxm: {
      language: 8045
  },
  yxu: {
      language: 8046
  },
  yxy: {
      language: 8047
  },
  yyr: {
      language: 8048
  },
  yyu: {
      language: 8049
  },
  yyz: {
      language: 8050
  },
  yzg: {
      language: 8051
  },
  yzk: {
      language: 8052
  },
  zaa: {
      language: 8053
  },
  zab: {
      language: 8054
  },
  zac: {
      language: 8055
  },
  zad: {
      language: 8056
  },
  zae: {
      language: 8057
  },
  zaf: {
      language: 8058
  },
  zag: {
      language: 8059
  },
  zah: {
      language: 8060
  },
  zai: {
      language: 8061
  },
  zaj: {
      language: 8062
  },
  zak: {
      language: 8063
  },
  zal: {
      language: 8064
  },
  zam: {
      language: 8065
  },
  zao: {
      language: 8066
  },
  zap: {
      language: 8067
  },
  zaq: {
      language: 8068
  },
  zar: {
      language: 8069
  },
  zas: {
      language: 8070
  },
  zat: {
      language: 8071
  },
  zau: {
      language: 8072
  },
  zav: {
      language: 8073
  },
  zaw: {
      language: 8074
  },
  zax: {
      language: 8075
  },
  zay: {
      language: 8076
  },
  zaz: {
      language: 8077
  },
  zba: {
      language: 8078
  },
  zbc: {
      language: 8079
  },
  zbe: {
      language: 8080
  },
  zbl: {
      language: 8081
  },
  zbt: {
      language: 8082
  },
  zbu: {
      language: 8083
  },
  zbw: {
      language: 8084
  },
  zca: {
      language: 8085
  },
  zcd: {
      language: 8086
  },
  zch: {
      language: 8087
  },
  zdj: {
      language: 8088
  },
  zea: {
      language: 8089
  },
  zeg: {
      language: 8090
  },
  zeh: {
      language: 8091
  },
  zen: {
      language: 8092
  },
  zga: {
      language: 8093
  },
  zgb: {
      language: 8094
  },
  zgh: {
      language: 8095
  },
  zgm: {
      language: 8096
  },
  zgn: {
      language: 8097
  },
  zgr: {
      language: 8098
  },
  zhb: {
      language: 8099
  },
  zhd: {
      language: 8100
  },
  zhi: {
      language: 8101
  },
  zhn: {
      language: 8102
  },
  zhw: {
      language: 8103
  },
  zhx: {
      language: 8104
  },
  zia: {
      language: 8105
  },
  zib: {
      language: 8106,
      extlang: 8487
  },
  zik: {
      language: 8107
  },
  zil: {
      language: 8108
  },
  zim: {
      language: 8109
  },
  zin: {
      language: 8110
  },
  zir: {
      language: 8111
  },
  ziw: {
      language: 8112
  },
  ziz: {
      language: 8113
  },
  zka: {
      language: 8114
  },
  zkb: {
      language: 8115
  },
  zkd: {
      language: 8116
  },
  zkg: {
      language: 8117
  },
  zkh: {
      language: 8118
  },
  zkk: {
      language: 8119
  },
  zkn: {
      language: 8120
  },
  zko: {
      language: 8121
  },
  zkp: {
      language: 8122
  },
  zkr: {
      language: 8123
  },
  zkt: {
      language: 8124
  },
  zku: {
      language: 8125
  },
  zkv: {
      language: 8126
  },
  zkz: {
      language: 8127
  },
  zla: {
      language: 8128
  },
  zle: {
      language: 8129
  },
  zlj: {
      language: 8130
  },
  zlm: {
      language: 8131,
      extlang: 8488
  },
  zln: {
      language: 8132
  },
  zlq: {
      language: 8133
  },
  zls: {
      language: 8134
  },
  zlw: {
      language: 8135
  },
  zma: {
      language: 8136
  },
  zmb: {
      language: 8137
  },
  zmc: {
      language: 8138
  },
  zmd: {
      language: 8139
  },
  zme: {
      language: 8140
  },
  zmf: {
      language: 8141
  },
  zmg: {
      language: 8142
  },
  zmh: {
      language: 8143
  },
  zmi: {
      language: 8144,
      extlang: 8489
  },
  zmj: {
      language: 8145
  },
  zmk: {
      language: 8146
  },
  zml: {
      language: 8147
  },
  zmm: {
      language: 8148
  },
  zmn: {
      language: 8149
  },
  zmo: {
      language: 8150
  },
  zmp: {
      language: 8151
  },
  zmq: {
      language: 8152
  },
  zmr: {
      language: 8153
  },
  zms: {
      language: 8154
  },
  zmt: {
      language: 8155
  },
  zmu: {
      language: 8156
  },
  zmv: {
      language: 8157
  },
  zmw: {
      language: 8158
  },
  zmx: {
      language: 8159
  },
  zmy: {
      language: 8160
  },
  zmz: {
      language: 8161
  },
  zna: {
      language: 8162
  },
  znd: {
      language: 8163
  },
  zne: {
      language: 8164
  },
  zng: {
      language: 8165
  },
  znk: {
      language: 8166
  },
  zns: {
      language: 8167
  },
  zoc: {
      language: 8168
  },
  zoh: {
      language: 8169
  },
  zom: {
      language: 8170
  },
  zoo: {
      language: 8171
  },
  zoq: {
      language: 8172
  },
  zor: {
      language: 8173
  },
  zos: {
      language: 8174
  },
  zpa: {
      language: 8175
  },
  zpb: {
      language: 8176
  },
  zpc: {
      language: 8177
  },
  zpd: {
      language: 8178
  },
  zpe: {
      language: 8179
  },
  zpf: {
      language: 8180
  },
  zpg: {
      language: 8181
  },
  zph: {
      language: 8182
  },
  zpi: {
      language: 8183
  },
  zpj: {
      language: 8184
  },
  zpk: {
      language: 8185
  },
  zpl: {
      language: 8186
  },
  zpm: {
      language: 8187
  },
  zpn: {
      language: 8188
  },
  zpo: {
      language: 8189
  },
  zpp: {
      language: 8190
  },
  zpq: {
      language: 8191
  },
  zpr: {
      language: 8192
  },
  zps: {
      language: 8193
  },
  zpt: {
      language: 8194
  },
  zpu: {
      language: 8195
  },
  zpv: {
      language: 8196
  },
  zpw: {
      language: 8197
  },
  zpx: {
      language: 8198
  },
  zpy: {
      language: 8199
  },
  zpz: {
      language: 8200
  },
  zqe: {
      language: 8201
  },
  zra: {
      language: 8202
  },
  zrg: {
      language: 8203
  },
  zrn: {
      language: 8204
  },
  zro: {
      language: 8205
  },
  zrp: {
      language: 8206
  },
  zrs: {
      language: 8207
  },
  zsa: {
      language: 8208
  },
  zsk: {
      language: 8209
  },
  zsl: {
      language: 8210,
      extlang: 8490
  },
  zsm: {
      language: 8211,
      extlang: 8491
  },
  zsr: {
      language: 8212
  },
  zsu: {
      language: 8213
  },
  zte: {
      language: 8214
  },
  ztg: {
      language: 8215
  },
  ztl: {
      language: 8216
  },
  ztm: {
      language: 8217
  },
  ztn: {
      language: 8218
  },
  ztp: {
      language: 8219
  },
  ztq: {
      language: 8220
  },
  zts: {
      language: 8221
  },
  ztt: {
      language: 8222
  },
  ztu: {
      language: 8223
  },
  ztx: {
      language: 8224
  },
  zty: {
      language: 8225
  },
  zua: {
      language: 8226
  },
  zuh: {
      language: 8227
  },
  zum: {
      language: 8228
  },
  zun: {
      language: 8229
  },
  zuy: {
      language: 8230
  },
  zwa: {
      language: 8231
  },
  zxx: {
      language: 8232
  },
  zyb: {
      language: 8233
  },
  zyg: {
      language: 8234
  },
  zyj: {
      language: 8235
  },
  zyn: {
      language: 8236
  },
  zyp: {
      language: 8237
  },
  zza: {
      language: 8238
  },
  zzj: {
      language: 8239
  },
  adlm: {
      script: 8492
  },
  afak: {
      script: 8493
  },
  aghb: {
      script: 8494
  },
  ahom: {
      script: 8495
  },
  arab: {
      script: 8496
  },
  aran: {
      script: 8497
  },
  armi: {
      script: 8498
  },
  armn: {
      script: 8499
  },
  avst: {
      script: 8500
  },
  bali: {
      script: 8501
  },
  bamu: {
      script: 8502
  },
  bass: {
      script: 8503
  },
  batk: {
      script: 8504
  },
  beng: {
      script: 8505
  },
  bhks: {
      script: 8506
  },
  blis: {
      script: 8507
  },
  bopo: {
      script: 8508
  },
  brah: {
      script: 8509
  },
  brai: {
      script: 8510
  },
  bugi: {
      script: 8511
  },
  buhd: {
      script: 8512
  },
  cakm: {
      script: 8513
  },
  cans: {
      script: 8514
  },
  cari: {
      script: 8515
  },
  cham: {
      script: 8516
  },
  cher: {
      script: 8517
  },
  chrs: {
      script: 8518
  },
  cirt: {
      script: 8519
  },
  copt: {
      script: 8520
  },
  cpmn: {
      script: 8521
  },
  cprt: {
      script: 8522
  },
  cyrl: {
      script: 8523
  },
  cyrs: {
      script: 8524
  },
  deva: {
      script: 8525
  },
  diak: {
      script: 8526
  },
  dogr: {
      script: 8527
  },
  dsrt: {
      script: 8528
  },
  dupl: {
      script: 8529
  },
  egyd: {
      script: 8530
  },
  egyh: {
      script: 8531
  },
  egyp: {
      script: 8532
  },
  elba: {
      script: 8533
  },
  elym: {
      script: 8534
  },
  ethi: {
      script: 8535
  },
  geok: {
      script: 8536
  },
  geor: {
      script: 8537
  },
  glag: {
      script: 8538
  },
  gong: {
      script: 8539
  },
  gonm: {
      script: 8540
  },
  goth: {
      script: 8541
  },
  gran: {
      script: 8542
  },
  grek: {
      script: 8543
  },
  gujr: {
      script: 8544
  },
  guru: {
      script: 8545
  },
  hanb: {
      script: 8546
  },
  hang: {
      script: 8547
  },
  hani: {
      script: 8548
  },
  hano: {
      script: 8549
  },
  hans: {
      script: 8550
  },
  hant: {
      script: 8551
  },
  hatr: {
      script: 8552
  },
  hebr: {
      script: 8553
  },
  hira: {
      script: 8554
  },
  hluw: {
      script: 8555
  },
  hmng: {
      script: 8556
  },
  hmnp: {
      script: 8557
  },
  hrkt: {
      script: 8558
  },
  hung: {
      script: 8559
  },
  inds: {
      script: 8560
  },
  ital: {
      script: 8561
  },
  jamo: {
      script: 8562
  },
  java: {
      script: 8563
  },
  jpan: {
      script: 8564
  },
  jurc: {
      script: 8565
  },
  kali: {
      script: 8566
  },
  kana: {
      script: 8567
  },
  kawi: {
      script: 8568
  },
  khar: {
      script: 8569
  },
  khmr: {
      script: 8570
  },
  khoj: {
      script: 8571
  },
  kitl: {
      script: 8572
  },
  kits: {
      script: 8573
  },
  knda: {
      script: 8574
  },
  kore: {
      script: 8575
  },
  kpel: {
      script: 8576
  },
  kthi: {
      script: 8577
  },
  lana: {
      script: 8578
  },
  laoo: {
      script: 8579
  },
  latf: {
      script: 8580
  },
  latg: {
      script: 8581
  },
  latn: {
      script: 8582
  },
  leke: {
      script: 8583
  },
  lepc: {
      script: 8584
  },
  limb: {
      script: 8585
  },
  lina: {
      script: 8586
  },
  linb: {
      script: 8587
  },
  lisu: {
      script: 8588
  },
  loma: {
      script: 8589
  },
  lyci: {
      script: 8590
  },
  lydi: {
      script: 8591
  },
  mahj: {
      script: 8592
  },
  maka: {
      script: 8593
  },
  mand: {
      script: 8594
  },
  mani: {
      script: 8595
  },
  marc: {
      script: 8596
  },
  maya: {
      script: 8597
  },
  medf: {
      script: 8598
  },
  mend: {
      script: 8599
  },
  merc: {
      script: 8600
  },
  mero: {
      script: 8601
  },
  mlym: {
      script: 8602
  },
  modi: {
      script: 8603
  },
  mong: {
      script: 8604
  },
  moon: {
      script: 8605
  },
  mroo: {
      script: 8606
  },
  mtei: {
      script: 8607
  },
  mult: {
      script: 8608
  },
  mymr: {
      script: 8609
  },
  nagm: {
      script: 8610
  },
  nand: {
      script: 8611
  },
  narb: {
      script: 8612
  },
  nbat: {
      script: 8613
  },
  newa: {
      script: 8614
  },
  nkdb: {
      script: 8615
  },
  nkgb: {
      script: 8616
  },
  nkoo: {
      script: 8617
  },
  nshu: {
      script: 8618
  },
  ogam: {
      script: 8619
  },
  olck: {
      script: 8620
  },
  orkh: {
      script: 8621
  },
  orya: {
      script: 8622
  },
  osge: {
      script: 8623
  },
  osma: {
      script: 8624
  },
  ougr: {
      script: 8625
  },
  palm: {
      script: 8626
  },
  pauc: {
      script: 8627
  },
  pcun: {
      script: 8628
  },
  pelm: {
      script: 8629
  },
  perm: {
      script: 8630
  },
  phag: {
      script: 8631
  },
  phli: {
      script: 8632
  },
  phlp: {
      script: 8633
  },
  phlv: {
      script: 8634
  },
  phnx: {
      script: 8635
  },
  piqd: {
      script: 8636
  },
  plrd: {
      script: 8637
  },
  prti: {
      script: 8638
  },
  psin: {
      script: 8639
  },
  "qaaa..qabx": {
      script: 8640
  },
  ranj: {
      script: 8641
  },
  rjng: {
      script: 8642
  },
  rohg: {
      script: 8643
  },
  roro: {
      script: 8644
  },
  runr: {
      script: 8645
  },
  samr: {
      script: 8646
  },
  sara: {
      script: 8647
  },
  sarb: {
      script: 8648
  },
  saur: {
      script: 8649
  },
  sgnw: {
      script: 8650
  },
  shaw: {
      script: 8651
  },
  shrd: {
      script: 8652
  },
  shui: {
      script: 8653
  },
  sidd: {
      script: 8654
  },
  sind: {
      script: 8655
  },
  sinh: {
      script: 8656
  },
  sogd: {
      script: 8657
  },
  sogo: {
      script: 8658
  },
  sora: {
      script: 8659
  },
  soyo: {
      script: 8660
  },
  sund: {
      script: 8661
  },
  sunu: {
      script: 8662
  },
  sylo: {
      script: 8663
  },
  syrc: {
      script: 8664
  },
  syre: {
      script: 8665
  },
  syrj: {
      script: 8666
  },
  syrn: {
      script: 8667
  },
  tagb: {
      script: 8668
  },
  takr: {
      script: 8669
  },
  tale: {
      script: 8670
  },
  talu: {
      script: 8671
  },
  taml: {
      script: 8672
  },
  tang: {
      script: 8673
  },
  tavt: {
      script: 8674
  },
  telu: {
      script: 8675
  },
  teng: {
      script: 8676
  },
  tfng: {
      script: 8677
  },
  tglg: {
      script: 8678
  },
  thaa: {
      script: 8679
  },
  thai: {
      script: 8680
  },
  tibt: {
      script: 8681
  },
  tirh: {
      script: 8682
  },
  tnsa: {
      script: 8683
  },
  toto: {
      script: 8684
  },
  ugar: {
      script: 8685
  },
  vaii: {
      script: 8686
  },
  visp: {
      script: 8687
  },
  vith: {
      script: 8688
  },
  wara: {
      script: 8689
  },
  wcho: {
      script: 8690
  },
  wole: {
      script: 8691
  },
  xpeo: {
      script: 8692
  },
  xsux: {
      script: 8693
  },
  yezi: {
      script: 8694
  },
  yiii: {
      script: 8695
  },
  zanb: {
      script: 8696
  },
  zinh: {
      script: 8697
  },
  zmth: {
      script: 8698
  },
  zsye: {
      script: 8699
  },
  zsym: {
      script: 8700
  },
  zxxx: {
      script: 8701
  },
  zyyy: {
      script: 8702
  },
  zzzz: {
      script: 8703
  },
  ac: {
      region: 8705
  },
  ad: {
      region: 8706
  },
  ag: {
      region: 8709
  },
  ai: {
      region: 8710
  },
  al: {
      region: 8711
  },
  ao: {
      region: 8714
  },
  aq: {
      region: 8715
  },
  at: {
      region: 8718
  },
  au: {
      region: 8719
  },
  aw: {
      region: 8720
  },
  ax: {
      region: 8721
  },
  bb: {
      region: 8724
  },
  bd: {
      region: 8725
  },
  bf: {
      region: 8727
  },
  bj: {
      region: 8731
  },
  bl: {
      region: 8732
  },
  bq: {
      region: 8736
  },
  bt: {
      region: 8739
  },
  bu: {
      region: 8740
  },
  bv: {
      region: 8741
  },
  bw: {
      region: 8742
  },
  by: {
      region: 8743
  },
  bz: {
      region: 8744
  },
  cc: {
      region: 8746
  },
  cd: {
      region: 8747
  },
  cf: {
      region: 8748
  },
  cg: {
      region: 8749
  },
  ci: {
      region: 8751
  },
  ck: {
      region: 8752
  },
  cl: {
      region: 8753
  },
  cm: {
      region: 8754
  },
  cn: {
      region: 8755
  },
  cp: {
      region: 8757
  },
  cw: {
      region: 8762
  },
  cx: {
      region: 8763
  },
  cz: {
      region: 8765
  },
  dd: {
      region: 8766
  },
  dg: {
      region: 8768
  },
  dj: {
      region: 8769
  },
  dk: {
      region: 8770
  },
  dm: {
      region: 8771
  },
  do: {
      region: 8772
  },
  ea: {
      region: 8774
  },
  ec: {
      region: 8775
  },
  eg: {
      region: 8777
  },
  eh: {
      region: 8778
  },
  er: {
      region: 8779
  },
  ez: {
      region: 8783
  },
  fk: {
      region: 8786
  },
  fm: {
      region: 8787
  },
  fx: {
      region: 8790
  },
  gb: {
      region: 8792
  },
  ge: {
      region: 8794
  },
  gf: {
      region: 8795
  },
  gg: {
      region: 8796
  },
  gh: {
      region: 8797
  },
  gi: {
      region: 8798
  },
  gm: {
      region: 8800
  },
  gp: {
      region: 8802
  },
  gq: {
      region: 8803
  },
  gr: {
      region: 8804
  },
  gs: {
      region: 8805
  },
  gt: {
      region: 8806
  },
  gw: {
      region: 8808
  },
  gy: {
      region: 8809
  },
  hk: {
      region: 8810
  },
  hm: {
      region: 8811
  },
  hn: {
      region: 8812
  },
  ic: {
      region: 8816
  },
  il: {
      region: 8819
  },
  im: {
      region: 8820
  },
  iq: {
      region: 8823
  },
  ir: {
      region: 8824
  },
  je: {
      region: 8827
  },
  jm: {
      region: 8828
  },
  jo: {
      region: 8829
  },
  jp: {
      region: 8830
  },
  ke: {
      region: 8831
  },
  kh: {
      region: 8833
  },
  kp: {
      region: 8837
  },
  kz: {
      region: 8841
  },
  lc: {
      region: 8844
  },
  lk: {
      region: 8846
  },
  lr: {
      region: 8847
  },
  ls: {
      region: 8848
  },
  ly: {
      region: 8852
  },
  ma: {
      region: 8853
  },
  mc: {
      region: 8854
  },
  md: {
      region: 8855
  },
  me: {
      region: 8856
  },
  mf: {
      region: 8857
  },
  mm: {
      region: 8862
  },
  mp: {
      region: 8865
  },
  mq: {
      region: 8866
  },
  mu: {
      region: 8870
  },
  mv: {
      region: 8871
  },
  mw: {
      region: 8872
  },
  mx: {
      region: 8873
  },
  mz: {
      region: 8875
  },
  nc: {
      region: 8877
  },
  nf: {
      region: 8879
  },
  ni: {
      region: 8881
  },
  np: {
      region: 8884
  },
  nt: {
      region: 8886
  },
  nu: {
      region: 8887
  },
  nz: {
      region: 8888
  },
  pe: {
      region: 8891
  },
  pf: {
      region: 8892
  },
  pg: {
      region: 8893
  },
  ph: {
      region: 8894
  },
  pk: {
      region: 8895
  },
  pm: {
      region: 8897
  },
  pn: {
      region: 8898
  },
  pr: {
      region: 8899
  },
  pw: {
      region: 8902
  },
  py: {
      region: 8903
  },
  qa: {
      region: 8904
  },
  "qm..qz": {
      region: 8905
  },
  re: {
      region: 8906
  },
  rs: {
      region: 8908
  },
  sb: {
      region: 8912
  },
  sj: {
      region: 8919
  },
  sx: {
      region: 8930
  },
  sy: {
      region: 8931
  },
  sz: {
      region: 8932
  },
  tc: {
      region: 8934
  },
  td: {
      region: 8935
  },
  tf: {
      region: 8936
  },
  tj: {
      region: 8939
  },
  tm: {
      region: 8942
  },
  tp: {
      region: 8945
  },
  tv: {
      region: 8948
  },
  tz: {
      region: 8950
  },
  ua: {
      region: 8951
  },
  um: {
      region: 8953
  },
  un: {
      region: 8954
  },
  us: {
      region: 8955
  },
  uy: {
      region: 8956
  },
  va: {
      region: 8958
  },
  vc: {
      region: 8959
  },
  vg: {
      region: 8961
  },
  vn: {
      region: 8963
  },
  vu: {
      region: 8964
  },
  wf: {
      region: 8965
  },
  ws: {
      region: 8966
  },
  "xa..xz": {
      region: 8967
  },
  yd: {
      region: 8968
  },
  ye: {
      region: 8969
  },
  yt: {
      region: 8970
  },
  yu: {
      region: 8971
  },
  zm: {
      region: 8973
  },
  zr: {
      region: 8974
  },
  zw: {
      region: 8975
  },
  zz: {
      region: 8976
  },
  "001": {
      region: 8977
  },
  "002": {
      region: 8978
  },
  "003": {
      region: 8979
  },
  "005": {
      region: 8980
  },
  "009": {
      region: 8981
  },
  "011": {
      region: 8982
  },
  "013": {
      region: 8983
  },
  "014": {
      region: 8984
  },
  "015": {
      region: 8985
  },
  "017": {
      region: 8986
  },
  "018": {
      region: 8987
  },
  "019": {
      region: 8988
  },
  "021": {
      region: 8989
  },
  "029": {
      region: 8990
  },
  "030": {
      region: 8991
  },
  "034": {
      region: 8992
  },
  "035": {
      region: 8993
  },
  "039": {
      region: 8994
  },
  "053": {
      region: 8995
  },
  "054": {
      region: 8996
  },
  "057": {
      region: 8997
  },
  "061": {
      region: 8998
  },
  "1606nict": {
      variant: 9008
  },
  "1694acad": {
      variant: 9009
  },
  "1959acad": {
      variant: 9011
  },
  abl1943: {
      variant: 9014
  },
  akuapem: {
      variant: 9015
  },
  alalc97: {
      variant: 9016
  },
  aluku: {
      variant: 9017
  },
  ao1990: {
      variant: 9018
  },
  aranes: {
      variant: 9019
  },
  arevela: {
      variant: 9020
  },
  arevmda: {
      variant: 9021
  },
  arkaika: {
      variant: 9022
  },
  asante: {
      variant: 9023
  },
  auvern: {
      variant: 9024
  },
  baku1926: {
      variant: 9025
  },
  balanka: {
      variant: 9026
  },
  barla: {
      variant: 9027
  },
  basiceng: {
      variant: 9028
  },
  bauddha: {
      variant: 9029
  },
  biscayan: {
      variant: 9030
  },
  biske: {
      variant: 9031
  },
  bohoric: {
      variant: 9032
  },
  boont: {
      variant: 9033
  },
  bornholm: {
      variant: 9034
  },
  cisaup: {
      variant: 9035
  },
  colb1945: {
      variant: 9036
  },
  cornu: {
      variant: 9037
  },
  creiss: {
      variant: 9038
  },
  dajnko: {
      variant: 9039
  },
  ekavsk: {
      variant: 9040
  },
  emodeng: {
      variant: 9041
  },
  fonipa: {
      variant: 9042
  },
  fonkirsh: {
      variant: 9043
  },
  fonnapa: {
      variant: 9044
  },
  fonupa: {
      variant: 9045
  },
  fonxsamp: {
      variant: 9046
  },
  gallo: {
      variant: 9047
  },
  gascon: {
      variant: 9048
  },
  grclass: {
      variant: 9049
  },
  grital: {
      variant: 9050
  },
  grmistr: {
      variant: 9051
  },
  hepburn: {
      variant: 9052
  },
  heploc: {
      variant: 9053
  },
  hognorsk: {
      variant: 9054
  },
  hsistemo: {
      variant: 9055
  },
  ijekavsk: {
      variant: 9056
  },
  itihasa: {
      variant: 9057
  },
  ivanchov: {
      variant: 9058
  },
  jauer: {
      variant: 9059
  },
  jyutping: {
      variant: 9060
  },
  kkcor: {
      variant: 9061
  },
  kociewie: {
      variant: 9062
  },
  kscor: {
      variant: 9063
  },
  laukika: {
      variant: 9064
  },
  lemosin: {
      variant: 9065
  },
  lengadoc: {
      variant: 9066
  },
  lipaw: {
      variant: 9067
  },
  ltg2007: {
      variant: 9068
  },
  luna1918: {
      variant: 9069
  },
  metelko: {
      variant: 9070
  },
  monoton: {
      variant: 9071
  },
  ndyuka: {
      variant: 9072
  },
  nedis: {
      variant: 9073
  },
  newfound: {
      variant: 9074
  },
  nicard: {
      variant: 9075
  },
  njiva: {
      variant: 9076
  },
  nulik: {
      variant: 9077
  },
  osojs: {
      variant: 9078
  },
  oxendict: {
      variant: 9079
  },
  pahawh2: {
      variant: 9080
  },
  pahawh3: {
      variant: 9081
  },
  pahawh4: {
      variant: 9082
  },
  pamaka: {
      variant: 9083
  },
  peano: {
      variant: 9084
  },
  petr1708: {
      variant: 9085
  },
  pinyin: {
      variant: 9086
  },
  polyton: {
      variant: 9087
  },
  provenc: {
      variant: 9088
  },
  puter: {
      variant: 9089
  },
  rigik: {
      variant: 9090
  },
  rozaj: {
      variant: 9091
  },
  rumgr: {
      variant: 9092
  },
  scotland: {
      variant: 9093
  },
  scouse: {
      variant: 9094
  },
  simple: {
      variant: 9095
  },
  solba: {
      variant: 9096
  },
  sotav: {
      variant: 9097
  },
  spanglis: {
      variant: 9098
  },
  surmiran: {
      variant: 9099
  },
  sursilv: {
      variant: 9100
  },
  sutsilv: {
      variant: 9101
  },
  synnejyl: {
      variant: 9102
  },
  tarask: {
      variant: 9103
  },
  tongyong: {
      variant: 9104
  },
  tunumiit: {
      variant: 9105
  },
  uccor: {
      variant: 9106
  },
  ucrcor: {
      variant: 9107
  },
  ulster: {
      variant: 9108
  },
  unifon: {
      variant: 9109
  },
  vaidika: {
      variant: 9110
  },
  valencia: {
      variant: 9111
  },
  vallader: {
      variant: 9112
  },
  vecdruka: {
      variant: 9113
  },
  vivaraup: {
      variant: 9114
  },
  wadegile: {
      variant: 9115
  },
  xsistemo: {
      variant: 9116
  },
  "art-lojban": {
      grandfathered: 9117
  },
  "cel-gaulish": {
      grandfathered: 9118
  },
  "en-gb-oed": {
      grandfathered: 9119
  },
  "i-ami": {
      grandfathered: 9120
  },
  "i-bnn": {
      grandfathered: 9121
  },
  "i-default": {
      grandfathered: 9122
  },
  "i-enochian": {
      grandfathered: 9123
  },
  "i-hak": {
      grandfathered: 9124
  },
  "i-klingon": {
      grandfathered: 9125
  },
  "i-lux": {
      grandfathered: 9126
  },
  "i-mingo": {
      grandfathered: 9127
  },
  "i-navajo": {
      grandfathered: 9128
  },
  "i-pwn": {
      grandfathered: 9129
  },
  "i-tao": {
      grandfathered: 9130
  },
  "i-tay": {
      grandfathered: 9131
  },
  "i-tsu": {
      grandfathered: 9132
  },
  "no-bok": {
      grandfathered: 9133
  },
  "no-nyn": {
      grandfathered: 9134
  },
  "sgn-be-fr": {
      grandfathered: 9135
  },
  "sgn-be-nl": {
      grandfathered: 9136
  },
  "sgn-ch-de": {
      grandfathered: 9137
  },
  "zh-guoyu": {
      grandfathered: 9138
  },
  "zh-hakka": {
      grandfathered: 9139
  },
  "zh-min": {
      grandfathered: 9140
  },
  "zh-min-nan": {
      grandfathered: 9141
  },
  "zh-xiang": {
      grandfathered: 9142
  },
  "az-arab": {
      redundant: 9143
  },
  "az-cyrl": {
      redundant: 9144
  },
  "az-latn": {
      redundant: 9145
  },
  "be-latn": {
      redundant: 9146
  },
  "bs-cyrl": {
      redundant: 9147
  },
  "bs-latn": {
      redundant: 9148
  },
  "de-1901": {
      redundant: 9149
  },
  "de-1996": {
      redundant: 9150
  },
  "de-at-1901": {
      redundant: 9151
  },
  "de-at-1996": {
      redundant: 9152
  },
  "de-ch-1901": {
      redundant: 9153
  },
  "de-ch-1996": {
      redundant: 9154
  },
  "de-de-1901": {
      redundant: 9155
  },
  "de-de-1996": {
      redundant: 9156
  },
  "en-boont": {
      redundant: 9157
  },
  "en-scouse": {
      redundant: 9158
  },
  "es-419": {
      redundant: 9159
  },
  "iu-cans": {
      redundant: 9160
  },
  "iu-latn": {
      redundant: 9161
  },
  "mn-cyrl": {
      redundant: 9162
  },
  "mn-mong": {
      redundant: 9163
  },
  "sgn-br": {
      redundant: 9164
  },
  "sgn-co": {
      redundant: 9165
  },
  "sgn-de": {
      redundant: 9166
  },
  "sgn-dk": {
      redundant: 9167
  },
  "sgn-es": {
      redundant: 9168
  },
  "sgn-fr": {
      redundant: 9169
  },
  "sgn-gb": {
      redundant: 9170
  },
  "sgn-gr": {
      redundant: 9171
  },
  "sgn-ie": {
      redundant: 9172
  },
  "sgn-it": {
      redundant: 9173
  },
  "sgn-jp": {
      redundant: 9174
  },
  "sgn-mx": {
      redundant: 9175
  },
  "sgn-ni": {
      redundant: 9176
  },
  "sgn-nl": {
      redundant: 9177
  },
  "sgn-no": {
      redundant: 9178
  },
  "sgn-pt": {
      redundant: 9179
  },
  "sgn-se": {
      redundant: 9180
  },
  "sgn-us": {
      redundant: 9181
  },
  "sgn-za": {
      redundant: 9182
  },
  "sl-nedis": {
      redundant: 9183
  },
  "sl-rozaj": {
      redundant: 9184
  },
  "sr-cyrl": {
      redundant: 9185
  },
  "sr-latn": {
      redundant: 9186
  },
  "tg-arab": {
      redundant: 9187
  },
  "tg-cyrl": {
      redundant: 9188
  },
  "uz-cyrl": {
      redundant: 9189
  },
  "uz-latn": {
      redundant: 9190
  },
  "yi-latn": {
      redundant: 9191
  },
  "zh-cmn": {
      redundant: 9192
  },
  "zh-cmn-hans": {
      redundant: 9193
  },
  "zh-cmn-hant": {
      redundant: 9194
  },
  "zh-gan": {
      redundant: 9195
  },
  "zh-hans": {
      redundant: 9196
  },
  "zh-hans-cn": {
      redundant: 9197
  },
  "zh-hans-hk": {
      redundant: 9198
  },
  "zh-hans-mo": {
      redundant: 9199
  },
  "zh-hans-sg": {
      redundant: 9200
  },
  "zh-hans-tw": {
      redundant: 9201
  },
  "zh-hant": {
      redundant: 9202
  },
  "zh-hant-cn": {
      redundant: 9203
  },
  "zh-hant-hk": {
      redundant: 9204
  },
  "zh-hant-mo": {
      redundant: 9205
  },
  "zh-hant-sg": {
      redundant: 9206
  },
  "zh-hant-tw": {
      redundant: 9207
  },
  "zh-wuu": {
      redundant: 9208
  },
  "zh-yue": {
      redundant: 9209
  }
};
var G = {};
Object.defineProperty(G, "__esModule", {
  value: !0
});
G.default = {
  aa: 0,
  ab: 1,
  ae: 2,
  af: 3,
  ak: 4,
  am: 5,
  an: 6,
  ar: 7,
  as: 8,
  av: 9,
  ay: 10,
  az: 11,
  ba: 12,
  be: 13,
  bg: 14,
  bh: 15,
  bi: 16,
  bm: 17,
  bn: 18,
  bo: 19,
  br: 20,
  bs: 21,
  ca: 22,
  ce: 23,
  ch: 24,
  co: 25,
  cr: 26,
  cs: 27,
  cu: 28,
  cv: 29,
  cy: 30,
  da: 31,
  de: 32,
  dv: 33,
  dz: 34,
  ee: 35,
  el: 36,
  en: 37,
  eo: 38,
  es: 39,
  et: 40,
  eu: 41,
  fa: 42,
  ff: 43,
  fi: 44,
  fj: 45,
  fo: 46,
  fr: 47,
  fy: 48,
  ga: 49,
  gd: 50,
  gl: 51,
  gn: 52,
  gu: 53,
  gv: 54,
  ha: 55,
  he: 56,
  hi: 57,
  ho: 58,
  hr: 59,
  ht: 60,
  hu: 61,
  hy: 62,
  hz: 63,
  ia: 64,
  id: 65,
  ie: 66,
  ig: 67,
  ii: 68,
  ik: 69,
  in: 70,
  io: 71,
  is: 72,
  it: 73,
  iu: 74,
  iw: 75,
  ja: 76,
  ji: 77,
  jv: 78,
  jw: 79,
  ka: 80,
  kg: 81,
  ki: 82,
  kj: 83,
  kk: 84,
  kl: 85,
  km: 86,
  kn: 87,
  ko: 88,
  kr: 89,
  ks: 90,
  ku: 91,
  kv: 92,
  kw: 93,
  ky: 94,
  la: 95,
  lb: 96,
  lg: 97,
  li: 98,
  ln: 99,
  lo: 100,
  lt: 101,
  lu: 102,
  lv: 103,
  mg: 104,
  mh: 105,
  mi: 106,
  mk: 107,
  ml: 108,
  mn: 109,
  mo: 110,
  mr: 111,
  ms: 112,
  mt: 113,
  my: 114,
  na: 115,
  nb: 116,
  nd: 117,
  ne: 118,
  ng: 119,
  nl: 120,
  nn: 121,
  no: 122,
  nr: 123,
  nv: 124,
  ny: 125,
  oc: 126,
  oj: 127,
  om: 128,
  or: 129,
  os: 130,
  pa: 131,
  pi: 132,
  pl: 133,
  ps: 134,
  pt: 135,
  qu: 136,
  rm: 137,
  rn: 138,
  ro: 139,
  ru: 140,
  rw: 141,
  sa: 142,
  sc: 143,
  sd: 144,
  se: 145,
  sg: 146,
  sh: 147,
  si: 148,
  sk: 149,
  sl: 150,
  sm: 151,
  sn: 152,
  so: 153,
  sq: 154,
  sr: 155,
  ss: 156,
  st: 157,
  su: 158,
  sv: 159,
  sw: 160,
  ta: 161,
  te: 162,
  tg: 163,
  th: 164,
  ti: 165,
  tk: 166,
  tl: 167,
  tn: 168,
  to: 169,
  tr: 170,
  ts: 171,
  tt: 172,
  tw: 173,
  ty: 174,
  ug: 175,
  uk: 176,
  ur: 177,
  uz: 178,
  ve: 179,
  vi: 180,
  vo: 181,
  wa: 182,
  wo: 183,
  xh: 184,
  yi: 185,
  yo: 186,
  za: 187,
  zh: 188,
  zu: 189,
  aaa: 190,
  aab: 191,
  aac: 192,
  aad: 193,
  aae: 194,
  aaf: 195,
  aag: 196,
  aah: 197,
  aai: 198,
  aak: 199,
  aal: 200,
  aam: 201,
  aan: 202,
  aao: 203,
  aap: 204,
  aaq: 205,
  aas: 206,
  aat: 207,
  aau: 208,
  aav: 209,
  aaw: 210,
  aax: 211,
  aaz: 212,
  aba: 213,
  abb: 214,
  abc: 215,
  abd: 216,
  abe: 217,
  abf: 218,
  abg: 219,
  abh: 220,
  abi: 221,
  abj: 222,
  abl: 223,
  abm: 224,
  abn: 225,
  abo: 226,
  abp: 227,
  abq: 228,
  abr: 229,
  abs: 230,
  abt: 231,
  abu: 232,
  abv: 233,
  abw: 234,
  abx: 235,
  aby: 236,
  abz: 237,
  aca: 238,
  acb: 239,
  acd: 240,
  ace: 241,
  acf: 242,
  ach: 243,
  aci: 244,
  ack: 245,
  acl: 246,
  acm: 247,
  acn: 248,
  acp: 249,
  acq: 250,
  acr: 251,
  acs: 252,
  act: 253,
  acu: 254,
  acv: 255,
  acw: 256,
  acx: 257,
  acy: 258,
  acz: 259,
  ada: 260,
  adb: 261,
  add: 262,
  ade: 263,
  adf: 264,
  adg: 265,
  adh: 266,
  adi: 267,
  adj: 268,
  adl: 269,
  adn: 270,
  ado: 271,
  adp: 272,
  adq: 273,
  adr: 274,
  ads: 275,
  adt: 276,
  adu: 277,
  adw: 278,
  adx: 279,
  ady: 280,
  adz: 281,
  aea: 282,
  aeb: 283,
  aec: 284,
  aed: 285,
  aee: 286,
  aek: 287,
  ael: 288,
  aem: 289,
  aen: 290,
  aeq: 291,
  aer: 292,
  aes: 293,
  aeu: 294,
  aew: 295,
  aey: 296,
  aez: 297,
  afa: 298,
  afb: 299,
  afd: 300,
  afe: 301,
  afg: 302,
  afh: 303,
  afi: 304,
  afk: 305,
  afn: 306,
  afo: 307,
  afp: 308,
  afs: 309,
  aft: 310,
  afu: 311,
  afz: 312,
  aga: 313,
  agb: 314,
  agc: 315,
  agd: 316,
  age: 317,
  agf: 318,
  agg: 319,
  agh: 320,
  agi: 321,
  agj: 322,
  agk: 323,
  agl: 324,
  agm: 325,
  agn: 326,
  ago: 327,
  agp: 328,
  agq: 329,
  agr: 330,
  ags: 331,
  agt: 332,
  agu: 333,
  agv: 334,
  agw: 335,
  agx: 336,
  agy: 337,
  agz: 338,
  aha: 339,
  ahb: 340,
  ahg: 341,
  ahh: 342,
  ahi: 343,
  ahk: 344,
  ahl: 345,
  ahm: 346,
  ahn: 347,
  aho: 348,
  ahp: 349,
  ahr: 350,
  ahs: 351,
  aht: 352,
  aia: 353,
  aib: 354,
  aic: 355,
  aid: 356,
  aie: 357,
  aif: 358,
  aig: 359,
  aih: 360,
  aii: 361,
  aij: 362,
  aik: 363,
  ail: 364,
  aim: 365,
  ain: 366,
  aio: 367,
  aip: 368,
  aiq: 369,
  air: 370,
  ais: 371,
  ait: 372,
  aiw: 373,
  aix: 374,
  aiy: 375,
  aja: 376,
  ajg: 377,
  aji: 378,
  ajn: 379,
  ajp: 380,
  ajs: 381,
  ajt: 382,
  aju: 383,
  ajw: 384,
  ajz: 385,
  akb: 386,
  akc: 387,
  akd: 388,
  ake: 389,
  akf: 390,
  akg: 391,
  akh: 392,
  aki: 393,
  akj: 394,
  akk: 395,
  akl: 396,
  akm: 397,
  ako: 398,
  akp: 399,
  akq: 400,
  akr: 401,
  aks: 402,
  akt: 403,
  aku: 404,
  akv: 405,
  akw: 406,
  akx: 407,
  aky: 408,
  akz: 409,
  ala: 410,
  alc: 411,
  ald: 412,
  ale: 413,
  alf: 414,
  alg: 415,
  alh: 416,
  ali: 417,
  alj: 418,
  alk: 419,
  all: 420,
  alm: 421,
  aln: 422,
  alo: 423,
  alp: 424,
  alq: 425,
  alr: 426,
  als: 427,
  alt: 428,
  alu: 429,
  alv: 430,
  alw: 431,
  alx: 432,
  aly: 433,
  alz: 434,
  ama: 435,
  amb: 436,
  amc: 437,
  ame: 438,
  amf: 439,
  amg: 440,
  ami: 441,
  amj: 442,
  amk: 443,
  aml: 444,
  amm: 445,
  amn: 446,
  amo: 447,
  amp: 448,
  amq: 449,
  amr: 450,
  ams: 451,
  amt: 452,
  amu: 453,
  amv: 454,
  amw: 455,
  amx: 456,
  amy: 457,
  amz: 458,
  ana: 459,
  anb: 460,
  anc: 461,
  and: 462,
  ane: 463,
  anf: 464,
  ang: 465,
  anh: 466,
  ani: 467,
  anj: 468,
  ank: 469,
  anl: 470,
  anm: 471,
  ann: 472,
  ano: 473,
  anp: 474,
  anq: 475,
  anr: 476,
  ans: 477,
  ant: 478,
  anu: 479,
  anv: 480,
  anw: 481,
  anx: 482,
  any: 483,
  anz: 484,
  aoa: 485,
  aob: 486,
  aoc: 487,
  aod: 488,
  aoe: 489,
  aof: 490,
  aog: 491,
  aoh: 492,
  aoi: 493,
  aoj: 494,
  aok: 495,
  aol: 496,
  aom: 497,
  aon: 498,
  aor: 499,
  aos: 500,
  aot: 501,
  aou: 502,
  aox: 503,
  aoz: 504,
  apa: 505,
  apb: 506,
  apc: 507,
  apd: 508,
  ape: 509,
  apf: 510,
  apg: 511,
  aph: 512,
  api: 513,
  apj: 514,
  apk: 515,
  apl: 516,
  apm: 517,
  apn: 518,
  apo: 519,
  app: 520,
  apq: 521,
  apr: 522,
  aps: 523,
  apt: 524,
  apu: 525,
  apv: 526,
  apw: 527,
  apx: 528,
  apy: 529,
  apz: 530,
  aqa: 531,
  aqc: 532,
  aqd: 533,
  aqg: 534,
  aqk: 535,
  aql: 536,
  aqm: 537,
  aqn: 538,
  aqp: 539,
  aqr: 540,
  aqt: 541,
  aqz: 542,
  arb: 543,
  arc: 544,
  ard: 545,
  are: 546,
  arh: 547,
  ari: 548,
  arj: 549,
  ark: 550,
  arl: 551,
  arn: 552,
  aro: 553,
  arp: 554,
  arq: 555,
  arr: 556,
  ars: 557,
  art: 558,
  aru: 559,
  arv: 560,
  arw: 561,
  arx: 562,
  ary: 563,
  arz: 564,
  asa: 565,
  asb: 566,
  asc: 567,
  asd: 568,
  ase: 569,
  asf: 570,
  asg: 571,
  ash: 572,
  asi: 573,
  asj: 574,
  ask: 575,
  asl: 576,
  asn: 577,
  aso: 578,
  asp: 579,
  asq: 580,
  asr: 581,
  ass: 582,
  ast: 583,
  asu: 584,
  asv: 585,
  asw: 586,
  asx: 587,
  asy: 588,
  asz: 589,
  ata: 590,
  atb: 591,
  atc: 592,
  atd: 593,
  ate: 594,
  atg: 595,
  ath: 596,
  ati: 597,
  atj: 598,
  atk: 599,
  atl: 600,
  atm: 601,
  atn: 602,
  ato: 603,
  atp: 604,
  atq: 605,
  atr: 606,
  ats: 607,
  att: 608,
  atu: 609,
  atv: 610,
  atw: 611,
  atx: 612,
  aty: 613,
  atz: 614,
  aua: 615,
  aub: 616,
  auc: 617,
  aud: 618,
  aue: 619,
  auf: 620,
  aug: 621,
  auh: 622,
  aui: 623,
  auj: 624,
  auk: 625,
  aul: 626,
  aum: 627,
  aun: 628,
  auo: 629,
  aup: 630,
  auq: 631,
  aur: 632,
  aus: 633,
  aut: 634,
  auu: 635,
  auw: 636,
  aux: 637,
  auy: 638,
  auz: 639,
  avb: 640,
  avd: 641,
  avi: 642,
  avk: 643,
  avl: 644,
  avm: 645,
  avn: 646,
  avo: 647,
  avs: 648,
  avt: 649,
  avu: 650,
  avv: 651,
  awa: 652,
  awb: 653,
  awc: 654,
  awd: 655,
  awe: 656,
  awg: 657,
  awh: 658,
  awi: 659,
  awk: 660,
  awm: 661,
  awn: 662,
  awo: 663,
  awr: 664,
  aws: 665,
  awt: 666,
  awu: 667,
  awv: 668,
  aww: 669,
  awx: 670,
  awy: 671,
  axb: 672,
  axe: 673,
  axg: 674,
  axk: 675,
  axl: 676,
  axm: 677,
  axx: 678,
  aya: 679,
  ayb: 680,
  ayc: 681,
  ayd: 682,
  aye: 683,
  ayg: 684,
  ayh: 685,
  ayi: 686,
  ayk: 687,
  ayl: 688,
  ayn: 689,
  ayo: 690,
  ayp: 691,
  ayq: 692,
  ayr: 693,
  ays: 694,
  ayt: 695,
  ayu: 696,
  ayx: 697,
  ayy: 698,
  ayz: 699,
  aza: 700,
  azb: 701,
  azc: 702,
  azd: 703,
  azg: 704,
  azj: 705,
  azm: 706,
  azn: 707,
  azo: 708,
  azt: 709,
  azz: 710,
  baa: 711,
  bab: 712,
  bac: 713,
  bad: 714,
  bae: 715,
  baf: 716,
  bag: 717,
  bah: 718,
  bai: 719,
  baj: 720,
  bal: 721,
  ban: 722,
  bao: 723,
  bap: 724,
  bar: 725,
  bas: 726,
  bat: 727,
  bau: 728,
  bav: 729,
  baw: 730,
  bax: 731,
  bay: 732,
  baz: 733,
  bba: 734,
  bbb: 735,
  bbc: 736,
  bbd: 737,
  bbe: 738,
  bbf: 739,
  bbg: 740,
  bbh: 741,
  bbi: 742,
  bbj: 743,
  bbk: 744,
  bbl: 745,
  bbm: 746,
  bbn: 747,
  bbo: 748,
  bbp: 749,
  bbq: 750,
  bbr: 751,
  bbs: 752,
  bbt: 753,
  bbu: 754,
  bbv: 755,
  bbw: 756,
  bbx: 757,
  bby: 758,
  bbz: 759,
  bca: 760,
  bcb: 761,
  bcc: 762,
  bcd: 763,
  bce: 764,
  bcf: 765,
  bcg: 766,
  bch: 767,
  bci: 768,
  bcj: 769,
  bck: 770,
  bcl: 771,
  bcm: 772,
  bcn: 773,
  bco: 774,
  bcp: 775,
  bcq: 776,
  bcr: 777,
  bcs: 778,
  bct: 779,
  bcu: 780,
  bcv: 781,
  bcw: 782,
  bcy: 783,
  bcz: 784,
  bda: 785,
  bdb: 786,
  bdc: 787,
  bdd: 788,
  bde: 789,
  bdf: 790,
  bdg: 791,
  bdh: 792,
  bdi: 793,
  bdj: 794,
  bdk: 795,
  bdl: 796,
  bdm: 797,
  bdn: 798,
  bdo: 799,
  bdp: 800,
  bdq: 801,
  bdr: 802,
  bds: 803,
  bdt: 804,
  bdu: 805,
  bdv: 806,
  bdw: 807,
  bdx: 808,
  bdy: 809,
  bdz: 810,
  bea: 811,
  beb: 812,
  bec: 813,
  bed: 814,
  bee: 815,
  bef: 816,
  beg: 817,
  beh: 818,
  bei: 819,
  bej: 820,
  bek: 821,
  bem: 822,
  beo: 823,
  bep: 824,
  beq: 825,
  ber: 826,
  bes: 827,
  bet: 828,
  beu: 829,
  bev: 830,
  bew: 831,
  bex: 832,
  bey: 833,
  bez: 834,
  bfa: 835,
  bfb: 836,
  bfc: 837,
  bfd: 838,
  bfe: 839,
  bff: 840,
  bfg: 841,
  bfh: 842,
  bfi: 843,
  bfj: 844,
  bfk: 845,
  bfl: 846,
  bfm: 847,
  bfn: 848,
  bfo: 849,
  bfp: 850,
  bfq: 851,
  bfr: 852,
  bfs: 853,
  bft: 854,
  bfu: 855,
  bfw: 856,
  bfx: 857,
  bfy: 858,
  bfz: 859,
  bga: 860,
  bgb: 861,
  bgc: 862,
  bgd: 863,
  bge: 864,
  bgf: 865,
  bgg: 866,
  bgi: 867,
  bgj: 868,
  bgk: 869,
  bgl: 870,
  bgm: 871,
  bgn: 872,
  bgo: 873,
  bgp: 874,
  bgq: 875,
  bgr: 876,
  bgs: 877,
  bgt: 878,
  bgu: 879,
  bgv: 880,
  bgw: 881,
  bgx: 882,
  bgy: 883,
  bgz: 884,
  bha: 885,
  bhb: 886,
  bhc: 887,
  bhd: 888,
  bhe: 889,
  bhf: 890,
  bhg: 891,
  bhh: 892,
  bhi: 893,
  bhj: 894,
  bhk: 895,
  bhl: 896,
  bhm: 897,
  bhn: 898,
  bho: 899,
  bhp: 900,
  bhq: 901,
  bhr: 902,
  bhs: 903,
  bht: 904,
  bhu: 905,
  bhv: 906,
  bhw: 907,
  bhx: 908,
  bhy: 909,
  bhz: 910,
  bia: 911,
  bib: 912,
  bic: 913,
  bid: 914,
  bie: 915,
  bif: 916,
  big: 917,
  bij: 918,
  bik: 919,
  bil: 920,
  bim: 921,
  bin: 922,
  bio: 923,
  bip: 924,
  biq: 925,
  bir: 926,
  bit: 927,
  biu: 928,
  biv: 929,
  biw: 930,
  bix: 931,
  biy: 932,
  biz: 933,
  bja: 934,
  bjb: 935,
  bjc: 936,
  bjd: 937,
  bje: 938,
  bjf: 939,
  bjg: 940,
  bjh: 941,
  bji: 942,
  bjj: 943,
  bjk: 944,
  bjl: 945,
  bjm: 946,
  bjn: 947,
  bjo: 948,
  bjp: 949,
  bjq: 950,
  bjr: 951,
  bjs: 952,
  bjt: 953,
  bju: 954,
  bjv: 955,
  bjw: 956,
  bjx: 957,
  bjy: 958,
  bjz: 959,
  bka: 960,
  bkb: 961,
  bkc: 962,
  bkd: 963,
  bkf: 964,
  bkg: 965,
  bkh: 966,
  bki: 967,
  bkj: 968,
  bkk: 969,
  bkl: 970,
  bkm: 971,
  bkn: 972,
  bko: 973,
  bkp: 974,
  bkq: 975,
  bkr: 976,
  bks: 977,
  bkt: 978,
  bku: 979,
  bkv: 980,
  bkw: 981,
  bkx: 982,
  bky: 983,
  bkz: 984,
  bla: 985,
  blb: 986,
  blc: 987,
  bld: 988,
  ble: 989,
  blf: 990,
  blg: 991,
  blh: 992,
  bli: 993,
  blj: 994,
  blk: 995,
  bll: 996,
  blm: 997,
  bln: 998,
  blo: 999,
  blp: 1e3,
  blq: 1001,
  blr: 1002,
  bls: 1003,
  blt: 1004,
  blv: 1005,
  blw: 1006,
  blx: 1007,
  bly: 1008,
  blz: 1009,
  bma: 1010,
  bmb: 1011,
  bmc: 1012,
  bmd: 1013,
  bme: 1014,
  bmf: 1015,
  bmg: 1016,
  bmh: 1017,
  bmi: 1018,
  bmj: 1019,
  bmk: 1020,
  bml: 1021,
  bmm: 1022,
  bmn: 1023,
  bmo: 1024,
  bmp: 1025,
  bmq: 1026,
  bmr: 1027,
  bms: 1028,
  bmt: 1029,
  bmu: 1030,
  bmv: 1031,
  bmw: 1032,
  bmx: 1033,
  bmy: 1034,
  bmz: 1035,
  bna: 1036,
  bnb: 1037,
  bnc: 1038,
  bnd: 1039,
  bne: 1040,
  bnf: 1041,
  bng: 1042,
  bni: 1043,
  bnj: 1044,
  bnk: 1045,
  bnl: 1046,
  bnm: 1047,
  bnn: 1048,
  bno: 1049,
  bnp: 1050,
  bnq: 1051,
  bnr: 1052,
  bns: 1053,
  bnt: 1054,
  bnu: 1055,
  bnv: 1056,
  bnw: 1057,
  bnx: 1058,
  bny: 1059,
  bnz: 1060,
  boa: 1061,
  bob: 1062,
  boe: 1063,
  bof: 1064,
  bog: 1065,
  boh: 1066,
  boi: 1067,
  boj: 1068,
  bok: 1069,
  bol: 1070,
  bom: 1071,
  bon: 1072,
  boo: 1073,
  bop: 1074,
  boq: 1075,
  bor: 1076,
  bot: 1077,
  bou: 1078,
  bov: 1079,
  bow: 1080,
  box: 1081,
  boy: 1082,
  boz: 1083,
  bpa: 1084,
  bpb: 1085,
  bpc: 1086,
  bpd: 1087,
  bpe: 1088,
  bpg: 1089,
  bph: 1090,
  bpi: 1091,
  bpj: 1092,
  bpk: 1093,
  bpl: 1094,
  bpm: 1095,
  bpn: 1096,
  bpo: 1097,
  bpp: 1098,
  bpq: 1099,
  bpr: 1100,
  bps: 1101,
  bpt: 1102,
  bpu: 1103,
  bpv: 1104,
  bpw: 1105,
  bpx: 1106,
  bpy: 1107,
  bpz: 1108,
  bqa: 1109,
  bqb: 1110,
  bqc: 1111,
  bqd: 1112,
  bqf: 1113,
  bqg: 1114,
  bqh: 1115,
  bqi: 1116,
  bqj: 1117,
  bqk: 1118,
  bql: 1119,
  bqm: 1120,
  bqn: 1121,
  bqo: 1122,
  bqp: 1123,
  bqq: 1124,
  bqr: 1125,
  bqs: 1126,
  bqt: 1127,
  bqu: 1128,
  bqv: 1129,
  bqw: 1130,
  bqx: 1131,
  bqy: 1132,
  bqz: 1133,
  bra: 1134,
  brb: 1135,
  brc: 1136,
  brd: 1137,
  brf: 1138,
  brg: 1139,
  brh: 1140,
  bri: 1141,
  brj: 1142,
  brk: 1143,
  brl: 1144,
  brm: 1145,
  brn: 1146,
  bro: 1147,
  brp: 1148,
  brq: 1149,
  brr: 1150,
  brs: 1151,
  brt: 1152,
  bru: 1153,
  brv: 1154,
  brw: 1155,
  brx: 1156,
  bry: 1157,
  brz: 1158,
  bsa: 1159,
  bsb: 1160,
  bsc: 1161,
  bse: 1162,
  bsf: 1163,
  bsg: 1164,
  bsh: 1165,
  bsi: 1166,
  bsj: 1167,
  bsk: 1168,
  bsl: 1169,
  bsm: 1170,
  bsn: 1171,
  bso: 1172,
  bsp: 1173,
  bsq: 1174,
  bsr: 1175,
  bss: 1176,
  bst: 1177,
  bsu: 1178,
  bsv: 1179,
  bsw: 1180,
  bsx: 1181,
  bsy: 1182,
  bta: 1183,
  btb: 1184,
  btc: 1185,
  btd: 1186,
  bte: 1187,
  btf: 1188,
  btg: 1189,
  bth: 1190,
  bti: 1191,
  btj: 1192,
  btk: 1193,
  btl: 1194,
  btm: 1195,
  btn: 1196,
  bto: 1197,
  btp: 1198,
  btq: 1199,
  btr: 1200,
  bts: 1201,
  btt: 1202,
  btu: 1203,
  btv: 1204,
  btw: 1205,
  btx: 1206,
  bty: 1207,
  btz: 1208,
  bua: 1209,
  bub: 1210,
  buc: 1211,
  bud: 1212,
  bue: 1213,
  buf: 1214,
  bug: 1215,
  buh: 1216,
  bui: 1217,
  buj: 1218,
  buk: 1219,
  bum: 1220,
  bun: 1221,
  buo: 1222,
  bup: 1223,
  buq: 1224,
  bus: 1225,
  but: 1226,
  buu: 1227,
  buv: 1228,
  buw: 1229,
  bux: 1230,
  buy: 1231,
  buz: 1232,
  bva: 1233,
  bvb: 1234,
  bvc: 1235,
  bvd: 1236,
  bve: 1237,
  bvf: 1238,
  bvg: 1239,
  bvh: 1240,
  bvi: 1241,
  bvj: 1242,
  bvk: 1243,
  bvl: 1244,
  bvm: 1245,
  bvn: 1246,
  bvo: 1247,
  bvp: 1248,
  bvq: 1249,
  bvr: 1250,
  bvt: 1251,
  bvu: 1252,
  bvv: 1253,
  bvw: 1254,
  bvx: 1255,
  bvy: 1256,
  bvz: 1257,
  bwa: 1258,
  bwb: 1259,
  bwc: 1260,
  bwd: 1261,
  bwe: 1262,
  bwf: 1263,
  bwg: 1264,
  bwh: 1265,
  bwi: 1266,
  bwj: 1267,
  bwk: 1268,
  bwl: 1269,
  bwm: 1270,
  bwn: 1271,
  bwo: 1272,
  bwp: 1273,
  bwq: 1274,
  bwr: 1275,
  bws: 1276,
  bwt: 1277,
  bwu: 1278,
  bww: 1279,
  bwx: 1280,
  bwy: 1281,
  bwz: 1282,
  bxa: 1283,
  bxb: 1284,
  bxc: 1285,
  bxd: 1286,
  bxe: 1287,
  bxf: 1288,
  bxg: 1289,
  bxh: 1290,
  bxi: 1291,
  bxj: 1292,
  bxk: 1293,
  bxl: 1294,
  bxm: 1295,
  bxn: 1296,
  bxo: 1297,
  bxp: 1298,
  bxq: 1299,
  bxr: 1300,
  bxs: 1301,
  bxu: 1302,
  bxv: 1303,
  bxw: 1304,
  bxx: 1305,
  bxz: 1306,
  bya: 1307,
  byb: 1308,
  byc: 1309,
  byd: 1310,
  bye: 1311,
  byf: 1312,
  byg: 1313,
  byh: 1314,
  byi: 1315,
  byj: 1316,
  byk: 1317,
  byl: 1318,
  bym: 1319,
  byn: 1320,
  byo: 1321,
  byp: 1322,
  byq: 1323,
  byr: 1324,
  bys: 1325,
  byt: 1326,
  byv: 1327,
  byw: 1328,
  byx: 1329,
  byy: 1330,
  byz: 1331,
  bza: 1332,
  bzb: 1333,
  bzc: 1334,
  bzd: 1335,
  bze: 1336,
  bzf: 1337,
  bzg: 1338,
  bzh: 1339,
  bzi: 1340,
  bzj: 1341,
  bzk: 1342,
  bzl: 1343,
  bzm: 1344,
  bzn: 1345,
  bzo: 1346,
  bzp: 1347,
  bzq: 1348,
  bzr: 1349,
  bzs: 1350,
  bzt: 1351,
  bzu: 1352,
  bzv: 1353,
  bzw: 1354,
  bzx: 1355,
  bzy: 1356,
  bzz: 1357,
  caa: 1358,
  cab: 1359,
  cac: 1360,
  cad: 1361,
  cae: 1362,
  caf: 1363,
  cag: 1364,
  cah: 1365,
  cai: 1366,
  caj: 1367,
  cak: 1368,
  cal: 1369,
  cam: 1370,
  can: 1371,
  cao: 1372,
  cap: 1373,
  caq: 1374,
  car: 1375,
  cas: 1376,
  cau: 1377,
  cav: 1378,
  caw: 1379,
  cax: 1380,
  cay: 1381,
  caz: 1382,
  cba: 1383,
  cbb: 1384,
  cbc: 1385,
  cbd: 1386,
  cbe: 1387,
  cbg: 1388,
  cbh: 1389,
  cbi: 1390,
  cbj: 1391,
  cbk: 1392,
  cbl: 1393,
  cbn: 1394,
  cbo: 1395,
  cbq: 1396,
  cbr: 1397,
  cbs: 1398,
  cbt: 1399,
  cbu: 1400,
  cbv: 1401,
  cbw: 1402,
  cby: 1403,
  cca: 1404,
  ccc: 1405,
  ccd: 1406,
  cce: 1407,
  ccg: 1408,
  cch: 1409,
  ccj: 1410,
  ccl: 1411,
  ccm: 1412,
  ccn: 1413,
  cco: 1414,
  ccp: 1415,
  ccq: 1416,
  ccr: 1417,
  ccs: 1418,
  cda: 1419,
  cdc: 1420,
  cdd: 1421,
  cde: 1422,
  cdf: 1423,
  cdg: 1424,
  cdh: 1425,
  cdi: 1426,
  cdj: 1427,
  cdm: 1428,
  cdn: 1429,
  cdo: 1430,
  cdr: 1431,
  cds: 1432,
  cdy: 1433,
  cdz: 1434,
  cea: 1435,
  ceb: 1436,
  ceg: 1437,
  cek: 1438,
  cel: 1439,
  cen: 1440,
  cet: 1441,
  cey: 1442,
  cfa: 1443,
  cfd: 1444,
  cfg: 1445,
  cfm: 1446,
  cga: 1447,
  cgc: 1448,
  cgg: 1449,
  cgk: 1450,
  chb: 1451,
  chc: 1452,
  chd: 1453,
  chf: 1454,
  chg: 1455,
  chh: 1456,
  chj: 1457,
  chk: 1458,
  chl: 1459,
  chm: 1460,
  chn: 1461,
  cho: 1462,
  chp: 1463,
  chq: 1464,
  chr: 1465,
  cht: 1466,
  chw: 1467,
  chx: 1468,
  chy: 1469,
  chz: 1470,
  cia: 1471,
  cib: 1472,
  cic: 1473,
  cid: 1474,
  cie: 1475,
  cih: 1476,
  cik: 1477,
  cim: 1478,
  cin: 1479,
  cip: 1480,
  cir: 1481,
  ciw: 1482,
  ciy: 1483,
  cja: 1484,
  cje: 1485,
  cjh: 1486,
  cji: 1487,
  cjk: 1488,
  cjm: 1489,
  cjn: 1490,
  cjo: 1491,
  cjp: 1492,
  cjr: 1493,
  cjs: 1494,
  cjv: 1495,
  cjy: 1496,
  cka: 1497,
  ckb: 1498,
  ckh: 1499,
  ckl: 1500,
  ckm: 1501,
  ckn: 1502,
  cko: 1503,
  ckq: 1504,
  ckr: 1505,
  cks: 1506,
  ckt: 1507,
  cku: 1508,
  ckv: 1509,
  ckx: 1510,
  cky: 1511,
  ckz: 1512,
  cla: 1513,
  clc: 1514,
  cld: 1515,
  cle: 1516,
  clh: 1517,
  cli: 1518,
  clj: 1519,
  clk: 1520,
  cll: 1521,
  clm: 1522,
  clo: 1523,
  clt: 1524,
  clu: 1525,
  clw: 1526,
  cly: 1527,
  cma: 1528,
  cmc: 1529,
  cme: 1530,
  cmg: 1531,
  cmi: 1532,
  cmk: 1533,
  cml: 1534,
  cmm: 1535,
  cmn: 1536,
  cmo: 1537,
  cmr: 1538,
  cms: 1539,
  cmt: 1540,
  cna: 1541,
  cnb: 1542,
  cnc: 1543,
  cng: 1544,
  cnh: 1545,
  cni: 1546,
  cnk: 1547,
  cnl: 1548,
  cno: 1549,
  cnp: 1550,
  cnq: 1551,
  cnr: 1552,
  cns: 1553,
  cnt: 1554,
  cnu: 1555,
  cnw: 1556,
  cnx: 1557,
  coa: 1558,
  cob: 1559,
  coc: 1560,
  cod: 1561,
  coe: 1562,
  cof: 1563,
  cog: 1564,
  coh: 1565,
  coj: 1566,
  cok: 1567,
  col: 1568,
  com: 1569,
  con: 1570,
  coo: 1571,
  cop: 1572,
  coq: 1573,
  cot: 1574,
  cou: 1575,
  cov: 1576,
  cow: 1577,
  cox: 1578,
  coy: 1579,
  coz: 1580,
  cpa: 1581,
  cpb: 1582,
  cpc: 1583,
  cpe: 1584,
  cpf: 1585,
  cpg: 1586,
  cpi: 1587,
  cpn: 1588,
  cpo: 1589,
  cpp: 1590,
  cps: 1591,
  cpu: 1592,
  cpx: 1593,
  cpy: 1594,
  cqd: 1595,
  cqu: 1596,
  cra: 1597,
  crb: 1598,
  crc: 1599,
  crd: 1600,
  crf: 1601,
  crg: 1602,
  crh: 1603,
  cri: 1604,
  crj: 1605,
  crk: 1606,
  crl: 1607,
  crm: 1608,
  crn: 1609,
  cro: 1610,
  crp: 1611,
  crq: 1612,
  crr: 1613,
  crs: 1614,
  crt: 1615,
  crv: 1616,
  crw: 1617,
  crx: 1618,
  cry: 1619,
  crz: 1620,
  csa: 1621,
  csb: 1622,
  csc: 1623,
  csd: 1624,
  cse: 1625,
  csf: 1626,
  csg: 1627,
  csh: 1628,
  csi: 1629,
  csj: 1630,
  csk: 1631,
  csl: 1632,
  csm: 1633,
  csn: 1634,
  cso: 1635,
  csp: 1636,
  csq: 1637,
  csr: 1638,
  css: 1639,
  cst: 1640,
  csu: 1641,
  csv: 1642,
  csw: 1643,
  csx: 1644,
  csy: 1645,
  csz: 1646,
  cta: 1647,
  ctc: 1648,
  ctd: 1649,
  cte: 1650,
  ctg: 1651,
  cth: 1652,
  ctl: 1653,
  ctm: 1654,
  ctn: 1655,
  cto: 1656,
  ctp: 1657,
  cts: 1658,
  ctt: 1659,
  ctu: 1660,
  cty: 1661,
  ctz: 1662,
  cua: 1663,
  cub: 1664,
  cuc: 1665,
  cug: 1666,
  cuh: 1667,
  cui: 1668,
  cuj: 1669,
  cuk: 1670,
  cul: 1671,
  cum: 1672,
  cuo: 1673,
  cup: 1674,
  cuq: 1675,
  cur: 1676,
  cus: 1677,
  cut: 1678,
  cuu: 1679,
  cuv: 1680,
  cuw: 1681,
  cux: 1682,
  cuy: 1683,
  cvg: 1684,
  cvn: 1685,
  cwa: 1686,
  cwb: 1687,
  cwd: 1688,
  cwe: 1689,
  cwg: 1690,
  cwt: 1691,
  cya: 1692,
  cyb: 1693,
  cyo: 1694,
  czh: 1695,
  czk: 1696,
  czn: 1697,
  czo: 1698,
  czt: 1699,
  daa: 1700,
  dac: 1701,
  dad: 1702,
  dae: 1703,
  daf: 1704,
  dag: 1705,
  dah: 1706,
  dai: 1707,
  daj: 1708,
  dak: 1709,
  dal: 1710,
  dam: 1711,
  dao: 1712,
  dap: 1713,
  daq: 1714,
  dar: 1715,
  das: 1716,
  dau: 1717,
  dav: 1718,
  daw: 1719,
  dax: 1720,
  day: 1721,
  daz: 1722,
  dba: 1723,
  dbb: 1724,
  dbd: 1725,
  dbe: 1726,
  dbf: 1727,
  dbg: 1728,
  dbi: 1729,
  dbj: 1730,
  dbl: 1731,
  dbm: 1732,
  dbn: 1733,
  dbo: 1734,
  dbp: 1735,
  dbq: 1736,
  dbr: 1737,
  dbt: 1738,
  dbu: 1739,
  dbv: 1740,
  dbw: 1741,
  dby: 1742,
  dcc: 1743,
  dcr: 1744,
  dda: 1745,
  ddd: 1746,
  dde: 1747,
  ddg: 1748,
  ddi: 1749,
  ddj: 1750,
  ddn: 1751,
  ddo: 1752,
  ddr: 1753,
  dds: 1754,
  ddw: 1755,
  dec: 1756,
  ded: 1757,
  dee: 1758,
  def: 1759,
  deg: 1760,
  deh: 1761,
  dei: 1762,
  dek: 1763,
  del: 1764,
  dem: 1765,
  den: 1766,
  dep: 1767,
  deq: 1768,
  der: 1769,
  des: 1770,
  dev: 1771,
  dez: 1772,
  dga: 1773,
  dgb: 1774,
  dgc: 1775,
  dgd: 1776,
  dge: 1777,
  dgg: 1778,
  dgh: 1779,
  dgi: 1780,
  dgk: 1781,
  dgl: 1782,
  dgn: 1783,
  dgo: 1784,
  dgr: 1785,
  dgs: 1786,
  dgt: 1787,
  dgu: 1788,
  dgw: 1789,
  dgx: 1790,
  dgz: 1791,
  dha: 1792,
  dhd: 1793,
  dhg: 1794,
  dhi: 1795,
  dhl: 1796,
  dhm: 1797,
  dhn: 1798,
  dho: 1799,
  dhr: 1800,
  dhs: 1801,
  dhu: 1802,
  dhv: 1803,
  dhw: 1804,
  dhx: 1805,
  dia: 1806,
  dib: 1807,
  dic: 1808,
  did: 1809,
  dif: 1810,
  dig: 1811,
  dih: 1812,
  dii: 1813,
  dij: 1814,
  dik: 1815,
  dil: 1816,
  dim: 1817,
  din: 1818,
  dio: 1819,
  dip: 1820,
  diq: 1821,
  dir: 1822,
  dis: 1823,
  dit: 1824,
  diu: 1825,
  diw: 1826,
  dix: 1827,
  diy: 1828,
  diz: 1829,
  dja: 1830,
  djb: 1831,
  djc: 1832,
  djd: 1833,
  dje: 1834,
  djf: 1835,
  dji: 1836,
  djj: 1837,
  djk: 1838,
  djl: 1839,
  djm: 1840,
  djn: 1841,
  djo: 1842,
  djr: 1843,
  dju: 1844,
  djw: 1845,
  dka: 1846,
  dkg: 1847,
  dkk: 1848,
  dkl: 1849,
  dkr: 1850,
  dks: 1851,
  dkx: 1852,
  dlg: 1853,
  dlk: 1854,
  dlm: 1855,
  dln: 1856,
  dma: 1857,
  dmb: 1858,
  dmc: 1859,
  dmd: 1860,
  dme: 1861,
  dmf: 1862,
  dmg: 1863,
  dmk: 1864,
  dml: 1865,
  dmm: 1866,
  dmn: 1867,
  dmo: 1868,
  dmr: 1869,
  dms: 1870,
  dmu: 1871,
  dmv: 1872,
  dmw: 1873,
  dmx: 1874,
  dmy: 1875,
  dna: 1876,
  dnd: 1877,
  dne: 1878,
  dng: 1879,
  dni: 1880,
  dnj: 1881,
  dnk: 1882,
  dnn: 1883,
  dno: 1884,
  dnr: 1885,
  dnt: 1886,
  dnu: 1887,
  dnv: 1888,
  dnw: 1889,
  dny: 1890,
  doa: 1891,
  dob: 1892,
  doc: 1893,
  doe: 1894,
  dof: 1895,
  doh: 1896,
  doi: 1897,
  dok: 1898,
  dol: 1899,
  don: 1900,
  doo: 1901,
  dop: 1902,
  doq: 1903,
  dor: 1904,
  dos: 1905,
  dot: 1906,
  dov: 1907,
  dow: 1908,
  dox: 1909,
  doy: 1910,
  doz: 1911,
  dpp: 1912,
  dra: 1913,
  drb: 1914,
  drc: 1915,
  drd: 1916,
  dre: 1917,
  drg: 1918,
  drh: 1919,
  dri: 1920,
  drl: 1921,
  drn: 1922,
  dro: 1923,
  drq: 1924,
  drr: 1925,
  drs: 1926,
  drt: 1927,
  dru: 1928,
  drw: 1929,
  dry: 1930,
  dsb: 1931,
  dse: 1932,
  dsh: 1933,
  dsi: 1934,
  dsl: 1935,
  dsn: 1936,
  dso: 1937,
  dsq: 1938,
  dsz: 1939,
  dta: 1940,
  dtb: 1941,
  dtd: 1942,
  dth: 1943,
  dti: 1944,
  dtk: 1945,
  dtm: 1946,
  dtn: 1947,
  dto: 1948,
  dtp: 1949,
  dtr: 1950,
  dts: 1951,
  dtt: 1952,
  dtu: 1953,
  dty: 1954,
  dua: 1955,
  dub: 1956,
  duc: 1957,
  dud: 1958,
  due: 1959,
  duf: 1960,
  dug: 1961,
  duh: 1962,
  dui: 1963,
  duj: 1964,
  duk: 1965,
  dul: 1966,
  dum: 1967,
  dun: 1968,
  duo: 1969,
  dup: 1970,
  duq: 1971,
  dur: 1972,
  dus: 1973,
  duu: 1974,
  duv: 1975,
  duw: 1976,
  dux: 1977,
  duy: 1978,
  duz: 1979,
  dva: 1980,
  dwa: 1981,
  dwk: 1982,
  dwl: 1983,
  dwr: 1984,
  dws: 1985,
  dwu: 1986,
  dww: 1987,
  dwy: 1988,
  dwz: 1989,
  dya: 1990,
  dyb: 1991,
  dyd: 1992,
  dyg: 1993,
  dyi: 1994,
  dym: 1995,
  dyn: 1996,
  dyo: 1997,
  dyu: 1998,
  dyy: 1999,
  dza: 2e3,
  dzd: 2001,
  dze: 2002,
  dzg: 2003,
  dzl: 2004,
  dzn: 2005,
  eaa: 2006,
  ebc: 2007,
  ebg: 2008,
  ebk: 2009,
  ebo: 2010,
  ebr: 2011,
  ebu: 2012,
  ecr: 2013,
  ecs: 2014,
  ecy: 2015,
  eee: 2016,
  efa: 2017,
  efe: 2018,
  efi: 2019,
  ega: 2020,
  egl: 2021,
  egm: 2022,
  ego: 2023,
  egx: 2024,
  egy: 2025,
  ehs: 2026,
  ehu: 2027,
  eip: 2028,
  eit: 2029,
  eiv: 2030,
  eja: 2031,
  eka: 2032,
  ekc: 2033,
  eke: 2034,
  ekg: 2035,
  eki: 2036,
  ekk: 2037,
  ekl: 2038,
  ekm: 2039,
  eko: 2040,
  ekp: 2041,
  ekr: 2042,
  eky: 2043,
  ele: 2044,
  elh: 2045,
  eli: 2046,
  elk: 2047,
  elm: 2048,
  elo: 2049,
  elp: 2050,
  elu: 2051,
  elx: 2052,
  ema: 2053,
  emb: 2054,
  eme: 2055,
  emg: 2056,
  emi: 2057,
  emk: 2058,
  emm: 2059,
  emn: 2060,
  emo: 2061,
  emp: 2062,
  emq: 2063,
  ems: 2064,
  emu: 2065,
  emw: 2066,
  emx: 2067,
  emy: 2068,
  emz: 2069,
  ena: 2070,
  enb: 2071,
  enc: 2072,
  end: 2073,
  enf: 2074,
  enh: 2075,
  enl: 2076,
  enm: 2077,
  enn: 2078,
  eno: 2079,
  enq: 2080,
  enr: 2081,
  enu: 2082,
  env: 2083,
  enw: 2084,
  enx: 2085,
  eot: 2086,
  epi: 2087,
  era: 2088,
  erg: 2089,
  erh: 2090,
  eri: 2091,
  erk: 2092,
  ero: 2093,
  err: 2094,
  ers: 2095,
  ert: 2096,
  erw: 2097,
  ese: 2098,
  esg: 2099,
  esh: 2100,
  esi: 2101,
  esk: 2102,
  esl: 2103,
  esm: 2104,
  esn: 2105,
  eso: 2106,
  esq: 2107,
  ess: 2108,
  esu: 2109,
  esx: 2110,
  esy: 2111,
  etb: 2112,
  etc: 2113,
  eth: 2114,
  etn: 2115,
  eto: 2116,
  etr: 2117,
  ets: 2118,
  ett: 2119,
  etu: 2120,
  etx: 2121,
  etz: 2122,
  euq: 2123,
  eve: 2124,
  evh: 2125,
  evn: 2126,
  ewo: 2127,
  ext: 2128,
  eya: 2129,
  eyo: 2130,
  eza: 2131,
  eze: 2132,
  faa: 2133,
  fab: 2134,
  fad: 2135,
  faf: 2136,
  fag: 2137,
  fah: 2138,
  fai: 2139,
  faj: 2140,
  fak: 2141,
  fal: 2142,
  fam: 2143,
  fan: 2144,
  fap: 2145,
  far: 2146,
  fat: 2147,
  fau: 2148,
  fax: 2149,
  fay: 2150,
  faz: 2151,
  fbl: 2152,
  fcs: 2153,
  fer: 2154,
  ffi: 2155,
  ffm: 2156,
  fgr: 2157,
  fia: 2158,
  fie: 2159,
  fif: 2160,
  fil: 2161,
  fip: 2162,
  fir: 2163,
  fit: 2164,
  fiu: 2165,
  fiw: 2166,
  fkk: 2167,
  fkv: 2168,
  fla: 2169,
  flh: 2170,
  fli: 2171,
  fll: 2172,
  fln: 2173,
  flr: 2174,
  fly: 2175,
  fmp: 2176,
  fmu: 2177,
  fnb: 2178,
  fng: 2179,
  fni: 2180,
  fod: 2181,
  foi: 2182,
  fom: 2183,
  fon: 2184,
  for: 2185,
  fos: 2186,
  fox: 2187,
  fpe: 2188,
  fqs: 2189,
  frc: 2190,
  frd: 2191,
  frk: 2192,
  frm: 2193,
  fro: 2194,
  frp: 2195,
  frq: 2196,
  frr: 2197,
  frs: 2198,
  frt: 2199,
  fse: 2200,
  fsl: 2201,
  fss: 2202,
  fub: 2203,
  fuc: 2204,
  fud: 2205,
  fue: 2206,
  fuf: 2207,
  fuh: 2208,
  fui: 2209,
  fuj: 2210,
  fum: 2211,
  fun: 2212,
  fuq: 2213,
  fur: 2214,
  fut: 2215,
  fuu: 2216,
  fuv: 2217,
  fuy: 2218,
  fvr: 2219,
  fwa: 2220,
  fwe: 2221,
  gaa: 2222,
  gab: 2223,
  gac: 2224,
  gad: 2225,
  gae: 2226,
  gaf: 2227,
  gag: 2228,
  gah: 2229,
  gai: 2230,
  gaj: 2231,
  gak: 2232,
  gal: 2233,
  gam: 2234,
  gan: 2235,
  gao: 2236,
  gap: 2237,
  gaq: 2238,
  gar: 2239,
  gas: 2240,
  gat: 2241,
  gau: 2242,
  gav: 2243,
  gaw: 2244,
  gax: 2245,
  gay: 2246,
  gaz: 2247,
  gba: 2248,
  gbb: 2249,
  gbc: 2250,
  gbd: 2251,
  gbe: 2252,
  gbf: 2253,
  gbg: 2254,
  gbh: 2255,
  gbi: 2256,
  gbj: 2257,
  gbk: 2258,
  gbl: 2259,
  gbm: 2260,
  gbn: 2261,
  gbo: 2262,
  gbp: 2263,
  gbq: 2264,
  gbr: 2265,
  gbs: 2266,
  gbu: 2267,
  gbv: 2268,
  gbw: 2269,
  gbx: 2270,
  gby: 2271,
  gbz: 2272,
  gcc: 2273,
  gcd: 2274,
  gce: 2275,
  gcf: 2276,
  gcl: 2277,
  gcn: 2278,
  gcr: 2279,
  gct: 2280,
  gda: 2281,
  gdb: 2282,
  gdc: 2283,
  gdd: 2284,
  gde: 2285,
  gdf: 2286,
  gdg: 2287,
  gdh: 2288,
  gdi: 2289,
  gdj: 2290,
  gdk: 2291,
  gdl: 2292,
  gdm: 2293,
  gdn: 2294,
  gdo: 2295,
  gdq: 2296,
  gdr: 2297,
  gds: 2298,
  gdt: 2299,
  gdu: 2300,
  gdx: 2301,
  gea: 2302,
  geb: 2303,
  gec: 2304,
  ged: 2305,
  gef: 2306,
  geg: 2307,
  geh: 2308,
  gei: 2309,
  gej: 2310,
  gek: 2311,
  gel: 2312,
  gem: 2313,
  geq: 2314,
  ges: 2315,
  gev: 2316,
  gew: 2317,
  gex: 2318,
  gey: 2319,
  gez: 2320,
  gfk: 2321,
  gft: 2322,
  gfx: 2323,
  gga: 2324,
  ggb: 2325,
  ggd: 2326,
  gge: 2327,
  ggg: 2328,
  ggk: 2329,
  ggl: 2330,
  ggn: 2331,
  ggo: 2332,
  ggr: 2333,
  ggt: 2334,
  ggu: 2335,
  ggw: 2336,
  gha: 2337,
  ghc: 2338,
  ghe: 2339,
  ghh: 2340,
  ghk: 2341,
  ghl: 2342,
  ghn: 2343,
  gho: 2344,
  ghr: 2345,
  ghs: 2346,
  ght: 2347,
  gia: 2348,
  gib: 2349,
  gic: 2350,
  gid: 2351,
  gie: 2352,
  gig: 2353,
  gih: 2354,
  gii: 2355,
  gil: 2356,
  gim: 2357,
  gin: 2358,
  gio: 2359,
  gip: 2360,
  giq: 2361,
  gir: 2362,
  gis: 2363,
  git: 2364,
  giu: 2365,
  giw: 2366,
  gix: 2367,
  giy: 2368,
  giz: 2369,
  gji: 2370,
  gjk: 2371,
  gjm: 2372,
  gjn: 2373,
  gjr: 2374,
  gju: 2375,
  gka: 2376,
  gkd: 2377,
  gke: 2378,
  gkn: 2379,
  gko: 2380,
  gkp: 2381,
  gku: 2382,
  glb: 2383,
  glc: 2384,
  gld: 2385,
  glh: 2386,
  gli: 2387,
  glj: 2388,
  glk: 2389,
  gll: 2390,
  glo: 2391,
  glr: 2392,
  glu: 2393,
  glw: 2394,
  gly: 2395,
  gma: 2396,
  gmb: 2397,
  gmd: 2398,
  gme: 2399,
  gmg: 2400,
  gmh: 2401,
  gml: 2402,
  gmm: 2403,
  gmn: 2404,
  gmq: 2405,
  gmr: 2406,
  gmu: 2407,
  gmv: 2408,
  gmw: 2409,
  gmx: 2410,
  gmy: 2411,
  gmz: 2412,
  gna: 2413,
  gnb: 2414,
  gnc: 2415,
  gnd: 2416,
  gne: 2417,
  gng: 2418,
  gnh: 2419,
  gni: 2420,
  gnj: 2421,
  gnk: 2422,
  gnl: 2423,
  gnm: 2424,
  gnn: 2425,
  gno: 2426,
  gnq: 2427,
  gnr: 2428,
  gnt: 2429,
  gnu: 2430,
  gnw: 2431,
  gnz: 2432,
  goa: 2433,
  gob: 2434,
  goc: 2435,
  god: 2436,
  goe: 2437,
  gof: 2438,
  gog: 2439,
  goh: 2440,
  goi: 2441,
  goj: 2442,
  gok: 2443,
  gol: 2444,
  gom: 2445,
  gon: 2446,
  goo: 2447,
  gop: 2448,
  goq: 2449,
  gor: 2450,
  gos: 2451,
  got: 2452,
  gou: 2453,
  gov: 2454,
  gow: 2455,
  gox: 2456,
  goy: 2457,
  goz: 2458,
  gpa: 2459,
  gpe: 2460,
  gpn: 2461,
  gqa: 2462,
  gqi: 2463,
  gqn: 2464,
  gqr: 2465,
  gqu: 2466,
  gra: 2467,
  grb: 2468,
  grc: 2469,
  grd: 2470,
  grg: 2471,
  grh: 2472,
  gri: 2473,
  grj: 2474,
  grk: 2475,
  grm: 2476,
  gro: 2477,
  grq: 2478,
  grr: 2479,
  grs: 2480,
  grt: 2481,
  gru: 2482,
  grv: 2483,
  grw: 2484,
  grx: 2485,
  gry: 2486,
  grz: 2487,
  gse: 2488,
  gsg: 2489,
  gsl: 2490,
  gsm: 2491,
  gsn: 2492,
  gso: 2493,
  gsp: 2494,
  gss: 2495,
  gsw: 2496,
  gta: 2497,
  gti: 2498,
  gtu: 2499,
  gua: 2500,
  gub: 2501,
  guc: 2502,
  gud: 2503,
  gue: 2504,
  guf: 2505,
  gug: 2506,
  guh: 2507,
  gui: 2508,
  guk: 2509,
  gul: 2510,
  gum: 2511,
  gun: 2512,
  guo: 2513,
  gup: 2514,
  guq: 2515,
  gur: 2516,
  gus: 2517,
  gut: 2518,
  guu: 2519,
  guv: 2520,
  guw: 2521,
  gux: 2522,
  guz: 2523,
  gva: 2524,
  gvc: 2525,
  gve: 2526,
  gvf: 2527,
  gvj: 2528,
  gvl: 2529,
  gvm: 2530,
  gvn: 2531,
  gvo: 2532,
  gvp: 2533,
  gvr: 2534,
  gvs: 2535,
  gvy: 2536,
  gwa: 2537,
  gwb: 2538,
  gwc: 2539,
  gwd: 2540,
  gwe: 2541,
  gwf: 2542,
  gwg: 2543,
  gwi: 2544,
  gwj: 2545,
  gwm: 2546,
  gwn: 2547,
  gwr: 2548,
  gwt: 2549,
  gwu: 2550,
  gww: 2551,
  gwx: 2552,
  gxx: 2553,
  gya: 2554,
  gyb: 2555,
  gyd: 2556,
  gye: 2557,
  gyf: 2558,
  gyg: 2559,
  gyi: 2560,
  gyl: 2561,
  gym: 2562,
  gyn: 2563,
  gyo: 2564,
  gyr: 2565,
  gyy: 2566,
  gyz: 2567,
  gza: 2568,
  gzi: 2569,
  gzn: 2570,
  haa: 2571,
  hab: 2572,
  hac: 2573,
  had: 2574,
  hae: 2575,
  haf: 2576,
  hag: 2577,
  hah: 2578,
  hai: 2579,
  haj: 2580,
  hak: 2581,
  hal: 2582,
  ham: 2583,
  han: 2584,
  hao: 2585,
  hap: 2586,
  haq: 2587,
  har: 2588,
  has: 2589,
  hav: 2590,
  haw: 2591,
  hax: 2592,
  hay: 2593,
  haz: 2594,
  hba: 2595,
  hbb: 2596,
  hbn: 2597,
  hbo: 2598,
  hbu: 2599,
  hca: 2600,
  hch: 2601,
  hdn: 2602,
  hds: 2603,
  hdy: 2604,
  hea: 2605,
  hed: 2606,
  heg: 2607,
  heh: 2608,
  hei: 2609,
  hem: 2610,
  hgm: 2611,
  hgw: 2612,
  hhi: 2613,
  hhr: 2614,
  hhy: 2615,
  hia: 2616,
  hib: 2617,
  hid: 2618,
  hif: 2619,
  hig: 2620,
  hih: 2621,
  hii: 2622,
  hij: 2623,
  hik: 2624,
  hil: 2625,
  him: 2626,
  hio: 2627,
  hir: 2628,
  hit: 2629,
  hiw: 2630,
  hix: 2631,
  hji: 2632,
  hka: 2633,
  hke: 2634,
  hkh: 2635,
  hkk: 2636,
  hkn: 2637,
  hks: 2638,
  hla: 2639,
  hlb: 2640,
  hld: 2641,
  hle: 2642,
  hlt: 2643,
  hlu: 2644,
  hma: 2645,
  hmb: 2646,
  hmc: 2647,
  hmd: 2648,
  hme: 2649,
  hmf: 2650,
  hmg: 2651,
  hmh: 2652,
  hmi: 2653,
  hmj: 2654,
  hmk: 2655,
  hml: 2656,
  hmm: 2657,
  hmn: 2658,
  hmp: 2659,
  hmq: 2660,
  hmr: 2661,
  hms: 2662,
  hmt: 2663,
  hmu: 2664,
  hmv: 2665,
  hmw: 2666,
  hmx: 2667,
  hmy: 2668,
  hmz: 2669,
  hna: 2670,
  hnd: 2671,
  hne: 2672,
  hng: 2673,
  hnh: 2674,
  hni: 2675,
  hnj: 2676,
  hnn: 2677,
  hno: 2678,
  hns: 2679,
  hnu: 2680,
  hoa: 2681,
  hob: 2682,
  hoc: 2683,
  hod: 2684,
  hoe: 2685,
  hoh: 2686,
  hoi: 2687,
  hoj: 2688,
  hok: 2689,
  hol: 2690,
  hom: 2691,
  hoo: 2692,
  hop: 2693,
  hor: 2694,
  hos: 2695,
  hot: 2696,
  hov: 2697,
  how: 2698,
  hoy: 2699,
  hoz: 2700,
  hpo: 2701,
  hps: 2702,
  hra: 2703,
  hrc: 2704,
  hre: 2705,
  hrk: 2706,
  hrm: 2707,
  hro: 2708,
  hrp: 2709,
  hrr: 2710,
  hrt: 2711,
  hru: 2712,
  hrw: 2713,
  hrx: 2714,
  hrz: 2715,
  hsb: 2716,
  hsh: 2717,
  hsl: 2718,
  hsn: 2719,
  hss: 2720,
  hti: 2721,
  hto: 2722,
  hts: 2723,
  htu: 2724,
  htx: 2725,
  hub: 2726,
  huc: 2727,
  hud: 2728,
  hue: 2729,
  huf: 2730,
  hug: 2731,
  huh: 2732,
  hui: 2733,
  huj: 2734,
  huk: 2735,
  hul: 2736,
  hum: 2737,
  huo: 2738,
  hup: 2739,
  huq: 2740,
  hur: 2741,
  hus: 2742,
  hut: 2743,
  huu: 2744,
  huv: 2745,
  huw: 2746,
  hux: 2747,
  huy: 2748,
  huz: 2749,
  hvc: 2750,
  hve: 2751,
  hvk: 2752,
  hvn: 2753,
  hvv: 2754,
  hwa: 2755,
  hwc: 2756,
  hwo: 2757,
  hya: 2758,
  hyw: 2759,
  hyx: 2760,
  iai: 2761,
  ian: 2762,
  iap: 2763,
  iar: 2764,
  iba: 2765,
  ibb: 2766,
  ibd: 2767,
  ibe: 2768,
  ibg: 2769,
  ibh: 2770,
  ibi: 2771,
  ibl: 2772,
  ibm: 2773,
  ibn: 2774,
  ibr: 2775,
  ibu: 2776,
  iby: 2777,
  ica: 2778,
  ich: 2779,
  icl: 2780,
  icr: 2781,
  ida: 2782,
  idb: 2783,
  idc: 2784,
  idd: 2785,
  ide: 2786,
  idi: 2787,
  idr: 2788,
  ids: 2789,
  idt: 2790,
  idu: 2791,
  ifa: 2792,
  ifb: 2793,
  ife: 2794,
  iff: 2795,
  ifk: 2796,
  ifm: 2797,
  ifu: 2798,
  ify: 2799,
  igb: 2800,
  ige: 2801,
  igg: 2802,
  igl: 2803,
  igm: 2804,
  ign: 2805,
  igo: 2806,
  igs: 2807,
  igw: 2808,
  ihb: 2809,
  ihi: 2810,
  ihp: 2811,
  ihw: 2812,
  iin: 2813,
  iir: 2814,
  ijc: 2815,
  ije: 2816,
  ijj: 2817,
  ijn: 2818,
  ijo: 2819,
  ijs: 2820,
  ike: 2821,
  iki: 2822,
  ikk: 2823,
  ikl: 2824,
  iko: 2825,
  ikp: 2826,
  ikr: 2827,
  iks: 2828,
  ikt: 2829,
  ikv: 2830,
  ikw: 2831,
  ikx: 2832,
  ikz: 2833,
  ila: 2834,
  ilb: 2835,
  ilg: 2836,
  ili: 2837,
  ilk: 2838,
  ill: 2839,
  ilm: 2840,
  ilo: 2841,
  ilp: 2842,
  ils: 2843,
  ilu: 2844,
  ilv: 2845,
  ilw: 2846,
  ima: 2847,
  ime: 2848,
  imi: 2849,
  iml: 2850,
  imn: 2851,
  imo: 2852,
  imr: 2853,
  ims: 2854,
  imt: 2855,
  imy: 2856,
  inb: 2857,
  inc: 2858,
  ine: 2859,
  ing: 2860,
  inh: 2861,
  inj: 2862,
  inl: 2863,
  inm: 2864,
  inn: 2865,
  ino: 2866,
  inp: 2867,
  ins: 2868,
  int: 2869,
  inz: 2870,
  ior: 2871,
  iou: 2872,
  iow: 2873,
  ipi: 2874,
  ipo: 2875,
  iqu: 2876,
  iqw: 2877,
  ira: 2878,
  ire: 2879,
  irh: 2880,
  iri: 2881,
  irk: 2882,
  irn: 2883,
  iro: 2884,
  irr: 2885,
  iru: 2886,
  irx: 2887,
  iry: 2888,
  isa: 2889,
  isc: 2890,
  isd: 2891,
  ise: 2892,
  isg: 2893,
  ish: 2894,
  isi: 2895,
  isk: 2896,
  ism: 2897,
  isn: 2898,
  iso: 2899,
  isr: 2900,
  ist: 2901,
  isu: 2902,
  itb: 2903,
  itc: 2904,
  itd: 2905,
  ite: 2906,
  iti: 2907,
  itk: 2908,
  itl: 2909,
  itm: 2910,
  ito: 2911,
  itr: 2912,
  its: 2913,
  itt: 2914,
  itv: 2915,
  itw: 2916,
  itx: 2917,
  ity: 2918,
  itz: 2919,
  ium: 2920,
  ivb: 2921,
  ivv: 2922,
  iwk: 2923,
  iwm: 2924,
  iwo: 2925,
  iws: 2926,
  ixc: 2927,
  ixl: 2928,
  iya: 2929,
  iyo: 2930,
  iyx: 2931,
  izh: 2932,
  izi: 2933,
  izr: 2934,
  izz: 2935,
  jaa: 2936,
  jab: 2937,
  jac: 2938,
  jad: 2939,
  jae: 2940,
  jaf: 2941,
  jah: 2942,
  jaj: 2943,
  jak: 2944,
  jal: 2945,
  jam: 2946,
  jan: 2947,
  jao: 2948,
  jaq: 2949,
  jar: 2950,
  jas: 2951,
  jat: 2952,
  jau: 2953,
  jax: 2954,
  jay: 2955,
  jaz: 2956,
  jbe: 2957,
  jbi: 2958,
  jbj: 2959,
  jbk: 2960,
  jbm: 2961,
  jbn: 2962,
  jbo: 2963,
  jbr: 2964,
  jbt: 2965,
  jbu: 2966,
  jbw: 2967,
  jcs: 2968,
  jct: 2969,
  jda: 2970,
  jdg: 2971,
  jdt: 2972,
  jeb: 2973,
  jee: 2974,
  jeg: 2975,
  jeh: 2976,
  jei: 2977,
  jek: 2978,
  jel: 2979,
  jen: 2980,
  jer: 2981,
  jet: 2982,
  jeu: 2983,
  jgb: 2984,
  jge: 2985,
  jgk: 2986,
  jgo: 2987,
  jhi: 2988,
  jhs: 2989,
  jia: 2990,
  jib: 2991,
  jic: 2992,
  jid: 2993,
  jie: 2994,
  jig: 2995,
  jih: 2996,
  jii: 2997,
  jil: 2998,
  jim: 2999,
  jio: 3e3,
  jiq: 3001,
  jit: 3002,
  jiu: 3003,
  jiv: 3004,
  jiy: 3005,
  jje: 3006,
  jjr: 3007,
  jka: 3008,
  jkm: 3009,
  jko: 3010,
  jkp: 3011,
  jkr: 3012,
  jks: 3013,
  jku: 3014,
  jle: 3015,
  jls: 3016,
  jma: 3017,
  jmb: 3018,
  jmc: 3019,
  jmd: 3020,
  jmi: 3021,
  jml: 3022,
  jmn: 3023,
  jmr: 3024,
  jms: 3025,
  jmw: 3026,
  jmx: 3027,
  jna: 3028,
  jnd: 3029,
  jng: 3030,
  jni: 3031,
  jnj: 3032,
  jnl: 3033,
  jns: 3034,
  job: 3035,
  jod: 3036,
  jog: 3037,
  jor: 3038,
  jos: 3039,
  jow: 3040,
  jpa: 3041,
  jpr: 3042,
  jpx: 3043,
  jqr: 3044,
  jra: 3045,
  jrb: 3046,
  jrr: 3047,
  jrt: 3048,
  jru: 3049,
  jsl: 3050,
  jua: 3051,
  jub: 3052,
  juc: 3053,
  jud: 3054,
  juh: 3055,
  jui: 3056,
  juk: 3057,
  jul: 3058,
  jum: 3059,
  jun: 3060,
  juo: 3061,
  jup: 3062,
  jur: 3063,
  jus: 3064,
  jut: 3065,
  juu: 3066,
  juw: 3067,
  juy: 3068,
  jvd: 3069,
  jvn: 3070,
  jwi: 3071,
  jya: 3072,
  jye: 3073,
  jyy: 3074,
  kaa: 3075,
  kab: 3076,
  kac: 3077,
  kad: 3078,
  kae: 3079,
  kaf: 3080,
  kag: 3081,
  kah: 3082,
  kai: 3083,
  kaj: 3084,
  kak: 3085,
  kam: 3086,
  kao: 3087,
  kap: 3088,
  kaq: 3089,
  kar: 3090,
  kav: 3091,
  kaw: 3092,
  kax: 3093,
  kay: 3094,
  kba: 3095,
  kbb: 3096,
  kbc: 3097,
  kbd: 3098,
  kbe: 3099,
  kbf: 3100,
  kbg: 3101,
  kbh: 3102,
  kbi: 3103,
  kbj: 3104,
  kbk: 3105,
  kbl: 3106,
  kbm: 3107,
  kbn: 3108,
  kbo: 3109,
  kbp: 3110,
  kbq: 3111,
  kbr: 3112,
  kbs: 3113,
  kbt: 3114,
  kbu: 3115,
  kbv: 3116,
  kbw: 3117,
  kbx: 3118,
  kby: 3119,
  kbz: 3120,
  kca: 3121,
  kcb: 3122,
  kcc: 3123,
  kcd: 3124,
  kce: 3125,
  kcf: 3126,
  kcg: 3127,
  kch: 3128,
  kci: 3129,
  kcj: 3130,
  kck: 3131,
  kcl: 3132,
  kcm: 3133,
  kcn: 3134,
  kco: 3135,
  kcp: 3136,
  kcq: 3137,
  kcr: 3138,
  kcs: 3139,
  kct: 3140,
  kcu: 3141,
  kcv: 3142,
  kcw: 3143,
  kcx: 3144,
  kcy: 3145,
  kcz: 3146,
  kda: 3147,
  kdc: 3148,
  kdd: 3149,
  kde: 3150,
  kdf: 3151,
  kdg: 3152,
  kdh: 3153,
  kdi: 3154,
  kdj: 3155,
  kdk: 3156,
  kdl: 3157,
  kdm: 3158,
  kdn: 3159,
  kdo: 3160,
  kdp: 3161,
  kdq: 3162,
  kdr: 3163,
  kdt: 3164,
  kdu: 3165,
  kdv: 3166,
  kdw: 3167,
  kdx: 3168,
  kdy: 3169,
  kdz: 3170,
  kea: 3171,
  keb: 3172,
  kec: 3173,
  ked: 3174,
  kee: 3175,
  kef: 3176,
  keg: 3177,
  keh: 3178,
  kei: 3179,
  kej: 3180,
  kek: 3181,
  kel: 3182,
  kem: 3183,
  ken: 3184,
  keo: 3185,
  kep: 3186,
  keq: 3187,
  ker: 3188,
  kes: 3189,
  ket: 3190,
  keu: 3191,
  kev: 3192,
  kew: 3193,
  kex: 3194,
  key: 3195,
  kez: 3196,
  kfa: 3197,
  kfb: 3198,
  kfc: 3199,
  kfd: 3200,
  kfe: 3201,
  kff: 3202,
  kfg: 3203,
  kfh: 3204,
  kfi: 3205,
  kfj: 3206,
  kfk: 3207,
  kfl: 3208,
  kfm: 3209,
  kfn: 3210,
  kfo: 3211,
  kfp: 3212,
  kfq: 3213,
  kfr: 3214,
  kfs: 3215,
  kft: 3216,
  kfu: 3217,
  kfv: 3218,
  kfw: 3219,
  kfx: 3220,
  kfy: 3221,
  kfz: 3222,
  kga: 3223,
  kgb: 3224,
  kgc: 3225,
  kgd: 3226,
  kge: 3227,
  kgf: 3228,
  kgg: 3229,
  kgh: 3230,
  kgi: 3231,
  kgj: 3232,
  kgk: 3233,
  kgl: 3234,
  kgm: 3235,
  kgn: 3236,
  kgo: 3237,
  kgp: 3238,
  kgq: 3239,
  kgr: 3240,
  kgs: 3241,
  kgt: 3242,
  kgu: 3243,
  kgv: 3244,
  kgw: 3245,
  kgx: 3246,
  kgy: 3247,
  kha: 3248,
  khb: 3249,
  khc: 3250,
  khd: 3251,
  khe: 3252,
  khf: 3253,
  khg: 3254,
  khh: 3255,
  khi: 3256,
  khj: 3257,
  khk: 3258,
  khl: 3259,
  khn: 3260,
  kho: 3261,
  khp: 3262,
  khq: 3263,
  khr: 3264,
  khs: 3265,
  kht: 3266,
  khu: 3267,
  khv: 3268,
  khw: 3269,
  khx: 3270,
  khy: 3271,
  khz: 3272,
  kia: 3273,
  kib: 3274,
  kic: 3275,
  kid: 3276,
  kie: 3277,
  kif: 3278,
  kig: 3279,
  kih: 3280,
  kii: 3281,
  kij: 3282,
  kil: 3283,
  kim: 3284,
  kio: 3285,
  kip: 3286,
  kiq: 3287,
  kis: 3288,
  kit: 3289,
  kiu: 3290,
  kiv: 3291,
  kiw: 3292,
  kix: 3293,
  kiy: 3294,
  kiz: 3295,
  kja: 3296,
  kjb: 3297,
  kjc: 3298,
  kjd: 3299,
  kje: 3300,
  kjf: 3301,
  kjg: 3302,
  kjh: 3303,
  kji: 3304,
  kjj: 3305,
  kjk: 3306,
  kjl: 3307,
  kjm: 3308,
  kjn: 3309,
  kjo: 3310,
  kjp: 3311,
  kjq: 3312,
  kjr: 3313,
  kjs: 3314,
  kjt: 3315,
  kju: 3316,
  kjv: 3317,
  kjx: 3318,
  kjy: 3319,
  kjz: 3320,
  kka: 3321,
  kkb: 3322,
  kkc: 3323,
  kkd: 3324,
  kke: 3325,
  kkf: 3326,
  kkg: 3327,
  kkh: 3328,
  kki: 3329,
  kkj: 3330,
  kkk: 3331,
  kkl: 3332,
  kkm: 3333,
  kkn: 3334,
  kko: 3335,
  kkp: 3336,
  kkq: 3337,
  kkr: 3338,
  kks: 3339,
  kkt: 3340,
  kku: 3341,
  kkv: 3342,
  kkw: 3343,
  kkx: 3344,
  kky: 3345,
  kkz: 3346,
  kla: 3347,
  klb: 3348,
  klc: 3349,
  kld: 3350,
  kle: 3351,
  klf: 3352,
  klg: 3353,
  klh: 3354,
  kli: 3355,
  klj: 3356,
  klk: 3357,
  kll: 3358,
  klm: 3359,
  kln: 3360,
  klo: 3361,
  klp: 3362,
  klq: 3363,
  klr: 3364,
  kls: 3365,
  klt: 3366,
  klu: 3367,
  klv: 3368,
  klw: 3369,
  klx: 3370,
  kly: 3371,
  klz: 3372,
  kma: 3373,
  kmb: 3374,
  kmc: 3375,
  kmd: 3376,
  kme: 3377,
  kmf: 3378,
  kmg: 3379,
  kmh: 3380,
  kmi: 3381,
  kmj: 3382,
  kmk: 3383,
  kml: 3384,
  kmm: 3385,
  kmn: 3386,
  kmo: 3387,
  kmp: 3388,
  kmq: 3389,
  kmr: 3390,
  kms: 3391,
  kmt: 3392,
  kmu: 3393,
  kmv: 3394,
  kmw: 3395,
  kmx: 3396,
  kmy: 3397,
  kmz: 3398,
  kna: 3399,
  knb: 3400,
  knc: 3401,
  knd: 3402,
  kne: 3403,
  knf: 3404,
  kng: 3405,
  kni: 3406,
  knj: 3407,
  knk: 3408,
  knl: 3409,
  knm: 3410,
  knn: 3411,
  kno: 3412,
  knp: 3413,
  knq: 3414,
  knr: 3415,
  kns: 3416,
  knt: 3417,
  knu: 3418,
  knv: 3419,
  knw: 3420,
  knx: 3421,
  kny: 3422,
  knz: 3423,
  koa: 3424,
  koc: 3425,
  kod: 3426,
  koe: 3427,
  kof: 3428,
  kog: 3429,
  koh: 3430,
  koi: 3431,
  koj: 3432,
  kok: 3433,
  kol: 3434,
  koo: 3435,
  kop: 3436,
  koq: 3437,
  kos: 3438,
  kot: 3439,
  kou: 3440,
  kov: 3441,
  kow: 3442,
  kox: 3443,
  koy: 3444,
  koz: 3445,
  kpa: 3446,
  kpb: 3447,
  kpc: 3448,
  kpd: 3449,
  kpe: 3450,
  kpf: 3451,
  kpg: 3452,
  kph: 3453,
  kpi: 3454,
  kpj: 3455,
  kpk: 3456,
  kpl: 3457,
  kpm: 3458,
  kpn: 3459,
  kpo: 3460,
  kpp: 3461,
  kpq: 3462,
  kpr: 3463,
  kps: 3464,
  kpt: 3465,
  kpu: 3466,
  kpv: 3467,
  kpw: 3468,
  kpx: 3469,
  kpy: 3470,
  kpz: 3471,
  kqa: 3472,
  kqb: 3473,
  kqc: 3474,
  kqd: 3475,
  kqe: 3476,
  kqf: 3477,
  kqg: 3478,
  kqh: 3479,
  kqi: 3480,
  kqj: 3481,
  kqk: 3482,
  kql: 3483,
  kqm: 3484,
  kqn: 3485,
  kqo: 3486,
  kqp: 3487,
  kqq: 3488,
  kqr: 3489,
  kqs: 3490,
  kqt: 3491,
  kqu: 3492,
  kqv: 3493,
  kqw: 3494,
  kqx: 3495,
  kqy: 3496,
  kqz: 3497,
  kra: 3498,
  krb: 3499,
  krc: 3500,
  krd: 3501,
  kre: 3502,
  krf: 3503,
  krh: 3504,
  kri: 3505,
  krj: 3506,
  krk: 3507,
  krl: 3508,
  krm: 3509,
  krn: 3510,
  kro: 3511,
  krp: 3512,
  krr: 3513,
  krs: 3514,
  krt: 3515,
  kru: 3516,
  krv: 3517,
  krw: 3518,
  krx: 3519,
  kry: 3520,
  krz: 3521,
  ksa: 3522,
  ksb: 3523,
  ksc: 3524,
  ksd: 3525,
  kse: 3526,
  ksf: 3527,
  ksg: 3528,
  ksh: 3529,
  ksi: 3530,
  ksj: 3531,
  ksk: 3532,
  ksl: 3533,
  ksm: 3534,
  ksn: 3535,
  kso: 3536,
  ksp: 3537,
  ksq: 3538,
  ksr: 3539,
  kss: 3540,
  kst: 3541,
  ksu: 3542,
  ksv: 3543,
  ksw: 3544,
  ksx: 3545,
  ksy: 3546,
  ksz: 3547,
  kta: 3548,
  ktb: 3549,
  ktc: 3550,
  ktd: 3551,
  kte: 3552,
  ktf: 3553,
  ktg: 3554,
  kth: 3555,
  kti: 3556,
  ktj: 3557,
  ktk: 3558,
  ktl: 3559,
  ktm: 3560,
  ktn: 3561,
  kto: 3562,
  ktp: 3563,
  ktq: 3564,
  ktr: 3565,
  kts: 3566,
  ktt: 3567,
  ktu: 3568,
  ktv: 3569,
  ktw: 3570,
  ktx: 3571,
  kty: 3572,
  ktz: 3573,
  kub: 3574,
  kuc: 3575,
  kud: 3576,
  kue: 3577,
  kuf: 3578,
  kug: 3579,
  kuh: 3580,
  kui: 3581,
  kuj: 3582,
  kuk: 3583,
  kul: 3584,
  kum: 3585,
  kun: 3586,
  kuo: 3587,
  kup: 3588,
  kuq: 3589,
  kus: 3590,
  kut: 3591,
  kuu: 3592,
  kuv: 3593,
  kuw: 3594,
  kux: 3595,
  kuy: 3596,
  kuz: 3597,
  kva: 3598,
  kvb: 3599,
  kvc: 3600,
  kvd: 3601,
  kve: 3602,
  kvf: 3603,
  kvg: 3604,
  kvh: 3605,
  kvi: 3606,
  kvj: 3607,
  kvk: 3608,
  kvl: 3609,
  kvm: 3610,
  kvn: 3611,
  kvo: 3612,
  kvp: 3613,
  kvq: 3614,
  kvr: 3615,
  kvs: 3616,
  kvt: 3617,
  kvu: 3618,
  kvv: 3619,
  kvw: 3620,
  kvx: 3621,
  kvy: 3622,
  kvz: 3623,
  kwa: 3624,
  kwb: 3625,
  kwc: 3626,
  kwd: 3627,
  kwe: 3628,
  kwf: 3629,
  kwg: 3630,
  kwh: 3631,
  kwi: 3632,
  kwj: 3633,
  kwk: 3634,
  kwl: 3635,
  kwm: 3636,
  kwn: 3637,
  kwo: 3638,
  kwp: 3639,
  kwq: 3640,
  kwr: 3641,
  kws: 3642,
  kwt: 3643,
  kwu: 3644,
  kwv: 3645,
  kww: 3646,
  kwx: 3647,
  kwy: 3648,
  kwz: 3649,
  kxa: 3650,
  kxb: 3651,
  kxc: 3652,
  kxd: 3653,
  kxe: 3654,
  kxf: 3655,
  kxh: 3656,
  kxi: 3657,
  kxj: 3658,
  kxk: 3659,
  kxl: 3660,
  kxm: 3661,
  kxn: 3662,
  kxo: 3663,
  kxp: 3664,
  kxq: 3665,
  kxr: 3666,
  kxs: 3667,
  kxt: 3668,
  kxu: 3669,
  kxv: 3670,
  kxw: 3671,
  kxx: 3672,
  kxy: 3673,
  kxz: 3674,
  kya: 3675,
  kyb: 3676,
  kyc: 3677,
  kyd: 3678,
  kye: 3679,
  kyf: 3680,
  kyg: 3681,
  kyh: 3682,
  kyi: 3683,
  kyj: 3684,
  kyk: 3685,
  kyl: 3686,
  kym: 3687,
  kyn: 3688,
  kyo: 3689,
  kyp: 3690,
  kyq: 3691,
  kyr: 3692,
  kys: 3693,
  kyt: 3694,
  kyu: 3695,
  kyv: 3696,
  kyw: 3697,
  kyx: 3698,
  kyy: 3699,
  kyz: 3700,
  kza: 3701,
  kzb: 3702,
  kzc: 3703,
  kzd: 3704,
  kze: 3705,
  kzf: 3706,
  kzg: 3707,
  kzh: 3708,
  kzi: 3709,
  kzj: 3710,
  kzk: 3711,
  kzl: 3712,
  kzm: 3713,
  kzn: 3714,
  kzo: 3715,
  kzp: 3716,
  kzq: 3717,
  kzr: 3718,
  kzs: 3719,
  kzt: 3720,
  kzu: 3721,
  kzv: 3722,
  kzw: 3723,
  kzx: 3724,
  kzy: 3725,
  kzz: 3726,
  laa: 3727,
  lab: 3728,
  lac: 3729,
  lad: 3730,
  lae: 3731,
  laf: 3732,
  lag: 3733,
  lah: 3734,
  lai: 3735,
  laj: 3736,
  lak: 3737,
  lal: 3738,
  lam: 3739,
  lan: 3740,
  lap: 3741,
  laq: 3742,
  lar: 3743,
  las: 3744,
  lau: 3745,
  law: 3746,
  lax: 3747,
  lay: 3748,
  laz: 3749,
  lba: 3750,
  lbb: 3751,
  lbc: 3752,
  lbe: 3753,
  lbf: 3754,
  lbg: 3755,
  lbi: 3756,
  lbj: 3757,
  lbk: 3758,
  lbl: 3759,
  lbm: 3760,
  lbn: 3761,
  lbo: 3762,
  lbq: 3763,
  lbr: 3764,
  lbs: 3765,
  lbt: 3766,
  lbu: 3767,
  lbv: 3768,
  lbw: 3769,
  lbx: 3770,
  lby: 3771,
  lbz: 3772,
  lcc: 3773,
  lcd: 3774,
  lce: 3775,
  lcf: 3776,
  lch: 3777,
  lcl: 3778,
  lcm: 3779,
  lcp: 3780,
  lcq: 3781,
  lcs: 3782,
  lda: 3783,
  ldb: 3784,
  ldd: 3785,
  ldg: 3786,
  ldh: 3787,
  ldi: 3788,
  ldj: 3789,
  ldk: 3790,
  ldl: 3791,
  ldm: 3792,
  ldn: 3793,
  ldo: 3794,
  ldp: 3795,
  ldq: 3796,
  lea: 3797,
  leb: 3798,
  lec: 3799,
  led: 3800,
  lee: 3801,
  lef: 3802,
  leg: 3803,
  leh: 3804,
  lei: 3805,
  lej: 3806,
  lek: 3807,
  lel: 3808,
  lem: 3809,
  len: 3810,
  leo: 3811,
  lep: 3812,
  leq: 3813,
  ler: 3814,
  les: 3815,
  let: 3816,
  leu: 3817,
  lev: 3818,
  lew: 3819,
  lex: 3820,
  ley: 3821,
  lez: 3822,
  lfa: 3823,
  lfn: 3824,
  lga: 3825,
  lgb: 3826,
  lgg: 3827,
  lgh: 3828,
  lgi: 3829,
  lgk: 3830,
  lgl: 3831,
  lgm: 3832,
  lgn: 3833,
  lgo: 3834,
  lgq: 3835,
  lgr: 3836,
  lgt: 3837,
  lgu: 3838,
  lgz: 3839,
  lha: 3840,
  lhh: 3841,
  lhi: 3842,
  lhl: 3843,
  lhm: 3844,
  lhn: 3845,
  lhp: 3846,
  lhs: 3847,
  lht: 3848,
  lhu: 3849,
  lia: 3850,
  lib: 3851,
  lic: 3852,
  lid: 3853,
  lie: 3854,
  lif: 3855,
  lig: 3856,
  lih: 3857,
  lii: 3858,
  lij: 3859,
  lik: 3860,
  lil: 3861,
  lio: 3862,
  lip: 3863,
  liq: 3864,
  lir: 3865,
  lis: 3866,
  liu: 3867,
  liv: 3868,
  liw: 3869,
  lix: 3870,
  liy: 3871,
  liz: 3872,
  lja: 3873,
  lje: 3874,
  lji: 3875,
  ljl: 3876,
  ljp: 3877,
  ljw: 3878,
  ljx: 3879,
  lka: 3880,
  lkb: 3881,
  lkc: 3882,
  lkd: 3883,
  lke: 3884,
  lkh: 3885,
  lki: 3886,
  lkj: 3887,
  lkl: 3888,
  lkm: 3889,
  lkn: 3890,
  lko: 3891,
  lkr: 3892,
  lks: 3893,
  lkt: 3894,
  lku: 3895,
  lky: 3896,
  lla: 3897,
  llb: 3898,
  llc: 3899,
  lld: 3900,
  lle: 3901,
  llf: 3902,
  llg: 3903,
  llh: 3904,
  lli: 3905,
  llj: 3906,
  llk: 3907,
  lll: 3908,
  llm: 3909,
  lln: 3910,
  llo: 3911,
  llp: 3912,
  llq: 3913,
  lls: 3914,
  llu: 3915,
  llx: 3916,
  lma: 3917,
  lmb: 3918,
  lmc: 3919,
  lmd: 3920,
  lme: 3921,
  lmf: 3922,
  lmg: 3923,
  lmh: 3924,
  lmi: 3925,
  lmj: 3926,
  lmk: 3927,
  lml: 3928,
  lmm: 3929,
  lmn: 3930,
  lmo: 3931,
  lmp: 3932,
  lmq: 3933,
  lmr: 3934,
  lmu: 3935,
  lmv: 3936,
  lmw: 3937,
  lmx: 3938,
  lmy: 3939,
  lmz: 3940,
  lna: 3941,
  lnb: 3942,
  lnd: 3943,
  lng: 3944,
  lnh: 3945,
  lni: 3946,
  lnj: 3947,
  lnl: 3948,
  lnm: 3949,
  lnn: 3950,
  lno: 3951,
  lns: 3952,
  lnu: 3953,
  lnw: 3954,
  lnz: 3955,
  loa: 3956,
  lob: 3957,
  loc: 3958,
  loe: 3959,
  lof: 3960,
  log: 3961,
  loh: 3962,
  loi: 3963,
  loj: 3964,
  lok: 3965,
  lol: 3966,
  lom: 3967,
  lon: 3968,
  loo: 3969,
  lop: 3970,
  loq: 3971,
  lor: 3972,
  los: 3973,
  lot: 3974,
  lou: 3975,
  lov: 3976,
  low: 3977,
  lox: 3978,
  loy: 3979,
  loz: 3980,
  lpa: 3981,
  lpe: 3982,
  lpn: 3983,
  lpo: 3984,
  lpx: 3985,
  lqr: 3986,
  lra: 3987,
  lrc: 3988,
  lre: 3989,
  lrg: 3990,
  lri: 3991,
  lrk: 3992,
  lrl: 3993,
  lrm: 3994,
  lrn: 3995,
  lro: 3996,
  lrr: 3997,
  lrt: 3998,
  lrv: 3999,
  lrz: 4e3,
  lsa: 4001,
  lsb: 4002,
  lsc: 4003,
  lsd: 4004,
  lse: 4005,
  lsg: 4006,
  lsh: 4007,
  lsi: 4008,
  lsl: 4009,
  lsm: 4010,
  lsn: 4011,
  lso: 4012,
  lsp: 4013,
  lsr: 4014,
  lss: 4015,
  lst: 4016,
  lsv: 4017,
  lsw: 4018,
  lsy: 4019,
  ltc: 4020,
  ltg: 4021,
  lth: 4022,
  lti: 4023,
  ltn: 4024,
  lto: 4025,
  lts: 4026,
  ltu: 4027,
  lua: 4028,
  luc: 4029,
  lud: 4030,
  lue: 4031,
  luf: 4032,
  lui: 4033,
  luj: 4034,
  luk: 4035,
  lul: 4036,
  lum: 4037,
  lun: 4038,
  luo: 4039,
  lup: 4040,
  luq: 4041,
  lur: 4042,
  lus: 4043,
  lut: 4044,
  luu: 4045,
  luv: 4046,
  luw: 4047,
  luy: 4048,
  luz: 4049,
  lva: 4050,
  lvi: 4051,
  lvk: 4052,
  lvs: 4053,
  lvu: 4054,
  lwa: 4055,
  lwe: 4056,
  lwg: 4057,
  lwh: 4058,
  lwl: 4059,
  lwm: 4060,
  lwo: 4061,
  lws: 4062,
  lwt: 4063,
  lwu: 4064,
  lww: 4065,
  lxm: 4066,
  lya: 4067,
  lyg: 4068,
  lyn: 4069,
  lzh: 4070,
  lzl: 4071,
  lzn: 4072,
  lzz: 4073,
  maa: 4074,
  mab: 4075,
  mad: 4076,
  mae: 4077,
  maf: 4078,
  mag: 4079,
  mai: 4080,
  maj: 4081,
  mak: 4082,
  mam: 4083,
  man: 4084,
  map: 4085,
  maq: 4086,
  mas: 4087,
  mat: 4088,
  mau: 4089,
  mav: 4090,
  maw: 4091,
  max: 4092,
  maz: 4093,
  mba: 4094,
  mbb: 4095,
  mbc: 4096,
  mbd: 4097,
  mbe: 4098,
  mbf: 4099,
  mbh: 4100,
  mbi: 4101,
  mbj: 4102,
  mbk: 4103,
  mbl: 4104,
  mbm: 4105,
  mbn: 4106,
  mbo: 4107,
  mbp: 4108,
  mbq: 4109,
  mbr: 4110,
  mbs: 4111,
  mbt: 4112,
  mbu: 4113,
  mbv: 4114,
  mbw: 4115,
  mbx: 4116,
  mby: 4117,
  mbz: 4118,
  mca: 4119,
  mcb: 4120,
  mcc: 4121,
  mcd: 4122,
  mce: 4123,
  mcf: 4124,
  mcg: 4125,
  mch: 4126,
  mci: 4127,
  mcj: 4128,
  mck: 4129,
  mcl: 4130,
  mcm: 4131,
  mcn: 4132,
  mco: 4133,
  mcp: 4134,
  mcq: 4135,
  mcr: 4136,
  mcs: 4137,
  mct: 4138,
  mcu: 4139,
  mcv: 4140,
  mcw: 4141,
  mcx: 4142,
  mcy: 4143,
  mcz: 4144,
  mda: 4145,
  mdb: 4146,
  mdc: 4147,
  mdd: 4148,
  mde: 4149,
  mdf: 4150,
  mdg: 4151,
  mdh: 4152,
  mdi: 4153,
  mdj: 4154,
  mdk: 4155,
  mdl: 4156,
  mdm: 4157,
  mdn: 4158,
  mdp: 4159,
  mdq: 4160,
  mdr: 4161,
  mds: 4162,
  mdt: 4163,
  mdu: 4164,
  mdv: 4165,
  mdw: 4166,
  mdx: 4167,
  mdy: 4168,
  mdz: 4169,
  mea: 4170,
  meb: 4171,
  mec: 4172,
  med: 4173,
  mee: 4174,
  mef: 4175,
  meg: 4176,
  meh: 4177,
  mei: 4178,
  mej: 4179,
  mek: 4180,
  mel: 4181,
  mem: 4182,
  men: 4183,
  meo: 4184,
  mep: 4185,
  meq: 4186,
  mer: 4187,
  mes: 4188,
  met: 4189,
  meu: 4190,
  mev: 4191,
  mew: 4192,
  mey: 4193,
  mez: 4194,
  mfa: 4195,
  mfb: 4196,
  mfc: 4197,
  mfd: 4198,
  mfe: 4199,
  mff: 4200,
  mfg: 4201,
  mfh: 4202,
  mfi: 4203,
  mfj: 4204,
  mfk: 4205,
  mfl: 4206,
  mfm: 4207,
  mfn: 4208,
  mfo: 4209,
  mfp: 4210,
  mfq: 4211,
  mfr: 4212,
  mfs: 4213,
  mft: 4214,
  mfu: 4215,
  mfv: 4216,
  mfw: 4217,
  mfx: 4218,
  mfy: 4219,
  mfz: 4220,
  mga: 4221,
  mgb: 4222,
  mgc: 4223,
  mgd: 4224,
  mge: 4225,
  mgf: 4226,
  mgg: 4227,
  mgh: 4228,
  mgi: 4229,
  mgj: 4230,
  mgk: 4231,
  mgl: 4232,
  mgm: 4233,
  mgn: 4234,
  mgo: 4235,
  mgp: 4236,
  mgq: 4237,
  mgr: 4238,
  mgs: 4239,
  mgt: 4240,
  mgu: 4241,
  mgv: 4242,
  mgw: 4243,
  mgx: 4244,
  mgy: 4245,
  mgz: 4246,
  mha: 4247,
  mhb: 4248,
  mhc: 4249,
  mhd: 4250,
  mhe: 4251,
  mhf: 4252,
  mhg: 4253,
  mhh: 4254,
  mhi: 4255,
  mhj: 4256,
  mhk: 4257,
  mhl: 4258,
  mhm: 4259,
  mhn: 4260,
  mho: 4261,
  mhp: 4262,
  mhq: 4263,
  mhr: 4264,
  mhs: 4265,
  mht: 4266,
  mhu: 4267,
  mhw: 4268,
  mhx: 4269,
  mhy: 4270,
  mhz: 4271,
  mia: 4272,
  mib: 4273,
  mic: 4274,
  mid: 4275,
  mie: 4276,
  mif: 4277,
  mig: 4278,
  mih: 4279,
  mii: 4280,
  mij: 4281,
  mik: 4282,
  mil: 4283,
  mim: 4284,
  min: 4285,
  mio: 4286,
  mip: 4287,
  miq: 4288,
  mir: 4289,
  mis: 4290,
  mit: 4291,
  miu: 4292,
  miw: 4293,
  mix: 4294,
  miy: 4295,
  miz: 4296,
  mja: 4297,
  mjb: 4298,
  mjc: 4299,
  mjd: 4300,
  mje: 4301,
  mjg: 4302,
  mjh: 4303,
  mji: 4304,
  mjj: 4305,
  mjk: 4306,
  mjl: 4307,
  mjm: 4308,
  mjn: 4309,
  mjo: 4310,
  mjp: 4311,
  mjq: 4312,
  mjr: 4313,
  mjs: 4314,
  mjt: 4315,
  mju: 4316,
  mjv: 4317,
  mjw: 4318,
  mjx: 4319,
  mjy: 4320,
  mjz: 4321,
  mka: 4322,
  mkb: 4323,
  mkc: 4324,
  mke: 4325,
  mkf: 4326,
  mkg: 4327,
  mkh: 4328,
  mki: 4329,
  mkj: 4330,
  mkk: 4331,
  mkl: 4332,
  mkm: 4333,
  mkn: 4334,
  mko: 4335,
  mkp: 4336,
  mkq: 4337,
  mkr: 4338,
  mks: 4339,
  mkt: 4340,
  mku: 4341,
  mkv: 4342,
  mkw: 4343,
  mkx: 4344,
  mky: 4345,
  mkz: 4346,
  mla: 4347,
  mlb: 4348,
  mlc: 4349,
  mld: 4350,
  mle: 4351,
  mlf: 4352,
  mlh: 4353,
  mli: 4354,
  mlj: 4355,
  mlk: 4356,
  mll: 4357,
  mlm: 4358,
  mln: 4359,
  mlo: 4360,
  mlp: 4361,
  mlq: 4362,
  mlr: 4363,
  mls: 4364,
  mlu: 4365,
  mlv: 4366,
  mlw: 4367,
  mlx: 4368,
  mlz: 4369,
  mma: 4370,
  mmb: 4371,
  mmc: 4372,
  mmd: 4373,
  mme: 4374,
  mmf: 4375,
  mmg: 4376,
  mmh: 4377,
  mmi: 4378,
  mmj: 4379,
  mmk: 4380,
  mml: 4381,
  mmm: 4382,
  mmn: 4383,
  mmo: 4384,
  mmp: 4385,
  mmq: 4386,
  mmr: 4387,
  mmt: 4388,
  mmu: 4389,
  mmv: 4390,
  mmw: 4391,
  mmx: 4392,
  mmy: 4393,
  mmz: 4394,
  mna: 4395,
  mnb: 4396,
  mnc: 4397,
  mnd: 4398,
  mne: 4399,
  mnf: 4400,
  mng: 4401,
  mnh: 4402,
  mni: 4403,
  mnj: 4404,
  mnk: 4405,
  mnl: 4406,
  mnm: 4407,
  mnn: 4408,
  mno: 4409,
  mnp: 4410,
  mnq: 4411,
  mnr: 4412,
  mns: 4413,
  mnt: 4414,
  mnu: 4415,
  mnv: 4416,
  mnw: 4417,
  mnx: 4418,
  mny: 4419,
  mnz: 4420,
  moa: 4421,
  moc: 4422,
  mod: 4423,
  moe: 4424,
  mof: 4425,
  mog: 4426,
  moh: 4427,
  moi: 4428,
  moj: 4429,
  mok: 4430,
  mom: 4431,
  moo: 4432,
  mop: 4433,
  moq: 4434,
  mor: 4435,
  mos: 4436,
  mot: 4437,
  mou: 4438,
  mov: 4439,
  mow: 4440,
  mox: 4441,
  moy: 4442,
  moz: 4443,
  mpa: 4444,
  mpb: 4445,
  mpc: 4446,
  mpd: 4447,
  mpe: 4448,
  mpg: 4449,
  mph: 4450,
  mpi: 4451,
  mpj: 4452,
  mpk: 4453,
  mpl: 4454,
  mpm: 4455,
  mpn: 4456,
  mpo: 4457,
  mpp: 4458,
  mpq: 4459,
  mpr: 4460,
  mps: 4461,
  mpt: 4462,
  mpu: 4463,
  mpv: 4464,
  mpw: 4465,
  mpx: 4466,
  mpy: 4467,
  mpz: 4468,
  mqa: 4469,
  mqb: 4470,
  mqc: 4471,
  mqe: 4472,
  mqf: 4473,
  mqg: 4474,
  mqh: 4475,
  mqi: 4476,
  mqj: 4477,
  mqk: 4478,
  mql: 4479,
  mqm: 4480,
  mqn: 4481,
  mqo: 4482,
  mqp: 4483,
  mqq: 4484,
  mqr: 4485,
  mqs: 4486,
  mqt: 4487,
  mqu: 4488,
  mqv: 4489,
  mqw: 4490,
  mqx: 4491,
  mqy: 4492,
  mqz: 4493,
  mra: 4494,
  mrb: 4495,
  mrc: 4496,
  mrd: 4497,
  mre: 4498,
  mrf: 4499,
  mrg: 4500,
  mrh: 4501,
  mrj: 4502,
  mrk: 4503,
  mrl: 4504,
  mrm: 4505,
  mrn: 4506,
  mro: 4507,
  mrp: 4508,
  mrq: 4509,
  mrr: 4510,
  mrs: 4511,
  mrt: 4512,
  mru: 4513,
  mrv: 4514,
  mrw: 4515,
  mrx: 4516,
  mry: 4517,
  mrz: 4518,
  msb: 4519,
  msc: 4520,
  msd: 4521,
  mse: 4522,
  msf: 4523,
  msg: 4524,
  msh: 4525,
  msi: 4526,
  msj: 4527,
  msk: 4528,
  msl: 4529,
  msm: 4530,
  msn: 4531,
  mso: 4532,
  msp: 4533,
  msq: 4534,
  msr: 4535,
  mss: 4536,
  mst: 4537,
  msu: 4538,
  msv: 4539,
  msw: 4540,
  msx: 4541,
  msy: 4542,
  msz: 4543,
  mta: 4544,
  mtb: 4545,
  mtc: 4546,
  mtd: 4547,
  mte: 4548,
  mtf: 4549,
  mtg: 4550,
  mth: 4551,
  mti: 4552,
  mtj: 4553,
  mtk: 4554,
  mtl: 4555,
  mtm: 4556,
  mtn: 4557,
  mto: 4558,
  mtp: 4559,
  mtq: 4560,
  mtr: 4561,
  mts: 4562,
  mtt: 4563,
  mtu: 4564,
  mtv: 4565,
  mtw: 4566,
  mtx: 4567,
  mty: 4568,
  mua: 4569,
  mub: 4570,
  muc: 4571,
  mud: 4572,
  mue: 4573,
  mug: 4574,
  muh: 4575,
  mui: 4576,
  muj: 4577,
  muk: 4578,
  mul: 4579,
  mum: 4580,
  mun: 4581,
  muo: 4582,
  mup: 4583,
  muq: 4584,
  mur: 4585,
  mus: 4586,
  mut: 4587,
  muu: 4588,
  muv: 4589,
  mux: 4590,
  muy: 4591,
  muz: 4592,
  mva: 4593,
  mvb: 4594,
  mvd: 4595,
  mve: 4596,
  mvf: 4597,
  mvg: 4598,
  mvh: 4599,
  mvi: 4600,
  mvk: 4601,
  mvl: 4602,
  mvm: 4603,
  mvn: 4604,
  mvo: 4605,
  mvp: 4606,
  mvq: 4607,
  mvr: 4608,
  mvs: 4609,
  mvt: 4610,
  mvu: 4611,
  mvv: 4612,
  mvw: 4613,
  mvx: 4614,
  mvy: 4615,
  mvz: 4616,
  mwa: 4617,
  mwb: 4618,
  mwc: 4619,
  mwd: 4620,
  mwe: 4621,
  mwf: 4622,
  mwg: 4623,
  mwh: 4624,
  mwi: 4625,
  mwj: 4626,
  mwk: 4627,
  mwl: 4628,
  mwm: 4629,
  mwn: 4630,
  mwo: 4631,
  mwp: 4632,
  mwq: 4633,
  mwr: 4634,
  mws: 4635,
  mwt: 4636,
  mwu: 4637,
  mwv: 4638,
  mww: 4639,
  mwx: 4640,
  mwy: 4641,
  mwz: 4642,
  mxa: 4643,
  mxb: 4644,
  mxc: 4645,
  mxd: 4646,
  mxe: 4647,
  mxf: 4648,
  mxg: 4649,
  mxh: 4650,
  mxi: 4651,
  mxj: 4652,
  mxk: 4653,
  mxl: 4654,
  mxm: 4655,
  mxn: 4656,
  mxo: 4657,
  mxp: 4658,
  mxq: 4659,
  mxr: 4660,
  mxs: 4661,
  mxt: 4662,
  mxu: 4663,
  mxv: 4664,
  mxw: 4665,
  mxx: 4666,
  mxy: 4667,
  mxz: 4668,
  myb: 4669,
  myc: 4670,
  myd: 4671,
  mye: 4672,
  myf: 4673,
  myg: 4674,
  myh: 4675,
  myi: 4676,
  myj: 4677,
  myk: 4678,
  myl: 4679,
  mym: 4680,
  myn: 4681,
  myo: 4682,
  myp: 4683,
  myq: 4684,
  myr: 4685,
  mys: 4686,
  myt: 4687,
  myu: 4688,
  myv: 4689,
  myw: 4690,
  myx: 4691,
  myy: 4692,
  myz: 4693,
  mza: 4694,
  mzb: 4695,
  mzc: 4696,
  mzd: 4697,
  mze: 4698,
  mzg: 4699,
  mzh: 4700,
  mzi: 4701,
  mzj: 4702,
  mzk: 4703,
  mzl: 4704,
  mzm: 4705,
  mzn: 4706,
  mzo: 4707,
  mzp: 4708,
  mzq: 4709,
  mzr: 4710,
  mzs: 4711,
  mzt: 4712,
  mzu: 4713,
  mzv: 4714,
  mzw: 4715,
  mzx: 4716,
  mzy: 4717,
  mzz: 4718,
  naa: 4719,
  nab: 4720,
  nac: 4721,
  nad: 4722,
  nae: 4723,
  naf: 4724,
  nag: 4725,
  nah: 4726,
  nai: 4727,
  naj: 4728,
  nak: 4729,
  nal: 4730,
  nam: 4731,
  nan: 4732,
  nao: 4733,
  nap: 4734,
  naq: 4735,
  nar: 4736,
  nas: 4737,
  nat: 4738,
  naw: 4739,
  nax: 4740,
  nay: 4741,
  naz: 4742,
  nba: 4743,
  nbb: 4744,
  nbc: 4745,
  nbd: 4746,
  nbe: 4747,
  nbf: 4748,
  nbg: 4749,
  nbh: 4750,
  nbi: 4751,
  nbj: 4752,
  nbk: 4753,
  nbm: 4754,
  nbn: 4755,
  nbo: 4756,
  nbp: 4757,
  nbq: 4758,
  nbr: 4759,
  nbs: 4760,
  nbt: 4761,
  nbu: 4762,
  nbv: 4763,
  nbw: 4764,
  nbx: 4765,
  nby: 4766,
  nca: 4767,
  ncb: 4768,
  ncc: 4769,
  ncd: 4770,
  nce: 4771,
  ncf: 4772,
  ncg: 4773,
  nch: 4774,
  nci: 4775,
  ncj: 4776,
  nck: 4777,
  ncl: 4778,
  ncm: 4779,
  ncn: 4780,
  nco: 4781,
  ncp: 4782,
  ncq: 4783,
  ncr: 4784,
  ncs: 4785,
  nct: 4786,
  ncu: 4787,
  ncx: 4788,
  ncz: 4789,
  nda: 4790,
  ndb: 4791,
  ndc: 4792,
  ndd: 4793,
  ndf: 4794,
  ndg: 4795,
  ndh: 4796,
  ndi: 4797,
  ndj: 4798,
  ndk: 4799,
  ndl: 4800,
  ndm: 4801,
  ndn: 4802,
  ndp: 4803,
  ndq: 4804,
  ndr: 4805,
  nds: 4806,
  ndt: 4807,
  ndu: 4808,
  ndv: 4809,
  ndw: 4810,
  ndx: 4811,
  ndy: 4812,
  ndz: 4813,
  nea: 4814,
  neb: 4815,
  nec: 4816,
  ned: 4817,
  nee: 4818,
  nef: 4819,
  neg: 4820,
  neh: 4821,
  nei: 4822,
  nej: 4823,
  nek: 4824,
  nem: 4825,
  nen: 4826,
  neo: 4827,
  neq: 4828,
  ner: 4829,
  nes: 4830,
  net: 4831,
  neu: 4832,
  nev: 4833,
  new: 4834,
  nex: 4835,
  ney: 4836,
  nez: 4837,
  nfa: 4838,
  nfd: 4839,
  nfl: 4840,
  nfr: 4841,
  nfu: 4842,
  nga: 4843,
  ngb: 4844,
  ngc: 4845,
  ngd: 4846,
  nge: 4847,
  ngf: 4848,
  ngg: 4849,
  ngh: 4850,
  ngi: 4851,
  ngj: 4852,
  ngk: 4853,
  ngl: 4854,
  ngm: 4855,
  ngn: 4856,
  ngo: 4857,
  ngp: 4858,
  ngq: 4859,
  ngr: 4860,
  ngs: 4861,
  ngt: 4862,
  ngu: 4863,
  ngv: 4864,
  ngw: 4865,
  ngx: 4866,
  ngy: 4867,
  ngz: 4868,
  nha: 4869,
  nhb: 4870,
  nhc: 4871,
  nhd: 4872,
  nhe: 4873,
  nhf: 4874,
  nhg: 4875,
  nhh: 4876,
  nhi: 4877,
  nhk: 4878,
  nhm: 4879,
  nhn: 4880,
  nho: 4881,
  nhp: 4882,
  nhq: 4883,
  nhr: 4884,
  nht: 4885,
  nhu: 4886,
  nhv: 4887,
  nhw: 4888,
  nhx: 4889,
  nhy: 4890,
  nhz: 4891,
  nia: 4892,
  nib: 4893,
  nic: 4894,
  nid: 4895,
  nie: 4896,
  nif: 4897,
  nig: 4898,
  nih: 4899,
  nii: 4900,
  nij: 4901,
  nik: 4902,
  nil: 4903,
  nim: 4904,
  nin: 4905,
  nio: 4906,
  niq: 4907,
  nir: 4908,
  nis: 4909,
  nit: 4910,
  niu: 4911,
  niv: 4912,
  niw: 4913,
  nix: 4914,
  niy: 4915,
  niz: 4916,
  nja: 4917,
  njb: 4918,
  njd: 4919,
  njh: 4920,
  nji: 4921,
  njj: 4922,
  njl: 4923,
  njm: 4924,
  njn: 4925,
  njo: 4926,
  njr: 4927,
  njs: 4928,
  njt: 4929,
  nju: 4930,
  njx: 4931,
  njy: 4932,
  njz: 4933,
  nka: 4934,
  nkb: 4935,
  nkc: 4936,
  nkd: 4937,
  nke: 4938,
  nkf: 4939,
  nkg: 4940,
  nkh: 4941,
  nki: 4942,
  nkj: 4943,
  nkk: 4944,
  nkm: 4945,
  nkn: 4946,
  nko: 4947,
  nkp: 4948,
  nkq: 4949,
  nkr: 4950,
  nks: 4951,
  nkt: 4952,
  nku: 4953,
  nkv: 4954,
  nkw: 4955,
  nkx: 4956,
  nkz: 4957,
  nla: 4958,
  nlc: 4959,
  nle: 4960,
  nlg: 4961,
  nli: 4962,
  nlj: 4963,
  nlk: 4964,
  nll: 4965,
  nlm: 4966,
  nln: 4967,
  nlo: 4968,
  nlq: 4969,
  nlr: 4970,
  nlu: 4971,
  nlv: 4972,
  nlw: 4973,
  nlx: 4974,
  nly: 4975,
  nlz: 4976,
  nma: 4977,
  nmb: 4978,
  nmc: 4979,
  nmd: 4980,
  nme: 4981,
  nmf: 4982,
  nmg: 4983,
  nmh: 4984,
  nmi: 4985,
  nmj: 4986,
  nmk: 4987,
  nml: 4988,
  nmm: 4989,
  nmn: 4990,
  nmo: 4991,
  nmp: 4992,
  nmq: 4993,
  nmr: 4994,
  nms: 4995,
  nmt: 4996,
  nmu: 4997,
  nmv: 4998,
  nmw: 4999,
  nmx: 5e3,
  nmy: 5001,
  nmz: 5002,
  nna: 5003,
  nnb: 5004,
  nnc: 5005,
  nnd: 5006,
  nne: 5007,
  nnf: 5008,
  nng: 5009,
  nnh: 5010,
  nni: 5011,
  nnj: 5012,
  nnk: 5013,
  nnl: 5014,
  nnm: 5015,
  nnn: 5016,
  nnp: 5017,
  nnq: 5018,
  nnr: 5019,
  nns: 5020,
  nnt: 5021,
  nnu: 5022,
  nnv: 5023,
  nnw: 5024,
  nnx: 5025,
  nny: 5026,
  nnz: 5027,
  noa: 5028,
  noc: 5029,
  nod: 5030,
  noe: 5031,
  nof: 5032,
  nog: 5033,
  noh: 5034,
  noi: 5035,
  noj: 5036,
  nok: 5037,
  nol: 5038,
  nom: 5039,
  non: 5040,
  noo: 5041,
  nop: 5042,
  noq: 5043,
  nos: 5044,
  not: 5045,
  nou: 5046,
  nov: 5047,
  now: 5048,
  noy: 5049,
  noz: 5050,
  npa: 5051,
  npb: 5052,
  npg: 5053,
  nph: 5054,
  npi: 5055,
  npl: 5056,
  npn: 5057,
  npo: 5058,
  nps: 5059,
  npu: 5060,
  npx: 5061,
  npy: 5062,
  nqg: 5063,
  nqk: 5064,
  nql: 5065,
  nqm: 5066,
  nqn: 5067,
  nqo: 5068,
  nqq: 5069,
  nqt: 5070,
  nqy: 5071,
  nra: 5072,
  nrb: 5073,
  nrc: 5074,
  nre: 5075,
  nrf: 5076,
  nrg: 5077,
  nri: 5078,
  nrk: 5079,
  nrl: 5080,
  nrm: 5081,
  nrn: 5082,
  nrp: 5083,
  nrr: 5084,
  nrt: 5085,
  nru: 5086,
  nrx: 5087,
  nrz: 5088,
  nsa: 5089,
  nsb: 5090,
  nsc: 5091,
  nsd: 5092,
  nse: 5093,
  nsf: 5094,
  nsg: 5095,
  nsh: 5096,
  nsi: 5097,
  nsk: 5098,
  nsl: 5099,
  nsm: 5100,
  nsn: 5101,
  nso: 5102,
  nsp: 5103,
  nsq: 5104,
  nsr: 5105,
  nss: 5106,
  nst: 5107,
  nsu: 5108,
  nsv: 5109,
  nsw: 5110,
  nsx: 5111,
  nsy: 5112,
  nsz: 5113,
  ntd: 5114,
  nte: 5115,
  ntg: 5116,
  nti: 5117,
  ntj: 5118,
  ntk: 5119,
  ntm: 5120,
  nto: 5121,
  ntp: 5122,
  ntr: 5123,
  nts: 5124,
  ntu: 5125,
  ntw: 5126,
  ntx: 5127,
  nty: 5128,
  ntz: 5129,
  nua: 5130,
  nub: 5131,
  nuc: 5132,
  nud: 5133,
  nue: 5134,
  nuf: 5135,
  nug: 5136,
  nuh: 5137,
  nui: 5138,
  nuj: 5139,
  nuk: 5140,
  nul: 5141,
  num: 5142,
  nun: 5143,
  nuo: 5144,
  nup: 5145,
  nuq: 5146,
  nur: 5147,
  nus: 5148,
  nut: 5149,
  nuu: 5150,
  nuv: 5151,
  nuw: 5152,
  nux: 5153,
  nuy: 5154,
  nuz: 5155,
  nvh: 5156,
  nvm: 5157,
  nvo: 5158,
  nwa: 5159,
  nwb: 5160,
  nwc: 5161,
  nwe: 5162,
  nwg: 5163,
  nwi: 5164,
  nwm: 5165,
  nwo: 5166,
  nwr: 5167,
  nww: 5168,
  nwx: 5169,
  nwy: 5170,
  nxa: 5171,
  nxd: 5172,
  nxe: 5173,
  nxg: 5174,
  nxi: 5175,
  nxk: 5176,
  nxl: 5177,
  nxm: 5178,
  nxn: 5179,
  nxo: 5180,
  nxq: 5181,
  nxr: 5182,
  nxu: 5183,
  nxx: 5184,
  nyb: 5185,
  nyc: 5186,
  nyd: 5187,
  nye: 5188,
  nyf: 5189,
  nyg: 5190,
  nyh: 5191,
  nyi: 5192,
  nyj: 5193,
  nyk: 5194,
  nyl: 5195,
  nym: 5196,
  nyn: 5197,
  nyo: 5198,
  nyp: 5199,
  nyq: 5200,
  nyr: 5201,
  nys: 5202,
  nyt: 5203,
  nyu: 5204,
  nyv: 5205,
  nyw: 5206,
  nyx: 5207,
  nyy: 5208,
  nza: 5209,
  nzb: 5210,
  nzd: 5211,
  nzi: 5212,
  nzk: 5213,
  nzm: 5214,
  nzs: 5215,
  nzu: 5216,
  nzy: 5217,
  nzz: 5218,
  oaa: 5219,
  oac: 5220,
  oar: 5221,
  oav: 5222,
  obi: 5223,
  obk: 5224,
  obl: 5225,
  obm: 5226,
  obo: 5227,
  obr: 5228,
  obt: 5229,
  obu: 5230,
  oca: 5231,
  och: 5232,
  ocm: 5233,
  oco: 5234,
  ocu: 5235,
  oda: 5236,
  odk: 5237,
  odt: 5238,
  odu: 5239,
  ofo: 5240,
  ofs: 5241,
  ofu: 5242,
  ogb: 5243,
  ogc: 5244,
  oge: 5245,
  ogg: 5246,
  ogo: 5247,
  ogu: 5248,
  oht: 5249,
  ohu: 5250,
  oia: 5251,
  oie: 5252,
  oin: 5253,
  ojb: 5254,
  ojc: 5255,
  ojg: 5256,
  ojp: 5257,
  ojs: 5258,
  ojv: 5259,
  ojw: 5260,
  oka: 5261,
  okb: 5262,
  okc: 5263,
  okd: 5264,
  oke: 5265,
  okg: 5266,
  okh: 5267,
  oki: 5268,
  okj: 5269,
  okk: 5270,
  okl: 5271,
  okm: 5272,
  okn: 5273,
  oko: 5274,
  okr: 5275,
  oks: 5276,
  oku: 5277,
  okv: 5278,
  okx: 5279,
  okz: 5280,
  ola: 5281,
  old: 5282,
  ole: 5283,
  olk: 5284,
  olm: 5285,
  olo: 5286,
  olr: 5287,
  olt: 5288,
  olu: 5289,
  oma: 5290,
  omb: 5291,
  omc: 5292,
  ome: 5293,
  omg: 5294,
  omi: 5295,
  omk: 5296,
  oml: 5297,
  omn: 5298,
  omo: 5299,
  omp: 5300,
  omq: 5301,
  omr: 5302,
  omt: 5303,
  omu: 5304,
  omv: 5305,
  omw: 5306,
  omx: 5307,
  omy: 5308,
  ona: 5309,
  onb: 5310,
  one: 5311,
  ong: 5312,
  oni: 5313,
  onj: 5314,
  onk: 5315,
  onn: 5316,
  ono: 5317,
  onp: 5318,
  onr: 5319,
  ons: 5320,
  ont: 5321,
  onu: 5322,
  onw: 5323,
  onx: 5324,
  ood: 5325,
  oog: 5326,
  oon: 5327,
  oor: 5328,
  oos: 5329,
  opa: 5330,
  opk: 5331,
  opm: 5332,
  opo: 5333,
  opt: 5334,
  opy: 5335,
  ora: 5336,
  orc: 5337,
  ore: 5338,
  org: 5339,
  orh: 5340,
  orn: 5341,
  oro: 5342,
  orr: 5343,
  ors: 5344,
  ort: 5345,
  oru: 5346,
  orv: 5347,
  orw: 5348,
  orx: 5349,
  ory: 5350,
  orz: 5351,
  osa: 5352,
  osc: 5353,
  osi: 5354,
  osn: 5355,
  oso: 5356,
  osp: 5357,
  ost: 5358,
  osu: 5359,
  osx: 5360,
  ota: 5361,
  otb: 5362,
  otd: 5363,
  ote: 5364,
  oti: 5365,
  otk: 5366,
  otl: 5367,
  otm: 5368,
  otn: 5369,
  oto: 5370,
  otq: 5371,
  otr: 5372,
  ots: 5373,
  ott: 5374,
  otu: 5375,
  otw: 5376,
  otx: 5377,
  oty: 5378,
  otz: 5379,
  oua: 5380,
  oub: 5381,
  oue: 5382,
  oui: 5383,
  oum: 5384,
  oun: 5385,
  ovd: 5386,
  owi: 5387,
  owl: 5388,
  oyb: 5389,
  oyd: 5390,
  oym: 5391,
  oyy: 5392,
  ozm: 5393,
  paa: 5394,
  pab: 5395,
  pac: 5396,
  pad: 5397,
  pae: 5398,
  paf: 5399,
  pag: 5400,
  pah: 5401,
  pai: 5402,
  pak: 5403,
  pal: 5404,
  pam: 5405,
  pao: 5406,
  pap: 5407,
  paq: 5408,
  par: 5409,
  pas: 5410,
  pat: 5411,
  pau: 5412,
  pav: 5413,
  paw: 5414,
  pax: 5415,
  pay: 5416,
  paz: 5417,
  pbb: 5418,
  pbc: 5419,
  pbe: 5420,
  pbf: 5421,
  pbg: 5422,
  pbh: 5423,
  pbi: 5424,
  pbl: 5425,
  pbm: 5426,
  pbn: 5427,
  pbo: 5428,
  pbp: 5429,
  pbr: 5430,
  pbs: 5431,
  pbt: 5432,
  pbu: 5433,
  pbv: 5434,
  pby: 5435,
  pbz: 5436,
  pca: 5437,
  pcb: 5438,
  pcc: 5439,
  pcd: 5440,
  pce: 5441,
  pcf: 5442,
  pcg: 5443,
  pch: 5444,
  pci: 5445,
  pcj: 5446,
  pck: 5447,
  pcl: 5448,
  pcm: 5449,
  pcn: 5450,
  pcp: 5451,
  pcr: 5452,
  pcw: 5453,
  pda: 5454,
  pdc: 5455,
  pdi: 5456,
  pdn: 5457,
  pdo: 5458,
  pdt: 5459,
  pdu: 5460,
  pea: 5461,
  peb: 5462,
  ped: 5463,
  pee: 5464,
  pef: 5465,
  peg: 5466,
  peh: 5467,
  pei: 5468,
  pej: 5469,
  pek: 5470,
  pel: 5471,
  pem: 5472,
  peo: 5473,
  pep: 5474,
  peq: 5475,
  pes: 5476,
  pev: 5477,
  pex: 5478,
  pey: 5479,
  pez: 5480,
  pfa: 5481,
  pfe: 5482,
  pfl: 5483,
  pga: 5484,
  pgd: 5485,
  pgg: 5486,
  pgi: 5487,
  pgk: 5488,
  pgl: 5489,
  pgn: 5490,
  pgs: 5491,
  pgu: 5492,
  pgy: 5493,
  pgz: 5494,
  pha: 5495,
  phd: 5496,
  phg: 5497,
  phh: 5498,
  phi: 5499,
  phj: 5500,
  phk: 5501,
  phl: 5502,
  phm: 5503,
  phn: 5504,
  pho: 5505,
  phq: 5506,
  phr: 5507,
  pht: 5508,
  phu: 5509,
  phv: 5510,
  phw: 5511,
  pia: 5512,
  pib: 5513,
  pic: 5514,
  pid: 5515,
  pie: 5516,
  pif: 5517,
  pig: 5518,
  pih: 5519,
  pii: 5520,
  pij: 5521,
  pil: 5522,
  pim: 5523,
  pin: 5524,
  pio: 5525,
  pip: 5526,
  pir: 5527,
  pis: 5528,
  pit: 5529,
  piu: 5530,
  piv: 5531,
  piw: 5532,
  pix: 5533,
  piy: 5534,
  piz: 5535,
  pjt: 5536,
  pka: 5537,
  pkb: 5538,
  pkc: 5539,
  pkg: 5540,
  pkh: 5541,
  pkn: 5542,
  pko: 5543,
  pkp: 5544,
  pkr: 5545,
  pks: 5546,
  pkt: 5547,
  pku: 5548,
  pla: 5549,
  plb: 5550,
  plc: 5551,
  pld: 5552,
  ple: 5553,
  plf: 5554,
  plg: 5555,
  plh: 5556,
  plj: 5557,
  plk: 5558,
  pll: 5559,
  pln: 5560,
  plo: 5561,
  plp: 5562,
  plq: 5563,
  plr: 5564,
  pls: 5565,
  plt: 5566,
  plu: 5567,
  plv: 5568,
  plw: 5569,
  ply: 5570,
  plz: 5571,
  pma: 5572,
  pmb: 5573,
  pmc: 5574,
  pmd: 5575,
  pme: 5576,
  pmf: 5577,
  pmh: 5578,
  pmi: 5579,
  pmj: 5580,
  pmk: 5581,
  pml: 5582,
  pmm: 5583,
  pmn: 5584,
  pmo: 5585,
  pmq: 5586,
  pmr: 5587,
  pms: 5588,
  pmt: 5589,
  pmu: 5590,
  pmw: 5591,
  pmx: 5592,
  pmy: 5593,
  pmz: 5594,
  pna: 5595,
  pnb: 5596,
  pnc: 5597,
  pnd: 5598,
  pne: 5599,
  png: 5600,
  pnh: 5601,
  pni: 5602,
  pnj: 5603,
  pnk: 5604,
  pnl: 5605,
  pnm: 5606,
  pnn: 5607,
  pno: 5608,
  pnp: 5609,
  pnq: 5610,
  pnr: 5611,
  pns: 5612,
  pnt: 5613,
  pnu: 5614,
  pnv: 5615,
  pnw: 5616,
  pnx: 5617,
  pny: 5618,
  pnz: 5619,
  poc: 5620,
  pod: 5621,
  poe: 5622,
  pof: 5623,
  pog: 5624,
  poh: 5625,
  poi: 5626,
  pok: 5627,
  pom: 5628,
  pon: 5629,
  poo: 5630,
  pop: 5631,
  poq: 5632,
  pos: 5633,
  pot: 5634,
  pov: 5635,
  pow: 5636,
  pox: 5637,
  poy: 5638,
  poz: 5639,
  ppa: 5640,
  ppe: 5641,
  ppi: 5642,
  ppk: 5643,
  ppl: 5644,
  ppm: 5645,
  ppn: 5646,
  ppo: 5647,
  ppp: 5648,
  ppq: 5649,
  ppr: 5650,
  pps: 5651,
  ppt: 5652,
  ppu: 5653,
  pqa: 5654,
  pqe: 5655,
  pqm: 5656,
  pqw: 5657,
  pra: 5658,
  prb: 5659,
  prc: 5660,
  prd: 5661,
  pre: 5662,
  prf: 5663,
  prg: 5664,
  prh: 5665,
  pri: 5666,
  prk: 5667,
  prl: 5668,
  prm: 5669,
  prn: 5670,
  pro: 5671,
  prp: 5672,
  prq: 5673,
  prr: 5674,
  prs: 5675,
  prt: 5676,
  pru: 5677,
  prw: 5678,
  prx: 5679,
  pry: 5680,
  prz: 5681,
  psa: 5682,
  psc: 5683,
  psd: 5684,
  pse: 5685,
  psg: 5686,
  psh: 5687,
  psi: 5688,
  psl: 5689,
  psm: 5690,
  psn: 5691,
  pso: 5692,
  psp: 5693,
  psq: 5694,
  psr: 5695,
  pss: 5696,
  pst: 5697,
  psu: 5698,
  psw: 5699,
  psy: 5700,
  pta: 5701,
  pth: 5702,
  pti: 5703,
  ptn: 5704,
  pto: 5705,
  ptp: 5706,
  ptq: 5707,
  ptr: 5708,
  ptt: 5709,
  ptu: 5710,
  ptv: 5711,
  ptw: 5712,
  pty: 5713,
  pua: 5714,
  pub: 5715,
  puc: 5716,
  pud: 5717,
  pue: 5718,
  puf: 5719,
  pug: 5720,
  pui: 5721,
  puj: 5722,
  puk: 5723,
  pum: 5724,
  puo: 5725,
  pup: 5726,
  puq: 5727,
  pur: 5728,
  put: 5729,
  puu: 5730,
  puw: 5731,
  pux: 5732,
  puy: 5733,
  puz: 5734,
  pwa: 5735,
  pwb: 5736,
  pwg: 5737,
  pwi: 5738,
  pwm: 5739,
  pwn: 5740,
  pwo: 5741,
  pwr: 5742,
  pww: 5743,
  pxm: 5744,
  pye: 5745,
  pym: 5746,
  pyn: 5747,
  pys: 5748,
  pyu: 5749,
  pyx: 5750,
  pyy: 5751,
  pzh: 5752,
  pzn: 5753,
  "qaa..qtz": 5754,
  qua: 5755,
  qub: 5756,
  quc: 5757,
  qud: 5758,
  quf: 5759,
  qug: 5760,
  quh: 5761,
  qui: 5762,
  quk: 5763,
  qul: 5764,
  qum: 5765,
  qun: 5766,
  qup: 5767,
  quq: 5768,
  qur: 5769,
  qus: 5770,
  quv: 5771,
  quw: 5772,
  qux: 5773,
  quy: 5774,
  quz: 5775,
  qva: 5776,
  qvc: 5777,
  qve: 5778,
  qvh: 5779,
  qvi: 5780,
  qvj: 5781,
  qvl: 5782,
  qvm: 5783,
  qvn: 5784,
  qvo: 5785,
  qvp: 5786,
  qvs: 5787,
  qvw: 5788,
  qvy: 5789,
  qvz: 5790,
  qwa: 5791,
  qwc: 5792,
  qwe: 5793,
  qwh: 5794,
  qwm: 5795,
  qws: 5796,
  qwt: 5797,
  qxa: 5798,
  qxc: 5799,
  qxh: 5800,
  qxl: 5801,
  qxn: 5802,
  qxo: 5803,
  qxp: 5804,
  qxq: 5805,
  qxr: 5806,
  qxs: 5807,
  qxt: 5808,
  qxu: 5809,
  qxw: 5810,
  qya: 5811,
  qyp: 5812,
  raa: 5813,
  rab: 5814,
  rac: 5815,
  rad: 5816,
  raf: 5817,
  rag: 5818,
  rah: 5819,
  rai: 5820,
  raj: 5821,
  rak: 5822,
  ral: 5823,
  ram: 5824,
  ran: 5825,
  rao: 5826,
  rap: 5827,
  raq: 5828,
  rar: 5829,
  ras: 5830,
  rat: 5831,
  rau: 5832,
  rav: 5833,
  raw: 5834,
  rax: 5835,
  ray: 5836,
  raz: 5837,
  rbb: 5838,
  rbk: 5839,
  rbl: 5840,
  rbp: 5841,
  rcf: 5842,
  rdb: 5843,
  rea: 5844,
  reb: 5845,
  ree: 5846,
  reg: 5847,
  rei: 5848,
  rej: 5849,
  rel: 5850,
  rem: 5851,
  ren: 5852,
  rer: 5853,
  res: 5854,
  ret: 5855,
  rey: 5856,
  rga: 5857,
  rge: 5858,
  rgk: 5859,
  rgn: 5860,
  rgr: 5861,
  rgs: 5862,
  rgu: 5863,
  rhg: 5864,
  rhp: 5865,
  ria: 5866,
  rib: 5867,
  rie: 5868,
  rif: 5869,
  ril: 5870,
  rim: 5871,
  rin: 5872,
  rir: 5873,
  rit: 5874,
  riu: 5875,
  rjg: 5876,
  rji: 5877,
  rjs: 5878,
  rka: 5879,
  rkb: 5880,
  rkh: 5881,
  rki: 5882,
  rkm: 5883,
  rkt: 5884,
  rkw: 5885,
  rma: 5886,
  rmb: 5887,
  rmc: 5888,
  rmd: 5889,
  rme: 5890,
  rmf: 5891,
  rmg: 5892,
  rmh: 5893,
  rmi: 5894,
  rmk: 5895,
  rml: 5896,
  rmm: 5897,
  rmn: 5898,
  rmo: 5899,
  rmp: 5900,
  rmq: 5901,
  rmr: 5902,
  rms: 5903,
  rmt: 5904,
  rmu: 5905,
  rmv: 5906,
  rmw: 5907,
  rmx: 5908,
  rmy: 5909,
  rmz: 5910,
  rna: 5911,
  rnb: 5912,
  rnd: 5913,
  rng: 5914,
  rnl: 5915,
  rnn: 5916,
  rnp: 5917,
  rnr: 5918,
  rnw: 5919,
  roa: 5920,
  rob: 5921,
  roc: 5922,
  rod: 5923,
  roe: 5924,
  rof: 5925,
  rog: 5926,
  rol: 5927,
  rom: 5928,
  roo: 5929,
  rop: 5930,
  ror: 5931,
  rou: 5932,
  row: 5933,
  rpn: 5934,
  rpt: 5935,
  rri: 5936,
  rro: 5937,
  rrt: 5938,
  rsb: 5939,
  rsi: 5940,
  rsk: 5941,
  rsl: 5942,
  rsm: 5943,
  rsn: 5944,
  rtc: 5945,
  rth: 5946,
  rtm: 5947,
  rts: 5948,
  rtw: 5949,
  rub: 5950,
  ruc: 5951,
  rue: 5952,
  ruf: 5953,
  rug: 5954,
  ruh: 5955,
  rui: 5956,
  ruk: 5957,
  ruo: 5958,
  rup: 5959,
  ruq: 5960,
  rut: 5961,
  ruu: 5962,
  ruy: 5963,
  ruz: 5964,
  rwa: 5965,
  rwk: 5966,
  rwl: 5967,
  rwm: 5968,
  rwo: 5969,
  rwr: 5970,
  rxd: 5971,
  rxw: 5972,
  ryn: 5973,
  rys: 5974,
  ryu: 5975,
  rzh: 5976,
  saa: 5977,
  sab: 5978,
  sac: 5979,
  sad: 5980,
  sae: 5981,
  saf: 5982,
  sah: 5983,
  sai: 5984,
  saj: 5985,
  sak: 5986,
  sal: 5987,
  sam: 5988,
  sao: 5989,
  sap: 5990,
  saq: 5991,
  sar: 5992,
  sas: 5993,
  sat: 5994,
  sau: 5995,
  sav: 5996,
  saw: 5997,
  sax: 5998,
  say: 5999,
  saz: 6e3,
  sba: 6001,
  sbb: 6002,
  sbc: 6003,
  sbd: 6004,
  sbe: 6005,
  sbf: 6006,
  sbg: 6007,
  sbh: 6008,
  sbi: 6009,
  sbj: 6010,
  sbk: 6011,
  sbl: 6012,
  sbm: 6013,
  sbn: 6014,
  sbo: 6015,
  sbp: 6016,
  sbq: 6017,
  sbr: 6018,
  sbs: 6019,
  sbt: 6020,
  sbu: 6021,
  sbv: 6022,
  sbw: 6023,
  sbx: 6024,
  sby: 6025,
  sbz: 6026,
  sca: 6027,
  scb: 6028,
  sce: 6029,
  scf: 6030,
  scg: 6031,
  sch: 6032,
  sci: 6033,
  sck: 6034,
  scl: 6035,
  scn: 6036,
  sco: 6037,
  scp: 6038,
  scq: 6039,
  scs: 6040,
  sct: 6041,
  scu: 6042,
  scv: 6043,
  scw: 6044,
  scx: 6045,
  sda: 6046,
  sdb: 6047,
  sdc: 6048,
  sde: 6049,
  sdf: 6050,
  sdg: 6051,
  sdh: 6052,
  sdj: 6053,
  sdk: 6054,
  sdl: 6055,
  sdm: 6056,
  sdn: 6057,
  sdo: 6058,
  sdp: 6059,
  sdq: 6060,
  sdr: 6061,
  sds: 6062,
  sdt: 6063,
  sdu: 6064,
  sdv: 6065,
  sdx: 6066,
  sdz: 6067,
  sea: 6068,
  seb: 6069,
  sec: 6070,
  sed: 6071,
  see: 6072,
  sef: 6073,
  seg: 6074,
  seh: 6075,
  sei: 6076,
  sej: 6077,
  sek: 6078,
  sel: 6079,
  sem: 6080,
  sen: 6081,
  seo: 6082,
  sep: 6083,
  seq: 6084,
  ser: 6085,
  ses: 6086,
  set: 6087,
  seu: 6088,
  sev: 6089,
  sew: 6090,
  sey: 6091,
  sez: 6092,
  sfb: 6093,
  sfe: 6094,
  sfm: 6095,
  sfs: 6096,
  sfw: 6097,
  sga: 6098,
  sgb: 6099,
  sgc: 6100,
  sgd: 6101,
  sge: 6102,
  sgg: 6103,
  sgh: 6104,
  sgi: 6105,
  sgj: 6106,
  sgk: 6107,
  sgl: 6108,
  sgm: 6109,
  sgn: 6110,
  sgo: 6111,
  sgp: 6112,
  sgr: 6113,
  sgs: 6114,
  sgt: 6115,
  sgu: 6116,
  sgw: 6117,
  sgx: 6118,
  sgy: 6119,
  sgz: 6120,
  sha: 6121,
  shb: 6122,
  shc: 6123,
  shd: 6124,
  she: 6125,
  shg: 6126,
  shh: 6127,
  shi: 6128,
  shj: 6129,
  shk: 6130,
  shl: 6131,
  shm: 6132,
  shn: 6133,
  sho: 6134,
  shp: 6135,
  shq: 6136,
  shr: 6137,
  shs: 6138,
  sht: 6139,
  shu: 6140,
  shv: 6141,
  shw: 6142,
  shx: 6143,
  shy: 6144,
  shz: 6145,
  sia: 6146,
  sib: 6147,
  sid: 6148,
  sie: 6149,
  sif: 6150,
  sig: 6151,
  sih: 6152,
  sii: 6153,
  sij: 6154,
  sik: 6155,
  sil: 6156,
  sim: 6157,
  sio: 6158,
  sip: 6159,
  siq: 6160,
  sir: 6161,
  sis: 6162,
  sit: 6163,
  siu: 6164,
  siv: 6165,
  siw: 6166,
  six: 6167,
  siy: 6168,
  siz: 6169,
  sja: 6170,
  sjb: 6171,
  sjd: 6172,
  sje: 6173,
  sjg: 6174,
  sjk: 6175,
  sjl: 6176,
  sjm: 6177,
  sjn: 6178,
  sjo: 6179,
  sjp: 6180,
  sjr: 6181,
  sjs: 6182,
  sjt: 6183,
  sju: 6184,
  sjw: 6185,
  ska: 6186,
  skb: 6187,
  skc: 6188,
  skd: 6189,
  ske: 6190,
  skf: 6191,
  skg: 6192,
  skh: 6193,
  ski: 6194,
  skj: 6195,
  skk: 6196,
  skm: 6197,
  skn: 6198,
  sko: 6199,
  skp: 6200,
  skq: 6201,
  skr: 6202,
  sks: 6203,
  skt: 6204,
  sku: 6205,
  skv: 6206,
  skw: 6207,
  skx: 6208,
  sky: 6209,
  skz: 6210,
  sla: 6211,
  slc: 6212,
  sld: 6213,
  sle: 6214,
  slf: 6215,
  slg: 6216,
  slh: 6217,
  sli: 6218,
  slj: 6219,
  sll: 6220,
  slm: 6221,
  sln: 6222,
  slp: 6223,
  slq: 6224,
  slr: 6225,
  sls: 6226,
  slt: 6227,
  slu: 6228,
  slw: 6229,
  slx: 6230,
  sly: 6231,
  slz: 6232,
  sma: 6233,
  smb: 6234,
  smc: 6235,
  smd: 6236,
  smf: 6237,
  smg: 6238,
  smh: 6239,
  smi: 6240,
  smj: 6241,
  smk: 6242,
  sml: 6243,
  smm: 6244,
  smn: 6245,
  smp: 6246,
  smq: 6247,
  smr: 6248,
  sms: 6249,
  smt: 6250,
  smu: 6251,
  smv: 6252,
  smw: 6253,
  smx: 6254,
  smy: 6255,
  smz: 6256,
  snb: 6257,
  snc: 6258,
  sne: 6259,
  snf: 6260,
  sng: 6261,
  snh: 6262,
  sni: 6263,
  snj: 6264,
  snk: 6265,
  snl: 6266,
  snm: 6267,
  snn: 6268,
  sno: 6269,
  snp: 6270,
  snq: 6271,
  snr: 6272,
  sns: 6273,
  snu: 6274,
  snv: 6275,
  snw: 6276,
  snx: 6277,
  sny: 6278,
  snz: 6279,
  soa: 6280,
  sob: 6281,
  soc: 6282,
  sod: 6283,
  soe: 6284,
  sog: 6285,
  soh: 6286,
  soi: 6287,
  soj: 6288,
  sok: 6289,
  sol: 6290,
  son: 6291,
  soo: 6292,
  sop: 6293,
  soq: 6294,
  sor: 6295,
  sos: 6296,
  sou: 6297,
  sov: 6298,
  sow: 6299,
  sox: 6300,
  soy: 6301,
  soz: 6302,
  spb: 6303,
  spc: 6304,
  spd: 6305,
  spe: 6306,
  spg: 6307,
  spi: 6308,
  spk: 6309,
  spl: 6310,
  spm: 6311,
  spn: 6312,
  spo: 6313,
  spp: 6314,
  spq: 6315,
  spr: 6316,
  sps: 6317,
  spt: 6318,
  spu: 6319,
  spv: 6320,
  spx: 6321,
  spy: 6322,
  sqa: 6323,
  sqh: 6324,
  sqj: 6325,
  sqk: 6326,
  sqm: 6327,
  sqn: 6328,
  sqo: 6329,
  sqq: 6330,
  sqr: 6331,
  sqs: 6332,
  sqt: 6333,
  squ: 6334,
  sqx: 6335,
  sra: 6336,
  srb: 6337,
  src: 6338,
  sre: 6339,
  srf: 6340,
  srg: 6341,
  srh: 6342,
  sri: 6343,
  srk: 6344,
  srl: 6345,
  srm: 6346,
  srn: 6347,
  sro: 6348,
  srq: 6349,
  srr: 6350,
  srs: 6351,
  srt: 6352,
  sru: 6353,
  srv: 6354,
  srw: 6355,
  srx: 6356,
  sry: 6357,
  srz: 6358,
  ssa: 6359,
  ssb: 6360,
  ssc: 6361,
  ssd: 6362,
  sse: 6363,
  ssf: 6364,
  ssg: 6365,
  ssh: 6366,
  ssi: 6367,
  ssj: 6368,
  ssk: 6369,
  ssl: 6370,
  ssm: 6371,
  ssn: 6372,
  sso: 6373,
  ssp: 6374,
  ssq: 6375,
  ssr: 6376,
  sss: 6377,
  sst: 6378,
  ssu: 6379,
  ssv: 6380,
  ssx: 6381,
  ssy: 6382,
  ssz: 6383,
  sta: 6384,
  stb: 6385,
  std: 6386,
  ste: 6387,
  stf: 6388,
  stg: 6389,
  sth: 6390,
  sti: 6391,
  stj: 6392,
  stk: 6393,
  stl: 6394,
  stm: 6395,
  stn: 6396,
  sto: 6397,
  stp: 6398,
  stq: 6399,
  str: 6400,
  sts: 6401,
  stt: 6402,
  stu: 6403,
  stv: 6404,
  stw: 6405,
  sty: 6406,
  sua: 6407,
  sub: 6408,
  suc: 6409,
  sue: 6410,
  sug: 6411,
  sui: 6412,
  suj: 6413,
  suk: 6414,
  sul: 6415,
  sum: 6416,
  suo: 6417,
  suq: 6418,
  sur: 6419,
  sus: 6420,
  sut: 6421,
  suv: 6422,
  suw: 6423,
  sux: 6424,
  suy: 6425,
  suz: 6426,
  sva: 6427,
  svb: 6428,
  svc: 6429,
  sve: 6430,
  svk: 6431,
  svm: 6432,
  svr: 6433,
  svs: 6434,
  svx: 6435,
  swb: 6436,
  swc: 6437,
  swf: 6438,
  swg: 6439,
  swh: 6440,
  swi: 6441,
  swj: 6442,
  swk: 6443,
  swl: 6444,
  swm: 6445,
  swn: 6446,
  swo: 6447,
  swp: 6448,
  swq: 6449,
  swr: 6450,
  sws: 6451,
  swt: 6452,
  swu: 6453,
  swv: 6454,
  sww: 6455,
  swx: 6456,
  swy: 6457,
  sxb: 6458,
  sxc: 6459,
  sxe: 6460,
  sxg: 6461,
  sxk: 6462,
  sxl: 6463,
  sxm: 6464,
  sxn: 6465,
  sxo: 6466,
  sxr: 6467,
  sxs: 6468,
  sxu: 6469,
  sxw: 6470,
  sya: 6471,
  syb: 6472,
  syc: 6473,
  syd: 6474,
  syi: 6475,
  syk: 6476,
  syl: 6477,
  sym: 6478,
  syn: 6479,
  syo: 6480,
  syr: 6481,
  sys: 6482,
  syw: 6483,
  syx: 6484,
  syy: 6485,
  sza: 6486,
  szb: 6487,
  szc: 6488,
  szd: 6489,
  sze: 6490,
  szg: 6491,
  szl: 6492,
  szn: 6493,
  szp: 6494,
  szs: 6495,
  szv: 6496,
  szw: 6497,
  szy: 6498,
  taa: 6499,
  tab: 6500,
  tac: 6501,
  tad: 6502,
  tae: 6503,
  taf: 6504,
  tag: 6505,
  tai: 6506,
  taj: 6507,
  tak: 6508,
  tal: 6509,
  tan: 6510,
  tao: 6511,
  tap: 6512,
  taq: 6513,
  tar: 6514,
  tas: 6515,
  tau: 6516,
  tav: 6517,
  taw: 6518,
  tax: 6519,
  tay: 6520,
  taz: 6521,
  tba: 6522,
  tbb: 6523,
  tbc: 6524,
  tbd: 6525,
  tbe: 6526,
  tbf: 6527,
  tbg: 6528,
  tbh: 6529,
  tbi: 6530,
  tbj: 6531,
  tbk: 6532,
  tbl: 6533,
  tbm: 6534,
  tbn: 6535,
  tbo: 6536,
  tbp: 6537,
  tbq: 6538,
  tbr: 6539,
  tbs: 6540,
  tbt: 6541,
  tbu: 6542,
  tbv: 6543,
  tbw: 6544,
  tbx: 6545,
  tby: 6546,
  tbz: 6547,
  tca: 6548,
  tcb: 6549,
  tcc: 6550,
  tcd: 6551,
  tce: 6552,
  tcf: 6553,
  tcg: 6554,
  tch: 6555,
  tci: 6556,
  tck: 6557,
  tcl: 6558,
  tcm: 6559,
  tcn: 6560,
  tco: 6561,
  tcp: 6562,
  tcq: 6563,
  tcs: 6564,
  tct: 6565,
  tcu: 6566,
  tcw: 6567,
  tcx: 6568,
  tcy: 6569,
  tcz: 6570,
  tda: 6571,
  tdb: 6572,
  tdc: 6573,
  tdd: 6574,
  tde: 6575,
  tdf: 6576,
  tdg: 6577,
  tdh: 6578,
  tdi: 6579,
  tdj: 6580,
  tdk: 6581,
  tdl: 6582,
  tdm: 6583,
  tdn: 6584,
  tdo: 6585,
  tdq: 6586,
  tdr: 6587,
  tds: 6588,
  tdt: 6589,
  tdu: 6590,
  tdv: 6591,
  tdx: 6592,
  tdy: 6593,
  tea: 6594,
  teb: 6595,
  tec: 6596,
  ted: 6597,
  tee: 6598,
  tef: 6599,
  teg: 6600,
  teh: 6601,
  tei: 6602,
  tek: 6603,
  tem: 6604,
  ten: 6605,
  teo: 6606,
  tep: 6607,
  teq: 6608,
  ter: 6609,
  tes: 6610,
  tet: 6611,
  teu: 6612,
  tev: 6613,
  tew: 6614,
  tex: 6615,
  tey: 6616,
  tez: 6617,
  tfi: 6618,
  tfn: 6619,
  tfo: 6620,
  tfr: 6621,
  tft: 6622,
  tga: 6623,
  tgb: 6624,
  tgc: 6625,
  tgd: 6626,
  tge: 6627,
  tgf: 6628,
  tgg: 6629,
  tgh: 6630,
  tgi: 6631,
  tgj: 6632,
  tgn: 6633,
  tgo: 6634,
  tgp: 6635,
  tgq: 6636,
  tgr: 6637,
  tgs: 6638,
  tgt: 6639,
  tgu: 6640,
  tgv: 6641,
  tgw: 6642,
  tgx: 6643,
  tgy: 6644,
  tgz: 6645,
  thc: 6646,
  thd: 6647,
  the: 6648,
  thf: 6649,
  thh: 6650,
  thi: 6651,
  thk: 6652,
  thl: 6653,
  thm: 6654,
  thn: 6655,
  thp: 6656,
  thq: 6657,
  thr: 6658,
  ths: 6659,
  tht: 6660,
  thu: 6661,
  thv: 6662,
  thw: 6663,
  thx: 6664,
  thy: 6665,
  thz: 6666,
  tia: 6667,
  tic: 6668,
  tid: 6669,
  tie: 6670,
  tif: 6671,
  tig: 6672,
  tih: 6673,
  tii: 6674,
  tij: 6675,
  tik: 6676,
  til: 6677,
  tim: 6678,
  tin: 6679,
  tio: 6680,
  tip: 6681,
  tiq: 6682,
  tis: 6683,
  tit: 6684,
  tiu: 6685,
  tiv: 6686,
  tiw: 6687,
  tix: 6688,
  tiy: 6689,
  tiz: 6690,
  tja: 6691,
  tjg: 6692,
  tji: 6693,
  tjj: 6694,
  tjl: 6695,
  tjm: 6696,
  tjn: 6697,
  tjo: 6698,
  tjp: 6699,
  tjs: 6700,
  tju: 6701,
  tjw: 6702,
  tka: 6703,
  tkb: 6704,
  tkd: 6705,
  tke: 6706,
  tkf: 6707,
  tkg: 6708,
  tkk: 6709,
  tkl: 6710,
  tkm: 6711,
  tkn: 6712,
  tkp: 6713,
  tkq: 6714,
  tkr: 6715,
  tks: 6716,
  tkt: 6717,
  tku: 6718,
  tkv: 6719,
  tkw: 6720,
  tkx: 6721,
  tkz: 6722,
  tla: 6723,
  tlb: 6724,
  tlc: 6725,
  tld: 6726,
  tlf: 6727,
  tlg: 6728,
  tlh: 6729,
  tli: 6730,
  tlj: 6731,
  tlk: 6732,
  tll: 6733,
  tlm: 6734,
  tln: 6735,
  tlo: 6736,
  tlp: 6737,
  tlq: 6738,
  tlr: 6739,
  tls: 6740,
  tlt: 6741,
  tlu: 6742,
  tlv: 6743,
  tlw: 6744,
  tlx: 6745,
  tly: 6746,
  tma: 6747,
  tmb: 6748,
  tmc: 6749,
  tmd: 6750,
  tme: 6751,
  tmf: 6752,
  tmg: 6753,
  tmh: 6754,
  tmi: 6755,
  tmj: 6756,
  tmk: 6757,
  tml: 6758,
  tmm: 6759,
  tmn: 6760,
  tmo: 6761,
  tmp: 6762,
  tmq: 6763,
  tmr: 6764,
  tms: 6765,
  tmt: 6766,
  tmu: 6767,
  tmv: 6768,
  tmw: 6769,
  tmy: 6770,
  tmz: 6771,
  tna: 6772,
  tnb: 6773,
  tnc: 6774,
  tnd: 6775,
  tne: 6776,
  tnf: 6777,
  tng: 6778,
  tnh: 6779,
  tni: 6780,
  tnk: 6781,
  tnl: 6782,
  tnm: 6783,
  tnn: 6784,
  tno: 6785,
  tnp: 6786,
  tnq: 6787,
  tnr: 6788,
  tns: 6789,
  tnt: 6790,
  tnu: 6791,
  tnv: 6792,
  tnw: 6793,
  tnx: 6794,
  tny: 6795,
  tnz: 6796,
  tob: 6797,
  toc: 6798,
  tod: 6799,
  toe: 6800,
  tof: 6801,
  tog: 6802,
  toh: 6803,
  toi: 6804,
  toj: 6805,
  tok: 6806,
  tol: 6807,
  tom: 6808,
  too: 6809,
  top: 6810,
  toq: 6811,
  tor: 6812,
  tos: 6813,
  tou: 6814,
  tov: 6815,
  tow: 6816,
  tox: 6817,
  toy: 6818,
  toz: 6819,
  tpa: 6820,
  tpc: 6821,
  tpe: 6822,
  tpf: 6823,
  tpg: 6824,
  tpi: 6825,
  tpj: 6826,
  tpk: 6827,
  tpl: 6828,
  tpm: 6829,
  tpn: 6830,
  tpo: 6831,
  tpp: 6832,
  tpq: 6833,
  tpr: 6834,
  tpt: 6835,
  tpu: 6836,
  tpv: 6837,
  tpw: 6838,
  tpx: 6839,
  tpy: 6840,
  tpz: 6841,
  tqb: 6842,
  tql: 6843,
  tqm: 6844,
  tqn: 6845,
  tqo: 6846,
  tqp: 6847,
  tqq: 6848,
  tqr: 6849,
  tqt: 6850,
  tqu: 6851,
  tqw: 6852,
  tra: 6853,
  trb: 6854,
  trc: 6855,
  trd: 6856,
  tre: 6857,
  trf: 6858,
  trg: 6859,
  trh: 6860,
  tri: 6861,
  trj: 6862,
  trk: 6863,
  trl: 6864,
  trm: 6865,
  trn: 6866,
  tro: 6867,
  trp: 6868,
  trq: 6869,
  trr: 6870,
  trs: 6871,
  trt: 6872,
  tru: 6873,
  trv: 6874,
  trw: 6875,
  trx: 6876,
  try: 6877,
  trz: 6878,
  tsa: 6879,
  tsb: 6880,
  tsc: 6881,
  tsd: 6882,
  tse: 6883,
  tsf: 6884,
  tsg: 6885,
  tsh: 6886,
  tsi: 6887,
  tsj: 6888,
  tsk: 6889,
  tsl: 6890,
  tsm: 6891,
  tsp: 6892,
  tsq: 6893,
  tsr: 6894,
  tss: 6895,
  tst: 6896,
  tsu: 6897,
  tsv: 6898,
  tsw: 6899,
  tsx: 6900,
  tsy: 6901,
  tsz: 6902,
  tta: 6903,
  ttb: 6904,
  ttc: 6905,
  ttd: 6906,
  tte: 6907,
  ttf: 6908,
  ttg: 6909,
  tth: 6910,
  tti: 6911,
  ttj: 6912,
  ttk: 6913,
  ttl: 6914,
  ttm: 6915,
  ttn: 6916,
  tto: 6917,
  ttp: 6918,
  ttq: 6919,
  ttr: 6920,
  tts: 6921,
  ttt: 6922,
  ttu: 6923,
  ttv: 6924,
  ttw: 6925,
  tty: 6926,
  ttz: 6927,
  tua: 6928,
  tub: 6929,
  tuc: 6930,
  tud: 6931,
  tue: 6932,
  tuf: 6933,
  tug: 6934,
  tuh: 6935,
  tui: 6936,
  tuj: 6937,
  tul: 6938,
  tum: 6939,
  tun: 6940,
  tuo: 6941,
  tup: 6942,
  tuq: 6943,
  tus: 6944,
  tut: 6945,
  tuu: 6946,
  tuv: 6947,
  tuw: 6948,
  tux: 6949,
  tuy: 6950,
  tuz: 6951,
  tva: 6952,
  tvd: 6953,
  tve: 6954,
  tvk: 6955,
  tvl: 6956,
  tvm: 6957,
  tvn: 6958,
  tvo: 6959,
  tvs: 6960,
  tvt: 6961,
  tvu: 6962,
  tvw: 6963,
  tvx: 6964,
  tvy: 6965,
  twa: 6966,
  twb: 6967,
  twc: 6968,
  twd: 6969,
  twe: 6970,
  twf: 6971,
  twg: 6972,
  twh: 6973,
  twl: 6974,
  twm: 6975,
  twn: 6976,
  two: 6977,
  twp: 6978,
  twq: 6979,
  twr: 6980,
  twt: 6981,
  twu: 6982,
  tww: 6983,
  twx: 6984,
  twy: 6985,
  txa: 6986,
  txb: 6987,
  txc: 6988,
  txe: 6989,
  txg: 6990,
  txh: 6991,
  txi: 6992,
  txj: 6993,
  txm: 6994,
  txn: 6995,
  txo: 6996,
  txq: 6997,
  txr: 6998,
  txs: 6999,
  txt: 7e3,
  txu: 7001,
  txx: 7002,
  txy: 7003,
  tya: 7004,
  tye: 7005,
  tyh: 7006,
  tyi: 7007,
  tyj: 7008,
  tyl: 7009,
  tyn: 7010,
  typ: 7011,
  tyr: 7012,
  tys: 7013,
  tyt: 7014,
  tyu: 7015,
  tyv: 7016,
  tyx: 7017,
  tyy: 7018,
  tyz: 7019,
  tza: 7020,
  tzh: 7021,
  tzj: 7022,
  tzl: 7023,
  tzm: 7024,
  tzn: 7025,
  tzo: 7026,
  tzx: 7027,
  uam: 7028,
  uan: 7029,
  uar: 7030,
  uba: 7031,
  ubi: 7032,
  ubl: 7033,
  ubr: 7034,
  ubu: 7035,
  uby: 7036,
  uda: 7037,
  ude: 7038,
  udg: 7039,
  udi: 7040,
  udj: 7041,
  udl: 7042,
  udm: 7043,
  udu: 7044,
  ues: 7045,
  ufi: 7046,
  uga: 7047,
  ugb: 7048,
  uge: 7049,
  ugh: 7050,
  ugn: 7051,
  ugo: 7052,
  ugy: 7053,
  uha: 7054,
  uhn: 7055,
  uis: 7056,
  uiv: 7057,
  uji: 7058,
  uka: 7059,
  ukg: 7060,
  ukh: 7061,
  uki: 7062,
  ukk: 7063,
  ukl: 7064,
  ukp: 7065,
  ukq: 7066,
  uks: 7067,
  uku: 7068,
  ukv: 7069,
  ukw: 7070,
  uky: 7071,
  ula: 7072,
  ulb: 7073,
  ulc: 7074,
  ule: 7075,
  ulf: 7076,
  uli: 7077,
  ulk: 7078,
  ull: 7079,
  ulm: 7080,
  uln: 7081,
  ulu: 7082,
  ulw: 7083,
  uma: 7084,
  umb: 7085,
  umc: 7086,
  umd: 7087,
  umg: 7088,
  umi: 7089,
  umm: 7090,
  umn: 7091,
  umo: 7092,
  ump: 7093,
  umr: 7094,
  ums: 7095,
  umu: 7096,
  una: 7097,
  und: 7098,
  une: 7099,
  ung: 7100,
  uni: 7101,
  unk: 7102,
  unm: 7103,
  unn: 7104,
  unp: 7105,
  unr: 7106,
  unu: 7107,
  unx: 7108,
  unz: 7109,
  uok: 7110,
  uon: 7111,
  upi: 7112,
  upv: 7113,
  ura: 7114,
  urb: 7115,
  urc: 7116,
  ure: 7117,
  urf: 7118,
  urg: 7119,
  urh: 7120,
  uri: 7121,
  urj: 7122,
  urk: 7123,
  url: 7124,
  urm: 7125,
  urn: 7126,
  uro: 7127,
  urp: 7128,
  urr: 7129,
  urt: 7130,
  uru: 7131,
  urv: 7132,
  urw: 7133,
  urx: 7134,
  ury: 7135,
  urz: 7136,
  usa: 7137,
  ush: 7138,
  usi: 7139,
  usk: 7140,
  usp: 7141,
  uss: 7142,
  usu: 7143,
  uta: 7144,
  ute: 7145,
  uth: 7146,
  utp: 7147,
  utr: 7148,
  utu: 7149,
  uum: 7150,
  uun: 7151,
  uur: 7152,
  uuu: 7153,
  uve: 7154,
  uvh: 7155,
  uvl: 7156,
  uwa: 7157,
  uya: 7158,
  uzn: 7159,
  uzs: 7160,
  vaa: 7161,
  vae: 7162,
  vaf: 7163,
  vag: 7164,
  vah: 7165,
  vai: 7166,
  vaj: 7167,
  val: 7168,
  vam: 7169,
  van: 7170,
  vao: 7171,
  vap: 7172,
  var: 7173,
  vas: 7174,
  vau: 7175,
  vav: 7176,
  vay: 7177,
  vbb: 7178,
  vbk: 7179,
  vec: 7180,
  ved: 7181,
  vel: 7182,
  vem: 7183,
  veo: 7184,
  vep: 7185,
  ver: 7186,
  vgr: 7187,
  vgt: 7188,
  vic: 7189,
  vid: 7190,
  vif: 7191,
  vig: 7192,
  vil: 7193,
  vin: 7194,
  vis: 7195,
  vit: 7196,
  viv: 7197,
  vka: 7198,
  vki: 7199,
  vkj: 7200,
  vkk: 7201,
  vkl: 7202,
  vkm: 7203,
  vkn: 7204,
  vko: 7205,
  vkp: 7206,
  vkt: 7207,
  vku: 7208,
  vkz: 7209,
  vlp: 7210,
  vls: 7211,
  vma: 7212,
  vmb: 7213,
  vmc: 7214,
  vmd: 7215,
  vme: 7216,
  vmf: 7217,
  vmg: 7218,
  vmh: 7219,
  vmi: 7220,
  vmj: 7221,
  vmk: 7222,
  vml: 7223,
  vmm: 7224,
  vmp: 7225,
  vmq: 7226,
  vmr: 7227,
  vms: 7228,
  vmu: 7229,
  vmv: 7230,
  vmw: 7231,
  vmx: 7232,
  vmy: 7233,
  vmz: 7234,
  vnk: 7235,
  vnm: 7236,
  vnp: 7237,
  vor: 7238,
  vot: 7239,
  vra: 7240,
  vro: 7241,
  vrs: 7242,
  vrt: 7243,
  vsi: 7244,
  vsl: 7245,
  vsv: 7246,
  vto: 7247,
  vum: 7248,
  vun: 7249,
  vut: 7250,
  vwa: 7251,
  waa: 7252,
  wab: 7253,
  wac: 7254,
  wad: 7255,
  wae: 7256,
  waf: 7257,
  wag: 7258,
  wah: 7259,
  wai: 7260,
  waj: 7261,
  wak: 7262,
  wal: 7263,
  wam: 7264,
  wan: 7265,
  wao: 7266,
  wap: 7267,
  waq: 7268,
  war: 7269,
  was: 7270,
  wat: 7271,
  wau: 7272,
  wav: 7273,
  waw: 7274,
  wax: 7275,
  way: 7276,
  waz: 7277,
  wba: 7278,
  wbb: 7279,
  wbe: 7280,
  wbf: 7281,
  wbh: 7282,
  wbi: 7283,
  wbj: 7284,
  wbk: 7285,
  wbl: 7286,
  wbm: 7287,
  wbp: 7288,
  wbq: 7289,
  wbr: 7290,
  wbs: 7291,
  wbt: 7292,
  wbv: 7293,
  wbw: 7294,
  wca: 7295,
  wci: 7296,
  wdd: 7297,
  wdg: 7298,
  wdj: 7299,
  wdk: 7300,
  wdt: 7301,
  wdu: 7302,
  wdy: 7303,
  wea: 7304,
  wec: 7305,
  wed: 7306,
  weg: 7307,
  weh: 7308,
  wei: 7309,
  wem: 7310,
  wen: 7311,
  weo: 7312,
  wep: 7313,
  wer: 7314,
  wes: 7315,
  wet: 7316,
  weu: 7317,
  wew: 7318,
  wfg: 7319,
  wga: 7320,
  wgb: 7321,
  wgg: 7322,
  wgi: 7323,
  wgo: 7324,
  wgu: 7325,
  wgw: 7326,
  wgy: 7327,
  wha: 7328,
  whg: 7329,
  whk: 7330,
  whu: 7331,
  wib: 7332,
  wic: 7333,
  wie: 7334,
  wif: 7335,
  wig: 7336,
  wih: 7337,
  wii: 7338,
  wij: 7339,
  wik: 7340,
  wil: 7341,
  wim: 7342,
  win: 7343,
  wir: 7344,
  wit: 7345,
  wiu: 7346,
  wiv: 7347,
  wiw: 7348,
  wiy: 7349,
  wja: 7350,
  wji: 7351,
  wka: 7352,
  wkb: 7353,
  wkd: 7354,
  wkl: 7355,
  wkr: 7356,
  wku: 7357,
  wkw: 7358,
  wky: 7359,
  wla: 7360,
  wlc: 7361,
  wle: 7362,
  wlg: 7363,
  wlh: 7364,
  wli: 7365,
  wlk: 7366,
  wll: 7367,
  wlm: 7368,
  wlo: 7369,
  wlr: 7370,
  wls: 7371,
  wlu: 7372,
  wlv: 7373,
  wlw: 7374,
  wlx: 7375,
  wly: 7376,
  wma: 7377,
  wmb: 7378,
  wmc: 7379,
  wmd: 7380,
  wme: 7381,
  wmg: 7382,
  wmh: 7383,
  wmi: 7384,
  wmm: 7385,
  wmn: 7386,
  wmo: 7387,
  wms: 7388,
  wmt: 7389,
  wmw: 7390,
  wmx: 7391,
  wnb: 7392,
  wnc: 7393,
  wnd: 7394,
  wne: 7395,
  wng: 7396,
  wni: 7397,
  wnk: 7398,
  wnm: 7399,
  wnn: 7400,
  wno: 7401,
  wnp: 7402,
  wnu: 7403,
  wnw: 7404,
  wny: 7405,
  woa: 7406,
  wob: 7407,
  woc: 7408,
  wod: 7409,
  woe: 7410,
  wof: 7411,
  wog: 7412,
  woi: 7413,
  wok: 7414,
  wom: 7415,
  won: 7416,
  woo: 7417,
  wor: 7418,
  wos: 7419,
  wow: 7420,
  woy: 7421,
  wpc: 7422,
  wra: 7423,
  wrb: 7424,
  wrd: 7425,
  wrg: 7426,
  wrh: 7427,
  wri: 7428,
  wrk: 7429,
  wrl: 7430,
  wrm: 7431,
  wrn: 7432,
  wro: 7433,
  wrp: 7434,
  wrr: 7435,
  wrs: 7436,
  wru: 7437,
  wrv: 7438,
  wrw: 7439,
  wrx: 7440,
  wry: 7441,
  wrz: 7442,
  wsa: 7443,
  wsg: 7444,
  wsi: 7445,
  wsk: 7446,
  wsr: 7447,
  wss: 7448,
  wsu: 7449,
  wsv: 7450,
  wtf: 7451,
  wth: 7452,
  wti: 7453,
  wtk: 7454,
  wtm: 7455,
  wtw: 7456,
  wua: 7457,
  wub: 7458,
  wud: 7459,
  wuh: 7460,
  wul: 7461,
  wum: 7462,
  wun: 7463,
  wur: 7464,
  wut: 7465,
  wuu: 7466,
  wuv: 7467,
  wux: 7468,
  wuy: 7469,
  wwa: 7470,
  wwb: 7471,
  wwo: 7472,
  wwr: 7473,
  www: 7474,
  wxa: 7475,
  wxw: 7476,
  wya: 7477,
  wyb: 7478,
  wyi: 7479,
  wym: 7480,
  wyn: 7481,
  wyr: 7482,
  wyy: 7483,
  xaa: 7484,
  xab: 7485,
  xac: 7486,
  xad: 7487,
  xae: 7488,
  xag: 7489,
  xai: 7490,
  xaj: 7491,
  xak: 7492,
  xal: 7493,
  xam: 7494,
  xan: 7495,
  xao: 7496,
  xap: 7497,
  xaq: 7498,
  xar: 7499,
  xas: 7500,
  xat: 7501,
  xau: 7502,
  xav: 7503,
  xaw: 7504,
  xay: 7505,
  xba: 7506,
  xbb: 7507,
  xbc: 7508,
  xbd: 7509,
  xbe: 7510,
  xbg: 7511,
  xbi: 7512,
  xbj: 7513,
  xbm: 7514,
  xbn: 7515,
  xbo: 7516,
  xbp: 7517,
  xbr: 7518,
  xbw: 7519,
  xbx: 7520,
  xby: 7521,
  xcb: 7522,
  xcc: 7523,
  xce: 7524,
  xcg: 7525,
  xch: 7526,
  xcl: 7527,
  xcm: 7528,
  xcn: 7529,
  xco: 7530,
  xcr: 7531,
  xct: 7532,
  xcu: 7533,
  xcv: 7534,
  xcw: 7535,
  xcy: 7536,
  xda: 7537,
  xdc: 7538,
  xdk: 7539,
  xdm: 7540,
  xdo: 7541,
  xdq: 7542,
  xdy: 7543,
  xeb: 7544,
  xed: 7545,
  xeg: 7546,
  xel: 7547,
  xem: 7548,
  xep: 7549,
  xer: 7550,
  xes: 7551,
  xet: 7552,
  xeu: 7553,
  xfa: 7554,
  xga: 7555,
  xgb: 7556,
  xgd: 7557,
  xgf: 7558,
  xgg: 7559,
  xgi: 7560,
  xgl: 7561,
  xgm: 7562,
  xgn: 7563,
  xgr: 7564,
  xgu: 7565,
  xgw: 7566,
  xha: 7567,
  xhc: 7568,
  xhd: 7569,
  xhe: 7570,
  xhm: 7571,
  xhr: 7572,
  xht: 7573,
  xhu: 7574,
  xhv: 7575,
  xia: 7576,
  xib: 7577,
  xii: 7578,
  xil: 7579,
  xin: 7580,
  xip: 7581,
  xir: 7582,
  xis: 7583,
  xiv: 7584,
  xiy: 7585,
  xjb: 7586,
  xjt: 7587,
  xka: 7588,
  xkb: 7589,
  xkc: 7590,
  xkd: 7591,
  xke: 7592,
  xkf: 7593,
  xkg: 7594,
  xkh: 7595,
  xki: 7596,
  xkj: 7597,
  xkk: 7598,
  xkl: 7599,
  xkn: 7600,
  xko: 7601,
  xkp: 7602,
  xkq: 7603,
  xkr: 7604,
  xks: 7605,
  xkt: 7606,
  xku: 7607,
  xkv: 7608,
  xkw: 7609,
  xkx: 7610,
  xky: 7611,
  xkz: 7612,
  xla: 7613,
  xlb: 7614,
  xlc: 7615,
  xld: 7616,
  xle: 7617,
  xlg: 7618,
  xli: 7619,
  xln: 7620,
  xlo: 7621,
  xlp: 7622,
  xls: 7623,
  xlu: 7624,
  xly: 7625,
  xma: 7626,
  xmb: 7627,
  xmc: 7628,
  xmd: 7629,
  xme: 7630,
  xmf: 7631,
  xmg: 7632,
  xmh: 7633,
  xmj: 7634,
  xmk: 7635,
  xml: 7636,
  xmm: 7637,
  xmn: 7638,
  xmo: 7639,
  xmp: 7640,
  xmq: 7641,
  xmr: 7642,
  xms: 7643,
  xmt: 7644,
  xmu: 7645,
  xmv: 7646,
  xmw: 7647,
  xmx: 7648,
  xmy: 7649,
  xmz: 7650,
  xna: 7651,
  xnb: 7652,
  xnd: 7653,
  xng: 7654,
  xnh: 7655,
  xni: 7656,
  xnj: 7657,
  xnk: 7658,
  xnm: 7659,
  xnn: 7660,
  xno: 7661,
  xnq: 7662,
  xnr: 7663,
  xns: 7664,
  xnt: 7665,
  xnu: 7666,
  xny: 7667,
  xnz: 7668,
  xoc: 7669,
  xod: 7670,
  xog: 7671,
  xoi: 7672,
  xok: 7673,
  xom: 7674,
  xon: 7675,
  xoo: 7676,
  xop: 7677,
  xor: 7678,
  xow: 7679,
  xpa: 7680,
  xpb: 7681,
  xpc: 7682,
  xpd: 7683,
  xpe: 7684,
  xpf: 7685,
  xpg: 7686,
  xph: 7687,
  xpi: 7688,
  xpj: 7689,
  xpk: 7690,
  xpl: 7691,
  xpm: 7692,
  xpn: 7693,
  xpo: 7694,
  xpp: 7695,
  xpq: 7696,
  xpr: 7697,
  xps: 7698,
  xpt: 7699,
  xpu: 7700,
  xpv: 7701,
  xpw: 7702,
  xpx: 7703,
  xpy: 7704,
  xpz: 7705,
  xqa: 7706,
  xqt: 7707,
  xra: 7708,
  xrb: 7709,
  xrd: 7710,
  xre: 7711,
  xrg: 7712,
  xri: 7713,
  xrm: 7714,
  xrn: 7715,
  xrq: 7716,
  xrr: 7717,
  xrt: 7718,
  xru: 7719,
  xrw: 7720,
  xsa: 7721,
  xsb: 7722,
  xsc: 7723,
  xsd: 7724,
  xse: 7725,
  xsh: 7726,
  xsi: 7727,
  xsj: 7728,
  xsl: 7729,
  xsm: 7730,
  xsn: 7731,
  xso: 7732,
  xsp: 7733,
  xsq: 7734,
  xsr: 7735,
  xss: 7736,
  xsu: 7737,
  xsv: 7738,
  xsy: 7739,
  xta: 7740,
  xtb: 7741,
  xtc: 7742,
  xtd: 7743,
  xte: 7744,
  xtg: 7745,
  xth: 7746,
  xti: 7747,
  xtj: 7748,
  xtl: 7749,
  xtm: 7750,
  xtn: 7751,
  xto: 7752,
  xtp: 7753,
  xtq: 7754,
  xtr: 7755,
  xts: 7756,
  xtt: 7757,
  xtu: 7758,
  xtv: 7759,
  xtw: 7760,
  xty: 7761,
  xtz: 7762,
  xua: 7763,
  xub: 7764,
  xud: 7765,
  xug: 7766,
  xuj: 7767,
  xul: 7768,
  xum: 7769,
  xun: 7770,
  xuo: 7771,
  xup: 7772,
  xur: 7773,
  xut: 7774,
  xuu: 7775,
  xve: 7776,
  xvi: 7777,
  xvn: 7778,
  xvo: 7779,
  xvs: 7780,
  xwa: 7781,
  xwc: 7782,
  xwd: 7783,
  xwe: 7784,
  xwg: 7785,
  xwj: 7786,
  xwk: 7787,
  xwl: 7788,
  xwo: 7789,
  xwr: 7790,
  xwt: 7791,
  xww: 7792,
  xxb: 7793,
  xxk: 7794,
  xxm: 7795,
  xxr: 7796,
  xxt: 7797,
  xya: 7798,
  xyb: 7799,
  xyj: 7800,
  xyk: 7801,
  xyl: 7802,
  xyt: 7803,
  xyy: 7804,
  xzh: 7805,
  xzm: 7806,
  xzp: 7807,
  yaa: 7808,
  yab: 7809,
  yac: 7810,
  yad: 7811,
  yae: 7812,
  yaf: 7813,
  yag: 7814,
  yah: 7815,
  yai: 7816,
  yaj: 7817,
  yak: 7818,
  yal: 7819,
  yam: 7820,
  yan: 7821,
  yao: 7822,
  yap: 7823,
  yaq: 7824,
  yar: 7825,
  yas: 7826,
  yat: 7827,
  yau: 7828,
  yav: 7829,
  yaw: 7830,
  yax: 7831,
  yay: 7832,
  yaz: 7833,
  yba: 7834,
  ybb: 7835,
  ybd: 7836,
  ybe: 7837,
  ybh: 7838,
  ybi: 7839,
  ybj: 7840,
  ybk: 7841,
  ybl: 7842,
  ybm: 7843,
  ybn: 7844,
  ybo: 7845,
  ybx: 7846,
  yby: 7847,
  ych: 7848,
  ycl: 7849,
  ycn: 7850,
  ycp: 7851,
  yda: 7852,
  ydd: 7853,
  yde: 7854,
  ydg: 7855,
  ydk: 7856,
  yds: 7857,
  yea: 7858,
  yec: 7859,
  yee: 7860,
  yei: 7861,
  yej: 7862,
  yel: 7863,
  yen: 7864,
  yer: 7865,
  yes: 7866,
  yet: 7867,
  yeu: 7868,
  yev: 7869,
  yey: 7870,
  yga: 7871,
  ygi: 7872,
  ygl: 7873,
  ygm: 7874,
  ygp: 7875,
  ygr: 7876,
  ygs: 7877,
  ygu: 7878,
  ygw: 7879,
  yha: 7880,
  yhd: 7881,
  yhl: 7882,
  yhs: 7883,
  yia: 7884,
  yif: 7885,
  yig: 7886,
  yih: 7887,
  yii: 7888,
  yij: 7889,
  yik: 7890,
  yil: 7891,
  yim: 7892,
  yin: 7893,
  yip: 7894,
  yiq: 7895,
  yir: 7896,
  yis: 7897,
  yit: 7898,
  yiu: 7899,
  yiv: 7900,
  yix: 7901,
  yiy: 7902,
  yiz: 7903,
  yka: 7904,
  ykg: 7905,
  yki: 7906,
  ykk: 7907,
  ykl: 7908,
  ykm: 7909,
  ykn: 7910,
  yko: 7911,
  ykr: 7912,
  ykt: 7913,
  yku: 7914,
  yky: 7915,
  yla: 7916,
  ylb: 7917,
  yle: 7918,
  ylg: 7919,
  yli: 7920,
  yll: 7921,
  ylm: 7922,
  yln: 7923,
  ylo: 7924,
  ylr: 7925,
  ylu: 7926,
  yly: 7927,
  yma: 7928,
  ymb: 7929,
  ymc: 7930,
  ymd: 7931,
  yme: 7932,
  ymg: 7933,
  ymh: 7934,
  ymi: 7935,
  ymk: 7936,
  yml: 7937,
  ymm: 7938,
  ymn: 7939,
  ymo: 7940,
  ymp: 7941,
  ymq: 7942,
  ymr: 7943,
  yms: 7944,
  ymt: 7945,
  ymx: 7946,
  ymz: 7947,
  yna: 7948,
  ynd: 7949,
  yne: 7950,
  yng: 7951,
  ynh: 7952,
  ynk: 7953,
  ynl: 7954,
  ynn: 7955,
  yno: 7956,
  ynq: 7957,
  yns: 7958,
  ynu: 7959,
  yob: 7960,
  yog: 7961,
  yoi: 7962,
  yok: 7963,
  yol: 7964,
  yom: 7965,
  yon: 7966,
  yos: 7967,
  yot: 7968,
  yox: 7969,
  yoy: 7970,
  ypa: 7971,
  ypb: 7972,
  ypg: 7973,
  yph: 7974,
  ypk: 7975,
  ypm: 7976,
  ypn: 7977,
  ypo: 7978,
  ypp: 7979,
  ypz: 7980,
  yra: 7981,
  yrb: 7982,
  yre: 7983,
  yri: 7984,
  yrk: 7985,
  yrl: 7986,
  yrm: 7987,
  yrn: 7988,
  yro: 7989,
  yrs: 7990,
  yrw: 7991,
  yry: 7992,
  ysc: 7993,
  ysd: 7994,
  ysg: 7995,
  ysl: 7996,
  ysm: 7997,
  ysn: 7998,
  yso: 7999,
  ysp: 8e3,
  ysr: 8001,
  yss: 8002,
  ysy: 8003,
  yta: 8004,
  ytl: 8005,
  ytp: 8006,
  ytw: 8007,
  yty: 8008,
  yua: 8009,
  yub: 8010,
  yuc: 8011,
  yud: 8012,
  yue: 8013,
  yuf: 8014,
  yug: 8015,
  yui: 8016,
  yuj: 8017,
  yuk: 8018,
  yul: 8019,
  yum: 8020,
  yun: 8021,
  yup: 8022,
  yuq: 8023,
  yur: 8024,
  yut: 8025,
  yuu: 8026,
  yuw: 8027,
  yux: 8028,
  yuy: 8029,
  yuz: 8030,
  yva: 8031,
  yvt: 8032,
  ywa: 8033,
  ywg: 8034,
  ywl: 8035,
  ywn: 8036,
  ywq: 8037,
  ywr: 8038,
  ywt: 8039,
  ywu: 8040,
  yww: 8041,
  yxa: 8042,
  yxg: 8043,
  yxl: 8044,
  yxm: 8045,
  yxu: 8046,
  yxy: 8047,
  yyr: 8048,
  yyu: 8049,
  yyz: 8050,
  yzg: 8051,
  yzk: 8052,
  zaa: 8053,
  zab: 8054,
  zac: 8055,
  zad: 8056,
  zae: 8057,
  zaf: 8058,
  zag: 8059,
  zah: 8060,
  zai: 8061,
  zaj: 8062,
  zak: 8063,
  zal: 8064,
  zam: 8065,
  zao: 8066,
  zap: 8067,
  zaq: 8068,
  zar: 8069,
  zas: 8070,
  zat: 8071,
  zau: 8072,
  zav: 8073,
  zaw: 8074,
  zax: 8075,
  zay: 8076,
  zaz: 8077,
  zba: 8078,
  zbc: 8079,
  zbe: 8080,
  zbl: 8081,
  zbt: 8082,
  zbu: 8083,
  zbw: 8084,
  zca: 8085,
  zcd: 8086,
  zch: 8087,
  zdj: 8088,
  zea: 8089,
  zeg: 8090,
  zeh: 8091,
  zen: 8092,
  zga: 8093,
  zgb: 8094,
  zgh: 8095,
  zgm: 8096,
  zgn: 8097,
  zgr: 8098,
  zhb: 8099,
  zhd: 8100,
  zhi: 8101,
  zhn: 8102,
  zhw: 8103,
  zhx: 8104,
  zia: 8105,
  zib: 8106,
  zik: 8107,
  zil: 8108,
  zim: 8109,
  zin: 8110,
  zir: 8111,
  ziw: 8112,
  ziz: 8113,
  zka: 8114,
  zkb: 8115,
  zkd: 8116,
  zkg: 8117,
  zkh: 8118,
  zkk: 8119,
  zkn: 8120,
  zko: 8121,
  zkp: 8122,
  zkr: 8123,
  zkt: 8124,
  zku: 8125,
  zkv: 8126,
  zkz: 8127,
  zla: 8128,
  zle: 8129,
  zlj: 8130,
  zlm: 8131,
  zln: 8132,
  zlq: 8133,
  zls: 8134,
  zlw: 8135,
  zma: 8136,
  zmb: 8137,
  zmc: 8138,
  zmd: 8139,
  zme: 8140,
  zmf: 8141,
  zmg: 8142,
  zmh: 8143,
  zmi: 8144,
  zmj: 8145,
  zmk: 8146,
  zml: 8147,
  zmm: 8148,
  zmn: 8149,
  zmo: 8150,
  zmp: 8151,
  zmq: 8152,
  zmr: 8153,
  zms: 8154,
  zmt: 8155,
  zmu: 8156,
  zmv: 8157,
  zmw: 8158,
  zmx: 8159,
  zmy: 8160,
  zmz: 8161,
  zna: 8162,
  znd: 8163,
  zne: 8164,
  zng: 8165,
  znk: 8166,
  zns: 8167,
  zoc: 8168,
  zoh: 8169,
  zom: 8170,
  zoo: 8171,
  zoq: 8172,
  zor: 8173,
  zos: 8174,
  zpa: 8175,
  zpb: 8176,
  zpc: 8177,
  zpd: 8178,
  zpe: 8179,
  zpf: 8180,
  zpg: 8181,
  zph: 8182,
  zpi: 8183,
  zpj: 8184,
  zpk: 8185,
  zpl: 8186,
  zpm: 8187,
  zpn: 8188,
  zpo: 8189,
  zpp: 8190,
  zpq: 8191,
  zpr: 8192,
  zps: 8193,
  zpt: 8194,
  zpu: 8195,
  zpv: 8196,
  zpw: 8197,
  zpx: 8198,
  zpy: 8199,
  zpz: 8200,
  zqe: 8201,
  zra: 8202,
  zrg: 8203,
  zrn: 8204,
  zro: 8205,
  zrp: 8206,
  zrs: 8207,
  zsa: 8208,
  zsk: 8209,
  zsl: 8210,
  zsm: 8211,
  zsr: 8212,
  zsu: 8213,
  zte: 8214,
  ztg: 8215,
  ztl: 8216,
  ztm: 8217,
  ztn: 8218,
  ztp: 8219,
  ztq: 8220,
  zts: 8221,
  ztt: 8222,
  ztu: 8223,
  ztx: 8224,
  zty: 8225,
  zua: 8226,
  zuh: 8227,
  zum: 8228,
  zun: 8229,
  zuy: 8230,
  zwa: 8231,
  zxx: 8232,
  zyb: 8233,
  zyg: 8234,
  zyj: 8235,
  zyn: 8236,
  zyp: 8237,
  zza: 8238,
  zzj: 8239
};
var I = {};
Object.defineProperty(I, "__esModule", {
  value: !0
});
I.default = {
  ak: 4,
  ar: 7,
  ay: 10,
  az: 11,
  cr: 26,
  et: 40,
  fa: 42,
  ff: 43,
  gn: 52,
  ik: 69,
  iu: 74,
  kg: 81,
  kr: 89,
  ku: 91,
  kv: 92,
  lv: 103,
  mg: 104,
  mn: 109,
  ms: 112,
  ne: 118,
  no: 122,
  oj: 127,
  om: 128,
  or: 129,
  ps: 134,
  qu: 136,
  sc: 143,
  sh: 147,
  sq: 154,
  sw: 160,
  uz: 178,
  yi: 185,
  za: 187,
  zh: 188,
  bal: 721,
  bik: 919,
  bnc: 1038,
  bua: 1209,
  chm: 1460,
  del: 1764,
  den: 1766,
  din: 1818,
  doi: 1897,
  gba: 2248,
  gon: 2446,
  grb: 2468,
  hai: 2579,
  hmn: 2658,
  jrb: 3046,
  kln: 3360,
  kok: 3433,
  kpe: 3450,
  lah: 3734,
  luy: 4048,
  man: 4084,
  mwr: 4634,
  raj: 5821,
  rom: 5928,
  syr: 6481,
  tmh: 6754,
  zap: 8067,
  zza: 8238
};
var E = {};
Object.defineProperty(E, "__esModule", {
  value: !0
});
E.default = {
  "File-Date": "2022-06-28"
};
var V = {};
Object.defineProperty(V, "__esModule", {
  value: !0
});
V.default = {
  "qaa..qtz": 5754
};
var H = {};
Object.defineProperty(H, "__esModule", {
  value: !0
});
H.default = {
  "az-arab": 9143,
  "az-cyrl": 9144,
  "az-latn": 9145,
  "be-latn": 9146,
  "bs-cyrl": 9147,
  "bs-latn": 9148,
  "de-1901": 9149,
  "de-1996": 9150,
  "de-at-1901": 9151,
  "de-at-1996": 9152,
  "de-ch-1901": 9153,
  "de-ch-1996": 9154,
  "de-de-1901": 9155,
  "de-de-1996": 9156,
  "en-boont": 9157,
  "en-scouse": 9158,
  "es-419": 9159,
  "iu-cans": 9160,
  "iu-latn": 9161,
  "mn-cyrl": 9162,
  "mn-mong": 9163,
  "sgn-br": 9164,
  "sgn-co": 9165,
  "sgn-de": 9166,
  "sgn-dk": 9167,
  "sgn-es": 9168,
  "sgn-fr": 9169,
  "sgn-gb": 9170,
  "sgn-gr": 9171,
  "sgn-ie": 9172,
  "sgn-it": 9173,
  "sgn-jp": 9174,
  "sgn-mx": 9175,
  "sgn-ni": 9176,
  "sgn-nl": 9177,
  "sgn-no": 9178,
  "sgn-pt": 9179,
  "sgn-se": 9180,
  "sgn-us": 9181,
  "sgn-za": 9182,
  "sl-nedis": 9183,
  "sl-rozaj": 9184,
  "sr-cyrl": 9185,
  "sr-latn": 9186,
  "tg-arab": 9187,
  "tg-cyrl": 9188,
  "uz-cyrl": 9189,
  "uz-latn": 9190,
  "yi-latn": 9191,
  "zh-cmn": 9192,
  "zh-cmn-hans": 9193,
  "zh-cmn-hant": 9194,
  "zh-gan": 9195,
  "zh-hans": 9196,
  "zh-hans-cn": 9197,
  "zh-hans-hk": 9198,
  "zh-hans-mo": 9199,
  "zh-hans-sg": 9200,
  "zh-hans-tw": 9201,
  "zh-hant": 9202,
  "zh-hant-cn": 9203,
  "zh-hant-hk": 9204,
  "zh-hant-mo": 9205,
  "zh-hant-sg": 9206,
  "zh-hant-tw": 9207,
  "zh-wuu": 9208,
  "zh-yue": 9209
};
var O = {};
Object.defineProperty(O, "__esModule", {
  value: !0
});
O.default = {
  142: 8999,
  143: 9e3,
  145: 9001,
  150: 9002,
  151: 9003,
  154: 9004,
  155: 9005,
  202: 9006,
  419: 9007,
  aa: 8704,
  ac: 8705,
  ad: 8706,
  ae: 8707,
  af: 8708,
  ag: 8709,
  ai: 8710,
  al: 8711,
  am: 8712,
  an: 8713,
  ao: 8714,
  aq: 8715,
  ar: 8716,
  as: 8717,
  at: 8718,
  au: 8719,
  aw: 8720,
  ax: 8721,
  az: 8722,
  ba: 8723,
  bb: 8724,
  bd: 8725,
  be: 8726,
  bf: 8727,
  bg: 8728,
  bh: 8729,
  bi: 8730,
  bj: 8731,
  bl: 8732,
  bm: 8733,
  bn: 8734,
  bo: 8735,
  bq: 8736,
  br: 8737,
  bs: 8738,
  bt: 8739,
  bu: 8740,
  bv: 8741,
  bw: 8742,
  by: 8743,
  bz: 8744,
  ca: 8745,
  cc: 8746,
  cd: 8747,
  cf: 8748,
  cg: 8749,
  ch: 8750,
  ci: 8751,
  ck: 8752,
  cl: 8753,
  cm: 8754,
  cn: 8755,
  co: 8756,
  cp: 8757,
  cr: 8758,
  cs: 8759,
  cu: 8760,
  cv: 8761,
  cw: 8762,
  cx: 8763,
  cy: 8764,
  cz: 8765,
  dd: 8766,
  de: 8767,
  dg: 8768,
  dj: 8769,
  dk: 8770,
  dm: 8771,
  do: 8772,
  dz: 8773,
  ea: 8774,
  ec: 8775,
  ee: 8776,
  eg: 8777,
  eh: 8778,
  er: 8779,
  es: 8780,
  et: 8781,
  eu: 8782,
  ez: 8783,
  fi: 8784,
  fj: 8785,
  fk: 8786,
  fm: 8787,
  fo: 8788,
  fr: 8789,
  fx: 8790,
  ga: 8791,
  gb: 8792,
  gd: 8793,
  ge: 8794,
  gf: 8795,
  gg: 8796,
  gh: 8797,
  gi: 8798,
  gl: 8799,
  gm: 8800,
  gn: 8801,
  gp: 8802,
  gq: 8803,
  gr: 8804,
  gs: 8805,
  gt: 8806,
  gu: 8807,
  gw: 8808,
  gy: 8809,
  hk: 8810,
  hm: 8811,
  hn: 8812,
  hr: 8813,
  ht: 8814,
  hu: 8815,
  ic: 8816,
  id: 8817,
  ie: 8818,
  il: 8819,
  im: 8820,
  in: 8821,
  io: 8822,
  iq: 8823,
  ir: 8824,
  is: 8825,
  it: 8826,
  je: 8827,
  jm: 8828,
  jo: 8829,
  jp: 8830,
  ke: 8831,
  kg: 8832,
  kh: 8833,
  ki: 8834,
  km: 8835,
  kn: 8836,
  kp: 8837,
  kr: 8838,
  kw: 8839,
  ky: 8840,
  kz: 8841,
  la: 8842,
  lb: 8843,
  lc: 8844,
  li: 8845,
  lk: 8846,
  lr: 8847,
  ls: 8848,
  lt: 8849,
  lu: 8850,
  lv: 8851,
  ly: 8852,
  ma: 8853,
  mc: 8854,
  md: 8855,
  me: 8856,
  mf: 8857,
  mg: 8858,
  mh: 8859,
  mk: 8860,
  ml: 8861,
  mm: 8862,
  mn: 8863,
  mo: 8864,
  mp: 8865,
  mq: 8866,
  mr: 8867,
  ms: 8868,
  mt: 8869,
  mu: 8870,
  mv: 8871,
  mw: 8872,
  mx: 8873,
  my: 8874,
  mz: 8875,
  na: 8876,
  nc: 8877,
  ne: 8878,
  nf: 8879,
  ng: 8880,
  ni: 8881,
  nl: 8882,
  no: 8883,
  np: 8884,
  nr: 8885,
  nt: 8886,
  nu: 8887,
  nz: 8888,
  om: 8889,
  pa: 8890,
  pe: 8891,
  pf: 8892,
  pg: 8893,
  ph: 8894,
  pk: 8895,
  pl: 8896,
  pm: 8897,
  pn: 8898,
  pr: 8899,
  ps: 8900,
  pt: 8901,
  pw: 8902,
  py: 8903,
  qa: 8904,
  "qm..qz": 8905,
  re: 8906,
  ro: 8907,
  rs: 8908,
  ru: 8909,
  rw: 8910,
  sa: 8911,
  sb: 8912,
  sc: 8913,
  sd: 8914,
  se: 8915,
  sg: 8916,
  sh: 8917,
  si: 8918,
  sj: 8919,
  sk: 8920,
  sl: 8921,
  sm: 8922,
  sn: 8923,
  so: 8924,
  sr: 8925,
  ss: 8926,
  st: 8927,
  su: 8928,
  sv: 8929,
  sx: 8930,
  sy: 8931,
  sz: 8932,
  ta: 8933,
  tc: 8934,
  td: 8935,
  tf: 8936,
  tg: 8937,
  th: 8938,
  tj: 8939,
  tk: 8940,
  tl: 8941,
  tm: 8942,
  tn: 8943,
  to: 8944,
  tp: 8945,
  tr: 8946,
  tt: 8947,
  tv: 8948,
  tw: 8949,
  tz: 8950,
  ua: 8951,
  ug: 8952,
  um: 8953,
  un: 8954,
  us: 8955,
  uy: 8956,
  uz: 8957,
  va: 8958,
  vc: 8959,
  ve: 8960,
  vg: 8961,
  vi: 8962,
  vn: 8963,
  vu: 8964,
  wf: 8965,
  ws: 8966,
  "xa..xz": 8967,
  yd: 8968,
  ye: 8969,
  yt: 8970,
  yu: 8971,
  za: 8972,
  zm: 8973,
  zr: 8974,
  zw: 8975,
  zz: 8976,
  "001": 8977,
  "002": 8978,
  "003": 8979,
  "005": 8980,
  "009": 8981,
  "011": 8982,
  "013": 8983,
  "014": 8984,
  "015": 8985,
  "017": 8986,
  "018": 8987,
  "019": 8988,
  "021": 8989,
  "029": 8990,
  "030": 8991,
  "034": 8992,
  "035": 8993,
  "039": 8994,
  "053": 8995,
  "054": 8996,
  "057": 8997,
  "061": 8998
};
var W = {};
Object.defineProperty(W, "__esModule", {
  value: !0
});
W.default = [{
  Type: "language",
  Subtag: "aa",
  Description: ["Afar"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ab",
  Description: ["Abkhazian"],
  Added: "2005-10-16",
  "Suppress-Script": "Cyrl"
}, {
  Type: "language",
  Subtag: "ae",
  Description: ["Avestan"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "af",
  Description: ["Afrikaans"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "ak",
  Description: ["Akan"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "am",
  Description: ["Amharic"],
  Added: "2005-10-16",
  "Suppress-Script": "Ethi"
}, {
  Type: "language",
  Subtag: "an",
  Description: ["Aragonese"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ar",
  Description: ["Arabic"],
  Added: "2005-10-16",
  "Suppress-Script": "Arab",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "as",
  Description: ["Assamese"],
  Added: "2005-10-16",
  "Suppress-Script": "Beng"
}, {
  Type: "language",
  Subtag: "av",
  Description: ["Avaric"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ay",
  Description: ["Aymara"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "az",
  Description: ["Azerbaijani"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "ba",
  Description: ["Bashkir"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "be",
  Description: ["Belarusian"],
  Added: "2005-10-16",
  "Suppress-Script": "Cyrl"
}, {
  Type: "language",
  Subtag: "bg",
  Description: ["Bulgarian"],
  Added: "2005-10-16",
  "Suppress-Script": "Cyrl"
}, {
  Type: "language",
  Subtag: "bh",
  Description: ["Bihari languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "bi",
  Description: ["Bislama"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "bm",
  Description: ["Bambara"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "bn",
  Description: ["Bengali", "Bangla"],
  Added: "2005-10-16",
  "Suppress-Script": "Beng"
}, {
  Type: "language",
  Subtag: "bo",
  Description: ["Tibetan"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "br",
  Description: ["Breton"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "bs",
  Description: ["Bosnian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Macrolanguage: "sh"
}, {
  Type: "language",
  Subtag: "ca",
  Description: ["Catalan", "Valencian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "ce",
  Description: ["Chechen"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ch",
  Description: ["Chamorro"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "co",
  Description: ["Corsican"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "cr",
  Description: ["Cree"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "cs",
  Description: ["Czech"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "cu",
  Description: ["Church Slavic", "Church Slavonic", "Old Bulgarian", "Old Church Slavonic", "Old Slavonic"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "cv",
  Description: ["Chuvash"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "cy",
  Description: ["Welsh"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "da",
  Description: ["Danish"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "de",
  Description: ["German"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "dv",
  Description: ["Dhivehi", "Divehi", "Maldivian"],
  Added: "2005-10-16",
  "Suppress-Script": "Thaa"
}, {
  Type: "language",
  Subtag: "dz",
  Description: ["Dzongkha"],
  Added: "2005-10-16",
  "Suppress-Script": "Tibt"
}, {
  Type: "language",
  Subtag: "ee",
  Description: ["Ewe"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "el",
  Description: ["Modern Greek (1453-)"],
  Added: "2005-10-16",
  "Suppress-Script": "Grek"
}, {
  Type: "language",
  Subtag: "en",
  Description: ["English"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "eo",
  Description: ["Esperanto"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "es",
  Description: ["Spanish", "Castilian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "et",
  Description: ["Estonian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "eu",
  Description: ["Basque"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "fa",
  Description: ["Persian"],
  Added: "2005-10-16",
  "Suppress-Script": "Arab",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "ff",
  Description: ["Fulah"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "fi",
  Description: ["Finnish"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "fj",
  Description: ["Fijian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "fo",
  Description: ["Faroese"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "fr",
  Description: ["French"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "fy",
  Description: ["Western Frisian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "ga",
  Description: ["Irish"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "gd",
  Description: ["Scottish Gaelic", "Gaelic"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "gl",
  Description: ["Galician"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "gn",
  Description: ["Guarani"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "gu",
  Description: ["Gujarati"],
  Added: "2005-10-16",
  "Suppress-Script": "Gujr"
}, {
  Type: "language",
  Subtag: "gv",
  Description: ["Manx"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "ha",
  Description: ["Hausa"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "he",
  Description: ["Hebrew"],
  Added: "2005-10-16",
  "Suppress-Script": "Hebr"
}, {
  Type: "language",
  Subtag: "hi",
  Description: ["Hindi"],
  Added: "2005-10-16",
  "Suppress-Script": "Deva"
}, {
  Type: "language",
  Subtag: "ho",
  Description: ["Hiri Motu"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "hr",
  Description: ["Croatian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Macrolanguage: "sh"
}, {
  Type: "language",
  Subtag: "ht",
  Description: ["Haitian", "Haitian Creole"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "hu",
  Description: ["Hungarian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "hy",
  Description: ["Armenian"],
  Added: "2005-10-16",
  "Suppress-Script": "Armn",
  Comments: ["see also hyw"]
}, {
  Type: "language",
  Subtag: "hz",
  Description: ["Herero"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ia",
  Description: ["Interlingua (International Auxiliary Language Association)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "id",
  Description: ["Indonesian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "ie",
  Description: ["Interlingue", "Occidental"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ig",
  Description: ["Igbo"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ii",
  Description: ["Sichuan Yi", "Nuosu"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ik",
  Description: ["Inupiaq"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "in",
  Description: ["Indonesian"],
  Added: "2005-10-16",
  Deprecated: "1989-01-01",
  "Preferred-Value": "id",
  "Suppress-Script": "Latn",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "io",
  Description: ["Ido"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "is",
  Description: ["Icelandic"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "it",
  Description: ["Italian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "iu",
  Description: ["Inuktitut"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "iw",
  Description: ["Hebrew"],
  Added: "2005-10-16",
  Deprecated: "1989-01-01",
  "Preferred-Value": "he",
  "Suppress-Script": "Hebr"
}, {
  Type: "language",
  Subtag: "ja",
  Description: ["Japanese"],
  Added: "2005-10-16",
  "Suppress-Script": "Jpan"
}, {
  Type: "language",
  Subtag: "ji",
  Description: ["Yiddish"],
  Added: "2005-10-16",
  Deprecated: "1989-01-01",
  "Preferred-Value": "yi"
}, {
  Type: "language",
  Subtag: "jv",
  Description: ["Javanese"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "jw",
  Description: ["Javanese"],
  Added: "2005-10-16",
  Deprecated: "2001-08-13",
  "Preferred-Value": "jv",
  Comments: ["published by error in Table 1 of ISO 639:1988"]
}, {
  Type: "language",
  Subtag: "ka",
  Description: ["Georgian"],
  Added: "2005-10-16",
  "Suppress-Script": "Geor"
}, {
  Type: "language",
  Subtag: "kg",
  Description: ["Kongo"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "ki",
  Description: ["Kikuyu", "Gikuyu"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kj",
  Description: ["Kuanyama", "Kwanyama"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kk",
  Description: ["Kazakh"],
  Added: "2005-10-16",
  "Suppress-Script": "Cyrl"
}, {
  Type: "language",
  Subtag: "kl",
  Description: ["Kalaallisut", "Greenlandic"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "km",
  Description: ["Khmer", "Central Khmer"],
  Added: "2005-10-16",
  "Suppress-Script": "Khmr"
}, {
  Type: "language",
  Subtag: "kn",
  Description: ["Kannada"],
  Added: "2005-10-16",
  "Suppress-Script": "Knda"
}, {
  Type: "language",
  Subtag: "ko",
  Description: ["Korean"],
  Added: "2005-10-16",
  "Suppress-Script": "Kore"
}, {
  Type: "language",
  Subtag: "kr",
  Description: ["Kanuri"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "ks",
  Description: ["Kashmiri"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ku",
  Description: ["Kurdish"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "kv",
  Description: ["Komi"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "kw",
  Description: ["Cornish"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ky",
  Description: ["Kirghiz", "Kyrgyz"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "la",
  Description: ["Latin"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "lb",
  Description: ["Luxembourgish", "Letzeburgesch"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "lg",
  Description: ["Ganda", "Luganda"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "li",
  Description: ["Limburgan", "Limburger", "Limburgish"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ln",
  Description: ["Lingala"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "lo",
  Description: ["Lao"],
  Added: "2005-10-16",
  "Suppress-Script": "Laoo"
}, {
  Type: "language",
  Subtag: "lt",
  Description: ["Lithuanian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "lu",
  Description: ["Luba-Katanga"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "lv",
  Description: ["Latvian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "mg",
  Description: ["Malagasy"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "mh",
  Description: ["Marshallese"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "mi",
  Description: ["Maori"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "mk",
  Description: ["Macedonian"],
  Added: "2005-10-16",
  "Suppress-Script": "Cyrl"
}, {
  Type: "language",
  Subtag: "ml",
  Description: ["Malayalam"],
  Added: "2005-10-16",
  "Suppress-Script": "Mlym"
}, {
  Type: "language",
  Subtag: "mn",
  Description: ["Mongolian"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "mo",
  Description: ["Moldavian", "Moldovan"],
  Added: "2005-10-16",
  Deprecated: "2008-11-22",
  "Preferred-Value": "ro",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "mr",
  Description: ["Marathi"],
  Added: "2005-10-16",
  "Suppress-Script": "Deva"
}, {
  Type: "language",
  Subtag: "ms",
  Description: ["Malay (macrolanguage)"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "mt",
  Description: ["Maltese"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "my",
  Description: ["Burmese"],
  Added: "2005-10-16",
  "Suppress-Script": "Mymr"
}, {
  Type: "language",
  Subtag: "na",
  Description: ["Nauru"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "nb",
  Description: ["Norwegian Bokmål"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Macrolanguage: "no"
}, {
  Type: "language",
  Subtag: "nd",
  Description: ["North Ndebele"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "ne",
  Description: ["Nepali (macrolanguage)"],
  Added: "2005-10-16",
  "Suppress-Script": "Deva",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "ng",
  Description: ["Ndonga"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "nl",
  Description: ["Dutch", "Flemish"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "nn",
  Description: ["Norwegian Nynorsk"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Macrolanguage: "no"
}, {
  Type: "language",
  Subtag: "no",
  Description: ["Norwegian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "nr",
  Description: ["South Ndebele"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "nv",
  Description: ["Navajo", "Navaho"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ny",
  Description: ["Nyanja", "Chewa", "Chichewa"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "oc",
  Description: ["Occitan (post 1500)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "oj",
  Description: ["Ojibwa"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "om",
  Description: ["Oromo"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "or",
  Description: ["Oriya (macrolanguage)", "Odia (macrolanguage)"],
  Added: "2005-10-16",
  "Suppress-Script": "Orya",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "os",
  Description: ["Ossetian", "Ossetic"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "pa",
  Description: ["Panjabi", "Punjabi"],
  Added: "2005-10-16",
  "Suppress-Script": "Guru"
}, {
  Type: "language",
  Subtag: "pi",
  Description: ["Pali"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "pl",
  Description: ["Polish"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "ps",
  Description: ["Pushto", "Pashto"],
  Added: "2005-10-16",
  "Suppress-Script": "Arab",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "pt",
  Description: ["Portuguese"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "qu",
  Description: ["Quechua"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "rm",
  Description: ["Romansh"],
  "Suppress-Script": "Latn",
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "rn",
  Description: ["Rundi"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "ro",
  Description: ["Romanian", "Moldavian", "Moldovan"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "ru",
  Description: ["Russian"],
  Added: "2005-10-16",
  "Suppress-Script": "Cyrl"
}, {
  Type: "language",
  Subtag: "rw",
  Description: ["Kinyarwanda"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "sa",
  Description: ["Sanskrit"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "sc",
  Description: ["Sardinian"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "sd",
  Description: ["Sindhi"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "se",
  Description: ["Northern Sami"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "sg",
  Description: ["Sango"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "sh",
  Description: ["Serbo-Croatian"],
  Added: "2005-10-16",
  Scope: "macrolanguage",
  Comments: ["sr, hr, bs are preferred for most modern uses"]
}, {
  Type: "language",
  Subtag: "si",
  Description: ["Sinhala", "Sinhalese"],
  Added: "2005-10-16",
  "Suppress-Script": "Sinh"
}, {
  Type: "language",
  Subtag: "sk",
  Description: ["Slovak"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "sl",
  Description: ["Slovenian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "sm",
  Description: ["Samoan"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "sn",
  Description: ["Shona"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "so",
  Description: ["Somali"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "sq",
  Description: ["Albanian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "sr",
  Description: ["Serbian"],
  Added: "2005-10-16",
  Macrolanguage: "sh",
  Comments: ["see cnr for Montenegrin"]
}, {
  Type: "language",
  Subtag: "ss",
  Description: ["Swati"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "st",
  Description: ["Southern Sotho"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "su",
  Description: ["Sundanese"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "sv",
  Description: ["Swedish"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "sw",
  Description: ["Swahili (macrolanguage)"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "ta",
  Description: ["Tamil"],
  Added: "2005-10-16",
  "Suppress-Script": "Taml"
}, {
  Type: "language",
  Subtag: "te",
  Description: ["Telugu"],
  Added: "2005-10-16",
  "Suppress-Script": "Telu"
}, {
  Type: "language",
  Subtag: "tg",
  Description: ["Tajik"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "th",
  Description: ["Thai"],
  Added: "2005-10-16",
  "Suppress-Script": "Thai"
}, {
  Type: "language",
  Subtag: "ti",
  Description: ["Tigrinya"],
  Added: "2005-10-16",
  "Suppress-Script": "Ethi"
}, {
  Type: "language",
  Subtag: "tk",
  Description: ["Turkmen"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "tl",
  Description: ["Tagalog"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "tn",
  Description: ["Tswana"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "to",
  Description: ["Tonga (Tonga Islands)"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "tr",
  Description: ["Turkish"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "ts",
  Description: ["Tsonga"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "tt",
  Description: ["Tatar"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "tw",
  Description: ["Twi"],
  Added: "2005-10-16",
  Macrolanguage: "ak"
}, {
  Type: "language",
  Subtag: "ty",
  Description: ["Tahitian"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ug",
  Description: ["Uighur", "Uyghur"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "uk",
  Description: ["Ukrainian"],
  Added: "2005-10-16",
  "Suppress-Script": "Cyrl"
}, {
  Type: "language",
  Subtag: "ur",
  Description: ["Urdu"],
  Added: "2005-10-16",
  "Suppress-Script": "Arab"
}, {
  Type: "language",
  Subtag: "uz",
  Description: ["Uzbek"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "ve",
  Description: ["Venda"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "vi",
  Description: ["Vietnamese"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "vo",
  Description: ["Volapük"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "wa",
  Description: ["Walloon"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "wo",
  Description: ["Wolof"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "xh",
  Description: ["Xhosa"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "yi",
  Description: ["Yiddish"],
  Added: "2005-10-16",
  "Suppress-Script": "Hebr",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "yo",
  Description: ["Yoruba"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "za",
  Description: ["Zhuang", "Chuang"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "zh",
  Description: ["Chinese"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "zu",
  Description: ["Zulu"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "aaa",
  Description: ["Ghotuo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aab",
  Description: ["Alumu-Tesu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aac",
  Description: ["Ari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aad",
  Description: ["Amal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aae",
  Description: ["Arbëreshë Albanian"],
  Added: "2009-07-29",
  Macrolanguage: "sq"
}, {
  Type: "language",
  Subtag: "aaf",
  Description: ["Aranadan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aag",
  Description: ["Ambrak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aah",
  Description: ["Abu' Arapesh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aai",
  Description: ["Arifama-Miniafia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aak",
  Description: ["Ankave"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aal",
  Description: ["Afade"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aam",
  Description: ["Aramanik"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12",
  "Preferred-Value": "aas"
}, {
  Type: "language",
  Subtag: "aan",
  Description: ["Anambé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aao",
  Description: ["Algerian Saharan Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "aap",
  Description: ["Pará Arára"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aaq",
  Description: ["Eastern Abnaki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aas",
  Description: ["Aasáx"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aat",
  Description: ["Arvanitika Albanian"],
  Added: "2009-07-29",
  Macrolanguage: "sq"
}, {
  Type: "language",
  Subtag: "aau",
  Description: ["Abau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aav",
  Description: ["Austro-Asiatic languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "aaw",
  Description: ["Solong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aax",
  Description: ["Mandobo Atas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aaz",
  Description: ["Amarasi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aba",
  Description: ["Abé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abb",
  Description: ["Bankon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abc",
  Description: ["Ambala Ayta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abd",
  Description: ["Manide"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abe",
  Description: ["Western Abnaki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abf",
  Description: ["Abai Sungai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abg",
  Description: ["Abaga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abh",
  Description: ["Tajiki Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "abi",
  Description: ["Abidji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abj",
  Description: ["Aka-Bea"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abl",
  Description: ["Lampung Nyo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abm",
  Description: ["Abanyom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abn",
  Description: ["Abua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abo",
  Description: ["Abon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abp",
  Description: ["Abellen Ayta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abq",
  Description: ["Abaza"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abr",
  Description: ["Abron"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abs",
  Description: ["Ambonese Malay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abt",
  Description: ["Ambulas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abu",
  Description: ["Abure"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abv",
  Description: ["Baharna Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "abw",
  Description: ["Pal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abx",
  Description: ["Inabaknon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aby",
  Description: ["Aneme Wake"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "abz",
  Description: ["Abui"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aca",
  Description: ["Achagua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "acb",
  Description: ["Áncá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "acd",
  Description: ["Gikyode"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ace",
  Description: ["Achinese"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "acf",
  Description: ["Saint Lucian Creole French"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ach",
  Description: ["Acoli"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "aci",
  Description: ["Aka-Cari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ack",
  Description: ["Aka-Kora"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "acl",
  Description: ["Akar-Bale"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "acm",
  Description: ["Mesopotamian Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "acn",
  Description: ["Achang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "acp",
  Description: ["Eastern Acipa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "acq",
  Description: ["Ta'izzi-Adeni Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "acr",
  Description: ["Achi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "acs",
  Description: ["Acroá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "act",
  Description: ["Achterhoeks"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "acu",
  Description: ["Achuar-Shiwiar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "acv",
  Description: ["Achumawi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "acw",
  Description: ["Hijazi Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "acx",
  Description: ["Omani Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "acy",
  Description: ["Cypriot Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "acz",
  Description: ["Acheron"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ada",
  Description: ["Adangme"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "adb",
  Description: ["Atauran"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "add",
  Description: ["Lidzonka", "Dzodinka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ade",
  Description: ["Adele"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adf",
  Description: ["Dhofari Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "adg",
  Description: ["Andegerebinha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adh",
  Description: ["Adhola"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adi",
  Description: ["Adi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adj",
  Description: ["Adioukrou"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adl",
  Description: ["Galo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adn",
  Description: ["Adang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ado",
  Description: ["Abu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adp",
  Description: ["Adap"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12",
  "Preferred-Value": "dz"
}, {
  Type: "language",
  Subtag: "adq",
  Description: ["Adangbe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adr",
  Description: ["Adonara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ads",
  Description: ["Adamorobe Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adt",
  Description: ["Adnyamathanha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adu",
  Description: ["Aduge"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adw",
  Description: ["Amundava"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "adx",
  Description: ["Amdo Tibetan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ady",
  Description: ["Adyghe", "Adygei"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "adz",
  Description: ["Adzera"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aea",
  Description: ["Areba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aeb",
  Description: ["Tunisian Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "aec",
  Description: ["Saidi Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "aed",
  Description: ["Argentine Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aee",
  Description: ["Northeast Pashai", "Northeast Pashayi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aek",
  Description: ["Haeke"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ael",
  Description: ["Ambele"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aem",
  Description: ["Arem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aen",
  Description: ["Armenian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aeq",
  Description: ["Aer"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aer",
  Description: ["Eastern Arrernte"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aes",
  Description: ["Alsea"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aeu",
  Description: ["Akeu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aew",
  Description: ["Ambakich"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aey",
  Description: ["Amele"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aez",
  Description: ["Aeka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afa",
  Description: ["Afro-Asiatic languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "afb",
  Description: ["Gulf Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "afd",
  Description: ["Andai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afe",
  Description: ["Putukwam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afg",
  Description: ["Afghan Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afh",
  Description: ["Afrihili"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "afi",
  Description: ["Akrukay", "Chini"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afk",
  Description: ["Nanubae"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afn",
  Description: ["Defaka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afo",
  Description: ["Eloyi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afp",
  Description: ["Tapei"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afs",
  Description: ["Afro-Seminole Creole"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aft",
  Description: ["Afitti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afu",
  Description: ["Awutu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "afz",
  Description: ["Obokuitai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aga",
  Description: ["Aguano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agb",
  Description: ["Legbo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agc",
  Description: ["Agatu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agd",
  Description: ["Agarabi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "age",
  Description: ["Angal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agf",
  Description: ["Arguni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agg",
  Description: ["Angor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agh",
  Description: ["Ngelima"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agi",
  Description: ["Agariya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agj",
  Description: ["Argobba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agk",
  Description: ["Isarog Agta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agl",
  Description: ["Fembe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agm",
  Description: ["Angaataha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agn",
  Description: ["Agutaynen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ago",
  Description: ["Tainae"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agp",
  Description: ["Paranan"],
  Added: "2009-07-29",
  Deprecated: "2010-03-11",
  Comments: ["see apf, prf"]
}, {
  Type: "language",
  Subtag: "agq",
  Description: ["Aghem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agr",
  Description: ["Aguaruna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ags",
  Description: ["Esimbi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agt",
  Description: ["Central Cagayan Agta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agu",
  Description: ["Aguacateco"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agv",
  Description: ["Remontado Dumagat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agw",
  Description: ["Kahua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agx",
  Description: ["Aghul"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agy",
  Description: ["Southern Alta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "agz",
  Description: ["Mt. Iriga Agta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aha",
  Description: ["Ahanta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahb",
  Description: ["Axamb"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahg",
  Description: ["Qimant"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahh",
  Description: ["Aghu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahi",
  Description: ["Tiagbamrin Aizi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahk",
  Description: ["Akha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahl",
  Description: ["Igo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahm",
  Description: ["Mobumrin Aizi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahn",
  Description: ["Àhàn"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aho",
  Description: ["Ahom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahp",
  Description: ["Aproumu Aizi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahr",
  Description: ["Ahirani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ahs",
  Description: ["Ashe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aht",
  Description: ["Ahtena"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aia",
  Description: ["Arosi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aib",
  Description: ["Ainu (China)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aic",
  Description: ["Ainbai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aid",
  Description: ["Alngith"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aie",
  Description: ["Amara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aif",
  Description: ["Agi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aig",
  Description: ["Antigua and Barbuda Creole English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aih",
  Description: ["Ai-Cham"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aii",
  Description: ["Assyrian Neo-Aramaic"],
  Added: "2009-07-29",
  Macrolanguage: "syr"
}, {
  Type: "language",
  Subtag: "aij",
  Description: ["Lishanid Noshan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aik",
  Description: ["Ake"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ail",
  Description: ["Aimele"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aim",
  Description: ["Aimol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ain",
  Description: ["Ainu (Japan)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "aio",
  Description: ["Aiton"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aip",
  Description: ["Burumakok"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aiq",
  Description: ["Aimaq"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "air",
  Description: ["Airoran"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ais",
  Description: ["Nataoran Amis"],
  Added: "2009-07-29",
  Deprecated: "2019-04-16",
  Comments: ["see ami, szy"]
}, {
  Type: "language",
  Subtag: "ait",
  Description: ["Arikem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aiw",
  Description: ["Aari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aix",
  Description: ["Aighon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aiy",
  Description: ["Ali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aja",
  Description: ["Aja (South Sudan)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ajg",
  Description: ["Aja (Benin)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aji",
  Description: ["Ajië"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ajn",
  Description: ["Andajin"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "ajp",
  Description: ["South Levantine Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "ajs",
  Description: ["Algerian Jewish Sign Language"],
  Added: "2022-02-25"
}, {
  Type: "language",
  Subtag: "ajt",
  Description: ["Judeo-Tunisian Arabic"],
  Added: "2009-07-29",
  Deprecated: "2022-02-25",
  "Preferred-Value": "aeb",
  Macrolanguage: "jrb"
}, {
  Type: "language",
  Subtag: "aju",
  Description: ["Judeo-Moroccan Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "jrb"
}, {
  Type: "language",
  Subtag: "ajw",
  Description: ["Ajawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ajz",
  Description: ["Amri Karbi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akb",
  Description: ["Batak Angkola"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akc",
  Description: ["Mpur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akd",
  Description: ["Ukpet-Ehom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ake",
  Description: ["Akawaio"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akf",
  Description: ["Akpa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akg",
  Description: ["Anakalangu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akh",
  Description: ["Angal Heneng"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aki",
  Description: ["Aiome"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akj",
  Description: ["Aka-Jeru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akk",
  Description: ["Akkadian"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "akl",
  Description: ["Aklanon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akm",
  Description: ["Aka-Bo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ako",
  Description: ["Akurio"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akp",
  Description: ["Siwu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akq",
  Description: ["Ak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akr",
  Description: ["Araki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aks",
  Description: ["Akaselem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akt",
  Description: ["Akolet"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aku",
  Description: ["Akum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akv",
  Description: ["Akhvakh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akw",
  Description: ["Akwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akx",
  Description: ["Aka-Kede"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aky",
  Description: ["Aka-Kol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "akz",
  Description: ["Alabama"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ala",
  Description: ["Alago"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alc",
  Description: ["Qawasqar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ald",
  Description: ["Alladian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ale",
  Description: ["Aleut"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "alf",
  Description: ["Alege"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alg",
  Description: ["Algonquian languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "alh",
  Description: ["Alawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ali",
  Description: ["Amaimon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alj",
  Description: ["Alangan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alk",
  Description: ["Alak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "all",
  Description: ["Allar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alm",
  Description: ["Amblong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aln",
  Description: ["Gheg Albanian"],
  Added: "2009-07-29",
  Macrolanguage: "sq"
}, {
  Type: "language",
  Subtag: "alo",
  Description: ["Larike-Wakasihu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alp",
  Description: ["Alune"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alq",
  Description: ["Algonquin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alr",
  Description: ["Alutor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "als",
  Description: ["Tosk Albanian"],
  Added: "2009-07-29",
  Macrolanguage: "sq"
}, {
  Type: "language",
  Subtag: "alt",
  Description: ["Southern Altai"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "alu",
  Description: ["'Are'are"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alv",
  Description: ["Atlantic-Congo languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "alw",
  Description: ["Alaba-K’abeena", "Wanbasana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alx",
  Description: ["Amol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aly",
  Description: ["Alyawarr"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "alz",
  Description: ["Alur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ama",
  Description: ["Amanayé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amb",
  Description: ["Ambo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amc",
  Description: ["Amahuaca"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ame",
  Description: ["Yanesha'"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amf",
  Description: ["Hamer-Banna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amg",
  Description: ["Amurdak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ami",
  Description: ["Amis"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amj",
  Description: ["Amdang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amk",
  Description: ["Ambai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aml",
  Description: ["War-Jaintia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amm",
  Description: ["Ama (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amn",
  Description: ["Amanab"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amo",
  Description: ["Amo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amp",
  Description: ["Alamblak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amq",
  Description: ["Amahai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amr",
  Description: ["Amarakaeri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ams",
  Description: ["Southern Amami-Oshima"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amt",
  Description: ["Amto"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amu",
  Description: ["Guerrero Amuzgo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amv",
  Description: ["Ambelau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amw",
  Description: ["Western Neo-Aramaic"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amx",
  Description: ["Anmatyerre"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amy",
  Description: ["Ami"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "amz",
  Description: ["Atampaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ana",
  Description: ["Andaqui"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anb",
  Description: ["Andoa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anc",
  Description: ["Ngas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "and",
  Description: ["Ansus"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ane",
  Description: ["Xârâcùù"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anf",
  Description: ["Animere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ang",
  Description: ["Old English (ca. 450-1100)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "anh",
  Description: ["Nend"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ani",
  Description: ["Andi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anj",
  Description: ["Anor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ank",
  Description: ["Goemai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anl",
  Description: ["Anu-Hkongso Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anm",
  Description: ["Anal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ann",
  Description: ["Obolo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ano",
  Description: ["Andoque"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anp",
  Description: ["Angika"],
  Added: "2006-03-08"
}, {
  Type: "language",
  Subtag: "anq",
  Description: ["Jarawa (India)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anr",
  Description: ["Andh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ans",
  Description: ["Anserma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ant",
  Description: ["Antakarinya", "Antikarinya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anu",
  Description: ["Anuak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anv",
  Description: ["Denya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anw",
  Description: ["Anaang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anx",
  Description: ["Andra-Hus"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "any",
  Description: ["Anyin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "anz",
  Description: ["Anem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aoa",
  Description: ["Angolar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aob",
  Description: ["Abom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aoc",
  Description: ["Pemon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aod",
  Description: ["Andarum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aoe",
  Description: ["Angal Enen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aof",
  Description: ["Bragat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aog",
  Description: ["Angoram"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aoh",
  Description: ["Arma"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28"
}, {
  Type: "language",
  Subtag: "aoi",
  Description: ["Anindilyakwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aoj",
  Description: ["Mufian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aok",
  Description: ["Arhö"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aol",
  Description: ["Alor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aom",
  Description: ["Ömie"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aon",
  Description: ["Bumbita Arapesh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aor",
  Description: ["Aore"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aos",
  Description: ["Taikat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aot",
  Description: ["Atong (India)", "A'tong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aou",
  Description: ["A'ou"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "aox",
  Description: ["Atorada"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aoz",
  Description: ["Uab Meto"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apa",
  Description: ["Apache languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "apb",
  Description: ["Sa'a"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apc",
  Description: ["North Levantine Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "apd",
  Description: ["Sudanese Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "ape",
  Description: ["Bukiyip"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apf",
  Description: ["Pahanan Agta"],
  Added: "2010-03-11"
}, {
  Type: "language",
  Subtag: "apg",
  Description: ["Ampanang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aph",
  Description: ["Athpariya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "api",
  Description: ["Apiaká"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apj",
  Description: ["Jicarilla Apache"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apk",
  Description: ["Kiowa Apache"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apl",
  Description: ["Lipan Apache"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apm",
  Description: ["Mescalero-Chiricahua Apache"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apn",
  Description: ["Apinayé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apo",
  Description: ["Ambul"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "app",
  Description: ["Apma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apq",
  Description: ["A-Pucikwar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apr",
  Description: ["Arop-Lokep"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aps",
  Description: ["Arop-Sissano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apt",
  Description: ["Apatani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apu",
  Description: ["Apurinã"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apv",
  Description: ["Alapmunte"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apw",
  Description: ["Western Apache"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apx",
  Description: ["Aputai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apy",
  Description: ["Apalaí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "apz",
  Description: ["Safeyoka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aqa",
  Description: ["Alacalufan languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "aqc",
  Description: ["Archi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aqd",
  Description: ["Ampari Dogon"],
  Added: "2011-08-16"
}, {
  Type: "language",
  Subtag: "aqg",
  Description: ["Arigidi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aqk",
  Description: ["Aninka"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "aql",
  Description: ["Algic languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "aqm",
  Description: ["Atohwaim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aqn",
  Description: ["Northern Alta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aqp",
  Description: ["Atakapa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aqr",
  Description: ["Arhâ"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aqt",
  Description: ["Angaité"],
  Added: "2014-02-28"
}, {
  Type: "language",
  Subtag: "aqz",
  Description: ["Akuntsu"],
  Added: "2010-03-11"
}, {
  Type: "language",
  Subtag: "arb",
  Description: ["Standard Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "arc",
  Description: ["Official Aramaic (700-300 BCE)", "Imperial Aramaic (700-300 BCE)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ard",
  Description: ["Arabana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "are",
  Description: ["Western Arrarnta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "arh",
  Description: ["Arhuaco"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ari",
  Description: ["Arikara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "arj",
  Description: ["Arapaso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ark",
  Description: ["Arikapú"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "arl",
  Description: ["Arabela"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "arn",
  Description: ["Mapudungun", "Mapuche"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "aro",
  Description: ["Araona"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "arp",
  Description: ["Arapaho"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "arq",
  Description: ["Algerian Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "arr",
  Description: ["Karo (Brazil)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ars",
  Description: ["Najdi Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "art",
  Description: ["Artificial languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "aru",
  Description: ["Aruá (Amazonas State)", "Arawá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "arv",
  Description: ["Arbore"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "arw",
  Description: ["Arawak"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "arx",
  Description: ["Aruá (Rodonia State)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ary",
  Description: ["Moroccan Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "arz",
  Description: ["Egyptian Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "asa",
  Description: ["Asu (Tanzania)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asb",
  Description: ["Assiniboine"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asc",
  Description: ["Casuarina Coast Asmat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asd",
  Description: ["Asas"],
  Added: "2009-07-29",
  Deprecated: "2019-04-16",
  "Preferred-Value": "snz"
}, {
  Type: "language",
  Subtag: "ase",
  Description: ["American Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asf",
  Description: ["Auslan", "Australian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asg",
  Description: ["Cishingini"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ash",
  Description: ["Abishira"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asi",
  Description: ["Buruwai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asj",
  Description: ["Sari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ask",
  Description: ["Ashkun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asl",
  Description: ["Asilulu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asn",
  Description: ["Xingú Asuriní"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aso",
  Description: ["Dano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asp",
  Description: ["Algerian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asq",
  Description: ["Austrian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asr",
  Description: ["Asuri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ass",
  Description: ["Ipulo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ast",
  Description: ["Asturian", "Asturleonese", "Bable", "Leonese"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "asu",
  Description: ["Tocantins Asurini"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asv",
  Description: ["Asoa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asw",
  Description: ["Australian Aborigines Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asx",
  Description: ["Muratayak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asy",
  Description: ["Yaosakor Asmat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "asz",
  Description: ["As"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ata",
  Description: ["Pele-Ata"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atb",
  Description: ["Zaiwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atc",
  Description: ["Atsahuaca"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atd",
  Description: ["Ata Manobo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ate",
  Description: ["Atemble"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atg",
  Description: ["Ivbie North-Okpela-Arhe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ath",
  Description: ["Athapascan languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "ati",
  Description: ["Attié"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atj",
  Description: ["Atikamekw"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atk",
  Description: ["Ati"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atl",
  Description: ["Mt. Iraya Agta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atm",
  Description: ["Ata"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atn",
  Description: ["Ashtiani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ato",
  Description: ["Atong (Cameroon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atp",
  Description: ["Pudtol Atta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atq",
  Description: ["Aralle-Tabulahan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atr",
  Description: ["Waimiri-Atroari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ats",
  Description: ["Gros Ventre"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "att",
  Description: ["Pamplona Atta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atu",
  Description: ["Reel"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atv",
  Description: ["Northern Altai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atw",
  Description: ["Atsugewi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atx",
  Description: ["Arutani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aty",
  Description: ["Aneityum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "atz",
  Description: ["Arta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aua",
  Description: ["Asumboa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aub",
  Description: ["Alugu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "auc",
  Description: ["Waorani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aud",
  Description: ["Anuta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aue",
  Description: ["ǂKxʼauǁʼein"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12",
  "Preferred-Value": "ktz"
}, {
  Type: "language",
  Subtag: "auf",
  Description: ["Arauan languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "aug",
  Description: ["Aguna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "auh",
  Description: ["Aushi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aui",
  Description: ["Anuki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "auj",
  Description: ["Awjilah"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "auk",
  Description: ["Heyo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aul",
  Description: ["Aulua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aum",
  Description: ["Asu (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aun",
  Description: ["Molmo One"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "auo",
  Description: ["Auyokawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aup",
  Description: ["Makayam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "auq",
  Description: ["Anus", "Korur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aur",
  Description: ["Aruek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aus",
  Description: ["Australian languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "aut",
  Description: ["Austral"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "auu",
  Description: ["Auye"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "auw",
  Description: ["Awyi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aux",
  Description: ["Aurá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "auy",
  Description: ["Awiyaana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "auz",
  Description: ["Uzbeki Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "avb",
  Description: ["Avau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "avd",
  Description: ["Alviri-Vidari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "avi",
  Description: ["Avikam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "avk",
  Description: ["Kotava"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "avl",
  Description: ["Eastern Egyptian Bedawi Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "avm",
  Description: ["Angkamuthi"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "avn",
  Description: ["Avatime"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "avo",
  Description: ["Agavotaguerra"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "avs",
  Description: ["Aushiri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "avt",
  Description: ["Au"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "avu",
  Description: ["Avokaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "avv",
  Description: ["Avá-Canoeiro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awa",
  Description: ["Awadhi"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "awb",
  Description: ["Awa (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awc",
  Description: ["Cicipu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awd",
  Description: ["Arawakan languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "awe",
  Description: ["Awetí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awg",
  Description: ["Anguthimri"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "awh",
  Description: ["Awbono"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awi",
  Description: ["Aekyom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awk",
  Description: ["Awabakal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awm",
  Description: ["Arawum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awn",
  Description: ["Awngi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awo",
  Description: ["Awak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awr",
  Description: ["Awera"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aws",
  Description: ["South Awyu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awt",
  Description: ["Araweté"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awu",
  Description: ["Central Awyu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awv",
  Description: ["Jair Awyu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aww",
  Description: ["Awun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awx",
  Description: ["Awara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "awy",
  Description: ["Edera Awyu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "axb",
  Description: ["Abipon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "axe",
  Description: ["Ayerrerenge"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "axg",
  Description: ["Mato Grosso Arára"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "axk",
  Description: ["Yaka (Central African Republic)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "axl",
  Description: ["Lower Southern Aranda"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "axm",
  Description: ["Middle Armenian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "axx",
  Description: ["Xârâgurè"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aya",
  Description: ["Awar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayb",
  Description: ["Ayizo Gbe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayc",
  Description: ["Southern Aymara"],
  Added: "2009-07-29",
  Macrolanguage: "ay"
}, {
  Type: "language",
  Subtag: "ayd",
  Description: ["Ayabadhu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aye",
  Description: ["Ayere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayg",
  Description: ["Ginyanga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayh",
  Description: ["Hadrami Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "ayi",
  Description: ["Leyigha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayk",
  Description: ["Akuku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayl",
  Description: ["Libyan Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "ayn",
  Description: ["Sanaani Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "ayo",
  Description: ["Ayoreo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayp",
  Description: ["North Mesopotamian Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "ayq",
  Description: ["Ayi (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayr",
  Description: ["Central Aymara"],
  Added: "2009-07-29",
  Macrolanguage: "ay"
}, {
  Type: "language",
  Subtag: "ays",
  Description: ["Sorsogon Ayta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayt",
  Description: ["Magbukun Ayta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayu",
  Description: ["Ayu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ayx",
  Description: ["Ayi (China)"],
  Added: "2009-07-29",
  Deprecated: "2011-08-16",
  "Preferred-Value": "nun"
}, {
  Type: "language",
  Subtag: "ayy",
  Description: ["Tayabas Ayta"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28"
}, {
  Type: "language",
  Subtag: "ayz",
  Description: ["Mai Brat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "aza",
  Description: ["Azha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "azb",
  Description: ["South Azerbaijani"],
  Added: "2009-07-29",
  Macrolanguage: "az"
}, {
  Type: "language",
  Subtag: "azc",
  Description: ["Uto-Aztecan languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "azd",
  Description: ["Eastern Durango Nahuatl"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "azg",
  Description: ["San Pedro Amuzgos Amuzgo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "azj",
  Description: ["North Azerbaijani"],
  Added: "2009-07-29",
  Macrolanguage: "az"
}, {
  Type: "language",
  Subtag: "azm",
  Description: ["Ipalapa Amuzgo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "azn",
  Description: ["Western Durango Nahuatl"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "azo",
  Description: ["Awing"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "azt",
  Description: ["Faire Atta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "azz",
  Description: ["Highland Puebla Nahuatl"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "baa",
  Description: ["Babatana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bab",
  Description: ["Bainouk-Gunyuño"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bac",
  Description: ["Badui"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bad",
  Description: ["Banda languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "bae",
  Description: ["Baré"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "baf",
  Description: ["Nubaca"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bag",
  Description: ["Tuki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bah",
  Description: ["Bahamas Creole English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bai",
  Description: ["Bamileke languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "baj",
  Description: ["Barakai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bal",
  Description: ["Baluchi"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "ban",
  Description: ["Balinese"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "bao",
  Description: ["Waimaha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bap",
  Description: ["Bantawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bar",
  Description: ["Bavarian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bas",
  Description: ["Basa (Cameroon)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "bat",
  Description: ["Baltic languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "bau",
  Description: ["Bada (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bav",
  Description: ["Vengo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "baw",
  Description: ["Bambili-Bambui"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bax",
  Description: ["Bamun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bay",
  Description: ["Batuley"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "baz",
  Description: ["Tunen"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  Comments: ["see nvo, tvu"]
}, {
  Type: "language",
  Subtag: "bba",
  Description: ["Baatonum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbb",
  Description: ["Barai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbc",
  Description: ["Batak Toba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbd",
  Description: ["Bau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbe",
  Description: ["Bangba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbf",
  Description: ["Baibai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbg",
  Description: ["Barama"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbh",
  Description: ["Bugan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbi",
  Description: ["Barombi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbj",
  Description: ["Ghomálá'"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbk",
  Description: ["Babanki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbl",
  Description: ["Bats"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbm",
  Description: ["Babango"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbn",
  Description: ["Uneapa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbo",
  Description: ["Northern Bobo Madaré", "Konabéré"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbp",
  Description: ["West Central Banda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbq",
  Description: ["Bamali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbr",
  Description: ["Girawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbs",
  Description: ["Bakpinka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbt",
  Description: ["Mburku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbu",
  Description: ["Kulung (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbv",
  Description: ["Karnai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbw",
  Description: ["Baba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbx",
  Description: ["Bubia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bby",
  Description: ["Befang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bbz",
  Description: ["Babalia Creole Arabic"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28",
  Macrolanguage: "ar"
}, {
  Type: "language",
  Subtag: "bca",
  Description: ["Central Bai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcb",
  Description: ["Bainouk-Samik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcc",
  Description: ["Southern Balochi"],
  Added: "2009-07-29",
  Macrolanguage: "bal"
}, {
  Type: "language",
  Subtag: "bcd",
  Description: ["North Babar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bce",
  Description: ["Bamenyam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcf",
  Description: ["Bamu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcg",
  Description: ["Baga Pokur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bch",
  Description: ["Bariai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bci",
  Description: ["Baoulé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcj",
  Description: ["Bardi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bck",
  Description: ["Bunuba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcl",
  Description: ["Central Bikol"],
  Added: "2009-07-29",
  Macrolanguage: "bik"
}, {
  Type: "language",
  Subtag: "bcm",
  Description: ["Bannoni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcn",
  Description: ["Bali (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bco",
  Description: ["Kaluli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcp",
  Description: ["Bali (Democratic Republic of Congo)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcq",
  Description: ["Bench"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcr",
  Description: ["Babine"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcs",
  Description: ["Kohumono"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bct",
  Description: ["Bendi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcu",
  Description: ["Awad Bing"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcv",
  Description: ["Shoo-Minda-Nye"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcw",
  Description: ["Bana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcy",
  Description: ["Bacama"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bcz",
  Description: ["Bainouk-Gunyaamolo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bda",
  Description: ["Bayot"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdb",
  Description: ["Basap"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdc",
  Description: ["Emberá-Baudó"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdd",
  Description: ["Bunama"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bde",
  Description: ["Bade"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdf",
  Description: ["Biage"],
  Added: "2010-03-11"
}, {
  Type: "language",
  Subtag: "bdg",
  Description: ["Bonggi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdh",
  Description: ["Baka (South Sudan)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdi",
  Description: ["Burun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdj",
  Description: ["Bai (South Sudan)", "Bai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdk",
  Description: ["Budukh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdl",
  Description: ["Indonesian Bajau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdm",
  Description: ["Buduma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdn",
  Description: ["Baldemu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdo",
  Description: ["Morom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdp",
  Description: ["Bende"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdq",
  Description: ["Bahnar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdr",
  Description: ["West Coast Bajau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bds",
  Description: ["Burunge"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdt",
  Description: ["Bokoto"],
  Added: "2009-07-29",
  Macrolanguage: "gba"
}, {
  Type: "language",
  Subtag: "bdu",
  Description: ["Oroko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdv",
  Description: ["Bodo Parja"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdw",
  Description: ["Baham"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdx",
  Description: ["Budong-Budong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdy",
  Description: ["Bandjalang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bdz",
  Description: ["Badeshi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bea",
  Description: ["Beaver"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "beb",
  Description: ["Bebele"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bec",
  Description: ["Iceve-Maci"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bed",
  Description: ["Bedoanas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bee",
  Description: ["Byangsi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bef",
  Description: ["Benabena"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "beg",
  Description: ["Belait"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "beh",
  Description: ["Biali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bei",
  Description: ["Bekati'"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bej",
  Description: ["Beja", "Bedawiyet"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "bek",
  Description: ["Bebeli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bem",
  Description: ["Bemba (Zambia)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "beo",
  Description: ["Beami"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bep",
  Description: ["Besoa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "beq",
  Description: ["Beembe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ber",
  Description: ["Berber languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "bes",
  Description: ["Besme"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bet",
  Description: ["Guiberoua Béte"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "beu",
  Description: ["Blagar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bev",
  Description: ["Daloa Bété"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bew",
  Description: ["Betawi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bex",
  Description: ["Jur Modo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bey",
  Description: ["Beli (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bez",
  Description: ["Bena (Tanzania)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfa",
  Description: ["Bari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfb",
  Description: ["Pauri Bareli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfc",
  Description: ["Panyi Bai", "Northern Bai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfd",
  Description: ["Bafut"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfe",
  Description: ["Betaf", "Tena"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bff",
  Description: ["Bofi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfg",
  Description: ["Busang Kayan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfh",
  Description: ["Blafe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfi",
  Description: ["British Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfj",
  Description: ["Bafanji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfk",
  Description: ["Ban Khor Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfl",
  Description: ["Banda-Ndélé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfm",
  Description: ["Mmen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfn",
  Description: ["Bunak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfo",
  Description: ["Malba Birifor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfp",
  Description: ["Beba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfq",
  Description: ["Badaga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfr",
  Description: ["Bazigar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfs",
  Description: ["Southern Bai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bft",
  Description: ["Balti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfu",
  Description: ["Gahri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfw",
  Description: ["Bondo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfx",
  Description: ["Bantayanon"],
  Added: "2010-03-11"
}, {
  Type: "language",
  Subtag: "bfy",
  Description: ["Bagheli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bfz",
  Description: ["Mahasu Pahari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bga",
  Description: ["Gwamhi-Wuri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgb",
  Description: ["Bobongko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgc",
  Description: ["Haryanvi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgd",
  Description: ["Rathwi Bareli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bge",
  Description: ["Bauria"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgf",
  Description: ["Bangandu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgg",
  Description: ["Bugun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgi",
  Description: ["Giangan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgj",
  Description: ["Bangolan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgk",
  Description: ["Bit", "Buxinhua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgl",
  Description: ["Bo (Laos)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgm",
  Description: ["Baga Mboteni"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  "Preferred-Value": "bcg"
}, {
  Type: "language",
  Subtag: "bgn",
  Description: ["Western Balochi"],
  Added: "2009-07-29",
  Macrolanguage: "bal"
}, {
  Type: "language",
  Subtag: "bgo",
  Description: ["Baga Koga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgp",
  Description: ["Eastern Balochi"],
  Added: "2009-07-29",
  Macrolanguage: "bal"
}, {
  Type: "language",
  Subtag: "bgq",
  Description: ["Bagri"],
  Added: "2009-07-29",
  Macrolanguage: "raj"
}, {
  Type: "language",
  Subtag: "bgr",
  Description: ["Bawm Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgs",
  Description: ["Tagabawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgt",
  Description: ["Bughotu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgu",
  Description: ["Mbongno"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgv",
  Description: ["Warkay-Bipim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgw",
  Description: ["Bhatri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgx",
  Description: ["Balkan Gagauz Turkish"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgy",
  Description: ["Benggoi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bgz",
  Description: ["Banggai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bha",
  Description: ["Bharia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhb",
  Description: ["Bhili"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhc",
  Description: ["Biga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhd",
  Description: ["Bhadrawahi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhe",
  Description: ["Bhaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhf",
  Description: ["Odiai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhg",
  Description: ["Binandere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhh",
  Description: ["Bukharic"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhi",
  Description: ["Bhilali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhj",
  Description: ["Bahing"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhk",
  Description: ["Albay Bicolano"],
  Added: "2009-07-29",
  Deprecated: "2010-03-11",
  Macrolanguage: "bik",
  Comments: ["see fbl, lbl, rbl, ubl"]
}, {
  Type: "language",
  Subtag: "bhl",
  Description: ["Bimin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhm",
  Description: ["Bathari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhn",
  Description: ["Bohtan Neo-Aramaic"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bho",
  Description: ["Bhojpuri"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "bhp",
  Description: ["Bima"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhq",
  Description: ["Tukang Besi South"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhr",
  Description: ["Bara Malagasy"],
  Added: "2009-07-29",
  Macrolanguage: "mg"
}, {
  Type: "language",
  Subtag: "bhs",
  Description: ["Buwal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bht",
  Description: ["Bhattiyali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhu",
  Description: ["Bhunjia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhv",
  Description: ["Bahau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhw",
  Description: ["Biak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhx",
  Description: ["Bhalay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhy",
  Description: ["Bhele"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bhz",
  Description: ["Bada (Indonesia)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bia",
  Description: ["Badimaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bib",
  Description: ["Bissa", "Bisa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bic",
  Description: ["Bikaru"],
  Added: "2009-07-29",
  Deprecated: "2021-02-20",
  "Preferred-Value": "bir"
}, {
  Type: "language",
  Subtag: "bid",
  Description: ["Bidiyo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bie",
  Description: ["Bepour"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bif",
  Description: ["Biafada"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "big",
  Description: ["Biangai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bij",
  Description: ["Vaghat-Ya-Bijim-Legeri"],
  Added: "2009-07-29",
  Deprecated: "2021-02-20",
  Comments: ["see dkg, jbm, tyy"]
}, {
  Type: "language",
  Subtag: "bik",
  Description: ["Bikol"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "bil",
  Description: ["Bile"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bim",
  Description: ["Bimoba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bin",
  Description: ["Bini", "Edo"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "bio",
  Description: ["Nai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bip",
  Description: ["Bila"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "biq",
  Description: ["Bipi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bir",
  Description: ["Bisorio"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bit",
  Description: ["Berinomo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "biu",
  Description: ["Biete"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "biv",
  Description: ["Southern Birifor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "biw",
  Description: ["Kol (Cameroon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bix",
  Description: ["Bijori"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "biy",
  Description: ["Birhor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "biz",
  Description: ["Baloi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bja",
  Description: ["Budza"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjb",
  Description: ["Banggarla"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjc",
  Description: ["Bariji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjd",
  Description: ["Bandjigali"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  "Preferred-Value": "drl"
}, {
  Type: "language",
  Subtag: "bje",
  Description: ["Biao-Jiao Mien"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjf",
  Description: ["Barzani Jewish Neo-Aramaic"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjg",
  Description: ["Bidyogo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjh",
  Description: ["Bahinemo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bji",
  Description: ["Burji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjj",
  Description: ["Kanauji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjk",
  Description: ["Barok"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjl",
  Description: ["Bulu (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjm",
  Description: ["Bajelani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjn",
  Description: ["Banjar"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "bjo",
  Description: ["Mid-Southern Banda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjp",
  Description: ["Fanamaket"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "bjq",
  Description: ["Southern Betsimisaraka Malagasy"],
  Added: "2009-07-29",
  Deprecated: "2011-08-16",
  Macrolanguage: "mg",
  Comments: ["see bzc, tkg"]
}, {
  Type: "language",
  Subtag: "bjr",
  Description: ["Binumarien"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjs",
  Description: ["Bajan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjt",
  Description: ["Balanta-Ganja"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bju",
  Description: ["Busuu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjv",
  Description: ["Bedjond"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjw",
  Description: ["Bakwé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjx",
  Description: ["Banao Itneg"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjy",
  Description: ["Bayali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bjz",
  Description: ["Baruga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bka",
  Description: ["Kyak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkb",
  Description: ["Finallig"],
  Added: "2009-07-29",
  Deprecated: "2010-03-11",
  Comments: ["see ebk, obk"]
}, {
  Type: "language",
  Subtag: "bkc",
  Description: ["Baka (Cameroon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkd",
  Description: ["Binukid", "Talaandig"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkf",
  Description: ["Beeke"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkg",
  Description: ["Buraka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkh",
  Description: ["Bakoko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bki",
  Description: ["Baki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkj",
  Description: ["Pande"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkk",
  Description: ["Brokskat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkl",
  Description: ["Berik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkm",
  Description: ["Kom (Cameroon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkn",
  Description: ["Bukitan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bko",
  Description: ["Kwa'"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkp",
  Description: ["Boko (Democratic Republic of Congo)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkq",
  Description: ["Bakairí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkr",
  Description: ["Bakumpai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bks",
  Description: ["Northern Sorsoganon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkt",
  Description: ["Boloki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bku",
  Description: ["Buhid"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkv",
  Description: ["Bekwarra"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkw",
  Description: ["Bekwel"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkx",
  Description: ["Baikeno"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bky",
  Description: ["Bokyi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bkz",
  Description: ["Bungku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bla",
  Description: ["Siksika"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "blb",
  Description: ["Bilua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blc",
  Description: ["Bella Coola"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bld",
  Description: ["Bolango"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ble",
  Description: ["Balanta-Kentohe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blf",
  Description: ["Buol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blg",
  Description: ["Balau"],
  Added: "2009-07-29",
  Deprecated: "2021-02-20",
  "Preferred-Value": "iba"
}, {
  Type: "language",
  Subtag: "blh",
  Description: ["Kuwaa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bli",
  Description: ["Bolia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blj",
  Description: ["Bolongan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blk",
  Description: ["Pa'o Karen", "Pa'O"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bll",
  Description: ["Biloxi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blm",
  Description: ["Beli (South Sudan)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bln",
  Description: ["Southern Catanduanes Bikol"],
  Added: "2009-07-29",
  Macrolanguage: "bik"
}, {
  Type: "language",
  Subtag: "blo",
  Description: ["Anii"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blp",
  Description: ["Blablanga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blq",
  Description: ["Baluan-Pam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blr",
  Description: ["Blang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bls",
  Description: ["Balaesang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blt",
  Description: ["Tai Dam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blv",
  Description: ["Kibala", "Bolo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blw",
  Description: ["Balangao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blx",
  Description: ["Mag-Indi Ayta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bly",
  Description: ["Notre"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "blz",
  Description: ["Balantak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bma",
  Description: ["Lame"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmb",
  Description: ["Bembe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmc",
  Description: ["Biem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmd",
  Description: ["Baga Manduri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bme",
  Description: ["Limassa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmf",
  Description: ["Bom-Kim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmg",
  Description: ["Bamwe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmh",
  Description: ["Kein"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmi",
  Description: ["Bagirmi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmj",
  Description: ["Bote-Majhi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmk",
  Description: ["Ghayavi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bml",
  Description: ["Bomboli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmm",
  Description: ["Northern Betsimisaraka Malagasy"],
  Added: "2009-07-29",
  Macrolanguage: "mg"
}, {
  Type: "language",
  Subtag: "bmn",
  Description: ["Bina (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmo",
  Description: ["Bambalang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmp",
  Description: ["Bulgebi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmq",
  Description: ["Bomu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmr",
  Description: ["Muinane"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bms",
  Description: ["Bilma Kanuri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmt",
  Description: ["Biao Mon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmu",
  Description: ["Somba-Siawari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmv",
  Description: ["Bum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmw",
  Description: ["Bomwali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmx",
  Description: ["Baimak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bmy",
  Description: ["Bemba (Democratic Republic of Congo)"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12"
}, {
  Type: "language",
  Subtag: "bmz",
  Description: ["Baramu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bna",
  Description: ["Bonerate"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnb",
  Description: ["Bookan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnc",
  Description: ["Bontok"],
  Added: "2009-07-29",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "bnd",
  Description: ["Banda (Indonesia)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bne",
  Description: ["Bintauna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnf",
  Description: ["Masiwang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bng",
  Description: ["Benga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bni",
  Description: ["Bangi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnj",
  Description: ["Eastern Tawbuid"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnk",
  Description: ["Bierebo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnl",
  Description: ["Boon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnm",
  Description: ["Batanga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnn",
  Description: ["Bunun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bno",
  Description: ["Bantoanon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnp",
  Description: ["Bola"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnq",
  Description: ["Bantik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnr",
  Description: ["Butmas-Tur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bns",
  Description: ["Bundeli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnt",
  Description: ["Bantu languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "bnu",
  Description: ["Bentong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnv",
  Description: ["Bonerif", "Beneraf", "Edwas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnw",
  Description: ["Bisis"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnx",
  Description: ["Bangubangu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bny",
  Description: ["Bintulu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bnz",
  Description: ["Beezen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "boa",
  Description: ["Bora"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bob",
  Description: ["Aweer"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "boe",
  Description: ["Mundabli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bof",
  Description: ["Bolon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bog",
  Description: ["Bamako Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "boh",
  Description: ["Boma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "boi",
  Description: ["Barbareño"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "boj",
  Description: ["Anjam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bok",
  Description: ["Bonjo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bol",
  Description: ["Bole"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bom",
  Description: ["Berom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bon",
  Description: ["Bine"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "boo",
  Description: ["Tiemacèwè Bozo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bop",
  Description: ["Bonkiman"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "boq",
  Description: ["Bogaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bor",
  Description: ["Borôro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bot",
  Description: ["Bongo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bou",
  Description: ["Bondei"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bov",
  Description: ["Tuwuli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bow",
  Description: ["Rema"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "box",
  Description: ["Buamu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "boy",
  Description: ["Bodo (Central African Republic)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "boz",
  Description: ["Tiéyaxo Bozo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpa",
  Description: ["Daakaka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpb",
  Description: ["Barbacoas"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28"
}, {
  Type: "language",
  Subtag: "bpc",
  Description: ["Mbuk"],
  Added: "2022-02-25"
}, {
  Type: "language",
  Subtag: "bpd",
  Description: ["Banda-Banda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpe",
  Description: ["Bauni"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "bpg",
  Description: ["Bonggo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bph",
  Description: ["Botlikh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpi",
  Description: ["Bagupi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpj",
  Description: ["Binji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpk",
  Description: ["Orowe", "'Ôrôê"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpl",
  Description: ["Broome Pearling Lugger Pidgin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpm",
  Description: ["Biyom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpn",
  Description: ["Dzao Min"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpo",
  Description: ["Anasi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpp",
  Description: ["Kaure"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpq",
  Description: ["Banda Malay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpr",
  Description: ["Koronadal Blaan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bps",
  Description: ["Sarangani Blaan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpt",
  Description: ["Barrow Point"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpu",
  Description: ["Bongu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpv",
  Description: ["Bian Marind"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpw",
  Description: ["Bo (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpx",
  Description: ["Palya Bareli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpy",
  Description: ["Bishnupriya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bpz",
  Description: ["Bilba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqa",
  Description: ["Tchumbuli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqb",
  Description: ["Bagusa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqc",
  Description: ["Boko (Benin)", "Boo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqd",
  Description: ["Bung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqf",
  Description: ["Baga Kaloum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqg",
  Description: ["Bago-Kusuntu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqh",
  Description: ["Baima"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqi",
  Description: ["Bakhtiari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqj",
  Description: ["Bandial"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqk",
  Description: ["Banda-Mbrès"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bql",
  Description: ["Bilakura"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqm",
  Description: ["Wumboko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqn",
  Description: ["Bulgarian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqo",
  Description: ["Balo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqp",
  Description: ["Busa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqq",
  Description: ["Biritai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqr",
  Description: ["Burusu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqs",
  Description: ["Bosngun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqt",
  Description: ["Bamukumbit"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqu",
  Description: ["Boguru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqv",
  Description: ["Koro Wachi", "Begbere-Ejar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqw",
  Description: ["Buru (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqx",
  Description: ["Baangi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqy",
  Description: ["Bengkala Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bqz",
  Description: ["Bakaka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bra",
  Description: ["Braj"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "brb",
  Description: ["Brao", "Lave"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brc",
  Description: ["Berbice Creole Dutch"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brd",
  Description: ["Baraamu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brf",
  Description: ["Bira"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brg",
  Description: ["Baure"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brh",
  Description: ["Brahui"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bri",
  Description: ["Mokpwe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brj",
  Description: ["Bieria"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brk",
  Description: ["Birked"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brl",
  Description: ["Birwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brm",
  Description: ["Barambu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brn",
  Description: ["Boruca"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bro",
  Description: ["Brokkat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brp",
  Description: ["Barapasi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brq",
  Description: ["Breri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brr",
  Description: ["Birao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brs",
  Description: ["Baras"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brt",
  Description: ["Bitare"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bru",
  Description: ["Eastern Bru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brv",
  Description: ["Western Bru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brw",
  Description: ["Bellari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brx",
  Description: ["Bodo (India)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bry",
  Description: ["Burui"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "brz",
  Description: ["Bilbil"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsa",
  Description: ["Abinomn"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsb",
  Description: ["Brunei Bisaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsc",
  Description: ["Bassari", "Oniyan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bse",
  Description: ["Wushi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsf",
  Description: ["Bauchi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsg",
  Description: ["Bashkardi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsh",
  Description: ["Kati"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsi",
  Description: ["Bassossi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsj",
  Description: ["Bangwinji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsk",
  Description: ["Burushaski"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsl",
  Description: ["Basa-Gumna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsm",
  Description: ["Busami"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsn",
  Description: ["Barasana-Eduria"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bso",
  Description: ["Buso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsp",
  Description: ["Baga Sitemu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsq",
  Description: ["Bassa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsr",
  Description: ["Bassa-Kontagora"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bss",
  Description: ["Akoose"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bst",
  Description: ["Basketo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsu",
  Description: ["Bahonsuai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsv",
  Description: ["Baga Sobané"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsw",
  Description: ["Baiso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsx",
  Description: ["Yangkam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bsy",
  Description: ["Sabah Bisaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bta",
  Description: ["Bata"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btb",
  Description: ["Beti (Cameroon)"],
  Added: "2009-07-29",
  Deprecated: "2010-03-11",
  Comments: ["see beb, bum, bxp, eto, ewo, fan, mct"]
}, {
  Type: "language",
  Subtag: "btc",
  Description: ["Bati (Cameroon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btd",
  Description: ["Batak Dairi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bte",
  Description: ["Gamo-Ningi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btf",
  Description: ["Birgit"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btg",
  Description: ["Gagnoa Bété"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bth",
  Description: ["Biatah Bidayuh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bti",
  Description: ["Burate"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btj",
  Description: ["Bacanese Malay"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "btk",
  Description: ["Batak languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "btl",
  Description: ["Bhatola"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30"
}, {
  Type: "language",
  Subtag: "btm",
  Description: ["Batak Mandailing"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btn",
  Description: ["Ratagnon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bto",
  Description: ["Rinconada Bikol"],
  Added: "2009-07-29",
  Macrolanguage: "bik"
}, {
  Type: "language",
  Subtag: "btp",
  Description: ["Budibud"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btq",
  Description: ["Batek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btr",
  Description: ["Baetora"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bts",
  Description: ["Batak Simalungun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btt",
  Description: ["Bete-Bendi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btu",
  Description: ["Batu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btv",
  Description: ["Bateri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btw",
  Description: ["Butuanon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btx",
  Description: ["Batak Karo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bty",
  Description: ["Bobot"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "btz",
  Description: ["Batak Alas-Kluet"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bua",
  Description: ["Buriat"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "bub",
  Description: ["Bua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buc",
  Description: ["Bushi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bud",
  Description: ["Ntcham"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bue",
  Description: ["Beothuk"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buf",
  Description: ["Bushoong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bug",
  Description: ["Buginese"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "buh",
  Description: ["Younuo Bunu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bui",
  Description: ["Bongili"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buj",
  Description: ["Basa-Gurmana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buk",
  Description: ["Bugawac"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bum",
  Description: ["Bulu (Cameroon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bun",
  Description: ["Sherbro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buo",
  Description: ["Terei"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bup",
  Description: ["Busoa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buq",
  Description: ["Brem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bus",
  Description: ["Bokobaru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "but",
  Description: ["Bungain"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buu",
  Description: ["Budu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buv",
  Description: ["Bun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buw",
  Description: ["Bubi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bux",
  Description: ["Boghom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buy",
  Description: ["Bullom So"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "buz",
  Description: ["Bukwen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bva",
  Description: ["Barein"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvb",
  Description: ["Bube"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvc",
  Description: ["Baelelea"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvd",
  Description: ["Baeggu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bve",
  Description: ["Berau Malay"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "bvf",
  Description: ["Boor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvg",
  Description: ["Bonkeng"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvh",
  Description: ["Bure"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvi",
  Description: ["Belanda Viri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvj",
  Description: ["Baan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvk",
  Description: ["Bukat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvl",
  Description: ["Bolivian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvm",
  Description: ["Bamunka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvn",
  Description: ["Buna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvo",
  Description: ["Bolgo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvp",
  Description: ["Bumang"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "bvq",
  Description: ["Birri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvr",
  Description: ["Burarra"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvt",
  Description: ["Bati (Indonesia)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvu",
  Description: ["Bukit Malay"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "bvv",
  Description: ["Baniva"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvw",
  Description: ["Boga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvx",
  Description: ["Dibole"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bvy",
  Description: ["Baybayanon"],
  Added: "2010-03-11"
}, {
  Type: "language",
  Subtag: "bvz",
  Description: ["Bauzi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwa",
  Description: ["Bwatoo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwb",
  Description: ["Namosi-Naitasiri-Serua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwc",
  Description: ["Bwile"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwd",
  Description: ["Bwaidoka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwe",
  Description: ["Bwe Karen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwf",
  Description: ["Boselewa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwg",
  Description: ["Barwe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwh",
  Description: ["Bishuo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwi",
  Description: ["Baniwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwj",
  Description: ["Láá Láá Bwamu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwk",
  Description: ["Bauwaki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwl",
  Description: ["Bwela"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwm",
  Description: ["Biwat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwn",
  Description: ["Wunai Bunu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwo",
  Description: ["Boro (Ethiopia)", "Borna (Ethiopia)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwp",
  Description: ["Mandobo Bawah"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwq",
  Description: ["Southern Bobo Madaré"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwr",
  Description: ["Bura-Pabir"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bws",
  Description: ["Bomboma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwt",
  Description: ["Bafaw-Balong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwu",
  Description: ["Buli (Ghana)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bww",
  Description: ["Bwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwx",
  Description: ["Bu-Nao Bunu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwy",
  Description: ["Cwi Bwamu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bwz",
  Description: ["Bwisi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxa",
  Description: ["Tairaha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxb",
  Description: ["Belanda Bor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxc",
  Description: ["Molengue"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxd",
  Description: ["Pela"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxe",
  Description: ["Birale"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxf",
  Description: ["Bilur", "Minigir"],
  Added: "2009-07-29",
  Comments: ["see also vmg"]
}, {
  Type: "language",
  Subtag: "bxg",
  Description: ["Bangala"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxh",
  Description: ["Buhutu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxi",
  Description: ["Pirlatapa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxj",
  Description: ["Bayungu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxk",
  Description: ["Bukusu", "Lubukusu"],
  Added: "2009-07-29",
  Macrolanguage: "luy"
}, {
  Type: "language",
  Subtag: "bxl",
  Description: ["Jalkunan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxm",
  Description: ["Mongolia Buriat"],
  Added: "2009-07-29",
  Macrolanguage: "bua"
}, {
  Type: "language",
  Subtag: "bxn",
  Description: ["Burduna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxo",
  Description: ["Barikanchi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxp",
  Description: ["Bebil"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxq",
  Description: ["Beele"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxr",
  Description: ["Russia Buriat"],
  Added: "2009-07-29",
  Macrolanguage: "bua"
}, {
  Type: "language",
  Subtag: "bxs",
  Description: ["Busam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxu",
  Description: ["China Buriat"],
  Added: "2009-07-29",
  Macrolanguage: "bua"
}, {
  Type: "language",
  Subtag: "bxv",
  Description: ["Berakou"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxw",
  Description: ["Bankagooma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bxx",
  Description: ["Borna (Democratic Republic of Congo)"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12"
}, {
  Type: "language",
  Subtag: "bxz",
  Description: ["Binahari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bya",
  Description: ["Batak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byb",
  Description: ["Bikya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byc",
  Description: ["Ubaghara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byd",
  Description: ["Benyadu'"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bye",
  Description: ["Pouye"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byf",
  Description: ["Bete"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byg",
  Description: ["Baygo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byh",
  Description: ["Bhujel"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byi",
  Description: ["Buyu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byj",
  Description: ["Bina (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byk",
  Description: ["Biao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byl",
  Description: ["Bayono"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bym",
  Description: ["Bidjara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byn",
  Description: ["Bilin", "Blin"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "byo",
  Description: ["Biyo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byp",
  Description: ["Bumaji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byq",
  Description: ["Basay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byr",
  Description: ["Baruya", "Yipma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bys",
  Description: ["Burak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byt",
  Description: ["Berti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byv",
  Description: ["Medumba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byw",
  Description: ["Belhariya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byx",
  Description: ["Qaqet"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "byy",
  Description: ["Buya"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12"
}, {
  Type: "language",
  Subtag: "byz",
  Description: ["Banaro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bza",
  Description: ["Bandi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzb",
  Description: ["Andio"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzc",
  Description: ["Southern Betsimisaraka Malagasy"],
  Added: "2011-08-16",
  Macrolanguage: "mg"
}, {
  Type: "language",
  Subtag: "bzd",
  Description: ["Bribri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bze",
  Description: ["Jenaama Bozo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzf",
  Description: ["Boikin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzg",
  Description: ["Babuza"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzh",
  Description: ["Mapos Buang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzi",
  Description: ["Bisu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzj",
  Description: ["Belize Kriol English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzk",
  Description: ["Nicaragua Creole English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzl",
  Description: ["Boano (Sulawesi)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzm",
  Description: ["Bolondo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzn",
  Description: ["Boano (Maluku)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzo",
  Description: ["Bozaba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzp",
  Description: ["Kemberano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzq",
  Description: ["Buli (Indonesia)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzr",
  Description: ["Biri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzs",
  Description: ["Brazilian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzt",
  Description: ["Brithenig"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzu",
  Description: ["Burmeso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzv",
  Description: ["Naami"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzw",
  Description: ["Basa (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzx",
  Description: ["Kɛlɛngaxo Bozo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzy",
  Description: ["Obanliku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "bzz",
  Description: ["Evant"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "caa",
  Description: ["Chortí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cab",
  Description: ["Garifuna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cac",
  Description: ["Chuj"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cad",
  Description: ["Caddo"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "cae",
  Description: ["Lehar", "Laalaa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "caf",
  Description: ["Southern Carrier"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cag",
  Description: ["Nivaclé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cah",
  Description: ["Cahuarano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cai",
  Description: ["Central American Indian languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "caj",
  Description: ["Chané"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cak",
  Description: ["Kaqchikel", "Cakchiquel"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cal",
  Description: ["Carolinian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cam",
  Description: ["Cemuhî"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "can",
  Description: ["Chambri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cao",
  Description: ["Chácobo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cap",
  Description: ["Chipaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "caq",
  Description: ["Car Nicobarese"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "car",
  Description: ["Galibi Carib"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "cas",
  Description: ["Tsimané"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cau",
  Description: ["Caucasian languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cav",
  Description: ["Cavineña"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "caw",
  Description: ["Callawalla"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cax",
  Description: ["Chiquitano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cay",
  Description: ["Cayuga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "caz",
  Description: ["Canichana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cba",
  Description: ["Chibchan languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cbb",
  Description: ["Cabiyarí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbc",
  Description: ["Carapana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbd",
  Description: ["Carijona"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbe",
  Description: ["Chipiajes"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30"
}, {
  Type: "language",
  Subtag: "cbg",
  Description: ["Chimila"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbh",
  Description: ["Cagua"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30"
}, {
  Type: "language",
  Subtag: "cbi",
  Description: ["Chachi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbj",
  Description: ["Ede Cabe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbk",
  Description: ["Chavacano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbl",
  Description: ["Bualkhaw Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbn",
  Description: ["Nyahkur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbo",
  Description: ["Izora"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbq",
  Description: ["Tsucuba", "Cuba"],
  Added: "2015-02-12"
}, {
  Type: "language",
  Subtag: "cbr",
  Description: ["Cashibo-Cacataibo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbs",
  Description: ["Cashinahua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbt",
  Description: ["Chayahuita"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbu",
  Description: ["Candoshi-Shapra"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbv",
  Description: ["Cacua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cbw",
  Description: ["Kinabalian"],
  Added: "2010-03-11"
}, {
  Type: "language",
  Subtag: "cby",
  Description: ["Carabayo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cca",
  Description: ["Cauca"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28"
}, {
  Type: "language",
  Subtag: "ccc",
  Description: ["Chamicuro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ccd",
  Description: ["Cafundo Creole"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cce",
  Description: ["Chopi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ccg",
  Description: ["Samba Daka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cch",
  Description: ["Atsam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ccj",
  Description: ["Kasanga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ccl",
  Description: ["Cutchi-Swahili"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ccm",
  Description: ["Malaccan Creole Malay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ccn",
  Description: ["North Caucasian languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cco",
  Description: ["Comaltepec Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ccp",
  Description: ["Chakma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ccq",
  Description: ["Chaungtha"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  "Preferred-Value": "rki"
}, {
  Type: "language",
  Subtag: "ccr",
  Description: ["Cacaopera"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ccs",
  Description: ["South Caucasian languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cda",
  Description: ["Choni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cdc",
  Description: ["Chadic languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cdd",
  Description: ["Caddoan languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cde",
  Description: ["Chenchu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cdf",
  Description: ["Chiru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cdg",
  Description: ["Chamari"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28"
}, {
  Type: "language",
  Subtag: "cdh",
  Description: ["Chambeali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cdi",
  Description: ["Chodri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cdj",
  Description: ["Churahi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cdm",
  Description: ["Chepang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cdn",
  Description: ["Chaudangsi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cdo",
  Description: ["Min Dong Chinese"],
  Added: "2009-07-29",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "cdr",
  Description: ["Cinda-Regi-Tiyal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cds",
  Description: ["Chadian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cdy",
  Description: ["Chadong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cdz",
  Description: ["Koda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cea",
  Description: ["Lower Chehalis"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ceb",
  Description: ["Cebuano"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ceg",
  Description: ["Chamacoco"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cek",
  Description: ["Eastern Khumi Chin"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "cel",
  Description: ["Celtic languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cen",
  Description: ["Cen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cet",
  Description: ["Centúúm"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cey",
  Description: ["Ekai Chin"],
  Added: "2019-04-16"
}, {
  Type: "language",
  Subtag: "cfa",
  Description: ["Dijim-Bwilim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cfd",
  Description: ["Cara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cfg",
  Description: ["Como Karim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cfm",
  Description: ["Falam Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cga",
  Description: ["Changriwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cgc",
  Description: ["Kagayanen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cgg",
  Description: ["Chiga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cgk",
  Description: ["Chocangacakha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chb",
  Description: ["Chibcha"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "chc",
  Description: ["Catawba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chd",
  Description: ["Highland Oaxaca Chontal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chf",
  Description: ["Tabasco Chontal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chg",
  Description: ["Chagatai"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "chh",
  Description: ["Chinook"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chj",
  Description: ["Ojitlán Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chk",
  Description: ["Chuukese"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "chl",
  Description: ["Cahuilla"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chm",
  Description: ["Mari (Russia)"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "chn",
  Description: ["Chinook jargon"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "cho",
  Description: ["Choctaw"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "chp",
  Description: ["Chipewyan", "Dene Suline"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "chq",
  Description: ["Quiotepec Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chr",
  Description: ["Cherokee"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "cht",
  Description: ["Cholón"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chw",
  Description: ["Chuwabu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chx",
  Description: ["Chantyal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "chy",
  Description: ["Cheyenne"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "chz",
  Description: ["Ozumacín Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cia",
  Description: ["Cia-Cia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cib",
  Description: ["Ci Gbe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cic",
  Description: ["Chickasaw"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cid",
  Description: ["Chimariko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cie",
  Description: ["Cineni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cih",
  Description: ["Chinali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cik",
  Description: ["Chitkuli Kinnauri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cim",
  Description: ["Cimbrian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cin",
  Description: ["Cinta Larga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cip",
  Description: ["Chiapanec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cir",
  Description: ["Tiri", "Haméa", "Méa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ciw",
  Description: ["Chippewa"],
  Added: "2009-07-29",
  Macrolanguage: "oj"
}, {
  Type: "language",
  Subtag: "ciy",
  Description: ["Chaima"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cja",
  Description: ["Western Cham"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cje",
  Description: ["Chru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cjh",
  Description: ["Upper Chehalis"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cji",
  Description: ["Chamalal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cjk",
  Description: ["Chokwe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cjm",
  Description: ["Eastern Cham"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cjn",
  Description: ["Chenapian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cjo",
  Description: ["Ashéninka Pajonal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cjp",
  Description: ["Cabécar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cjr",
  Description: ["Chorotega"],
  Added: "2009-07-29",
  Deprecated: "2010-03-11",
  "Preferred-Value": "mom"
}, {
  Type: "language",
  Subtag: "cjs",
  Description: ["Shor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cjv",
  Description: ["Chuave"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cjy",
  Description: ["Jinyu Chinese"],
  Added: "2009-07-29",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "cka",
  Description: ["Khumi Awa Chin"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  "Preferred-Value": "cmr"
}, {
  Type: "language",
  Subtag: "ckb",
  Description: ["Central Kurdish"],
  Added: "2009-07-29",
  Macrolanguage: "ku"
}, {
  Type: "language",
  Subtag: "ckh",
  Description: ["Chak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ckl",
  Description: ["Cibak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ckm",
  Description: ["Chakavian"],
  Added: "2020-03-28"
}, {
  Type: "language",
  Subtag: "ckn",
  Description: ["Kaang Chin"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "cko",
  Description: ["Anufo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ckq",
  Description: ["Kajakse"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ckr",
  Description: ["Kairak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cks",
  Description: ["Tayo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ckt",
  Description: ["Chukot"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cku",
  Description: ["Koasati"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ckv",
  Description: ["Kavalan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ckx",
  Description: ["Caka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cky",
  Description: ["Cakfem-Mushere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ckz",
  Description: ["Cakchiquel-Quiché Mixed Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cla",
  Description: ["Ron"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "clc",
  Description: ["Chilcotin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cld",
  Description: ["Chaldean Neo-Aramaic"],
  Added: "2009-07-29",
  Macrolanguage: "syr"
}, {
  Type: "language",
  Subtag: "cle",
  Description: ["Lealao Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "clh",
  Description: ["Chilisso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cli",
  Description: ["Chakali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "clj",
  Description: ["Laitu Chin"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "clk",
  Description: ["Idu-Mishmi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cll",
  Description: ["Chala"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "clm",
  Description: ["Clallam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "clo",
  Description: ["Lowland Oaxaca Chontal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "clt",
  Description: ["Lautu Chin"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "clu",
  Description: ["Caluyanun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "clw",
  Description: ["Chulym"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cly",
  Description: ["Eastern Highland Chatino"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cma",
  Description: ["Maa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cmc",
  Description: ["Chamic languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cme",
  Description: ["Cerma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cmg",
  Description: ["Classical Mongolian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cmi",
  Description: ["Emberá-Chamí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cmk",
  Description: ["Chimakum"],
  Added: "2009-07-29",
  Deprecated: "2010-03-11",
  "Preferred-Value": "xch"
}, {
  Type: "language",
  Subtag: "cml",
  Description: ["Campalagian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cmm",
  Description: ["Michigamea"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cmn",
  Description: ["Mandarin Chinese"],
  Added: "2009-07-29",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "cmo",
  Description: ["Central Mnong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cmr",
  Description: ["Mro-Khimi Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cms",
  Description: ["Messapic"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cmt",
  Description: ["Camtho"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cna",
  Description: ["Changthang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cnb",
  Description: ["Chinbon Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cnc",
  Description: ["Côông"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cng",
  Description: ["Northern Qiang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cnh",
  Description: ["Hakha Chin", "Haka Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cni",
  Description: ["Asháninka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cnk",
  Description: ["Khumi Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cnl",
  Description: ["Lalana Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cno",
  Description: ["Con"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cnp",
  Description: ["Northern Ping Chinese", "Northern Pinghua"],
  Added: "2020-03-28",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "cnq",
  Description: ["Chung"],
  Added: "2022-02-25"
}, {
  Type: "language",
  Subtag: "cnr",
  Description: ["Montenegrin"],
  Added: "2018-01-23",
  Macrolanguage: "sh",
  Comments: ["see sr for Serbian"]
}, {
  Type: "language",
  Subtag: "cns",
  Description: ["Central Asmat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cnt",
  Description: ["Tepetotutla Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cnu",
  Description: ["Chenoua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cnw",
  Description: ["Ngawn Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cnx",
  Description: ["Middle Cornish"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "coa",
  Description: ["Cocos Islands Malay"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "cob",
  Description: ["Chicomuceltec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "coc",
  Description: ["Cocopa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cod",
  Description: ["Cocama-Cocamilla"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "coe",
  Description: ["Koreguaje"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cof",
  Description: ["Colorado"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cog",
  Description: ["Chong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "coh",
  Description: ["Chonyi-Dzihana-Kauma", "Chichonyi-Chidzihana-Chikauma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "coj",
  Description: ["Cochimi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cok",
  Description: ["Santa Teresa Cora"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "col",
  Description: ["Columbia-Wenatchi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "com",
  Description: ["Comanche"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "con",
  Description: ["Cofán"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "coo",
  Description: ["Comox"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cop",
  Description: ["Coptic"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "coq",
  Description: ["Coquille"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cot",
  Description: ["Caquinte"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cou",
  Description: ["Wamey"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cov",
  Description: ["Cao Miao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cow",
  Description: ["Cowlitz"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cox",
  Description: ["Nanti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "coy",
  Description: ["Coyaima"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  "Preferred-Value": "pij"
}, {
  Type: "language",
  Subtag: "coz",
  Description: ["Chochotec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cpa",
  Description: ["Palantla Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cpb",
  Description: ["Ucayali-Yurúa Ashéninka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cpc",
  Description: ["Ajyíninka Apurucayali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cpe",
  Description: ["English-based creoles and pidgins"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cpf",
  Description: ["French-based creoles and pidgins"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cpg",
  Description: ["Cappadocian Greek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cpi",
  Description: ["Chinese Pidgin English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cpn",
  Description: ["Cherepon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cpo",
  Description: ["Kpeego"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "cpp",
  Description: ["Portuguese-based creoles and pidgins"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cps",
  Description: ["Capiznon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cpu",
  Description: ["Pichis Ashéninka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cpx",
  Description: ["Pu-Xian Chinese"],
  Added: "2009-07-29",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "cpy",
  Description: ["South Ucayali Ashéninka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cqd",
  Description: ["Chuanqiandian Cluster Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "cqu",
  Description: ["Chilean Quechua"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  "Preferred-Value": "quh",
  Macrolanguage: "qu"
}, {
  Type: "language",
  Subtag: "cra",
  Description: ["Chara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crb",
  Description: ["Island Carib"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crc",
  Description: ["Lonwolwol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crd",
  Description: ["Coeur d'Alene"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crf",
  Description: ["Caramanta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crg",
  Description: ["Michif"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crh",
  Description: ["Crimean Tatar", "Crimean Turkish"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "cri",
  Description: ["Sãotomense"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crj",
  Description: ["Southern East Cree"],
  Added: "2009-07-29",
  Macrolanguage: "cr"
}, {
  Type: "language",
  Subtag: "crk",
  Description: ["Plains Cree"],
  Added: "2009-07-29",
  Macrolanguage: "cr"
}, {
  Type: "language",
  Subtag: "crl",
  Description: ["Northern East Cree"],
  Added: "2009-07-29",
  Macrolanguage: "cr"
}, {
  Type: "language",
  Subtag: "crm",
  Description: ["Moose Cree"],
  Added: "2009-07-29",
  Macrolanguage: "cr"
}, {
  Type: "language",
  Subtag: "crn",
  Description: ["El Nayar Cora"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cro",
  Description: ["Crow"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crp",
  Description: ["Creoles and pidgins"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "crq",
  Description: ["Iyo'wujwa Chorote"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crr",
  Description: ["Carolina Algonquian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crs",
  Description: ["Seselwa Creole French"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crt",
  Description: ["Iyojwa'ja Chorote"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crv",
  Description: ["Chaura"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crw",
  Description: ["Chrau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crx",
  Description: ["Carrier"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cry",
  Description: ["Cori"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "crz",
  Description: ["Cruzeño"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csa",
  Description: ["Chiltepec Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csb",
  Description: ["Kashubian"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "csc",
  Description: ["Catalan Sign Language", "Lengua de señas catalana", "Llengua de Signes Catalana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csd",
  Description: ["Chiangmai Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cse",
  Description: ["Czech Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csf",
  Description: ["Cuba Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csg",
  Description: ["Chilean Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csh",
  Description: ["Asho Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csi",
  Description: ["Coast Miwok"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csj",
  Description: ["Songlai Chin"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "csk",
  Description: ["Jola-Kasa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csl",
  Description: ["Chinese Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csm",
  Description: ["Central Sierra Miwok"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csn",
  Description: ["Colombian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cso",
  Description: ["Sochiapam Chinantec", "Sochiapan Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csp",
  Description: ["Southern Ping Chinese", "Southern Pinghua"],
  Added: "2020-03-28",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "csq",
  Description: ["Croatia Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csr",
  Description: ["Costa Rican Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "css",
  Description: ["Southern Ohlone"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cst",
  Description: ["Northern Ohlone"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csu",
  Description: ["Central Sudanic languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "csv",
  Description: ["Sumtu Chin"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "csw",
  Description: ["Swampy Cree"],
  Added: "2009-07-29",
  Macrolanguage: "cr"
}, {
  Type: "language",
  Subtag: "csx",
  Description: ["Cambodian Sign Language"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "csy",
  Description: ["Siyin Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "csz",
  Description: ["Coos"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cta",
  Description: ["Tataltepec Chatino"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ctc",
  Description: ["Chetco"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ctd",
  Description: ["Tedim Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cte",
  Description: ["Tepinapa Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ctg",
  Description: ["Chittagonian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cth",
  Description: ["Thaiphum Chin"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "ctl",
  Description: ["Tlacoatzintepec Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ctm",
  Description: ["Chitimacha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ctn",
  Description: ["Chhintange"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cto",
  Description: ["Emberá-Catío"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ctp",
  Description: ["Western Highland Chatino"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cts",
  Description: ["Northern Catanduanes Bikol"],
  Added: "2009-07-29",
  Macrolanguage: "bik"
}, {
  Type: "language",
  Subtag: "ctt",
  Description: ["Wayanad Chetti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ctu",
  Description: ["Chol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cty",
  Description: ["Moundadan Chetty"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "ctz",
  Description: ["Zacatepec Chatino"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cua",
  Description: ["Cua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cub",
  Description: ["Cubeo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cuc",
  Description: ["Usila Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cug",
  Description: ["Chungmboko", "Cung"],
  Added: "2009-07-29",
  Deprecated: "2022-02-25",
  Comments: ["see bpc, cnq"]
}, {
  Type: "language",
  Subtag: "cuh",
  Description: ["Chuka", "Gichuka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cui",
  Description: ["Cuiba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cuj",
  Description: ["Mashco Piro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cuk",
  Description: ["San Blas Kuna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cul",
  Description: ["Culina", "Kulina"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cum",
  Description: ["Cumeral"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30"
}, {
  Type: "language",
  Subtag: "cuo",
  Description: ["Cumanagoto"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cup",
  Description: ["Cupeño"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cuq",
  Description: ["Cun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cur",
  Description: ["Chhulung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cus",
  Description: ["Cushitic languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "cut",
  Description: ["Teutila Cuicatec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cuu",
  Description: ["Tai Ya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cuv",
  Description: ["Cuvok"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cuw",
  Description: ["Chukwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cux",
  Description: ["Tepeuxila Cuicatec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cuy",
  Description: ["Cuitlatec"],
  Added: "2018-03-08"
}, {
  Type: "language",
  Subtag: "cvg",
  Description: ["Chug"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cvn",
  Description: ["Valle Nacional Chinantec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cwa",
  Description: ["Kabwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cwb",
  Description: ["Maindo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cwd",
  Description: ["Woods Cree"],
  Added: "2009-07-29",
  Macrolanguage: "cr"
}, {
  Type: "language",
  Subtag: "cwe",
  Description: ["Kwere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cwg",
  Description: ["Chewong", "Cheq Wong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cwt",
  Description: ["Kuwaataay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cya",
  Description: ["Nopala Chatino"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cyb",
  Description: ["Cayubaba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "cyo",
  Description: ["Cuyonon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "czh",
  Description: ["Huizhou Chinese"],
  Added: "2009-07-29",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "czk",
  Description: ["Knaanic"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "czn",
  Description: ["Zenzontepec Chatino"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "czo",
  Description: ["Min Zhong Chinese"],
  Added: "2009-07-29",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "czt",
  Description: ["Zotung Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "daa",
  Description: ["Dangaléat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dac",
  Description: ["Dambi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dad",
  Description: ["Marik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dae",
  Description: ["Duupa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "daf",
  Description: ["Dan"],
  Added: "2009-07-29",
  Deprecated: "2013-09-10",
  Comments: ["see dnj, lda"]
}, {
  Type: "language",
  Subtag: "dag",
  Description: ["Dagbani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dah",
  Description: ["Gwahatike"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dai",
  Description: ["Day"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "daj",
  Description: ["Dar Fur Daju"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dak",
  Description: ["Dakota"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "dal",
  Description: ["Dahalo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dam",
  Description: ["Damakawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dao",
  Description: ["Daai Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dap",
  Description: ["Nisi (India)"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  Comments: ["see njz, tgj"]
}, {
  Type: "language",
  Subtag: "daq",
  Description: ["Dandami Maria"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dar",
  Description: ["Dargwa"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "das",
  Description: ["Daho-Doo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dau",
  Description: ["Dar Sila Daju"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dav",
  Description: ["Taita", "Dawida"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "daw",
  Description: ["Davawenyo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dax",
  Description: ["Dayi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "day",
  Description: ["Land Dayak languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "daz",
  Description: ["Dao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dba",
  Description: ["Bangime"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbb",
  Description: ["Deno"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbd",
  Description: ["Dadiya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbe",
  Description: ["Dabe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbf",
  Description: ["Edopi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbg",
  Description: ["Dogul Dom Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbi",
  Description: ["Doka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbj",
  Description: ["Ida'an"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbl",
  Description: ["Dyirbal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbm",
  Description: ["Duguri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbn",
  Description: ["Duriankere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbo",
  Description: ["Dulbu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbp",
  Description: ["Duwai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbq",
  Description: ["Daba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbr",
  Description: ["Dabarre"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbt",
  Description: ["Ben Tey Dogon"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "dbu",
  Description: ["Bondum Dom Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbv",
  Description: ["Dungu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dbw",
  Description: ["Bankan Tey Dogon"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "dby",
  Description: ["Dibiyaso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dcc",
  Description: ["Deccan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dcr",
  Description: ["Negerhollands"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dda",
  Description: ["Dadi Dadi"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "ddd",
  Description: ["Dongotono"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dde",
  Description: ["Doondo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ddg",
  Description: ["Fataluku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ddi",
  Description: ["West Goodenough"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ddj",
  Description: ["Jaru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ddn",
  Description: ["Dendi (Benin)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ddo",
  Description: ["Dido"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ddr",
  Description: ["Dhudhuroa"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "dds",
  Description: ["Donno So Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ddw",
  Description: ["Dawera-Daweloor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dec",
  Description: ["Dagik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ded",
  Description: ["Dedua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dee",
  Description: ["Dewoin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "def",
  Description: ["Dezfuli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "deg",
  Description: ["Degema"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "deh",
  Description: ["Dehwari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dei",
  Description: ["Demisa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dek",
  Description: ["Dek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "del",
  Description: ["Delaware"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "dem",
  Description: ["Dem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "den",
  Description: ["Slave (Athapascan)"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "dep",
  Description: ["Pidgin Delaware"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "deq",
  Description: ["Dendi (Central African Republic)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "der",
  Description: ["Deori"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "des",
  Description: ["Desano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dev",
  Description: ["Domung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dez",
  Description: ["Dengese"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dga",
  Description: ["Southern Dagaare"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgb",
  Description: ["Bunoge Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgc",
  Description: ["Casiguran Dumagat Agta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgd",
  Description: ["Dagaari Dioula"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dge",
  Description: ["Degenan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgg",
  Description: ["Doga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgh",
  Description: ["Dghwede"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgi",
  Description: ["Northern Dagara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgk",
  Description: ["Dagba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgl",
  Description: ["Andaandi", "Dongolawi"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "dgn",
  Description: ["Dagoman"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgo",
  Description: ["Dogri (individual language)"],
  Added: "2009-07-29",
  Macrolanguage: "doi"
}, {
  Type: "language",
  Subtag: "dgr",
  Description: ["Dogrib", "Tłı̨chǫ"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "dgs",
  Description: ["Dogoso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgt",
  Description: ["Ndra'ngith"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "dgu",
  Description: ["Degaru"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28"
}, {
  Type: "language",
  Subtag: "dgw",
  Description: ["Daungwurrung"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "dgx",
  Description: ["Doghoro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dgz",
  Description: ["Daga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dha",
  Description: ["Dhanwar (India)"],
  Added: "2009-07-29",
  Deprecated: "2011-08-16"
}, {
  Type: "language",
  Subtag: "dhd",
  Description: ["Dhundari"],
  Added: "2009-07-29",
  Macrolanguage: "mwr"
}, {
  Type: "language",
  Subtag: "dhg",
  Description: ["Dhangu-Djangu", "Dhangu", "Djangu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dhi",
  Description: ["Dhimal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dhl",
  Description: ["Dhalandji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dhm",
  Description: ["Zemba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dhn",
  Description: ["Dhanki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dho",
  Description: ["Dhodia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dhr",
  Description: ["Dhargari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dhs",
  Description: ["Dhaiso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dhu",
  Description: ["Dhurga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dhv",
  Description: ["Dehu", "Drehu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dhw",
  Description: ["Dhanwar (Nepal)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dhx",
  Description: ["Dhungaloo"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "dia",
  Description: ["Dia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dib",
  Description: ["South Central Dinka"],
  Added: "2009-07-29",
  Macrolanguage: "din"
}, {
  Type: "language",
  Subtag: "dic",
  Description: ["Lakota Dida"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "did",
  Description: ["Didinga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dif",
  Description: ["Dieri", "Diyari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dig",
  Description: ["Digo", "Chidigo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dih",
  Description: ["Kumiai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dii",
  Description: ["Dimbong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dij",
  Description: ["Dai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dik",
  Description: ["Southwestern Dinka"],
  Added: "2009-07-29",
  Macrolanguage: "din"
}, {
  Type: "language",
  Subtag: "dil",
  Description: ["Dilling"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dim",
  Description: ["Dime"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "din",
  Description: ["Dinka"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "dio",
  Description: ["Dibo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dip",
  Description: ["Northeastern Dinka"],
  Added: "2009-07-29",
  Macrolanguage: "din"
}, {
  Type: "language",
  Subtag: "diq",
  Description: ["Dimli (individual language)"],
  Added: "2009-07-29",
  Macrolanguage: "zza"
}, {
  Type: "language",
  Subtag: "dir",
  Description: ["Dirim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dis",
  Description: ["Dimasa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dit",
  Description: ["Dirari"],
  Added: "2009-07-29",
  Deprecated: "2019-04-29",
  "Preferred-Value": "dif"
}, {
  Type: "language",
  Subtag: "diu",
  Description: ["Diriku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "diw",
  Description: ["Northwestern Dinka"],
  Added: "2009-07-29",
  Macrolanguage: "din"
}, {
  Type: "language",
  Subtag: "dix",
  Description: ["Dixon Reef"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "diy",
  Description: ["Diuwe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "diz",
  Description: ["Ding"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dja",
  Description: ["Djadjawurrung"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "djb",
  Description: ["Djinba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "djc",
  Description: ["Dar Daju Daju"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "djd",
  Description: ["Djamindjung", "Ngaliwurru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dje",
  Description: ["Zarma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "djf",
  Description: ["Djangun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dji",
  Description: ["Djinang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "djj",
  Description: ["Djeebbana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "djk",
  Description: ["Eastern Maroon Creole", "Businenge Tongo", "Nenge"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "djl",
  Description: ["Djiwarli"],
  Added: "2009-07-29",
  Deprecated: "2013-09-10",
  Comments: ["see dze, iin"]
}, {
  Type: "language",
  Subtag: "djm",
  Description: ["Jamsay Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "djn",
  Description: ["Jawoyn", "Djauan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "djo",
  Description: ["Jangkang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "djr",
  Description: ["Djambarrpuyngu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dju",
  Description: ["Kapriman"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "djw",
  Description: ["Djawi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dka",
  Description: ["Dakpakha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dkg",
  Description: ["Kadung"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "dkk",
  Description: ["Dakka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dkl",
  Description: ["Kolum So Dogon"],
  Added: "2009-07-29",
  Deprecated: "2011-08-16",
  Comments: ["see aqd, dmb"]
}, {
  Type: "language",
  Subtag: "dkr",
  Description: ["Kuijau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dks",
  Description: ["Southeastern Dinka"],
  Added: "2009-07-29",
  Macrolanguage: "din"
}, {
  Type: "language",
  Subtag: "dkx",
  Description: ["Mazagway"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dlg",
  Description: ["Dolgan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dlk",
  Description: ["Dahalik"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "dlm",
  Description: ["Dalmatian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dln",
  Description: ["Darlong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dma",
  Description: ["Duma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmb",
  Description: ["Mombo Dogon"],
  Added: "2011-08-16"
}, {
  Type: "language",
  Subtag: "dmc",
  Description: ["Gavak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmd",
  Description: ["Madhi Madhi"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "dme",
  Description: ["Dugwor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmf",
  Description: ["Medefaidrin"],
  Added: "2020-03-28"
}, {
  Type: "language",
  Subtag: "dmg",
  Description: ["Upper Kinabatangan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmk",
  Description: ["Domaaki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dml",
  Description: ["Dameli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmm",
  Description: ["Dama"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmn",
  Description: ["Mande languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "dmo",
  Description: ["Kemedzung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmr",
  Description: ["East Damar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dms",
  Description: ["Dampelas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmu",
  Description: ["Dubu", "Tebi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmv",
  Description: ["Dumpas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmw",
  Description: ["Mudburra"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "dmx",
  Description: ["Dema"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dmy",
  Description: ["Demta", "Sowari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dna",
  Description: ["Upper Grand Valley Dani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dnd",
  Description: ["Daonda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dne",
  Description: ["Ndendeule"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dng",
  Description: ["Dungan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dni",
  Description: ["Lower Grand Valley Dani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dnj",
  Description: ["Dan"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "dnk",
  Description: ["Dengka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dnn",
  Description: ["Dzùùngoo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dno",
  Description: ["Ndrulo", "Northern Lendu"],
  Added: "2018-10-28"
}, {
  Type: "language",
  Subtag: "dnr",
  Description: ["Danaru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dnt",
  Description: ["Mid Grand Valley Dani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dnu",
  Description: ["Danau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dnv",
  Description: ["Danu"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "dnw",
  Description: ["Western Dani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dny",
  Description: ["Dení"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "doa",
  Description: ["Dom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dob",
  Description: ["Dobu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "doc",
  Description: ["Northern Dong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "doe",
  Description: ["Doe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dof",
  Description: ["Domu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "doh",
  Description: ["Dong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "doi",
  Description: ["Dogri (macrolanguage)"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "dok",
  Description: ["Dondo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dol",
  Description: ["Doso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "don",
  Description: ["Toura (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "doo",
  Description: ["Dongo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dop",
  Description: ["Lukpa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "doq",
  Description: ["Dominican Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dor",
  Description: ["Dori'o"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dos",
  Description: ["Dogosé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dot",
  Description: ["Dass"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dov",
  Description: ["Dombe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dow",
  Description: ["Doyayo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dox",
  Description: ["Bussa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "doy",
  Description: ["Dompo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "doz",
  Description: ["Dorze"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dpp",
  Description: ["Papar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dra",
  Description: ["Dravidian languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "drb",
  Description: ["Dair"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "drc",
  Description: ["Minderico"],
  Added: "2011-08-16"
}, {
  Type: "language",
  Subtag: "drd",
  Description: ["Darmiya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dre",
  Description: ["Dolpo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "drg",
  Description: ["Rungus"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "drh",
  Description: ["Darkhat"],
  Added: "2009-07-29",
  Deprecated: "2010-03-11",
  "Preferred-Value": "khk"
}, {
  Type: "language",
  Subtag: "dri",
  Description: ["C'Lela"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "drl",
  Description: ["Paakantyi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "drn",
  Description: ["West Damar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dro",
  Description: ["Daro-Matu Melanau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "drq",
  Description: ["Dura"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "drr",
  Description: ["Dororo"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28",
  "Preferred-Value": "kzk"
}, {
  Type: "language",
  Subtag: "drs",
  Description: ["Gedeo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "drt",
  Description: ["Drents"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dru",
  Description: ["Rukai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "drw",
  Description: ["Darwazi"],
  Added: "2009-07-29",
  Deprecated: "2010-03-11",
  "Preferred-Value": "prs"
}, {
  Type: "language",
  Subtag: "dry",
  Description: ["Darai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dsb",
  Description: ["Lower Sorbian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "dse",
  Description: ["Dutch Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dsh",
  Description: ["Daasanach"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dsi",
  Description: ["Disa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dsl",
  Description: ["Danish Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dsn",
  Description: ["Dusner"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dso",
  Description: ["Desiya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dsq",
  Description: ["Tadaksahak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dsz",
  Description: ["Mardin Sign Language"],
  Added: "2022-02-25"
}, {
  Type: "language",
  Subtag: "dta",
  Description: ["Daur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dtb",
  Description: ["Labuk-Kinabatangan Kadazan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dtd",
  Description: ["Ditidaht"],
  Added: "2011-08-16"
}, {
  Type: "language",
  Subtag: "dth",
  Description: ["Adithinngithigh"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "dti",
  Description: ["Ana Tinga Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dtk",
  Description: ["Tene Kan Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dtm",
  Description: ["Tomo Kan Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dtn",
  Description: ["Daatsʼíin"],
  Added: "2016-05-30"
}, {
  Type: "language",
  Subtag: "dto",
  Description: ["Tommo So Dogon"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "dtp",
  Description: ["Kadazan Dusun", "Central Dusun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dtr",
  Description: ["Lotud"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dts",
  Description: ["Toro So Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dtt",
  Description: ["Toro Tegu Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dtu",
  Description: ["Tebul Ure Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dty",
  Description: ["Dotyali"],
  Added: "2012-08-12",
  Macrolanguage: "ne"
}, {
  Type: "language",
  Subtag: "dua",
  Description: ["Duala"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "dub",
  Description: ["Dubli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "duc",
  Description: ["Duna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dud",
  Description: ["Hun-Saare"],
  Added: "2009-07-29",
  Deprecated: "2019-04-16",
  Comments: ["see uth, uss"]
}, {
  Type: "language",
  Subtag: "due",
  Description: ["Umiray Dumaget Agta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "duf",
  Description: ["Dumbea", "Drubea"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dug",
  Description: ["Duruma", "Chiduruma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "duh",
  Description: ["Dungra Bhil"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dui",
  Description: ["Dumun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "duj",
  Description: ["Dhuwal"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  Comments: ["see dwu, dwy"]
}, {
  Type: "language",
  Subtag: "duk",
  Description: ["Uyajitaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dul",
  Description: ["Alabat Island Agta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dum",
  Description: ["Middle Dutch (ca. 1050-1350)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "dun",
  Description: ["Dusun Deyah"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "duo",
  Description: ["Dupaninan Agta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dup",
  Description: ["Duano"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "duq",
  Description: ["Dusun Malang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dur",
  Description: ["Dii"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dus",
  Description: ["Dumi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "duu",
  Description: ["Drung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "duv",
  Description: ["Duvle"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "duw",
  Description: ["Dusun Witu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dux",
  Description: ["Duungooma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "duy",
  Description: ["Dicamay Agta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "duz",
  Description: ["Duli-Gey"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dva",
  Description: ["Duau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dwa",
  Description: ["Diri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dwk",
  Description: ["Dawik Kui"],
  Added: "2020-03-28"
}, {
  Type: "language",
  Subtag: "dwl",
  Description: ["Walo Kumbe Dogon"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  Comments: ["see dbt, dbw"]
}, {
  Type: "language",
  Subtag: "dwr",
  Description: ["Dawro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dws",
  Description: ["Dutton World Speedwords"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dwu",
  Description: ["Dhuwal"],
  Added: "2016-05-30"
}, {
  Type: "language",
  Subtag: "dww",
  Description: ["Dawawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dwy",
  Description: ["Dhuwaya"],
  Added: "2016-05-30"
}, {
  Type: "language",
  Subtag: "dwz",
  Description: ["Dewas Rai"],
  Added: "2018-10-28"
}, {
  Type: "language",
  Subtag: "dya",
  Description: ["Dyan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dyb",
  Description: ["Dyaberdyaber"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dyd",
  Description: ["Dyugun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dyg",
  Description: ["Villa Viciosa Agta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dyi",
  Description: ["Djimini Senoufo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dym",
  Description: ["Yanda Dom Dogon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dyn",
  Description: ["Dyangadi", "Dhanggatti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dyo",
  Description: ["Jola-Fonyi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dyu",
  Description: ["Dyula"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "dyy",
  Description: ["Djabugay", "Dyaabugay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dza",
  Description: ["Tunzu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dzd",
  Description: ["Daza"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12"
}, {
  Type: "language",
  Subtag: "dze",
  Description: ["Djiwarli"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "dzg",
  Description: ["Dazaga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dzl",
  Description: ["Dzalakha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "dzn",
  Description: ["Dzando"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eaa",
  Description: ["Karenggapa"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "ebc",
  Description: ["Beginci"],
  Added: "2020-03-28"
}, {
  Type: "language",
  Subtag: "ebg",
  Description: ["Ebughu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ebk",
  Description: ["Eastern Bontok"],
  Added: "2010-03-11",
  Macrolanguage: "bnc"
}, {
  Type: "language",
  Subtag: "ebo",
  Description: ["Teke-Ebo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ebr",
  Description: ["Ebrié"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ebu",
  Description: ["Embu", "Kiembu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ecr",
  Description: ["Eteocretan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ecs",
  Description: ["Ecuadorian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ecy",
  Description: ["Eteocypriot"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eee",
  Description: ["E"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "efa",
  Description: ["Efai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "efe",
  Description: ["Efe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "efi",
  Description: ["Efik"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ega",
  Description: ["Ega"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "egl",
  Description: ["Emilian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "egm",
  Description: ["Benamanga"],
  Added: "2022-02-25"
}, {
  Type: "language",
  Subtag: "ego",
  Description: ["Eggon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "egx",
  Description: ["Egyptian languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "egy",
  Description: ["Egyptian (Ancient)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ehs",
  Description: ["Miyakubo Sign Language"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "ehu",
  Description: ["Ehueun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eip",
  Description: ["Eipomek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eit",
  Description: ["Eitiep"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eiv",
  Description: ["Askopan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eja",
  Description: ["Ejamat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eka",
  Description: ["Ekajuk"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ekc",
  Description: ["Eastern Karnic"],
  Added: "2013-09-10",
  Deprecated: "2020-03-28"
}, {
  Type: "language",
  Subtag: "eke",
  Description: ["Ekit"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ekg",
  Description: ["Ekari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eki",
  Description: ["Eki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ekk",
  Description: ["Standard Estonian"],
  Added: "2009-07-29",
  Macrolanguage: "et"
}, {
  Type: "language",
  Subtag: "ekl",
  Description: ["Kol (Bangladesh)", "Kol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ekm",
  Description: ["Elip"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eko",
  Description: ["Koti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ekp",
  Description: ["Ekpeye"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ekr",
  Description: ["Yace"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eky",
  Description: ["Eastern Kayah"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ele",
  Description: ["Elepi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "elh",
  Description: ["El Hugeirat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eli",
  Description: ["Nding"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "elk",
  Description: ["Elkei"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "elm",
  Description: ["Eleme"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "elo",
  Description: ["El Molo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "elp",
  Description: ["Elpaputih"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  Comments: ["see amq, plh"]
}, {
  Type: "language",
  Subtag: "elu",
  Description: ["Elu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "elx",
  Description: ["Elamite"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ema",
  Description: ["Emai-Iuleha-Ora"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emb",
  Description: ["Embaloh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eme",
  Description: ["Emerillon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emg",
  Description: ["Eastern Meohang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emi",
  Description: ["Mussau-Emira"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emk",
  Description: ["Eastern Maninkakan"],
  Added: "2009-07-29",
  Macrolanguage: "man"
}, {
  Type: "language",
  Subtag: "emm",
  Description: ["Mamulique"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emn",
  Description: ["Eman"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emo",
  Description: ["Emok"],
  Added: "2009-07-29",
  Deprecated: "2014-02-28"
}, {
  Type: "language",
  Subtag: "emp",
  Description: ["Northern Emberá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emq",
  Description: ["Eastern Minyag"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "ems",
  Description: ["Pacific Gulf Yupik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emu",
  Description: ["Eastern Muria"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emw",
  Description: ["Emplawas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emx",
  Description: ["Erromintxela"],
  Added: "2010-03-11"
}, {
  Type: "language",
  Subtag: "emy",
  Description: ["Epigraphic Mayan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "emz",
  Description: ["Mbessa"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "ena",
  Description: ["Apali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "enb",
  Description: ["Markweeta"],
  Added: "2009-07-29",
  Macrolanguage: "kln"
}, {
  Type: "language",
  Subtag: "enc",
  Description: ["En"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "end",
  Description: ["Ende"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "enf",
  Description: ["Forest Enets"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "enh",
  Description: ["Tundra Enets"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "enl",
  Description: ["Enlhet"],
  Added: "2014-02-28"
}, {
  Type: "language",
  Subtag: "enm",
  Description: ["Middle English (1100-1500)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "enn",
  Description: ["Engenni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eno",
  Description: ["Enggano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "enq",
  Description: ["Enga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "enr",
  Description: ["Emumu", "Emem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "enu",
  Description: ["Enu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "env",
  Description: ["Enwan (Edo State)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "enw",
  Description: ["Enwan (Akwa Ibom State)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "enx",
  Description: ["Enxet"],
  Added: "2014-02-28"
}, {
  Type: "language",
  Subtag: "eot",
  Description: ["Beti (Côte d'Ivoire)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "epi",
  Description: ["Epie"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "era",
  Description: ["Eravallan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "erg",
  Description: ["Sie"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "erh",
  Description: ["Eruwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eri",
  Description: ["Ogea"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "erk",
  Description: ["South Efate"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ero",
  Description: ["Horpa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "err",
  Description: ["Erre"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ers",
  Description: ["Ersu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ert",
  Description: ["Eritai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "erw",
  Description: ["Erokwanas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ese",
  Description: ["Ese Ejja"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "esg",
  Description: ["Aheri Gondi"],
  Added: "2016-05-30",
  Macrolanguage: "gon"
}, {
  Type: "language",
  Subtag: "esh",
  Description: ["Eshtehardi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "esi",
  Description: ["North Alaskan Inupiatun"],
  Added: "2009-07-29",
  Macrolanguage: "ik"
}, {
  Type: "language",
  Subtag: "esk",
  Description: ["Northwest Alaska Inupiatun"],
  Added: "2009-07-29",
  Macrolanguage: "ik"
}, {
  Type: "language",
  Subtag: "esl",
  Description: ["Egypt Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "esm",
  Description: ["Esuma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "esn",
  Description: ["Salvadoran Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eso",
  Description: ["Estonian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "esq",
  Description: ["Esselen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ess",
  Description: ["Central Siberian Yupik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "esu",
  Description: ["Central Yupik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "esx",
  Description: ["Eskimo-Aleut languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "esy",
  Description: ["Eskayan"],
  Added: "2014-04-06"
}, {
  Type: "language",
  Subtag: "etb",
  Description: ["Etebi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "etc",
  Description: ["Etchemin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eth",
  Description: ["Ethiopian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "etn",
  Description: ["Eton (Vanuatu)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eto",
  Description: ["Eton (Cameroon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "etr",
  Description: ["Edolo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ets",
  Description: ["Yekhee"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ett",
  Description: ["Etruscan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "etu",
  Description: ["Ejagham"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "etx",
  Description: ["Eten"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "etz",
  Description: ["Semimi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "euq",
  Description: ["Basque (family)"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "eve",
  Description: ["Even"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "evh",
  Description: ["Uvbie"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "evn",
  Description: ["Evenki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ewo",
  Description: ["Ewondo"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ext",
  Description: ["Extremaduran"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eya",
  Description: ["Eyak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "eyo",
  Description: ["Keiyo"],
  Added: "2009-07-29",
  Macrolanguage: "kln"
}, {
  Type: "language",
  Subtag: "eza",
  Description: ["Ezaa"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "eze",
  Description: ["Uzekwe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "faa",
  Description: ["Fasu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fab",
  Description: ["Fa d'Ambu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fad",
  Description: ["Wagi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "faf",
  Description: ["Fagani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fag",
  Description: ["Finongan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fah",
  Description: ["Baissa Fali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fai",
  Description: ["Faiwol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "faj",
  Description: ["Faita"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fak",
  Description: ["Fang (Cameroon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fal",
  Description: ["South Fali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fam",
  Description: ["Fam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fan",
  Description: ["Fang (Equatorial Guinea)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "fap",
  Description: ["Paloor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "far",
  Description: ["Fataleka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fat",
  Description: ["Fanti"],
  Added: "2005-10-16",
  Macrolanguage: "ak"
}, {
  Type: "language",
  Subtag: "fau",
  Description: ["Fayu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fax",
  Description: ["Fala"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fay",
  Description: ["Southwestern Fars"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "faz",
  Description: ["Northwestern Fars"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fbl",
  Description: ["West Albay Bikol"],
  Added: "2010-03-11",
  Macrolanguage: "bik"
}, {
  Type: "language",
  Subtag: "fcs",
  Description: ["Quebec Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fer",
  Description: ["Feroge"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ffi",
  Description: ["Foia Foia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ffm",
  Description: ["Maasina Fulfulde"],
  Added: "2009-07-29",
  Macrolanguage: "ff"
}, {
  Type: "language",
  Subtag: "fgr",
  Description: ["Fongoro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fia",
  Description: ["Nobiin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fie",
  Description: ["Fyer"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fif",
  Description: ["Faifi"],
  Added: "2020-06-08"
}, {
  Type: "language",
  Subtag: "fil",
  Description: ["Filipino", "Pilipino"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "fip",
  Description: ["Fipa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fir",
  Description: ["Firan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fit",
  Description: ["Tornedalen Finnish", "Meänkieli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fiu",
  Description: ["Finno-Ugrian languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "fiw",
  Description: ["Fiwaga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fkk",
  Description: ["Kirya-Konzəl"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "fkv",
  Description: ["Kven Finnish"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fla",
  Description: ["Kalispel-Pend d'Oreille"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "flh",
  Description: ["Foau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fli",
  Description: ["Fali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fll",
  Description: ["North Fali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fln",
  Description: ["Flinders Island"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "flr",
  Description: ["Fuliiru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fly",
  Description: ["Flaaitaal", "Tsotsitaal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fmp",
  Description: ["Fe'fe'"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fmu",
  Description: ["Far Western Muria"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fnb",
  Description: ["Fanbak"],
  Added: "2016-05-30"
}, {
  Type: "language",
  Subtag: "fng",
  Description: ["Fanagalo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fni",
  Description: ["Fania"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fod",
  Description: ["Foodo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "foi",
  Description: ["Foi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fom",
  Description: ["Foma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fon",
  Description: ["Fon"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "for",
  Description: ["Fore"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fos",
  Description: ["Siraya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fox",
  Description: ["Formosan languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "fpe",
  Description: ["Fernando Po Creole English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fqs",
  Description: ["Fas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "frc",
  Description: ["Cajun French"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "frd",
  Description: ["Fordata"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "frk",
  Description: ["Frankish"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "frm",
  Description: ["Middle French (ca. 1400-1600)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "fro",
  Description: ["Old French (842-ca. 1400)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "frp",
  Description: ["Arpitan", "Francoprovençal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "frq",
  Description: ["Forak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "frr",
  Description: ["Northern Frisian"],
  Added: "2006-03-08",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "frs",
  Description: ["Eastern Frisian"],
  Added: "2006-03-08",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "frt",
  Description: ["Fortsenal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fse",
  Description: ["Finnish Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fsl",
  Description: ["French Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fss",
  Description: ["Finland-Swedish Sign Language", "finlandssvenskt teckenspråk", "suomenruotsalainen viittomakieli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fub",
  Description: ["Adamawa Fulfulde"],
  Added: "2009-07-29",
  Macrolanguage: "ff"
}, {
  Type: "language",
  Subtag: "fuc",
  Description: ["Pulaar"],
  Added: "2009-07-29",
  Macrolanguage: "ff"
}, {
  Type: "language",
  Subtag: "fud",
  Description: ["East Futuna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fue",
  Description: ["Borgu Fulfulde"],
  Added: "2009-07-29",
  Macrolanguage: "ff"
}, {
  Type: "language",
  Subtag: "fuf",
  Description: ["Pular"],
  Added: "2009-07-29",
  Macrolanguage: "ff"
}, {
  Type: "language",
  Subtag: "fuh",
  Description: ["Western Niger Fulfulde"],
  Added: "2009-07-29",
  Macrolanguage: "ff"
}, {
  Type: "language",
  Subtag: "fui",
  Description: ["Bagirmi Fulfulde"],
  Added: "2009-07-29",
  Macrolanguage: "ff"
}, {
  Type: "language",
  Subtag: "fuj",
  Description: ["Ko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fum",
  Description: ["Fum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fun",
  Description: ["Fulniô"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fuq",
  Description: ["Central-Eastern Niger Fulfulde"],
  Added: "2009-07-29",
  Macrolanguage: "ff"
}, {
  Type: "language",
  Subtag: "fur",
  Description: ["Friulian"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "fut",
  Description: ["Futuna-Aniwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fuu",
  Description: ["Furu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fuv",
  Description: ["Nigerian Fulfulde"],
  Added: "2009-07-29",
  Macrolanguage: "ff"
}, {
  Type: "language",
  Subtag: "fuy",
  Description: ["Fuyug"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fvr",
  Description: ["Fur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fwa",
  Description: ["Fwâi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "fwe",
  Description: ["Fwe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gaa",
  Description: ["Ga"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "gab",
  Description: ["Gabri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gac",
  Description: ["Mixed Great Andamanese"],
  Added: "2010-03-11"
}, {
  Type: "language",
  Subtag: "gad",
  Description: ["Gaddang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gae",
  Description: ["Guarequena"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gaf",
  Description: ["Gende"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gag",
  Description: ["Gagauz"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gah",
  Description: ["Alekano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gai",
  Description: ["Borei"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gaj",
  Description: ["Gadsup"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gak",
  Description: ["Gamkonora"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gal",
  Description: ["Galolen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gam",
  Description: ["Kandawo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gan",
  Description: ["Gan Chinese"],
  Added: "2009-07-29",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "gao",
  Description: ["Gants"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gap",
  Description: ["Gal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gaq",
  Description: ["Gata'"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gar",
  Description: ["Galeya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gas",
  Description: ["Adiwasi Garasia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gat",
  Description: ["Kenati"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gau",
  Description: ["Mudhili Gadaba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gav",
  Description: ["Gabutamon"],
  Added: "2009-07-29",
  Deprecated: "2010-03-11",
  "Preferred-Value": "dev"
}, {
  Type: "language",
  Subtag: "gaw",
  Description: ["Nobonob"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gax",
  Description: ["Borana-Arsi-Guji Oromo"],
  Added: "2009-07-29",
  Macrolanguage: "om"
}, {
  Type: "language",
  Subtag: "gay",
  Description: ["Gayo"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "gaz",
  Description: ["West Central Oromo"],
  Added: "2009-07-29",
  Macrolanguage: "om"
}, {
  Type: "language",
  Subtag: "gba",
  Description: ["Gbaya (Central African Republic)"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "gbb",
  Description: ["Kaytetye"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbc",
  Description: ["Garawa"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  Comments: ["see wny, wrk"]
}, {
  Type: "language",
  Subtag: "gbd",
  Description: ["Karajarri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbe",
  Description: ["Niksek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbf",
  Description: ["Gaikundi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbg",
  Description: ["Gbanziri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbh",
  Description: ["Defi Gbe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbi",
  Description: ["Galela"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbj",
  Description: ["Bodo Gadaba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbk",
  Description: ["Gaddi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbl",
  Description: ["Gamit"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbm",
  Description: ["Garhwali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbn",
  Description: ["Mo'da"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbo",
  Description: ["Northern Grebo"],
  Added: "2009-07-29",
  Macrolanguage: "grb"
}, {
  Type: "language",
  Subtag: "gbp",
  Description: ["Gbaya-Bossangoa"],
  Added: "2009-07-29",
  Macrolanguage: "gba"
}, {
  Type: "language",
  Subtag: "gbq",
  Description: ["Gbaya-Bozoum"],
  Added: "2009-07-29",
  Macrolanguage: "gba"
}, {
  Type: "language",
  Subtag: "gbr",
  Description: ["Gbagyi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbs",
  Description: ["Gbesi Gbe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbu",
  Description: ["Gagadu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbv",
  Description: ["Gbanu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbw",
  Description: ["Gabi-Gabi"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "gbx",
  Description: ["Eastern Xwla Gbe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gby",
  Description: ["Gbari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gbz",
  Description: ["Zoroastrian Dari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gcc",
  Description: ["Mali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gcd",
  Description: ["Ganggalida"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gce",
  Description: ["Galice"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gcf",
  Description: ["Guadeloupean Creole French"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gcl",
  Description: ["Grenadian Creole English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gcn",
  Description: ["Gaina"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gcr",
  Description: ["Guianese Creole French"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gct",
  Description: ["Colonia Tovar German"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gda",
  Description: ["Gade Lohar"],
  Added: "2009-07-29",
  Macrolanguage: "raj"
}, {
  Type: "language",
  Subtag: "gdb",
  Description: ["Pottangi Ollar Gadaba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdc",
  Description: ["Gugu Badhun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdd",
  Description: ["Gedaged"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gde",
  Description: ["Gude"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdf",
  Description: ["Guduf-Gava"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdg",
  Description: ["Ga'dang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdh",
  Description: ["Gadjerawang", "Gajirrabeng"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdi",
  Description: ["Gundi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdj",
  Description: ["Gurdjar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdk",
  Description: ["Gadang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdl",
  Description: ["Dirasha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdm",
  Description: ["Laal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdn",
  Description: ["Umanakaina"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdo",
  Description: ["Ghodoberi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdq",
  Description: ["Mehri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdr",
  Description: ["Wipi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gds",
  Description: ["Ghandruk Sign Language"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "gdt",
  Description: ["Kungardutyi"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "gdu",
  Description: ["Gudu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gdx",
  Description: ["Godwari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gea",
  Description: ["Geruma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "geb",
  Description: ["Kire"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gec",
  Description: ["Gboloo Grebo"],
  Added: "2009-07-29",
  Macrolanguage: "grb"
}, {
  Type: "language",
  Subtag: "ged",
  Description: ["Gade"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gef",
  Description: ["Gerai"],
  Added: "2020-03-28"
}, {
  Type: "language",
  Subtag: "geg",
  Description: ["Gengle"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "geh",
  Description: ["Hutterite German", "Hutterisch"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gei",
  Description: ["Gebe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gej",
  Description: ["Gen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gek",
  Description: ["Ywom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gel",
  Description: ["ut-Ma'in"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gem",
  Description: ["Germanic languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "geq",
  Description: ["Geme"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ges",
  Description: ["Geser-Gorom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gev",
  Description: ["Eviya"],
  Added: "2014-02-28"
}, {
  Type: "language",
  Subtag: "gew",
  Description: ["Gera"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gex",
  Description: ["Garre"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gey",
  Description: ["Enya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gez",
  Description: ["Geez"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "gfk",
  Description: ["Patpatar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gft",
  Description: ["Gafat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gfx",
  Description: ["Mangetti Dune ǃXung"],
  Added: "2012-08-12",
  Deprecated: "2015-02-12",
  "Preferred-Value": "vaj"
}, {
  Type: "language",
  Subtag: "gga",
  Description: ["Gao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ggb",
  Description: ["Gbii"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ggd",
  Description: ["Gugadj"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gge",
  Description: ["Gurr-goni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ggg",
  Description: ["Gurgula"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ggk",
  Description: ["Kungarakany"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ggl",
  Description: ["Ganglau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ggn",
  Description: ["Eastern Gurung"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  "Preferred-Value": "gvr"
}, {
  Type: "language",
  Subtag: "ggo",
  Description: ["Southern Gondi"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  Comments: ["see esg, wsg"]
}, {
  Type: "language",
  Subtag: "ggr",
  Description: ["Aghu Tharnggalu"],
  Added: "2009-07-29",
  Deprecated: "2013-09-10",
  Comments: ["see gtu, ikr"]
}, {
  Type: "language",
  Subtag: "ggt",
  Description: ["Gitua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ggu",
  Description: ["Gagu", "Gban"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ggw",
  Description: ["Gogodala"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gha",
  Description: ["Ghadamès"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ghc",
  Description: ["Hiberno-Scottish Gaelic"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ghe",
  Description: ["Southern Ghale"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ghh",
  Description: ["Northern Ghale"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ghk",
  Description: ["Geko Karen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ghl",
  Description: ["Ghulfan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ghn",
  Description: ["Ghanongga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gho",
  Description: ["Ghomara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ghr",
  Description: ["Ghera"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ghs",
  Description: ["Guhu-Samane"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ght",
  Description: ["Kuke", "Kutang Ghale"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gia",
  Description: ["Kija"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gib",
  Description: ["Gibanawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gic",
  Description: ["Gail"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gid",
  Description: ["Gidar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gie",
  Description: ["Gaɓogbo", "Guébie"],
  Added: "2017-02-23"
}, {
  Type: "language",
  Subtag: "gig",
  Description: ["Goaria"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gih",
  Description: ["Githabul"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "gii",
  Description: ["Girirra"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "gil",
  Description: ["Gilbertese"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "gim",
  Description: ["Gimi (Eastern Highlands)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gin",
  Description: ["Hinukh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gio",
  Description: ["Gelao"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  Comments: ["see aou, gqu"]
}, {
  Type: "language",
  Subtag: "gip",
  Description: ["Gimi (West New Britain)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "giq",
  Description: ["Green Gelao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gir",
  Description: ["Red Gelao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gis",
  Description: ["North Giziga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "git",
  Description: ["Gitxsan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "giu",
  Description: ["Mulao"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "giw",
  Description: ["White Gelao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gix",
  Description: ["Gilima"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "giy",
  Description: ["Giyug"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "giz",
  Description: ["South Giziga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gji",
  Description: ["Geji"],
  Added: "2009-07-29",
  Deprecated: "2021-02-20",
  Comments: ["see gyz, zbu"]
}, {
  Type: "language",
  Subtag: "gjk",
  Description: ["Kachi Koli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gjm",
  Description: ["Gunditjmara"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "gjn",
  Description: ["Gonja"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gjr",
  Description: ["Gurindji Kriol"],
  Added: "2016-05-30"
}, {
  Type: "language",
  Subtag: "gju",
  Description: ["Gujari"],
  Added: "2009-07-29",
  Macrolanguage: "raj"
}, {
  Type: "language",
  Subtag: "gka",
  Description: ["Guya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gkd",
  Description: ["Magɨ (Madang Province)"],
  Added: "2018-03-08"
}, {
  Type: "language",
  Subtag: "gke",
  Description: ["Ndai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gkn",
  Description: ["Gokana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gko",
  Description: ["Kok-Nar"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "gkp",
  Description: ["Guinea Kpelle"],
  Added: "2009-07-29",
  Macrolanguage: "kpe"
}, {
  Type: "language",
  Subtag: "gku",
  Description: ["ǂUngkue"],
  Added: "2015-02-12"
}, {
  Type: "language",
  Subtag: "glb",
  Description: ["Belning"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "glc",
  Description: ["Bon Gula"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gld",
  Description: ["Nanai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "glh",
  Description: ["Northwest Pashai", "Northwest Pashayi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gli",
  Description: ["Guliguli"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28",
  "Preferred-Value": "kzk"
}, {
  Type: "language",
  Subtag: "glj",
  Description: ["Gula Iro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "glk",
  Description: ["Gilaki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gll",
  Description: ["Garlali"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "glo",
  Description: ["Galambu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "glr",
  Description: ["Glaro-Twabo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "glu",
  Description: ["Gula (Chad)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "glw",
  Description: ["Glavda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gly",
  Description: ["Gule"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gma",
  Description: ["Gambera"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gmb",
  Description: ["Gula'alaa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gmd",
  Description: ["Mághdì"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gme",
  Description: ["East Germanic languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "gmg",
  Description: ["Magɨyi"],
  Added: "2014-02-28"
}, {
  Type: "language",
  Subtag: "gmh",
  Description: ["Middle High German (ca. 1050-1500)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "gml",
  Description: ["Middle Low German"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gmm",
  Description: ["Gbaya-Mbodomo"],
  Added: "2009-07-29",
  Macrolanguage: "gba"
}, {
  Type: "language",
  Subtag: "gmn",
  Description: ["Gimnime"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gmq",
  Description: ["North Germanic languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "gmr",
  Description: ["Mirning", "Mirniny"],
  Added: "2020-03-28"
}, {
  Type: "language",
  Subtag: "gmu",
  Description: ["Gumalu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gmv",
  Description: ["Gamo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gmw",
  Description: ["West Germanic languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "gmx",
  Description: ["Magoma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gmy",
  Description: ["Mycenaean Greek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gmz",
  Description: ["Mgbolizhia"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "gna",
  Description: ["Kaansa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnb",
  Description: ["Gangte"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnc",
  Description: ["Guanche"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnd",
  Description: ["Zulgo-Gemzek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gne",
  Description: ["Ganang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gng",
  Description: ["Ngangam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnh",
  Description: ["Lere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gni",
  Description: ["Gooniyandi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnj",
  Description: ["Ngen"],
  Added: "2018-03-08"
}, {
  Type: "language",
  Subtag: "gnk",
  Description: ["ǁGana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnl",
  Description: ["Gangulu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnm",
  Description: ["Ginuman"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnn",
  Description: ["Gumatj"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gno",
  Description: ["Northern Gondi"],
  Added: "2009-07-29",
  Macrolanguage: "gon"
}, {
  Type: "language",
  Subtag: "gnq",
  Description: ["Gana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnr",
  Description: ["Gureng Gureng"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnt",
  Description: ["Guntai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnu",
  Description: ["Gnau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gnw",
  Description: ["Western Bolivian Guaraní"],
  Added: "2009-07-29",
  Macrolanguage: "gn"
}, {
  Type: "language",
  Subtag: "gnz",
  Description: ["Ganzi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "goa",
  Description: ["Guro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gob",
  Description: ["Playero"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "goc",
  Description: ["Gorakor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "god",
  Description: ["Godié"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "goe",
  Description: ["Gongduk"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gof",
  Description: ["Gofa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gog",
  Description: ["Gogo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "goh",
  Description: ["Old High German (ca. 750-1050)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "goi",
  Description: ["Gobasi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "goj",
  Description: ["Gowlan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gok",
  Description: ["Gowli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gol",
  Description: ["Gola"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gom",
  Description: ["Goan Konkani"],
  Added: "2009-07-29",
  Macrolanguage: "kok"
}, {
  Type: "language",
  Subtag: "gon",
  Description: ["Gondi"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "goo",
  Description: ["Gone Dau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gop",
  Description: ["Yeretuar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "goq",
  Description: ["Gorap"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gor",
  Description: ["Gorontalo"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "gos",
  Description: ["Gronings"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "got",
  Description: ["Gothic"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "gou",
  Description: ["Gavar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gov",
  Description: ["Goo"],
  Added: "2022-02-25"
}, {
  Type: "language",
  Subtag: "gow",
  Description: ["Gorowa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gox",
  Description: ["Gobu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "goy",
  Description: ["Goundo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "goz",
  Description: ["Gozarkhani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gpa",
  Description: ["Gupa-Abawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gpe",
  Description: ["Ghanaian Pidgin English"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "gpn",
  Description: ["Taiap"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gqa",
  Description: ["Ga'anda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gqi",
  Description: ["Guiqiong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gqn",
  Description: ["Guana (Brazil)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gqr",
  Description: ["Gor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gqu",
  Description: ["Qau"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "gra",
  Description: ["Rajput Garasia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "grb",
  Description: ["Grebo"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "grc",
  Description: ["Ancient Greek (to 1453)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "grd",
  Description: ["Guruntum-Mbaaru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "grg",
  Description: ["Madi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "grh",
  Description: ["Gbiri-Niragu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gri",
  Description: ["Ghari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "grj",
  Description: ["Southern Grebo"],
  Added: "2009-07-29",
  Macrolanguage: "grb"
}, {
  Type: "language",
  Subtag: "grk",
  Description: ["Greek languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "grm",
  Description: ["Kota Marudu Talantang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gro",
  Description: ["Groma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "grq",
  Description: ["Gorovu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "grr",
  Description: ["Taznatit"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "grs",
  Description: ["Gresi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "grt",
  Description: ["Garo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gru",
  Description: ["Kistane"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "grv",
  Description: ["Central Grebo"],
  Added: "2009-07-29",
  Macrolanguage: "grb"
}, {
  Type: "language",
  Subtag: "grw",
  Description: ["Gweda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "grx",
  Description: ["Guriaso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gry",
  Description: ["Barclayville Grebo"],
  Added: "2009-07-29",
  Macrolanguage: "grb"
}, {
  Type: "language",
  Subtag: "grz",
  Description: ["Guramalum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gse",
  Description: ["Ghanaian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gsg",
  Description: ["German Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gsl",
  Description: ["Gusilay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gsm",
  Description: ["Guatemalan Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gsn",
  Description: ["Nema", "Gusan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gso",
  Description: ["Southwest Gbaya"],
  Added: "2009-07-29",
  Macrolanguage: "gba"
}, {
  Type: "language",
  Subtag: "gsp",
  Description: ["Wasembo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gss",
  Description: ["Greek Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gsw",
  Description: ["Swiss German", "Alemannic", "Alsatian"],
  Added: "2006-03-08",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "gta",
  Description: ["Guató"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gti",
  Description: ["Gbati-ri"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12",
  "Preferred-Value": "nyc"
}, {
  Type: "language",
  Subtag: "gtu",
  Description: ["Aghu-Tharnggala"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "gua",
  Description: ["Shiki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gub",
  Description: ["Guajajára"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "guc",
  Description: ["Wayuu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gud",
  Description: ["Yocoboué Dida"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gue",
  Description: ["Gurindji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "guf",
  Description: ["Gupapuyngu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gug",
  Description: ["Paraguayan Guaraní"],
  Added: "2009-07-29",
  Macrolanguage: "gn"
}, {
  Type: "language",
  Subtag: "guh",
  Description: ["Guahibo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gui",
  Description: ["Eastern Bolivian Guaraní"],
  Added: "2009-07-29",
  Macrolanguage: "gn"
}, {
  Type: "language",
  Subtag: "guk",
  Description: ["Gumuz"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gul",
  Description: ["Sea Island Creole English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gum",
  Description: ["Guambiano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gun",
  Description: ["Mbyá Guaraní"],
  Added: "2009-07-29",
  Macrolanguage: "gn"
}, {
  Type: "language",
  Subtag: "guo",
  Description: ["Guayabero"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gup",
  Description: ["Gunwinggu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "guq",
  Description: ["Aché"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gur",
  Description: ["Farefare"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gus",
  Description: ["Guinean Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gut",
  Description: ["Maléku Jaíka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "guu",
  Description: ["Yanomamö"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "guv",
  Description: ["Gey"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  "Preferred-Value": "duz"
}, {
  Type: "language",
  Subtag: "guw",
  Description: ["Gun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gux",
  Description: ["Gourmanchéma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "guz",
  Description: ["Gusii", "Ekegusii"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gva",
  Description: ["Guana (Paraguay)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvc",
  Description: ["Guanano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gve",
  Description: ["Duwet"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvf",
  Description: ["Golin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvj",
  Description: ["Guajá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvl",
  Description: ["Gulay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvm",
  Description: ["Gurmana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvn",
  Description: ["Kuku-Yalanji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvo",
  Description: ["Gavião Do Jiparaná"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvp",
  Description: ["Pará Gavião"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvr",
  Description: ["Gurung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvs",
  Description: ["Gumawana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gvy",
  Description: ["Guyani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwa",
  Description: ["Mbato"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwb",
  Description: ["Gwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwc",
  Description: ["Gawri", "Kalami"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwd",
  Description: ["Gawwada"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwe",
  Description: ["Gweno"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwf",
  Description: ["Gowro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwg",
  Description: ["Moo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwi",
  Description: ["Gwichʼin"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "gwj",
  Description: ["ǀGwi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwm",
  Description: ["Awngthim"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "gwn",
  Description: ["Gwandara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwr",
  Description: ["Gwere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwt",
  Description: ["Gawar-Bati"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwu",
  Description: ["Guwamu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gww",
  Description: ["Kwini"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gwx",
  Description: ["Gua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gxx",
  Description: ["Wè Southern"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gya",
  Description: ["Northwest Gbaya"],
  Added: "2009-07-29",
  Macrolanguage: "gba"
}, {
  Type: "language",
  Subtag: "gyb",
  Description: ["Garus"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gyd",
  Description: ["Kayardild"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gye",
  Description: ["Gyem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gyf",
  Description: ["Gungabula"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gyg",
  Description: ["Gbayi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gyi",
  Description: ["Gyele"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gyl",
  Description: ["Gayil"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gym",
  Description: ["Ngäbere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gyn",
  Description: ["Guyanese Creole English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gyo",
  Description: ["Gyalsumdo"],
  Added: "2018-03-08"
}, {
  Type: "language",
  Subtag: "gyr",
  Description: ["Guarayu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gyy",
  Description: ["Gunya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gyz",
  Description: ["Geji", "Gyaazi"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "gza",
  Description: ["Ganza"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gzi",
  Description: ["Gazi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "gzn",
  Description: ["Gane"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "haa",
  Description: ["Han"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hab",
  Description: ["Hanoi Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hac",
  Description: ["Gurani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "had",
  Description: ["Hatam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hae",
  Description: ["Eastern Oromo"],
  Added: "2009-07-29",
  Macrolanguage: "om"
}, {
  Type: "language",
  Subtag: "haf",
  Description: ["Haiphong Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hag",
  Description: ["Hanga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hah",
  Description: ["Hahon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hai",
  Description: ["Haida"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "haj",
  Description: ["Hajong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hak",
  Description: ["Hakka Chinese"],
  Added: "2009-07-29",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "hal",
  Description: ["Halang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ham",
  Description: ["Hewa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "han",
  Description: ["Hangaza"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hao",
  Description: ["Hakö"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hap",
  Description: ["Hupla"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "haq",
  Description: ["Ha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "har",
  Description: ["Harari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "has",
  Description: ["Haisla"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hav",
  Description: ["Havu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "haw",
  Description: ["Hawaiian"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "hax",
  Description: ["Southern Haida"],
  Added: "2009-07-29",
  Macrolanguage: "hai"
}, {
  Type: "language",
  Subtag: "hay",
  Description: ["Haya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "haz",
  Description: ["Hazaragi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hba",
  Description: ["Hamba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hbb",
  Description: ["Huba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hbn",
  Description: ["Heiban"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hbo",
  Description: ["Ancient Hebrew"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hbu",
  Description: ["Habu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hca",
  Description: ["Andaman Creole Hindi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hch",
  Description: ["Huichol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hdn",
  Description: ["Northern Haida"],
  Added: "2009-07-29",
  Macrolanguage: "hai"
}, {
  Type: "language",
  Subtag: "hds",
  Description: ["Honduras Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hdy",
  Description: ["Hadiyya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hea",
  Description: ["Northern Qiandong Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hed",
  Description: ["Herdé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "heg",
  Description: ["Helong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "heh",
  Description: ["Hehe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hei",
  Description: ["Heiltsuk"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hem",
  Description: ["Hemba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hgm",
  Description: ["Haiǁom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hgw",
  Description: ["Haigwai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hhi",
  Description: ["Hoia Hoia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hhr",
  Description: ["Kerak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hhy",
  Description: ["Hoyahoya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hia",
  Description: ["Lamang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hib",
  Description: ["Hibito"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hid",
  Description: ["Hidatsa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hif",
  Description: ["Fiji Hindi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hig",
  Description: ["Kamwe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hih",
  Description: ["Pamosu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hii",
  Description: ["Hinduri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hij",
  Description: ["Hijuk"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hik",
  Description: ["Seit-Kaitetu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hil",
  Description: ["Hiligaynon"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "him",
  Description: ["Himachali languages", "Western Pahari languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "hio",
  Description: ["Tsoa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hir",
  Description: ["Himarimã"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hit",
  Description: ["Hittite"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "hiw",
  Description: ["Hiw"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hix",
  Description: ["Hixkaryána"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hji",
  Description: ["Haji"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "hka",
  Description: ["Kahe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hke",
  Description: ["Hunde"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hkh",
  Description: ["Khah", "Poguli"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "hkk",
  Description: ["Hunjara-Kaina Ke"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hkn",
  Description: ["Mel-Khaonh"],
  Added: "2018-03-08"
}, {
  Type: "language",
  Subtag: "hks",
  Description: ["Hong Kong Sign Language", "Heung Kong Sau Yue"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hla",
  Description: ["Halia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hlb",
  Description: ["Halbi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hld",
  Description: ["Halang Doan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hle",
  Description: ["Hlersu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hlt",
  Description: ["Matu Chin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hlu",
  Description: ["Hieroglyphic Luwian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hma",
  Description: ["Southern Mashan Hmong", "Southern Mashan Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmb",
  Description: ["Humburi Senni Songhay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hmc",
  Description: ["Central Huishui Hmong", "Central Huishui Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmd",
  Description: ["Large Flowery Miao", "A-hmaos", "Da-Hua Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hme",
  Description: ["Eastern Huishui Hmong", "Eastern Huishui Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmf",
  Description: ["Hmong Don"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hmg",
  Description: ["Southwestern Guiyang Hmong"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmh",
  Description: ["Southwestern Huishui Hmong", "Southwestern Huishui Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmi",
  Description: ["Northern Huishui Hmong", "Northern Huishui Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmj",
  Description: ["Ge", "Gejia"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmk",
  Description: ["Maek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hml",
  Description: ["Luopohe Hmong", "Luopohe Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmm",
  Description: ["Central Mashan Hmong", "Central Mashan Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmn",
  Description: ["Hmong", "Mong"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "hmp",
  Description: ["Northern Mashan Hmong", "Northern Mashan Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmq",
  Description: ["Eastern Qiandong Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmr",
  Description: ["Hmar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hms",
  Description: ["Southern Qiandong Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmt",
  Description: ["Hamtai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hmu",
  Description: ["Hamap"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hmv",
  Description: ["Hmong Dô"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hmw",
  Description: ["Western Mashan Hmong", "Western Mashan Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmx",
  Description: ["Hmong-Mien languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "hmy",
  Description: ["Southern Guiyang Hmong", "Southern Guiyang Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hmz",
  Description: ["Hmong Shua", "Sinicized Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hna",
  Description: ["Mina (Cameroon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hnd",
  Description: ["Southern Hindko"],
  Added: "2009-07-29",
  Macrolanguage: "lah"
}, {
  Type: "language",
  Subtag: "hne",
  Description: ["Chhattisgarhi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hng",
  Description: ["Hungu"],
  Added: "2020-03-28"
}, {
  Type: "language",
  Subtag: "hnh",
  Description: ["ǁAni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hni",
  Description: ["Hani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hnj",
  Description: ["Hmong Njua", "Mong Leng", "Mong Njua"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hnn",
  Description: ["Hanunoo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hno",
  Description: ["Northern Hindko"],
  Added: "2009-07-29",
  Macrolanguage: "lah"
}, {
  Type: "language",
  Subtag: "hns",
  Description: ["Caribbean Hindustani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hnu",
  Description: ["Hung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hoa",
  Description: ["Hoava"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hob",
  Description: ["Mari (Madang Province)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hoc",
  Description: ["Ho"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hod",
  Description: ["Holma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hoe",
  Description: ["Horom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hoh",
  Description: ["Hobyót"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hoi",
  Description: ["Holikachuk"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hoj",
  Description: ["Hadothi", "Haroti"],
  Added: "2009-07-29",
  Macrolanguage: "raj"
}, {
  Type: "language",
  Subtag: "hok",
  Description: ["Hokan languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "hol",
  Description: ["Holu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hom",
  Description: ["Homa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hoo",
  Description: ["Holoholo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hop",
  Description: ["Hopi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hor",
  Description: ["Horo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hos",
  Description: ["Ho Chi Minh City Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hot",
  Description: ["Hote", "Malê"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hov",
  Description: ["Hovongan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "how",
  Description: ["Honi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hoy",
  Description: ["Holiya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hoz",
  Description: ["Hozo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hpo",
  Description: ["Hpon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hps",
  Description: ["Hawai'i Sign Language (HSL)", "Hawai'i Pidgin Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hra",
  Description: ["Hrangkhol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hrc",
  Description: ["Niwer Mil"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "hre",
  Description: ["Hre"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hrk",
  Description: ["Haruku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hrm",
  Description: ["Horned Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "hro",
  Description: ["Haroi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hrp",
  Description: ["Nhirrpi"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "hrr",
  Description: ["Horuru"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  "Preferred-Value": "jal"
}, {
  Type: "language",
  Subtag: "hrt",
  Description: ["Hértevin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hru",
  Description: ["Hruso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hrw",
  Description: ["Warwar Feni"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "hrx",
  Description: ["Hunsrik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hrz",
  Description: ["Harzani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hsb",
  Description: ["Upper Sorbian"],
  Added: "2005-10-16",
  "Suppress-Script": "Latn"
}, {
  Type: "language",
  Subtag: "hsh",
  Description: ["Hungarian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hsl",
  Description: ["Hausa Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hsn",
  Description: ["Xiang Chinese"],
  Added: "2009-07-29",
  Macrolanguage: "zh"
}, {
  Type: "language",
  Subtag: "hss",
  Description: ["Harsusi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hti",
  Description: ["Hoti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hto",
  Description: ["Minica Huitoto"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hts",
  Description: ["Hadza"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "htu",
  Description: ["Hitu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "htx",
  Description: ["Middle Hittite"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hub",
  Description: ["Huambisa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "huc",
  Description: ["ǂHua", "ǂʼAmkhoe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hud",
  Description: ["Huaulu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hue",
  Description: ["San Francisco Del Mar Huave"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "huf",
  Description: ["Humene"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hug",
  Description: ["Huachipaeri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "huh",
  Description: ["Huilliche"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hui",
  Description: ["Huli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "huj",
  Description: ["Northern Guiyang Hmong", "Northern Guiyang Miao"],
  Added: "2009-07-29",
  Macrolanguage: "hmn"
}, {
  Type: "language",
  Subtag: "huk",
  Description: ["Hulung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hul",
  Description: ["Hula"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hum",
  Description: ["Hungana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "huo",
  Description: ["Hu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hup",
  Description: ["Hupa"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "huq",
  Description: ["Tsat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hur",
  Description: ["Halkomelem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hus",
  Description: ["Huastec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hut",
  Description: ["Humla"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "huu",
  Description: ["Murui Huitoto"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "huv",
  Description: ["San Mateo Del Mar Huave"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "huw",
  Description: ["Hukumina"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hux",
  Description: ["Nüpode Huitoto"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "huy",
  Description: ["Hulaulá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "huz",
  Description: ["Hunzib"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hvc",
  Description: ["Haitian Vodoun Culture Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hve",
  Description: ["San Dionisio Del Mar Huave"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hvk",
  Description: ["Haveke"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hvn",
  Description: ["Sabu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hvv",
  Description: ["Santa María Del Mar Huave"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hwa",
  Description: ["Wané"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hwc",
  Description: ["Hawai'i Creole English", "Hawai'i Pidgin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hwo",
  Description: ["Hwana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hya",
  Description: ["Hya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "hyw",
  Description: ["Western Armenian"],
  Added: "2018-03-08",
  Comments: ["see also hy"]
}, {
  Type: "language",
  Subtag: "hyx",
  Description: ["Armenian (family)"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "iai",
  Description: ["Iaai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ian",
  Description: ["Iatmul"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iap",
  Description: ["Iapama"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30"
}, {
  Type: "language",
  Subtag: "iar",
  Description: ["Purari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iba",
  Description: ["Iban"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ibb",
  Description: ["Ibibio"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ibd",
  Description: ["Iwaidja"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ibe",
  Description: ["Akpes"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ibg",
  Description: ["Ibanag"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ibh",
  Description: ["Bih"],
  Added: "2017-02-23"
}, {
  Type: "language",
  Subtag: "ibi",
  Description: ["Ibilo"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  "Preferred-Value": "opa"
}, {
  Type: "language",
  Subtag: "ibl",
  Description: ["Ibaloi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ibm",
  Description: ["Agoi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ibn",
  Description: ["Ibino"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ibr",
  Description: ["Ibuoro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ibu",
  Description: ["Ibu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iby",
  Description: ["Ibani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ica",
  Description: ["Ede Ica"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ich",
  Description: ["Etkywan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "icl",
  Description: ["Icelandic Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "icr",
  Description: ["Islander Creole English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ida",
  Description: ["Idakho-Isukha-Tiriki", "Luidakho-Luisukha-Lutirichi"],
  Added: "2009-07-29",
  Macrolanguage: "luy"
}, {
  Type: "language",
  Subtag: "idb",
  Description: ["Indo-Portuguese"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "idc",
  Description: ["Idon", "Ajiya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "idd",
  Description: ["Ede Idaca"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ide",
  Description: ["Idere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "idi",
  Description: ["Idi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "idr",
  Description: ["Indri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ids",
  Description: ["Idesa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "idt",
  Description: ["Idaté"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "idu",
  Description: ["Idoma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ifa",
  Description: ["Amganad Ifugao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ifb",
  Description: ["Batad Ifugao", "Ayangan Ifugao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ife",
  Description: ["Ifè"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iff",
  Description: ["Ifo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ifk",
  Description: ["Tuwali Ifugao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ifm",
  Description: ["Teke-Fuumu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ifu",
  Description: ["Mayoyao Ifugao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ify",
  Description: ["Keley-I Kallahan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "igb",
  Description: ["Ebira"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ige",
  Description: ["Igede"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "igg",
  Description: ["Igana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "igl",
  Description: ["Igala"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "igm",
  Description: ["Kanggape"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ign",
  Description: ["Ignaciano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "igo",
  Description: ["Isebe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "igs",
  Description: ["Interglossa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "igw",
  Description: ["Igwe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ihb",
  Description: ["Iha Based Pidgin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ihi",
  Description: ["Ihievbe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ihp",
  Description: ["Iha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ihw",
  Description: ["Bidhawal"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "iin",
  Description: ["Thiin"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "iir",
  Description: ["Indo-Iranian languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "ijc",
  Description: ["Izon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ije",
  Description: ["Biseni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ijj",
  Description: ["Ede Ije"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ijn",
  Description: ["Kalabari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ijo",
  Description: ["Ijo languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "ijs",
  Description: ["Southeast Ijo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ike",
  Description: ["Eastern Canadian Inuktitut"],
  Added: "2009-07-29",
  Macrolanguage: "iu"
}, {
  Type: "language",
  Subtag: "iki",
  Description: ["Iko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ikk",
  Description: ["Ika"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ikl",
  Description: ["Ikulu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iko",
  Description: ["Olulumo-Ikom"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ikp",
  Description: ["Ikpeshi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ikr",
  Description: ["Ikaranggal"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "iks",
  Description: ["Inuit Sign Language"],
  Added: "2015-02-12"
}, {
  Type: "language",
  Subtag: "ikt",
  Description: ["Inuinnaqtun", "Western Canadian Inuktitut"],
  Added: "2009-07-29",
  Macrolanguage: "iu"
}, {
  Type: "language",
  Subtag: "ikv",
  Description: ["Iku-Gora-Ankwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ikw",
  Description: ["Ikwere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ikx",
  Description: ["Ik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ikz",
  Description: ["Ikizu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ila",
  Description: ["Ile Ape"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ilb",
  Description: ["Ila"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ilg",
  Description: ["Garig-Ilgar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ili",
  Description: ["Ili Turki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ilk",
  Description: ["Ilongot"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ill",
  Description: ["Iranun"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  Comments: ["see ilm, ilp"]
}, {
  Type: "language",
  Subtag: "ilm",
  Description: ["Iranun (Malaysia)"],
  Added: "2016-05-30"
}, {
  Type: "language",
  Subtag: "ilo",
  Description: ["Iloko"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "ilp",
  Description: ["Iranun (Philippines)"],
  Added: "2016-05-30"
}, {
  Type: "language",
  Subtag: "ils",
  Description: ["International Sign"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ilu",
  Description: ["Ili'uun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ilv",
  Description: ["Ilue"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ilw",
  Description: ["Talur"],
  Added: "2009-07-29",
  Deprecated: "2013-09-10",
  "Preferred-Value": "gal"
}, {
  Type: "language",
  Subtag: "ima",
  Description: ["Mala Malasar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ime",
  Description: ["Imeraguen"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12"
}, {
  Type: "language",
  Subtag: "imi",
  Description: ["Anamgura"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iml",
  Description: ["Miluk"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "imn",
  Description: ["Imonda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "imo",
  Description: ["Imbongu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "imr",
  Description: ["Imroing"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ims",
  Description: ["Marsian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "imt",
  Description: ["Imotong"],
  Added: "2022-02-25"
}, {
  Type: "language",
  Subtag: "imy",
  Description: ["Milyan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "inb",
  Description: ["Inga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "inc",
  Description: ["Indic languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "ine",
  Description: ["Indo-European languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "ing",
  Description: ["Degexit'an"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "inh",
  Description: ["Ingush"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "inj",
  Description: ["Jungle Inga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "inl",
  Description: ["Indonesian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "inm",
  Description: ["Minaean"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "inn",
  Description: ["Isinai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ino",
  Description: ["Inoke-Yate"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "inp",
  Description: ["Iñapari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ins",
  Description: ["Indian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "int",
  Description: ["Intha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "inz",
  Description: ["Ineseño"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ior",
  Description: ["Inor"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iou",
  Description: ["Tuma-Irumu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iow",
  Description: ["Iowa-Oto"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ipi",
  Description: ["Ipili"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ipo",
  Description: ["Ipiko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iqu",
  Description: ["Iquito"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iqw",
  Description: ["Ikwo"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "ira",
  Description: ["Iranian languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "ire",
  Description: ["Iresim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "irh",
  Description: ["Irarutu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iri",
  Description: ["Rigwe", "Irigwe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "irk",
  Description: ["Iraqw"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "irn",
  Description: ["Irántxe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iro",
  Description: ["Iroquoian languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "irr",
  Description: ["Ir"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iru",
  Description: ["Irula"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "irx",
  Description: ["Kamberau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iry",
  Description: ["Iraya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "isa",
  Description: ["Isabi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "isc",
  Description: ["Isconahua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "isd",
  Description: ["Isnag"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ise",
  Description: ["Italian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "isg",
  Description: ["Irish Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ish",
  Description: ["Esan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "isi",
  Description: ["Nkem-Nkum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "isk",
  Description: ["Ishkashimi"],
  Added: "2010-03-11"
}, {
  Type: "language",
  Subtag: "ism",
  Description: ["Masimasi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "isn",
  Description: ["Isanzu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iso",
  Description: ["Isoko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "isr",
  Description: ["Israeli Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ist",
  Description: ["Istriot"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "isu",
  Description: ["Isu (Menchum Division)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itb",
  Description: ["Binongan Itneg"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itc",
  Description: ["Italic languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "itd",
  Description: ["Southern Tidung"],
  Added: "2016-05-30"
}, {
  Type: "language",
  Subtag: "ite",
  Description: ["Itene"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iti",
  Description: ["Inlaod Itneg"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itk",
  Description: ["Judeo-Italian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itl",
  Description: ["Itelmen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itm",
  Description: ["Itu Mbon Uzo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ito",
  Description: ["Itonama"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itr",
  Description: ["Iteri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "its",
  Description: ["Isekiri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itt",
  Description: ["Maeng Itneg"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itv",
  Description: ["Itawit"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itw",
  Description: ["Ito"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itx",
  Description: ["Itik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ity",
  Description: ["Moyadan Itneg"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "itz",
  Description: ["Itzá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ium",
  Description: ["Iu Mien"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ivb",
  Description: ["Ibatan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ivv",
  Description: ["Ivatan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iwk",
  Description: ["I-Wak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iwm",
  Description: ["Iwam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iwo",
  Description: ["Iwur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iws",
  Description: ["Sepik Iwam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ixc",
  Description: ["Ixcatec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ixl",
  Description: ["Ixil"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iya",
  Description: ["Iyayu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iyo",
  Description: ["Mesaka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "iyx",
  Description: ["Yaka (Congo)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "izh",
  Description: ["Ingrian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "izi",
  Description: ["Izi-Ezaa-Ikwo-Mgbo"],
  Added: "2009-07-29",
  Deprecated: "2013-09-10",
  Comments: ["see eza, gmz, iqw, izz"]
}, {
  Type: "language",
  Subtag: "izr",
  Description: ["Izere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "izz",
  Description: ["Izii"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "jaa",
  Description: ["Jamamadí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jab",
  Description: ["Hyam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jac",
  Description: ["Popti'", "Jakalteko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jad",
  Description: ["Jahanka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jae",
  Description: ["Yabem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jaf",
  Description: ["Jara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jah",
  Description: ["Jah Hut"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jaj",
  Description: ["Zazao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jak",
  Description: ["Jakun"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "jal",
  Description: ["Yalahatan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jam",
  Description: ["Jamaican Creole English"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jan",
  Description: ["Jandai"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "jao",
  Description: ["Yanyuwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jaq",
  Description: ["Yaqay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jar",
  Description: ["Jarawa (Nigeria)"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  Comments: ["see jgk, jjr"]
}, {
  Type: "language",
  Subtag: "jas",
  Description: ["New Caledonian Javanese"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jat",
  Description: ["Jakati"],
  Added: "2009-07-29",
  Macrolanguage: "lah"
}, {
  Type: "language",
  Subtag: "jau",
  Description: ["Yaur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jax",
  Description: ["Jambi Malay"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "jay",
  Description: ["Yan-nhangu", "Nhangu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jaz",
  Description: ["Jawe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jbe",
  Description: ["Judeo-Berber"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jbi",
  Description: ["Badjiri"],
  Added: "2013-09-10"
}, {
  Type: "language",
  Subtag: "jbj",
  Description: ["Arandai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jbk",
  Description: ["Barikewa"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "jbm",
  Description: ["Bijim"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "jbn",
  Description: ["Nafusi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jbo",
  Description: ["Lojban"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "jbr",
  Description: ["Jofotek-Bromnya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jbt",
  Description: ["Jabutí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jbu",
  Description: ["Jukun Takum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jbw",
  Description: ["Yawijibaya"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "jcs",
  Description: ["Jamaican Country Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jct",
  Description: ["Krymchak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jda",
  Description: ["Jad"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jdg",
  Description: ["Jadgali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jdt",
  Description: ["Judeo-Tat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jeb",
  Description: ["Jebero"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jee",
  Description: ["Jerung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jeg",
  Description: ["Jeng"],
  Added: "2009-07-29",
  Deprecated: "2017-02-23",
  "Preferred-Value": "oyb"
}, {
  Type: "language",
  Subtag: "jeh",
  Description: ["Jeh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jei",
  Description: ["Yei"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jek",
  Description: ["Jeri Kuo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jel",
  Description: ["Yelmek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jen",
  Description: ["Dza"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jer",
  Description: ["Jere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jet",
  Description: ["Manem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jeu",
  Description: ["Jonkor Bourmataguil"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jgb",
  Description: ["Ngbee"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jge",
  Description: ["Judeo-Georgian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jgk",
  Description: ["Gwak"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "jgo",
  Description: ["Ngomba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jhi",
  Description: ["Jehai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jhs",
  Description: ["Jhankot Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jia",
  Description: ["Jina"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jib",
  Description: ["Jibu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jic",
  Description: ["Tol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jid",
  Description: ["Bu (Kaduna State)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jie",
  Description: ["Jilbe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jig",
  Description: ["Jingulu", "Djingili"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jih",
  Description: ["sTodsde", "Shangzhai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jii",
  Description: ["Jiiddu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jil",
  Description: ["Jilim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jim",
  Description: ["Jimi (Cameroon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jio",
  Description: ["Jiamao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jiq",
  Description: ["Guanyinqiao", "Lavrung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jit",
  Description: ["Jita"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jiu",
  Description: ["Youle Jinuo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jiv",
  Description: ["Shuar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jiy",
  Description: ["Buyuan Jinuo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jje",
  Description: ["Jejueo"],
  Added: "2015-02-12"
}, {
  Type: "language",
  Subtag: "jjr",
  Description: ["Bankal"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "jka",
  Description: ["Kaera"],
  Added: "2016-05-30"
}, {
  Type: "language",
  Subtag: "jkm",
  Description: ["Mobwa Karen"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "jko",
  Description: ["Kubo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jkp",
  Description: ["Paku Karen"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "jkr",
  Description: ["Koro (India)"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "jks",
  Description: ["Amami Koniya Sign Language"],
  Added: "2021-02-20"
}, {
  Type: "language",
  Subtag: "jku",
  Description: ["Labir"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jle",
  Description: ["Ngile"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jls",
  Description: ["Jamaican Sign Language"],
  Added: "2010-03-11"
}, {
  Type: "language",
  Subtag: "jma",
  Description: ["Dima"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jmb",
  Description: ["Zumbun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jmc",
  Description: ["Machame"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jmd",
  Description: ["Yamdena"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jmi",
  Description: ["Jimi (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jml",
  Description: ["Jumli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jmn",
  Description: ["Makuri Naga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jmr",
  Description: ["Kamara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jms",
  Description: ["Mashi (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jmw",
  Description: ["Mouwase"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "jmx",
  Description: ["Western Juxtlahuaca Mixtec"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jna",
  Description: ["Jangshung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jnd",
  Description: ["Jandavra"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jng",
  Description: ["Yangman"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jni",
  Description: ["Janji"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jnj",
  Description: ["Yemsa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jnl",
  Description: ["Rawat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jns",
  Description: ["Jaunsari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "job",
  Description: ["Joba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jod",
  Description: ["Wojenaka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jog",
  Description: ["Jogi"],
  Added: "2015-05-27"
}, {
  Type: "language",
  Subtag: "jor",
  Description: ["Jorá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jos",
  Description: ["Jordanian Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jow",
  Description: ["Jowulu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jpa",
  Description: ["Jewish Palestinian Aramaic"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jpr",
  Description: ["Judeo-Persian"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "jpx",
  Description: ["Japanese (family)"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "jqr",
  Description: ["Jaqaru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jra",
  Description: ["Jarai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jrb",
  Description: ["Judeo-Arabic"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "jrr",
  Description: ["Jiru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jrt",
  Description: ["Jakattoe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jru",
  Description: ["Japrería"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jsl",
  Description: ["Japanese Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jua",
  Description: ["Júma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jub",
  Description: ["Wannu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "juc",
  Description: ["Jurchen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jud",
  Description: ["Worodougou"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "juh",
  Description: ["Hõne"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jui",
  Description: ["Ngadjuri"],
  Added: "2012-08-12"
}, {
  Type: "language",
  Subtag: "juk",
  Description: ["Wapan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jul",
  Description: ["Jirel"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jum",
  Description: ["Jumjum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jun",
  Description: ["Juang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "juo",
  Description: ["Jiba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jup",
  Description: ["Hupdë"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jur",
  Description: ["Jurúna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jus",
  Description: ["Jumla Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jut",
  Description: ["Jutish"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "juu",
  Description: ["Ju"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "juw",
  Description: ["Wãpha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "juy",
  Description: ["Juray"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jvd",
  Description: ["Javindo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jvn",
  Description: ["Caribbean Javanese"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jwi",
  Description: ["Jwira-Pepesa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jya",
  Description: ["Jiarong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "jye",
  Description: ["Judeo-Yemeni Arabic"],
  Added: "2009-07-29",
  Macrolanguage: "jrb"
}, {
  Type: "language",
  Subtag: "jyy",
  Description: ["Jaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kaa",
  Description: ["Kara-Kalpak", "Karakalpak"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kab",
  Description: ["Kabyle"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kac",
  Description: ["Kachin", "Jingpho"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kad",
  Description: ["Adara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kae",
  Description: ["Ketangalan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kaf",
  Description: ["Katso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kag",
  Description: ["Kajaman"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kah",
  Description: ["Kara (Central African Republic)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kai",
  Description: ["Karekare"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kaj",
  Description: ["Jju"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kak",
  Description: ["Kalanguya", "Kayapa Kallahan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kam",
  Description: ["Kamba (Kenya)"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kao",
  Description: ["Xaasongaxango"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kap",
  Description: ["Bezhta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kaq",
  Description: ["Capanahua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kar",
  Description: ["Karen languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "kav",
  Description: ["Katukína"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kaw",
  Description: ["Kawi"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kax",
  Description: ["Kao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kay",
  Description: ["Kamayurá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kba",
  Description: ["Kalarko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbb",
  Description: ["Kaxuiâna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbc",
  Description: ["Kadiwéu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbd",
  Description: ["Kabardian"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kbe",
  Description: ["Kanju"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbf",
  Description: ["Kakauhua"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12"
}, {
  Type: "language",
  Subtag: "kbg",
  Description: ["Khamba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbh",
  Description: ["Camsá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbi",
  Description: ["Kaptiau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbj",
  Description: ["Kari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbk",
  Description: ["Grass Koiari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbl",
  Description: ["Kanembu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbm",
  Description: ["Iwal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbn",
  Description: ["Kare (Central African Republic)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbo",
  Description: ["Keliko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbp",
  Description: ["Kabiyè"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbq",
  Description: ["Kamano"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbr",
  Description: ["Kafa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbs",
  Description: ["Kande"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbt",
  Description: ["Abadi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbu",
  Description: ["Kabutra"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbv",
  Description: ["Dera (Indonesia)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbw",
  Description: ["Kaiep"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kbx",
  Description: ["Ap Ma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kby",
  Description: ["Manga Kanuri"],
  Added: "2009-07-29",
  Macrolanguage: "kr"
}, {
  Type: "language",
  Subtag: "kbz",
  Description: ["Duhwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kca",
  Description: ["Khanty"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcb",
  Description: ["Kawacha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcc",
  Description: ["Lubila"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcd",
  Description: ["Ngkâlmpw Kanum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kce",
  Description: ["Kaivi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcf",
  Description: ["Ukaan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcg",
  Description: ["Tyap"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kch",
  Description: ["Vono"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kci",
  Description: ["Kamantan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcj",
  Description: ["Kobiana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kck",
  Description: ["Kalanga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcl",
  Description: ["Kela (Papua New Guinea)", "Kala"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcm",
  Description: ["Gula (Central African Republic)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcn",
  Description: ["Nubi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kco",
  Description: ["Kinalakna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcp",
  Description: ["Kanga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcq",
  Description: ["Kamo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcr",
  Description: ["Katla"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcs",
  Description: ["Koenoem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kct",
  Description: ["Kaian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcu",
  Description: ["Kami (Tanzania)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcv",
  Description: ["Kete"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcw",
  Description: ["Kabwari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcx",
  Description: ["Kachama-Ganjule"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcy",
  Description: ["Korandje"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kcz",
  Description: ["Konongo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kda",
  Description: ["Worimi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdc",
  Description: ["Kutu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdd",
  Description: ["Yankunytjatjara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kde",
  Description: ["Makonde"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdf",
  Description: ["Mamusi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdg",
  Description: ["Seba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdh",
  Description: ["Tem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdi",
  Description: ["Kumam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdj",
  Description: ["Karamojong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdk",
  Description: ["Numèè", "Kwényi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdl",
  Description: ["Tsikimba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdm",
  Description: ["Kagoma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdn",
  Description: ["Kunda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdo",
  Description: ["Kordofanian languages"],
  Added: "2009-07-29",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "kdp",
  Description: ["Kaningdon-Nindem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdq",
  Description: ["Koch"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdr",
  Description: ["Karaim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdt",
  Description: ["Kuy"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdu",
  Description: ["Kadaru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdv",
  Description: ["Kado"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  Comments: ["see zkd, zkn"]
}, {
  Type: "language",
  Subtag: "kdw",
  Description: ["Koneraw"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdx",
  Description: ["Kam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdy",
  Description: ["Keder", "Keijar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kdz",
  Description: ["Kwaja"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kea",
  Description: ["Kabuverdianu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "keb",
  Description: ["Kélé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kec",
  Description: ["Keiga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ked",
  Description: ["Kerewe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kee",
  Description: ["Eastern Keres"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kef",
  Description: ["Kpessi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "keg",
  Description: ["Tese"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "keh",
  Description: ["Keak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kei",
  Description: ["Kei"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kej",
  Description: ["Kadar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kek",
  Description: ["Kekchí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kel",
  Description: ["Kela (Democratic Republic of Congo)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kem",
  Description: ["Kemak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ken",
  Description: ["Kenyang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "keo",
  Description: ["Kakwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kep",
  Description: ["Kaikadi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "keq",
  Description: ["Kamar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ker",
  Description: ["Kera"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kes",
  Description: ["Kugbo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ket",
  Description: ["Ket"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "keu",
  Description: ["Akebu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kev",
  Description: ["Kanikkaran"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kew",
  Description: ["West Kewa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kex",
  Description: ["Kukna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "key",
  Description: ["Kupia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kez",
  Description: ["Kukele"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfa",
  Description: ["Kodava"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfb",
  Description: ["Northwestern Kolami"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfc",
  Description: ["Konda-Dora"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfd",
  Description: ["Korra Koraga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfe",
  Description: ["Kota (India)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kff",
  Description: ["Koya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfg",
  Description: ["Kudiya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfh",
  Description: ["Kurichiya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfi",
  Description: ["Kannada Kurumba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfj",
  Description: ["Kemiehua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfk",
  Description: ["Kinnauri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfl",
  Description: ["Kung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfm",
  Description: ["Khunsari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfn",
  Description: ["Kuk"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfo",
  Description: ["Koro (Côte d'Ivoire)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfp",
  Description: ["Korwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfq",
  Description: ["Korku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfr",
  Description: ["Kachhi", "Kutchi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfs",
  Description: ["Bilaspuri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kft",
  Description: ["Kanjari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfu",
  Description: ["Katkari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfv",
  Description: ["Kurmukar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfw",
  Description: ["Kharam Naga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfx",
  Description: ["Kullu Pahari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfy",
  Description: ["Kumaoni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kfz",
  Description: ["Koromfé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kga",
  Description: ["Koyaga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgb",
  Description: ["Kawe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgc",
  Description: ["Kasseng"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  "Preferred-Value": "tdf"
}, {
  Type: "language",
  Subtag: "kgd",
  Description: ["Kataang"],
  Added: "2009-07-29",
  Deprecated: "2017-02-23",
  Comments: ["see ncq, sct"]
}, {
  Type: "language",
  Subtag: "kge",
  Description: ["Komering"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgf",
  Description: ["Kube"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgg",
  Description: ["Kusunda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgh",
  Description: ["Upper Tanudan Kalinga"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  "Preferred-Value": "kml"
}, {
  Type: "language",
  Subtag: "kgi",
  Description: ["Selangor Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgj",
  Description: ["Gamale Kham"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgk",
  Description: ["Kaiwá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgl",
  Description: ["Kunggari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgm",
  Description: ["Karipúna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgn",
  Description: ["Karingani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgo",
  Description: ["Krongo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgp",
  Description: ["Kaingang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgq",
  Description: ["Kamoro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgr",
  Description: ["Abun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgs",
  Description: ["Kumbainggar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgt",
  Description: ["Somyev"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgu",
  Description: ["Kobol"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgv",
  Description: ["Karas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgw",
  Description: ["Karon Dori"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgx",
  Description: ["Kamaru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kgy",
  Description: ["Kyerung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kha",
  Description: ["Khasi"],
  Added: "2005-10-16",
  Comments: ["as of 2008-04-21 this subtag does not include Lyngngam; see lyg"]
}, {
  Type: "language",
  Subtag: "khb",
  Description: ["Lü"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khc",
  Description: ["Tukang Besi North"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khd",
  Description: ["Bädi Kanum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khe",
  Description: ["Korowai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khf",
  Description: ["Khuen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khg",
  Description: ["Khams Tibetan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khh",
  Description: ["Kehu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khi",
  Description: ["Khoisan languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "khj",
  Description: ["Kuturmi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khk",
  Description: ["Halh Mongolian"],
  Added: "2009-07-29",
  Macrolanguage: "mn"
}, {
  Type: "language",
  Subtag: "khl",
  Description: ["Lusi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khn",
  Description: ["Khandesi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kho",
  Description: ["Khotanese", "Sakan"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "khp",
  Description: ["Kapori", "Kapauri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khq",
  Description: ["Koyra Chiini Songhay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khr",
  Description: ["Kharia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khs",
  Description: ["Kasua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kht",
  Description: ["Khamti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khu",
  Description: ["Nkhumbi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khv",
  Description: ["Khvarshi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khw",
  Description: ["Khowar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khx",
  Description: ["Kanu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khy",
  Description: ["Kele (Democratic Republic of Congo)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "khz",
  Description: ["Keapara"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kia",
  Description: ["Kim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kib",
  Description: ["Koalib"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kic",
  Description: ["Kickapoo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kid",
  Description: ["Koshin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kie",
  Description: ["Kibet"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kif",
  Description: ["Eastern Parbate Kham"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kig",
  Description: ["Kimaama", "Kimaghima"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kih",
  Description: ["Kilmeri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kii",
  Description: ["Kitsai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kij",
  Description: ["Kilivila"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kil",
  Description: ["Kariya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kim",
  Description: ["Karagas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kio",
  Description: ["Kiowa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kip",
  Description: ["Sheshi Kham"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kiq",
  Description: ["Kosadle", "Kosare"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kis",
  Description: ["Kis"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kit",
  Description: ["Agob"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kiu",
  Description: ["Kirmanjki (individual language)"],
  Added: "2009-07-29",
  Macrolanguage: "zza"
}, {
  Type: "language",
  Subtag: "kiv",
  Description: ["Kimbu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kiw",
  Description: ["Northeast Kiwai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kix",
  Description: ["Khiamniungan Naga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kiy",
  Description: ["Kirikiri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kiz",
  Description: ["Kisi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kja",
  Description: ["Mlap"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjb",
  Description: ["Q'anjob'al", "Kanjobal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjc",
  Description: ["Coastal Konjo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjd",
  Description: ["Southern Kiwai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kje",
  Description: ["Kisar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjf",
  Description: ["Khalaj [Indo-Iranian]"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28"
}, {
  Type: "language",
  Subtag: "kjg",
  Description: ["Khmu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjh",
  Description: ["Khakas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kji",
  Description: ["Zabana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjj",
  Description: ["Khinalugh"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjk",
  Description: ["Highland Konjo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjl",
  Description: ["Western Parbate Kham"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjm",
  Description: ["Kháng"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjn",
  Description: ["Kunjen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjo",
  Description: ["Harijan Kinnauri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjp",
  Description: ["Pwo Eastern Karen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjq",
  Description: ["Western Keres"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjr",
  Description: ["Kurudu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjs",
  Description: ["East Kewa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjt",
  Description: ["Phrae Pwo Karen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kju",
  Description: ["Kashaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjv",
  Description: ["Kaikavian Literary Language"],
  Added: "2015-02-12"
}, {
  Type: "language",
  Subtag: "kjx",
  Description: ["Ramopa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjy",
  Description: ["Erave"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kjz",
  Description: ["Bumthangkha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kka",
  Description: ["Kakanda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkb",
  Description: ["Kwerisa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkc",
  Description: ["Odoodee"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkd",
  Description: ["Kinuku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kke",
  Description: ["Kakabe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkf",
  Description: ["Kalaktang Monpa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkg",
  Description: ["Mabaka Valley Kalinga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkh",
  Description: ["Khün"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kki",
  Description: ["Kagulu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkj",
  Description: ["Kako"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkk",
  Description: ["Kokota"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkl",
  Description: ["Kosarek Yale"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkm",
  Description: ["Kiong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkn",
  Description: ["Kon Keu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kko",
  Description: ["Karko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkp",
  Description: ["Gugubera", "Koko-Bera"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkq",
  Description: ["Kaeku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkr",
  Description: ["Kir-Balar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kks",
  Description: ["Giiwo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkt",
  Description: ["Koi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kku",
  Description: ["Tumi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkv",
  Description: ["Kangean"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkw",
  Description: ["Teke-Kukuya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkx",
  Description: ["Kohin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kky",
  Description: ["Guugu Yimidhirr", "Guguyimidjir"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kkz",
  Description: ["Kaska"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kla",
  Description: ["Klamath-Modoc"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klb",
  Description: ["Kiliwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klc",
  Description: ["Kolbila"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kld",
  Description: ["Gamilaraay"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kle",
  Description: ["Kulung (Nepal)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klf",
  Description: ["Kendeje"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klg",
  Description: ["Tagakaulo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klh",
  Description: ["Weliki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kli",
  Description: ["Kalumpang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klj",
  Description: ["Khalaj"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klk",
  Description: ["Kono (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kll",
  Description: ["Kagan Kalagan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klm",
  Description: ["Migum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kln",
  Description: ["Kalenjin"],
  Added: "2009-07-29",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "klo",
  Description: ["Kapya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klp",
  Description: ["Kamasa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klq",
  Description: ["Rumu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klr",
  Description: ["Khaling"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kls",
  Description: ["Kalasha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klt",
  Description: ["Nukna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klu",
  Description: ["Klao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klv",
  Description: ["Maskelynes"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klw",
  Description: ["Tado", "Lindu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klx",
  Description: ["Koluwawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kly",
  Description: ["Kalao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "klz",
  Description: ["Kabola"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kma",
  Description: ["Konni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmb",
  Description: ["Kimbundu"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kmc",
  Description: ["Southern Dong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmd",
  Description: ["Majukayang Kalinga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kme",
  Description: ["Bakole"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmf",
  Description: ["Kare (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmg",
  Description: ["Kâte"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmh",
  Description: ["Kalam"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmi",
  Description: ["Kami (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmj",
  Description: ["Kumarbhag Paharia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmk",
  Description: ["Limos Kalinga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kml",
  Description: ["Tanudan Kalinga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmm",
  Description: ["Kom (India)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmn",
  Description: ["Awtuw"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmo",
  Description: ["Kwoma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmp",
  Description: ["Gimme"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmq",
  Description: ["Kwama"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmr",
  Description: ["Northern Kurdish"],
  Added: "2009-07-29",
  Macrolanguage: "ku"
}, {
  Type: "language",
  Subtag: "kms",
  Description: ["Kamasau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmt",
  Description: ["Kemtuik"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmu",
  Description: ["Kanite"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmv",
  Description: ["Karipúna Creole French"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmw",
  Description: ["Komo (Democratic Republic of Congo)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmx",
  Description: ["Waboda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmy",
  Description: ["Koma"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kmz",
  Description: ["Khorasani Turkish"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kna",
  Description: ["Dera (Nigeria)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knb",
  Description: ["Lubuagan Kalinga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knc",
  Description: ["Central Kanuri"],
  Added: "2009-07-29",
  Macrolanguage: "kr"
}, {
  Type: "language",
  Subtag: "knd",
  Description: ["Konda"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kne",
  Description: ["Kankanaey"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knf",
  Description: ["Mankanya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kng",
  Description: ["Koongo"],
  Added: "2009-07-29",
  Macrolanguage: "kg"
}, {
  Type: "language",
  Subtag: "kni",
  Description: ["Kanufi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knj",
  Description: ["Western Kanjobal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knk",
  Description: ["Kuranko"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knl",
  Description: ["Keninjal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knm",
  Description: ["Kanamarí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knn",
  Description: ["Konkani (individual language)"],
  Added: "2009-07-29",
  Macrolanguage: "kok"
}, {
  Type: "language",
  Subtag: "kno",
  Description: ["Kono (Sierra Leone)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knp",
  Description: ["Kwanja"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knq",
  Description: ["Kintaq"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knr",
  Description: ["Kaningra"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kns",
  Description: ["Kensiu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knt",
  Description: ["Panoan Katukína"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knu",
  Description: ["Kono (Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knv",
  Description: ["Tabo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knw",
  Description: ["Kung-Ekoka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knx",
  Description: ["Kendayan", "Salako"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kny",
  Description: ["Kanyok"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "knz",
  Description: ["Kalamsé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "koa",
  Description: ["Konomala"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "koc",
  Description: ["Kpati"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kod",
  Description: ["Kodi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "koe",
  Description: ["Kacipo-Bale Suri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kof",
  Description: ["Kubi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kog",
  Description: ["Cogui", "Kogi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "koh",
  Description: ["Koyo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "koi",
  Description: ["Komi-Permyak"],
  Added: "2009-07-29",
  Macrolanguage: "kv"
}, {
  Type: "language",
  Subtag: "koj",
  Description: ["Sara Dunjo"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12",
  "Preferred-Value": "kwv"
}, {
  Type: "language",
  Subtag: "kok",
  Description: ["Konkani (macrolanguage)"],
  Added: "2005-10-16",
  "Suppress-Script": "Deva",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "kol",
  Description: ["Kol (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "koo",
  Description: ["Konzo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kop",
  Description: ["Waube"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "koq",
  Description: ["Kota (Gabon)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kos",
  Description: ["Kosraean"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kot",
  Description: ["Lagwan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kou",
  Description: ["Koke"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kov",
  Description: ["Kudu-Camo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kow",
  Description: ["Kugama"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kox",
  Description: ["Coxima"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30"
}, {
  Type: "language",
  Subtag: "koy",
  Description: ["Koyukon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "koz",
  Description: ["Korak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpa",
  Description: ["Kutto"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpb",
  Description: ["Mullu Kurumba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpc",
  Description: ["Curripaco"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpd",
  Description: ["Koba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpe",
  Description: ["Kpelle"],
  Added: "2005-10-16",
  Scope: "macrolanguage"
}, {
  Type: "language",
  Subtag: "kpf",
  Description: ["Komba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpg",
  Description: ["Kapingamarangi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kph",
  Description: ["Kplang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpi",
  Description: ["Kofei"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpj",
  Description: ["Karajá"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpk",
  Description: ["Kpan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpl",
  Description: ["Kpala"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpm",
  Description: ["Koho"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpn",
  Description: ["Kepkiriwát"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpo",
  Description: ["Ikposo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpp",
  Description: ["Paku Karen"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  Comments: ["see jkm, jkp"]
}, {
  Type: "language",
  Subtag: "kpq",
  Description: ["Korupun-Sela"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpr",
  Description: ["Korafe-Yegha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kps",
  Description: ["Tehit"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpt",
  Description: ["Karata"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpu",
  Description: ["Kafoa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpv",
  Description: ["Komi-Zyrian"],
  Added: "2009-07-29",
  Macrolanguage: "kv"
}, {
  Type: "language",
  Subtag: "kpw",
  Description: ["Kobon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpx",
  Description: ["Mountain Koiali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpy",
  Description: ["Koryak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kpz",
  Description: ["Kupsabiny"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqa",
  Description: ["Mum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqb",
  Description: ["Kovai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqc",
  Description: ["Doromu-Koki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqd",
  Description: ["Koy Sanjaq Surat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqe",
  Description: ["Kalagan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqf",
  Description: ["Kakabai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqg",
  Description: ["Khe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqh",
  Description: ["Kisankasa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqi",
  Description: ["Koitabu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqj",
  Description: ["Koromira"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqk",
  Description: ["Kotafon Gbe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kql",
  Description: ["Kyenele"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqm",
  Description: ["Khisa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqn",
  Description: ["Kaonde"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqo",
  Description: ["Eastern Krahn"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqp",
  Description: ["Kimré"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqq",
  Description: ["Krenak"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqr",
  Description: ["Kimaragang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqs",
  Description: ["Northern Kissi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqt",
  Description: ["Klias River Kadazan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqu",
  Description: ["Seroa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqv",
  Description: ["Okolod"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqw",
  Description: ["Kandas"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqx",
  Description: ["Mser"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqy",
  Description: ["Koorete"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kqz",
  Description: ["Korana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kra",
  Description: ["Kumhali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krb",
  Description: ["Karkin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krc",
  Description: ["Karachay-Balkar"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "krd",
  Description: ["Kairui-Midiki"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kre",
  Description: ["Panará"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krf",
  Description: ["Koro (Vanuatu)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krh",
  Description: ["Kurama"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kri",
  Description: ["Krio"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krj",
  Description: ["Kinaray-A"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krk",
  Description: ["Kerek"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krl",
  Description: ["Karelian"],
  Added: "2006-03-08"
}, {
  Type: "language",
  Subtag: "krm",
  Description: ["Krim"],
  Added: "2009-07-29",
  Deprecated: "2017-02-23",
  "Preferred-Value": "bmf"
}, {
  Type: "language",
  Subtag: "krn",
  Description: ["Sapo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kro",
  Description: ["Kru languages"],
  Added: "2005-10-16",
  Scope: "collection"
}, {
  Type: "language",
  Subtag: "krp",
  Description: ["Korop"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krr",
  Description: ["Krung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krs",
  Description: ["Gbaya (Sudan)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krt",
  Description: ["Tumari Kanuri"],
  Added: "2009-07-29",
  Macrolanguage: "kr"
}, {
  Type: "language",
  Subtag: "kru",
  Description: ["Kurukh"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "krv",
  Description: ["Kavet"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krw",
  Description: ["Western Krahn"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krx",
  Description: ["Karon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kry",
  Description: ["Kryts"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "krz",
  Description: ["Sota Kanum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksa",
  Description: ["Shuwa-Zamani"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksb",
  Description: ["Shambala"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksc",
  Description: ["Southern Kalinga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksd",
  Description: ["Kuanua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kse",
  Description: ["Kuni"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksf",
  Description: ["Bafia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksg",
  Description: ["Kusaghe"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksh",
  Description: ["Kölsch"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksi",
  Description: ["Krisa", "I'saka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksj",
  Description: ["Uare"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksk",
  Description: ["Kansa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksl",
  Description: ["Kumalu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksm",
  Description: ["Kumba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksn",
  Description: ["Kasiguranin"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kso",
  Description: ["Kofa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksp",
  Description: ["Kaba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksq",
  Description: ["Kwaami"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksr",
  Description: ["Borong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kss",
  Description: ["Southern Kisi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kst",
  Description: ["Winyé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksu",
  Description: ["Khamyang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksv",
  Description: ["Kusu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksw",
  Description: ["S'gaw Karen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksx",
  Description: ["Kedang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksy",
  Description: ["Kharia Thar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ksz",
  Description: ["Kodaku"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kta",
  Description: ["Katua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktb",
  Description: ["Kambaata"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktc",
  Description: ["Kholok"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktd",
  Description: ["Kokata", "Kukatha"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kte",
  Description: ["Nubri"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktf",
  Description: ["Kwami"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktg",
  Description: ["Kalkutung"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kth",
  Description: ["Karanga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kti",
  Description: ["North Muyu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktj",
  Description: ["Plapo Krumen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktk",
  Description: ["Kaniet"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktl",
  Description: ["Koroshi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktm",
  Description: ["Kurti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktn",
  Description: ["Karitiâna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kto",
  Description: ["Kuot"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktp",
  Description: ["Kaduo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktq",
  Description: ["Katabaga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktr",
  Description: ["Kota Marudu Tinagas"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  "Preferred-Value": "dtp"
}, {
  Type: "language",
  Subtag: "kts",
  Description: ["South Muyu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktt",
  Description: ["Ketum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktu",
  Description: ["Kituba (Democratic Republic of Congo)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktv",
  Description: ["Eastern Katu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktw",
  Description: ["Kato"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktx",
  Description: ["Kaxararí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kty",
  Description: ["Kango (Bas-Uélé District)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "ktz",
  Description: ["Juǀʼhoan", "Juǀʼhoansi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kub",
  Description: ["Kutep"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuc",
  Description: ["Kwinsu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kud",
  Description: ["'Auhelawa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kue",
  Description: ["Kuman (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuf",
  Description: ["Western Katu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kug",
  Description: ["Kupa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuh",
  Description: ["Kushi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kui",
  Description: ["Kuikúro-Kalapálo", "Kalapalo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuj",
  Description: ["Kuria"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuk",
  Description: ["Kepo'"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kul",
  Description: ["Kulere"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kum",
  Description: ["Kumyk"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kun",
  Description: ["Kunama"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuo",
  Description: ["Kumukio"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kup",
  Description: ["Kunimaipa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuq",
  Description: ["Karipuna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kus",
  Description: ["Kusaal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kut",
  Description: ["Kutenai"],
  Added: "2005-10-16"
}, {
  Type: "language",
  Subtag: "kuu",
  Description: ["Upper Kuskokwim"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuv",
  Description: ["Kur"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuw",
  Description: ["Kpagua"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kux",
  Description: ["Kukatja"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuy",
  Description: ["Kuuku-Ya'u"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kuz",
  Description: ["Kunza"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kva",
  Description: ["Bagvalal"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvb",
  Description: ["Kubu"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "kvc",
  Description: ["Kove"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvd",
  Description: ["Kui (Indonesia)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kve",
  Description: ["Kalabakan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvf",
  Description: ["Kabalai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvg",
  Description: ["Kuni-Boazi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvh",
  Description: ["Komodo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvi",
  Description: ["Kwang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvj",
  Description: ["Psikye"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvk",
  Description: ["Korean Sign Language"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvl",
  Description: ["Kayaw"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvm",
  Description: ["Kendem"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvn",
  Description: ["Border Kuna"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvo",
  Description: ["Dobel"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvp",
  Description: ["Kompane"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvq",
  Description: ["Geba Karen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvr",
  Description: ["Kerinci"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "kvs",
  Description: ["Kunggara"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  "Preferred-Value": "gdj"
}, {
  Type: "language",
  Subtag: "kvt",
  Description: ["Lahta Karen", "Lahta"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvu",
  Description: ["Yinbaw Karen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvv",
  Description: ["Kola"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvw",
  Description: ["Wersing"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvx",
  Description: ["Parkari Koli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvy",
  Description: ["Yintale Karen", "Yintale"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kvz",
  Description: ["Tsakwambo", "Tsaukambo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwa",
  Description: ["Dâw"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwb",
  Description: ["Kwa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwc",
  Description: ["Likwala"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwd",
  Description: ["Kwaio"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwe",
  Description: ["Kwerba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwf",
  Description: ["Kwara'ae"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwg",
  Description: ["Sara Kaba Deme"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwh",
  Description: ["Kowiai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwi",
  Description: ["Awa-Cuaiquer"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwj",
  Description: ["Kwanga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwk",
  Description: ["Kwakiutl"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwl",
  Description: ["Kofyar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwm",
  Description: ["Kwambi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwn",
  Description: ["Kwangali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwo",
  Description: ["Kwomtari"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwp",
  Description: ["Kodia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwq",
  Description: ["Kwak"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12",
  "Preferred-Value": "yam"
}, {
  Type: "language",
  Subtag: "kwr",
  Description: ["Kwer"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kws",
  Description: ["Kwese"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwt",
  Description: ["Kwesten"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwu",
  Description: ["Kwakum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwv",
  Description: ["Sara Kaba Náà"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kww",
  Description: ["Kwinti"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwx",
  Description: ["Khirwar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kwy",
  Description: ["San Salvador Kongo"],
  Added: "2009-07-29",
  Macrolanguage: "kg"
}, {
  Type: "language",
  Subtag: "kwz",
  Description: ["Kwadi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxa",
  Description: ["Kairiru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxb",
  Description: ["Krobu"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxc",
  Description: ["Konso", "Khonso"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxd",
  Description: ["Brunei"],
  Added: "2009-07-29",
  Macrolanguage: "ms"
}, {
  Type: "language",
  Subtag: "kxe",
  Description: ["Kakihum"],
  Added: "2009-07-29",
  Deprecated: "2015-02-12",
  "Preferred-Value": "tvd"
}, {
  Type: "language",
  Subtag: "kxf",
  Description: ["Manumanaw Karen", "Manumanaw"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxh",
  Description: ["Karo (Ethiopia)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxi",
  Description: ["Keningau Murut"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxj",
  Description: ["Kulfa"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxk",
  Description: ["Zayein Karen"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxl",
  Description: ["Nepali Kurux"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28",
  "Preferred-Value": "kru"
}, {
  Type: "language",
  Subtag: "kxm",
  Description: ["Northern Khmer"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxn",
  Description: ["Kanowit-Tanjong Melanau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxo",
  Description: ["Kanoé"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxp",
  Description: ["Wadiyara Koli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxq",
  Description: ["Smärky Kanum"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxr",
  Description: ["Koro (Papua New Guinea)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxs",
  Description: ["Kangjia"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxt",
  Description: ["Koiwat"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxu",
  Description: ["Kui (India)"],
  Added: "2009-07-29",
  Deprecated: "2020-03-28",
  Comments: ["see dwk, uki"]
}, {
  Type: "language",
  Subtag: "kxv",
  Description: ["Kuvi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxw",
  Description: ["Konai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxx",
  Description: ["Likuba"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxy",
  Description: ["Kayong"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kxz",
  Description: ["Kerewo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kya",
  Description: ["Kwaya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyb",
  Description: ["Butbut Kalinga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyc",
  Description: ["Kyaka"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyd",
  Description: ["Karey"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kye",
  Description: ["Krache"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyf",
  Description: ["Kouya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyg",
  Description: ["Keyagana"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyh",
  Description: ["Karok"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyi",
  Description: ["Kiput"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyj",
  Description: ["Karao"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyk",
  Description: ["Kamayo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyl",
  Description: ["Kalapuya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kym",
  Description: ["Kpatili"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyn",
  Description: ["Northern Binukidnon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyo",
  Description: ["Kelon"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyp",
  Description: ["Kang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyq",
  Description: ["Kenga"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyr",
  Description: ["Kuruáya"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kys",
  Description: ["Baram Kayan"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyt",
  Description: ["Kayagar"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyu",
  Description: ["Western Kayah"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyv",
  Description: ["Kayort"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyw",
  Description: ["Kudmali"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyx",
  Description: ["Rapoisi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyy",
  Description: ["Kambaira"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kyz",
  Description: ["Kayabí"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kza",
  Description: ["Western Karaboro"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzb",
  Description: ["Kaibobo"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzc",
  Description: ["Bondoukou Kulango"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzd",
  Description: ["Kadai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kze",
  Description: ["Kosena"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzf",
  Description: ["Da'a Kaili"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzg",
  Description: ["Kikai"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzh",
  Description: ["Kenuzi-Dongola"],
  Added: "2009-07-29",
  Deprecated: "2012-08-12",
  Comments: ["see dgl, xnz"]
}, {
  Type: "language",
  Subtag: "kzi",
  Description: ["Kelabit"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzj",
  Description: ["Coastal Kadazan"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  "Preferred-Value": "dtp"
}, {
  Type: "language",
  Subtag: "kzk",
  Description: ["Kazukuru"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzl",
  Description: ["Kayeli"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzm",
  Description: ["Kais"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzn",
  Description: ["Kokola"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzo",
  Description: ["Kaningi"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzp",
  Description: ["Kaidipang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzq",
  Description: ["Kaike"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzr",
  Description: ["Karang"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzs",
  Description: ["Sugut Dusun"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzt",
  Description: ["Tambunan Dusun"],
  Added: "2009-07-29",
  Deprecated: "2016-05-30",
  "Preferred-Value": "dtp"
}, {
  Type: "language",
  Subtag: "kzu",
  Description: ["Kayupulau"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzv",
  Description: ["Komyandaret"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzw",
  Description: ["Karirí-Xocó"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzx",
  Description: ["Kamarian"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzy",
  Description: ["Kango (Tshopo District)"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "kzz",
  Description: ["Kalabra"],
  Added: "2009-07-29"
}, {
  Type: "language",
  Subtag: "laa",
  Description: ["Southern Subanen"],
  Added: "2009-07-29"
}, {
}, {
}];