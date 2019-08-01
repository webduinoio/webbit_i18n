'use strict';

goog.provide('Blockly.Msg.Webduino.zh.hant');

goog.require('Blockly.Msg.Webduino');

// other

Blockly.Msg.LOGIC_BOOLEAN_FALSE = "假";
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "返回 真 或 假。";
Blockly.Msg.MATH_IS_TOOLTIP = "如果數字是偶數，奇數，非負整數，正數、 負數或如果它是可被某數字整除，則返回 真 或 假。";
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = "檢查 'test' 中的條件。如果條件為 真，將返回 '如果為 真' 值 ；否則，返回 '如果為 假' 的值。";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = "如果輸入的值是 假，則返回 真。如果輸入的值是 真 返回 假。";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "當值為假時，執行一些語句";
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "如果為假";

// Bit 矩陣 LED

Blockly.Msg.WEBDUINO_LED_MATRIX = "距陣 LED";
Blockly.Msg.WEBDUINO_LED_MATRIX_LED_SET = "設定";
Blockly.Msg.WEBDUINO_LED_MATRIX_LED_SELECT_COLOR = "選擇顏色";
Blockly.Msg.WEBDUINO_LED_MATRIX_LED_BRIGHTNESS = "亮度(0~20)";
Blockly.Msg.WEBDUINO_LED_MATRIX_LED_NUMBER = "第";
Blockly.Msg.WEBDUINO_LED_MATRIX_LED_COLOR_TO = "顆燈光的顏色為";
Blockly.Msg.WEBDUINO_LED_MATRIX_CLOSE = "關閉";
Blockly.Msg.WEBDUINO_LED_MATRIX_CHARACTER_SHOW = "顯示一個字元";
Blockly.Msg.WEBDUINO_LED_MATRIX_CHARACTER_COLOR_TO = "燈光為";
Blockly.Msg.WEBDUINO_LED_MATRIX_CHARACTER_COLOR_XY = "燈光的顏色為";
Blockly.Msg.WEBDUINO_LED_MATRIX_STRING_SHOW = "跑馬燈";
Blockly.Msg.WEBDUINO_LED_MATRIX_STRING_SPEED = "播放速度";
Blockly.Msg.WEBDUINO_LED_MATRIX_STRING_COLOR_TO = "(最多 54 個字) 顏色為";
Blockly.Msg.WEBDUINO_LED_MATRIX_LED_EMOJI = "圖案";
Blockly.Msg.WEBDUINO_LED_MATRIX_LED_EMOJICOLOR = " 顏色";
Blockly.Msg.WEBDUINO_LED_MATRIX_SETCOLOR = "矩陣 LED 的燈光為";

Blockly.Msg.TEXT_PRINT_TITLE = "彈出顯示 %1";
Blockly.Msg.MATH_CONSTRAIN_TITLE = "限制數字 %1 介於 %2 到 %3";
Blockly.Msg.MATH_RANDOM_INT_TITLE = "取隨機整數介於 %1 到 %2";
Blockly.Msg.MATH_MODULO_TITLE = "取餘數自 %1 ÷ %2";
// Sample

Blockly.Msg.SAMPLE_COMFIRM_MSG = "載入範例積木將會覆寫工作區內容，確定載入？\n( 單純想加入範例積木，可點選後方「+」號 )";

// BlockSvg ContextMenu

Blockly.Msg.MAINURL = "https://tutorials.webduino.io/zh-tw/docs/";
Blockly.Msg.UTMURL = '?utm_source=cloud-blockly&utm_medium=contextMenu&utm_campaign=tutorials';

Blockly.Msg.HELP = "教學";
Blockly.Msg.TOOL = "小工具";

Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = "https://tutorials.webduino.io/zh-tw/docs/blockly/standard/functions.html" + Blockly.Msg.UTMURL;
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL;
Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL;
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL;
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL;


Blockly.Msg.CONTROLS_REPEAT_HELPURL = Blockly.Msg.MAINURL + "blockly/standard/loops.html" + Blockly.Msg.UTMURL;
Blockly.Msg.CONTROLS_WHILEUNTIL_HELPURL = Blockly.Msg.CONTROLS_REPEAT_HELPURL;
Blockly.Msg.CONTROLS_FOR_HELPURL = Blockly.Msg.CONTROLS_REPEAT_HELPURL;
Blockly.Msg.CONTROLS_FOREACH_HELPURL = Blockly.Msg.CONTROLS_REPEAT_HELPURL;
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_HELPURL = Blockly.Msg.CONTROLS_REPEAT_HELPURL;

Blockly.Msg.COLOUR_PICKER_HELPURL = Blockly.Msg.MAINURL + "blockly/index.html" + Blockly.Msg.UTMURL;
Blockly.Msg.COLOUR_RANDOM_HELPURL = Blockly.Msg.COLOUR_PICKER_HELPURL;
Blockly.Msg.COLOUR_RGB_HELPURL = Blockly.Msg.COLOUR_PICKER_HELPURL;
Blockly.Msg.COLOUR_BLEND_HELPURL = Blockly.Msg.COLOUR_PICKER_HELPURL;


// Main

Blockly.Msg.VARIABLES_SET = "設定 %1 為 %2";
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "建立陣列";
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "建立字串";

Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "總和 自陣列";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "返回陣列中的所有數字的總和。";
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "最小值 自陣列";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "返回陣列中的最小數字。";
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "最大值 自陣列";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "返回陣列中的最大數字。";
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "平均值 自陣列";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "返回陣列中數值的平均值 （算術平均值）。";
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "中位數 自陣列";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "返回陣列中數值的中位數。";
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "比較眾數 自陣列";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "返回一個陣列中的最常見項目的陣列。";
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "標準差 自陣列";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "返回陣列中數字的標準差。";
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "隨機抽取 自陣列";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "從陣列中返回一個隨機的項目。";

Blockly.Msg.CONTROLS_FOREACH_TITLE = "取出每個 %1 自陣列 %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "遍歷每個陣列中的項目，將變數 '%1' 設定到該項目中，然後執行某些語句";


Blockly.Msg.LISTS_CREATE_EMPTY_TITLE = "建立空陣列";
Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP = "返回一個長度為 0 的陣列，不包含任何資料記錄";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = "建立一個具備任意數量項目的陣列。";
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "建立陣列";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "陣列";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "添加、 刪除或重新排列各區塊來此重新配置這個 陣列 積木。";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "將一個項目加入到陣列中。";
Blockly.Msg.LISTS_REPEAT_TOOLTIP = "建立包含指定重複次數的 值 的陣列。";
Blockly.Msg.LISTS_REPEAT_TITLE = "建立陣列，使用 %1 重複 %2 次數";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "返回陣列的長度。";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "如果該陣列為空，則返回 真。";
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = "自陣列";
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = "自陣列";
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = "自陣列";
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = "自陣列";
Blockly.Msg.LISTS_SPLIT_LIST_FROM_TEXT = "從文字製作陣列";
Blockly.Msg.LISTS_SPLIT_TEXT_FROM_LIST = "從陣列拆出文字";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "從 # 取得子陣列";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = "從倒數 # 取得子陣列";
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = "從頭 取得子陣列";
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "返回在陣列中的第一個/最後一個匹配項目的索引值。如果未找到則返回 0。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_START = "返回在陣列中的指定位置的項目。#1 是第一個項目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM_END = "返回在陣列中的指定位置的項目。#1 是最後一個項目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "返回陣列中的第一個項目";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "返回陣列中的最後一個項目";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "返回陣列中隨機的一個項目";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_START = "移除並返回陣列中的指定位置的項目。#1 是第一個項目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM_END = "移除並返回陣列中的指定位置的項目。#1 是最後一個項目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "移除並返回陣列中的第一個項目";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "移除並返回陣列中的最後一個項目";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "移除並返回陣列中的隨機一個項目";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_START = "移除在陣列中的指定位置的項目。#1 是第一個項目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM_END = "移除在陣列中的指定位置的項目。#1 是最後一個項目。";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "移除陣列中的第一個項目";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "移除陣列中的最後一個項目";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "移除陣列中隨機的一個項目";


Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "建立";
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "函式";
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = "函式";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = "建立";
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "回傳值";

Blockly.Msg.CONTROLS_FOR_TITLE = "計數 %1 從 %2 到 %3 每隔 %4";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "停止 重複",
  Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "繼續下一個 重複",

  // Demo

  Blockly.Msg.DEMO_SHOW = "顯示";
Blockly.Msg.DEMO_TEXT_SIZE = "文字大小";
Blockly.Msg.DEMO_TEXT_LINEHEIGHT = "文字行高";
Blockly.Msg.DEMO_TEXT_COLOR = "文字顏色";
Blockly.Msg.DEMO_LIGHT_CLICK = "點擊燈泡，執行";
Blockly.Msg.DEMO_LIGHT_STATE = "設定燈泡狀態為";
Blockly.Msg.DEMO_LIGHT_IFELSE = "燈泡現在的狀態是";
Blockly.Msg.DEMO_LIGHT_TOGGLE = "燈泡狀態切換";
Blockly.Msg.DEMO_BUTTON_CLICK = "點選";
Blockly.Msg.DEMO_BUTTON_BTN1 = "按鈕1";
Blockly.Msg.DEMO_BUTTON_BTN2 = "按鈕2";
Blockly.Msg.DEMO_BUTTON_BTN3 = "按鈕3";
Blockly.Msg.DEMO_BUTTON_BTN4 = "按鈕4";
Blockly.Msg.DEMO_BUTTON_BTN5 = "按鈕5";
Blockly.Msg.DEMO_BUTTON_CLICK_DO = "執行";
Blockly.Msg.DEMO_IMAGE_URL = "圖片網址";
Blockly.Msg.DEMO_IMAGE_WIDTH = "圖片寬度";
Blockly.Msg.DEMO_IMAGE_HEIGHT = "高度";
Blockly.Msg.DEMO_IMAGE_ROTATE = "圖片旋轉角度";
Blockly.Msg.DEMO_IMAGE_OPACITY = "圖片透明度";
Blockly.Msg.DEMO_IMAGE_POS = "圖片";
Blockly.Msg.DEMO_IMAGE_X = "水平";
Blockly.Msg.DEMO_IMAGE_Y = "垂直";
Blockly.Msg.DEMO_IMAGE_MOVE = "移動";
Blockly.Msg.DEMO_IMAGE_PIXEL = "像素";
Blockly.Msg.DEMO_AREA_COLOR = "設定區域顏色";
Blockly.Msg.DEMO_AREA_COLOR_INPUT = "選擇顏色，執行";
Blockly.Msg.DEMO_AREA_COLOR_CHOOSE = "選擇的顏色";
Blockly.Msg.DEMO_RANGE_MIN = "拉霸設定，最小值";
Blockly.Msg.DEMO_RANGE_MAX = "最大值";
Blockly.Msg.DEMO_RANGE_STEP = "間距";
Blockly.Msg.DEMO_RANGE_DEFAULT = "預設值";
Blockly.Msg.DEMO_RANGE_INPUT = "調整拉霸，執行";
Blockly.Msg.DEMO_RANGE_SHOW = "數值顯示";
Blockly.Msg.DEMO_RANGE_VALUE = "拉霸的數值";
Blockly.Msg.DEMO_YOUTUBE_CHANGEID = "更換";
Blockly.Msg.DEMO_YOUTUBE_CHANGEID_ID = "影片，要更換的：";
Blockly.Msg.DEMO_SERVER_URL = "影像來源網址";
Blockly.Msg.DEMO_TRACKING_SET = "設定影像追蹤";
Blockly.Msg.DEMO_TRACKING = "追蹤";
Blockly.Msg.DEMO_TRACKING_FACE = "人臉";
Blockly.Msg.DEMO_TRACKING_COLOR = "顏色";
Blockly.Msg.DEMO_TRACKING_DO = "追蹤成功時，執行";
Blockly.Msg.DEMO_TRACKING_STANDBY = "追蹤待命時，執行";
Blockly.Msg.DEMO_TRACKING_RUN = "開始";
Blockly.Msg.DEMO_TRACKING_STOP = "停止";
Blockly.Msg.DEMO_TRACKING_TRACK = "追蹤";
Blockly.Msg.DEMO_TRACKING_FACESETTING = "人臉 追蹤設定 ( 非必要 )";
Blockly.Msg.DEMO_TRACKING_VAL = "追蹤數值";
Blockly.Msg.DEMO_TRACKING_VALTOTAL = "total ( 臉 )";
Blockly.Msg.DEMO_TRACKING_VALAGE = "age ( 年齡 )";
Blockly.Msg.DEMO_TRACKING_VALEMOTION = "emotion ( 情緒 )";
Blockly.Msg.DEMO_TRACKING_VALCOLOR = "color ( 顏色 )";
Blockly.Msg.DEMO_CONTROLLER_BTN = "遙控器按鍵";
Blockly.Msg.DEMO_CONTROLLER_BTNCLICK = "點擊";
Blockly.Msg.DEMO_CONTROLLER_BTNDOWN = "按下";
Blockly.Msg.DEMO_CONTROLLER_BTNUP = "放開";
Blockly.Msg.DEMO_CONTROLLER_BTNRED = "紅色";
Blockly.Msg.DEMO_CONTROLLER_BTNGREEN = "綠色";
Blockly.Msg.DEMO_CONTROLLER_BTNBLUE = "藍色";
Blockly.Msg.DEMO_CONTROLLER_BTNYELLOW = "黃色";
Blockly.Msg.DEMO_CONTROLLER_BTNDO = "執行";
Blockly.Msg.DEMO_CONTROLLER_SCREEN = "遙控器螢幕，顯示";
Blockly.Msg.DEMO_CONTROLLER_RANGEMIN = "遙控器拉霸，最小值";
Blockly.Msg.DEMO_CONTROLLER_RANGEMAX = "最大值";
Blockly.Msg.DEMO_CONTROLLER_RANGESTEP = "間距";
Blockly.Msg.DEMO_CONTROLLER_RANGEDEFAULT = "預設值";
Blockly.Msg.DEMO_CONTROLLER_RANGEDO = "調整拉霸時，執行";
Blockly.Msg.DEMO_CONTROLLER_RANGE_VALUE = "遙控器拉霸的數值";
Blockly.Msg.DEMO_CONTROLLER_SCREENSHOW = "遙控器螢幕";
Blockly.Msg.DEMO_CONTROLLER_SCREENBG = "背景";
Blockly.Msg.DEMO_CONTROLLER_SCREENTEXT = "文字";
Blockly.Msg.DEMO_CONTROLLER_SCREENCOLOR = "顏色";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION = "行動裝置，偵測";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_DO = "執行";
Blockly.Msg.DEMO_CONTROLLER_MOBILE = "行動裝置";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_ALPHA = "水平旋轉";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_BETA = "前後翻轉";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_GAMMA = "左右翻轉";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_VAL1 = "的數值 ( 小數點";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_VAL2 = "位 )";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_REMOVE = "停止偵測";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_ACCELERATION_X = "x";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_ACCELERATION_Y = "y";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_ACCELERATION_Z = "z";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_ACCELERATION_VAL2 = Blockly.Msg.DEMO_CONTROLLER_MOBILE_DEVICEORIENTATION_VAL2;
Blockly.Msg.DEMO_CONTROLLER_MOBILE_ACCELERATION = "加速度的數值 ( 小數點";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_TYPE1 = "旋轉與翻轉";
Blockly.Msg.DEMO_CONTROLLER_MOBILE_TYPE2 = "加速度";

Blockly.Msg.DEMO_CONTROLLER_CHART = "圖表";
Blockly.Msg.PIE_TITLE = "繪製圓餅圖，標題";
Blockly.Msg.PIE_SUB_TITLE = "子標題";
Blockly.Msg.DEMO_PIE_DATA = "資料陣列";
Blockly.Msg.PIE_REFRESH = "更新圓餅圖顯示";
Blockly.Msg.PIE_VALUE = "數值";
Blockly.Msg.PIE_DESCRIPTION = "說明";
Blockly.Msg.PIE_AUTO_REFRESH = "每";
Blockly.Msg.PIE_AUTO_REFRESH_SEC = "秒自動更新圓餅圖顯示";

// DataTransfer

Blockly.Msg.DATA_TRANSFER_SET = "設定";
Blockly.Msg.DATA_TRANSFER_USE = "使用";
Blockly.Msg.DATA_TRANSFER_FORMAT = "傳輸資料,資料格式為";
Blockly.Msg.DATA_TRANSFER_SEND_STRING = "傳送字串";
Blockly.Msg.DATA_TRANSFER_RTN_STRING = "接收字串後執行";
Blockly.Msg.DATA_TRANSFER_RECV_STRING = "接收的字串";

// Console

Blockly.Msg.CUSTOM_JS_CONSOLE = "控制台顯示";
Blockly.Msg.CUSTOM_JS_Date = "現在的日期";
Blockly.Msg.CUSTOM_JS_Date_1 = "年 / 月 / 日";
Blockly.Msg.CUSTOM_JS_Date_2 = "月 / 日 / 年";
Blockly.Msg.CUSTOM_JS_Date_3 = "日 / 月 / 年";
Blockly.Msg.CUSTOM_JS_Date_4 = "年";
Blockly.Msg.CUSTOM_JS_Date_5 = "月";
Blockly.Msg.CUSTOM_JS_Date_6 = "日";
Blockly.Msg.CUSTOM_JS_Time = "現在的時間";
Blockly.Msg.CUSTOM_JS_Time_1 = "時:分:秒";
Blockly.Msg.CUSTOM_JS_Time_2 = "時";
Blockly.Msg.CUSTOM_JS_Time_3 = "分";
Blockly.Msg.CUSTOM_JS_Time_4 = "秒";

// Control

Blockly.Msg.WEBDUINO_TEMP_SET = "設定暫存";
Blockly.Msg.WEBDUINO_TEMP_SET_NAME = "   名稱";
Blockly.Msg.WEBDUINO_TEMP_SET_VALUE = "值";
Blockly.Msg.WEBDUINO_TEMP_GET = "讀取暫存";
Blockly.Msg.WEBDUINO_TEMP_GET_NAME = "名稱";
Blockly.Msg.WEBDUINO_TEMP_GET_VALUE = "的值";
Blockly.Msg.WEBDUINO_RECONGNITION = "開始語音辨識 ( Chrome 限定，不支援 iOS )";
Blockly.Msg.WEBDUINO_RECONGNITION_INTER = "   即時辨識";
Blockly.Msg.WEBDUINO_RECONGNITION_MOBILE = "( 行動裝置勾選 off )";
Blockly.Msg.WEBDUINO_RECONGNITION_LANG = "辨識語言";
Blockly.Msg.WEBDUINO_RECONGNITION_IF = "如果辨識的文字包含";
Blockly.Msg.WEBDUINO_RECONGNITION_DO = "執行";
Blockly.Msg.WEBDUINO_RECONGNITION_CONTENT = "辨識的文字";
Blockly.Msg.WEBDUINO_RECONGNITION_STOP = "停止";
Blockly.Msg.WEBDUINO_RECONGNITION_START = "繼續";
Blockly.Msg.WEBDUINO_RECONGNITION_TEXT = "語音辨識";
Blockly.Msg.WEBDUINO_SPEECH_MALE = "男聲";
Blockly.Msg.WEBDUINO_SPEECH_FEMALE = "女聲";
Blockly.Msg.WEBDUINO_SPEECH = "   發音";
Blockly.Msg.WEBDUINO_SPEECH_APPID = "語音 appID:";
Blockly.Msg.WEBDUINO_SPEECH_SET = "語音";
Blockly.Msg.WEBDUINO_SPEECH_SEX = "   性別";
Blockly.Msg.WEBDUINO_SPEAK_TEXT = "朗讀文字";
Blockly.Msg.WEBDUINO_SPEAK_SETTING = "參數設定";
Blockly.Msg.WEBDUINO_SPEAK_WHEN = "當朗讀";
Blockly.Msg.WEBDUINO_SPEAK_END = "結束";
Blockly.Msg.WEBDUINO_SPEAK_START = "開始";
Blockly.Msg.WEBDUINO_SPEAK_DO = "執行";
Blockly.Msg.WEBDUINO_SPEAK_RESUME = "繼續";
Blockly.Msg.WEBDUINO_SPEAK_PAUSE = "暫停";
Blockly.Msg.WEBDUINO_SPEAK_CANCEL = "停止";
Blockly.Msg.WEBDUINO_SPEAK_READ = "朗讀";
Blockly.Msg.WEBDUINO_SPEAK_LANG = "語言";
Blockly.Msg.WEBDUINO_SPEAK_TW = "中文";
Blockly.Msg.WEBDUINO_SPEAK_US = "英文";
Blockly.Msg.WEBDUINO_SPEAK_JP = "日文";
Blockly.Msg.WEBDUINO_SPEAK_VOLUME = " 音量";
Blockly.Msg.WEBDUINO_SPEAK_PITCH = " 音調";
Blockly.Msg.WEBDUINO_SPEAK_P20 = "尖銳";
Blockly.Msg.WEBDUINO_SPEAK_P15 = "高昂";
Blockly.Msg.WEBDUINO_SPEAK_P10 = "正常";
Blockly.Msg.WEBDUINO_SPEAK_P05 = "低沈";
Blockly.Msg.WEBDUINO_SPEAK_P01 = "沙啞";
Blockly.Msg.WEBDUINO_SPEAK_RATE = " 速度";
Blockly.Msg.WEBDUINO_SPEAK_R20 = "很快";
Blockly.Msg.WEBDUINO_SPEAK_R15 = "快";
Blockly.Msg.WEBDUINO_SPEAK_R10 = "正常";
Blockly.Msg.WEBDUINO_SPEAK_R07 = "慢";
Blockly.Msg.WEBDUINO_SPEAK_R05 = "很慢";

// Repeat

Blockly.Msg.WEBDUINO_STATUS_REPEAT = "狀態切換，重複";
Blockly.Msg.WEBDUINO_STATUS_NUM = "次";
Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUSNUM = "狀態 ";
Blockly.Msg.WEBDUINO_STATUS_REPEAT_DELAY = " 持續";
Blockly.Msg.WEBDUINO_STATUS_REPEAT_SECS = "秒";
Blockly.Msg.WEBDUINO_STATUS_REPEAT_ADD = "加入狀態";
Blockly.Msg.WEBDUINO_STATUS_REPEAT_STATUS = "狀態";
Blockly.Msg.WEBDUINO_STATUS_FOREVER = "狀態不停重複";
Blockly.Msg.WEBDUINO_STATUS_FOREVER_NAME = "名稱";
Blockly.Msg.WEBDUINO_STATUS_REPEAT_STOP = "停止";
Blockly.Msg.WEBDUINO_STATUS_REPEAT_STOPCONTENT = "的不停重複";

// Keyboard

Blockly.Msg.WEBDUINO_KEYBOARD = "開始偵測 鍵盤";
Blockly.Msg.WEBDUINO_KEYBOARD_KEYDOWN = "按下";
Blockly.Msg.WEBDUINO_KEYBOARD_KEYUP = "放開";
Blockly.Msg.WEBDUINO_KEYBOARD_STOP = "停止偵測 鍵盤行為";
Blockly.Msg.WEBDUINO_KEYBOARD_KEY = "按鍵";
Blockly.Msg.WEBDUINO_KEYBOARD_DO = "，執行";
Blockly.Msg.WEBDUINO_KEYBOARD_SPACE = "空白鍵";
Blockly.Msg.WEBDUINO_KEYBOARD_UP = "上 (↑)";
Blockly.Msg.WEBDUINO_KEYBOARD_DOWN = "下 (↓)";
Blockly.Msg.WEBDUINO_KEYBOARD_LEFT = "左 (←)";
Blockly.Msg.WEBDUINO_KEYBOARD_RIGHT = "右 (→)";
Blockly.Msg.WEBDUINO_KEYBOARD_KONAMI = "當輸入 Konami Code，執行";

// Delay

Blockly.Msg.WEBDUINO_TIMER_AFTER = "(非同步) 等待";
Blockly.Msg.WEBDUINO_TIMER_SECOND = "秒之後";
Blockly.Msg.WEBDUINO_TIMER_DO = "執行";
Blockly.Msg.WEBDUINO_INTERVAL_EVERY = "(非同步) 每隔";
Blockly.Msg.WEBDUINO_INTERVAL_SECOND = "秒";
Blockly.Msg.WEBDUINO_INTERVAL_DO = "執行";

// Board

Blockly.Msg.WEBDUINO_BOARD = "開發板";
Blockly.Msg.WEBDUINO_BOARD_SERVER = "私有雲 Server，IP";
Blockly.Msg.WEBDUINO_BOARD_WIFI = "Wi-Fi";
Blockly.Msg.WEBDUINO_BOARD_SERIAL = "序列埠";
Blockly.Msg.WEBDUINO_BOARD_BLUETOOTH = "藍芽";
Blockly.Msg.WEBDUINO_BOARD_WEBSOCKET = "WebSocket";
Blockly.Msg.WEBDUINO_BOARD_SIMULATOR = "模擬器";
Blockly.Msg.WEBDUINO_BOARD_MULTI = "  協同控制";
Blockly.Msg.WEBDUINO_BOARD_CHAIN = "  串聯";
Blockly.Msg.WEBDUINO_BOARD_CHAIN_OK = "當開發板串連完成";
Blockly.Msg.WEBDUINO_BOARD_CHAIN_DO = "執行";
Blockly.Msg.WEBDUINO_QUERY_PIN = "偵測開發板腳位";
Blockly.Msg.WEBDUINO_QUERY_PIN_NUM = "號 腳位";
Blockly.Msg.WEBDUINO_PIN_DO = "執行";
Blockly.Msg.WEBDUINO_PIN_STATE = "腳位狀態";
Blockly.Msg.WEBDUINO_BOARD_IF_ERROR = "如果斷線";
Blockly.Msg.WEBDUINO_BOARD_ERROR_DO = "執行";
Blockly.Msg.WEBDUINO_BOARD_SAMPLING = "  類比取樣";
Blockly.Msg.WEBDUINO_USE = "使用";
Blockly.Msg.WEBDUINO_CONNECT_TO = "連線至";
Blockly.Msg.WEBDUINO_SMART = "Smart";
Blockly.Msg.WEBDUINO_MARK = "馬克1號";
Blockly.Msg.WEBDUINO_FLY = "Fly";

// LED

Blockly.Msg.WEBDUINO_LED = "LED 燈";
Blockly.Msg.WEBDUINO_PIN = "腳位";
Blockly.Msg.WEBDUINO_LED_PIN = "，腳位";
Blockly.Msg.WEBDUINO_LED_STATE = "設定狀態";
Blockly.Msg.WEBDUINO_LED_TOGGLE = "切換狀態";
Blockly.Msg.WEBDUINO_LED_INTENSITY = "強度";
Blockly.Msg.WEBDUINO_LED_SET = "將";
Blockly.Msg.WEBDUINO_LED_STATE_IS = "設定狀態";
Blockly.Msg.WEBDUINO_LED_STATE_DO = "接著執行";
Blockly.Msg.WEBDUINO_LED_BLINK = "閃爍，閃爍時間";
Blockly.Msg.WEBDUINO_LED_BLINK_SEC = "秒";
Blockly.Msg.WEBDUINO_LED_BLINK_DO = "每次閃爍執行";

// Relay

Blockly.Msg.WEBDUINO_RELAY = "繼電器，腳位";
Blockly.Msg.WEBDUINO_RELAY_SET_STATE = "設定狀態";

// RGB

Blockly.Msg.WEBDUINO_RGBLED = "三色 LED";
Blockly.Msg.WEBDUINO_RGBLED_CATHODE = "三色共陰 LED";
Blockly.Msg.WEBDUINO_RGBLED_RED = "紅";
Blockly.Msg.WEBDUINO_RGBLED_GREEN = "綠";
Blockly.Msg.WEBDUINO_RGBLED_BLUE = "藍";
Blockly.Msg.WEBDUINO_RGBLED_SETCOLOR = "設定顏色";

// Smart Servo

Blockly.Msg.WEBDUINO_SMART_SERVO_NEW = "智慧伺服馬達 , ID:";
Blockly.Msg.WEBDUINO_SMART_SERVO_SET = "智慧伺服馬達";
Blockly.Msg.WEBDUINO_SMART_SERVO_SET_POS = " , 位置";
Blockly.Msg.WEBDUINO_SMART_SERVO_SET_TIME = " , 時間(10ms)";
Blockly.Msg.WEBDUINO_SMART_SERVO_SET_SPEED = " , 速度";

// Button

Blockly.Msg.WEBDUINO_BUTTON_NEW = "按鈕開關，腳位";
Blockly.Msg.WEBDUINO_BUTTON_PULLUP_NEW = "上拉按鈕開關，腳位";
Blockly.Msg.WEBDUINO_BUTTON_EVENT_WHEN = "當";
Blockly.Msg.WEBDUINO_BUTTON_EVENT_WAS = "進行";
Blockly.Msg.WEBDUINO_BUTTON_EVENT_TO = "時";
Blockly.Msg.WEBDUINO_BUTTON_EVENT_DO = "執行";
Blockly.Msg.WEBDUINO_BUTTON_EVENT_PRESSED = "按下";
Blockly.Msg.WEBDUINO_BUTTON_EVENT_RELEASED = "放開";
Blockly.Msg.WEBDUINO_BUTTON_EVENT_LONGPRESS = "長按";

// Shock

Blockly.Msg.WEBDUINO_SHOCK_NEW = "震動開關，腳位";
Blockly.Msg.WEBDUINO_SHOCK_EVENT_WHEN = "當";
Blockly.Msg.WEBDUINO_SHOCK_EVENT_WAS = "狀態為";
Blockly.Msg.WEBDUINO_SHOCK_EVENT_TO = "時";
Blockly.Msg.WEBDUINO_SHOCK_EVENT_DO = "執行";
Blockly.Msg.WEBDUINO_SHOCK_EVENT_HIGH = "通電";
Blockly.Msg.WEBDUINO_SHOCK_EVENT_LOW = "斷電";

// Joystick
Blockly.Msg.WEBDUINO_JOYSTICK = '搖桿';
Blockly.Msg.WEBDUINO_JOYSTICK_VALUE = '數值：';
Blockly.Msg.WEBDUINO_JOYSTICK_DO = '執行：';

// PIR

Blockly.Msg.WEBDUINO_PIR = "人體紅外線偵測傳感器，腳位";
Blockly.Msg.WEBDUINO_PIR_WHEN = "當";
Blockly.Msg.WEBDUINO_PIR_STATUS_DETECTED = "有";
Blockly.Msg.WEBDUINO_PIR_STATUS_ENDED = "沒有";
Blockly.Msg.WEBDUINO_PIR_DETECTED = "偵測到人體紅外線變化";
Blockly.Msg.WEBDUINO_PIR_DO = "執行";

// Max7219

Blockly.Msg.WEBDUINO_MATRIX = "LED 點矩陣 ( Max7219 ) ";
Blockly.Msg.WEBDUINO_MATRIX_DIN = "din";
Blockly.Msg.WEBDUINO_MATRIX_CS = "  cs";
Blockly.Msg.WEBDUINO_MATRIX_CLK = "  clk";
Blockly.Msg.WEBDUINO_MATRIX_CODE = "顯示圖形，代碼";
Blockly.Msg.WEBDUINO_MATRIX_TIMES = "顯示動畫，切換時間 (毫秒)";
Blockly.Msg.WEBDUINO_MATRIX_DUR = "持續時間 (毫秒)";
Blockly.Msg.WEBDUINO_MATRIX_LIST = "動畫代碼 (陣列)";
Blockly.Msg.WEBDUINO_MATRIX_STOP = "停止";
Blockly.Msg.WEBDUINO_MATRIX_ANIMATE = "動畫";
Blockly.Msg.WEBDUINO_MATRIX_CLOSE = "關閉";
Blockly.Msg.WEBDUINO_MATRIX_HORSE = "跑馬燈";
Blockly.Msg.WEBDUINO_MATRIX_LEFT = "向左";
Blockly.Msg.WEBDUINO_MATRIX_RIGHT = "向右";
Blockly.Msg.WEBDUINO_MATRIX_SPEED = "，速度 (格/毫秒)";
Blockly.Msg.WEBDUINO_MATRIX_HORSEODE = "代碼";
Blockly.Msg.WEBDUINO_MATRIX_ALPHABET = "英文字母";
Blockly.Msg.WEBDUINO_MATRIX_ALPHABET2 = "英文 ( A~Z , a~z )";
Blockly.Msg.WEBDUINO_MATRIX_UPPERCASE = "大寫";
Blockly.Msg.WEBDUINO_MATRIX_LOWERCASE = "小寫";
Blockly.Msg.WEBDUINO_MATRIX_NUM = "數字";
Blockly.Msg.WEBDUINO_MATRIX_NUM2 = "數字 (0~99)";
Blockly.Msg.WEBDUINO_MATRIX_IMG = "圖案";

// SSD1306

Blockly.Msg.WEBDUINO_SSD1306 = "OLED ( SSD1306 )，SCL ";
Blockly.Msg.WEBDUINO_SSD1306_SDA = " SDA";
Blockly.Msg.WEBDUINO_SSD1306_PRINT = "顯示文字";
Blockly.Msg.WEBDUINO_SSD1306_IMAGE = "顯示圖片";
Blockly.Msg.WEBDUINO_SSD1306_CLEAR = "清除螢幕內容";
Blockly.Msg.WEBDUINO_SSD1306_SET = "設定";
Blockly.Msg.WEBDUINO_SSD1306_LOCATE_X = "X座標";
Blockly.Msg.WEBDUINO_SSD1306_LOCATE_Y = "Y座標";
Blockly.Msg.WEBDUINO_SSD1306_TEXT_SIZE = "設定字型大小 (1~7)";

// Soil

Blockly.Msg.WEBDUINO_SOIL = "土壤濕度偵測，類比腳位：";
Blockly.Msg.WEBDUINO_SOIL_DETECTED = "光敏(可變)電阻，類比腳位";
Blockly.Msg.WEBDUINO_SOIL_DO = "執行";
Blockly.Msg.WEBDUINO_SOIL_VAL = "偵測的數值";
Blockly.Msg.WEBDUINO_SOIL_STOP = "停止偵測";

// ADXL345

Blockly.Msg.WEBDUINO_ADXL345 = "三軸加速度計，SDA";
Blockly.Msg.WEBDUINO_ADXL345_SCL = "  SCL";
Blockly.Msg.WEBDUINO_ADXL345_DO = "執行";
Blockly.Msg.WEBDUINO_ADXL345_S = "的";
Blockly.Msg.WEBDUINO_ADXL345_VAL = "數值";
Blockly.Msg.WEBDUINO_START_DETECTING = "開始偵測";
Blockly.Msg.WEBDUINO_STOP_DETECTING = "停止偵測";

// HX711

Blockly.Msg.WEBDUINO_HX711 = "電子秤，SCK";
Blockly.Msg.WEBDUINO_HX711_DT = "  DT";
Blockly.Msg.WEBDUINO_HX711_ON = "開始偵測";
Blockly.Msg.WEBDUINO_HX711_DO = "執行";
Blockly.Msg.WEBDUINO_HX711_VAL = "數值";
Blockly.Msg.WEBDUINO_HX711_OFF = "停止偵測";

// Barcode

Blockly.Msg.WEBDUINO_BARCODE = "條碼機，Rx";
Blockly.Msg.WEBDUINO_BARCODE_TX = "  Tx";
Blockly.Msg.WEBDUINO_BARCODE_ON = "開始偵測";
Blockly.Msg.WEBDUINO_BARCODE_DO = "執行";
Blockly.Msg.WEBDUINO_BARCODE_VAL = "條碼";
Blockly.Msg.WEBDUINO_BARCODE_OFF = "停止偵測";

// Firebase

Blockly.Msg.WEBDUINO_FIREBASE_NAME = "載入 Firebase";
Blockly.Msg.WEBDUINO_FIREBASE_ADDCOLUMN = '增加資料欄位';
Blockly.Msg.WEBDUINO_FIREBASE_COLUMN = '欄位';
Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATA = "寫入資料";
Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATACOLUMN = '欄位 ';
Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATANAME = ' 名稱:';
Blockly.Msg.WEBDUINO_FIREBASE_WRITEDATAVAL = '  值:';
Blockly.Msg.WEBDUINO_FIREBASE_URL = "網址";
Blockly.Msg.WEBDUINO_FIREBASE_DO = "執行";
Blockly.Msg.WEBDUINO_FIREBASE_WRITE = "寫入";
Blockly.Msg.WEBDUINO_FIREBASE_IS = "為";
Blockly.Msg.WEBDUINO_FIREBASE_READ = "資料庫";
Blockly.Msg.WEBDUINO_FIREBASE_ATTR = "有變動或第一次載入，取出";
Blockly.Msg.WEBDUINO_FIREBASE_S = "名稱";
Blockly.Msg.WEBDUINO_FIREBASE_TO = "的內容到";
Blockly.Msg.WEBDUINO_FIREBASE_CLEAR = "清空資料庫";
Blockly.Msg.WEBDUINO_FIREBASE_READONCE = "載入資料庫";
Blockly.Msg.WEBDUINO_FIREBASE_ATTRONCE = "名稱";
Blockly.Msg.WEBDUINO_FIREBASE_DATAALL = "完整內容";
Blockly.Msg.WEBDUINO_FIREBASE_DATALAST = "最新一筆";
Blockly.Msg.WEBDUINO_FIREBASE_NAME_OF_DATA_1 = "資料 1 名稱：";
Blockly.Msg.WEBDUINO_FIREBASE_NAME_OF_DATA_2 = "資料 2 名稱：";
Blockly.Msg.WEBDUINO_FIREBASE_VALUE = "數值";
Blockly.Msg.WEBDUINO_FIREBASE_NAME_TEXT = "名稱";
Blockly.Msg.WEBDUINO_FIREBASE_OBJECT = "物件";
Blockly.Msg.WEBDUINO_FIREBASE_ADD_OBJECT = "增加物件";
Blockly.Msg.WEBDUINO_FIREBASE_CREATE_OBJECT = "建立物件";

// RFID

Blockly.Msg.WEBDUINO_RFID_ON = "偵測到訊號";
Blockly.Msg.WEBDUINO_RFID_UID = "所偵測到的代碼";
Blockly.Msg.WEBDUINO_RFID_UIDIS = "偵測到的代碼為";
Blockly.Msg.WEBDUINO_RFID_IF = "如果";
Blockly.Msg.WEBDUINO_RFID_DO = "執行";
Blockly.Msg.WEBDUINO_RFID_OUT = "訊號離開";
Blockly.Msg.WEBDUINO_RFID_OFF = "停止偵測";

/*
    .                   .                       o8o            oooo
  .o8                 .o8                       `"'            `888
.o888oo oooo  oooo  .o888oo  .ooooo.  oooo d8b oooo   .oooo.    888
  888   `888  `888    888   d88' `88b `888""8P `888  `P  )88b   888
  888    888   888    888   888   888  888      888   .oP"888   888
  888 .  888   888    888 . 888   888  888      888  d8(  888   888
  "888"  `V88V"V8P'   "888" `Y8bod8P' d888b    o888o `Y888""8o o888o
  */

// Tutorials - LED

Blockly.Msg.WEBDUINO_LIGHT = "燈泡";
Blockly.Msg.WEBDUINO_LIGHT_CLICK = "點擊燈泡時執行";
Blockly.Msg.WEBDUINO_LIGHT_STATUS = "燈泡狀態為";

Blockly.Msg.WEBDUINO_TWO_LED_LIGHT_BULB = "燈泡";
Blockly.Msg.WEBDUINO_TWO_LED_LIGHT_BULB_LEFT = "左邊的";
Blockly.Msg.WEBDUINO_TWO_LED_LIGHT_BULB_RIGHT = "右邊的";
Blockly.Msg.WEBDUINO_TWO_LED_LIGHT_BULB_CLICK = "燈泡點擊時，執行";
Blockly.Msg.WEBDUINO_TWO_LED_LIGHT_BULB_STATUS = "燈泡狀態為";

Blockly.Msg.WEBDUINO_TWO_LED_START_BLANKING_SET = "設置閃爍計時器名稱";
Blockly.Msg.WEBDUINO_TWO_LED_START_BLANKING_TIME = "閃爍時間";
Blockly.Msg.WEBDUINO_TWO_LED_START_BLANKING_MSEC = "毫秒 ( 1/1000 秒 )";
Blockly.Msg.WEBDUINO_TWO_LED_START_BLANKING_STATUS1 = "狀態 1";
Blockly.Msg.WEBDUINO_TWO_LED_START_BLANKING_STATUS2 = "狀態 2";

Blockly.Msg.WEBDUINO_STOP_CLOCK = "停止計時器";

// Tutorials - RGB

Blockly.Msg.WEBDUINO_RGB_LED_AREA_COLOR = "設定展示區域顏色";
Blockly.Msg.WEBDUINO_RGB_LED_BTN_CLICK = "點選";
Blockly.Msg.WEBDUINO_RGB_LED_BTN_BUTTON = "按鈕";
Blockly.Msg.WEBDUINO_RGB_LED_BTN_DO = "執行";

Blockly.Msg.WEBDUINO_RGB_LED_RANGE_CHANGE = "調整拉霸";
Blockly.Msg.WEBDUINO_RGB_LED_RANGE_DO = "執行";
Blockly.Msg.WEBDUINO_RGB_LED_CURRENT_COLOR = "拉霸調整的顏色";

Blockly.Msg.WEBDUINO_RGB_LED_START_DANCING_CLOCK_NAME = "色彩計時器名稱";
Blockly.Msg.WEBDUINO_RGB_LED_START_DANCING_TIME = "變換時間";
Blockly.Msg.WEBDUINO_RGB_LED_START_DANCING_MSEC = Blockly.Msg.WEBDUINO_TWO_LED_START_BLANKING_MSEC;
Blockly.Msg.WEBDUINO_RGB_LED_START_DANCING_CHANGE = "依序變換";

Blockly.Msg.WEBDUINO_RGB_LED_START_DANCING_STATUS = " 狀態";

// Tutorials - UltraSonic

Blockly.Msg.WEBDUINO_ULTRASONIC_SET_SHOW_DISTANCE = "顯示距離";

Blockly.Msg.WEBDUINO_ULTRASONIC_IMAGE_SIZE = "圖片尺寸 ( 寬度 )";
Blockly.Msg.WEBDUINO_ULTRASONIC_IMAGE_URL = "圖片網址";

Blockly.Msg.WEBDUINO_ULTRASONIC_MUSIC_VOLUME = "音量大小";
Blockly.Msg.WEBDUINO_ULTRASONIC_MUSIC_PLAY = "音樂";
Blockly.Msg.WEBDUINO_ULTRASONIC_MUSIC_PLAY_PLAY = "播放";
Blockly.Msg.WEBDUINO_ULTRASONIC_MUSIC_PLAY_PAUSE = "暫停";
Blockly.Msg.WEBDUINO_ULTRASONIC_MUSIC_PLAY_STOP = "停止";
Blockly.Msg.WEBDUINO_ULTRASONIC_MUSIC_ADD = "放入音樂";

Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE = "載入 Youtube 模組";
Blockly.Msg.DEMO_YOUTUBE_DEFAULT = "預載";
Blockly.Msg.DEMO_YOUTUBE_DEFAULT_1 = "影片";
Blockly.Msg.DEMO_YOUTUBE_DEFAULT_2 = "影片清單";
Blockly.Msg.DEMO_YOUTUBE_DEFAULT_ID = "為：";
Blockly.Msg.DEMO_YOUTUBE_PLAY = "播放";
Blockly.Msg.DEMO_YOUTUBE_LIST = "清單的";
Blockly.Msg.DEMO_YOUTUBE_LIST_PRE = "上一段";
Blockly.Msg.DEMO_YOUTUBE_LIST_NEXT = "下一段";
Blockly.Msg.DEMO_YOUTUBE_LIST_LISTNUM = "清單的第";
Blockly.Msg.DEMO_YOUTUBE_LIST_NUM = "段";
Blockly.Msg.DEMO_YOUTUBE_VIDEO_ID = " 預設的影片：";
Blockly.Msg.DEMO_YOUTUBE_CHANGEID_ID = "影片，要更換的影片：";
Blockly.Msg.DEMO_YOUTUBE_CURRENTTIME = "影片當前播放時間 ( 秒 )";
Blockly.Msg.DEMO_YOUTUBE_SET = "設定";
Blockly.Msg.DEMO_YOUTUBE_SEEKTO = "影片前往第";
Blockly.Msg.DEMO_YOUTUBE_SEC = "秒";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SET = "設定";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_VOLUME = "影片音量：";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SPEED = "影片播放速度";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_VERYSLOW = "超級慢";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SLOW = "慢";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_NORMAL = "正常";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_FAST = "快";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_VERYFAST = "很快";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SUPERFAST = "超級快";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUS = "影片的狀態為";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETPLAY = "播放";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETPAUSE = "暫停";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_SETSTOP = "停止";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSPLAY = "正在播放";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSPAUSE = "暫停";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSCUE = "停止";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSSTOP = "播放完畢";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_STATUSSTART = "尚未開始";
Blockly.Msg.WEBDUINO_ULTRASONIC_YOUTUBE_DO = "執行";

// Tutorials - Button

Blockly.Msg.WEBDUINO_SHOW_TEXT = "顯示文字";

Blockly.Msg.WEBDUINO_SHOW_CALCULATE_NUMBER = "顯示數字 = 當前數字";
Blockly.Msg.WEBDUINO_SHOW_CALCULATE_PLUS = "加";
Blockly.Msg.WEBDUINO_SHOW_CALCULATE_MINUS = "減";
Blockly.Msg.WEBDUINO_SHOW_CALCULATE_TIMES = "乘";
Blockly.Msg.WEBDUINO_SHOW_CALCULATE_DIVIDED = "除";

Blockly.Msg.WEBDUINO_SHOW_SET_CURRENT_NUMBER = "設定當前數字";

Blockly.Msg.WEBDUINO_BUTTON_CHANGE_IMAGE = "圖片往";
Blockly.Msg.WEBDUINO_BUTTON_CHANGE_IMAGE_MOVE = "移動";
Blockly.Msg.WEBDUINO_BUTTON_CHANGE_IMAGE_PX = "個像素";
Blockly.Msg.WEBDUINO_BUTTON_CHANGE_IMAGE_RESET = "重設圖片位置";
Blockly.Msg.WEBDUINO_BUTTON_CHANGE_IMAGE_UP = "上";
Blockly.Msg.WEBDUINO_BUTTON_CHANGE_IMAGE_DOWN = "下";
Blockly.Msg.WEBDUINO_BUTTON_CHANGE_IMAGE_LEFT = "左";
Blockly.Msg.WEBDUINO_BUTTON_CHANGE_IMAGE_RIGHT = "右";

Blockly.Msg.WEBDUINO_BUTTON_GAME_ADD_SINGLEGAME = "載入 <單人> 遊戲模組";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC = "電腦角色";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_LEVEL = "  電腦強度";
Blockly.Msg.WEBDUINO_BUTTON_GAME_DISTANCE = "  比賽距離";
Blockly.Msg.WEBDUINO_BUTTON_GAME_USER = "玩家角色";
Blockly.Msg.WEBDUINO_BUTTON_GAME_USER_BUTTON = "  按鈕";
Blockly.Msg.WEBDUINO_BUTTON_GAME_USER_EVENT = "玩家按鈕行為設定";
Blockly.Msg.WEBDUINO_BUTTON_GAME_USER_RUN_FORWARD = "角色往前跑";
Blockly.Msg.WEBDUINO_BUTTON_GAME_USER_RUN_PIXEL = "像素";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_CAT = "阿貓";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_LION = "老獅";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_SQU = "松鼠";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_PICA = "馬力歐";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_MAN1 = "小明";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_MAN2 = "隆";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_LEVEL_5 = "超威";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_LEVEL_4 = "小威";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_LEVEL_3 = "普通";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_LEVEL_2 = "小弱";
Blockly.Msg.WEBDUINO_BUTTON_GAME_NPC_LEVEL_1 = "超弱";

// Tutorials - DHT

Blockly.Msg.WEBDUINO_DHT_SHOW = "顯示";
Blockly.Msg.WEBDUINO_DHT_SHOW_IS = "為";
Blockly.Msg.WEBDUINO_DHT_SHOW_T = "溫度 (攝氏)";
Blockly.Msg.WEBDUINO_DHT_SHOW_H = "濕度 (%)";
Blockly.Msg.WEBDUINO_DHT_ADD_AREACHART = "加入「區域折線圖」模組";
Blockly.Msg.WEBDUINO_DHT_ADD_TCOLOR = "溫度顏色";
Blockly.Msg.WEBDUINO_DHT_ADD_HCOLOR = "濕度顏色";
Blockly.Msg.WEBDUINO_DHT_ADD_GUAGE = "加入「指針」模組";
Blockly.Msg.WEBDUINO_DHT_USE = "使用";
Blockly.Msg.WEBDUINO_DHT_DRAW = "開始繪製";
Blockly.Msg.WEBDUINO_DHT_DRAW_T = "溫度";
Blockly.Msg.WEBDUINO_DHT_DRAW_H = "濕度";

// Tutorials - Servo

Blockly.Msg.WEBDUINO_SERVO_CLICKBTN = "點選按鈕";
Blockly.Msg.WEBDUINO_SERVO_BTNLEFT90 = "左轉 90 度";
Blockly.Msg.WEBDUINO_SERVO_BTNLEFT60 = "左轉 60 度";
Blockly.Msg.WEBDUINO_SERVO_BTNLEFT30 = "左轉 30 度";
Blockly.Msg.WEBDUINO_SERVO_BTNCENTER = "保持在中間";
Blockly.Msg.WEBDUINO_SERVO_BTNRIGHT30 = "右轉 30 度";
Blockly.Msg.WEBDUINO_SERVO_BTNRIGHT60 = "右轉 60 度";
Blockly.Msg.WEBDUINO_SERVO_BTNRIGHT90 = "右轉 90 度";
Blockly.Msg.WEBDUINO_SERVO_DO = "執行";
Blockly.Msg.WEBDUINO_SERVO_SET_ANGLE = "設定起始角度 ( 0-180 ) ";
Blockly.Msg.WEBDUINO_SERVO_CURRENT_ANGLE = "當前角度";
Blockly.Msg.WEBDUINO_SERVO_PLUS = "+";
Blockly.Msg.WEBDUINO_SERVO_MINUS = "-";

// Tutorials - Buzzer

Blockly.Msg.WEBDUINO_BUZZER_SHOW = "顯示";
Blockly.Msg.WEBDUINO_BUZZER_SHOW_NOTESANDTEMPOS = "的音符和節奏";
Blockly.Msg.WEBDUINO_BUZZER_CLICK = "點選";
Blockly.Msg.WEBDUINO_BUZZER_DO = "執行";

// Tutorials - Photcell

Blockly.Msg.WEBDUINO_PHOTOCELL_SHOW = "顯示數值";

// Tutorials - Max7219

Blockly.Msg.WEBDUINO_MAX7219_CLICKBTN = "點選按鈕";
Blockly.Msg.WEBDUINO_MAX7219_BTN1 = "按鈕 1";
Blockly.Msg.WEBDUINO_MAX7219_BTN2 = "按鈕 2";
Blockly.Msg.WEBDUINO_MAX7219_BTN3 = "按鈕 3";
Blockly.Msg.WEBDUINO_MAX7219_BTNSTOP = "停止動畫";
Blockly.Msg.WEBDUINO_MAX7219_BTNOFF = "關閉";
Blockly.Msg.WEBDUINO_MAX7219_DO = "執行";

// Tutorials - ADXL345

Blockly.Msg.WEBDUINO_ADXL_SHOW = "顯示";
Blockly.Msg.WEBDUINO_ADXL_SHOW_X = "x";
Blockly.Msg.WEBDUINO_ADXL_SHOW_Y = "y";
Blockly.Msg.WEBDUINO_ADXL_SHOW_Z = "z";
Blockly.Msg.WEBDUINO_ADXL_SHOW_R = "roll";
Blockly.Msg.WEBDUINO_ADXL_SHOW_P = "pitch";
Blockly.Msg.WEBDUINO_ADXL_SHOW_IS = "為";
Blockly.Msg.WEBDUINO_ADXL_ANGLE = "圖片旋轉的角度 =";

// Tutorials - irrecv

Blockly.Msg.WEBDUINO_IRRRECV_SHOW = "顯示紅外線代碼";
Blockly.Msg.WEBDUINO_IRRRECV_COLOR = "區域顏色";

// Tutorials - RFID

Blockly.Msg.WEBDUINO_RFID_SHOW = "顯示 RFID 代碼";

// Google Sheets

Blockly.Msg.WEBDUINO_GOOGLESHEETS = "載入 Google 試算表";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_URL = "網址";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_SHEETNAME = "工作表";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_ADDCOLUMN = "增加資料欄位";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_COLUMN = "欄位";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_SHEETS = "試算表";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_WRITEDATA = "將資料寫入";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_COLUMN_A = "欄位 A 值:";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_COLUMN_B = "欄位 B 值:";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_COLUMNWITE = "欄位 ";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_COLUMNVALUE = " 值:";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_READ_FROM = "從"
Blockly.Msg.WEBDUINO_GOOGLESHEETS_READROW = "讀取資料，縱列";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_READCOL = "橫欄";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_READDO = "執行";
Blockly.Msg.WEBDUINO_GOOGLESHEETS_READDATA = "讀取到的資料";


/*
 Yb        dP 888888 88""Yb 88""Yb 88 888888
 Yb  db  dP  88__   88__dP 88__dP 88   88
  YbdPYbdP   88""   88""Yb 88""Yb 88   88
   YP  YP    888888 88oodP 88oodP 88   88
*/

// Web:Bit - Tutorial url

Blockly.Msg.TUTORIAL_URL = "https://tutorials.webduino.io/zh-tw/docs/webbit/";

// Web:Bit - Variable

Blockly.Msg.BIT_VARIABLES = "變數";
Blockly.Msg.BIT_VARIABLES_CHANGE = "改變";
Blockly.Msg.BIT_VARIABLES_CHANGE_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/variables.html#change";
Blockly.Msg.VARIABLES_SET_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/variables.html";
Blockly.Msg.VARIABLES_GET_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/variables.html#use";

// Web:Bit - Logic

Blockly.Msg.TEXTLOGIC_INSIDE = "裡面";
Blockly.Msg.TEXTLOGIC_HAS = "包含";
Blockly.Msg.TEXTLOGIC_NO = "沒有";
Blockly.Msg.TEXTLOGIC_TEXT = "文字";
Blockly.Msg.BIT_LOGIC_INDEXOF_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/logic.html#logic05";
Blockly.Msg.BIT_LOGIC_IS_EMPTY = "為空 ( 沒有值 )";
Blockly.Msg.BIT_LOGIC_IS_EMPTY_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/logic.html#logic04";
Blockly.Msg.BIT_LOGIC_IS_EVEN = "是";
Blockly.Msg.BIT_LOGIC_IS_EVEN_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/logic.html#logic03";
Blockly.Msg.CONTROLS_IF_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/logic.html#main";
Blockly.Msg.LOGIC_COMPARE_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/logic.html#logic01";
Blockly.Msg.LOGIC_OPERATION_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/logic.html#logic02";
Blockly.Msg.LOGIC_NEGATE_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/logic.html#logic06";
Blockly.Msg.LOGIC_BOOLEAN_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/logic.html#logic07";
Blockly.Msg.LOGIC_NULL_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/logic.html#logic08";
Blockly.Msg.LOGIC_TERNARY_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/logic.html#logic09";
Blockly.Msg.BIT_LOGIC_IS_EVEN_EVEN = "偶數";
Blockly.Msg.BIT_LOGIC_IS_EVEN_ODD = "奇數";
Blockly.Msg.BIT_LOGIC_IS_EVEN_INTEGER = "整數";
Blockly.Msg.BIT_LOGIC_IS_EVEN_FLOAT = "數字有小數點";
Blockly.Msg.BIT_LOGIC_IS_EVEN_STRING = "文字";
Blockly.Msg.BIT_LOGIC_IS_EVEN_ARRAY = "陣列";

// Web:Bit - Loop

Blockly.Msg.WEBDUINO_DELAY = "等待";
Blockly.Msg.WEBDUINO_DELAY_SECONDS = "秒";
Blockly.Msg.WEBDUINO_DELAY_SECONDS_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/loop.html#loop01";
Blockly.Msg.BIT_LOOP_FOREVER = "重複無限次，背景執行";
Blockly.Msg.BIT_LOOP_FOREVER_DO = "執行";
Blockly.Msg.BIT_LOOP_FOREVER_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/loop.html#loop04";
Blockly.Msg.BIT_LOOP_FOREVER_WHILEDO = "就重複無限次，背景執行";
Blockly.Msg.BIT_LOOP_FOREVER_WHILEDO_IF = "如果";
Blockly.Msg.BIT_LOOP_FOREVER_WHILEDO_DO = "執行";
Blockly.Msg.BIT_LOOP_FOREVER_WHILEDO_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/loop.html#loop05";
Blockly.Msg.BIT_LOOP_STOP = "停止";
Blockly.Msg.BIT_LOOP_STOP_ALL = "所有的";
Blockly.Msg.BIT_LOOP_STOP_THIS = "這個";
Blockly.Msg.BIT_LOOP_STOP_REPEAT = "重複";
Blockly.Msg.BIT_LOOP_STOP_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/loop.html#loop08";
Blockly.Msg.BIT_LOOP_EXT_REPEAT = "重複";
Blockly.Msg.BIT_LOOP_EXT = "次，背景執行";
Blockly.Msg.BIT_LOOP_EXT_DO = "執行";
Blockly.Msg.BIT_LOOP_EXT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/loop.html#loop02";
Blockly.Msg.BIT_LOOP_FOR = "計數";
Blockly.Msg.BIT_LOOP_FOR_FROM = "從";
Blockly.Msg.BIT_LOOP_FOR_TO = "到";
Blockly.Msg.BIT_LOOP_FOR_NUM = "每隔";
Blockly.Msg.BIT_LOOP_FOR_ASYNC = "背景執行";
Blockly.Msg.BIT_LOOP_FOR_DO = "執行";
Blockly.Msg.BIT_LOOP_FOR_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/loop.html#loop03";
Blockly.Msg.BIT_LOOP_FOREACH = "取出每個";
Blockly.Msg.BIT_LOOP_FOREACH_ARRAY = "自陣列";
Blockly.Msg.BIT_LOOP_FOREACH_ASYNC = "背景執行";
Blockly.Msg.BIT_LOOP_FOREACH_DO = "執行";
Blockly.Msg.BIT_LOOP_FOREACH_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/loop.html#loop06";

// Web:Bit - Math

Blockly.Msg.MATH_NUMBER_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math01";
Blockly.Msg.MATH_ARITHMETIC_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math04";
Blockly.Msg.MATH_SINGLE_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math10";
Blockly.Msg.MATH_TRIG_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math11";
Blockly.Msg.MATH_CONSTANT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math12";
Blockly.Msg.MATH_CHANGE_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html";
Blockly.Msg.MATH_ROUND_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html";
Blockly.Msg.MATH_ONLIST_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math09";
Blockly.Msg.MATH_MODULO_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html";
Blockly.Msg.MATH_CONSTRAIN_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math06";
Blockly.Msg.MATH_RANDOM_INT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math02";
Blockly.Msg.MATH_RANDOM_FLOAT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math03";
Blockly.Msg.BIT_MATH_REMAINDER = "取餘數自";
Blockly.Msg.BIT_MATH_REMAINDER_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math05";
Blockly.Msg.WEBDUINO_MATH_ROUND = "四捨五入";
Blockly.Msg.WEBDUINO_MATH_ROUND_UP = "無條件進位";
Blockly.Msg.WEBDUINO_MATH_ROUND_DOWN = "無條件捨去";
Blockly.Msg.WEBDUINO_MATH_ROUND_TO = "到小數點";
Blockly.Msg.WEBDUINO_MATH_ROUND_NUM = "位";
Blockly.Msg.BIT_MATH_ROUND_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math07";
Blockly.Msg.WEBDUINO_MATH_SCALE = "尺度轉換，數值來源";
Blockly.Msg.WEBDUINO_MATH_SCALE_OMIN = "(原始) 最小值";
Blockly.Msg.WEBDUINO_MATH_SCALE_OMAX = "(原始) 最大值";
Blockly.Msg.WEBDUINO_MATH_SCALE_CMIN = "(轉換後) 最小值";
Blockly.Msg.WEBDUINO_MATH_SCALE_CMAX = "(轉換後) 最大值";
Blockly.Msg.BIT_MATH_SCALE = Blockly.Msg.TUTORIAL_URL + "basic/math.html#math08";

// Web:Bit - Text

Blockly.Msg.TEXT_TEXT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text01";
Blockly.Msg.TEXT_JOIN_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text12";
Blockly.Msg.TEXT_APPEND_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text03";
Blockly.Msg.TEXT_INDEXOF_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html";
Blockly.Msg.TEXT_CHARAT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html";
Blockly.Msg.TEXT_GET_SUBSTRING_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html";
Blockly.Msg.TEXT_CHANGECASE_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text08";
Blockly.Msg.TEXT_TRIM_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text09";
Blockly.Msg.TEXT_PROMPT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html";
Blockly.Msg.TEXT_LENGTH_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text11";
Blockly.Msg.TEXT_ISEMPTY_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html";
Blockly.Msg.TEXT_PRINT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html";
Blockly.Msg.BIT_TEXT_WRAP = "換行";
Blockly.Msg.BIT_TEXT_WRAP_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text02";
Blockly.Msg.BIT_TEXT_APPEND = "在字串";
Blockly.Msg.BIT_TEXT_APPEND_TO = "後方加入文字";
Blockly.Msg.BIT_TEXT_APPEND_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text03";
Blockly.Msg.BIT_TEXT_REPLACE = "把字串";
Blockly.Msg.BIT_TEXT_REPLACE_WHICH = "的";
Blockly.Msg.BIT_TEXT_REPLACE_FIRST = "第一個";
Blockly.Msg.BIT_TEXT_REPLACE_ALL = "全部";
Blockly.Msg.BIT_TEXT_REPLACE_TO = "取代為";
Blockly.Msg.BIT_TEXT_REPLACE_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text04";
Blockly.Msg.BIT_TEXT_INDEXOF = "在字串";
Blockly.Msg.BIT_TEXT_INDEXOF_FIND = "找出";
Blockly.Msg.BIT_TEXT_INDEXOF_FIRST = "第一個";
Blockly.Msg.BIT_TEXT_INDEXOF_LAST = "最後一個";
Blockly.Msg.BIT_TEXT_INDEXOF_STRING = "出現字串";
Blockly.Msg.BIT_TEXT_INDEXOF_POSITION = "的位置";
Blockly.Msg.BIT_TEXT_INDEXOF_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text05";
Blockly.Msg.BIT_TEXT_CHARAT = "取得字串";
Blockly.Msg.BIT_TEXT_CHARAT_NUM1 = "字元";
Blockly.Msg.BIT_TEXT_CHARAT_NUM2 = "個字元";
Blockly.Msg.BIT_TEXT_CHARAT_NUM = "第";
Blockly.Msg.BIT_TEXT_CHARAT_ENDNUM = "倒數第";
Blockly.Msg.BIT_TEXT_CHARAT_FIRST = "第一個";
Blockly.Msg.BIT_TEXT_CHARAT_LAST = "最後一個";
Blockly.Msg.BIT_TEXT_CHARAT_RANDOM = "隨機";
Blockly.Msg.BIT_TEXT_CHARAT_S = "的";
Blockly.Msg.BIT_TEXT_CHARAT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text06";
Blockly.Msg.BIT_TEXT_GETSTR = "取得字串";
Blockly.Msg.BIT_TEXT_GETSTR_FROM1 = "字元到";
Blockly.Msg.BIT_TEXT_GETSTR_FROM2 = "個字元到";
Blockly.Msg.BIT_TEXT_GETSTR_TO1 = "字元";
Blockly.Msg.BIT_TEXT_GETSTR_TO2 = "個字元";
Blockly.Msg.BIT_TEXT_GETSTR_S = "的";
Blockly.Msg.BIT_TEXT_GETSTR_NUM = "第";
Blockly.Msg.BIT_TEXT_GETSTR_ENDNUM = "倒數第";
Blockly.Msg.BIT_TEXT_GETSTR_FIRST = "第一個";
Blockly.Msg.BIT_TEXT_GETSTR_LAST = "最後一個";
Blockly.Msg.BIT_TEXT_GETSTR_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text07";
Blockly.Msg.NUMBER_CONVERT = "轉換為";
Blockly.Msg.NUMBER_BINARY = "二進位";
Blockly.Msg.NUMBER_OCTAL = "八進位";
Blockly.Msg.NUMBER_DECTIMAL = "十進位";
Blockly.Msg.NUMBER_HEX = "十六進位";
Blockly.Msg.NUMBER_STRING = "字串";
Blockly.Msg.NUMBER_CONVERT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text10";
Blockly.Msg.BIT_TEXT_LENGTH_STRING = "字串";
Blockly.Msg.BIT_TEXT_LENGTH = "的長度";
Blockly.Msg.BIT_TEXT_LENGTH_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/text.html#text11";

// Web:Bit - Array

Blockly.Msg.LISTS_CREATE_EMPTY_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html#array01";
Blockly.Msg.LISTS_CREATE_WITH_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html#array02";
Blockly.Msg.LISTS_REPEAT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html#array03";
Blockly.Msg.LISTS_LENGTH_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html";
Blockly.Msg.LISTS_ISEMPTY_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html";
Blockly.Msg.LISTS_INDEX_OF_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html";
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html";
Blockly.Msg.LISTS_SET_INDEX_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html";
Blockly.Msg.LISTS_GET_SUBLIST_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html";
Blockly.Msg.LISTS_SPLIT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html";
Blockly.Msg.BIT_ARRAY_SET = "自陣列";
Blockly.Msg.BIT_ARRAY_SET_NUM = "第";
Blockly.Msg.BIT_ARRAY_SET_ENDNUM = "倒數第";
Blockly.Msg.BIT_ARRAY_SET_FIRST = "第一個";
Blockly.Msg.BIT_ARRAY_SET_LAST = "最後一個";
Blockly.Msg.BIT_ARRAY_SET_RANDOM = "隨機";
Blockly.Msg.BIT_ARRAY_SET_NUMIS1 = "項目為";
Blockly.Msg.BIT_ARRAY_SET_NUM1 = "項目";
Blockly.Msg.BIT_ARRAY_SET_NUMIS2 = "個項目為";
Blockly.Msg.BIT_ARRAY_SET_NUM2 = "個項目";
Blockly.Msg.BIT_ARRAY_SET_SET = "設定";
Blockly.Msg.BIT_ARRAY_SET_INSERT = "插入";
Blockly.Msg.BIT_ARRAY_SET_REMOVE = "移除";
Blockly.Msg.BIT_ARRAY_SET_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html#array04";
Blockly.Msg.BIT_ARRAY_GET = "自陣列";
Blockly.Msg.BIT_ARRAY_GET_NUM1 = "項目";
Blockly.Msg.BIT_ARRAY_GET_NUM2 = "個項目";
Blockly.Msg.BIT_ARRAY_GET_NUM = "第";
Blockly.Msg.BIT_ARRAY_GET_ENDNUM = "倒數第";
Blockly.Msg.BIT_ARRAY_GET_FIRST = "第一個";
Blockly.Msg.BIT_ARRAY_GET_LAST = "最後一個";
Blockly.Msg.BIT_ARRAY_GET_RANDOM = "隨機";
Blockly.Msg.BIT_ARRAY_GET_GET = "取得";
Blockly.Msg.BIT_ARRAY_GET_GETANDREMOVE = "取得並移除";
Blockly.Msg.BIT_ARRAY_GET_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html#array05";
Blockly.Msg.BIT_ARRAY_INDEXOF = "自陣列";
Blockly.Msg.BIT_ARRAY_INDEXOF_FIND = "找出";
Blockly.Msg.BIT_ARRAY_INDEXOF_FIRST = "第一個";
Blockly.Msg.BIT_ARRAY_INDEXOF_LAST = "最後一個";
Blockly.Msg.BIT_ARRAY_INDEXOF_NUM = "項目出現";
Blockly.Msg.BIT_ARRAY_INDEXOF_POSITION = "的位置";
Blockly.Msg.BIT_ARRAY_INDEXOF_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html#array06";
Blockly.Msg.BIT_ARRAY_SORT = "自陣列";
Blockly.Msg.BIT_ARRAY_SORT_DEPEND = "按照";
Blockly.Msg.BIT_ARRAY_SORT_NUMERIC = "數字";
Blockly.Msg.BIT_ARRAY_SORT_TEXT = "字母";
Blockly.Msg.BIT_ARRAY_SORT_IGNORE_CASE = "字母 ( 忽略大小寫 )";
Blockly.Msg.BIT_ARRAY_SORT_DO = "進行";
Blockly.Msg.BIT_ARRAY_SORT_TYPE1 = "升序";
Blockly.Msg.BIT_ARRAY_SORT_TYPE2 = "降序";
Blockly.Msg.BIT_ARRAY_SORT_TYPE = "排列";
Blockly.Msg.BIT_ARRAY_SORT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html#array07";
Blockly.Msg.BIT_ARRAY_SPLIT = "在";
Blockly.Msg.BIT_ARRAY_SPLIT_USE = "用分隔符";
Blockly.Msg.BIT_ARRAY_SPLIT_SPLIT = "把文字拆成陣列";
Blockly.Msg.BIT_ARRAY_SPLIT_JOIN = "把陣列合併為文字";
Blockly.Msg.BIT_ARRAY_SPLIT_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html#array08";
Blockly.Msg.BIT_ARRAY_LENGTH = "陣列";
Blockly.Msg.BIT_ARRAY_LENGTH_LENGTH = "的長度";
Blockly.Msg.BIT_ARRAY_LENGTH_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/array.html#array09";

// Web:Bit - Color

Blockly.Msg.COLOUR_BLEND_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/color.html#color04";
Blockly.Msg.COLOUR_PICKER_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/color.html#color01";
Blockly.Msg.COLOUR_RANDOM_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/color.html#color02";
Blockly.Msg.COLOUR_RGB_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/color.html#color03";

// Web:Bit - Function

Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/function.html#function01";
Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/function.html#function02";
Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/function.html#function01";
Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/function.html#function02";
Blockly.Msg.PROCEDURES_IFRETURN_HELPURL = Blockly.Msg.TUTORIAL_URL + "basic/function.html#function03";

// Web:Bit - Monster

Blockly.Msg.MONSTER_GREEN = "綠色怪獸";
Blockly.Msg.MONSTER_RED = "紅色怪獸";
Blockly.Msg.MONSTER_YELLOW = "黃色怪獸";
Blockly.Msg.MONSTER_BLUE = "藍色怪獸";
Blockly.Msg.MONSTER_ALL = "所有怪獸";
Blockly.Msg.MONSTER_TALK = "說";
Blockly.Msg.MONSTER_DONT_TALK = "不說話";
Blockly.Msg.MONSTER_TALK_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster01";
Blockly.Msg.MONSTER_SHOWIMG = "展示圖片";
Blockly.Msg.MONSTER_SHOWIMG_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster02";
Blockly.Msg.MONSTER_EMOTION = "的情緒為";
Blockly.Msg.MONSTER_EMOTION_NORMAL = "正常";
Blockly.Msg.MONSTER_EMOTION_HAPPY = "開心";
Blockly.Msg.MONSTER_EMOTION_SUPRISED = "驚訝";
Blockly.Msg.MONSTER_EMOTION_SAD = "難過";
Blockly.Msg.MONSTER_EMOTION_ANGRY = "生氣";
Blockly.Msg.MONSTER_EMOTION_RANDOM = "隨機";
Blockly.Msg.MONSTER_EMOTION_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster03";
Blockly.Msg.MONSTER_MOVE_TO = "往";
Blockly.Msg.MONSTER_MOVE_TOP = "上";
Blockly.Msg.MONSTER_MOVE_BOTTOM = "下";
Blockly.Msg.MONSTER_MOVE_LEFT = "左";
Blockly.Msg.MONSTER_MOVE_RIGHT = "右";
Blockly.Msg.MONSTER_MOVE_RANDOM = "隨機位置";
Blockly.Msg.MONSTER_MOVE_MOUSE = "滑鼠位置";
Blockly.Msg.MONSTER_MOVE = "移動";
Blockly.Msg.MONSTER_MOVE_PIXEL = "點";
Blockly.Msg.MONSTER_MOVE_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster04";
Blockly.Msg.MONSTER_MOVETO_X = "定位到 x";
Blockly.Msg.MONSTER_MOVETO_Y = "y";
Blockly.Msg.MONSTER_MOVETO_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster05";
Blockly.Msg.MONSTER_ROTATE_LEFT = "左轉";
Blockly.Msg.MONSTER_ROTATE_RIGHT = "右轉";
Blockly.Msg.MONSTER_ROTATE_ANGLE = "度";
Blockly.Msg.MONSTER_ROTATE_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster06";
Blockly.Msg.MONSTER_FACETO = "面朝";
Blockly.Msg.MONSTER_FACETO_ANGLE = "度";
Blockly.Msg.MONSTER_FACETO_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster07";
Blockly.Msg.MONSTER_FACE_MOUSE_AUTO = "自動";
Blockly.Msg.MONSTER_FACE_MOUSE_STOP = "停止";
Blockly.Msg.MONSTER_FACE_MOUSE = "面朝滑鼠方向";
Blockly.Msg.MONSTER_FACE_MOUSE_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster08";
Blockly.Msg.MONSTER_STATE_S = "的";
Blockly.Msg.MONSTER_STATE_X = "x 座標";
Blockly.Msg.MONSTER_STATE_Y = "y 座標";
Blockly.Msg.MONSTER_STATE_ANGLE = "旋轉角度";
Blockly.Msg.MONSTER_STATE_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster09";
Blockly.Msg.MONSTER_SIZE = "的尺寸";
Blockly.Msg.MONSTER_SIZE_BIG = "變大";
Blockly.Msg.MONSTER_SIZE_SMALL = "變小";
Blockly.Msg.MONSTER_SIZE_PIXEL = "點";
Blockly.Msg.MONSTER_SIZE_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster10";
Blockly.Msg.MONSTER_SIZETO = "的尺寸設定為";
Blockly.Msg.MONSTER_SIZETO_PERCENT = "%";
Blockly.Msg.MONSTER_SIZETO_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster11";
Blockly.Msg.MONSTER_DISPLAY = "在舞台畫面中";
Blockly.Msg.MONSTER_DISPLAY_HIDE = "隱藏";
Blockly.Msg.MONSTER_DISPLAY_SHOW = "顯示";
Blockly.Msg.MONSTER_DISPLAY_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster12";
Blockly.Msg.MONSTER_ZINDEX = "的階層移到";
Blockly.Msg.MONSTER_ZINDEX_TOP = "最上層";
Blockly.Msg.MONSTER_ZINDEX_BOTTOM = "最下層";
Blockly.Msg.MONSTER_ZINDEX_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster14";
Blockly.Msg.MONSTER_RESET = "回到原始狀態";
Blockly.Msg.MONSTER_RESET_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/basic.html#monster13";
Blockly.Msg.MONSTER_CLICK = "當滑鼠點擊";
Blockly.Msg.MONSTER_CLICK_DO = "執行";
Blockly.Msg.MONSTER_CLICK_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/event.html#event01";
Blockly.Msg.MONSTER_HOVER = "當滑鼠接觸";
Blockly.Msg.MONSTER_HOVER_ENTER = "碰到時，執行";
Blockly.Msg.MONSTER_HOVER_LEAVE = "離開時，執行";
Blockly.Msg.MONSTER_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/event.html#event02";
Blockly.Msg.MONSTER_COLLISION_WHEN = "當";
Blockly.Msg.MONSTER_COLLISION = "碰到";
Blockly.Msg.MONSTER_COLLISION_DO = "執行";
Blockly.Msg.MONSTER_COLLISION_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/event.html#event03";
Blockly.Msg.MONSTER_STAGE_WHEN = "當";
Blockly.Msg.MONSTER_STAGE = "碰到舞台畫面的";
Blockly.Msg.MONSTER_STAGE_EDGE = "四個邊緣";
Blockly.Msg.MONSTER_STAGE_TOP_BOTTOM = "上面 或 下面";
Blockly.Msg.MONSTER_STAGE_LEFT_RIGHT = "左邊 或 右邊";
Blockly.Msg.MONSTER_STAGE_TOP = "上面";
Blockly.Msg.MONSTER_STAGE_BOTTOM = "下面";
Blockly.Msg.MONSTER_STAGE_LEFT = "左邊";
Blockly.Msg.MONSTER_STAGE_RIGHT = "右邊";
Blockly.Msg.MONSTER_STAGE_DO = "執行";
Blockly.Msg.MONSTER_STAGE_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/event.html#event04";
Blockly.Msg.MONSTER_STAGE_REBOUND = "碰到舞台邊緣就反彈";
Blockly.Msg.MONSTER_STAGE_REBOUND_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/event.html#event05";
Blockly.Msg.MONSTER_BACKGROUND_COLOR = "更換怪獸舞台背景顏色為";
Blockly.Msg.MONSTER_BACKGROUND_COLOR_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/event.html#event06";
Blockly.Msg.MONSTER_BACKGROUND_IMG = "更換怪獸舞台背景圖片為";
Blockly.Msg.MONSTER_BACKGROUND_IMG_HELPURL = Blockly.Msg.MONSTER_BACKGROUND_COLOR_HELPURL;
Blockly.Msg.MONSTER_STAGE_MAX = "設定怪獸舞台為全螢幕";
Blockly.Msg.MONSTER_STAGE_MAX_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/event.html#event07";
Blockly.Msg.MONSTER_STAGE_SIZE = "怪獸舞台的";
Blockly.Msg.MONSTER_STAGE_SIZE_WIDTH = "寬度";
Blockly.Msg.MONSTER_STAGE_SIZE_HEIGHT = "高度";
Blockly.Msg.MONSTER_STAGE_SIZE_HELPURL = Blockly.Msg.TUTORIAL_URL + "monster/event.html#event08";

// Web:Bit - Detect

Blockly.Msg.BIT_KEYCODE = "當鍵盤";
Blockly.Msg.BIT_KEYCODE_KEYDOWN = "按下";
Blockly.Msg.BIT_KEYCODE_KEYUP = "放開";
Blockly.Msg.BIT_KEYCODE_SPACE = "空白鍵";
Blockly.Msg.BIT_KEYCODE_UP = "上 ▲";
Blockly.Msg.BIT_KEYCODE_DOWN = "下 ▼";
Blockly.Msg.BIT_KEYCODE_LEFT = "左 ◀";
Blockly.Msg.BIT_KEYCODE_RIGHT = "右 ▶";
Blockly.Msg.BIT_KEYCODE_DO = "執行";
Blockly.Msg.BIT_KEYCODE_HELPURL = Blockly.Msg.TUTORIAL_URL + "detect/keyboard.html";
Blockly.Msg.BIT_TIME_HELPURL = Blockly.Msg.TUTORIAL_URL + "detect/time.html";
Blockly.Msg.BIT_DATE_HELPURL = Blockly.Msg.BIT_TIME_HELPURL;
Blockly.Msg.BIT_INPUT = "在對話框輸入文字";
Blockly.Msg.BIT_INPUT_COMMENT = "輸入文字之後，才會繼續執行下方程式";
Blockly.Msg.BIT_INPUT_VAL = "輸入的文字";
Blockly.Msg.BIT_INPUT_HELPURL= Blockly.Msg.TUTORIAL_URL + "detect/input.html";

// Web:Bit - Sound

Blockly.Msg.SOUND_01_CAT = "貓";
Blockly.Msg.SOUND_01_DOG = "狗";
Blockly.Msg.SOUND_01_LION = "獅子";
Blockly.Msg.SOUND_01_GOAT = "山羊";
Blockly.Msg.SOUND_01_ELEPHANT = "大象";
Blockly.Msg.SOUND_01_CHICKEN = "公雞";
Blockly.Msg.SOUND_01_CHICK = "小雞";
Blockly.Msg.SOUND_01_DUCK = "鴨子";
Blockly.Msg.SOUND_01_CROW = "烏鴉";
Blockly.Msg.SOUND_01_MONKEY = "猴子";
Blockly.Msg.SOUND_01_FROG = "青蛙";
Blockly.Msg.SOUND_01_MOUSE = "老鼠";
Blockly.Msg.SOUND_01_PIG = "豬";
Blockly.Msg.SOUND_01_RANDOM = "隨機";
Blockly.Msg.SOUND_01 = "播放動物音效";

Blockly.Msg.SOUND_02_01 = "答對了";
Blockly.Msg.SOUND_02_02 = "清脆的咚";
Blockly.Msg.SOUND_02_03 = "清脆的嗶";
Blockly.Msg.SOUND_02_04 = "電子的嘟聲";
Blockly.Msg.SOUND_02_05 = "擊打聲";
Blockly.Msg.SOUND_02_06 = "鏘的一聲";
Blockly.Msg.SOUND_02_07 = "雷射光";
Blockly.Msg.SOUND_02_08 = "門鈴的叮咚";
Blockly.Msg.SOUND_02_09 = "骰子聲";
Blockly.Msg.SOUND_02_10 = "水中泡泡";
Blockly.Msg.SOUND_02_11 = "汽車喇叭";
Blockly.Msg.SOUND_02_12 = "吃金幣";
Blockly.Msg.SOUND_02_13 = "彈跳";
Blockly.Msg.SOUND_02_14 = "陣亡了";
Blockly.Msg.SOUND_02_15 = "腳踏車鈴鐺";
Blockly.Msg.SOUND_02_RANDOM = Blockly.Msg.SOUND_01_RANDOM;
Blockly.Msg.SOUND_02 = "播放特殊音效";

Blockly.Msg.SOUND_03_01 = "打噴嚏";
Blockly.Msg.SOUND_03_02 = "笑聲";
Blockly.Msg.SOUND_03_03 = "咳嗽";
Blockly.Msg.SOUND_03_04 = "親吻";
Blockly.Msg.SOUND_03_05 = "鼓掌";
Blockly.Msg.SOUND_03_06 = "哭聲";
Blockly.Msg.SOUND_03_07 = "打嗝";
Blockly.Msg.SOUND_03_08 = "放屁";
Blockly.Msg.SOUND_03_09 = "吹口哨";
Blockly.Msg.SOUND_03_10 = "鼾聲";
Blockly.Msg.SOUND_03_11 = "嘆氣";
Blockly.Msg.SOUND_03_12 = "嚇一跳";
Blockly.Msg.SOUND_03_RANDOM = Blockly.Msg.SOUND_01_RANDOM;
Blockly.Msg.SOUND_03 = "播放人聲音效";

Blockly.Msg.SOUND_HELPURL = Blockly.Msg.TUTORIAL_URL + "sound/sound-effect.html";

Blockly.Msg.BIT_SPEAK_TEXT = "朗讀文字";
Blockly.Msg.BIT_SPEAK_SETTING = "參數設定";
Blockly.Msg.BIT_SPEAK_TOOLTIPS = "朗讀結束後，才會繼續執行下方程式";
Blockly.Msg.BIT_SPEAK_HELPURL = Blockly.Msg.TUTORIAL_URL + "sound/speak-aloud.html";
Blockly.Msg.BIT_SPEAK_SETTING_LANG = "語言";
Blockly.Msg.BIT_SPEAK_SETTING_ZHTW = "中文";
Blockly.Msg.BIT_SPEAK_SETTING_EN = "英文";
Blockly.Msg.BIT_SPEAK_SETTING_JP = "日文";
Blockly.Msg.BIT_SPEAK_SETTING_T = " 音調";
Blockly.Msg.BIT_SPEAK_SETTING_T2 = "尖銳";
Blockly.Msg.BIT_SPEAK_SETTING_T15 = "高昂";
Blockly.Msg.BIT_SPEAK_SETTING_T1 = "正常";
Blockly.Msg.BIT_SPEAK_SETTING_T05 = "低沈";
Blockly.Msg.BIT_SPEAK_SETTING_T01 = "沙啞";
Blockly.Msg.BIT_SPEAK_SETTING_S = " 速度";
Blockly.Msg.BIT_SPEAK_SETTING_S2 = "很快";
Blockly.Msg.BIT_SPEAK_SETTING_S15 = "快";
Blockly.Msg.BIT_SPEAK_SETTING_S1 = "正常";
Blockly.Msg.BIT_SPEAK_SETTING_S07 = "慢";
Blockly.Msg.BIT_SPEAK_SETTING_S05 = "很慢";
Blockly.Msg.BIT_SPEAK_SETTING_HELPURL = Blockly.Msg.BIT_SPEAK_HELPURL;

Blockly.Msg.SPEECH = "語音辨識，語言";
Blockly.Msg.SPEECH_TW = "中文";
Blockly.Msg.SPEECH_EN = "英文";
Blockly.Msg.SPEECH_SUPPORT = " ( 僅支援 Chrome、Android )";
Blockly.Msg.SPEECH_COMMENT = "語音辨識之後，才會繼續執行下方程式";
Blockly.Msg.SPEECH_VAL = "語音辨識的文字";
Blockly.Msg.SPEECH_HELPURL = Blockly.Msg.TUTORIAL_URL + "sound/speech-recognition.html";

// Web:Bit - Board

Blockly.Msg.BIT_BOARD_USE = "使用";
Blockly.Msg.BIT_BOARD_DO = "執行";
Blockly.Msg.BIT_BOARD_BIT = "模擬器";
Blockly.Msg.BIT_BOARD_USB = "USB";
Blockly.Msg.BIT_BOARD_WIFI = "Wi-Fi";
Blockly.Msg.BIT_BOARD_CONTROL = "控制";
Blockly.Msg.BIT_BOARD_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/board.html";

// Web:Bit - I/O Pin

Blockly.Msg.WEBDUINO_PIN_READ = "讀取腳位";
Blockly.Msg.WEBDUINO_PIN_ANALOG_WRITE = "類比輸出 ( PWM ) 至腳位";
Blockly.Msg.WEBDUINO_PIN_DIGITAL_WRITE = "數位輸出至腳位";
Blockly.Msg.WEBDUINO_PIN_VALUE = "數值";
Blockly.Msg.WEBDUINO_PIN_DIN = "數位輸入";
Blockly.Msg.WEBDUINO_PIN_AIN = "類比輸入";
Blockly.Msg.WEBDUINO_PIN_READ_DIGITAL_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/io-pin.html#pin01";
Blockly.Msg.WEBDUINO_PIN_READ_ANALOG_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/io-pin.html#pin02";
Blockly.Msg.WEBDUINO_PIN_WRITE_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/io-pin.html#pin03";

// Web:Bit - Matrix

Blockly.Msg.BIT_MATRIX_COLOR = "矩陣 LED 燈光為";
Blockly.Msg.BIT_MATRIX_COLOR_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/rgbled-matrix.html#rgbledmatrix01";
Blockly.Msg.BIT_MATRIX_COLOR_ARRAY = "繪製圖案";
Blockly.Msg.BIT_MATRIX_COLOR_ARRAY_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/rgbled-matrix.html#rgbledmatrix02";
Blockly.Msg.BIT_MATRIX_EMOJI_HAPPY = "笑臉";
Blockly.Msg.BIT_MATRIX_EMOJI_CRY = "哭臉";
Blockly.Msg.BIT_MATRIX_EMOJI_01 = "剪刀";
Blockly.Msg.BIT_MATRIX_EMOJI_02 = "石頭";
Blockly.Msg.BIT_MATRIX_EMOJI_03 = "布";
Blockly.Msg.BIT_MATRIX_EMOJI_RANDOM = "隨機";
Blockly.Msg.BIT_MATRIX_EMOJI = "圖案";
Blockly.Msg.BIT_MATRIX_EMOJI_COLOR = "燈光顏色";
Blockly.Msg.BIT_MATRIX_EMOJI_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/rgbled-matrix.html#rgbledmatrix03";
Blockly.Msg.BIT_MATRIX_CHARACTER = "矩陣 LED 顯示一個字";
Blockly.Msg.BIT_MATRIX_CHARACTER_COLOR = "燈光顏色";
Blockly.Msg.BIT_MATRIX_CHARACTER_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/rgbled-matrix.html#rgbledmatrix04";
Blockly.Msg.BIT_MATRIX_STRING = "矩陣 LED 跑馬燈";
Blockly.Msg.BIT_MATRIX_STRING_COLOR = "燈光顏色";
Blockly.Msg.BIT_MATRIX_STRING_PLAY = "播放";
Blockly.Msg.BIT_MATRIX_STRING_ONCE = "一次";
Blockly.Msg.BIT_MATRIX_STRING_UNLIMITED = "無限次";
Blockly.Msg.BIT_MATRIX_STRING_SPEED = ' 速度';
Blockly.Msg.BIT_MATRIX_STRING_FAST = "快";
Blockly.Msg.BIT_MATRIX_STRING_NORMAL = "中";
Blockly.Msg.BIT_MATRIX_STRING_SLOW = "慢";
Blockly.Msg.BIT_MATRIX_STRING_COMMENT = "若選擇一次，在跑馬燈結束後才會繼續執行下方程式"
Blockly.Msg.BIT_MATRIX_STRING_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/rgbled-matrix.html#rgbledmatrix05";
Blockly.Msg.BIT_MATRIX_SINGLE = "矩陣 LED 第";
Blockly.Msg.BIT_MATRIX_SINGLE_NUM = "顆的燈光顏色";
Blockly.Msg.BIT_MATRIX_SINGLE_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/rgbled-matrix.html#rgbledmatrix07";
Blockly.Msg.BIT_MATRIX_XY = "矩陣 LED";
Blockly.Msg.BIT_MATRIX_XY_X = "x";
Blockly.Msg.BIT_MATRIX_XY_Y = "y";
Blockly.Msg.BIT_MATRIX_XY_COLOR = "燈光顏色";
Blockly.Msg.BIT_MATRIX_XY_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/rgbled-matrix.html#rgbledmatrix08";
Blockly.Msg.BIT_MATRIX_BRIGHTNESS = "矩陣 LED 的亮度為 (0~20)";
Blockly.Msg.BIT_MATRIX_BRIGHTNESS_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/rgbled-matrix.html#rgbledmatrix09";
Blockly.Msg.BIT_MATRIX_OFF = "關閉矩陣 LED ( 關燈 )";
Blockly.Msg.BIT_MATRIX_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/rgbled-matrix.html#rgbledmatrix10";

// Web:Bit - Button

Blockly.Msg.BIT_AB_BUTTON = "當按鈕開關";
Blockly.Msg.BIT_AB_BUTTON_A = "A";
Blockly.Msg.BIT_AB_BUTTON_B = "B";
Blockly.Msg.BIT_AB_BUTTON_AB = "A+B";
Blockly.Msg.BIT_AB_BUTTON_S = "被";
Blockly.Msg.BIT_AB_BUTTON_PRESSED = "按下";
Blockly.Msg.BIT_AB_BUTTON_RELEASE = "放開";
Blockly.Msg.BIT_AB_BUTTON_LONGPRESS = "長按";
Blockly.Msg.BIT_AB_BUTTON_DO = "執行";
Blockly.Msg.BIT_AB_BUTTON_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/ab-button.html";

// Web:Bit - Detected

Blockly.Msg.BIT_DETECTED = "偵測光線＆溫度 ( 重複無限次 )";
Blockly.Msg.BIT_DETECTED_DO = "執行";
Blockly.Msg.BIT_DETECTED_PHOTOCELL = "亮度";
Blockly.Msg.BIT_DETECTED_PHOTOCELL_LEFT = "左上";
Blockly.Msg.BIT_DETECTED_PHOTOCELL_RIGHT = "右上";
Blockly.Msg.BIT_DETECTED_PHOTOCELL_VAL = "的數值 ( 流明 )";
Blockly.Msg.BIT_DETECTED_PHOTOCELL_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/photocell-thermistor.html#pt01";
Blockly.Msg.BIT_DETECTED_TEMP = "溫度的數值 ( 度 C )";
Blockly.Msg.BIT_DETECTED_TEMP_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/photocell-thermistor.html#pt02";

// Web:Bit - Buzzer

Blockly.Msg.BIT_BUZZER_4 = "低音";
Blockly.Msg.BIT_BUZZER_5 = "中音";
Blockly.Msg.BIT_BUZZER_6 = "高音";
Blockly.Msg.BIT_BUZZER_PLAY = "演奏 音階";
Blockly.Msg.BIT_BUZZER_PLAY_CONTINUE = "持續";
Blockly.Msg.BIT_BUZZER_TEMPO = "拍";
Blockly.Msg.BIT_BUZZER_MUTE = "休止符";
Blockly.Msg.BIT_BUZZER_PLAY_MUTE = "演奏 休息";
Blockly.Msg.BIT_BUZZER_PLAY_MUSIC = "演奏 音樂";
Blockly.Msg.BIT_BUZZER_PLAY_MUSIC_M1 = "超級瑪琍";
Blockly.Msg.BIT_BUZZER_PLAY_MUSIC_M2 = "超級瑪琍和弦";
Blockly.Msg.BIT_BUZZER_PLAY_MUSIC_M3 = "真善美";
Blockly.Msg.BIT_BUZZER_PLAY_MUSIC_M4 = "哥哥爸爸真偉大";
Blockly.Msg.BIT_BUZZER_PLAY_MUSIC_M5 = "叮叮噹";
Blockly.Msg.BIT_BUZZER_PLAY_EVENT_STOP = '停止';
Blockly.Msg.BIT_BUZZER_PLAY_EVENT_PAUSE = '暫停';
Blockly.Msg.BIT_BUZZER_PLAY_EVENT_PLAY = '繼續';
Blockly.Msg.BIT_BUZZER_PLAY_EVENT = '演奏';
Blockly.Msg.BIT_BUZZER_PLAY_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/buzzer.html#buzzer01";
Blockly.Msg.BIT_BUZZER_PLAY_MUTE_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/buzzer.html#buzzer02";
Blockly.Msg.BIT_BUZZER_PLAY_MUSIC_HELPURL =  Blockly.Msg.TUTORIAL_URL + "board/buzzer.html#buzzer03";
Blockly.Msg.BIT_BUZZER_PLAY_EVENT_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/buzzer.html#buzzer04";

// Web:Bit - MPU9250

Blockly.Msg.BIT_MPU9250_ICON = "bit-mpu9250-icon zh-hant";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_SHAKE = "晃動";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_UP = "正面朝上";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_ROLLBACK = "向後翻轉";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_ROLLRIGHT = "向右翻轉";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_TURNRIGHT = "向右旋轉";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_PEACE = "靜止不動";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_BACK = "背面朝上";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_ROLLFRONT = "向前翻轉";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_ROLLLEFT = "向左翻轉";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_TRUNLEFT = "向左旋轉";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_NORTH = "指向北方";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_WEST = "指向西方";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_SOUTH = "指向南方";
Blockly.Msg.BIT_MPU9250_TYPE_TITLE_EAST = "指向東方";
Blockly.Msg.BIT_MPU9250_IF = "如果開發板";
Blockly.Msg.BIT_MPU9250_DO = "執行";
Blockly.Msg.BIT_MPU9250_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/mpu9250.html#mpu01";
Blockly.Msg.BIT_MPU9250_COMMENT = "獨立使用，不需放在迴圈積木內";
Blockly.Msg.BIT_MPU9250_VAL_ROLL = "roll ( 前後翻轉 ↕ )";
Blockly.Msg.BIT_MPU9250_VAL_PITCH = "pitch ( 左右翻轉 ↔ )";
Blockly.Msg.BIT_MPU9250_VAL_YAW = "yaw ( 水平旋轉 ↻ )";
Blockly.Msg.BIT_MPU9250_VAL_AZI = "方位角 ( 電子羅盤 ➹ )";
Blockly.Msg.BIT_MPU9250_VAL_ACCX = "x ( 加速度計 )";
Blockly.Msg.BIT_MPU9250_VAL_ACCY = "y ( 加速度計 )";
Blockly.Msg.BIT_MPU9250_VAL_ACCZ = "z ( 加速度計 )";
Blockly.Msg.BIT_MPU9250_VAL_GYRX = "x ( 陀螺儀 )";
Blockly.Msg.BIT_MPU9250_VAL_GYRY = "y ( 陀螺儀 )";
Blockly.Msg.BIT_MPU9250_VAL_GYRZ = "z ( 陀螺儀 )";
Blockly.Msg.BIT_MPU9250_VAL_MAGX = "x ( 磁力計 )";
Blockly.Msg.BIT_MPU9250_VAL_MAGY = "y ( 磁力計 )";
Blockly.Msg.BIT_MPU9250_VAL_MAGZ = "z ( 磁力計 )";
Blockly.Msg.BIT_MPU9250_VAL = "的數值";
Blockly.Msg.BIT_MPU9250_VAL_HELPURL = Blockly.Msg.TUTORIAL_URL + "board/mpu9250.html#mpu02";

// Web:Bit MQTT Server

Blockly.Msg.BIT_MQTT_SERVER = "";
