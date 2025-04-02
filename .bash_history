exit
sudo poweroff
clear
sudo apt update
sudo apt upgrade
ssh localhost
sudo apt install openssh-server
date
sudo update
sudo apt update
sudo apt upgrade
date
sudo dpkg-reconfigure tzdata
date
sudo apt install ntp ntpsec-ntpdate
sudo ntpq -p
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt-cache policy docker-ce
sudo apt-get install docker-ce make ntpsec
sudo systemctl status docker
sudo apt-get upgrade
ls
ls -la
ls
clear
ls
sudo poweroff
sudo docker run hello-world
sudo systemctl status docker
sudo docker run hello-world
sudo poweroff
sudo apt update
sudo apt install nasm gcc g++ gdb build-essential -y
nasm --version && gcc --version && g++ --version && gdb --versionnasm --version && gcc --version && g++ --version && gdb --version
cd assembly/
cd Lab2
cd ..
cd Lab1
nasm felf64 hello_world.asm -o hello_world.o
nasm -felf64 hello_world.asm -o hello_world.o
ld -o hello_world hello_world.o
ls -la
./hello_world 
nasm -felf64 hello_saida_ok.asm -o hello_saida_ok.asm
nasm -felf64 hello_saida_ok.asm -o hello_saida_ok.o
ld -o hello_saida_ok hello_saida_ok.o
ls -la
./hello_saida_ok 
nasm -felf64 read.asm -o read.o
ld -o read read.o
./read
nasm -felf64 menu.asm -o menu.o
ld -o menu menu.o
clear
./menu
sudo poweroff
sudo apt update
sudo apt install nasm
nano calculadora.nasm
nasm -f elf32 calculadora.nasm -o calculadora,o
nano calculadora.nasm
nasm -f elf32 calculadora.asm -o calculadora.0
nasm -f elf32 calculadora.asm -o calculadora.o
nasm -f elf64  calculadora.asm -o calculadora.0
uname -m
nano calculadora.asm
nasm elf64 calculadora.asm -o calculadora.o
nano calculadora.asm
nasm elf64 calculadora.asm -o calculadora.o
ld calculadora.o -o calculadora
nasm elf64 calculadora.asm -o calculadora.o
ls calculadora.asm
nasm elf64 calculadora.asm -o calculadora.o
pwd

nasm elf64 calculadora.asm -o calculadora,o
ls calculadora,o
ld calculadora,o -o calculadora
ls -l
mv calculadora,o calculadora.o
mv calculadora
mv calculadora,
mv calculadora,o
ld calculadora.o -o calculadora
rm -f calculadora.o calculadora
nasm -f elf64 calculadora.nasm -o calculadora.o
ld -m elf_x86_64 calculadora.o -o calculadora
nano calculadora.asm
rm -f calculadora.o calculadora
nasm -f elf64 calculadora.nasm -o calculadora.o
ld -m elf_x86_64 calculadora.o -o calculadora
./calculadora
mkdir proj_calculadora
cd proj_calculadora
nano calculadora.asm
cd
nano calculadora.asm
git init
gti add calculadora.asm
git add calculadora.asm
git commit -m "add"
git congif --global user,mail "iagosouzag@gmail.com"
git config --global user,mail "iagosouzag@gmail.com"
git config --global user.mail "iagosouzag@gmail.com"
git config --global user.name "Iago de Souza"
git commit -m "add"
git config --global user.name "Iago de Souza"
git config --global user.mail "iagosouzag@gmail.com"
git init
git add calculadora.asm
git commit -m "add"
git remote add origin https://github.com/IagoSet/calculadora_asm
git push -u origin master
git remote add origin https://github.com/IagoSet/calculadora_asm,git
git remote add origin https://github.com/IagoSet/calculadora_asm.git
git push -u origin master
git config --global user.name "IagoSet"
git config --global user.mail "iagosouzag@gmail.com"
git init
rm -rf .git
git init
git config --global user.mail "iagosouzag@gmail.com"
git config --global user.name "IagoSet"
git init
rm -rf .git
git config --global user.mail "iagosouzag@gmail.com"
git config --global user.name "IagoSet"
git init
git remote add origin https://github.com/IagoSet/calculadora_asm
git add calculadora.asm
git commit -m "add"
git config --global user.email "iagosouzag@gmail.com"
git config --global user.name "IagoSet"
git commit -m "add"
git push -u origin master
git push
git push --set-upstream origin master
git push -u origin master
sudo apt update
sudo apt insta;; -y virtualbox-guest-utils
sudo apt install -y virtualbox-guest-utils
sudo reboot



sudo apt install -y virtualbox-guest-utils
git push -u origin master
sudo reboot
git push -u origin master
lsmod | grep vboxguest
sudo apt update
sudo apt upgrade -y
nano calculadora.asm
lsmod | grep vboxguest
nano calculadora.asm
git push -u origin master
sudo reboot
'
