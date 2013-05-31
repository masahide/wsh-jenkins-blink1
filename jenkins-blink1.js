var xhr   = new ActiveXObject("MSXML2.XMLHTTP");
var shell = new ActiveXObject("WScript.Shell");
var fs    = new ActiveXObject( "Scripting.FileSystemObject" );

//  Read setting.json
//  { 
//		url:		"http://hoge", 
//		pattern:	/(hoge|fuga)/,
//		wait:		10,
//		id:			"ID",
//		password:	"password"
//	}
var file = fs.OpenTextFile( "setting.json");
var setting_json = file.ReadAll();
file.Close();
var setting = eval("(" + setting_json + ")");

while( true )
{
	try{
		xhr.open("GET",setting.url,false,setting.id,setting.password);
		xhr.setRequestHeader("If-Modified-Since", "Thu, 01 Jun 1970 00:00:00 GMT");
		xhr.send();
	}
	catch(e){
		WScript.Sleep(1000*setting.wait);
		continue;
	}
	//if( xhr.readystate == 4 ){}
	//WScript.Echo( xhr.responseText );
	if(xhr.responseText.match(/^\{"assignedLabels":/) == null){
		WScript.Sleep(1000*setting.wait);
		continue;
	}
	var json = eval("(" + xhr.responseText + ")");
	//WScript.Echo( json.description );
	var result = true;
	for(var i in json.jobs){
		if(json.jobs[i].name.match(setting.pattern) == null){
			continue;
		}
		//WScript.Echo(json.jobs[i].name+":"+json.jobs[i].color);
		if(json.jobs[i].color.match(/blue/) == null){ 
			result = false;
			break;
		}
	}
	var blink1error = false;
	if(result){
		if(shell.Run("blink1-tool.exe --rgb 0,255,0",0,true) != 0){
			blink1error = true;
		}
		WScript.Sleep(1000*setting.wait);
	}
	else{
		if(shell.Run("blink1-tool.exe --rgb 255,0,0 --blink "+setting.wait,0,true) != 0 ){
			blink1error = true;
		}
	}
	if(blink1error){
		WScript.Echo("Error detected on the blink1-tool.exe");
	}
	//WScript.Quit();
}

