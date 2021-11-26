var urlArray = [], gridColorArray=[], gridColorMTDArray=[], gdprArray=[];
gdprArray['unacceptable']=0;
gdprArray['tolerable']=0;
gdprArray['acceptable']=0;
var gdprRisk;

var validURL = true;
var urlArgs = window.location.search.replace("?", "").split("&");
var debugFlag = false;
debugFlag = window.location.href.indexOf("debug") >= 0;

var spitDebug = function(variable, comment){
   if(debugFlag){
        console.log(comment);
        console.log(variable);
        console.log("------------------------------------------------------");
        
    } 
}

spitDebug(loCalculatorTool, "JSON from CMS");


// at least 6 sections
if(urlArgs.length<6){
    validURL = false;
}



for (var keyArg in urlArgs) {
    if(/^[a-z0-9_]+$/i.test(urlArgs[keyArg])){
        urlArray[urlArgs[keyArg].split("_")[0]] = urlArgs[keyArg].split("_")[1];
    }else{
        validURL = false;
    }
}
spitDebug(urlArray, "urlArgs");

if(!validURL){
    //unacceptableIRECT TO INPUT in case URL is malformed
    window.location.replace("/m1/mra");
}

if(loCalculatorTool){
    var gridArray=[], gridMTDArray=[], maxFlag=0, maxScoreArray=[], maxScore;
    gridArray["r1c1"] = 0;
    gridArray["r1c2"] = 0;
    gridArray["r1c3"] = 0;
    gridArray["r1c4"] = 0;
    gridArray["r2c1"] = 0;
    gridArray["r2c2"] = 0;
    gridArray["r2c3"] = 0;
    gridArray["r2c4"] = 0;
    gridArray["r3c1"] = 0;
    gridArray["r3c2"] = 0;
    gridArray["r3c3"] = 0;
    gridArray["r3c4"] = 0;
    gridMTDArray["r1c1"] = 0;
    gridMTDArray["r1c2"] = 0;
    gridMTDArray["r1c3"] = 0;
    gridMTDArray["r1c4"] = 0;
    gridMTDArray["r2c1"] = 0;
    gridMTDArray["r2c2"] = 0;
    gridMTDArray["r2c3"] = 0;
    gridMTDArray["r2c4"] = 0;
    gridMTDArray["r3c1"] = 0;
    gridMTDArray["r3c2"] = 0;
    gridMTDArray["r3c3"] = 0;
    gridMTDArray["r3c4"] = 0;
    for (var key in loCalculatorTool) {
        if (loCalculatorTool[key].calculation == "Max" && maxFlag==0) {

            for (var keyInner in loCalculatorTool[key]) {
                if(urlArray[keyInner] && typeof loCalculatorTool[key][keyInner].question  !== undefined){
                    maxScoreArray.push(loCalculatorTool[key][keyInner].options[urlArray[keyInner]].impact);
                }
            }
            maxFlag=1;
            spitDebug(maxScoreArray, "Data Access Level Max Score Array");

            maxScore = Math.max.apply(Math, maxScoreArray);
            spitDebug(maxScore, "Data Access Level Max Score");
        }else if(loCalculatorTool[key].calculation == "Sum"){
            for (var keyInner in loCalculatorTool[key]) {
                if(urlArray[keyInner] && typeof loCalculatorTool[key][keyInner].subQuestions !== undefined){
                    for (var question in loCalculatorTool[key][keyInner].subQuestions) {
                           var matrixTemp = loCalculatorTool[key][keyInner]["subQuestions"][question].matrix;
                           for (var keyMatrix in matrixTemp) {
                                if(urlArray[question]){
                                    var impact = loCalculatorTool[key][keyInner]["subQuestions"][question]["options"][urlArray[question]]["impact"];
                                    if(!gridArray[matrixTemp[keyMatrix].tile]){
                                        gridArray[matrixTemp[keyMatrix].tile]=0;
                                    }
                                    gridArray[matrixTemp[keyMatrix].tile] += matrixTemp[keyMatrix].weight*impact;
                                }
                                if(!gridMTDArray[matrixTemp[keyMatrix].tile]){
                                    gridMTDArray[matrixTemp[keyMatrix].tile]=0;
                                }

                                if(loCalculatorTool[key].calculationMTD == "Sum"){
                                    gridMTDArray[matrixTemp[keyMatrix].tile] += matrixTemp[keyMatrix].weight*impact;
                                }else{
                                    gridMTDArray[matrixTemp[keyMatrix].tile] += 1*matrixTemp[keyMatrix].weight;
                                }
                            }
                    }

                }
            }
        }
    }
}

for (var keyGridArray in gridArray) {
    if(!gridColorArray[keyGridArray]){
        gridColorArray[keyGridArray] = [];
    }
    if(maxScore-gridArray[keyGridArray]<0){
        gridColorArray[keyGridArray]['score']=0;
        gridColorArray[keyGridArray]['color']='acceptable';
    }else{
        gridColorArray[keyGridArray]['score'] = maxScore-gridArray[keyGridArray];
        if(maxScore-gridArray[keyGridArray]>=2.5){
            gridColorArray[keyGridArray]['color']='unacceptable';
        }else if(maxScore-gridArray[keyGridArray]>=1.5){
            gridColorArray[keyGridArray]['color']='tolerable';
        }else{
            gridColorArray[keyGridArray]['color']='acceptable';
        }
    }
}
for (var keyGridMTDArray in gridMTDArray) {
    if(!gridColorMTDArray[keyGridMTDArray]){
        gridColorMTDArray[keyGridMTDArray] = [];
    }
    if(maxScore-gridMTDArray[keyGridMTDArray]<0){
        gridColorMTDArray[keyGridMTDArray]['score']=0;
        gridColorMTDArray[keyGridMTDArray]['color']='acceptable';
    }else{
        gridColorMTDArray[keyGridMTDArray]['score'] = maxScore-gridMTDArray[keyGridMTDArray];
        if(maxScore-gridMTDArray[keyGridMTDArray]>=2.5){
            gridColorMTDArray[keyGridMTDArray]['color']='unacceptable';
        }else if(maxScore-gridMTDArray[keyGridMTDArray]>=1.5){
            gridColorMTDArray[keyGridMTDArray]['color']='tolerable';
        }else{
            gridColorMTDArray[keyGridMTDArray]['color']='acceptable';
        }
    }
}

spitDebug(gridColorArray, "Your Risk - Color Array");
spitDebug(gridColorMTDArray, "With MTD - Color Array");

// IOS/ android / travel
var  objarray = Object.keys(loCalculatorTool);
var section1Qs = loCalculatorTool[objarray[0]];
var section1array = Object.keys(section1Qs);
var deviceLabel = section1Qs[section1array[2]].options[urlArray[section1array[2]]].label;
if(deviceLabel == "All iOS"){
    $('.has-android').hide();
    spitDebug("", "Met Condition All iOS - Hide Android");
}
else if(deviceLabel =="All Android"){
    $('.has-ios').hide();
    spitDebug("", "Met Condition : All Android - Hide iOS");
}
var travelanswer= section1Qs[section1array[3]].options[urlArray[section1array[3]]].label;

if((travelanswer == 'No employees')||(travelanswer == "I don't know")){
    $('.does-travel').hide();
    spitDebug("", "Met Travel Condition : No Employees or I dont know  -- Does Travel");
}

// steps already taken to reduce your risk 
var tilenumbers = Object.keys(gridColorArray);
var allUnacceptable = 0;
for (var tile in tilenumbers){
    var tileselector = ".tilecontainer." + tilenumbers[tile] + " .tiletitle";
    var tiletitle = $(tileselector).html();
    if (gridColorArray[tilenumbers[tile]].color == "unacceptable"){
    }
    else{
        $('#mrariskreducers').append("<div class='" + gridColorArray[tilenumbers[tile]].color + "icon'>" + tiletitle + "</div><br>");
        allUnacceptable += 1;
    }
}
if (allUnacceptable <= 0){
    $('#mrariskreducers').hide();
    spitDebug("", "All tiles are red  -- Hide MRA Risk Reducers");
}

// mracontrols
var mralis = $('#mracontrols li')
var mraIds = [];
var mralength;
var setMracontrols= function(){
    var flag = 0 
    $.each(mraIds, function(i,id){
        $("."+id).html($("."+id).html().replace('?', ' '))
        var answernum = urlArray[id];
        if(answernum == undefined){
            $("."+id).hide()
            spitDebug(id, "this mracontrol question was not answered");
            flag ++
        }
        else if((answernum == 3)||(answernum == 4)){
            $("."+id).hide()
            spitDebug(id, "this was mracontrol question deleted becasue they said no or i dont know");
            flag++
        }
        else{
             spitDebug(id, "this mracontrol question should show up");
        }
    });
    if (mralength == flag){
        $('#mracontrols').hide();
        $('#mrariskreducers').hide();
        spitDebug(mralength, "the number of questions in the controls matched the number hidden so the whole div was hidden, if this happens reducers section is also hidden");
    }
}
var getMracontrols = function(mralis, setMracontrols){
    $.each(mralis, function(index,item){
        mraIds.push($(item).attr('class'))
    })
    mralength = mraIds.length
    setMracontrols()

}
getMracontrols(mralis, setMracontrols)

// section2qa
var QA2lis = $('#section2QA li');
var QA2ids = [];
var section2Qs = loCalculatorTool[objarray[1]];

var setSection2Ans= function(){
    $.each(QA2ids, function(i,id){
        $("."+id).html($("."+id).html().replace('?', ' '))
        var answernum = urlArray[id];
        if(answernum == 3){
            $("."+id).hide()
            spitDebug(id, "Answered No to this section 2 question - its been taken out of the dom");
        }
        else if(answernum == 4){
            $("."+id + " span").html(" ("+ str_idk +")");
            spitDebug(id, "Answered "+ section2Qs[id]["options"][answernum]["label"] + " to this section 2 question - it will show up as possibly in green");
        }
        else{
             $("."+id + " span").html(" (" + section2Qs[id]["options"][answernum]["label"] + ")");
             spitDebug(id, "Answered "+ section2Qs[id]["options"][answernum]["label"] + " to this section 2 question - it will show up in green");
        }
    });
}

var getSection2Ans = function(QA2lis, setSection2Ans){
    $.each(QA2lis, function(index,item){
        QA2ids.push($(item).attr('class'))
    })
    setSection2Ans()
}

getSection2Ans(QA2lis, setSection2Ans)

// GDPR
var atLeastOneGdprViolation = false;
var gdprviolations =[];

for (var keyColor in gridColorArray) {
    gdprArray[gridColorArray[keyColor]['color']] = gdprArray[gridColorArray[keyColor]['color']]+1;
    if ( $("#gdprlist ."+keyColor ).length && gridColorArray[keyColor].color!=="acceptable") {
        // $("#gdprlist ."+gridColorArray[keyColor].color ).fadeIn();
        atLeastOneGdprViolation=true;
    }
}

var renderviolations = function(){
    if ((gdprviolations.indexOf("r1c2") > -1)||(gdprviolations.indexOf("r2c2") > -1)){
        $("#gdprlist .r2c2").toggleClass('hide');
        if (gdprviolations.indexOf("r1c2") > -1){
            gdprviolations.splice(gdprviolations.indexOf("r1c2"),1);
        }
        if(gdprviolations.indexOf("r2c2") > -1){
            gdprviolations.splice(gdprviolations.indexOf("r2c2"),1);
        }
    }
    if ((gdprviolations.indexOf("r1c3") > -1)||(gdprviolations.indexOf("r2c3") > -1)){
        $("#gdprlist .r2c3").toggleClass('hide');
        if(gdprviolations.indexOf("r1c3") > -1){
            gdprviolations.splice(gdprviolations.indexOf("r1c3"),1);
        }
        if(gdprviolations.indexOf("r2c3") > -1){
            gdprviolations.splice(gdprviolations.indexOf("r2c3"),1);
        }
    }
    if ((gdprviolations.indexOf("r1c4") > -1)||(gdprviolations.indexOf("r2c4") > -1)||(gdprviolations.indexOf("r3c4") > -1)){
        $("#gdprlist .r3c4").toggleClass('hide');
        if(gdprviolations.indexOf("r1c4") > -1){
            gdprviolations.splice(gdprviolations.indexOf("r1c4"),1);
        }
        if(gdprviolations.indexOf("r2c4") > -1){
            gdprviolations.splice(gdprviolations.indexOf("r2c4"),1);
        }
        if(gdprviolations.indexOf("r3c4") > -1){
            gdprviolations.splice(gdprviolations.indexOf("r3c4"),1);
        }
    }
    for (var violation in gdprviolations){
        var violationselector = "#gdprlist ."+gdprviolations[violation];
        $(violationselector).toggleClass('hide');
    }
    
}

var getgdprviolations= function( gridColorArray, renderviolations){
    for (var keyColor in gridColorArray) {
        if (gridColorArray[keyColor].color!=="acceptable"){
            gdprviolations.push(keyColor);
        }
    }
    spitDebug(gdprviolations, "GDPR Violations");
    renderviolations();
}

getgdprviolations(gridColorArray, renderviolations);




if(!atLeastOneGdprViolation){
    $("#gdprlist").hide();
    spitDebug("", "No GDPR Violations");
}

if(gdprArray['unacceptable']>=4){
    gdprRisk = "high";
    $("#GDPR .unacceptableicon").toggleClass('hide');
}else if(gdprArray['unacceptable']>=1 || gdprArray['tolerable']>=4){
    gdprRisk = "medium";
    $("#GDPR .tolerableicon").toggleClass('hide');
}else{
    gdprRisk = "low";
    $("#GDPR .acceptableicon").toggleClass('hide');
}

spitDebug(gdprRisk, "GDPR Risk Level");

if(gdprArray['acceptable']==12){
    $(".all-green").show();
    spitDebug("", "Showing All Green Section");
}else{
    $(".not-green").show();
    spitDebug("", "NOT Showing All Green Section");
}


if(maxScore>=2.5){
    $(".dataaccesslevel .datahigh").toggleClass('hide');
}else if(maxScore>=1.5){
    $(".dataaccesslevel .datamed").toggleClass('hide');
}else{
    $(".dataaccesslevel .datalow").toggleClass('hide');
}

function setRiskColor (selector, colorArray){
    for (var keyGridColor in colorArray) {
        var keyGridColorClass = "."+keyGridColor
        $(selector +" "+ keyGridColorClass+".coloricon").removeClass("acceptableicon");
        $(selector +" "+ keyGridColorClass+".coloricon").removeClass("unacceptableicon");
        $(selector +" "+ keyGridColorClass+".coloricon").removeClass("tolerableicon");
        $(selector +" "+ keyGridColorClass+".coloricon").addClass(colorArray[keyGridColor].color+"icon");

        $(selector+" "+ keyGridColorClass +".tilecontainer").removeClass("acceptable");
        $(selector+" "+ keyGridColorClass +".tilecontainer").removeClass("unacceptable");
        $(selector+" "+ keyGridColorClass +".tilecontainer").removeClass("tolerable");
        $(selector+" "+ keyGridColorClass +".tilecontainer").addClass(colorArray[keyGridColor].color);
       console.log(selector);
        console.log(keyGridColorClass);
    }
}

console.log('loaded');

setRiskColor("#REDUCE .MRMmobileicons", gridColorMTDArray);
setRiskColor("#REDUCE .compgridcards", gridColorMTDArray);
setRiskColor("#REDUCE .vtilecontainer", gridColorMTDArray);
setRiskColor("#YMRA .MRMmobileicons", gridColorArray);
setRiskColor("#YMRA .vtilecontainer", gridColorArray);
setRiskColor("#YMRAL .vtilecontainer", gridColorArray);

$("#mtd-toggle input").change(function() {
    if($(this).is(':checked') == false){
        //WITH MTD
        setRiskColor("#REDUCE .MRMmobileicons", gridColorMTDArray);
        setRiskColor("#REDUCE .vtilecontainer", gridColorMTDArray);


    }else{
        setRiskColor("#REDUCE .MRMmobileicons", gridColorArray);
        setRiskColor("#REDUCE .vtilecontainer", gridColorArray);
    }
});

var scrollToMRATabs = function(tabID){
    $('html, body').animate({
        scrollTop: $("#BUSRISK .mratabs").offset().top
    }, 2000);
    console.log(tabID);
    $('ul.tabs').tabs('select_tab', tabID);
}
for (i = 1; i < 5; i++) {
    for (j = 1; j < 4; j++) {
        $("#YMRA .vtile .r"+j+"c"+i).data("target-tabid", i);
        $("#YMRA .vtile .r"+j+"c"+i).click(function() {
            scrollToMRATabs("tab"+$(this).data("target-tabid"));
        });
    }
}
