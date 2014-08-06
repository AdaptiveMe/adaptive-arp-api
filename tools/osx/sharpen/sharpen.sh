. `pwd`/config.make

JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.7.0_51.jdk/Contents/Home
DIRECTORY=$1
PROJECT=$2
SOURCES=$3
OPTIONS=`pwd`/$4
OUTDIR=`pwd`/$5
HEADER=$6
TEMPDIR=build

rm -rf $DIRECTORY/$TEMPDIR
mkdir -p $DIRECTORY/$TEMPDIR/$PROJECT
cp -r $DIRECTORY/$SOURCES $DIRECTORY/$TEMPDIR/$PROJECT
pushd $DIRECTORY


$JAVA_HOME/bin/java \
		-Xms256m \
		-Xmx512m \
		-Dosgi.requiredJavaVersion=1.7 \
		-Declipse.consoleLog=true \
		-cp $ECLIPSE_PATH/plugins/org.eclipse.equinox.launcher_*.jar \
		org.eclipse.core.launcher.Main \
		-data $TEMPDIR \
		-application sharpen.core.application \
		$PROJECT/$SOURCES @$OPTIONS -header $prefix/$HEADER

popd
mkdir -p $OUTDIR
cp -r $DIRECTORY/$TEMPDIR/$PROJECT.net/$SOURCES/* $OUTDIR
