# Useful
Repo for useful things

mkv ---> mp4 (https://gist.github.com/jamesmacwhite/58aebfe4a82bb8d645a797a1ba975132)
1. ffmpeg download https://ffmpeg.zeranoe.com/builds/
2. for /R %f IN (*.mkv) DO ffmpeg -i "%f" -c copy "%~nf.mp4" | for f in *.mkv; do ffmpeg -i "$f" -c copy "${f%.mkv}.mp4"; done
