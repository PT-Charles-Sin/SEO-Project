function arraySortedOrNot(e,t){return 1==t||0==t||!(e[t-1]<e[t-2])&&arraySortedOrNot(e,t-1)}function nextStep(e,t){document.getElementById(e).classList.remove("active"),document.getElementById(t).classList.add("active")}function prevStep(e,t){document.getElementById(e).classList.remove("active"),document.getElementById(t).classList.add("active")}function closeToast(e){$("#"+e).removeClass("show")}function openToast(e){$("#toast").find(".toast-msg > p").text(e),$("#toast").addClass("show")}function thirdSectionChecking(){var t=document.getElementById("poker-card-dropable").querySelectorAll(".drag[data-index]"),o=[];for(let e=0;e<t.length;e++)o.push(parseInt(t[e].getAttribute("data-index")));arraySortedOrNot(o,o.length)?nextStep("third","fourth"):openToast("哦歐！排序錯誤，請再調整順序")}function DroppableInit(){$(".droppable, .droppable-area1, .droppable-area2, .droppable-area3, .droppable-area4, .droppable-area5").sortable({connectWith:".connected-sortable",stack:".connected-sortable ul"}).disableSelection()}function fifthSectionChecking(){20<parseInt($("#job-size").text())?openToast("超過20點，請再調整清單"):parseInt($("#job-size").text())<=0?openToast("尚未置入任何項目，請置入項目"):nextStep("fifth","sixth")}function seventhSectionChecking(){console.log("seventhSectionChecking()");var e=$(".small-box-dash"),t=$(e[0]).children().length,o=$(e[1]).children().length,a=$(e[0]).children()?.attr("data-color")||!1,e=$(e[1]).children()?.attr("data-color")||!1,a=0<t&&"yellow"!==a,e=0<o&&"green"!==e;0==t||0==o?openToast("尚未置入任何項目，請置入項目"):a&&e?openToast("置入錯誤，請重新置入"):nextStep("seventh","eighth")}function selectedChecking(...e){var[e,t]=e,e=document.querySelector(`[name=${e}]:checked`)?.value||"havent select",t=document.querySelector(`[name=${t}]:checked`)?.value||"havent select";"havent select"==e&&"havent select"==t?openToast("尚未選擇，請選擇適合的答案"):"true"==e&&"true"==t?nextStep("eighth","ninth"):openToast("選擇錯誤，請再思考一下")}$(document).ready(function(){DroppableInit(),$(".fifth-box").draggable({scope:"demoBox",revertDuration:100,start:function(e,t){$(".box").draggable("option","revert",!0)}}),$(".fifth-drag-area").droppable({scope:"demoBox",drop:function(e,t){$(this).find(".area").html(),$(t.draggable).html();$(".box").draggable("option","revert",!1),$(t.draggable).detach().css({top:0,left:0}).appendTo(this);var o=$(".fifth .content").find("img[data-value]");let a=0;for(let e=0;e<o.length;e++)a+=parseInt($(o[e]).attr("data-value"));20<a?($("#job-size").text(a),$("#job-size").css("color","#9C0700")):($("#job-size").text(a),$("#job-size").css("color","#ffffff"))}}),$(".seventh-box").draggable({scope:"demoBox",revertDuration:100,start:function(e,t){$(".box").draggable("option","revert",!0)}}),$(".seventh-drag-area").droppable({scope:"demoBox",drop:function(e,t){$(this).find(".area").html(),$(t.draggable).html();$(".box").draggable("option","revert",!1),$(t.draggable).detach().css({top:0,left:0}).appendTo(this)}})});