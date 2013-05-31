WSH JScript alerting of jenkins in [blink(1)](http://thingm.com/products/blink-1.html)
==================


Alerting of jenkins in [blink(1)](http://thingm.com/products/blink-1.html).


Setting
-------

Create setting.json:
```json
{
	id:			"user-id",
	password:	"your password",
	url:		"http://hostname/jenkins/api/json", 
	pattern:	/(_job_name|jobname2ljobname3...)/,
	wait:		10
}
```

Please install the [blink1-tool.exe](http://thingm.com/blink1/downloads/blink1-tool-win.zip) and setting.json in the current directory.

Start
-----

Double-click the jenkins-blink1.js.


Exit
----

Terminated the wscript.exe from task manager.
