M_FILE=`echo $1`
O_FILE=`echo $1 | sed 's/\.m/.o/'`
COMPILER=$2
BUILD_DIR=$3
echo compiling $M_FILE
$COMPILER -I$BUILD_DIR -c $M_FILE -o $O_FILE

