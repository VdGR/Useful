# Useful
Repo for useful things


## Mount share

sudo apt update && sudo apt install cifs-utils -y
sudo mkdir -p /mnt/nas
sudo mount -t cifs '//192.168.0.1/ShareName' /mnt/nas -o username=youruser,password=yourpass,vers=3.0




