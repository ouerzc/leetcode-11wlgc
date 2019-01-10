<?php

class Solution
{
    /**
     * 1.有效的括号
     * @author grn
     * @param $str
	 * @param $va
     * @return boolean
     */
    public function isValid($str,$va = ['()', '[]', '{}', "<>"])
    {
        $arr = [];
        $start = [];
        $end = [];
        foreach ($va as $key => $value) {
            $start[$key] = substr($value, 0, 1);
            $end[$key] = substr($value, -1);
        }
        for ($i = 0; $i < strlen($str); ++$i) {
            $char = substr($str, $i, 1);
            if (in_array($char, $start)) {
                $arr[$i] = $char;
            }
        }
        $switch = false;
        foreach ($arr as $key => $value) {
            if (in_array($value . substr($str, $key + 1, 1), $va)) {
                $switch = true;
                break;
            }
        }
        return $switch;
    }


}