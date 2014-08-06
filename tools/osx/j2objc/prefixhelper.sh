FILE=$1
DIR="$2/adaptive-arp-api-java/ARP/src"
DEST=$3
echo $FILE=AW | sed "s|$DIR||" | sed "s|/|.|g" >> $DEST

