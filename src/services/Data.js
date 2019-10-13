export default {"version":"1.0.0","article_version":"1.0.0","title":"Como instalar o Xampp","desc":"Aprenda como instalar o xampp em sua máquina","lang":"pt","data":[{"tag":"title","data":"#1 Baixando o XAMPP","index":6},{"tag":"content","data":"Para instalar o xampp, basta baixar seu instalador:","index":28},{"tag":"content","data":"<only32>","index":81},{"tag":"command","sudo":true,"data":"wget https://ufpr.dl.sourceforge.net/project/xampp/XAMPP%20Linux/7.0.8/xampp-linux-7.0.8-0-installer.run -O xampp-installer.run","index":91},{"tag":"content","data":"</only32>","index":230},{"tag":"content","data":"<only64>","index":240},{"tag":"command","sudo":true,"data":"wget \"https://sourceforge.net/projects/xampp/files/XAMPP%20Linux/7.3.7/xampp-linux-x64-7.3.7-1-installer.run/download\"\t-O xampp-installer.run","index":250},{"tag":"content","data":"</only64>","index":403},{"tag":"title","data":"#2 Instalando o XAMPP","index":414},{"tag":"content","data":"Mude as permissões para permitir executá-lo:","index":438},{"tag":"command","sudo":true,"data":"chmod +x xampp-installer.run","index":483},{"tag":"content","data":"E por fim, execute-o:","index":524},{"tag":"command","sudo":true,"data":"./xampp-installer.run","index":546},{"tag":"content","data":"</img src='xampp.png'>","index":585},{"tag":"content","data":"<scripts>","index":609},{"tag":"content","data":"<only32>","index":620},{"tag":"content","data":"</file src='script_x86.sh' name='install_xampp.sh'>","index":631},{"tag":"content","data":"</only32>","index":684},{"tag":"content","data":"<only64>","index":695},{"tag":"content","data":"</file src='script_64.sh' name='install_xampp.sh'>","index":706},{"tag":"content","data":"</only64>","index":758},{"tag":"content","data":"</scripts>","index":768}]}