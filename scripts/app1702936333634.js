var _banano_si7stickynotes=new banano_si7stickynotes();var _banano_sithasoionic7_modsithasoionic=new banano_sithasoionic7_modsithasoionic();var _banano_si7stickynotes_pghome=new banano_si7stickynotes_pghome();var _banano_si7stickynotes_pgindex=new banano_si7stickynotes_pgindex();
/* App */
function banano_si7stickynotes_pghome() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._name="home";this._title="Sticky Notes";this._icon="logo-ionic";this._path="/";this._color="";this._home= new banano_sithasoionic7_shiontab();this._list1= new banano_sithasoionic7_shionlist();this._fab1= new banano_sithasoionic7_shionfab();this._fabbutton1= new banano_sithasoionic7_shionfabbutton();this._fabbutton2= new banano_sithasoionic7_shionfabbutton();this._fabbutton3= new banano_sithasoionic7_shionfabbutton();this._fabbutton4= new banano_sithasoionic7_shionfabbutton();this._fabbutton5= new banano_sithasoionic7_shionfabbutton();this._addnote= new banano_sithasoionic7_shionfabbutton();this._alert1= new banano_sithasoionic7_shionalert();this._modal1= new banano_sithasoionic7_shionmodal();this._modal1toolbar= new banano_sithasoionic7_shiontoolbar();this._modal1title= new banano_sithasoionic7_shiontitle();this._txtnoteid= new banano_sithasoionic7_shioninput();this._textarea1= new banano_sithasoionic7_shiontextarea();this.initialize=function(_ionapp) {if (_B==null) _B=this;_B._app=_ionapp;_B._home.initialize(_B,"home","home");_B._home.settitle("Sticky Notes");_B._home.settab("home");_B._home.sethasheader(true);_B._home.settoolbarcolor("warning");_B._home.sethasleftbuttons(false);_B._home.sethasrightbuttons(false);_B._home.setmenubuttonautohide(false);_B._home.addtoparent("mainpagetabs",_B._home._custprops);_B._name=_B._home.getpgname();_B._title=_B._home.getpgtitle();_B._icon=_B._home.getpgicon();_B._path=_B._home.getpgpath();_B._color=_B._home.getpgiconcolor();_B._list1.initialize(_B,"list1","list1");_B._list1.addtoparent("homecontent",_B._list1._custprops);_B._fab1.initialize(_B,"fab1","fab1");_B._fab1.setvertical("top");_B._fab1.sethaslist(true);_B._fab1.addtoparent("homecontent",_B._fab1._custprops);_B._fabbutton2.initialize(_B,"fabbutton2","fabbutton2");_B._fabbutton2.setcolor("danger");_B._fabbutton2.addtoparent("fab1list",_B._fabbutton2._custprops);_B._fabbutton3.initialize(_B,"fabbutton3","fabbutton3");_B._fabbutton3.setcolor("primary");_B._fabbutton3.addtoparent("fab1list",_B._fabbutton3._custprops);_B._fabbutton4.initialize(_B,"fabbutton4","fabbutton4");_B._fabbutton4.setcolor("secondary");_B._fabbutton4.addtoparent("fab1list",_B._fabbutton4._custprops);_B._fabbutton5.initialize(_B,"fabbutton5","fabbutton5");_B._fabbutton5.setcolor("warning");_B._fabbutton5.addtoparent("fab1list",_B._fabbutton5._custprops);_B._addnote.initialize(_B,"addnote","addnote");_B._addnote.setcolor("tertiary");_B._addnote.addtoparent("fab1list",_B._addnote._custprops);_B._alert1.initialize(_B,"alert1","alert1");_B._alert1.setalerttype("yes-no");_B._alert1.setheader("Confirm Delete");_B._alert1.setmessage("Are you sure that you want to delete this note?");_B._alert1.addtoparent("homecontent",_B._alert1._custprops);_B._modal1.initialize(_B,"modal1","modal1");_B._modal1.sethasheader(true);_B._modal1.settitle("Add Note");_B._modal1.setconfirmtext("Apply");_B._modal1.setcontentionpadding(true);_B._modal1.setbreakpoints("0;0.5");_B._modal1.setinitialbreakpoint("0.5");_B._modal1.addtoparent("homecontent",_B._modal1._custprops);_B._modal1toolbar.initialize(_B,"modal1toolbar","modal1toolbar");_B._modal1toolbar.linkexisting();_B._modal1title.initialize(_B,"modal1title","modal1title");_B._modal1title.linkexisting();_B._txtnoteid.initialize(_B,"txtnoteid","txtnoteid");_B._txtnoteid.setfill("outline");_B._txtnoteid.setlabel("NoteID");_B._txtnoteid.setlabelplacement("stacked");_B._txtnoteid.setmode("md");_B._txtnoteid.setvisible(false);_B._txtnoteid.setrawstyles("margin-bottom:20px");_B._txtnoteid.addtoparent("modal1content",_B._txtnoteid._custprops);_B._textarea1.initialize(_B,"textarea1","textarea1");_B._textarea1.setfill("outline");_B._textarea1.setlabel("Note");_B._textarea1.setlabelplacement("stacked");_B._textarea1.setmode("md");_B._textarea1.setplaceholder("Enter your note content here");_B._textarea1.setrequired(true);_B._textarea1.setrows("5");_B._textarea1.sethelpertext("Enter your note above");_B._textarea1.seterrortext("The note is required!");_B._textarea1.addtoparent("modal1content",_B._textarea1._custprops);_B._app.addpagepath(_B._name,_B._title,_B._icon,_B._path);_B._app.adddatamodel("notes","id",false);_B._app.adddatamodelstrings("notes",["id","note","color"]);_B.buildpage(_B);};this.show=function() {if (_B==null) _B=this;_B._app.navigateto(_B._path,"forward");};this.getname=function() {if (_B==null) _B=this;return _B._name;};this.geticon=function() {if (_B==null) _B=this;return _B._icon;};this.gettitle=function() {if (_B==null) _B=this;return _B._title;};this.getpath=function() {if (_B==null) _B=this;return _B._path;};this.getcolor=function() {if (_B==null) _B=this;return _B._color;};this.buildpage=async function() {if (_B==null) _B=this;await _B.mountnotes(_B);};this.editnote1_click=async function(_e) {if (_B==null) _B=this;var _editnotetpl,_tag,_sid,_snote,_scolor;_e.preventDefault();_editnotetpl=arguments[arguments.length-1];_tag=_editnotetpl._tag;_sid=_tag["id"];_snote=_tag["note"];_scolor=_tag["color"];_B._modal1._tag="U-" + _sid + "";_B._modal1toolbar.setcolor(_scolor);_B._modal1title.settext("Edit Note");_B._txtnoteid.setvalue(_sid);_B._textarea1.setvalue(_snote);_B._txtnoteid.clearvalidation();_B._textarea1.clearvalidation();await _B._modal1.present();};this.deletenote1_click=async function(_e) {if (_B==null) _B=this;var _editnotetpl,_tag,_sid;_e.preventDefault();_editnotetpl=arguments[arguments.length-1];_tag=_editnotetpl._tag;_sid=_tag["id"];_B._alert1._process="delete-" + _sid + "";await _B._alert1.present();};this.fabbutton1_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_B.createnote("dark",_B);};this.fabbutton2_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_B.createnote("danger",_B);};this.fabbutton3_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_B.createnote("primary",_B);};this.fabbutton4_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_B.createnote("secondary",_B);};this.fabbutton5_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_B.createnote("warning",_B);};this.addnote_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();_B.createnote("tertiary",_B);};this.createnote=async function(_scolor) {if (_B==null) _B=this;var _nextid;_nextid=_B._app.nextid();_B._modal1._tag="C-" + _nextid + "";_B._modal1toolbar.setcolor(_scolor);_B._modal1title.settext("Add Note");_B._txtnoteid.setvalue(_nextid);_B._textarea1.setvalue("");_B._txtnoteid.clearvalidation();_B._textarea1.clearvalidation();await _B._modal1.present();};this.alert1_confirm_click=async function(_data) {if (_B==null) _B=this;var _mdlprocess,_prefix,_suffix,_rsnotes;_mdlprocess=_B._alert1._process;_prefix=_B._app.mvfield(_mdlprocess,1,"-");_suffix=_B._app.mvfield(_mdlprocess,2,"-");switch ("" + _prefix) {case "" + "delete":_rsnotes= new banano_sithasoionic7_sithasolocalstorage();_rsnotes.initialize("notes","id","");_rsnotes.setschemafromdatamodel(_B._app._datamodels);await _rsnotes.delete(_suffix);_B._alert1.cancel();await _B.mountnotes(_B);break;}};this.alert1_no_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();};this.modal1_confirm_click=async function(_data) {if (_B==null) _B=this;var _prefix,_suffix,_rsnotes;_B._app.resetvalidation();_B._app.validate(_B._txtnoteid.isblank());_B._app.validate(_B._textarea1.isblank());if (_B._app.isvalid()==false) {return;}_prefix=_B._app.mvfield(_B._modal1._tag,1,"-");_suffix=_B._app.mvfield(_B._modal1._tag,2,"-");_rsnotes= new banano_sithasoionic7_sithasolocalstorage();_rsnotes.initialize("notes","id","");_rsnotes.setschemafromdatamodel(_B._app._datamodels);_rsnotes.preparerecord();_rsnotes.setfield("id",_suffix);_rsnotes.setfield("note",_B._textarea1.getvalue());_rsnotes.setfield("color",_B._modal1toolbar.getcolor());switch ("" + _prefix) {case "" + "C":await _rsnotes.create();break;case "" + "U":await _rsnotes.update();break;}_B._modal1.cancel();await _B.mountnotes(_B);};this.modal1_cancel_click=function(_e) {if (_B==null) _B=this;_e.preventDefault();};this.mountnotes=async function() {if (_B==null) _B=this;var _rsnotes,_sid,_snote,_scolor,_ret,_allviews,_card1tpl,_label1tpl,_item2tpl,_editnotetpl,_deletenotetpl;_B._list1.clear();_rsnotes= new banano_sithasoionic7_sithasolocalstorage();_rsnotes.initialize("notes","id","");await _rsnotes.storagepersist();_rsnotes.setschemafromdatamodel(_B._app._datamodels);await _rsnotes.select_all();_rsnotes.movestart();while (_rsnotes.nextrow()) {_sid=_rsnotes.getstring("id");_snote=_rsnotes.getstring("note");_scolor=_rsnotes.getstring("color");_ret=0;_allviews={};_ret=this.item1layout(_B._list1.gethere(),false);_allviews=_B["_" + BANToBase("item1layout".toLowerCase())][_ret];_card1tpl=_allviews["card1"];_card1tpl.setcolor(_scolor);_label1tpl=_allviews["label1"];_label1tpl.settext(_snote);_item2tpl=_allviews["item2"];_item2tpl.setcolor(_scolor);_editnotetpl=_allviews["editnote"];_editnotetpl._tag=_rsnotes._record;_editnotetpl.onevent("click",_B,"editnote1_click",null);_deletenotetpl=_allviews["deletenote"];_deletenotetpl._tag=_rsnotes._record;_deletenotetpl.onevent("click",_B,"deletenote1_click",null);}};this.item1layout=function(Par,Empty) {if (Empty) {u(Par).empty();_B._item1layout={};};if (_B._item1layout==undefined) {_B._item1layout={};};var _T={};_BU++;_T.item1 = BANC(banano_sithasoionic7_shionitem,_B, "item1_" + _BU, "item1",u(Par), {"Color": "none","Detail": false,"DetailIcon": "chevronForward","Disabled": false,"Download": "","Elevation": "none","Fill": "none","Href": "","IsButton": false,"Lines": "none","MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","Mode": "ios","PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "","RawAttributes": "","RawClasses": "","RawStyles": "","Rel": "","RouterAnimation": "","RouterDirection": "forward","Shape": "none","Slot": "","Target": "none","Text": "","TypeOf": "button","Visible": true,"B4XLeft": 0,"B4XTop": 0,"B4XWidth": 600,"B4XHeight": 270,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_T.card1 = BANC(banano_sithasoionic7_shioncard,_B, "card1_" + _BU, "card1",u('#item1_' + _BU), {"Button": false,"Color": "","Disabled": false,"Download": false,"Href": "","MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","Mode": "ios","PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "","RawAttributes": "","RawClasses": "","RawStyles": "border-top-right-radius:32px; \r\nborder-bottom-left-radius:32px; \r\nmargin-right:0px; \r\nmargin-left:0px; \r\nwidth:100%","Rel": "","RouterAnimation": "","RouterDirection": "none","Target": "","TypeOf": "none","Visible": true,"B4XLeft": 10,"B4XTop": 10,"B4XWidth": 580,"B4XHeight": 250,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_T.cardheader1 = BANC(banano_sithasoionic7_shioncardheader,_B, "cardheader1_" + _BU, "cardheader1",u('#card1_' + _BU), {"Color": "none","MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","Mode": "ios","PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "","RawAttributes": "","RawClasses": "","RawStyles": "padding-top:0px","Translucent": false,"Visible": true,"B4XLeft": 20,"B4XTop": 20,"B4XWidth": 560,"B4XHeight": 60,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_T.label1 = BANC(banano_sithasoionic7_shlabel,_B, "label1_" + _BU, "label1",u('#cardheader1_' + _BU), {"AlignItems": "none","BorderRadius": "","Color": "none","CoverImage": "","CustomTag": "","Display": "","Elevation": "none","Height": "","Href": "","IonPadding": false,"IonTextCenter": false,"IonTextWrap": false,"JustifyContent": "none","LoremIpsum": false,"MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","Mode": "ios","PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "","RawAttributes": "","RawClasses": "","RawStyles": "","RawText": "","Rel": "","Size": "h4","Slot": "","Target": "none","Text": "","TextAlign": "none","VerticalAlign": "none","Visible": true,"Width": "","B4XLeft": 30,"B4XTop": 30,"B4XWidth": 540,"B4XHeight": 40,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_T.cardcontent1 = BANC(banano_sithasoionic7_shioncardcontent,_B, "cardcontent1_" + _BU, "cardcontent1",u('#card1_' + _BU), {"MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","Mode": "ios","PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "","RawAttributes": "","RawClasses": "","RawStyles": "padding-right:0px;\r\npadding-bottom:5px;","Slot": "","Text": "","Visible": true,"B4XLeft": 20,"B4XTop": 110,"B4XWidth": 560,"B4XHeight": 140,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_T.item2 = BANC(banano_sithasoionic7_shionitem,_B, "item2_" + _BU, "item2",u('#cardcontent1_' + _BU), {"Color": "none","Detail": false,"DetailIcon": "chevronForward","Disabled": false,"Download": "","Elevation": "none","Fill": "none","Href": "","IsButton": false,"Lines": "none","MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","Mode": "ios","PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "","RawAttributes": "","RawClasses": "","RawStyles": "","Rel": "","RouterAnimation": "","RouterDirection": "forward","Shape": "none","Slot": "","Target": "none","Text": "","TypeOf": "button","Visible": true,"B4XLeft": 30,"B4XTop": 120,"B4XWidth": 540,"B4XHeight": 120,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_T.editnote = BANC(banano_sithasoionic7_shionbutton,_B, "editnote_" + _BU, "editnote",u('#item2_' + _BU), {"Color": "dark","Disabled": false,"Expand": "none","Fill": "clear","Form": "","HasIcon": true,"Href": "","IconName": "pencil","IconSlot": "icon-only","IconSrc": "","IonTextWrap": false,"Loading": false,"MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","MaxWidth": "","Mode": "ios","NormalCase": false,"PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "","RawAttributes": "","RawClasses": "","RawStyles": "","Shape": "none","Size": "default","Slot": "end","Strong": false,"Target": "none","Text": "","Tooltip": "","TooltipColor": "blue","TooltipPosition": "left","TypeOf": "none","Visible": true,"B4XLeft": 40,"B4XTop": 130,"B4XWidth": 100,"B4XHeight": 100,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_T.deletenote = BANC(banano_sithasoionic7_shionbutton,_B, "deletenote_" + _BU, "deletenote",u('#item2_' + _BU), {"Color": "dark","Disabled": false,"Expand": "none","Fill": "clear","Form": "","HasIcon": true,"Href": "","IconName": "trash","IconSlot": "icon-only","IconSrc": "","IonTextWrap": false,"Loading": false,"MarginAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","MaxWidth": "","Mode": "ios","NormalCase": false,"PaddingAXYTBLR": "a=?; x=?; y=?; t=?; b=?; l=?; r=?","ParentID": "","RawAttributes": "","RawClasses": "","RawStyles": "","Shape": "none","Size": "default","Slot": "end","Strong": false,"Target": "none","Text": "","Tooltip": "","TooltipColor": "blue","TooltipPosition": "left","TypeOf": "none","Visible": true,"B4XLeft": 150,"B4XTop": 130,"B4XWidth": 100,"B4XHeight": 100,"B4XHAnchor": 0,"B4XVAnchor": 0,"B4XTag": "","B4XVisible": true,"B4XEnabled": true});_B._item1layout[_BU]=_T;return _BU;};}function banano_si7stickynotes_pgindex() {var _B;this._app= new banano_sithasoionic7_ionicapp();this._maincontent= new banano_sithasoionic7_shioncontent();this._mainpage= new banano_sithasoionic7_shionpage();this.initialize=async function() {if (_B==null) _B=this;_B._app.initialize(_B,"ios");_B._app.addapprouter();_B._maincontent.initialize(_B,"maincontent","maincontent");_B._maincontent.setparentid("app");_B._maincontent.setionpage(false);_B._maincontent.addtoparent("app",_B._maincontent._custprops);_B._mainpage.initialize(_B,"mainpage","mainpage");_B._mainpage.setroutername("");_B._mainpage.setpath("");_B._mainpage.sethastabs(true);_B._mainpage.addtoparent("maincontent",_B._mainpage._custprops);_B._app._pageviewer=_B._mainpage._pagetabsid;await _B.addpages(_B);_B.adddraweritems(_B);_B.addpagetabs(_B);_banano_si7stickynotes_pghome.show();};this.addpages=function() {if (_B==null) _B=this;_banano_si7stickynotes_pghome.initialize(_B._app);};this.adddraweritems=function() {if (_B==null) _B=this;};this.addpagetabs=function() {if (_B==null) _B=this;};}function banano_si7stickynotes() {var _B;this._appname="si7stickynotes";this._apptitle="SithasoIONIC7 Sticky Notes";this._publish="C:\laragon\www";this._version="0.01";this._serverip="";this.banano_ready=function() {if (_B==null) _B=this;_banano_si7stickynotes_pgindex.initialize();};}function banano_sithasoionic7_page() {var _B=this;_B._name="";_B._title="";_B._icon="";_B._path="";_B.initialize=function() {};}function banano_sithasoionic7_profiletype() {var _B=this;_B._id="";_B._name="";_B._verified=false;_B._email="";_B._token="";_B._avatar="";_B._username="";_B._size=0;_B.initialize=function() {};}function banano_sithasoionic7_fileobject() {var _B=this;_B._filename="";_B._filedate="";_B._filesize=0;_B._filetype="";_B._status="";_B._fullpath="";_B._filedateonly="";_B._fileok=false;_B._fo=null;_B._extension="";_B.initialize=function() {};}function banano_sithasoionic7_gmaplatlng() {var _B=this;_B._lat=0;_B._lng=0;_B.initialize=function() {};}function banano_sithasoionic7_gridrow() {var _B=this;_B._rows=0;_B._columns=[];_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_gridcolumn() {var _B=this;_B._columns=0;_B._gxs="";_B._gsm="";_B._gmd="";_B._glg="";_B._gxl="";_B._ofxs="";_B._ofsm="";_B._ofmd="";_B._oflg="";_B._ofxl="";_B._gma="";_B._gmx="";_B._gmy="";_B._gmt="";_B._gmb="";_B._gmr="";_B._gml="";_B._gpa="";_B._gpx="";_B._gpy="";_B._gpt="";_B._gpb="";_B._gpr="";_B._gpl="";_B.initialize=function() {};}function banano_sithasoionic7_prefitem() {var _B=this;_B._title={};_B._itemtype=0;_B._extra={};_B._key="";_B._required=false;_B._component={};_B._value={};_B._isbuilt=false;_B._visible=false;_B._disabled=false;_B.initialize=function() {};}function banano_sithasoionic7_storage() {var _B=this;_B._usage=0;_B._quota=0;_B._percentused=0;_B._remaining=0;_B.initialize=function() {};}window.addEventListener('online', function() {if (typeof _banano_si7stickynotes['banano_online']==="function") {_banano_si7stickynotes.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_si7stickynotes['banano_offline']==="function") {_banano_si7stickynotes.banano_offline();}});var BANversion=1702936342341;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_si7stickynotes.banano_ready();}}var hidden, visibilityChange;if (typeof document.hidden !== "undefined") {hidden = "hidden";visibilityChange = "visibilitychange";} else if (typeof document.msHidden !== "undefined") {hidden = "msHidden";visibilityChange = "msvisibilitychange";} else if (typeof document.webkitHidden !== "undefined") {hidden = "webkitHidden";visibilityChange = "webkitvisibilitychange";}function handleVisibilityChange() {if (document[hidden]) {if (typeof _banano_si7stickynotes['banano_visibilitychanged']==="function") {_banano_si7stickynotes.banano_visibilitychanged(false);}} else {if (typeof _banano_si7stickynotes['banano_visibilitychanged']==="function") {_banano_si7stickynotes.banano_visibilitychanged(true);}}};if (typeof document.addEventListener === "undefined" || hidden === undefined) {console.log("This requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");} else {document.addEventListener(visibilityChange, handleVisibilityChange, false);}window.addEventListener('resize', function(event) {if (typeof _banano_si7stickynotes['banano_resized']==="function") {_banano_si7stickynotes.banano_resized();}}, true);