<?php
$MonthData = $_POST['MonthData'];
$ServicePrice = $_POST['ServicePrice'];

$Weekly_val = _for_weekly($MonthData,$ServicePrice);
$Nightly_val = _for_fortnightly($MonthData,$ServicePrice);
$val_merge = array_merge($Weekly_val,$Nightly_val);

$myJSON = json_encode($val_merge);
echo $myJSON;

	function _for_weekly($MonthData,$ServicePrice){
	$percentage = 20;
	$depositPercentage = ($percentage / 100) * $ServicePrice;
	$Week_depPercentFixed = number_format($depositPercentage, 2, '.', '');
	$serviceRestval = ($ServicePrice - $depositPercentage);

		$per = $MonthData * 4;
		
		if($per == 12)
		{
			$weekEqualpayment = ($serviceRestval/12);
		}
		else if($per == 24)
		{
			$weekEqualpayment = ($serviceRestval/24);
		}
		else if($per == 36)
		{
			$weekEqualpayment = ($serviceRestval/36);
		}
		else if($per == 48)
		{
			$weekEqualpayment = ($serviceRestval/48);
		}
		$week_paymentFixed = number_format($weekEqualpayment, 2, '.', '');

		$res = array('forWeek'=> array('week_paymentFixed'=>$week_paymentFixed,'Week_depPercentFixed'=>$Week_depPercentFixed, 'MonthData'=>$per) );
		return $res;
	}

	function _for_fortnightly($MonthData,$ServicePrice){
		$percentage = 20;
		$depositPercentage = ($percentage / 100) * $ServicePrice;
		$night_depPercentFixed = number_format($depositPercentage, 2, '.', '');
		$serviceRestval = ($ServicePrice - $depositPercentage);

		$per = $MonthData * 2;
		
		if($per == 6)
		{
			$weekEqualpayment_fort = ($serviceRestval/6);
		}
		else if($per == 12)
		{
			$weekEqualpayment_fort = ($serviceRestval/12);
		}
		else if($per == 18)
		{
			$weekEqualpayment_fort = ($serviceRestval/18);
		}
		else if($per == 24)
		{
			$weekEqualpayment_fort = ($serviceRestval/24);
		}
		$night_paymentFixed = number_format($weekEqualpayment_fort, 2, '.', '');

		$res = array('forNight'=> array('night_paymentFixed'=>$night_paymentFixed,'night_depPercentFixed'=>$night_depPercentFixed, 'MonthData'=> $per) );

		return $res;
	}

exit();



?>