(function (angular) {
    angular.module("app").service("PartnerService", function () {
        var goldPartners = [
            {
                name: "Profinit",
                logo: "profinit.svg",
                type: "gold",
                page: "https://www.profinit.eu/kariera/",
                description: "Od roku 1998 poskytujeme komplexní IT služby od návrhu business a IT architektury až po dodávky celých řešení. Pracujeme pro více než 50 významných společností z oblastí financí, telekomunikací a státní správy. V České republice jsou to mj. Česká spořitelna, Komerční banka, ČSOB, Vodafone nebo O2. V našem týmu najdete více než 350 nadšených a zkušených profesionálů. Patříme ke špičce v oblasti vývoje SW na zakázku, data managementu, datových skladů, business intelligence a big data science.",
                extendedDescription: "<p>Naši konzultanti se zabývají analýzou, návrhem a vývojem moderních IT systémů. Většinou působí na projektech přímo u zákazníků. Právě možnost pracovat na různých projektech je na práci v Profinitu unikátní. U nás je možné získat zkušenosti rychleji a do hloubky. Nejsme korporace, kde hraje roli politika nebo tisíc pravidel a nařízení, chováme se k sobě přátelsky a pomáháme si. Charakter a dobrá organizace práce nám umožňují nabízet studentům pružné pracovní úvazky.</p>" +
                "<p>S FIT ČVUT dlouhodobě spolupracujeme v oblastech pokročilého zpracování dat, data analytics, syntaktické a sémantické analýze kódu či konceptuálních modelů. Naši odborníci vyučují a cvičí specializované předměty přímo na fakultě. Mimo společných výzkumných projektů nabízíme také zajímavá témata v podobě semestrálních projektů, diplomových a bakalářských prací.  Společně s dalšími českými a slovenskými technickými vysokými školami a pod záštitou mezinárodní odborné organizace ACM organizujeme soutěž IT SPY, ve které odborná porota vybírá nejlepší diplomovou práci z oblasti informatiky a informačních technologií.</p>",
                upper_skills: [
                    {
                        department: "Soft skills",
                        skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                    },
                    {
                        department: "Programování",
                        skills: [".NET", "Java", "Javascript", "C#", "Groovy", "ObjectiveC", "Matlab", "R", "Perl"]
                    },
                    {
                        department: "Databáze",
                        skills: ["LDAP", "Relační DB", "Dokumentové DB", "Grafové DB", "Návrh DB", "Optimalizace DB", "Big Data"]
                    },
                    {
                        department: "Softwarové inženýrství",
                        skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Process modeling", "UML", "Verzování zdrojového kódu", "BPMN", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky"]
                    },
                    {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                    {department: "Matematika", skills: ["Diskrétní", "Statistika"]},
                    {
                        department: "Bezpečnost",
                        skills: ["Softwarová", "Síťová", "Systémová", "Managerská", "ISO 27001"]
                    },
                    {
                        department: "Operační systémy",
                        skills: ["Unix", "Windows", "iOS", "Android", "Windows Phone"]
                    },
                    {
                        department: "Uživatelské rozhraní",
                        skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                    },
                    {department: "Cizí jazyky", skills: ["Angličtina", "Němčina"]},
                    {
                        department: "Technologie",
                        skills: ["OOP", "Procedurální", "Strukturované", "Algoritmizace"]
                    }
                ],
                visit: true,
                importance: 10
            }, {
                name: "Datamole",
                logo: "Datamole_logo.svg",
                type: "gold",
                page: "https://www.datamole.cz/",
                description: "We are an aspiring start-up fully focused on data science. Utilizing artificial intelligence techniques and data driven methods we deliver innovative and highly added value solutions to our customers.",
                extendedDescription: "<p>We are curiosity driven, each project is a new challenge. We are enthusiastic about new approaches, frameworks and tools related to data analysis, machine learning, data mining and big data. These fields are evolving rapidly and we want to be on the edge at all times and use state of the art technologies. Our team consist of experts for machine learning & data mining, (big) data processing & cluster computing, software engineering & architecture, analysis & visualisation. We believe it is our collective drive, individual expertise and shared knowledge that allow us to deliver creative and innovative solutions.</p>" +
                "<p>It is not a coincidence that we closely collaborate with the CTU FIT; many of us are proud absolvents. We are active in joint research resulting in establishing a joint laboratory at the FIT premises in 2015 (TH:A-1349). Additionally our team members also teach AI oriented courses at the FIT.</p>" +
                "<p>For students, we publish assignments on the portal SSP and supervise Bachelor's as well as Master's theses. We also offer internships and for absolvents we offer various positions, refer https://www.datamole.cz/#joinus. Would you like to meet us and see if Datamole has an opportunity for you? Do not hesitate to contact us on info@datamole.cz!</p>",
                upper_skills: [
                    {
                        department: "Programování",
                        skills: ["C", "C++", ".NET", "Java", "Javascript", "C#", "Python", "Matlab", "R", "Scala"]
                    },
                    {department: "Datamining", skills: ["Pattern recognition"]},
                    {department: "Matematika", skills: ["Optimalizace"]},
                    {department: "Umělá inteligence", skills: ["Machine learning", "Robotika"]},
                    {department: "Cizí jazyky", skills: ["Angličtina"]},
                    {department: "Technologie", skills: ["OOP", "Funkcionální"]}
                ],
                visit: false,
                importance: 9
            }, {
                name: "Komerční banka",
                logo: "kb2017.png",
                type: "gold",
                page: "https://www.kb.cz/cs/o-bance/kariera/?wt_mc=interni.header.careers",
                description: "Komerční banka, a.s. patří mezi přední bankovní instituce v ČR a v regionu střední a východní Evropy. Je univerzální bankou se širokou nabídkou služeb v oblasti retailového, podnikového a investičního bankovnictví. Zabýváme se velkými transformačními programy či komplexním vývojem bankovních systémů a internetového (a mobilního) bankovnictví, inovativními přístupy a nápady pro zkvalitnění zákaznické zkušenosti jako zjednodušení práce s platbami, využívání chytrých zařízení (smartwatch), Big Data nebo hledání nových scénářů pro bankovní a finanční služby (Google Wallet, Apple Pay)",
                extendedDescription: "<p>Talentovaní studenti mají možnost zúčastnit se integračního a rozvojového programu Connecting a Connecting +. Poznají zde sami sebe a zároveň fungování banky z odlišných pohledů (finance, marketing, HR, Risk a Distribuce). V průběhu kariérního postupu nabízíme mnoho školení jak v oblasti technických dovedností, tak soft skills. Díky stabilnímu prostředí velké organizace a široké škále využívaných a provozovaných technologií, metodik a produktů se v KB mohou uplatit studenti nejrůznějších zaměření. Dokážeme nabídnout široké spektrum témat od serverové virtualizace či IT architektury až po témata zabývající se digitálním marketingem nebo sociálními sítěmi. V rámci naší IT Inovační laboratoře již teď působí řada studentů ČVUT, kteří obhájili nebo zpracovávají diplomové práce zaměřené na praktickou aplikovatelnost jejich výsledku. Pokud máte zájem se o našem týmu a nabízených příležitostech dozvědět více, neváhejte nás kontaktovat u našeho kiosku na Co@FITu!</p>",
                upper_skills: [
                    {
                        department: "Soft skills",
                        skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                    },
                    {
                        department: "Programování",
                        skills: ["C", "C++", "Ruby", ".NET", "Java", "Javascript", "PHP", "C#", "Python", "R"]
                    },
                    {
                        department: "Databáze",
                        skills: ["Relační DB", "Dokumentové DB", "Grafové DB", "Objektové DB", "Návrh DB", "Optimalizace DB"]
                    },
                    {
                        department: "Softwarové inženýrství",
                        skills: ["Objektový návrh", "Integrace aplikací", "Testování", "Process modeling", "UML", "Verzování zdrojového kódu", "BPMN", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky", "Kvalita kódu", "bezpečnost", "agilní vývoj", "SCRUM", "RUP", "optimalizace", "front end", "API", "middleware"]
                    },
                    {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                    {department: "Matematika", skills: ["Statistika"]},
                    {
                        department: "Bezpečnost",
                        skills: ["Hardwarová", "Softwarová", "Síťová", "Systémová", "Managerská"]
                    },
                    {department: "Umělá inteligence", skills: ["Machine learning"]},
                    {department: "Operační systémy", skills: ["Unix", "Windows", "iOS", "Android", "Windows Phone"]},
                    {
                        department: "Uživatelské rozhraní",
                        skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                    },
                    {department: "Počítání", skills: ["Škálovatelné"]},
                    {department: "Cizí jazyky", skills: ["Angličtina", "Francouzština"]},
                    {
                        department: "Technologie",
                        skills: ["OOP", "Procedurální", "Funkcionální", "Strukturované", "Algoritmizace"]
                    }
                ],
                visit: true,
                importance: 8
            }
        ];
        var silverPartners = [];
        var bronzePartners = [
            {
                name: "Ackee",
                logo: "ackee2017.png",
                type: "bronze",
                page: "https://www.ackee.cz/o-nas#contact",
                description: "Vznikli jsme jako parta studentů ČVUT. Každý z nás vynikal v jiné oblasti a spojoval nás zápal pro technologie. Dneska sídlíme nedaleko naší alma mater jako dospělá firma s řadou zkušeností, skvělými lidmi a se zajímavými klienty, kterým pomáháme využívat nové technologie pro jejich byznys. Kdo jsme? Jsme tři zakladatelé a společně jsme stvořili Ackee. To nejdůležitější je ale náš tým grafiků, projekťáků, testerů a hlavně vývojářek a vývojářů pro mobilní zařízení, weby a backendy. Proto jim říkáme miláčci. V Ackee máme pořád dveře otevřené. Bereme stážisty, juniory i seniory. Jestli není tvá pozice zrovna vypsaná, pošli nám i tak CV, třeba hledáme právě tebe. Momentálně sháníme kandidáty na pozice Android Developer, iOS Developer, Frontend Web Developer.</p>",
                upper_skills: [],
                visit: true
            },

            {
                name: "NN",
                logo: "nn.svg",
                type: "bronze",
                page: "https://kariera.nn.cz",
                description: "NN (odvozeno od Nationale Nederlanden) není v ČR novým pojmem. Ve skutečnosti zde působíme od roku 1992 a dlouho jste nás mohli znát jako ING pojišťovnu. Jsme společnost s bohatou historií, jejímž středobodem nejsou pojistné smlouvy, ale lidé. Součástí NN je také oddělení regionálního IT s názvem IT Hub Prague se sídlem v centru Prahy. Naší úlohou je poskytování a dodávání IT služeb pro 18 zemí. Našim zákazníkům dodáváme služby především v oblasti bezpečnosti, podpory a údržby regionálních aplikací a systémů, hosting service a jiných podpůrných služeb. Naše osazenstvo je multikulturní a prostředí inspirující.",
                extendedDescription: "<p>Pracujeme s nejnovějšími technologiemi na zajímavých projektech pro celý svět. Mezi naše hodnoty patří CLEAR – CARE – COMIT. CLEAR – jsme féroví, říkáme věci na rovinu a na nic si nehrajeme. CARE – je pro nás důležité udržet rovnováhu mezi rodinou a prací, a proto si svůj čas řídíme sami. COMMIT – víme co a proč děláme a za naší prací a rozhodnutím si stojíme. Nabízíme práci v mezinárodním prostředí, aktivní využití anglického jazyka, možnost cestovat a poznávat jiné kultury. Orientujeme se na práci s nejnovějšími technologiemi. Máme mladý dynamický tým a jsme otevřeni spolupráci se studenty a absolventy SŠ a VŠ. Nabízíme nadstandardní zaměstnanecké benefity. Sídlíme přímo v centru Prahy (Anděl).</p>",
                upper_skills: [],
                visit: true
            },

            {
                name: "Valeo",
                logo: "valeo.svg",
                type: "bronze",
                page: "http://www.valeo-czechrepublic.com/",
                description: "Není nás vidět a stejně jsme přítomni. Vylepšujeme auta tak, aby se lépe řídilo. Naše umění tkví v bezpečné a příjemné jízdě. Pomáháme při parkování v nákupních centrech v podobě sebeparkovacích aut, při nenadálých okolnostech v podobě automatického brzdění, při předjíždění v podobě hlídaní mrtvého úhlu. S prototypem samořídícího auta, „Cruise4U“, jsme již zdolali více než čtyřicet tisíc testovacích kilometrů po Evropě a Spojených Státech a stále jedeme dál. Jsme průkopníkem i v hybridizaci aut: vynalezli jsme stop-start systém a vloni jsme dodali automobilkám první sériové elektrické turbodmychadlo. A to se ani při té vší práci nezapotíme, my totiž umíme i autoklimatizace.",
                extendedDescription: "<p>V ČR vyrábíme na 3 místech (Humpolci, Žebráku a Rakovníku), vyvíjíme a zkoumáme v Praze a testujeme na polygonu v Milovicích. Celosvětově investujeme každý rok 10 % tržeb do výzkumu a vývoje, mimo jiné i do výstavby nového špičkového vývojového areálu v Praze-Hostivaři za 600 milionů korun.</p>" +
                "<p>Máte vzdělání v technickém oboru: strojní, elektro nebo IT? Baví vás neustále se vzdělávat? Chcete spolupracovat s kolegy na jiných pobočkách firmy v zahraničí a využívat angličtinu na denní bázi? Máte zodpovědný a proaktivní přístup k úkolům? Do našich týmů ve vývoji či výrobě hledáme právě takové kolegyně a kolegy. Lidi s vizí a zapálením pro svou práci a pro moderní automobilové technologie.</p>" +
                "Patříme mezi nejlépe hodnocené zaměstnavatele v ČR. Získali jsme opakovaně titul „Zaměstnavatel Roku“ pro Středočeský kraj a v roce 2016 i cenu „Top Employer Czech Republic“. Svým zaměstnancům také nabízíme nespočet benefitů.",
                upper_skills: [
                    {
                        department: "Soft skills",
                        skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                    },
                    {department: "Programování", skills: ["C", "C++", "C#", "Python"]},
                    {
                        department: "Softwarové inženýrství",
                        skills: ["Objektový návrh", "Testování", "UML", "Verzování zdrojového kódu", "Continuous Integration", "Bugtracking", "Tiketové systémy", "Metodiky", "Automotive SPICE"]
                    },
                    {department: "Matematika", skills: ["Algebra", "Diskrétní", "Statistika"]},
                    {department: "Bezpečnost", skills: ["Systémová"]},
                    {department: "Operační systémy", skills: ["Systémy reálného času", "OSEK/VDX"]},
                    {department: "Umělá inteligence", skills: ["Machine learning", "Robotika"]},
                    {department: "Počítání", skills: ["Paralelní", "GPU"]},
                    {department: "Počítačové inženýrství", skills: ["Vestavěné systémy", "Testování a spolehlivost"]},
                    {department: "Technologie", skills: ["OOP", "Procedurální", "Algoritmizace"]},
                    {department: "Cizí jazyky", skills: ["Angličtina"]}
                ],
                visit: true
            },

            {
                name: "Deloitte Advisory",
                logo: "deloitte.png",
                type: "bronze",
                page: "http://www.jsmedeloitte.cz/",
                description: "Jsme Deloitte, mezinárodní firma, která je pro většinu lidí spojená s auditem či daňovým poradenstvím. Děláme také podnikové poradenství v nejrůznějších oblastech. Zabýváme se IT a máme specialisty na aplikovanou analytiku či Big Data. Rozumíme datovým skladům a datové kvalitě. Naši experti se věnují informační bezpečnosti, IT auditu, řízení velkých IT projektů nebo využití nových digitálních technologií pro transformaci firem. Ve výsledku se na nás obrací klienti tam, kde potřebují udělat opravdu velký skok kupředu či mají složitý problém.",
                extendedDescription: "<p>Řídíme implementační projekty, tvoříme datové sklady, kterým rozumí byznys uživatelé, děláme penetrační testování mobilních aplikací, implementujeme cloudová CRM nebo moderní eCommerce řešení. Každé oddělení má svůj propracovaný systém vzdělávání specificky zaměřený na danou problematiku, nabízíme množství profesních zkoušek a interních školení. Máme jasně stanovený systém hodnocení výkonu a od něj odvíjející se kariérní růst. Pracujeme na zajímavých projektech pro zajímavé klienty. V poradenství je nás více než 200, tudíž se stále máme od koho učit.</p>",
                upper_skills: [
                    {
                        department: "Soft skills",
                        skills: ["Komunikace", "Projektové řízení", "Analytické myšlení", "Kreativita", "Týmovost"]
                    },
                    {
                        department: "Programování",
                        skills: [".NET", "Java", "Javascript", "PHP", "C#", "ObjectiveC", "Python", "Matlab", "R"]
                    },
                    {
                        department: "Databáze",
                        skills: ["Relační DB", "Dokumentové DB", "Grafové DB", "Objektové DB", "Návrh DB"]
                    },
                    {
                        department: "Softwarové inženýrství",
                        skills: ["Integrace aplikací", "Testování", "Process modeling", "UML", "Verzování zdrojového kódu", "BPMN", "Bugtracking", "Tiketové systémy", "Metodiky"]
                    },
                    {department: "Datamining", skills: ["Pattern recognition", "Text mining", "Web mining"]},
                    {department: "Matematika", skills: ["Algebra", "Optimalizace", "Statistika", "teorie grafu"]},
                    {department: "Bezpečnost", skills: ["Softwarová", "Síťová", "Systémová", "Managerská"]},
                    {department: "Umělá inteligence", skills: ["Machine learning"]},
                    {
                        department: "Uživatelské rozhraní",
                        skills: ["Testování UI", "Grafika", "Kódování UI", "Implementace web UI"]
                    },
                    {department: "Počítání", skills: ["Paralelní", "Distribuované"]},
                    {department: "Cizí jazyky", skills: ["Angličtina"]},
                    {
                        department: "Technologie",
                        skills: ["OOP", "Procedurální", "Funkcionální", "Strukturované", "Algoritmizace"]
                    }
                ],
                visit: true
            }
        ];
        return {
            getGoldPartners: function () {
                return goldPartners;
            },
            getSilverPartners: function () {
                return silverPartners;
            },
            getBronzePartners: function () {
                return bronzePartners;
            },
            getAllPartners: function () {
                return {
                    gold: goldPartners,
                    silver: silverPartners,
                    bronze: bronzePartners
                }
            }
        }
    });
})(angular);