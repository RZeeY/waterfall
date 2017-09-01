window.onload = function () {
	function compute () {
	    var oMainBody = document.getElementsByClassName('main-body')[0];
	    var oCardWrap = document.getElementsByClassName('card-wrap');
	    var oMainBodyCenter = document.getElementsByClassName('main-body-center')[0];
	    var cardWidth = oCardWrap[0].offsetWidth;   //每个卡片的宽度
	    var mainBodyWidth = oMainBody.offsetWidth;  //main-body的宽度
	    var cols = Math.floor(mainBodyWidth / (cardWidth+20));   //可以放下的列数
	    var sigEmptyWid =  20;  //左边距
	    var sigEmptyHgt =  20;  //上边距
	    var cardHeight = [];    //存放当前元素，当前列的高度

	    oMainBodyCenter.style.width = cardWidth*cols + sigEmptyWid*(cols+1) + 'px';  //计算.main-body-center的宽度，用于居中列表

	    for(var j = 0; j < cols; j++){
	        cardHeight.push(0); //初始化数组
	    }

	    for(var i = 0; i < oCardWrap.length; i++) {
	        var rowNum = Math.floor(i/cols);    //当前元素的行数,第一行为0
	        var colNum = i - rowNum * cols;     //当前元素的列数，第一列为0

	        if(rowNum > 0)
	            cardHeight[colNum] = cardHeight[colNum] + oCardWrap[i-cols].offsetHeight;

	        oCardWrap[i].style.top = sigEmptyHgt*(rowNum+1) + cardHeight[colNum] + 'px';    //每个卡片top的值等于 上边距*有上边距的数量+向上数所有卡片的高度和
	        oCardWrap[i].style.left = sigEmptyWid*(colNum+1) + cardWidth*colNum + 'px';     //每个卡片left的值等于 左边距*有左边距的数量+向左数所有卡片的宽度和
	    }
	}

	compute ();

	var index = 1;
	document.getElementById('btn').onclick = function() {
	    var str = `<div class="card-wrap" style="margin: auto; top:0; left: 0;">
	                <img src="img/timg${index > 8 ? index=1 : index}.jpg" alt="">
	                </div>`;
	    var center = document.getElementsByClassName('main-body-center')[0];
	    center.innerHTML += str;
	    index++;
	    compute ();
	}

	window.onresize = function(){
	    compute ();
	}

}
