(function ( $ ) { 

function loadjscssfile(filename, filetype) {
    
    if (filetype=="js") { 

        var fileref=document.createElement('script');
        fileref.setAttribute("type","text/javascript");
        fileref.setAttribute("src", filename);
    }
    else if (filetype=="css") { 

        var fileref=document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    }

    if (typeof fileref!="undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}



var functs = Array();
window.f357CEC13502DAB12C826C65B1C11B2DF = function(callback) { if (!window.WA) { setTimeout(function () { f357CEC13502DAB12C826C65B1C11B2DF(callback) }, 100); } else { for (var i = 0; i < functs.length; i++) { functs[i](); } if ($.isFunction(callback)) { callback(); } } };

function addLoadEvent(func) {
	functs.push(func);
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
       window.onload = func
    } else {
       window.onload = function() {
           if (oldonload) {
                  oldonload()
          }
          func()
       }
   }
} 


function loadResources(thisId) {

   var firstWaDiv = $('.wascript:first');
       
       var firstId = $(firstWaDiv).attr('id');
       
       if(firstId == thisId) {

            loadjscssfile("" + x5engine.settings.currentPath + "imHeader_imObjectAnimation_03/WA.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/modernizr.custom.43133.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/spin.min.js", "js");

            loadjscssfile("" + x5engine.settings.currentPath + "wa-animations/JQ_Textualizer.js", "js");
            loadjscssfile("" + x5engine.settings.currentPath + "imHeader_imObjectAnimation_03/WA.css", "css");            
       }
	   
	   loadjscssfile("" + x5engine.settings.currentPath + "imHeader_imObjectAnimation_03/ani.css", "css");                          
}
	// Global variables




function Parsons_Ham_Clubstart() {    

    try
    {   
        if($.browser.msie) 
		{
			if(parseInt($.browser.version.slice(0,2)) == 10) {  
            }
            else if(parseInt($.browser.version.slice(0,1)) <= 9) 
			{
                
				return;
            }
		}

    var Parsons_Ham_Club = new WA();
Parsons_Ham_Club.custom = {
}

Parsons_Ham_Club.stage = [{            

            // SCENE 1
            'Oid': '_a3cee06e_723c_42e5_83f4_a4f26eef5fc4_5476f813867d7f561163a1c1bf22a0f9',
            'Name': 'SCENE_1',
            'Autostart': 'true',
            'BackgroundColor': '#FFFFFF',
            'SceneEnd': 1400,
            'Position': 'absolute',
            'Perspective': '800px',
            'Top': '0px',
            'Left': '0px',






                            'Timelines': [
            {
                'Oid': 'MAIN_TIMELINE',
                'Name': 'Main timeline',
                'Objects': [
                
                    
                    
                {
                    'Oid': '_83982899_124d_4ec4_bc85_81a225759975_5476f813867d7f561163a1c1bf22a0f9',                
                    'Type': 'box',
                    'InnerHTML': 'Parsons Amateur Radio Club'
                    ,
                    'Tag': 'div',
                    'Position': 'absolute',
                    'Top': '15px',
                    'Left': '10px',
                    'Height': '50px',
                    'Width': '777px',
                    'ZIndex': '1','Display': 'block','TextAlign': 'left',
'Bold': 'true',

                'TextColor': '#DAA520',
                'Opacity': '1',
                'FontFamily': 'Arial',
                'FontSize': '56px',
                'LineHeight': '0.8em',

                  
                        'TextShadow': [{
                            'BlurRadius': '0px',
                            'Color':'#000000',
                            'OffsetX' : '5px',
                            'OffsetY' : '4px'
                        }],

                'Visible': 'true',




'Pressed': [],
                    
                    'Hover': []}

                ],
                'Transforms': [
			
                    {
                            'ObjectId':'_83982899_124d_4ec4_bc85_81a225759975_5476f813867d7f561163a1c1bf22a0f9',
                            'StartTime':100,
                            'TransformElements':[
                        {
                            'Oid':'TRANSITION_BLOCK_1',
                            'Property':'RotateY',
                            'Duration':'1.4s',
                            'Delay':'0s',
                            'TimingFunc':'linear',
                            'EndValue': '-360deg'
                        }]
},


			    ],
                'Transitions': [
			
                    

			    ],
                'Changes': [
			
                    

			    ],
                'Events': [
			
                    

			    ]
            }]
}];

            Parsons_Ham_Club.init();
            Parsons_Ham_Club.stageHeight = 600;
            Parsons_Ham_Club.stageWidth  = 800;
            Parsons_Ham_Club.t  = '473003111211592850367771701662798821548';
            Parsons_Ham_Club.stageInitialTransition = 'instant';
            Parsons_Ham_Club.stageInitialTransitionDirection = 'left';
            Parsons_Ham_Club.stageInitialTransitionSpeed = 1000;
            Parsons_Ham_Club.showBrowserCompatibilityCheck = false;
                Parsons_Ham_Club.loaderType = 1;
                Parsons_Ham_Club.loaderBackgroundColor = '#000';
                Parsons_Ham_Club.loaderForegroundColor = '#fff';
            Parsons_Ham_Club.stageInitialScene = '_a3cee06e_723c_42e5_83f4_a4f26eef5fc4_5476f813867d7f561163a1c1bf22a0f9';
            Parsons_Ham_Club.debug = false;
            Parsons_Ham_Club.preloadImages = true;
Parsons_Ham_Club.imagesToPreload = [

];Parsons_Ham_Club.createWorkspace('imHeader_imObjectAnimation_03_stage');

                }

                catch (e) 
                {
	                
                }
            }

loadResources('imHeader_imObjectAnimation_03_stage');
addLoadEvent(Parsons_Ham_Clubstart);


 })( wajq );