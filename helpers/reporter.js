class Reporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(contexts, results) {
    console.log('Custom reporter output:');
    if(results.numFailedTestSuites == 0){
      console.log(`
--------/yhhyyyyyyyhddsssssyddhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhhmy////::::::--::-::::::::::::::::
------/shhhyyyyyyyyddsossssshmhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhdd+//:::::::://///++++++++++//:::
-::/+shhhyyyyyyyyyhds+osssssyddhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhhds///::///////+++++ooooooooo++/:
hhhhhhhyyyyyyyyyyhdho+ossssssyddhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhhdy/////////+++oooooooooooooooo+/
yyyyyyyyyyyyyyyyyddysssssssssydmhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhddo://++++++++++++++oooooooooooo
yyyyyyyyyyyyyyyyhmhsssssssyssyymdhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhhds//+++++++oo++++++++ooooooooss
yyyyyyyyyyyhhhhhmdsssssssyyyyyydmhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhdh+/+ooooooooooooo+++++++ooosss
yyyyyyyyyyhdmmmNNdssssssssyyyyyhmdyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhms/+oooooooooooooooo+++++oossy
yyyyyyyyyyyhmNNNNNdyyssssyyhhhhhmdhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhmhooossooooooooooooooooooosssy
yyyyyyyyyyyyhmNMMNmhyhhhhhddddddmmhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyddsossssssssooooooooooooosssss
yyyyyyyyyyyyhmmNNNd+:/+oyhdddddddmdyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhmyossssssssssssssoooooossssss
yyyyyyyyyyyhddydmNm+----:/oyhddddmmhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhdhooossssssoooooooooooossyhhd
yyyyyyyyyyyddyosymNs:------:/oyhdmmdyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyddsoossssoooooooooosssyyssosh
yyyyyyyyyyhdyooooymd+---------:/+yddhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhdyooosoooooosssyyys+/::::::y
yyyyyyyyyhdhsoooosydy/-----------:/oyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhddsoooosssyyyso+/:-------:/h
yyyyyyyyhddysssssssyhs:-------------:+shhhyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyhdhssssso++::------------:om
yyyyyyyydmhyyyhhyyysyhs+:--------------/oyyhyyyyyyyyyyyyyyyyyyyyyyyyyyhhhddyso/::----------------/ym
yyyyyyyhmmhhhddddddhyydho/---------------:/oyhhyhhyyyyyyyyyyyyyyyyyyyyysso+::-------------------:odm
yyyyyyhmmddhddddddddhhhdhy+:---------------::/+++++/////:::::::::::::::-----------------------::+ydd
yyyyyhdNmdddddddddddddddddds/---------------------------------------------------------------:/osssyh
yyyyyhmmddddddddddddddddddmdho:----------------------------------------------------------:/+syhhhyyy
yyyyhdmdddddddddddddddddddddddyo///:---------------------------------------------------:/oyhhhdddddh
yyyyhmmdddddddddddddddddddddddddhs/:---------------------------------------------::::/+syhhhhddddddh
yyyhmmmddddddmdddddddmmmmmmmdddmh+:----------------------------------------------:/osyhhhhhhdddddddh
yyydmmmmmmmmmmdddddddmmmNNNmmdddo:------------------------------------------------:+hhhhhhhhhddddddh
yyhmmmdddddmmdddddddmmNNNNNmddmh/-----:///++/---------------------://+so/:---------:ohhhhhhhhhhhhhhh
yhdNmdddddddmmmddddddmmmmmmddmdo:-----/o++hdy+-------------------:++:+dmho:---------:sddhhhyyyyyyhhh
ydNNmdddmmmmmmmmmmddddddddhhhmh/-----:/hhymNms:------------------:+hyhmmdo:----------/ydhyyyyyyyyyyy
hmNmmmmmNNNNNNNNNNmddddddhhhdmo:------:+yhddho:-------------------:oyhddy+:-----------odhyysyyyyyyyy
dNNmdmmNNNNNNNNNNNNmdddhhhhhmh/---------:////:----:/+//:------------:://::------------:yhsssssyyyyyy
mNdddmmNNNNNNNNNNNNmddhhhhhddy//:::---------------:oyhyo:------------------:::::::----:ohsssssssssyy
NddddmmmmNNNNNNNNmmddhhhhhhmmdhyyso/:---------------::/:-----------------:/oooooo+:----/yyssssssyyyy
mdhddddddddhhhhhhhhhhhhhhhdmdysssyys/-----------------::----------------:/ossssssso:---:shyssssyyyyy
Ndddddddddhhhhddhyyyyhhhhdmmhsssssss/------------:://+++///::-----------:+sssssssys/----/yhyyyyyyyyy
mddddddddddddddddhhyhhhhhdNmhyssssso:-----------:+ydhysooooo+:----------:+sssssssss/----:odhyhyyyyhh
hhhddddddddddddddddddddddmmyosyyss+/------------:sdho+/////+o/:----------:+sssssoo/:-----/yhyyyyyyhh
shhddddddddddddddddddddddmmy:-:::::-------------:+ys+//////+o+:-----------:://///::-------+hyssyyyyh
yhddddddddddddddddddddddddmd+--------------------:oss++///+oo/:---------------------------/yysssyyhh
yhhhhhhhhddhhhhyyyyhhhhhhhhdh+--------------------::+ooooooo/:----------------------------:ohyyyhhhh
dddddhyyyysssssssssssssssssyhh+-----------------------:::::::------------------------------/hhhhhhhh
ddddddhhhhyyysssssssssyyyhhhhhy/-----------------------------------------------------------:ydhhhhhh
dddddddddddddhhyyyyyyyyyyhhhhyho:----------------------------------------------------------:ohhhhhhh
hhhddddddddddddhyyyyyyyyyyyssyho:-----------------------------------------------------------/hdhhhhh
sssyyyhhyyyyyyyyssssssssssssshy/------------------------------------------------------------:shyyyyy
      `)
    }
  }
}

module.exports = Reporter;
