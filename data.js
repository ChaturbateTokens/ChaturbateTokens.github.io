
(function( $ )
	{
	      
	// Using it without an object
	$.sticky = function(note, options, callback) { return $.fn.sticky(note, options, callback); };
	
	$.fn.sticky = function(note, options, callback) 
		{
		// Default settings
		var position = 'top-left'; // top-left, top-right, bottom-left, or bottom-right
		
		var settings =
			{
			'speed'			:	2000,	 // animations: fast, slow, or integer
			'duplicates'	:	false,  // true or false
			'autoclose'		:	4500  // integer or false
			};
		
		// Passing in the object instead of specifying a note
		if(!note)
			{ note = this.html(); }
		
		if(options)
			{ $.extend(settings, options); }
		
		// Variables
		var display = true;
		var duplicate = 'no';
		
		// Somewhat of a unique ID
		var uniqID = Math.floor(Math.random()*99999);
		
		// Handling duplicate notes and IDs
		$('.sticky-note').each(function()
			{
			if($(this).html() == note && $(this).is(':visible'))
				{ 
				duplicate = 'yes';
				if(!settings['duplicates'])
					{ display = false; }
				}
			if($(this).attr('id')==uniqID)
				{ uniqID = Math.floor(Math.random()*9999999); }
			});
		
		// Make sure the sticky queue exists
		if(!$('#recent-activity').find('.sticky-queue').html())
			{ $('#recent-activity').append('<div class="sticky-queue ' + position + '"></div>'); }
		
		// Can it be displayed?
		if(display)
			{
			// Building and inserting sticky note
			$('.sticky-queue').prepend('<div class="sticky border-' + position + '" id="' + uniqID + '"></div>');
			$('#' + uniqID).append('<img src="close.png" class="sticky-close" rel="' + uniqID + '" title="Close" />');
			$('#' + uniqID).append('<div class="sticky-note" rel="' + uniqID + '">' + note + '</div>');
			
			// Smoother animation
			var height = $('#' + uniqID).height();
			$('#' + uniqID).css('height', height);
			
			$('#' + uniqID).slideDown(settings['speed']);
			display = true;
			}
		
		// Listeners
		$('.sticky').ready(function()
			{
			// If 'autoclose' is enabled, set a timer to close the sticky
			if(settings['autoclose'])
				{ $('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']); }
			});
		// Closing a sticky
		$('.sticky-close').click(function()
			{ $('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']); });
		
		
		// Callback data
		var response = 
			{
			'id'		:	uniqID,
			'duplicate'	:	duplicate,
			'displayed'	: 	display,
			'position'	:	position
			}
		
		// Callback function?
		if(callback)
			{ callback(response); }
		else
			{ return(response); }
		
		}
	})( jQuery );
	
	var UserName = ["HeXrisen","Sleepyz","ToxiGood","ItsYourChoice","TaintedDucky","probablycoL","Ina","Phaxen","tofumanoftruth","xHeroofChaos","Rockllee","Ryzer","SpiritDog","Sjvir","Maulface","SombreroGalaxy","Bebhead","ecco","AurionKratos","Picarus","erwinbooze","xrawrgasm","Tangularx","SepekuAW","Chuuper","Airtom","pro711","SirhcEezy","LuckyLone56","AtomicN","Splorchicken","00000000","UpAIlNight","MikeyC","s7efen","FENOMENO","XIVJan","Splorgen","djpocketchange","Oasis","BallsInYourFace","dopa7","MasterDragonKing","ssforfail","MissyQing","Endlesss","badeed","SmooshyCake","Alestz","svbk","TeaMALaoSong","drallaBnayR","KnivesMillions","MahNeega","Impasse","Stefono62","CLGEasy","GankedFromAbove","IslandLager","MrJuneJune","ShorterACE","morippe","Dusey","Paperkat","TooPro4u","Porogami","iuzi","Suzikai","TDKNear","LiquidInori","Deleted","UnKooL","Born4this","AllianceMike","Dinklebergg","YouGotFaker","IMBAYoungGooby","Neverlike","BestGodniviaNA","FFat20GGWP","kMSeunG","rua0311desuyo","54Bomb99","jivhust","Penguinpreacher","Yashimasta","ReeferChiefer420","OberonDark","Imunne","Hoeji","xTearz","NicoleKidman","DonDardanoni","Wonderfuls","Ayai","Cruzerthebruzer","Connort","BiggestNoob","Anangelababy007","DragonxCharl","uJ3lly","moosebreeder","Kurumx","Protective","LegacyofHao","DkBnet","AxelAxis","NiMaTMSiLe","Preachy","XXRhythmMasterXX","Lemin","Destinedwithin","Afflictive","Nydukon","QuanNguyen","interest","chadiansile","iToradorable","BIackWinter","Mazrer","NKSoju","nhocBym","Dreemo","Virus","Masrer","Michaelcreative","Emanpop","Druiddroid","KevonBurt","Magicians","HiImYolo","kamonika","Chunkyfresh","tongsoojosim","hiimrogue","DeTFMYumenoti","EddieMasao","AGilletteRazor","andtheknee","SrsBznsBro","Toxil","Silverblade12345","WalterWhiteOG","SwiftyNyce","Volt","Connie","DELLZOR","aiopqwe","MidnightBoba","Sikeylol","Warmogger","Melhsa","OmekoMushi","Life","SleepyDinosaur","Leonard","Likang45","PSiloveyou","xtsetse","Cpense","Arakune","shadowshifte","LeeBai","SexualSavant","CornChowder","DeTRFEsteL","deDeezer","Jayms","v1anddrotate","UhKili","Aceyy","Zik","RiNDiN","Grandederp","Senjogahara","GusTn","TheTyrant","GoJeonPa","DJJingYun","IoveLu","OGNEunJungCho","kevybear","ImJas","Agrorenn","Synxia","DouyuTVForgottt","GrimSamurai","6666666666666","Xode","QQ459680082","KittenAnya","Zakard","WallOfText","SireSnoopy","kelppowder","Hxadecimal","MisoMango","PiggyAzalea","MisterDon","VirginEmperor","P18GEMEINV","Kurumz","kjin","CcLiuShicC","ExileOfTheBlade","Iambbb","Fubguns","Asutarotto","Niqhtmarea","L0LWal","JannaFKennedy","Steffypoo","AsianSGpotato","whiteclaw","lovemyRMB","Frostarix","voyyboy","Melo","RiotZALE","ElvishGleeman","LoveIy","Packy","Susice","Dontqqnubz","mikeshiwuer","Chulss","Scorpionz","KKOBONG","Veeless","NtzMoon","Leesinwiches","RefuseFate","TP101","ozoss0","SeaShell","Baesed","jivhust1","CHRlSS","jbraggs","BeefTacos","Xoqe","Naeim","Aerodactyl","Triett","194IQredditor","Windgelu","Suadero","Senks","SwagersKing","AkameBestGirl","Lobstery","MisterOombadu","Oryziaslatipes","HawkStandard","wimbis","JimmerFredette","VikingKarots","Sorcerawr","Ciscla","Suffix","METALCHOCOB0","Dessias","Junha","Hickus","gamepiong","AirscendoSona","Rainaa","Colonelk1","DeTRFZerost","Szmao","HomedogPaws","DioDeSol","FrannyPack","AbsoluteFridges","ELMdamemitai","Old","Pavle","nathanielbee","nweHuang","yorozu","Cloverblood","Entities","Believe","Chiruno","TheEyeofHorus","IGotSunshine","Shade20","Sprusse","Imacarebear","Kenleebudouchu","LockDownExec","DaoKho","BestDota2Sona","KillaKast","Betsujin","TheAmberTeahouse","ManateeWaffles","Babalew","charmanderu","TooSalty","LotusBoyKiller","Nerzhu1","Lovelyiris","freakingnoodles","Pdop1","Bakudanx","Martel","DoctorDoom","equalix","CARDCAPTORCARD","Dyad","Flyinpiggy","Wingsofdeathx","IamOsiris","ArtThief","fwii","Kios","Shampu","Nickpappa","Yukari","Emeraldancer","TwoPants","Jacka","Skadanton","C9TGleebglarbu","GrimmmmmmmReaper","MewtMe","Ramzlol","Mruseless","Eitori","S0lipsism","X1337Gm4uLk03rX","lloveOreo","MrChivalry","Oyt","AnVu","MASTERROSHl","dabestmelon","C9BalIs","stainzoid","sweetinnocence","Firehazerd","2011","Moelon","KingKenneth","Skinathonian","FelixCC","Acme","QmoneyAKAQdollas","Fexir","ImbaDreaMeR","ImNovel","ButtercupShawty","touch","penguin","DeTRFMoyashi","Iizard","Jintae","pichumy","Upu","Iemonlimesodas","TwitchTvAuke","Promises","Jintea","OMikasaAckermanO","wompwompwompwomp","Kiyoon","LiquidNyjacky","ATColdblood","SandPaperX","ZENPhooka","oMizu","HamSammiches","Pcboy","Yook","Dafreakz","Winno","XxWarDoomxX","UrekMazin0","GodOfZed","D3cimat3r","broIy","1stTimeDraven","godofcontrol","Shoopufff","IlIIlIIIlIIIIIII","Fragnat1c","Abidius","irvintaype","japanman","CaristinnQT","ROBERTZEBRONZE","aenba","Arcenius","Ryden7","CutestNeo","JHHoon","MegaMilkGG","EmilyVanCamp","SecretofMana","SJAero","Mixture","Teaz89","ArizonaGreenTea","sh4pa","BestFelixNA","Dragles","TummyTuck","KLucid","Isunari","lAtmospherel","Zwag","yuBinstah","ionz","Nove","Nickywu","Rekeri","Kaichu","Arnold","ArcticPuffin11","UnholyNirvana","IREGlNALD","random","TurtletheCat","Pobelter","EugeneJPark","Doublelift","eaky9","lamBjerg","Popobelterold","HOGEE","HotGuy6Pack","TiPApollo","Soeren","FSNChunkyfresh","Waker","C9Hard","HOoZy","Chapanya","Dyrus","Entranced","WildTurtle","WildTurtl","lntense","Hauntzer","LiquidFeniX","THExJOHNxCENA555","Imaqtpie","ZionSpartan","JJackstar","mldkingking","TiPMa","Ohhhq","ninjamaster69xxx","CaliTrlolz8","ice","C9Meteos","JannaMechanics","KEITHMCBRIEF","dunamis","Quasmire","LiquidQuas","GVHauntzer","PengYiliang","Casely","wahoolahoola","godisfeng66666","Zbuum","ilovefatdongs","TransIogic","LemonBoy","TDKkina","DJTrance","Duocek","KonKwon","Nihillmatic","Zaryab","Biofrost","CSTJesiz","GVKeane","TiPyoondog","LiquidXpecial","JayJ","GVCop","iKeNNyu","C9Hai","FunFrock","evertan","Chaullenger","Aniratak","PorpoiseDeluxe","Isuyu","CLGDandyLite","Arcsecond","BloodWater","Jynthe","Sickoscott","RickyTang","ALLRekklesvNA","DuBuKiD","AdrianMa","GuriAndGunji","RyanChoi","AiShiTeru","J0kes","C9Balls","C9SoIo","yungmulahBABY","FeelTheLove","NMEotter","stuntopolis","llRomell","GoJeongPa","p0z","Trisexual","MarkPassion","Seeiya","AAltec","C9LemonNation","MegaZero","VIPEEEEEEEEEEEER","Panchie","halo3madsniper","iLucent","1k2o1ko12ko12ko2","Bokbokimacat","Gambler","Gaggiano","JJayel","Azingy","Kebrex","WahzYan","willxo","TailsLoL","darksnipa47","JimmyTalon","vane","sooyoung","Lourlo","PlayWithAnimals","scarra","Lock0nStratos","aphromoo","KMadClown","ChaIlengerAhri","YY90001PiKaChu","Thefatkidfromup","Nintenpai","JustJayce","toontown","BasedYoona","GoldStars","InvertedComposer","LiquidIWD","Stan007","JukeKing","xPecake","BlGHUEVOS","Plun","ohdaughter","DaiJurJur","DontMashMe","CaseOpened","otte","Thurtle","Dodo8","Frostalicious","bobqinXD","MrCarter","Hellkey","Chimonaa1","GVVicious","PAlNLESS","LiLBunnyFuFuu","Lukeeeeeeeeee","Lattman","Daserer","AlliancePatrick","Lionsexual","St1xxay","CSTCris","KojotheCat","Gleebglarbu","Altrum","RiotMeyeA","Tritan","LiquidDominate","cidadedecack","BillyBoss","xPepastel","NMEflareszx","Gundamu","imp","DDABONG","Daydreamin","MRHIGHLIGHTREEL","Shweeb","Tailsz","Bischu","CRBRakin","Chaox","Grigne","DAKular","Geranimoo","InnoX","FluffyKittens206","ImJinAh","CloudNguyen","whoishe","TiensiNoAkuma","Ethil","nothinghere","SuperMetroid","hiimgosu","Mammon","waitingforu","LearningToPIay","YiOwO","heavenTime","AnDa","TDKKez","MariaCreveling","Cypress","YahooDotCom","Phanimal","Aror","RFLegendary","BenNguyen","AHHHHHHHHH","Linsanityy","Allorim","Superrrman","Laughing","AKAPapaChau","denoshuresK","Nightblue3","Aranium","Pallione","FakerSama","Sweept","HooManDu","HctMike","Revenge","Apauloh","latebloomer","CRBFyre","MongolWarrior","Hiphophammer","CoachLFProTeam","hiimria","Jackoo","Saskio","DadeFakerPawn","GVStvicious","NeonSurge","NMEBodydrop","MatLifeTriHard","PantsareDragon","miqo","VoyboyCARRY","Hexadecimal","themassacre8","Ayr","F0rtissimo","GamerXz","Remie","Soghp","Raimazz","Ultimazero","NMETrashyy","Popuh","SAGASUPVEIGM","Descraton","LiquidInoriTV","MiniMe","IlIlIIIlIIIIlIII","Shweebie","PoppersOP","B1GKr1T","DGB","stephyscute2","TEESEMM","Cyprincess","baohando","urbutts","maplestreeTT","jamee","SawitonReddit","BenignSentinel","MrJuvel","LeeGuitarStringa","DKrupt","LAGEhsher","Sonnynot6","Taeyawn","Dezx","BeautifulKorean","VwSTeesum","TLIWDominate","Vsepr","Vultix","Soredemo","AnnieBot","aksn1per","IamFearless","SoYung","Tuoooor","Polx","Agolite","Delta","LAGOrbwalk","sexycan","Rohammers","IAmDoughboy","Cytosine","Vanxer","SDiana2","Araya","TheItalianOne","F1Flow","Kazahana","Malajukii","xiaoweiba","JoshMabrey","shinymew","Event","freelancer18","hiitsviper","Gir1shot2diamond","KiNGNidhogg","PurpleFloyd","Rathul","Kwaku","BeachedWhaIe","Xpecial","butttpounder","TalkPIayLove","jordank","TwistyJuker","MeganFoxisGG","NiHaoDyLan","Doomtrobo","Wardrium","TwtchTviLoveSezu","BennyHung","EnmaDaiO","xTc4","RumbIeMidGG","deft1","XxRobvanxX","DuoChiDianShi","coLBubbadub","LeBulbe","TanHat","Dusty","Jibberwackey","Tallwhitebro","Diamond","cesuna","BigolRon","xSojin","KingofMemes","111094Jrh","bive","Docxm","Liquidzig","YouHadNoDream","TINYHUEVOS","Sheepx","LeBulbetier","amandagugu","Rushmore","AnnieCHastur","OverlordForte","Muffintopper66","Kazura","zetsuen","wozhixiangyin","CaptainNuke","alextheman","Seongmin","Working","gurminder","TGZ","KrucifixKricc","Kevnn","Academiic","ArianaLovato","Elemia","CeIestic","RedEyeAkame","Kerpal","MakNooN","Indivisible","Niqhtmarex","RambointheJungle","Iucid","iOddOrange","Uncover","DD666666","r0b0cop","VictoricaDebloiz","Gleebglarb","EmperorSteeleye","tempname456543","FeedOn","iJesus69","OmegaB","Xandertrax","Krymer","TwistedSun","DeTRFShinmori","iKoogar","Mizuji","White","zgerman","FORG1VENliftlift","sakurafIowers","xSaury","PiPiPig","TheCptAmerica","SlowlyDriftnAway","cre4tive","LAGGoldenShiv","FSNDLuffy","NintendudeX","duliniul","Cybody","Odete49","TFBlade","Platoon","CopyCat","TitanDweevil","HeroesOfTheStorm","JRT94","YoloOno","BalmungLFT","IreliaCarriesU","LikeAMaws","PaulDano","ErzaScarIet","KiritoKamui","ProofOfPayment","DonPorks","BarronZzZ","Pikaboo","aLeo","BillyBossXD","DragonRaider","Haughty","KMadClowns","ikORY","WeixiaTianshi","QQ346443922","FoxDog","Haruka","cackgod","iAmNotSorry","coLROBERTO","GladeGleamBright","theletter3","Sandrew","RongRe","MrGatsby","xBlueMoon","Merryem","ElkWhisperer","Enticed","Draguner","DeliciousMilkGG","Patoy","Lucl3n3Ch4k0","Piaget","zeflife","IsDatLohpally","HatersWantToBeMe","Blackmill","PrinceChumpJohn","Nebulite","TedStickles","kimjeii","Kappasun","JJJackstar","TSMMeNoHaxor","Zealous","Normalize","Topcatz","KimchimanBegins","DrawingPalette","AnarchyofDinh","hiimxiao","MikeHct","ChumpJohnsTeemo","Heejae","delirous","Iodus","WakaWakaWak","Hawez","ThaOGTschussi","TwistedFox","PureCorruption","HotshotGG","Turdelz","ysohardstylez","Brainfre3z","Zaineking","LingTong","AnObesePanda","CornStyle","LafalgarTaw","Zeyzal","Meowwwwwww","Pokemorph","JimmyHong","Hoardedsoviet","Nematic","C9Yusui","BlownbyJanna","Sojs","Cerathe","FairieTail","Xeralis","ichibaNNN","Contractz","SAGANoPause","Mookiez","RiotChun","ValkrinSenpai"];
	var CountryFlags = ['https://cdn-icons-png.flaticon.com/128/555/555417.png','https://cdn-icons-png.flaticon.com/128/206/206626.png','https://cdn-icons-png.flaticon.com/128/555/555613.png','https://cdn-icons-png.flaticon.com/128/206/206606.png','https://cdn-icons-png.flaticon.com/128/206/206657.png','https://cdn-icons-png.flaticon.com/128/206/206724.png','https://cdn-icons-png.flaticon.com/128/3373/3373278.png','https://cdn-icons-png.flaticon.com/128/206/206618.png','https://cdn-icons-png.flaticon.com/128/555/555473.png','https://cdn-icons-png.flaticon.com/128/555/555451.png','https://cdn-icons-png.flaticon.com/128/206/206600.png','https://cdn-icons-png.flaticon.com/128/330/330430.png','https://cdn-icons-png.flaticon.com/128/330/330672.png','https://cdn-icons-png.flaticon.com/128/555/555571.png','https://cdn-icons-png.flaticon.com/128/3371/3371849.png','https://cdn-icons-png.flaticon.com/128/555/555606.png','https://cdn-icons-png.flaticon.com/128/555/555605.png','https://cdn-icons-png.flaticon.com/128/555/555582.png','https://cdn-icons-png.flaticon.com/128/555/555607.png','https://cdn-icons-png.flaticon.com/128/555/555490.png'];
	var Platforms =["<span class='platfrom-append'>on</span> Android","<span class='platfrom-append'>on</span> iOS","<span class='platfrom-append'>on</span> MacOS","<span class='platfrom-append'>on</span> Windows","<span class='platfrom-append'>on</span> Linux","<span class='platfrom-append'>on</span> MacOSX","<span class='platfrom-append'>on</span> Unknown"];	
	var FUTresources =["<span class='activity-fut5'>100 Tokens</span>","<span class='activity-fut5'>200 Tokens</span>", "<span class='activity-fut5'>500 Tokens</span>","<span class='activity-fut5'>750 Tokens</span>","<span class='activity-fut4'>Error:Failed Verification</span>","<span class='activity-fut5'>1000 Tokens</span>"];	
	$(document).ready(function() {
   
 
	$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	setInterval(call_recent_activity_tab, 2500);
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	setInterval(call_recent_activity_tab, 6500);
	var call_recent_activity_tab = function() {
		$.sticky('<div class="recent-activity-tab"><div class="recent-activity-user-wrapper"><img class="activity-flag-img" src="'+random_flag()+'"/><span class="activity-username">' + random_username() +'</span></div><span class="activity-platform">'+random_platform() +'</span><div class="activity-generated-amount">'+random_futresource() +'</div></div>');
	}
	
	function random_username()
	{
	 return UserName[rng(0,UserName['length']-1)];
	}
	function random_platform()
	{
	 return Platforms[rng(0,Platforms['length']-1)];
	}
	function random_flag()
	{
	 return CountryFlags[rng(0,CountryFlags['length']-1)];
	}
	function random_futresource()
	{
	 return FUTresources[rng(0,FUTresources['length']-1)];
	}

}); 
function getOS() {
  let userAgent = window.navigator.userAgent.toLowerCase(),
    macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
    windowsPlatforms = /(win32|win64|windows|wince)/i,
    iosPlatforms = /(iphone|ipad|ipod)/i,
    os = null;

  if (macosPlatforms.test(userAgent)) {
    os = "MacOS";
  } else if (iosPlatforms.test(userAgent)) {
    os = "iOS";
  } else if (windowsPlatforms.test(userAgent)) {
    os = "Windows";
  } else if (/android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /linux/.test(userAgent)) {
    os = "Linux";
  }

  return os;
}

document.getElementById('your-os').textContent = getOS();
  function getIPInfo() {
      // Menggunakan layanan ipinfo.io untuk mendapatkan data geolokasi
      axios.get('https://ipinfo.io?token=5d4b563d30c619')
        .then(response => {
          // Mendapatkan data yang diperlukan (alamat IP dan negara)
          const country = response.data.country;
          const city = response.data.city;
          const region = response.data.region;
          // Menampilkan informasi IP dan negara pada halaman HTML
          document.getElementById("countryInfo").textContent = country;
          document.getElementById("cityInfo").textContent = city;
		  document.getElementById("regionInfo").textContent = region;
        })
        .catch(error => {
          console.error('Terjadi kesalahan:', error);
        });
    }

    // Panggil fungsi getIPInfo saat halaman dimuat
    getIPInfo();