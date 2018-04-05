<?php
  include 'bbdd.php';
  include 'functions.php';
  $depurate=false;
  $name = isset($_REQUEST['name']) ? $_REQUEST['name']:false;
  $surname1=isset($_REQUEST['surname1']) ? $_REQUEST['surname1']:false;
  $surname2=isset($_REQUEST['surname2']) ? $_REQUEST['surname2']:false;
  $nickname=isset($_REQUEST['nickname']) ? $_REQUEST['nickname']:false;
  $password=isset($_REQUEST['password']) ? $_REQUEST['password']:false;
  $phone1=isset($_REQUEST['phone1']) ? $_REQUEST['phone1']:false;
  $phone2=isset($_REQUEST['phone2']) ? $_REQUEST['phone2']:false;
  $skype=isset($_REQUEST['skype']) ? $_REQUEST['skype']:false;
  $email1=isset($_REQUEST['email1']) ? $_REQUEST['email1']:false;
  $email2=isset($_REQUEST['email2']) ? $_REQUEST['email2']:false;
  $schedule=isset($_REQUEST['schedule']) ? $_REQUEST['schedule']:false;
  $country=isset($_REQUEST['country']) ? $_REQUEST['country']:false;
  $studyType=isset($_REQUEST['studyType']) ? $_REQUEST['studyType']:false;
  $studyName=isset($_REQUEST['studyName']) ? $_REQUEST['studyName']:false;
  $jobType=isset($_REQUEST['jobType']) ? $_REQUEST['jobType']:false;
  $jobTime=isset($_REQUEST['jobTime']) ? $_REQUEST['jobTime']:false;
  $teachingQualifications=isset($_REQUEST['teachingQualifications']) ? $_REQUEST['teachingQualifications']:array("0" => "",);
  $questions;
  $response="{";
  $validate=true;
  for ($i=0; $i < 15; $i++)
  {
    $questions[$i]=isset($_REQUEST['q'.$i]) ? $_REQUEST['q'.$i]:false;
  }

  if(!validateNickname($nickname))
  {
    $validate=false;
    $response.='"nickname":"false",';
    if($depurate==true )
    echo "Nickname is not valid <br/>";
  }
  else
  {
    $response.='"nickname":"true",';
    if ($depurate==true)
          {
            echo "Nickname is valid <br/>";
          }
  }
  if(!validatePassword($password))
  {
    $validate=false;
    $response.='"password":"false",';
    if($depurate==true )
    echo "password is not valid <br/>";
  }
  else
  {
    $response.='"password":"true",';
    if ($depurate==true)
    {
      echo "password is valid <br/>";
    }
  }


  if(!validateSkype($skype))
  {
    $validate=false;
    $response.='"skype":"false",';
    if($depurate==true)
    echo "Skype is not valid <br/>";
  }
  else
  {
    $response.='"skype":"true",';
    if ($depurate==true)
    {
      echo "Skype is valid <br/>";
    }
  }

  if(!validateEmail1($email1))
  {
    $validate=false;
    $response.='"email1":"false",';
    if($depurate==true)
    echo "Email1 is not valid <br/>";
  }
  else
  {
    $response.='"email1":"true",';
    if ($depurate==true)
    {
      echo "Email1 is valid <br/>";
    }

  }

  if(!validateEmail2($email2))
  {
    $validate=false;
    if($depurate==true)
    echo "Email2 is not valid <br/>";
  }else if ($depurate==true)
        {
          echo "Email2 is valid <br/>";
        }

  if(!validateSchedule($schedule))
  {
    $validate=false;
    if($depurate==true)
    echo "Horario is not valid <br/>";
  }else if ($depurate==true)
        {
          echo "Horario is valid <br/>";
        }

  if(!validatePhone($phone1,$country))
  {
    $validate=false;
    if($depurate==true)
    echo "Phone1 is not valid <br/>";
  }else
    {
      $phone1=countryPhone($phone1,$country);
      if ($depurate==true)
      {
        echo "Phone1 is valid <br/>";
      }
    }

  if(!validatePhone($phone2,$country))
  {
    $validate=false;
    if($depurate==true)
    echo "Phone2 is not valid <br/>";
  }else
    {
      $phone2=countryPhone($phone2,$country);
      if ($depurate==true)
      {
        echo "Phone2 is valid <br/>";
      }
    }

  $country=generateCountry($country);

if(!validateStudyType($studyType))
{
  $validate=false;
  if($depurate==true)
  echo "studyType is not valid <br/>";
}else if ($depurate==true)
      {
        echo "studyType is valid <br/>";
      }

if(!validateJobTime($jobTime))
{
  $validate=false;
  if($depurate==true)
  echo "jobTime is not valid <br/>";
}else if ($depurate==true)
      {
        echo "jobTime is valid <br/>";
      }

if(!validateTeachingQualifications($teachingQualifications))
{
  $validate=false;
  if($depurate==true)
  echo "teachingQualifications is not valid <br/>";
}else if ($depurate==true)
      {
        echo "teachingQualifications is valid <br/>";
      }

if(!validateQuestions($questions))
{
  $validate=false;
  if($depurate==true)
  echo "questions is not valid <br/>";
}else if ($depurate==true)
      {
        echo "questions is valid <br/>";
      }

if($depurate==true)
{
  echo "Name: ".$name."<br/>";
  echo "surname1: ".$surname1."<br/>";
  echo "surname2: ".$surname2."<br/>";
  echo "nickname: ".$nickname."<br/>";
  echo "password: ".$nickname."<br/>";
  echo "phone1: ".$phone1."<br/>";
  echo "phone2: ".$phone2."<br/>";
  echo "skype: ".$skype."<br/>";
  echo "email1: ".$email1."<br/>";
  echo "email2: ".$email2."<br/>";
  echo "schedule: ".$schedule."<br/>";
  echo "country: ".$country."<br/>";
  echo "studyType: ".$studyType."<br/>";
  echo "studyName: ".$studyName."<br/>";
  echo "jobTime: ".$jobTime."<br/>";
  echo "teachingQualifications: ".print_r($teachingQualifications)."<br/>";
  echo "questions: ".print_r($questions)."<br/>";
}

if ($validate && $depurate) {
  echo "Form is valid <br/>";
}else if ($depurate){
  echo "Form is not valid <br/>";
}
$validate=true;
if ($validate==true)
{
  saveCv($nickname,$name,$surname1);
  saveVideoCv($nickname,$name,$surname1);
  $response.="}";
  echo $response;

}

?>
