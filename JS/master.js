// hola
$(document).ready(function () {
  document.getElementById("btn0").addEventListener("click",changeStep,false);
  document.getElementById("btn1").addEventListener("click",changeStep,false);
  document.getElementById("btn2").addEventListener("click",changeStep,false);
  document.getElementById("btn3").addEventListener("click",changeStep,false);
document.getElementById("btn4").addEventListener("click",changeStep,false);
document.getElementById("cv").addEventListener("change",setFileURL,false);
let preview = document.getElementById("videoPreview");
let recording = document.getElementById("videoFinal");
let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let downloadButton = document.getElementById("downloadButton");
let logElement = document.getElementById("log");
let recordingTimeMS = 10000;
function log(msg) {
console.log(msg + "\n");
}
window.blobVideo;

function wait(delayInMS) {
return new Promise(resolve => setTimeout(resolve, delayInMS));
}
function startRecording(stream, lengthInMS) {
  let recorder = new MediaRecorder(stream);
  let data = [];

  recorder.ondataavailable = event => data.push(event.data);
  recorder.start();
  log(recorder.state + " for " + (lengthInMS/1000) + " seconds...");

  let stopped = new Promise((resolve, reject) => {
  recorder.onstop = resolve;
  recorder.onerror = event => reject(event.name);
  });

    let recorded = wait(lengthInMS).then(
  () => recorder.state == "recording" && recorder.stop()
    );

  return Promise.all([
  stopped,
  recorded
  ])
  .then(() => data);
  }
function stop(stream) {
stream.getTracks().forEach(track => track.stop());
}
startButton.addEventListener("click", function() {
navigator.mediaDevices.getUserMedia({
video: true,
audio: true
}).then(stream => {
preview.srcObject = stream;

preview.captureStream = preview.captureStream || preview.mozCaptureStream;
return new Promise(resolve => preview.onplaying = resolve);
}).then(() => startRecording(preview.captureStream(), recordingTimeMS))
.then (recordedChunks => {
let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
recording.src = URL.createObjectURL(recordedBlob);
window.blobVideo = recordedBlob;

log("Successfully recorded " + recordedBlob.size + " bytes of " +
  recordedBlob.type + " media.");
})
.catch(log);
}, false);stopButton.addEventListener("click", function() {
stop(preview.srcObject);

}, false);
  document.getElementById("countryCode").addEventListener("change",changePhoneNumber,false);
  changePhoneNumber();
});
// array con las preguntas del test
var test = new Array(15);
for(var a = 0;a<test.length;a++){
  test[a] = new Array(4);
}
test[0]['question'] = "They want to oust the president.'Oust' means";
test[0]['order'] = "0";
test[0]['a1'] = "n. gesture of respect or reverence";
test[0]['a2'] = "n. arrogance";
test[0]['a3'] = "adj. unpredictable; irregular";
test[0]['a4'] = "n. a removal from office or power";
test[1]['question'] = "I guarantee you Iphones are the best phones on the planet. 'Guarantee' means";
test[1]['order'] = "1";
test[1]['a1'] = "to vouch for; to give a warranty; to assure; to promise";
test[1]['a2'] = "to permit;to approve; to empower";
test[1]['a3'] = "to show how(people or things) are alike or different; to consider to be similar";
test[1]['a4'] = "to endanger; to imperit; to put at risk; to place in danger";
test[2]['question'] = "'Your role in the forestalls your application'.'Forestall'. Pick the best meaning";
test[2]['order'] = 2;
test[2]['a1'] = "n. plot, outline; screenplay";
test[2]['a2'] = "v. arrange (laws rules) as a code; classify";
test[2]['a3'] = "n. aimless follower of the arts; amateur";
test[2]['a4'] = "v. prevent by taking action in advance";
test[3]['question'] = "The beams of the house are not properly ________. They need to be straightened out.";
test[3]['order'] = 3;
test[3]['a1'] = "Lined";
test[3]['a2'] = "Aligned";
test[3]['a3'] = "Maligned";
test[3]['a4'] = "Beningn";
test[4]['question'] = "Fairies are often portrayed as attractive and benevolent but they are in fact very _______ creatures.";
test[4]['order'] = 4;
test[4]['a1'] = "Lazy";
test[4]['a2'] = "Raunchy";
test[4]['a3'] = "Organized";
test[4]['a4'] = "Mischievous";
test[5]['question'] = "He’s a pretty shrewd businessman. “Shrewd” means";
test[5]['order'] = 5;
test[5]['a1'] = "reccess";
test[5]['a2'] = "justify";
test[5]['a3'] = "slyness";
test[5]['a4'] = "a restraint";
test[6]['question'] = "Prada and other luxury brands are known for their exorbitant prices. “Exorbitant” means";
test[6]['order'] = 6;
test[6]['a1'] = "adj. being showy";
test[6]['a2'] = "adj. going beyond what is reasonable, excessive";
test[6]['a3'] = "n. amazement or terror that causes confusion";
test[6]['a4'] = "a restraint";
test[7]['question'] = "So many simultaneous events are happening right now. ”Simultaneous” means";
test[7]['order'] = 7;
test[7]['a1'] = "adj. happening at the same time";
test[7]['a2'] = "adj. lasting;surviving";
test[7]['a3'] = "adj. causing sadness, compassion, pity; touching";
test[7]['a4'] = "n. dilemma";
test[8]['question'] = "Global warming has seen floes in Antarctica melting. “Floe” means";
test[8]['order'] = 8;
test[8]['a1'] = "v. confirm";
test[8]['a2'] = "v. doubt;challenge";
test[8]['a3'] = "n. mass of floating ice";
test[8]['a4'] = "n. criminal";
test[9]['question'] = "The wooden clock needs sanding The surface feels quite ______.";
test[9]['order'] = 9;
test[9]['a1'] = "Rough";
test[9]['a2'] = "Unrefined";
test[9]['a3'] = "Amateur";
test[9]['a4'] = "Intrincate";
test[10]['question'] = "He’d be desolate without her. “Desolate” means";
test[10]['order'] = 10;
test[10]['a1'] = "adj. thin slim delicate; weak";
test[10]['a2'] = "adj. to be left alone or made lonely";
test[10]['a3'] = "v. to make weak";
test[10]['a4'] = "n appeal; magnetism";
test[11]['question'] = "His creation was an abomination. “Abomination” means";
test[11]['order'] = 11;
test[11]['a1'] = "adj. common; pertaining to the common people";
test[11]['a2'] = "v. dig out of the ground; remove form a grave";
test[11]['a3'] = "n. signing or chanting of magic formula";
test[11]['a4'] = "n. repugnance";
test[12]['question'] = "He mandated his officials to follow the new rules. “Mandate” means";
test[12]['order'] = 12;
test[12]['a1'] = "v. enclose; place in something";
test[12]['a2'] = "n. balance";
test[12]['a3'] = "n. orden; charge";
test[12]['a4'] = "adj. pertaining";
test[13]['question'] = "He couldn’t help but gloat when he won against his enemies. “Gloat” means";
test[13]['order'] = 13;
test[13]['a1'] = "n.former occupant of a post";
test[13]['a2'] = "v. pass into or through; penetrate (an organization) sneakily";
test[13]['a3'] = "n. commotion; riot";
test[13]['a4'] = "v. express evil satisfaction; view malevolently";
test[14]['question'] = "That was a sound decision. “Sound” in this sentence means";
test[14]['order'] = 14;
test[14]['a1'] = "greatest; most; utmost; highest";
test[14]['a2'] = "whole; healthy; in good condition; sane; firm; valid";
test[14]['a3'] = "sole; limited to a selected fewM incompatible, fashionable; unique";
test[14]['a4'] = "managerial, overseeing";

function changeStep(event) {
  event.preventDefault();
var step = event.target.dataset.step;
switch (step) {
  case "step0":
$("#certificates").slideUp(function() {
$("#personalData").slideDown();
});
  break;
  case "step1":
  if(checkStep1() == true){
    $("#personalData").slideUp(function(){
      $("#certificates").slideDown();
      $("#onlinetest").slideUp();
    });
  }

    break;
  case "step2":
  if(checkStep2() == true){
    $("#certificates").slideUp(function(){
    $("#onlinetest").slideDown();
    generarTest();


});
}
  break;
  case "step3":
  $("#onlinetest").slideUp(function(){
    $("#readingtest").slideDown();
  });
  break;
  case "step4":
  $("#readingtest").slideUp(function(){
    $("#freespeech").slideDown();
  });
}
}
function checkStep1(){
  var valid = true;
  /*
  document.getElementById("name").style.border = "1px solid #ced4da";
    document.getElementById("surname1").style.border = "1px solid #ced4da";
      document.getElementById("surname2").style.border = "1px solid #ced4da";
      document.getElementById("nickname").style.border = "1px solid #ced4da";
        document.getElementById("skype").style.border = "1px solid #ced4da";
        document.getElementById("phone1").style.border = "1px solid #ced4da";
        document.getElementById("email1").style.border = "1px solid #ced4da";
  if(document.getElementById("name").value.length == 0){
    document.getElementById("name").style.border = "1px solid red";
    $(".alertErrorStep").eq(0).show(function(){
      window.setTimeout(function(){
        $(".alertErrorStep").eq(0).hide(1000);
      },3000);
    });
    valid = false;
    return valid;
  }
  if(document.getElementById("surname1").value.length == 0){
    document.getElementById("surname1").style.border = "1px solid red";
    $(".alertErrorStep").eq(1).show(function(){
      window.setTimeout(function(){
        $(".alertErrorStep").eq(1).hide(1000);
      },3000);
    });
    valid = false;
    return valid;
  }

  if(document.getElementById("nickname").value.length < 5){
    document.getElementById("nickname").style.border = "1px solid red";
    $(".alertErrorStep").eq(2).show(function(){
      window.setTimeout(function(){
        $(".alertErrorStep").eq(2).hide(1000);
      },3000);
    });
    valid = false;
    return valid;
  }
  if(document.getElementById("skype").value.length == 0){
    document.getElementById("skype").style.border = "1px solid red";
    $(".alertErrorStep").eq(3).show(function(){
      window.setTimeout(function(){
        $(".alertErrorStep").eq(3).hide(1000);
      },3000);
    });
    valid = false;
    return valid;
  }
  if(document.getElementById("phone1").value.length != 9){
    document.getElementById("phone1").style.border = "1px solid red";
    $(".alertErrorStep").eq(4).show(function(){
      window.setTimeout(function(){
        $(".alertErrorStep").eq(4).hide(1000);
      },3000);
    });
    valid = false;
    return valid;
  }
  if(document.getElementById("email1").value.length == 0){
    document.getElementById("email1").style.border = "1px solid red";
    $(".alertErrorStep").eq(5).show(function(){
      window.setTimeout(function(){
        $(".alertErrorStep").eq(5).hide(1000);
      },3000);
    });
    valid = false;
    return valid;
  }
  */
return valid;
}
function checkStep2(){
  var valid = true;
  if(document.getElementById("studyName").value.length == 0){
    document.getElementById("studyName").style.border = "1px solid red";
    $(".alertErrorStep").eq(6).show(function(){
      window.setTimeout(function(){
        $(".alertErrorStep").eq(6).hide(1000);
      },3000);
    });
    valid = false;
    return valid;
  }
  if(document.getElementById("jobType").value.length == 0){
    document.getElementById("jobType").style.border = "1px solid red";
    $(".alertErrorStep").eq(7).show(function(){
      window.setTimeout(function(){
        $(".alertErrorStep").eq(7).hide(1000);
      },3000);
    });
    valid = false;
    return valid;
  }
  return valid;
}
function changePhoneNumber(){
var codPais = $("#countryCode").val();
  $("#codphone1").val("+"+codPais) ;
  $("#codphone2").val("+"+codPais) ;
var pais = $("#countryCode")[0].selectedOptions[0].dataset.countrycode;
$("#country").val(pais);
}

function generarTest(){
var testRandom = shuffle(test);
for(var a = 0;a<testRandom.length;a++){
  document.getElementById("examTest").innerHTML += '<tr>  <td colspan="4"><h5>'+parseInt(a+1)+'. '+testRandom[a]["question"]+'</h5></td>  </tr>  <tr><td><i class="choice"><input type="radio" name="q'+testRandom[a]["order"]+'" value="a1" id="q'+testRandom[a]["order"]+'a1"></i><label for="q'+testRandom[a]["order"]+'a1">'+testRandom[a]["a1"]+'</label></td><td><input type="radio" name="q'+testRandom[a]["order"]+'" value="a2" id="q'+testRandom[a]["order"]+'a2"><label for="q'+testRandom[a]["order"]+'a2">'+testRandom[a]["a2"]+'</label></td><td><input type="radio" name="q'+testRandom[a]["order"]+'" value="a3" id="q'+testRandom[a]["order"]+'a3"><label for="q'+testRandom[a]["order"]+'a3">'+testRandom[a]["a3"]+'</label></td><td><input type="radio" name="q'+testRandom[a]["order"]+'" value="a4" id="q'+testRandom[a]["order"]+'a4"><label for="q'+testRandom[a]["order"]+'a4">'+testRandom[a]["a4"]+'</label></td></tr>';
}


}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.

    temporaryValue = array[currentIndex];

    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
function setFileURL(){
  document.getElementById("cvtext").innerHTML = document.getElementById("cv").value;
}
function callAjax(){
  var formData = new FormData();
  formData.append("name",document.getElementById("name").value);
  formData.append("surname1",document.getElementById("surname1").value);
  formData.append("surname2",document.getElementById("surname2").value);
  formData.append("nickname",document.getElementById("nickname").value);
  formData.append("password",document.getElementById("password").value);
  formData.append("skype",document.getElementById("skype").value);
  formData.append("phone1",document.getElementById("phone1").value);
  formData.append("phone2",document.getElementById("phone2").value);
  formData.append("email1",document.getElementById("email1").value);
  formData.append("email2",document.getElementById("email2").value);
  formData.append("country",document.getElementById("country").value);
  formData.append("schedule",document.getElementById("schedule").value);
  formData.append("studyType",document.getElementById("studyType").value);
  formData.append("studyName",document.getElementById("studyName").value);
  formData.append("jobType",document.getElementById("jobType").value);
  formData.append("jobTime",document.getElementById("jobTime").value);
  formData.append("teachingQualifications[]",document.getElementById("COTE").value);
  formData.append("teachingQualifications[]",document.getElementById("RSA-CELTA").value);
  formData.append("teachingQualifications[]",document.getElementById("Education").value);
  formData.append("teachingQualifications[]",document.getElementById("FLT").value);
  formData.append("teachingQualifications[]",document.getElementById("EFL/TESL").value);
  formData.append("teachingQualifications[]",document.getElementById("Licensed").value);
  formData.append("cv",document.getElementById("cv").value);

  formData.append("videoCV",blobVideo);
  var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){
    console.log(this.responseText);
  }
}
  xhr.open('POST',"PHP/master.php");
xhr.send(formData);
}
function mandarDatos(){
  callAjax();
}
