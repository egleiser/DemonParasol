#define MyGameName "Setsuko"
#define MyExeName "Zero.exe"

[Setup]
AppId={{75AAB164-27A4-4C0B-AB67-DE449C49CE2C}}
AppName={#MyGameName}
AppVersion=1.5
DefaultDirName={pf}\DigiPen\{#MyGameName}
DefaultGroupName=DigiPen
UninstallDisplayIcon={app}\{#MyExeName}
Compression=lzma2
SolidCompression=yes
SetupIconFile="Icon.ico"
OutputBaseFilename=SetsukoSetup
LicenseFile=DigiPen_EULA.txt
PrivilegesRequired=none

[Tasks]
Name: "desktopicon"; Description: "{cm:CreateDesktopIcon}"; GroupDescription: "{cm:AdditionalIcons}";

[Files]
Source: "C:\Users\e.gleiser\AppData\Local\Temp\DemonParasol\*"; DestDir: "{app}";  Excludes: "*.exp,*.lib,__pycache__"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{group}\DigiPen\{#MyGameName}"; Filename: "{app}\{#MyExeName}"; Parameters: "-play -file DemonParasol.zeroproj"
Name: "{commondesktop}\{#MyGameName}"; Filename: "{app}\{#MyExeName}"; Tasks: desktopicon; Parameters: "-play -file DemonParasol.zeroproj"
Name: "{group}\DigiPen\Uninstall"; Filename: {uninstallexe}

[Run]
Filename: {app}\{#MyExeName}; Description: "Run {#MyGameName}"; Flags: nowait postinstall skipifsilent; Parameters: "-play -file DemonParasol.zeroproj"
