# Useful
Repo for useful things


## Mount share

```bash
sudo apt update && sudo apt install cifs-utils -y
sudo mkdir -p /mnt/nas
sudo mount -t cifs '//192.168.0.1/ShareName' /mnt/nas -o username=youruser,password=yourpass,vers=3.0
```



## Change SI timestamps 
```bash
#FileCreateDate, FileModifyDate = SI timestamps
#DateTimeOriginal date value which is copied
exiftool "-FileCreateDate<DateTimeOriginal" "-FileModifyDate<DateTimeOriginal" IMG_0088.jpeg
```

## Install HEVC codec
```bash
#https://www.reddit.com/r/Windows11/comments/xtu786/does_anyone_know_how_to_get_the_hevc_codec_for/
#https://www.codecguide.com/media_foundation_codecs.htm
# Microsoft.HEVCVideoExtension_2.3.8.0_neutral_~_8wekyb3d8bbwe.AppxBundle -> 54779971af7ef5cab6753a5147dfe8d2
Add-AppxPackage -Path .\Microsoft.HEVCVideoExtension_2.3.8.0_neutral_~_8wekyb3d8bbwe.AppxBundle
```