WSH Jscript alerting of jenkins in blink(1)
==================


Alerting of jenkins in blink1.

h2. Setting

Create setting.json:
{
	id:			"user-id",
	password:	"your password",
	url:		"http://hostname/jenkins/api/json", 
	pattern:	/(_job_name|jobname2ljobname3...)/,
	wait:		10
}

Please install the blink1-tool.exe and setting.json in the current directory.

h2. Start

Double-click the jenkins-blink1.js.


h2. Exit

Terminated the wscript.exe from task manager.
